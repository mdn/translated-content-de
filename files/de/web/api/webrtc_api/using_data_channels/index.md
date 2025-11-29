---
title: Verwenden von WebRTC-Datenkanälen
slug: Web/API/WebRTC_API/Using_data_channels
l10n:
  sourceCommit: 7664b10d7202ead83cbe54ef2283253fc012f95f
---

{{DefaultAPISidebar("WebRTC")}}

In diesem Leitfaden werden wir untersuchen, wie man einen Datenkanal zu einer Peer-Verbindung hinzufügt, der dann zum sicheren Austausch beliebiger Daten verwendet werden kann, also jeder Art von Daten, die wir möchten, in jedem Format, das wir wählen.

> [!NOTE]
> Da alle WebRTC-Komponenten verschlüsselt werden müssen, sind alle auf einem `RTCDataChannel` übertragenen Daten automatisch durch Datagram Transport Layer Security (**DTLS**) gesichert. Siehe [Sicherheit](#sicherheit) unten für weitere Informationen.

## Erstellen eines Datenkanals

Der zugrundeliegende Datentransport, der von dem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwendet wird, kann auf zwei Arten erstellt werden:

- Lassen Sie WebRTC den Transport erstellen und dem entfernten Peer für Sie ankündigen (indem es ein [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event) Ereignis empfängt). Dies ist der einfache Weg und funktioniert für eine Vielzahl von Anwendungsfällen, ist jedoch möglicherweise nicht flexibel genug für Ihre Anforderungen.
- Schreiben Sie Ihren eigenen Code, um den Datentransport auszuhandeln, und schreiben Sie Ihren eigenen Code, um das andere Peer darauf hinzuweisen, dass es sich mit dem neuen Kanal verbinden muss.

Schauen wir uns jede dieser Fälle an, beginnend mit dem ersten, der am häufigsten vorkommt.

### Automatische Aushandlung

Oft können Sie die Peer-Verbindung die Aushandlung der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Verbindung für Sie übernehmen lassen. Dazu rufen Sie [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) auf, ohne einen Wert für die `negotiated`-Eigenschaft anzugeben, oder indem Sie die Eigenschaft mit einem Wert von `false` angeben. Dies löst automatisch die `RTCPeerConnection` aus, die Verhandlungen für Sie zu übernehmen, wodurch der entfernte Peer einen Datenkanal erstellt und die beiden über das Netzwerk verbindet.

Das `RTCDataChannel`-Objekt wird sofort von `createDataChannel()` zurückgegeben; Sie können erkennen, wann die Verbindung erfolgreich hergestellt wurde, indem Sie auf das [`open`](/de/docs/Web/API/RTCDataChannel/open_event) Ereignis achten, das an das `RTCDataChannel` gesendet wird.

```js
let dataChannel = pc.createDataChannel("MyApp Channel");

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});
```

### Manuelle Aushandlung

Um die Datenkanalverbindung manuell auszuhandeln, müssen Sie zuerst ein neues [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Objekt mit der [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) Methode auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen, wobei in den Optionen eine `negotiated`-Eigenschaft auf `true` gesetzt ist. Dies signalisiert der Peer-Verbindung, dass sie nicht versuchen soll, den Kanal in Ihrem Auftrag auszuhandeln.

Dann verhandeln Sie die Verbindung extern, zum Beispiel über einen Webserver oder andere Mittel. Dieser Prozess sollte dem entfernten Peer signalisieren, dass es seinen eigenen `RTCDataChannel` mit ebenfalls auf `true` gesetzter `negotiated`-Eigenschaft und mit derselben [`id`](/de/docs/Web/API/RTCDataChannel/id) erstellen soll. Dies wird die beiden Objekte über die `RTCPeerConnection` verbinden.

```js
let dataChannel = pc.createDataChannel("MyApp Channel", {
  negotiated: true,
});

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});

requestRemoteChannel(dataChannel.id);
```

In diesem Codebeispiel wird der Kanal mit `negotiated` auf `true` gesetzt erstellt, dann wird eine Funktion namens `requestRemoteChannel()` verwendet, um die Aushandlung auszulösen, um einen entfernten Kanal mit derselben ID wie der lokale Kanal zu erstellen.

Auf diese Weise können Sie Datenkanäle mit jedem Peer erstellen, die unterschiedliche Eigenschaften verwenden, und Kanäle deklarativ erstellen, indem Sie denselben Wert für `id` verwenden.

## Pufferung

WebRTC-Datenkanäle unterstützen das Puffern von ausgehenden Daten. Dies wird automatisch gehandhabt. Während es keine Möglichkeit gibt, die Größe des Puffers zu steuern, können Sie erfahren, wie viele Daten derzeit gepuffert sind, und Sie können wählen, dass Sie von einem Ereignis benachrichtigt werden, wenn der Puffer beginnt, an angestauten Daten abzulaufen. Dies macht es einfach, effiziente Routinen zu schreiben, die sicherstellen, dass immer Daten bereit zum Senden sind, ohne den Speicher übermäßig zu beanspruchen oder den Kanal vollständig zu überlasten.

## Verstehen der Nachrichtenbegrenzungen

Sie sollten die Nachrichtengrößen moderat klein halten. Während die meisten modernen Browser unterstützen, Nachrichten von mindestens 256 Kilobyte zu senden, gibt es Nachteile beim Senden großer Nachrichten, insbesondere wenn Nachrichtenverschränkung nicht verfügbar ist. Ohne Nachrichtenverschränkung (wie definiert in {{rfc("8260")}}) kann das Senden einer großen Nachricht über einen Datenkanal {{Glossary("Head_of_line_blocking", "Head-of-Line-Blocking")}} verursachen, was wiederum die Latenz von Nachrichten auf anderen Datenkanälen negativ beeinflussen kann.

Die maximale Nachrichtengröße kann mit dem SDP-Attribut `max-message-size` ausgehandelt werden, wie in [RFC 8841](https://www.rfc-editor.org/rfc/rfc8841.html) definiert. Dieses Attribut erlaubt es jedem Peer, die maximale Größe einer SCTP-Benutzernachricht zu deklarieren, die es bereit ist zu empfangen. Durch die Aushandlung dieses Wertes können Endpunkte vermeiden, Nachrichten zu senden, die größer sind, als der andere Peer verarbeiten kann. Wenn das `max-message-size` Attribut nicht im SDP vorhanden ist, wird ein Standardwert von 64 Kilobytes angenommen. Ein Wert von 0 zeigt an, dass der Endpunkt Nachrichten beliebiger Größe verarbeiten kann, nur beschränkt durch verfügbaren Speicher.

## Sicherheit

Alle mit WebRTC übertragenen Daten sind verschlüsselt. Im Fall von `RTCDataChannel` wird die Verschlüsselung durch Datagram Transport Layer Security (DTLS) durchgeführt, das auf [Transport Layer Security](/de/docs/Web/Security/Defenses/Transport_Layer_Security) (TLS) basiert. Da TLS verwendet wird, um jede HTTPS-Verbindung zu sichern, sind alle Daten, die Sie über einen Datenkanal senden, genauso sicher wie alle anderen Daten, die vom Browser des Nutzers gesendet oder empfangen werden.

Grundlegender ist, dass WebRTC eine Peer-to-Peer-Verbindung zwischen zwei Benutzeragenten ist, sodass die Daten niemals über den Web- oder Anwendungsserver geleitet werden. Dies verringert die Möglichkeiten, dass die Daten abgefangen werden.
