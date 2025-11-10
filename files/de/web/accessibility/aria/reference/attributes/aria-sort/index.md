---
title: "ARIA: aria-sort Attribut"
short-title: aria-sort
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-sort
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Das `aria-sort` Attribut zeigt an, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.

## Beschreibung

Wenn ein Raster oder eine Tabelle Sortierfunktionen bereitstellt, sollte das `aria-sort` Attribut entweder auf `ascending` oder `descending` (oder `other`) im Kopfzellen-Element der sortierten Spalte oder Zeile gesetzt werden.

Das `aria-sort` Attribut wird nur auf der aktuell sortierten Spalte oder Zeile gesetzt. Setzen Sie `aria-sort="ascending"`, um anzuzeigen, dass die Datenzellen in der Spalte oder Zeile in aufsteigender Reihenfolge sortiert sind. Wenn die Sortierreihenfolge umgekehrt wird, ändern Sie den Wert zu `aria-sort="descending"`. Wenn eine andere Spalte oder Zeile sortiert wird, wird das einzige `aria-sort` Attribut auf die Kopfzelle der neu sortierten Spalte oder Zeile mit dem entsprechenden Wert für die Sortierreihenfolge verschoben.

Das `aria-sort` Attribut sollte jeweils nur zu einem einzelnen Tabellen- oder Rasterkopf hinzugefügt werden. Das Attribut wird verwendet, um Benutzer von unterstützenden Technologien darüber zu informieren, welche Spalte oder Zeile sortiert ist. Es hat keinen Einfluss auf die tatsächliche Sortierreihenfolge.

## Beispiele

Diese Tabelle wird mit der nach Nachnamen sortierten Spalte in aufsteigender Reihenfolge geladen.

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

Wenn ein Benutzer auf die Schaltfläche _Last Name_ klickt, würde [`aria-pressed="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) dem {{HTMLElement('button')}} Element hinzugefügt und der `aria-sort` Wert würde mit JavaScript auf `"descending"` umgeschaltet. Wenn der Benutzer auf eine andere Kopfzeilenschaltfläche klickt, würde `aria-sort` von der _Last Name_ Kopfzeile entfernt werden, um es auf der geklickten Schaltfläche des {{HTMLElement('th')}} Elternteils zu platzieren.

Wir haben Anweisungen in der Kopfzeile für unterstützende Technologien bereitgestellt, die möglicherweise nicht die Abwärtspfeile sehen, die wir mit CSS für die `th[aria-sort="ascending"]` und `th[aria-sort="descending"]` Selektoren hinzufügen würden.

## Werte

- `ascending`
  - : Elemente sind in aufsteigender Reihenfolge nach dieser Spalte sortiert.
- `descending`
  - : Elemente sind in absteigender Reihenfolge nach dieser Spalte sortiert.
- `none` (Standard)
  - : Es ist keine definierte Sortierung auf die Spalte angewendet.
- `other`
  - : Ein anderes Sortierverfahren als aufsteigend oder absteigend wurde angewendet.

## Zugehörige Schnittstellen

- [`Element.ariaSort`](/de/docs/Web/API/Element/ariaSort)
  - : Die [`ariaSort`](/de/docs/Web/API/Element/ariaSort) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-sort` Attributs wider.
- [`ElementInternals.ariaSort`](/de/docs/Web/API/ElementInternals/ariaSort)
  - : Die [`ariaSort`](/de/docs/Web/API/ElementInternals/ariaSort) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-sort` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Beispiel für sortierbare Tabelle](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/) - ARIA Authoring Practices Guide (APG)
- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- Das {{HTMLElement('th')}} Element
