---
title: "ARIA: grid Rolle"
slug: Web/Accessibility/ARIA/Roles/grid_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die Rolle `grid` ist für ein Widget, das eine oder mehrere Reihen von Zellen enthält. Die Position jeder Zelle ist signifikant und kann mittels Tastatureingaben fokussiert werden.

## Beschreibung

Die `grid`-Rolle ist ein zusammengesetztes Widget, das eine Sammlung von einer oder mehreren Reihen mit einer oder mehreren Zellen enthält, wobei einige oder alle Zellen im Gitter durch Methoden der zweidimensionalen Navigation, wie Richtungspfeiltasten, fokussierbar sind.

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

Ein Grid-Widget enthält eine oder mehrere Reihen mit einer oder mehreren Zellen thematisch zusammenhängender interaktiver Inhalte. Während es keine bestimmte visuelle Darstellung impliziert, impliziert es eine Beziehung zwischen den Elementen. Die Nutzung fällt in zwei Kategorien: Präsentation tabellarischer Informationen (Datenraster) und Gruppierung anderer Widgets (Layout-Raster). Obwohl sowohl Daten- als auch Layout-Raster dieselben ARIA-Rollen, Zustände und Eigenschaften verwenden, führen Unterschiede in ihrem Inhalt und Zweck zu Faktoren, die bei der Gestaltung der Tastaturinteraktion wichtig sind. Siehe [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) für weitere Details.

Zellelemente haben die Rolle [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), es sei denn, sie sind ein Zeilen- oder Spaltenkopf. Dann sind die Elemente [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) und [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role). Zellelemente müssen von Elementen mit einer [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) Rolle besessen werden. Reihen können mittels `rowgroups` gruppiert werden.

Wenn das Gitter als interaktives Widget verwendet wird, müssen [Tastaturinteraktionen](#tastaturinteraktionen) implementiert werden.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

#### Rollen

- [treegrid](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) (Unterklasse)
  - : Wenn ein Gitter Spalten hat, die erweitert oder reduziert werden können, kann ein Baumraster verwendet werden.
- [row](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : Eine Reihe innerhalb des Gitters.
- [rowgroup](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
  - : Eine Gruppe, die eine oder mehrere [row](/de/docs/Web/Accessibility/ARIA/Roles/row_role)s enthält.

#### Zustände und Eigenschaften

- [aria-level](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level)
  - : Gibt die hierarchische Ebene des Gitters innerhalb anderer Strukturen an.
- [aria-multiselectable](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
  - : Wenn `aria-multiselectable` auf `true` gesetzt ist, können mehrere Elemente im Gitter ausgewählt werden. Der Standardwert ist `false`.
- [aria-readonly](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
  - : Wenn der Benutzer das Gitter navigieren kann, aber den Wert oder die Werte des Gitters nicht ändern kann, sollte [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) auf `true` gesetzt werden. Der Standardwert ist `false`.

> [!NOTE]
> Für viele Anwendungsfälle ist ein HTML {{HTMLElement('table')}}-Element ausreichend, da es und die verschiedenen Tabellenelemente bereits viele ARIA-Rollen enthalten.

### Tastaturinteraktionen

Wenn ein Tastaturbenutzer auf ein Gitter trifft, navigiert er durch die Reihen und Spalten mit den Tasten <kbd>links</kbd>, <kbd>rechts</kbd>, <kbd>oben</kbd> und <kbd>unten</kbd>. Um die interaktive Komponente zu aktivieren, verwendet er die Tasten <kbd>Enter</kbd> und <kbd>Leertaste</kbd>.

| Taste                             | Aktion                                                                                                                                                                                                                                                                                |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>→</kbd>                      | Verschiebt den Fokus um eine Zelle nach rechts. Optional (Layout-Raster), wenn der Fokus auf der rechten Zelle der Reihe ist, kann der Fokus zur ersten Zelle in der folgenden Reihe wechseln. Wenn der Fokus auf der letzten Zelle im Gitter ist, bewegt sich der Fokus nicht.       |
| <kbd>←</kbd>                      | Verschiebt den Fokus um eine Zelle nach links. Optional (Layout-Raster), wenn der Fokus auf der linken Zelle der Reihe ist, kann der Fokus zur letzten Zelle in der vorherigen Reihe wechseln. Wenn der Fokus auf der ersten Zelle im Gitter ist, bewegt sich der Fokus nicht.        |
| <kbd>↓</kbd>                      | Verschiebt den Fokus um eine Zelle nach unten. Optional (Layout-Raster), wenn der Fokus auf der unteren Zelle der Spalte ist, kann der Fokus zur oberen Zelle in der folgenden Spalte wechseln. Wenn der Fokus auf der letzten Zelle im Gitter ist, bewegt sich der Fokus nicht.      |
| <kbd>↑</kbd>                      | Verschiebt den Fokus um eine Zelle nach oben. Optional (Layout-Raster), wenn der Fokus auf der oberen Zelle der Spalte ist, kann der Fokus zur unteren Zelle in der vorherigen Spalte wechseln. Wenn der Fokus auf der ersten Zelle im Gitter ist, bewegt sich der Fokus nicht.       |
| <kbd>Bild Ab</kbd>                | Verschiebt den Fokus um eine vom Autor bestimmte Anzahl von Reihen nach unten, wobei normalerweise so gescrollt wird, dass die unterste sichtbare Reihe zu einer der ersten sichtbaren Reihen wird. Wenn der Fokus in der letzten Reihe des Gitters ist, bewegt sich der Fokus nicht. |
| <kbd>Bild Auf</kbd>               | Verschiebt den Fokus um eine vom Autor bestimmte Anzahl von Reihen nach oben, wobei normalerweise so gescrollt wird, dass die oberste sichtbare Reihe zu einer der letzten sichtbaren Reihen wird. Wenn der Fokus in der ersten Reihe des Gitters ist, bewegt sich der Fokus nicht.   |
| <kbd>Home</kbd>                   | Verschiebt den Fokus zur ersten Zelle in der Reihe, die den Fokus enthält.                                                                                                                                                                                                            |
| <kbd>Ende</kbd>                   | Verschiebt den Fokus zur letzten Zelle in der Reihe, die den Fokus enthält.                                                                                                                                                                                                           |
| <kbd>Strg</kbd> + <kbd>Home</kbd> | Verschiebt den Fokus zur ersten Zelle in der ersten Reihe.                                                                                                                                                                                                                            |
| <kbd>Strg</kbd> + <kbd>Ende</kbd> | Verschiebt den Fokus zur letzten Zelle in der letzten Reihe.                                                                                                                                                                                                                          |

Wenn Zellen, Reihen oder Spalten ausgewählt werden können, werden üblicherweise folgende Tastenkombinationen verwendet:

| Tastenkombination                          | Aktion                                                                                                                                                                                                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>Strg</kbd> + <kbd>Leertaste</kbd>     | Wählt die Spalte aus, die den Fokus enthält.                                                                                                                                                                                                                             |
| <kbd>Umschalt</kbd> + <kbd>Leertaste</kbd> | Wählt die Reihe aus, die den Fokus enthält. Wenn das Gitter eine Spalte mit Kontrollkästchen zum Auswählen von Reihen enthält, kann diese Tastenkombination verwendet werden, um das Kästchen zu aktivieren, selbst wenn der Fokus nicht auf dem Kontrollkästchen liegt. |
| <kbd>Strg</kbd> + <kbd>A</kbd>             | Wählt alle Zellen aus.                                                                                                                                                                                                                                                   |
| <kbd>Umschalt</kbd> + <kbd>→</kbd>         | Erweitert die Auswahl um eine Zelle nach rechts.                                                                                                                                                                                                                         |
| <kbd>Umschalt</kbd> + <kbd>←</kbd>         | Erweitert die Auswahl um eine Zelle nach links.                                                                                                                                                                                                                          |
| <kbd>Umschalt</kbd> + <kbd>↓</kbd>         | Erweitert die Auswahl um eine Zelle nach unten.                                                                                                                                                                                                                          |
| <kbd>Umschalt</kbd> + <kbd>↑</kbd>         | Erweitert die Auswahl um eine Zelle nach oben.                                                                                                                                                                                                                           |

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
let row = 0;
let col = 0;
let maxrow = trs.length - 1;
let maxcol = 0;

trs.forEach((gridrow) => {
  gridrow.querySelectorAll("td").forEach((el) => {
    el.dataset.row = row;
    el.dataset.col = col;
    col++;
  });
  if (col > maxcol) {
    maxcol = col - 1;
  }
  col = 0;
  row++;
});

function moveto(newrow, newcol) {
  const tgt = document.querySelector(
    `[data-row="${newrow}"][data-col="${newcol}"]`,
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
      const newrow = col === 6 ? row + 1 : row;
      const newcol = col === 6 ? 0 : col + 1;
      moveto(newrow, newcol);
      break;
    }
    case "ArrowLeft": {
      const newrow = col === 0 ? row - 1 : row;
      const newcol = col === 0 ? 6 : col - 1;
      moveto(newrow, newcol);
      break;
    }
    case "ArrowDown":
      moveto(row + 1, col);
      break;
    case "ArrowUp":
      moveto(row - 1, col);
      break;
    case "Home": {
      if (event.ctrlKey) {
        let i = 0;
        let result;
        do {
          let j = 0;
          do {
            result = moveto(i, j);
            j++;
          } while (!result);
          i++;
        } while (!result);
      } else {
        moveto(row, 0);
      }
      break;
    }
    case "End": {
      if (event.ctrlKey) {
        let i = maxrow;
        let result;
        do {
          let j = maxcol;
          do {
            result = moveto(i, j);
            j--;
          } while (!result);
          i--;
        } while (!result);
      } else {
        moveto(
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
        result = moveto(i, col);
        i++;
      } while (!result);
      break;
    }
    case "PageDown": {
      let i = maxrow;
      let result;
      do {
        result = moveto(i, col);
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
- [Layout-Raster-Beispiele](https://www.w3.org/WAI/ARIA/apg/example-index/grid/LayoutGrids.html)
- [W3C/WAI Tutorial: Tabellen](https://www.w3.org/WAI/tutorials/tables/)

## Barrierefreiheitsaspekte

Selbst wenn die Tastaturbedienung ordnungsgemäß implementiert ist, sind sich einige Benutzer möglicherweise nicht bewusst, dass sie die Pfeiltasten verwenden müssen. Stellen Sie sicher, dass die benötigte Funktionalität und Interaktion am besten mit der Gitterrolle erreicht werden kann.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA `composite` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/composite_role)
- [ARIA `table` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
- [ARIA `treegrid` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
- [ARIA `row` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [ARIA `rowgroup` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [ARIA: `gridcell` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [ARIA: `rowheader` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [ARIA: columnheader Rolle](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- {{HTMLElement('table','HTML <code>&lt;table&gt;</code> element')}}
- [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level)
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
