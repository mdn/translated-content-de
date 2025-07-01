---
title: "MediaList: mediaText-Eigenschaft"
short-title: mediaText
slug: Web/API/MediaList/mediaText
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("CSSOM")}}

Die **`mediaText`**-Eigenschaft der [`MediaList`](/de/docs/Web/API/MediaList)-Schnittstelle ist ein {{Glossary("stringifier", "Stringifier")}}, der einen String zurückgibt, der die `MediaList` als Text darstellt, und es Ihnen auch ermöglicht, eine neue `MediaList` festzulegen.

## Wert

Ein String, der die Medienabfragen eines Stylesheets darstellt. Jede ist durch ein Komma getrennt, zum Beispiel `screen and (width >= 480px), print`.

Wenn Sie neue Medienabfragen im Dokument festlegen möchten, muss der Stringwert die verschiedenen Abfragen durch Kommas getrennt haben, z.B. `screen, print`. Beachten Sie, dass die `MediaList` eine Live-Liste ist; das Aktualisieren der Liste über `mediaText` wird das Verhalten des Dokuments sofort aktualisieren.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `ml.mediaText = null` gleichbedeutend ist mit `ml.mediaText = ""`.

## Beispiele

Das folgende Beispiel würde eine textuelle Darstellung der `MediaList` des ersten Stylesheets, das auf das aktuelle Dokument angewendet wurde, in der Konsole protokollieren.

```js
const stylesheets = document.styleSheets;
let stylesheet = stylesheets[0];
console.log(stylesheet.media.mediaText);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
