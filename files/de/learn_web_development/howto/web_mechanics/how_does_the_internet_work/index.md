---
title: Wie funktioniert das Internet?
slug: Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

Dieser Artikel erklärt, was das Internet ist und wie es funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Keine, aber wir empfehlen, zuerst den
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

Das **Internet** ist das Rückgrat des Webs, die technische Infrastruktur, die das Web ermöglicht. Im Wesentlichen ist das Internet ein großes Netzwerk von Computern, die miteinander kommunizieren.

[Die Geschichte des Internets ist etwas obskur](https://en.wikipedia.org/wiki/Internet#History). Es begann in den 1960er Jahren als ein von der US-Armee finanziertes Forschungsprojekt und entwickelte sich in den 1980er Jahren mit Unterstützung vieler öffentlicher Universitäten und privater Unternehmen zu einer öffentlichen Infrastruktur. Die verschiedenen Technologien, die das Internet unterstützen, haben sich im Laufe der Zeit entwickelt, aber die Funktionsweise hat sich nicht wesentlich geändert: Das Internet ist eine Möglichkeit, Computer miteinander zu verbinden und sicherzustellen, dass sie, egal was passiert, eine Möglichkeit finden, verbunden zu bleiben.

## Aktives Lernen

- [How the Internet Works in 5 minutes](https://www.youtube.com/watch?v=7_LPdttKXPc): Ein 5-minütiges Video von Aaron Titus, um die Grundlagen des Internets zu verstehen.
- [How does the Internet work?](https://www.youtube.com/watch?v=x3c1ih2NJEg) Detailliertes, gut visualisiertes 9-minütiges Video.

## Tiefergehende Betrachtung

### Ein einfaches Netzwerk

Wenn zwei Computer miteinander kommunizieren müssen, müssen Sie sie entweder physisch (normalerweise mit einem [Ethernet-Kabel](https://en.wikipedia.org/wiki/Ethernet_crossover_cable)) oder drahtlos (zum Beispiel mit [Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi) oder [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth)-Systemen) verbinden. Alle modernen Computer können jede dieser Verbindungen aufrechterhalten.

> [!NOTE]
> Für den Rest dieses Artikels sprechen wir nur von physischen Kabeln, aber drahtlose Netzwerke funktionieren genauso.

![Zwei verbundene Computer](internet-schema-1.png)

Ein solches Netzwerk ist nicht auf zwei Computer beschränkt. Sie können so viele Computer verbinden, wie Sie möchten. Aber es wird schnell kompliziert. Wenn Sie versuchen, zehn Computer zu verbinden, benötigen Sie 45 Kabel mit jeweils neun Steckern pro Computer!

![Zehn Computer alle zusammen](internet-schema-2.png)

Um dieses Problem zu lösen, wird jeder Computer in einem Netzwerk mit einem speziellen kleinen Computer namens _Netzwerk-Switch_ (oder kurz _Switch_) verbunden. Diese Switch hat nur eine Aufgabe: Wie ein Weichensteller in einem Bahnhof sorgt er dafür, dass Nachrichten, die von einem bestimmten Computer gesendet werden, nur beim Zielcomputer ankommen. Um eine Nachricht an Computer B zu senden, sendet Computer A die Nachricht an den Switch, der wiederum die Nachricht an Computer B weiterleitet — Computer B erhält keine Nachrichten, die für andere Computer bestimmt sind, und keine der Nachrichten für Computer B erreichen andere Computer im lokalen Netzwerk.

Sobald wir einen Switch in das System integrieren, benötigt unser Netzwerk von 10 Computern nur noch 10 Kabel: einen einzelnen Stecker für jeden Computer und einen Switch mit 10 Steckern.

![Zehn Computer mit einem Switch](internet-schema-3.png)

### Ein Netzwerk von Netzwerken

Soweit so gut. Aber was ist mit dem Verbinden von Hunderten, Tausenden, Milliarden Computern? Natürlich kann ein einzelner Switch nicht so weit skalieren, aber, wenn Sie genau hingesehen haben, haben wir gesagt, dass ein Switch ein Computer wie jeder andere ist, also was hindert uns daran, zwei Switches miteinander zu verbinden? Nichts, also machen wir das.

![Zwei verbundene Switches](internet-schema-4.png)

Man kann sich vorstellen, dass wir Switches unendlich miteinander verbinden können, um ein Netzwerk wie dieses zu bilden:

![Switches, die mit Switches verbunden sind](internet-schema-5.png)

In Wirklichkeit führt dies zu vielen ingenieurtechnischen Problemen. Je mehr Switches ein Paket durchlaufen muss, desto länger dauert es, bis es sein Ziel erreicht. Und man kann nicht einfach einen Baum von Switches haben, weil dann ein einzelner Switch-Ausfall einen großen Teil der Geräte möglicherweise trennen kann. Um dieses Problem zu lösen, halten wir jedes lokale Netzwerk so klein wie möglich und verbinden diese lokalen Netzwerke mit einem separaten Gerät, das als _Router_ bezeichnet wird. Ein Router ist ein Computer, der weiß, wie Nachrichten zwischen Netzwerken weitergeleitet werden. Der Router ist wie ein Postamt: Wenn ein Paket ankommt, liest er die Empfängeradresse und leitet das Paket direkt an den richtigen Empfänger weiter, ohne Schichten von Relais zu durchlaufen.

Ein solches Netzwerk kommt dem, was wir Internet nennen, sehr nahe. Wir brauchen nur das physische Medium (Kabel), um all diese Router zu verbinden. Glücklicherweise gab es eine solche Infrastruktur bereits vor dem Internet, nämlich das Telefonnetz. Um unser Netzwerk mit der Telefoninfrastruktur zu verbinden, benötigen wir ein spezielles Gerät namens _Modem_. Dieses _Modem_ wandelt die Informationen aus unserem Netzwerk in Informationen um, die von der Telefoninfrastruktur verwaltet werden können, und umgekehrt.

![Ein Router, der mit einem Modem verbunden ist](internet-schema-6.png)

Beachten Sie, dass der kommerzielle Router in Ihrem Zuhause wahrscheinlich eine Kombination aus einem Switch, einem Router und einem Modem in einem einzigen Gerät ist.

So sind wir mit der Telefoninfrastruktur verbunden. Der nächste Schritt besteht darin, die Nachrichten von unserem Netzwerk an das Netzwerk zu senden, das wir erreichen möchten. Dazu werden wir unser Netzwerk mit einem Internet-Dienstanbieter (ISP) verbinden. Ein ISP ist ein Unternehmen, das einige spezielle _Router_ verwaltet, die alle miteinander verbunden sind und auch auf die Router anderer ISPs zugreifen können. So wird die Nachricht von unserem Netzwerk durch das Netzwerk von ISP-Netzwerken zum Zielnetzwerk übertragen. Das Internet besteht aus dieser gesamten Infrastruktur von Netzwerken.

![Kompletter Internet-Stack](internet-schema-7.png)

### Computer finden

Wenn Sie eine Nachricht an einen Computer senden möchten, müssen Sie angeben, an welchen. Daher hat jeder mit einem Netzwerk verbundene Computer eine eindeutige Adresse, die ihn identifiziert, die sogenannte "IP-Adresse" (wobei IP für _Internet Protocol_ steht). Es ist eine Adresse aus einer Reihe von vier Zahlen, die durch Punkte getrennt sind, zum Beispiel: `192.0.2.172`.

Das ist für Computer in Ordnung, aber wir Menschen haben Schwierigkeiten, uns solche Adressen zu merken. Um es einfacher zu machen, können wir eine IP-Adresse mit einem für Menschen lesbaren Namen aliasieren, der als _Domain-Name_ bezeichnet wird. Zum Beispiel (zum Zeitpunkt des Schreibens; IP-Adressen können sich ändern) ist `google.com` der Domain-Name, der über der IP-Adresse `142.250.190.78` verwendet wird. Die Verwendung des Domain-Namens ist also der einfachste Weg für uns, einen Computer über das Internet zu erreichen.

![Zeigt, wie ein Domain-Name eine IP-Adresse aliasieren kann](dns-ip.png)

### Internet und das Web

Wie Ihnen vielleicht auffällt, verwenden wir normalerweise den Domain-Namen, um beim Surfen im Web mit einem Webbrowser zu einer Website zu gelangen. Bedeutet das, dass Internet und Web dasselbe sind? So einfach ist das nicht. Wie wir gesehen haben, ist das Internet eine technische Infrastruktur, die es Milliarden von Computern ermöglicht, miteinander verbunden zu sein. Unter diesen Computern können einige Computer (genannt _Web-Server_) Nachrichten senden, die für Webbrowser verständlich sind. Das _Internet_ ist eine Infrastruktur, während das _Web_ ein Dienst ist, der auf dieser Infrastruktur aufgebaut ist. Es ist erwähnenswert, dass es neben dem Web mehrere andere Dienste gibt, die auf dem Internet aufgebaut sind, wie E-Mail und {{Glossary("IRC", "IRC")}}.

### Intranets und Extranets

Intranets sind _private_ Netzwerke, die auf die Mitglieder einer bestimmten Organisation beschränkt sind.
Sie werden häufig verwendet, um ein Portal bereitzustellen, über das Mitglieder sicher auf gemeinsame Ressourcen zugreifen, zusammenarbeiten und kommunizieren können.
Beispielsweise könnte das Intranet einer Organisation Webseiten zum Teilen von Abteilungs- oder Team-Informationen, gemeinsame Laufwerke zum Verwalten von Dokumenten und Dateien,
Portale für die Durchführung von Geschäftsverwaltungsaufgaben und Collaboration-Tools wie Wikis, Diskussionsforen und Messaging-Systeme bereitstellen.

Extranets sind Intranets sehr ähnlich, außer dass sie ein privates Netzwerk ganz oder teilweise öffnen, um mit anderen Organisationen zu teilen und zusammenzuarbeiten.
Sie werden in der Regel verwendet, um sicher und geschützt Informationen mit Kunden und Stakeholdern zu teilen, die eng mit einem Unternehmen zusammenarbeiten.
Oft sind ihre Funktionen ähnlich wie die eines Intranets: Informations- und Dateifreigabe, Collaboration-Tools, Diskussionsforen usw.

Sowohl Intranets als auch Extranets nutzen dieselbe Infrastruktur wie das Internet und verwenden dieselben Protokolle.
Daher können sie von autorisierten Mitgliedern von verschiedenen physischen Standorten aus zugänglich sein.

![Grafische Darstellung, wie Extranet und Intranet funktionieren](internet-schema-8.png)

## Nächste Schritte

- [Wie das Web funktioniert](/de/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
- [Verständnis des Unterschieds zwischen einer Webseite, einer Website, einem Webserver und einer Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web)
- [Verständnis von Domain-Namen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
