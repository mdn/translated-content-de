---
title: "Location: port-Eigenschaft"
short-title: port
slug: Web/API/Location/port
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("Location")}}

Die **`port`**-Eigenschaft des [`Location`](/de/docs/Web/API/Location)-Interfaces ist ein String, der die Portnummer der URL des Standorts enthält. Wenn der Port der Standardport für das Protokoll ist (`80` für `ws:` und `http:`, `443` für `wss:` und `https:`, und `21` für `ftp:`), enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann festgelegt werden, um den Port der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/Location/host) hat oder das Schema `file:` ist, hat das Festlegen dieser Eigenschaft keine Wirkung. Ungültige Portnummern werden ebenfalls stillschweigend ignoriert.

Weiterführende Informationen finden Sie unter [`URL.port`](/de/docs/Web/API/URL/port).

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
