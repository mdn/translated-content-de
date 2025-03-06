---
title: aria-rowindextext
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das Attribut `aria-rowindextext` definiert eine menschenlesbare Textalternative zu `aria-rowindex`.

## Beschreibung

Wenn Sie eine sehr lange Tabelle haben oder bewusst nur einen Abschnitt einer Tabelle anzeigen möchten, sind möglicherweise nicht alle Zeilen im DOM vorhanden. In diesem Fall verwenden wir das Attribut [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) mit einem ganzzahligen Wert, um festzulegen, wie viele Zeilen die Tabelle (oder das Raster) hätte, wenn alle Zeilen vorhanden wären. Wir fügen auch die Eigenschaft [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) zu jeder Zeile und zu übergreifenden Zellen hinzu, um Informationen über den Zeilenindex innerhalb dieser größeren Tabelle bereitzustellen. Wenn der Wert von `aria-rowindex` nicht aussagekräftig ist oder nicht den angezeigten Index widerspiegelt, können wir zusätzlich das `aria-rowindextext`-Attribut hinzufügen, um eine menschenlesbare Textalternative zum ganzzahligen `aria-rowindex`-Wert bereitzustellen.

Das `aria-rowindextext`-Attribut sollte nur zusätzlich zu, und nicht als Ersatz für, das `aria-rowindex` verwendet werden. Einige unterstützende Technologien verwenden den numerischen Zeilenindex, um die Position des Benutzers zu verfolgen oder eine alternative Tabellennavigation bereitzustellen. Das `aria-rowindextext`-Attribut ist nützlich, wenn dieser ganzzahlige Wert nicht aussagekräftig ist oder nicht den angezeigten Index widerspiegelt, wie bei einem Schach- oder Schiffe-Versenken-Spiel.

Das `aria-rowindextext` wird zu jeder {{HTMLElement('tr')}} oder zu Elementen mit der Rolle `row` hinzugefügt. Es kann auch zu Zellen oder zugehörigen Elementen jeder Zeile hinzugefügt werden.

## Werte

- `<string>`
  - Die menschenlesbare Textalternative zum numerischen [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)

## Zugehörige Schnittstellen

- [`Element.ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText)
  - : Die [`ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-rowindextext`-Attributs wider.
- [`ElementInternals.ariaRowIndexText`](/de/docs/Web/API/ElementInternals/ariaRowIndexText)
  - : Die [`ariaRowIndexText`](/de/docs/Web/API/ElementInternals/ariaRowIndexText)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-rowindextext`-Attributs wider.

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
