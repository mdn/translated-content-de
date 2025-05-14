---
title: WAI-ARIA-Rollen
short-title: Roles
slug: Web/Accessibility/ARIA/Reference/Roles
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

ARIA-Rollen liefern semantische Bedeutung für Inhalte und ermöglichen es Screenreadern und anderen Tools, mit einem Objekt in einer Weise zu interagieren, die den Erwartungen der Benutzer an diesen Objekttyp entspricht. <abbr>ARIA</abbr>-Rollen können verwendet werden, um Elemente zu beschreiben, die nicht nativ in HTML existieren oder existieren, aber noch keine vollständige Browser-Unterstützung haben.

Standardmäßig haben viele semantische Elemente in HTML eine Rolle; zum Beispiel hat `<input type="radio">` die Rolle "radio". Nicht-semantische Elemente in HTML haben keine Rolle; `<div>` und `<span>` ohne zusätzliche Semantik geben `null` zurück. Das `role`-Attribut kann Semantik bereitstellen.

ARIA-Rollen werden HTML-Elementen hinzugefügt, indem `role="role type"` verwendet wird, wobei _role type_ der Name einer Rolle in der ARIA-Spezifikation ist. Einige Rollen erfordern die Einbeziehung zugehöriger ARIA-Zustände oder -Eigenschaften; andere sind nur in Verbindung mit anderen Rollen gültig.

Zum Beispiel wird `<ul role="tabpanel">` von Screenreadern als 'Tab-Panel' angekündigt. Wenn das Tab-Panel jedoch keine verschachtelten Tabs hat, ist das Element mit der Tab-Panel-Rolle tatsächlich kein Tab-Panel und die Zugänglichkeit wurde negativ beeinflusst.

Die [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), die mit jeder Rolle verbunden sind, sind auf den Seiten der Rollen aufgeführt, wobei jedes Attribut auch eine eigene Seite hat.

## ARIA-Rollen-Typen

Es gibt 6 Kategorien von ARIA-Rollen:

### 1. Dokumentstrukturrollen

Dokumentstrukturrollen werden verwendet, um eine strukturelle Beschreibung für einen Abschnitt von Inhalten bereitzustellen. Die meisten dieser Rollen sollten nicht mehr verwendet werden, da Browser jetzt semantische HTML-Elemente mit der gleichen Bedeutung unterstützen. Die Rollen ohne HTML-Äquivalente, wie Präsentation, Werkzeugleiste und Tooltip-Rollen, bieten Informationen über die Dokumentstruktur für unterstützende Technologien wie Screenreader, da gleichwertige native HTML-Tags nicht verfügbar sind.

- [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
- [`tooltip`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role)
- [`feed`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role)
- [`math`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/math_role)
- [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) / [`none`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`note`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/note_role)

Für die meisten Dokumentstrukturrollen sind semantische HTML-Äquivalente verfügbar und unterstützt. Vermeiden Sie die Nutzung von:

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
- [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) (verwenden Sie entweder {{HTMLElement('ul')}} oder {{HTMLElement('ol')}})
- [`listitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role) (verwenden Sie stattdessen {{HTMLElement('li')}})
- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role) (verwenden Sie stattdessen {{HTMLElement('meter')}})
- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) (verwenden Sie {{HTMLElement('tr')}} mit {{HTMLElement('table')}})
- [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) (verwenden Sie {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}})
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) (verwenden Sie `{{HTMLElement('th','&lt;th scope="row">')}}`)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (verwenden Sie {{HTMLElement('hr')}} wenn es nicht fokussiert ist)
- [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) (verwenden Sie {{HTMLElement('table')}})
- [`term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role) (verwenden Sie {{HTMLElement('dfn')}})

Diese sind der Vollständigkeit halber enthalten, aber in den meisten Fällen selten, wenn überhaupt, nützlich:

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

### 2. Widget-Rollen

Widget-Rollen werden verwendet, um gängige interaktive Muster zu definieren. Wie Dokumentstrukturrollen haben einige Widget-Rollen die gleichen Semantiken wie gut unterstützte native HTML-Elemente und sollten daher vermieden werden. Der Hauptunterschied besteht darin, dass Widget-Rollen typischerweise JavaScript für die Interaktion erfordern, während Dokumentstrukturrollen dies oft nicht tun.

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

Vermeiden Sie die Nutzung von [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role), [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`link`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role), [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role), [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role), [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role), [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role), und [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), die wir der Vollständigkeit halber aufgenommen haben. Für die meisten sind semantische Äquivalente mit zugänglicher Interaktivität verfügbar und unterstützt. Weitere Informationen finden Sie in der individuellen Rollendokumentation.

#### Zusammengesetzte Widget-Rollen

- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

Vermeiden Sie die Nutzung von [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), und [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role), die wir der Vollständigkeit halber aufgenommen haben. Weitere Informationen finden Sie in der individuellen Rollendokumentation.

Beachten Sie, dass es auch eine Widget-Rolle (`role="widget"`) gibt, die eine abstrakte Rolle ist und nicht zur Widget-Rollenkategorie gehört.

### 3. Landmark-Rollen

Landmark-Rollen bieten eine Möglichkeit, die Organisation und Struktur einer Webseite zu identifizieren. Durch das Klassifizieren und Labeln von Abschnitten einer Seite wird strukturelle Information, die visuell durch Layout vermittelt wird, programmatisch repräsentiert. Screenreader verwenden Landmark-Rollen, um eine Tastaturnavigation zu wichtigen Abschnitten einer Seite zu ermöglichen. Verwenden Sie diese sparsam. Zu viele Landmark-Rollen erzeugen "Rauschen" in Screenreadern, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

- [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) (Dokument {{HTMLElement('header')}})
- [`complementary`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) ({{HTMLElement('aside')}})
- [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role) (Dokument {{HTMLElement('footer')}})
- [`form`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role) ({{HTMLElement('form')}})
- [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role) ({{HTMLElement('main')}})
- [`navigation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role) ({{HTMLElement('nav')}})
- [`region`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role) ({{HTMLElement('section')}})
- [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) ({{HTMLElement('search')}})

### 4. Live-Region-Rollen

Live-Region-Rollen werden verwendet, um Elemente mit Inhalten zu definieren, die dynamisch verändert werden. Sehende Benutzer können dynamische Änderungen sehen, wenn sie visuell erkennbar sind. Diese Rollen helfen sehbehinderten und blinden Benutzern zu wissen, ob Inhalte aktualisiert wurden. Unterstützende Technologien wie Screenreader können genutzt werden, um dynamische Inhaltsänderungen anzukündigen:

- [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [`log`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [`marquee`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [`timer`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)

### 5. Fensterrollen

Fensterrollen definieren Unterfenster innerhalb des Hauptfensterdokuments, wie Pop-up-Modaldialoge:

- [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)

### 6. Abstrakte Rollen

Abstrakte Rollen sind nur für die Nutzung durch Browser gedacht, um ein Dokument zu organisieren und zu vereinfachen. Sie sollten nicht von Entwicklern, die HTML-Markup schreiben, verwendet werden. Tun Sie dies nicht, führt es zu keiner aussagekräftigen Information, die unterstützenden Technologien oder Benutzern übermittelt wird.

Vermeiden Sie die Nutzung von [`command`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/command_role), [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role), [`input`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/input_role), [`landmark`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role), [`range`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role), [`roletype`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/roletype_role), [`section`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role), [`sectionhead`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/sectionhead_role), [`select`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/select_role), [`structure`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structure_role), [`widget`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role), und [`window`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/window_role).

> [!NOTE]
> Verwenden Sie keine abstrakten Rollen auf Ihren Webseiten und in Ihren Anwendungen. Sie sind für den Einsatz durch Browser bestimmt. Sie sind nur zur Referenz enthalten.

> [!WARNING]
> "Abstrakte Rollen werden für die Ontologie verwendet. Autoren **DÜRFEN KEINE** abstrakten Rollen in Inhalten verwenden." - Die <abbr>WAI-ARIA</abbr>-Spezifikation

## Auf MDN definierte Rollen

Die folgenden sind die Referenzseiten, die die auf <abbr>MDN</abbr> diskutierten WAI-ARIA-Rollen abdecken.

{{SubpagesWithSummaries}}

## Siehe auch

- [Verwendung von ARIA: Rollen, Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Guides/Techniques)
- [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
