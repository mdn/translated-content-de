---
title: "ARIA: Rolle graphics-object"
short-title: graphics-object
slug: Web/Accessibility/ARIA/Reference/Roles/graphics-object_role
l10n:
  sourceCommit: 370f1912b54d24bd7da541f8f2dd98c26d377121
---

Die Rolle `graphics-object` kennzeichnet einen Abschnitt eines [`graphics-document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role), der ein eigenständiges Objekt oder eine Unterkomponente mit semantischer Bedeutung darstellt.

> [!NOTE]
> Die Rolle `graphics-object` ist in der Spezifikation [WAI-ARIA Graphics Module](https://w3c.github.io/graphics-aria/) definiert.
> Sie ist nicht Teil der grundlegenden [WAI-ARIA](https://w3c.github.io/aria/)-Spezifikation.

## Beschreibung

Die Rolle `graphics-object` kennzeichnet einen eigenständigen Teil einer größeren Grafik, etwa eine Region auf einer Karte, einen Balken in einem Diagramm oder einen Knoten in einem Schaubild. Ein `graphics-object` kann selbst verschachtelte Unterkomponenten enthalten. Anders als ein [`graphics-document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role) muss es nicht in sich abgeschlossen sein und führt keinen eigenen Navigationskontext ein.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Ein zugänglicher Name ist optional und kann auch aus dem Inhalt des Elements abgeleitet werden. Verwenden Sie `aria-labelledby`, um auf eine Beschriftung zu verweisen, oder `aria-label`, um direkt eine anzugeben.

## Beispiele

In dieser vereinfachten Karte ist jeder Kontinent ein eigenständiges Objekt, das eine Form und eine Textbeschriftung enthält. Die Rolle `graphics-object` kennzeichnet jedes {{SVGElement("g")}} als bedeutungsvollen Teil der Karte, während die untergeordneten Inhalte erhalten bleiben. Eine Gruppe, die nur dazu dient, Elemente zu positionieren oder zu gestalten, benötigt diese Rolle nicht. Das äußere {{SVGElement("svg")}} stellt die Semantik des grafischen Dokuments bereit.

```html
<svg aria-label="World map showing major continents" viewBox="0 0 900 420">
  <title>Simplified world map</title>
  <g role="graphics-object">
    <circle cx="700" cy="130" r="120" fill="#3eca39" stroke="black" />
    <text x="700" y="137" fill="black" text-anchor="middle">Asia</text>
  </g>
  <g role="graphics-object">
    <circle cx="400" cy="70" r="50" fill="#7d39ca" stroke="black" />
    <text x="400" y="77" fill="white" text-anchor="middle">Europe</text>
  </g>
  <g role="graphics-object">
    <circle cx="400" cy="260" r="100" fill="#ca7d39" stroke="black" />
    <text x="400" y="267" fill="black" text-anchor="middle">Africa</text>
  </g>
  <g role="graphics-object">
    <circle cx="120" cy="70" r="65" fill="#ca393e" stroke="black" />
    <text x="120" y="77" fill="white" text-anchor="middle">North America</text>
  </g>
  <g role="graphics-object">
    <circle cx="120" cy="260" r="60" fill="#39ca7d" stroke="black" />
    <text x="120" y="267" fill="black" text-anchor="middle">South America</text>
  </g>
  <g role="graphics-object">
    <circle cx="760" cy="350" r="50" fill="#cac539" stroke="black" />
    <text x="760" y="357" fill="black" text-anchor="middle">Australia</text>
  </g>
</svg>
```

{{EmbedLiveSample('Examples', 600, 360)}}

## Bewährte Verfahren

Verwenden Sie für Containerelemente, die eine Sammlung voneinander unabhängiger Objekte darstellen, stattdessen die Rollen [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role).

Weisen Sie diese Rolle keinen Gruppierungselementen zu, die ausschließlich der Gestaltung oder dem Layout dienen. Lassen Sie in solchen Fällen die Rolle weg oder verwenden Sie stattdessen `none` oder `presentation`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Element {{SVGElement('svg')}}
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [ARIA: Rolle `graphics-document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role)
- [ARIA: Rolle `graphics-symbol`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-symbol_role)
- [ARIA: Rolle `group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [Hinweise zur Verwendung von ARIA in HTML](https://w3c.github.io/using-aria/)
