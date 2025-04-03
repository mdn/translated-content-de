---
title: Strategien zur Durchführung von Tests
short-title: Testing strategies
slug: Learn_web_development/Extensions/Testing/Testing_strategies
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel erklärt, wie man Cross-Browser-Tests durchführt: wie man auswählt, welche Browser und Geräte getestet werden sollen, wie man diese Browser und Geräte tatsächlich testet, und wie man mit Benutzergruppen testet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung von den grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des Cross-Browser-Tests</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis der allgemeinen Konzepte im Zusammenhang mit
        Cross-Browser-Tests zu gewinnen.
      </td>
    </tr>
  </tbody>
</table>

## Auswahl der zu testenden Browser und Geräte

Da Sie nicht jede Kombination aus Browser und Gerät testen können, reicht es aus, wenn Sie sicherstellen, dass Ihre Website auf den wichtigsten funktioniert. In der Praxis bedeutet „wichtig“ oft „häufig von der Zielgruppe genutzt“.

Sie können Browser und Geräte nach dem Grad der Unterstützung klassifizieren, den Sie ihnen geben möchten. Zum Beispiel:

1. A-Grad: Häufige/moderne Browser — bekannt als fähig. Testen Sie gründlich und bieten Sie volle Unterstützung.
2. B-Grad: Ältere/weniger fähige Browser — bekannt als nicht vollständig fähig. Testen Sie und bieten Sie eine einfachere Erfahrung, die vollen Zugang zu den wichtigsten Informationen und Diensten bietet.
3. C-Grad: Seltene/unbekannte Browser — nicht testen, aber annehmen, dass sie fähig sind. Bieten Sie die vollständige Website an, die zumindest mit den durch defensives Kodieren bereitgestellten Rückfallebenen funktionieren sollte.

In den folgenden Abschnitten werden wir ein Unterstützungsdiagramm in diesem Format erstellen.

> [!NOTE]
> Yahoo machte diesen Ansatz mit ihrem [Graded Browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support) Ansatz populär.

### Prognostizieren Sie die am häufigsten verwendeten Browser Ihres Publikums

Dies beinhaltet typischerweise begründete Vermutungen basierend auf Benutzer-Demografien. Angenommen, Ihre Benutzer sind in Nordamerika und Westeuropa:

Eine schnelle Online-Suche sagt Ihnen, dass die meisten Menschen in Nordamerika und Westeuropa Windows- oder Mac-Desktops/Laptops nutzen, auf denen die Hauptbrowser Chrome, Firefox, Safari und Edge sind. Wahrscheinlich möchten Sie nur die neuesten Versionen dieser Browser testen, da diese Browser regelmäßig aktualisiert werden. Diese sollten alle in die A-Grad-Stufe eingeordnet werden.

Die Mehrheit der Menschen in dieser demografischen Gruppe nutzt auch entweder iOS- oder Android-Telefone, daher möchten Sie wahrscheinlich die neuesten Versionen von iOS Safari, den letzten paar Versionen des alten Android-Standardbrowsers und Chrome und Firefox für iOS und Android testen. Sie sollten diese idealerweise sowohl auf einem Telefon als auch auf einem Tablet testen, um sicherzustellen, dass responsive Designs funktionieren.

Opera Mini ist nicht sehr fähig, komplexes JavaScript auszuführen, daher sollten wir dies ebenfalls in den B-Grad aufnehmen.

Daher haben wir unsere Auswahl der zu testenden Browser auf den Browsern basiert, von denen wir erwarten, dass unsere Benutzer sie verwenden.
Dies gibt uns bisher das folgende Unterstützungsdiagramm:

1. A-Grad: Chrome und Firefox für Windows/Mac, Safari für Mac, Edge für Windows, iOS Safari für iPhone/iPad, Android-Standardbrowser (letzte zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (letzte zwei Versionen) auf Telefon/Tablet
2. B-Grad: Opera Mini
3. C-Grad: k.A.

Wenn sich Ihre Zielgruppe hauptsächlich woanders befindet, können die am häufigsten verwendeten Browser und Betriebssysteme von den oben genannten abweichen.

> [!NOTE]
> "Der CEO meines Unternehmens verwendet ein Blackberry, also sollten wir sicherstellen, dass es darauf gut aussieht" kann ebenfalls ein Aspekt sein, den Sie in Betracht ziehen sollten.

### Browser-Statistiken

Einige Websites zeigen, welche Browser in einer bestimmten Region beliebt sind. Zum Beispiel gibt [Statcounter](https://gs.statcounter.com/) einen Eindruck von Trends in Nordamerika.

### Nutzung von Analysen

Eine weitaus genauere Datenquelle, wenn Sie sie erhalten können, ist eine Analyse-App wie [Google Analytics](https://marketingplatform.google.com/about/analytics/), die Ihnen genau sagt, welche Browser die Leute verwenden, um Ihre Seite zu besuchen. Natürlich setzt dies voraus, dass Sie bereits eine Website haben, um sie zu nutzen, daher eignet es sich nicht für komplett neue Websites.

Vielleicht ziehen Sie es in Betracht, Open-Source- und datenschutzorientierte Analyseplattformen wie [Open Web Analytics](https://www.openwebanalytics.com/) und [Matomo](https://matomo.org/) zu verwenden. Sie erwarten, dass Sie die Analyseplattform selbst hosten.

#### Einrichten von Google Analytics

1. Zunächst benötigen Sie ein Google-Konto. Verwenden Sie dieses Konto, um sich bei [Google Analytics](https://marketingplatform.google.com/about/analytics/) anzumelden.
2. Wählen Sie die Option [Google Analytics](https://analytics.google.com/analytics/web/) (Web) und klicken Sie auf die _Anmelden_-Taste.
3. Geben Sie Ihre Webseiten-/App-Daten in die Anmeldeseite ein. Dies ist ziemlich intuitiv einzurichten; das wichtigste Feld ist die Website-URL. Diese muss die Root-URL Ihrer Seite/App sein.
4. Sobald Sie alles ausgefüllt haben, drücken Sie die Schaltfläche _Tracking-ID abrufen_ und akzeptieren Sie die erscheinenden Nutzungsbedingungen.
5. Die nächste Seite bietet Ihnen einige Code-Snippets und andere Anweisungen. Für eine einfache Website müssen Sie den _Website-Tracking_-Codeblock kopieren und in alle verschiedenen Seiten einfügen, die Sie mit Google Analytics auf Ihrer Seite verfolgen möchten. Sie könnten die Snippets unter Ihrem schließenden `</body>`-Tag platzieren oder an einem anderen geeigneten Ort, damit es nicht mit Ihrem Anwendungscode vermischt wird.
6. Laden Sie die Änderungen auf den Entwicklungsserver hoch oder wo auch immer Sie Ihren Code benötigen.

Das war's! Ihre Seite sollte nun bereit sein, um mit dem Berichten von Analysedaten zu beginnen.

#### Analyse von Analysedaten

Nun sollten Sie in der Lage sein, zur [Analytics Web](https://analytics.google.com/analytics/web/)-Startseite zurückzukehren und die Daten, die Sie über Ihre Seite gesammelt haben, zu betrachten (Sie müssen natürlich ein wenig Zeit verstreichen lassen, damit tatsächlich Daten gesammelt werden können).

Standardmäßig sollten Sie den Bericht-Tab sehen, etwa so:

![Wie Google Analytics Daten in seinem Hauptberichtsdashboard sammelt](analytics-reporting.png)

Es gibt eine riesige Menge an Daten, die Sie mit Google Analytics betrachten könnten — maßgeschneiderte Berichte in verschiedenen Kategorien, usw. — und wir haben keine Zeit, alles zu besprechen.
[Erste Schritte mit Analytics](https://support.google.com/analytics/answer/9304153) bietet einige nützliche Anleitungen zum Berichtswesen (und mehr) für Anfänger.

Sie können sehen, welche Browser und Betriebssysteme Ihre Benutzer verwenden, indem Sie im linken Menü _Zielgruppe > Technologie > Browser & OS_ auswählen.

> [!NOTE]
> Bei der Nutzung von Google Analytics müssen Sie sich vor irreführenden Verzerrungen in Acht nehmen, z.B., "Wir haben keine Firefox Mobile-Benutzer", könnte dazu führen, dass Sie sich nicht die Mühe machen, Firefox Mobile zu unterstützen. Aber Sie werden keine Firefox Mobile-Benutzer haben, wenn die Seite auf Firefox Mobile von Anfang an kaputt war.

### Weitere Überlegungen

Sie sollten Barrierefreiheit als A-Grad-Testanforderung einbeziehen.

Außerdem sollten Sie sich über situationsspezifische Bedürfnisse bewusst sein. Wenn Ihr Produkt zum Beispiel einen Markt anspricht, auf dem Mobiltelefone das primäre Mittel des Internetzugangs sind, möchten Sie wahrscheinlich die Unterstützung von mobilen Browsern zur Priorität machen.

### Endgültiges Unterstützungsdiagramm

Unser endgültiges Unterstützungsdiagramm sieht schließlich so aus:

1. A-Grad: Chrome und Firefox für Windows/Mac, Safari für Mac und Edge (jeweils die letzten zwei Versionen), iOS Safari für iPhone/iPad, Android-Standardbrowser (letzte zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (letzte zwei Versionen) auf Telefon/Tablet. Barrierefreiheit bestanden mit gängigen Tests.
2. B-Grad: Opera Mini.
3. C-Grad: Opera, andere Nischenmoderne Browser.

## Was werden Sie testen?

Wenn Sie eine neue Ergänzung zu Ihrem Codebase haben, die getestet werden muss, sollten Sie, bevor Sie mit dem Testen beginnen, eine Liste der Testanforderungen schreiben, die bestanden werden müssen, um akzeptiert zu werden. Diese Anforderungen können visuell oder funktional sein — beide zusammen ergeben eine nutzbare Website-Funktion.

Betrachten Sie das folgende Beispiel (siehe den [Source Code](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html) und auch das [Beispiel live](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)):

![Wie man ein Testszenario vorbereitet, das das Design und die Benutzeranforderungen beinhaltet](sliding-box-demo.png)

Testkriterien für dieses Merkmal könnten wie folgt geschrieben werden:

A- und B-Grad:

- Die Schaltfläche sollte durch das primäre Steuerungsmechanismus des Benutzers aktiviert werden können, welches auch immer das ist — dies sollte Maus, Tastatur und Touchscreen einschließen.
- Das Umschalten der Schaltfläche sollte das Informationsfeld erscheinen/verschwinden lassen.
- Der Text sollte lesbar sein.
- Sehbehinderte Benutzer, die Screenreader verwenden, sollten auf den Text zugreifen können.

A-Grad:

- Die Informationsbox sollte sanft animiert werden, wenn sie erscheint/verschwindet.
- Der Verlauf und der Textschatten sollten das Aussehen der Box verbessern.

Sie bemerken vielleicht, dass die Schaltfläche nicht nur mit der Tastatur nutzbar ist. Wir könnten dies mit JavaScript ändern, um eine Tastatursteuerung für die Umschaltung zu implementieren oder einen anderen Ansatz verwenden.

Diese Testkriterien sind nützlich, weil:

- Sie Ihnen einen Satz von Schritten geben, die Sie bei der Durchführung von Tests befolgen sollten.
- Sie einfach in Sets von Anweisungen für Benutzergruppen umgewandelt werden können, wenn Tests durchgeführt werden (z.B. „versuchen Sie, die Schaltfläche mit Ihrer Maus zu aktivieren und dann mit der Tastatur…“) — siehe [Benutzertests](#benutzertests) unten.
- Sie auch eine Grundlage für das Schreiben von automatisierten Tests bieten können. Es ist einfacher, solche Tests zu schreiben, wenn Sie genau wissen, was Sie testen möchten und was die Erfolgskriterien sind (siehe [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#selenium) später in der Serie).

## Aufbau eines Testlabors

Eine Option zur Durchführung von Browser-Tests ist, die Tests selbst durchzuführen. Dazu werden Sie wahrscheinlich eine Kombination aus physischen Geräten und emulierten Umgebungen (entweder mit einem Emulator oder einer virtuellen Maschine) verwenden.

### Physische Geräte

Es ist im Allgemeinen besser, ein echtes Gerät mit dem Browser zu haben, den Sie testen möchten — dies bietet die größte Genauigkeit in Bezug auf Verhalten und Gesamtnutzererfahrung. Möglicherweise möchten Sie etwas wie das Folgende für ein vernünftiges Low-Level-Gerätelabor:

- Einen Mac mit den installierten Browsern, die Sie testen müssen — dies kann Firefox, Chrome, Opera und Safari einschließen.
- Einen Windows-PC mit den installierten Browsern, die Sie testen müssen — dies kann Edge (oder IE), Chrome, Firefox und Opera einschließen.
- Ein Android-Handy und -Tablet mit höherer Spezifikation mit den installierten Browsern, die Sie testen müssen — dies kann Chrome, Firefox und Opera Mini für Android sowie den ursprünglichen Android-Standardbrowser einschließen.
- Ein iOS-Handy und -Tablet mit höherer Spezifikation mit den installierten Browsern, die Sie testen müssen — dies kann iOS Safari und Chrome, Firefox und Opera Mini für iOS einschließen.

Folgendes sind auch gute Optionen, wenn Sie sie bekommen können:

- Einen Linux-PC, um gegebenenfalls bugspezifische für Linux-Versionen von Browsern zu testen. Linux-Benutzer verwenden häufig Firefox, Opera und Chrome. Wenn Sie nur eine Maschine zur Verfügung haben, können Sie erwägen, eine Dual-Boot-Maschine einzurichten, die Linux und Windows auf separaten Partitionen ausführt. Ubuntu's Installer macht dies recht einfach einzurichten; siehe [WindowsDualBoot](https://help.ubuntu.com/community/WindowsDualBoot) für Hilfe dabei.
- Ein paar mobile Geräte mit niedrigeren Spezifikationen, damit Sie die Leistung von Funktionen wie Animationen auf weniger leistungsstarken Prozessoren testen können.

Ihr Hauptarbeitsgerät kann auch ein Ort sein, an dem andere Tools für spezifische Zwecke installiert werden, wie z.B. Barrierefreiheitsaudits, Screenreader und Emulatoren/virtuelle Maschinen.

Einige größere Unternehmen haben Gerätezlabore, die eine sehr große Auswahl an verschiedenen Geräten haben und es Entwicklern ermöglichen, Bugs in sehr spezifischen Browser/Gerätekombinationen zu finden. Kleinere Unternehmen und Einzelpersonen können sich ein so ausgeklügeltes Labor in der Regel nicht leisten und begnügen sich daher mit kleineren Laboren, Emulatoren, virtuellen Maschinen und kommerziellen Test-Apps.

Wir werden jede der anderen Optionen unten behandeln.

> [!NOTE]
> Es wurden einige Anstrengungen unternommen, öffentlich zugängliche Gerätezlabore zu schaffen — siehe [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/).

> [!NOTE]
> Wir müssen auch die Barrierefreiheit berücksichtigen — es gibt eine Reihe nützlicher Tools, die Sie auf Ihrem Computer installieren können, um Barrierefreiheitstests zu erleichtern, aber wir werden diese später im Artikel über den Umgang mit gängigen Barrierefreiheitsproblemen behandeln.

### Emulatoren

Emulatoren sind im Grunde Programme, die auf Ihrem Computer laufen und ein Gerät oder bestimmte Gerätebedingungen irgendeiner Art emulieren, sodass Sie einige Ihrer Tests bequemer durchführen können, als wenn Sie eine bestimmte Kombination aus Hardware/Software zum Testen finden müssten.

Ein Emulator könnte so einfach sein wie das Testen einer Gerätebedingung. Wenn Sie zum Beispiel Ihre Breiten-/Höhenmedienabfragen für responsives Design schnell und schmutzig testen möchten, könnten Sie den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) von Firefox verwenden. Safari hat ebenfalls einen ähnlichen Modus, der aktiviert werden kann, indem man zu _Safari > Einstellungen_ geht und _Entwicklermenü anzeigen_ prüft, dann _Entwickeln > Responsive Design Mode starten_ wählt. Chrome hat auch etwas Ähnliches: den Gerätemodus (siehe dazu [Simulate Mobile Devices with Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)).

Oftmals müssen Sie jedoch einen Emulator installieren. Die häufigsten Geräte/Browsers, die Sie testen möchten, sind wie folgt:

- Die offizielle [Android Studio IDE](https://developer.android.com/studio/) zur Entwicklung von Android-Apps ist etwas schwergewichtig, um nur Websites auf Google Chrome oder dem alten Android-Standardbrowser zu testen, aber es kommt mit einem robusten [Emulator](https://developer.android.com/studio/run/emulator.html). Wenn Sie etwas Leichteres möchten, ist [Andy](https://www.andyroid.net/) eine vernünftige Option, die sowohl auf Windows als auch auf Mac läuft.
- Apple bietet eine App namens [Simulator](https://help.apple.com/simulator/mac/current/) an, die auf der [XCode](https://developer.apple.com/xcode/)-Entwicklungsumgebung läuft und iPad/iPhone/Apple Watch/Apple TV emuliert. Dies schließt den nativen iOS Safari-Browser ein. Leider läuft dies nur auf einem Mac.

Sie können oft auch Simulatoren für andere mobile Geräteumgebungen finden. Beispielsweise:

- Sie können Opera Mini allein emulieren, wenn Sie es testen möchten.

> [!NOTE]
> Viele Emulatoren erfordern tatsächlich die Verwendung einer virtuellen Maschine (siehe unten); wenn dies der Fall ist, werden oft Anweisungen gegeben und/oder die Nutzung der virtuellen Maschine ist in den Installer des Emulators integriert.

### Virtuelle Maschinen

Virtuelle Maschinen sind Anwendungen, die auf Ihrem Desktop-Computer laufen und Ihnen ermöglichen, Emulationen ganzer Betriebssysteme zu betreiben, die jeweils in ihrer eigenen virtuellen Festplatte, oft dargestellt durch eine einzelne große Datei auf der Festplatte des Host-Computers, enthalten sind. Es gibt eine Reihe beliebter virtueller Maschinen-Apps, wie zum Beispiel [Parallels](https://www.parallels.com/), [VMware](https://www.vmware.com/) und [VirtualBox](https://www.virtualbox.org/wiki/Downloads); wir mögen persönlich letztere, weil sie frei ist.

> [!NOTE]
> Sie benötigen eine Menge freien Festplattenspeicher, um virtuelle Maschinenemulationen auszuführen; jedes Betriebssystem, das Sie emulieren, kann viel Speicherplatz beanspruchen. Sie tendieren dazu, den Festplattenspeicher auszuwählen, den sie für jede Installation benötigen; Sie könnten wahrscheinlich mit 10GB auskommen, aber einige Quellen empfehlen bis zu 50GB oder mehr, damit das Betriebssystem zuverlässig läuft. Eine gute Option, die von den meisten virtuellen Maschinen-Apps angeboten wird, ist das Erstellen eines **dynamisch angelegten** Laufwerks, das je nach Bedarf wächst und schrumpft.

Um eine VirtualBox zu verwenden, müssen Sie:

1. Einen Installationsdatenträger oder ein -image (z.B. ISO-Datei) für das Betriebssystem beschaffen, das Sie emulieren möchten. VirtualBox kann diese nicht bereitstellen; die meisten, wie Windows-Betriebssysteme, sind kommerzielle Produkte, die nicht frei verteilt werden können.
2. [Laden Sie den geeigneten Installer](https://www.virtualbox.org/wiki/Downloads) für Ihr Betriebssystem herunter und installieren Sie ihn.
3. Öffnen Sie die App; Sie werden mit einem Fenster wie dem Folgenden konfrontiert: ![Anwendungsfenster mit linker Fensterliste, die Windows-Betriebssystem und Opera TV-Emulatoren auflistet. Der rechte Bereich enthält mehrere Unterbereiche einschließlich Allgemein, System, Anzeige, Einstellungen, Audio, Netzwerk und einer Vorschau.](virtualbox.png)
4. Um eine neue virtuelle Maschine zu erstellen, drücken Sie die _Neu_-Schaltfläche in der oberen linken Ecke.
5. Befolgen Sie die Anweisungen und füllen Sie die folgenden Dialogfelder entsprechend aus. Sie werden:

   1. Einen Namen für die neue virtuelle Maschine angeben
   2. Wählen, welches Betriebssystem und welche Version Sie darauf installieren
   3. Festlegen, wie viel RAM zugewiesen werden soll (wir empfehlen etwa 2048MB oder 2GB)
   4. Eine virtuelle Festplatte erstellen (wählen Sie die Standardoptionen über die drei Dialogfelder mit _Jetzt eine virtuelle Festplatte erstellen_, _VDI (virtuelles Festplattenbild)_ und _Dynamisch zugewiesen_).
   5. Wählen Sie den Dateispeicherort und die -größe für die virtuelle Festplatte (wählen Sie einen sinnvollen Namen und Ort, um sie zu speichern, und für die Größe geben Sie etwa 50GB an, oder wie viel auch immer Sie bereit sind zu spezifizieren).

Nun sollte die neue virtuelle Box im linken Menü des Hauptbenutzeroberfläche-Fensters von VirtualBox erscheinen. An diesem Punkt können Sie darauf doppelklicken, um sie zu öffnen — sie wird beginnen, die virtuelle Maschine hochzufahren, aber sie wird noch nicht das Betriebssystem (OS) installiert haben. An diesem Punkt müssen Sie das Dialogfeld auf das Installationsimage/-laufwerk richten, und es durchläuft die Schritte, um das Betriebssystem wie auf einer physischen Maschine zu installieren.

![Wie man die VirtualBox für ein bestimmtes Betriebssystem installiert](virtualbox-installer.png)

> [!WARNING]
> Sie müssen sicherstellen, dass Sie an diesem Punkt das Betriebssystemimage, das Sie auf der virtuellen Maschine installieren möchten, zur Verfügung haben und es sofort installieren. Wenn Sie den Prozess an diesem Punkt abbrechen, kann dies die virtuelle Maschine unbrauchbar machen und es erforderlich machen, sie zu löschen und erneut zu erstellen. Das ist nicht fatal, aber es ist ärgerlich.

Nachdem der Prozess abgeschlossen ist, sollte Sie eine virtuelle Maschine haben, auf der ein Betriebssystem in einem Fenster auf Ihrem Host-Computer läuft.

![Screenshot von Windows XP, gehostet in VirtualBox und auf macOS ausgeführt](virtualbox-running.png)

Sie müssen diese virtuelle Betriebssysteminstallation wie jede reale Installation behandeln — zum Beispiel sollten Sie neben der Installation der zu testenden Browser auch ein Antivirenprogramm installieren, um sie vor Viren zu schützen.

Mehrere virtuelle Maschinen zu haben ist sehr nützlich, insbesondere für Windows IE/Edge-Tests — unter Windows können Sie nicht mehrere Versionen des Standardbrowsers nebeneinander installiert haben, daher möchten Sie möglicherweise eine Bibliothek virtueller Maschinen aufbauen, um verschiedene Tests nach Bedarf durchzuführen, z.B.:

- Windows 10 mit Edge 14
- Windows 10 mit Edge 13

> [!NOTE]
> Ein weiterer guter Punkt über virtuelle Maschinen ist, dass die virtuellen Festplattenabbilder ziemlich in sich abgeschlossen sind. Wenn Sie in einem Team arbeiten, können Sie ein virtuelles Festplattenabbild erstellen, es dann kopieren und weitergeben. Stellen Sie einfach sicher, dass Sie die erforderlichen Lizenzen haben, um alle diese Kopien von Windows oder was immer Sie laufen, wenn es sich um ein lizenziertes Produkt handelt, auszuführen.

### Automatisierung und kommerzielle Apps

Wie im letzten Kapitel erwähnt, können Sie eine Menge des Schmerzes bei Browser-Tests durch die Nutzung eines Art Automatisierungssystem vermeiden. Sie können Ihr eigenes Testautomatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte App der Wahl), was einige Einrichtung erfordert, aber sehr lohnend sein kann, wenn Sie es erst einmal herausgefunden haben.

Es gibt auch kommerzielle Werkzeuge wie [Sauce Labs](https://saucelabs.com/), [Browser Stack](https://www.browserstack.com/) und [LambdaTest](https://www.lambdatest.com/), die dies für Sie erledigen, ohne dass Sie sich um die Einrichtung kümmern müssen, wenn Sie etwas Geld in Ihre Tests investieren möchten.

Eine weitere Alternative ist die Verwendung von No-Code-Testautomatisierungstools wie [Endtest](https://www.endtest.io/).

Wir werden später im Modul darauf eingehen, wie man solche Tools verwendet.

## Benutzertests

Bevor wir fortfahren, beenden wir diesen Artikel mit einem kurzen Überblick über Benutzertests — dies kann eine gute Option sein, wenn Sie eine willige Benutzergruppe haben, die Ihre neue Funktionalität testen kann. Bedenken Sie, dass dies so niedrig oder so anspruchsvoll sein kann, wie Sie möchten — Ihre Benutzergruppe könnte eine Gruppe von Freunden, eine Gruppe von Kollegen oder eine Gruppe von unbezahlten oder bezahlten Freiwilligen sein, je nachdem, ob Sie Geld für Tests ausgeben können.

Generell holen Sie Ihre Benutzer, um sich die Seite oder die Ansicht mit der neuen Funktionalität auf einer Art Entwicklungsserver anzusehen, damit Sie die endgültige Seite oder Änderung nicht live schalten, bis sie fertig ist. Sie sollten sie dazu bringen, einige Schritte zu befolgen und die Ergebnisse, die sie erhalten, zu berichten. Es ist nützlich, eine Reihe von Schritten zur Verfügung zu stellen (manchmal als Skript bezeichnet), damit Sie zuverlässigere Ergebnisse in Bezug auf das erhalten, was Sie testen wollten. Wir haben dies im Abschnitt [Was werden Sie testen](#what_are_you_going_to_test) oben erwähnt — es ist einfach, die dort detaillierten Testkriterien in Befolgen von Schritten umzuwandeln. Zum Beispiel würde das Folgende für einen sehenden Benutzer funktionieren:

- Klicken Sie mehrmals auf die Fragezeichen-Schaltfläche mit der Maus auf Ihrem Desktop-Computer. Aktualisieren Sie das Browserfenster.
- Wählen und aktivieren Sie mehrmals die Fragezeichen-Schaltfläche mit der Tastatur auf Ihrem Desktop-Computer.
- Tippen Sie mehrmals auf die Fragezeichen-Schaltfläche auf Ihrem Touchscreen-Gerät.
- Das Umschalten der Schaltfläche sollte die Informationsbox erscheinen/verschwinden lassen. Tut es das in jedem der oberstehenden drei Fälle?
- Ist der Text lesbar?
- Animiert die Informationsbox sich sanft, wenn sie erscheint/verschwindet?

Beim Ausführen von Tests kann es auch eine gute Idee sein,:

- Ein separates Browserprofil einzurichten, wo möglich, mit deaktivierten Browsererweiterungen und anderen solchen Dingen, und Ihre Tests in diesem Profil durchzuführen (siehe [Verwenden Sie den Profilmanager, um Firefox-Profile zu erstellen und zu entfernen](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) und [Teilen Sie Chrome mit anderen oder fügen Sie Personen hinzu](https://support.google.com/chrome/answer/2364824), beispielsweise).
- Die Private-Mode-Funktionalität des Browsers zu nutzen, wo verfügbar (z.B. [Private Sitzung](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) in Firefox, [Inkognito-Modus](https://support.google.com/chrome/answer/95464) in Chrome), sodass Dinge wie Cookies und temporäre Dateien nicht gespeichert werden.

Diese Schritte sind darauf ausgelegt, sicherzustellen, dass der Browser, in dem Sie testen, so „rein“ wie möglich ist, d.h. es ist nichts installiert was die Testergebnisse beeinträchtigen könnte.

> [!NOTE]
> Eine weitere nützliche Low-Fi-Option, wenn Sie die Hardware zur Verfügung haben, ist, Ihre Websites auf leistungsschwachen Telefonen/anderen Geräten zu testen — da Websites größer werden und mehr Effekte bieten, besteht eine höhere Wahrscheinlichkeit, dass die Website langsamer wird, daher müssen Sie die Leistung mehr in Betracht ziehen. Wenn Sie versuchen, Ihre Funktionaliät auf einem Gerät mit niedrigem Ende zum Laufen zu bringen, macht es das wahrscheinlicher, dass die Erfahrung auf leistungsfähigeren Geräten gut ist.

> [!NOTE]
> Einige serverseitige Entwicklungsumgebungen bieten nützliche Mechanismen zur Einführung von Website-Änderungen nur für eine Teilmenge von Benutzern, was einen nützlichen Mechanismus bietet, um eine Funktion von einer Teilmenge von Benutzern testen zu lassen, ohne einen separaten Entwicklungsserver zu benötigen. Ein Beispiel ist [Django Waffle Flags](https://github.com/jazzband/django-waffle).

## Zusammenfassung

Nach dem Lesen dieses Artikels sollten Sie nun eine gute Vorstellung davon haben, was Sie tun können, um Ihr Zielpublikum/Ihre Zielbrowserliste zu identifizieren und dann effektiv Cross-Browser-Tests auf dieser Liste durchzuführen.

Als Nächstes werden wir uns mit den tatsächlichen Codeproblemen befassen, die Ihre Tests aufdecken können, beginnend mit HTML und CSS.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}
