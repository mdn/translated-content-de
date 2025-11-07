---
title: "Anfrage: formData()-Methode"
short-title: formData()
slug: Web/API/Request/formData
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`formData()`**-Methode der [`Request`](/de/docs/Web/API/Request)-Schnittstelle
liest den Anfragekörper und gibt ihn als ein Promise zurück, das mit einem [`FormData`](/de/docs/Web/API/FormData)-Objekt aufgelöst wird.

## Syntax

```js-nolint
formData()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`FormData`](/de/docs/Web/API/FormData)-Objekt aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Anfragekörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Körperinhalts (z. B. weil der {{httpheader("Content-Encoding")}}-Header falsch ist).
    - Der {{Glossary("MIME", "MIME")}}-Typ des Körpers kann nicht aus den im Antrag enthaltenen {{httpheader("Content-Type")}}-Headern bestimmt werden oder ist nicht `application/x-www-form-urlencoded` oder `multipart/form-data`.
    - Der Körper kann nicht als `FormData`-Objekt geparst werden.

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
