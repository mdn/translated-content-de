---
title: Wie funktioniert das Internet?
slug: Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work
l10n:
  sourceCommit: f33de00c56ac53878eb2cb7cb5849df1f9ab8db7
---

Dieser Artikel erläutert, was das Internet ist und wie es funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Keine, aber wir empfehlen Ihnen, zuerst den
        <a href="/de/docs/Learn_web_development/Howto/Design_and_accessibility/Thinking_before_coding"
          >Artikel über das Festlegen von Projektzielen</a
        >
        zu lesen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie werden die Grundlagen der technischen Infrastruktur des Webs und den Unterschied zwischen Internet und Web erlernen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Das **Internet** ist das Rückgrat des Webs, die technische Infrastruktur, die das Web möglich macht. Im einfachsten Sinne ist das Internet ein großes Netzwerk von Computern, die alle miteinander kommunizieren.

[Die Geschichte des Internets ist etwas undurchsichtig](https://en.wikipedia.org/wiki/Internet#History). Es begann in den 1960er Jahren als ein von der US-Armee finanziertes Forschungsprojekt und entwickelte sich in den 1980er Jahren zu einer öffentlichen Infrastruktur mit Unterstützung vieler öffentlicher Universitäten und privater Unternehmen. Die verschiedenen Technologien, die das Internet unterstützen, haben sich im Laufe der Zeit weiterentwickelt, aber die Funktionsweise hat sich nicht wesentlich verändert: Das Internet ist eine Möglichkeit, Computer miteinander zu verbinden und sicherzustellen, dass sie, egal was passiert, einen Weg finden, verbunden zu bleiben.

## Videos über das Internet

- [Wie das Internet in 5 Minuten funktioniert](https://www.youtube.com/watch?v=7_LPdttKXPc): Ein 5-minütiges Video von Aaron Titus, um die Grundlagen des Internets zu verstehen.
- [Wie funktioniert das Internet?](https://www.youtube.com/watch?v=x3c1ih2NJEg) Ein detailliertes und gut visualisiertes 9-minütiges Video.

## Vertiefung

### Ein einfaches Netzwerk

Wenn zwei Computer kommunizieren müssen, müssen Sie sie entweder physisch (normalerweise mit einem [Ethernet-Kabel](https://en.wikipedia.org/wiki/Ethernet_crossover_cable)) oder drahtlos (zum Beispiel mit [Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi) oder [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth)-Systemen) verbinden. Alle modernen Computer können diese Verbindungen aufrechterhalten.

> [!NOTE]
> Im restlichen Artikel werden wir nur über physische Kabel sprechen, aber drahtlose Netzwerke funktionieren genauso.

![Zwei miteinander verbundene Computer](internet-schema-1.png)

Ein solches Netzwerk ist nicht auf zwei Computer beschränkt. Sie können so viele Computer verbinden, wie Sie möchten. Aber es wird schnell kompliziert. Wenn Sie versuchen, beispielsweise zehn Computer zu verbinden, benötigen Sie 45 Kabel mit neun Steckern pro Computer!

![Zehn Computer zusammen](internet-schema-2.png)

Um dieses Problem zu lösen, wird jeder Computer in einem Netzwerk mit einem speziellen kleinen Computer verbunden, der _Netzwerkswitch_ (oder kurz _Switch_) genannt wird. Dieser Switch hat nur eine Aufgabe: Ähnlich einem Weichensteller in einem Bahnhof stellt er sicher, dass die von einem bestimmten Computer gesendeten Nachrichten nur bei ihrem Ziel-Computer ankommen. Um eine Nachricht an Computer B zu senden, sendet Computer A die Nachricht an den Switch, der wiederum die Nachricht an Computer B weiterleitet — Computer B erhält keine Nachrichten, die für andere Computer bestimmt sind, und keine der Nachrichten für Computer B erreicht andere Computer im lokalen Netzwerk.

Sobald wir einen Switch in das System einfügen, benötigt unser Netzwerk mit 10 Computern nur 10 Kabel: einen einzigen Stecker für jeden Computer und einen Switch mit 10 Steckern.

![Zehn Computer mit einem Switch](internet-schema-3.png)

### Ein Netzwerk von Netzwerken

So weit, so gut. Aber was ist mit der Verbindung von Hunderten, Tausenden, Milliarden von Computern? Natürlich kann ein einziger Switch nicht so weit skalieren, aber wenn Sie genau lesen, sagten wir, dass ein Switch ein Computer wie jeder andere ist, also was hält uns davon ab, zwei Switches miteinander zu verbinden? Nichts, also tun wir das.

![Zwei miteinander verbundene Switches](internet-schema-4.png)

Sie können sich vorstellen, dass wir Switches unendlich miteinander verbinden können, um ein Netzwerk wie dieses zu bilden:

![Switches, die mit Switches verbunden sind](internet-schema-5.png)

In der Realität führt dies zu vielen technische Herausforderungen. Je mehr Switches ein Paket durchlaufen muss, desto länger dauert es, bis es sein Ziel erreicht. Und Sie können nicht nur eine Baumstruktur von Switches haben, denn ein einziger Switch-Ausfall kann einen großen Teil der Geräte trennen. Um dieses Problem zu lösen, halten wir jedes lokale Netzwerk so klein wie möglich und verbinden diese lokalen Netzwerke mit einem separaten Gerät, das _Router_ genannt wird. Ein Router ist ein Computer, der weiß, wie Nachrichten zwischen Netzwerken weitergeleitet werden. Der Router ist wie ein Postamt: Wenn ein Paket eintrifft, liest er die Empfängeradresse und leitet das Paket direkt an den richtigen Empfänger weiter, ohne durch mehrere Vermittlungsstellen zu gehen.

Ein solches Netzwerk kommt dem, was wir als Internet bezeichnen, sehr nahe. Wir benötigen nur noch das physische Medium (Kabel), um all diese Router zu verbinden. Glücklicherweise existierte eine solche Infrastruktur bereits vor dem Internet, und das ist das Telefonnetz. Um unser Netzwerk mit der Telefoninfrastruktur zu verbinden, benötigen wir ein spezielles Gerät namens _Modem_. Dieses _Modem_ wandelt die Informationen aus unserem Netzwerk in für die Telefoninfrastruktur handhabbare Informationen um und umgekehrt.

![Ein Router, der mit einem Modem verbunden ist](internet-schema-6.png)

Beachten Sie, dass der kommerzielle Router in Ihrem Zuhause wahrscheinlich eine Kombination aus einem Switch, einem Router und einem Modem, alles in einem Gerät, ist.

So sind wir mit der Telefoninfrastruktur verbunden. Der nächste Schritt ist es, die Nachrichten von unserem Netzwerk an das Netzwerk zu senden, das wir erreichen möchten. Dafür verbinden wir unser Netzwerk mit einem Internet Service Provider (ISP). Ein ISP ist ein Unternehmen, das einige spezielle _Router_ verwaltet, die alle miteinander verbunden sind und auch auf die Router anderer ISPs zugreifen können. Die Nachricht von unserem Netzwerk wird durch das Netzwerk von ISP-Netzwerken zum Zielnetzwerk geleitet. Das Internet besteht aus dieser gesamten Infrastruktur von Netzwerken.

![Vollständiger Internet-Stack](internet-schema-7.png)

### Computer finden

Wenn Sie eine Nachricht an einen Computer senden möchten, müssen Sie angeben, welcher. Daher hat jeder Computer, der mit einem Netzwerk verbunden ist, eine eindeutige Adresse, die ihn identifiziert, genannt "IP-Adresse" (wo IP für _Internet Protocol_ steht). Es ist eine Adresse, die aus einer Reihe von vier Zahlen besteht, die durch Punkte getrennt sind, zum Beispiel: `192.0.2.172`.

Das ist für Computer völlig in Ordnung, aber wir Menschen können sich solch eine Adresse schwer merken. Um die Sache zu erleichtern, können wir eine IP-Adresse mit einem menschenlesbaren Namen aliassen, der _Domain-Name_ genannt wird. Zum Beispiel (zum Zeitpunkt des Schreibens; IP-Adressen können sich ändern) ist `google.com` der Domain-Name, der über der IP-Adresse `142.250.190.78` verwendet wird. Der Domain-Name ist für uns der einfachste Weg, um über das Internet auf einen Computer zuzugreifen.

![Zeigt, wie ein Domain-Name eine IP-Adresse aliassen kann](dns-ip.png)

### Internet und das Web

Wie Sie vielleicht bemerken, verwenden wir beim Surfen im Web mit einem Webbrowser normalerweise den Domainnamen, um eine Website zu erreichen. Bedeutet das, dass Internet und Web dasselbe sind? So einfach ist es nicht. Wie wir gesehen haben, ist das Internet eine technische Infrastruktur, die es Milliarden von Computern ermöglicht, miteinander verbunden zu sein. Unter diesen Computern können einige Computer (genannt _Webserver_) Nachrichten senden, die von Webbrowsern verstanden werden können. Das _Internet_ ist eine Infrastruktur, während das _Web_ ein Dienst ist, der auf dieser Infrastruktur aufbaut. Es ist erwähnenswert, dass es mehrere andere Dienste gibt, die auf dem Internet basieren, wie E-Mail und {{Glossary("IRC", "IRC")}}.

### Intranets und Extranets

Intranets sind _private_ Netzwerke, die auf Mitglieder einer bestimmten Organisation beschränkt sind.
Sie werden häufig genutzt, um Mitgliedern sicher Zugang zu gemeinsamen Ressourcen zu bieten, die Zusammenarbeit und Kommunikation zu fördern.
Zum Beispiel könnte ein Intranet einer Organisation Webseiten zur gemeinsamen Nutzung von Abteilungs- oder Teaminformationen, freigegebene Laufwerke zur Verwaltung wichtiger Dokumente und Dateien,
Portale zur Erledigung von Verwaltungstätigkeiten und Kollaborationstools wie Wikis, Diskussionsforen und Nachrichtensysteme hosten.

Extranets sind den Intranets sehr ähnlich, öffnen jedoch ein ganzes oder einen Teil eines privaten Netzwerks, um den Austausch und die Zusammenarbeit mit anderen Organisationen zu ermöglichen.
Sie werden typischerweise genutzt, um sicher und geschützt Informationen mit Kunden und Partnern auszutauschen, die eng mit einem Unternehmen zusammenarbeiten.
Ihre Funktionen ähneln oft denen, die ein Intranet bietet: Informations- und Dateiaustausch, Kollaborationstools, Diskussionsforen usw.

Sowohl Intranets als auch Extranets laufen auf der gleichen Art von Infrastruktur wie das Internet und verwenden die gleichen Protokolle.
Daher können sie von autorisierten Mitgliedern von verschiedenen physischen Standorten aus abgerufen werden.

![Grafische Darstellung, wie Extranet und Intranet funktionieren](internet-schema-8.png)

## Nächste Schritte

- [Wie das Web funktioniert](/de/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
- [Verständnis des Unterschieds zwischen einer Webseite, einer Website, einem Webserver und einer Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web)
- [Verständnis von Domain-Namen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
