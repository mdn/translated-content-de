---
title: aria-controls
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-controls
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das globale `aria-controls`-Attribut identifiziert das Element (oder die Elemente), deren Inhalte oder Präsenz durch das Element, auf dem dieses Attribut gesetzt ist, kontrolliert werden.

## Beschreibung

Wenn ein interaktives Widget oder Element, sei es eine Combobox, ein Tab, ein Button, usw., verwendet wird, um ein anderes Element oder eine Komponente in einem Dokument oder einer Anwendung anzupassen oder zu ändern, kann das `aria-controls`-Attribut verwendet werden, um das entsprechende Element oder die entsprechenden Elemente programmatisch mit dem steuernden Element zu verknüpfen. Das `aria-controls`-Attribut identifiziert das Element (oder die Elemente), deren Inhalte oder Präsenz durch das Element, auf dem das Attribut gesetzt ist, kontrolliert werden, unabhängig davon, welche Art von Interaktion das betroffene Verhalten auslöst.

Ein [Combobox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)-Element hat `aria-controls` auf einen Wert gesetzt, der sich auf das Element bezieht, das als Popup dient. Das `aria-controls` muss nur gesetzt werden, wenn das Popup sichtbar ist, aber es ist gültig und einfacher zu programmieren, ein nicht sichtbares Element zu referenzieren.

Weitere Beispiele für Steuerungen umfassen:

- Die Button-Teile eines Akkordeon-Widgets, die die Sichtbarkeit ihrer zugehörigen Panel-Inhalte umschalten. Jeder Button kann ein angegebenes `aria-controls` haben, das die ID des Elements referenziert, das den mit dem aufrufenden Steuerelement verbundenen Inhalt enthält.
- Ein Element mit der Rolle von [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role): Die Scrollleiste erfordert ein `aria-controls`-Attribut, das die ID des Elements referenziert, das es steuert.
- Eine Gruppe von Tabs, die jeweils ein anderes Tab-Panel anzeigen: Jedes Element mit [`role="tab"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) hat ein `aria-controls`-Attribut, das auf sein zugehöriges [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) verweist.

## Beispiel

In diesem Tab-Beispiel steuert jeder Tab ein Tabpanel:

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
> ARIA verändert nur den Accessibility-Tree für ein Element, indem es identifiziert, wie unterstützende Technologien den Inhalt für die Benutzer präsentieren können. ARIA ändert keine impliziten Funktionen oder Stil.

## Werte

- `id`-Liste
  - : Eine durch Leerzeichen getrennte Liste von einer oder mehreren ID-Werten, die auf die Elemente verweisen, die durch das aktuelle Element gesteuert werden

## Zugehörige Schnittstellen

- [`Element.ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements)
  - : Die `ariaControlsElements`-Eigenschaft ist Teil der Schnittstelle jedes Elements. Ihr Wert ist eine Liste von [`Element`](/de/docs/Web/API/Element)en, die den in `aria-controls` angegebenen ID-Werten entsprechen.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
