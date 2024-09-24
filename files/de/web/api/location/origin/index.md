---
title: "Location: origin-Eigenschaft"
short-title: origin
slug: Web/API/Location/origin
l10n:
  sourceCommit: 61362f08e0707711a5c09166affda86c31e4e2b2
---

{{APIRef("Location")}} {{AvailableInWorkers}}

Die **`origin`** schreibgeschützte Eigenschaft der {{domxref("Location")}} Schnittstelle ist ein String, der die Unicode-Serialisierung des Ursprungs der dargestellten URL enthält.

Die genaue Struktur variiert je nach Typ der URL:

- Für URLs mit den Schemen `http:` oder `https:`, das Schema gefolgt von `//`, gefolgt von der Domain, gefolgt von `:`, gefolgt vom Port (der Standardport, `80` beziehungsweise `443`, falls explizit angegeben).
- Für URLs mit dem `file:`-Schema ist der Wert browserabhängig.
- Für URLs mit dem `blob:`-Schema der Ursprung der URL nach `blob:`. Zum Beispiel wird `blob:https://mozilla.org` `https://mozilla.org` als Ursprung haben.

## Wert

Ein String.

## Beispiele

```js
console.log(window.location.origin); // Auf dieser Seite gibt 'https://developer.mozilla.org' aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.origin`](/de/docs/Web/API/Window/origin)
- {{Glossary("origin")}} Glossarbegriff
