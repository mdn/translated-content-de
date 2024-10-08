---
title: "URL: searchParams-Eigenschaft"
short-title: searchParams
slug: Web/API/URL/searchParams
l10n:
  sourceCommit: b4470d47bc8e7527b0bc584a96391962cf74140f
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`searchParams`** schreibgeschützte Eigenschaft des
[`URL`](/de/docs/Web/API/URL)-Interfaces gibt ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt zurück, das
Zugriff auf die im URL enthaltenen {{httpmethod("GET")}}-dekodierten Abfrageargumente ermöglicht.

## Wert

Ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt.

## Beispiele

```js
const params = new URL("https://example.com/?name=Jonathan%20Smith&age=18")
  .searchParams;
const name = params.get("name");
const age = parseInt(params.get("age"));

console.log(`name: ${name}`); // name: Jonathan Smith
console.log(`age: ${age}`); // age: 18
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
