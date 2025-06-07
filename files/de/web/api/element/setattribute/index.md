---
title: "Element: setAttribute() Methode"
short-title: setAttribute()
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("DOM")}}

Die **`setAttribute()`** Methode des [`Element`](/de/docs/Web/API/Element) Interface setzt den Wert eines Attributs am angegebenen Element. Existiert das Attribut bereits, wird der Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

Um den aktuellen Wert eines Attributs zu erhalten, verwenden Sie [`getAttribute()`](/de/docs/Web/API/Element/getAttribute); um ein Attribut zu entfernen, rufen Sie [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf.

Wenn Sie mit dem [`Attr`](/de/docs/Web/API/Attr) Knoten (wie etwa beim Klonen von einem anderen Element) arbeiten müssen, bevor Sie ihn hinzufügen, können Sie stattdessen die Methode [`setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode) verwenden.

## Syntax

```js-nolint
setAttribute(name, value)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Attributs angibt, dessen Wert gesetzt werden soll. Der Attributname wird automatisch in Kleinbuchstaben umgewandelt, wenn `setAttribute()` auf einem HTML-Element in einem HTML-Dokument aufgerufen wird.
- `value`
  - : Ein String, der den dem Attribut zuzuweisenden Wert enthält. Jeder nicht-string Wert wird automatisch in einen String konvertiert.

Boolesche Attribute gelten als `true`, wenn sie überhaupt auf dem Element vorhanden sind. Sie sollten `value` auf den leeren String (`""`) oder den Namen des Attributs setzen, ohne führende oder nachfolgende Leerzeichen. Siehe das [Beispiel](#beispiele) unten für eine praktische Demonstration.

Da der angegebene `value` in einen String konvertiert wird, führt das Angeben von `null` nicht unbedingt zu dem erwarteten Ergebnis. Anstatt das Attribut zu entfernen oder seinen Wert auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zu setzen, setzt es stattdessen den Wert des Attributs auf den String `"null"`. Wenn Sie ein Attribut entfernen möchten, rufen Sie [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der [`name`](#name) Wert kein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist; zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt oder Zeichen enthält, die keine alphanumerischen Zeichen, Unterstriche, Bindestriche oder Punkte sind.

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

- Der erste Aufruf von `setAttribute()` oben zeigt die Änderung des `name` Attributwerts auf "helloButton". Sie können dies mit dem Seiteninspektor Ihres Browsers überprüfen ([Chrome](https://developer.chrome.com/docs/devtools/dom/properties/), [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/css/inspect), [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html), [Safari](https://support.apple.com/guide/safari-developer/welcome/mac)).
- Um den Wert eines Booleschen Attributs zu setzen, wie zum Beispiel `disabled`, können Sie jeden Wert angeben. Ein leerer String oder der Name des Attributs sind empfohlene Werte. Entscheidend ist lediglich, dass, falls das Attribut überhaupt vorhanden ist, _unabhängig von seinem tatsächlichen Wert_, sein Wert als `true` betrachtet wird. Das Fehlen des Attributs bedeutet, dass sein Wert `false` ist. Indem wir den Wert des `disabled` Attributs auf den leeren String (`""`) setzen, setzen wir `disabled` auf `true`, was dazu führt, dass der Button deaktiviert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
