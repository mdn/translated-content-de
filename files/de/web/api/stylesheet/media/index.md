---
title: "StyleSheet: media-Eigenschaft"
short-title: media
slug: Web/API/StyleSheet/media
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`media`**-Eigenschaft der [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Schnittstelle enthält ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt, das das vorgesehene Zielmedium für Style-Informationen repräsentiert.

## Wert

Ein [`MediaList`](/de/docs/Web/API/MediaList)-Objekt. Sein Wert wird durch das [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribut des entsprechenden `<link>`- oder `<style>`-Elements festgelegt. Wenn das `media`-Attribut nicht gesetzt oder leer ist, gibt es eine leere `MediaList` zurück, d.h. eine `MediaList` mit der `length`-Eigenschaft gleich `0`.

Obwohl die `media`-Eigenschaft selbst im Hinblick darauf, dass Sie das `MediaList`-Objekt nicht ersetzen können, schreibgeschützt ist, können Sie dennoch direkt der `media`-Eigenschaft zuweisen, was dem Zuweisen ihrer [`mediaText`](/de/docs/Web/API/MediaList/mediaText)-Eigenschaft entspricht. Sie können auch das `MediaList`-Objekt mit den Methoden [`appendMedium()`](/de/docs/Web/API/MediaList/appendMedium) und [`deleteMedium()`](/de/docs/Web/API/MediaList/deleteMedium) verändern.

## Beispiele

Angenommen, der `<head>` enthält Folgendes:

```html
<link rel="stylesheet" href="document.css" media="screen" />
<style rel="stylesheet" media="screen, print">
  body {
    background-color: snow;
  }
</style>
```

Dann:

```js
for (let i = 0; i < document.styleSheets.length; i++) {
  console.log(
    `document.styleSheets[${i}].media: ${JSON.stringify(
      document.styleSheets[i].media,
    )}`,
  );
  if (i === 0) document.styleSheets[i].media.appendMedium("handheld");
  if (i === 1) document.styleSheets[i].media.deleteMedium("print");
  console.log(
    `document.styleSheets[${i}].media: ${JSON.stringify(
      document.styleSheets[i].media,
    )}`,
  );
}
// This will log:
// document.styleSheets[0].media: {"0":"screen"}
// document.styleSheets[0].media: {"0":"screen","1":"handheld"}
// document.styleSheets[1].media: {"0":"screen","1":"print"}
// document.styleSheets[1].media: {"0":"screen"}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
