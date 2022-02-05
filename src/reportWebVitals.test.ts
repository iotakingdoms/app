import {
  getCLS,
  getFCP,
  getFID,
  getLCP,
  getTTFB,
} from 'web-vitals';
import reportWebVitals from './reportWebVitals';

jest.mock('web-vitals');

describe('reportWebVitals', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls functions of web-vitals when a report handler is passed', () => {
    const reportHandler = () => {};
    reportWebVitals(reportHandler);
    expect(getCLS).toHaveBeenCalledWith(reportHandler);
    expect(getFCP).toHaveBeenCalledWith(reportHandler);
    expect(getFID).toHaveBeenCalledWith(reportHandler);
    expect(getLCP).toHaveBeenCalledWith(reportHandler);
    expect(getTTFB).toHaveBeenCalledWith(reportHandler);
  });

  it('does not call web-vitals when no report handler is passed', () => {
    reportWebVitals();
    expect(getCLS).not.toHaveBeenCalled();
    expect(getFCP).not.toHaveBeenCalled();
    expect(getFID).not.toHaveBeenCalled();
    expect(getLCP).not.toHaveBeenCalled();
    expect(getTTFB).not.toHaveBeenCalled();
  });

  it('does not call web-vitals when a report handler of incorrect type is passed', () => {
    const incorrectTypeReportHandler = jest.fn();
    reportWebVitals(incorrectTypeReportHandler);
    expect(getCLS).not.toHaveBeenCalled();
    expect(getFCP).not.toHaveBeenCalled();
    expect(getFID).not.toHaveBeenCalled();
    expect(getLCP).not.toHaveBeenCalled();
    expect(getTTFB).not.toHaveBeenCalled();
  });
});
