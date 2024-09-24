---
title: "Response: formData() Methode"
short-title: formData()
slug: Web/API/Response/formData
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

Die **`formData()`** Methode der {{domxref("Response")}} Schnittstelle
nimmt einen {{domxref("Response")}}-Stream und liest ihn bis zum Ende. Sie gibt ein Promise
zurück, das mit einem {{domxref("FormData")}}-Objekt auflöst.

> [!NOTE]
> Dies ist hauptsächlich relevant für [Service Worker](/de/docs/Web/API/Service_Worker_API). Wenn ein Benutzer
> ein Formular absendet und ein Service Worker die Anfrage abfängt, könnten Sie beispielsweise `formData()` aufrufen, um eine Schlüssel-Wert-Karte zu erhalten, einige Felder zu ändern und das Formular dann an den Server weiterzuleiten (oder es lokal zu verwenden).

## Syntax

```js-nolint
formData()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("FormData")}}-Objekt auflöst.

### Ausnahmen

- {{domxref("DOMException")}} `AbortError`
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Response-Body ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Body-Inhalts (zum Beispiel, weil der {{httpheader("Content-Encoding")}}-Header falsch ist).
    - Der {{glossary("MIME")}}-Typ des Bodys kann nicht aus den im Response enthaltenen {{httpheader("Content-Type")}}-Headern bestimmt werden.
    - Der Body kann nicht als `FormData`-Objekt analysiert werden.

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
