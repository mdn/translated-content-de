---
title: "MediaList: item()-Methode"
short-title: item()
slug: Web/API/MediaList/item
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ APIRef("CSSOM") }}

Die **`item()`**-Methode des [`MediaList`](/de/docs/Web/API/MediaList)-Interfaces gibt die Medienabfrage am angegebenen `index` zurück oder `null`, wenn der angegebene `index` nicht existiert.

## Syntax

```js-nolint
item(index)
[index]
```

> [!NOTE]
> Die Klammer-Syntax (`[]`) kann anstelle der `item()`-Syntax verwendet werden.

### Parameter

- `index`
  - : Eine ganze Zahl.

### Rückgabewert

Wenn die Klammer-Syntax (`[]`) verwendet wird und es keinen Eintrag für den angegebenen Index gibt, wird `undefined` zurückgegeben.

## Beispiele

Das folgende Beispiel protokolliert jede Medienabfrage, die in der `MediaList` gespeichert ist und mit dem ersten Stylesheet verknüpft ist, das auf das aktuelle Dokument angewendet wird, in die Konsole.

```js
const stylesheet = document.styleSheets[0];
console.log(stylesheet.media.length);
console.log(stylesheet.media.item(0)); // Returns a string like "print"
console.log(stylesheet.media.item(5)); // Returns null if there is no 5th entry
console.log(stylesheet.media[1]); // Returns a string like "print"
console.log(stylesheet.media[5]); // Returns undefined if there is no 5th entry
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
