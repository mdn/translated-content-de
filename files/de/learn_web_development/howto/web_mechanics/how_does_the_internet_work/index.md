---
title: Wie funktioniert das Internet?
slug: Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work
l10n:
  sourceCommit: 262504af3050a3a95e58838ec5b26bcaca00388e
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Dieser Artikel erklärt, was das Internet ist und wie es funktioniert.

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
        Sie werden die Grundlagen der technischen Infrastruktur des Webs und den Unterschied zwischen Internet und dem Web kennenlernen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Das **Internet** ist das Rückgrat des Webs, die technische Infrastruktur, die das Web möglich macht. Im Grunde ist das Internet ein großes Netzwerk von Computern, die miteinander kommunizieren.

[Die Geschichte des Internets ist etwas vage](https://en.wikipedia.org/wiki/Internet#History). Sie begann in den 1960er Jahren als von der US-Armee finanziertes Forschungsprojekt und entwickelte sich in den 1980er Jahren mit Unterstützung vieler öffentlicher Universitäten und privater Unternehmen zu einer öffentlichen Infrastruktur. Die verschiedenen Technologien, die das Internet unterstützen, haben sich im Laufe der Zeit weiterentwickelt, aber die Funktionsweise hat sich nicht so sehr verändert: Das Internet ist eine Möglichkeit, Computer miteinander zu verbinden und sicherzustellen, dass sie, egal was passiert, einen Weg finden, verbunden zu bleiben.

## Aktives Lernen

- [Wie das Internet in 5 Minuten funktioniert](https://www.youtube.com/watch?v=7_LPdttKXPc): Ein 5-minütiges Video, um die Grundlagen des Internets von Aaron Titus zu verstehen.
- [Wie funktioniert das Internet?](https://www.youtube.com/watch?v=x3c1ih2NJEg) Detailliertes, gut visualisiertes 9-minütiges Video.

## Vertiefung

### Ein einfaches Netzwerk

Wenn zwei Computer kommunizieren müssen, müssen Sie sie entweder physisch (normalerweise mit einem [Ethernet-Kabel](https://en.wikipedia.org/wiki/Ethernet_crossover_cable)) oder drahtlos (zum Beispiel mit [Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi) oder [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth)-Systemen) verbinden. Alle modernen Computer können jede dieser Verbindungen aufrechterhalten.

> [!NOTE]
> Im Rest dieses Artikels sprechen wir nur über physische Kabel, aber drahtlose Netzwerke funktionieren genauso.

![Zwei Computer miteinander verbunden](internet-schema-1.png)

Ein solches Netzwerk ist nicht auf zwei Computer beschränkt. Sie können so viele Computer anschließen, wie Sie möchten. Aber es wird schnell kompliziert. Wenn Sie versuchen, zum Beispiel zehn Computer zu verbinden, benötigen Sie 45 Kabel mit neun Steckern pro Computer!

![Zehn Computer miteinander verbunden](internet-schema-2.png)

Um dieses Problem zu lösen, wird jeder Computer in einem Netzwerk mit einem speziellen kleinen Computer namens _Netzwerkswitch_ (oder kurz _Switch_) verbunden. Dieser Switch hat nur eine Aufgabe: wie ein Signalgeber an einem Bahnhof sorgt er dafür, dass Nachrichten von einem bestimmten Computer nur an den Zielcomputer gelangen. Um eine Nachricht an Computer B zu senden, sendet Computer A die Nachricht an den Switch, der wiederum die Nachricht an Computer B weiterleitet — Computer B erhält keine Nachrichten, die für andere Computer bestimmt sind, und keine der Nachrichten für Computer B erreichen andere Computer im lokalen Netzwerk.

Sobald wir unserem System einen Switch hinzufügen, benötigt unser Netzwerk von 10 Computern nur noch 10 Kabel: einen einzigen Stecker für jeden Computer und einen Switch mit 10 Steckern.

![Zehn Computer mit einem Switch](internet-schema-3.png)

### Ein Netzwerk von Netzwerken

Bis hierher ist alles gut. Aber was ist mit der Verbindung von Hunderten, Tausenden, Milliarden von Computern? Natürlich kann ein einzelner Switch nicht so weit skalieren, aber, wie wir bereits sagten, ist ein Switch ein Computer wie jeder andere. Warum also nicht zwei Switches miteinander verbinden? Nichts hindert uns daran, also tun wir das.

![Zwei Switches miteinander verbunden](internet-schema-4.png)

Man kann sich vorstellen, dass wir Switches unendlich miteinander verbinden können, um ein Netzwerk wie dieses zu bilden:

![Switches mit Switches verbunden](internet-schema-5.png)

In der Realität führt dies jedoch zu vielen technischen Problemen. Je mehr Switches ein Paket durchlaufen muss, desto länger dauert es, bis es sein Ziel erreicht. Und Sie können nicht einfach einen Baum von Switches haben, denn dann könnte ein Ausfall eines Switches einen großen Teil der Geräte trennen. Um dieses Problem zu lösen, halten wir jedes lokale Netzwerk so klein wie möglich und verbinden diese lokalen Netzwerke mit einem separaten Gerät namens _Router_. Ein Router ist ein Computer, der weiß, wie man Nachrichten zwischen Netzwerken weiterleitet. Der Router ist wie ein Postamt: Wenn ein Paket ankommt, liest er die Empfängeradresse und leitet das Paket direkt an den richtigen Empfänger weiter, ohne durch viele Relais zu gehen.

Ein solches Netzwerk kommt dem sehr nahe, was wir das Internet nennen. Wir benötigen nur das physische Medium (Kabel), um all diese Router zu verbinden. Glücklicherweise existierte eine solche Infrastruktur bereits vor dem Internet, nämlich das Telefonnetz. Um unser Netzwerk mit der Telefoninfrastruktur zu verbinden, benötigen wir ein spezielles Gerät namens _Modem_. Dieses _Modem_ wandelt die Informationen aus unserem Netzwerk in Informationen um, die von der Telefoninfrastruktur verarbeitbar sind, und umgekehrt.

![Ein Router verbunden mit einem Modem](internet-schema-6.png)

Beachten Sie, dass der kommerzielle Router in Ihrem Zuhause wahrscheinlich eine Kombination aus einem Switch, einem Router und einem Modem in einem Gerät ist.

Also sind wir mit der Telefoninfrastruktur verbunden. Der nächste Schritt besteht darin, die Nachrichten von unserem Netzwerk an das Netzwerk zu senden, das wir erreichen möchten. Dazu verbinden wir unser Netzwerk mit einem Internetdienstanbieter (ISP). Ein ISP ist ein Unternehmen, das einige spezielle _Router_ verwaltet, die alle miteinander verbunden sind und auch auf die Router anderer ISPs zugreifen können. So wird die Nachricht von unserem Netzwerk durch das Netzwerk der ISP-Netzwerke an das Zielnetzwerk übertragen. Das Internet besteht aus dieser gesamten Infrastruktur von Netzwerken.

![Vollständiger Internet-Stack](internet-schema-7.png)

### Computer finden

Wenn Sie eine Nachricht an einen Computer senden möchten, müssen Sie angeben, an welchen. Daher hat jeder an ein Netzwerk angeschlossene Computer eine eindeutige Adresse, die ihn identifiziert, eine sogenannte "IP-Adresse" (wobei IP für _Internet Protocol_ steht). Es ist eine Adresse, bestehend aus einer Reihe von vier Zahlen, die durch Punkte getrennt sind, zum Beispiel: `192.0.2.172`.

Das ist für Computer völlig in Ordnung, aber wir Menschen haben Schwierigkeiten, sich solche Adressen zu merken. Um die Sache zu erleichtern, können wir eine IP-Adresse mit einem menschenlesbaren Namen namens _Domainname_ versehen. Zum Beispiel (zum Zeitpunkt des Schreibens; IP-Adressen können sich ändern) ist `google.com` der Domainname, der über der IP-Adresse `142.250.190.78` verwendet wird. Der einfachste Weg für uns, einen Computer über das Internet zu erreichen, ist also die Verwendung des Domainnamens.

![Zeigen, wie ein Domainname eine IP-Adresse aliasieren kann](dns-ip.png)

### Internet und das Web

Wie Sie vielleicht bemerkt haben, verwenden wir beim Surfen im Web mit einem Webbrowser normalerweise den Domainnamen, um eine Website zu erreichen. Bedeutet das, dass Internet und Web dasselbe sind? So einfach ist das nicht. Wie wir gesehen haben, ist das Internet eine technische Infrastruktur, die es Milliarden von Computern ermöglicht, miteinander verbunden zu sein. Unter diesen Computern können einige Computer (sogenannte _Webserver_) Nachrichten senden, die für Webbrowser verständlich sind. Das _Internet_ ist eine Infrastruktur, während das _Web_ ein Dienst ist, der auf dieser Infrastruktur aufgebaut ist. Ebenso gibt es mehrere andere Dienste, die auf dem Internet aufgebaut sind, wie E-Mail und {{Glossary("IRC", "IRC")}}.

### Intranets und Extranets

Intranets sind _private_ Netzwerke, die auf die Mitglieder einer bestimmten Organisation beschränkt sind. Sie werden häufig verwendet, um ein Portal bereitzustellen, über das Mitglieder sicher auf gemeinsame Ressourcen zugreifen, zusammenarbeiten und kommunizieren können. Beispielsweise könnte das Intranet einer Organisation Webseiten zur Weitergabe von Abteilungs- oder Teaminformationen, gemeinsame Laufwerke zur Verwaltung von wichtigen Dokumenten und Dateien, Portale zur Durchführung von Geschäftsverwaltungstätigkeiten sowie Kollaborationstools wie Wikis, Diskussionsforen und Nachrichtensysteme hosten.

Extranets sind den Intranets sehr ähnlich, außer dass sie ein privates Netzwerk ganz oder teilweise öffnen, um den Austausch und die Zusammenarbeit mit anderen Organisationen zu ermöglichen. Sie werden typischerweise genutzt, um sicher Informationen mit Kunden und Interessengruppen zu teilen, die eng mit einem Unternehmen zusammenarbeiten. Oft sind ihre Funktionen ähnlich denen, die auch ein Intranet bietet: Informations- und Dateiaustausch, Kollaborationstools, Diskussionsforen usw.

Sowohl Intranets als auch Extranets laufen auf der gleichen Art von Infrastruktur wie das Internet und verwenden dieselben Protokolle. Daher können sie von autorisierten Mitgliedern von verschiedenen physischen Standorten aus zugegriffen werden.

![Grafische Darstellung, wie Extranet und Intranet arbeiten](internet-schema-8.png)

## Nächste Schritte

- [Wie das Web funktioniert](/de/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
- [Den Unterschied zwischen einer Webseite, einer Website, einem Webserver und einer Suchmaschine verstehen](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web)
- [Verständnis von Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
