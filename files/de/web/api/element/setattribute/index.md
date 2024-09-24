---
title: "Element: setAttribute()-Methode"
short-title: setAttribute()
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("DOM")}}

Die **`setAttribute()`** Methode des {{domxref("Element")}}-Interfaces setzt den Wert eines Attributs auf dem angegebenen Element. Wenn das Attribut bereits existiert, wird der Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

Um den aktuellen Wert eines Attributs zu erhalten, verwenden Sie {{domxref("Element.getAttribute", "getAttribute()")}}; um ein Attribut zu entfernen, rufen Sie {{domxref("Element.removeAttribute", "removeAttribute()")}} auf.

Wenn Sie mit dem {{domxref("Attr")}}-Knoten arbeiten müssen (z. B. beim Klonen von einem anderen Element), bevor Sie ihn hinzufügen, können Sie stattdessen die Methode {{domxref("Element.setAttributeNode()", "setAttributeNode()")}} verwenden.

## Syntax

```js-nolint
setAttribute(name, value)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Attributs angibt, dessen Wert gesetzt werden soll. Der Attributname wird automatisch in Kleinbuchstaben umgewandelt, wenn `setAttribute()` auf einem HTML-Element in einem HTML-Dokument aufgerufen wird.
- `value`
  - : Ein String, der den dem Attribut zuzuweisenden Wert enthält. Jeder nicht-string Wert wird automatisch in einen String umgewandelt.

Boolesche Attribute gelten als `true`, wenn sie überhaupt auf dem Element vorhanden sind. Sie sollten `value` auf den leeren String (`""`) oder den Attributnamen ohne führende oder nachfolgende Leerzeichen setzen. Siehe das [Beispiel](#beispiele) unten für eine praktische Demonstration.

Da der angegebene `value` in einen String umgewandelt wird, bewirkt das Angeben von `null` nicht unbedingt das, was Sie erwarten. Anstatt das Attribut zu entfernen oder seinen Wert auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zu setzen, wird der Attributwert auf den String `"null"` gesetzt. Wenn Sie ein Attribut entfernen möchten, rufen Sie {{domxref("Element.removeAttribute", "removeAttribute()")}} auf.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der [`name`](#name)-Wert kein gültiger [XML-Name](https://www.w3.org/TR/REC-xml/#dt-name) ist; z. B. wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt oder Zeichen enthält, die keine alphanumerischen Zeichen, Unterstriche, Bindestriche oder Punkte sind.

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

Dies zeigt zwei Dinge:

- Der erste Aufruf von `setAttribute()` oben zeigt, wie der Wert des `name`-Attributs auf "helloButton" geändert wird. Sie können dies mit dem Seiteninspektor Ihres Browsers sehen ([Chrome](https://developer.chrome.com/docs/devtools/dom/properties/), [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/css/inspect), [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html), [Safari](https://support.apple.com/guide/safari-developer/welcome/mac)).
- Um den Wert eines Booleschen Attributs wie `disabled` zu setzen, können Sie jeden Wert angeben. Ein leerer String oder der Attributname sind empfohlene Werte. Entscheidend ist, dass, wenn das Attribut überhaupt vorhanden ist, _unabhängig von seinem tatsächlichen Wert_, sein Wert als `true` angesehen wird. Das Fehlen des Attributs bedeutet, dass sein Wert `false` ist. Indem wir den Wert des `disabled`-Attributs auf den leeren String (`""`) setzen, setzen wir `disabled` auf `true`, was dazu führt, dass der Button deaktiviert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
