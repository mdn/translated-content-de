---
title: "HTMLStyleElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLStyleElement/disabled
l10n:
  sourceCommit: 4ad860d817cf6d8ca24f41b3846b29e158934d27
---

{{APIRef("HTML DOM")}}

Die **`HTMLStyleElement.disabled`**-Eigenschaft kann verwendet werden, um festzustellen, ob das Stylesheet deaktiviert (`true`) oder nicht (`false`) ist und um es entsprechend zu setzen.

Beachten Sie, dass es kein entsprechendes `disabled`-Attribut im [HTML `<style>`-Element](/de/docs/Web/HTML/Reference/Elements/style) gibt.

## Wert

Gibt `true` zurück, wenn das Stylesheet deaktiviert ist oder kein zugehöriges Stylesheet vorhanden ist; ansonsten `false`.
Der Standardwert ist `false` (wenn ein zugehöriges Stylesheet vorhanden ist).

Die Eigenschaft kann verwendet werden, um ein zugehöriges Stylesheet zu aktivieren oder zu deaktivieren.
Das Festlegen der Eigenschaft auf `true`, wenn kein zugehöriges Stylesheet vorhanden ist, hat keinen Effekt.

## Beispiele

### Ein Inline-Style deaktivieren

Dieses Beispiel demonstriert das programmatische Setzen der deaktivierten Eigenschaft auf einen Stil, der im HTML unter Verwendung des [HTML `<style>`-Elements](/de/docs/Web/HTML/Reference/Elements/style) definiert wurde.
Beachten Sie, dass Sie auch auf beliebige oder alle Stylesheets im Dokument über [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) zugreifen können.

#### HTML

Das HTML enthält ein HTML [`<style>`](/de/docs/Web/HTML/Reference/Elements/style)-Element, das Absatz-Elemente blau färbt, ein Absatz-Element und einen Button, der verwendet wird, um den Stil zu aktivieren und zu deaktivieren.

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

Der untenstehende Code holt das `style`-Element anhand seiner ID und setzt es dann als deaktiviert.
Da der Stil bereits existiert, wie er im SVG definiert ist, sollte dies erfolgreich sein.

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

Das Ergebnis wird unten gezeigt. Drücken Sie den Button, um den `disabled`-Eigenschaftswert für den Stil zu toggeln, der für den Absatztext verwendet wird.

{{EmbedLiveSample("Deaktivieren eines im SVG definierten Stils")}}

### Einen programmatisch definierten Stil deaktivieren

Dieses Beispiel ist sehr ähnlich zu dem oben, außer dass der Stil programmatisch definiert wird.

#### HTML

Das HTML ist ähnlich wie im vorherigen Fall, aber die Definition enthält keine Standard-Stile.

```html
<button>Enable</button>
<p>Text is black when style is disabled; blue when enabled.</p>
<p></p>
```

#### JavaScript

Zuerst erstellen wir das neue Style-Element im HTML.
Dies wird erreicht, indem zuerst ein Style-Element mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt, ein Textknoten mit der Stildefinition erstellt und hinzugefügt und dann das Style-Element dem Dokumentenkörper hinzugefügt wird.

```js
// Create the `style` element
const style = document.createElement("style");
const node = document.createTextNode("p { color: blue; }");
style.appendChild(node);
document.body.appendChild(style);
```

Wir können dann den Stil wie unten gezeigt deaktivieren.
Beachten Sie, dass dies der früheste Punkt ist, an dem das Setzen der Eigenschaft auf `true` erfolgreich sein wird.
Vor diesem Punkt hatte das Dokument keinen zugehörigen Stil, und daher ist der Wert standardmäßig `false`.

```js
// Disable the style
style.disabled = true;
```

Zuletzt fügen wir einen Ereignishandler für den Button hinzu, der den deaktivierten Zustand und den Button-Text umschaltet (dies ist dasselbe wie im vorherigen Beispiel).

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  const buttonText = style.disabled ? "Enable" : "Disable";
  button.innerText = buttonText;
});
```

#### Ergebnis

Das Ergebnis wird unten gezeigt. Drücken Sie den Button, um den deaktivierten Zustand des Stils zu toggeln, der für den Text verwendet wird.

{{EmbedLiveSample("Deaktivieren eines programmatisch definierten Stils")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGStyleElement.disabled`](/de/docs/Web/API/SVGStyleElement/disabled)
