---
title: Wie funktioniert das Internet?
slug: Learn/Common_questions/Web_mechanics/How_does_the_Internet_work
l10n:
  sourceCommit: 9de3d03957f1d66f02f45400a6981372aa368c1f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel behandelt, was das Internet ist und wie es funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Keine, aber wir empfehlen Ihnen, zuerst den
        <a href="/de/docs/Learn/Common_questions/Design_and_accessibility/Thinking_before_coding"
          >Artikel über das Setzen von Projektzielen</a
        >
        zu lesen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie werden die Grundlagen der technischen Infrastruktur des Webs sowie den Unterschied zwischen Internet und dem Web kennenlernen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Das **Internet** ist das Rückgrat des Webs, die technische Infrastruktur, die das Web möglich macht. Im Grunde genommen ist das Internet ein großes Netzwerk von Computern, die miteinander kommunizieren.

[Die Geschichte des Internets ist etwas undurchsichtig](https://en.wikipedia.org/wiki/Internet#History). Es begann in den 1960er Jahren als ein vom US-Militär finanziertes Forschungsprojekt und entwickelte sich in den 1980er Jahren mit Unterstützung vieler öffentlicher Universitäten und privater Unternehmen zu einer öffentlichen Infrastruktur. Die verschiedenen Technologien, die das Internet unterstützen, haben sich im Laufe der Zeit entwickelt, aber die Funktionsweise hat sich nicht wesentlich verändert: Das Internet ist eine Möglichkeit, Computer miteinander zu verbinden und sicherzustellen, dass sie, egal was passiert, eine Verbindung zueinander finden.

## Aktives Lernen

- [How the internet Works in 5 minutes](https://www.youtube.com/watch?v=7_LPdttKXPc): Ein 5-minütiges Video, um die Grundlagen des Internets von Aaron Titus zu verstehen.
- [How does the Internet work?](https://www.youtube.com/watch?v=x3c1ih2NJEg) Detailliertes, gut visualisiertes 9-minütiges Video.

## Vertiefte Einblicke

### Ein einfaches Netzwerk

Wenn zwei Computer kommunizieren müssen, müssen Sie sie entweder physisch (gewöhnlich mit einem [Ethernet-Kabel](https://en.wikipedia.org/wiki/Ethernet_crossover_cable)) oder drahtlos (zum Beispiel mit [Wi-Fi](https://en.wikipedia.org/wiki/WiFi) oder [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth)) verbinden. Alle modernen Computer können eine dieser Verbindungen aufrechterhalten.

> [!NOTE]
> Im Rest dieses Artikels werden wir nur über physische Kabel sprechen, aber drahtlose Netzwerke funktionieren genauso.

![Zwei Computer miteinander verbunden](internet-schema-1.png)

Ein solches Netzwerk ist nicht auf zwei Computer beschränkt. Sie können so viele Computer verbinden, wie Sie möchten. Aber es wird schnell kompliziert. Wenn Sie versuchen, beispielsweise zehn Computer zu verbinden, benötigen Sie 45 Kabel mit jeweils neun Steckern pro Computer!

![Zehn Computer miteinander verbunden](internet-schema-2.png)

Um dieses Problem zu lösen, wird jeder Computer in einem Netzwerk mit einem speziellen kleinen Computer namens _Router_ verbunden. Dieser _Router_ hat nur eine Aufgabe: Wie ein Stellwerk an einem Bahnhof sorgt er dafür, dass eine Nachricht, die von einem bestimmten Computer gesendet wird, beim richtigen Zielcomputer ankommt. Um eine Nachricht an Computer B zu senden, muss Computer A die Nachricht an den Router senden, der sie wiederum an Computer B weiterleitet und sicherstellt, dass die Nachricht nicht an Computer C zugestellt wird.

Sobald wir dem System einen Router hinzufügen, benötigt unser Netzwerk von 10 Computern nur 10 Kabel: einen einzelnen Stecker für jeden Computer und einen Router mit 10 Steckplätzen.

![Zehn Computer mit einem Router](internet-schema-3.png)

### Ein Netzwerk von Netzwerken

Soweit so gut. Aber wie sieht es mit der Verbindung von Hunderten, Tausenden, Milliarden von Computern aus? Natürlich kann ein einzelner _Router_ nicht so weit skalieren, aber wenn Sie genau hingelesen haben, haben wir gesagt, dass ein _Router_ ein Computer wie jeder andere ist, also was hindert uns daran, zwei _Router_ miteinander zu verbinden? Nichts, also tun wir das.

![Zwei Router miteinander verbunden](internet-schema-4.png)

Indem wir Computer mit Routern verbinden und dann Router mit Routern, können wir unbegrenzt skalieren.

![Router, die mit Routern verbunden sind](internet-schema-5.png)

Ein solches Netzwerk kommt dem, was wir das Internet nennen, sehr nahe, aber wir vermissen noch etwas. Wir haben dieses Netzwerk zu unseren eigenen Zwecken aufgebaut. Es gibt andere Netzwerke da draußen: Ihre Freunde, Ihre Nachbarn, jeder kann sein eigenes Computernetzwerk haben. Aber es ist nicht wirklich möglich, Kabel von Ihrem Haus zu der ganzen Welt zu verlegen. Wie kann man das handhaben? Nun, es gibt bereits Kabel, die zu Ihrem Haus führen, zum Beispiel Strom und Telefon. Die Telefoninfrastruktur verbindet Ihr Haus bereits mit jedem auf der Welt, also ist das das perfekte Kabel, das wir brauchen. Um unser Netzwerk mit der Telefoninfrastruktur zu verbinden, benötigen wir ein spezielles Gerät namens _Modem_. Dieses _Modem_ wandelt die Informationen aus unserem Netzwerk in Informationen um, die von der Telefoninfrastruktur verwaltet werden können und umgekehrt.

![Ein Router, der mit einem Modem verbunden ist](internet-schema-6.png)

Also sind wir mit der Telefoninfrastruktur verbunden. Der nächste Schritt besteht darin, die Nachrichten von unserem Netzwerk an das Netzwerk zu senden, das wir erreichen möchten. Dafür verbinden wir unser Netzwerk mit einem Internet Service Provider (ISP). Ein ISP ist ein Unternehmen, das einige spezielle _Router_ verwaltet, die alle miteinander verbunden sind und auch auf die Router anderer ISPs zugreifen können. So wird die Nachricht von unserem Netzwerk durch das Netzwerk der ISP-Netzwerke zum Zielnetzwerk übertragen. Das Internet besteht aus dieser gesamten Netzwerk-Infrastruktur.

![Vollständiger Internet-Stack](internet-schema-7.png)

### Computer finden

Wenn Sie eine Nachricht an einen Computer senden möchten, müssen Sie angeben, welcher es sein soll. Daher hat jeder Computer, der an ein Netzwerk angeschlossen ist, eine eindeutige Adresse, die ihn identifiziert und als "IP-Adresse" bezeichnet wird (wobei IP für _Internet Protocol_ steht). Es ist eine Adresse, die aus einer Folge von vier Zahlen besteht, die durch Punkte getrennt sind, zum Beispiel: `192.0.2.172`.

Das ist für Computer perfekt in Ordnung, aber wir Menschen haben Schwierigkeiten, sich solche Adressen zu merken. Um es einfacher zu machen, können wir einer IP-Adresse einen menschenlesbaren Namen zuordnen, der als _Domain-Name_ bezeichnet wird. Zum Beispiel (zum Zeitpunkt des Schreibens; IP-Adressen können sich ändern) ist `google.com` der Domain-Name, der über der IP-Adresse `142.250.190.78` verwendet wird. Daher ist die Verwendung des Domain-Namens der einfachste Weg für uns, einen Computer über das Internet zu erreichen.

![Veranschaulichung, wie ein Domain-Name eine IP-Adresse zuordnen kann](dns-ip.png)

### Internet und das Web

Wie Sie vielleicht bemerken, verwenden wir beim Surfen im Web mit einem Webbrowser normalerweise den Domain-Namen, um eine Website zu erreichen. Bedeutet das, dass Internet und das Web dasselbe sind? So einfach ist es nicht. Wie wir gesehen haben, ist das Internet eine technische Infrastruktur, die es Milliarden von Computern ermöglicht, miteinander verbunden zu sein. Unter diesen Computern können einige Computer (sogenannte _Web-Server_) Nachrichten senden, die für Webbrowser verständlich sind. Das _Internet_ ist eine Infrastruktur, während das _Web_ ein auf dieser Infrastruktur aufgebauter Dienst ist. Es ist erwähnenswert, dass es mehrere andere Dienste gibt, die auf dem Internet aufgebaut sind, wie E-Mail und {{Glossary("IRC", "IRC")}}.

### Intranets und Extranets

Intranets sind _private_ Netzwerke, die auf Mitglieder einer bestimmten Organisation beschränkt sind.
Sie werden häufig verwendet, um ein Portal bereitzustellen, über das Mitglieder sicher auf gemeinsame Ressourcen zugreifen, zusammenarbeiten und kommunizieren können.
Ein Beispiel: Das Intranet einer Organisation könnte Webseiten für das Teilen von Abteilungs- oder Teaminformationen, gemeinsame Laufwerke für das Verwalten wichtiger Dokumente und Dateien,
Portale für geschäftliche Verwaltungstätigkeiten und Kollaborationstools wie Wikis, Diskussionsforen und Messaging-Systeme hosten.

Extranets sind Intranets sehr ähnlich, außer dass sie das gesamte oder einen Teil eines privaten Netzwerks öffnen, um die gemeinsame Nutzung und Zusammenarbeit mit anderen Organisationen zu ermöglichen.
Sie werden typischerweise verwendet, um Informationen sicher und geschützt mit Kunden und Stakeholdern zu teilen, die eng mit einem Unternehmen zusammenarbeiten.
Ihre Funktionen ähneln häufig denen, die von einem Intranet bereitgestellt werden: Informations- und Dateifreigabe, Kollaborationstools, Diskussionsforen usw.

Sowohl Intranets als auch Extranets laufen auf der gleichen Art von Infrastruktur wie das Internet und verwenden die gleichen Protokolle.
Daher können sie von autorisierten Mitgliedern von verschiedenen physischen Standorten aus zugänglich gemacht werden.

![Grafische Darstellung, wie Extranet und Intranet funktionieren](internet-schema-8.png)

## Nächste Schritte

- [Wie das Web funktioniert](/de/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- [Verständnis der Unterschiede zwischen einer Webseite, einer Website, einem Webserver und einer Suchmaschine](/de/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines)
- [Verständnis von Domain-Namen](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name)
