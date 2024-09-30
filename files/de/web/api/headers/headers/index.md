---
title: "Headers: Headers() Konstruktor"
short-title: Headers()
slug: Web/API/Headers/Headers
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Der **`Headers()`** Konstruktor erstellt ein neues
[`Headers`](/de/docs/Web/API/Headers)-Objekt.

## Syntax

```js-nolint
new Headers()
new Headers(init)
```

### Parameter

- `init` {{optional_inline}}
  - : Ein Objekt, das beliebige [HTTP-Header](/de/docs/Web/HTTP/Headers) enthält, mit denen Sie Ihr `Headers`-Objekt vorbelegen möchten. Dies kann ein einfaches Objektliteral mit {{jsxref("String")}}-Werten sein, ein Array von Namens-Wert-Paaren, wobei jedes Paar ein String-Array mit 2 Elementen ist, oder ein bestehendes `Headers`-Objekt. Im letzten Fall kopiert das neue `Headers`-Objekt seine Daten aus dem bestehenden `Headers`-Objekt.

## Beispiele

Ein leeres `Headers`-Objekt zu erstellen ist einfach:

```js
const myHeaders = new Headers(); // Currently empty
```

Sie könnten diesem mit [`Headers.append`](/de/docs/Web/API/Headers/append) einen Header hinzufügen:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Returns 'image/jpeg'
```

Oder Sie können die gewünschten Header hinzufügen, während das `Headers`-Objekt erstellt wird. Im folgenden Snippet erstellen wir ein neues [`Headers`](/de/docs/Web/API/Headers)-Objekt und fügen einige Header hinzu, indem wir dem Konstruktor ein Init-Objekt als Argument übergeben:

```js
const httpHeaders = {
  "Content-Type": "image/jpeg",
  "X-My-Custom-Header": "Zeke are cool",
};
const myHeaders = new Headers(httpHeaders);
```

Sie können jetzt ein weiteres `Headers`-Objekt erstellen, indem Sie ihm das erste `Headers`-Objekt als Init-Objekt übergeben:

```js
const secondHeadersObj = new Headers(myHeaders);
secondHeadersObj.get("Content-Type"); // Would return 'image/jpeg' — it inherits it from the first headers object
```

Sie können die gewünschten Header auch hinzufügen, während das `Headers`-Objekt erstellt wird, indem Sie ein zweidimensionales Array verwenden, um mehrere Header mit denselben Werten hinzuzufügen. Im folgenden Snippet erstellen wir ein neues [`Headers`](/de/docs/Web/API/Headers)-Objekt mit mehreren `Set-Cookie`-Headern, indem wir dem Konstruktor ein Init-Array als Argument übergeben:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
