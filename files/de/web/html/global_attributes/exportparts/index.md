---
title: exportparts
slug: Web/HTML/Global_attributes/exportparts
l10n:
  sourceCommit: 77146ac016972df7bcfc3b0a2aa3b3c85eecc3df
---

{{HTMLSidebar("Global_attributes")}}

Das **`exportparts`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ermöglicht es Ihnen, Elemente in verschachtelten {{Glossary("shadow tree", "shadow trees")}} auszuwählen und zu stylen, indem Sie ihre `part`-Namen exportieren.

Der Shadow Tree ist eine isolierte Struktur, in der Bezeichner, Klassen und Stile nicht von Selektoren oder Abfragen des regulären DOMs erreicht werden können. Es gibt zwei HTML-Attribute, die auf Elemente des Shadow Trees angewendet werden können, um CSS-Stile von außen auf den Shadow Tree zu zielen: `part` und `exportparts`.

Das globale [`part`](/de/docs/Web/HTML/Global_attributes#part)-Attribut macht ein Element des Shadow Trees für sein übergeordnetes DOM sichtbar. Ein `part`-Name wird als Parameter des {{CSSxRef("::part", "::part()")}} Pseudo-Elements verwendet. Auf diese Weise können Sie CSS-Stile auf Elemente im Shadow Tree von außerhalb anwenden. Das `::part()` Pseudo-Element ist jedoch nur für das übergeordnete DOM sichtbar. Dies bedeutet, dass Teile bei einem verschachtelten Shadow Tree für keine anderen Vorfahren als den direkten Eltern sichtbar sind. Das `exportparts`-Attribut löst diese Einschränkung.

Das `exportparts`-Attribut ermöglicht es, dass Teile des Shadow Trees außerhalb des Shadow DOM sichtbar sind. Dieses Konzept wird als "Exportieren" bezeichnet. Das `exportparts`-Attribut befindet sich am _Shadow-Host_ des Elements, das Element, an dem der _Shadow Tree_ angehängt ist. Der Wert dieses Attributs ist eine durch Kommata getrennte Liste von im Shadow Tree vorhandenen `part`-Namen. Diese Namen werden den DOMs außerhalb der aktuellen Struktur zugänglich gemacht.

```html
<template id="ancestor-component">
  <nested-component exportparts="part1, part2, part5"></nested-component>
</template>
```

Beim Exportieren eines `part` haben Sie die Möglichkeit, dem Teil einen anderen Namen zuzuweisen, wie im folgenden Beispiel gezeigt. Der Wert des `exportparts`-Attributs ist wirklich eine durch Kommata getrennte Liste von Part-Name-Zuordnungen. Daher ist das `exportparts`-Attribut im obigen Code-Schnipsel gleichbedeutend mit `exportparts="part1:part1, part2:part2, part5:part5`, was bedeutet, dass jeder `part` mit demselben Namen exportiert wird. In jeder Zuordnung gibt der erste String den Namen des Teils innerhalb des Shadow Trees an, und der zweite String gibt den Namen an, mit dem der Teil extern exponiert wird.

```html
<template id="ancestor-component">
  <nested-component
    exportparts="part1:exposed1, part2:exposed2"></nested-component>
</template>
```

## Beispiele

### Einfaches Komponent

Um zu demonstrieren, wie `exportparts` verwendet wird, um Teile in verschachtelten Komponenten anzusprechen, erstellen wir eine Komponente und verschachteln sie dann in eine andere Komponente.

#### HTML

Erstellen wir zuerst eine Kartenkomponente, die wir dann in eine andere Komponente einbetten. Wir verwenden auch das neue Element, das wir erstellt haben, und füllen die Slots mit einfachem Text als Inhalt aus.

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
      super(); // Immer zuerst super im Konstruktor aufrufen
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

Weitergehend mit dem obigen `<card-component>`-Beispiel erstellen wir eine verschachtelte Komponente, indem wir die `<card-component>` innerhalb einer anderen Komponente umwickeln; in diesem Fall die `<card-wrapper>` Komponente. Wir exportieren dann die Teile von der verschachtelten Komponente, die wir mit dem `exportparts`-Attribut von außerhalb des Shadow Trees der Komponente stilisierbar machen möchten.

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
      super(); // Immer zuerst super im Konstruktor aufrufen
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
      super(); // Immer zuerst super im Konstruktor aufrufen
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

Nun können wir Teile des `<card-component>` direkt und innerhalb eines `<card-wrapper>` auf folgende Weise ansprechen:

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

### Mapped Parts exponieren

Um exportierte Teile umzubenennen, fügen wir eine Komma-getrennte Liste von gemappten Teilen hinzu, wobei jeder gemappte Part den Originalnamen und den exportierten Namen, getrennt durch einen Doppelpunkt (`:`), beinhaltet:

#### HTML

Wir aktualisieren das vorherige `<card-wrapper>` benutzerdefinierte Element mit der Remapping-Syntax (indem wir `body` aus der Liste der exportierten Teile auslassen):

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
      super(); // Immer zuerst super im Konstruktor aufrufen
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
      super(); // Immer zuerst super im Konstruktor aufrufen
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

Beim Ansprechen der Teile des `<card-component>` von innerhalb des `<card-wrapper>` können wir nur die exportierten Teile über ihre freigelegten Teilnamen stylen:

```css
/* Wählt den Namen der exportierten Teile */
::part(card__header) {
  font-weight: bold;
}
/* Wählt nichts: Diese Teilnamen wurden nicht exportiert */
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
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle
- {{DOMxRef("Element.part")}} Eigenschaft
- [Verwendung von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
