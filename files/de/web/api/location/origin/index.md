---
title: "Location: origin-Eigenschaft"
short-title: origin
slug: Web/API/Location/origin
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{APIRef("Location")}} {{AvailableInWorkers}}

Die schreibgeschützte **`origin`**-Eigenschaft des [`Location`](/de/docs/Web/API/Location)-Interfaces gibt einen String zurück, der die Unicode-Serialisierung des Ursprungs der URL des Standorts enthält.

Die genaue Struktur variiert je nach Art der URL:

- Für URLs mit den Schemen `ftp:`, `http:`, `https:`, `ws:` und `wss:` besteht der Wert aus dem [`protocol`](/de/docs/Web/API/Location/protocol), gefolgt von `//`, und dem [`host`](/de/docs/Web/API/Location/host). Wie beim `host` wird der [`port`](/de/docs/Web/API/Location/port) nur dann eingeschlossen, wenn er nicht der Standardwert für das Protokoll ist.
- Für URLs mit dem `file:`-Schema ist der Wert abhängig vom Browser.
- Für URLs mit dem `blob:`-Schema entspricht der Ursprung der URL nach `blob:` dem Ursprung, jedoch nur, wenn diese URL das Schema `http:`, `https:` oder `file:` verwendet. Zum Beispiel hat `blob:https://mozilla.org` den Ursprung `https://mozilla.org`.

In allen anderen Fällen wird der String `"null"` zurückgegeben.

Weitere Informationen finden Sie unter [`URL.origin`](/de/docs/Web/API/URL/origin).

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
- {{Glossary("origin", "origin")}}-Glossarbegriff
