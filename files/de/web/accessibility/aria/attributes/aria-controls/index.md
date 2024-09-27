---
title: aria-controls
slug: Web/Accessibility/ARIA/Attributes/aria-controls
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die globale `aria-controls` Eigenschaft identifiziert das Element (oder die Elemente), deren Inhalte oder Vorhandensein durch das Element gesteuert werden, auf dem dieses Attribut gesetzt ist.

## Beschreibung

Wenn ein interaktives Widget oder Element, sei es ein Kombinationsfeld, Tab, Button usw., verwendet wird, um ein anderes Element oder eine Komponente in einem Dokument oder einer Anwendung anzupassen oder zu modifizieren, kann das `aria-controls` Attribut verwendet werden, um das entsprechende Element oder die Elemente programmatisch mit dem steuernden Element zu assoziieren. Das `aria-controls` Attribut identifiziert das Element (oder die Elemente), deren Inhalte oder Vorhandensein durch das Element, auf dem das Attribut gesetzt ist, gesteuert werden, unabhängig davon, welche Art von Interaktion das betroffene Verhalten initiiert.

Ein [Kombinationsfeld](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role) Element hat `aria-controls` auf einen Wert gesetzt, der auf das Element verweist, das als Popup dient. Das `aria-controls` muss nur gesetzt werden, wenn das Popup sichtbar ist, aber es ist gültig und einfacher, ein nicht sichtbares Element zu referenzieren.

Weitere Beispiele für Steuerelemente sind:

- Die Schaltflächenteile eines Akkordeon-Widgets, die die Sichtbarkeit ihres zugeordneten Paneelinhalts umschalten. Jede Schaltfläche kann ein spezifiziertes `aria-controls` haben, das auf die ID des Elements verweist, das den Inhalt enthält, der mit dem aufrufenden Steuerelement verbunden ist.
- Ein Element mit einer Rolle von [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role): die Scrollleiste erfordert ein `aria-controls` Attribut, das auf die ID des Elements verweist, das es steuert.
- Eine Gruppe von Tabs, die jeweils ein anderes Tab-Panel anzeigen: jedes Element mit [`role="tab"`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) hat ein `aria-controls` Attribut, das auf das entsprechende [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) verweist.

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
> ARIA verändert nur den Accessibility-Baum eines Elements und identifiziert, wie unterstützende Technologie den Inhalt den Nutzern präsentieren kann. ARIA ändert keine implizite Funktionalität oder Gestaltung.

## Werte

- `id` Liste
  - : Eine durch Leerzeichen getrennte Liste von einer oder mehreren ID-Werten, die auf die Elemente verweisen, die vom aktuellen Element gesteuert werden

## Zugehörige Schnittstellen

- [`Element.ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements)
  - : Die `ariaControlsElements` Eigenschaft ist Teil jedes Element-Interfaces. Ihr Wert ist eine Liste von [`Element`](/de/docs/Web/API/Element)s, die den in dem `aria-controls` Attribut angegebenen ID-Werten entsprechen.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
