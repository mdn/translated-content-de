---
title: ":host"
slug: Web/CSS/:host
l10n:
  sourceCommit: 0326d9301650304ef67a56e88b542b160093042e
---

{{CSSRef}}

Die **`:host`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) selektiert den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM), der das CSS enthält, in dem sie verwendet wird – mit anderen Worten, dies ermöglicht die Auswahl eines benutzerdefinierten Elements von innerhalb seines Shadow DOM.

> [!NOTE]
> Dies hat keine Auswirkung, wenn es außerhalb eines Shadow DOM verwendet wird.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-host.html", "tabbed-shorter")}}

```css
/* Selects a shadow root host */
:host {
  font-weight: bold;
}
```

## Syntax

```css
:host {
  /* ... */
}
```

## Beispiele

### Styling des Shadow-Hosts

Die folgenden Beispiele stammen aus unserem [host-selectors Beispiel](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([sehen Sie es sich auch live an](https://mdn.github.io/web-components-examples/host-selectors/)).

In diesem Beispiel haben wir ein einfaches benutzerdefiniertes Element — `<context-span>` — das Sie um Text herum platzieren können:

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

Im Konstruktor des Elements erstellen wir `style`- und `span`-Elemente, füllen das `span` mit dem Inhalt des benutzerdefinierten Elements und füllen das `style`-Element mit einigen CSS-Regeln:

```js
const style = document.createElement("style");
const span = document.createElement("span");
span.textContent = this.textContent;

const shadowRoot = this.attachShadow({ mode: "open" });
shadowRoot.appendChild(style);
shadowRoot.appendChild(span);

style.textContent =
  "span:hover { text-decoration: underline; }" +
  ":host-context(h1) { font-style: italic; }" +
  ':host-context(h1):after { content: " - no links in headers!" }' +
  ":host-context(article, aside) { color: gray; }" +
  ":host(.footer) { color : red; }" +
  ":host { background: rgb(0 0 0 / 10%); padding: 2px 5px; }";
```

Die Regel `:host { background: rgb(0 0 0 / 10%); padding: 2px 5px; }` stylt alle Instanzen des `<context-span>` Elements (in diesem Fall der Shadow-Host) im Dokument.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Webkomponenten](/de/docs/Web/API/Web_components)
- {{cssxref(":host_function", ":host()")}}
- {{cssxref(":host-context", ":host-context()")}}
- {{CSSxref("::slotted")}}
- {{CSSxRef(":state",":state()")}}
- Modul [CSS Scoping](/de/docs/Web/CSS/CSS_scoping)
