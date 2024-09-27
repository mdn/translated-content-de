---
title: "HTMLStyleElement: disabled Eigenschaft"
short-title: disabled
slug: Web/API/HTMLStyleElement/disabled
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLStyleElement.disabled`**-Eigenschaft kann verwendet werden, um festzustellen oder festzulegen, ob das Stylesheet deaktiviert (`true`) oder nicht deaktiviert (`false`) ist.

Beachten Sie, dass es kein entsprechendes `disabled`-Attribut auf dem [HTML-`<style>`-Element](/de/docs/Web/HTML/Element/style) gibt.

## Wert

Gibt `true` zurück, wenn das Stylesheet deaktiviert ist oder kein zugehöriges Stylesheet vorhanden ist; andernfalls `false`.
Der Standardwert ist `false` (wenn ein zugehöriges Stylesheet vorhanden ist).

Die Eigenschaft kann verwendet werden, um ein zugehöriges Stylesheet zu aktivieren oder zu deaktivieren.
Das Setzen der Eigenschaft auf `true`, wenn kein zugehöriges Stylesheet vorhanden ist, hat keine Wirkung.

## Beispiele

### Deaktivieren eines Inline-Styles

Dieses Beispiel zeigt, wie man programmgesteuert die deaktivierte Eigenschaft auf einem Style setzt, der im HTML mit dem [HTML-`<style>`-Element](/de/docs/Web/HTML/Element/style) definiert wurde.
Beachten Sie, dass Sie auch auf alle Stylesheets im Dokument über [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) zugreifen können.

#### HTML

Das HTML enthält ein HTML-`<style>`-Element, das die Absatzelemente blau färbt, ein Absatzelement und eine Schaltfläche, die verwendet werden soll, um den Stil zu aktivieren und zu deaktivieren.

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

Der folgende Code erhält das `style`-Element über seine ID und setzt es dann als deaktiviert.
Da der Style bereits existiert, da er im SVG definiert ist, sollte dies erfolgreich sein.

```js
const style = document.getElementById("InlineStyle");
style.disabled = true;
```

Wir fügen dann einen Ereignishandler für die Schaltfläche hinzu, der den `disabled`-Wert und den Schaltflächentext umschaltet.

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
Drücken Sie die Schaltfläche, um den Wert der `disabled`-Eigenschaft des für den Absatztext verwendeten Stils umzuschalten.

{{EmbedLiveSample("Disabling a style defined in the SVG")}}

### Deaktivieren eines programmgesteuert definierten Styles

Dieses Beispiel ist dem vorherigen sehr ähnlich, außer dass der Style programmgesteuert definiert wird.

#### HTML

Das HTML ähnelt dem vorherigen Fall, aber die Definition beinhaltet kein Standard-Styling.

```html
<button>Enable</button>
<p>Text is black when style is disabled; blue when enabled.</p>
<p></p>
```

#### JavaScript

Zuerst erstellen wir das neue Style-Element im HTML.
Dies geschieht, indem ein Style-Element mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt, ein Textknoten mit der Stildefinition erstellt und angehängt und das Style-Element dann dem Dokumentenkörper hinzugefügt wird.

```js
// Create the `style` element
const style = document.createElement("style");
const node = document.createTextNode("p { color: blue; }");
style.appendChild(node);
document.body.appendChild(style);
```

Wir können den Style dann wie unten gezeigt deaktivieren.
Beachten Sie, dass dies der früheste Punkt ist, an dem das Setzen der Eigenschaft auf `true` erfolgreich sein wird.
Vor diesem Punkt hatte das Dokument kein zugehöriges Style, und daher ist der Standardwert `false`.

```js
//Disable the style
style.disabled = true;
```

Zuletzt fügen wir einen Ereignishandler für die Schaltfläche hinzu, der den deaktivierten Status und den Schaltflächentext umschaltet (dies ist derselbe wie im vorherigen Beispiel).

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
Drücken Sie die Schaltfläche, um den deaktivierten Status des für den Text verwendeten Stils umzuschalten.

{{EmbedLiveSample("Disabling a programmatically defined style")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGStyleElement.disabled`](/de/docs/Web/API/SVGStyleElement/disabled)
