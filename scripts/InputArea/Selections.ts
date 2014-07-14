module GhostText.InputArea {
    /**
     * GhostText input area selections class.
     * Defines a set of selections.
     *
     * @licence The MIT License (MIT)
     * @author Guido Krömer <mail 64 cacodaemon 46 de>
     */
    export class Selections {
        private selections: Array<Selection>;

        /**
         * Creates an new selection instance.
         *
         * @param selections A set of selections.
         */
        public constructor(selections: Array<Selection> = []) {
            this.selections = selections;
        }

        /**
         * Adds a new selection to the selections set.
         *
         * @param selection
         */
        public add(selection: Selection) {
            this.selections.push(selection);
        }

        /**
         * Gets all selections this set contains.
         *
         * @return {Array<Selection>}
         */
        public getAll(): Array<Selection> {
            return this.selections;
        }

        /**
         * Gets the min and max cursor position calculated from the selections set.
         * Useful for elements only supporting a single selection like a text area.
         *
         * @return {Selection}
         */
        public getMinMaxSelection (): Selection {
            var minMaxSelection = new Selection(Number.MAX_VALUE, Number.MIN_VALUE);

            for (var i = this.selections.length - 1; i >= 0; i--) {
                minMaxSelection.start = Math.min(minMaxSelection.start, this.selections[i].start);
                minMaxSelection.end   = Math.max(minMaxSelection.end, this.selections[i].end);
            }

            return minMaxSelection;
        }
    }
}