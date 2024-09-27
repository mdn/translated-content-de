---
title: "Response: type-Eigenschaft"
short-title: type
slug: Web/API/Response/type
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

Die **`type`** schreibgeschützte Eigenschaft des [`Response`](/de/docs/Web/API/Response)-Interfaces enthält den Typ der Antwort.
Es kann einer der folgenden sein:

- `basic`: Normale, gleiche Herkunftsantwort, mit allen Headern außer "Set-Cookie" freigelegt.
- `cors`: Die Antwort wurde von einer gültigen Cross-Origin-Anfrage empfangen. [Bestimmte Header und der Hauptteil](https://fetch.spec.whatwg.org/#concept-filtered-response-cors) können abgerufen werden.
- `error`: Netzwerkfehler.
  Keine nützlichen Informationen zur Beschreibung des Fehlers sind verfügbar.
  Der Status der Antwort ist 0, Header sind leer und unveränderlich.
  Dies ist der Typ für eine Antwort, die aus `Response.error()` erhalten wurde.
- `opaque`: Antwort für eine "no-cors"-Anfrage an eine Cross-Origin-Ressource.
  [Stark eingeschränkt](https://fetch.spec.whatwg.org/#concept-filtered-response-opaque).
- `opaqueredirect`: Die Fetch-Anfrage wurde mit `redirect: "manual"` durchgeführt.
  Der Status der Antwort ist 0, Header sind leer, der Körper ist null, und der Trailer ist leer.

> [!NOTE]
> Eine "error"-Antwort wird nie wirklich einem Skript ausgesetzt: Eine solche Antwort auf eine [`fetch()`](/de/docs/Web/API/Window/fetch) würde das Versprechen ablehnen.

## Wert

Ein `ResponseType`-String, der den Typ der Antwort angibt.

## Beispiele

In unserem [Fetch Response-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/)) erstellen wir ein neues [`Request`](/de/docs/Web/API/Request)-Objekt mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor und übergeben einen JPG-Pfad.
Wir rufen dann diese Anfrage mit [`fetch()`](/de/docs/Web/API/Window/fetch) ab, extrahieren ein Blob aus der Antwort mit [`Response.blob`](/de/docs/Web/API/Response/blob), erstellen eine Objekt-URL daraus mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), und zeigen dies in einem {{htmlelement("img")}} an.

Beachten Sie, dass wir oben im `fetch()`-Block den Antwort-`type` in die Konsole protokollieren.

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
