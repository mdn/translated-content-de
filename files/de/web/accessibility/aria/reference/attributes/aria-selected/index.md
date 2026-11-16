---
title: "ARIA: aria-selected-Attribut"
short-title: aria-selected
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-selected
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Das Attribut `aria-selected` gibt den aktuellen Auswahlzustand verschiedener Widgets an.

## Beschreibung

Das Attribut `aria-selected` gibt den aktuellen Auswahlzustand für die Rollen [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role), [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) und [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) an.

Mit diesem Attribut wird angegeben, welche Elemente innerhalb zusammengesetzter Widgets mit Einfach- oder Mehrfachauswahl ausgewählt sind. Wenn mehrere Elemente gleichzeitig ausgewählt werden können, setzen Sie `aria-multiselectable="true"` auf der Grid, Listbox, Tablist oder einer anderen übergeordneten Rolle. Setzen Sie `aria-selected` nur auf auswählbaren Zellen, Optionen und Tabs.

Für andere Rollen wird der aktuelle Zustand mit [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current) oder, abhängig von der Rolle, möglicherweise mit [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) angegeben.

Bei Widgets, die sowohl `aria-selected` als auch `aria-current` unterstützen, haben die beiden Attribute unterschiedliche Bedeutungen. Beispielsweise kann `aria-current="page"` in einer Navigationsstruktur angeben, welche Seite gerade angezeigt wird, während `aria-selected="true"` angibt, welche Seite angezeigt wird, wenn der Benutzer das `treeitem` aktiviert.

### Grid

Wenn `aria-selected="false"` auf einer fokussierbaren Gridcell gesetzt ist, bedeutet dies, dass die Zelle ausgewählt werden kann. Wenn die Grid die gleichzeitige Auswahl mehrerer Gridcells erlaubt, setzen Sie `aria-multiselectable="true"` auf dem Element mit der Rolle [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role). Wird `aria-selected` auf einer Gridcell gesetzt, die als Spalten- oder Zeilenüberschrift dient, wird der Zustand nicht auf andere Zellen der Spalte oder Zeile übertragen.

### Option

Sowohl `aria-selected` als auch `aria-checked` sind für [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) gültig. Manche Benutzeroberflächen kennzeichnen die Auswahl in Listboxen mit Einfachauswahl durch `aria-selected` und in Listboxen mit Mehrfachauswahl durch `aria-checked`.

Geben Sie auf `option`-Elementen innerhalb derselben `listbox` nicht sowohl `aria-selected` als auch `aria-checked` an, es sei denn, die beiden Zustände haben in der Benutzeroberfläche unterschiedliche Bedeutungen und Zwecke, diese sind jeweils erkennbar und die Benutzeroberfläche bietet separate Möglichkeiten, die Zustände zu ändern.

### Row

Das Attribut `aria-selected` wird für `row`, aber nicht für `column` unterstützt. Wenn eine Grid die Auswahl unterstützt und eine Zelle oder Zeile ausgewählt ist, hat das ausgewählte Element den Wert `aria-selected="true"`.

Wenn die Grid die Auswahl von Spalten unterstützt und eine Spalte ausgewählt ist, ist `aria-selected` für alle Zellen der Spalte auf `true` gesetzt.

### Tab

In einer Tablist wird `aria-selected` auf einem Tab verwendet, um das aktuell angezeigte [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) anzugeben.

Der ausgewählte [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) sollte das Attribut `aria-selected="true"` haben. Alle inaktiven Tabs in der Tablist sollten `aria-selected="false"` haben. Das Setzen dieses Zustands wirkt sich nur auf den Barrierefreiheitsbaum aus: Gestalten Sie den aktiven Tab auch visuell so, dass sein Auswahlzustand erkennbar ist. Der Standardwert von `aria-selected` für die Rolle `tab` ist `false`.

Wenn mehrere Tabs gleichzeitig ausgewählt werden können, setzen Sie `aria-multiselectable` auf der `tablist`.

## Werte

- `true`
  - : Das auswählbare Element ist ausgewählt.
- `false`
  - : Das auswählbare Element ist nicht ausgewählt. Impliziter Standardwert für [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role).
- `undefined` (Standardwert)
  - : Das Element ist nicht auswählbar.

## Zugehörige Schnittstellen

- [`Element.ariaSelected`](/de/docs/Web/API/Element/ariaSelected)
  - : Die Eigenschaft [`ariaSelected`](/de/docs/Web/API/Element/ariaSelected) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-selected` wider.
- [`ElementInternals.ariaSelected`](/de/docs/Web/API/ElementInternals/ariaSelected)
  - : Die Eigenschaft [`ariaSelected`](/de/docs/Web/API/ElementInternals/ariaSelected) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-selected` wider.

## Zugehörige Rollen

Verwendet in den Rollen:

- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)

An folgende Rollen vererbt:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

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
> ARIA verändert nur den Barrierefreiheitsbaum eines Elements und die Art, wie unterstützende Technologien den Inhalt Benutzern präsentieren. ARIA ändert weder die Funktion noch das Verhalten eines Elements.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
