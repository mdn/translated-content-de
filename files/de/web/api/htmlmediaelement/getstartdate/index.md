---
title: "HTMLMediaElement: getStartDate() Methode"
short-title: getStartDate()
slug: Web/API/HTMLMediaElement/getStartDate
l10n:
  sourceCommit: af9a8ff87cfa6563c9a082162ce4ed7ba0b204e1
---

{{APIRef("HTML DOM")}}

Die **`getStartDate()`** Methode der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Schnittstelle gibt ein neues {{jsxref("Date")}}-Objekt zurück, das das reale Datum und die Uhrzeit darstellt, die dem Beginn der Medien entsprechen.

Dies ist nützlich für Medienstreams, die an eine reale Uhrzeit gebunden sind, wie z.B. eine Live-Übertragung, die zu einem bestimmten Datum und einer bestimmten Uhrzeit begann. Für Medien, die keine Datums- und Zeitinformationen enthalten, wird das zurückgegebene `Date`-Objekt einen Zeitwert von {{jsxref("NaN")}} haben.

## Syntax

```js-nolint
getStartDate()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Date")}}-Objekt, das das Startdatum und die Startzeit der Medien darstellt. Wenn die Medien keine Datums- und Zeitinformationen enthalten, wird das zurückgegebene `Date`-Objekt einen Zeitwert von `NaN` haben.

## Beschreibung

Intern speichert jedes Media-Element ein Startdatum, das als `NaN` (nicht gesetzt) beginnt. Sobald der Browser genügend Daten geladen hat, um die Metadaten der Medien zu lesen, wird das Startdatum auf die reale Zeit gesetzt, die dem Beginn der Medien entspricht — sofern das Format eines bereitstellt. Wenn nicht, bleibt das Startdatum `NaN`.

Für Medien, die eine Startzeit und ein Startdatum angeben (zum Beispiel eine über das Web gestreamte Live-TV-Übertragung), gibt `getStartDate()` ein `Date`-Objekt zurück, das der realen Zeit entspricht, zu der die Medien beginnen. Dies erlaubt es den Medienplayer-Steuerelementen, absolute Zeiten (wie "14:30 Uhr") anzuzeigen, anstatt Zeiten relativ zum Beginn der Wiedergabe (wie "3 Stunden, 12 Minuten").

Das zurückgegebene `Date` wird in einem der folgenden Fälle einen Zeitwert von `NaN` haben (was es zu einem [ungültigen Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) macht):

- Es wurden noch keine Daten geladen ([`readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) ist `HAVE_NOTHING`), daher wurde das Startdatum nicht gesetzt.
- Das Medienformat enthält keine Datums- und Zeitinformationen.

Das Startdatum ist nicht garantiert verfügbar, sobald das [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event) Ereignis ausgelöst wird. Zum Beispiel tragen [HLS](https://developer.apple.com/documentation/http-live-streaming) Streams Daten in Segment-Level `#EXT-X-PROGRAM-DATE-TIME` Tags, die zu diesem Zeitpunkt möglicherweise noch nicht gelesen wurden. Das Warten auf das [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event) Ereignis ist stattdessen zuverlässiger über Formate hinweg, da der Browser bis dahin genug Daten geladen hat, um das Startdatum zu bestimmen.

## Beispiele

### Startdatum eines Live-Streams anzeigen

Dieses Beispiel ruft das Startdatum eines Live-Streams ab — das reale Datum und die Uhrzeit, zu der die Übertragung begann, wie vom Server im Stream eingebettet — und zeigt es an. Es wird auf das [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event) Ereignis gehört, das ausgelöst wird, sobald genügend Daten geladen wurden, damit das Startdatum verfügbar ist.

#### HTML

```html
<video src="livestream.m3u8" controls></video>
<output>Start date: loading…</output>
```

#### JavaScript

```js
const video = document.querySelector("video");
const display = document.querySelector("output");

video.addEventListener("loadeddata", () => {
  const startDate = video.getStartDate();

  if (isNaN(startDate.getTime())) {
    display.textContent = "Start date: not available";
  } else {
    display.textContent = `Start date: ${startDate.toLocaleString()}`;
  }
});
```

#### Ergebnis

Die Ausgabe unten zeigt das Startdatum der Medien, wie vom Server bereitgestellt.
Beachten Sie, dass dies in den Beispieldaten in [stream.m3u8](https://github.com/mdn/dom-examples/blob/main/media/getstartdate/stream.m3u8) kodiert ist.

{{EmbedGHLiveSample("dom-examples/media/getstartdate/", '100%', 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)
- [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration)
