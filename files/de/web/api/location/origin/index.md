---
title: "Location: origin-Eigenschaft"
short-title: origin
slug: Web/API/Location/origin
l10n:
  sourceCommit: 61362f08e0707711a5c09166affda86c31e4e2b2
---

{{APIRef("Location")}} {{AvailableInWorkers}}

Die schreibgeschützte **`origin`**-Eigenschaft der [`Location`](/de/docs/Web/API/Location)-Schnittstelle ist ein String, der die Unicode-Serialisierung des Ursprungs der vertretenen URL enthält.

Die genaue Struktur variiert je nach Typ der URL:

- Für URLs mit den Schemen `http:` oder `https:`, das Schema gefolgt von `//`, gefolgt von der Domain, gefolgt von `:`, gefolgt vom Port (der Standardport, `80` bzw. `443`, falls explizit angegeben).
- Für URLs mit dem `file:`-Schema ist der Wert browserabhängig.
- Für URLs mit dem `blob:`-Schema der Ursprung der URL nach `blob:`. Zum Beispiel hat `blob:https://mozilla.org` den Ursprung `https://mozilla.org`.

## Wert

Ein String.

## Beispiele

```js
console.log(window.location.origin); // On this page returns 'https://developer.mozilla.org'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.origin`](/de/docs/Web/API/Window/origin)
- {{Glossary("origin", "Ursprung")}} Glossarbegriff
