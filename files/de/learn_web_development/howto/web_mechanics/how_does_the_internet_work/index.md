---
title: Wie funktioniert das Internet?
slug: Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work
l10n:
  sourceCommit: adb5ecfd736fa85c33b08a623dc54968ad402ad9
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Dieser Artikel erörtert, was das Internet ist und wie es funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Keine, aber wir empfehlen Ihnen, den
        <a href="/de/docs/Learn_web_development/Howto/Design_and_accessibility/Thinking_before_coding"
          >Artikel über das Festlegen von Projektzielen</a
        >
        zuerst zu lesen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie lernen die Grundlagen der technischen Infrastruktur des Webs und den
        Unterschied zwischen Internet und Web kennen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Das **Internet** ist das Rückgrat des Webs, die technische Infrastruktur, die das Web ermöglicht. Im Wesentlichen ist das Internet ein großes Netzwerk von Computern, die miteinander kommunizieren.

[Die Geschichte des Internets ist etwas obskur](https://en.wikipedia.org/wiki/Internet#History). Es begann in den 1960er Jahren als von der US-Armee finanziertes Forschungsprojekt und entwickelte sich in den 1980er Jahren mit der Unterstützung vieler öffentlicher Universitäten und privater Unternehmen zu einer öffentlichen Infrastruktur. Die verschiedenen Technologien, die das Internet unterstützen, haben sich im Laufe der Zeit weiterentwickelt, aber die Funktionsweise hat sich nicht wesentlich verändert: Das Internet ist eine Möglichkeit, Computer miteinander zu verbinden und sicherzustellen, dass sie, egal was passiert, einen Weg finden, verbunden zu bleiben.

## Aktives Lernen

- [How the internet Works in 5 minutes](https://www.youtube.com/watch?v=7_LPdttKXPc): Ein 5-minütiges Video von Aaron Titus, um die grundlegenden Konzepte des Internets zu verstehen.
- [How does the Internet work?](https://www.youtube.com/watch?v=x3c1ih2NJEg) Detailliertes, gut visualisiertes 9-minütiges Video.

## Vertiefung

### Ein einfaches Netzwerk

Wenn zwei Computer kommunizieren müssen, müssen Sie sie miteinander verbinden, entweder physisch (normalerweise mit einem [Ethernet-Kabel](https://en.wikipedia.org/wiki/Ethernet_crossover_cable)) oder drahtlos (zum Beispiel mit [Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi) oder [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth)-Systemen). Alle modernen Computer können diese Verbindungen herstellen.

> [!NOTE]
> Im Rest dieses Artikels werden wir nur über physische Kabel sprechen, aber drahtlose Netzwerke funktionieren gleich.

![Zwei Computer, die miteinander verbunden sind](internet-schema-1.png)

Ein solches Netzwerk ist nicht auf zwei Computer beschränkt. Sie können so viele Computer verbinden, wie Sie möchten. Aber es wird schnell kompliziert. Wenn Sie versuchen, beispielsweise zehn Computer zu verbinden, benötigen Sie 45 Kabel mit jeweils neun Steckern pro Computer!

![Zehn Computer alle zusammen](internet-schema-2.png)

Um dieses Problem zu lösen, ist jeder Computer in einem Netzwerk mit einem speziellen kleinen Computer verbunden, der als _Netzwerk-Switch_ (oder kurz _Switch_) bezeichnet wird. Dieser Switch hat nur eine Aufgabe: Wie ein Stellwerker auf einem Bahnhof stellt er sicher, dass Nachrichten, die von einem bestimmten Computer gesendet werden, nur an den Ziel-Computer gelangen. Um eine Nachricht an Computer B zu senden, sendet Computer A die Nachricht an den Switch, der wiederum die Nachricht an Computer B weiterleitet — Computer B erhält keine Nachrichten, die für andere Computer bestimmt sind, und keine der Nachrichten für Computer B erreichen andere Computer im lokalen Netzwerk.

Wenn wir dem System einen Switch hinzufügen, benötigt unser Netzwerk aus 10 Computern nur 10 Kabel: einen einzigen Stecker für jeden Computer und einen Switch mit 10 Steckern.

![Zehn Computer mit einem Switch](internet-schema-3.png)

### Ein Netzwerk von Netzwerken

Bis hierher in Ordnung. Aber was ist mit der Verbindung von Hunderten, Tausenden, Milliarden von Computern? Natürlich kann ein einzelner Switch nicht so weit skalieren, aber, wenn Sie genau lesen, haben wir gesagt, dass ein Switch ein Computer wie jeder andere ist, also was hält uns davon ab, zwei Switches miteinander zu verbinden? Nichts, also tun wir das.

![Zwei Switches miteinander verbunden](internet-schema-4.png)

Sie können sich vorstellen, dass wir Switche endlos miteinander verbinden können, um ein Netzwerk wie dieses zu bilden:

![Switches, die mit Switches verbunden sind](internet-schema-5.png)

In Wirklichkeit führt das zu vielen Ingenieurproblemen. Je mehr Switches ein Paket durchlaufen muss, desto länger dauert es, sein Ziel zu erreichen. Und Sie können nicht nur einen Baum von Switches haben, denn dann könnte ein einziger Switch-Ausfall einen großen Teil der Geräte vom Netz trennen. Um dieses Problem zu lösen, halten wir jedes lokale Netzwerk so klein wie möglich und verbinden diese lokalen Netzwerke mit einem separaten Gerät, das als _Router_ bezeichnet wird. Ein Router ist ein Computer, der weiß, wie er Nachrichten zwischen Netzwerken weiterleitet. Der Router ist wie ein Postamt: Wenn ein Paket ankommt, liest es die Empfängeradresse und leitet das Paket direkt an den richtigen Empfänger weiter, ohne durch mehrere Relais-Ebenen zu gehen.

Ein solches Netzwerk kommt dem, was wir das Internet nennen, sehr nahe. Wir brauchen nur das physikalische Medium (Kabel), um all diese Router zu verbinden. Glücklicherweise existierte eine solche Infrastruktur bereits vor dem Internet, nämlich das Telefonnetz. Um unser Netzwerk mit der Telefoninfrastruktur zu verbinden, benötigen wir ein spezielles Gerät, das _Modem_ genannt wird. Dieses _Modem_ wandelt die Informationen aus unserem Netzwerk in Informationen um, die von der Telefoninfrastruktur verwaltet werden können, und umgekehrt.

![Ein Router, der mit einem Modem verbunden ist](internet-schema-6.png)

Beachten Sie, dass der kommerzielle Router in Ihrem Zuhause wahrscheinlich eine Kombination aus einem Switch, einem Router und einem Modem in einem Gerät ist.

Also sind wir mit der Telefoninfrastruktur verbunden. Der nächste Schritt besteht darin, die Nachrichten von unserem Netzwerk zu dem Netzwerk zu senden, das wir erreichen wollen. Dazu verbinden wir unser Netzwerk mit einem Internetdienstanbieter (ISP). Ein ISP ist ein Unternehmen, das spezielle _Router_ verwaltet, die alle miteinander verbunden sind und auch auf die Router anderer ISPs zugreifen können. So wird die Nachricht von unserem Netzwerk durch das Netzwerk der ISP-Netzwerke zum Zielnetzwerk getragen. Das Internet besteht aus dieser gesamten Infrastruktur von Netzwerken.

![Voller Internet-Stack](internet-schema-7.png)

### Computer finden

Wenn Sie eine Nachricht an einen Computer senden möchten, müssen Sie angeben, welcher es ist. Daher hat jeder Computer, der mit einem Netzwerk verbunden ist, eine eindeutige Adresse, die ihn identifiziert, genannt "IP-Adresse" (wobei IP für _Internet Protocol_ steht). Es ist eine Adresse, die aus einer Reihe von vier Zahlen besteht, die durch Punkte getrennt sind, zum Beispiel: `192.0.2.172`.

Das ist für Computer völlig in Ordnung, aber wir Menschen haben Schwierigkeiten, uns solche Adressen zu merken. Um es einfacher zu machen, können wir einer IP-Adresse einen menschenlesbaren Namen zuweisen, der _Domain-Name_ genannt wird. Zum Beispiel (zum Zeitpunkt des Schreibens; IP-Adressen können sich ändern) ist `google.com` der Domain-Name, der über der IP-Adresse `142.250.190.78` verwendet wird. Der Domain-Name ist also die einfachste Möglichkeit für uns, über das Internet einen Computer zu erreichen.

![Zeigt, wie ein Domain-Name eine IP-Adresse darstellen kann](dns-ip.png)

### Internet und das Web

Wie Sie vielleicht bemerken, verwenden wir beim Surfen im Web mit einem Webbrowser normalerweise den Domain-Namen, um eine Website zu erreichen. Bedeutet das, dass das Internet und das Web dasselbe sind? So einfach ist es nicht. Wie wir gesehen haben, ist das Internet eine technische Infrastruktur, die es Milliarden von Computern ermöglicht, alle miteinander verbunden zu sein. Einige dieser Computer (genannt _Webserver_) können Nachrichten senden, die für Webbrowser verständlich sind. Das _Internet_ ist also eine Infrastruktur, während das _Web_ ein auf dieser Infrastruktur aufgebauter Dienst ist. Es ist erwähnenswert, dass es mehrere andere Dienste gibt, die auf dem Internet aufgebaut sind, wie beispielsweise E-Mail und {{Glossary("IRC", "IRC")}}.

### Intranets und Extranets

Intranets sind _private_ Netzwerke, die auf Mitglieder einer bestimmten Organisation beschränkt sind. Sie werden häufig verwendet, um ein Portal bereitzustellen, über das Mitglieder sicher auf gemeinsame Ressourcen zugreifen, zusammenarbeiten und kommunizieren können. Zum Beispiel könnte das Intranet einer Organisation Webseiten für die gemeinsame Nutzung von Abteilungs- oder Teaminformationen, gemeinsame Laufwerke zur Verwaltung wichtiger Dokumente und Dateien, Portale für die Durchführung von Geschäftsverwaltungstätigkeiten und Kollaborationstools wie Wikis, Diskussionsforen und Nachrichtensysteme hosten.

Extranets ähneln Intranets sehr, außer dass sie den gesamten oder einen Teil eines privaten Netzwerks öffnen, um den Austausch und die Zusammenarbeit mit anderen Organisationen zu ermöglichen. Sie werden typischerweise verwendet, um sicher und geschützt Informationen mit Kunden und Interessengruppen auszutauschen, die eng mit einem Unternehmen zusammenarbeiten. Oft sind ihre Funktionen ähnlich denen, die durch ein Intranet bereitgestellt werden: Informations- und Dateiaustausch, Kollaborationstools, Diskussionsforen usw.

Sowohl Intranets als auch Extranets laufen auf der gleichen Art von Infrastruktur wie das Internet und verwenden die gleichen Protokolle. Sie können daher von autorisierten Mitgliedern von verschiedenen physischen Standorten aus zugegriffen werden.

![Grafische Darstellung, wie Extranet und Intranet funktionieren](internet-schema-8.png)

## Nächste Schritte

- [Wie das Web funktioniert](/de/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
- [Verstehen des Unterschieds zwischen einer Webseite, einer Website, einem Webserver und einer Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web)
- [Verstehen von Domain-Namen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
