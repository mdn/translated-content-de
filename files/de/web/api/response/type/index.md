---
title: "Response: type-Eigenschaft"
short-title: type
slug: Web/API/Response/type
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

Die schreibgeschützte Eigenschaft **`type`** der {{domxref("Response")}}-Schnittstelle enthält den Typ der Antwort.
Sie kann einen der folgenden Werte annehmen:

- `basic`: Normale Antwort gleicher Herkunft, bei der alle Header außer "Set-Cookie" offengelegt werden.
- `cors`: Die Antwort wurde von einer gültigen, ursprungsübergreifenden Anforderung empfangen. [Bestimmte Header und der Body](https://fetch.spec.whatwg.org/#concept-filtered-response-cors) können zugänglich sein.
- `error`: Netzwerkfehler.
  Es stehen keine nützlichen Informationen zur Beschreibung des Fehlers zur Verfügung.
  Der Status der Antwort ist 0, Header sind leer und unveränderlich.
  Dies ist der Typ für eine Antwort, die von `Response.error()` erhalten wurde.
- `opaque`: Antwort für eine "no-cors"-Anforderung an eine ursprungsübergreifende Ressource.
  [Stark eingeschränkt](https://fetch.spec.whatwg.org/#concept-filtered-response-opaque).
- `opaqueredirect`: Die Fetch-Anforderung wurde mit `redirect: "manual"` ausgeführt.
  Der Status der Antwort ist 0, Header sind leer, der Body ist null und der Trailer ist leer.

> [!NOTE]
> Eine "error"-Antwort wird nie wirklich für ein Skript offengelegt: Eine solche Antwort auf eine {{domxref("Window/fetch", "fetch()")}} würde das Versprechen ablehnen.

## Wert

Ein `ResponseType`-String, der den Typ der Antwort angibt.

## Beispiele

In unserem [Fetch Response Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/)) erstellen wir ein neues {{domxref("Request")}}-Objekt mit dem {{domxref("Request.Request","Request()")}}-Konstruktor, indem wir einen JPG-Pfad übergeben.
Wir holen diese Anfrage dann mit {{domxref("Window/fetch", "fetch()")}}, extrahieren ein Blob aus der Antwort mit {{domxref("Response.blob")}}, erstellen daraus eine Objekt-URL mit {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} und zeigen dies in einem {{htmlelement("img")}} an.

Beachten Sie, dass wir am Anfang des `fetch()`-Blocks den Antwort-`type` in die Konsole protokollieren.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    console.log("response.type =", response.type); // response.type = 'basic'
    return response.blob();
  })
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
