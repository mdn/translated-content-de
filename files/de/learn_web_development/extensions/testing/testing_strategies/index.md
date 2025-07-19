---
title: Strategien zur Durchführung von Tests
short-title: Testing strategies
slug: Learn_web_development/Extensions/Testing/Testing_strategies
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction", "Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel erklärt, wie man Cross-Browser-Tests durchführt: wie Sie auswählen, welche Browser und Geräte getestet werden sollen, wie Sie diese Browser und Geräte tatsächlich testen und wie Sie mit Benutzergruppen testen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernelementen der <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen; eine Vorstellung der hochrangigen
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis der hochrangigen Konzepte im Rahmen von Cross-Browser-Testings zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Auswahl der zu testenden Browser und Geräte

Da Sie nicht jede Kombination aus Browser und Gerät testen können, reicht es, wenn Sie sicherstellen, dass Ihre Seite auf den wichtigsten funktioniert. In der Praxis bedeutet "wichtig" oft "häufig unter der Zielgruppe genutzt".

Sie können Browser und Geräte nach dem Umfang der Unterstützung klassifizieren, die Sie bereitstellen möchten. Zum Beispiel:

1. A-Klasse: Allgemeine/moderne Browser — bekanntlich fähig. Gründlich testen und volle Unterstützung bieten.
2. B-Klasse: Ältere/weniger fähige Browser — bekanntlich nicht fähig. Testen und eine grundlegendere Erfahrung bieten, die vollen Zugang zu Kerninformationen und -diensten bietet.
3. C-Klasse: Seltene/unbekannte Browser — nicht getestet, aber angenommen, dass sie fähig sind. Die gesamte Seite bereitstellen, die zumindest mit den durch unser defensives Codieren bereitgestellten Fallbacks funktionieren sollte.

In den folgenden Abschnitten werden wir ein Unterstützungsdiagramm in diesem Format erstellen.

> [!NOTE]
> Yahoo machte diesen Ansatz mit ihrem [Graded browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support) Ansatz populär.

### Prognostizieren der am häufigsten genutzten Browser Ihrer Zielgruppe

Dies beinhaltet typischerweise fundierte Vermutungen auf Basis von Benutzerdemografien. Angenommen, Ihre Benutzer befinden sich in Nordamerika und Westeuropa:

Eine schnelle Online-Suche zeigt, dass die meisten Menschen in Nordamerika und Westeuropa Windows oder Mac Desktops/Laptops nutzen, auf denen die Hauptbrowser Chrome, Firefox, Safari und Edge sind. Sie würden wahrscheinlich nur die neuesten Versionen dieser Browser testen wollen, da diese Browser regelmäßig aktualisiert werden. Diese sollten alle in die A-Klasse eingestuft werden.

Die meisten Menschen in dieser demografischen Gruppe nutzen auch entweder iOS oder Android-Handys, daher sollten Sie idealerweise die neuesten Versionen von iOS Safari, die letzten Versionen des alten Android Standardbrowsers sowie Chrome und Firefox für iOS und Android testen. Sie sollten dies idealerweise sowohl auf einem Telefon als auch auf einem Tablet testen, um sicherzustellen, dass responsive Designs funktionieren.

Opera Mini ist nicht sehr fähig, komplexes JavaScript auszuführen, daher sollten wir dies ebenfalls in die B-Klasse einordnen.

Somit haben wir unsere Wahl, welche Browser getestet werden, auf Basis der Browser getroffen, die wir von unseren Benutzern erwarten.
Das ergibt bisher das folgende Unterstützungsdiagramm:

1. A-Klasse: Chrome und Firefox für Windows/Mac, Safari für Mac, Edge für Windows, iOS Safari für iPhone/iPad, Android-Standardbrowser (die letzten zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (die letzten zwei Versionen) auf Telefon/Tablet
2. B-Klasse: Opera Mini
3. C-Klasse: k.a.

Wenn sich Ihre Zielgruppe hauptsächlich woanders befindet, können sich die am häufigsten genutzten Browser und Betriebssysteme von den oben genannten unterscheiden.

> [!NOTE]
> "Der CEO meines Unternehmens benutzt ein Blackberry, also sollten wir sicherstellen, dass es darauf gut aussieht" ist ebenfalls etwas, das berücksichtigt werden kann.

### Browser-Statistiken

Einige Websites zeigen an, welche Browser in einer bestimmten Region beliebt sind. Zum Beispiel gibt [Statcounter](https://gs.statcounter.com/) einen Einblick in die Trends in Nordamerika.

### Verwendung von Analysen

Eine viel genauere Datenquelle, falls Sie Zugang dazu haben, ist eine Analyse-App wie [Google Analytics](https://marketingplatform.google.com/about/analytics/), die Ihnen genau zeigt, welche Browser die Leute zum Surfen auf Ihrer Website verwenden. Natürlich setzt das voraus, dass Sie bereits eine Website haben, auf der Sie es nutzen können, daher ist es nicht gut für komplett neue Websites.

Sie könnten auch die Verwendung von Open-Source-und datenschutzorientierten Analyseplattformen in Betracht ziehen, wie [Open Web Analytics](https://www.openwebanalytics.com/) und [Matomo](https://matomo.org/). Sie erwarten, dass Sie die Analyseplattform selbst hosten.

#### Einrichten von Google Analytics

1. Zuerst benötigen Sie ein Google-Konto. Verwenden Sie dieses Konto, um sich bei [Google Analytics](https://marketingplatform.google.com/about/analytics/) anzumelden.
2. Wählen Sie die Option [Google Analytics](https://analytics.google.com/analytics/web/) (Web) und klicken Sie auf die Schaltfläche _Anmelden_.
3. Geben Sie die Details Ihrer Website/App auf der Anmeldeseite ein. Dies ist ziemlich intuitiv einzurichten; das wichtigste Feld, das richtig festgelegt werden muss, ist die URL der Website. Dies muss die Stamm-URL Ihrer Site/App sein.
4. Nachdem Sie alles ausgefüllt haben, drücken Sie die Schaltfläche _Tracking-ID abrufen_, und akzeptieren Sie die daraufhin erscheinenden Nutzungsbedingungen.
5. Die nächste Seite stellt Ihnen einige Codeschnipsel und andere Anweisungen zur Verfügung. Für eine einfache Website müssen Sie den _Website-Tracking_-Codeblock kopieren und in alle verschiedenen Seiten einfügen, die Sie mit Google Analytics auf Ihrer Website verfolgen möchten. Sie könnten die Schnipsel unter Ihrem abschließenden `</body>`-Tag platzieren oder an einem anderen geeigneten Ort, um sicherzustellen, dass es sich nicht mit Ihrem Anwendungscode vermischt.
6. Laden Sie die Änderungen auf den Entwicklungsserver hoch oder wo immer Sie Ihren Code benötigen.

Das war's! Ihre Website sollte jetzt bereit sein, Analysedaten zu melden.

#### Analysedaten studieren

Jetzt sollten Sie in der Lage sein, zur [Analytics Web](https://analytics.google.com/analytics/web/) Startseite zurückzukehren und die gesammelten Daten über Ihre Site anzusehen (Sie müssen natürlich ein wenig Zeit lassen, bis einige Daten tatsächlich gesammelt werden).

Standardmäßig sollten Sie die Berichtsseite sehen, wie hier:

![Wie Google Analytics Daten im Hauptdashboard erfasst](analytics-reporting.png)

Es gibt eine riesige Menge an Daten, die Sie mit Google Analytics ansehen könnten — angepasste Berichte in verschiedenen Kategorien usw. — und wir haben nicht genug Zeit, alles zu besprechen.
[Erste Schritte mit Analytics](https://support.google.com/analytics/answer/9304153) bietet einige nützliche Anleitungen zu Berichten (und mehr) für Anfänger.

Sie können sehen, welche Browser und Betriebssysteme Ihre Benutzer verwenden, indem Sie _Zielgruppe > Technologie > Browser & OS_ im linken Menü auswählen.

> [!NOTE]
> Beim Gebrauch von Google Analytics sollten Sie sich der irreführenden Verzerrung bewusst sein, z.B., "Wir haben keine Firefox Mobile Benutzer" könnte Sie dazu veranlassen, Firefox Mobile nicht zu unterstützen. Aber Sie werden keine Firefox Mobile Benutzer haben, wenn die Website von Anfang an auf Firefox Mobile nicht funktioniert.

### Weitere Überlegungen

Sie sollten Barrierefreiheit als Anforderung für die A-Klasse testen einschließen.

Außerdem sollten Sie sich der situationsspezifischen Bedürfnisse bewusst sein. Zum Beispiel, wenn Ihr Produkt einen Markt anspricht, in dem Mobiltelefone das Hauptmittel für den Internetzugang sind, sollten Sie wahrscheinlich die Unterstützung mobiler Browser priorisieren.

### Endgültiges Unterstützungsdiagramm

Unser endgültiges Unterstützungsdiagramm sieht also wie folgt aus:

1. A-Klasse: Chrome und Firefox für Windows/Mac, Safari für Mac, und Edge (die letzten zwei Versionen jeder), iOS Safari für iPhone/iPad, Android Standardbrowser (die letzten zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (die letzten zwei Versionen) auf Telefon/Tablet. Barrierefreiheit, die gängige Tests besteht.
2. B-Klasse: Opera Mini.
3. C-Klasse: Opera, andere Nischen-modern-Browser.

## Was werden Sie testen?

Wenn Sie eine neue Ergänzung zu Ihrem Codebasis haben, die getestet werden muss, sollten Sie, bevor Sie mit dem Testen beginnen, eine Liste von Testanforderungen aufschreiben, die bestanden werden müssen, um akzeptiert zu werden. Diese Anforderungen können visuell oder funktional sein — beide zusammen machen eine nutzbare Website-Funktion aus.

Betrachten Sie das folgende Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html) und auch das [Beispiel im Live-Betrieb](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)):

![Wie man ein Testszenario mit Design- und Benutzeranforderungen vorbereitet](sliding-box-demo.png)

Testkriterien für diese Funktion könnten so geschrieben werden:

A- und B-Klasse:

- Die Schaltfläche sollte durch den primären Steuermechanismus des Benutzers aktivierbar sein, was auch immer es ist — dies sollte Maus, Tastatur und Touchscreen einschließen.
- Durch das Umschalten der Schaltfläche sollte das Informationsfeld erscheinen/verschwinden.
- Der Text sollte lesbar sein.
- Sehbehinderte Benutzer, die Bildschirmlesegeräte verwenden, sollten auf den Text zugreifen können.

A-Klasse:

- Das Informationsfeld sollte sanft animiert werden, während es erscheint/verschwindet.
- Der Verlauf und der Textschatten sollten erscheinen, um das Aussehen des Feldes zu verbessern.

Sie könnten bemerken, dass die Schaltfläche mit der Tastatur allein nicht verwendbar ist. Wir könnten dies durch die Implementierung einer Tastatursteuerung für das Umschalten mit JavaScript beheben oder einen anderen Ansatz verwenden.

Diese Testkriterien sind nützlich, weil:

- Sie geben Ihnen eine Reihe von Schritten vor, die Sie befolgen, wenn Sie Tests durchführen.
- Sie können leicht in Anweisungen für Benutzergruppen umgewandelt werden, die bei der Durchführung von Tests befolgt werden sollen (z.B. "versuchen Sie, die Schaltfläche mit Ihrer Maus und dann der Tastatur zu aktivieren…") — siehe [Benutzertests](#benutzertests) unten.
- Sie können auch eine Grundlage für die schriftliche Erstellung automatisierter Tests bieten. Es ist einfacher, solche Tests zu schreiben, wenn Sie genau wissen, was Sie testen möchten und was die Erfolgsbedingungen sind (siehe [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#selenium) später in der Serie).

## Ein Testlabor einrichten

Eine Möglichkeit, Browsertests durchzuführen, besteht darin, die Tests selbst durchzuführen. Dazu verwenden Sie wahrscheinlich eine Kombination aus realen physischen Geräten und emulierten Umgebungen (entweder mit einem Emulator oder einer virtuellen Maschine).

### Physische Geräte

Es ist im Allgemeinen besser, ein echtes Gerät zu haben, das den Browser ausführt, den Sie testen möchten — das bietet die größte Genauigkeit in Bezug auf Verhalten und das gesamte Benutzererlebnis. Sie werden wahrscheinlich etwas wie das folgende für ein angemessenes Low-Level-Gerätelabor haben wollen:

- Ein Mac, mit den installierten Browsern, die Sie testen müssen — dies kann Firefox, Chrome, Opera und Safari einschließen.
- Einen Windows-PC, mit den installierten Browsern, die Sie testen müssen — dies kann Edge (oder IE), Chrome, Firefox und Opera einschließen.
- Ein leistungsschwächeres Android-Telefon und Tablet mit den installierten Browsern, die getestet werden müssen — dies kann Chrome, Firefox und Opera Mini für Android sowie den originalen Android-Standardbrowser einschließen.
- Ein leistungsschwächeres iOS-Telefon und Tablet mit den installierten Browsern, die Sie testen müssen — dies kann iOS Safari sowie Chrome, Firefox und Opera Mini für iOS einschließen.

Folgende Optionen sind ebenfalls gut, wenn Sie sie bekommen können:

- Ein Linux-PC ist verfügbar, falls Sie browser-spezifische Fehler testen müssen, die sich nur in Linux-Versionen von Browsern zeigen. Linux-Nutzer verwenden häufig Firefox, Opera und Chrome. Wenn Sie nur eine Maschine zur Verfügung haben, könnten Sie in Betracht ziehen, eine Dual-Boot-Maschine einzurichten, die Linux und Windows auf separaten Partitionen ausführt.
- Ein paar weniger leistungsfähige mobile Geräte, damit Sie die Leistung von Funktionen wie Animationen auf weniger leistungsfähigen Prozessoren testen können.

Ihre Hauptarbeitsmaschine kann auch ein Ort sein, an dem andere Werkzeuge für bestimmte Zwecke installiert werden können, wie Tools für Barrierefreiheitsaudits, Bildschirmleser und Emulatoren/virtuelle Maschinen.

Einige größere Unternehmen haben Geräte-Labors, die eine sehr große Auswahl an verschiedenen Geräten vorrätig haben, was Entwicklern ermöglicht, Fehler auf sehr spezifischen Browser-/Gerätekombinationen aufzuspüren. Kleinere Unternehmen und Einzelpersonen können sich in der Regel kein so ausgeklügeltes Labor leisten und behelfen sich daher oft mit kleineren Labors, Emulatoren, virtuellen Maschinen und kommerziellen Test-Apps.

Wir werden jede der anderen Optionen im Folgenden behandeln.

> [!NOTE]
> Es wurden Anstrengungen unternommen, öffentlich zugängliche Geräte-Labore zu erstellen — siehe [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/).

> [!NOTE]
> Wir müssen auch die Barrierefreiheit beachten — es gibt eine Reihe nützlicher Tools, die Sie auf Ihrem Rechner installieren können, um Tests zur Barrierefreiheit zu erleichtern, aber wir werden diese im Artikel zur Handhabung allgemeiner Barrierefreiheitsprobleme behandeln, später im Kurs.

### Emulatoren

Emulatoren sind im Grunde Programme, die auf Ihrem Computer laufen und ein Gerät oder eine bestimmte Gerätekondition irgendeiner Art emulieren, sodass Sie einige Ihrer Tests bequemer durchführen können, als eine bestimmte Kombination aus Hard- und Software zum Testen finden zu müssen.

Ein Emulator könnte so einfach sein, wie eine Gerätekondition zu testen. Wenn Sie zum Beispiel ein schnelles und primitives Testen Ihrer Breiten-/Höhen-Medienabfragen für responsives Design durchführen möchten, könnten Sie den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) von Firefox verwenden. Safari hat auch einen ähnlichen Modus, der aktiviert werden kann, indem Sie zu _Safari > Einstellungen_ gehen und das _Entwickler-Menü anzeigen_ aktivieren, dann _Entwickeln > Responsive Design Mode aktivieren_ auswählen. Chrome hat auch etwas ähnliches: den Gerätemodus (siehe [Simulate Mobile Devices with Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)).

Meistens müssen Sie jedoch eine Art von Emulator installieren. Die häufigsten Geräte/Browsers, die Sie testen möchten, sind wie folgt:

- Die offizielle [Android Studio IDE](https://developer.android.com/studio/) für die Entwicklung von Android-Apps ist etwas übergewichtig, nur um Webseiten auf Google Chrome oder den alten Android-Standardbrowser zu testen, aber sie enthält einen robusten [Emulator](https://developer.android.com/studio/run/emulator.html). Wenn Sie etwas Leichteres möchten, ist [Andy](https://www.andyroid.net/) eine vernünftige Option, die sowohl auf Windows als auch auf Mac läuft.
- Apple bietet eine App namens [Simulator](https://help.apple.com/simulator/mac/current/) an, die auf der [XCode](https://developer.apple.com/xcode/) Entwicklungsumgebung läuft und iPad/iPhone/Apple Watch/Apple TV emuliert. Dies schließt den nativen iOS Safari Browser ein. Leider läuft dies nur auf einem Mac.

Sie können auch häufig Simulatoren für andere mobile Geräteumgebungen finden, zum Beispiel:

- Sie können Opera Mini allein emulieren, wenn Sie es testen möchten.

> [!NOTE]
> Viele Emulatoren erfordern tatsächlich die Verwendung einer virtuellen Maschine (siehe unten); wenn dies der Fall ist, werden oft Anweisungen bereitgestellt und/oder die Nutzung der virtuellen Maschine ist im Installer des Emulators integriert.

### Virtuelle Maschinen

Virtuelle Maschinen sind Anwendungen, die auf Ihrem Desktop-Computer laufen und es Ihnen ermöglichen, Emulationen ganzer Betriebssysteme auszuführen, die jeweils in ihrer eigenen virtuellen Festplatte compartmentalisiert sind (oftmals durch eine einzelne große Datei repräsentiert, die sich im Festplattenspeicher des Host-Rechners befindet). Es gibt eine Reihe beliebter virtueller Maschinen-Apps, wie [Parallels](https://www.parallels.com/), [VMware](https://www.vmware.com/) und [Virtual Box](https://www.virtualbox.org/wiki/Downloads); letzteres mögen wir persönlich gerne, da es kostenlos ist.

> [!NOTE]
> Sie benötigen viel freien Festplattenspeicherplatz, um virtuelle Maschinen-Emulationen auszuführen; jedes Betriebssystem, das Sie emulieren, kann viel Speicherplatz belegen. Sie neigen dazu, den benötigten Speicherplatz für jede Installation selbst auszuwählen; Sie könnten mit 10GB auskommen, aber einige Quellen empfehlen bis zu 50GB oder mehr, damit das Betriebssystem zuverlässig läuft. Eine gute Option, die von den meisten virtuellen Maschinen-Apps angeboten wird, ist die Erstellung einer **dynamisch zugewiesenen** Festplatte, die je nach Bedarf wächst und schrumpft.

Um ein Virtual Box zu verwenden, müssen Sie:

1. Eine Installations-CD oder ein Image (z.B. ISO-Datei) für das Betriebssystem, das Sie emulieren möchten, finden. Virtual Box kann diese nicht bereitstellen; die meisten, wie Windows Betriebssysteme, sind kommerzielle Produkte, die nicht frei verteilt werden können.
2. [Laden Sie den passenden Installer herunter](https://www.virtualbox.org/wiki/Downloads) für Ihr Betriebssystem und installieren Sie es.
3. Öffnen Sie die App; Ihnen wird ein Bild wie das folgende gezeigt: ![Anwendungsfenster, linkes Panel listet Windows-Betriebssystem und Opera TV-Emulatoren auf. Rechtes Panel enthält mehrere Unterbereiche, einschließlich Allgemein, System, Anzeige, Einstellungen, Audio, Netzwerk und Vorschau.](virtualbox.png)
4. Um eine neue virtuelle Maschine zu erstellen, drücken Sie die Schaltfläche _New_ oben links im Fenster.
5. Folgen Sie den Anweisungen und füllen Sie die folgenden Dialogfelder entsprechend aus. Sie werden:
   1. Einen Namen für die neue virtuelle Maschine angeben
   2. Wählen, welches Betriebssystem und welche Version Sie darauf installieren
   3. Festlegen, wie viel RAM zugewiesen werden soll (wir empfehlen etwas wie 2048MB oder 2GB)
   4. Eine virtuelle Festplatte erstellen (wählen Sie die Standardoptionen in den drei Dialogfeldern _Erstellen einer virtuellen Festplatte jetzt_, _VDI (Virtual Disk Image)_ und _Dynamisch zugewiesen_).
   5. Den Dateispeicherort und die Größe der virtuellen Festplatte wählen (wählen Sie einen sinnvollen Namen und Ort, um es zu behalten, und für die Größe geben Sie etwa 50GB an oder so viel, wie Sie bereit sind anzugeben).

Jetzt sollte das neue Virtual Box im linken Menü des Hauptfensters der Virtual Box-Benutzeroberfläche erscheinen. An diesem Punkt können Sie darauf doppelklicken — es wird damit beginnen, die virtuelle Maschine zu starten, aber es wird noch nicht das Betriebssystem (OS) installiert sein. An diesem Punkt müssen Sie das Dialogfeld auf das Installations-Image/-Disk verweisen, und es wird die Schritte durchlaufen, um das Betriebssystem zu installieren, genau wie auf einem physischen Rechner.

![Wie man das Virtual Box für ein bestimmtes Betriebssystem installiert](virtualbox-installer.png)

> [!WARNING]
> Sie müssen sicherstellen, dass das Betriebssystemabbild, das Sie auf der virtuellen Maschine installieren möchten, zu diesem Zeitpunkt verfügbar ist und dass es sofort installiert wird. Wenn Sie den Prozess zu diesem Zeitpunkt abbrechen, kann dies die virtuelle Maschine unbenutzbar machen und dazu führen, dass Sie sie löschen und erneut erstellen müssen. Dies ist nicht fatal, aber ärgerlich.

Nachdem der Prozess abgeschlossen ist, sollten Sie über eine virtuelle Maschine verfügen, die ein Betriebssystem in einem Fenster auf Ihrem Host-Rechner ausführt.

![Screenshot von Windows XP, vorhanden in Virtual Box, und ausgeführt auf macOS](virtualbox-running.png)

Sie müssen diese virtuelle Betriebssysteminstallation wie jede andere reale Installation behandeln — zum Beispiel neben den Browsern, die Sie testen möchten, auch ein Anti-Virus-Programm installieren, um es vor Viren zu schützen.

Es ist sehr nützlich, mehrere virtuelle Maschinen zu haben, insbesondere für Windows IE/Edge Tests — auf Windows können Sie nicht mehrere Versionen des Standardbrowsers nebeneinander installiert haben, daher möchten Sie möglicherweise eine Bibliothek virtueller Maschinen aufbauen, um je nach Bedarf unterschiedliche Tests durchführen zu können, z.B.:

- Windows 10 mit Edge 14
- Windows 10 mit Edge 13

> [!NOTE]
> Ein weiterer Vorteil von virtuellen Maschinen ist, dass die virtuellen Festplattenabbilder ziemlich in sich geschlossen sind. Wenn Sie in einem Team arbeiten, können Sie ein virtuelles Festplattenabbild erstellen, dann kopieren und weitergeben. Stellen Sie nur sicher, dass Sie die erforderlichen Lizenzen haben, um all diese Kopien von Windows oder was auch immer Sie ausführen, wenn es sich um ein lizenziertes Produkt handelt.

### Automatisierungs- und kommerzielle Apps

Wie im letzten Kapitel erwähnt, können Sie sich viel Schmerz aus dem Browser-Testing ersparen, indem Sie irgendeine Art von Automatisierungssystem verwenden. Sie können Ihr eigenes Testautomatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte App der Wahl), was einige Einrichtung erfordert, aber sehr lohnend sein kann, wenn Sie es ausgearbeitet haben.

Es gibt auch kommerzielle Tools wie [Sauce Labs](https://saucelabs.com/), [Browser Stack](https://www.browserstack.com/) und [LambdaTest](https://www.lambdatest.com/), die so etwas für Sie erledigen, ohne dass Sie sich um die Einrichtung kümmern müssen, wenn Sie etwas Geld in Ihr Testing investieren möchten.

Eine weitere Alternative ist die Verwendung von No-Code-Testautomatisierungstools wie [Endtest](https://www.endtest.io/).

Wir werden uns später im Modul damit beschäftigen, wie solche Tools genutzt werden.

## Benutzertests

Bevor wir fortfahren, werden wir diesen Artikel mit einem kurzen Blick auf Benutzertests abschließen — dies kann eine gute Option sein, wenn Sie eine willige Benutzergruppe haben, um Ihre neuen Funktionen zu testen. Bedenken Sie, dass dies so einfach oder raffiniert sein kann, wie Sie möchten — Ihre Benutzergruppe könnte eine Gruppe von Freunden, eine Gruppe von Kollegen oder eine Gruppe von unbezahlten oder bezahlten Freiwilligen sein, je nachdem, ob Sie Geld für das Testen ausgeben können.

Im Allgemeinen werden Sie Ihre Benutzer dazu bringen, die Seite oder Ansicht mit der neuen Funktionalität auf irgendeinem Entwicklungsserver anzusehen, damit Sie die endgültige Seite oder Änderung nicht live bringen, bevor sie fertig ist. Sie sollten sie dazu bringen, einige Schritte zu befolgen und die Ergebnisse zu melden, die sie erzielen. Es ist nützlich, eine Reihe von Schritten (manchmal als Skript bezeichnet) bereitzustellen, um zuverlässigere Ergebnisse in Bezug auf das, was Sie testen wollten, zu erhalten. Wir erwähnten dies im Abschnitt [Was werden Sie testen](#what_are_you_going_to_test) oben — es ist einfach, die dort detaillierten Testkriterien in Schritte umzuwandeln, die befolgt werden sollen. Zum Beispiel würden die folgenden Schritte für einen sehenden Benutzer funktionieren:

- Drücken Sie die Fragezeichenschaltfläche mit der Maus auf Ihrem Desktop-Computer ein paar Mal. Aktualisieren Sie das Browserfenster.
- Wählen und aktivieren Sie die Fragezeichenschaltfläche mit der Tastatur auf Ihrem Desktop-Computer ein paar Mal.
- Tippen Sie die Fragezeichenschaltfläche ein paar Mal auf Ihrem Touchscreen-Gerät an.
- Durch das Umschalten der Schaltfläche sollte das Informationsfeld erscheinen/verschwinden. Tut es das in jedem der oben genannten drei Fälle?
- Ist der Text lesbar?
- Animiert das Informationsfeld sanft, während es erscheint/verschwindet?

Beim Testen kann es auch ratsam sein:

- Wenn möglich, richten Sie ein separates Browserprofil ein, in dem Browsererweiterungen und andere solcher Dinge deaktiviert sind, und führen Sie Ihre Tests in diesem Profil aus (siehe [Use the Profile Manager to create and remove Firefox profiles](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) und [Share Chrome with others or add personas](https://support.google.com/chrome/answer/2364824), zum Beispiel).
- Verwenden Sie die private Modus-Funktionalität des Browsers, wenn Sie Tests durchführen, wo verfügbar (z.B. [Private Browsing](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) in Firefox, [Incognito Mode](https://support.google.com/chrome/answer/95464) in Chrome), damit Dinge wie Cookies und temporäre Dateien nicht gespeichert werden.

Diese Schritte sollen sicherstellen, dass der Browser, in dem Sie testen, so "rein" wie möglich ist, d.h. es ist nichts installiert, das die Testergebnisse beeinflussen könnte.

> [!NOTE]
> Eine weitere nützliche einfache Option, wenn Sie die Hardware zur Verfügung haben, ist es, Ihre Sites auf leistungsarmen Telefonen/anderen Geräten zu testen — da Sites größer werden und mehr Effekte bieten, besteht eine höhere Wahrscheinlichkeit, dass die Site verlangsamt wird, also müssen Sie anfangen, die Performance mehr zu berücksichtigen. Der Versuch, Ihre Funktionalität auf einem leistungsschwachen Gerät zum Laufen zu bringen, wird die Erfahrung auf leistungsstärkeren Geräten verbessert machen.

> [!NOTE]
> Einige serverseitige Entwicklungsumgebungen bieten nützliche Mechanismen für das Einspielen von Seitenänderungen nur für eine Teilmenge von Benutzern, was einen nützlichen Mechanismus bietet, um eine Funktion einer Teilmenge von Benutzern testen zu lassen, ohne dass ein separater Entwicklungsserver benötigt wird. Ein Beispiel ist [Django Waffle Flags](https://github.com/django-waffle/django-waffle).

## Zusammenfassung

Nach dem Lesen dieses Artikels sollten Sie nun eine gute Vorstellung davon haben, was Sie tun können, um Ihre Zielgruppe/Zielbrowserliste zu identifizieren und dann effektiv Cross-Browser-Tests auf dieser Liste durchzuführen.

Als Nächstes werden wir uns den tatsächlichen Codeproblemen zuwenden, die Ihre Tests aufdecken könnten, beginnend mit HTML und CSS.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction", "Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}
