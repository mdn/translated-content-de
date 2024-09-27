---
title: Wie funktioniert das Internet?
slug: Learn/Common_questions/Web_mechanics/How_does_the_Internet_work
l10n:
  sourceCommit: 9de3d03957f1d66f02f45400a6981372aa368c1f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel bespricht, was das Internet ist und wie es funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Keine, aber wir empfehlen Ihnen, zunächst den
        <a href="/de/docs/Learn/Common_questions/Design_and_accessibility/Thinking_before_coding"
          >Artikel über das Setzen von Projektzielen</a
        >
        zu lesen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie werden die Grundlagen der technischen Infrastruktur des Webs und
        den Unterschied zwischen Internet und dem Web kennenlernen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Das **Internet** ist das Rückgrat des Web, die technische Infrastruktur, die das Web ermöglicht. Im Wesentlichen ist das Internet ein großes Netzwerk von Computern, die miteinander kommunizieren.

[Die Geschichte des Internets ist etwas undurchsichtig](https://en.wikipedia.org/wiki/Internet#History). Es begann in den 1960er Jahren als ein von der US-Armee finanziertes Forschungsprojekt und entwickelte sich in den 1980er Jahren mit der Unterstützung vieler öffentlicher Universitäten und privater Unternehmen zu einer öffentlichen Infrastruktur. Die verschiedenen Technologien, die das Internet unterstützen, haben sich im Laufe der Zeit entwickelt, aber die Funktionsweise hat sich nicht wesentlich verändert: Das Internet verbindet Computer und stellt sicher, dass sie verbunden bleiben, egal was passiert.

## Aktives Lernen

- [How the internet Works in 5 minutes](https://www.youtube.com/watch?v=7_LPdttKXPc): Ein 5-minütiges Video von Aaron Titus, um die Grundlagen des Internets zu verstehen.
- [How does the Internet work?](https://www.youtube.com/watch?v=x3c1ih2NJEg) Detailliertes, gut visualisiertes 9-minütiges Video.

## Tiefergehende Einblicke

### Ein einfaches Netzwerk

Wenn zwei Computer kommunizieren müssen, müssen sie entweder physisch (normalerweise mit einem [Ethernet-Kabel](https://en.wikipedia.org/wiki/Ethernet_crossover_cable)) oder drahtlos (zum Beispiel mit [Wi-Fi](https://en.wikipedia.org/wiki/WiFi) oder [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth)-Systemen) verbunden werden. Alle modernen Computer können jede dieser Verbindungen aufrechterhalten.

> [!NOTE]
> Im Rest dieses Artikels sprechen wir nur über physische Kabel, aber drahtlose Netzwerke funktionieren genauso.

![Zwei Computer, die miteinander verbunden sind](internet-schema-1.png)

Ein solches Netzwerk ist nicht auf zwei Computer beschränkt. Sie können so viele Computer verbinden, wie Sie möchten. Aber es wird schnell kompliziert. Wenn Sie versuchen, zum Beispiel zehn Computer zu verbinden, benötigen Sie 45 Kabel, mit neun Steckern pro Computer!

![Zehn Computer zusammen](internet-schema-2.png)

Um dieses Problem zu lösen, wird jeder Computer in einem Netzwerk mit einem speziellen kleinen Computer namens _Router_ verbunden. Dieser _Router_ hat nur eine Aufgabe: Wie ein Signalist auf einem Bahnhof stellt er sicher, dass eine von einem bestimmten Computer gesendete Nachricht beim richtigen Zielcomputer ankommt. Um eine Nachricht an Computer B zu senden, muss der Computer A die Nachricht an den Router senden, der sie wiederum an Computer B weiterleitet und sicherstellt, dass die Nachricht nicht an Computer C geliefert wird.

Sobald wir dem System einen Router hinzufügen, benötigt unser Netzwerk von 10 Computern nur noch 10 Kabel: einen einzigen Stecker für jeden Computer und einen Router mit 10 Steckern.

![Zehn Computer mit einem Router](internet-schema-3.png)

### Ein Netzwerk von Netzwerken

So weit, so gut. Aber wie sieht es aus, wenn man Hunderte, Tausende, Milliarden von Computern verbinden möchte? Natürlich kann ein einzelner _Router_ nicht so weit skalieren, aber, wenn Sie genau gelesen haben, haben wir gesagt, dass ein _Router_ ein Computer wie jeder andere ist, warum sollten wir also nicht zwei _Router_ miteinander verbinden? Nichts hindert uns daran, also tun wir das.

![Zwei Router miteinander verbunden](internet-schema-4.png)

Durch das Verbinden von Computern mit Routern und Routern untereinander können wir unendlich skalieren.

![Router, die mit Routern verbunden sind](internet-schema-5.png)

Ein solches Netzwerk kommt dem, was wir Internet nennen, sehr nahe, aber es fehlt noch etwas. Wir haben dieses Netzwerk für unsere eigenen Zwecke aufgebaut. Es gibt andere Netzwerke: Ihre Freunde, Ihre Nachbarn, jeder kann sein eigenes Computernetzwerk haben. Aber es ist wirklich nicht möglich, Kabel von Ihrem Haus zum Rest der Welt zu legen, also wie kann man das handhaben? Nun, es gibt bereits Kabel, die zu Ihrem Haus führen, zum Beispiel Strom- und Telefonleitungen. Das Telefonnetz verbindet Ihr Haus bereits mit jedem auf der Welt, deshalb ist es das perfekte Kabel, das wir brauchen. Um unser Netzwerk mit dem Telefonnetz zu verbinden, benötigen wir ein spezielles Gerät namens _Modem_. Dieses _Modem_ wandelt die Informationen aus unserem Netzwerk in Informationen um, die vom Telefonnetz verarbeitet werden können, und umgekehrt.

![Ein Router, der mit einem Modem verbunden ist](internet-schema-6.png)

Also sind wir mit dem Telefonnetz verbunden. Der nächste Schritt besteht darin, die Nachrichten von unserem Netzwerk an das Netzwerk zu senden, das wir erreichen wollen. Dazu verbinden wir unser Netzwerk mit einem Internet Service Provider (ISP). Ein ISP ist ein Unternehmen, das einige spezielle _Router_ verwaltet, die alle miteinander verbunden sind und auch Zugang zu Routern anderer ISPs haben. So wird die Nachricht von unserem Netzwerk durch das Netzwerk der ISP-Netzwerke zum Zielnetzwerk geleitet. Das Internet besteht aus dieser gesamten Infrastruktur von Netzwerken.

![Vollständiger Internet-Stack](internet-schema-7.png)

### Computer finden

Wenn Sie eine Nachricht an einen Computer senden möchten, müssen Sie angeben, welchen. Daher hat jeder Computer, der mit einem Netzwerk verbunden ist, eine eindeutige Adresse, die ihn identifiziert, eine sogenannte "IP-Adresse" (wobei IP für _Internet Protocol_ steht). Es ist eine Adresse, die aus einer Reihe von vier Zahlen besteht, die durch Punkte getrennt sind, zum Beispiel: `192.0.2.172`.

Das ist für Computer völlig in Ordnung, aber wir Menschen können uns solche Adressen nur schwer merken. Um die Sache zu erleichtern, können wir eine IP-Adresse mit einem menschenlesbaren Namen aliasieren, der als _Domain Name_ bezeichnet wird. Zum Beispiel (zum Zeitpunkt des Schreibens; IP-Adressen können sich ändern) ist `google.com` der Domain Name, der über der IP-Adresse `142.250.190.78` verwendet wird. Die Verwendung des Domain Names ist also der einfachste Weg für uns, über das Internet einen Computer zu erreichen.

![Zeigt, wie ein Domain Name eine IP-Adresse aliasieren kann](dns-ip.png)

### Internet und das Web

Wie Sie vielleicht bemerken, verwenden wir beim Surfen im Web mit einem Webbrowser normalerweise den Domain Name, um eine Website zu erreichen. Bedeutet das, dass Internet und Web dasselbe sind? So einfach ist das nicht. Wie wir gesehen haben, ist das Internet eine technische Infrastruktur, die es Milliarden von Computern ermöglicht, miteinander verbunden zu sein. Unter diesen Computern können einige Computer (genannt _Webserver_) Nachrichten senden, die von Webbrowsern verständlich sind. Das _Internet_ ist eine Infrastruktur, während das _Web_ ein darauf aufbauender Dienst ist. Es sei darauf hingewiesen, dass es mehrere andere Dienste gibt, die auf dem Internet aufbauen, wie E-Mail und [IRC](/de/docs/Glossary/IRC).

### Intranets und Extranets

Intranets sind _private_ Netzwerke, die auf Mitglieder einer bestimmten Organisation beschränkt sind. Sie werden häufig genutzt, um Mitgliedern einen sicheren Zugriff auf gemeinsame Ressourcen, Zusammenarbeit und Kommunikation zu ermöglichen. Beispielsweise könnte ein Intranet einer Organisation Webseiten zum Teilen von Abteilungs- oder Teaminformationen, geteilte Laufwerke zur Verwaltung wichtiger Dokumente und Dateien, Portale zur Durchführung administrativer Aufgaben und Kollaborationstools wie Wikis, Diskussionsforen und Nachrichtensysteme hosten.

Extranets ähneln sehr den Intranets, öffnen jedoch das gesamte oder einen Teil eines privaten Netzwerks, um das Teilen und die Zusammenarbeit mit anderen Organisationen zu ermöglichen. Sie werden typischerweise genutzt, um sicher und geschützt Informationen mit Kunden und Stakeholdern zu teilen, die eng mit einem Unternehmen zusammenarbeiten. Oft sind ihre Funktionen ähnlich wie die eines Intranets: Informations- und Dateiaustausch, Kollaborationstools, Diskussionsforen usw.

Sowohl Intranets als auch Extranets laufen auf derselben Infrastruktur wie das Internet und verwenden die gleichen Protokolle. Sie können daher von autorisierten Mitgliedern von verschiedenen physischen Standorten aus zugegriffen werden.

![Grafische Darstellung, wie Extranet und Intranet funktionieren](internet-schema-8.png)

## Nächste Schritte

- [How the Web works](/de/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- [Verstehen des Unterschieds zwischen einer Webseite, einer Website, einem Webserver und einer Suchmaschine](/de/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines)
- [Verständnis von Domain Names](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name)
