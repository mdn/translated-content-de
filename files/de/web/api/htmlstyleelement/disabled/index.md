---
title: "HTMLStyleElement: Eigenschaft disabled"
short-title: disabled
slug: Web/API/HTMLStyleElement/disabled
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLStyleElement.disabled`**-Eigenschaft kann verwendet werden, um festzustellen, ob das Stylesheet deaktiviert (`true`) oder nicht deaktiviert (`false`) ist.

Beachten Sie, dass es kein entsprechendes `disabled`-Attribut auf dem [HTML-`<style>`-Element](/de/docs/Web/HTML/Element/style) gibt.

## Wert

Gibt `true` zurück, wenn das Stylesheet deaktiviert ist oder kein zugehöriges Stylesheet vorhanden ist; ansonsten `false`. Der Wert ist standardmäßig `false` (wenn ein zugehöriges Stylesheet vorhanden ist).

Die Eigenschaft kann verwendet werden, um ein zugehöriges Stylesheet zu aktivieren oder zu deaktivieren. Das Setzen der Eigenschaft auf `true`, wenn kein zugehöriges Stylesheet vorhanden ist, hat keine Auswirkung.

## Beispiele

### Deaktivieren eines Inline-Styles

Dieses Beispiel demonstriert die programmatische Einstellung der disabled-Eigenschaft auf einem Style, das im HTML mithilfe des [HTML-`<style>`-Elements](/de/docs/Web/HTML/Element/style) definiert wurde. Beachten Sie, dass Sie auch auf alle Stylesheets im Dokument mithilfe von [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) zugreifen können.

#### HTML

Das HTML enthält ein HTML-`<style>`-Element, das die Textfarbe von Absatz-Elementen blau macht, ein Absatz-Element und einen Button, der verwendet wird, um den Style zu aktivieren und zu deaktivieren.

```html
<button>Enable</button>
<style id="InlineStyle">
  p {
    color: blue;
  }
</style>
<p>Text ist schwarz, wenn der Style deaktiviert ist; blau, wenn er aktiviert ist.</p>
<p></p>
```

#### JavaScript

Der untenstehende Code ermittelt das `style`-Element anhand seiner ID und setzt es dann als deaktiviert. Da der Stil bereits existiert, da er im SVG definiert ist, sollte dies erfolgreich sein.

```js
const style = document.getElementById("InlineStyle");
style.disabled = true;
```

Anschließend wird ein Ereignishandler für den Button hinzugefügt, der den `disabled`-Wert und den Button-Text umschaltet.

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  const buttonText = style.disabled ? "Enable" : "Disable";
  button.innerText = buttonText;
});
```

#### Ergebnis

Das Ergebnis wird unten gezeigt. Drücken Sie den Button, um den Wert der `disabled`-Eigenschaft für den auf den Absatztext angewendeten Style umzuschalten.

{{EmbedLiveSample("Disabling a style defined in the SVG")}}

### Deaktivieren eines programmatisch definierten Styles

Dieses Beispiel ist dem vorherigen sehr ähnlich, außer dass der Style programmatisch definiert wird.

#### HTML

Das HTML ähnelt dem vorherigen Fall, aber die Definition enthält keine Standardstile.

```html
<button>Enable</button>
<p>Text ist schwarz, wenn der Style deaktiviert ist; blau, wenn er aktiviert ist.</p>
<p></p>
```

#### JavaScript

Zuerst erstellen wir das neue `style`-Element im HTML. Dies geschieht, indem zuerst ein `style`-Element mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wird, ein Textknoten mit der Style-Definition erstellt und angehängt wird, und dann das `style`-Element dem Dokumentkörper hinzugefügt wird.

```js
// Create the `style` element
const style = document.createElement("style");
const node = document.createTextNode("p { color: blue; }");
style.appendChild(node);
document.body.appendChild(style);
```

Anschließend kann der Style wie unten gezeigt deaktiviert werden. Beachten Sie, dass dies der früheste Punkt ist, an dem das Setzen der Eigenschaft auf `true` erfolgreich sein wird. Vor diesem Punkt hatte das Dokument keinen zugehörigen Stil, daher war der Wert standardmäßig `false`.

```js
//Disable the style
style.disabled = true;
```

Zuletzt fügen wir einen Ereignishandler für den Button hinzu, der den deaktivierten Zustand und den Button-Text umschaltet (dies ist derselbe wie im vorherigen Beispiel).

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  const buttonText = style.disabled ? "Enable" : "Disable";
  button.innerText = buttonText;
});
```

#### Ergebnis

Das Ergebnis wird unten gezeigt. Drücken Sie den Button, um den deaktivierten Zustand des für den Text verwendeten Styles umzustellen.

{{EmbedLiveSample("Disabling a programmatically defined style")}}

## Specifications

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SVGStyleElement.disabled")}}