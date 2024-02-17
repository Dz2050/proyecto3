
class SearchView {
    _parentEl = document.querySelector('.search');

    getQuery() {
        this.clearinput();
        const query = this._parentEl.querySelector('.search__field').value;
        return query;
    }

    addHandlerSearch(handler) {
        this._parentEl.addEventListener('submit', function (event) {
            event.preventDefault();
            handler();
        });
    }

    clearinput() {
        this._parentEl.querySelector('.search__field').value = '';
    }
}

export default new SearchView();
