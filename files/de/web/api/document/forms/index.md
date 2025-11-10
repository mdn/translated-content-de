---
title: "Dokumentation: forms Eigenschaft"
short-title: forms
slug: Web/API/Document/forms
l10n:
  sourceCommit: b756b8ef42bfd3b9e2f3d46fb44d41e2d3f15e25
---

{{APIRef("DOM")}}

Die **`forms`** schreibgeschützte Eigenschaft des [`Document`](/de/docs/Web/API/Document) Interface gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle im Dokument enthaltenen {{HTMLElement("form")}}-Elemente auflistet.

> [!NOTE]
> Ebenso können Sie auf eine Liste der Benutzereingabe-Elemente einer Formular-Komponente über die [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) Eigenschaft zugreifen.

Sie können auch auf benannte `<form>`-Elemente als Eigenschaften des `document`-Objekts zugreifen.
Zum Beispiel können sowohl `document["login-form"]` als auch `document.forms["login-form"]` verwendet werden, um auf das Formular mit dem Namen `login-form` zuzugreifen.

> [!WARNING]
> Das Verlassen auf das Muster `document["form-name"]` ist gefährlich und wird nicht empfohlen, da es zu unerwarteten Konflikten mit bestehenden oder zukünftigen APIs im Browser führen kann.
> Zum Beispiel, wenn ein Browser in Zukunft eine eingebaute `document["login-form"]`-Eigenschaft einführt, kann Ihr Code möglicherweise nicht mehr auf das Formularelement zugreifen.
> Um solche Konflikte zu vermeiden, verwenden Sie immer `document.forms`, um auf benannte Formulare zuzugreifen.

## Wert

Ein [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) Objekt, das alle Formulare des Dokuments auflistet.
Jedes Element in der Sammlung ist ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das ein einzelnes `<form>`-Element darstellt.

Wenn das Dokument keine Formulare enthält, ist die zurückgegebene Sammlung leer, mit einer Länge von null.

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
- {{HTMLElement("form")}} und das [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) Interface
