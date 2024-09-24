---
title: Verwenden von WebRTC-Datenkanälen
slug: Web/API/WebRTC_API/Using_data_channels
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

In diesem Leitfaden untersuchen wir, wie man einem Peer-Connection einen Datenkanal hinzufügt, der dann verwendet werden kann, um beliebige Daten sicher auszutauschen; d. h. jegliche Art von Daten, die wir in jedem gewünschten Format senden möchten.

> [!NOTE]
> Da alle WebRTC-Komponenten Verschlüsselung verwenden müssen, werden alle Daten, die über einen `RTCDataChannel` übertragen werden, automatisch durch Datagram Transport Layer Security (**DTLS**) gesichert. Siehe [Sicherheit](#sicherheit) unten für weitere Informationen.

## Erstellen eines Datenkanals

Der zugrundeliegende Datentransport, der vom {{domxref("RTCDataChannel")}} verwendet wird, kann auf zwei Arten erstellt werden:

- Lassen Sie WebRTC den Transport erstellen und ihn dem entfernten Peer ankündigen (indem es ein {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}-Ereignis empfängt). Dies ist der einfache Weg und funktioniert für eine Vielzahl von Anwendungsfällen, ist aber möglicherweise nicht flexibel genug für Ihre Bedürfnisse.
- Schreiben Sie Ihren eigenen Code, um den Datentransport zu verhandeln, und signalisieren Sie dem anderen Peer, dass er sich mit dem neuen Kanal verbinden muss.

Schauen wir uns jeden dieser Fälle an, beginnend mit dem ersten, der am häufigsten vorkommt.

### Automatische Verhandlung

Oft können Sie die Peer-Connection die Verhandlung der {{domxref("RTCDataChannel")}}-Verbindung für Sie durchführen lassen. Dazu rufen Sie {{domxref("RTCPeerConnection.createDataChannel", "createDataChannel()")}} auf, ohne einen Wert für die Eigenschaft `negotiated` anzugeben oder die Eigenschaft mit dem Wert `false` zu spezifizieren. Dies führt automatisch dazu, dass die `RTCPeerConnection` die Verhandlungen für Sie durchführt, wodurch der entfernte Peer einen Datenkanal erstellt und die beiden über das Netzwerk verknüpft werden.

Das `RTCDataChannel`-Objekt wird von `createDataChannel()` sofort zurückgegeben; Sie können sehen, wann die Verbindung erfolgreich hergestellt wurde, indem Sie auf das {{domxref("RTCDataChannel.open_event", "open")}}-Ereignis achten, das an das `RTCDataChannel` gesendet wird.

```js
let dataChannel = pc.createDataChannel("MyApp Channel");

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});
```

### Manuelle Verhandlung

Um die Datenkanalverbindung manuell zu verhandeln, müssen Sie zuerst ein neues {{domxref("RTCDataChannel")}}-Objekt mit der Methode {{domxref("RTCPeerConnection.createDataChannel", "createDataChannel()")}} auf der {{domxref("RTCPeerConnection")}} erstellen und in den Optionen eine `negotiated`-Eigenschaft auf `true` setzen. Dies signalisiert der Peer-Connection, den Kanal nicht in Ihrem Namen zu verhandeln.

Verhandeln Sie dann die Verbindung außerhalb des Bandes, z. B. mit einem Webserver oder anderen Mitteln. Dieser Prozess sollte dem entfernten Peer signalisieren, dass er seinen eigenen `RTCDataChannel` mit der eigenschaft `negotiated` ebenfalls auf `true` setzen sollte, unter Verwendung der gleichen {{domxref("RTCDataChannel.id", "id")}}. Dies verknüpft die beiden Objekte über die `RTCPeerConnection`.

```js
let dataChannel = pc.createDataChannel("MyApp Channel", {
  negotiated: true,
});

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});

requestRemoteChannel(dataChannel.id);
```

In diesem Code-Snippet wird der Kanal mit `negotiated` auf `true` gesetzt erstellt und dann eine Funktion namens `requestRemoteChannel()` verwendet, um die Verhandlung auszulösen, um einen entfernten Kanal mit derselben ID wie dem lokalen Kanal zu erstellen.

Auf diese Weise können Sie Datenkanäle erstellen, bei denen jeder Peer unterschiedliche Eigenschaften verwendet, und Kanäle deklarativ erstellen, indem Sie denselben Wert für die `id` verwenden.

## Pufferung

WebRTC-Datenkanäle unterstützen die Pufferung von ausgehenden Daten. Dies wird automatisch gehandhabt. Zwar gibt es keine Möglichkeit, die Größe des Puffers zu steuern, aber Sie können erfahren, wie viele Daten derzeit gepuffert sind, und Sie können sich durch ein Ereignis benachrichtigen lassen, wenn der Puffer beginnt, mit in der Warteschlange stehenden Daten zu schrumpfen. Dies erleichtert das Schreiben effizienter Routinen, die sicherstellen, dass immer Daten zum Senden bereitstehen, ohne den Speicher zu überbeanspruchen oder den Kanal vollständig zu überlasten.

## Verständnis von Nachrichtengrößenbegrenzungen

Für alle Daten, die über ein Netzwerk übertragen werden, gelten Größenbeschränkungen. Grundsätzlich können die einzelnen Netzpakete nicht größer als ein bestimmter Wert sein (die genaue Zahl hängt vom Netzwerk und dem verwendeten Transportlayer ab). Auf Anwendungsebene - das heißt innerhalb der {{Glossary("user agent", "User-Agents")}}-Implementierung von WebRTC, auf der Ihr Code läuft - implementiert die WebRTC-Implementierung Funktionen zur Unterstützung von Nachrichten, die größer als das maximale Paketformat auf dem Transportlayer des Netzwerks sind.

Dies kann die Dinge komplizieren, da Sie nicht unbedingt wissen, welche Größenbeschränkungen für verschiedene User-Agents gelten und wie sie reagieren, wenn eine größere Nachricht gesendet oder empfangen wird. Selbst wenn User-Agents dieselbe zugrunde liegende Bibliothek zur Handhabung des Stream Control Transmission Protocol (SCTP) verwenden, können immer noch Unterschiede auftreten, da sie sich unterscheiden, wie die Bibliothek aufgerufen wird. Zum Beispiel verwenden sowohl Firefox als auch Google Chrome die Bibliothek [`usrsctp`](https://github.com/sctplab/usrsctp) zur Implementierung von SCTP, aber es gibt immer noch Situationen, in denen die Datenübertragung auf einem `RTCDataChannel` aufgrund von Unterschieden in der Aufrufweise der Bibliothek und der Reaktion auf deren Fehlermeldungen fehlschlagen kann.

Wenn zwei Benutzer mit Firefox über einen Datenkanal kommunizieren, ist die Nachrichtengrößenbeschränkung viel größer als wenn Firefox und Chrome kommunizieren, da Firefox eine inzwischen veraltete Technik zur Übertragung großer Nachrichten in mehreren SCTP-Nachrichten implementiert, die Chrome nicht verwendet. Chrome sieht stattdessen eine Reihe von Nachrichten, die es als vollständig ansieht und diese als mehrere Nachrichten an das empfangende `RTCDataChannel` ausgibt.

Nachrichten unter 16 KiB können ohne Bedenken gesendet werden, da alle großen User-Agents sie auf dieselbe Weise handhaben. Darüber hinaus wird es komplizierter.

### Bedenken bei großen Nachrichten

Derzeit ist es nicht praktikabel, `RTCDataChannel` für Nachrichten zu verwenden, die größer als 64 KiB sind (16 KiB, wenn Sie den plattformübergreifenden Austausch von Daten unterstützen möchten). Das Problem ergibt sich aus der Tatsache, dass SCTP - das Protokoll, das zum Senden und Empfangen von Daten auf einem `RTCDataChannel` verwendet wird - ursprünglich als Signalisierungsprotokoll entwickelt wurde. Es wurde erwartet, dass Nachrichten relativ klein sind. Die Unterstützung für Nachrichten, die größer als die [MTU](https://de.wikipedia.org/wiki/Maximum_transmission_unit) der Netzwerkschicht sind, wurde fast nachträglich hinzugefügt, falls Signalisierungsnachrichten größer sein müssen als die MTU. Diese Funktion erfordert, dass jedes Stück der Nachricht aufeinanderfolgende Sequenznummern hat, sodass sie nacheinander übermittelt werden müssen, ohne dass dazwischenstehende Daten eingefügt werden.

Dies wurde letztlich zu einem Problem. Im Laufe der Zeit begannen verschiedene Anwendungen (einschließlich derjenigen, die WebRTC implementieren), SCTP zu verwenden, um immer größere Nachrichten zu übertragen. Schließlich wurde erkannt, dass, wenn die Nachrichten zu groß werden, es möglich ist, dass die Übertragung einer großen Nachricht alle anderen Datenübertragungen auf diesem Datenkanal blockiert - einschließlich kritischer Signalisierungsnachrichten.

Dies wird zu einem Problem, wenn Browser die aktuelle Norm für die Unterstützung größerer Nachrichten - das End-of-Record (EOR)-Flag, das anzeigt, wann eine Nachricht die letzte einer Serie ist, die als einzelne Nutzlast behandelt werden sollte - ordnungsgemäß unterstützen. Dies ist in Firefox 57 implementiert, aber noch nicht in Chrome (siehe [Chromium Bug 7774](https://bugs.chromium.org/p/webrtc/issues/detail?id=7774)). Mit der EOR-Unterstützung können `RTCDataChannel`-Nutzlasten viel größer sein (offiziell bis zu 256 KiB, aber die Implementierung von Firefox begrenzt sie auf erstaunliche 1 GiB). Selbst bei 256 KiB ist dies groß genug, um spürbare Verzögerungen bei der Verarbeitung dringender Datenverkehr zu verursachen. Wenn Sie sogar noch größer werden, können die Verzögerungen unhaltbar werden, es sei denn, Sie sind sich Ihrer Betriebsbedingungen sicher.

Um dieses Problem zu lösen, wurde ein neues System von **Stream-Schedulern** (oft als "SCTP ndata-Spezifikation" bezeichnet) entwickelt, um das Hin- und Hersortieren von Nachrichten, die auf verschiedenen Streams gesendet werden, einschließlich der Streams, die zur Implementierung von WebRTC-Datenkanälen verwendet werden, zu ermöglichen. Dieser [Vorschlag](https://datatracker.ietf.org/doc/html/draft-ietf-tsvwg-sctp-ndata) befindet sich noch im IETF-Entwurfsstatus, aber sobald er implementiert ist, wird es möglich sein, Nachrichten im Wesentlichen ohne Größenbeschränkungen zu senden, da die SCTP-Schicht automatisch die zugrunde liegenden Untermeldungen so zusammenfügt, dass garantiert wird, dass die Daten jedes Kanals die Gelegenheit haben, durchzukommen.

Die Unterstützung von ndata durch Firefox befindet sich im Implementierungsprozess; siehe [Firefox Bug 1381145](https://bugzil.la/1381145), um die Verfügbarkeit für die allgemeine Nutzung zu verfolgen. Das Chrome-Team verfolgt die Implementierung der ndata-Unterstützung in [Chrome Bug 5696](https://bugs.chromium.org/p/webrtc/issues/detail?id=5696).

> [!NOTE]
> Ein Großteil der Informationen in diesem Abschnitt basiert teilweise auf dem Blog-Beitrag [Demystifying WebRTC's Data Channel Message Size Limitations](https://lgrahl.de/articles/demystifying-webrtc-dc-size-limit.html), geschrieben von Lennart Grahl. Er geht dort etwas mehr ins Detail, aber da Browser seitdem aktualisiert wurden, könnte einiges davon veraltet sein. Zudem wird es im Laufe der Zeit mehr veraltet sein, insbesondere wenn EOR und ndata-Unterstützung vollständig in die großen Browser integriert werden.

## Sicherheit

Alle Daten, die über WebRTC übertragen werden, sind verschlüsselt. Im Fall von `RTCDataChannel` wird die Verschlüsselung durch Datagram Transport Layer Security (DTLS) gewährleistet, die auf [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security) (TLS) basiert. Da TLS verwendet wird, um jede HTTPS-Verbindung zu sichern, sind alle Daten, die Sie über einen Datenkanal senden, genauso sicher wie jede andere von den Browsern des Nutzers gesendete oder empfangene Daten.

Grundsätzlich, da WebRTC eine Peer-to-Peer-Verbindung zwischen zwei User-Agents darstellt, durchlaufen die Daten nie den Web- oder Anwendungsserver. Diese Minimierung verringert die Möglichkeiten, dass die Daten abgefangen werden.
