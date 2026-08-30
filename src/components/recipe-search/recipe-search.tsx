import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'recipe-search',
  styleUrl: 'recipe-search.css',
  shadow: true,
})
export class RecipeSearch {
  @Prop() placeholder: string = 'Search recipes...';

  @Event()
  search: EventEmitter<string>;

  private input?: HTMLInputElement;

  private handleSearch = () => {
    const value = this.input?.value.trim() ?? '';

    if (!value) {
      return;
    }

    this.search.emit(value);
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  render() {
    return (
      <div class="search">
        <input ref={element => (this.input = element)} type="search" placeholder={this.placeholder} onKeyDown={this.handleKeyDown} />

        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}
