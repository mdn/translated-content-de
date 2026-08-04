---
title: CSSImageValue
slug: Web/API/CSSImageValue
l10n:
  sourceCommit: dd7010ad7ca5647b43f68b66578835b974bf4e70
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`CSSImageValue`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) repräsentiert Werte für CSS-Eigenschaften, die einen {{cssxref("image")}} Wert annehmen, wie zum Beispiel {{cssxref("background-image")}}, {{cssxref("list-style-image")}} oder {{cssxref("border-image-source")}}.

{{InheritanceDiagram}}

## Instanzeigenschaften

Keine.

## Instanzmethoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)._

## Beschreibung

`CSSImageValue` kann jede Art von Wert enthalten, die der {{cssxref("image")}} Datentyp akzeptiert, einschließlich URL-basierter Bilder, die mit {{cssxref("url_function", "url()")}} spezifiziert sind, {{cssxref("gradient")}}s wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("image/image", "image()")}}, {{cssxref("image/image-set", "image-set()")}}, {{cssxref("cross-fade", "cross-fade()")}} und {{cssxref("element()")}}.

Für Bildwerte, die eine URL beinhalten, wie `url()` oder `image()`, werden relative und Fragment-URLs auf die gleiche Weise aufgelöst wie in CSS. Das heißt, relativ zur URL des Stylesheets oder zur URL des Dokuments bei inline Stilen.

Diese Auflösung erfolgt während der Werteberechnung und nicht zur Parserzeit, was bedeutet, dass der Wert eines `CSSImageValue` davon abhängt, ob Sie mit dem spezifizierten Wert oder dem berechneten Wert arbeiten:

- Ein **spezifizierter** Wert hat eine nicht aufgelöste relative URL. Wenn der nicht aufgelöste Wert auf ein Element in einem anderen Dokument kopiert wird, wird er relativ zur Basis-URL des Ziel-Dokuments aufgelöst und kann auf eine andere Ressource verweisen.
- Ein **berechneter** Wert wurde bereits zu einer absoluten URL aufgelöst, so dass er konsistent verhält, egal in welches Dokument er später angewendet wird.
- Ein **nur-aus-Fragment** bestehender URL-Wert wird immer relativ zum aktuellen Dokument aufgelöst.

Beachten Sie, dass `CSSImageValue`-Objekte absichtlich undurchsichtig sind: Sie geben keine Informationen über das Bild preis, das sie repräsentieren.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel wird das `background-image` eines {{htmlelement("button")}} mit `url()` gesetzt und eine relative URL für die Datei angegeben. Wir zeigen dann, wie man den stringifizierten berechneten und spezifizierten Wert erhält.

Beachten Sie, dass es versteckten Code für Protokollierung gibt, der nicht angezeigt wird, da er für das Beispiel nicht relevant ist.

#### HTML

Zuerst definieren wir das Button-Element:

```html
<button>Magic Wand</button>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

Wir fügen etwas CSS hinzu, einschließlich eines Hintergrundbilds, das eine Binärdatei anfordert:

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

Als nächstes holen wir das `<button>`-Element, damit wir seine spezifizierten und berechneten Stile abfragen können.

```js
// get the element
const button = document.querySelector("button");
```

Um den berechneten Wert des `background-image` zu bekommen, holen wir zuerst die Style-Map des Elements. Dann `get()` wir das `background-image` aus der Style-Map und stringifizieren es. Wir geben auch den Namen des Konstruktors aus, um zu demonstrieren, dass das zurückgegebene Objekt ein `CSSImageValue` ist.

```js
// Get all computed styles with computedStyleMap()
const allComputedStyles = button.computedStyleMap();
const computedImageCSS = allComputedStyles.get("background-image");
log(computedImageCSS.toString());
log(computedImageCSS.constructor.name); // CSSImageValue
```

Als nächstes holen wir den spezifizierten Wert des `background-image`. Dazu holen wir zuerst die Menge der CSS-Regeln, die mit dem `css-output` Element assoziiert sind – hier schreibt MDN CSS für den Playground. Wir filtern dann die Regel, um die CSS-Regel rein nach ihrem Namen "button" zu finden (beachten Sie, dass dies in einer realen Anwendung fragiler Code ist). Sobald wir die assoziierte Regel haben, können wir das Bild aus seiner Style-Map bekommen und den Wert protokollieren.

```js
// Get the specified value
const sheet = document.getElementById("css-output").sheet;
const rule = [...sheet.cssRules].find((r) => r.selectorText === "button");
const specifiedImageCSS = rule.styleMap.get("background-image");
log(specifiedImageCSS.toString());
log(specifiedImageCSS.constructor.name); // CSSImageValue
```

#### Ergebnis

Die Ergebnisse werden unten gezeigt. Beachten Sie, dass der zuerst angezeigte berechnete Wert eine vollständig aufgelöste URL hat, während der spezifizierte Wert eine relative URL ist.

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
