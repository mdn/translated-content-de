---
title: "::slotted()"
slug: Web/CSS/::slotted
l10n:
  sourceCommit: cebbd9095ac12557c55157355181672027fffc14
---

{{CSSRef}}

Das **`::slotted()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert jedes Element, das in einen Slot innerhalb eines HTML-Templates platziert wurde (siehe [Verwendung von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots) für weitere Informationen).

Dies funktioniert nur, wenn es innerhalb von CSS verwendet wird, das sich in einem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) befindet. Beachten Sie, dass dieser Selektor keinen Textknoten auswählt, der in einen Slot platziert wurde; er zielt nur auf tatsächliche Elemente ab.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-slotted.html", "tabbed-shorter")}}

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

Wir definieren das `<person-details>`-Custom-Element. In diesem Fall fügen wir Stile mit JavaScript hinzu, obwohl wir sie mit dem gleichen Effekt in einem {{HTMLElement("style")}}-Block innerhalb des {{HTMLElement("template")}} hätten hinzufügen können:

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

Wenn Sie das `style`-Element mit Inhalten füllen, werden Sie sehen, dass wir alle geslotteten Elemente (`::slotted(*)`) auswählen und ihnen eine andere Schriftart und Farbe geben. Dies unterscheidet sie von den Slots, die nicht gefüllt wurden. Wir haben alle geslotteten {{HTMLElement("span")}}s (`::slotted(span)`) gestylt, um die `<span>`s von den {{HTMLElement("p")}}s zu unterscheiden.

Unser Markup umfasst drei Custom-Elemente, einschließlich eines Custom-Elements mit einem ungültigen Slotnamen in einer Quellreihenfolge, die sich vom `<template>` unterscheidet:

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
  <span slot="not-a-slot-name">Time traveller</span>
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
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping)-Modul
- HTML [`slot`](/de/docs/Web/HTML/Global_attributes/slot)-Attribut
- HTML {{HTMLElement("slot")}}-Element
- HTML {{HTMLElement("template")}}-Element
- [Webkomponenten](/de/docs/Web/API/Web_components)
