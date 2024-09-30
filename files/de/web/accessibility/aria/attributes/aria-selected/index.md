---
title: aria-selected
slug: Web/Accessibility/ARIA/Attributes/aria-selected
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-selected` gibt den aktuellen "ausgewählten" Zustand verschiedener Widgets an.

## Beschreibung

Das Attribut `aria-selected` gibt den aktuellen "ausgewählten" Zustand für die Rollen [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) und [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) an.

Dieses Attribut wird verwendet, um anzugeben, welche Elemente innerhalb von Widgets zur Einzelauswahl und Mehrfachauswahl ausgewählt sind. Wenn mehr als ein Element gleichzeitig auswählbar ist, fügen Sie `aria-multiselectable="true"` dem grid, listbox, tablist oder einer anderen besitzenden Rolle hinzu, während Sie `aria-selected` nur auf die auswählbaren Zellen, Optionen und Tabs anwenden.

Für andere Rollen wird der aktuell ausgewählte Zustand mit [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current) oder möglicherweise [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) oder [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) eingestellt, abhängig von der Rolle.

Widgets, die sowohl `aria-selected` als auch `aria-current` gleichzeitig unterstützen, haben unterschiedliche Bedeutungen für jedes. Beispielsweise kann `aria-current="page"` in einem Navigationstree verwendet werden, um anzugeben, welche Seite aktuell angezeigt wird, während `aria-selected="true"` angibt, welche Seite angezeigt wird, wenn der Benutzer das `treeitem` aktiviert.

### Grid

Das Setzen von `aria-selected="false"` auf einer fokussierbaren gridcell zeigt an, dass die Zelle auswählbar ist. Wenn das grid mehr als eine gridcell gleichzeitig zur Auswahl zulässt, setzen Sie `aria-multiselectable="true"` auf das Element mit der Rolle [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role). Das Setzen von `aria-selected` auf einer Spalten- oder Zeilenkopf-gridcell überträgt den Zustand nicht auf andere Zellen in der Spalte oder Zeile.

### Option

Sowohl `aria-selected` als auch `aria-checked` sind für [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role) gültig. Einige Benutzeroberflächen verwenden `aria-selected` für die Auswahl in Einzelauswahllisten und `aria-checked` in Mehrfachauswahllisten.

Geben Sie nicht sowohl `aria-selected` als auch `aria-checked` auf `option`-Elementen an, die von demselben `listbox` enthalten sind, es sei denn, die Bedeutung und der Zweck von `aria-selected` unterscheiden sich von der Bedeutung und dem Zweck von `aria-checked` in der Benutzeroberfläche. Die Bedeutung und der Zweck jedes Zustands müssen offensichtlich sein, und die Benutzeroberfläche muss separate Methoden zur Steuerung jedes Zustands bereitstellen.

### Row

Das Attribut `aria-selected` wird auf `row` unterstützt, aber nicht auf `column`. Wenn ein grid die Auswahl unterstützt und eine Zelle oder Zeile ausgewählt wird, hat das ausgewählte Element `aria-selected="true"` gesetzt.

Wenn das grid die Spaltenauswahl unterstützt und eine Spalte ausgewählt ist, haben alle Zellen in der Spalte `aria-selected` auf `true` gesetzt.

### Tab

In einer tablist wird `aria-selected` auf einem tab verwendet, um das aktuell angezeigte [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) anzuzeigen.

Der ausgewählte [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) sollte das Attribut `aria-selected="true"` gesetzt haben. Alle inaktiven Tabs in der tablist sollten `aria-selected="false"` gesetzt haben. Das Setzen des Zustands wirkt sich nur auf den Accessibility-Baum aus: Stellen Sie sicher, dass der aktive Tab visuell so gestaltet ist, dass er seinen ausgewählten Zustand anzeigt. Der Standardwert für `aria-selected` bei einer `tab`-Rolle ist `false`.

Wenn mehr als ein Tab gleichzeitig auswählbar ist, fügen Sie `aria-multiselectable` der `tablist` hinzu.

## Beispiele

In diesem `tablist`-Beispiel ist der erste `tab` ausgewählt:

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
> ARIA modifiziert nur den Accessibility-Baum für ein Element und wie unterstützende Technologien den Inhalt den Benutzern präsentieren. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements.

## Werte

- `true`
  - : Das auswählbare Element ist ausgewählt.
- `false`
  - : Das auswählbare Element ist nicht ausgewählt. Impliziter Standard für [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role).
- `undefined` (Standard)
  - : Das Element ist nicht auswählbar.

## Zugehörige Schnittstellen

- [`Element.ariaSelected`](/de/docs/Web/API/Element/ariaSelected)
  - : Die [`ariaSelected`](/de/docs/Web/API/Element/ariaSelected)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-selected`-Attributs wider.
- [`ElementInternals.ariaSelected`](/de/docs/Web/API/ElementInternals/ariaSelected)
  - : Die [`ariaSelected`](/de/docs/Web/API/ElementInternals/ariaSelected)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-selected`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)

Geerbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
