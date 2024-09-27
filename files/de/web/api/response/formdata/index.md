---
title: "Response: Methode formData()"
short-title: formData()
slug: Web/API/Response/formData
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

Die **`formData()`** Methode des [`Response`](/de/docs/Web/API/Response)-Interfaces nimmt einen [`Response`](/de/docs/Web/API/Response)-Stream und liest ihn bis zum Ende. Sie gibt ein Versprechen zurück, das mit einem [`FormData`](/de/docs/Web/API/FormData)-Objekt aufgelöst wird.

> [!NOTE]
> Dies ist hauptsächlich relevant für [Service-Worker](/de/docs/Web/API/Service_Worker_API). Wenn ein Benutzer ein Formular absendet und ein Service-Worker die Anfrage abfängt, könnten Sie beispielsweise `formData()` aufrufen, um eine Schlüssel-Wert-Zuordnung zu erhalten, einige Felder zu ändern und dann das Formular an den Server weiterzuleiten (oder es lokal zu verwenden).

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
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Inhalt des Körpers (zum Beispiel, weil der {{httpheader("Content-Encoding")}}-Header nicht korrekt ist).
    - Der [MIME](/de/docs/Glossary/MIME)-Typ des Körpers kann nicht aus den im Antwort enthaltenen {{httpheader("Content-Type")}}-Headern bestimmt werden.
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
