---
title: Verwenden von WebRTC-Datenkanälen
slug: Web/API/WebRTC_API/Using_data_channels
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

In diesem Leitfaden werden wir untersuchen, wie man einem Peer-Verbindung einen Datenkanal hinzufügt, der dann zum sicheren Austausch beliebiger Daten verwendet werden kann; das heißt, jede Art von Daten, die wir wünschen, in jedem gewünschten Format.

> [!NOTE]
> Da alle WebRTC-Komponenten Verschlüsselung verwenden müssen, werden alle Daten, die über einen `RTCDataChannel` übertragen werden, automatisch mit Datagram Transport Layer Security (**DTLS**) gesichert. Weitere Informationen finden Sie im Abschnitt [Sicherheit](#sicherheit) unten.

## Erstellen eines Datenkanals

Der zugrunde liegende Datentransport, der vom [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwendet wird, kann auf zwei Arten erstellt werden:

- Lassen Sie WebRTC den Transport erstellen und dem entfernten Peer für Sie ankündigen (indem ein [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignis ausgelöst wird). Dies ist der einfache Weg und funktioniert für eine Vielzahl von Anwendungsfällen, bietet jedoch möglicherweise nicht genügend Flexibilität für Ihre Bedürfnisse.
- Schreiben Sie Ihren eigenen Code, um den Datentransport zu verhandeln und signalisieren Sie dem anderen Peer über eigenen Code, dass er sich mit dem neuen Kanal verbinden muss.

Lassen Sie uns jeden dieser Fälle betrachten, beginnend mit dem ersten, der am häufigsten vorkommt.

### Automatische Verhandlung

Oft können Sie der Peer-Verbindung erlauben, die Verhandlung der Verbindung für den [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) für Sie zu übernehmen. Dafür rufen Sie [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) auf, ohne einen Wert für die `negotiated`-Eigenschaft anzugeben, oder indem Sie die Eigenschaft mit einem Wert von `false` angeben. Dadurch wird der `RTCPeerConnection` automatisch ausgelöst, die Verhandlungen für Sie zu übernehmen und den entfernten Peer dazu zu bringen, einen Datenkanal zu erstellen und die beiden über das Netzwerk zu verbinden.

Das `RTCDataChannel`-Objekt wird sofort von `createDataChannel()` zurückgegeben; Sie können erkennen, wann die Verbindung erfolgreich hergestellt wurde, indem Sie auf das [`open`](/de/docs/Web/API/RTCDataChannel/open_event)-Ereignis warten, das an das `RTCDataChannel` gesendet wird.

```js
let dataChannel = pc.createDataChannel("MyApp Channel");

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});
```

### Manuelle Verhandlung

Um die Datenkanalverbindung manuell zu verhandeln, müssen Sie zuerst ein neues [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt unter Verwendung der Methode [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) auf dem [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen, wobei Sie in den Optionen eine `negotiated`-Eigenschaft festlegen, die auf `true` gesetzt ist. Dies signalisiert der Peer-Verbindung, nicht zu versuchen, den Kanal in Ihrem Namen zu verhandeln.

Verhandeln Sie dann die Verbindung außerhalb des Bandes, zum Beispiel über einen Webserver oder andere Mittel. Dieser Prozess sollte dem entfernten Peer signalisieren, dass er sein eigenes `RTCDataChannel` mit der `negotiated`-Eigenschaft ebenfalls auf `true` setzen soll, und denselben [`id`](/de/docs/Web/API/RTCDataChannel/id) verwenden. Dies verbindet die beiden Objekte über die `RTCPeerConnection`.

```js
let dataChannel = pc.createDataChannel("MyApp Channel", {
  negotiated: true,
});

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});

requestRemoteChannel(dataChannel.id);
```

In diesem Codebeispiel wird der Kanal mit `negotiated` auf `true` gesetzt, dann wird eine Funktion namens `requestRemoteChannel()` verwendet, um die Verhandlung auszulösen, um einen entfernten Kanal mit derselben ID wie der lokale Kanal zu erstellen.

Auf diese Weise können Sie Datenkanäle erstellen, bei denen jeder Peer unterschiedliche Eigenschaften verwendet, und Kanäle deklarativ erstellen, indem Sie denselben Wert für `id` verwenden.

## Pufferung

WebRTC-Datenkanäle unterstützen die Pufferung von ausgehenden Daten. Dies wird automatisch gehandhabt. Während es keine Möglichkeit gibt, die Größe des Puffers zu steuern, können Sie lernen, wie viel Daten derzeit gepuffert sind, und Sie können wählen, benachrichtigt zu werden, wenn der Puffer langsam an vorgereiteten Daten abnimmt. Dadurch können Sie effiziente Routinen schreiben, die sicherstellen, dass immer Daten gesendet werden können, ohne zu viel Speicher zu verwenden oder den Kanal vollständig zu überlasten.

## Grenzen für die Nachrichtenlänge verstehen

Für alle Daten, die über ein Netzwerk übertragen werden, gibt es Größenbeschränkungen. Auf fundamentaler Ebene können die einzelnen Netzwerkpakete nicht größer als ein bestimmter Wert sein (die genaue Zahl hängt vom Netzwerk und der verwendeten Transportschicht ab). Auf Anwendungsebene - das heißt innerhalb der Implementierung des [Benutzeragenten](/de/docs/Glossary/user_agent) für WebRTC, auf dem Ihr Code läuft - implementiert die WebRTC-Implementierung Funktionen, um Nachrichten zu unterstützen, die größer sind als die maximale Paketgröße der Netzzstransportschicht.

Dies kann die Dinge komplizieren, da Sie nicht unbedingt wissen, welche Größenbeschränkungen für verschiedene Benutzeragenten gelten und wie sie reagieren, wenn eine größere Nachricht gesendet oder empfangen wird. Selbst wenn Benutzeragenten dieselbe Basisbibliothek zur Bearbeitung des Stream Control Transmission Protocol (SCTP) verwenden, kann es dennoch Unterschiede aufgrund der Art und Weise, wie die Bibliothek verwendet wird, geben. Beispielsweise verwenden sowohl Firefox als auch Google Chrome die Bibliothek [`usrsctp`](https://github.com/sctplab/usrsctp) zur Implementierung von SCTP, aber es gibt dennoch Situationen, in denen die Datenübertragung in einem `RTCDataChannel` aufgrund von Unterschieden in der Art und Weise, wie sie die Bibliothek aufrufen und auf Fehler reagieren, die sie zurückgibt, fehlschlagen kann.

Wenn zwei Benutzer, die Firefox ausführen, über einen Datenkanal kommunizieren, ist das Größenlimit für Nachrichten viel größer als wenn Firefox und Chrome kommunizieren, denn Firefox implementiert eine inzwischen veraltete Technik zum Senden großer Nachrichten in mehreren SCTP-Nachrichten, die Chrome nicht hat. Chrome wird stattdessen eine Serie von Nachrichten sehen, die es als komplett betrachtet, und sie als mehrere Nachrichten an das empfangende `RTCDataChannel` liefern.

Nachrichten kleiner als 16 KiB können bedenkenlos gesendet werden, da alle großen Benutzeragenten sie gleich behandeln. Darüber hinaus wird es komplizierter.

### Bedenken bei großen Nachrichten

Derzeit ist es nicht praktisch, `RTCDataChannel` für Nachrichten größer als 64 KiB zu verwenden (16 KiB, wenn Sie einen plattformübergreifenden Austausch von Daten unterstützen möchten). Das Problem entsteht dadurch, dass SCTP - das Protokoll, das zum Senden und Empfangen von Daten auf einem `RTCDataChannel` verwendet wird - ursprünglich für die Verwendung als Signalisierungsprotokoll konzipiert wurde. Es wurde damit gerechnet, dass die Nachrichten relativ klein sind. Die Unterstützung für Nachrichten, die größer als die [MTU](https://en.wikipedia.org/wiki/Maximum_transmission_unit) der Netzwerkschicht sind, wurde fast als Nachgedanke hinzugefügt, falls Signalisierungsnachrichten größer als die MTU sein müssen. Dieses Feature erfordert, dass jedes Stück der Nachricht fortlaufende Sequenznummern hat, sodass sie nacheinander ohne andere Daten, die dazwischen übermittelt werden, gesendet werden müssen.

Dies wurde schließlich zu einem Problem. Im Laufe der Zeit begannen verschiedene Anwendungen (einschließlich solcher, die WebRTC implementieren) SCTP für die Übertragung größerer und größerer Nachrichten zu verwenden. Schließlich wurde erkannt, dass, wenn die Nachrichten zu groß werden, die Übertragung einer großen Nachricht alle anderen Datenübertragungen auf diesem Datenkanal blockieren kann - einschließlich kritischer Signalisierungsnachrichten.

Dies wird ein Problem, wenn Browser die aktuelle Norm zur Unterstützung größerer Nachrichten ordnungsgemäß unterstützen - das End-of-Record (EOR)-Flag, das angibt, wann eine Nachricht die letzte in einer Serie ist, die als einzelne Nutzlast behandelt werden sollte. Dies ist in Firefox 57 implementiert, aber in Chrome noch nicht implementiert (siehe [Chromium Fehler 7774](https://bugs.chromium.org/p/webrtc/issues/detail?id=7774)). Mit eingeführter EOR-Unterstützung können `RTCDataChannel`-Nutzlasten viel größer sein (offiziell bis zu 256 KiB, aber die Implementierung von Firefox begrenzt sie auf beeindruckende 1 GiB). Selbst bei 256 KiB ist das groß genug, um merkliche Verzögerungen bei der Bearbeitung dringend Daten zu verursachen. Wenn Sie noch größer gehen, können die Verzögerungen unerträglich werden, es sei denn, Sie sind sich Ihrer Betriebsbedingungen sicher.

Um dieses Problem zu lösen, wurde ein neues System von **Stream-Schedulern** (häufig als "SCTP ndata Spezifikation" bezeichnet) entwickelt, um es möglich zu machen, Nachrichten, die auf verschiedenen Streams gesendet werden, einschließlich Streams, die zum Implementieren von WebRTC-Datenkanälen verwendet werden, zu verflechten. Dieser [Vorschlag](https://datatracker.ietf.org/doc/html/draft-ietf-tsvwg-sctp-ndata) befindet sich noch im Entwurfsstadium der IETF, aber einmal implementiert, wird es möglich sein, Nachrichten mit im Wesentlichen keinen Größenbeschränkungen zu senden, da die SCTP-Schicht die zugrunde liegenden Teilnachrichten automatisch verflechten wird, um sicherzustellen, dass die Daten jedes Kanals die Gelegenheit haben, durchzukommen.

Die Unterstützung von Firefox für ndata ist im Prozess der Implementierung; siehe [Firefox Bug 1381145](https://bugzil.la/1381145), um zu verfolgen, wann es für den allgemeinen Gebrauch verfügbar wird. Das Chrome-Team verfolgt ihre Implementierung der ndata-Unterstützung in [Chrome Bug 5696](https://bugs.chromium.org/p/webrtc/issues/detail?id=5696).

> [!NOTE]
> Ein Großteil der Informationen in diesem Abschnitt basiert teilweise auf dem Blogbeitrag [Demystifying WebRTC's Data Channel Message Size Limitations](https://lgrahl.de/articles/demystifying-webrtc-dc-size-limit.html), geschrieben von Lennart Grahl. Er geht dort etwas detaillierter ein, aber da seitdem Browser aktualisiert wurden, könnte einiges davon veraltet sein. Zusätzlich wird es im Laufe der Zeit immer mehr, besonders wenn EOR- und ndata-Unterstützung vollständig in den großen Browsern integriert sind.

## Sicherheit

Alle Daten, die über WebRTC übertragen werden, sind verschlüsselt. Im Falle von `RTCDataChannel` wird die Verschlüsselung Datagram Transport Layer Security (DTLS) verwendet, die auf [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security) (TLS) basiert. Da TLS verwendet wird, um jede HTTPS-Verbindung zu sichern, sind alle Daten, die Sie über einen Datenkanal senden, so sicher wie alle anderen, vom Browser des Benutzers gesendeten oder empfangenen Daten.

Grundsätzlich, da WebRTC eine Peer-to-Peer-Verbindung zwischen zwei Benutzeragenten ist, passieren die Daten niemals den Web- oder Anwendungsserver. Dies reduziert die Möglichkeiten, die Daten abzufangen.
