---
title: "Request: formData()-Methode"
short-title: formData()
slug: Web/API/Request/formData
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`formData()`**-Methode der [`Request`](/de/docs/Web/API/Request)-Schnittstelle liest den Anfragekörper und gibt diesen als Promise zurück, der mit einem [`FormData`](/de/docs/Web/API/FormData)-Objekt aufgelöst wird.

## Syntax

```js-nolint
formData()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem [`FormData`](/de/docs/Web/API/FormData)-Objekt aufgelöst wird.

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
