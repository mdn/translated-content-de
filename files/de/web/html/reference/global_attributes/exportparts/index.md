---
title: "`exportparts` HTML-Globalattribut"
short-title: exportparts
slug: Web/HTML/Reference/Global_attributes/exportparts
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`exportparts`** [Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) ermöglicht es, Elemente in verschachtelten {{Glossary("shadow_tree", "Shadow Trees")}} auszuwählen und zu stylen, indem ihre `part`-Namen exportiert werden.

Der Shadow Tree ist eine isolierte Struktur, in der Bezeichner, Klassen und Stile nicht durch Selektoren oder Abfragen erreicht werden können, die zum regulären DOM gehören. Es gibt zwei HTML-Attribute, die auf Shadow Tree-Elemente angewendet werden können, um es zu ermöglichen, CSS-Stile von außen auf den Shadow Tree zu richten: `part` und `exportparts`.

Das globale [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut macht ein Shadow Tree-Element für sein übergeordnetes DOM sichtbar. Ein `part`-Name wird als Parameter des {{CSSxRef("::part", "::part()")}} Pseudo-Elements verwendet. Auf diese Weise können Sie CSS-Stile auf Elemente im Shadow Tree von außerhalb anwenden. Allerdings ist das `::part()` Pseudo-Element nur für das übergeordnete DOM sichtbar. Das bedeutet, dass Teile, wenn ein Shadow Tree verschachtelt ist, für keine Vorfahren außer dem direkten Elternteil sichtbar sind. Das `exportparts` Attribut löst diese Einschränkung.

Das `exportparts` Attribut ermöglicht es Shadow Tree-Teilen, außerhalb des Shadow DOM sichtbar zu werden. Dieses Konzept wird als "Exportieren" bezeichnet. Das `exportparts` Attribut wird auf das Element angewendet, das als _shadow host_ fungiert, welches das Element ist, an das der _Shadow Tree_ angehängt ist. Der Wert dieses Attributs ist eine durch Kommas getrennte Liste von `part`-Namen, die im Shadow Tree vorhanden sind. Diese Namen werden den DOMs außerhalb der aktuellen Struktur zur Verfügung gestellt.

```html
<template id="ancestor-component">
  <nested-component exportparts="part1, part2, part5"></nested-component>
</template>
```

Beim Exportieren eines `part` haben Sie die Möglichkeit, dem Teil einen anderen Namen zuzuweisen, wie im unten stehenden Codeausschnitt gezeigt. Der Wert des `exportparts` Attributs ist tatsächlich eine durch Kommas getrennte Liste von Teil-Namensabbildungen. Das `exportparts` Attribut im obigen Codeausschnitt entspricht also `exportparts="part1:part1, part2:part2, part5:part5"`, was darauf hindeutet, dass jedes `part` mit dem gleichen Namen exportiert wird. In jeder Abbildung gibt die erste Zeichenfolge den Namen des Teils innerhalb des Shadow Trees an, und die zweite Zeichenfolge gibt den Namen an, unter dem der Teil extern sichtbar gemacht wird.

```html
<template id="ancestor-component">
  <nested-component
    exportparts="part1:exposed1, part2:exposed2"></nested-component>
</template>
```

## Beispiele

### Einfaches Komponentenbeispiel

Um zu demonstrieren, wie `exportparts` verwendet wird, um Teile innerhalb verschachtelter Komponenten anzuvisieren, erstellen wir eine Komponente und verschachteln sie innerhalb einer anderen Komponente.

#### HTML

Zuerst erstellen wir eine Kartenkomponente, die wir dann mit einer anderen Komponente umwickeln. Wir verwenden auch das neue Element, das wir erstellt haben, und füllen die Slots mit einfachem Text als Inhalt.

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

Wir stylen Teile des `<card-component>` Shadow Trees mit dem {{cssxref("::part")}} Pseudo-Element:

```css
::part(body) {
  color: red;
  font-style: italic;
}
```

#### Ergebnisse

{{ EmbedLiveSample('Basic_component', '100%', '160') }}

### Verschachtelte Komponente

Wir führen das obige `<card-component>`-Beispiel fort und erstellen eine verschachtelte Komponente, indem wir die `<card-component>` innerhalb einer anderen Komponente, in diesem Fall der `<card-wrapper>`-Komponente, umwickeln. Wir exportieren dann die Teile der verschachtelten Komponente, die wir von außerhalb des Shadow Trees der Komponente stylisieren möchten, mit dem `exportparts` Attribut.

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

Wir fügen ein `<card-wrapper>`-benutzerdefiniertes Element und ein `<card-component>` zum Vergleich hinzu:

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

Nun können wir Teile der `<card-component>` direkt und wenn sie innerhalb eines `<card-wrapper>` verschachtelt sind, anvisieren:

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

Beachten Sie, dass `footer` nicht fett ist, wenn es verschachtelt ist, da wir es nicht in `exportparts` aufgenommen haben.

### Mapped Parts Freigabe

Um exportierte Teile umzubenennen, fügen wir eine durch Kommas getrennte Liste von gemappten Teilen hinzu, wobei jedes gemappte Teil den ursprünglichen Namen und den exportierten Namen durch einen Doppelpunkt (`:`) getrennt enthält:

#### HTML

Wir aktualisieren das vorherige `<card-wrapper>` benutzerdefinierte Element mit der Remapping-Syntax (das `body` aus der Liste der exportierten Teile ausgeschlossen):

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

Beim Anvisieren der Teile der `<card-component>` von innerhalb des `<card-wrapper>` können wir nur die exportierten Teile über ihre freigegebenen Teil-Namen stylen:

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
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} Pseudo-Elemente
- {{CSSXref(":host")}} Pseudoklasse
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle
- [`Element.part`](/de/docs/Web/API/Element/part) Eigenschaft
- [Verwendung von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
