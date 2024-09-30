---
title: WAI-ARIA Rollen
slug: Web/Accessibility/ARIA/Roles
l10n:
  sourceCommit: 2ad6d0ccee6bf1cd7416517ac1711c006c18ae7c
---

{{AccessibilitySidebar}}

ARIA-Rollen bieten semantische Bedeutungen für Inhalte, die es Screenreadern und anderen Tools ermöglichen, die Interaktion mit einem Objekt auf eine Weise zu präsentieren und zu unterstützen, die den Erwartungen der Benutzer an diesen Objekttyp entspricht. <abbr>ARIA</abbr>-Rollen können verwendet werden, um Elemente zu beschreiben, die nicht nativ in HTML existieren oder die existieren, aber noch nicht vollständig von Browsern unterstützt werden.

Standardmäßig haben viele semantische Elemente in HTML eine Rolle; zum Beispiel hat `<input type="radio">` die Rolle "radio". Nicht-semantische Elemente in HTML haben keine Rolle; `<div>` und `<span>` ohne hinzugefügte Semantik geben `null` zurück. Das `role`-Attribut kann Semantik bereitstellen.

ARIA-Rollen werden HTML-Elementen mit `role="Rollentyp"` hinzugefügt, wobei _Rollentyp_ der Name einer Rolle in der ARIA-Spezifikation ist. Einige Rollen erfordern die Einbeziehung verbundener ARIA-Zustände oder -Eigenschaften; andere sind nur in Verbindung mit anderen Rollen gültig.

Zum Beispiel wird `<ul role="tabpanel">` von Screenreadern als 'Tab-Panel' angekündigt. Wenn das Tab-Panel jedoch keine verschachtelten Tabs hat, ist das Element mit der Tabpanel-Rolle tatsächlich kein Tab-Panel, und die Zugänglichkeit wird negativ beeinflusst.

Die mit jeder Rolle verbundenen [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes) sind auf den Seiten der Rolle enthalten, wobei jedes Attribut auch über eine eigene Seite verfügt.

## ARIA-Rollentypen

Es gibt 6 Kategorien von ARIA-Rollen:

### 1. Dokumentstruktur-Rollen

Dokumentstruktur-Rollen werden verwendet, um eine strukturelle Beschreibung für einen Abschnitt von Inhalten bereitzustellen. Die meisten dieser Rollen sollten nicht mehr verwendet werden, da Browser jetzt semantische HTML-Elemente mit derselben Bedeutung unterstützen. Die Rollen ohne HTML-Äquivalente, wie Präsentations-, Werkzeug- und Tooltipp-Rollen, bieten unterstützenden Technologien wie Screenreadern Informationen über die Dokumentstruktur, da keine äquivalenten nativen HTML-Tags verfügbar sind.

- [toolbar](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
- [tooltip](/de/docs/Web/Accessibility/ARIA/Roles/tooltip_role)
- [feed](/de/docs/Web/Accessibility/ARIA/Roles/feed_role)
- [math](/de/docs/Web/Accessibility/ARIA/Roles/math_role)
- [presentation](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) / [none](/de/docs/Web/Accessibility/ARIA/Roles/none_role)
- [note](/de/docs/Web/Accessibility/ARIA/Roles/note_role)

Für die meisten Dokumentstruktur-Rollen sind semantische HTML-Äquivalente verfügbar und unterstützt. Vermeiden Sie die Verwendung von:

- [application](/de/docs/Web/Accessibility/ARIA/Roles/application_role)
- [article](/de/docs/Web/Accessibility/ARIA/Roles/article_role) (verwenden Sie {{HTMLElement('article')}})
- [cell](/de/docs/Web/Accessibility/ARIA/Roles/cell_role) (verwenden Sie {{HTMLElement('td')}})
- [columnheader](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) (verwenden Sie `{{HTMLElement('th', '&lt;th scope="col">')}}`)
- [definition](/de/docs/Web/Accessibility/ARIA/Roles/definition_role) (verwenden Sie {{HTMLElement('dfn')}})
- [directory](/de/docs/Web/Accessibility/ARIA/Roles/directory_role)
- [document](/de/docs/Web/Accessibility/ARIA/Roles/document_role)
- [figure](/de/docs/Web/Accessibility/ARIA/Roles/figure_role) (verwenden Sie stattdessen {{HTMLElement('figure')}})
- [group](/de/docs/Web/Accessibility/ARIA/Roles/group_role)
- [heading](/de/docs/Web/Accessibility/ARIA/Roles/heading_role) (verwenden Sie {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}})
- [img](/de/docs/Web/Accessibility/ARIA/Roles/img_role) (verwenden Sie {{HTMLElement('img')}} oder {{HTMLElement('picture')}} stattdessen)
- [list](/de/docs/Web/Accessibility/ARIA/Roles/list_role) (verwenden Sie entweder {{HTMLElement('ul')}} oder {{HTMLElement('ol')}} stattdessen)
- [listitem](/de/docs/Web/Accessibility/ARIA/Roles/listitem_role) (verwenden Sie {{HTMLElement('li')}} stattdessen)
- [meter](/de/docs/Web/Accessibility/ARIA/Roles/meter_role) (verwenden Sie {{HTMLElement('meter')}} stattdessen)
- [row](/de/docs/Web/Accessibility/ARIA/Roles/row_role) (verwenden Sie {{HTMLElement('tr')}} mit {{HTMLElement('table')}})
- [rowgroup](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) (verwenden Sie {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}})
- [rowheader](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) (verwenden Sie `{{HTMLElement('th','&lt;th scope="row">')}}`)
- [separator](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (verwenden Sie {{HTMLElement('hr')}} wenn es nicht fokussierbar ist)
- [table](/de/docs/Web/Accessibility/ARIA/Roles/table_role) (verwenden Sie {{HTMLElement('table')}})
- [term](/de/docs/Web/Accessibility/ARIA/Roles/term_role) (verwenden Sie {{HTMLElement('dfn')}})

Diese werden der Vollständigkeit halber eingeschlossen, sind aber in den meisten Fällen selten oder gar nicht nützlich:

- [`associationlist`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`associationlistitemkey`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`associationlistitemvalue`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`blockquote`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`caption`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`code`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`deletion`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`emphasis`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`insertion`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`paragraph`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`strong`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`subscript`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`superscript`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`time`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)

### 2. Widget-Rollen

Widget-Rollen werden verwendet, um gängige interaktive Muster zu definieren. Wie Dokumentstruktur-Rollen haben einige Widget-Rollen dieselbe Semantik wie gut unterstützte native HTML-Elemente und sollten daher vermieden werden. Ein wesentlicher Unterschied besteht darin, dass Widget-Rollen in der Regel JavaScript für die Interaktion erfordern, während Dokumentstruktur-Rollen dies nicht tun.

- [scrollbar](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [searchbox](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [separator](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (wenn fokussierbar)
- [slider](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [spinbutton](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [switch](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [tab](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [tabpanel](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
- [treeitem](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

Vermeiden Sie die Verwendung von [button](/de/docs/Web/Accessibility/ARIA/Roles/button_role), [checkbox](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role), [gridcell](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [link](/de/docs/Web/Accessibility/ARIA/Roles/link_role), [menuitem](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [menuitemcheckbox](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), [menuitemradio](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role), [option](/de/docs/Web/Accessibility/ARIA/Roles/option_role), [progressbar](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role), [radio](/de/docs/Web/Accessibility/ARIA/Roles/radio_role) und [textbox](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role), die wir der Vollständigkeit halber eingeschlossen haben. Für die meisten sind semantische Äquivalente mit zugänglicher Interaktivität verfügbar und unterstützt. Weitere Informationen finden Sie in der individuellen Rollendokumentation.

#### Zusammengesetzte Widget-Rollen

- [combobox](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [menu](/de/docs/Web/Accessibility/ARIA/Roles/menu_role)
- [menubar](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [tablist](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [tree](/de/docs/Web/Accessibility/ARIA/Roles/tree_role)
- [treegrid](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

Vermeiden Sie die Verwendung von [grid](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [listbox](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role) und [radiogroup](/de/docs/Web/Accessibility/ARIA/Roles/radio_role), die wir der Vollständigkeit halber eingeschlossen haben. Weitere Informationen finden Sie in der individuellen Rollendokumentation.

Beachten Sie, dass es auch eine Widget-Rolle (`role="widget"`) gibt, die eine abstrakte Rolle ist und nicht zur Kategorie der Widget-Rollen gehört.

### 3. Landmark-Rollen

Landmark-Rollen bieten eine Möglichkeit, die Organisation und Struktur einer Webseite zu identifizieren. Durch Klassifizierung und Kennzeichnung von Seitensektionen wird die strukturelle Information, die visuell durch das Layout vermittelt wird, programmatisch repräsentiert. Screenreader verwenden Landmark-Rollen, um die Tastaturnavigation zu wichtigen Seitensektionen bereitzustellen. Verwenden Sie diese sparsam. Zu viele Landmark-Rollen erzeugen "Rauschen" in Screenreadern, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

- [banner](/de/docs/Web/Accessibility/ARIA/Roles/banner_role) (Dokument {{HTMLElement('header')}})
- [complementary](/de/docs/Web/Accessibility/ARIA/Roles/complementary_role) ({{HTMLElement('aside')}})
- [contentinfo](/de/docs/Web/Accessibility/ARIA/Roles/contentinfo_role) (Dokument {{HTMLElement('footer')}})
- [form](/de/docs/Web/Accessibility/ARIA/Roles/form_role) ({{HTMLElement('form')}})
- [main](/de/docs/Web/Accessibility/ARIA/Roles/main_role) ({{HTMLElement('main')}})
- [navigation](/de/docs/Web/Accessibility/ARIA/Roles/navigation_role) ({{HTMLElement('nav')}})
- [region](/de/docs/Web/Accessibility/ARIA/Roles/region_role) ({{HTMLElement('section')}})
- [search](/de/docs/Web/Accessibility/ARIA/Roles/search_role) ({{HTMLElement('search')}})

### 4. Live-Region-Rollen

Live-Region-Rollen werden verwendet, um Elemente zu definieren, deren Inhalte dynamisch geändert werden. Sehende Benutzer können dynamische Änderungen sehen, wenn sie visuell erkennbar sind. Diese Rollen helfen sehbehinderten und blinden Benutzern zu wissen, ob Inhalte aktualisiert wurden. Unterstützende Technologien, wie Screenreader, können dazu veranlasst werden, dynamische Inhaltsänderungen anzukündigen:

- [alert](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [log](/de/docs/Web/Accessibility/ARIA/Roles/log_role)
- [marquee](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [status](/de/docs/Web/Accessibility/ARIA/Roles/status_role)
- [timer](/de/docs/Web/Accessibility/ARIA/Roles/timer_role)

### 5. Fensterrollen

Fensterrollen definieren Unterfenster für das Hauptdokumentfenster, innerhalb desselben Fensters, wie z.B. modale Dialoge:

- [alertdialog](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [dialog](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)

### 6. Abstrakte Rollen

Abstrakte Rollen sind nur für die Verwendung durch Browser gedacht, um ein Dokument zu organisieren und zu rationalisieren. Sie sollten nicht von Entwicklern, die HTML-Markup schreiben, verwendet werden. Dadurch wird den unterstützenden Technologien oder den Benutzern keine sinnvolle Information vermittelt.

Vermeiden Sie die Verwendung von [command](/de/docs/Web/Accessibility/ARIA/Roles/command_role), [composite](/de/docs/Web/Accessibility/ARIA/Roles/composite_role), [input](/de/docs/Web/Accessibility/ARIA/Roles/input_role), [landmark](/de/docs/Web/Accessibility/ARIA/Roles/landmark_role), [range](/de/docs/Web/Accessibility/ARIA/Roles/range_role), [roletype](/de/docs/Web/Accessibility/ARIA/Roles/roletype_role), [section](/de/docs/Web/Accessibility/ARIA/Roles/section_role), [sectionhead](/de/docs/Web/Accessibility/ARIA/Roles/sectionhead_role), [select](/de/docs/Web/Accessibility/ARIA/Roles/select_role), [structure](/de/docs/Web/Accessibility/ARIA/Roles/structure_role), [widget](/de/docs/Web/Accessibility/ARIA/Roles/widget_role) und [window](/de/docs/Web/Accessibility/ARIA/Roles/window_role).

> [!NOTE]
> Verwenden Sie keine abstrakten Rollen in Ihren Seiten und Anwendungen. Sie sind für die Verwendung durch Browser gedacht. Sie sind nur zur Referenz enthalten.

> [!WARNING]
> "Abstrakte Rollen werden für die Ontologie verwendet. Autoren **DÜRFEN** keine abstrakten Rollen in Inhalten verwenden." - Die <abbr>WAI-ARIA</abbr>-Spezifikation

## Auf MDN definierte Rollen

Im Folgenden finden Sie die Referenzseiten zu den auf <abbr>MDN</abbr> besprochenen WAI-ARIA-Rollen.

{{SubpagesWithSummaries}}

## Siehe auch

- [Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques)
- [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes)
