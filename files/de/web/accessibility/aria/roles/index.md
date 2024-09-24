---
title: WAI-ARIA-Rollen
slug: Web/Accessibility/ARIA/Roles
l10n:
  sourceCommit: 2ad6d0ccee6bf1cd7416517ac1711c006c18ae7c
---

{{AccessibilitySidebar}}

ARIA-Rollen verleihen Inhalten semantische Bedeutung und ermöglichen es Bildschirmlesegeräten und anderen Werkzeugen, ein Objekt auf eine Weise zu präsentieren und zu unterstützen, die den Erwartungen der Benutzer an diesen Objekttyp entspricht. <abbr>ARIA</abbr>-Rollen können verwendet werden, um Elemente zu beschreiben, die entweder nicht nativ in HTML existieren oder existieren, aber noch nicht vollständig von Browsern unterstützt werden.

Standardmäßig haben viele semantische Elemente in HTML eine Rolle; zum Beispiel hat `<input type="radio">` die Rolle "radio". Nicht-semantische Elemente in HTML haben keine Rolle; `<div>` und `<span>` ohne hinzugefügte Semantik geben `null` zurück. Das `role`-Attribut kann Semantik liefern.

ARIA-Rollen werden HTML-Elementen mithilfe von `role="rollentyp"` hinzugefügt, wobei _rollentyp_ der Name einer Rolle in der ARIA-Spezifikation ist. Einige Rollen erfordern die Einbeziehung zugehöriger ARIA-Zustände oder -Eigenschaften; andere sind nur in Verbindung mit anderen Rollen gültig.

Zum Beispiel wird `<ul role="tabpanel">` von Bildschirmlesegeräten als 'Tabellenbereich' angekündigt. Wenn der Tabellenbereich jedoch keine verschachtelten Tabs hat, ist das Element mit der Tabpanel-Rolle tatsächlich kein Tabellenbereich, und die Zugänglichkeit wurde negativ beeinflusst.

Die [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes), die jeder Rolle zugeordnet sind, sind auf den Seiten der Rollen enthalten, wobei jedes Attribut auch über eine eigene Seite verfügt.

## ARIA-Rollentypen

Es gibt 6 Kategorien von ARIA-Rollen:

### 1. Dokumentstruktur-Rollen

Dokumentstruktur-Rollen werden verwendet, um eine strukturelle Beschreibung für einen Abschnitt von Inhalten bereitzustellen. Die meisten dieser Rollen sollten nicht mehr verwendet werden, da Browser jetzt semantische HTML-Elemente mit derselben Bedeutung unterstützen. Die Rollen ohne HTML-Äquivalente, wie Präsentation, Werkzeugleiste und Tooltip-Rollen, liefern Assistenztechnologien wie Bildschirmlesegeräten Informationen über die Dokumentstruktur, da gleichwertige native HTML-Tags nicht verfügbar sind.

- [toolbar](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
- [tooltip](/de/docs/Web/Accessibility/ARIA/Roles/tooltip_role)
- [feed](/de/docs/Web/Accessibility/ARIA/Roles/feed_role)
- [math](/de/docs/Web/Accessibility/ARIA/Roles/math_role)
- [presentation](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) / [none](/de/docs/Web/Accessibility/ARIA/Roles/none_role)
- [note](/de/docs/Web/Accessibility/ARIA/Roles/note_role)

Für die meisten Dokumentstruktur-Rollen sind semantische HTML-äquivalente Elemente verfügbar und unterstützt. Vermeiden Sie die Verwendung von:

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
- [img](/de/docs/Web/Accessibility/ARIA/Roles/img_role) (verwenden Sie {{HTMLElement('img')}} oder {{HTMLElement('picture')}} statt)
- [list](/de/docs/Web/Accessibility/ARIA/Roles/list_role) (verwenden Sie entweder {{HTMLElement('ul')}} oder {{HTMLElement('ol')}} statt)
- [listitem](/de/docs/Web/Accessibility/ARIA/Roles/listitem_role) (verwenden Sie {{HTMLElement('li')}} statt)
- [meter](/de/docs/Web/Accessibility/ARIA/Roles/meter_role) (verwenden Sie {{HTMLElement('meter')}} statt)
- [row](/de/docs/Web/Accessibility/ARIA/Roles/row_role) (verwenden Sie die {{HTMLElement('tr')}} mit {{HTMLElement('table')}})
- [rowgroup](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) (verwenden Sie {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}})
- [rowheader](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) (verwenden Sie `{{HTMLElement('th','&lt;th scope="row">')}}`)
- [separator](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (verwenden Sie {{HTMLElement('hr')}} wenn es keinen Fokus hat)
- [table](/de/docs/Web/Accessibility/ARIA/Roles/table_role) (verwenden Sie {{HTMLElement('table')}})
- [term](/de/docs/Web/Accessibility/ARIA/Roles/term_role) (verwenden Sie {{HTMLElement('dfn')}})

Diese sind der Vollständigkeit halber enthalten, sind jedoch in den meisten Fällen selten oder überhaupt nicht nützlich:

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

Widget-Rollen werden verwendet, um gängige interaktive Muster zu definieren. Wie Dokumentstrukturrollen haben einige Widget-Rollen dieselbe Semantik wie gut unterstützte native HTML-Elemente und sollten daher vermieden werden. Der Hauptunterschied besteht darin, dass Widget-Rollen typischerweise JavaScript für die Interaktion erfordern, während Dokumentstrukturrollen oft nicht.

- [scrollbar](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [searchbox](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [separator](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (wenn fokussierbar)
- [slider](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [spinbutton](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [switch](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [tab](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [tabpanel](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
- [treeitem](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

Vermeiden Sie die Verwendung von [button](/de/docs/Web/Accessibility/ARIA/Roles/button_role), [checkbox](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role), [gridcell](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [link](/de/docs/Web/Accessibility/ARIA/Roles/link_role), [menuitem](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [menuitemcheckbox](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), [menuitemradio](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role), [option](/de/docs/Web/Accessibility/ARIA/Roles/option_role), [progressbar](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role), [radio](/de/docs/Web/Accessibility/ARIA/Roles/radio_role), und [textbox](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role), die wir der Vollständigkeit halber aufgenommen haben. Für die meisten sind semantische Äquivalente mit zugänglicher Interaktivität verfügbar und unterstützt. Siehe die Dokumentation der einzelnen Rollen für weitere Informationen.

#### Komposit-Widget-Rollen

- [combobox](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [menu](/de/docs/Web/Accessibility/ARIA/Roles/menu_role)
- [menubar](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [tablist](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [tree](/de/docs/Web/Accessibility/ARIA/Roles/tree_role)
- [treegrid](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

Vermeiden Sie die Verwendung von [grid](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [listbox](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role) und [radiogroup](/de/docs/Web/Accessibility/ARIA/Roles/radio_role), die wir der Vollständigkeit halber aufgenommen haben. Siehe die Dokumentation der einzelnen Rollen für weitere Informationen.

Beachten Sie, dass es auch eine Widget-Rolle (`role="widget"`) gibt, die eine abstrakte Rolle ist und nicht zur Widget-Rollenkategorie gehört.

### 3. Landmark-Rollen

Landmark-Rollen bieten eine Möglichkeit, die Organisation und Struktur einer Webseite zu identifizieren. Durch die Klassifizierung und Kennzeichnung von Abschnitten einer Seite wird die strukturelle Information, die visuell durch das Layout vermittelt wird, programmatisch dargestellt. Bildschirmlesegeräte verwenden Landmark-Rollen, um eine Tastaturnavigation zu wichtigen Abschnitten einer Seite bereitzustellen. Verwenden Sie diese sparsam. Zu viele Landmark-Rollen erzeugen "Geräusche" in Bildschirmlesegeräten, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

- [banner](/de/docs/Web/Accessibility/ARIA/Roles/banner_role) (dokumentiert {{HTMLElement('header')}})
- [complementary](/de/docs/Web/Accessibility/ARIA/Roles/complementary_role) ({{HTMLElement('aside')}})
- [contentinfo](/de/docs/Web/Accessibility/ARIA/Roles/contentinfo_role) (dokumentiert {{HTMLElement('footer')}})
- [form](/de/docs/Web/Accessibility/ARIA/Roles/form_role) ({{HTMLElement('form')}})
- [main](/de/docs/Web/Accessibility/ARIA/Roles/main_role) ({{HTMLElement('main')}})
- [navigation](/de/docs/Web/Accessibility/ARIA/Roles/navigation_role) ({{HTMLElement('nav')}})
- [region](/de/docs/Web/Accessibility/ARIA/Roles/region_role) ({{HTMLElement('section')}})
- [search](/de/docs/Web/Accessibility/ARIA/Roles/search_role) ({{HTMLElement('search')}})

### 4. Live-Region-Rollen

Live-Region-Rollen werden verwendet, um Elemente mit Inhalten zu definieren, die dynamisch geändert werden. Anwender mit sehenden Augen können dynamische Änderungen sehen, wenn sie visuell bemerkbar sind. Diese Rollen helfen Nutzern mit eingeschränktem Sehvermögen und blinden Nutzern zu wissen, ob Inhalte aktualisiert wurden. Assistierende Technologien, wie Bildschirmlesegeräte, können so eingestellt werden, dass sie dynamische Inhaltsänderungen ankündigen:

- [alert](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [log](/de/docs/Web/Accessibility/ARIA/Roles/log_role)
- [marquee](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [status](/de/docs/Web/Accessibility/ARIA/Roles/status_role)
- [timer](/de/docs/Web/Accessibility/ARIA/Roles/timer_role)

### 5. Fensterrollen

Fensterrollen definieren Unterfenster im Hauptdokumentfenster, innerhalb desselben Fensters, wie Popup-Modal-Dialoge:

- [alertdialog](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [dialog](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)

### 6. Abstrakte Rollen

Abstrakte Rollen sind nur zur Verwendung durch Browser vorgesehen, um ein Dokument zu organisieren und zu optimieren. Sie sollten nicht von Entwicklern genutzt werden, die HTML-Markup schreiben. Eine solche Verwendung würde nicht zu sinnvoller Informationen führen, die an Assistenztechnologien oder Benutzer vermittelt werden.

Vermeiden Sie die Verwendung von [command](/de/docs/Web/Accessibility/ARIA/Roles/command_role), [composite](/de/docs/Web/Accessibility/ARIA/Roles/composite_role), [input](/de/docs/Web/Accessibility/ARIA/Roles/input_role), [landmark](/de/docs/Web/Accessibility/ARIA/Roles/landmark_role), [range](/de/docs/Web/Accessibility/ARIA/Roles/range_role), [roletype](/de/docs/Web/Accessibility/ARIA/Roles/roletype_role), [section](/de/docs/Web/Accessibility/ARIA/Roles/section_role), [sectionhead](/de/docs/Web/Accessibility/ARIA/Roles/sectionhead_role), [select](/de/docs/Web/Accessibility/ARIA/Roles/select_role), [structure](/de/docs/Web/Accessibility/ARIA/Roles/structure_role), [widget](/de/docs/Web/Accessibility/ARIA/Roles/widget_role) und [window](/de/docs/Web/Accessibility/ARIA/Roles/window_role).

> [!NOTE]
> Verwenden Sie keine abstrakten Rollen in Ihren Webseiten und Anwendungen. Sie sind nur für die Nutzung durch Browser vorgesehen. Sie sind nur zu Referenzzwecken enthalten.

> [!WARNING]
> "Abstract roles are used for the ontology. Authors **MUST NOT** use abstract roles in content." - Die <abbr>WAI-ARIA</abbr>-Spezifikation

## Rollen, die auf MDN definiert sind

Die folgenden sind die Referenzseiten, die die auf <abbr>MDN</abbr> besprochenen WAI-ARIA-Rollen abdecken.

{{SubpagesWithSummaries}}

## Siehe auch

- [Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques)
- [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes)
