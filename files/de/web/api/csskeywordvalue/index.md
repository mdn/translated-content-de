---
title: CSSKeywordValue
slug: Web/API/CSSKeywordValue
l10n:
  sourceCommit: c18df1fc9001b563c8f14bd8b0988fc3a3bf79e5
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`CSSKeywordValue`** Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) repräsentiert den Wert eines CSS-Schlüsselworts oder eines anderen Identifikators.

Der Instanzname der Schnittstelle ist ein {{Glossary("stringifier", "stringifier")}}, sodass, wenn er überall verwendet wird, wo ein String erwartet wird, der Wert von `CSSKeyword.value` zurückgegeben wird.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue)
  - : Erstellt ein neues `CSSKeywordValue` Objekt.

## Instanz-Eigenschaften

- [`CSSKeywordValue.value`](/de/docs/Web/API/CSSKeywordValue/value)
  - : Ein String, der den Wert des `CSSKeywordValue` repräsentiert.

## Instanz-Methoden

_Erbt auch Methoden von seiner übergeordneten Schnittstelle, [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)._

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel setzt die CSS-Eigenschaft {{cssxref('display')}} auf `initial`, wobei `CSSKeywordValue` zur Definition des Wertes verwendet wird.

#### HTML

Das HTML definiert ein Element, bei dem wir den Wert des `display` Schlüsselworts setzen werden, ein {{htmlelement("hr")}}-Element, einen Button, der verwendet wird, um den Wert des `display` Schlüsselworts zu setzen, und einen "Zurücksetzen" Button, um das Beispiel zurückzusetzen.

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

Das CSS setzt das Element anfänglich auf `flex`, was es zwingt, in voller Breite angezeigt zu werden, und gibt ihm einen soliden Rahmen mit Padding und Rändern.

```css
#myElement {
  display: flex;
  border: solid;
  padding: 10px;
  margin: 5px;
}
```

#### JavaScript

Der Code holt sich zuerst einen Zugriff auf den "Set initial" Button und fügt einen Listener hinzu, um das Klickereignis zu verarbeiten, wenn es gedrückt wird.

Der Listener erhält dann die Inline-Stile des Elements mittels [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap), und setzt das `display` Attribut mit einem neu konstruierten `CSSKeywordValue`.
Danach wird der Wert dieses Schlüsselworts in der Konsole protokolliert.

```js
const setInitialButton = document.querySelector("#set-initial");

setInitialButton.addEventListener("click", () => {
  const myElementInlineStyles =
    document.getElementById("myElement").attributeStyleMap;
  myElementInlineStyles.set("display", new CSSKeywordValue("initial"));
  console.log(`display: ${myElementInlineStyles.get("display").value}`);
});
```

Beachten Sie, dass wir den Wert der Inline-Stile nicht vor dem Drücken des Buttons protokollieren können, da keine vorhanden sind.

```js hidden
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  window.location.reload(true);
});
```

#### Ergebnis

Klicken Sie mit der rechten Maustaste auf das Element und öffnen Sie den [Entwicklerwerkzeuge-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/select_an_element/index.html), um seine Stile zu inspizieren.
Sie sollten sehen, dass `display: flex` auf `#myElement` gesetzt ist.
Drücken Sie "Set initial", um den Inline-Stil von `display` auf `"initial"` zu setzen.
Sie sollten sehen, wie sich die Stile im Inspektor ändern, und das Element wird sich auch leicht verkleinern, da `flex` deaktiviert ist.

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
