---
title: "Document: forms-Eigenschaft"
short-title: forms
slug: Web/API/Document/forms
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

Die **`forms`** schreibgeschützte Eigenschaft des {{domxref("Document")}} Interfaces gibt ein {{domxref("HTMLCollection")}} zurück, das alle im Dokument enthaltenen {{HTMLElement("form")}}-Elemente auflistet.

> [!NOTE]
> In ähnlicher Weise können Sie eine Liste der Benutzereingabeelemente eines Formulars mit der {{domxref("HTMLFormElement.elements")}}-Eigenschaft abrufen.

## Wert

Ein {{domxref("HTMLCollection")}}-Objekt, das alle Formulare des Dokuments auflistet. Jedes Element in der Sammlung ist ein {{domxref("HTMLFormElement")}}, das ein einzelnes `<form>`-Element darstellt.

Wenn das Dokument keine Formulare enthält, ist die zurückgegebene Sammlung leer und hat eine Länge von null.

## Beispiele

### Abrufen von Formularinformationen

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
- {{HTMLElement("form")}} und das {{domxref("HTMLFormElement")}} Interface
