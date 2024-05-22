import {StyleSheet} from 'react-native';
import Colors from '../theme/ColorSqueme';
import FontSize from '../theme/FontSize';
import Spacing from '../theme/Spacing';

const styles = StyleSheet.create({
  surfaceContainer: {
    backgroundColor: '#000',
    paddingStart: Spacing.px24,
    paddingEnd: Spacing.px24,
    flex: 1,
  },
  h1: {
    color: Colors.onSurface,
    fontSize: FontSize.xxLarge,
    fontWeight: '900',
    textAlign: 'center',
  },
  body: {
    color: Colors.onSurface,
    fontSize: FontSize.large,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonContainer: {
    height: Spacing.px48,
    backgroundColor: Colors.primaryContainer,
    justifyContent: 'center',
    borderRadius: Spacing.px8,
  },
  buttonText: {
    color: Colors.onPrimaryContainer,
    fontSize: FontSize.medium,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
