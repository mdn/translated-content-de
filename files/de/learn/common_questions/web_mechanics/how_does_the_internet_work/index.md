---
title: Wie funktioniert das Internet?
slug: Learn/Common_questions/Web_mechanics/How_does_the_Internet_work
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
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
        Sie werden die Grundlagen der technischen Infrastruktur des Webs und den Unterschied zwischen Internet und dem Web kennenlernen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Das **Internet** ist das Rückgrat des Webs, die technische Infrastruktur, die das Web möglich macht. Im einfachsten Sinne ist das Internet ein großes Netzwerk von Computern, die miteinander kommunizieren.

[Die Geschichte des Internets ist etwas unklar](https://en.wikipedia.org/wiki/Internet#History). Es begann in den 1960er Jahren als ein von der US-Armee finanziertes Forschungsprojekt und entwickelte sich in den 1980er Jahren mit Unterstützung vieler öffentlicher Universitäten und privater Unternehmen zu einer öffentlichen Infrastruktur. Die verschiedenen Technologien, die das Internet unterstützen, haben sich im Laufe der Zeit weiterentwickelt, doch die Funktionsweise hat sich nicht wesentlich geändert: Das Internet ist eine Möglichkeit, Computer miteinander zu verbinden und sicherzustellen, dass sie, egal was passiert, verbunden bleiben.

## Aktives Lernen

- [How the internet Works in 5 minutes](https://www.youtube.com/watch?v=7_LPdttKXPc): Ein 5-minütiges Video zum Verständnis der Grundlagen des Internets von Aaron Titus.
- [How does the Internet work?](https://www.youtube.com/watch?v=x3c1ih2NJEg) Ein detailliertes, gut visualisiertes 9-minütiges Video.

## Tiefergehende Analyse

### Ein einfaches Netzwerk

Wenn zwei Computer kommunizieren müssen, müssen sie entweder physisch (normalerweise mit einem [Ethernet-Kabel](https://en.wikipedia.org/wiki/Ethernet_crossover_cable)) oder drahtlos (zum Beispiel mit [Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi)- oder [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth)-Systemen) verbunden werden. Alle modernen Computer können diese Verbindungen unterstützen.

> [!NOTE]
> Im Rest dieses Artikels sprechen wir nur über physische Kabel, aber drahtlose Netzwerke funktionieren genauso.

![Zwei miteinander verbundene Computer](internet-schema-1.png)

Ein solches Netzwerk ist nicht auf zwei Computer beschränkt. Sie können so viele Computer verbinden, wie Sie möchten. Aber es wird schnell kompliziert. Wenn Sie beispielsweise versuchen, zehn Computer zu verbinden, benötigen Sie 45 Kabel mit neun Steckern pro Computer!

![Zehn Computer alle zusammen](internet-schema-2.png)

Um dieses Problem zu lösen, wird jeder Computer in einem Netzwerk an einen speziellen kleinen Computer namens _Router_ angeschlossen. Dieser _Router_ hat nur eine Aufgabe: Wie ein Signalgeber an einem Bahnhof sorgt er dafür, dass eine Nachricht, die von einem bestimmten Computer gesendet wird, beim richtigen Zielcomputer ankommt. Um eine Nachricht an Computer B zu senden, muss Computer A die Nachricht an den Router senden, der sie dann an Computer B weiterleitet und sicherstellt, dass die Nachricht nicht an Computer C geliefert wird.

Sobald wir dem System einen Router hinzufügen, benötigt unser Netzwerk von 10 Computern nur 10 Kabel: einen einzigen Stecker für jeden Computer und einen Router mit 10 Steckern.

![Zehn Computer mit einem Router](internet-schema-3.png)

### Ein Netzwerk von Netzwerken

Soweit so gut. Aber was ist mit dem Verbinden von Hunderten, Tausenden, Milliarden von Computern? Natürlich kann ein einzelner _Router_ nicht so weit skalieren, aber wenn Sie genau gelesen haben, haben wir gesagt, dass ein _Router_ ein Computer wie jeder andere ist. Was hält uns also davon ab, zwei _Router_ miteinander zu verbinden? Nichts, also tun wir das.

![Zwei miteinander verbundene Router](internet-schema-4.png)

Indem wir Computer mit Routern und dann Router mit Routern verbinden, können wir unendlich skalieren.

![Router miteinander verbunden](internet-schema-5.png)

Ein solches Netzwerk kommt dem, was wir das Internet nennen, sehr nahe, aber es fehlt noch etwas. Wir haben dieses Netzwerk für unsere eigenen Zwecke aufgebaut. Es gibt andere Netzwerke da draußen: Ihre Freunde, Ihre Nachbarn, jeder kann sein eigenes Computernetzwerk haben. Aber es ist nicht wirklich möglich, Kabel zwischen Ihrem Haus und dem Rest der Welt zu verlegen, also wie können Sie das handhaben? Nun, es gibt bereits Kabel, die mit Ihrem Haus verbunden sind, zum Beispiel Strom und Telefon. Die Telefoninfrastruktur verbindet bereits Ihr Haus mit jedem in der Welt, also ist es das perfekte Kabel, das wir brauchen. Um unser Netzwerk mit der Telefoninfrastruktur zu verbinden, benötigen wir ein spezielles Gerät namens _Modem_. Dieses _Modem_ wandelt die Informationen aus unserem Netzwerk in Informationen um, die von der Telefoninfrastruktur verarbeitet werden können, und umgekehrt.

![Ein Router, der mit einem Modem verbunden ist](internet-schema-6.png)

So sind wir mit der Telefoninfrastruktur verbunden. Der nächste Schritt besteht darin, die Nachrichten von unserem Netzwerk an das Netzwerk zu senden, das wir erreichen möchten. Dazu verbinden wir unser Netzwerk mit einem Internet Service Provider (ISP). Ein ISP ist ein Unternehmen, das einige spezielle _Router_ verwaltet, die alle miteinander verbunden sind und auch auf Router anderer ISPs zugreifen können. So wird die Nachricht von unserem Netzwerk über das Netzwerk der ISP-Netzwerke zum Zielnetzwerk weitergeleitet. Das Internet besteht aus dieser gesamten Netzwerkinfrastruktur.

![Vollständiger Internet-Stack](internet-schema-7.png)

### Computer finden

Wenn Sie eine Nachricht an einen Computer senden möchten, müssen Sie angeben, welcher. Daher hat jeder Computer, der mit einem Netzwerk verbunden ist, eine eindeutige Adresse, die ihn identifiziert, genannt "IP-Adresse" (wobei IP für _Internet Protocol_ steht). Es ist eine Adresse, die aus einer Reihe von vier durch Punkte getrennten Zahlen besteht, zum Beispiel: `192.0.2.172`.

Das ist für Computer völlig in Ordnung, aber wir Menschen haben Schwierigkeiten, sich diese Art von Adressen zu merken. Um die Sache zu erleichtern, können wir einer IP-Adresse einen lesbaren Namen zuweisen, der als _Domain-Name_ bezeichnet wird. Zum Beispiel (zum Zeitpunkt des Schreibens; IP-Adressen können sich ändern) wird `google.com` als Domain-Name für die IP-Adresse `142.250.190.78` verwendet. Der Domain-Name ist also der einfachste Weg für uns, einen Computer über das Internet zu erreichen.

![Zeigt, wie ein Domain-Name eine IP-Adresse zuweisen kann](dns-ip.png)

### Internet und das Web

Wie Sie vielleicht bemerken, verwenden wir beim Surfen im Web mit einem Webbrowser normalerweise den Domain-Namen, um eine Website zu erreichen. Bedeutet das, dass das Internet und das Web dasselbe sind? So einfach ist es nicht. Wie wir gesehen haben, ist das Internet eine technische Infrastruktur, die Milliarden von Computern ermöglicht, miteinander verbunden zu werden. Unter diesen Computern können einige Computer (genannt _Webserver_) Nachrichten senden, die für Webbrowser verständlich sind. _Internet_ ist eine Infrastruktur, während das _Web_ ein Dienst ist, der auf dieser Infrastruktur aufgebaut ist. Es sei darauf hingewiesen, dass es mehrere andere Dienste gibt, die auf dem Internet aufgebaut sind, wie E-Mail und {{Glossary("IRC", "IRC")}}.

### Intranets und Extranets

Intranets sind _private_ Netzwerke, die auf die Mitglieder einer bestimmten Organisation beschränkt sind. Sie werden häufig verwendet, um Mitgliedern ein Portal zum sicheren Zugriff auf gemeinsame Ressourcen, zur Zusammenarbeit und zur Kommunikation bereitzustellen. Zum Beispiel könnte das Intranet einer Organisation Webseiten für den Austausch von Abteilungs- oder Teaminformationen, freigegebene Laufwerke zur Verwaltung wichtiger Dokumente und Dateien, Portale für die Durchführung von Geschäftsverwaltungsaufgaben und Zusammenarbeitstools wie Wikis, Diskussionsforen und Messaging-Systeme hosten.

Extranets ähneln Intranets sehr, außer dass sie ein gesamtes oder einen Teil eines privaten Netzwerks öffnen, um das Teilen und die Zusammenarbeit mit anderen Organisationen zu ermöglichen. Sie werden typischerweise verwendet, um Informationen sicher und geschützt mit Kunden und Stakeholdern zu teilen, die eng mit einem Unternehmen zusammenarbeiten. Oftmals haben sie ähnliche Funktionen wie ein Intranet: Informations- und Dateiaustausch, Zusammenarbeitstools, Diskussionsforen usw.

Sowohl Intranets als auch Extranets laufen auf der gleichen Infrastruktur wie das Internet und verwenden die gleichen Protokolle. Sie können daher von autorisierten Mitgliedern von verschiedenen physischen Standorten aus zugegriffen werden.

![Grafische Darstellung, wie Extranet und Intranet funktionieren](internet-schema-8.png)

## Nächste Schritte

- [Wie das Web funktioniert](/de/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- [Verständnis des Unterschieds zwischen einer Webseite, einer Website, einem Webserver und einer Suchmaschine](/de/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines)
- [Verständnis von Domain-Namen](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name)
