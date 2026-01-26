---
title: Verwenden von WebRTC-Datenkanälen
slug: Web/API/WebRTC_API/Using_data_channels
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{DefaultAPISidebar("WebRTC")}}

In diesem Leitfaden untersuchen wir, wie man einem Peer-Connection eine Datenkanal hinzufügt, der dann verwendet werden kann, um beliebige Daten sicher auszutauschen; das heißt, jede Art von Daten, die wir möchten, in jedem gewünschten Format.

> [!NOTE]
> Da alle WebRTC-Komponenten Verschlüsselung verwenden müssen, werden alle auf einem `RTCDataChannel` übertragenen Daten automatisch mithilfe von Datagram Transport Layer Security (**DTLS**) gesichert. Siehe [Sicherheit](#sicherheit) unten für weitere Informationen.

## Erstellen eines Datenkanals

Der zugrunde liegende Datentransport, der vom [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwendet wird, kann auf zwei Arten erstellt werden:

- Lassen Sie WebRTC den Transport erstellen und dem Remote-Peer für Sie ankündigen (indem es ein [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignis auslöst). Dies ist der einfache Weg und funktioniert für eine Vielzahl von Anwendungsfällen, entspricht jedoch möglicherweise nicht Ihren Flexibilitätsanforderungen.
- Schreiben Sie Ihren eigenen Code, um den Datentransport zu verhandeln, und signalisieren Sie dem anderen Peer, dass er sich mit dem neuen Kanal verbinden muss.

Schauen wir uns jede dieser Methoden an, beginnend mit der ersten, die die häufigste ist.

### Automatische Verhandlung

Oftmals können Sie die Verhandlung der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Verbindung von der Peer-Connection ausführen lassen. Hierzu rufen Sie [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) auf, ohne einen Wert für die Eigenschaft `negotiated` anzugeben oder indem Sie die Eigenschaft mit einem Wert von `false` angeben. Dies wird automatisch das `RTCPeerConnection` auslösen, um die Verhandlungen für Sie durchzuführen, wobei der Remote-Peer einen Datenkanal erstellt und die beiden über das Netzwerk verbindet.

Das `RTCDataChannel`-Objekt wird unmittelbar von `createDataChannel()` zurückgegeben; Sie können erkennen, wann die Verbindung erfolgreich hergestellt wurde, indem Sie auf das [`open`](/de/docs/Web/API/RTCDataChannel/open_event)-Ereignis achten, das an das `RTCDataChannel` gesendet wird.

```js
let dataChannel = pc.createDataChannel("MyApp Channel");

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});
```

### Manuelle Verhandlung

Um die Datenkanalverbindung manuell zu verhandeln, müssen Sie zuerst ein neues [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt mit der Methode [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) auf dem [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen, indem Sie in den Optionen die Eigenschaft `negotiated` auf `true` setzen. Dies signalisiert der Peer-Connection, den Kanal nicht in Ihrem Namen zu verhandeln.

Verhandeln Sie die Verbindung dann außerhalb des normalen Weges, indem Sie einen Webserver oder andere Mittel verwenden. Dieser Prozess sollte dem Remote-Peer signalisieren, dass er ein eigenes `RTCDataChannel` mit ebenfalls auf `true` gesetzter `negotiated`-Eigenschaft und derselben [`id`](/de/docs/Web/API/RTCDataChannel/id) erstellen sollte. Dadurch werden die beiden Objekte über das `RTCPeerConnection` verbunden.

```js
let dataChannel = pc.createDataChannel("MyApp Channel", {
  negotiated: true,
});

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});

requestRemoteChannel(dataChannel.id);
```

In diesem Codebeispiel wird der Kanal mit `negotiated` auf `true` erstellt, dann wird eine Funktion namens `requestRemoteChannel()` verwendet, um die Verhandlung auszulösen, um einen Remote-Kanal mit derselben ID wie der lokale Kanal zu erstellen.

Dies ermöglicht es, Datenkanäle mit unterschiedlichen Eigenschaften für jeden Peer zu erstellen und Kanäle deklarativ zu erstellen, indem derselbe Wert für `id` verwendet wird.

## Pufferung

WebRTC-Datenkanäle unterstützen die Pufferung von ausgehenden Daten. Dies wird automatisch gehandhabt. Obwohl es keine Möglichkeit gibt, die Größe des Puffers zu steuern, können Sie erfahren, wie viel Daten derzeit gepuffert sind, und Sie können sich für ein Ereignis benachrichtigen lassen, wenn der Puffer beginnt, an Warteschlangendaten abzunehmen. Dies macht es einfach, effiziente Routinen zu schreiben, die sicherstellen, dass immer Daten bereit sind, ohne übermäßig viel Speicher zu verwenden oder den Kanal komplett zu überfluten.

## Verstehen von Nachrichtengrößenbeschränkungen

Sie sollten die Nachrichtengrößen mäßig klein halten. Während die meisten modernen Browser das Senden von Nachrichten von mindestens 256 Kilobytes unterstützen, gibt es Nachteile beim Senden großer Nachrichten, insbesondere wenn kein Nachrichtenzwischenschichten verfügbar ist. Ohne Nachrichtenzwischenschichten (wie in {{rfc("8260")}} definiert) kann das Senden einer großen Nachricht auf einem Datenkanal zu {{Glossary("Head_of_line_blocking", "Head-of-Line-Blocking")}} führen, was wiederum die Latenz von Nachrichten auf anderen Datenkanälen negativ beeinflussen kann.

Die maximale Nachrichtengröße kann mithilfe des `max-message-size` SDP-Attributs verhandelt werden, wie in [RFC 8841](https://www.rfc-editor.org/rfc/rfc8841.html) definiert. Dieses Attribut ermöglicht es jedem Peer, die maximale Größe einer SCTP-Benutzernachricht zu deklarieren, die er bereit ist zu empfangen. Indem dieser Wert verhandelt wird, können Endpunkte vermeiden, Nachrichten zu senden, die größer sind, als der andere Peer handhaben kann. Wenn das Attribut `max-message-size` nicht im SDP vorhanden ist, wird ein Standardwert von 64 Kilobytes angenommen. Ein Wert von 0 zeigt an, dass der Endpunkt Nachrichten jeder Größe handhaben kann, nur durch den verfügbaren Speicher begrenzt.

## Sicherheit

Alle mit WebRTC übertragenen Daten sind verschlüsselt. Im Fall von `RTCDataChannel` wird die Verschlüsselung mithilfe von Datagram Transport Layer Security (DTLS), basierend auf [Transport Layer Security](/de/docs/Web/Security/Defenses/Transport_Layer_Security) (TLS), durchgeführt. Da TLS zur Sicherung jeder HTTPS-Verbindung verwendet wird, sind alle Daten, die Sie über einen Datenkanal senden, genauso sicher wie alle anderen Daten, die vom Browser des Benutzers gesendet oder empfangen werden.

Grundsätzlich, da WebRTC eine Peer-to-Peer-Verbindung zwischen zwei Benutzeragenten ist, passieren die Daten nie den Web- oder Anwendungsserver. Das reduziert die Möglichkeit, dass die Daten abgefangen werden.
