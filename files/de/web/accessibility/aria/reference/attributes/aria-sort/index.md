---
title: "ARIA: aria-sort-Attribut"
short-title: aria-sort
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-sort
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-sort`-Attribut zeigt an, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.

## Beschreibung

Wenn ein Raster oder eine Tabelle Sortierfunktionen bietet, sollte das `aria-sort`-Attribut entweder auf `ascending`, `descending` (oder `other`) im Kopfzellen-Element der sortierten Spalte oder Zeile gesetzt werden.

Das `aria-sort`-Attribut wird nur auf der aktuell sortierten Spalte oder Zeile gesetzt. Setzen Sie `aria-sort="ascending"`, um anzuzeigen, dass die Datenzellen in der Spalte oder Zeile in aufsteigender Reihenfolge sortiert sind. Wenn die Sortierreihenfolge umgekehrt wird, ändern Sie den Wert auf `aria-sort="descending"`. Wenn eine andere Spalte oder Zeile sortiert wird, wird das einzelne `aria-sort`-Attribut auf die Kopfzelle der neu sortierten Spalte oder Zeile mit dem entsprechenden Wert der Sortierung verschoben.

Das `aria-sort`-Attribut sollte immer nur an einer einzigen Tabellen- oder Rasterkopfzeile hinzugefügt werden. Das Attribut dient dazu, Benutzer von unterstützender Technologie darüber zu informieren, welche Spalte oder Zeile sortiert ist. Es hat keinen Einfluss auf die tatsächliche Sortierreihenfolge.

## Beispiele

Diese Tabelle wird geladen, wobei die "Nachname"-Spalte in aufsteigender Reihenfolge sortiert ist.

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

Wenn ein Benutzer auf die Schaltfläche _Last Name_ klickt, würde [`aria-pressed="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) dem {{HTMLElement('button')}}-Element hinzugefügt werden und der `aria-sort`-Wert würde mit JavaScript auf `"descending"` umgeschaltet werden. Wenn der Benutzer auf eine andere Kopfzeilenschaltfläche klickt, würde das `aria-sort` aus der _Last Name_-Kopfzeile entfernt, um auf die geklickte {{HTMLElement('th')}}-Eltern zu übertragen.

Wir haben Anweisungen in der Beschriftung für unterstützende Technologien bereitgestellt, die möglicherweise die Abwärtspfeile nicht sehen, die wir mit CSS auf die Selektoren `th[aria-sort="ascending"]` und `th[aria-sort="descending"]` anpassen würden.

## Werte

- `ascending`
  - : Elemente sind in dieser Spalte in aufsteigender Reihenfolge sortiert.
- `descending`
  - : Elemente sind in dieser Spalte in absteigender Reihenfolge sortiert.
- `none` (Standard)
  - : Für die Spalte ist keine definierte Sortierung angewendet.
- `other`
  - : Ein anderes Sortierverfahren als aufsteigend oder absteigend wurde angewendet.

## Zugehörige Schnittstellen

- [`Element.ariaSort`](/de/docs/Web/API/Element/ariaSort)
  - : Die [`ariaSort`](/de/docs/Web/API/Element/ariaSort)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-sort`-Attributs wider.
- [`ElementInternals.ariaSort`](/de/docs/Web/API/ElementInternals/ariaSort)
  - : Die [`ariaSort`](/de/docs/Web/API/ElementInternals/ariaSort)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-sort`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Beispiel für eine sortierbare Tabelle](https://www.w3.org/TR/wai-aria-practices-1.2/examples/table/sortable-table.html) -W3C
- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- Das {{HTMLElement('th')}}-Element
