import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHandsHelping, faTools, faMicroscope } from '@fortawesome/free-solid-svg-icons';

library.add(faHandsHelping, faTools, faMicroscope);

export default function (Vue) {
    Vue.component('font-awesome', FontAwesomeIcon)
};
