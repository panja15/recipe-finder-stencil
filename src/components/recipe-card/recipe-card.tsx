import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'recipe-card',
  styleUrl: 'recipe-card.css',
  shadow: true,
})
export class RecipeCard {
  @Prop() recipeId: string = '';
  @Prop() name: string = '';
  @Prop() image: string = '';
  @Prop() category: string = '';
  @Prop() isFavorite: boolean = false;

  @Event() favoriteToggle: EventEmitter<string>;

  render() {
    return (
      <article>
        <div class="image-container">
          <img src={this.image} alt={this.name} />

          <button onClick={() => this.favoriteToggle.emit(this.recipeId)}>{this.isFavorite ? '❤️' : '♡'}</button>
        </div>

        <div>
          <h2>{this.name}</h2>

          <p>{this.category}</p>

          <slot name="footer"></slot>
        </div>
      </article>
    );
  }
}
