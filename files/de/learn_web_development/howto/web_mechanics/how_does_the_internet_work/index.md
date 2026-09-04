---
title: Wie funktioniert das Internet?
slug: Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work
l10n:
  sourceCommit: 3a5d88d0377791fea0700a772ca047f6c2463083
---

Dieser Artikel erläutert, was das Internet ist und wie es funktioniert.

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
        Sie werden die Grundlagen der technischen Infrastruktur des Webs und den Unterschied zwischen Internet und Web kennenlernen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Das **Internet** ist das Rückgrat des Webs, die technische Infrastruktur, die das Web möglich macht. Im wesentlichen ist das Internet ein großes Netzwerk von Computern, die alle miteinander kommunizieren.

[Die Geschichte des Internets ist etwas unklar](https://en.wikipedia.org/wiki/Internet#History). Es begann in den 1960er Jahren als ein von der US-Armee finanziertes Forschungsprojekt und entwickelte sich dann in den 1980er Jahren zu einer öffentlichen Infrastruktur mit Unterstützung vieler öffentlicher Universitäten und privater Unternehmen. Die verschiedenen Technologien, die das Internet unterstützen, haben sich im Laufe der Zeit weiterentwickelt, aber die Funktionsweise hat sich nicht wesentlich verändert: Das Internet ist ein Weg, um Computer miteinander zu verbinden und sicherzustellen, dass sie, egal was passiert, eine Möglichkeit finden, verbunden zu bleiben.

## Videos über das Internet

- [How the internet Works in 5 minutes](https://www.youtube.com/watch?v=7_LPdttKXPc): Ein 5-minütiges Video, um die Grundlagen des Internets von Aaron Titus zu verstehen.
- [How does the Internet work?](https://www.youtube.com/watch?v=x3c1ih2NJEg) Detailliertes, gut visualisiertes 9-minütiges Video.

## Vertiefter Einblick

### Ein einfaches Netzwerk

Wenn zwei Computer miteinander kommunizieren müssen, müssen Sie sie entweder physisch (normalerweise mit einem [Ethernet-Kabel](https://en.wikipedia.org/wiki/Ethernet_crossover_cable)) oder drahtlos (zum Beispiel mit [Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi) oder [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth) Systemen) verbinden. Alle modernen Computer können eine dieser Verbindungen aufrechterhalten.

> [!NOTE]
> Im Rest dieses Artikels werden wir nur über physische Kabel sprechen, aber drahtlose Netzwerke funktionieren genauso.

![Zwei Computer, die miteinander verbunden sind](internet-schema-1.png)

Ein solches Netzwerk ist nicht auf zwei Computer beschränkt. Sie können so viele Computer verbinden, wie Sie möchten. Aber es wird schnell kompliziert. Wenn Sie versuchen, zum Beispiel zehn Computer zu verbinden, benötigen Sie 45 Kabel mit jeweils neun Steckern pro Computer!

![Zehn Computer alle zusammen](internet-schema-2.png)

Um dieses Problem zu lösen, wird jeder Computer in einem Netzwerk mit einem speziellen kleinen Computer namens _Netzwerk-Switch_ (oder kurz _Switch_) verbunden. Dieser Switch hat nur eine Aufgabe: wie ein Fahrdienstleiter am Bahnhof leitet er Nachrichten an ihre vorgesehenen Empfänger weiter. Um eine Nachricht an Computer B zu senden, sendet Computer A die Nachricht an den Switch, der wiederum die Nachricht an Computer B weiterleitet.

Sobald wir ein Switch in das System eingeführt haben, benötigt unser Netzwerk von 10 Computern nur noch 10 Kabel: einen einzigen Stecker für jeden Computer und einen Switch mit 10 Steckern.

![Zehn Computer mit einem Switch](internet-schema-3.png)

Um Computer auseinanderzuhalten, verwendet der Switch _MAC-Adressen_, die Netzwerk-Schnittstellen für die Zustellung innerhalb des lokalen Netzwerks identifizieren. MAC-Adressen sind wie Fingerabdrücke; sie werden typischerweise vom Hersteller zugewiesen, können aber aus Datenschutzgründen auch durch Software zugewiesen oder geändert werden. Jede Nachricht enthält die MAC-Adressen des Absenders und des Empfängers. Der Switch liest die Adresse des Absenders und merkt sich, von welcher Verbindung die Nachricht kam, sodass er weiß, wohin er zukünftige Nachrichten an diesen Absender weiterleiten muss. Wenn er noch nicht gelernt hat, wo sich ein Empfänger befindet, leitet er die Nachricht über alle seine anderen Verbindungen weiter. Wenn der Empfänger eine Nachricht zurücksendet, lernt der Switch auch dessen Position.

### Ein Netzwerk von Netzwerken

Soweit so gut. Aber was ist mit der Verbindung von Hunderten, Tausenden, Milliarden von Computern? Natürlich kann ein einzelner Switch nicht so weit skalieren, aber, wenn Sie aufmerksam gelesen haben, haben wir gesagt, dass ein Switch ein Computer wie jeder andere ist. Was hindert uns also daran, zwei Switches zusammenzuschalten? Nichts, also machen wir das doch.

![Zwei Switches, die miteinander verbunden sind](internet-schema-4.png)

Sie können sich vorstellen, dass wir Switches unendlich miteinander verbinden können, um ein Netzwerk wie dieses zu bilden:

![Switches, die zu Switches verbunden sind](internet-schema-5.png)

Das Verbinden von Switches auf diese Weise erweitert ein einzelnes lokales Netzwerk. Jeder Switch hat eine umfangreiche Karte, welche Verbindung für jede MAC-Adresse in seinem lokalen Netzwerk zu verwenden ist. Wenn Sie zehn Milliarden Computer in diesem Netzwerk verbinden würden, müsste jeder Switch bis zu zehn Milliarden MAC-Adressen speichern. Wann immer die Adresse des Empfängers unbekannt ist (oder aufgrund von Inaktivität gelöscht wurde), müssen Switches die Nachricht an alle Computer im lokalen Netzwerk ausstrahlen. Je größer das Netzwerk wird, desto kostspieliger wird es, einzelne Geräte zu verfolgen und unbekannte Empfänger zu finden.

Das Hauptproblem ist, dass unsere Adressen keine Hierarchie haben und nicht die Netzwerkstruktur widerspiegeln – es ist, als ob man versuchen würde, herauszufinden, an wen Post zu liefern ist, indem man jeden Fingerabdruck vergleicht. Um dieses Problem zu lösen, teilen wir Computer in separate lokale Netzwerke auf und verbinden diese Netzwerke mithilfe eines Geräts namens _Router_. Dieser verwendet eine andere Art von Adresse, eine _{{Glossary("IP_address", "IP-Adresse")}}_, die eine vierstellige Zahlenfolge wie `142.250.190.78` ist. Anders als MAC-Adressen, die „Fingerabdrücke“ sind, sind IP-Adressen „Straßenadressen“ und werden beim Verbinden eines Computers mit einem Netzwerk zugewiesen, identifiziert im IP-Adresse durch ein gemeinsames _Präfix_. Ein Router kann daher Weiterleitungsanweisungen für eine ganze Gruppe von Adressen speichern (z. B. „weiterleiten an diesen Router, wann immer die IP-Adresse mit `142.250` beginnt“), ohne den Standort jedes einzelnen Computers in dieser Gruppe lernen zu müssen.

> [!NOTE]
> Sie fragen sich vielleicht, warum wir MAC-Adressen und Switches benötigen, wenn IP-Adressen und Router auch End-to-End-Netzwerke durchführen können. Switches haben viele praktische Vorteile. Einer davon ist, dass ein geswitchtes lokales Netzwerk einem Gerät ermöglicht, dieselbe IP-Adresse beizubehalten, während es zwischen Verbindungen innerhalb dieses Netzwerks wechselt (z. B. zwischen zwei Wi-Fi-Zugangspunkten): Der Switch lernt neu, an welchem Anschluss sich Ihre MAC-Adresse befindet, sodass Ihre IP-Adresse – und alle Verbindungen, die sie bereits verwenden – weiterhin funktionieren. Ein weiterer Punkt ist, dass Router selbst MAC-Adressen benötigen: Um ein Paket an den nächsten Router entlang des Weges weiterzuleiten, muss ein Router weiterhin identifizieren, welches Gerät im gemeinsamen Netzwerk es empfangen soll.

Ein solches Netzwerk kommt dem, was wir Internet nennen, sehr nahe. Wir benötigen nur noch das physische Medium (Kabel), um all diese Router zu verbinden. Zum Glück existierte eine solche Infrastruktur bereits vor dem Internet, nämlich das Telefonnetz. Um unser Netzwerk mit der Telefoninfrastruktur zu verbinden, benötigen wir ein spezielles Gerät namens _Modem_. Dieses _Modem_ wandelt die Informationen aus unserem Netzwerk in Informationen um, die von der Telefoninfrastruktur verwaltet werden können, und umgekehrt.

![Ein Router, der mit einem Modem verbunden ist](internet-schema-6.png)

Beachten Sie, dass der kommerzielle Router in Ihrem Zuhause wahrscheinlich eine Kombination aus einem Switch, einem Router und einem Modem in einem einzigen Gerät ist.

Wir sind also mit der Telefoninfrastruktur verbunden. Der nächste Schritt ist das Senden der Nachrichten von unserem Netzwerk zu dem Netzwerk, das wir erreichen möchten. Dazu werden wir unser Netzwerk mit einem Internet Service Provider (ISP) verbinden. Ein ISP ist ein Unternehmen, das einige spezielle _Router_ verwaltet, die alle miteinander verbunden sind und auch auf die Router anderer ISPs zugreifen können. So wird die Nachricht von unserem Netzwerk durch das Netzwerk der ISP-Netzwerke zum Zielnetzwerk getragen. Das Internet besteht aus dieser gesamten Infrastruktur von Netzwerken.

![Vollständiger Internet-Stack](internet-schema-7.png)

### Domain-Namen

IP-Adressen sind für Computer völlig ausreichend, aber wir Menschen haben Schwierigkeiten, sich solche Adressen zu merken. Um die Sache zu erleichtern, können wir einer IP-Adresse einen menschenlesbaren Namen zuweisen, der als _Domain-Name_ bezeichnet wird. Zum Beispiel (zum Zeitpunkt des Schreibens; IP-Adressen können sich ändern) ist `google.com` der Domain-Name, der über der IP-Adresse `142.250.190.78` verwendet wird. Die Verwendung des Domain-Namens ist also der einfachste Weg für uns, einen Computer über das Internet zu erreichen.

![zeigt, wie ein Domain-Name eine IP-Adresse aliasieren kann](dns-ip.png)

### Internet und das Web

Wie Sie vielleicht bemerken, verwenden wir normalerweise den Domain-Namen, um eine Website zu erreichen, wenn wir mit einem Webbrowser im Web browsen. Bedeutet das, dass das Internet und das Web dasselbe sind? So einfach ist es nicht. Wie wir gesehen haben, ist das Internet eine technische Infrastruktur, die es ermöglicht, Milliarden von Computern miteinander zu verbinden. Zu diesen Computern gehören einige Computer (sogenannte _Webserver_), die Nachrichten senden können, die für Webbrowser verständlich sind. Das _Internet_ ist eine Infrastruktur, während das _Web_ ein Dienst ist, der auf der Infrastruktur aufgebaut ist. Es ist erwähnenswert, dass es mehrere andere Dienste gibt, die auf dem Internet aufbauen, wie zum Beispiel E-Mail und {{Glossary("IRC", "IRC")}}.

### Intranets und Extranets

Intranets sind _private_ Netzwerke, die auf Mitglieder einer bestimmten Organisation beschränkt sind.
Sie werden häufig genutzt, um einen sicheren Zugang zu gemeinsam genutzten Ressourcen, Zusammenarbeit und Kommunikation zu ermöglichen.
Ein Intranet einer Organisation könnte zum Beispiel Webseiten für das Teilen von Abteilungs- oder Teaminformationen, gemeinsame Laufwerke zur Verwaltung wichtiger Dokumente und Dateien,
Portale zur Durchführung von Geschäftsverwaltungstätigkeiten sowie Kollaborationstools wie Wikis, Diskussionsforen und Nachrichtensysteme hosten.

Extranets sind Intranets sehr ähnlich, mit dem Unterschied, dass sie das gesamte oder einen Teil des privaten Netzwerks öffnen, um den Austausch und die Zusammenarbeit mit anderen Organisationen zu ermöglichen.
Sie werden in der Regel genutzt, um Informationen sicher mit Kunden und Interessengruppen zu teilen, die eng mit einem Unternehmen zusammenarbeiten.
Oft bieten ihre Funktionen ähnliche Dienste wie ein Intranet: Informations- und Dateiaustausch, Kollaborationstools, Diskussionsforen usw.

Sowohl Intranets als auch Extranets laufen auf derselben Art von Infrastruktur wie das Internet und verwenden dieselben Protokolle.
Daher können sie von berechtigten Mitgliedern an verschiedenen physischen Standorten abgerufen werden.

![Graphische Darstellung wie Extranet und Intranet funktionieren](internet-schema-8.png)

## Nächste Schritte

- [Wie das Web funktioniert](/de/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
- [Verständnis des Unterschieds zwischen einer Webseite, einer Website, einem Webserver und einer Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web)
- [Verständnis von Domain-Namen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
