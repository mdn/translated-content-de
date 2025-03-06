---
title: aria-sort
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-sort
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das Attribut `aria-sort` gibt an, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.

## Beschreibung

Wenn eine Tabelle oder ein Raster eine Sortierfunktion bietet, sollte das Attribut `aria-sort` entweder auf `ascending` oder `descending` (oder `other`) an der Kopfzelle des sortierten Spalten- oder Zeilenelements gesetzt werden.

Das Attribut `aria-sort` wird nur auf die aktuell sortierte Spalte oder Zeile angewendet. Setzen Sie `aria-sort="ascending"`, um anzuzeigen, dass die Datenzellen in der Spalte oder Zeile in aufsteigender Reihenfolge sortiert sind. Wenn die Sortierreihenfolge umgekehrt wird, ändern Sie den Wert auf `aria-sort="descending"`. Wenn eine andere Spalte oder Zeile sortiert wird, wird das einzelne Attribut `aria-sort` zur Kopfzelle der neu sortierten Spalte oder Zeile mit dem entsprechenden Wert für die Sortierreihenfolge verschoben.

Das Attribut `aria-sort` sollte immer nur zu einem einzigen Tabellen- oder Rasterkopf gleichzeitig hinzugefügt werden. Das Attribut wird gesetzt, um Benutzer von Hilfstechnologien darüber zu informieren, welche Spalte oder Zeile sortiert ist. Es hat keinen Einfluss auf die tatsächliche Sortierreihenfolge.

## Beispiele

Diese Tabelle lädt mit der Spalte Nachname in aufsteigender Reihenfolge sortiert.

```html
<table>
  <caption>
    Steering Committee Members
  </caption>
  <thead>
    <tr>
      <th>
        <button>First Name</button>
      </th>
      <th aria-sort="ascending">
        <button>Last Name</button>
      </th>
      <th>
        <button>Company</button>
      </th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    …
  </tbody>
</table>
```

Wenn ein Benutzer auf die Schaltfläche _Last Name_ klickt, würde [`aria-pressed="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) zum {{HTMLElement('button')}}-Element hinzugefügt werden, und der Wert von `aria-sort` würde mit JavaScript auf `"descending"` umgeschaltet werden. Wenn der Benutzer auf eine andere Kopfzeilenschaltfläche klickt, wird `aria-sort` aus der _Last Name_-Kopfzeile entfernt, um auf die angeklickte Schaltfläche des {{HTMLElement('th')}}-Elternteils gesetzt zu werden.

Wir haben Anweisungen in der Beschriftung für Hilfstechnologien bereitgestellt, die möglicherweise die nach unten zeigenden Pfeile nicht sehen, die wir mit CSS für die Selektoren `th[aria-sort="ascending"]` und `th[aria-sort="descending"]` hinzufügen würden.

## Werte

- `ascending`
  - : Elemente werden in aufsteigender Reihenfolge nach dieser Spalte sortiert.
- `descending`
  - : Elemente werden in absteigender Reihenfolge nach dieser Spalte sortiert.
- `none` (Standard)
  - : Es ist keine definierte Sortierung auf die Spalte angewendet.
- `other`
  - : Ein anderes Sortierverfahren als aufsteigend oder absteigend wurde angewendet.

## Zugehörige Interfaces

- [`Element.ariaSort`](/de/docs/Web/API/Element/ariaSort)
  - : Die [`ariaSort`](/de/docs/Web/API/Element/ariaSort)-Eigenschaft, die Teil des [`Element`](/de/docs/Web/API/Element)-Interfaces ist, spiegelt den Wert des `aria-sort`-Attributs wider.
- [`ElementInternals.ariaSort`](/de/docs/Web/API/ElementInternals/ariaSort)
  - : Die [`ariaSort`](/de/docs/Web/API/ElementInternals/ariaSort)-Eigenschaft, die Teil des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces ist, spiegelt den Wert des `aria-sort`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Beispiel für eine sortierbare Tabelle](https://www.w3.org/TR/wai-aria-practices-1.2/examples/table/sortable-table.html) - W3C
- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- Das {{HTMLElement('th')}}-Element
