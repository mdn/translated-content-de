---
title: "ARIA: aria-rowspan Attribut"
short-title: aria-rowspan
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-rowspan` Attribut definiert die Anzahl der von einer Zelle oder Gridcell innerhalb einer Tabelle, eines Grids oder Treegrids überspannten Reihen.

## Beschreibung

Ähnlich dem `rowspan` Attribut der {{HTMLElement('td')}} und {{HTMLElement('th')}} Elemente, jedoch für Zellen und Gridcells, die nicht in einer nativen Tabelle enthalten sind, definiert das `aria-rowspan` Attribut die Anzahl der von einer `cell` oder `gridcell` innerhalb einer `table`, `grid` oder `treegrid` überspannten Reihen.

Dieses Attribut ist für Zellen und Gridcells gedacht, die **nicht** Teil einer HTML {{HTMLElement('table')}} sind. Wenn eine Zelle in eine semantische `<table>` eingebettet ist, sollte das `rowspan` Attribut verwendet werden, wenn ein <td> oder <th> sich über mehr als eine Reihe erstreckt. Sind beide Attribute vorhanden, hat `rowspan` Vorrang vor `aria-rowspan`. Aber wie alle ARIA-Attribute beeinflusst `aria-rowspan` nur den Accessibility-Tree. Es ändert nicht das Layout.

> [!NOTE]
> ARIA verändert den Accessibility-Tree und wie unterstützende Technologie den Inhalt Ihren Nutzern präsentiert. ARIA verändert nichts an der Funktion, dem Verhalten oder dem Erscheinungsbild eines Elements. Beim Einsatz nicht-semantischer Elemente, müssen Sie CSS verwenden, um Layout und Erscheinungsbild zu steuern.

Der Wert von `aria-rowspan` ist eine ganze Zahl, die größer oder gleich 0 und kleiner als der Wert ist, der dazu führen würde, dass sich die Zelle oder Gridcell mit der nächsten Zelle oder Gridcell in derselben Spalte überlappt. Der Wert `0` gibt an, dass die Zelle oder Gridcell alle verbleibenden Reihen in der Zeilengruppe überspannen soll. Der Standardwert ist `1`.

## Werte

- `<integer>`
  - : Eine ganze Zahl, die größer oder gleich `0` ist und kleiner ist, als dazu führen würde, dass eine Zelle sich mit der nächsten Zelle in derselben Spalte überlappt.

## Zugehörige Schnittstellen

- [`Element.ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan)
  - : Die [`ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-rowspan` Attributs wider.
- [`ElementInternals.ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan)
  - : Die [`ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-rowspan` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

Geerbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) Attribut auf {{HTMLElement('td')}}
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
