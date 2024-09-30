---
title: RTCRtpTransceiver
slug: Web/API/RTCRtpTransceiver
l10n:
  sourceCommit: e82d46feb66ed523ed8f74bd0bd6f4153c87acbb
---

{{APIRef("WebRTC")}}

Das WebRTC-Interface **`RTCRtpTransceiver`** beschreibt eine dauerhafte Paarung eines [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und eines [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), zusammen mit einigen geteilten Zuständen.

Jeder [SDP](/de/docs/Glossary/SDP)-Medienabschnitt beschreibt einen bidirektionalen SRTP- ("Secure Real Time Protocol") Stream (außer den Medienabschnitt für [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), falls vorhanden). Diese Paarung von Sende- und Empfangs-SRTP-Streams ist für einige Anwendungen von Bedeutung, daher wird `RTCRtpTransceiver` verwendet, um diese Paarung sowie andere wichtige Zustände aus dem Medienabschnitt darzustellen. Jeder nicht deaktivierte SRTP-Medienabschnitt wird immer durch genau einen Transceiver dargestellt.

Ein Transceiver wird eindeutig mithilfe seiner [`mid`](/de/docs/Web/API/RTCRtpTransceiver/mid)-Eigenschaft identifiziert, die identisch mit der Medien-ID (`mid`) seiner entsprechenden m-line ist. Ein `RTCRtpTransceiver` ist **assoziiert** mit einer m-line, wenn seine `mid` nicht null ist; andernfalls wird er als disassoziiert betrachtet.

## Instanz-Eigenschaften

- [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) {{ReadOnlyInline}}
  - : Ein schreibgeschützter String, der die aktuell verhandelte Richtung des Transceivers angibt, oder `null`, falls der Transceiver noch nie an einem Austausch von Angeboten und Antworten teilgenommen hat. Um die Richtung des Transceivers zu ändern, setzen Sie den Wert der [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)-Eigenschaft.
- [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)
  - : Ein String, der verwendet wird, um die gewünschte Richtung des Transceivers festzulegen.
- [`mid`](/de/docs/Web/API/RTCRtpTransceiver/mid) {{ReadOnlyInline}}
  - : Die Medien-ID der m-line, die mit diesem Transceiver assoziiert ist. Diese Assoziation wird, wann immer möglich, hergestellt, sobald entweder eine lokale oder entfernte Beschreibung angewendet wird. Dieses Feld ist `null`, wenn weder eine lokale noch eine entfernte Beschreibung angewendet wurde oder wenn die assoziierte m-line entweder von einem entfernten Angebot oder einer Antwort abgelehnt wird.
- [`receiver`](/de/docs/Web/API/RTCRtpTransceiver/receiver) {{ReadOnlyInline}}
  - : Das [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekt, das für das Empfangen und Dekodieren eingehender Medien zuständig ist.
- [`sender`](/de/docs/Web/API/RTCRtpTransceiver/sender) {{ReadOnlyInline}}
  - : Das [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekt, das für das Codieren und Senden von Daten an den entfernten Peer verantwortlich ist.
- [`stopped`](/de/docs/Web/API/RTCRtpTransceiver/stopped) {{Deprecated_Inline}}
  - : Gibt an, ob das Senden und Empfangen mittels des gepaarten `RTCRtpSender` und `RTCRtpReceiver` dauerhaft deaktiviert wurde, entweder aufgrund eines SDP-Angebots/Antwort oder durch einen Aufruf von [`stop()`](/de/docs/Web/API/RTCRtpTransceiver/stop).

## Instanz-Methoden

- [`setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences)
  - : Konfiguriert die bevorzugte Liste von Codecs des Transceivers und überschreibt damit die [User-Agent](/de/docs/Glossary/user_agent)-Einstellungen.
- [`stop()`](/de/docs/Web/API/RTCRtpTransceiver/stop)
  - : Stoppt den `RTCRtpTransceiver` dauerhaft. Der zugehörige Sender hört auf, Daten zu senden, und der zugehörige Empfänger hört ebenso auf, eingehende Daten zu empfangen und zu dekodieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) und [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) erstellen beide Transceiver
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) und [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
