---
title: Strategien zur Durchführung von Tests
slug: Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Introduction","Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS", "Learn/Tools_and_testing/Cross_browser_testing")}}

Dieser Artikel erklärt, wie Cross-Browser-Tests durchgeführt werden: wie Sie auswählen, welche Browser und Geräte getestet werden sollen, wie Sie diese Browser und Geräte tatsächlich testen und wie Sie mit Benutzergruppen testen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>; ein Verständnis der
        <a
          href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >Grundprinzipien des Cross-Browser-Tests</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis für die hochrangigen Konzepte im Zusammenhang mit
        Cross-Browser-Tests zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Auswahl der zu testenden Browser und Geräte

Da es nicht möglich ist, jede Kombination aus Browser und Gerät zu testen, reicht es aus, sicherzustellen, dass Ihre Website auf den wichtigsten funktioniert. In der Praxis bedeutet "wichtig" oft "häufig unter der Zielgruppe verwendet."

Sie können Browser und Geräte nach dem Grad der Unterstützung klassifizieren, den Sie beabsichtigen zu geben. Zum Beispiel:

1. A-Stufe: Gewöhnliche/moderne Browser — Bekannt als fähig. Gründlich testen und volle Unterstützung bieten.
2. B-Stufe: Ältere/weniger fähige Browser — Bekannt als nicht so fähig. Testen und ein grundlegenderes Erlebnis bieten, das vollen Zugang zu den Kerninformationen und -diensten bietet.
3. C-Stufe: Seltene/unbekannte Browser — nicht testen, aber annehmen, dass sie fähig sind. Die vollständige Website bereitstellen, die zumindest mit den durch unser defensives Coden bereitgestellten Fallbacks funktionieren sollte.

In den folgenden Abschnitten werden wir ein Unterstützungsdiagramm in diesem Format erstellen.

> [!NOTE]
> Yahoo hat diesen Ansatz zuerst populär gemacht, mit ihrem [Graded Browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support)-Ansatz.

### Vorhersage der am häufigsten verwendeten Browser Ihrer Zielgruppe

Dies umfasst typischerweise fundierte Vermutungen basierend auf Benutzerdemografien. Angenommen, Ihre Benutzer befinden sich in Nordamerika und Westeuropa:

Eine schnelle Online-Suche zeigt Ihnen, dass die meisten Menschen in Nordamerika und Westeuropa Windows- oder Mac-Desktops/-Laptops verwenden, wobei die Hauptbrowser Chrome, Firefox, Safari und Edge sind. Sie würden wahrscheinlich nur die neuesten Versionen dieser Browser testen wollen, da diese regelmäßig aktualisiert werden. Diese sollten alle in die A-Stufe eingeordnet werden.

Die meisten Menschen in dieser Demografie verwenden auch entweder iOS- oder Android-Telefone, also sollten Sie wahrscheinlich die neuesten Versionen von iOS Safari, die letzten paar Versionen des alten Android-Standardbrowsers sowie Chrome und Firefox für iOS und Android testen. Diese sollten idealerweise sowohl auf einem Telefon als auch auf einem Tablet getestet werden, um sicherzustellen, dass responsive Designs funktionieren.

Opera Mini ist nicht sehr fähig, komplexes JavaScript auszuführen, daher sollten wir es auch in die B-Stufe einordnen.

Daher haben wir unsere Wahl der zu testenden Browser auf den Browsern basiert, von denen wir erwarten, dass unsere Benutzer sie verwenden. Dies ergibt das folgende Unterstützungsdiagramm:

1. A-Stufe: Chrome und Firefox für Windows/Mac, Safari für Mac, Edge für Windows, iOS Safari für iPhone/iPad, Android-Standardbrowser (letzte zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (letzte zwei Versionen) auf Telefon/Tablet
2. B-Stufe: Opera Mini
3. C-Stufe: n/a

Wenn Ihre Zielgruppe größtenteils woanders liegt, können sich die gängigsten Browser und Betriebssysteme von den oben genannten unterscheiden.

> [!NOTE]
> "Der CEO meiner Firma benutzt ein Blackberry, also sollten wir sicherstellen, dass es darauf gut aussieht" kann auch etwas sein, das berücksichtigt werden sollte.

### Browserstatistiken

Einige Websites zeigen, welche Browser in einer bestimmten Region beliebt sind. Zum Beispiel gibt [Statcounter](https://gs.statcounter.com/) einen Überblick über Trends in Nordamerika.

### Nutzung von Analytics

Eine viel genauere Datenquelle, wenn Sie sie bekommen können, ist eine Analytics-App wie [Google Analytics](https://marketingplatform.google.com/about/analytics/), die Ihnen genau sagt, welche Browser die Leute verwenden, um Ihre Website zu besuchen. Natürlich setzt dies voraus, dass Sie bereits eine Website haben, auf der Sie es verwenden können, was für ganz neue Websites nicht geeignet ist.

Sie könnten auch in Erwägung ziehen, quelloffene und datenschutzorientierte Analyseplattformen wie [Open Web Analytics](https://www.openwebanalytics.com/) und [Matomo](https://matomo.org/) zu verwenden. Sie erwarten, dass Sie die Analyseplattform selbst hosten.

#### Einrichten von Google Analytics

1. Zuerst benötigen Sie ein Google-Konto. Melden Sie sich mit diesem Konto bei [Google Analytics](https://marketingplatform.google.com/about/analytics/) an.
2. Wählen Sie die Option [Google Analytics](https://analytics.google.com/analytics/web/) (Web) und klicken Sie auf die Schaltfläche _Registrieren_.
3. Geben Sie Ihre Website-/App-Details auf der Registrierungsseite ein. Dies ist relativ intuitiv einzurichten; das wichtigste Feld, das richtig sein muss, ist die Website-URL. Dies muss die Stamm-URL Ihrer Site/App sein.
4. Sobald Sie alles ausgefüllt haben, drücken Sie die Schaltfläche _Tracking-ID abrufen_ und akzeptieren Sie die angezeigten Nutzungsbedingungen.
5. Die nächste Seite bietet Ihnen einige Code-Snippets und weitere Anweisungen. Für eine einfache Website müssen Sie den _Website-Tracking_-Codeblock kopieren und in alle verschiedenen Seiten einfügen, die Sie mit Google Analytics auf Ihrer Site verfolgen möchten. Sie könnten die Snippets unter Ihrem abschließenden `</body>`-Tag platzieren oder an einem anderen geeigneten Ort, der verhindert, dass sie mit Ihrem Anwendungscode vermischt werden.
6. Laden Sie die Änderungen auf den Entwicklungsserver hoch oder wohin auch immer Sie Ihren Code benötigen.

Das war's! Ihre Website sollte jetzt bereit sein, Analysedaten zu melden.

#### Analyse der Analysedaten

Jetzt sollten Sie in der Lage sein, zur [Analytics-Webseite](https://analytics.google.com/analytics/web/) zurückzugehen und die gesammelten Daten bezüglich Ihrer Website anzusehen (Sie müssen natürlich etwas Zeit lassen, damit tatsächlich einige Daten gesammelt werden).

Standardmäßig sollten Sie die Registerkarte Berichterstellung wie folgt sehen:

![So sammelt Google Analytics Daten in seinem Hauptberichtsdashboard](analytics-reporting.png)

Es gibt eine riesige Menge an Daten, die Sie mit Google Analytics betrachten könnten — benutzerdefinierte Berichte in verschiedenen Kategorien usw. — und wir haben nicht die Zeit, alles zu besprechen.
[Erste Schritte mit Analytics](https://support.google.com/analytics/answer/9304153) bietet einige nützliche Anleitungen zu Berichten (und mehr) für Anfänger.

Sie können sehen, welche Browser und Betriebssysteme Ihre Benutzer verwenden, indem Sie im linken Menü _Zielgruppe > Technologie > Browser & Betriebssystem_ auswählen.

> [!NOTE]
> Bei der Verwendung von Google Analytics müssen Sie auf irreführende Vorurteile achten, z.B.: "Wir haben keine Firefox Mobile-Nutzer" könnte Sie dazu verleiten, die Unterstützung für Firefox Mobile nicht zu beachten. Aber Sie werden keine Firefox Mobile-Nutzer haben, wenn die Website von vornherein auf Firefox Mobile nicht funktionierte.

### Weitere Überlegungen

Sie sollten Barrierefreiheit als Stufe A-Testanforderung einbeziehen (wir werden genau erläutern, was Sie in unserem Artikel [Umgang mit häufigen Barrierefreiheitsproblemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility) testen sollten).

Außerdem sollten Sie sich der situationsspezifischen Bedürfnisse bewusst sein. Wenn Ihr Produkt beispielsweise auf einen Markt abzielt, auf dem Mobiltelefone das primäre Mittel für den Internetzugang sind, sollten Sie wahrscheinlich die Unterstützung mobiler Browser priorisieren.

### Endgültiges Unterstützungsdiagramm

Unser endgültiges Unterstützungsdiagramm wird folglich so aussehen:

1. A-Stufe: Chrome und Firefox für Windows/Mac, Safari für Mac und Edge (die letzten zwei Versionen jeder), iOS Safari für iPhone/iPad, Android-Standardbrowser (letzte zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (letzte zwei Versionen) auf Telefon/Tablet. Barrierefreiheit, die häufige Tests besteht.
2. B-Stufe: Opera Mini.
3. C-Stufe: Opera, andere Nischenmoderne Browser.

## Was werden Sie testen?

Wenn Sie eine neue Ergänzung zu Ihrem Codebasis haben, die getestet werden muss, sollten Sie, bevor Sie mit dem Testen beginnen, eine Liste der Testanforderungen schreiben, die erfüllt werden müssen, um akzeptiert zu werden. Diese Anforderungen können visuell oder funktional sein — beides kombiniert, um ein nutzbares Website-Feature zu schaffen.

Betrachten Sie das folgende Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html), und auch das [Beispiel, das live läuft](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)):

![Wie man ein Test-Szenario mit dem Design und den Benutzeranforderungen vorbereitet](sliding-box-demo.png)

Testkriterien für dieses Feature könnten so geschrieben werden:

A und B Stufe:

- Der Button sollte durch das primäre Kontrollmechanismus des Benutzers aktivierbar sein, was auch immer es ist — dies sollte Maus, Tastatur und Touch umfassen.
- Das Umschalten des Buttons sollte die Informationsbox erscheinen/verschwinden lassen.
- Der Text sollte lesbar sein.
- Sehbehinderte Benutzer mit Bildschirmlesern sollten in der Lage sein, auf den Text zuzugreifen.

A-Stufe:

- Die Informationsbox sollte sich sanft animieren, wenn sie erscheint/verschwindet.
- Der Farbverlauf und der Textschatten sollten erscheinen, um das Aussehen der Box zu verbessern.

Sie könnten bemerken, dass der Button nicht nur mit der Tastatur verwendbar ist. Wir könnten dies mit JavaScript beheben, um eine Tastatursteuerung für das Umschalten zu implementieren, oder einen anderen Ansatz verwenden.

Diese Testkriterien sind nützlich, weil:

- Sie geben Ihnen eine Reihe von Schritten, die Sie befolgen können, wenn Sie Tests durchführen.
- Sie können leicht in Anweisungen für Benutzergruppen umgewandelt werden, die Tests durchführen (z.B. "Versuchen Sie, den Button mit Ihrer Maus zu aktivieren, und dann mit der Tastatur…") — siehe [Benutzertests](#benutzertests) unten.
- Sie können auch eine Grundlage für das Schreiben automatisierter Tests bieten. Es ist einfacher, solche Tests zu schreiben, wenn Sie genau wissen, was Sie testen möchten und was die Erfolgskriterien sind (siehe [Selenium](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment#selenium), später in der Serie).

## Einrichtung eines Testlabors

Eine Möglichkeit, Browsertests durchzuführen, besteht darin, die Tests selbst durchzuführen. Dazu werden Sie wahrscheinlich eine Kombination aus physischen Geräten und emulierten Umgebungen verwenden (entweder mit einem Emulator oder einer virtuellen Maschine).

### Physische Geräte

Es ist im Allgemeinen besser, ein echtes Gerät mit dem Browser zu haben, den Sie testen möchten — dies bietet die größte Genauigkeit in Bezug auf das Verhalten und die allgemeine Benutzererfahrung. Sie möchten wahrscheinlich so etwas wie das Folgende für ein vernünftiges Einstiegsgerätelabor:

- Einen Mac, mit den installierten Browsern, die Sie testen müssen — dies kann Firefox, Chrome, Opera und Safari umfassen.
- Einen Windows-PC, mit den installierten Browsern, die Sie testen müssen — dies kann Edge (oder IE), Chrome, Firefox und Opera umfassen.
- Ein Android-Telefon und -Tablet mit höherer Spezifikation mit dem installierten Browser, den Sie testen müssen — dies kann Chrome, Firefox und Opera Mini für Android, sowie den originalen Android-Standardbrowser umfassen.
- Ein iOS-Telefon und -Tablet mit höherer Spezifikation mit den installierten Browsern, die Sie testen müssen — dies kann iOS Safari und Chrome, Firefox und Opera Mini für iOS umfassen.

Die folgenden sind ebenfalls gute Optionen, wenn Sie sie bekommen können:

- Einen Linux-PC verfügbar, falls Sie bugspezifische Tests für Linux-Versionen von Browsern benötigen. Linux-Benutzer verwenden häufig Firefox, Opera und Chrome. Wenn Sie nur eine Maschine zur Verfügung haben, könnten Sie in Betracht ziehen, eine Dual-Boot-Maschine einzurichten, die Linux und Windows auf separaten Partitionen ausführt. Der Ubuntu-Installer macht dies recht einfach einzurichten; siehe [WindowsDualBoot](https://help.ubuntu.com/community/WindowsDualBoot) für Hilfe.
- Ein paar Geräte mit niedrigerer Spezifikation, damit Sie die Leistung von Funktionen wie Animationen auf weniger leistungsstarken Prozessoren testen können.

Ihr Hauptarbeitsrechner kann auch ein Ort sein, um andere Tools für spezielle Zwecke zu installieren, wie z.B. Tools zur Prüfung der Barrierefreiheit, Bildschirmleser und Emulatoren/virtuelle Maschinen.

Einige größere Unternehmen haben Gerätekammern, die eine sehr große Auswahl verschiedener Geräte lagern, was Entwicklern ermöglicht, Bugs auf sehr spezifischen Browser-/Gerätekombinationen aufzuspüren. Kleinere Unternehmen und Einzelpersonen sind im Allgemeinen nicht in der Lage, ein so ausgeklügeltes Labor zu finanzieren, und begnügen sich daher in der Regel mit kleineren Laboren, Emulatoren, virtuellen Maschinen und kommerziellen Test-Apps.

Wir werden jede der anderen Optionen unten behandeln.

> [!NOTE]
> Einige Bemühungen wurden unternommen, um öffentlich zugängliche Gerätekammern zu schaffen — siehe [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/).

> [!NOTE]
> Wir müssen auch die Barrierefreiheit in Betracht ziehen — es gibt eine Reihe nützlicher Tools, die Sie auf Ihrem Rechner installieren können, um Barrierefreiheitstests zu erleichtern, aber wir werden dies im Artikel "Umgang mit häufigen Barrierefreiheitsproblemen" später im Kurs behandeln.

### Emulatoren

Emulatoren sind im Wesentlichen Programme, die auf Ihrem Computer laufen und ein Gerät oder bestimmte Gerätebedingungen irgendeiner Art emulieren, sodass Sie einige Ihrer Tests bequemer ausführen können, ohne eine bestimmte Hardware-/Softwarekombination finden zu müssen, um zu testen.

Ein Emulator könnte so einfach sein wie das Testen einer Gerätebedingung. Wenn Sie z.B. ein schnelles und einfaches Testen Ihrer Breiten-/Höhen-Media-Queries für ein responsives Design durchführen möchten, könnten Sie den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) von Firefox verwenden. Safari hat auch einen ähnlichen Modus, der aktiviert werden kann, indem Sie zu _Safari > Einstellungen_ gehen und _Entwicklungsmenü einblenden_ auswählen, dann _Entwickeln > Responsive Design Modus aktivieren_ wählen. Chrome hat auch etwas Ähnliches: den Gerätemodus (siehe [Simulate Mobile Devices with Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)).

Meistens jedoch müssen Sie irgendeine Art von Emulator installieren. Die gängigsten Geräte/Browser, die Sie testen möchten, sind die Folgenden:

- Die offizielle [Android Studio IDE](https://developer.android.com/studio/) zum Entwickeln von Android-Apps ist etwas schwergewichtig nur für das Testen von Websites auf Google Chrome oder dem alten Stock Android-Browser, aber sie kommt mit einem robusten [Emulator](https://developer.android.com/studio/run/emulator.html). Wenn Sie etwas Leichteres möchten, ist [Andy](https://www.andyroid.net/) eine vernünftige Option, die sowohl auf Windows als auch auf Mac läuft.
- Apple bietet eine App namens [Simulator](https://help.apple.com/simulator/mac/current/) an, die auf der [XCode](https://developer.apple.com/xcode/) Entwicklungsumgebung läuft und iPad/iPhone/Apple-Watch/Apple-TV emuliert. Dies beinhaltet den nativen iOS Safari Browser. Leider läuft dies nur auf einem Mac.

Sie können oft auch Simulatoren für andere mobile Geräteumgebungen finden, zum Beispiel:

- Sie können Opera Mini allein emulieren, wenn Sie es testen möchten.

> [!NOTE]
> Viele Emulatoren erfordern tatsächlich die Verwendung einer virtuellen Maschine (siehe unten); wenn dies der Fall ist, werden oft Anweisungen bereitgestellt und/oder die Nutzung der virtuellen Maschine ist in den Emulator-Installer integriert.

### Virtuelle Maschinen

Virtuelle Maschinen sind Anwendungen, die auf Ihrem Desktop-Computer laufen und es Ihnen ermöglichen, Emulationen ganzer Betriebssysteme auszuführen, die jeweils in ihrer eigenen virtuellen Festplatte compartmentalisiert sind (oft durch eine einzelne große Datei dargestellt, die auf der Festplatte des Host-Computers existiert). Es gibt eine Reihe beliebter virtueller Maschinen-Apps, wie [Parallels](https://www.parallels.com/), [VMWare](https://www.vmware.com/) und [Virtual Box](https://www.virtualbox.org/wiki/Downloads); wir mögen persönlich letztere, da sie kostenlos ist.

> [!NOTE]
> Sie benötigen viel verfügbaren Festplattenspeicher, um virtuelle Maschinenemulationen auszuführen; jedes Betriebssystem, das Sie emulieren, kann viel Speicherplatz beanspruchen. Sie neigen dazu, den Festplattenspeicher auszuwählen, den Sie für jede Installation verwenden möchten; Sie könnten wahrscheinlich mit 10GB auskommen, aber einige Quellen empfehlen bis zu 50GB oder mehr, damit das Betriebssystem zuverlässig läuft. Eine gute Option, die die meisten virtuellen Maschinen-Apps bieten, ist die Erstellung einer **dynamisch zugeordneten** Festplatte, die sich bei Bedarf vergrößert und verkleinert.

Um eine Virtual Box zu verwenden, müssen Sie:

1. Besorgen Sie sich ein Installationsmedium oder -image (z.B. ISO-Datei) für das Betriebssystem, das Sie emulieren möchten. Virtual Box kann diese nicht bereitstellen; die meisten, wie Windows-Betriebssysteme, sind kommerzielle Produkte, die nicht frei verteilt werden können.
2. [Laden Sie das entsprechende Installationsprogramm](https://www.virtualbox.org/wiki/Downloads) für Ihr Betriebssystem herunter und installieren Sie es.
3. Öffnen Sie die App; Ihnen wird eine Ansicht wie die folgende präsentiert: ![Anwendungsfenster linkes Panel listet Windows-Betriebssystem- und Opera-TV-Emulatoren auf. Rechtes Panel enthält mehrere Unterfelder, einschließlich Allgemein, System, Anzeige, Einstellungen, Audio, Netzwerk und eine Vorschau.](virtualbox.png)
4. Um eine neue virtuelle Maschine zu erstellen, drücken Sie die Schaltfläche _Neu_ in der oberen linken Ecke.
5. Folgen Sie den Anweisungen und füllen Sie die folgenden Dialogfelder wie angemessen aus. Sie werden:

   1. Einen Namen für die neue virtuelle Maschine angeben
   2. Wählen, welches Betriebssystem und welche Version Sie darauf installieren
   3. Festlegen, wie viel RAM zugewiesen werden soll (wir würden etwas wie 2048MB oder 2GB empfehlen)
   4. Eine virtuelle Festplatte erstellen (wählen Sie die Standardoptionen über die drei Dialogfenster hinweg, die _Eine virtuelle Festplatte jetzt erstellen_, _VDI (virtuelles Festplattenimage)_ und _Dynamisch zugeordnet_ enthalten).
   5. Den Speicherort und die Größe für die virtuelle Festplatte wählen (wählen Sie einen sinnvollen Namen und Ort, um sie zu speichern, und für die Größe geben Sie etwa 50GB oder so viel wie Sie gerne angeben möchten).

Jetzt sollte die neue Virtual Box im linken Menü des Hauptbenutzermenüs des Virtual Box UI-Fensters angezeigt werden. An diesem Punkt können Sie doppelklicken, um sie zu öffnen — sie wird beginnen, die virtuelle Maschine zu booten, aber sie wird noch nicht das Betriebssystem installiert haben. An diesem Punkt müssen Sie das Dialogfeld auf das Installationsmedium/Abbild zeigen, und es wird die Schritte zur Installation des Betriebssystems durchlaufen, genau wie auf einer physischen Maschine.

![Wie man die Virtual Box für ein bestimmtes Betriebssystem installiert](virtualbox-installer.png)

> [!WARNING]
> Sie müssen sicherstellen, dass Sie das Betriebsabbild, das Sie auf der virtuellen Maschine installieren möchten, an diesem Punkt verfügbar haben und es sofort installieren. Wenn Sie den Prozess an diesem Punkt abbrechen, kann er die virtuelle Maschine unbrauchbar machen, und Sie müssen sie löschen und erneut erstellen. Dies ist nicht fatal, aber es ist ärgerlich.

Nachdem der Prozess abgeschlossen ist, sollten Sie eine virtuelle Maschine haben, die ein Betriebssystem in einem Fenster auf Ihrem Host-Computer ausführt.

![Screenshot von Windows XP, gehostet in Virtual Box, und ausgeführt unter macOS](virtualbox-running.png)

Sie müssen diese virtuelle Betriebssysteminstallation genauso behandeln, wie Sie jede echte Installation behandeln würden — beispielsweise müssen Sie neben der Installation der Browser, die Sie testen möchten, ein Anti-Virus-Programm installieren, um sie vor Viren zu schützen.

Mehrere virtuelle Maschinen sind sehr nützlich, insbesondere für Windows IE/Edge-Tests — auf Windows können Sie nicht mehrere Versionen des Standardbrowsers nebeneinander installiert haben, daher möchten Sie möglicherweise eine Bibliothek virtueller Maschinen aufbauen, um verschiedene Tests bei Bedarf durchzuführen, z.B.:

- Windows 10 mit Edge 14
- Windows 10 mit Edge 13

> [!NOTE]
> Ein weiterer Vorteil von virtuellen Maschinen ist, dass die virtuellen Festplattenabbilder ziemlich abgeschlossen sind. Wenn Sie in einem Team arbeiten, können Sie ein einziges Festplattenabbild erstellen, es dann kopieren und verbreiten. Stellen Sie nur sicher, dass Sie über die erforderlichen Lizenzen verfügen, um all diese Kopien von Windows oder was auch immer Sie laufen lassen, wenn es ein lizenzpflichtiges Produkt ist.

### Automatisierung und kommerzielle Apps

Wie im letzten Kapitel erwähnt, können Sie sich viel Mühe beim Browser-Testen ersparen, wenn Sie irgendeine Art Automatisierungssystem verwenden. Sie können Ihr eigenes Testautomatisierungssystem einrichten (wobei [Selenium](https://www.selenium.dev/) die beliebte App der Wahl ist), das einiges an Einrichtung erfordert, aber sehr lohnend sein kann, wenn Sie es erst einmal beendet haben.

Es gibt auch kommerzielle Werkzeuge wie [Sauce Labs](https://saucelabs.com/), [Browser Stack](https://www.browserstack.com/) und [LambdaTest](https://www.lambdatest.com/), die diese Art von Arbeit für Sie erledigen, ohne dass Sie sich um die Einrichtung kümmern müssen, wenn Sie bereit sind, in Ihre Tests zu investieren.

Eine weitere Alternative ist die Verwendung von No-Code-Testautomatisierungstools wie [Endtest](https://www.endtest.io/).

Wir werden später im Modul darauf eingehen, wie man solche Werkzeuge verwendet.

## Benutzertests

Bevor wir weitermachen, schließen wir diesen Artikel ab, indem wir ein wenig über Benutzertests sprechen — dies kann eine gute Option sein, wenn Sie eine willige Benutzergruppe haben, um Ihre neue Funktionalität zu testen. Beachten Sie, dass dies so einfach oder so anspruchsvoll sein kann, wie Sie möchten — Ihre Benutzergruppe könnte eine Gruppe von Freunden, eine Gruppe von Kollegen oder eine Gruppe von unbezahlten oder bezahlten Freiwilligen sein, je nachdem, ob Sie Geld für Tests ausgeben können oder nicht.

Im Allgemeinen werden Sie Ihre Benutzer dazu bringen, sich die Seite oder Ansicht mit der neuen Funktionalität auf einem Entwicklungsserver anzusehen, damit Sie die endgültige Website oder Änderung nicht live schalten, bis sie fertig ist. Sie sollten sie einige Schritte folgen lassen und die Ergebnisse, die sie erhalten, berichten lassen. Es ist nützlich, eine Reihe von Schritten (manchmal als Skript bezeichnet) bereitzustellen, damit Sie zuverlässigere Ergebnisse in Bezug auf das erhalten, was Sie testen wollten. Wir haben dies im Abschnitt [Was werden Sie testen](#what_are_you_going_to_test) oben erwähnt — es ist einfach, die dort beschriebenen Testkriterien in Schritte zum Folgen umzuwandeln. Zum Beispiel würde das Folgende für einen sehenden Benutzer funktionieren:

- Klicken Sie ein paar Mal auf die Fragezeichen-Schaltfläche mit der Maus auf Ihrem Desktop-Computer. Aktualisieren Sie das Browserfenster.
- Wählen Sie die Fragezeichen-Schaltfläche aus und aktivieren Sie sie auf Ihrem Desktop-Computer ein paar Mal mit der Tastatur.
- Tippen Sie ein paar Mal auf die Fragezeichen-Schaltfläche auf Ihrem Touchscreen-Gerät.
- Das Umschalten des Buttons sollte die Informationsbox erscheinen/verschwinden lassen. Tut es dies in jedem der oben genannten drei Fälle?
- Ist der Text lesbar?
- Animiert sich die Informationsbox sanft, wenn sie erscheint/verschwindet?

Beim Durchführen von Tests kann es auch eine gute Idee sein:

- Wenn möglich, richten Sie ein separates Browserprofil ein, bei dem Erweiterungen und andere solche Dinge deaktiviert sind, und führen Sie Ihre Tests in diesem Profil durch (siehe [Den Profilmanager verwenden, um Firefox-Profile zu erstellen und zu entfernen](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) und [Chrome mit anderen teilen oder Personas hinzufügen](https://support.google.com/chrome/answer/2364824), zum Beispiel).
- Verwenden Sie die private Modus-Funktionalität des Browsers, wenn Sie Tests durchführen, wo verfügbar (z.B. [Privates Surfen](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) in Firefox, [Inkognito-Modus](https://support.google.com/chrome/answer/95464) in Chrome), damit z.B. Cookies und temporäre Dateien nicht gespeichert werden.

Diese Schritte sollen sicherstellen, dass der Browser, in dem Sie testen, so "rein" wie möglich ist, d.h. es ist nichts installiert, was die Testergebnisse beeinflussen könnte.

> [!NOTE]
> Eine weitere nützliche einfache Option, wenn Sie die Hardware verfügbar haben, ist das Testen Ihrer Websites auf Low-End-Telefonen/anderen Geräten — da Websites größer werden und mehr Effekte bieten, besteht eine höhere Wahrscheinlichkeit, dass die Website langsamer wird, daher müssen Sie beginnen, der Leistung mehr Aufmerksamkeit zu schenken. Wenn Sie Ihre Funktionalität auf einem Low-End-Gerät zum Laufen bringen können, wird es wahrscheinlicher, dass die Erfahrung auf Geräten mit höherer Leistung gut sein wird.

> [!NOTE]
> Einige serverseitige Entwicklungsumgebungen bieten nützliche Mechanismen, um Website-Änderungen nur für einen Teil der Nutzer auszurollen und so einen nützlichen Mechanismus zu bieten, um eine Funktion von einer Nutzeruntergruppe testen zu lassen, ohne dass ein separater Entwicklungsserver erforderlich ist. Ein Beispiel ist [Django Waffle Flags](https://github.com/jazzband/django-waffle).

## Zusammenfassung

Nach dem Lesen dieses Artikels sollten Sie nun eine gute Vorstellung davon haben, was Sie tun können, um Ihre Zielgruppe/Zielliste der Browser zu identifizieren und dann Cross-Browser-Tests effektiv auf dieser Liste durchzuführen.

Als Nächstes werden wir uns den tatsächlichen Codeproblemen zuwenden, die Ihre Tests aufdecken könnten, beginnend mit HTML und CSS.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Introduction","Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS", "Learn/Tools_and_testing/Cross_browser_testing")}}
