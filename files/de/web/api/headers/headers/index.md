---
title: "Headers: Headers() Konstruktor"
short-title: Headers()
slug: Web/API/Headers/Headers
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Der **`Headers()`** Konstruktor erstellt ein neues
{{domxref("Headers")}}-Objekt.

## Syntax

```js-nolint
new Headers()
new Headers(init)
```

### Parameter

- `init` {{optional_inline}}
  - : Ein Objekt, das alle [HTTP-Header](/de/docs/Web/HTTP/Headers) enthält,
    mit denen Sie Ihr `Headers`-Objekt vorab füllen möchten. Dies kann ein
    einfaches Objektliterall mit {{jsxref("String")}}-Werten sein, ein Array von Namens-Wert-Paaren, wobei jedes Paar ein 2-elementiges Zeichenfolgen-Array ist; oder ein bestehendes
    `Headers`-Objekt. Im letzten Fall kopiert das neue `Headers`-Objekt
    seine Daten aus dem bestehenden `Headers`-Objekt.

## Beispiele

Das Erstellen eines leeren `Headers`-Objekts ist einfach:

```js
const myHeaders = new Headers(); // Derzeit leer
```

Sie könnten diesem mit {{domxref("Headers.append")}} einen Header hinzufügen:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Gibt 'image/jpeg' zurück
```

Oder Sie können die gewünschten Header hinzufügen, während das `Headers`-Objekt erstellt wird. Im
folgenden Codeabschnitt erstellen wir ein neues {{domxref("Headers")}}-Objekt, das einige Header hinzufügt,
indem wir dem Konstruktor ein init-Objekt als Argument übergeben:

```js
const httpHeaders = {
  "Content-Type": "image/jpeg",
  "X-My-Custom-Header": "Zeke are cool",
};
const myHeaders = new Headers(httpHeaders);
```

Sie können nun ein weiteres `Headers`-Objekt erstellen, dem Sie das erste
`Headers`-Objekt als init-Objekt übergeben:

```js
const secondHeadersObj = new Headers(myHeaders);
secondHeadersObj.get("Content-Type"); // Würde 'image/jpeg' zurückgeben — es erbt es vom ersten Headers-Objekt
```

Sie können die gewünschten Header auch hinzufügen, indem Sie ein zweidimensionales Array verwenden, um mehrere Header mit denselben Werten hinzuzufügen, während das `Headers`-Objekt erstellt wird. Im
folgenden Codeabschnitt erstellen wir ein neues {{domxref("Headers")}}-Objekt mit mehreren `Set-Cookie`-Headern,
indem wir dem Konstruktor ein init-Array als Argument übergeben:

```js
const headers = [
  ["Set-Cookie", "greeting=hello"],
  ["Set-Cookie", "name=world"],
];
const myHeaders = new Headers(headers);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffsteuerung (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
