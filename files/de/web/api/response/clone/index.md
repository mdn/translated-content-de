---
title: "Response: clone()-Methode"
short-title: clone()
slug: Web/API/Response/clone
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`clone()`**-Methode der [`Response`](/de/docs/Web/API/Response)-Schnittstelle erstellt einen Klon eines Response-Objekts, der in jeder Hinsicht identisch ist, aber in einer anderen Variablen gespeichert wird.

Wie die zugrunde liegende [`ReadableStream.tee`](/de/docs/Web/API/ReadableStream/tee)-API,
wird der [`body`](/de/docs/Web/API/Response/body) eines geklonten `Response`-Objekts
Durchsatzkontrolle im Tempo des _schnelleren_ Verbrauchers der beiden Bodies signalisieren,
und ungelesene Daten werden intern in der langsamer konsumierten `body`-Anforderung ohne Limit oder Durchsatzkontrolle gespeichert.
Durchsatzkontrolle bezieht sich auf den Mechanismus, bei dem der Streaming-Konsument von Daten
(in diesem Fall der Code, der den Body liest)
den Produzenten von Daten verlangsamt (wie z. B. den TCP-Server),
um nicht große Datenmengen im Speicher zu laden,
die darauf warten, von der Anwendung verwendet zu werden.
Wenn nur ein geklonter Zweig konsumiert wird, wird der gesamte Body im Speicher gepuffert.
Daher ist `clone()` eine Möglichkeit, eine Antwort zweimal nacheinander zu lesen,
aber Sie sollten es nicht verwenden, um sehr große Bodies parallel mit unterschiedlichen Geschwindigkeiten zu lesen.

`clone()` wirft einen {{jsxref("TypeError")}}, wenn der Response-Body bereits genutzt wurde.
Tatsächlich existiert `clone()` hauptsächlich, um die mehrfache Verwendung von Body-Objekten zu ermöglichen (wenn diese nur einmal verwendet werden können).

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Response`](/de/docs/Web/API/Response)-Objekt.

## Beispiele

In unserem [Beispiel zu Fetch Response Clone](https://github.com/mdn/dom-examples/blob/main/fetch/fetch-response-clone/index.html) (siehe [Fetch Response Clone live](https://mdn.github.io/dom-examples/fetch/fetch-response-clone/)) erstellen wir ein neues [`Request`](/de/docs/Web/API/Request)-Objekt unter Verwendung des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors und übergeben einen JPG-Pfad.
Wir holen dann diese Anfrage mittels [`fetch()`](/de/docs/Web/API/Window/fetch) ab.
Wenn das Fetch erfolgreich ist, klonen wir es, extrahieren einen Blob aus beiden Antworten durch zwei Aufrufe von [`Response.blob`](/de/docs/Web/API/Response/blob), erstellen Objekt-URLs aus den Blobs mithilfe von
[`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und stellen sie in zwei separaten {{htmlelement("img")}}-Elementen dar.

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
