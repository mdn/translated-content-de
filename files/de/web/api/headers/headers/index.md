---
title: "Headers: Headers() Konstruktor"
short-title: Headers()
slug: Web/API/Headers/Headers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Der **`Headers()`**-Konstruktor erstellt ein neues
[`Headers`](/de/docs/Web/API/Headers)-Objekt.

## Syntax

```js-nolint
new Headers()
new Headers(init)
```

### Parameter

- `init` {{optional_inline}}
  - : Ein Objekt, das alle [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) enthält, die Sie in Ihrem `Headers`-Objekt vorab einfügen möchten. Dies kann ein einfaches Objekt-Literal mit {{jsxref("String")}}-Werten, ein Array von Name-Wert-Paaren, bei dem jedes Paar ein String-Array mit 2 Elementen ist, oder ein bestehendes `Headers`-Objekt sein. Im letzten Fall kopiert das neue `Headers`-Objekt seine Daten aus dem vorhandenen `Headers`-Objekt.

## Beispiele

Ein leeres `Headers`-Objekt zu erstellen, ist einfach:

```js
const myHeaders = new Headers(); // Currently empty
```

Sie können diesem ein Header hinzufügen, indem Sie [`Headers.append`](/de/docs/Web/API/Headers/append) verwenden:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Returns 'image/jpeg'
```

Oder Sie können die gewünschten Header hinzufügen, während das `Headers`-Objekt erstellt wird. Im folgenden Code-Schnipsel erstellen wir ein neues [`Headers`](/de/docs/Web/API/Headers)-Objekt und fügen einige Header hinzu, indem wir dem Konstruktor ein init-Objekt als Argument übergeben:

```js
const httpHeaders = {
  "Content-Type": "image/jpeg",
  "X-My-Custom-Header": "Zeke are cool",
};
const myHeaders = new Headers(httpHeaders);
```

Sie können nun ein weiteres `Headers`-Objekt erstellen, indem Sie ihm das erste
`Headers`-Objekt als init-Objekt übergeben:

```js
const secondHeadersObj = new Headers(myHeaders);
secondHeadersObj.get("Content-Type"); // Would return 'image/jpeg' — it inherits it from the first headers object
```

Sie können auch die gewünschten Header hinzufügen, während das `Headers`-Objekt erstellt wird, indem Sie ein zweidimensionales Array verwenden, um mehrere Header mit denselben Werten hinzuzufügen. Im folgenden Code-Schnipsel erstellen wir ein neues [`Headers`](/de/docs/Web/API/Headers)-Objekt mit mehreren `Set-Cookie`-Headern, indem wir dem Konstruktor ein init-Array als Argument übergeben:

```js
const headers = [
  ["Set-Cookie", "greeting=hello"],
  ["Set-Cookie", "name=world"],
];
const myHeaders = new Headers(headers);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
