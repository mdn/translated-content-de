---
title: aria-rowspan
slug: Web/Accessibility/ARIA/Attributes/aria-rowspan
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-rowspan` definiert die Anzahl der Zeilen, die von einer Zelle oder Grid-Zelle innerhalb einer Tabelle, eines Grids oder eines Baumgrids überspannt werden.

## Beschreibung

Ähnlich dem `rowspan`-Attribut der {{HTMLElement('td')}}- und {{HTMLElement('th')}}-Elemente, jedoch für Zellen und Grid-Zellen, die sich nicht in einer nativen Tabelle befinden, definiert das Attribut `aria-rowspan` die Anzahl der Zeilen, die von einer `cell` oder `gridcell` innerhalb einer `table`, `grid` oder `treegrid` überspannt werden.

Dieses Attribut ist für Zellen und Grid-Zellen gedacht, die **nicht** Teil einer HTML {{HTMLElement('table')}} sind. Wenn eine Zelle in einer semantischen `<table>` eingebettet ist, sollte das `rowspan`-Attribut verwendet werden, wenn ein <td> oder <th> mehr als eine Zeile überspannt. Wenn beide vorhanden sind, hat `rowspan` Vorrang vor `aria-rowspan`. Aber wie alle ARIA-Attribute beeinflusst `aria-rowspan` nur den Zugänglichkeitsbaum. Es ändert nicht Ihr Layout.

> [!NOTE]
> ARIA verändert den Zugänglichkeitsbaum und wie Hilfstechnologien Inhalte Ihren Benutzern präsentieren. ARIA ändert nichts an der Funktion, dem Verhalten oder dem Aussehen eines Elements. Wenn Sie nicht-semantische Elemente verwenden, müssen Sie CSS nutzen, um das Layout und Aussehen zu steuern.

Der Wert von `aria-rowspan` ist eine Ganzzahl, die größer oder gleich 0 ist und kleiner als der Wert, der dazu führen würde, dass die Zelle oder Grid-Zelle die nächste Zelle oder Grid-Zelle in derselben Spalte überlappt. Der Wert `0` besagt, dass die Zelle oder Grid-Zelle alle verbleibenden Zeilen in der Zeilengruppe überspannen soll. Der Standardwert ist `1`.

## Werte

- `<integer>`
  - : Eine Ganzzahl, die größer oder gleich `0` ist und kleiner als der Wert, der dazu führen würde, dass eine Zelle die nächste Zelle in derselben Spalte überlappt.

## Zugehörige Schnittstellen

- [`Element.ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan)
  - : Die Eigenschaft [`ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan), Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-rowspan`-Attributs wider.
- [`ElementInternals.ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan)
  - : Die Eigenschaft [`ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan), Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-rowspan`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)

Übernommen in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan)-Attribut auf {{HTMLElement('td')}}
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
