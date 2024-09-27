---
title: "Request: formData()-Methode"
short-title: formData()
slug: Web/API/Request/formData
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die **`formData()`**-Methode des [`Request`](/de/docs/Web/API/Request)-Interfaces liest den Anfragetext und gibt ihn als ein Versprechen zurück, das sich mit einem [`FormData`](/de/docs/Web/API/FormData)-Objekt auflöst.

## Syntax

```js-nolint
formData()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einem [`FormData`](/de/docs/Web/API/FormData)-Objekt auflöst.

## Beispiele

```js
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append("username", "abc123");
formData.append("avatar", fileField.files[0]);

const request = new Request("/myEndpoint", {
  method: "POST",
  body: formData,
});

request.formData().then((data) => {
  // do something with the formdata sent in the request
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Response.formData()`](/de/docs/Web/API/Response/formData)
