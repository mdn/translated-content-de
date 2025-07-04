---
title: "Element: setAttribute()-Methode"
short-title: setAttribute()
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("DOM")}}

Die **`setAttribute()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces setzt den Wert eines Attributs auf dem angegebenen Element. Wenn das Attribut bereits existiert, wird der Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

Um den aktuellen Wert eines Attributs zu erhalten, verwenden Sie [`getAttribute()`](/de/docs/Web/API/Element/getAttribute); um ein Attribut zu entfernen, rufen Sie [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf.

Wenn Sie mit dem [`Attr`](/de/docs/Web/API/Attr)-Knoten arbeiten müssen (wie zum Beispiel das Klonen von einem anderen Element), bevor Sie ihn hinzufügen, können Sie stattdessen die [`setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)-Methode verwenden.

## Syntax

```js-nolint
setAttribute(name, value)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Attributs angibt, dessen Wert festgelegt werden soll. Der Attributname wird automatisch in Kleinbuchstaben umgewandelt, wenn `setAttribute()` auf einem HTML-Element in einem HTML-Dokument aufgerufen wird.
- `value`
  - : Ein String, der den Wert enthält, der dem Attribut zugewiesen wird. Jeder nicht-string Wert, der angegeben wird, wird automatisch in einen String umgewandelt.

Boolesche Attribute gelten als `true`, wenn sie überhaupt am Element vorhanden sind. Sie sollten `value` auf den leeren String (`""`) oder den Attributnamen setzen, ohne führende oder nachfolgende Leerzeichen. Sehen Sie sich das [Beispiel](#beispiele) unten für eine praktische Demonstration an.

Da der angegebene `value` in einen String umgewandelt wird, wird `null` nicht unbedingt das tun, was Sie erwarten. Anstatt das Attribut zu entfernen oder seinen Wert auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zu setzen, wird der Attributwert auf den String `"null"` gesetzt. Wenn Sie ein Attribut entfernen möchten, rufen Sie [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`name`](#name)-Wert kein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist; beispielsweise, wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt oder Zeichen enthält, die keine alphanumerischen Zeichen, Unterstriche, Bindestriche oder Punkte sind.

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

- Der erste Aufruf von `setAttribute()` oben zeigt, wie der Wert des `name`-Attributs auf "helloButton" geändert wird.
  Dies können Sie im Seiteninspektor Ihres Browsers sehen ([Chrome](https://developer.chrome.com/docs/devtools/dom/properties/), [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools/css/inspect),
  [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html), [Safari](https://support.apple.com/guide/safari-developer/welcome/mac)).
- Um den Wert eines Booleschen Attributs, wie `disabled`, festzulegen, können Sie jeden Wert angeben.
  Ein leerer String oder der Name des Attributs sind empfohlene Werte.
  Entscheidend ist, dass wenn das Attribut überhaupt vorhanden ist - unabhängig von seinem tatsächlichen Wert - sein Wert als `true` gilt.
  Die Abwesenheit des Attributs bedeutet, dass sein Wert `false` ist. Indem wir den Wert des `disabled`-Attributs auf den leeren String (`""`) setzen, setzen wir `disabled` auf `true`, was dazu führt, dass der Button deaktiviert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
