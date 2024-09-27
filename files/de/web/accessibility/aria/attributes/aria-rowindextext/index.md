---
title: aria-rowindextext
slug: Web/Accessibility/ARIA/Attributes/aria-rowindextext
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das Attribut `aria-rowindextext` definiert eine menschenlesbare Textalternative zu `aria-rowindex`.

## Beschreibung

Wenn Sie eine sehr lange Tabelle haben oder absichtlich nur einen Abschnitt einer Tabelle anzeigen möchten, sind möglicherweise nicht alle Zeilen im DOM vorhanden. In diesem Fall verwenden wir [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) mit einem ganzzahligen Wert, um zu definieren, wie viele Zeilen die Tabelle (oder das Raster) hätte, wenn alle Zeilen vorhanden wären, und fügen die Eigenschaft [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) zu jeder Zeile und übergreifenden Zelle hinzu, um Informationen über den Zeilenindex innerhalb dieser größeren Tabelle bereitzustellen. Wenn der Wert von `aria-rowindex` nicht aussagekräftig ist oder den angezeigten Index nicht widerspiegelt, können wir auch `aria-rowindextext` hinzufügen, um eine menschenlesbare Textalternative zum ganzzahligen Wert von `aria-rowindex` bereitzustellen.

Das `aria-rowindextext` sollte nur als Ergänzung, nicht als Ersatz für `aria-rowindex` aufgenommen werden. Einige unterstützende Technologien verwenden den numerischen Zeilenindex, um die Position des Benutzers zu verfolgen oder eine alternative Tabellennavigation bereitzustellen. Das `aria-rowindextext` ist nützlich, wenn dieser ganzzahlige Wert nicht aussagekräftig ist oder den angezeigten Index nicht widerspiegelt, wie z. B. bei einem Schachspiel oder Schiffe versenken.

Das `aria-rowindextext` wird zu jedem {{HTMLElement('tr')}} oder zu Elementen mit der Rolle `row` hinzugefügt. Es kann auch als Ergänzung zu Zellen oder untergeordneten Elementen jeder Zeile hinzugefügt werden.

## Werte

- `<string>`
  - Die menschenlesbare Textalternative zum numerischen [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)

## Zugehörige Schnittstellen

- [`Element.ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText)
  - : Die [`ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-rowindextext`-Attributs wider.
- [`ElementInternals.ariaRowIndexText`](/de/docs/Web/API/ElementInternals/ariaRowIndexText)
  - : Die [`ariaRowIndexText`](/de/docs/Web/API/ElementInternals/ariaRowIndexText)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-rowindextext`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)

Geerbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
- [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
- [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext)
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
