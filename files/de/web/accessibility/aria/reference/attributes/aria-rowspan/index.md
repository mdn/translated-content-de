---
title: aria-rowspan
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das Attribut `aria-rowspan` definiert die Anzahl der Zeilen, die von einer Zelle oder einer Rasterzelle innerhalb einer Tabelle, eines Rasters oder eines Baumrasters überspannt werden.

## Beschreibung

Ähnlich dem Attribut `rowspan` der {{HTMLElement('td')}}- und {{HTMLElement('th')}}-Elemente, jedoch für Zellen und Rasterzellen, die nicht in einer nativen Tabelle enthalten sind, definiert das Attribut `aria-rowspan` die Anzahl der Zeilen, die von einer `cell` oder `gridcell` innerhalb einer `table`, `grid` oder `treegrid` überspannt werden.

Dieses Attribut ist für Zellen und Rasterzellen gedacht, die **nicht** Teil eines HTML-{{HTMLElement('table')}} sind. Wenn eine Zelle in einer semantischen `<table>` geschachtelt ist, sollte das Attribut `rowspan` verwendet werden, wenn ein <td> oder <th> mehr als eine Zeile überspannt. Wenn beide vorhanden sind, hat `rowspan` Vorrang vor `aria-rowspan`. Aber wie alle ARIA-Attribute beeinflusst `aria-rowspan` nur den Barrierefreiheitsbaum. Es ändert nicht Ihr Layout.

> [!NOTE]
> ARIA verändert den Barrierefreiheitsbaum und wie unterstützende Technologie Inhalte Ihren Benutzern präsentiert. ARIA ändert nichts an der Funktion, dem Verhalten oder dem Aussehen eines Elements. Wenn Sie nicht-semantische Elemente verwenden, müssen Sie CSS verwenden, um Layout und Aussehen zu verwalten.

Der Wert von `aria-rowspan` ist eine Ganzzahl, die größer oder gleich 0 ist und kleiner als der Wert, der dazu führen würde, dass die Zelle oder Rasterzelle die nächste Zelle oder Rasterzelle in derselben Spalte überlappt. Das Setzen des Wertes auf `0` zeigt an, dass die Zelle oder Rasterzelle alle verbleibenden Zeilen in der Zeilengruppe überspannen soll. Der Standardwert ist `1`.

## Werte

- `<integer>`
  - : Eine Ganzzahl, die größer oder gleich `0` ist und kleiner ist, als dass eine Zelle die nächste Zelle in derselben Spalte überlappen würde.

## Zugehörige Schnittstellen

- [`Element.ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan)
  - : Die [`ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-rowspan`-Attributes wider.
- [`ElementInternals.ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan)
  - : Die [`ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-rowspan`-Attributes wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan)-Attribut auf {{HTMLElement('td')}}
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
