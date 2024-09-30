---
title: aria-rowindextext
slug: Web/Accessibility/ARIA/Attributes/aria-rowindextext
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das Attribut `aria-rowindextext` definiert einen für Menschen lesbaren Text als Alternative zu `aria-rowindex`.

## Beschreibung

Wenn Sie eine sehr lange Tabelle haben oder wenn Sie absichtlich nur einen Abschnitt einer Tabelle anzeigen möchten, sind möglicherweise nicht alle Zeilen im DOM vorhanden. In diesem Fall verwenden wir [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) mit einem ganzzahligen Wert, um festzulegen, wie viele Zeilen die Tabelle (oder das Raster) hätte, wenn alle Zeilen vorhanden wären, und fügen der [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)-Eigenschaft jeder Zeile und sich erstreckender Zelle Informationen über den Zeilenindex innerhalb dieser größeren Tabelle hinzu. Wenn der Wert von `aria-rowindex` nicht aussagekräftig ist oder nicht den angezeigten Index widerspiegelt, können wir auch `aria-rowindextext` hinzufügen, um eine für Menschen lesbare Textalternative zum ganzzahligen Wert von `aria-rowindex` bereitzustellen.

`aria-rowindextext` sollte nur **zusätzlich zu** und nicht als Ersatz für `aria-rowindex` enthalten sein. Einige unterstützende Technologien verwenden den numerischen Zeilenindex, um die Position des Benutzers zu verfolgen oder alternative Tabellen-Navigation bereitzustellen. `aria-rowindextext` ist nützlich, wenn dieser ganzzahlige Wert nicht aussagekräftig ist oder nicht den angezeigten Index widerspiegelt, wie z.B. bei einem Schach- oder Schiffe-Versenken-Spiel.

`aria-rowindextext` wird zu jedem {{HTMLElement('tr')}} oder zu Elementen mit der `row`-Rolle hinzugefügt. Es kann auch zu Zellen oder besessenen Elementen jeder Zeile zusätzlich hinzugefügt werden.

## Werte

- `<string>`
  - Die für Menschen lesbare Textalternative des numerischen [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)

## Zugehörige Schnittstellen

- [`Element.ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText)
  - : Die [`ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText)-Eigenschaft, die Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist, spiegelt den Wert des Attributs `aria-rowindextext` wider.
- [`ElementInternals.ariaRowIndexText`](/de/docs/Web/API/ElementInternals/ariaRowIndexText)
  - : Die [`ariaRowIndexText`](/de/docs/Web/API/ElementInternals/ariaRowIndexText)-Eigenschaft, die Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle ist, spiegelt den Wert des Attributs `aria-rowindextext` wider.

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
