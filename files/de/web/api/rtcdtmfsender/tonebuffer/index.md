---
title: "RTCDTMFSender: toneBuffer-Eigenschaft"
short-title: toneBuffer
slug: Web/API/RTCDTMFSender/toneBuffer
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("WebRTC")}}

Die `toneBuffer`-Eigenschaft der Schnittstelle [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) gibt eine Zeichenfolge zurück,
die eine Liste der {{Glossary("DTMF", "DTMF")}}-Töne enthält, die derzeit in der Warteschlange stehen, um an den
Remote-Peer über die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet zu werden. Um Töne in den Puffer einzufügen,
rufen Sie [`insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) auf.

Töne werden aus der Zeichenfolge entfernt, sobald sie gespielt werden, so dass nur die bevorstehenden Töne aufgelistet sind.

## Wert

Eine Zeichenfolge, die die zu spielenden Töne auflistet. Wenn die Zeichenfolge leer ist,
stehen keine Töne an.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Zeichen kein DTMF-Tonzeichen (`0-9`, `A-D`, `#` oder `,`) ist.

### Format des Tonebuffers

Der Tonebuffer ist eine Zeichenfolge, die eine beliebige Kombination der vom DTMF-Standard erlaubten Zeichen enthalten kann.

#### DTMF-Tonzeichen

- Die Ziffern 0-9
  - : Diese Zeichen repräsentieren die Ziffertasten auf einer Telefon-Tastatur.
- Die Buchstaben A-D
  - : Diese Zeichen repräsentieren die Tasten "A" bis "D", die Teil des DTMF-Standards sind, aber auf den meisten Telefonen nicht enthalten sind. Diese werden _nicht_ als Ziffern interpretiert. Kleinbuchstaben "a"-"d" werden automatisch in Großbuchstaben umgewandelt.
- Das Rautezeichen ("#") und der Stern ("\*")
  - : Diese entsprechen den ähnlich beschrifteten Tasten, die typischerweise in der unteren Reihe der Telefon-Tastatur zu finden sind.
- Das Komma (",")
  - : Dieses Zeichen veranlasst den Wählvorgang, zwei Sekunden Pause zu machen, bevor das nächste Zeichen im Puffer gesendet wird.

> [!NOTE]
> Alle anderen Zeichen werden nicht erkannt und führen dazu, dass
> [`insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) einen
> `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException) auslöst.

#### Verwendung von Tonebuffer-Zeichenfolgen

Zum Beispiel, wenn Sie Code schreiben, um ein Voicemail-System durch Senden von DTMF-Codes zu steuern, könnten Sie eine Zeichenfolge wie `"*,1,5555"` verwenden. In diesem Beispiel würden wir `"*"` senden, um Zugriff auf das Voicemail-System anzufordern, dann nach einer Pause eine "1", um mit der Wiedergabe von Voicemail-Nachrichten zu beginnen, und dann nach einer Pause "5555" als PIN-Nummer wählen, um die Nachrichten zu öffnen.

Das Setzen des Tonebuffers auf eine leere Zeichenfolge (`""`) hebt alle anstehenden DTMF-Codes auf.

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
