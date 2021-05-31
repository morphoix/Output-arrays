// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS STARTER</h1>`;

const a = [
  1,
  2,
  3,
  -1,
  0,
  -1,
  -1,
  -1,
  3333,
  -800000123,
  17,
  0,
  0,
  1.222,
  18,
  22,
  4,
  1,
  2,
  0,
  456,
  3,
  -5,
  6,
  8,
  9
];

function createTable() {
  const table = document.createElement('table');
  table.style.width = '40%';
  table.style.textAlign = 'center';
  table.style.position = 'absolute';
  table.style.background = '#dee2e6';
  table.style.margin = '15px';
  table.setAttribute('border', '1px');

  const head = table.createTHead();
  head.appendChild(document.createTextNode('TABLE'));

  for (let j = 0; j < a.length / 2; j++) {
    const row = head.insertRow();
    for (let i = 0; i < 2; i++) {
      const tableCell = row.insertCell();
      tableCell.style.padding = '10px';
      tableCell.style.background = 'white';
      tableCell.setAttribute('rowSpan', '1');
      let item = a[j * 2 + i];
      tableCell.appendChild(document.createTextNode(item));
    }
  }
  document.body.append(table);
}
createTable();

const parent = document.createElement('div');
document.body.append(parent);
parent.innerHTML = 'DIVs';
parent.style.position = 'absolute';
parent.style.padding = '10px';
parent.style.right = '5%';
parent.style.margin = '10px';
parent.style.width = '40vw';
parent.style.display = 'grid';
parent.style.gridTemplateColumns = 'repeat(2, minmax(50px, 1fr)';
parent.style.gridGap = '30px';

for (let k = 0; k < a.length; k++) {
  const box = document.createElement('div');
  parent.append(box);
  box.style.width = '100px';
  box.style.height = '20px';
  box.style.background = '#dee2e6';
  box.style.position = 'relative';
  box.style.textAlign = 'center';
  box.style.padding = '15px';
  box.innerHTML = a[k];
}
