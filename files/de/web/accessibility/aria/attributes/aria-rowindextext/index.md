---
title: aria-rowindextext
slug: Web/Accessibility/ARIA/Attributes/aria-rowindextext
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das Attribut `aria-rowindextext` definiert einen lesbaren Text als Alternative zu `aria-rowindex`.

## Beschreibung

Wenn Sie eine sehr lange Tabelle haben oder absichtlich nur einen Abschnitt einer Tabelle anzeigen möchten, sind möglicherweise nicht alle Zeilen im DOM vorhanden. In diesem Fall verwenden wir [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) mit einem ganzzahligen Wert, um zu definieren, wie viele Zeilen die Tabelle (oder das Raster) hätte, wenn alle Zeilen vorhanden wären. Wir fügen die Eigenschaft [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) für jede Zeile und jede sich erstreckende Zelle hinzu, um Informationen über den Zeilenindex innerhalb dieser größeren Tabelle bereitzustellen. Wenn der Wert von `aria-rowindex` keine Bedeutung hat oder nicht den angezeigten Index widerspiegelt, können wir auch `aria-rowindextext` hinzufügen, um eine lesbare Textalternative zum ganzzahligen Wert von `aria-rowindex` bereitzustellen.

Das `aria-rowindextext` sollte **zusätzlich zu**, nicht als Ersatz für das `aria-rowindex` enthalten sein. Einige unterstützende Technologien verwenden den numerischen Zeilenindex, um den Standort des Benutzers zu verfolgen oder alternative Tabellen-Navigationsmöglichkeiten zu bieten. Das `aria-rowindextext` ist nützlich, wenn dieser ganzzahlige Wert nicht aussagekräftig ist oder nicht den angezeigten Index widerspiegelt, wie zum Beispiel bei einem Schach- oder Schiffe-Versenken-Spiel.

Das `aria-rowindextext` wird jedem {{HTMLElement('tr')}} oder Elementen mit der Rolle `row` hinzugefügt. Es kann auch zusätzlich zu Zellen oder untergeordneten Elementen jeder Zeile hinzugefügt werden.

## Werte

- `<string>`
  - Die lesbare Textalternative des numerischen [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)

## Zugehörige Schnittstellen

- {{domxref("Element.ariaRowIndexText")}}
  - : Die Eigenschaft [`ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText), Teil der {{domxref("Element")}} Schnittstelle, spiegelt den Wert des Attributs `aria-rowindextext` wider.
- {{domxref("ElementInternals.ariaRowIndexText")}}
  - : Die Eigenschaft [`ariaRowIndexText`](/de/docs/Web/API/ElementInternals/ariaRowIndexText), Teil der {{domxref("ElementInternals")}} Schnittstelle, spiegelt den Wert des Attributs `aria-rowindextext` wider.

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
