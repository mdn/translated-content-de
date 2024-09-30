---
title: "MediaList: mediaText-Eigenschaft"
short-title: mediaText
slug: Web/API/MediaList/mediaText
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("CSSOM")}}

Die **`mediaText`**-Eigenschaft der [`MediaList`](/de/docs/Web/API/MediaList)-Schnittstelle ist ein [Stringifier](/de/docs/Glossary/stringifier), der eine Zeichenkette zurückgibt, die die `MediaList` als Text darstellt und es Ihnen auch ermöglicht, eine neue `MediaList` festzulegen.

## Wert

Eine Zeichenkette, die die Medienabfragen eines Stylesheets darstellt. Jede wird durch ein Komma getrennt, zum Beispiel `screen and (min-width: 480px), print`.

Wenn Sie neue Medienabfragen im Dokument festlegen möchten, muss der Zeichenkettenwert die verschiedenen Abfragen durch Kommas getrennt haben, z.B. `screen, print`. Beachten Sie, dass die `MediaList` eine Live-Liste ist; durch das Aktualisieren der Liste über `mediaText` wird sofort das Verhalten des Dokuments aktualisiert.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in die leere Zeichenkette (`""`) umgewandelt, sodass `ml.mediaText = null` gleichbedeutend mit `ml.mediaText = ""` ist.

## Beispiele

Das Folgende würde eine textuelle Darstellung der `MediaList` des ersten auf das aktuelle Dokument angewendeten Stylesheets in die Konsole loggen.

```js
const stylesheets = document.styleSheets;
let stylesheet = stylesheets[0];
console.log(stylesheet.media.mediaText);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
