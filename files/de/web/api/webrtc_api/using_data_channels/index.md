---
title: Verwendung von WebRTC-Datenkanälen
slug: Web/API/WebRTC_API/Using_data_channels
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{DefaultAPISidebar("WebRTC")}}

In diesem Leitfaden werden wir untersuchen, wie man einer Peer-Verbindung einen Datenkanal hinzufügt, der dann zum sicheren Austausch beliebiger Daten verwendet werden kann; das heißt, jede Art von Daten, die wir wünschen, in jedem gewünschten Format.

> [!NOTE]
> Da alle WebRTC-Komponenten Verschlüsselung verwenden müssen, werden alle Daten, die über einen `RTCDataChannel` übertragen werden, automatisch mit Datagram Transport Layer Security (**DTLS**) gesichert. Weitere Informationen finden Sie unter [Sicherheit](#sicherheit) unten.

## Erstellen eines Datenkanals

Der zugrunde liegende Datentransport, der vom [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwendet wird, kann auf zwei Arten erstellt werden:

- Lassen Sie WebRTC den Transport erstellen und dem Remote-Peer ankündigen (indem es ihn ein [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event) Ereignis empfangen lässt). Dies ist der einfache Weg und funktioniert für eine Vielzahl von Anwendungsfällen, ist jedoch möglicherweise nicht flexibel genug für Ihre Bedürfnisse.
- Schreiben Sie Ihren eigenen Code, um den Datentransport auszuhandeln, und erstellen Sie Ihren eigenen Code, um dem anderen Peer zu signalisieren, dass er sich mit dem neuen Kanal verbinden muss.

Werfen wir einen Blick auf diese beiden Fälle, beginnend mit dem ersten, der am häufigsten ist.

### Automatische Aushandlung

Häufig können Sie die Peer-Verbindung die Aushandlung der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Verbindung für sich übernehmen lassen. Um dies zu tun, rufen Sie [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) auf, ohne einen Wert für die Eigenschaft `negotiated` anzugeben oder die Eigenschaft mit einem Wert von `false` anzugeben. Dadurch wird `RTCPeerConnection` automatisch die Aushandlungen für Sie durchführen, sodass der Remote-Peer einen Datenkanal erstellt und die beiden über das Netzwerk miteinander verknüpft.

Das `RTCDataChannel`-Objekt wird sofort von `createDataChannel()` zurückgegeben; Sie können feststellen, wann die Verbindung erfolgreich hergestellt wurde, indem Sie darauf achten, dass das [`open`](/de/docs/Web/API/RTCDataChannel/open_event) Ereignis an das `RTCDataChannel` gesendet wird.

```js
let dataChannel = pc.createDataChannel("MyApp Channel");

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});
```

### Manuelle Aushandlung

Um die Datenkanalverbindung manuell auszuhandeln, müssen Sie zunächst ein neues [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Objekt mit der [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) Methode auf dem [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen, wobei in den Optionen eine `negotiated` Eigenschaft auf `true` gesetzt ist. Dies signalisiert der Peer-Verbindung, den Kanal nicht in Ihrem Namen auszuhandeln.

Verhandeln Sie dann die Verbindung über externe Mittel, z. B. einen Webserver. Dieser Prozess sollte dem Remote-Peer signalisieren, dass er seinen eigenen `RTCDataChannel` mit der `negotiated`-Eigenschaft ebenfalls auf `true` erstellen sollte, wobei die gleiche [`id`](/de/docs/Web/API/RTCDataChannel/id) verwendet wird. Dies verknüpft die beiden Objekte über das `RTCPeerConnection`.

```js
let dataChannel = pc.createDataChannel("MyApp Channel", {
  negotiated: true,
});

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});

requestRemoteChannel(dataChannel.id);
```

In diesem Code-Schnipsel wird der Kanal mit `negotiated` auf `true` gesetzt erstellt, und dann wird eine Funktion namens `requestRemoteChannel()` verwendet, um die Aushandlung auszulösen, um einen Remote-Kanal mit derselben ID wie der lokale Kanal zu erstellen.

Durch dieses Verfahren können Sie Datenkanäle erstellen, bei denen jeder Peer unterschiedliche Eigenschaften verwendet, und Kanäle deklarativ erstellen, indem der gleiche Wert für `id` verwendet wird.

## Pufferung

WebRTC-Datenkanäle unterstützen die Pufferung ausgehender Daten. Dies geschieht automatisch. Obwohl es keine Möglichkeit gibt, die Größe des Puffers zu steuern, können Sie erfahren, wie viele Daten derzeit gepuffert sind, und Sie können sich von einem Ereignis benachrichtigen lassen, wenn der Puffer anfängt, an eingereihten Daten abzunehmen. Dies erleichtert es, effiziente Routinen zu schreiben, die sicherstellen, dass immer Daten zur Verfügung stehen, ohne den Speicher übermäßig zu beanspruchen oder den Kanal vollständig zu überlasten.

## Verständnis der Nachrichtenbegrenzungen

Für alle Daten, die über ein Netzwerk übertragen werden, gibt es Größenbeschränkungen. Auf fundamentaler Ebene können die einzelnen Netzwerkpakete nicht größer sein als ein bestimmter Wert (die genaue Zahl hängt vom Netzwerk und der verwendeten Transportschicht ab). Auf der Anwendungsebene - das heißt innerhalb der Implementierung von WebRTC des {{Glossary("user_agent", "Benutzeragenten")}}, auf dem Ihr Code läuft - implementiert WebRTC Funktionen zur Unterstützung von Nachrichten, die größer sind als die maximale Paketgröße der Transportschicht des Netzwerks.

Dies kann die Dinge komplizieren, da Sie nicht unbedingt wissen, wie groß die Größenbegrenzungen für verschiedene Benutzeragenten sind und wie sie reagieren, wenn eine größere Nachricht gesendet oder empfangen wird. Auch wenn Benutzeragenten dieselbe zugrundeliegende Bibliothek für die Handhabung des Stream Control Transmission Protocol (SCTP) verwenden, kann es immer noch zu Variationen aufgrund der Nutzung der Bibliothek kommen. Beispielsweise verwenden sowohl Firefox als auch Google Chrome die [`usrsctp`](https://github.com/sctplab/usrsctp) Bibliothek zur Implementierung von SCTP, aber es gibt dennoch Situationen, in denen Datenübertragungen auf einem `RTCDataChannel` fehlschlagen können, aufgrund von Unterschieden darin, wie sie die Bibliothek aufrufen und auf von ihr zurückgegebene Fehler reagieren.

Wenn zwei Nutzer, die Firefox verwenden, über einen Datenkanal kommunizieren, ist die Nachrichtenbegrenzung viel größer, als wenn Firefox und Chrome miteinander kommunizieren, weil Firefox eine inzwischen veraltete Technik implementiert hat, um große Nachrichten in mehreren SCTP-Nachrichten zu versenden, die Chrome nicht umsetzt. Chrome sieht stattdessen eine Reihe von Nachrichten, die es als vollständig ansieht, und wird sie an den empfangenden `RTCDataChannel` als mehrere Nachrichten weiterleiten.

Nachrichten, die kleiner als 16 KiB sind, können ohne Bedenken gesendet werden, da alle großen Benutzeragenten diese auf dieselbe Weise behandeln. Darüber hinaus werden die Dinge komplizierter.

### Bedenken bei großen Nachrichten

Derzeit ist es nicht praktikabel, `RTCDataChannel` für Nachrichten zu verwenden, die größer als 64 KiB (16 KiB, wenn Sie einen browserübergreifenden Datenaustausch unterstützen möchten) sind. Das Problem ergibt sich aus der Tatsache, dass SCTP - das Protokoll, das zum Senden und Empfangen von Daten auf einem `RTCDataChannel` verwendet wird - ursprünglich für die Verwendung als Signalisierungsprotokoll entwickelt wurde. Es wurde erwartet, dass die Nachrichten relativ klein sind. Die Unterstützung für Nachrichten, die größer als die MTU der Netzwerkschicht sind, wurde fast als Nachgedanke hinzugefügt, falls Signalisierungsnachrichten größer als die MTU sein müssten. Diese Funktion erfordert, dass jedes Stück der Nachricht aufeinanderfolgende Sequenznummern hat, sodass sie nacheinander übertragen werden müssen, ohne dass andere Daten dazwischen eingefügt werden.

Dies wurde schließlich zu einem Problem. Im Laufe der Zeit begannen verschiedene Anwendungen (einschließlich WebRTC-Implementierungen) SCTP zu verwenden, um größere und größere Nachrichten zu übertragen. Schließlich wurde erkannt, dass, wenn die Nachrichten zu groß werden, es möglich ist, dass die Übertragung einer großen Nachricht alle anderen Datenübertragungen auf diesem Datenkanal blockiert - einschließlich kritischer Signalisierungsnachrichten.

Dies wird zu einem Problem, wenn Browser den aktuellen Standard zur Unterstützung größerer Nachrichten korrekt unterstützen - die End-of-Record (EOR) Marke, die anzeigt, wann eine Nachricht die letzte in einer Reihenfolge ist, die als einzelne Nutzlast behandelt werden sollte. Dies wurde in Firefox 57 implementiert, aber in Chrome noch nicht umgesetzt (siehe [Chromium Bug 7774](https://crbug.com/webrtc/7774)). Mit der EOR-Unterstützung können die `RTCDataChannel`-Nutzlasten viel größer werden (offiziell bis zu 256 KiB, aber die Implementierung von Firefox begrenzt sie auf unglaubliche 1 GiB). Selbst bei 256 KiB ist das ausreichend groß, um merkliche Verzögerungen bei der Verarbeitung dringender Datenverkehrs zu verursachen. Wenn Sie noch größer werden, können die Verzögerungen untragbar werden, es sei denn, Sie sind sich Ihrer betrieblichen Bedingungen sicher.

Um dieses Problem zu lösen, wurde ein neues System von **Stream-Schedulern** entwickelt, das es ermöglicht, Nachrichten auf verschiedenen Streams zu verschachteln, einschließlich der Streams, die zur Implementierung von WebRTC-Datenkanälen verwendet werden. Dieser [Vorschlag](https://datatracker.ietf.org/doc/html/draft-ietf-tsvwg-sctp-ndata) befindet sich noch im IETF-Entwurfsstadium, aber sobald er implementiert ist, wird es möglich sein, Nachrichten ohne wesentliche Größenbeschränkungen zu senden, da die SCTP-Schicht die zugrunde liegenden Teil-Nachrichten automatisch verschachteln wird, um sicherzustellen, dass die Daten jedes Kanals die Gelegenheit haben, durchzukommen.

Die Unterstützung für Stream-Scheduler in Firefox befindet sich in der Implementierungsphase. Siehe [Firefox-Bug 1381145](https://bugzil.la/1381145), um die allgemeine Verfügbarkeit zu verfolgen. Das Chrome-Team verfolgt ihre Implementierung der Unterstützung für Stream-Scheduler im [Chrome-Bug 5696](https://crbug.com/webrtc/5696).

> [!NOTE]
> Ein Großteil der Informationen in diesem Abschnitt basiert teilweise auf dem Blogbeitrag [Demystifying WebRTC's Data Channel Message Size Limitations](https://lgrahl.de/articles/demystifying-webrtc-dc-size-limit.html), geschrieben von Lennart Grahl. Er geht dort etwas mehr ins Detail, aber da die Browser seitdem aktualisiert wurden, könnte ein Teil davon veraltet sein. Darüber hinaus wird es im Laufe der Zeit wahrscheinlich noch mehr veralten, insbesondere sobald die Unterstützung für EOR und Stream-Scheduler in den großen Browsern vollständig integriert ist.

## Sicherheit

Alle Daten, die mithilfe von WebRTC übertragen werden, sind verschlüsselt. Im Falle von `RTCDataChannel` wird die Verschlüsselung mithilfe von Datagram Transport Layer Security (DTLS) durchgeführt, das auf [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security) (TLS) basiert. Da TLS zur Sicherung jeder HTTPS-Verbindung verwendet wird, sind alle Daten, die Sie über einen Datenkanal senden, so sicher wie alle anderen Daten, die vom Browser des Benutzers gesendet oder empfangen werden.

Grundlegender ist, dass WebRTC eine Peer-to-Peer-Verbindung zwischen zwei Benutzeragenten ist, sodass die Daten niemals über den Web- oder Anwendungsserver geleitet werden. Dies reduziert die Möglichkeiten, dass die Daten abgefangen werden.
