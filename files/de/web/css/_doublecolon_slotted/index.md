---
title: ::slotted()
slug: Web/CSS/::slotted
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`::slotted()`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert jedes Element, das in einen Slot innerhalb eines HTML-Templates eingefügt wurde (siehe [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots) für weitere Informationen).

Dies funktioniert nur, wenn es innerhalb von CSS verwendet wird, das sich im [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) befindet. Beachten Sie, dass dieser Selektor keinen Textknoten in einem Slot auswählt; er zielt nur auf tatsächliche Elemente ab.

{{InteractiveExample("CSS Demo: ::slotted()", "tabbed-shorter")}}

```css interactive-example
/* This CSS is being applied inside the shadow DOM. */

::slotted(.content) {
  background-color: aqua;
}

h2 ::slotted(span) {
  background: silver;
}
```

```html interactive-example
<template id="card-template">
  <div>
    <h2><slot name="caption">title goes here</slot></h2>
    <slot name="content">content goes here</slot>
  </div>
</template>

<my-card>
  <span slot="caption">Error</span>
  <p class="content" slot="content">Build failed!</p>
</my-card>
```

```js interactive-example
customElements.define(
  "my-card",
  class extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById("card-template");
      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(template.content.cloneNode(true));

      const elementStyle = document.createElement("style");
      elementStyle.textContent = `
        div {
          width: 200px;
          border: 2px dotted red;
          border-radius: 4px;
        }`;
      shadow.appendChild(elementStyle);

      const cssTab = document.querySelector("#css-output");
      const editorStyle = document.createElement("style");
      editorStyle.textContent = cssTab.textContent;
      shadow.appendChild(editorStyle);
      cssTab.addEventListener("change", () => {
        editorStyle.textContent = cssTab.textContent;
      });
    }
  },
);
```

```css
/* Selects any element placed inside a slot */
::slotted(*) {
  font-weight: bold;
}

/* Selects any <span> placed inside a slot */
::slotted(span) {
  font-weight: bold;
}
```

## Syntax

```css-nolint
::slotted(<compound-selector>) {
  /* ... */
}
```

## Beispiele

### Hervorheben von geslotteten Elementen

In diesem Beispiel verwenden wir ein Template mit drei Slots:

```html
<template id="person-template">
  <div>
    <h2>Personal ID Card</h2>
    <slot name="person-name">NAME MISSING</slot>
    <ul>
      <li><slot name="person-age">AGE MISSING</slot></li>
      <li><slot name="person-occupation">OCCUPATION MISSING</slot></li>
    </ul>
  </div>
</template>
```

Wir definieren das benutzerdefinierte Element `<person-details>`. In diesem Fall fügen wir Stile mit JavaScript hinzu, obwohl wir sie mit demselben Effekt innerhalb eines {{HTMLElement("style")}}-Blocks im {{HTMLElement("template")}} hätten hinzufügen können:

```js
customElements.define(
  "person-details",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("person-template");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });

      let style = document.createElement("style");
      style.textContent =
        "div { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }" +
        "h2 { margin: 0 0 10px; }" +
        "ul { margin: 0; }" +
        "p { margin: 10px 0; }" +
        "::slotted(*) { color: gray; font-family: sans-serif; } " +
        "::slotted(span) {text-decoration: underline;} ";

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  },
);
```

Wenn Sie das `style`-Element mit Inhalt füllen, sehen Sie, dass wir alle geslotteten Elemente (`::slotted(*)`) auswählen und ihnen eine andere Schriftart und Farbe geben. Dies unterscheidet sie von den Slots, die nicht gefüllt wurden. Wir haben alle geslotteten {{HTMLElement("span")}}s (`::slotted(span)`) gestylt, um die `<span>`s von den {{HTMLElement("p")}}s zu unterscheiden.

Unser Markup umfasst drei benutzerdefinierte Elemente, einschließlich eines benutzerdefinierten Elements mit einem ungültigen Slot-Namen in einer Quellreihenfolge, die sich vom `<template>` unterscheidet:

```html
<person-details>
  <p slot="person-name">Wonder Woman</p>
  <span slot="person-age">Immortal</span>
  <span slot="person-occupation">Superhero</span>
</person-details>

<person-details>
  <p slot="person-name">Malala Yousafzai</p>
  <span slot="person-age">17</span>
  <span slot="person-occupation">Activist</span>
</person-details>

<person-details>
  <span slot="person-age">44</span>
  <span slot="not-a-slot-name">Time traveler</span>
  <p slot="person-name">Dr. Who</p>
</person-details>
```

#### Ergebnis

{{EmbedLiveSample('Highlighting_slotted_elements', 500, 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":host")}}
- {{cssxref(":host_function", ":host()")}}
- {{cssxref(":host-context", ":host-context()")}}
- {{cssxref(":has-slotted")}}
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping)-Modul
- HTML [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot) Attribut
- HTML {{HTMLElement("slot")}} Element
- HTML {{HTMLElement("template")}} Element
- [Web Components](/de/docs/Web/API/Web_components)
