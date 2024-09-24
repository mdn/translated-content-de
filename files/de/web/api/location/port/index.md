---
title: "Location: port Eigenschaft"
short-title: port
slug: Web/API/Location/port
l10n:
  sourceCommit: 354f23773b65bad14192eca53e4a63471061b158
---

{{ApiRef("Location")}}

Die **`port`**-Eigenschaft des [`Location`](/de/docs/Web/API/Location)-Interfaces ist ein String, der die Portnummer der URL enthält, oder der leere String, wenn der Port der Standardwert für das Protokoll ist.

> [!NOTE]
> Wenn das [`Location`](/de/docs/Web/API/Location)-Objekt auf eine URL verweist, die keine explizite Portnummer enthält (z. B. `https://localhost`) oder eine Portnummer enthält, die der Standard-Portnummer entspricht, die zum Protokollteil der URL gehört (z. B. `https://localhost:443`), dann wird die `port`-Eigenschaft der leere String sein: `''`.

## Wert

Ein String.

## Beispiele

```js
// Assume current page is at https://developer.mozilla.org/en-US/docs/Location/port
const result = location.port; // Returns:''
```

```js
// Assume another page is at https://developer.mozilla.org:8888/en-US/docs/Location/port
const result = location.port; // Returns:'8888'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
