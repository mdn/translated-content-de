---
title: Globales HTML-Attribut `exportparts`
short-title: exportparts
slug: Web/HTML/Reference/Global_attributes/exportparts
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Mit dem **globalen Attribut `exportparts`** können Sie Elemente in verschachtelten {{Glossary("shadow_tree", "Shadow Trees")}} auswählen und gestalten, indem Sie deren `part`-Namen exportieren.

Ein Shadow Tree ist eine isolierte Struktur. Auf seine Bezeichner, Klassen und Stile können Selektoren oder Abfragen des regulären DOM nicht zugreifen. Zwei HTML-Attribute ermöglichen es, CSS-Stile von außerhalb auf Elemente eines Shadow Trees anzuwenden: `part` und `exportparts`.

Das globale Attribut [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) macht ein Element eines Shadow Trees für dessen übergeordnetes DOM sichtbar. Ein `part`-Name wird als Parameter des Pseudoelements {{CSSxRef("::part", "::part()")}} verwendet. So können Sie CSS-Stile von außerhalb des Shadow Trees auf dessen Elemente anwenden. Das Pseudoelement `::part()` ist jedoch nur für das direkt übergeordnete DOM sichtbar. Bei verschachtelten Shadow Trees sind die Parts daher für weiter entfernte Vorfahren nicht sichtbar. Das Attribut `exportparts` hebt diese Einschränkung auf.

Mit dem Attribut `exportparts` können Parts eines Shadow Trees außerhalb des Shadow DOM sichtbar gemacht werden. Dies wird als „Exportieren“ bezeichnet. Das Attribut `exportparts` wird auf dem _Shadow Host_ platziert, also dem Element, an das der _Shadow Tree_ angehängt ist. Sein Wert ist eine durch Kommas getrennte Liste von `part`-Namen, die im Shadow Tree vorhanden sind. Diese Namen werden den DOMs außerhalb der aktuellen Struktur zugänglich gemacht.

```html
<template id="ancestor-component">
  <nested-component exportparts="part1, part2, part5"></nested-component>
</template>
```

Beim Exportieren eines `part` können Sie ihm einen anderen Namen zuweisen, wie das folgende Beispiel zeigt. Der Wert des Attributs `exportparts` ist eine durch Kommas getrennte Liste von Zuordnungen zwischen Part-Namen. Das Attribut `exportparts` im obigen Codebeispiel entspricht daher `exportparts="part1:part1, part2:part2, part5:part5`: Jeder `part` wird unter demselben Namen exportiert. Bei jeder Zuordnung gibt die erste Zeichenfolge den Namen des Parts innerhalb des Shadow Trees an und die zweite den Namen, unter dem er nach außen zugänglich gemacht wird.

```html
<template id="ancestor-component">
  <nested-component
    exportparts="part1:exposed1, part2:exposed2"></nested-component>
</template>
```

## Beispiele

### Einfache Komponente

Um zu zeigen, wie `exportparts` die Gestaltung von Parts in verschachtelten Komponenten ermöglicht, erstellen wir eine Komponente und verschachteln sie anschließend in einer weiteren Komponente.

#### HTML

Zunächst erstellen wir eine Kartenkomponente, die wir anschließend mit einer weiteren Komponente umschließen. Wir verwenden das neu erstellte Element und füllen seine Slots mit einfachem Text.

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

#### CSS

Wir gestalten Parts des Shadow Trees von `<card-component>` mit dem Pseudoelement {{cssxref("::part")}}:

```css
::part(body) {
  color: red;
  font-style: italic;
}
```

#### JavaScript

Mit JavaScript definieren wir die oben im HTML verwendete Webkomponente:

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

#### Ergebnis

{{ EmbedLiveSample('Basic_component', '100%', '160') }}

### Verschachtelte Komponente

Aufbauend auf dem Beispiel mit `<card-component>` erstellen wir eine verschachtelte Komponente, indem wir `<card-component>` mit einer weiteren Komponente umschließen: `<card-wrapper>`. Anschließend exportieren wir mit dem Attribut `exportparts` die Parts der verschachtelten Komponente, die von außerhalb ihres Shadow Trees gestaltet werden können sollen.

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

Zum Vergleich verwenden wir sowohl ein benutzerdefiniertes Element `<card-wrapper>` als auch ein `<card-component>`:

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

#### CSS

Das folgende CSS richtet sich an Parts von `<card-component>` – sowohl direkt als auch bei einer Verschachtelung in `<card-wrapper>`:

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

#### Ergebnis

{{ EmbedLiveSample('Nested_component', '100%', '400') }}

Beachten Sie, dass `footer` im verschachtelten Zustand nicht fett dargestellt wird, da wir es nicht in `exportparts` aufgenommen haben.

### Zugeordnete Parts verfügbar machen

Um exportierte Parts umzubenennen, verwenden wir eine durch Kommas getrennte Liste von Zuordnungen. Jede Zuordnung enthält den ursprünglichen und den exportierten Namen, getrennt durch einen Doppelpunkt (`:`):

#### HTML

Wir aktualisieren das zuvor erstellte benutzerdefinierte Element `<card-wrapper>` mit dieser Zuordnungssyntax und lassen `body` aus der Liste der exportierten Parts weg:

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

#### CSS

Wenn wir Parts von `<card-component>` innerhalb von `<card-wrapper>` gestalten möchten, können wir auf die exportierten Parts nur über ihre nach außen zugänglich gemachten Namen zugreifen:

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

#### Ergebnis

{{ EmbedLiveSample('Exposing_mapped_parts', '100%', '160') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)
- HTML-Elemente {{HTMLElement("template")}} und {{HTMLElement("slot")}}
- Pseudoelemente {{CSSXref("::part")}} und {{CSSXref("::slotted")}}
- Pseudoklasse {{CSSXref(":host")}}
- Schnittstelle [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
- Eigenschaft [`Element.part`](/de/docs/Web/API/Element/part)
- [Templates und Slots verwenden](/de/docs/Web/API/Web_components/Using_templates_and_slots)
- Modul [CSS Scoping](/de/docs/Web/CSS/Guides/Scoping)
