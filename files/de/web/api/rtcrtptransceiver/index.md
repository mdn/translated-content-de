---
title: RTCRtpTransceiver
slug: Web/API/RTCRtpTransceiver
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{APIRef("WebRTC")}}

Die WebRTC-Schnittstelle **`RTCRtpTransceiver`** beschreibt eine dauerhafte Zuordnung zwischen einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) sowie ihren gemeinsamen Zustand.

Jeder {{Glossary("SDP", "SDP")}}-Medienabschnitt beschreibt einen bidirektionalen SRTP-Stream („Secure Real Time Protocol“), mit Ausnahme des Medienabschnitts für [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), sofern vorhanden.
Diese Zuordnung von gesendeten und empfangenen SRTP-Streams ist für manche Anwendungen wichtig. `RTCRtpTransceiver` stellt daher diese Zuordnung sowie weitere wichtige Zustandsinformationen aus dem Medienabschnitt dar.
Jeder nicht deaktivierte SRTP-Medienabschnitt wird durch genau einen Transceiver repräsentiert.

Ein Transceiver wird eindeutig durch seine Eigenschaft [`mid`](/de/docs/Web/API/RTCRtpTransceiver/mid) identifiziert. Ihr Wert entspricht der Medien-ID (`mid`) der zugehörigen m-line. Ein `RTCRtpTransceiver` ist einer m-line **zugeordnet**, wenn sein `mid`-Wert nicht `null` ist; andernfalls gilt er als nicht zugeordnet.

## Instanzeigenschaften

- [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) {{ReadOnlyInline}}
  - : Ein schreibgeschützter String, der die aktuell ausgehandelte Richtung des Transceivers angibt, oder `null`, wenn der Transceiver noch nie an einem Austausch von Angeboten und Antworten beteiligt war.
    Um die Richtung des Transceivers zu ändern, setzen Sie den Wert der Eigenschaft [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction).
- [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)
  - : Ein String, mit dem die gewünschte Richtung des Transceivers festgelegt wird.
- [`mid`](/de/docs/Web/API/RTCRtpTransceiver/mid) {{ReadOnlyInline}}
  - : Die Medien-ID der m-line, die diesem Transceiver zugeordnet ist. Diese Zuordnung wird nach Möglichkeit hergestellt, sobald eine lokale oder entfernte Beschreibung angewendet wird. Dieses Feld ist `null`, bevor eine Beschreibung mit der entsprechenden m-line angewendet wird oder wenn ein Rollback die Zuordnung rückgängig macht.
- [`receiver`](/de/docs/Web/API/RTCRtpTransceiver/receiver) {{ReadOnlyInline}}
  - : Das [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekt, das eingehende Medien empfängt und dekodiert.
- [`sender`](/de/docs/Web/API/RTCRtpTransceiver/sender) {{ReadOnlyInline}}
  - : Das [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekt, das Daten kodiert und an den entfernten Peer sendet.
- [`stopped`](/de/docs/Web/API/RTCRtpTransceiver/stopped) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt an, ob das Senden und Empfangen über den zugeordneten `RTCRtpSender` und `RTCRtpReceiver` dauerhaft deaktiviert wurde – entweder infolge des SDP-Angebots- und Antwortaustauschs oder durch einen Aufruf von [`stop()`](/de/docs/Web/API/RTCRtpTransceiver/stop).

## Instanzmethoden

- [`setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences)
  - : Konfiguriert die bevorzugte Codec-Liste des Transceivers und überschreibt dabei die Einstellungen des {{Glossary("user_agent", "User Agents")}}.
- [`stop()`](/de/docs/Web/API/RTCRtpTransceiver/stop)
  - : Stoppt den `RTCRtpTransceiver` dauerhaft.
    Der zugehörige Sender sendet keine Daten mehr, und der zugehörige Empfänger empfängt und dekodiert keine eingehenden Daten mehr.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- Sowohl [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) als auch [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) erstellen Transceiver.
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) und [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
