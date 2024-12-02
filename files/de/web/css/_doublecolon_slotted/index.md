---
title: "::slotted()"
slug: Web/CSS/::slotted
l10n:
  sourceCommit: f47d71927e4dc46f3aabde0a56c7f940da988d9f
---

{{CSSRef}}

Das **`::slotted()`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert jedes Element, das in einen Slot innerhalb einer HTML-Vorlage platziert wurde (siehe [Verwenden von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots) für weitere Informationen).

Dies funktioniert nur, wenn es innerhalb von CSS verwendet wird, das im [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) platziert ist. Beachten Sie, dass dieser Selektor keinen Textknoten auswählt, der in einen Slot eingefügt wurde; er zielt nur auf tatsächliche Elemente.

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

### Hervorheben von Slotted-Elementen

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

Wir definieren das benutzerdefinierte Element `<person-details>`. In diesem Fall fügen wir die Stile mit JavaScript hinzu, obwohl wir sie auch in einem {{HTMLElement("style")}}-Block innerhalb der {{HTMLElement("template")}} mit demselben Effekt hätten hinzufügen können:

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

Beim Befüllen des `style`-Elements mit Inhalten sehen Sie, dass wir alle Slotted-Elemente (`::slotted(*)`) auswählen und ihnen eine andere Schrift und Farbe geben. Dies unterscheidet sie von den Slots, die nicht gefüllt wurden. Wir haben alle Slotted-{{HTMLElement("span")}}s (`::slotted(span)`) gestylt, um die `<span>`s von den {{HTMLElement("p")}}s zu unterscheiden.

Unser Markup enthält drei benutzerdefinierte Elemente, einschließlich eines benutzerdefinierten Elements mit einem ungültigen Slot-Namen in einer Quellreihenfolge, die von der des `<template>` abweicht:

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
- Modul für [CSS Scoping](/de/docs/Web/CSS/CSS_scoping)
- HTML-Attribut [`slot`](/de/docs/Web/HTML/Global_attributes/slot)
- HTML-{{HTMLElement("slot")}}-Element
- HTML-{{HTMLElement("template")}}-Element
- [Webkomponenten](/de/docs/Web/API/Web_components)
