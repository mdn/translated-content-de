---
title: "Response: clone()-Methode"
short-title: clone()
slug: Web/API/Response/clone
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Fetch API")}}

Die **`clone()`**-Methode des {{domxref("Response")}}-Interfaces erstellt ein Duplikat eines Response-Objekts, das in jeder Hinsicht identisch ist, jedoch in einer anderen Variablen gespeichert wird.

Wie die zugrunde liegende {{domxref("ReadableStream.tee")}} API,
signalisiert das {{domxref("Response.body", "body")}} einer geklonten `Response`
Rückstau im Tempo des _schnelleren_ Verbrauchers der beiden Bodies,
und ungelesene Daten werden intern in dem langsamer konsumierten `body` ohne Begrenzung oder Rückstau eingereiht.
Rückstau bezieht sich auf den Mechanismus, durch den der Datenverbraucher
(in diesem Fall der Code, der den Body liest)
den Data Producer (wie zum Beispiel den TCP-Server) verlangsamt,
um große Datenmengen im Speicher zu vermeiden,
die darauf warten, von der Anwendung verwendet zu werden.
Wenn nur ein Zweig des geklonten Objekts konsumiert wird, wird der gesamte Body im Speicher gepuffert.
Daher ist `clone()` eine Möglichkeit, eine Antwort zweimal nacheinander zu lesen,
aber Sie sollten es nicht verwenden, um sehr große Bodies
parallel mit unterschiedlichen Geschwindigkeiten zu lesen.

`clone()` wirft einen {{jsxref("TypeError")}}, wenn der Response-Body bereits verwendet wurde.
Tatsächlich besteht der Hauptgrund für die Existenz von `clone()` darin, die mehrfache Verwendung von Body-Objekten zu ermöglichen (wenn diese nur einmal verwendet werden können).

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("Response")}}-Objekt.

## Beispiele

In unserem [Fetch Response clone Beispiel](https://github.com/mdn/dom-examples/blob/main/fetch/fetch-response-clone/index.html) (siehe [Fetch Response clone live](https://mdn.github.io/dom-examples/fetch/fetch-response-clone/)) erstellen wir ein neues {{domxref("Request")}}-Objekt mit dem {{domxref("Request.Request","Request()")}}-Konstruktor, indem wir ihm einen JPG-Pfad übergeben.
Dann führen wir diesen Request mit {{domxref("Window/fetch", "fetch()")}} aus.
Wenn der Fetch erfolgreich aufgelöst wird, klonen wir ihn und extrahieren ein Blob aus beiden Antworten, indem wir zwei {{domxref("Response.blob")}}-Aufrufe verwenden. Wir erstellen Objekt-URLs aus den Blobs mit
{{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}, und zeigen sie in zwei separaten {{htmlelement("img")}}-Elementen an.

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
