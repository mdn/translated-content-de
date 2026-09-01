---
title: "HTMLMediaElement: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/HTMLMediaElement/currentTime
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

{{APIRef("HTML DOM")}}

Die **`currentTime`**-Eigenschaft des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interfaces gibt die aktuelle Wiedergabezeit in Sekunden an.

Das Ändern des Wertes von `currentTime` springt das Medium zur neuen Zeit.

## Wert

Ein Gleitkomma-Doppelpräzisionswert, der die aktuelle Wiedergabezeit in Sekunden angibt.

Wenn das Medium noch nicht spielt, zeigt der Wert von `currentTime` die Zeitposition innerhalb des Mediums an, bei der die Wiedergabe beginnt, sobald die [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode aufgerufen wird.

Das Setzen von `currentTime` auf einen neuen Wert springt das Medium zur angegebenen Zeit, sofern das Medium verfügbar ist.

Bei Medien ohne bekannte Dauer – wie z.B. live gestreamte Medien – ist es möglich, dass der Browser Teile des Mediums nicht mehr abrufen kann, die aus dem Mediabuffer entfernt wurden. Auch Medien, deren Zeitachse nicht bei 0 Sekunden beginnt, können nicht zu einer Zeit vor dieser frühesten Zeit der Zeitachse gesprungen werden.

Die Länge des Mediums in Sekunden kann mit der [`duration`](/de/docs/Web/API/HTMLMediaElement/duration)-Eigenschaft bestimmt werden.

## Beispiele

```js
const video = document.createElement("video");
console.log(video.currentTime);
```

## Hinweise zur Verwendung

### Zeitpräzision

Der Browser wendet keine Timer-Rundung auf `currentTime` an, einschließlich Werte, die durch Skripte bereitgestellt werden. Das Springen kann die resultierende Wiedergabeposition dennoch auf eine von dem Medium unterstützte Position anpassen.

Der Wert von `currentTime` ist eine Annäherung an die aktuelle Wiedergabeposition. Der Browser aktualisiert diesen Wert, während die Wiedergabe fortschreitet. Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/media.html#official-playback-position) erfordert, dass die gemeldete Wiedergabeposition stabil bleibt, während Skripte ausgeführt werden.

Die Aktualisierungsfrequenz hängt vom Browser und der Medienwiedergabepipeline ab. Daher können aufeinanderfolgende Abfragen denselben `currentTime` zurückgeben, auch wenn {{jsxref("Date.now()")}} vorangeschritten ist. Die Anzahl der Dezimalstellen im Wert zeigt nicht an, wie oft er aktualisiert wird oder wie genau er mit dem präsentierten Audio oder Video übereinstimmt.

Zum Beispiel könnten aufeinanderfolgende Abfragen während der Wiedergabe diese Werte liefern:

```js
video.currentTime;
// Might be:
// 23.404
// 23.404
// 23.452
// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Interface zur Definition der `HTMLMediaElement.currentTime`-Eigenschaft
- [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek): Eine andere Methode, um die Zeit einzustellen
- [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration): Die Dauer des Mediums in Sekunden
