---
title: aria-rowspan
slug: Web/Accessibility/ARIA/Attributes/aria-rowspan
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-rowspan` definiert die Anzahl der Zeilen, die von einer Zelle oder Gridzelle innerhalb einer Tabelle, eines Grids oder Baumgrids überspannt werden.

## Beschreibung

Ähnlich dem `rowspan`-Attribut der {{HTMLElement('td')}}- und {{HTMLElement('th')}}-Elemente, jedoch für Zellen und Gridzellen, die nicht in einer nativen Tabelle enthalten sind, definiert das `aria-rowspan`-Attribut die Anzahl der Zeilen, die von einer `cell` oder `gridcell` innerhalb einer `table`, `grid` oder `treegrid` überspannt werden.

Dieses Attribut ist für Zellen und Gridzellen gedacht, die **nicht** Teil eines HTML-{{HTMLElement('table')}} sind. Wenn eine Zelle in einer semantischen `<table>` verschachtelt ist, sollte das `rowspan`-Attribut verwendet werden, wenn ein <td> oder <th> mehr als eine Zeile überspannt. Wenn beide vorhanden sind, hat `rowspan` Vorrang vor `aria-rowspan`. Aber wie alle ARIA-Attribute beeinflusst `aria-rowspan` nur den Accessibility-Tree. Es ändert nichts am Layout.

> [!NOTE]
> ARIA verändert den Accessibility-Tree und die Art und Weise, wie unterstützende Technologien Inhalte Ihren Benutzern präsentieren. ARIA ändert nichts an der Funktion, dem Verhalten oder dem Aussehen eines Elements. Bei der Verwendung von nicht-semantischen Elementen müssen Sie CSS verwenden, um Layout und Aussehen zu verwalten.

Der Wert von `aria-rowspan` ist eine ganze Zahl größer oder gleich 0 und kleiner als der Wert, der dazu führen würde, dass die Zelle oder Gridzelle mit der nächsten Zelle oder Gridzelle in derselben Spalte überlappt. Wird der Wert auf `0` gesetzt, bedeutet dies, dass die Zelle oder Gridzelle alle verbleibenden Zeilen in der Zeilengruppe überspannen soll. Der Standardwert ist `1`.

## Werte

- `<integer>`
  - : Eine ganze Zahl größer oder gleich `0` und kleiner, die dazu führen würde, dass eine Zelle mit der nächsten Zelle in derselben Spalte überlappt.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaRowSpan")}}
  - : Die [`ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan)-Eigenschaft, Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des `aria-rowspan`-Attributs wider.
- {{domxref("ElementInternals.ariaRowSpan")}}
  - : Die [`ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan)-Eigenschaft, Teil der {{domxref("ElementInternals")}}-Schnittstelle, spiegelt den Wert des `aria-rowspan`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan)-Attribut auf {{HTMLElement('td')}}
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
