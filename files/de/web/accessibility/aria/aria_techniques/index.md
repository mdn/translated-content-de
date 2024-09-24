---
title: "Verwendung von ARIA: Rollen, Zustände und Eigenschaften"
slug: Web/Accessibility/ARIA/ARIA_Techniques
l10n:
  sourceCommit: 0d8e5e932d471180075f041b73c03289abdf6b3c
---

{{AccessibilitySidebar}}

ARIA definiert Semantiken, die auf Elemente angewendet werden können, wobei diese in **Rollen** (die eine Art von Benutzerschnittstellenelement definieren) und **Zustände** und **Eigenschaften** unterteilt sind, die von einer Rolle unterstützt werden. Autoren müssen einem Element während seines Lebenszyklus eine ARIA-Rolle und die entsprechenden Zustände und Eigenschaften zuweisen, es sei denn, das Element verfügt bereits über geeignete ARIA-Semantiken (durch die Verwendung eines geeigneten HTML-Elements). Die Hinzufügung von ARIA-Semantiken stellt einem Browser nur zusätzliche Informationen für die Barrierefreiheits-API zur Verfügung und beeinflusst nicht das DOM einer Seite.

## Rollen

### Widget-Rollen

- [`button`](/de/docs/Web/Accessibility/ARIA/Roles/button_role)
- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`link`](/de/docs/Web/Accessibility/ARIA/Roles/link_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
- [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
- [`radio`](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (wenn fokussierbar)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

### Composite-Rollen

Die untenstehenden Techniken beschreiben jede Composite-Rolle sowie deren erforderliche und optionale Kindrollen.

- [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) (einschließlich der Rollen [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role), [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role), [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role))
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role) (einschließlich der Rolle [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role))
- [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role) (siehe [`radio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/radio_role))
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) (einschließlich der Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) und [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role))
- [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

### Dokumentstruktur-Rollen

- [`application`](/de/docs/Web/Accessibility/ARIA/Roles/application_role)
- [`article`](/de/docs/Web/Accessibility/ARIA/Roles/article_role)
- [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`definition`](/de/docs/Web/Accessibility/ARIA/Roles/definition_role)
- [`directory`](/de/docs/Web/Accessibility/ARIA/Roles/directory_role)
- [`document`](/de/docs/Web/Accessibility/ARIA/Roles/document_role)
- [`feed`](/de/docs/Web/Accessibility/ARIA/Roles/feed_role)
- [`figure`](/de/docs/Web/Accessibility/ARIA/Roles/figure_role)
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)
- [`heading`](/de/docs/Web/Accessibility/ARIA/Roles/heading_role)
- [`img`](/de/docs/Web/Accessibility/ARIA/Roles/img_role)
- [`list`](/de/docs/Web/Accessibility/ARIA/Roles/list_role)
- [`listitem`](/de/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [`math`](/de/docs/Web/Accessibility/ARIA/Roles/math_role)
- [`none`](/de/docs/Web/Accessibility/ARIA/Roles/none_role)
- [`note`](/de/docs/Web/Accessibility/ARIA/Roles/note_role)
- [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role)
- [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
- [`term`](/de/docs/Web/Accessibility/ARIA/Roles/term_role)
- [`toolbar`](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
- [`tooltip`](/de/docs/Web/Accessibility/ARIA/Roles/tooltip_role)

### Landmark-Rollen

- [`banner`](/de/docs/Web/Accessibility/ARIA/Roles/banner_role)
- [`complementary`](/de/docs/Web/Accessibility/ARIA/Roles/complementary_role)
- [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)
- [`form`](/de/docs/Web/Accessibility/ARIA/Roles/form_role)
- [`main`](/de/docs/Web/Accessibility/ARIA/Roles/main_role)
- [`navigation`](/de/docs/Web/Accessibility/ARIA/Roles/navigation_role)
- [`region`](/de/docs/Web/Accessibility/ARIA/Roles/region_role)
- [`search`](/de/docs/Web/Accessibility/ARIA/Roles/search_role)

### Live-Region-Rollen

- [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [`log`](/de/docs/Web/Accessibility/ARIA/Roles/log_role)
- [`marquee`](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [`status`](/de/docs/Web/Accessibility/ARIA/Roles/status_role)
- [`timer`](/de/docs/Web/Accessibility/ARIA/Roles/timer_role)

### Fensterrollen

- [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)

## Zustände und Eigenschaften

### Widget-Attribute

- [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
- [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current)
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level)
- [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
- [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiline)
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
- [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder)
- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
- [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)

### Live-Region-Attribute

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)

### Drag &amp; Drop-Attribute

- [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect) {{deprecated_inline}}
- [`aria-grabbed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed) {{deprecated_inline}}

### Beziehungsattribute

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-flowto)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
- [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)

### MicrosoftEdge-spezifische Eigenschaften

- `x-ms-aria-flowfrom` {{Non-standard_Inline}}
