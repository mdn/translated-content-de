---
title: "CSSKeywordValue: CSSKeywordValue() Konstruktor"
short-title: CSSKeywordValue()
slug: Web/API/CSSKeywordValue/CSSKeywordValue
l10n:
  sourceCommit: c18df1fc9001b563c8f14bd8b0988fc3a3bf79e5
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSKeywordValue()`** Konstruktor erstellt ein neues [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)-Objekt, das ein CSS-Schlüsselwort oder einen anderen Bezeichner darstellt.

## Syntax

```js-nolint
new CSSKeywordValue(value)
```

### Parameter

- `value`
  - : Ein {{jsxref('String')}}, der verwendet wird, um [`CSSKeywordValue.value`](/de/docs/Web/API/CSSKeywordValue/value) festzulegen.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `value`-Parameter nicht angegeben ist oder wenn er ein leerer String ist.

## Beispiele

### Grundlegende Nutzung

In diesem Beispiel wird die CSS-Eigenschaft {{cssxref('display')}} auf `initial` gesetzt, wobei ein `CSSKeywordValue` für das Schlüsselwort erstellt wird.

#### HTML

Das HTML definiert ein Element, bei dem wir den Wert des `display`-Schlüsselworts setzen, ein {{htmlelement("hr")}}-Element, einen Button, der verwendet wird, um den Wert des `display`-Schlüsselworts zu setzen, und einen "Zurücksetzen"-Button, um das Beispiel zurückzusetzen.

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

Das CSS setzt das Element initial auf `flex`, wodurch es voll breit angezeigt wird, und gibt ihm einen festen Rahmen mit Polsterung und Rändern.

```css
#myElement {
  display: flex;
  border: solid;
  padding: 10px;
  margin: 5px;
}
```

#### JavaScript

Der Code erhält zuerst eine Referenz auf den "Set initial"-Button und fügt einen Listener hinzu, um das Klickereignis zu behandeln, wenn er gedrückt wird.

Der Listener ruft dann die Inline-Stile des Elements mit [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap) ab und setzt das `display`-Attribut mit einem neu erstellten `CSSKeywordValue`.
Es wird dann der Wert dieses Schlüsselworts in der Konsole protokolliert.

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

Klicken Sie mit der rechten Maustaste auf das Element und öffnen Sie den [Entwickler-Tools-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/select_an_element/index.html), um die Stile zu inspizieren.
Sie sollten sehen, dass `display: flex` auf `#myElement` gesetzt ist.
Drücken Sie "Set initial", um den Inline-Stil von `display` auf `"initial"` zu setzen.
Sie sollten sehen, dass sich die Stile im Inspektor ändern, und das Element wird sich auch leicht verkleinern, da das `flex` deaktiviert ist.

{{EmbedLiveSample("Basic usage", 120, 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
