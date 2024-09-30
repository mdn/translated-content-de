---
title: Verwendung von WebRTC-Datenkanälen
slug: Web/API/WebRTC_API/Using_data_channels
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

In diesem Leitfaden werden wir untersuchen, wie man einen Datenkanal zu einer Peer-Verbindung hinzufügt, der dann verwendet werden kann, um beliebige Daten sicher auszutauschen; das heißt, jede Art von Daten, in jedem beliebigen Format.

> [!NOTE]
> Da alle WebRTC-Komponenten verschlüsselt werden müssen, werden alle auf einem `RTCDataChannel` übertragenen Daten automatisch mit Datagram Transport Layer Security (**DTLS**) gesichert. Weitere Informationen finden Sie unter [Sicherheit](#sicherheit) unten.

## Erstellen eines Datenkanals

Der zugrunde liegende Datentransport, der vom [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwendet wird, kann auf zwei Arten erstellt werden:

- Lassen Sie WebRTC den Transport erstellen und es für Sie dem entfernten Peer ankündigen (indem es ein [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignis empfangen lässt). Dies ist der einfache Weg und funktioniert für eine Vielzahl von Anwendungsfällen, ist jedoch möglicherweise nicht flexibel genug für Ihre Bedürfnisse.
- Schreiben Sie Ihren eigenen Code, um den Datentransport auszuhandeln, und schreiben Sie Ihren eigenen Code, um dem anderen Peer zu signalisieren, dass er sich mit dem neuen Kanal verbinden muss.

Schauen wir uns jeden dieser Fälle genauer an, beginnend mit dem ersten, dem am häufigsten verwendeten.

### Automatische Aushandlung

Oft können Sie die Peer-Verbindung die Aushandlung der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Verbindung für Sie erledigen lassen. Dazu rufen Sie [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) auf, ohne einen Wert für die `negotiated`-Eigenschaft anzugeben, oder legen Sie die Eigenschaft auf `false` fest. Dies wird automatisch das `RTCPeerConnection` dazu bringen, die Aushandlungen für Sie zu übernehmen, wodurch der entfernte Peer einen Datenkanal erstellt und die beiden über das Netzwerk miteinander verbindet.

Das `RTCDataChannel`-Objekt wird sofort von `createDataChannel()` zurückgegeben; Sie können erkennen, wann die Verbindung erfolgreich hergestellt wurde, indem Sie auf das [`open`](/de/docs/Web/API/RTCDataChannel/open_event)-Ereignis achten, das an das `RTCDataChannel` gesendet wird.

```js
let dataChannel = pc.createDataChannel("MyApp Channel");

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});
```

### Manuelle Aushandlung

Um die Datenkanalverbindung manuell auszuhandeln, müssen Sie zunächst ein neues [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt erstellen, indem Sie die [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)-Methode auf dem [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwenden und in den Optionen eine `negotiated`-Eigenschaft mit dem Wert `true` angeben. Das signalisiert der Peer-Verbindung, den Kanal nicht in Ihrem Namen auszuhandeln.

Dann verhandeln Sie die Verbindung außerhalb des Bandes, mithilfe eines Webservers oder anderer Mittel. Dieser Prozess sollte dem entfernten Peer signalisieren, dass er seinen eigenen `RTCDataChannel` mit der `negotiated`-Eigenschaft ebenfalls auf `true` setzen sollte, unter Verwendung derselben [`id`](/de/docs/Web/API/RTCDataChannel/id). Dies wird die beiden Objekte über das `RTCPeerConnection`-Netzwerk miteinander verbinden.

```js
let dataChannel = pc.createDataChannel("MyApp Channel", {
  negotiated: true,
});

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});

requestRemoteChannel(dataChannel.id);
```

In diesem Code-Schnipsel wird der Kanal mit `negotiated` auf `true` erstellt, dann wird eine Funktion namens `requestRemoteChannel()` verwendet, um die Aushandlung auszulösen, um einen entfernten Kanal mit derselben ID wie der lokale Kanal zu erstellen.

Dies ermöglicht es Ihnen, Datenkanäle mit jedem Peer unter Verwendung unterschiedlicher Eigenschaften zu erstellen und Kanäle deklarativ zu erstellen, indem Sie denselben Wert für `id` verwenden.

## Pufferung

WebRTC-Datenkanäle unterstützen die Pufferung von ausgehenden Daten. Dies wird automatisch gehandhabt. Obwohl es keine Möglichkeit gibt, die Größe des Puffers zu steuern, können Sie erfahren, wie viele Daten derzeit gepuffert sind, und Sie können wählen, durch ein Ereignis benachrichtigt zu werden, wenn der Puffer beginnt, wenig wartende Daten zu haben. Dies erleichtert das Schreiben effizienter Routinen, die sicherstellen, dass immer Daten bereit sind, gesendet zu werden, ohne den Speicher übermäßig zu nutzen oder den Kanal vollständig zu überlasten.

## Verständnis der Größenbeschränkungen für Nachrichten

Für alle Daten, die über ein Netzwerk übertragen werden, gibt es Größenbeschränkungen. Auf einer grundlegenden Ebene können die einzelnen Netzwerpakete nicht größer als ein bestimmter Wert sein (die genaue Zahl hängt vom Netzwerk und der verwendeten Transportschicht ab). Auf Anwendungsebene - das heißt, innerhalb der [User Agents](/de/docs/Glossary/user_agent)-Implementierung von WebRTC, auf der Ihr Code läuft - implementiert die WebRTC-Implementierung Funktionen, um Nachrichten zu unterstützen, die größer sind als die maximale Paketgröße auf der Transportschicht des Netzwerks.

Dies kann die Dinge verkomplizieren, da Sie nicht unbedingt wissen, welche Größenbeschränkungen es für verschiedene User Agents gibt und wie sie reagieren, wenn eine größere Nachricht gesendet oder empfangen wird. Selbst wenn User Agents dieselbe zugrunde liegende Bibliothek zur Handhabung von Stream Control Transmission Protocol (SCTP)-Daten verwenden, kann es dennoch Unterschiede geben, wie die Bibliothek verwendet wird. Zum Beispiel verwenden sowohl Firefox als auch Google Chrome die [`usrsctp`](https://github.com/sctplab/usrsctp)-Bibliothek zur Implementierung von SCTP, aber es gibt dennoch Situationen, in denen der Datentransfer auf einem `RTCDataChannel` aufgrund von Unterschieden darin, wie sie die Bibliothek aufrufen und auf Fehler reagieren, die sie zurückgibt, scheitern kann.

Wenn zwei Benutzer, die Firefox ausführen, auf einem Datenkanal kommunizieren, ist das Größtenlimit der Nachrichten viel größer als wenn Firefox und Chrome kommunizieren, da Firefox eine mittlerweile veraltete Technik implementiert, um große Nachrichten in mehreren SCTP-Nachrichten zu senden, was Chrome nicht tut. Chrome sieht stattdessen eine Reihe von Nachrichten, die es für vollständig hält, und liefert sie an das empfangende `RTCDataChannel` als mehrere Nachrichten.

Nachrichten kleiner als 16 KiB können ohne weiteres gesendet werden, da alle großen User Agents sie auf die gleiche Weise behandeln. Darüber hinaus werden die Dinge komplizierter.

### Bedenken bei großen Nachrichten

Derzeit ist es nicht praktikabel, `RTCDataChannel` für Nachrichten zu verwenden, die größer als 64 KiB (16 KiB, wenn Sie einen browserübergreifenden Datenaustausch unterstützen möchten) sind. Das Problem ergibt sich aus der Tatsache, dass SCTP - das Protokoll zum Senden und Empfangen von Daten auf einem `RTCDataChannel` - ursprünglich als Signalisierungsprotokoll konzipiert wurde. Es wurde erwartet, dass Nachrichten relativ klein wären. Die Unterstützung für Nachrichten größer als das Netzwerk-Layer-MTU (https://en.wikipedia.org/wiki/Maximum_transmission_unit) wurde fast als Nachgedanke hinzugefügt, falls Signalisierungsnachrichten größer als das MTU sein müssten. Diese Funktion erfordert, dass jedes Stück der Nachricht aufeinanderfolgende Sequenznummern hat, sodass sie nacheinander gesendet werden müssen, ohne dass andere Daten dazwischen eingefügt werden.

Dies wurde schließlich zu einem Problem. Mit der Zeit begannen verschiedene Anwendungen (einschließlich solcher, die WebRTC implementieren), SCTP zu verwenden, um immer größere Nachrichten zu übertragen. Schließlich wurde erkannt, dass, wenn die Nachrichten zu groß werden, es möglich ist, dass die Übertragung einer großen Nachricht alle anderen Datenübertragungen auf diesem Datenkanal blockiert - einschließlich kritischer Signalisierungsnachrichten.

Dieses Problem wird auftreten, wenn Browser die aktuelle Norm zur Unterstützung größerer Nachrichten ordnungsgemäß unterstützen - die End-of-Record (EOR)-Kennzeichnung, die anzeigt, wann eine Nachricht die letzte in einer Reihe ist, die als einzelne Nutzlast behandelt werden sollte. Dies ist in Firefox 57 implementiert, aber noch nicht in Chrome (siehe [Chromium Bug 7774](https://bugs.chromium.org/p/webrtc/issues/detail?id=7774)). Mit EOR-Unterstützung können `RTCDataChannel`-Nutzlasten viel größer sein (offiziell bis zu 256 KiB, aber die Firefox-Implementierung begrenzt sie auf gewaltige 1 GiB). Selbst bei 256 KiB ist das groß genug, um spürbare Verzögerungen bei der Bearbeitung dringender Daten zu verursachen. Wenn Sie noch größer werden, können die Verzögerungen unerträglich werden, es sei denn, Sie sind sich Ihrer Betriebsbedingungen sicher.

Um dieses Problem zu lösen, wurde ein neues System von **Streamscheduler** entworfen (üblicherweise als "SCTP ndata specification" bezeichnet), um es möglich zu machen, Nachrichten zu verflechten, die auf verschiedenen Streams gesendet werden, einschließlich der Streams, die zur Implementierung von WebRTC-Datenkanälen verwendet werden. Dieser [Vorschlag](https://datatracker.ietf.org/doc/html/draft-ietf-tsvwg-sctp-ndata) befindet sich noch im IETF-Entwurfsform, aber sobald er implementiert ist, wird es möglich sein, Nachrichten mit im Wesentlichen keinen Größenbeschränkungen zu senden, da die SCTP-Schicht die zugrunde liegenden Unternachrichten automatisch verflichtet, um sicherzustellen, dass die Daten jedes Kanals die Möglichkeit haben, durchzukommen.

Die Unterstützung von ndata in Firefox befindet sich im Implementierungsprozess; siehe [Firefox bug 1381145](https://bugzil.la/1381145), um dessen Verfügbarkeit für die allgemeine Nutzung zu verfolgen. Das Chrome-Team verfolgt die Implementierung ihrer ndata-Unterstützung in [Chrome Bug 5696](https://bugs.chromium.org/p/webrtc/issues/detail?id=5696).

> [!NOTE]
> Ein großer Teil der Informationen in diesem Abschnitt basiert teilweise auf dem Blog-Beitrag [Demystifying WebRTC's Data Channel Message Size Limitations](https://lgrahl.de/articles/demystifying-webrtc-dc-size-limit.html), geschrieben von Lennart Grahl. Er geht dort etwas weiter ins Detail, aber da die Browser mittlerweile aktualisiert wurden, könnte ein Teil davon veraltet sein. Außerdem wird es mit der Zeit mehr veralten, insbesondere sobald EOR- und ndata-Unterstützung vollständig in den großen Browsern integriert ist.

## Sicherheit

Alle mit WebRTC übertragenen Daten werden verschlüsselt. Im Fall von `RTCDataChannel` wird die Verschlüsselung mittels Datagram Transport Layer Security (DTLS) durchgeführt, das auf [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security) (TLS) basiert. Da TLS zur Sicherung jeder HTTPS-Verbindung verwendet wird, sind alle Daten, die Sie über einen Datenkanal senden, genauso sicher wie alle anderen Daten, die von den Browsern der Benutzer gesendet oder empfangen werden.

Grundlegender ist noch, dass WebRTC eine Peer-to-Peer-Verbindung zwischen zwei User Agents ist, sodass die Daten nicht über den Web- oder Anwendungsserver geleitet werden. Dies reduziert die Möglichkeiten, dass die Daten abgefangen werden.
