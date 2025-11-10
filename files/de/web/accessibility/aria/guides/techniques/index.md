---
title: "Verwendung von ARIA: Rollen, Zustände und Eigenschaften"
slug: Web/Accessibility/ARIA/Guides/Techniques
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

ARIA definiert Semantiken, die auf Elemente angewendet werden können, wobei diese in **Rollen** (die eine Art von Benutzeroberflächenelement definieren) sowie **Zustände** und **Eigenschaften** unterteilt sind, die von einer Rolle unterstützt werden. Autoren müssen einem Element während seines Lebenszyklus eine ARIA-Rolle und die entsprechenden Zustände und Eigenschaften zuweisen, es sei denn, das Element hat bereits die entsprechenden ARIA-Semantiken (durch die Verwendung eines geeigneten HTML-Elements). Das Hinzufügen von ARIA-Semantiken stellt nur zusätzliche Informationen für die Barrierefreiheits-API eines Browsers zur Verfügung und beeinflusst nicht das DOM einer Seite.

## Rollen

### Widget-Rollen

- [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`link`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokusierbar)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

### Komposit-Rollen

Die unten stehenden Techniken beschreiben jede Komposit-Rolle sowie ihre erforderlichen und optionalen Kindrollen.

- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) (einschließlich der Rollen [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role), [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role), [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role))
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) (einschließlich der Rolle [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role))
- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) (siehe Rolle [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role))
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) (einschließlich der Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) und [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role))
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

### Rollen der Dokumentstruktur

- [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
- [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role)
- [`directory`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role)
- [`document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role)
- [`feed`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role)
- [`figure`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role)
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`heading`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
- [`img`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role)
- [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [`listitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [`math`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/math_role)
- [`none`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`note`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/note_role)
- [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [`term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
- [`tooltip`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role)

### Landmark-Rollen

- [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [`complementary`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [`form`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [`navigation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [`region`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role)
- [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)

### Live-Region-Rollen

- [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [`log`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [`marquee`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [`timer`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)

### Fensterrollen

- [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)

## Zustände und Eigenschaften

### Widget-Attribute

- [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
- [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
- [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
- [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)
- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)

### Live-Region-Attribute

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)

### Drag &amp; Drop-Attribute

- [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect) {{deprecated_inline}}
- [`aria-grabbed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed) {{deprecated_inline}}

### Beziehungsattribute

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
- [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
- [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)

### MicrosoftEdge-spezifische Eigenschaften

- `x-ms-aria-flowfrom` {{Non-standard_Inline}}
