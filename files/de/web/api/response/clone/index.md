---
title: "Response: clone() Methode"
short-title: clone()
slug: Web/API/Response/clone
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`clone()`** Methode des [`Response`](/de/docs/Web/API/Response)-Interfaces erstellt eine Kopie eines Response-Objekts, die in jeder Hinsicht identisch ist, aber in einer anderen Variable gespeichert wird.

Ähnlich wie die zugrunde liegende [`ReadableStream.tee`](/de/docs/Web/API/ReadableStream/tee) API signalisiert der [`body`](/de/docs/Web/API/Response/body) eines geklonten `Response` den Rückstaudruck mit der Geschwindigkeit des _schnelleren_ Verbrauchers der beiden `body`'s, und ungelesene Daten werden intern im langsamer verbrauchten `body` zwischengespeichert, ohne Begrenzung oder Rückstaudruck. Rückstaudruck bezieht sich auf den Mechanismus, durch den der streamende Verbraucher von Daten (in diesem Fall der Code, der den Body liest) den Produzenten von Daten (wie z. B. den TCP-Server) verlangsamt, um keine großen Datenmengen im Speicher zu haben, die darauf warten, von der Anwendung genutzt zu werden. Wenn nur ein geklonter Zweig konsumiert wird, wird der gesamte Body im Speicher gepuffert. Daher ist `clone()` eine Möglichkeit, eine Antwort zweimal nacheinander zu lesen, aber Sie sollten es nicht verwenden, um sehr große Bodies parallel mit unterschiedlichen Geschwindigkeiten zu lesen.

`clone()` wirft einen {{jsxref("TypeError")}}, wenn der Response-Body bereits verwendet wurde. Tatsächlich ist der Hauptgrund, warum `clone()` existiert, die mehrfache Nutzung von Body-Objekten zu ermöglichen (wenn sie nur einmal verwendet werden können).

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Response`](/de/docs/Web/API/Response)-Objekt.

## Beispiele

In unserem [Fetch Response clone Beispiel](https://github.com/mdn/dom-examples/blob/main/fetch/fetch-response-clone/index.html) (siehe [Fetch Response clone live](https://mdn.github.io/dom-examples/fetch/fetch-response-clone/)) erstellen wir ein neues [`Request`](/de/docs/Web/API/Request)-Objekt mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor, indem wir ihm einen JPG-Pfad übergeben. Wir rufen dann diese Anfrage mit [`fetch()`](/de/docs/Web/API/Window/fetch) ab. Wenn der Abruf erfolgreich aufgelöst wird, klonen wir ihn, extrahieren ein Blob aus beiden Responses mit zwei [`Response.blob`](/de/docs/Web/API/Response/blob)-Aufrufen, erstellen Objekt-URLs aus den Blobs mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), und zeigen sie in zwei separaten {{htmlelement("img")}}-Elementen an.

```js
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

const myRequest = new Request("flowers.jpg");

fetch(myRequest).then((response) => {
  const response2 = response.clone();

  response.blob().then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    image1.src = objectURL;
  });

  response2.blob().then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    image2.src = objectURL;
  });
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
