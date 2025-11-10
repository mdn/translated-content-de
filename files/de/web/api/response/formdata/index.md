---
title: "Response: formData() Methode"
short-title: formData()
slug: Web/API/Response/formData
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`formData()`** Methode des [`Response`](/de/docs/Web/API/Response) Interfaces
nimmt einen [`Response`](/de/docs/Web/API/Response) Stream und liest ihn vollständig aus. Sie gibt ein Promise zurück,
das mit einem [`FormData`](/de/docs/Web/API/FormData) Objekt aufgelöst wird.

> [!NOTE]
> Dies ist hauptsächlich relevant für [Service Worker](/de/docs/Web/API/Service_Worker_API). Wenn ein Benutzer
> ein Formular absendet und ein Service Worker die Anfrage abfängt, könnten Sie beispielsweise
> `formData()` darauf aufrufen, um eine Schlüssel-Wert-Karte zu erhalten, einige Felder zu ändern und dann
> das Formular weiter an den Server zu senden (oder es lokal zu verwenden).

## Syntax

```js-nolint
formData()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`FormData`](/de/docs/Web/API/FormData) Objekt aufgelöst wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler bei der Dekodierung des Inhalts des Antwortkörpers (beispielsweise weil der {{httpheader("Content-Encoding")}} Header falsch ist).
    - Der {{Glossary("MIME", "MIME")}} Typ des Körpers kann nicht aus den im Antwortkopf enthaltenen {{httpheader("Content-Type")}} Headern bestimmt werden oder ist nicht `application/x-www-form-urlencoded` oder `multipart/form-data`.
    - Der Körper kann nicht als `FormData` Objekt analysiert werden.

## Beispiele

Wird noch festgelegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
