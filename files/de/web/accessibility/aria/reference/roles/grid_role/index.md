---
title: "ARIA: grid-Rolle"
short-title: grid
slug: Web/Accessibility/ARIA/Reference/Roles/grid_role
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

Die grid-Rolle ist für ein Widget vorgesehen, das eine oder mehrere Reihen von Zellen enthält. Die Position jeder Zelle ist signifikant und kann über Tastatureingaben fokussiert werden.

## Beschreibung

Die `grid`-Rolle ist ein zusammengesetztes Widget, das eine Sammlung aus einer oder mehreren Reihen mit einer oder mehreren Zellen enthält, wobei einige oder alle Zellen durch Methoden der zweidimensionalen Navigation, wie Richtungspfeiltasten, fokussierbar sind.

```html
<table role="grid" aria-labelledby="id-select-your-seat">
  <caption id="id-select-your-seat">
    Select your seat
  </caption>
  <tbody role="presentation">
    <tr role="presentation">
      <td></td>
      <th>Row A</th>
      <th>Row B</th>
    </tr>
    <tr>
      <th scope="row">Aisle 1</th>
      <td tabindex="0">
        <button id="1a" tabindex="-1">1A</button>
      </td>
      <td tabindex="-1">
        <button id="1b" tabindex="-1">1B</button>
      </td>
      <!-- More Columns -->
    </tr>
    <tr>
      <th scope="row">Aisle 2</th>
      <td tabindex="-1">
        <button id="2a" tabindex="-1">2A</button>
      </td>
      <td tabindex="-1">
        <button id="2b" tabindex="-1">2B</button>
      </td>
      <!-- More Columns -->
    </tr>
  </tbody>
</table>
```

Ein grid-Widget beinhaltet eine oder mehrere Reihen mit einer oder mehreren Zellen thematisch verwandten interaktiven Inhalts. Obwohl es keine spezifische visuelle Darstellung impliziert, weist es auf eine Beziehung zwischen Elementen hin. Die Nutzung fällt in zwei Kategorien: die Präsentation tabellarischer Informationen (Daten-Raster) und die Gruppierung anderer Widgets (Layout-Raster). Auch wenn sowohl Daten-Raster als auch Layout-Raster dieselben ARIA-Rollen, Zustände und Eigenschaften verwenden, führen Unterschiede in ihrem Inhalt und Zweck zu Faktoren, die im Design der Tastaturinteraktion berücksichtigt werden müssen. Weitere Einzelheiten finden Sie im [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/grid/).

Zellen-Elemente haben die Rolle [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), es sei denn, sie sind ein Reihen- oder Spaltenkopf, in diesem Fall sind die Elemente [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) bzw. [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role). Zellen-Elemente müssen von Elementen mit einer [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) Rolle besessen werden. Reihen können mit der [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) Rolle gruppiert werden.

Wenn das grid als interaktives Widget verwendet wird, müssen [Tastaturinteraktionen](#tastaturinteraktionen) implementiert werden.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

#### Rollen

- [treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) (Unterklasse)
  - : Wenn ein grid erweiterbare oder klappbare Spalten hat, kann ein treegrid verwendet werden.
- [row](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Eine Reihe innerhalb des grids.
- [rowgroup](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : Eine Gruppe, die eine oder mehrere [row](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)s enthält.

#### Zustände und Eigenschaften

- [aria-level](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
  - : Gibt die hierarchische Ebene des grids innerhalb anderer Strukturen an.
- [aria-multiselectable](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Wenn `aria-multiselectable` auf `true` gesetzt ist, können mehrere Elemente im grid ausgewählt werden. Der Standardwert ist `false`.
- [aria-readonly](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
  - : Wenn der Benutzer das grid navigieren, aber nicht die Werte des grids ändern kann, sollte [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) auf `true` gesetzt werden. Der Standardwert ist `false`.

> [!NOTE]
> Für viele Anwendungsfälle ist ein HTML-{{HTMLElement('table')}}-Element ausreichend, da es und die verschiedenen Tabellenelemente bereits viele ARIA-Rollen beinhalten.

### Tastaturinteraktionen

Wenn ein Tastaturbenutzer auf ein grid stößt, navigiert er durch die Reihen und Spalten mittels der Tasten <kbd>links</kbd>, <kbd>rechts</kbd>, <kbd>hoch</kbd> und <kbd>runter</kbd>. Um die interaktive Komponente zu aktivieren, verwendet er die Tasten <kbd>Return</kbd> und <kbd>Leertaste</kbd>.

| Taste                             | Aktion                                                                                                                                                                                                                                                                                             |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>→</kbd>                      | Bewegt den Fokus um eine Zelle nach rechts. Optional (Layout-Raster), wenn der Fokus auf der rechten Zelle in der Reihe liegt, kann der Fokus zur ersten Zelle in der folgenden Reihe verschoben werden. Wenn der Fokus auf der letzten Zelle im grid liegt, bewegt sich der Fokus nicht.          |
| <kbd>←</kbd>                      | Bewegt den Fokus um eine Zelle nach links. Optional (Layout-Raster), wenn der Fokus auf der linken Zelle in der Reihe liegt, kann der Fokus zur letzten Zelle in der vorherigen Reihe verschoben werden. Wenn der Fokus auf der ersten Zelle im grid liegt, bewegt sich der Fokus nicht.           |
| <kbd>↓</kbd>                      | Bewegt den Fokus um eine Zelle nach unten. Optional (Layout-Raster), wenn der Fokus auf der unteren Zelle in der Spalte liegt, kann der Fokus zur oberen Zelle in der folgenden Spalte verschoben werden. Wenn der Fokus auf der letzten Zelle im grid liegt, bewegt sich der Fokus nicht.         |
| <kbd>↑</kbd>                      | Bewegt den Fokus um eine Zelle nach oben. Optional (Layout-Raster), wenn der Fokus auf der oberen Zelle in der Spalte liegt, kann der Fokus zur unteren Zelle in der vorherigen Spalte verschoben werden. Wenn der Fokus auf der ersten Zelle im grid liegt, bewegt sich der Fokus nicht.          |
| <kbd>Page Down</kbd>              | Bewegt den Fokus um eine vom Autor bestimmte Anzahl von Reihen nach unten, typischerweise so scrollen, dass die unterste Reihe der derzeit sichtbaren Vectoren eine der ersten sichtbaren Vectoren wird. Wenn der Fokus sich in der letzten Reihe des grids befindet, bewegt sich der Fokus nicht. |
| <kbd>Page Up</kbd>                | Bewegt den Fokus um eine vom Autor bestimmte Anzahl von Reihen nach oben, typischerweise so scrollen, dass die oberste Reihe der derzeit sichtbaren Vectoren eine der letzten sichtbaren Vectoren wird. Wenn der Fokus sich in der ersten Reihe des grids befindet, bewegt sich der Fokus nicht.   |
| <kbd>Home</kbd>                   | Bewegt den Fokus zur ersten Zelle in der Reihe, die den Fokus enthält.                                                                                                                                                                                                                             |
| <kbd>End</kbd>                    | Bewegt den Fokus zur letzten Zelle in der Reihe, die den Fokus enthält.                                                                                                                                                                                                                            |
| <kbd>ctrl</kbd> + <kbd>Home</kbd> | Bewegt den Fokus zur ersten Zelle in der ersten Reihe.                                                                                                                                                                                                                                             |
| <kbd>ctrl</kbd> + <kbd>End</kbd>  | Bewegt den Fokus zur letzten Zelle in der letzten Reihe.                                                                                                                                                                                                                                           |

Falls Zellen, Reihen oder Spalten ausgewählt werden können, werden die folgenden Tastenkombinationen häufig verwendet:

| Tastenkombination                   | Aktion                                                                                                                                                                                                                                                                         |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>ctrl</kbd> + <kbd>Space</kbd>  | Wählt die Spalte aus, die den Fokus enthält.                                                                                                                                                                                                                                   |
| <kbd>shift</kbd> + <kbd>Space</kbd> | Wählt die Reihe aus, die den Fokus enthält. Wenn das grid eine Spalte mit Kontrollkästchen zum Auswählen von Reihen enthält, kann diese Tastenkombination verwendet werden, um dieses Kästchen zu markieren, auch wenn sich der Fokus nicht auf dem Kontrollkästchen befindet. |
| <kbd>ctrl</kbd> + <kbd>A</kbd>      | Wählt alle Zellen aus.                                                                                                                                                                                                                                                         |
| <kbd>shift</kbd> + <kbd>→</kbd>     | Erweitert die Auswahl um eine Zelle nach rechts.                                                                                                                                                                                                                               |
| <kbd>shift</kbd> + <kbd>←</kbd>     | Erweitert die Auswahl um eine Zelle nach links.                                                                                                                                                                                                                                |
| <kbd>shift</kbd> + <kbd>↓</kbd>     | Erweitert die Auswahl um eine Zelle nach unten.                                                                                                                                                                                                                                |
| <kbd>shift</kbd> + <kbd>↑</kbd>     | Erweitert die Auswahl um eine Zelle nach oben.                                                                                                                                                                                                                                 |

## Beispiele

### Kalenderbeispiel

{{EmbedLiveSample("Calendar_example", "100%", "300")}}

#### HTML

```html
<table role="grid" aria-labelledby="calendarheader">
  <caption id="calendarheader">
    September 2018
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <td></td>
      <th role="columnheader" aria-label="Sunday">S</th>
      <th role="columnheader" aria-label="Monday">M</th>
      <th role="columnheader" aria-label="Tuesday">T</th>
      <th role="columnheader" aria-label="Wednesday">W</th>
      <th role="columnheader" aria-label="Thursday">T</th>
      <th role="columnheader" aria-label="Friday">F</th>
      <th role="columnheader" aria-label="Saturday">S</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <th scope="row" role="rowheader">Week 1</th>
      <td>26</td>
      <td>27</td>
      <td>28</td>
      <td>29</td>
      <td>30</td>
      <td>31</td>
      <td role="gridcell" tabindex="-1">1</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Week 2</th>
      <td role="gridcell" tabindex="-1">2</td>
      <td role="gridcell" tabindex="-1">3</td>
      <td role="gridcell" tabindex="-1">4</td>
      <td role="gridcell" tabindex="-1">5</td>
      <td role="gridcell" tabindex="-1">6</td>
      <td role="gridcell" tabindex="-1">7</td>
      <td role="gridcell" tabindex="-1">8</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Week 3</th>
      <td role="gridcell" tabindex="-1">9</td>
      <td role="gridcell" tabindex="-1">10</td>
      <td role="gridcell" tabindex="-1">11</td>
      <td role="gridcell" tabindex="-1">12</td>
      <td role="gridcell" tabindex="-1">13</td>
      <td role="gridcell" tabindex="-1">14</td>
      <td role="gridcell" tabindex="-1">15</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Week 4</th>
      <td role="gridcell" tabindex="-1">16</td>
      <td role="gridcell" tabindex="-1">17</td>
      <td role="gridcell" tabindex="-1">18</td>
      <td role="gridcell" tabindex="-1">19</td>
      <td role="gridcell" tabindex="-1">20</td>
      <td role="gridcell" tabindex="-1">21</td>
      <td role="gridcell" tabindex="-1">22</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Week 5</th>
      <td role="gridcell" tabindex="-1">23</td>
      <td role="gridcell" tabindex="-1">24</td>
      <td role="gridcell" tabindex="-1">25</td>
      <td role="gridcell" tabindex="-1">26</td>
      <td role="gridcell" tabindex="-1">27</td>
      <td role="gridcell" tabindex="-1">28</td>
      <td role="gridcell" tabindex="-1">29</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Week 6</th>
      <td role="gridcell" tabindex="-1">30</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  margin: 0;
  border-collapse: collapse;
  font-variant-numeric: tabular-nums;
}

tbody th,
tbody td {
  padding: 5px;
}

tbody td {
  border: 1px solid #000;
  text-align: right;
  color: #767676;
}

tbody td[role="gridcell"] {
  color: #000;
}

tbody td[role="gridcell"]:hover,
tbody td[role="gridcell"]:focus {
  background-color: #f6f6f6;
  outline: 3px solid blue;
}
```

#### JavaScript

```js
const selectables = document.querySelectorAll('table td[role="gridcell"]');

selectables[0].setAttribute("tabindex", 0);

const trs = document.querySelectorAll("table tbody tr");
let rowIndex = 0;
let colIndex = 0;
let maxRow = trs.length - 1;
let maxCol = 0;

trs.forEach((row) => {
  row.querySelectorAll("td").forEach((el) => {
    el.dataset.row = rowIndex;
    el.dataset.col = colIndex;
    colIndex++;
  });
  if (colIndex > maxCol) {
    maxCol = colIndex - 1;
  }
  colIndex = 0;
  rowIndex++;
});

function moveTo(newRow, newCol) {
  const tgt = document.querySelector(
    `[data-row="${newRow}"][data-col="${newCol}"]`,
  );
  if (tgt?.getAttribute("role") !== "gridcell") {
    return false;
  }
  document.querySelectorAll("[role=gridcell]").forEach((el) => {
    el.setAttribute("tabindex", "-1");
  });
  tgt.setAttribute("tabindex", "0");
  tgt.focus();
  return true;
}

document.querySelector("table").addEventListener("keydown", (event) => {
  const col = parseInt(event.target.dataset.col, 10);
  const row = parseInt(event.target.dataset.row, 10);
  switch (event.key) {
    case "ArrowRight": {
      const newRow = col === 6 ? row + 1 : row;
      const newCol = col === 6 ? 0 : col + 1;
      moveTo(newRow, newCol);
      break;
    }
    case "ArrowLeft": {
      const newRow = col === 0 ? row - 1 : row;
      const newCol = col === 0 ? 6 : col - 1;
      moveTo(newRow, newCol);
      break;
    }
    case "ArrowDown":
      moveTo(row + 1, col);
      break;
    case "ArrowUp":
      moveTo(row - 1, col);
      break;
    case "Home": {
      if (event.ctrlKey) {
        let i = 0;
        let result;
        do {
          let j = 0;
          do {
            result = moveTo(i, j);
            j++;
          } while (!result);
          i++;
        } while (!result);
      } else {
        moveTo(row, 0);
      }
      break;
    }
    case "End": {
      if (event.ctrlKey) {
        let i = maxRow;
        let result;
        do {
          let j = maxCol;
          do {
            result = moveTo(i, j);
            j--;
          } while (!result);
          i--;
        } while (!result);
      } else {
        moveTo(
          row,
          document.querySelector(
            `[data-row="${event.target.dataset.row}"]:last-of-type`,
          ).dataset.col,
        );
      }
      break;
    }
    case "PageUp": {
      let i = 0;
      let result;
      do {
        result = moveTo(i, col);
        i++;
      } while (!result);
      break;
    }
    case "PageDown": {
      let i = maxRow;
      let result;
      do {
        result = moveTo(i, col);
        i--;
      } while (!result);
      break;
    }
    case "Enter": {
      console.log(event.target.textContent);
      break;
    }
  }
  event.preventDefault();
});
```

### Mehr Beispiele

- [Daten-Raster-Beispiele](https://www.w3.org/WAI/ARIA/apg/example-index/grid/dataGrids.html)
- [Layout-Raster-Beispiele](https://www.w3.org/WAI/ARIA/apg/example-index/grid/LayoutGrids.html)
- [W3C/WAI Tutorial: Tabellen](https://www.w3.org/WAI/tutorials/tables/)

## Barrierenfreiheit-Bedenken

Selbst wenn die Tastaturbenutzung korrekt implementiert ist, könnten einige Benutzer nicht wissen, dass sie die Pfeiltasten verwenden müssen. Stellen Sie sicher, dass die benötigte Funktionalität und Interaktion am besten mit der grid-Rolle erreicht werden kann.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA `composite` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [ARIA `table` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [ARIA `treegrid` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
- [ARIA `row` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA `rowgroup` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [ARIA: `gridcell` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [ARIA: `rowheader` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [ARIA: `columnheader` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- {{HTMLElement('table','HTML <code>&lt;table&gt;</code>-Element')}}
- [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
