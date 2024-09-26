---
title: "Request: formData() Methode"
short-title: formData()
slug: Web/API/Request/formData
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die **`formData()`** Methode des {{domxref("Request")}}-Interfaces liest den Anfrage-Body und gibt ihn als ein Versprechen zurück, das mit einem {{domxref("FormData")}}-Objekt aufgelöst wird.

## Syntax

```js-nolint
formData()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("FormData")}}-Objekt aufgelöst wird.

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

- {{domxref("Response.formData()")}}