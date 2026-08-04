---
title: CSSKeywordValue
slug: Web/API/CSSKeywordValue
l10n:
  sourceCommit: dd7010ad7ca5647b43f68b66578835b974bf4e70
---

{{APIRef("CSS Typed Objektmodell API")}} {{AvailableInWorkers}}

Das **`CSSKeywordValue`**-Interface der [CSS Typed Objektmodell API](/de/docs/Web/API/CSS_Typed_OM_API) repräsentiert den Wert eines CSS-Schlüsselworts oder eines anderen Bezeichners.

Der Instanzname des Interfaces ist ein {{Glossary("stringifier", "stringifier")}}, daher wird es, wenn es an einer Stelle verwendet wird, an der ein String erwartet wird, den Wert von `CSSKeyword.value` zurückgeben.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue)
  - : Erstellt ein neues `CSSKeywordValue`-Objekt.

## Instanz-Eigenschaften

- [`CSSKeywordValue.value`](/de/docs/Web/API/CSSKeywordValue/value)
  - : Ein String, der den Wert des `CSSKeywordValue` repräsentiert.

## Instanz-Methoden

_Erbt auch Methoden von seinem Eltern-Interface [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)._

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel setzt die CSS-Eigenschaft {{cssxref('display')}} auf `initial`, wobei `CSSKeywordValue` verwendet wird, um den Wert zu definieren.

#### HTML

Das HTML definiert ein Element, bei dem wir den Wert des `display`-Schlüsselworts setzen werden, ein {{htmlelement("hr")}}-Element, ein Button, der verwendet wird, um den Wert des `display`-Schlüsselworts zu setzen, und einen "Reset"-Button, um das Beispiel zurückzusetzen.

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

Das CSS setzt das Element zunächst auf `flex`, wodurch es in voller Breite angezeigt wird, und gibt ihm einen soliden Rahmen mit Polsterung und Rändern.

```css
#myElement {
  display: flex;
  border: solid;
  padding: 10px;
  margin: 5px;
}
```

#### JavaScript

Der Code holt zunächst einen Verweis auf den Button "Set initial" und fügt einen Listener hinzu, um das Klick-Event zu behandeln, wenn es gedrückt wird.

Der Listener erhält dann die Inline-Stile des Elements mithilfe von {{domxref(Element.attributeStyleMap)}}, und setzt das `display`-Attribut mit einem neu konstruierten `CSSKeywordValue`.
Anschließend wird der Wert dieses Schlüsselworts in der Konsole protokolliert.

```js
const setInitialButton = document.querySelector("#set-initial");

setInitialButton.addEventListener("click", () => {
  const myElementInlineStyles =
    document.getElementById("myElement").attributeStyleMap;
  myElementInlineStyles.set("display", new CSSKeywordValue("initial"));
  console.log(`display: ${myElementInlineStyles.get("display").value}`);
});
```

Beachten Sie, dass wir den Wert der Inline-Stile nicht protokollieren können, bevor der Button gedrückt wird, da keine vorhanden sind.

```js hidden
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  window.location.reload(true);
});
```

#### Ergebnis

Klicken Sie mit der rechten Maustaste auf das Element und öffnen Sie den [Entwicklertools-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/select_an_element/index.html), um seine Stile zu inspizieren.
Sie sollten sehen, dass `display: flex` auf `#myElement` gesetzt ist.
Drücken Sie "Set initial", um den Inline-Stil von `display` auf `"initial"` zu setzen.
Sie sollten sehen, dass sich die Stile im Inspektor ändern, und das Element wird auch leicht schrumpfen, da das `flex` deaktiviert ist.

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
