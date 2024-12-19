---
title: Wie funktioniert das Internet?
slug: Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel behandelt, was das Internet ist und wie es funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Keine, aber wir empfehlen Ihnen, zuerst den
        <a href="/de/docs/Learn_web_development/Howto/Design_and_accessibility/Thinking_before_coding"
          >Artikel über das Setzen von Projektzielen</a
        >
        zu lesen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie werden die Grundlagen der technischen Infrastruktur des Webs und den Unterschied zwischen Internet und Web kennenlernen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Das **Internet** ist das Rückgrat des Webs, die technische Infrastruktur, die das Web ermöglicht. Im einfachsten Sinne ist das Internet ein großes Netzwerk von Computern, die miteinander kommunizieren.

[Die Geschichte des Internets ist etwas undurchsichtig](https://en.wikipedia.org/wiki/Internet#History). Es begann in den 1960er Jahren als ein von der US-Armee finanziertes Forschungsprojekt und entwickelte sich dann in den 1980er Jahren mit Unterstützung vieler öffentlicher Universitäten und privater Unternehmen zu einer öffentlichen Infrastruktur. Die verschiedenen Technologien, die das Internet unterstützen, haben sich im Laufe der Zeit weiterentwickelt, aber die Funktionsweise hat sich nicht wesentlich verändert: Das Internet ist ein Weg, Computer miteinander zu verbinden und sicherzustellen, dass sie, egal was passiert, einen Weg finden, um verbunden zu bleiben.

## Aktives Lernen

- [Wie das Internet in 5 Minuten funktioniert](https://www.youtube.com/watch?v=7_LPdttKXPc): Ein 5-minütiges Video, um die Grundlagen des Internets von Aaron Titus zu verstehen.
- [Wie funktioniert das Internet?](https://www.youtube.com/watch?v=x3c1ih2NJEg) Ein detailliertes, gut visualisiertes 9-minütiges Video.

## Detaillierte Betrachtung

### Ein einfaches Netzwerk

Wenn zwei Computer kommunizieren müssen, müssen Sie sie entweder physisch (in der Regel mit einem [Ethernet-Kabel](https://en.wikipedia.org/wiki/Ethernet_crossover_cable)) oder drahtlos (zum Beispiel mit [Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi) oder [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth)-Systemen) verbinden. Alle modernen Computer können eine dieser Verbindungen aufrechterhalten.

> [!NOTE]
> Im Rest dieses Artikels werden wir nur über physische Kabel sprechen, aber drahtlose Netzwerke funktionieren genauso.

![Zwei miteinander verbundene Computer](internet-schema-1.png)

Ein solches Netzwerk ist nicht auf zwei Computer beschränkt. Sie können so viele Computer verbinden, wie Sie möchten. Aber das wird schnell kompliziert. Wenn Sie versuchen, sagen wir, zehn Computer zu verbinden, benötigen Sie 45 Kabel, mit jeweils neun Anschlüssen pro Computer!

![Zehn Computer zusammen](internet-schema-2.png)

Um dieses Problem zu lösen, ist jeder Computer in einem Netzwerk mit einem speziellen kleinen Computer verbunden, der _Router_ genannt wird. Dieser _Router_ hat nur eine Aufgabe: Wie ein Weichensteller in einem Bahnhof stellt er sicher, dass eine Nachricht, die von einem bestimmten Computer gesendet wird, beim richtigen Zielcomputer ankommt. Um eine Nachricht an Computer B zu senden, muss Computer A die Nachricht an den Router senden, der seinerseits die Nachricht an Computer B weiterleitet und sicherstellt, dass die Nachricht nicht an Computer C geliefert wird.

Sobald wir einen Router in das System integrieren, benötigt unser Netzwerk von 10 Computern nur noch 10 Kabel: Ein einzelner Stecker für jeden Computer und ein Router mit 10 Steckern.

![Zehn Computer mit einem Router](internet-schema-3.png)

### Ein Netzwerk von Netzwerken

Soweit so gut. Aber was ist mit der Verbindung von Hunderten, Tausenden, Milliarden von Computern? Natürlich kann ein einzelner _Router_ nicht so weit skalieren, aber, wenn Sie genau gelesen haben, haben wir gesagt, dass ein _Router_ ein Computer wie jeder andere ist, also was hält uns davon ab, zwei _Router_ miteinander zu verbinden? Nichts, also tun wir das.

![Zwei miteinander verbundene Router](internet-schema-4.png)

Indem wir Computer mit Routern verbinden und dann Router mit Routern, können wir unendlich skalieren.

![Router, die mit Routern verbunden sind](internet-schema-5.png)

Ein solches Netzwerk kommt dem, was wir das Internet nennen, sehr nahe, aber wir vermissen etwas. Wir haben dieses Netzwerk für unsere eigenen Zwecke gebaut. Es gibt andere Netzwerke da draußen: Ihre Freunde, Ihre Nachbarn, jeder kann sein eigenes Rechnernetz haben. Aber es ist nicht wirklich möglich, zwischen Ihrem Haus und dem Rest der Welt Kabel zu verlegen, wie kann man das also handhaben? Nun, es gibt bereits Kabel, die mit Ihrem Haus verbunden sind, wie z. B. Strom- und Telefonleitungen. Die Telefoninfrastruktur verbindet Ihr Haus bereits mit jedem in der Welt, also ist sie das perfekte Kabel, das wir brauchen. Um unser Netzwerk mit der Telefoninfrastruktur zu verbinden, benötigen wir ein spezielles Gerät, das _Modem_ genannt wird. Dieses _Modem_ wandelt die Informationen aus unserem Netzwerk in Informationen um, die von der Telefoninfrastruktur verwaltet werden können und umgekehrt.

![Ein Router, der mit einem Modem verbunden ist](internet-schema-6.png)

Also sind wir mit der Telefoninfrastruktur verbunden. Der nächste Schritt ist es, die Nachrichten von unserem Netzwerk an das Netzwerk zu senden, das wir erreichen wollen. Dazu verbinden wir unser Netzwerk mit einem Internetdienstanbieter (ISP). Ein ISP ist ein Unternehmen, das einige spezielle _Router_ verwaltet, die alle miteinander verbunden sind und auch auf die Router anderer ISPs zugreifen können. So wird die Nachricht von unserem Netzwerk durch das Netzwerk der ISP-Netzwerke zum Zielnetzwerk transportiert. Das Internet besteht aus dieser gesamten Infrastruktur von Netzwerken.

![Vollständiger Internet-Stack](internet-schema-7.png)

### Computer finden

Wenn Sie eine Nachricht an einen Computer senden möchten, müssen Sie angeben, an welchen. Daher hat jeder mit einem Netzwerk verbundene Computer eine eindeutige Adresse, die ihn identifiziert, sogenannte "IP-Adresse" (wobei IP für _Internet Protocol_ steht). Es ist eine Adresse, die aus einer Reihe von vier Zahlen besteht, die durch Punkte getrennt sind, zum Beispiel: `192.0.2.172`.

Das ist für Computer völlig ausreichend, aber wir Menschen haben Schwierigkeiten, sich solche Adressen zu merken. Um die Sache zu erleichtern, können wir eine IP-Adresse mit einem lesbaren Namen, einem sogenannten _Domainnamen_, verknüpfen. Zum Beispiel (zum Zeitpunkt des Schreibens; IP-Adressen können sich ändern) ist `google.com` der Domainname, der über der IP-Adresse `142.250.190.78` verwendet wird. Die Verwendung des Domainnamens ist also der einfachste Weg für uns, einen Computer über das Internet zu erreichen.

![Zeigen Sie, wie ein Domainname eine IP-Adresse aliasen kann](dns-ip.png)

### Internet und das Web

Wie Sie vielleicht bemerken, verwenden wir beim Surfen im Web mit einem Webbrowser normalerweise den Domainnamen, um eine Website zu erreichen. Bedeutet das, dass das Internet und das Web dasselbe sind? So einfach ist es nicht. Wie wir gesehen haben, ist das Internet eine technische Infrastruktur, die es Milliarden von Computern ermöglicht, miteinander verbunden zu sein. Unter diesen Computern können einige Computer (genannt _Webserver_) Nachrichten senden, die für Webbrowser verständlich sind. Das _Internet_ ist eine Infrastruktur, während das _Web_ ein darauf aufbauender Dienst ist. Es ist erwähnenswert, dass es mehrere andere Dienste gibt, die auf dem Internet aufgebaut sind, wie z. B. E-Mail und {{Glossary("IRC", "IRC")}}.

### Intranets und Extranets

Intranets sind _private_ Netzwerke, die auf die Mitglieder einer bestimmten Organisation beschränkt sind. Sie werden häufig verwendet, um ein Portal bereitzustellen, über das Mitglieder sicher auf gemeinsam genutzte Ressourcen zugreifen, zusammenarbeiten und kommunizieren können. Zum Beispiel könnte das Intranet einer Organisation Webseiten zum Teilen von Abteilungs- oder Teaminformationen, gemeinsame Laufwerke zur Verwaltung von wichtigen Dokumenten und Dateien, Portale zur Ausführung von Verwaltungsaufgaben und Kollaborationstools wie Wikis, Diskussionsforen und Messaging-Systeme hosten.

Extranets sind Intranets sehr ähnlich, außer dass sie ein ganzes oder ein Teil eines privaten Netzwerks öffnen, um das Teilen und die Zusammenarbeit mit anderen Organisationen zu ermöglichen. Sie werden in der Regel verwendet, um Informationen sicher und geschützt mit Kunden und Interessengruppen zu teilen, die eng mit einem Unternehmen zusammenarbeiten. Oft bieten sie ähnliche Funktionen wie ein Intranet: Informations- und Dateifreigabe, Kollaborationstools, Diskussionsforen usw.

Sowohl Intranets als auch Extranets laufen auf der gleichen Art von Infrastruktur wie das Internet und verwenden die gleichen Protokolle. Sie können daher von autorisierten Mitgliedern von verschiedenen physischen Standorten aus zugegriffen werden.

![Grafische Darstellung der Funktionsweise von Extranet und Intranet](internet-schema-8.png)

## Nächste Schritte

- [Wie das Web funktioniert](/de/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
- [Verstehen des Unterschieds zwischen einer Webseite, einer Website, einem Webserver und einer Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web)
- [Verstehen von Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
