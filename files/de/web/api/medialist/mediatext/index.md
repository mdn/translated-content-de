---
title: "MediaList: mediaText-Eigenschaft"
short-title: mediaText
slug: Web/API/MediaList/mediaText
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("CSSOM")}}

Die **`mediaText`**-Eigenschaft der {{domxref("MediaList")}}-Schnittstelle ist ein {{Glossary("stringifier")}}, der einen Zeichenfolgenwert zurückgibt, der die `MediaList` als Text darstellt, und es Ihnen auch ermöglicht, eine neue `MediaList` festzulegen.

## Wert

Eine Zeichenfolge, die die Medienabfragen eines Stylesheets darstellt. Jede wird durch ein Komma getrennt, zum Beispiel `screen and (min-width: 480px), print`.

Wenn Sie neue Medienabfragen im Dokument festlegen möchten, muss der Zeichenfolgenwert die verschiedenen Abfragen durch Kommas getrennt haben, z. B. `screen, print`. Beachten Sie, dass die `MediaList` eine Live-Liste ist; das Aktualisieren der Liste über `mediaText` wird das Verhalten des Dokuments sofort aktualisieren.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in die leere Zeichenfolge (`""`) umgewandelt, sodass `ml.mediaText = null` gleichbedeutend mit `ml.mediaText = ""` ist.

## Beispiele

Das folgende Beispiel würde eine textuelle Repräsentation der `MediaList` des ersten Stylesheets, das auf das aktuelle Dokument angewendet wird, in der Konsole protokollieren.

```js
const stylesheets = document.styleSheets;
let stylesheet = stylesheets[0];
console.log(stylesheet.media.mediaText);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
