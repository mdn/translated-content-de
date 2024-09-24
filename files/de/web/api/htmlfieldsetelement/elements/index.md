---
title: "HTMLFieldSetElement: elements-Eigenschaft"
short-title: elements
slug: Web/API/HTMLFieldSetElement/elements
l10n:
  sourceCommit: 457e4946f5a5d15f08fc265bcf95f31609e4b22b
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`elements`**-Eigenschaft der {{domxref("HTMLFieldSetElement")}}-Schnittstelle gibt ein {{domxref("HTMLCollection")}}-Objekt zurück, das alle Formularsteuerelemente ({{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("object")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}) enthält, die Nachfahren dieses Fieldsets sind.

Sie können auf ein bestimmtes Formularsteuerelement in der zurückgegebenen Sammlung entweder über einen Index oder die `name` oder `id` Attribute des Elements zugreifen. Wenn mehrere Formularsteuerelemente denselben Namen haben, wie es bei einer Gruppe von Radiobuttons üblich ist, wird bei Verwendung des gemeinsamen Namens das erste Element mit diesem Wert zurückgegeben.

## Wert

Eine {{domxref("HTMLCollection")}}.

## Beispiele

```html
<form id="my-form">
  <fieldset id="my-fieldset">
    <legend>Mein Fieldset</legend>
    <p>
      <label for="username">Benutzername:</label>
      <input type="text" id="username" name="username" />
    </p>
    <p>
      <label for="password">Passwort:</label>
      <input type="password" id="password" name="password" />
    </p>
    <p>
      <input type="checkbox" id="remember-me" name="remember-me" />
      <label for="remember-me">Angemeldet bleiben</label>
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

- {{domxref("HTMLFieldSetElement")}}
- {{domxref("HTMLFormElement.elements")}}
- {{HTMLElement("fieldset")}}
