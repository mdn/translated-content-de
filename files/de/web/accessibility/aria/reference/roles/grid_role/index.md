---
title: "ARIA: Rolle grid"
slug: Web/Accessibility/ARIA/Reference/Roles/grid_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die Rolle grid ist für ein Widget, das eine oder mehrere Zeilen von Zellen enthält. Die Position jeder Zelle ist signifikant und kann über Tastatureingaben fokussiert werden.

## Beschreibung

Die Rolle `grid` ist ein zusammengesetztes Widget, das eine Sammlung von einer oder mehreren Zeilen mit einer oder mehreren Zellen enthält, wobei einige oder alle Zellen im Raster mit Methoden der zweidimensionalen Navigation, wie z.B. Richtungstasten, fokussierbar sind.

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

Ein grid-Widget enthält eine oder mehrere Zeilen mit einer oder mehreren Zellen interaktiver Inhalte mit thematischem Bezug. Während es keine spezifische visuelle Darstellung impliziert, impliziert es eine Beziehung zwischen den Elementen. Die Nutzung fällt in zwei Kategorien: Darstellen tabellarischer Informationen (Datenraster) und Gruppieren anderer Widgets (Layout-Raster). Auch wenn sowohl Datenraster als auch Layout-Raster die gleichen ARIA-Rollen, -Zustände und -Eigenschaften verwenden, treten bei Unterschieden in ihrem Inhalt und Zweck Faktoren auf, die bei der Gestaltung der Tastaturinteraktion wichtig sind. Weitere Einzelheiten finden Sie im [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/grid/).

Zellenelemente haben die Rolle [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), es sei denn, sie sind ein Zeilen- oder Spaltenkopf, in diesem Fall sind die Elemente [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) und [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role), beziehungsweise. Zellenelemente müssen in Besitz von Elementen mit einer Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) sein. Zeilen können mit der Rolle [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) gruppiert werden.

Wenn das Raster als interaktives Widget verwendet wird, müssen [Tastaturinteraktionen](#tastaturinteraktionen) implementiert werden.

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

#### Rollen

- [treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) (Unterklasse)
  - : Wenn ein Raster Spalten hat, die erweitert oder reduziert werden können, kann ein treegrid verwendet werden.
- [row](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Eine Zeile innerhalb des Rasters.
- [rowgroup](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : Eine Gruppe, die eine oder mehrere [row](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)s enthält.

#### Zustände und Eigenschaften

- [aria-level](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
  - : Gibt die hierarchische Ebene des Rasters innerhalb anderer Strukturen an.
- [aria-multiselectable](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Wenn `aria-multiselectable` auf `true` gesetzt ist, können mehrere Elemente im Raster ausgewählt werden. Der Standardwert ist `false`.
- [aria-readonly](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
  - : Wenn der Benutzer das Raster navigieren, aber den Wert oder die Werte des Rasters nicht ändern kann, sollte [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) auf `true` gesetzt werden. Der Standardwert ist `false`.

> [!NOTE]
> Für viele Anwendungsfälle ist ein HTML {{HTMLElement('table')}}-Element ausreichend, da es und die verschiedenen Tabellenelemente bereits viele ARIA-Rollen beinhalten.

### Tastaturinteraktionen

Wenn ein Tastaturbenutzer auf ein Raster stößt, navigieren Sie durch die Zeilen und Spalten mit den Tasten <kbd>links</kbd>, <kbd>rechts</kbd>, <kbd>oben</kbd> und <kbd>unten</kbd>. Um die interaktive Komponente zu aktivieren, verwenden sie die Tasten <kbd>return</kbd> und <kbd>space</kbd>.

| Taste                             | Aktion                                                                                                                                                                                                                                                                                    |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>→</kbd>                      | Verschiebt den Fokus eine Zelle nach rechts. Optional (Layoutraster): Wenn der Fokus auf der rechten Zelle in der Zeile ist, kann der Fokus zur ersten Zelle in der folgenden Zeile verschoben werden. Wenn der Fokus auf der letzten Zelle im Raster ist, bewegt sich der Fokus nicht.   |
| <kbd>←</kbd>                      | Verschiebt den Fokus eine Zelle nach links. Optional (Layoutraster): Wenn der Fokus auf der linken Zelle in der Zeile ist, kann der Fokus zur letzten Zelle in der vorherigen Zeile verschoben werden. Wenn der Fokus auf der ersten Zelle im Raster ist, bewegt sich der Fokus nicht.    |
| <kbd>↓</kbd>                      | Verschiebt den Fokus eine Zelle nach unten. Optional (Layoutraster): Wenn der Fokus auf der unteren Zelle in der Spalte ist, kann der Fokus zur oberen Zelle in der folgenden Spalte verschoben werden. Wenn der Fokus auf der letzten Zelle im Raster ist, bewegt sich der Fokus nicht.  |
| <kbd>↑</kbd>                      | Verschiebt den Fokus eine Zelle nach oben. Optional (Layoutraster): Wenn der Fokus auf der oberen Zelle in der Spalte ist, kann der Fokus zur unteren Zelle in der vorherigen Spalte verschoben werden. Wenn der Fokus auf der ersten Zelle im Raster ist, bewegt sich der Fokus nicht.   |
| <kbd>Bild ↓</kbd>                 | Verschiebt den Fokus um eine vom Autor bestimmte Anzahl von Zeilen nach unten, typischerweise so, dass die unterste Zeile im aktuell sichtbaren Satz von Zeilen eine der ersten sichtbaren Zeilen wird. Wenn der Fokus in der letzten Zeile des Rasters ist, bewegt sich der Fokus nicht. |
| <kbd>Bild ↑</kbd>                 | Verschiebt den Fokus um eine vom Autor bestimmte Anzahl von Zeilen nach oben, typischerweise so, dass die oberste Zeile im aktuell sichtbaren Satz von Zeilen eine der letzten sichtbaren Zeilen wird. Wenn der Fokus in der ersten Zeile des Rasters ist, bewegt sich der Fokus nicht.   |
| <kbd>Home</kbd>                   | Verschiebt den Fokus zur ersten Zelle in der Zeile, die den Fokus enthält.                                                                                                                                                                                                                |
| <kbd>Ende</kbd>                   | Verschiebt den Fokus zur letzten Zelle in der Zeile, die den Fokus enthält.                                                                                                                                                                                                               |
| <kbd>ctrl</kbd> + <kbd>Home</kbd> | Verschiebt den Fokus zur ersten Zelle in der ersten Zeile.                                                                                                                                                                                                                                |
| <kbd>ctrl</kbd> + <kbd>Ende</kbd> | Verschiebt den Fokus zur letzten Zelle in der letzten Zeile.                                                                                                                                                                                                                              |

Wenn Zellen, Zeilen oder Spalten ausgewählt werden können, werden üblicherweise folgende Tastenkombinationen verwendet:

| Tastenkombination                       | Aktion                                                                                                                                                                                                                                                                 |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>ctrl</kbd> + <kbd>Leertaste</kbd>  | Wählt die Spalte aus, die den Fokus enthält.                                                                                                                                                                                                                           |
| <kbd>shift</kbd> + <kbd>Leertaste</kbd> | Wählt die Zeile aus, die den Fokus enthält. Wenn das Raster eine Spalte mit Kontrollkästchen zum Auswählen von Zeilen enthält, kann diese Tastenkombination verwendet werden, um das Kästchen zu aktivieren, auch wenn der Fokus nicht auf dem Kontrollkästchen liegt. |
| <kbd>ctrl</kbd> + <kbd>A</kbd>          | Wählt alle Zellen aus.                                                                                                                                                                                                                                                 |
| <kbd>shift</kbd> + <kbd>→</kbd>         | Erweitert die Auswahl um eine Zelle nach rechts.                                                                                                                                                                                                                       |
| <kbd>shift</kbd> + <kbd>←</kbd>         | Erweitert die Auswahl um eine Zelle nach links.                                                                                                                                                                                                                        |
| <kbd>shift</kbd> + <kbd>↓</kbd>         | Erweitert die Auswahl um eine Zelle nach unten.                                                                                                                                                                                                                        |
| <kbd>shift</kbd> + <kbd>↑</kbd>         | Erweitert die Auswahl um eine Zelle nach oben.                                                                                                                                                                                                                         |

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
  if (tgt?.getAttribute("role") === "gridcell") {
    document.querySelectorAll("[role=gridcell]").forEach((el) => {
      el.setAttribute("tabindex", "-1");
    });
    tgt.setAttribute("tabindex", "0");
    tgt.focus();
    return true;
  } else {
    return false;
  }
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

### Weitere Beispiele

- [Datenraster-Beispiele](https://www.w3.org/WAI/ARIA/apg/example-index/grid/dataGrids.html)
- [Layoutraster-Beispiele](https://www.w3.org/WAI/ARIA/apg/example-index/grid/LayoutGrids.html)
- [W3C/WAI Tutorial: Tabellen](https://www.w3.org/WAI/tutorials/tables/)

## Barrierefreiheitsbedenken

Auch wenn die Tastaturverwendung ordnungsgemäß implementiert ist, sind manche Benutzer möglicherweise nicht bewusst, dass sie die Pfeiltasten verwenden müssen. Stellen Sie sicher, dass die Funktionalität und die erforderliche Interaktion am besten mit der Grid-Rolle erreicht werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA `composite` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [ARIA `table` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [ARIA `treegrid` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
- [ARIA `row` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA `rowgroup` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [ARIA: `gridcell` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [ARIA: `rowheader` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [ARIA: columnheader role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- {{HTMLElement('table','HTML <code>&lt;table&gt;</code> element')}}
- [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
