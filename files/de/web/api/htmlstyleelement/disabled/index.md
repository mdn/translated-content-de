---
title: "HTMLStyleElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLStyleElement/disabled
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("HTML DOM")}}

Mit der Eigenschaft **`HTMLStyleElement.disabled`** können Sie abfragen und festlegen, ob das Stylesheet deaktiviert ist (`true`) oder nicht (`false`).

Beachten Sie, dass das [HTML-Element `<style>`](/de/docs/Web/HTML/Reference/Elements/style) kein entsprechendes `disabled`-Attribut hat.

## Wert

Gibt `true` zurück, wenn das Stylesheet deaktiviert ist oder kein zugehöriges Stylesheet vorhanden ist; andernfalls `false`.
Der Wert ist standardmäßig `false`, sofern ein zugehöriges Stylesheet vorhanden ist.

Mit der Eigenschaft können Sie ein zugehöriges Stylesheet aktivieren oder deaktivieren.
Wenn Sie die Eigenschaft auf `true` setzen, obwohl kein zugehöriges Stylesheet vorhanden ist, hat dies keine Auswirkung.

## Beispiele

### Einen Inline-Style deaktivieren

Dieses Beispiel zeigt, wie Sie die Eigenschaft `disabled` für einen Style setzen, der im HTML mit dem [HTML-Element `<style>`](/de/docs/Web/HTML/Reference/Elements/style) definiert wurde.
Sie können auch über [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) auf alle Stylesheets im Dokument zugreifen.

#### HTML

Das HTML enthält ein HTML-Element [`<style>`](/de/docs/Web/HTML/Reference/Elements/style), das Absatzelemente blau färbt, sowie ein Absatzelement und eine Schaltfläche, mit der der Style aktiviert und deaktiviert wird.

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

Der folgende Code ruft das `style`-Element anhand seiner ID ab und setzt seine Eigenschaft `disabled` auf `true`.
Da der Style bereits im SVG definiert ist, sollte dies funktionieren.

```js
const style = document.getElementById("InlineStyle");
style.disabled = true;
```

Anschließend fügen wir einen Event-Handler für die Schaltfläche hinzu, der den Wert von `disabled` und den Text der Schaltfläche umschaltet.

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  const buttonText = style.disabled ? "Enable" : "Disable";
  button.innerText = buttonText;
});
```

#### Ergebnis

Das Ergebnis ist unten zu sehen.
Drücken Sie die Schaltfläche, um den Wert der Eigenschaft `disabled` für den Style des Absatztexts umzuschalten.

{{EmbedLiveSample("disabling_an_inline_style")}}

### Einen programmatisch definierten Style deaktivieren

Dieses Beispiel ähnelt dem vorherigen, allerdings wird der Style hier programmatisch definiert.

#### HTML

Das HTML ähnelt dem des vorherigen Beispiels, enthält aber keine vordefinierten Styles.

```html
<button>Enable</button>
<p>Text is black when style is disabled; blue when enabled.</p>
<p></p>
```

#### JavaScript

Zuerst erstellen wir das neue Style-Element im HTML.
Dazu erstellen wir mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) ein Style-Element, erstellen einen Textknoten mit der Style-Definition und hängen ihn an das Style-Element an. Anschließend hängen wir das Style-Element an den Dokumentkörper an.

```js
// Create the `style` element
const style = document.createElement("style");
const node = document.createTextNode("p { color: blue; }");
style.appendChild(node);
document.body.appendChild(style);
```

Danach können wir den Style wie unten gezeigt deaktivieren.
Beachten Sie, dass das Setzen der Eigenschaft auf `true` erst ab diesem Zeitpunkt wirksam ist.
Vorher war dem Dokument kein Style zugeordnet, sodass der Wert standardmäßig `false` war.

```js
// Disable the style
style.disabled = true;
```

Zum Schluss fügen wir einen Event-Handler für die Schaltfläche hinzu, der den Deaktivierungszustand und den Text der Schaltfläche umschaltet (wie im vorherigen Beispiel).

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  const buttonText = style.disabled ? "Enable" : "Disable";
  button.innerText = buttonText;
});
```

#### Ergebnis

Das Ergebnis ist unten zu sehen.
Drücken Sie die Schaltfläche, um den Deaktivierungszustand des Styles für den Text umzuschalten.

{{EmbedLiveSample("Disabling a programmatically defined style")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGStyleElement.disabled`](/de/docs/Web/API/SVGStyleElement/disabled)
