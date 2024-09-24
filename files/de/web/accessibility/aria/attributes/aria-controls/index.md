---
title: aria-controls
slug: Web/Accessibility/ARIA/Attributes/aria-controls
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die globale Eigenschaft `aria-controls` identifiziert das Element (oder die Elemente), dessen Inhalte oder Anwesenheit von dem Element, auf dem dieses Attribut gesetzt ist, kontrolliert werden.

## Beschreibung

Wenn ein interaktives Widget oder Element, sei es eine Kombinationsbox, ein Tab, ein Button usw., verwendet wird, um ein anderes Element oder eine Komponente in einem Dokument oder einer Anwendung anzupassen oder zu verändern, kann das `aria-controls`-Attribut verwendet werden, um das entsprechende Element oder die Elemente programmatisch mit dem steuernden Element zu verknüpfen. Das `aria-controls`-Attribut identifiziert das Element (oder die Elemente), dessen Inhalte oder Anwesenheit von dem Element, auf dem das Attribut gesetzt ist, kontrolliert werden, unabhängig davon, welche Art von Interaktion das betroffene Verhalten auslöst.

Ein [Kombobox](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)-Element hat `aria-controls` auf einen Wert gesetzt, der auf das Element verweist, das als Popup dient. `aria-controls` muss nur gesetzt werden, wenn das Popup sichtbar ist, aber es ist gültig und einfacher zu programmieren, auf ein Element zu verweisen, das nicht sichtbar ist.

Weitere Beispiele für Steuerungselemente umfassen:

- Die Schaltflächenteile eines Akkordeon-Widgets, die die Sichtbarkeit ihres zugehörigen Paneelinhalts umschalten. Jede Schaltfläche kann ein spezifiziertes `aria-controls` haben, das auf die ID des Elements verweist, das den mit der aufrufenden Steuerung verbundenen Inhalt enthält.
- Ein Element mit der Rolle [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role): Der Scrollbalken benötigt ein `aria-controls`-Attribut, das auf die ID des Elements verweist, das er steuert.
- Eine Gruppe von Tabs, die jeweils ein anderes Tab-Panel anzeigen: Jedes Element mit [`role="tab"`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) hat ein `aria-controls`-Attribut, das auf sein zugehöriges [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) verweist.

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
> ARIA verändert nur den Zugänglichkeitsbaum eines Elements und identifiziert, wie unterstützende Technologien den Inhalt den Benutzern präsentieren können. ARIA ändert keine impliziten Funktionen oder das Styling.

## Werte

- `id` Liste
  - : Eine durch Leerzeichen getrennte Liste von einer oder mehreren ID-Werten, die auf die Elemente verweisen, die vom aktuellen Element kontrolliert werden

## Zugehörige Schnittstellen

- {{domxref("Element.ariaControlsElements")}}
  - : Die Eigenschaft `ariaControlsElements` ist Teil der Schnittstelle jedes Elements. Ihr Wert ist eine Liste von {{domxref("Element")}}s, die den im `aria-controls`-Attribut angegebenen ID-Werten entsprechen.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
