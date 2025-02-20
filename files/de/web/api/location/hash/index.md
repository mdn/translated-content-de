---
title: "Location: hash-Eigenschaft"
short-title: hash
slug: Web/API/Location/hash
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ APIRef("Location") }}

Die **`hash`**-Eigenschaft der [`Location`](/de/docs/Web/API/Location)-Schnittstelle ist eine Zeichenkette, die ein `"#"` gefolgt vom Fragment-Identifikator der URL enthält. Wenn die URL keinen Fragment-Identifikator hat, enthält diese Eigenschaft eine leere Zeichenkette, `""`.

Weitere Informationen finden Sie unter [`URL.hash`](/de/docs/Web/API/URL/hash).

## Wert

Eine Zeichenkette.

## Beispiele

Angenommen, der Benutzer hat `https://example.org#examples` aufgerufen, dann gibt der folgende Code `#examples` aus:

```js
const result = location.hash;
console.log(result);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
