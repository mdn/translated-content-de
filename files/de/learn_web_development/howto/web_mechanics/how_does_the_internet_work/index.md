---
title: Wie funktioniert das Internet?
slug: Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Dieser Artikel behandelt, was das Internet ist und wie es funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Keine, aber wir empfehlen Ihnen, zunächst den
        <a href="/de/docs/Learn_web_development/Howto/Design_and_accessibility/Thinking_before_coding"
          >Artikel über das Setzen von Projektzielen</a
        >
        zu lesen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie werden die Grundlagen der technischen Infrastruktur des Webs und
        den Unterschied zwischen Internet und Web kennenlernen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Das **Internet** ist das Rückgrat des Webs, die technische Infrastruktur, die das Web möglich macht. Im Wesentlichen ist das Internet ein großes Netzwerk von Computern, die miteinander kommunizieren.

[Die Geschichte des Internets ist etwas undurchsichtig](https://en.wikipedia.org/wiki/Internet#History). Es begann in den 1960er Jahren als ein vom US-Militär finanziertes Forschungsprojekt und entwickelte sich in den 1980er Jahren mit der Unterstützung vieler öffentlicher Universitäten und privater Unternehmen zu einer öffentlichen Infrastruktur. Die verschiedenen Technologien, die das Internet unterstützen, haben sich im Laufe der Zeit weiterentwickelt, aber die Funktionsweise hat sich nicht wesentlich verändert: Das Internet ist eine Möglichkeit, Computer miteinander zu verbinden und sicherzustellen, dass sie, unabhängig davon, was passiert, einen Weg finden, verbunden zu bleiben.

## Aktives Lernen

- [Wie das Internet in 5 Minuten funktioniert](https://www.youtube.com/watch?v=7_LPdttKXPc): Ein 5-minütiges Video, um die Grundlagen des Internets zu verstehen, von Aaron Titus.
- [Wie funktioniert das Internet?](https://www.youtube.com/watch?v=x3c1ih2NJEg) Detailliertes, gut visualisiertes 9-minütiges Video.

## Tiefergehendes Verständnis

### Ein einfaches Netzwerk

Wenn zwei Computer kommunizieren müssen, müssen Sie sie entweder physisch (in der Regel mit einem [Ethernet-Kabel](https://en.wikipedia.org/wiki/Ethernet_crossover_cable)) oder kabellos (zum Beispiel mit [Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi) oder [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth)) verbinden. Alle modernen Computer können eine dieser Verbindungen aufrechterhalten.

> [!NOTE]
> Im Rest dieses Artikels werden wir nur über physische Kabel sprechen, aber kabellose Netzwerke funktionieren genauso.

![Zwei miteinander verbundene Computer](internet-schema-1.png)

Ein solches Netzwerk ist nicht auf zwei Computer beschränkt. Sie können so viele Computer verbinden, wie Sie möchten. Aber es wird schnell kompliziert. Wenn Sie versuchen, beispielsweise zehn Computer zu verbinden, benötigen Sie 45 Kabel mit neun Anschlüssen pro Computer!

![Zehn Computer alle zusammen](internet-schema-2.png)

Um dieses Problem zu lösen, werden alle Computer in einem Netzwerk mit einem speziellen kleinen Computer namens _Router_ verbunden. Dieser _Router_ hat nur eine Aufgabe: wie ein Signaler an einem Bahnhof stellt er sicher, dass eine von einem bestimmten Computer gesendete Nachricht beim richtigen Zielcomputer ankommt. Um eine Nachricht an Computer B zu senden, muss Computer A die Nachricht an den Router senden, der wiederum die Nachricht an Computer B weiterleitet und sicherstellt, dass die Nachricht nicht an Computer C geliefert wird.

Sobald wir einen Router in das System einfügen, benötigt unser Netzwerk von 10 Computern nur noch 10 Kabel: einen einzelnen Anschluss für jeden Computer und einen Router mit 10 Anschlüssen.

![Zehn Computer mit einem Router](internet-schema-3.png)

### Ein Netzwerk von Netzwerken

Soweit so gut. Aber was ist mit dem Verbinden von Hunderten, Tausenden, Milliarden von Computern? Natürlich kann ein einzelner _Router_ nicht so weit skalieren, aber, wenn Sie sorgfältig lesen, haben wir gesagt, dass ein _Router_ ein Computer wie jeder andere ist, also was hindert uns daran, zwei _Router_ miteinander zu verbinden? Nichts, also machen wir das.

![Zwei miteinander verbundene Router](internet-schema-4.png)

Indem wir Computer mit Routern verbinden und dann Router mit Routern, können wir unbegrenzt skalieren.

![Router, die mit Routern verbunden sind](internet-schema-5.png)

Ein solches Netzwerk kommt dem, was wir das Internet nennen, sehr nahe, aber uns fehlt noch etwas. Wir haben dieses Netzwerk für unsere eigenen Zwecke aufgebaut. Es gibt andere Netzwerke dort draußen: Ihre Freunde, Ihre Nachbarn, jeder kann sein eigenes Computernetzwerk haben. Aber es ist nicht wirklich möglich, Kabel zwischen Ihrem Haus und dem Rest der Welt zu verlegen, also wie können Sie das handhaben? Nun, es gibt bereits Kabel, die mit Ihrem Haus verbunden sind, zum Beispiel Strom- und Telefonleitungen. Die Telefoninfrastruktur verbindet Ihr Haus bereits mit jedem in der Welt, sodass dies der perfekte Draht ist, den wir benötigen. Um unser Netzwerk mit der Telefoninfrastruktur zu verbinden, brauchen wir ein spezielles Gerät namens _Modem_. Dieses _Modem_ wandelt die Informationen aus unserem Netzwerk in Informationen um, die von der Telefoninfrastruktur verwaltet werden können, und umgekehrt.

![Ein Router, der mit einem Modem verbunden ist](internet-schema-6.png)

Also sind wir mit der Telefoninfrastruktur verbunden. Der nächste Schritt ist, die Nachrichten von unserem Netzwerk zu dem Netzwerk zu senden, das wir erreichen wollen. Dafür verbinden wir unser Netzwerk mit einem Internet Service Provider (ISP). Ein ISP ist ein Unternehmen, das einige spezielle _Router_ verwaltet, die alle miteinander verbunden sind und auch auf die Router anderer ISPs zugreifen können. So wird die Nachricht von unserem Netzwerk durch das Netzwerk der ISP-Netzwerke zum Zielnetzwerk weitergeleitet. Das Internet besteht aus dieser gesamten Infrastruktur von Netzwerken.

![Vollständiger Internet-Stack](internet-schema-7.png)

### Computer finden

Wenn Sie eine Nachricht an einen Computer senden möchten, müssen Sie angeben, an welchen. Jeder Computer, der mit einem Netzwerk verbunden ist, hat daher eine eindeutige Adresse, die ihn identifiziert, genannt "IP-Adresse" (wobei IP für _Internet Protocol_ steht). Es ist eine Adresse, die aus einer Reihe von vier durch Punkte getrennten Zahlen besteht, zum Beispiel: `192.0.2.172`.

Das ist für Computer vollkommen in Ordnung, aber wir Menschen haben Schwierigkeiten, sich solche Adressen zu merken. Um die Sache zu erleichtern, können wir eine IP-Adresse mit einem menschenlesbaren Namen aliasen, der als _Domain-Name_ bezeichnet wird. Zum Beispiel (zum Zeitpunkt des Schreibens; IP-Adressen können sich ändern) ist `google.com` der Domain-Name, der über der IP-Adresse `142.250.190.78` verwendet wird. Der Domain-Name ist der einfachste Weg für uns, einen Computer über das Internet zu erreichen.

![Zeigen, wie ein Domain-Name eine IP-Adresse als Alias verwenden kann](dns-ip.png)

### Internet und das Web

Wie Sie vielleicht bemerkt haben, verwenden wir beim Surfen im Web mit einem Webbrowser normalerweise den Domain-Namen, um eine Webseite zu erreichen. Bedeutet das, dass das Internet und das Web dasselbe sind? So einfach ist das nicht. Wie wir gesehen haben, ist das Internet eine technische Infrastruktur, die es Milliarden von Computern ermöglicht, miteinander verbunden zu sein. Unter diesen Computern können einige Computer (genannt _Webserver_) Nachrichten senden, die für Webbrowser verständlich sind. Das _Internet_ ist eine Infrastruktur, während das _Web_ ein Dienst ist, der auf dieser Infrastruktur aufgebaut ist. Es ist wichtig zu beachten, dass es mehrere andere Dienste gibt, die auf dem Internet aufgebaut sind, wie z.B. E-Mail und {{Glossary("IRC", "IRC")}}.

### Intranets und Extranets

Intranets sind _private_ Netzwerke, die auf Mitglieder einer bestimmten Organisation beschränkt sind.
Sie werden häufig verwendet, um Mitgliedern ein Portal zur Verfügung zu stellen, um sicher auf gemeinsame Ressourcen zuzugreifen, zusammenzuarbeiten und zu kommunizieren.
Zum Beispiel könnte das Intranet einer Organisation Webseiten zur Weitergabe von Abteilungs- oder Teaminformationen, gemeinsame Laufwerke zur Verwaltung wichtiger Dokumente und Dateien,
Portale zur Durchführung von Geschäftsverwaltungstätigkeiten und Zusammenarbeitstools wie Wikis, Diskussionsforen und Nachrichtensysteme hosten.

Extranets sind Intranets sehr ähnlich, außer dass sie das gesamte oder einen Teil eines privaten Netzwerks öffnen, um die Zusammenarbeit mit anderen Organisationen zu ermöglichen.
Sie werden typischerweise verwendet, um sicher und geschützt Informationen mit Kunden und Stakeholdern zu teilen, die eng mit einem Unternehmen zusammenarbeiten.
Oft sind ihre Funktionen denen eines Intranets ähnlich: Informations- und Dateifreigabe, Zusammenarbeitstools, Diskussionsforen usw.

Sowohl Intranets als auch Extranets laufen auf derselben Art von Infrastruktur wie das Internet und verwenden dieselben Protokolle.
Daher können sie von autorisierten Mitgliedern von verschiedenen physischen Standorten aus zugegriffen werden.

![Grafische Darstellung, wie Extranet und Intranet funktionieren](internet-schema-8.png)

## Nächste Schritte

- [Wie das Web funktioniert](/de/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
- [Unterschiede verstehen zwischen einer Webseite, einer Website, einem Webserver und einer Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web)
- [Verständnis von Domain-Namen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
