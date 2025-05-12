---
title: "ARIA: aria-rowindextext Attribut"
short-title: aria-rowindextext
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-rowindextext` Attribut definiert eine menschenlesbare Textalternative zu `aria-rowindex`.

## Beschreibung

Wenn Sie eine sehr lange Tabelle haben oder absichtlich nur einen Abschnitt einer Tabelle anzeigen möchten, sind möglicherweise nicht alle Zeilen im DOM vorhanden. Wenn dies der Fall ist, verwenden wir das [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) mit einem ganzzahligen Wert, um zu definieren, wie viele Zeilen die Tabelle (oder das Raster) hätte, wenn alle Zeilen vorhanden wären, und fügen die [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) Eigenschaft zu jeder Zeile und übergreifenden Zelle hinzu, um Informationen über den Zeilenindex innerhalb dieser größeren Tabelle bereitzustellen. Wenn der Wert von `aria-rowindex` nicht aussagekräftig ist oder nicht den angezeigten Index widerspiegelt, können wir auch das `aria-rowindextext` hinzufügen, um eine menschenlesbare Textalternative zum ganzzahligen Wert von `aria-rowindex` bereitzustellen.

Das `aria-rowindextext` sollte nur **zusätzlich zu** und nicht als Ersatz für das `aria-rowindex` enthalten sein. Einige Hilfstechnologien verwenden den numerischen Zeilenindex, um die Position des Benutzers zu verfolgen oder alternative Tabellennavigation bereitzustellen. Das `aria-rowindextext` ist nützlich, wenn dieser ganzzahlige Wert nicht aussagekräftig ist oder nicht den angezeigten Index widerspiegelt, wie beispielsweise bei einem Schachspiel oder "Schiffe versenken".

Das `aria-rowindextext` wird zu jedem {{HTMLElement('tr')}} oder zu Elementen mit der `row` Rolle hinzugefügt. Es kann auch zusätzlich zu Zellen oder zugehörigen Elementen jeder Zeile hinzugefügt werden.

## Werte

- `<string>`
  - Die menschenlesbare Textalternative zum numerischen [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)

## Zugehörige Schnittstellen

- [`Element.ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText)
  - : Die [`ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-rowindextext` Attributs wider.
- [`ElementInternals.ariaRowIndexText`](/de/docs/Web/API/ElementInternals/ariaRowIndexText)
  - : Die [`ariaRowIndexText`](/de/docs/Web/API/ElementInternals/ariaRowIndexText) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-rowindextext` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)

Geerbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext)
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
