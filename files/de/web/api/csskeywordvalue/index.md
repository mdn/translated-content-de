---
title: CSSKeywordValue
slug: Web/API/CSSKeywordValue
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSKeywordValue`** Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) repräsentiert den Wert eines CSS-Schlüsselworts oder eines anderen Identifikators.

Der Instanzname des Interfaces ist ein {{Glossary("stringifier", "Stringifier")}}, das heißt, wenn es an einer Stelle verwendet wird, an der ein String erwartet wird, wird der Wert von `CSSKeyword.value` zurückgegeben.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue)
  - : Erstellt ein neues `CSSKeywordValue` Objekt.

## Instanz-Eigenschaften

- [`CSSKeywordValue.value`](/de/docs/Web/API/CSSKeywordValue/value)
  - : Ein String, der den Wert des `CSSKeywordValue` repräsentiert.

## Instanz-Methoden

_Erbt Methoden von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)._

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel setzt die CSS-{{cssxref('display')}}-Eigenschaft auf `initial`, indem `CSSKeywordValue` verwendet wird, um den Wert zu definieren.

#### HTML

Das HTML definiert ein Element, auf dem wir den Wert des `display`-Schlüsselworts setzen, ein {{htmlelement("hr")}}-Element, einen Button, der verwendet wird, um den Wert des `display`-Schlüsselworts zu setzen, und einen "Reset"-Button, um das Beispiel zurückzusetzen.

```html
<div id="myElement">
  Check the developer tools to see the log in the console and to inspect this
  div's style attributes.
</div>
<hr />
<button id="set-initial" type="button">Set initial</button>
<button id="reset" type="button">Reset</button>
```

#### CSS

Das CSS setzt das Element initial auf `flex`, was es zwingt, in voller Breite angezeigt zu werden, und gibt ihm eine solide Umrandung mit Padding und Rändern.

```css
#myElement {
  display: flex;
  border: solid;
  padding: 10px;
  margin: 5px;
}
```

#### JavaScript

Der Code erhält zunächst einen Bezug auf den "Set initial"-Button und fügt einen Listener hinzu, um das Klickereignis zu behandeln, wenn dieser gedrückt wird.

Der Listener holt dann die Inline-Stile des Elements mit {{domxref(Element.attributeStyleMap)}}, und setzt das `display`-Attribut mit einem neu konstruierten `CSSKeywordValue`.
Anschließend wird der Wert dieses Schlüsselworts in die Konsole geloggt.

```js
const setInitialButton = document.querySelector("#set-initial");

setInitialButton.addEventListener("click", () => {
  const myElementInlineStyles =
    document.getElementById("myElement").attributeStyleMap;
  myElementInlineStyles.set("display", new CSSKeywordValue("initial"));
  console.log(`display: ${myElementInlineStyles.get("display").value}`);
});
```

Beachten Sie, dass wir den Wert der Inline-Stile nicht loggen können, bevor der Button gedrückt wird, da keine vorhanden sind.

```js hidden
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  window.location.reload(true);
});
```

#### Ergebnis

Klicken Sie mit der rechten Maustaste auf das Element und öffnen Sie den [Entwickler-Tools-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/select_an_element/index.html), um dessen Stile zu inspizieren.
Sie sollten sehen, dass `display: flex` auf `#myElement` gesetzt ist.
Drücken Sie "Set initial", um den Inline-Stil von `display` auf `"initial"` zu setzen.
Sie sollten sehen, wie sich die Stile im Inspektor ändern, und das Element wird sich auch leicht verkleinern, da das `flex` deaktiviert wird.

{{EmbedLiveSample("Basic usage", 120, 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
