---
title: "RTCDTMFSender: insertDTMF()-Methode"
short-title: insertDTMF()
slug: Web/API/RTCDTMFSender/insertDTMF
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("WebRTC")}}

Die **`insertDTMF()`**-Methode der {{domxref("RTCDTMFSender")}}-Schnittstelle sendet {{Glossary("DTMF")}}-Töne an den entfernten Peer über die {{domxref("RTCPeerConnection")}}.

Töne werden asynchron gesendet. Jedes Mal, wenn ein Ton beginnt oder endet, wird ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis an den `RTCDTMFSender` gesendet.

Sie können `insertDTMF()` jederzeit aufrufen, solange die Verbindung aktiv ist. Jeder Aufruf von `insertDTMF()` ersetzt alle ausstehenden Töne im `toneBuffer`.
Sie können das Senden von geplanten Tönen abbrechen, indem Sie eine leere Zeichenkette (`""`) als die zu spielenden Töne angeben.
Da `insertDTMF()` den Tonpuffer ersetzt, ist es notwendig, `insertDTMF()` mit einer Zeichenkette aufzurufen, die sowohl die verbleibenden Töne (im `toneBuffer` gespeichert) als auch die neuen Töne zusammengefügt enthält, um DTMF-Töne hinzuzufügen.

## Syntax

```js-nolint
insertDTMF(tones)
insertDTMF(tones, duration)
insertDTMF(tones, duration, interToneGap)
```

### Parameter

- `tones`
  - : Eine Zeichenkette, die die DTMF-Codes enthält, die an den Empfänger gesendet werden sollen.
    Wenn Sie eine leere Zeichenkette als `tones`-Parameter angeben, wird der Tonpuffer geleert und alle derzeit geplanten Töne werden abgebrochen.
    Ein Komma-Zeichen `,` in der Zeichenkette fügt eine zweisekündige Verzögerung ein. Zum Beispiel sendet `"12,34"` Töne für `1` und `2`, pausiert zwei Sekunden und sendet dann `3` und `4`. Mehrere Kommas verlängern die Verzögerung, sodass `,,` vier Sekunden hinzufügen wird.
- `duration` {{optional_inline}}
  - : Die Dauer, in Millisekunden, die jeder DTMF-Ton anhalten soll.
    Dieser Wert muss zwischen 40 ms und 6000 ms (6 Sekunden) liegen, einschließlich. Der Standardwert ist 100 ms.
- `interToneGap` {{optional_inline}}
  - : Die Wartezeit zwischen den Tönen, in Millisekunden.
    Der Browser erzwingt einen Mindestwert von 30 ms (wenn Sie einen niedrigeren Wert angeben, werden stattdessen 30 ms verwendet). Der Standardwert ist 70 ms.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die DTMF-Töne nicht gesendet werden können, weil der Track gestoppt wurde oder sich in einem schreibgeschützten oder inaktiven Zustand befindet.
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eines oder mehrere der Zeichen in `tones` keine gültigen DTMF-Zeichen sind (`0-9`, `A-Z`, `#` oder `,`).

## Beispiele

### Verwenden von insertDTMF zum Senden von DTMF-Tönen

Dieses Beispiel zeigt, wie man die `insertDTMF()`-Methode verwendet, um Töne über eine WebRTC-Verbindung zu senden.

Der Code überprüft zunächst, ob die `canInsertDTMF`-Eigenschaft definiert ist und verwendet sie, um zu überprüfen, ob das Einfügen von DTMF-Tönen unterstützt wird.
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
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCDTMFSender")}}
- {{domxref("RTCRtpSender")}}
