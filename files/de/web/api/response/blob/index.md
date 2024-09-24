---
title: "Response: blob()-Methode"
short-title: blob()
slug: Web/API/Response/blob
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

Die **`blob()`**-Methode des {{domxref("Response")}}-Interfaces nimmt einen {{domxref("Response")}}-Stream und liest ihn bis zum Ende. Sie gibt ein Versprechen zurück, das mit einem {{domxref("Blob")}} aufgelöst wird.

## Syntax

```js-nolint
blob()
```

### Parameter

Keine.

> [!NOTE]
> Wenn die {{domxref("Response")}} einen
> {{domxref("Response.type")}} von `"opaque"` hat, wird der resultierende {{domxref("Blob")}}
> eine {{domxref("Blob.size")}} von `0` und einen {{domxref("Blob.type")}} von
> einem leeren String `""` haben, was ihn für Methoden wie
> {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} _nutzlos_ macht.

### Rückgabewert

Ein Versprechen, das mit einem {{domxref("Blob")}} aufgelöst wird.

### Ausnahmen

- {{domxref("DOMException")}} `AbortError`
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Antwortkörper ist [unterbrochen oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler bei der Dekodierung des Inhalts (zum Beispiel wegen eines falschen {{httpheader("Content-Encoding")}} Headers).

## Beispiele

In unserem [fetch request Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (live [fetch request ausführen](https://mdn.github.io/dom-examples/fetch/fetch-request/)), erstellen wir eine neue Anfrage mit dem {{domxref("Request.Request","Request()")}}-Konstruktor und verwenden diese, um ein JPG abzurufen. Wenn der Abruf erfolgreich ist, lesen wir ein {{domxref("Blob")}} aus der Antwort mithilfe von `blob()`, stellen es in eine Objekt-URL mit {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}, und setzen diese URL dann als Quelle eines {{htmlelement("img")}}-Elements, um das Bild anzuzeigen.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => response.blob())
  .then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
