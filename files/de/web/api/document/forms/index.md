---
title: "Dokument: forms-Eigenschaft"
short-title: forms
slug: Web/API/Document/forms
l10n:
  sourceCommit: 41018309bf920684054c0c2d81d362365b543493
---

{{APIRef("DOM")}}

Die **`forms`** schreibgeschützte Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle im Dokument enthaltenen {{HTMLElement("form")}}-Elemente auflistet.

> [!NOTE]
> Ebenso können Sie eine Liste der Benutzereingabeelemente eines Formulars mit der Eigenschaft [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) abrufen.

Benannte `<form>`-Elemente werden auch als Eigenschaften des `document`-Objekts selbst zugänglich gemacht. Zum Beispiel können sowohl `document["login-form"]` als auch `document.forms["login-form"]` auf das Formular mit dem Namen `login-form` zugreifen. Sich auf dieses Verhalten zu verlassen, ist riskant und wird nicht empfohlen. Es kann zu unerwarteten Konflikten mit einigen bestehenden oder zukünftigen APIs im Browser führen. Wenn beispielsweise Browser eine neue `document`-Eigenschaft mit demselben Namen wie Ihr Formular einführen, kann derselbe Code nicht mehr auf das Formularelement zugreifen. Verwenden Sie stattdessen immer `document.forms`.

## Wert

Ein [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)-Objekt, das alle Formulare des Dokuments auflistet. Jedes Element in der Sammlung ist ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das ein einzelnes `<form>`-Element darstellt.

Wenn das Dokument keine Formulare enthält, ist die zurückgegebene Sammlung leer und hat eine Länge von null.

## Beispiele

### Formularinformationen abrufen

```html
<form id="robby">
  <input type="button" value="robby's form" />
</form>

<form id="dave">
  <input type="button" value="dave's form" />
</form>

<form id="paul">
  <input type="button" value="paul's form" />
</form>
```

```js
document.querySelectorAll("input[type=button]").forEach((button, i) => {
  button.addEventListener("click", (event) => {
    console.log(document.forms[i].id);
  });
});
```

### Ein Element innerhalb eines Formulars abrufen

```js
const selectForm = document.forms[index];
const selectFormElement = document.forms[index].elements[index];
```

### Zugriff auf benannte Formulare

```html
<form name="login">
  <input name="email" type="email" />
  <input name="password" type="password" />
  <button type="submit">Log in</button>
</form>
```

```js
const loginForm = document.forms.login; // Or document.forms['login']
loginForm.elements.email.placeholder = "test@example.com";
loginForm.elements.password.placeholder = "password";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML Forms](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("form")}} und das [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interface
