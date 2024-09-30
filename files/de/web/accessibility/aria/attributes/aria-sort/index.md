---
title: aria-sort
slug: Web/Accessibility/ARIA/Attributes/aria-sort
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das `aria-sort` Attribut gibt an, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.

## Beschreibung

Wenn ein Raster oder eine Tabelle Sortierfunktionen bietet, sollte das `aria-sort` Attribut entweder auf `ascending` oder `descending` (oder `other`) auf das Header-Zellenelement für die sortierte Spalte oder Zeile gesetzt werden.

Das `aria-sort` Attribut wird nur auf die aktuell sortierte Spalte oder Zeile gesetzt. Setzen Sie `aria-sort="ascending"`, um anzuzeigen, dass die Datenzellen in der Spalte oder Zeile in aufsteigender Reihenfolge sortiert sind. Wenn die Sortierreihenfolge umgekehrt wird, ändern Sie den Wert zu `aria-sort="descending"`. Wenn eine andere Spalte oder Zeile sortiert wird, wird das einzelne `aria-sort` Attribut zur Header-Zelle für die neu sortierte Spalte oder Zeile mit dem entsprechenden Wert für die Sortierreihenfolge verschoben.

Das `aria-sort` Attribut sollte jeweils nur zu einem einzigen Tabellen- oder Raster-Header hinzugefügt werden. Das Attribut wird gesetzt, um Nutzern von unterstützender Technologie mitzuteilen, welche Spalte oder Zeile sortiert ist. Es hat keinen Einfluss auf die tatsächliche Sortierreihenfolge.

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

Wenn ein Benutzer auf den _Nachname_ Button klickt, würde [`aria-pressed="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) zum {{HTMLElement('button')}} Element hinzugefügt und der `aria-sort` Wert mit JavaScript auf `"descending"` umgeschaltet. Wenn der Benutzer auf einen anderen Header-Button klickt, würde `aria-sort` vom _Nachname_ Header entfernt und auf den geklickten Button's {{HTMLElement('th')}} Elternteil gesetzt.

Wir haben Anweisungen in der Beschriftung für unterstützende Technologien bereitgestellt, die die Pfeile nach unten möglicherweise nicht sehen, die wir mit CSS auf die `th[aria-sort="ascending"]` und `th[aria-sort="descending"]` Selektoren abzielen würden.

## Werte

- `ascending`
  - : Elemente sind in aufsteigender Reihenfolge nach dieser Spalte sortiert.
- `descending`
  - : Elemente sind in absteigender Reihenfolge nach dieser Spalte sortiert.
- `none` (Standard)
  - : Es ist keine definierte Sortierung auf die Spalte angewendet.
- `other`
  - : Ein anderer Sortieralgorithmus als aufsteigend oder absteigend wurde angewendet.

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

- [Beispiel für sortierbare Tabelle](https://www.w3.org/TR/wai-aria-practices-1.2/examples/table/sortable-table.html) - W3C
- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
- Das {{HTMLElement('th')}} Element
