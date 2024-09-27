---
title: RTCRtpTransceiver
slug: Web/API/RTCRtpTransceiver
l10n:
  sourceCommit: e82d46feb66ed523ed8f74bd0bd6f4153c87acbb
---

{{APIRef("WebRTC")}}

Die WebRTC-Schnittstelle **`RTCRtpTransceiver`** beschreibt eine permanente Paarung eines [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und eines [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), zusammen mit einem gemeinsamen Status.

Jeder [SDP](/de/docs/Glossary/SDP)-Medienabschnitt beschreibt einen bidirektionalen SRTP- ("Secure Real Time Protocol")-Stream (ausgenommen den Medienabschnitt für [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), falls vorhanden).
Diese Paarung von Sende- und Empfangs-SRTP-Streams ist für einige Anwendungen erheblich, sodass `RTCRtpTransceiver` verwendet wird, um diese Paarung zusammen mit anderen wichtigen Statusinformationen aus dem Medienabschnitt darzustellen.
Jeder nicht deaktivierte SRTP-Medienabschnitt wird immer durch genau einen Transceiver repräsentiert.

Ein Transceiver wird eindeutig über seine [`mid`](/de/docs/Web/API/RTCRtpTransceiver/mid)-Eigenschaft identifiziert, die dem Medien-ID (`mid`) seiner entsprechenden m-Line entspricht. Ein `RTCRtpTransceiver` ist **zugeordnet** zu einer m-Line, wenn sein `mid` nicht null ist; andernfalls wird es als nicht zugeordnet betrachtet.

## Instanzeigenschaften

- [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) {{ReadOnlyInline}}
  - : Ein schreibgeschützter String, der die aktuell ausgehandelte Richtung des Transceivers anzeigt, oder `null`, wenn der Transceiver noch nie an einem Austausch von Angeboten und Antworten teilgenommen hat.
    Um die Richtung des Transceivers zu ändern, setzen Sie den Wert der [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)-Eigenschaft.
- [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)
  - : Ein String, der verwendet wird, um die gewünschte Richtung des Transceivers festzulegen.
- [`mid`](/de/docs/Web/API/RTCRtpTransceiver/mid) {{ReadOnlyInline}}
  - : Die Medien-ID der m-Line, die diesem Transceiver zugeordnet ist. Diese Zuordnung wird, wenn möglich, hergestellt, sobald entweder eine lokale oder entfernte Beschreibung angewendet wird. Dieses Feld ist `null`, wenn weder eine lokale noch eine entfernte Beschreibung angewendet wurde oder wenn seine zugehörige m-Line durch ein entferntes Angebot oder eine beliebige Antwort abgelehnt wird.
- [`receiver`](/de/docs/Web/API/RTCRtpTransceiver/receiver) {{ReadOnlyInline}}
  - : Das [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekt, das den Empfang und die Dekodierung eingehender Medien übernimmt.
- [`sender`](/de/docs/Web/API/RTCRtpTransceiver/sender) {{ReadOnlyInline}}
  - : Das [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekt, das für die Kodierung und das Senden von Daten an den entfernten Teilnehmer verantwortlich ist.
- [`stopped`](/de/docs/Web/API/RTCRtpTransceiver/stopped) {{Deprecated_Inline}}
  - : Gibt an, ob das Senden und Empfangen mit dem gepaarten `RTCRtpSender` und `RTCRtpReceiver` dauerhaft deaktiviert wurde, entweder aufgrund des SDP-Angebots/-Antworts oder durch einen Aufruf von [`stop()`](/de/docs/Web/API/RTCRtpTransceiver/stop).

## Instanzmethoden

- [`setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences)
  - : Konfiguriert die bevorzugte Codec-Liste des Transceivers und überschreibt damit die Einstellungen des [User-Agent](/de/docs/Glossary/user_agent).
- [`stop()`](/de/docs/Web/API/RTCRtpTransceiver/stop)
  - : Stoppt den `RTCRtpTransceiver` dauerhaft.
    Der zugehörige Sender stoppt das Senden von Daten, und der zugehörige Empfänger stoppt ebenso das Empfangen und Dekodieren eingehender Daten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Echtzeit-Transportprotokoll (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) und [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) erstellen beide Transceiver
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) und [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
