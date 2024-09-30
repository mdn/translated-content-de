---
title: "HTMLStyleElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLStyleElement/disabled
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLStyleElement.disabled`**-Eigenschaft kann verwendet werden, um festzustellen, ob das Stylesheet deaktiviert ist (`true`) oder nicht (`false`).

Bitte beachten Sie, dass es kein entsprechendes `disabled`-Attribut für das [HTML-`<style>`-Element](/de/docs/Web/HTML/Element/style) gibt.

## Wert

Gibt `true` zurück, wenn das Stylesheet deaktiviert ist oder kein zugehöriges Stylesheet vorhanden ist; andernfalls `false`.
Der Standardwert ist `false` (wenn ein zugehöriges Stylesheet vorhanden ist).

Die Eigenschaft kann verwendet werden, um ein zugehöriges Stylesheet zu aktivieren oder zu deaktivieren.
Das Setzen der Eigenschaft auf `true`, wenn kein zugehöriges Stylesheet vorhanden ist, hat keine Auswirkung.

## Beispiele

### Deaktivieren eines Inline-Styles

Dieses Beispiel zeigt, wie die disabled-Eigenschaft programmatisch bei einem Stil gesetzt wird, der im HTML mit dem [HTML-`<style>`-Element](/de/docs/Web/HTML/Element/style) definiert wurde.
Beachten Sie, dass Sie auch auf alle Stylesheets im Dokument über [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) zugreifen können.

#### HTML

Das HTML enthält ein HTML-[`<style>`](/de/docs/Web/HTML/Element/style)-Element, das Absatz-Elemente blau macht, ein Absatz-Element und einen Button, der verwendet wird, um den Stil zu aktivieren und zu deaktivieren.

```html
<button>Enable</button>
<style id="InlineStyle">
  p {
    color: blue;
  }
</style>
<p>Text is black when style is disabled; blue when enabled.</p>
<p></p>
```

#### JavaScript

Der untenstehende Code erhält das `style`-Element mit seiner ID und setzt es dann auf deaktiviert.
Da der Stil bereits existiert, wie er im SVG definiert ist, sollte dies gelingen.

```js
const style = document.getElementById("InlineStyle");
style.disabled = true;
```

Wir fügen dann einen Event-Handler für den Button hinzu, der den `disabled`-Wert und den Button-Text umschaltet.

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  const buttonText = style.disabled ? "Enable" : "Disable";
  button.innerText = buttonText;
});
```

#### Ergebnis

Das Ergebnis wird unten gezeigt.
Drücken Sie den Button, um den `disabled`-Eigenschaftswert für den Stil des Absatztextes umzuschalten.

{{EmbedLiveSample("Disabling a style defined in the SVG")}}

### Deaktivieren eines programmatisch definierten Stils

Dieses Beispiel ist dem obigen sehr ähnlich, außer dass der Stil programmatisch definiert wird.

#### HTML

Das HTML ist ähnlich wie im vorherigen Fall, aber die Definition enthält keine Standard-Styling.

```html
<button>Enable</button>
<p>Text is black when style is disabled; blue when enabled.</p>
<p></p>
```

#### JavaScript

Zuerst erstellen wir das neue Stil-Element im HTML.
Dies geschieht, indem zuerst ein Stil-Element mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wird, ein Textknoten mit der Stil-Definition erstellt und angefügt wird und dann das Stil-Element an den Dokument-Körper angehängt wird.

```js
// Create the `style` element
const style = document.createElement("style");
const node = document.createTextNode("p { color: blue; }");
style.appendChild(node);
document.body.appendChild(style);
```

Wir können den Stil dann wie unten gezeigt deaktivieren.
Beachten Sie, dass dies der früheste Punkt ist, zu dem das Setzen der Eigenschaft auf `true` erfolgreich sein wird.
Vor diesem Punkt hatte das Dokument keinen zugehörigen Stil, und der Wert war deshalb standardmäßig `false`.

```js
//Disable the style
style.disabled = true;
```

Zuletzt fügen wir einen Event-Handler für den Button hinzu, der den deaktivierten Zustand und den Button-Text umschaltet (dies ist dasselbe wie im vorherigen Beispiel).

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  const buttonText = style.disabled ? "Enable" : "Disable";
  button.innerText = buttonText;
});
```

#### Ergebnis

Das Ergebnis wird unten gezeigt.
Drücken Sie den Button, um den deaktivierten Zustand für den Stil des Textes umzuschalten.

{{EmbedLiveSample("Disabling a programmatically defined style")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGStyleElement.disabled`](/de/docs/Web/API/SVGStyleElement/disabled)
