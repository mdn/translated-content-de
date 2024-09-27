---
title: "RTCDTMFSender: insertDTMF() Methode"
short-title: insertDTMF()
slug: Web/API/RTCDTMFSender/insertDTMF
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("WebRTC")}}

Die **`insertDTMF()`** Methode der [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) Schnittstelle sendet [DTMF](/de/docs/Glossary/DTMF)-Töne über die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) an den entfernten Teilnehmer.

Die Töne werden asynchron gesendet. Jedes Mal, wenn ein Ton beginnt oder endet, wird ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event) Ereignis an den `RTCDTMFSender` gesendet.

Sie können `insertDTMF()` jederzeit aufrufen, während die Verbindung aktiv ist. Jeder Aufruf von `insertDTMF()` ersetzt alle anstehenden Töne im `toneBuffer`.
Sie können das Senden von in der Warteschlange befindlichen Tönen abbrechen, indem Sie eine leere Zeichenkette (`""`) als die zu spielenden Töne angeben. Da `insertDTMF()` den Tonpuffer ersetzt, ist es notwendig, `insertDTMF()` mit einer Zeichenkette aufzurufen, die sowohl die verbleibenden Töne (im `toneBuffer` gespeichert) als auch die neuen angehängten Töne enthält, um zu den DTMF-Tönen hinzuzufügen, die abgespielt werden.

## Syntax

```js-nolint
insertDTMF(tones)
insertDTMF(tones, duration)
insertDTMF(tones, duration, interToneGap)
```

### Parameter

- `tones`
  - : Eine Zeichenkette, die die zu übertragenden DTMF-Codes enthält.
    Eine leere Zeichenkette als `tones`-Parameter löscht den Tonpuffer und bricht alle derzeit in der Warteschlange befindlichen Töne ab.
    Ein Komma `,` in der Zeichenkette fügt eine Verzögerung von zwei Sekunden ein. Zum Beispiel sendet `"12,34"` Töne für `1` und `2`, pausiert zwei Sekunden, und sendet dann `3` und `4`. Mehrere Kommas fügen eine längere Verzögerung hinzu, sodass `,,` vier Sekunden hinzufügt.
- `duration` {{optional_inline}}
  - : Die Dauer, in Millisekunden, die jeder DTMF-Ton dauern soll.
    Dieser Wert muss zwischen 40 ms und 6000 ms (6 Sekunden) liegen, einschließlich. Der Standardwert ist 100 ms.
- `interToneGap` {{optional_inline}}
  - : Die Dauer der Pause, in Millisekunden, zwischen den Tönen.
    Der Browser erzwingt einen Mindestwert von 30 ms (d. h., wenn Sie einen niedrigeren Wert angeben, werden stattdessen 30 ms verwendet). Der Standardwert ist 70 ms.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die DTMF-Töne nicht gesendet werden können, weil die Spur gestoppt wurde oder sich in einem schreibgeschützten oder inaktiven Zustand befindet.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines oder mehrere der Zeichen in `tones` kein gültiger DTMF-Code sind (`0-9`, `A-Z`, `#` oder `,`).

## Beispiele

### Verwenden von insertDTMF zum Senden von DTMF-Tönen

Dieses Beispiel zeigt, wie man die `insertDTMF()` Methode verwendet, um Töne über eine WebRTC-Verbindung zu senden.

Der Code prüft zuerst, ob die `canInsertDTMF` Eigenschaft definiert ist, und verwendet sie dann, um zu prüfen, ob das Einfügen von DTMF-Tönen unterstützt wird.
Wenn die Funktion unterstützt wird, wird `insertDTMF()` aufgerufen, um einen Ton einzufügen.

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
