import 'echarts/lib/chart/pie';
import { symbols } from '../constants';

export interface PieProps extends echarts.EChartOption.SeriesPie {
  donut?: boolean;
}

function Pie(_: PieProps) {
  return null;
}

Pie.defaultProps = {
  data: [],
  donut: false
};

Pie[symbols.typeKey] = symbols.pie;

if (process.env.NODE_ENV !== 'production') {
  Pie.displayName = 'Pie';
}

export default Pie;
