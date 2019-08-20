import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { variables } = themeConfig;

const noticeText = css({
  padding: variables.gap.big,
}).toString();

export default {
  noticeText,
};
