---
title: "ARIA: aria-selected Attribut"
short-title: aria-selected
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-selected
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-selected` Attribut zeigt den aktuellen "ausgewählten" Zustand verschiedener Widgets an.

## Beschreibung

Das `aria-selected` Attribut zeigt den aktuellen "ausgewählten" Zustand für die Rollen [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) und [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) an.

Dieses Attribut wird verwendet, um anzuzeigen, welche Elemente innerhalb von Einzel- und Mehrfachauswahl-Widgets ausgewählt sind. Wenn mehr als ein Element gleichzeitig auswählbar ist, fügen Sie `aria-multiselectable="true"` auf dem Grid, der Listbox, der Tablist oder einer anderen übergeordneten Rolle hinzu, während `aria-selected` nur auf den auswählbaren Zellen, Optionen und Tabs enthalten sein sollte.

Für andere Rollen wird der aktuell ausgewählte Zustand mit [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current) oder möglicherweise [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) festgelegt, abhängig von der Rolle.

Widgets, die sowohl `aria-selected` als auch `aria-current` gleichzeitig unterstützen, haben unterschiedliche Bedeutungen für jedes. Zum Beispiel kann `aria-current="page"` in einem Navigationsbaum verwendet werden, um anzuzeigen, welche Seite derzeit angezeigt wird, während `aria-selected="true"` anzeigt, welche Seite angezeigt wird, wenn der Benutzer das `treeitem` aktiviert.

### Grid

Das Setzen von `aria-selected="false"` auf einer fokussierbaren `gridcell` zeigt an, dass die Zelle auswählbar ist. Wenn das Grid mehr als eine `gridcell` gleichzeitig auswählen lässt, setzen Sie `aria-multiselectable="true"` auf das Element mit der Rolle [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role). Das Setzen von `aria-selected` auf einer Spalten- oder Zeilenkopfzelle propagiert den Zustand nicht auf andere Zellen in der Spalte oder Zeile.

### Option

Sowohl `aria-selected` als auch `aria-checked` sind für [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) gültig. Einige Benutzeroberflächen zeigen die Auswahl mit `aria-selected` in Einzel-Auswahl-Listboxen und mit `aria-checked` in Mehrfach-Auswahl-Listboxen an.

Geben Sie nicht sowohl `aria-selected` als auch `aria-checked` auf `option` Elementen an, die von derselben `listbox` enthalten sind, es sei denn, die Bedeutung und der Zweck von `aria-selected` unterscheiden sich von der Bedeutung und dem Zweck von `aria-checked` in der Benutzeroberfläche, die Bedeutung und der Zweck jedes Zustands ist offensichtlich, und die Benutzeroberfläche bietet separate Methoden zur Steuerung jedes Zustands an.

### Zeile

Das `aria-selected` Attribut wird auf `row` unterstützt, aber nicht auf `column`. Wenn ein Grid die Auswahl unterstützt, hat das ausgewählte Element `aria-selected="true"` gesetzt, wenn eine Zelle oder Zeile ausgewählt ist.

Wenn das Grid Spaltenauswahl unterstützt und eine Spalte ausgewählt ist, haben alle Zellen in der Spalte `aria-selected` auf `true`.

### Tab

In einer Tablist wird `aria-selected` auf einem Tab verwendet, um das aktuell angezeigte [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) anzuzeigen.

Der ausgewählte [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) sollte das Attribut `aria-selected="true"` gesetzt haben. Alle inaktiven Tabs in der Tablist sollten `aria-selected="false"` gesetzt haben. Das Setzen des Zustands wirkt sich nur auf den Barrierefreiheit-Baum aus: Stellen Sie sicher, dass der aktive Tab so gestaltet ist, dass er visuell seinen ausgewählten Zustand anzeigt. Der Standardwert für `aria-selected` auf einer `tab` Rolle ist `false`.

Wenn mehr als ein Tab gleichzeitig auswählbar ist, fügen Sie `aria-multiselectable` auf der `tablist` hinzu.

## Beispiele

In diesem Tablist-Beispiel ist der erste Tab ausgewählt:

```html
<div class="tab-interface">
  <div role="tablist" aria-label="Sample Tabs">
    <span
      role="tab"
      aria-selected="true"
      aria-controls="panel-1"
      id="tab-1"
      tabindex="0">
      First Tab
    </span>
    <span
      role="tab"
      aria-selected="false"
      aria-controls="panel-2"
      id="tab-2"
      tabindex="-1">
      Second Tab
    </span>
    <span
      role="tab"
      aria-selected="false"
      aria-controls="panel-3"
      id="tab-3"
      tabindex="-1">
      Third Tab
    </span>
  </div>
  <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
    <p>Content for the first panel</p>
  </div>
  <div id="panel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" hidden>
    <p>Content for the second panel</p>
  </div>
  <div id="panel-3" role="tabpanel" tabindex="0" aria-labelledby="tab-3" hidden>
    <p>Content for the third panel</p>
  </div>
</div>
```

> [!NOTE]
> ARIA ändert nur den Barrierefreiheit-Baum eines Elements und wie unterstützende Technologien den Inhalt für Benutzer darstellen. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements.

## Werte

- `true`
  - : Das auswählbare Element ist ausgewählt.
- `false`
  - : Das auswählbare Element ist nicht ausgewählt. Impliziter Standard für [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role).
- `undefined` (Standard)
  - : Das Element ist nicht auswählbar.

## Zugehörige Schnittstellen

- [`Element.ariaSelected`](/de/docs/Web/API/Element/ariaSelected)
  - : Die [`ariaSelected`](/de/docs/Web/API/Element/ariaSelected) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-selected` Attributs wider.
- [`ElementInternals.ariaSelected`](/de/docs/Web/API/ElementInternals/ariaSelected)
  - : Die [`ariaSelected`](/de/docs/Web/API/ElementInternals/ariaSelected) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-selected` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
