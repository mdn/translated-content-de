---
title: "RTCDTMFSender: toneBuffer-Eigenschaft"
short-title: toneBuffer
slug: Web/API/RTCDTMFSender/toneBuffer
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("WebRTC")}}

Die Eigenschaft `toneBuffer` der Schnittstelle {{domxref("RTCDTMFSender")}} gibt einen String zurück, der eine Liste der derzeit zum Senden an den entfernten Partner über die {{domxref("RTCPeerConnection")}} wartenden {{Glossary("DTMF")}}-Töne enthält. Um Töne in den Puffer einzufügen, rufen Sie {{domxref("RTCDTMFSender.insertDTMF", "insertDTMF()")}} auf.

Töne werden aus dem String entfernt, sobald sie abgespielt werden, sodass nur noch kommende Töne aufgeführt sind.

## Wert

Ein String, der die abspielbereiten Töne auflistet. Wenn der String leer ist, stehen keine Töne aus.

### Ausnahmen

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein Zeichen kein DTMF-Tonzeichen ist (`0-9`, `A-D`, `#` oder `,`).

### Format des Tone Buffers

Der Tone Buffer ist ein String, der jede Kombination der vom DTMF-Standard erlaubten Zeichen enthalten kann.

#### DTMF-Tonzeichen

- Die Ziffern 0-9
  - : Diese Zeichen repräsentieren die Zifferntasten auf einer Telefon-Tastatur.
- Die Buchstaben A-D
  - : Diese Zeichen repräsentieren die "A" bis "D"-Tasten, die Teil des DTMF-Standards sind, aber auf den meisten Telefonen nicht enthalten sind. Sie werden _nicht_ als Ziffern interpretiert. Kleinbuchstaben "a"-"d" werden automatisch in Großbuchstaben umgewandelt.
- Das Rautezeichen ("#") und das Sternchen ("*")
  - : Diese entsprechen den ähnlich gekennzeichneten Tasten, die sich typischerweise in der unteren Reihe der Telefon-Tastatur befinden.
- Das Komma (",")
  - : Dieses Zeichen weist den Wählvorgang an, vor dem Senden des nächsten Zeichens im Puffer zwei Sekunden zu pausieren.

> [!NOTE]
> Alle anderen Zeichen werden nicht erkannt und verursachen, dass
> {{domxref("RTCDTMFSender.insertDTMF", "insertDTMF()")}} einen
> `InvalidCharacterError` {{domxref("DOMException")}} auslöst.

#### Verwendung von Tone Buffer Strings

Wenn Sie beispielsweise Code schreiben, um ein Voicemail-System durch das Senden von DTMF-Codes zu steuern, könnten Sie einen String wie `"*,1,5555"` verwenden. In diesem Beispiel würden wir `"*"` senden, um Zugang zum VM-System anzufordern, dann, nach einer Pause, eine "1" senden, um die Wiedergabe der Voicemail-Nachrichten zu starten, und nach einer weiteren Pause "5555" als PIN-Nummer wählen, um die Nachrichten zu öffnen.

Wenn Sie den Tone Buffer auf einen leeren String (`""`) setzen, werden alle ausstehenden DTMF-Codes abgebrochen.

## Beispiel

tbd

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [DTMF mit WebRTC verwenden](/de/docs/Web/API/WebRTC_API/Using_DTMF)
- {{domxref("RTCDTMFSender.insertDTMF()")}}
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCDTMFSender")}}
- {{domxref("RTCRtpSender")}}
