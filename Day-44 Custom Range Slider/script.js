// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const range = document.getElementById('range');

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const rangeWidth = getComputedStyle(e.target).getPropertyValue('width');
  const labelWidth = getComputedStyle(label).getPropertyValue('width');

  const numRangeWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
  console.log(numRangeWidth);
  const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);

  const maximum = +e.target.max;
  const minimum = +e.target.min;

  const left =
    value * (numRangeWidth / maximum) -
    numLabelWidth / 2 +
    scale(value, minimum, maximum, 10, -10);
  label.style.left = `${left}px`;

  label.innerText = value;
});
