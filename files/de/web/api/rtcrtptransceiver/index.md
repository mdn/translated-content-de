---
title: RTCRtpTransceiver
slug: Web/API/RTCRtpTransceiver
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("WebRTC")}}

Die WebRTC-Schnittstelle **`RTCRtpTransceiver`** beschreibt eine permanente Paarung eines [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und eines [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) zusammen mit einigen geteilten Zuständen.

Jeder {{Glossary("SDP", "SDP")}} Medienabschnitt beschreibt einen bidirektionalen SRTP ("Secure Real Time Protocol") Stream (mit Ausnahme des Medienabschnitts für [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), falls vorhanden).
Diese Paarung von Sende- und Empfangs-SRTP-Streams ist für einige Anwendungen bedeutend, daher wird `RTCRtpTransceiver` verwendet, um diese Paarung sowie andere wichtige Zustände aus dem Medienabschnitt darzustellen.
Jeder nicht deaktivierte SRTP-Medienabschnitt wird immer durch genau einen Transceiver repräsentiert.

Ein Transceiver wird eindeutig durch seine [`mid`](/de/docs/Web/API/RTCRtpTransceiver/mid) Eigenschaft identifiziert, die identisch mit der Medien-ID (`mid`) seiner entsprechenden m-line ist. Ein `RTCRtpTransceiver` ist mit einer m-line **assoziiert**, wenn seine `mid` nicht null ist; andernfalls gilt es als disassoziiert.

## Instanz-Eigenschaften

- [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) {{ReadOnlyInline}}
  - : Ein schreibgeschützter String, der die aktuell ausgehandelte Richtung des Transceivers angibt, oder `null`, wenn der Transceiver nie an einem Austausch von Angeboten und Antworten beteiligt war.
    Um die Richtung des Transceivers zu ändern, setzen Sie den Wert der [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction) Eigenschaft.
- [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)
  - : Ein String, der verwendet wird, um die gewünschte Richtung des Transceivers festzulegen.
- [`mid`](/de/docs/Web/API/RTCRtpTransceiver/mid) {{ReadOnlyInline}}
  - : Die Medien-ID der mit diesem Transceiver assoziierten m-line. Diese Assoziierung wird, wenn möglich, immer dann hergestellt, wenn entweder eine lokale oder entfernte Beschreibung angewendet wird. Dieses Feld ist `null`, wenn weder eine lokale noch entfernte Beschreibung angewendet wurde, oder wenn seine assoziierte m-line entweder durch ein entferntes Angebot oder eine Antwort abgelehnt wird.
- [`receiver`](/de/docs/Web/API/RTCRtpTransceiver/receiver) {{ReadOnlyInline}}
  - : Das [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Objekt, das für den Empfang und das Decodieren eingehender Medien zuständig ist.
- [`sender`](/de/docs/Web/API/RTCRtpTransceiver/sender) {{ReadOnlyInline}}
  - : Das [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) Objekt, das für das Kodieren und Senden von Daten an den entfernten Gegenpart verantwortlich ist.
- [`stopped`](/de/docs/Web/API/RTCRtpTransceiver/stopped) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt an, ob das Senden und Empfangen mit dem gepaarten `RTCRtpSender` und `RTCRtpReceiver` dauerhaft deaktiviert wurde, entweder aufgrund eines SDP Angebots/Antworts oder aufgrund eines Aufrufs von [`stop()`](/de/docs/Web/API/RTCRtpTransceiver/stop).

## Instanz-Methoden

- [`setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences)
  - : Konfiguriert die bevorzugte Liste von Codecs des Transceivers und überschreibt die Einstellungen des {{Glossary("user_agent", "User-Agent")}}.
- [`stop()`](/de/docs/Web/API/RTCRtpTransceiver/stop)
  - : Stoppt den `RTCRtpTransceiver` dauerhaft.
    Der zugehörige Sender hört auf, Daten zu senden, und der zugehörige Empfänger hört ebenfalls auf, eingehende Daten zu empfangen und zu decodieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Echtzeit-Transportprotokoll (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) und [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) erstellen beide Transceiver
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) und [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
