import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'meal-day-card',
  styleUrl: 'meal-day-card.css',
  shadow: true,
})
export class MealDayCard {
  @Prop() day: string = '';

  @Prop() recipeName: string = '';

  @Prop() recipeImage: string = '';

  @Event()
  mealAdd: EventEmitter<void>;

  @Event()
  mealRemove: EventEmitter<void>;

  @Event()
  mealChange: EventEmitter<void>;

  render() {
    const hasMeal = Boolean(this.recipeName);

    return (
      <article>
        <h2>{this.day}</h2>

        {hasMeal ? (
          <div class="meal">
            <img src={this.recipeImage} alt={this.recipeName} />

            <h3>{this.recipeName}</h3>

            <div class="actions">
              <button onClick={() => this.mealChange.emit()}>Change</button>

              <button onClick={() => this.mealRemove.emit()}>Remove</button>
            </div>
          </div>
        ) : (
          <div class="empty">
            <p>No meal planned.</p>

            <button onClick={() => this.mealAdd.emit()}>+ Add Meal</button>
          </div>
        )}
      </article>
    );
  }
}
