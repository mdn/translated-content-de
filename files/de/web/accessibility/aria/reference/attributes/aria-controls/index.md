---
title: aria-controls
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-controls
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

Die globale `aria-controls`-Eigenschaft identifiziert das Element (oder die Elemente), deren Inhalt oder Vorhandensein von dem Element gesteuert wird, auf dem dieses Attribut gesetzt ist.

## Beschreibung

Wenn ein interaktives Widget oder Element, sei es ein Combobox, Tab, Knopf usw., verwendet wird, um ein anderes Element oder eine Komponente in einem Dokument oder einer Anwendung zu ändern oder anzupassen, kann das `aria-controls`-Attribut verwendet werden, um das entsprechende Element oder die entsprechenden Elemente programmatisch mit dem steuernden Element zu verknüpfen. Das `aria-controls`-Attribut identifiziert das Element (oder die Elemente), deren Inhalt oder Vorhandensein von dem Element gesteuert wird, auf dem das Attribut gesetzt ist, unabhängig davon, welche Art von Interaktion das betroffene Verhalten auslöst.

Ein [Combobox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)-Element hat `aria-controls` auf einen Wert gesetzt, der sich auf das Element bezieht, das als Popup dient. `aria-controls` muss nur gesetzt werden, wenn das Popup sichtbar ist, aber es ist gültig und einfacher, ein Element zu referenzieren, das nicht sichtbar ist.

Andere Beispiele für Steuerelemente umfassen:

- Die Schaltflächesteile eines Akkordeon-Widgets, die die Sichtbarkeit ihres zugehörigen Panelinhalts umschalten. Jede Schaltfläche kann ein `aria-controls` spezifiziert haben, das die ID des Elements referenziert, das den mit der aufrufenden Steuerung verbundenen Inhalt enthält.
- Ein Element mit der Rolle [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role): Die Scrollleiste benötigt ein `aria-controls`-Attribut, das auf die ID des Elements verweist, das sie steuert.
- Eine Gruppe von Tabs, die jeweils ein anderes Tab-Panel anzeigen: Jedes Element mit [`role="tab"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) hat ein `aria-controls`-Attribut, das auf das zugehörige [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) verweist.

## Beispiel

In diesem Tabs-Beispiel steuert jeder Tab ein Tabpanel:

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
> ARIA modifiziert nur den Accessibility-Tree für ein Element, indem es identifiziert, wie unterstützende Technologien den Benutzern den Inhalt präsentieren können. ARIA ändert keine implizite Funktionalität oder Gestaltung.

## Werte

- `id` Liste
  - : Eine durch Leerzeichen getrennte Liste von einem oder mehreren ID-Werten, die die Elemente referenzieren, die vom aktuellen Element gesteuert werden.

## Zugehörige Schnittstellen

- [`Element.ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements)
  - : Die `ariaControlsElements`-Eigenschaft ist Teil der Schnittstelle jedes Elements.
    Ihr Wert ist ein Array von Instanzen von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-controls`-Attribut widerspiegeln ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaControlsElements`](/de/docs/Web/API/ElementInternals/ariaControlsElements)
  - : Die `ariaControlsElements`-Eigenschaft ist Teil der Schnittstelle jedes benutzerdefinierten Elements.
    Ihr Wert ist ein Array von Instanzen von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-controls`-Attribut widerspiegeln ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
