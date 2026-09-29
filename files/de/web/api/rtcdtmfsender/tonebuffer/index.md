---
title: "RTCDTMFSender: toneBuffer-Eigenschaft"
short-title: toneBuffer
slug: Web/API/RTCDTMFSender/toneBuffer
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`toneBuffer`** der Schnittstelle [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) gibt einen String zurück, der die {{Glossary("DTMF", "DTMF")}}-Töne enthält, die derzeit für die Übertragung über die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) an die Gegenstelle in der Warteschlange stehen. Um Töne in den Puffer einzufügen, rufen Sie [`insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) auf.

Töne werden aus dem String entfernt, sobald sie abgespielt werden. Daher enthält er nur noch ausstehende Töne.

## Wert

Ein String mit den abzuspielenden Tönen. Ist der String leer, stehen keine Töne aus.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Zeichen kein DTMF-Tonzeichen ist (`0-9`, `A-D`, `#` oder `,`).

### Format des Tonpuffers

Der Tonpuffer ist ein String, der eine beliebige Kombination der nach dem DTMF-Standard zulässigen Zeichen enthalten kann.

#### DTMF-Tonzeichen

- Die Ziffern 0–9
  - : Diese Zeichen stehen für die Zifferntasten einer Telefontastatur.
- Die Buchstaben A–D
  - : Diese Zeichen stehen für die Tasten „A“ bis „D“, die Teil des DTMF-Standards sind, aber auf den meisten Telefonen fehlen. Sie werden _nicht_ als Ziffern interpretiert. Kleinbuchstaben von „a“ bis „d“ werden automatisch in Großbuchstaben umgewandelt.
- Die Rautetaste („#“) und die Sterntaste („\*“)
  - : Diese entsprechen den gleich gekennzeichneten Tasten, die sich üblicherweise in der untersten Reihe der Telefontastatur befinden.
- Das Komma („,“)
  - : Dieses Zeichen bewirkt, dass der Wählvorgang zwei Sekunden pausiert, bevor das nächste Zeichen im Puffer gesendet wird.

> [!NOTE]
> Alle anderen Zeichen werden nicht erkannt und führen dazu, dass [`insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) eine `InvalidCharacterError`-​​[`DOMException`](/de/docs/Web/API/DOMException) auslöst.

#### Tonpuffer-Strings verwenden

Wenn Sie beispielsweise Code schreiben, der ein Voicemail-System durch das Senden von DTMF-Codes steuert, könnten Sie einen String wie `"*,1,5555"` verwenden. In diesem Beispiel wird zunächst `"*"` gesendet, um Zugriff auf das Voicemail-System anzufordern. Nach einer Pause wird `"1"` gesendet, um die Wiedergabe der Sprachnachrichten zu starten. Nach einer weiteren Pause wird „5555“ als PIN gewählt, um die Nachrichten zu öffnen.

Wenn Sie den Tonpuffer auf einen leeren String (`""`) setzen, werden alle noch ausstehenden DTMF-Codes verworfen.

## Beispiel

Noch zu ergänzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [DTMF mit WebRTC verwenden](/de/docs/Web/API/WebRTC_API/Using_DTMF)
- [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
