---
title: "ARIA: Attribut aria-controls"
short-title: aria-controls
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-controls
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Die globale Eigenschaft `aria-controls` identifiziert das Element (oder die Elemente), dessen Inhalt oder Vorhandensein durch das Element gesteuert wird, auf dem dieses Attribut gesetzt ist.

## Beschreibung

Wenn ein interaktives Widget oder Element, etwa eine Combobox, ein Tab oder ein Button, verwendet wird, um ein anderes Element oder eine andere Komponente in einem Dokument oder einer Anwendung anzupassen oder zu verändern, kann das Attribut `aria-controls` verwendet werden, um die betreffenden Elemente programmatisch mit dem steuernden Element zu verknüpfen. Das Attribut `aria-controls` identifiziert das Element (oder die Elemente), dessen Inhalt oder Vorhandensein durch das Element gesteuert wird, auf dem das Attribut gesetzt ist – unabhängig davon, welche Art von Interaktion das betreffende Verhalten auslöst.

Bei einem [Combobox-Element](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) ist `aria-controls` auf einen Wert gesetzt, der auf das als Popup dienende Element verweist. `aria-controls` muss nur gesetzt sein, wenn das Popup sichtbar ist. Es ist jedoch zulässig und einfacher zu implementieren, auf ein nicht sichtbares Element zu verweisen.

Weitere Beispiele für steuernde Elemente sind:

- Die Buttons eines Akkordeon-Widgets, die die Sichtbarkeit des zugehörigen Panel-Inhalts umschalten. Jeder Button kann ein Attribut `aria-controls` haben, das auf die ID des Elements mit dem zugehörigen Inhalt verweist.
- Ein Element mit der Rolle [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role): Die Scrollbar benötigt ein Attribut `aria-controls`, das auf die ID des Elements verweist, das sie steuert.
- Eine Gruppe von Tabs, die jeweils ein anderes Tab-Panel anzeigen: Jedes Element mit [`role="tab"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) hat ein Attribut `aria-controls`, das auf das zugehörige [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) verweist.

## Werte

- `id`-Liste
  - : Eine durch Leerzeichen getrennte Liste mit einem oder mehreren ID-Werten, die auf die vom aktuellen Element gesteuerten Elemente verweisen.

## Zugehörige Schnittstellen

- [`Element.ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements)
  - : Die Eigenschaft `ariaControlsElements` ist Teil der Schnittstelle jedes Elements.
    Ihr Wert ist ein Array aus Instanzen von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im Attribut `aria-controls` widerspiegeln ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaControlsElements`](/de/docs/Web/API/ElementInternals/ariaControlsElements)
  - : Die Eigenschaft `ariaControlsElements` ist Teil der Schnittstelle jedes benutzerdefinierten Elements.
    Ihr Wert ist ein Array aus Instanzen von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im Attribut `aria-controls` widerspiegeln ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Wird bei **ALLEN** Rollen verwendet.

## Beispiel

In diesem Beispiel mit Tabs steuert jeder Tab ein Tab-Panel:

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
  <div
    id="panel-2"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="tab-2"
    class="display-none">
    <p>Content for the second panel</p>
  </div>
  <div
    id="panel-3"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="tab-3"
    class="display-none">
    <p>Content for the third panel</p>
  </div>
</div>
```

> [!NOTE]
> ARIA verändert nur den Accessibility Tree eines Elements und legt fest, wie assistive Technologien den Inhalt den Nutzern präsentieren können. ARIA ändert weder die inhärente Funktionalität noch das Styling.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
