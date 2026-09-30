---
title: "ARIA: grid-Rolle"
short-title: grid
slug: Web/Accessibility/ARIA/Reference/Roles/grid_role
l10n:
  sourceCommit: 96758f3d8ce1e5fbd9d58053bdef103eec1de108
---

Die grid-Rolle ist für ein Widget vorgesehen, das eine oder mehrere Zeilen mit Zellen enthält. Die Position jeder Zelle ist von Bedeutung, und jede Zelle kann über die Tastatur fokussiert werden.

## Beschreibung

Die `grid`-Rolle bezeichnet ein zusammengesetztes Widget mit einer oder mehreren Zeilen, die jeweils eine oder mehrere Zellen enthalten. Einige oder alle Zellen im Grid können durch zweidimensionale Navigation, etwa mit den Pfeiltasten, fokussiert werden.

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
        <button id="btn-1a" tabindex="-1">1A</button>
      </td>
      <td tabindex="-1">
        <button id="btn-1b" tabindex="-1">1B</button>
      </td>
      <!-- More Columns -->
    </tr>
    <tr>
      <th scope="row">Aisle 2</th>
      <td tabindex="-1">
        <button id="btn-2a" tabindex="-1">2A</button>
      </td>
      <td tabindex="-1">
        <button id="btn-2b" tabindex="-1">2B</button>
      </td>
      <!-- More Columns -->
    </tr>
  </tbody>
</table>
```

Ein Grid-Widget enthält eine oder mehrere Zeilen mit Zellen, deren interaktive Inhalte thematisch zusammengehören. Es schreibt keine bestimmte visuelle Darstellung vor, setzt aber eine Beziehung zwischen den Elementen voraus. Die Anwendungsfälle lassen sich in zwei Kategorien einteilen: die Darstellung tabellarischer Informationen (Daten-Grids) und die Gruppierung anderer Widgets (Layout-Grids). Obwohl beide dieselben ARIA-Rollen, -Zustände und -Eigenschaften verwenden, ergeben sich aus ihren unterschiedlichen Inhalten und Zwecken wichtige Anforderungen an die Gestaltung der Tastaturinteraktion. Weitere Informationen finden Sie im [Leitfaden zu ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/grid/).

Zellelemente haben die Rolle [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), es sei denn, sie sind Zeilen- oder Spaltenüberschriften. In diesem Fall haben sie die Rolle [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) beziehungsweise [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role). Zellelemente müssen Elementen mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) zugeordnet sein. Zeilen können mithilfe der Rolle [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) gruppiert werden.

Ein Grid ist ein interaktives Widget. Daher müssen [Tastaturinteraktionen](#tastaturinteraktionen) implementiert werden.

Ein zugänglicher Name wird für die Rolle `grid` dringend empfohlen, auch wenn ARIA ihn nicht vorschreibt. Verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), um auf eine sichtbare Beschriftung zu verweisen, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn keine sichtbare Beschriftung vorhanden ist.

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

#### Rollen

- [treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) (Unterklasse)
  - : Wenn ein Grid Zeilen enthält, die zum Ein- oder Ausblenden untergeordneter Zeilen auf- oder zugeklappt werden können, kann ein treegrid verwendet werden.
- [row](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Eine Zeile innerhalb des Grids.
- [rowgroup](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : Eine Gruppe, die eine oder mehrere [row](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)-Zeilen enthält.

#### Zustände und Eigenschaften

- [aria-level](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
  - : Gibt die Hierarchieebene des Grids innerhalb anderer Strukturen an.
- [aria-multiselectable](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Wenn `aria-multiselectable` auf `true` gesetzt ist, können mehrere Elemente im Grid ausgewählt werden. Der Standardwert ist `false`.
- [aria-readonly](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
  - : Wenn das Grid die Bearbeitung von Zellinhalten unterstützt, die Bearbeitung aber für alle Zellen nicht verfügbar ist, kann [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) auf `true` gesetzt werden. Der Standardwert ist `false`. Das Fehlen des Attributs bedeutet jedoch nicht, dass das Grid bearbeitbare Inhalte enthält. Lassen Sie das Attribut weg, wenn das Grid keine Bearbeitung von Zellinhalten unterstützt. Der für das Grid festgelegte Wert wird an seine gridcells weitergegeben und kann für einzelne gridcells überschrieben werden.

> [!NOTE]
> Für viele Anwendungsfälle genügt ein HTML-Element {{HTMLElement('table')}}, da es und die verschiedenen Tabellenelemente bereits viele ARIA-Rollen mitbringen.

### Tastaturinteraktionen

Wenn Tastaturnutzende zu einem Grid gelangen, navigieren sie mit den Tasten <kbd>links</kbd>, <kbd>rechts</kbd>, <kbd>oben</kbd> und <kbd>unten</kbd> durch Zeilen und Spalten. Um eine interaktive Komponente zu aktivieren, verwenden sie die <kbd>Eingabetaste</kbd> oder die <kbd>Leertaste</kbd>.

| Taste                             | Aktion                                                                                                                                                                                                                                                                                                  |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>→</kbd>                      | Verschiebt den Fokus um eine Zelle nach rechts. Optional kann der Fokus bei Layout-Grids von der Zelle ganz rechts in einer Zeile zur ersten Zelle der nächsten Zeile wechseln. Befindet sich der Fokus auf der letzten Zelle des Grids, bleibt er dort.                                                |
| <kbd>←</kbd>                      | Verschiebt den Fokus um eine Zelle nach links. Optional kann der Fokus bei Layout-Grids von der Zelle ganz links in einer Zeile zur letzten Zelle der vorherigen Zeile wechseln. Befindet sich der Fokus auf der ersten Zelle des Grids, bleibt er dort.                                                |
| <kbd>↓</kbd>                      | Verschiebt den Fokus um eine Zelle nach unten. Optional kann der Fokus bei Layout-Grids von der untersten Zelle einer Spalte zur obersten Zelle der nächsten Spalte wechseln. Befindet sich der Fokus auf der letzten Zelle des Grids, bleibt er dort.                                                  |
| <kbd>↑</kbd>                      | Verschiebt den Fokus um eine Zelle nach oben. Optional kann der Fokus bei Layout-Grids von der obersten Zelle einer Spalte zur untersten Zelle der vorherigen Spalte wechseln. Befindet sich der Fokus auf der ersten Zelle des Grids, bleibt er dort.                                                  |
| <kbd>Page Down</kbd>              | Verschiebt den Fokus um eine von den Entwickelnden festgelegte Anzahl von Zeilen nach unten. Üblicherweise wird dabei so gescrollt, dass die unterste der derzeit sichtbaren Zeilen zu einer der ersten sichtbaren Zeilen wird. Befindet sich der Fokus in der letzten Zeile des Grids, bleibt er dort. |
| <kbd>Page Up</kbd>                | Verschiebt den Fokus um eine von den Entwickelnden festgelegte Anzahl von Zeilen nach oben. Üblicherweise wird dabei so gescrollt, dass die oberste der derzeit sichtbaren Zeilen zu einer der letzten sichtbaren Zeilen wird. Befindet sich der Fokus in der ersten Zeile des Grids, bleibt er dort.   |
| <kbd>Home</kbd>                   | Verschiebt den Fokus zur ersten Zelle der aktuell fokussierten Zeile.                                                                                                                                                                                                                                   |
| <kbd>End</kbd>                    | Verschiebt den Fokus zur letzten Zelle der aktuell fokussierten Zeile.                                                                                                                                                                                                                                  |
| <kbd>ctrl</kbd> + <kbd>Home</kbd> | Verschiebt den Fokus zur ersten Zelle der ersten Zeile.                                                                                                                                                                                                                                                 |
| <kbd>ctrl</kbd> + <kbd>End</kbd>  | Verschiebt den Fokus zur letzten Zelle der letzten Zeile.                                                                                                                                                                                                                                               |

Wenn Zellen, Zeilen oder Spalten ausgewählt werden können, werden häufig die folgenden Tastenkombinationen verwendet:

| Tastenkombination                   | Aktion                                                                                                                                                                                                                            |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>ctrl</kbd> + <kbd>Space</kbd>  | Wählt die Spalte aus, die den Fokus enthält.                                                                                                                                                                                      |
| <kbd>shift</kbd> + <kbd>Space</kbd> | Wählt die Zeile aus, die den Fokus enthält. Wenn das Grid eine Spalte mit Kontrollkästchen zur Auswahl von Zeilen enthält, kann diese Tastenkombination das entsprechende Kästchen aktivieren, auch wenn es nicht fokussiert ist. |
| <kbd>ctrl</kbd> + <kbd>A</kbd>      | Wählt alle Zellen aus.                                                                                                                                                                                                            |
| <kbd>shift</kbd> + <kbd>→</kbd>     | Erweitert die Auswahl um eine Zelle nach rechts.                                                                                                                                                                                  |
| <kbd>shift</kbd> + <kbd>←</kbd>     | Erweitert die Auswahl um eine Zelle nach links.                                                                                                                                                                                   |
| <kbd>shift</kbd> + <kbd>↓</kbd>     | Erweitert die Auswahl um eine Zelle nach unten.                                                                                                                                                                                   |
| <kbd>shift</kbd> + <kbd>↑</kbd>     | Erweitert die Auswahl um eine Zelle nach oben.                                                                                                                                                                                    |

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
  border: 1px solid black;
  text-align: right;
  color: #767676;
}

tbody td[role="gridcell"] {
  color: black;
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

### Weitere Beispiele

- [Beispiele für Daten-Grids](https://www.w3.org/WAI/ARIA/apg/example-index/grid/dataGrids.html)
- [Beispiele für Layout-Grids](https://www.w3.org/WAI/ARIA/apg/example-index/grid/LayoutGrids.html)
- [W3C/WAI-Tutorial: Tabellen](https://www.w3.org/WAI/tutorials/tables/)

## Hinweise zur Barrierefreiheit

Selbst wenn die Tastaturbedienung korrekt implementiert ist, wissen manche Nutzende möglicherweise nicht, dass sie die Pfeiltasten verwenden müssen. Stellen Sie sicher, dass sich die benötigte Funktionalität und Interaktion am besten mit der grid-Rolle umsetzen lässt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA-Rolle `composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [ARIA-Rolle `table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [ARIA-Rolle `treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
- [ARIA-Rolle `row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA-Rolle `rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [ARIA-Rolle `gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [ARIA-Rolle `rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [ARIA-Rolle columnheader](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- {{HTMLElement('table','HTML <code>&lt;table&gt;</code> element')}}
- [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
