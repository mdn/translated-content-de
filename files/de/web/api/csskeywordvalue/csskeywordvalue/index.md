---
title: "CSSKeywordValue: CSSKeywordValue() Konstruktor"
short-title: CSSKeywordValue()
slug: Web/API/CSSKeywordValue/CSSKeywordValue
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSKeywordValue()`** Konstruktor erstellt ein neues [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue) Objekt, das ein CSS-Schlüsselwort oder einen anderen Bezeichner repräsentiert.

## Syntax

```js-nolint
new CSSKeywordValue(value)
```

### Parameter

- `value`
  - : Ein {{jsxref('String')}}, der verwendet wird, um [`CSSKeywordValue.value`](/de/docs/Web/API/CSSKeywordValue/value) festzulegen.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn der `value`-Parameter nicht angegeben oder ein leerer String ist.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel setzt die CSS-Eigenschaft {{cssxref('display')}} auf `initial`, indem ein `CSSKeywordValue` für das Schlüsselwort konstruiert wird.

#### HTML

Das HTML definiert ein Element, für das wir den Wert des `display`-Schlüsselworts setzen, ein {{htmlelement("hr")}}-Element, einen Button, der verwendet wird, um den Wert des `display`-Schlüsselworts zu setzen, und einen „Reset“-Button, um das Beispiel zurückzusetzen.

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

Das CSS setzt das Element zunächst auf `flex`, wodurch es vollbreit angezeigt wird, und verleiht ihm einen soliden Rahmen mit Polsterung und Rändern.

```css
#myElement {
  display: flex;
  border: solid;
  padding: 10px;
  margin: 5px;
}
```

#### JavaScript

Der Code holt zunächst einen Griff auf den „Set initial“-Button und fügt einen Listener hinzu, um das Klickereignis zu bearbeiten, wenn es gedrückt wird.

Der Listener ruft dann die Inline-Stile des Elements mit {{domxref(Element.attributeStyleMap)}} ab und setzt das `display`-Attribut mit einem neu konstruierten `CSSKeywordValue`.
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

Beachten Sie, dass wir den Wert der Inline-Stile nicht vor dem Drücken der Taste protokollieren können, da es keine gibt.

```js hidden
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  window.location.reload(true);
});
```

#### Ergebnis

Klicken Sie mit der rechten Maustaste auf das Element und öffnen Sie den [Developer Tools Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/select_an_element/index.html), um seine Stile zu inspizieren.
Sie sollten sehen, dass `display: flex` auf `#myElement` gesetzt ist.
Drücken Sie „Set initial“, um den Inline-Stil von `display` auf `"initial"` zu setzen.
Sie sollten die Änderungen der Stile im Inspektor sehen, und das Element wird sich auch leicht verkleinern, da das `flex` deaktiviert ist.

{{EmbedLiveSample("Basic usage", 120, 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
