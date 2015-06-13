import _ from 'lodash';
import vow from 'vow';
import builderCore from 'bs-builder-core';

export default class PageMenu extends builderCore.tasks.Base {

    static getLoggerName() {
        return module;
    }

    /**
     * Return task human readable description
     * @returns {string}
     */
    static getName() {
        return 'create page menu';
    }

    /**
     * Performs task
     * @returns {Promise}
     */
    run(model) {
        this.beforeRun();

        return Promise.resolve(model);
    }
}




