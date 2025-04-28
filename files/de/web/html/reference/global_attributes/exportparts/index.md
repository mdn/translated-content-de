---
title: exportparts
slug: Web/HTML/Reference/Global_attributes/exportparts
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{HTMLSidebar("Global_attributes")}}

Das **`exportparts`**-[Globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ermöglicht es Ihnen, Elemente in verschachtelten {{Glossary("shadow_tree", "Shadow Trees")}} auszuwählen und zu stylen, indem Sie deren `part`-Namen exportieren.

Der Shadow Tree ist eine isolierte Struktur, in der Bezeichner, Klassen und Stile nicht durch Selektoren oder Abfragen des regulären DOMs erreicht werden können. Es gibt zwei HTML-Attribute, die auf Elemente des Shadow Trees angewendet werden können, um CSS-Stile von außen zu ermöglichen: `part` und `exportparts`.

Das globale Attribut [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) macht ein Shadow-Tree-Element für das übergeordnete DOM sichtbar. Ein `part`-Name wird als Parameter des Pseudoelements {{CSSxRef("::part", "::part()")}} verwendet. Auf diese Weise können Sie CSS-Stile auf Elemente im Shadow Tree von außerhalb anwenden. Das Pseudoelement `::part()` ist jedoch nur für das übergeordnete DOM sichtbar. Das bedeutet, dass bei einem verschachtelten Shadow Tree die Teile für keine Vorfahren außer dem direkten Elternteil sichtbar sind. Das Attribut `exportparts` löst diese Einschränkung.

Das Attribut `exportparts` ermöglicht es, Teile des Shadow Trees außerhalb des Shadow DOM sichtbar zu machen. Dieses Konzept wird als "Exportieren" bezeichnet. Das `exportparts`-Attribut wird auf dem _Shadow Host_ des Elements platziert, welches das Element ist, an das der _Shadow Tree_ angehängt ist. Der Wert dieses Attributs ist eine kommagetrennte Liste von `part`-Namen, die im Shadow Tree vorhanden sind. Diese Namen werden den DOMs außerhalb der aktuellen Struktur verfügbar gemacht.

```html
<template id="ancestor-component">
  <nested-component exportparts="part1, part2, part5"></nested-component>
</template>
```

Beim Exportieren eines `part` haben Sie die Möglichkeit, dem Teil einen anderen Namen zuzuweisen, wie im folgenden Ausschnitt gezeigt. Der Wert des `exportparts`-Attributs ist tatsächlich eine kommagetrennte Liste von Part-Namenszuordnungen. Das `exportparts`-Attribut im obigen Codeausschnitt entspricht `exportparts="part1:part1, part2:part2, part5:part5"`, was darauf hinweist, dass jeder `part` mit demselben Namen exportiert wird. In jeder Zuordnung gibt der erste String den Namen des Teils im Shadow Tree an, und der zweite String gibt den Namen an, mit dem der Teil extern sichtbar gemacht wird.

```html
<template id="ancestor-component">
  <nested-component
    exportparts="part1:exposed1, part2:exposed2"></nested-component>
</template>
```

## Beispiele

### Einfaches Komponent

Um zu demonstrieren, wie `exportparts` verwendet wird, um Teile in verschachtelten Komponenten anzuvisieren, erstellen wir eine Komponente, die wir dann in eine andere Komponente verschachteln.

#### HTML

Zuerst erstellen wir eine Kartenkomponente, die wir dann mit einer anderen Komponente umhüllen. Wir verwenden auch das neue Element, das wir erstellt haben, und füllen die Slots mit einfachem Text als Inhalt.

```html
<template id="card-component-template">
  <style>
    :host {
      display: block;
    }
  </style>
  <div class="base" part="base">
    <div part="header"><slot name="header_slot"></slot></div>
    <div part="body"><slot name="body_slot"></slot></div>
    <div part="footer"><slot name="footer_slot"></slot></div>
  </div>
</template>

<card-component>
  <p slot="header_slot">This is the header</p>
  <p slot="body_slot">This is the body</p>
  <p slot="footer_slot">This is the footer</p>
</card-component>
```

#### JavaScript

Wir verwenden JavaScript, um unsere im obigen HTML definierte Webkomponente zu definieren:

```js
customElements.define(
  "card-component",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const cardComponent = document.getElementById(
        "card-component-template",
      ).content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardComponent.cloneNode(true));
    }
  },
);
```

#### CSS

Wir stylen Teile des `<card-component>`-Shadow Trees mit dem {{cssxref("::part")}}-Pseudoelement:

```css
::part(body) {
  color: red;
  font-style: italic;
}
```

#### Ergebnisse

{{ EmbedLiveSample('Basic_component', '100%', '160') }}

### Verschachtelte Komponente

In Fortsetzung des obigen Beispiels `<card-component>` erstellen wir eine verschachtelte Komponente, indem wir `<card-component>` in eine weitere Komponente umhüllen, in diesem Fall die `<card-wrapper>`-Komponente. Dann exportieren wir die Teile aus der verschachtelten Komponente, die wir von außerhalb des Shadow Trees der Komponente stilisierbar machen möchten, mit dem Attribut `exportparts`.

#### HTML

```html hidden
<template id="card-component-template">
  <style>
    :host {
      display: block;
    }
  </style>
  <div class="base" part="base">
    <div part="header"><slot name="header_slot"></slot></div>
    <div part="body"><slot name="body_slot"></slot></div>
    <div part="footer"><slot name="footer_slot"></slot></div>
  </div>
</template>
```

```html
<template id="card-wrapper">
  <style>
    :host {
      display: block;
    }
  </style>
  <card-component exportparts="base, header, body">
    <slot name="H" slot="header_slot"></slot>
    <slot name="B" slot="body_slot"></slot>
    <slot name="F" slot="footer_slot"></slot>
  </card-component>
</template>
```

Wir fügen ein benutzerdefiniertes `<card-wrapper>`-Element und ein `<card-component>` zum Vergleich hinzu:

```html
<h2>Card wrapper</h2>

<card-wrapper>
  <p slot="H">This is the header</p>
  <p slot="B">This is the body</p>
  <p slot="F">This is the footer</p>
</card-wrapper>

<h2>Card component</h2>

<card-component>
  <p slot="header_slot">This is the header</p>
  <p slot="body_slot">This is the body</p>
  <p slot="footer_slot">This is the footer</p>
</card-component>
```

#### JavaScript

```js hidden
customElements.define(
  "card-component",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const cardComponent = document.getElementById(
        "card-component-template",
      ).content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardComponent.cloneNode(true));
    }
  },
);
```

```js
customElements.define(
  "card-wrapper",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const cardWrapper = document.getElementById("card-wrapper").content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardWrapper.cloneNode(true));
    }
  },
);
```

#### CSS

Nun können wir Teile des `<card-component>` direkt anvisieren und wenn es in einem `<card-wrapper>` verschachtelt ist, wie folgt:

```css
h2 {
  background-color: #dedede;
}

card-wrapper,
card-component {
  border: 1px dashed blue;
  width: fit-content;
}

::part(body) {
  color: red;
  font-style: italic;
}

::part(header),
::part(footer) {
  font-weight: bold;
}
```

#### Ergebnisse

{{ EmbedLiveSample('Nested_component', '100%', '400') }}

Beachten Sie, dass `footer` nicht fett ist, wenn es verschachtelt ist, da wir es nicht in `exportparts` eingeschlossen haben.

### Exponierte zugeordnete Teile

Um exportierte Teile umzubenennen, fügen wir eine kommagetrennte Liste von zugeordneten Teilen hinzu, wobei jedes zugeordnete Teil den ursprünglichen Namen und den exportierten Namen durch einen Doppelpunkt (`:`) getrennt enthält:

#### HTML

Wir aktualisieren das vorherige benutzerdefinierte `<card-wrapper>`-Element mit der Zuordnungssyntax (ohne `body` aus der Liste der exportierten Teile):

```html hidden
<template id="card-component-template">
  <div class="base" part="base">
    <div part="header"><slot name="header_slot"></slot></div>
    <div part="body"><slot name="body_slot"></slot></div>
    <div part="footer"><slot name="footer_slot"></slot></div>
  </div>
</template>

<card-wrapper>
  <p slot="H">This is the header</p>
  <p slot="B">This is the body</p>
  <p slot="F">This is the footer</p>
</card-wrapper>
```

```html
<template id="card-wrapper">
  <card-component
    exportparts="
       base:card__base,
       header:card__header,
       footer:card__footer
     ">
    <span slot="header_slot"><slot name="H"></slot></span>
    <span slot="body_slot"><slot name="B"></slot></span>
    <span slot="footer_slot"><slot name="F"></slot></span>
  </card-component>
</template>
```

#### JavaScript

```js hidden
customElements.define(
  "card-component",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const cardComponent = document.getElementById(
        "card-component-template",
      ).content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardComponent.cloneNode(true));
    }
  },
);
```

```js
customElements.define(
  "card-wrapper",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const cardWrapper = document.getElementById("card-wrapper").content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardWrapper.cloneNode(true));
    }
  },
);
```

#### CSS

Beim Anvisieren der Teile des `<card-component>` von innerhalb des `<card-wrapper>` können wir nur die exportierten Teile über ihre exponierten Teilenamen stylen:

```css
/* selects the exported parts name */
::part(card__header) {
  font-weight: bold;
}
/* selects nothing: these part names were not exported */
::part(footer),
::part(body) {
  font-weight: bold;
}
```

#### Ergebnisse

{{ EmbedLiveSample('Exposing_mapped_parts', '100%', '160') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) HTML-Attribut
- {{HTMLElement("template")}} und {{HTMLElement("slot")}} HTML-Elemente
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} Pseudoelemente
- {{CSSXref(":host")}} Pseudoklasse
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle
- [`Element.part`](/de/docs/Web/API/Element/part) Eigenschaft
- [Vorlagen und Slots verwenden](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS-Bereich](/de/docs/Web/CSS/CSS_scoping)-Modul
