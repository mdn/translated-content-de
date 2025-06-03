---
title: "Dokument: forms-Eigenschaft"
short-title: forms
slug: Web/API/Document/forms
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

Die **`forms`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces ist schreibgeschützt und gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle im Dokument enthaltenen {{HTMLElement("form")}}-Elemente auflistet.

> [!NOTE]
> In ähnlicher Weise können Sie eine Liste der Benutzereingabekomponenten eines Formulars mit der [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft aufrufen.

## Wert

Ein [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)-Objekt, das alle Formulare des Dokuments auflistet. Jedes Element in der Sammlung ist ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das ein einzelnes `<form>`-Element darstellt.

Wenn das Dokument keine Formulare enthält, ist die zurückgegebene Sammlung leer und hat eine Länge von null.

## Beispiele

### Abrufen von Formularinformationen

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

### Abrufen eines Elements innerhalb eines Formulars

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

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("form")}} und das [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interface
