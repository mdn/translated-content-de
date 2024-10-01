---
title: exportparts
slug: Web/HTML/Global_attributes/exportparts
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{HTMLSidebar("Global_attributes")}}

Das **`exportparts`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ermöglicht es Ihnen, Elemente in verschachtelten {{Glossary("shadow_tree", "Shadow Trees")}} auszuwählen und zu stylen, indem Sie ihre `part`-Namen exportieren.

Der Shadow Tree ist eine isolierte Struktur, in der Bezeichner, Klassen und Stile von Selektoren oder Abfragen, die zum regulären DOM gehören, nicht erreicht werden können. Es gibt zwei HTML-Attribute, die auf Shadow-Tree-Elemente angewendet werden können, um CSS-Stile von außen auf den Shadow Tree zu zielen: `part` und `exportparts`.

Das globale [`part`](/de/docs/Web/HTML/Global_attributes#part) Attribut macht ein Shadow-Tree-Element für sein übergeordnetes DOM sichtbar. Ein `part`-Name wird als Parameter des {{CSSxRef("::part", "::part()")}}-Pseudo-Elements verwendet. Auf diese Weise können Sie CSS-Stile auf Elemente im Shadow Tree von außerhalb anwenden. Allerdings ist das `::part()`-Pseudo-Element nur für das übergeordnete DOM sichtbar. Dies bedeutet, dass bei einem verschachtelten Shadow Tree die Teile für keinen Vorfahren außer dem direkten übergeordneten Element sichtbar sind. Das `exportparts`-Attribut löst diese Einschränkung.

Das `exportparts`-Attribut ermöglicht es, dass Shadow-Tree-Teile außerhalb des Shadow DOM sichtbar werden. Dieses Konzept wird als "Exportieren" bezeichnet. Das `exportparts`-Attribut wird auf dem _Shadow Host_ des Elements platziert, bei dem es sich um das Element handelt, an das der _Shadow Tree_ angehängt ist. Der Wert dieses Attributs ist eine durch Kommas getrennte Liste von `part`-Namen, die im Shadow Tree vorhanden sind. Diese Namen werden den DOMs außerhalb der aktuellen Struktur zur Verfügung gestellt.

```html
<template id="ancestor-component">
  <nested-component exportparts="part1, part2, part5"></nested-component>
</template>
```

Beim Exportieren eines `part` haben Sie die Möglichkeit, dem Teil einen anderen Namen zuzuweisen, wie im folgenden Beispiel gezeigt. Der Wert des `exportparts`-Attributs ist wirklich eine durch Kommas getrennte Liste von Part-Name-Zuordnungen. Das `exportparts`-Attribut im obigen Code-Snippet ist das Äquivalent zu `exportparts="part1:part1, part2:part2, part5:part5`, was bedeutet, dass jeder `part` mit demselben Namen exportiert wird. In jeder Zuordnung spezifiziert der erste String den Namen des Teils innerhalb des Shadow Trees, und der zweite String gibt den Namen an, unter dem der Teil extern zugänglich gemacht wird.

```html
<template id="ancestor-component">
  <nested-component
    exportparts="part1:exposed1, part2:exposed2"></nested-component>
</template>
```

## Beispiele

### Einfacher Komponente

Um zu demonstrieren, wie `exportparts` verwendet wird, um Teile innerhalb verschachtelter Komponenten anzusprechen, erstellen wir eine Komponente und verschachteln sie dann in einer anderen Komponente.

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

Wir stylen Teile des `<card-component>`-Shadow Trees mit dem {{cssxref("::part")}}-Pseudo-Element:

```css
::part(body) {
  color: red;
  font-style: italic;
}
```

#### Ergebnisse

{{ EmbedLiveSample('Basic_component', '100%', '160') }}

### Verschachtelte Komponente

Fortsetzend mit dem obigen `<card-component>`-Beispiel erstellen wir eine verschachtelte Komponente, indem wir das `<card-component>` in eine andere Komponente einbinden; in diesem Fall die `<card-wrapper>`-Komponente. Wir exportieren dann die Teile aus der verschachtelten Komponente, die wir von außerhalb des Komponenten-Shadow Trees mit dem `exportparts`-Attribut stilisierbar machen wollen.

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

Wir fügen ein `<card-wrapper>`-Benutzerelement sowie ein `<card-component>` zum Vergleich ein:

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

Jetzt können wir Teile des `<card-component>` direkt und wenn sie in einem `<card-wrapper>` verschachtelt sind, wie folgt ansprechen:

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

Beachten Sie, dass `footer` nicht fett ist, wenn verschachtelt, da wir es nicht in `exportparts` einbezogen haben.

### Exponierte gemappte Teile

Um exportierte Teile umzubenennen, fügen wir eine durch Kommas getrennte Liste von gemappten Teilen ein, wobei jedes gemappte Teil den ursprünglichen Namen und den exportierten Namen, getrennt durch einen Doppelpunkt (`:`), umfasst:

#### HTML

Wir aktualisieren das vorherige `<card-wrapper>`-Benutzerelement mit der Abbildungssyntax (ohne `body` aus der Liste der exportierten Teile):

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

Beim Ansprechen der Teile des `<card-component>` von innerhalb des `<card-wrapper>`, können wir nur die exportierten Teile über ihre freigegebenen Teilnamen stilisieren:

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

- [`part`](/de/docs/Web/HTML/Global_attributes/part) HTML-Attribut
- {{HTMLElement("template")}} und {{HTMLElement("slot")}} HTML-Elemente
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} Pseudo-Elemente
- {{CSSXref(":host")}} Pseudo-Klasse
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle
- [`Element.part`](/de/docs/Web/API/Element/part)-Eigenschaft
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping)-Modul
