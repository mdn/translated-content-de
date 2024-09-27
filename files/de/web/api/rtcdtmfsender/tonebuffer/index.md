---
title: "RTCDTMFSender: toneBuffer-Eigenschaft"
short-title: toneBuffer
slug: Web/API/RTCDTMFSender/toneBuffer
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("WebRTC")}}

Die `toneBuffer`-Eigenschaft des [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Interfaces gibt einen String zurück, der eine Liste der [DTMF](/de/docs/Glossary/DTMF)-Töne enthält, die zurzeit zum Übertragen an die Gegenstelle über die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) in der Warteschlange stehen. Um Töne in den Puffer einzufügen, rufen Sie [`insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) auf.

Töne werden aus dem String entfernt, sobald sie abgespielt werden, sodass nur kommende Töne aufgelistet werden.

## Wert

Ein String, der die abzuspielenden Töne auflistet. Wenn der String leer ist, gibt es keine ausstehenden Töne.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Zeichen kein DTMF-Tonzeichen (`0-9`, `A-D`, `#` oder `,`) ist.

### Format des Tone-Puffers

Der Tone-Puffer ist ein String, der jede Kombination aus den vom DTMF-Standard erlaubten Zeichen enthalten kann.

#### DTMF-Tonzeichen

- Die Ziffern 0-9
  - : Diese Zeichen repräsentieren die Zifferntasten auf einem Telefon-Tastenfeld.
- Die Buchstaben A-D
  - : Diese Zeichen stellen die Tasten "A" bis "D" dar, die Teil des DTMF-Standards sind, aber nicht auf den meisten Telefonen enthalten sind. Sie werden _nicht_ als Ziffern interpretiert. Kleinbuchstaben "a"-"d" werden automatisch in Großbuchstaben umgewandelt.
- Das Rautezeichen ("#") und das Sternchen ("\*")
  - : Diese entsprechen den ähnlich benannten Tasten, die sich typischerweise in der unteren Reihe des Telefon-Tastenfelds befinden.
- Das Komma (",")
  - : Dieses Zeichen weist den Wahlvorgang an, zwei Sekunden zu pausieren, bevor das nächste Zeichen im Puffer gesendet wird.

> [!NOTE]
> Alle anderen Zeichen werden nicht erkannt und führen dazu, dass [`insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) einen `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException) auslöst.

#### Verwendung von Tone-Puffer-Strings

Wenn Sie beispielsweise Code schreiben, um ein Voicemail-System durch das Senden von DTMF-Codes zu steuern, könnten Sie einen String wie `"*,1,5555"` verwenden. In diesem Beispiel würden Sie `"*"` senden, um Zugriff auf das Voicemail-System zu beantragen, dann nach einer Pause eine "1" senden, um die Wiedergabe der Voicemail-Nachrichten zu starten, und nach einer weiteren Pause "5555" als PIN-Nummer wählen, um die Nachrichten zu öffnen.

Das Setzen des Tone-Puffers auf einen leeren String (`""`) storniert alle ausstehenden DTMF-Codes.

## Beispiel

tbd

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
- [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
