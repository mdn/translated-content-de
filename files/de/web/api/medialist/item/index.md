---
title: "MediaList: item()-Methode"
short-title: item()
slug: Web/API/MediaList/item
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ APIRef("CSSOM") }}

Die **`item()`**-Methode des {{domxref("MediaList")}}-Interfaces gibt die Media Query am angegebenen `index`, oder `null` zurück, wenn der angegebene `index` nicht existiert.

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

Das folgende Beispiel würde alle in der ersten auf das aktuelle Dokument angewendeten Stylesheet verknüpften Media Queries in der Konsole protokollieren.

```js
const stylesheet = document.styleSheets[0];
console.log(stylesheet.media.length);
console.log(stylesheet.media.item(0)); // Gibt einen String wie "print" zurück
console.log(stylesheet.media.item(5)); // Gibt null zurück, wenn kein 5. Eintrag existiert
console.log(stylesheet.media[1]); // Gibt einen String wie "print" zurück
console.log(stylesheet.media[5]); // Gibt undefined zurück, wenn kein 5. Eintrag existiert
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
