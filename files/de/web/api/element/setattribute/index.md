---
title: "Element: setAttribute() Method"
short-title: setAttribute()
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

{{APIRef("DOM")}}

Die **`setAttribute()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces setzt den Wert eines Attributs auf dem angegebenen Element. Wenn das Attribut bereits existiert, wird der Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

Um den aktuellen Wert eines Attributs zu erhalten, verwenden Sie [`getAttribute()`](/de/docs/Web/API/Element/getAttribute); um ein Attribut zu entfernen, rufen Sie [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf.

Falls Sie mit dem [`Attr`](/de/docs/Web/API/Attr)-Knoten arbeiten müssen (z.B. beim Klonen von einem anderen Element), bevor Sie ihn hinzufügen, können Sie stattdessen die Methode [`setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode) verwenden.

## Syntax

```js-nolint
setAttribute(name, value)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Attributs spezifiziert, dessen Wert gesetzt werden soll. Der Attributname wird automatisch in Kleinbuchstaben konvertiert, wenn `setAttribute()` auf ein HTML-Element in einem HTML-Dokument angewendet wird.
- `value`
  - : Ein String, der den dem Attribut zuzuweisenden Wert enthält. Jeder nicht-String-Wert wird automatisch in einen String umgewandelt.

Boolesche Attribute werden als `true` betrachtet, wenn sie überhaupt auf dem Element vorhanden sind. Sie sollten `value` auf den leeren String (`""`) oder den Attributnamen setzen, ohne führende oder nachfolgende Leerzeichen. Siehe das [Beispiel](#beispiele) unten für eine praktische Demonstration.

Da der angegebene `value` in einen String umgewandelt wird, bewirkt das Angeben von `null` nicht notwendigerweise das, was Sie erwarten. Statt das Attribut zu entfernen oder dessen Wert auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zu setzen, wird stattdessen der Wert des Attributs auf den String `"null"` gesetzt. Wenn Sie ein Attribut entfernen möchten, rufen Sie [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`name`](#name)-Wert kein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist; zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt oder Zeichen enthält, die nicht alphanumerisch sind oder keine Unterstriche, Bindestriche oder Punkte darstellen.

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

- Der erste Aufruf von `setAttribute()` oben zeigt, wie der `name`-Attributwert auf "helloButton" geändert wird. Sie können dies mit dem Seiteninspektor Ihres Browsers sehen ([Chrome](https://developer.chrome.com/docs/devtools/dom/properties/), [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide/css/inspect), [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html), [Safari](https://support.apple.com/guide/safari-developer/welcome/mac)).
- Um den Wert eines Booleschen Attributs wie `disabled` zu setzen, können Sie jeden Wert angeben. Ein leerer String oder der Attributname sind empfohlene Werte. Es zählt nur, dass falls das Attribut überhaupt vorhanden ist, _unabhängig von seinem tatsächlichen Wert_, dessen Wert als `true` betrachtet wird. Das Fehlen des Attributs bedeutet, dass sein Wert `false` ist. Indem wir den Wert des `disabled`-Attributs auf den leeren String (`""`) setzen, setzen wir `disabled` auf `true`, was dazu führt, dass der Button deaktiviert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
