---
title: "ARIA: Attribut aria-sort"
short-title: aria-sort
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-sort
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Das Attribut `aria-sort` gibt an, ob Elemente in einer Tabelle oder einem Grid aufsteigend oder absteigend sortiert sind.

## Beschreibung

Wenn ein Grid oder eine Tabelle eine Sortierfunktion bietet, sollte das Attribut `aria-sort` für die Kopfzelle der sortierten Spalte oder Zeile auf `ascending`, `descending` oder `other` gesetzt werden.

Das Attribut `aria-sort` wird nur für die aktuell sortierte Spalte oder Zeile gesetzt. Setzen Sie `aria-sort="ascending"`, um anzugeben, dass die Datenzellen in der Spalte oder Zeile aufsteigend sortiert sind. Wird die Sortierreihenfolge umgekehrt, ändern Sie den Wert auf `aria-sort="descending"`. Wenn eine andere Spalte oder Zeile sortiert wird, wird das einzige Attribut `aria-sort` zur Kopfzelle der neu sortierten Spalte oder Zeile verschoben und auf den entsprechenden Wert gesetzt.

Das Attribut `aria-sort` sollte jeweils nur einer Kopfzelle einer Tabelle oder eines Grids hinzugefügt werden. Es informiert Nutzer von Hilfstechnologien darüber, welche Spalte oder Zeile sortiert ist. Auf die tatsächliche Sortierreihenfolge hat es keinen Einfluss.

## Werte

- `ascending`
  - : Die Elemente sind nach dieser Spalte aufsteigend sortiert.
- `descending`
  - : Die Elemente sind nach dieser Spalte absteigend sortiert.
- `none` (Standardwert)
  - : Für die Spalte ist keine Sortierung festgelegt.
- `other`
  - : Es wurde ein anderer Sortieralgorithmus als eine aufsteigende oder absteigende Sortierung angewendet.

## Zugehörige Schnittstellen

- [`Element.ariaSort`](/de/docs/Web/API/Element/ariaSort)
  - : Die Eigenschaft [`ariaSort`](/de/docs/Web/API/Element/ariaSort) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-sort` wider.
- [`ElementInternals.ariaSort`](/de/docs/Web/API/ElementInternals/ariaSort)
  - : Die Eigenschaft [`ariaSort`](/de/docs/Web/API/ElementInternals/ariaSort) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-sort` wider.

## Zugehörige Rollen

Wird in folgenden Rollen verwendet:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## Beispiele

Beim Laden dieser Tabelle ist die Spalte mit den Nachnamen aufsteigend sortiert.

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

Wenn ein Nutzer auf die Schaltfläche _Last Name_ klickt, wird dem Element {{HTMLElement('button')}} [`aria-pressed="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) hinzugefügt und der Wert von `aria-sort` mit JavaScript auf `"descending"` geändert. Klickt der Nutzer auf eine andere Schaltfläche im Tabellenkopf, wird `aria-sort` aus der Kopfzelle _Last Name_ entfernt und dem übergeordneten Element {{HTMLElement('th')}} der angeklickten Schaltfläche hinzugefügt.

In der Tabellenbeschriftung haben wir Anweisungen für Nutzer von Hilfstechnologien bereitgestellt, die die nach unten zeigenden Pfeile möglicherweise nicht sehen können. Diese Pfeile würden wir mit CSS über die Selektoren `th[aria-sort="ascending"]` und `th[aria-sort="descending"]` hinzufügen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Beispiel für eine sortierbare Tabelle](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/) – ARIA Authoring Practices Guide (APG)
- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- Das Element {{HTMLElement('th')}}
