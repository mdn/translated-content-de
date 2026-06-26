---
title: Verwendung von WebRTC-Datenkanälen
slug: Web/API/WebRTC_API/Using_data_channels
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{DefaultAPISidebar("WebRTC")}}

In diesem Leitfaden untersuchen wir, wie man einem Peer-Verbindungskanal einen Datenkanal hinzufügen kann, der dann verwendet werden kann, um beliebige Daten sicher auszutauschen; das heißt, jede Art von Daten in jedem gewünschten Format.

> [!NOTE]
> Da alle WebRTC-Komponenten Verschlüsselung erfordern, werden alle auf einem `RTCDataChannel` übertragenen Daten automatisch durch Datagram Transport Layer Security (**DTLS**) gesichert. Siehe [Sicherheit](#sicherheit) unten für weitere Informationen.

## Erstellen eines Datenkanals

Der zugrunde liegende Datentransport, der von [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwendet wird, kann auf zwei Arten erstellt werden:

- Lassen Sie WebRTC den Transport erstellen und dem Remote-Peer ankündigen (indem er ein [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event) Ereignis empfängt). Dies ist der einfache Weg und funktioniert für eine Vielzahl von Anwendungsfällen, kann jedoch möglicherweise nicht flexibel genug für Ihre Bedürfnisse sein.
- Schreiben Sie Ihren eigenen Code, um den Datentransport zu verhandeln und signalisieren Sie dem anderen Peer, dass er sich mit dem neuen Kanal verbinden muss.

Schauen wir uns jeden dieser Fälle an, beginnend mit dem ersten, der am häufigsten vorkommt.

### Automatische Verhandlung

Oft können Sie der Peer-Verbindung ermöglichen, die [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Verbindung selbst zu verhandeln. Dazu rufen Sie [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) auf, ohne einen Wert für die `negotiated`-Eigenschaft anzugeben oder mit einem Wert von `false`. Dies löst automatisch aus, dass die `RTCPeerConnection` die Verhandlungen für Sie führt, wodurch der Remote-Peer einen Datenkanal erstellt und beide über das Netzwerk miteinander verbunden werden.

Das `RTCDataChannel`-Objekt wird sofort von `createDataChannel()` zurückgegeben; Sie können erkennen, wann die Verbindung erfolgreich hergestellt wurde, indem Sie das [`open`](/de/docs/Web/API/RTCDataChannel/open_event) Ereignis beobachten, das an das `RTCDataChannel` gesendet wird.

```js
let dataChannel = pc.createDataChannel("MyApp Channel");

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});
```

### Manuelle Verhandlung

Um die Datenkanalverbindung manuell zu verhandeln, müssen Sie zuerst ein neues [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt erstellen, indem Sie die Methode [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwenden und in den Optionen eine `negotiated`-Eigenschaft festlegen, die auf `true` gesetzt ist. Dies signalisiert der Peer-Verbindung, nicht zu versuchen, den Kanal in Ihrem Namen zu verhandeln.

Verhandeln Sie dann die Verbindung außerhalb dieser, mit einem Webserver oder anderen Mitteln. Dieser Prozess sollte dem Remote-Peer signalisieren, dass er seinen eigenen `RTCDataChannel` mit der ebenfalls auf `true` gesetzten `negotiated`-Eigenschaft und demselben [`id`](/de/docs/Web/API/RTCDataChannel/id) erstellen soll. Dies wird die beiden Objekte über die `RTCPeerConnection` verknüpfen.

```js
let dataChannel = pc.createDataChannel("MyApp Channel", {
  negotiated: true,
});

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});

requestRemoteChannel(dataChannel.id);
```

In diesem Code-Snippet wird der Kanal mit `negotiated` auf `true` gesetzt erstellt, und eine Funktion namens `requestRemoteChannel()` wird verwendet, um die Verhandlung auszulösen, um einen Remote-Kanal mit derselben ID wie der lokale Kanal zu erstellen.

Durch diese Vorgehensweise können Sie Datenkanäle erstellen, bei denen jeder Peer unterschiedliche Eigenschaften verwendet, und Kanäle deklarativ durch die Verwendung des gleichen `id`-Werts erstellen.

## Pufferung

WebRTC-Datenkanäle unterstützen die Pufferung ausgehender Daten. Dies wird automatisch gehandhabt. Während es keine Möglichkeit gibt, die Größe des Puffers zu steuern, können Sie erfahren, wie viele Daten aktuell gepuffert sind, und Sie können wählen, ob Sie durch ein Ereignis benachrichtigt werden möchten, wenn der Puffer beginnt, mit wartenden Daten zurückzugehen. Dies erleichtert das Schreiben effizienter Routinen, die sicherstellen, dass immer Daten zum Senden bereit sind, ohne den Speicher übermäßig zu beanspruchen oder den Kanal komplett zu überlasten.

## Verständnis der Nachrichtenbegrenzung

Sie sollten die Nachrichtengrößen moderat klein halten. Während die meisten modernen Browser das Senden von Nachrichten von mindestens 256 Kilobyte unterstützen, gibt es Nachteile beim Senden großer Nachrichten, insbesondere wenn keine Nachrichtenverschachtelung verfügbar ist. Ohne Nachrichtenverschachtelung (wie in {{rfc("8260")}} definiert), kann das Senden einer großen Nachricht über einen Datenkanal {{Glossary("Head_of_line_blocking", "Head-of-Line-Blocking")}} verursachen, was wiederum die Latenz von Nachrichten auf anderen Datenkanälen negativ beeinflussen kann.

Die maximale Nachrichtengröße kann mit dem `max-message-size` SDP-Attribut verhandelt werden, wie in [RFC 8841](https://www.rfc-editor.org/info/rfc8841) definiert. Dieses Attribut ermöglicht es jedem Peer, die maximale Größe einer SCTP-Benutzernachricht zu deklarieren, die er zu empfangen bereit ist. Durch die Aushandlung dieses Wertes können Endpunkte vermeiden, Nachrichten zu senden, die größer sind, als der andere Peer verarbeiten kann. Wenn das `max-message-size`-Attribut nicht im SDP vorhanden ist, wird ein Standardwert von 64 Kilobyte angenommen. Ein Wert von 0 gibt an, dass der Endpunkt Nachrichten jeder Größe verarbeiten kann, nur durch den verfügbaren Speicher begrenzt.

## Sicherheit

Alle mit WebRTC übertragenen Daten sind verschlüsselt. Im Fall von `RTCDataChannel` wird die Verschlüsselung durch Datagram Transport Layer Security (DTLS) durchgeführt, das auf [Transport Layer Security](/de/docs/Web/Security/Defenses/Transport_Layer_Security) (TLS) basiert. Da TLS verwendet wird, um jede HTTPS-Verbindung zu sichern, sind alle Daten, die Sie über einen Datenkanal senden, genauso sicher wie alle anderen Daten, die vom Browser des Benutzers gesendet oder empfangen werden.

Grundsätzlich, da WebRTC eine Peer-to-Peer-Verbindung zwischen zwei User Agents ist, wird die Datenübertragung nie durch den Web- oder Anwendungsserver geleitet. Dadurch werden Möglichkeiten reduziert, die Daten abzufangen.
