---
title: "Antwort: formData() Methode"
short-title: formData()
slug: Web/API/Response/formData
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`formData()`**-Methode des [`Response`](/de/docs/Web/API/Response)-Interfaces
nimmt einen [`Response`](/de/docs/Web/API/Response)-Stream und liest ihn vollständig aus. Sie gibt ein Promise
zurück, das mit einem [`FormData`](/de/docs/Web/API/FormData)-Objekt aufgelöst wird.

> [!NOTE]
> Dies ist hauptsächlich relevant für [Service Workers](/de/docs/Web/API/Service_Worker_API). Wenn ein Benutzer
> ein Formular absendet und ein Service Worker die Anfrage abfängt, könnten Sie zum Beispiel
> `formData()` darauf aufrufen, um eine Schlüssel-Wert-Zuordnung zu erhalten, einige Felder zu ändern und dann
> das Formular weiter an den Server zu senden (oder es lokal zu verwenden).

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
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Ausgelöst aus einem der folgenden Gründe:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Körperinhalts (zum Beispiel, weil der {{httpheader("Content-Encoding")}}-Header falsch ist).
    - Der {{Glossary("MIME", "MIME")}}-Typ des Körpers kann nicht aus den in der Antwort enthaltenen {{httpheader("Content-Type")}}-Headern bestimmt werden.
    - Der Körper kann nicht als `FormData`-Objekt geparst werden.

## Beispiele

Noch festzulegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
