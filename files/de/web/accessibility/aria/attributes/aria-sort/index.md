---
title: aria-sort
slug: Web/Accessibility/ARIA/Attributes/aria-sort
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das Attribut `aria-sort` gibt an, ob Elemente in einer Tabelle oder einem Gitter in aufsteigender oder absteigender Reihenfolge sortiert sind.

## Beschreibung

Wenn ein Gitter oder eine Tabelle Sortierungsfunktionen bietet, sollte das Attribut `aria-sort` entweder auf `ascending` oder `descending` (oder `other`) an das Header-Zellenelement für die sortierte Spalte oder Reihe gesetzt werden.

Das Attribut `aria-sort` wird nur auf der derzeit sortierten Spalte oder Reihe gesetzt. Setzen Sie `aria-sort="ascending"`, um anzuzeigen, dass die Datenzellen in der Spalte oder Reihe in aufsteigender Reihenfolge sortiert sind. Wenn die Sortierreihenfolge umgekehrt wird, schalten Sie den Wert auf `aria-sort="descending"` um. Wenn eine andere Spalte oder Reihe sortiert wird, wird das einzelne `aria-sort`-Attribut in die Header-Zelle der neu sortierten Spalte oder Reihe mit dem entsprechenden Wert für die Sortierreihenfolge verschoben.

Das Attribut `aria-sort` sollte nur zu einer einzigen Tabellen- oder Gitterüberschrift gleichzeitig hinzugefügt werden. Das Attribut dient dazu, Benutzer von unterstützender Technologie darüber zu informieren, welche Spalte oder Reihe sortiert ist. Es hat keine Auswirkungen auf die tatsächliche Sortierreihenfolge.

## Beispiele

Diese Tabelle wird mit der Spalte Nachname in aufsteigender Reihenfolge geladen.

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

Wenn ein Benutzer auf den Button _Last Name_ klickt, würde [`aria-pressed="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) dem {{HTMLElement('button')}}-Element hinzugefügt werden und der Wert `aria-sort` würde per JavaScript auf `"descending"` umgeschaltet. Wenn der Benutzer auf einen anderen Header-Button klickt, würde `aria-sort` aus dem _Last Name_ Header entfernt und auf den geklickten {{HTMLElement('th')}}-Elternteil übertragen.

Wir haben Anweisungen in der Überschrift für unterstützende Technologien bereitgestellt, die möglicherweise die Pfeile nach unten nicht sehen, die wir mit CSS hinzufügen würden, indem wir die `th[aria-sort="ascending"]` und `th[aria-sort="descending"]` Selektoren anvisieren.

## Werte

- `ascending`
  - : Elemente sind in aufsteigender Reihenfolge in dieser Spalte sortiert.
- `descending`
  - : Elemente sind in absteigender Reihenfolge in dieser Spalte sortiert.
- `none` (Standard)
  - : Es ist keine definierte Sortierung auf die Spalte angewendet.
- `other`
  - : Ein anderes Sortierverfahren als aufsteigend oder absteigend wurde angewendet.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaSort")}}
  - : Die [`ariaSort`](/de/docs/Web/API/Element/ariaSort)-Eigenschaft, Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des `aria-sort`-Attributs wider.
- {{domxref("ElementInternals.ariaSort")}}
  - : Die [`ariaSort`](/de/docs/Web/API/ElementInternals/ariaSort)-Eigenschaft, Teil der {{domxref("ElementInternals")}}-Schnittstelle, spiegelt den Wert des `aria-sort`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Beispiel einer sortierbaren Tabelle](https://www.w3.org/TR/wai-aria-practices-1.2/examples/table/sortable-table.html) -W3C
- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
- Das {{HTMLElement('th')}}-Element
