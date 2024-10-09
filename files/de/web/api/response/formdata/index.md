---
title: "Response: formData() Methode"
short-title: formData()
slug: Web/API/Response/formData
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`formData()`**-Methode der [`Response`](/de/docs/Web/API/Response)-Schnittstelle
nimmt einen [`Response`](/de/docs/Web/API/Response)-Stream und liest ihn bis zum Ende. Sie gibt ein Promise zurück,
das mit einem [`FormData`](/de/docs/Web/API/FormData)-Objekt aufgelöst wird.

> [!NOTE]
> Dies ist hauptsächlich für [Service Worker](/de/docs/Web/API/Service_Worker_API) relevant. Wenn ein Benutzer
> ein Formular absendet und ein Service Worker die Anforderung abfängt, könnten Sie z.B. `formData()`
> darauf aufrufen, um eine Schlüssel-Wert-Zuordnung zu erhalten, einige Felder zu ändern und dann
> das Formular an den Server weiterzuleiten (oder es lokal zu verwenden).

## Syntax

```js-nolint
formData()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`FormData`](/de/docs/Web/API/FormData)-Objekt aufgelöst wird.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `AbortError`
  - : Die Anforderung wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Inhalts des Körpers (zum Beispiel, weil der {{httpheader("Content-Encoding")}}-Header falsch ist).
    - Der {{Glossary("MIME", "MIME")}}-Typ des Körpers kann nicht von den im Antwort-Header enthaltenen {{httpheader("Content-Type")}}-Headern bestimmt werden.
    - Der Körper kann nicht als `FormData`-Objekt analysiert werden.

## Beispiele

TBD.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
