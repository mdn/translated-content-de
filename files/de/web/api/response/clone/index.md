---
title: "Response: clone()-Methode"
short-title: clone()
slug: Web/API/Response/clone
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Fetch API")}}

Die **`clone()`**-Methode des [`Response`](/de/docs/Web/API/Response)-Interfaces erstellt eine Kopie eines Response-Objekts, die in jeder Hinsicht identisch ist, jedoch in einer anderen Variablen gespeichert wird.

Ähnlich der zugrunde liegenden [`ReadableStream.tee`](/de/docs/Web/API/ReadableStream/tee) API,
signalisiert der [`body`](/de/docs/Web/API/Response/body) eines geklonten `Response` Rückdruck mit der Geschwindigkeit des _schnelleren_ Verbrauchers der beiden Bodies,
und nicht gelesene Daten werden intern im langsamer konsumierten `body` ohne Begrenzung oder Rückdruck in die Warteschlange gestellt.
Rückdruck bezieht sich auf den Mechanismus, bei dem der Datenstromverbraucher
(in diesem Fall der Code, der den Body liest)
den Datenproduzenten (wie z. B. den TCP-Server) verlangsamt,
um große Datenmengen nicht im Speicher zu halten,
die darauf warten, von der Anwendung genutzt zu werden.
Wenn nur ein geklonter Zweig konsumiert wird, wird der gesamte Body im Speicher gepuffert.
Daher ist `clone()` eine Möglichkeit, eine Antwort zweimal nacheinander zu lesen,
aber Sie sollten es nicht verwenden, um sehr große Bodies
parallel mit unterschiedlichen Geschwindigkeiten zu lesen.

`clone()` wirft einen {{jsxref("TypeError")}}, wenn der Response-Body bereits verwendet wurde.
Tatsächlich existiert `clone()` hauptsächlich, um eine mehrfache Verwendung von Body-Objekten zu ermöglichen (wenn sie nur einmal verwendbar sind).

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Response`](/de/docs/Web/API/Response)-Objekt.

## Beispiele

In unserem [Fetch Response-Klonbeispiel](https://github.com/mdn/dom-examples/blob/main/fetch/fetch-response-clone/index.html) (siehe [Fetch Response-Klon live](https://mdn.github.io/dom-examples/fetch/fetch-response-clone/)) erstellen wir ein neues [`Request`](/de/docs/Web/API/Request)-Objekt mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor, indem wir einen JPG-Pfad übergeben.
Wir holen dann diese Anfrage mit [`fetch()`](/de/docs/Web/API/Window/fetch).
Wenn das Fetch erfolgreich auflöst, klonen wir es, extrahieren ein Blob aus beiden Antworten mit zwei [`Response.blob`](/de/docs/Web/API/Response/blob)-Aufrufen, erstellen Objekt-URLs aus den Blobs mit
[`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), und zeigen sie in zwei getrennten {{htmlelement("img")}}-Elementen an.

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
