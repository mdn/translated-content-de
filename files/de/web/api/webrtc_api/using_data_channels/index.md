---
title: Verwendung von WebRTC-Datenkanälen
slug: Web/API/WebRTC_API/Using_data_channels
l10n:
  sourceCommit: ed9ebd794add41de1f2e759502b73e8650afe56b
---

{{DefaultAPISidebar("WebRTC")}}

In diesem Leitfaden werden wir untersuchen, wie man einem Peer-Verbindung einen Datenkanal hinzufügt, der dann verwendet werden kann, um beliebige Daten sicher auszutauschen; also jegliche Art von Daten, in jedem Format, das wir wählen.

> [!NOTE]
> Da alle WebRTC-Komponenten Verschlüsselung nutzen müssen, werden alle Daten, die über einen `RTCDataChannel` übertragen werden, automatisch mit Datagram Transport Layer Security (**DTLS**) gesichert. Weitere Informationen finden Sie unter [Sicherheit](#sicherheit) unten.

## Erstellen eines Datenkanals

Der zugrundeliegende Datentransport, der vom [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwendet wird, kann auf zwei Arten erstellt werden:

- Lassen Sie WebRTC den Transport erstellen und automatisch dem entfernten Peer bekanntgeben (indem es ein [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignis empfängt). Dies ist der einfache Weg und funktioniert für eine Vielzahl von Anwendungsfällen, ist jedoch möglicherweise nicht flexibel genug für Ihre Bedürfnisse.
- Schreiben Sie Ihren eigenen Code, um den Datentransport zu verhandeln, und schreiben Sie Ihren eigenen Code, um dem anderen Peer zu signalisieren, dass er sich mit dem neuen Kanal verbinden muss.

Schauen wir uns jeden dieser Fälle an, beginnend mit dem ersten, der am häufigsten vorkommt.

### Automatische Verhandlung

Oft können Sie die Peer-Verbindung die Verhandlungen der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Verbindung für Sie übernehmen lassen. Dazu rufen Sie [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) auf, ohne einen Wert für die `negotiated`-Eigenschaft festzulegen oder die Eigenschaft mit einem Wert von `false` anzugeben. Dies löst automatisch aus, dass die `RTCPeerConnection` die Verhandlungen für Sie übernimmt, sodass der Remote-Peer einen Datenkanal erstellt und die beiden über das Netzwerk miteinander verbindet.

Das `RTCDataChannel`-Objekt wird sofort von `createDataChannel()` zurückgegeben; Sie können erkennen, wann die Verbindung erfolgreich hergestellt wurde, indem Sie auf das [`open`](/de/docs/Web/API/RTCDataChannel/open_event)-Ereignis achten, das an das `RTCDataChannel` gesendet wird.

```js
let dataChannel = pc.createDataChannel("MyApp Channel");

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});
```

### Manuelle Verhandlung

Um die Datenkanalverbindung manuell zu verhandeln, müssen Sie zunächst ein neues [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt erstellen, indem Sie die [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)-Methode an der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwenden und in den Optionen eine `negotiated`-Eigenschaft festlegen, die auf `true` gesetzt ist. Dies signalisiert der Peer-Verbindung, den Kanal nicht in Ihrem Namen zu verhandeln.

Dann verhandeln Sie die Verbindung außerhalb des Bandes, indem Sie einen Webserver oder andere Mittel verwenden. Dieser Prozess sollte dem Remote-Peer signalisieren, dass er seinen eigenen `RTCDataChannel` mit der `negotiated`-Eigenschaft ebenfalls auf `true` erstellt, mit demselben [`id`](/de/docs/Web/API/RTCDataChannel/id). Dies verknüpft die beiden Objekte über die `RTCPeerConnection`.

```js
let dataChannel = pc.createDataChannel("MyApp Channel", {
  negotiated: true,
});

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});

requestRemoteChannel(dataChannel.id);
```

In diesem Codeausschnitt wird der Kanal mit `negotiated` auf `true` erstellt, und dann wird eine Funktion namens `requestRemoteChannel()` verwendet, um die Verhandlung auszulösen und einen Remote-Kanal mit derselben ID wie der lokale Kanal zu erstellen.

Dies ermöglicht es Ihnen, Datenkanäle mit unterschiedlichen Eigenschaften für jeden Peer zu erstellen und Kanäle deklarativ zu erstellen, indem Sie denselben Wert für die `id` verwenden.

## Pufferung

WebRTC-Datenkanäle unterstützen die Pufferung ausgehender Daten. Dies wird automatisch gehandhabt. Während es keine Möglichkeit gibt, die Größe des Puffers zu kontrollieren, können Sie erfahren, wie viele Daten derzeit gepuffert sind, und Sie können entscheiden, benachrichtigt zu werden, wenn der Puffer beginnt, mit aufgereihten Daten zu schwinden. Dies erleichtert es, effiziente Routinen zu schreiben, die sicherstellen, dass immer Daten zum Senden bereitstehen, ohne den Speicher übermäßig zu nutzen oder den Kanal vollständig zu überlasten.

## Verständnis von Nachrichtenhöchstgrenzen

Für alle Daten, die über ein Netzwerk übertragen werden, gibt es Größenbeschränkungen. Auf fundamentaler Ebene können die einzelnen Netzwerkpakete nicht größer sein als ein bestimmter Wert (die genaue Zahl hängt vom Netzwerk und der verwendeten Transportschicht ab). Auf Anwendungsebene—das heißt innerhalb der {{Glossary("user_agent", "Benutzeragenten-")}} Implementierung von WebRTC, auf der Ihr Code läuft—implementiert die WebRTC-Implementierung Funktionen zur Unterstützung von Nachrichten, die größer sind als die maximale Paketgröße auf der Transportschicht des Netzwerks.

Dies kann die Dinge komplizieren, da Sie nicht unbedingt wissen, welche Größenbeschränkungen für verschiedene Benutzeragenten gelten und wie sie reagieren, wenn eine größere Nachricht gesendet oder empfangen wird. Auch wenn Benutzeragenten dieselbe zugrunde liegende Bibliothek zur Handhabung des Stream Control Transmission Protocol (SCTP) verwenden, kann es dennoch Unterschiede geben aufgrund der Art und Weise, wie die Bibliothek verwendet wird. Beispielsweise verwenden sowohl Firefox als auch Google Chrome die [`usrsctp`](https://github.com/sctplab/usrsctp)-Bibliothek zur Implementierung von SCTP, aber es gibt dennoch Situationen, in denen die Datenübertragung auf einem `RTCDataChannel` aufgrund von Unterschieden in der Aufrufweise der Bibliothek und der Reaktion auf von ihr zurückgegebene Fehler fehlschlagen kann.

Wenn zwei Benutzer Firefox verwenden und über einen Datenkanal kommunizieren, ist das Nachrichtenlimit viel größer, als wenn Firefox und Chrome kommunizieren, da Firefox eine inzwischen veraltete Technik zur Übertragung großer Nachrichten in mehreren SCTP-Nachrichten implementiert hat, die Chrome nicht unterstützt. Chrome hingegen sieht eine Reihe von Nachrichten, die es als vollständig ansieht, und liefert sie an den empfangenden `RTCDataChannel` als mehrere Nachrichten.

Nachrichten, die kleiner als 16 KiB sind, können ohne Bedenken gesendet werden, da alle großen Benutzeragenten sie auf die gleiche Weise behandeln. Darüber hinaus wird es komplizierter.

### Bedenken bei großen Nachrichten

Derzeit ist es nicht praktikabel, `RTCDataChannel` für Nachrichten zu verwenden, die größer als 64 KiB sind (16 KiB, wenn Sie die Unterstützung des plattformübergreifenden Datenaustauschs wünschen). Das Problem ergibt sich aus der Tatsache, dass SCTP—das Protokoll, das zum Senden und Empfangen von Daten auf einem `RTCDataChannel` verwendet wird—ursprünglich als Signalisierungsprotokoll konzipiert wurde. Es wurde erwartet, dass die Nachrichten relativ klein sind. Unterstützung für Nachrichten, die größer sind als die [MTU](https://de.wikipedia.org/wiki/Maximum_Transmission_Unit) der Netzwerkschicht, wurde fast als Nachgedanke hinzugefügt, falls Signalisierungsnachrichten größer als die MTU sein müssen. Diese Funktion erfordert, dass jedes Stück der Nachricht aufeinander folgende Sequenznummern hat, sodass sie nacheinander übertragen werden müssen, ohne dass andere Daten dazwischen eingefügt werden.

Dies wurde schließlich zu einem Problem. Im Laufe der Zeit begannen verschiedene Anwendungen (einschließlich derjenigen, die WebRTC implementieren), SCTP zu verwenden, um immer größere Nachrichten zu übertragen. Schließlich wurde erkannt, dass, wenn die Nachrichten zu groß werden, es möglich ist, dass die Übertragung einer großen Nachricht alle anderen Datenübertragungen auf diesem Datenkanal blockiert—einschließlich kritischer Signalisierungsnachrichten.

Dies wird zu einem Problem, wenn Browser die aktuelle Norm zur Unterstützung größerer Nachrichten vollständig unterstützen—das End-of-Record (EOR) Flag, das anzeigt, wann eine Nachricht die letzte in einer Reihe ist, die als einzige Nutzlast behandelt werden sollte. Dies ist in Firefox 57 implementiert, aber noch nicht in Chrome (siehe [Chromium Bug 7774](https://crbug.com/webrtc/7774)). Mit EOR-Unterstützung können `RTCDataChannel`-Nutzdaten viel größer sein (offiziell bis zu 256 KiB, aber die Implementierung von Firefox begrenzt sie auf erstaunliche 1 GiB). Selbst bei 256 KiB ist das groß genug, um spürbare Verzögerungen bei der Behandlung dringender Daten zu verursachen. Wenn Sie noch größer gehen, können die Verzögerungen unerträglich werden, es sei denn, Sie sind sich Ihrer betrieblichen Bedingungen sicher.

Um dieses Problem zu lösen, wurde ein neues System von **Stream-Scheduler** (häufig als "SCTP ndata Spezifikation" bezeichnet) entwickelt, das es ermöglicht, Nachrichten auf verschiedenen Streams zu verschachteln, einschließlich der Streams, die zur Implementierung von WebRTC-Datenkanälen verwendet werden. Dieser [Vorschlag](https://datatracker.ietf.org/doc/html/draft-ietf-tsvwg-sctp-ndata) befindet sich noch im IETF-Entwurf, aber sobald er implementiert ist, wird es möglich sein, Nachrichten praktisch ohne Größenbeschränkung zu senden, da die SCTP-Schicht die zugrunde liegenden Unternachrichten automatisch verschachteln wird, um sicherzustellen, dass die Daten jedes Kanals die Gelegenheit haben, durchzukommen.

Die Unterstützung für ndata in Firefox befindet sich im Prozess der Implementierung; siehe [Firefox Bug 1381145](https://bugzil.la/1381145), um zu verfolgen, wann es allgemein verfügbar wird. Das Chrome-Team verfolgt die Implementierung der ndata-Unterstützung in [Chrome Bug 5696](https://crbug.com/webrtc/5696).

> [!NOTE]
> Viele der Informationen in diesem Abschnitt basieren teilweise auf dem Blogpost [Demystifying WebRTC's Data Channel Message Size Limitations](https://lgrahl.de/articles/demystifying-webrtc-dc-size-limit.html), geschrieben von Lennart Grahl. Er geht dort etwas mehr ins Detail, aber da die Browser seitdem aktualisiert wurden, ist ein Teil davon möglicherweise veraltet. Hinzu kommt, dass es im Laufe der Zeit immer mehr veraltet sein wird, insbesondere wenn EOR und ndata vollständig in die großen Browser integriert sind.

## Sicherheit

Alle Daten, die mit WebRTC übertragen werden, sind verschlüsselt. Im Fall von `RTCDataChannel` verwendet die Verschlüsselung Datagram Transport Layer Security (DTLS), die auf [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security) (TLS) basiert. Da TLS verwendet wird, um jede HTTPS-Verbindung zu sichern, sind alle Daten, die Sie über einen Datenkanal senden, genauso sicher wie alle anderen Daten, die vom Browser des Benutzers gesendet oder empfangen werden.

Grundsätzlich, da WebRTC eine Peer-to-Peer-Verbindung zwischen zwei Benutzeragenten ist, passieren die Daten niemals den Web- oder Applikationsserver. Dies reduziert die Möglichkeiten, dass die Daten abgefangen werden.
