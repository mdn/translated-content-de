---
title: "HTMLMediaElement: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/HTMLMediaElement/currentTime
l10n:
  sourceCommit: b9569fcd65bb09ea7e032ef0938185eccdc2d9c4
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`currentTime`** der Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gibt die aktuelle Wiedergabezeit in Sekunden an.

Wenn Sie den Wert von `currentTime` ändern, wird die Wiedergabeposition des Mediums auf die neue Zeit gesetzt.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der die aktuelle Wiedergabezeit in Sekunden angibt.

Wenn das Medium noch nicht wiedergegeben wird, gibt der Wert von `currentTime` die Zeitposition im Medium an, an der die Wiedergabe beginnt, sobald die Methode [`play()`](/de/docs/Web/API/HTMLMediaElement/play) aufgerufen wird.

Wenn `currentTime` auf einen neuen Wert gesetzt wird, wird die Wiedergabeposition des Mediums auf die angegebene Zeit gesetzt, sofern das Medium verfügbar ist.

Bei Medien ohne bekannte Dauer – etwa bei Livestreams – kann der Browser möglicherweise nicht mehr auf Teile des Mediums zugreifen, die nicht mehr im Medienpuffer vorhanden sind. Außerdem kann die Wiedergabeposition bei Medien, deren Zeitleiste nicht bei 0 Sekunden beginnt, nicht auf eine Zeit vor dem Beginn der Zeitleiste gesetzt werden.

Die Länge des Mediums in Sekunden lässt sich über die Eigenschaft [`duration`](/de/docs/Web/API/HTMLMediaElement/duration) ermitteln.

## Hinweise zur Verwendung

### Zeitgenauigkeit

Der Browser rundet Timerwerte für `currentTime` nicht, auch nicht für Werte, die von Skripten übergeben werden. Beim Setzen der Wiedergabeposition kann die resultierende Position dennoch auf eine vom Medium unterstützte Position angepasst werden.

Der Wert von `currentTime` ist ein Näherungswert für die aktuelle Wiedergabeposition. Der Browser aktualisiert ihn während der Wiedergabe. Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/media.html#official-playback-position) verlangt, dass die gemeldete Wiedergabeposition unverändert bleibt, während Skripte ausgeführt werden.

Wie häufig der Wert aktualisiert wird, hängt vom Browser und von der Verarbeitung der Medienwiedergabe ab. Daher können aufeinanderfolgende Zugriffe denselben Wert für `currentTime` zurückgeben, selbst wenn {{jsxref("Date.now()")}} inzwischen fortgeschritten ist. Die Anzahl der Nachkommastellen sagt weder aus, wie häufig der Wert aktualisiert wird, noch, wie genau er mit dem wiedergegebenen Audio oder Video übereinstimmt.

Beispielsweise könnten aufeinanderfolgende Abfragen während der Wiedergabe diese Werte ergeben:

```js
video.currentTime;
// Might be:
// 23.404
// 23.404
// 23.452
// …
```

## Beispiele

```js
const video = document.createElement("video");
console.log(video.currentTime);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, in der die Eigenschaft `HTMLMediaElement.currentTime` definiert ist
- [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek): Eine weitere Möglichkeit, die Wiedergabeposition festzulegen
- [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration): Die Dauer des Mediums in Sekunden
