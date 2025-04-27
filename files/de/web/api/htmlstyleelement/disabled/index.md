---
title: "HTMLStyleElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLStyleElement/disabled
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("HTML DOM")}}

Die **`HTMLStyleElement.disabled`**-Eigenschaft kann verwendet werden, um festzulegen oder abzurufen, ob das Stylesheet deaktiviert (`true`) oder nicht (`false`) ist.

Beachten Sie, dass es kein entsprechendes `disabled`-Attribut auf dem [HTML `<style>`-Element](/de/docs/Web/HTML/Reference/Elements/style) gibt.

## Wert

Gibt `true` zurück, wenn das Stylesheet deaktiviert ist oder kein zugeordnetes Stylesheet vorhanden ist; ansonsten `false`.
Der Wert ist standardmäßig `false` (wenn ein zugeordnetes Stylesheet vorhanden ist).

Die Eigenschaft kann verwendet werden, um ein zugeordnetes Stylesheet zu aktivieren oder zu deaktivieren.
Das Setzen der Eigenschaft auf `true`, wenn kein zugeordnetes Stylesheet vorhanden ist, hat keine Wirkung.

## Beispiele

### Deaktivieren eines Inline-Styles

Dieses Beispiel demonstriert das programmgesteuerte Setzen der disabled-Eigenschaft auf einen Stil, der im HTML mithilfe des [HTML `<style>`-Elements](/de/docs/Web/HTML/Reference/Elements/style) definiert wurde.
Beachten Sie, dass Sie auch auf alle Stylesheets im Dokument mittels [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) zugreifen können.

#### HTML

Das HTML enthält ein HTML [`<style>`](/de/docs/Web/HTML/Reference/Elements/style)-Element, das die Absatz-Elemente blau färbt, ein Absatz-Element und einen Button, der verwendet wird, um den Stil zu aktivieren und zu deaktivieren.

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

Der untenstehende Code erhält das `style`-Element über seine ID und setzt es dann als deaktiviert.
Da der Stil bereits existiert, da er im SVG definiert ist, sollte dies gelingen.

```js
const style = document.getElementById("InlineStyle");
style.disabled = true;
```

Wir fügen dann einen Ereignishandler für den Button hinzu, der den `disabled`-Wert und den Button-Text umschaltet.

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  const buttonText = style.disabled ? "Enable" : "Disable";
  button.innerText = buttonText;
});
```

#### Ergebnis

Das Ergebnis wird unten angezeigt.
Drücken Sie den Button, um den `disabled`-Eigenschaftswert des Stils für den Absatztext umzuschalten.

{{EmbedLiveSample("Deaktivierung eines Stils, der im SVG definiert ist")}}

### Deaktivieren eines programmatisch definierten Stils

Dieses Beispiel ist dem obigen sehr ähnlich, mit dem Unterschied, dass der Stil programmatisch definiert wird.

#### HTML

Das HTML ist ähnlich zum vorherigen Fall, aber die Definition enthält kein Standardstyling.

```html
<button>Enable</button>
<p>Text is black when style is disabled; blue when enabled.</p>
<p></p>
```

#### JavaScript

Zuerst erstellen wir das neue Style-Element im HTML.
Dies geschieht, indem zunächst ein Style-Element mithilfe von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wird, ein Textknoten mit der Stildefinition erstellt und angehängt wird, und dann das Style-Element an den Dokumentenkörper angehängt wird.

```js
// Create the `style` element
const style = document.createElement("style");
const node = document.createTextNode("p { color: blue; }");
style.appendChild(node);
document.body.appendChild(style);
```

Wir können den Stil dann wie unten gezeigt deaktivieren.
Beachten Sie, dass dies der früheste Punkt ist, an dem das Setzen der Eigenschaft auf `true` erfolgreich sein wird.
Vor diesem Punkt hatte das Dokument keinen zugeordneten Stil, sodass der Wert standardmäßig `false` ist.

```js
// Disable the style
style.disabled = true;
```

Zum Schluss fügen wir einen Ereignishandler für den Button hinzu, der den deaktivierten Zustand und den Button-Text umschaltet (dies ist derselbe wie im vorherigen Beispiel).

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  const buttonText = style.disabled ? "Enable" : "Disable";
  button.innerText = buttonText;
});
```

#### Ergebnis

Das Ergebnis wird unten angezeigt.
Drücken Sie den Button, um den deaktivierten Zustand des Stils, der für den Text verwendet wird, umzuschalten.

{{EmbedLiveSample("Deaktivierung eines programmatisch definierten Stils")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGStyleElement.disabled`](/de/docs/Web/API/SVGStyleElement/disabled)
