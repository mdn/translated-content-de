---
title: HTML exportparts globales Attribut
short-title: exportparts
slug: Web/HTML/Reference/Global_attributes/exportparts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`exportparts`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ermöglicht es Ihnen, Elemente in verschachtelten {{Glossary("shadow_tree", "Shadow Trees")}} zu selektieren und zu stylen, indem Sie deren `part`-Namen exportieren.

Der Shadow Tree ist eine isolierte Struktur, in der Identifikatoren, Klassen und Styles nicht durch Selektoren oder Abfragen im regulären DOM erreicht werden können. Es gibt zwei HTML-Attribute, die auf Shadow Tree-Elemente angewendet werden können, um das Targeting von CSS-Styles von außerhalb des Shadow Trees zu ermöglichen: `part` und `exportparts`.

Das globale [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut macht ein Shadow Tree-Element für sein übergeordnetes DOM sichtbar. Ein `part`-Name wird als Parameter des {{CSSxRef("::part", "::part()")}} Pseudo-Elements verwendet. Auf diese Weise können Sie CSS-Stile auf Elemente im Shadow Tree von außerhalb anwenden. Das `::part()` Pseudo-Element ist jedoch nur für das übergeordnete DOM sichtbar. Das bedeutet, dass wenn ein Shadow Tree verschachtelt ist, die Teile für keine Vorfahren außer dem direkten Elternteil sichtbar sind. Das `exportparts` Attribut löst diese Einschränkung.

Das `exportparts` Attribut ermöglicht, dass Teile des Shadow Trees außerhalb des Shadow DOM sichtbar werden. Dieses Konzept wird als "Exportieren" bezeichnet. Das `exportparts` Attribut wird am _Shadow Host_ des Elements platziert, bei dem es sich um das Element handelt, an das der _Shadow Tree_ angehängt ist. Der Wert dieses Attributs ist eine kommagetrennte Liste von `part`-Namen, die im Shadow Tree vorhanden sind. Diese Namen werden den DOMs außerhalb der aktuellen Struktur verfügbar gemacht.

```html
<template id="ancestor-component">
  <nested-component exportparts="part1, part2, part5"></nested-component>
</template>
```

Beim Exportieren eines `part`-Namens haben Sie die Möglichkeit, diesem Teil einen anderen Namen zuzuweisen, wie im unten stehenden Schnipsel gezeigt. Der Wert des `exportparts` Attributs ist tatsächlich eine kommagetrennte Liste von Part-Namen-Zuordnungen. Das `exportparts` Attribut im obigen Code-Snippet entspricht `exportparts="part1:part1, part2:part2, part5:part5`, was anzeigt, dass jeder `part` mit demselben Namen exportiert wird. In jeder Zuordnung gibt die erste Zeichenkette den Namen des Parts innerhalb des Shadow Trees an, und die zweite Zeichenkette gibt den Namen an, mit dem der Part extern sichtbar wird.

```html
<template id="ancestor-component">
  <nested-component
    exportparts="part1:exposed1, part2:exposed2"></nested-component>
</template>
```

## Beispiele

### Einfaches Komponent

Um zu demonstrieren, wie `exportparts` verwendet wird, um Teile innerhalb verschachtelter Komponenten anzusprechen, erstellen wir eine Komponente und verschachteln sie dann in einer anderen Komponente.

#### HTML

Zuerst erstellen wir eine Kartenkomponente, die wir dann mit einer anderen Komponente umschließen. Wir verwenden auch das neue Element, das wir erstellt haben, und füllen die Slots mit einfachem Text als Inhalt.

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

Wir verwenden JavaScript, um unsere im obigen HTML definierte Web-Komponente zu definieren:

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

Wir stylen Teile des `<card-component>` Shadow Trees mithilfe des {{cssxref("::part")}} Pseudo-Elements:

```css
::part(body) {
  color: red;
  font-style: italic;
}
```

#### Ergebnisse

{{ EmbedLiveSample('Basic_component', '100%', '160') }}

### Verschachtelte Komponente

Basierend auf dem obigen `<card-component>` Beispiel erstellen wir eine verschachtelte Komponente, indem wir das `<card-component>` in eine andere Komponente einbinden; in diesem Fall die `<card-wrapper>` Komponente. Dann exportieren wir die Teile der verschachtelten Komponente, die wir von außerhalb des Shadow Trees der Komponente stylen möchten, mit dem `exportparts` Attribut.

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

Wir fügen ein `<card-wrapper>` benutzerdefiniertes Element und ein `<card-component>` zum Vergleich hinzu:

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

Jetzt können wir Teile des `<card-component>` direkt und wenn es in ein `<card-wrapper>` verschachtelt ist, ansprechen:

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

Beachten Sie, dass `footer` nicht fett hervorgehoben wird, wenn es verschachtelt ist, da wir es nicht in `exportparts` aufgenommen haben.

### Exportieren von zugeordneten Teilen

Um exportierte Teile umzubenennen, fügen wir eine kommagetrennte Liste von zugeordneten Teilen hinzu, wobei jeder zugeordnete Teil den ursprünglichen Namen und den exportierten Namen, getrennt durch einen Doppelpunkt (`:`), enthält:

#### HTML

Wir aktualisieren das vorherige `<card-wrapper>` benutzerdefinierte Element mit der Zuordnungssyntax (wobei `body` von der exportierten Teilliste weggelassen wird):

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

Beim Ansprechen der Teile des `<card-component>` von innerhalb der `<card-wrapper>`, können wir nur die exportierten Teile über ihre freigegebenen Teilnamen stylen:

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

- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) HTML Attribut
- {{HTMLElement("template")}} und {{HTMLElement("slot")}} HTML Elemente
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} Pseudo-Elemente
- {{CSSXref(":host")}} Pseudo-Klasse
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle
- [`Element.part`](/de/docs/Web/API/Element/part) Eigenschaft
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
