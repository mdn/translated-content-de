---
title: "Response: type-Eigenschaft"
short-title: type
slug: Web/API/Response/type
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`type`**-Eigenschaft des [`Response`](/de/docs/Web/API/Response)-Interfaces enthält den Typ der Antwort.
Sie kann einer der folgenden sein:

- `basic`: Normale, gleiche Herkunftsantwort, bei der alle Header mit Ausnahme von "Set-Cookie" offengelegt sind.
- `cors`: Die Antwort wurde von einer gültigen Cross-Origin-Anfrage empfangen. [Bestimmte Header und der Körper](https://fetch.spec.whatwg.org/#concept-filtered-response-cors) können abgerufen werden.
- `error`: Netzwerkfehler.
  Es sind keine nützlichen Informationen zur Beschreibung des Fehlers verfügbar.
  Der Status der Antwort ist 0, die Header sind leer und unveränderlich.
  Dies ist der Typ für eine Antwort, die von `Response.error()` erhalten wurde.
- `opaque`: Antwort für eine "no-cors"-Anfrage an eine Cross-Origin-Ressource.
  [Stark eingeschränkt](https://fetch.spec.whatwg.org/#concept-filtered-response-opaque).
- `opaqueredirect`: Die Fetch-Anfrage wurde mit `redirect: "manual"` gestellt.
  Der Status der Antwort ist 0, die Header sind leer, der Körper ist null und der Trailer ist leer.

> [!NOTE]
> Eine "error"-Antwort wird einem Skript nie wirklich offengelegt: Eine solche Antwort auf einen [`fetch()`](/de/docs/Web/API/Window/fetch) würde das Versprechen zurückweisen.

## Wert

Ein `ResponseType`-String, der den Typ der Antwort angibt.

## Beispiele

In unserem [Beispiel zur Fetch-Antwort](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/)) erstellen wir ein neues [`Request`](/de/docs/Web/API/Request)-Objekt mithilfe des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors, dem wir einen JPG-Pfad übergeben.
Wir rufen dann diese Anfrage mit [`fetch()`](/de/docs/Web/API/Window/fetch) ab, extrahieren einen Blob aus der Antwort mit [`Response.blob`](/de/docs/Web/API/Response/blob), erstellen daraus eine Objekt-URL mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und zeigen das in einem {{htmlelement("img")}} an.

Beachten Sie, dass wir zu Beginn des `fetch()`-Blocks den Antwort-`type` in der Konsole protokollieren.

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
