---
title: "RTCDTMFSender: insertDTMF() Methode"
short-title: insertDTMF()
slug: Web/API/RTCDTMFSender/insertDTMF
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("WebRTC")}}

Die **`insertDTMF()`**-Methode der [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Schnittstelle sendet [DTMF](/de/docs/Glossary/DTMF)-Töne an den entfernten Teilnehmer über die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

Töne werden asynchron gesendet. Jedes Mal, wenn ein Ton beginnt oder endet, wird ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis an den `RTCDTMFSender` gesendet.

Sie können `insertDTMF()` jederzeit aufrufen, solange die Verbindung aktiv ist. Jeder Aufruf von `insertDTMF()` ersetzt alle ausstehenden Töne im `toneBuffer`. Sie können das Senden der in der Warteschlange befindlichen Töne abbrechen, indem Sie eine leere Zeichenfolge (`""`) als Satz von abzuspielenden Tönen angeben. Da `insertDTMF()` den Tonpuffer ersetzt, ist es erforderlich, `insertDTMF()` mit einer Zeichenfolge aufzurufen, die sowohl die verbleibenden Töne (im `toneBuffer` gespeichert) als auch die neuen Töne zusammengefügt enthält, um die in Wiedergabe befindlichen DTMF-Töne zu erweitern.

## Syntax

```js-nolint
insertDTMF(tones)
insertDTMF(tones, duration)
insertDTMF(tones, duration, interToneGap)
```

### Parameter

- `tones`
  - : Eine Zeichenkette, die die zu übertragenden DTMF-Codes an den Empfänger enthält.
    Eine leere Zeichenfolge als `tones`-Parameter anzugeben, löscht den Tonpuffer und bricht alle derzeit in der Warteschlange befindlichen Töne ab.
    Ein Komma-Zeichen `,` in der Zeichenkette fügt eine zweisekündige Verzögerung ein. Zum Beispiel wird `"12,34"` Töne für `1` und `2` senden, zwei Sekunden pausieren und dann `3` und `4` senden. Mehrere Kommata fügen eine längere Verzögerung hinzu, sodass `,,` vier Sekunden hinzufügt.
- `duration` {{optional_inline}}
  - : Die Dauer, in Millisekunden, die jeder DTMF-Ton dauern sollte.
    Dieser Wert muss zwischen 40 ms und 6000 ms (6 Sekunden) liegen. Der Standardwert ist 100 ms.
- `interToneGap` {{optional_inline}}
  - : Die Zeitdauer, in Millisekunden, die zwischen den Tönen gewartet werden soll.
    Der Browser erzwingt einen Mindestwert von 30 ms (das heißt, wenn Sie einen niedrigeren Wert angeben, werden stattdessen 30 ms verwendet). Der Standardwert ist 70 ms.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die DTMF-Töne nicht gesendet werden können, weil der Track gestoppt wurde oder sich in einem schreibgeschützten oder inaktiven Zustand befindet.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein oder mehrere Zeichen in `tones` keine gültigen DTMF-Zeichen sind (`0-9`, `A-Z`, `#` oder `,`).

## Beispiele

### Verwendung von insertDTMF zum Senden von DTMF-Tönen

Dieses Beispiel zeigt, wie die `insertDTMF()`-Methode verwendet wird, um Töne über eine WebRTC-Verbindung zu senden.

Der Code prüft zuerst, ob die `canInsertDTMF`-Eigenschaft definiert ist und verwendet sie, um zu prüfen, ob das Einfügen von DTMF-Tönen unterstützt wird. Wenn die Funktion unterstützt wird, wird `insertDTMF()` aufgerufen, um einen Ton einzufügen.

```js
if (sender.dtmf.canInsertDTMF) {
  const duration = 500;
  sender.dtmf.insertDTMF("1234", duration);
} else {
  console.log("DTMF function not available");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
