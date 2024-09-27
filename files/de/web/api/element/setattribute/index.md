---
title: "Element: setAttribute() Methode"
short-title: setAttribute()
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("DOM")}}

Die **`setAttribute()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle setzt den Wert eines Attributs auf dem angegebenen Element. Wenn das Attribut bereits existiert, wird der Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

Um den aktuellen Wert eines Attributs zu erhalten, verwenden Sie [`getAttribute()`](/de/docs/Web/API/Element/getAttribute); um ein Attribut zu entfernen, rufen Sie [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf.

Wenn Sie mit dem [`Attr`](/de/docs/Web/API/Attr)-Knoten arbeiten müssen (z.B. beim Klonen von einem anderen Element), bevor Sie ihn hinzufügen, können Sie stattdessen die [`setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)-Methode verwenden.

## Syntax

```js-nolint
setAttribute(name, value)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Attributs angibt, dessen Wert gesetzt werden soll. Der Attributname wird automatisch in Kleinbuchstaben umgewandelt, wenn `setAttribute()` auf einem HTML-Element in einem HTML-Dokument aufgerufen wird.
- `value`
  - : Ein String, der den zuzuweisenden Wert für das Attribut enthält. Jeder nicht-String-Wert, der angegeben wird, wird automatisch in einen String umgewandelt.

Boolean-Attribute werden als `true` betrachtet, wenn sie überhaupt auf dem Element vorhanden sind. Sie sollten `value` auf einen leeren String (`""`) oder den Attributnamen ohne führende oder nachfolgende Leerzeichen setzen. Siehe das [Beispiel](#beispiele) unten für eine praktische Demonstration.

Da der angegebene `value` in einen String umgewandelt wird, führt die Angabe von `null` nicht unbedingt zu dem erwarteten Ergebnis. Statt das Attribut zu entfernen oder seinen Wert als [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zu setzen, wird der Attributwert auf den String `"null"` gesetzt. Wenn Sie ein Attribut entfernen möchten, rufen Sie [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`name`](#name)-Wert kein gültiger [XML-Name](https://www.w3.org/TR/REC-xml/#dt-name) ist; zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt oder andere Zeichen als alphanumerische Zeichen, Unterstriche, Bindestriche oder Punkte enthält.

## Beispiele

Im folgenden Beispiel wird `setAttribute()` verwendet, um Attribute auf einem {{HTMLElement("button")}} festzulegen.

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

- Der erste Aufruf von `setAttribute()` oben zeigt das Ändern des Wertes des `name`-Attributs auf "helloButton". Sie können dies mit dem Seiteninspektor Ihres Browsers sehen ([Chrome](https://developer.chrome.com/docs/devtools/dom/properties/), [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/css/inspect),
  [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html), [Safari](https://support.apple.com/guide/safari-developer/welcome/mac)).
- Um den Wert eines Boolean-Attributs wie `disabled` zu setzen, können Sie jeden Wert angeben. Ein leerer String oder der Name des Attributs sind empfohlene Werte. Entscheidend ist nur, dass, wenn das Attribut überhaupt vorhanden ist, _unabhängig von seinem tatsächlichen Wert_, sein Wert als `true` betrachtet wird. Das Fehlen des Attributs bedeutet, dass sein Wert `false` ist. Durch das Setzen des Wertes des `disabled`-Attributs auf einen leeren String (`""`) setzen wir `disabled` auf `true`, wodurch der Button deaktiviert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
