---
title: RTCRtpTransceiver
slug: Web/API/RTCRtpTransceiver
l10n:
  sourceCommit: dbd5b5198331fb1c61df1ac02dcbc440f83a78bb
---

{{APIRef("WebRTC")}}

Die WebRTC-Schnittstelle **`RTCRtpTransceiver`** beschreibt eine dauerhafte Paarung eines [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und eines [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), zusammen mit einem gemeinsamen Status.

Jeder {{Glossary("SDP", "SDP")}} Medienabschnitt beschreibt einen bidirektionalen SRTP ("Secure Real Time Protocol") Stream (mit Ausnahme des Medienabschnitts für [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), falls vorhanden).
Diese Paarung von Sende- und Empfangs-SRTP-Streams ist für einige Anwendungen von Bedeutung, daher wird `RTCRtpTransceiver` verwendet, um diese Paarung zusammen mit anderen wichtigen Statusinformationen aus dem Medienabschnitt darzustellen.
Jeder nicht deaktivierte SRTP-Medienabschnitt wird immer durch genau einen Transceiver repräsentiert.

Ein Transceiver wird eindeutig über seine [`mid`](/de/docs/Web/API/RTCRtpTransceiver/mid)-Eigenschaft identifiziert, die mit der Medien-ID (`mid`) seiner entsprechenden m-line identisch ist. Ein `RTCRtpTransceiver` ist **assoziiert** mit einer m-line, wenn seine `mid` nicht-null ist; andernfalls wird er als disassoziiert betrachtet.

## Instanz-Eigenschaften

- [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) {{ReadOnlyInline}}
  - : Ein schreibgeschützter String, der die derzeit ausgehandelte Richtungsabhängigkeit des Transceivers angibt oder `null`, wenn der Transceiver noch nie an einem Austausch von Angeboten und Antworten teilgenommen hat.
    Um die Richtungsabhängigkeit des Transceivers zu ändern, setzen Sie den Wert der [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)-Eigenschaft.
- [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)
  - : Ein String, der verwendet wird, um die gewünschte Richtung des Transceivers festzulegen.
- [`mid`](/de/docs/Web/API/RTCRtpTransceiver/mid) {{ReadOnlyInline}}
  - : Die Medien-ID der mit diesem Transceiver assoziierten m-line. Diese Assoziation wird, wann immer möglich, hergestellt, sobald entweder eine lokale oder eine entfernte Beschreibung angewendet wird. Dieses Feld ist `null`, bevor eine Beschreibung mit der entsprechenden m-line angewendet wird, oder wenn ein Rollback diese Assoziation rückgängig macht.
- [`receiver`](/de/docs/Web/API/RTCRtpTransceiver/receiver) {{ReadOnlyInline}}
  - : Das [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekt, das für den Empfang und die Dekodierung eingehender Medien zuständig ist.
- [`sender`](/de/docs/Web/API/RTCRtpTransceiver/sender) {{ReadOnlyInline}}
  - : Das [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekt, das für das Kodieren und Senden von Daten zum entfernten Peer verantwortlich ist.
- [`stopped`](/de/docs/Web/API/RTCRtpTransceiver/stopped) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt an, ob das Senden und Empfangen mit dem gepaarten `RTCRtpSender` und `RTCRtpReceiver` dauerhaft deaktiviert wurde, entweder aufgrund von SDP Angebot/Antwort oder aufgrund eines Aufrufs von [`stop()`](/de/docs/Web/API/RTCRtpTransceiver/stop).

## Instanz-Methoden

- [`setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences)
  - : Konfiguriert die bevorzugte Liste von Codecs des Transceivers und überschreibt dabei {{Glossary("user_agent", "User-Agent")}}-Einstellungen.
- [`stop()`](/de/docs/Web/API/RTCRtpTransceiver/stop)
  - : Stoppt den `RTCRtpTransceiver` dauerhaft.
    Der zugehörige Sender stoppt das Senden von Daten, und der zugehörige Empfänger stoppt ebenfalls den Empfang und die Dekodierung eingehender Daten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Realtime Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) und [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) beide erstellen Transceiver
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) und [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
