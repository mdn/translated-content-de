---
title: "HTMLFieldSetElement: elements-Eigenschaft"
short-title: elements
slug: Web/API/HTMLFieldSetElement/elements
l10n:
  sourceCommit: 457e4946f5a5d15f08fc265bcf95f31609e4b22b
---

{{APIRef("HTML DOM")}}

Die **`elements`** schreibgeschützte Eigenschaft der [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)-Schnittstelle gibt ein [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)-Objekt zurück, das alle Formularsteuerelemente ({{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("object")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}) enthält, die Nachkommen dieses Feldsets sind.

Sie können auf ein bestimmtes Formularsteuerelement in der zurückgegebenen Sammlung zugreifen, indem Sie entweder einen Index oder die `name`- oder `id`-Attribute des Elements verwenden. Wenn mehrere Formularsteuerelemente denselben Namen teilen, wie es häufig bei einer Gruppe von Optionsfeldern der Fall ist, gibt die Verwendung des geteilten Namens das erste Element mit diesem Wert zurück.

## Wert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection).

## Beispiele

```html
<form id="my-form">
  <fieldset id="my-fieldset">
    <legend>My fieldset</legend>
    <p>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" />
    </p>
    <p>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" />
    </p>
    <p>
      <input type="checkbox" id="remember-me" name="remember-me" />
      <label for="remember-me">Remember me</label>
    </p>
  </fieldset>
</form>
```

```js
const fieldset = document.getElementById("my-fieldset");
console.log(fieldset.elements.length); // 3
console.log(fieldset.elements["remember-me"].value); // "on"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)
- [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)
- {{HTMLElement("fieldset")}}
