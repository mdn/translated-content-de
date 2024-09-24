---
title: Wie funktioniert das Internet?
slug: Learn/Common_questions/Web_mechanics/How_does_the_Internet_work
l10n:
  sourceCommit: 9de3d03957f1d66f02f45400a6981372aa368c1f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel erläutert, was das Internet ist und wie es funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Keine, aber wir empfehlen Ihnen, zuerst den
        <a href="/de/docs/Learn/Common_questions/Design_and_accessibility/Thinking_before_coding">Artikel über das Festlegen von Projektzielen</a>
        zu lesen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie werden die Grundlagen der technischen Infrastruktur des Webs kennenlernen und den Unterschied zwischen Internet und dem Web verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Das **Internet** ist das Rückgrat des Webs, die technische Infrastruktur, die das Web möglich macht. Im einfachsten Sinne ist das Internet ein großes Netzwerk von Computern, die miteinander kommunizieren.

[Die Geschichte des Internets ist etwas unklar](https://en.wikipedia.org/wiki/Internet#History). Es begann in den 1960er Jahren als ein vom US-Militär finanziertes Forschungsprojekt und entwickelte sich in den 1980er Jahren mit der Unterstützung vieler öffentlicher Universitäten und privater Unternehmen zu einer öffentlichen Infrastruktur. Die verschiedenen Technologien, die das Internet unterstützen, haben sich im Laufe der Zeit weiterentwickelt, aber die Funktionsweise hat sich nicht so sehr verändert: Das Internet ist ein Weg, Computer miteinander zu verbinden und sicherzustellen, dass sie, egal was passiert, einen Weg finden, verbunden zu bleiben.

## Aktives Lernen

- [How the internet Works in 5 minutes](https://www.youtube.com/watch?v=7_LPdttKXPc): Ein 5-Minuten-Video, um die Grundlagen des Internets zu verstehen, von Aaron Titus.
- [How does the Internet work?](https://www.youtube.com/watch?v=x3c1ih2NJEg) Detailliertes, gut visualisiertes 9-Minuten-Video.

## Vertiefung

### Ein einfaches Netzwerk

Wenn zwei Computer kommunizieren müssen, müssen Sie diese verbinden, entweder physisch (in der Regel mit einem [Ethernet-Kabel](https://en.wikipedia.org/wiki/Ethernet_crossover_cable)) oder drahtlos (zum Beispiel mit [Wi-Fi](https://en.wikipedia.org/wiki/WiFi)- oder [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth)-Systemen). Alle modernen Computer können jede dieser Verbindungen aufrechterhalten.

> [!NOTE]
> Im Rest dieses Artikels werden wir nur über physische Kabel sprechen, aber drahtlose Netzwerke funktionieren genauso.

![Zwei miteinander verbundene Computer](internet-schema-1.png)

Ein solches Netzwerk ist nicht auf zwei Computer beschränkt. Sie können so viele Computer verbinden, wie Sie möchten. Aber es wird schnell kompliziert. Wenn Sie versuchen, beispielsweise zehn Computer zu verbinden, benötigen Sie 45 Kabel mit jeweils neun Anschlüssen pro Computer!

![Zehn Computer zusammen](internet-schema-2.png)

Um dieses Problem zu lösen, wird jeder Computer in einem Netzwerk mit einem speziellen kleinen Computer namens _Router_ verbunden. Dieser _Router_ hat nur eine Aufgabe: Wie ein Signalgeber in einem Bahnhof stellt er sicher, dass eine Nachricht, die von einem bestimmten Computer gesendet wird, beim richtigen Zielcomputer ankommt. Um eine Nachricht an Computer B zu senden, muss Computer A die Nachricht an den Router senden, der wiederum die Nachricht an Computer B weiterleitet und sicherstellt, dass die Nachricht nicht an Computer C zugestellt wird.

Sobald wir dem System einen Router hinzufügen, benötigt unser Netzwerk von 10 Computern nur 10 Kabel: einen einzelnen Stecker für jeden Computer und einen Router mit 10 Steckern.

![Zehn Computer mit einem Router](internet-schema-3.png)

### Ein Netzwerk von Netzwerken

Bisher, so gut. Aber wie verbinden wir Hunderte, Tausende, Milliarden von Computern? Natürlich kann ein einzelner _Router_ nicht so weit skalieren, aber, wenn Sie aufmerksam lesen, haben wir gesagt, dass ein _Router_ ein Computer wie jeder andere ist, also was hindert uns daran, zwei _Router_ miteinander zu verbinden? Nichts, also tun wir das.

![Zwei miteinander verbundene Router](internet-schema-4.png)

Durch das Verbinden von Computern mit Routern und dann von Routern mit Routern können wir unendlich skalieren.

![Router, die mit Routern verbunden sind](internet-schema-5.png)

Ein solches Netzwerk kommt dem sehr nahe, was wir das Internet nennen, aber wir vermissen noch etwas. Wir haben dieses Netzwerk für unsere eigenen Ziele aufgebaut. Da draußen gibt es andere Netzwerke: Ihre Freunde, Ihre Nachbarn, jeder kann sein eigenes Netzwerk aus Computern haben. Aber es ist nicht wirklich möglich, Kabel zwischen Ihrem Haus und dem Rest der Welt zu verlegen, also wie können Sie das handhaben? Nun, es gibt bereits Kabel, die zu Ihrem Haus führen, zum Beispiel Strom und Telefon. Die Telefoninfrastruktur verbindet Ihr Haus bereits mit jedem auf der Welt, daher ist es das perfekte Kabel, das wir benötigen. Um unser Netzwerk mit der Telefoninfrastruktur zu verbinden, benötigen wir ein spezielles Gerät namens _Modem_. Dieses _Modem_ wandelt die Informationen aus unserem Netzwerk in Informationen um, die von der Telefoninfrastruktur verarbeitet werden können, und umgekehrt.

![Ein Router, der mit einem Modem verbunden ist](internet-schema-6.png)

Also sind wir mit der Telefoninfrastruktur verbunden. Der nächste Schritt ist es, die Nachrichten von unserem Netzwerk an das Netzwerk zu senden, das wir erreichen wollen. Dazu verbinden wir unser Netzwerk mit einem Internet Service Provider (ISP). Ein ISP ist ein Unternehmen, das einige spezielle _Router_ verwaltet, die alle miteinander verbunden sind und auch auf die Router anderer ISPs zugreifen können. So wird die Nachricht aus unserem Netzwerk durch das Netzwerk der ISP-Netzwerke an das Zielnetzwerk geleitet. Das Internet besteht aus dieser ganzen Infrastruktur der Netzwerke.

![Vollständiger Internet-Stack](internet-schema-7.png)

### Computer finden

Wenn Sie eine Nachricht an einen Computer senden möchten, müssen Sie angeben, welcher es ist. Deshalb hat jeder mit einem Netzwerk verbundene Computer eine eindeutige Adresse, die ihn identifiziert, sogenannte "IP-Adresse" (wobei IP für _Internet Protocol_ steht). Es ist eine Adresse, die aus einer Folge von vier durch Punkte getrennten Zahlen besteht, beispielsweise: `192.0.2.172`.

Das ist für Computer völlig in Ordnung, aber wir Menschen haben Schwierigkeiten, sich solche Adressen zu merken. Um es einfacher zu machen, können wir einer IP-Adresse einen leserlichen Namen zuweisen, der _Domainname_ genannt wird. Zum Beispiel (zum Zeitpunkt des Schreibens; IP-Adressen können sich ändern) ist `google.com` der Domainname, der an die IP-Adresse `142.250.190.78` gekoppelt ist. Daher ist die Verwendung des Domainnamens der einfachste Weg für uns, einen Computer über das Internet zu erreichen.

![Zeigen Sie, wie ein Domainname eine IP-Adresse alias kann](dns-ip.png)

### Internet und das Web

Wie Sie vielleicht bemerken, verwenden wir beim Surfen im Web mit einem Webbrowser normalerweise den Domainnamen, um eine Website zu erreichen. Bedeutet das, dass das Internet und das Web dasselbe sind? So einfach ist es nicht. Wie wir gesehen haben, ist das Internet eine technische Infrastruktur, die es Milliarden von Computern ermöglicht, miteinander verbunden zu sein. Unter diesen Computern können einige Computer (_Web-Server_ genannt) Nachrichten senden, die für Webbrowser verständlich sind. Das _Internet_ ist eine Infrastruktur, während das _Web_ ein darauf aufgebauter Dienst ist. Es ist erwähnenswert, dass es mehrere andere Dienste gibt, die auf dem Internet aufgebaut sind, wie z. B. E-Mail und {{Glossary("IRC")}}.

### Intranets und Extranets

Intranets sind _private_ Netzwerke, die auf die Mitglieder einer bestimmten Organisation beschränkt sind. Sie werden häufig verwendet, um ein Portal bereitzustellen, über das Mitglieder sicher auf gemeinsame Ressourcen zugreifen, zusammenarbeiten und kommunizieren können. Zum Beispiel könnte das Intranet einer Organisation Webseiten zum Teilen von Informationen aus Abteilungen oder Teams, gemeinsame Laufwerke zur Verwaltung wichtiger Dokumente und Dateien, Portale zur Durchführung von Geschäftsverwaltungstätigkeiten und Zusammenarbeitstools wie Wikis, Diskussionsforen und Messaging-Systeme hosten.

Extranets ähneln Intranets sehr, öffnen jedoch das gesamte oder einen Teil eines privaten Netzwerks, um den Austausch und die Zusammenarbeit mit anderen Organisationen zu ermöglichen. Sie werden in der Regel verwendet, um sicher und zuverlässig Informationen mit Kunden und Stakeholdern zu teilen, die eng mit einem Unternehmen zusammenarbeiten. Oft sind ihre Funktionen ähnlich denen eines Intranets: Informations- und Dateiaustausch, Zusammenarbeitstools, Diskussionsforen usw.

Sowohl Intranets als auch Extranets laufen auf der gleichen Art von Infrastruktur wie das Internet und verwenden dieselben Protokolle. Daher können sie von autorisierten Mitgliedern von verschiedenen physischen Standorten aus zugegriffen werden.

![Grafische Darstellung, wie Extranet und Intranet funktionieren](internet-schema-8.png)

## Nächste Schritte

- [Wie das Web funktioniert](/de/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- [Verstehen des Unterschieds zwischen einer Webseite, einer Website, einem Webserver und einer Suchmaschine](/de/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines)
- [Verständnis von Domainnamen](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name)
