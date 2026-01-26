---
title: HTML exportparts Globales Attribut
short-title: exportparts
slug: Web/HTML/Reference/Global_attributes/exportparts
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

Das **`exportparts`**-[Globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ermöglicht es, Elemente, die in verschachtelten {{Glossary("shadow_tree", "Shadow Trees")}} existieren, auszuwählen und zu stylen, indem deren `part`-Namen exportiert werden.

Der Shadow Tree ist eine isolierte Struktur, in der Bezeichner, Klassen und Styles nicht von Selektoren oder Abfragen des regulären DOM erreicht werden können. Es gibt zwei HTML-Attribute, die auf Elemente des Shadow Trees angewendet werden können, um CSS-Styles von außen auf den Shadow Tree zu richten: `part` und `exportparts`.

Das globale [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut macht ein Shadow-Tree-Element für sein übergeordnetes DOM sichtbar. Ein `part`-Name wird als Parameter des {{CSSxRef("::part", "::part()")}}-Pseudoelements verwendet. Auf diese Weise können Sie CSS-Styles auf Elemente im Shadow Tree von außerhalb anwenden. Das `::part()`-Pseudoelement ist jedoch nur für das übergeordnete DOM sichtbar. Das bedeutet, dass Teile, wenn ein Shadow Tree verschachtelt ist, für keine anderen Vorfahren als den direkten Elternteil sichtbar sind. Das `exportparts`-Attribut löst diese Einschränkung.

Das `exportparts`-Attribut ermöglicht es, dass Teile des Shadow Trees außerhalb des Shadow DOM sichtbar werden. Dieses Konzept wird als "Exportieren" bezeichnet. Das `exportparts`-Attribut wird auf dem Element platziert, das als _Shadow Host_ dient, also das Element, an das der _Shadow Tree_ angehängt ist. Der Wert dieses Attributs ist eine kommaseparierte Liste von `part`-Namen, die im Shadow Tree vorhanden sind. Diese Namen werden außerhalb der aktuellen Struktur für DOMs verfügbar gemacht.

```html
<template id="ancestor-component">
  <nested-component exportparts="part1, part2, part5"></nested-component>
</template>
```

Beim Exportieren eines `parts` haben Sie die Möglichkeit, dem Part einen anderen Namen zuzuweisen, wie im untenstehenden Code-Snippet gezeigt. Der Wert des `exportparts`-Attributs ist wirklich eine kommaseparierte Liste von Part-Namensabbildungen. Somit entspricht das `exportparts`-Attribut im obigen Code-Snippet `exportparts="part1:part1, part2:part2, part5:part5`, was bedeutet, dass jeder `part` mit demselben Namen exportiert wird. In jeder Abbildung gibt der erste String den Namen des Teils innerhalb des Shadow Trees an, und der zweite String gibt den Namen an, mit dem der Teil extern dargestellt wird.

```html
<template id="ancestor-component">
  <nested-component
    exportparts="part1:exposed1, part2:exposed2"></nested-component>
</template>
```

## Beispiele

### Einfaches Komponente

Um zu demonstrieren, wie `exportparts` verwendet wird, um Teile innerhalb verschachtelter Komponenten anzuvisieren, erstellen wir eine Komponente und verschachteln sie dann innerhalb einer anderen Komponenten.

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
      const template = document.getElementById("card-component-template");
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(document.importNode(template.content, true));
    }
  },
);
```

#### CSS

Wir stylen Teile des `<card-component>` Shadow Trees mit dem {{cssxref("::part")}}-Pseudoelement:

```css
::part(body) {
  color: red;
  font-style: italic;
}
```

#### Ergebnisse

{{ EmbedLiveSample('Basic_component', '100%', '160') }}

### Verschachtelte Komponente

Fortsetzend mit dem obigen `<card-component>`-Beispiel, erstellen wir eine verschachtelte Komponente, indem wir die `<card-component>` innerhalb einer anderen Komponente umhüllen, in diesem Fall die `<card-wrapper>`-Komponente. Wir exportieren dann die Teile aus der verschachtelten Komponente, die von außerhalb des Komponenten-Shadow Trees gestylt werden sollen, mit dem `exportparts`-Attribut.

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

Wir fügen ein `<card-wrapper>`-Custom-Element hinzu und ein `<card-component>` zum Vergleich:

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
      const template = document.getElementById("card-component-template");
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(document.importNode(template.content, true));
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
      const template = document.getElementById("card-wrapper");
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(document.importNode(template.content, true));
    }
  },
);
```

#### CSS

Nun können wir Teile des `<card-component>` direkt und wenn es innerhalb eines `<card-wrapper>` verschachtelt ist, wie folgt stylen:

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

Hinweis: `footer` ist nicht fett gedruckt, wenn verschachtelt, da wir es nicht in `exportparts` aufgenommen haben.

### Mapped Parts freigeben

Um exportierte Teile umzubenennen, fügen wir eine kommaseparierte Liste von gemappten Teilen hinzu, wobei jeder gemappte Teil den Originalnamen und den exportierten Namen durch einen Doppelpunkt (`:`) getrennt enthält:

#### HTML

Wir aktualisieren das vorherige `<card-wrapper>`-Custom-Element mit der Remapping-Syntax (wobei `body` aus der Liste der exportierten Teile weggelassen wird):

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
      const template = document.getElementById("card-component-template");
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(document.importNode(template.content, true));
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
      const template = document.getElementById("card-wrapper");
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(document.importNode(template.content, true));
    }
  },
);
```

#### CSS

Beim Anvisieren der Teile des `<card-component>` aus dem `<card-wrapper>` heraus, können wir die exportierten Teile nur über ihre freigegebenen Teilnamen stylen:

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
- [Using templates and slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
