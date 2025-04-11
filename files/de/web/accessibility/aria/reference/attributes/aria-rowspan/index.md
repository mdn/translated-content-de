---
title: aria-rowspan
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das `aria-rowspan`-Attribut definiert die Anzahl von Zeilen, die von einer Zelle oder Gridcell innerhalb einer Tabelle, eines Grids oder Treegrids überspannt werden.

## Beschreibung

Ähnlich dem `rowspan`-Attribut der {{HTMLElement('td')}} und {{HTMLElement('th')}}-Elemente, jedoch für Zellen und Gridcells, die nicht in einer nativen Tabelle enthalten sind. Das `aria-rowspan`-Attribut definiert die Anzahl der Zeilen, die von einer `cell` oder `gridcell` innerhalb eines `table`, `grid`, oder `treegrid` überspannt werden.

Dieses Attribut ist für Zellen und Gridcells gedacht, die **nicht** Teil einer HTML-{{HTMLElement('table')}} sind. Wenn eine Zelle in einer semantischen `<table>` verschachtelt ist, sollte das `rowspan`-Attribut verwendet werden, wenn ein <td> oder <th> mehr als eine Zeile überspannt. Wenn beide vorhanden sind, hat `rowspan` Vorrang vor `aria-rowspan`. Aber wie alle ARIA-Attribute wirkt sich `aria-rowspan` nur auf den Accessibility Tree aus. Es ändert nicht Ihr Layout.

> [!NOTE]
> ARIA verändert den Accessibility Tree und wie unterstützende Technologien den Inhalt Ihren Nutzern präsentieren. ARIA ändert nichts an der Funktion, dem Verhalten oder dem Aussehen eines Elements. Bei der Verwendung nicht-semantischer Elemente müssen Sie CSS verwenden, um Layout und Aussehen zu steuern.

Der Wert von `aria-rowspan` ist eine ganze Zahl größer oder gleich 0 und weniger als der Wert, der dazu führen würde, dass die Zelle oder Gridcell die nächste Zelle oder Gridcell in derselben Spalte überlappt. Die Einstellung des Wertes auf `0` bedeutet, dass die Zelle oder Gridcell alle restlichen Zeilen in der Zeilengruppe überspannen soll. Der Standardwert ist `1`.

## Werte

- `<integer>`
  - : Eine ganze Zahl, die größer oder gleich `0` und weniger ist, als dazu führen würde, dass eine Zelle die nächste Zelle in derselben Spalte überlappt.

## Zugehörige Schnittstellen

- [`Element.ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan)
  - : Die [`ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-rowspan`-Attributs wider.
- [`ElementInternals.ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan)
  - : Die [`ariaRowSpan`](/de/docs/Web/API/ElementInternals/ariaRowSpan) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-rowspan`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) Attribut auf {{HTMLElement('td')}}
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
