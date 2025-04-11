---
title: "HTMLStyleElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLStyleElement/disabled
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLStyleElement.disabled`**-Eigenschaft kann verwendet werden, um festzustellen oder festzulegen, ob das Stylesheet deaktiviert (`true`) oder aktiviert (`false`) ist.

Beachten Sie, dass es kein entsprechendes `disabled`-Attribut im [HTML `<style>`-Element](/de/docs/Web/HTML/Reference/Elements/style) gibt.

## Wert

Gibt `true` zurück, wenn das Stylesheet deaktiviert oder kein Stylesheet zugeordnet ist; andernfalls `false`. Der Standardwert ist `false` (falls ein Stylesheet zugeordnet ist).

Die Eigenschaft kann verwendet werden, um ein zugeordnetes Stylesheet zu aktivieren oder zu deaktivieren. Die Eigenschaft auf `true` zu setzen, wenn kein zugeordnetes Stylesheet vorhanden ist, hat keine Wirkung.

## Beispiele

### Deaktivieren eines eingebetteten Styles

Dieses Beispiel zeigt, wie die `disabled`-Eigenschaft eines Styles, das im HTML mithilfe des [HTML `<style>`-Elements](/de/docs/Web/HTML/Reference/Elements/style) definiert wurde, programmgesteuert gesetzt wird. Beachten Sie, dass Sie auch auf alle oder bestimmte Stylesheets im Dokument über [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) zugreifen können.

#### HTML

Das HTML enthält ein HTML [`<style>`](/de/docs/Web/HTML/Reference/Elements/style)-Element, das die Absatz-Elemente blau macht, ein Absatz-Element und einen Button, der verwendet wird, um den Style zu aktivieren und zu deaktivieren.

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

Der untenstehende Code holt das `style`-Element anhand seiner ID und setzt es dann als deaktiviert. Da der Style bereits definiert ist, da er im SVG definiert ist, sollte dies erfolgreich sein.

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

#### Resultat

Das Ergebnis wird unten gezeigt. Drücken Sie den Button, um den `disabled`-Eigenschaftswert für den Stil des Absatztexts umzuschalten.

{{EmbedLiveSample("Deaktivieren eines im SVG definierten Stils")}}

### Deaktivieren eines programmgesteuert definierten Styles

Dieses Beispiel ist dem vorherigen sehr ähnlich, außer dass der Style programmgesteuert definiert wird.

#### HTML

Das HTML ist ähnlich wie im vorherigen Fall, aber die Definition enthält keine Standardstilierung.

```html
<button>Enable</button>
<p>Text is black when style is disabled; blue when enabled.</p>
<p></p>
```

#### JavaScript

Zunächst erstellen wir das neue Style-Element im HTML. Dies geschieht, indem wir zunächst ein Style-Element mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellen, einen Textknoten mit der Stildefinition erstellen und anhängen und dann das Style-Element zum Dokumentenkörper hinzufügen.

```js
// Create the `style` element
const style = document.createElement("style");
const node = document.createTextNode("p { color: blue; }");
style.appendChild(node);
document.body.appendChild(style);
```

Wir können dann den Stil wie unten gezeigt deaktivieren. Beachten Sie, dass dies der früheste Zeitpunkt ist, an dem das Setzen der Eigenschaft auf `true` erfolgreich sein wird. Vor diesem Punkt hatte das Dokument keinen zugeordneten Stil, und daher ist der Standardwert `false`.

```js
//Disable the style
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

#### Resultat

Das Ergebnis wird unten angezeigt. Drücken Sie den Button, um den deaktivierten Zustand für den Stil des Textes umzuschalten.

{{EmbedLiveSample("Deaktivieren eines programmgesteuert definierten Stils")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGStyleElement.disabled`](/de/docs/Web/API/SVGStyleElement/disabled)
