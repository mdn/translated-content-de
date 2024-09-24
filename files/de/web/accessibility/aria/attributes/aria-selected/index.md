---
title: aria-selected
slug: Web/Accessibility/ARIA/Attributes/aria-selected
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-selected` Attribut zeigt den aktuellen "ausgewählten" Zustand verschiedener Widgets an.

## Beschreibung

Das `aria-selected` Attribut zeigt den aktuellen "ausgewählten" Zustand für die Rollen [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) und [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) an.

Dieses Attribut wird verwendet, um anzuzeigen, welche Elemente innerhalb von Einzel- und Mehrfachauswahl-Kombiwidgets ausgewählt sind. Wenn mehr als ein Element gleichzeitig ausgewählt werden kann, fügen Sie `aria-multiselectable="true"` in das Gitter, die Auswahlliste, die Tab-Liste oder eine andere Besitzrolle ein, wobei `aria-selected` nur auf den auswählbaren Zellen, Optionen und Tabs enthalten ist.

Für andere Rollen wird der aktuell ausgewählte Zustand mit [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current), möglicherweise auch mit [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) oder [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) festgelegt, je nach Rolle.

Widgets, die sowohl `aria-selected` als auch `aria-current` gleichzeitig unterstützen, haben unterschiedliche Bedeutungen für jedes. Zum Beispiel kann `aria-current="page"` in einem Navigationsbaum verwendet werden, um anzuzeigen, welche Seite derzeit angezeigt wird, während `aria-selected="true"` anzeigt, welche Seite angezeigt wird, wenn der Benutzer das `treeitem` aktiviert.

### Gitter

Das Festlegen von `aria-selected="false"` auf einer fokussierbaren Gitterzelle zeigt an, dass die Zelle auswählbar ist. Wenn das Gitter zulässt, dass mehr als eine Gitterzelle gleichzeitig ausgewählt werden kann, setzen Sie `aria-multiselectable="true"` auf das Element mit der Rolle [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role). Das Festlegen von `aria-selected` auf einer Spalten- oder Zeilenkopf-Gitterzelle propagiert den Zustand nicht auf andere Zellen in der Spalte oder Zeile.

### Option

Sowohl `aria-selected` als auch `aria-checked` sind für die Rolle [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role) gültig. Einige Benutzeroberflächen zeigen die Auswahl mit `aria-selected` in Einzel-Auswahllisten und mit `aria-checked` in Mehrfach-Auswahllisten an.

Geben Sie nicht sowohl `aria-selected` als auch `aria-checked` auf `option`-Elementen an, die von derselben `listbox` enthalten sind, es sei denn, die Bedeutung und der Zweck von `aria-selected` unterscheiden sich von Bedeutung und Zweck von aria-checked in der Benutzeroberfläche, die Bedeutung und der Zweck jedes Zustands ist eindeutig und die Benutzeroberfläche bietet separate Methoden zur Steuerung jedes Zustands.

### Reihe

Das `aria-selected` Attribut wird bei der Rolle `row` unterstützt, jedoch nicht bei `column`. Wenn ein Gitter die Auswahl unterstützt, wenn eine Zelle oder Zeile ausgewählt ist, hat das ausgewählte Element `aria-selected="true"` gesetzt.

Wenn das Gitter die Spaltenauswahl unterstützt und eine Spalte ausgewählt wird, haben alle Zellen in der Spalte `aria-selected` auf `true` gesetzt.

### Tab

In einer Tab-Liste wird `aria-selected` auf einem Tab verwendet, um das aktuell angezeigte [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) anzuzeigen.

Das ausgewählte [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) sollte das Attribut `aria-selected="true"` gesetzt haben. Alle inaktiven Tabs in der Tab-Liste sollten `aria-selected="false"` gesetzt haben. Die Einstellung des Zustands beeinflusst nur den Barrierefreiheitsbaum: Stellen Sie sicher, dass das aktive Tab so gestaltet ist, dass es seinen ausgewählten Zustand visuell anzeigt. Der Standardwert für `aria-selected` bei einer `tab` Rolle ist `false`.

Wenn mehr als ein Tab gleichzeitig auswählbar ist, fügen Sie `aria-multiselectable` in die `tablist` ein.

## Beispiele

In diesem `tablist` Beispiel ist der erste `tab` ausgewählt:

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
> ARIA verändert nur den Barrierefreiheitsbaum eines Elements und wie unterstützende Technologie den Inhalt den Nutzern präsentiert. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements.

## Werte

- `true`
  - : Das auswählbare Element ist ausgewählt.
- `false`
  - : Das auswählbare Element ist nicht ausgewählt. Impliziter Standard für [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role).
- `undefined` (Standard)
  - : Das Element ist nicht auswählbar.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaSelected")}}
  - : Die [`ariaSelected`](/de/docs/Web/API/Element/ariaSelected) Eigenschaft, Teil der {{domxref("Element")}} Schnittstelle, spiegelt den Wert des `aria-selected` Attributs wider.
- {{domxref("ElementInternals.ariaSelected")}}
  - : Die [`ariaSelected`](/de/docs/Web/API/ElementInternals/ariaSelected) Eigenschaft, Teil der {{domxref("ElementInternals")}} Schnittstelle, spiegelt den Wert des `aria-selected` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)

Eingebaut in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
