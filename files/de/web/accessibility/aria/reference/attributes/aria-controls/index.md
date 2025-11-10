---
title: "ARIA: aria-controls-Attribut"
short-title: aria-controls
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-controls
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das globale `aria-controls`-Attribut identifiziert das Element (oder die Elemente), dessen Inhalte oder Vorhandensein durch das Element kontrolliert werden, an dem dieses Attribut gesetzt ist.

## Beschreibung

Wenn ein interaktives Widget oder Element, sei es eine Kombinationsbox, ein Tab, ein Button usw., verwendet wird, um ein anderes Element oder eine Komponente in einem Dokument oder einer Anwendung anzupassen oder zu modifizieren, kann das `aria-controls`-Attribut verwendet werden, um das jeweilige Element oder die jeweiligen Elemente programmatisch mit dem kontrollierenden Element zu verknüpfen. Das `aria-controls`-Attribut identifiziert das Element (oder die Elemente), dessen Inhalte oder Vorhandensein durch das Element kontrolliert werden, an dem das Attribut gesetzt ist, unabhängig davon, welche Art der Interaktion das beeinflusste Verhalten auslöst.

Ein [Combobox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)-Element hat `aria-controls`, das auf ein Popup-Element verweist. Das `aria-controls` muss nur gesetzt werden, wenn das Popup sichtbar ist, aber es ist gültig und einfacher zu programmieren, um auf ein Element zu verweisen, das nicht sichtbar ist.

Weitere Beispiele für Steuerelemente sind:

- Die Button-Teile eines Akkordeon-Widgets, die die Sichtbarkeit ihrer zugehörigen Panel-Inhalte umschalten. Jeder Button kann ein bestimmtes `aria-controls` haben, das auf die ID des Elements verweist, das den mit der aufrufenden Kontrolle verbundenen Inhalt enthält.
- Ein Element mit der Rolle [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role): der Scrollbalken erfordert ein `aria-controls`-Attribut, das auf die ID des Elements verweist, das er steuert.
- Eine Gruppe von Tabs, die jeweils ein anderes Tab-Panel anzeigen: jedes Element mit [`role="tab"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) hat ein `aria-controls`-Attribut, das auf sein zugehöriges [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) verweist.

## Beispiel

In diesem Tab-Beispiel steuert jeder Tab ein Tab-Panel:

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
> ARIA ändert nur den Accessibility-Tree für ein Element, indem es identifiziert, wie unterstützende Technologien den Benutzern den Inhalt präsentieren können. ARIA ändert keine implizite Funktionalität oder Darstellung.

## Werte

- `id`-Liste
  - : Eine durch Leerzeichen getrennte Liste von einer oder mehreren ID-Werten, die auf die Elemente verweisen, die durch das aktuelle Element kontrolliert werden

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
