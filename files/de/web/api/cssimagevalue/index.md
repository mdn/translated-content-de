---
title: CSSImageValue
slug: Web/API/CSSImageValue
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSImageValue`** Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) stellt Werte für CSS-Eigenschaften dar, die einen {{cssxref("image")}}-Wert annehmen, wie z.B. {{cssxref("background-image")}}, {{cssxref("list-style-image")}}, oder {{cssxref("border-image-source")}}.

{{InheritanceDiagram}}

## Instanzeigenschaften

Keine.

## Instanzmethoden

_Erbt Methoden von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)._

## Beschreibung

`CSSImageValue` kann jede Art von Wert enthalten, die der {{cssxref("image")}} Datentyp akzeptiert, einschließlich URL-basierter Bilder, die mit {{cssxref("url_function", "url()")}} angegeben werden, {{cssxref("gradient")}}s wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("image/image", "image()")}}, {{cssxref("image/image-set", "image-set()")}}, {{cssxref("cross-fade", "cross-fade()")}}, und {{cssxref("element()")}}.

Für Bildwerte, die eine URL beinhalten, wie `url()` oder `image()`, werden relative und Fragment-URLs auf die gleiche Weise wie in CSS aufgelöst. Das bedeutet, relativ zur URL des Stylesheets oder zur URL des Dokuments für Inline-Stile.

Diese Auflösung erfolgt während der Wertberechnung und nicht zur Parserzeit, was bedeutet, dass der Wert eines `CSSImageValue` davon abhängt, ob Sie mit dem spezifizierten Wert oder dem berechneten Wert arbeiten:

- Ein **spezifizierter** Wert trägt eine ungelöste relative URL. Wenn der ungelöste Wert in ein Element in einem anderen Dokument kopiert wird, wird er gegen die Basis-URL des Zieldokuments aufgelöst und kann auf eine andere Ressource verweisen.
- Ein **berechneter** Wert wurde bereits zu einer absoluten URL aufgelöst, so dass er unabhängig vom späteren Einsatzdokument konsistent verhält.
- Ein **nur Fragment-URL**-Wert wird immer gegen das aktuelle Dokument aufgelöst.

Beachten Sie, dass `CSSImageValue`-Objekte absichtlich undurchsichtig sind: Sie geben keine Informationen über das Bild preis, das sie repräsentieren.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel setzt das `background-image` eines {{htmlelement("button")}} mit `url()`, wobei eine relative URL für die Datei angegeben wird. Wir zeigen dann das Stringformat sowohl der berechneten als auch der spezifizierten Werte.

Beachten Sie, dass es versteckten Logging-Code gibt, der nicht gezeigt wird, da er für das Beispiel nicht relevant ist.

#### HTML

Zuerst definieren wir das Button-Element:

```html
<button>Magic Wand</button>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

Wir fügen etwas CSS hinzu, einschließlich eines Hintergrundbildes, das eine Binärdatei anfordert:

```css
button {
  display: inline-block;
  min-height: 100px;
  min-width: 100px;
  background: no-repeat 5% center url("magic-wand.png") aqua;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Als nächstes holen wir das `<button>` Element, damit wir seine spezifizierten und berechneten Stile abfragen können.

```js
// get the element
const button = document.querySelector("button");
```

Um den berechneten Wert des `background-image` zu erhalten, holen wir zuerst die Stilkarte des Elements. Dann `get()` wir den `background-image` aus der Stilkarte und wandeln ihn in einen String um. Wir drucken auch den Namen des Konstruktors, um zu demonstrieren, dass das zurückgegebene Objekt ein `CSSImageValue` ist.

```js
// Get all computed styles with computedStyleMap()
const allComputedStyles = button.computedStyleMap();
const computedImageCSS = allComputedStyles.get("background-image");
log(computedImageCSS.toString());
log(computedImageCSS.constructor.name); // CSSImageValue
```

Als nächstes holen wir den spezifizierten Wert des `background-image`. Dazu holen wir zuerst die Menge der CSS-Regeln, die dem `css-output` Element zugeordnet sind - hier schreibt MDN CSS für den Spielplatz. Wir filtern dann die Regel, um die CSS-Regel zu finden, die rein auf ihrem Namen "button" basiert (beachten Sie, dass dies in einer realen Anwendung fragiler Code ist). Sobald wir die zugehörige Regel haben, können wir das Bild aus seiner Stilkarte holen und den Wert protokollieren.

```js
// Get the specified value
const sheet = document.getElementById("css-output").sheet;
const rule = [...sheet.cssRules].find((r) => r.selectorText === "button");
const specifiedImageCSS = rule.styleMap.get("background-image");
log(specifiedImageCSS.toString());
log(specifiedImageCSS.constructor.name); // CSSImageValue
```

#### Ergebnis

Die Ergebnisse werden unten angezeigt. Beachten Sie, dass der zuerst angezeigte berechnete Wert eine vollständig aufgelöste URL hat, während der spezifizierte Wert eine relative URL ist.

{{EmbedLiveSample("Examples", 120, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
