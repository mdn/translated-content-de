---
title: "Element: setAttribute()-Methode"
short-title: setAttribute()
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("DOM")}}

Die **`setAttribute()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces legt den Wert eines Attributs des angegebenen Elements fest. Wenn das Attribut bereits existiert, wird der Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

Um den aktuellen Wert eines Attributs zu erhalten, verwenden Sie [`getAttribute()`](/de/docs/Web/API/Element/getAttribute); um ein Attribut zu entfernen, rufen Sie [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf.

Wenn Sie mit dem [`Attr`](/de/docs/Web/API/Attr)-Knoten arbeiten müssen (z.B. beim Klonen von einem anderen Element), bevor Sie ihn hinzufügen, können Sie stattdessen die [`setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)-Methode verwenden.

## Syntax

```js-nolint
setAttribute(name, value)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Attributs angibt, dessen Wert gesetzt werden soll. Der Attributname wird automatisch in Kleinbuchstaben umgewandelt, wenn `setAttribute()` auf ein HTML-Element in einem HTML-Dokument aufgerufen wird.
- `value`
  - : Ein String, der den dem Attribut zuzuweisenden Wert enthält. Jeder nicht-String-Wert wird automatisch in einen String konvertiert.

Boolesche Attribute werden als `true` betrachtet, wenn sie überhaupt im Element vorhanden sind. Sie sollten `value` auf den leeren String (`""`) oder den Namen des Attributs setzen, ohne führende oder nachfolgende Leerzeichen. Siehe das [Beispiel](#beispiele) unten für eine praktische Demonstration.

Da der angegebene `value` in einen String konvertiert wird, führt die Angabe von `null` nicht unbedingt zu dem gewünschten Ergebnis. Statt das Attribut zu entfernen oder seinen Wert auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zu setzen, wird der Wert des Attributs stattdessen auf den String `"null"` gesetzt. Wenn Sie ein Attribut entfernen möchten, rufen Sie [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der Wert von [`name`](#name) kein gültiger [XML-Name](https://www.w3.org/TR/REC-xml/#dt-name) ist; zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt oder andere Zeichen als alphanumerische Zeichen, Unterstriche, Bindestriche oder Punkte enthält.

## Beispiele

Im folgenden Beispiel wird `setAttribute()` verwendet, um Attribute auf einem {{HTMLElement("button")}} zu setzen.

### HTML

```html
<button>Hello World</button>
```

```css hidden
button {
  height: 30px;
  width: 100px;
  margin: 1em;
}
```

### JavaScript

```js
const button = document.querySelector("button");

button.setAttribute("name", "helloButton");
button.setAttribute("disabled", "");
```

{{ EmbedLiveSample('Examples', '300', '50') }}

Dies demonstriert zwei Dinge:

- Der erste Aufruf von `setAttribute()` oben zeigt, wie der Wert des `name`-Attributs auf „helloButton“ geändert wird. Sie können dies mit dem Seiteninspektor Ihres Browsers sehen ([Chrome](https://developer.chrome.com/docs/devtools/dom/properties/), [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/css/inspect), [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html), [Safari](https://support.apple.com/guide/safari-developer/welcome/mac)).
- Um den Wert eines booleschen Attributs wie `disabled` festzulegen, können Sie einen beliebigen Wert angeben. Ein leerer String oder der Name des Attributs sind empfohlene Werte. Entscheidend ist nur, ob das Attribut überhaupt vorhanden ist, _unabhängig von seinem tatsächlichen Wert_, sein Wert wird als `true` betrachtet. Das Fehlen des Attributs bedeutet, dass sein Wert `false` ist. Durch Setzen des Wertes des `disabled`-Attributs auf den leeren String (`""`) setzen wir `disabled` auf `true`, was dazu führt, dass der Button deaktiviert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
