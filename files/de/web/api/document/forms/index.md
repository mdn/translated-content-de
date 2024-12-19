---
title: "Dokument: forms-Eigenschaft"
short-title: forms
slug: Web/API/Document/forms
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("DOM")}}

Die schreibgeschützte **`forms`**-Eigenschaft der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle {{HTMLElement("form")}}-Elemente im Dokument auflistet.

> [!NOTE]
> Sie können auf ähnliche Weise eine Liste der Benutzereingabe-Komponenten eines Formulars über die [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft zugreifen.

## Wert

Ein [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)-Objekt, das alle Formulare des Dokuments auflistet. Jedes Element in der Sammlung ist ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das ein einzelnes `<form>`-Element darstellt.

Falls das Dokument keine Formulare enthält, ist die zurückgegebene Sammlung leer und hat eine Länge von null.

## Beispiele

### Formularinformationen abrufen

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

### Ein Element innerhalb eines Formulars abrufen

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

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("form")}} und die [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle
