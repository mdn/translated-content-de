---
title: aria-rowspan
slug: Web/Accessibility/ARIA/Attributes/aria-rowspan
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-rowspan` Attribut definiert die Anzahl der Zeilen, die von einer Zelle oder `gridcell` innerhalb einer Tabelle, eines Grids oder eines `treegrid` überspannt werden.

## Beschreibung

Ähnlich dem `rowspan` Attribut der {{HTMLElement('td')}} und {{HTMLElement('th')}} Elemente, aber für Zellen und `gridcells`, die nicht in einer nativen Tabelle enthalten sind, definiert das `aria-rowspan` Attribut die Anzahl der Zeilen, die von einer `cell` oder `gridcell` innerhalb einer `table`, `grid`, oder `treegrid` überspannt werden.

Dieses Attribut ist für Zellen und `gridcells` gedacht, die **nicht** Teil eines HTML {{HTMLElement('table')}} sind. Wenn eine Zelle in einer semantischen `<table>` verschachtelt ist, sollte das `rowspan` Attribut verwendet werden, wenn ein <td> oder <th> mehr als eine Zeile überspannt. Wenn beide vorhanden sind, hat `rowspan` Vorrang vor `aria-rowspan`. Aber wie alle ARIA-Attribute beeinflusst `aria-rowspan` nur den Accessibility-Tree. Es ändert nicht Ihr Layout.

> [!NOTE]
> ARIA modifiziert den Accessibility-Tree und beeinflusst, wie assistierende Technologien Inhalte Ihren Nutzern präsentieren. ARIA ändert nichts an der Funktion, dem Verhalten oder dem Erscheinungsbild eines Elements. Wenn Sie nicht-semantische Elemente verwenden, müssen Sie CSS verwenden, um Layout und Erscheinungsbild zu steuern.

Der Wert von `aria-rowspan` ist eine ganze Zahl (integer), die größer oder gleich 0 und kleiner als der Wert ist, der dazu führen würde, dass die Zelle oder `gridcell` sich mit der nächsten Zelle oder `gridcell` in derselben Spalte überschneidet. Ein Wert von `0` zeigt an, dass die Zelle oder `gridcell` alle verbleibenden Zeilen in der Zeilengruppe überspannen soll. Der Standardwert ist `1`.

## Werte

- `<integer>`
  - : Eine ganze Zahl, die größer oder gleich `0` ist und kleiner wäre, um eine Zelle dazu zu bringen, sich mit der nächsten Zelle in derselben Spalte zu überschneiden.

## Zugehörige Schnittstellen

- [`Element.ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan)
  - : Die [`ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-rowspan` Attributs wider.
- [`ElementInternals.ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan)
  - : Die [`ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-rowspan` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) Attribut auf {{HTMLElement('td')}}
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
