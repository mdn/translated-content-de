---
title: "MediaList: mediaText-Eigenschaft"
short-title: mediaText
slug: Web/API/MediaList/mediaText
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("CSSOM")}}

Die **`mediaText`**-Eigenschaft der [`MediaList`](/de/docs/Web/API/MediaList)
Schnittstelle ist ein {{Glossary("stringifier", "Stringifier")}}, der einen String zurückgibt, der die
`MediaList` als Text darstellt und es Ihnen auch ermöglicht, eine neue `MediaList` festzulegen.

## Wert

Ein String, der die Media-Queries eines Stylesheets darstellt. Jede Media-Query wird durch ein Komma getrennt, zum Beispiel
`screen and (min-width: 480px), print`.

Wenn Sie neue Media-Queries im Dokument festlegen möchten, muss der String-Wert die
verschiedenen Queries durch Kommata getrennt enthalten, z. B. `screen, print`. Beachten Sie, dass die
`MediaList` eine Live-Liste ist; das Aktualisieren der Liste über
`mediaText` wird sofort das Verhalten des
Dokuments aktualisieren.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `ml.mediaText = null` gleichbedeutend ist mit `ml.mediaText = ""`.

## Beispiele

Das Folgende würde eine textuelle Darstellung der
`MediaList` des ersten Stylesheets, das auf das aktuelle Dokument angewendet wird, in die Konsole loggen.

```js
const stylesheets = document.styleSheets;
let stylesheet = stylesheets[0];
console.log(stylesheet.media.mediaText);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
