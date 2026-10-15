---
title: WAI-ARIA-Rollen
short-title: Roles
slug: Web/Accessibility/ARIA/Reference/Roles
l10n:
  sourceCommit: 370f1912b54d24bd7da541f8f2dd98c26d377121
---

ARIA-Rollen verleihen Inhalten eine semantische Bedeutung. Dadurch können Screenreader und andere Hilfsmittel ein Objekt so darstellen und die Interaktion damit so unterstützen, wie es Benutzende von dieser Art von Objekt erwarten. <abbr>ARIA</abbr>-Rollen können Elemente beschreiben, für die es in HTML kein natives Gegenstück gibt oder die noch nicht vollständig von Browsern unterstützt werden.

Viele semantische HTML-Elemente haben standardmäßig eine Rolle. Beispielsweise hat `<input type="radio">` die Rolle „radio“. Nicht semantische HTML-Elemente haben keine Rolle: `<div>` und `<span>` ohne zusätzliche Semantik geben `null` zurück. Das Attribut `role` kann Semantik bereitstellen.

ARIA-Rollen werden HTML-Elementen mit `role="role type"` hinzugefügt. Dabei ist _role type_ der Name einer Rolle in der ARIA-Spezifikation. Einige Rollen erfordern zugehörige ARIA-Zustände oder -Eigenschaften; andere sind nur in Verbindung mit weiteren Rollen gültig.

Beispielsweise wird `<ul role="tabpanel">` von Screenreadern als „Tab-Panel“ angekündigt. Enthält das Tab-Panel jedoch keine verschachtelten Tabs, ist das Element mit der Rolle `tabpanel` tatsächlich kein Tab-Panel. Die Barrierefreiheit wird dadurch sogar beeinträchtigt.

Die mit jeder Rolle verbundenen [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) sind auf der jeweiligen Rollenseite aufgeführt. Jedes Attribut hat außerdem eine eigene Seite.

## Arten von ARIA-Rollen

Es gibt sechs Kategorien von ARIA-Rollen:

### 1. Rollen für die Dokumentstruktur

Rollen für die Dokumentstruktur beschreiben die Struktur eines Inhaltsabschnitts. Die meisten dieser Rollen sollten nicht mehr verwendet werden, da Browser inzwischen semantische HTML-Elemente mit derselben Bedeutung unterstützen. Rollen ohne HTML-Gegenstück, etwa `presentation`, `toolbar` und `tooltip`, vermitteln assistiven Technologien wie Screenreadern Informationen über die Dokumentstruktur, für die keine gleichwertigen nativen HTML-Elemente verfügbar sind.

- [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
- [`tooltip`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role)
- [`feed`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role)
- [`math`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/math_role)
- [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) / [`none`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`note`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/note_role)

Für die meisten Rollen zur Dokumentstruktur sind gleichwertige semantische HTML-Elemente verfügbar und werden unterstützt. Vermeiden Sie die Verwendung von:

- [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role) (verwenden Sie {{HTMLElement('article')}})
- [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) (verwenden Sie {{HTMLElement('td')}})
- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) (verwenden Sie `{{HTMLElement('th', '&lt;th scope="col">')}}`)
- [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role) (verwenden Sie {{HTMLElement('dfn')}})
- [`directory`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role)
- [`document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role)
- [`figure`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role) (verwenden Sie stattdessen {{HTMLElement('figure')}})
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`heading`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) (verwenden Sie {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}})
- [`img`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) (verwenden Sie stattdessen {{HTMLElement('img')}} oder {{HTMLElement('picture')}})
- [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) (verwenden Sie stattdessen {{HTMLElement('ul')}} oder {{HTMLElement('ol')}})
- [`listitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role) (verwenden Sie stattdessen {{HTMLElement('li')}})
- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role) (verwenden Sie stattdessen {{HTMLElement('meter')}})
- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) (verwenden Sie {{HTMLElement('tr')}} mit {{HTMLElement('table')}})
- [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) (verwenden Sie {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}})
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) (verwenden Sie `{{HTMLElement('th','&lt;th scope="row">')}}`)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (verwenden Sie {{HTMLElement('hr')}}, wenn das Element keinen Fokus erhalten kann)
- [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) (verwenden Sie {{HTMLElement('table')}})
- [`term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role) (verwenden Sie {{HTMLElement('dfn')}})

Die folgenden Rollen sind der Vollständigkeit halber aufgeführt, sind aber in den meisten Fällen selten oder nie nützlich:

- [`associationlist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`associationlistitemkey`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`associationlistitemvalue`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`blockquote`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`caption`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`code`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`deletion`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`emphasis`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`insertion`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`paragraph`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`strong`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`subscript`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`superscript`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`time`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)

Grafikrollen sind im [WAI-ARIA Graphics Module](https://w3c.github.io/graphics-aria/) definiert und beschreiben die Struktur und semantische Bedeutung grafischer Inhalte. Sie sind Unterklassen der Rollen `document`, `group` und `img`.

- [`graphics-document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role)
- [`graphics-object`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role)
- [`graphics-symbol`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-symbol_role)

### 2. Widget-Rollen

Widget-Rollen definieren verbreitete Interaktionsmuster. Wie bei Rollen für die Dokumentstruktur gibt es auch für einige Widget-Rollen gut unterstützte native HTML-Elemente mit derselben Semantik. Diese Rollen sollten daher vermieden werden. Der wesentliche Unterschied besteht darin, dass Widget-Rollen für die Interaktion üblicherweise JavaScript benötigen, Rollen für die Dokumentstruktur dagegen häufig nicht.

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn das Element den Fokus erhalten kann)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

Vermeiden Sie die Verwendung von [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role), [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`link`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role), [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role), [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role), [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role), [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role) und [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role). Diese Rollen sind hier der Vollständigkeit halber aufgeführt. Für die meisten gibt es unterstützte semantische Gegenstücke, die eine barrierefreie Interaktion ermöglichen. Weitere Informationen finden Sie in der Dokumentation der jeweiligen Rolle.

#### Zusammengesetzte Widget-Rollen

- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

Vermeiden Sie die Verwendung von [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) und [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role). Diese Rollen sind hier der Vollständigkeit halber aufgeführt. Weitere Informationen finden Sie in der Dokumentation der jeweiligen Rolle.

Beachten Sie, dass es auch eine Widget-Rolle (`role="widget"`) gibt, die eine abstrakte Rolle ist und nicht zur Kategorie der Widget-Rollen gehört.

### 3. Landmark-Rollen

Landmark-Rollen machen die Gliederung und Struktur einer Webseite erkennbar. Indem Abschnitte einer Seite klassifiziert und bezeichnet werden, lassen sich Strukturinformationen, die visuell durch das Layout vermittelt werden, auch programmatisch darstellen. Screenreader verwenden Landmark-Rollen, um die Tastaturnavigation zu wichtigen Abschnitten einer Seite zu ermöglichen. Setzen Sie diese Rollen sparsam ein. Zu viele Landmark-Rollen erzeugen in Screenreadern „Rauschen“ und erschweren es, den Gesamtaufbau der Seite zu verstehen.

- [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) ({{HTMLElement('header')}} des Dokuments)
- [`complementary`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) ({{HTMLElement('aside')}})
- [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role) ({{HTMLElement('footer')}} des Dokuments)
- [`form`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role) ({{HTMLElement('form')}})
- [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role) ({{HTMLElement('main')}})
- [`navigation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role) ({{HTMLElement('nav')}})
- [`region`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role) ({{HTMLElement('section')}})
- [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) ({{HTMLElement('search')}})

### 4. Live-Region-Rollen

Live-Region-Rollen kennzeichnen Elemente, deren Inhalt sich dynamisch ändert. Sehende Benutzende können solche Änderungen erkennen, wenn sie visuell auffallen. Diese Rollen helfen Menschen mit eingeschränktem Sehvermögen und blinden Menschen zu erkennen, ob Inhalte aktualisiert wurden. Assistive Technologien wie Screenreader können so eingerichtet werden, dass sie dynamische Inhaltsänderungen ankündigen:

- [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [`log`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [`marquee`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [`timer`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)

### 5. Fensterrollen

Fensterrollen definieren Unterfenster innerhalb desselben Fensters wie das Hauptdokument, beispielsweise modale Popup-Dialoge:

- [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)

### 6. Abstrakte Rollen

Abstrakte Rollen sind ausschließlich für Browser vorgesehen, um die Struktur eines Dokuments zu organisieren und zu vereinheitlichen. Entwickelnde sollten sie nicht im HTML-Markup verwenden. Andernfalls werden weder assistiven Technologien noch Benutzenden aussagekräftige Informationen vermittelt.

Vermeiden Sie die Verwendung von [`command`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/command_role), [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role), [`input`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/input_role), [`landmark`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role), [`range`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role), [`roletype`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/roletype_role), [`section`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role), [`sectionhead`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/sectionhead_role), [`select`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/select_role), [`structure`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structure_role), [`widget`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) und [`window`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/window_role).

> [!NOTE]
> Verwenden Sie auf Ihren Websites und in Ihren Anwendungen keine abstrakten Rollen. Sie sind für Browser vorgesehen und hier nur als Referenz aufgeführt.

> [!WARNING]
> „Abstrakte Rollen werden für die Ontologie verwendet. Autoren **DÜRFEN** abstrakte Rollen **NICHT** in Inhalten verwenden.“ – Die <abbr>WAI-ARIA</abbr>-Spezifikation

## Auf MDN dokumentierte Rollen

Die folgenden Referenzseiten behandeln die auf <abbr>MDN</abbr> beschriebenen WAI-ARIA-Rollen.

{{SubpagesWithSummaries}}

## Siehe auch

- [ARIA verwenden: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)
- [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
