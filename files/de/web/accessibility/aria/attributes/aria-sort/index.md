---
title: aria-sort
slug: Web/Accessibility/ARIA/Attributes/aria-sort
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das `aria-sort` Attribut zeigt an, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.

## Beschreibung

Wenn ein Raster oder eine Tabelle eine Sortierfunktion bietet, sollte das `aria-sort` Attribut auf `ascending`, `descending` (oder `other`) im Kopfzellenelement für die sortierte Spalte oder Zeile gesetzt werden.

Das `aria-sort` Attribut wird nur auf der aktuell sortierten Spalte oder Zeile gesetzt. Setzen Sie `aria-sort="ascending"`, um anzuzeigen, dass die Datenzellen in der Spalte oder Zeile in aufsteigender Reihenfolge sortiert sind. Wenn die Sortierreihenfolge umgekehrt ist, ändern Sie den Wert auf `aria-sort="descending"`. Wenn eine andere Spalte oder Zeile sortiert wird, wird das einzelne `aria-sort` Attribut zur Kopfzelle der neu sortierten Spalte oder Zeile mit dem entsprechenden Wert für die Sortierreihenfolge verschoben.

Das `aria-sort` Attribut sollte immer nur zu einem einzigen Tabellen- oder Rasterkopf hinzugefügt werden. Das Attribut wird gesetzt, um Nutzer assistiver Technologien darüber zu informieren, welche Spalte oder Zeile sortiert ist. Es hat keinen Einfluss auf die tatsächliche Sortierreihenfolge.

## Beispiele

Diese Tabelle wird geladen, indem die Nachnamensspalte in aufsteigender Reihenfolge sortiert ist.

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

Wenn ein Benutzer auf den _Last Name_ Button klickt, würde [`aria-pressed="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) dem {{HTMLElement('button')}} Element hinzugefügt und der `aria-sort` Wert mit JavaScript auf `"descending"` umgeschaltet. Wenn der Benutzer auf eine andere Kopfzeile klickt, würde das `aria-sort` aus der _Last Name_ Kopfzeile entfernt und auf den geklickten Button's {{HTMLElement('th')}} Parent gesetzt werden.

Wir haben in der Bildunterschrift Anweisungen für assistive Technologien gegeben, die möglicherweise nicht die nach unten gerichteten Pfeile sehen, die wir mit CSS-Selektoren `th[aria-sort="ascending"]` und `th[aria-sort="descending"]` hinzufügen würden.

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

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Beispiel für sortierbare Tabelle](https://www.w3.org/TR/wai-aria-practices-1.2/examples/table/sortable-table.html) -W3C
- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
- Das {{HTMLElement('th')}} Element
