import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'favorite-button',
  styleUrl: 'favorite-button.css',
  shadow: true,
})
export class FavoriteButton {
  @Prop() recipeId: string = '';

  @Prop() isFavorite: boolean = false;

  @Event()
  favoriteToggle: EventEmitter<string>;

  render() {
    return (
      <button onClick={() => this.favoriteToggle.emit(this.recipeId)} aria-label={this.isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
        {this.isFavorite ? '❤️' : '♡'}
      </button>
    );
  }
}
