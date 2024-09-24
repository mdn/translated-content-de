---
title: RTCRtpTransceiver
slug: Web/API/RTCRtpTransceiver
l10n:
  sourceCommit: e82d46feb66ed523ed8f74bd0bd6f4153c87acbb
---

{{APIRef("WebRTC")}}

Die WebRTC-Schnittstelle **`RTCRtpTransceiver`** beschreibt eine permanente Paarung eines {{domxref("RTCRtpSender")}} und eines {{domxref("RTCRtpReceiver")}}, zusammen mit einem gemeinsamen Status.

Jeder {{Glossary("SDP")}}-Medienabschnitt beschreibt einen bidirektionalen SRTP- ("Secure Real Time Protocol")-Stream (mit Ausnahme des Medienabschnitts für {{domxref("RTCDataChannel")}}, falls vorhanden).
Diese Paarung von Sende- und Empfangs-SRTP-Streams ist für einige Anwendungen von Bedeutung, daher wird `RTCRtpTransceiver` verwendet, um diese Paarung zusammen mit anderen wichtigen Zuständen des Medienabschnitts darzustellen.
Jeder nicht deaktivierte SRTP-Medienabschnitt wird immer durch genau einen Transceiver dargestellt.

Ein Transceiver wird eindeutig über seine {{domxref("RTCRtpTransceiver.mid", "mid")}}-Eigenschaft identifiziert, die dieselbe ist wie die Medien-ID (`mid`) seiner entsprechenden m-line. Ein `RTCRtpTransceiver` ist mit einer m-line **assoziiert**, wenn seine `mid` nicht null ist; andernfalls wird er als disassoziiert betrachtet.

## Instanzeigenschaften

- {{domxref("RTCRtpTransceiver.currentDirection", "currentDirection")}} {{ReadOnlyInline}}
  - : Ein schreibgeschützter String, der die aktuell ausgehandelte Richtung des Transceivers angibt, oder `null`, wenn der Transceiver nie an einem Austausch von Angeboten und Antworten teilgenommen hat.
    Um die Richtung des Transceivers zu ändern, setzen Sie den Wert der {{domxref("RTCRtpTransceiver.direction", "direction")}}-Eigenschaft.
- {{domxref("RTCRtpTransceiver.direction", "direction")}}
  - : Ein String, der verwendet wird, um die gewünschte Richtung des Transceivers festzulegen.
- {{domxref("RTCRtpTransceiver.mid", "mid")}} {{ReadOnlyInline}}
  - : Die Medien-ID der m-line, die mit diesem Transceiver assoziiert ist. Diese Assoziation wird, wenn möglich, immer dann hergestellt, wenn entweder eine lokale oder remote Beschreibung angewendet wird. Dieses Feld ist `null`, wenn weder eine lokale noch eine remote Beschreibung angewendet wurde oder wenn die zugehörige m-line entweder durch ein remote Angebot oder eine beliebige Antwort abgelehnt wird.
- {{domxref("RTCRtpTransceiver.receiver", "receiver")}} {{ReadOnlyInline}}
  - : Das {{domxref("RTCRtpReceiver")}}-Objekt, das den Empfang und die Dekodierung eingehender Medien übernimmt.
- {{domxref("RTCRtpTransceiver.sender", "sender")}} {{ReadOnlyInline}}
  - : Das {{domxref("RTCRtpSender")}}-Objekt, das für die Kodierung und das Senden von Daten an den entfernten Kontakt verantwortlich ist.
- {{domxref("RTCRtpTransceiver.stopped", "stopped")}} {{Deprecated_Inline}}
  - : Gibt an, ob das Senden und Empfangen mit dem gepaarten `RTCRtpSender` und `RTCRtpReceiver` dauerhaft deaktiviert wurde, entweder aufgrund eines SDP-Angebots/Antworts oder durch einen Aufruf von {{domxref("RTCRtpTransceiver.stop", "stop()")}}.

## Instanzmethoden

- {{domxref("RTCRtpTransceiver.setCodecPreferences", "setCodecPreferences()")}}
  - : Konfiguriert die bevorzugte Liste von Codecs des Transceivers und überschreibt dabei {{Glossary("user agent")}}-Einstellungen.
- {{domxref("RTCRtpTransceiver.stop", "stop()")}}
  - : Stoppt den `RTCRtpTransceiver` dauerhaft.
    Der zugehörige Sender hört auf, Daten zu senden, und der zugehörige Empfänger hört ebenso auf, eingehende Daten zu empfangen und zu dekodieren.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{domxref("RTCPeerConnection.addTrack()")}} und {{domxref("RTCPeerConnection.addTransceiver()")}} erstellen beide Transceiver
- {{domxref("RTCRtpReceiver")}} und {{domxref("RTCRtpSender")}}
