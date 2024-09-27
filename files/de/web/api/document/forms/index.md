---
title: "Document: forms Eigenschaft"
short-title: forms
slug: Web/API/Document/forms
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

Die schreibgeschützte **`forms`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle im Dokument enthaltenen {{HTMLElement("form")}}-Elemente auflistet.

> [!NOTE]
> Ähnlich können Sie eine Liste der Benutzereingabekomponenten eines Formulars mit der [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft abrufen.

## Wert

Ein [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)-Objekt, das alle Formulare des Dokuments auflistet. Jedes Element in der Sammlung ist ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das ein einzelnes `<form>`-Element darstellt.

Wenn das Dokument keine Formulare hat, ist die zurückgegebene Sammlung leer und hat eine Länge von null.

## Beispiele

### Formulardaten abrufen

```html
<!doctype html>
<html lang="en">
  <head>
    <title>document.forms example</title>
  </head>

  <body>
    <form id="robby">
      <input
        type="button"
        onclick="alert(document.forms[0].id);"
        value="robby's form" />
    </form>

    <form id="dave">
      <input
        type="button"
        onclick="alert(document.forms[1].id);"
        value="dave's form" />
    </form>

    <form id="paul">
      <input
        type="button"
        onclick="alert(document.forms[2].id);"
        value="paul's form" />
    </form>
  </body>
</html>
```

### Abrufen eines Elements innerhalb eines Formulars

```js
const selectForm = document.forms[index];
const selectFormElement = document.forms[index].elements[index];
```

### Zugriff auf benannte Formulare

```html
<!doctype html>
<html lang="en">
  <head>
    <title>document.forms example</title>
  </head>

  <body>
    <form name="login">
      <input name="email" type="email" />
      <input name="password" type="password" />
      <button type="submit">Log in</button>
    </form>

    <script>
      const loginForm = document.forms.login; // Or document.forms['login']
      loginForm.elements.email.placeholder = "test@example.com";
      loginForm.elements.password.placeholder = "password";
    </script>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare](/de/docs/Learn/Forms)
- {{HTMLElement("form")}} und das [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interface
