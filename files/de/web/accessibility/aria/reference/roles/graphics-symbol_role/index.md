---
title: "ARIA: graphics-symbol-Rolle"
short-title: graphics-symbol
slug: Web/Accessibility/ARIA/Reference/Roles/graphics-symbol_role
l10n:
  sourceCommit: 370f1912b54d24bd7da541f8f2dd98c26d377121
---

Die Rolle `graphics-symbol` kennzeichnet ein grafisches Objekt, das eine einfache Bedeutung oder Kategorie vermittelt und bei dem die Bedeutung wichtiger ist als die konkrete visuelle Darstellung.

> [!NOTE]
> Die Rolle `graphics-symbol` ist in der Spezifikation des [WAI-ARIA Graphics Module](https://w3c.github.io/graphics-aria/) definiert.
> Sie ist nicht Teil der grundlegenden [WAI-ARIA](https://w3c.github.io/aria/)-Spezifikation.

## Beschreibung

Die Rolle `graphics-symbol` kennzeichnet ein Element als bedeutungstragendes, eigenständiges Symbol, das als Einheit fungiert. Es kann Teil einer größeren grafischen Struktur sein, etwa einer Karte, eines Diagramms oder einer schematischen Darstellung.

Die Rolle `graphics-symbol` ist eine Unterklasse von [`img`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) für Symbole mit einer einfachen Bedeutung. Ein `img` kann dagegen eine ausführliche Beschreibung erfordern.

### Alle Kindelemente sind rein präsentational

Die Kindelemente eines `graphics-symbol` werden assistiven Technologien nicht einzeln zugänglich gemacht. Nehmen Sie bedeutungstragenden Text aus den Kindelementen in den zugänglichen Namen des Symbols auf.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Ein `graphics-symbol` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, um auf eine Beschriftung zu verweisen, oder `aria-label`, um den Namen direkt anzugeben.
- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : Wenn dieses Attribut als Teil einer strukturierten Symbolsprache verwendet wird, kann es den Symboltyp unabhängig vom Namen und der Beschreibung eines einzelnen Symbols benennen.

## Beispiele

Jedes Parkplatzsymbol fasst ein Rechteck und Text in einem {{SVGElement("g")}}-Element zusammen. Durch die Rolle `graphics-symbol` wird diese Kombination für assistive Technologien zu einem einzigen Objekt, dessen Bedeutung durch `aria-label` angegeben wird. Das äußere {{SVGElement("svg")}} stellt die Semantik des grafischen Dokuments bereit.

```html
<svg aria-label="Parking lot" viewBox="0 0 700 220">
  <title>Parking lot with designated spaces</title>
  <g role="graphics-symbol" aria-label="Available parking space">
    <rect
      x="90"
      y="50"
      width="100"
      height="150"
      fill="#3986ca"
      stroke="black"
      stroke-width="3" />
    <text
      x="140"
      y="135"
      text-anchor="middle"
      fill="black"
      font-size="35"
      font-weight="bold">
      P
    </text>
    <text x="140" y="180" text-anchor="middle" fill="black" font-size="18">
      Available
    </text>
  </g>
  <g role="graphics-symbol" aria-label="Reserved parking space">
    <rect
      x="290"
      y="50"
      width="100"
      height="150"
      fill="#cac539"
      stroke="black"
      stroke-width="3" />
    <text
      x="340"
      y="135"
      text-anchor="middle"
      fill="black"
      font-size="35"
      font-weight="bold">
      P
    </text>
    <text x="340" y="180" text-anchor="middle" fill="black" font-size="18">
      Reserved
    </text>
  </g>
  <g role="graphics-symbol" aria-label="Unavailable parking space">
    <rect
      x="490"
      y="50"
      width="100"
      height="150"
      fill="#b3b3b3"
      stroke="black"
      stroke-width="3" />
    <text
      x="540"
      y="135"
      text-anchor="middle"
      fill="black"
      font-size="35"
      font-weight="bold">
      P
    </text>
    <circle
      cx="540"
      cy="123"
      r="32"
      fill="none"
      stroke="black"
      stroke-width="4" />
    <line x1="517" y1="100" x2="563" y2="146" stroke="black" stroke-width="4" />
    <text x="540" y="180" text-anchor="middle" fill="black" font-size="16">
      Unavailable
    </text>
  </g>
</svg>
```

{{EmbedLiveSample('Examples', 600, 250)}}

## Bewährte Verfahren

Verwenden Sie diese Rolle nicht für dekorative Grafiken. Verwenden Sie stattdessen `aria-hidden="true"`.

Vermeiden Sie diese Rolle bei komplexen Grafiken mit einer internen Struktur. Verwenden Sie stattdessen [`graphics-object`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role).

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Element {{SVGElement('svg')}}
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [ARIA: Rolle `graphics-document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role)
- [ARIA: Rolle `graphics-object`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role)
- [ARIA: Rolle `figure`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role)
- [ARIA: Rolle `img`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role)
- [Hinweise zur Verwendung von ARIA in HTML](https://w3c.github.io/using-aria/)
