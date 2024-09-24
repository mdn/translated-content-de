---
title: "::slotted()"
slug: Web/CSS/::slotted
l10n:
  sourceCommit: cebbd9095ac12557c55157355181672027fffc14
---

{{CSSRef}}

Das **`::slotted()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert jedes Element, das in einen Slot innerhalb einer HTML-Vorlage platziert wurde (siehe [Verwendung von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots) für weitere Informationen).

Dies funktioniert nur, wenn es innerhalb von CSS verwendet wird, das im [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) platziert ist. Beachten Sie, dass dieser Selektor keinen in einen Slot platzierten Textknoten auswählt; er richtet sich nur an tatsächliche Elemente.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-slotted.html", "tabbed-shorter")}}

```css
/* Wählt jedes Element aus, das in einen Slot platziert wurde */
::slotted(*) {
  font-weight: bold;
}

/* Wählt jedes <span> aus, das in einen Slot platziert wurde */
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

### Hervorhebung von platzierten Elementen

In diesem Beispiel verwenden wir eine Vorlage mit drei Slots:

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

Wir definieren das benutzerdefinierte Element `<person-details>`. In diesem Fall fügen wir die Stile mit JavaScript hinzu, obwohl wir sie ebenso in einem {{HTMLElement("style")}}-Block innerhalb des {{HTMLElement("template")}} mit dem gleichen Effekt hätten hinzufügen können:

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

Beim Füllen des `style`-Elements mit Inhalt sehen Sie, dass wir alle platzierten Elemente (`::slotted(*)`) auswählen und ihnen eine andere Schriftart und Farbe geben. Dies unterscheidet sie von den Slots, die nicht gefüllt wurden. Wir haben alle platzierten {{HTMLElement("span")}}s (`::slotted(span)`) gestylt, um die `<span>`s von den {{HTMLElement("p")}}s zu unterscheiden.

Unser Markup enthält drei benutzerdefinierte Elemente, einschließlich eines benutzerdefinierten Elements mit einem ungültigen Slot-Namen in einer Quellreihenfolge, die sich von der des `<template>` unterscheidet:

```html
<person-details>
  <p slot="person-name">Wonder Woman</p>
  <span slot="person-age">Unsterblich</span>
  <span slot="person-occupation">Superheldin</span>
</person-details>

<person-details>
  <p slot="person-name">Malala Yousafzai</p>
  <span slot="person-age">17</span>
  <span slot="person-occupation">Aktivistin</span>
</person-details>

<person-details>
  <span slot="person-age">44</span>
  <span slot="not-a-slot-name">Zeitreisende</span>
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
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
- HTML [`slot`](/de/docs/Web/HTML/Global_attributes/slot) Attribut
- HTML {{HTMLElement("slot")}} Element
- HTML {{HTMLElement("template")}} Element
- [Web Components](/de/docs/Web/API/Web_components)
