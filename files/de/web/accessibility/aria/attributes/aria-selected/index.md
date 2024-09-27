---
title: aria-selected
slug: Web/Accessibility/ARIA/Attributes/aria-selected
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-selected` Attribut gibt den aktuellen "ausgewählten" Zustand verschiedener Widgets an.

## Beschreibung

Das `aria-selected` Attribut gibt den aktuellen "ausgewählten" Zustand für die Rollen [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) und [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) an.

Dieses Attribut wird verwendet, um anzuzeigen, welche Elemente innerhalb von Composite-Widgets mit Einfach- und Mehrfachauswahl ausgewählt sind. Wenn mehr als ein Element gleichzeitig auswählbar ist, fügen Sie `aria-multiselectable="true"` zum Grid, Listbox, Tablist oder anderen übergeordneten Rollen hinzu und verwenden Sie `aria-selected` nur auf den auswählbaren Zellen, Optionen und Tabs.

Für andere Rollen wird der derzeit ausgewählte Zustand mit [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current) oder möglicherweise mit [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) oder [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) festgelegt, abhängig von der Rolle.

Widgets, die gleichzeitig `aria-selected` und `aria-current` unterstützen, haben für jede unterschiedliche Bedeutungen. Zum Beispiel kann `aria-current="page"` in einem Navigationsbaum verwendet werden, um anzuzeigen, welche Seite derzeit angezeigt wird, während `aria-selected="true"` angibt, welche Seite angezeigt wird, wenn der Benutzer das `treeitem` aktiviert.

### Grid

Wenn `aria-selected="false"` auf eine fokussierbare Gridzelle gesetzt wird, bedeutet dies, dass die Zelle auswählbar ist. Wenn das Grid mehr als eine Gridzelle zur gleichzeitigen Auswahl zulässt, setzen Sie `aria-multiselectable="true"` auf das Element mit der Rolle [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role). Das Setzen von `aria-selected` auf eine Spalten- oder Zeilenheader-Gridzelle überträgt den Zustand nicht auf andere Zellen in der Spalte oder Zeile.

### Option

Sowohl `aria-selected` als auch `aria-checked` sind für [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role) gültig. Einige Benutzeroberflächen zeigen die Auswahl mit `aria-selected` in Einzelwahl-Listenfeldern und mit `aria-checked` in Mehrfachwahl-Listenfeldern an.

Geben Sie nicht `aria-selected` und `aria-checked` gleichzeitig auf `option` Elementen innerhalb derselben `listbox` an, es sei denn, die Bedeutung und der Zweck von `aria-selected` unterscheiden sich von der Bedeutung und dem Zweck von aria-checked in der Benutzeroberfläche, die Bedeutung und der Zweck jedes Zustandes sind ersichtlich, und die Benutzeroberfläche bietet separate Methoden zur Steuerung jedes Zustandes.

### Zeile

Das `aria-selected` Attribut wird für `row` unterstützt, jedoch nicht für `column`. Wenn ein Grid die Auswahl unterstützt, hat das ausgewählte Element `aria-selected="true"` gesetzt, wenn eine Zelle oder Zeile ausgewählt ist.

Wenn das Grid die Spaltenauswahl unterstützt und eine Spalte ausgewählt ist, haben alle Zellen in der Spalte `aria-selected="true"` gesetzt.

### Tab

In einem Tablist wird `aria-selected` auf einem Tab verwendet, um das derzeit angezeigte [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) anzuzeigen.

Der ausgewählte [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) sollte das Attribut `aria-selected="true"` gesetzt haben. Alle inaktiven Tabs in der Tablist sollten `aria-selected="false"` gesetzt haben. Das Setzen des Zustandes wirkt sich nur auf den Accessibility-Baum aus: Stellen Sie sicher, dass der aktive Tab optisch so gestaltet ist, dass er seinen ausgewählten Zustand anzeigt. Der Standardwert für `aria-selected` bei einer `tab` Rolle ist `false`.

Falls mehr als ein Tab gleichzeitig auswählbar ist, fügen Sie `aria-multiselectable` auf der `tablist` ein.

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
> ARIA ändert nur den Accessibility-Baum für ein Element und die Art und Weise, wie unterstützende Technologie den Inhalt für Benutzer präsentiert. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements.

## Werte

- `true`
  - : Das auswählbare Element ist ausgewählt.
- `false`
  - : Das auswählbare Element ist nicht ausgewählt. Impliziter Standardwert für [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role).
- `undefined` (Standard)
  - : Das Element ist nicht auswählbar.

## Zugehörige Schnittstellen

- [`Element.ariaSelected`](/de/docs/Web/API/Element/ariaSelected)
  - : Die [`ariaSelected`](/de/docs/Web/API/Element/ariaSelected) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-selected` Attributs wider.
- [`ElementInternals.ariaSelected`](/de/docs/Web/API/ElementInternals/ariaSelected)
  - : Die [`ariaSelected`](/de/docs/Web/API/ElementInternals/ariaSelected) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-selected` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
