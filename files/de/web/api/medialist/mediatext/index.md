---
title: "MediaList: mediaText-Eigenschaft"
short-title: mediaText
slug: Web/API/MediaList/mediaText
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("CSSOM")}}

Die **`mediaText`**-Eigenschaft der [`MediaList`](/de/docs/Web/API/MediaList)
Schnittstelle ist ein [Stringifier](/de/docs/Glossary/stringifier), der einen String zurückgibt, der die
`MediaList` als Text darstellt, und es Ihnen auch ermöglicht, eine neue `MediaList` festzulegen.

## Wert

Ein String, der die Media Queries eines Stylesheets repräsentiert. Jeder wird
durch ein Komma getrennt, zum Beispiel
`screen and (min-width: 480px), print`.

Wenn Sie neue Media Queries im Dokument festlegen möchten, muss der String-Wert die
verschiedenen Abfragen durch Kommas getrennt haben, z. B. `screen, print`. Beachten Sie, dass die
`MediaList` eine Live-Liste ist; das Aktualisieren der Liste über
`mediaText` wird das Verhalten des Dokuments sofort aktualisieren.

Wenn auf den `null`-Wert gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `ml.mediaText = null` gleichbedeutend mit `ml.mediaText = ""` ist.

## Beispiele

Das Folgende würde eine textuelle Darstellung der
`MediaList` des ersten Stylesheets, das auf das aktuelle Dokument angewendet wird, in die Konsole protokollieren.

```js
const stylesheets = document.styleSheets;
let stylesheet = stylesheets[0];
console.log(stylesheet.media.mediaText);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
