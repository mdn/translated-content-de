---
title: Strategien zur Durchführung von Tests
short-title: Testing strategies
slug: Learn_web_development/Extensions/Testing/Testing_strategies
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel erklärt, wie man Cross-Browser-Tests durchführt: wie man auswählt, welche Browser und Geräte getestet werden sollen, wie man diese Browser und Geräte tatsächlich testet, und wie man mit Benutzergruppen testet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung
        von den grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des Cross-Browser-Testings</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis der grundlegenden Konzepte, die beim Cross-Browser-Testing beteiligt sind, zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Auswahl der zu testenden Browser und Geräte

Da Sie nicht jede Kombination von Browser und Gerät testen können, reicht es aus, wenn Sie sicherstellen, dass Ihre Website auf den wichtigsten funktioniert. In der Praxis bedeutet "wichtig" oft "häufig unter der Zielgruppe genutzt".

Sie können Browser und Geräte nach dem Umfang der Unterstützung, die Sie beabsichtigen zu geben, klassifizieren. Zum Beispiel:

1. A-Grade: Allgemeine/moderne Browser — bekannt als fähig. Umfassend testen und volle Unterstützung bieten.
2. B-Grade: Ältere/weniger fähige Browser — bekannt als nicht fähig. Testen und eine einfachere Erfahrung bieten, die vollen Zugang zu den Kerninformationen und -diensten gibt.
3. C-Grade: Seltene/unbekannte Browser — nicht testen, aber annehmen, sie sind fähig. Die volle Seite servieren, die zumindest mit den durch unser defensives Coding bereitgestellten Fallbacks funktionieren sollte.

In den folgenden Abschnitten werden wir ein Unterstützungsdiagramm in diesem Format erstellen.

> [!NOTE]
> Yahoo hat diesen Ansatz zuerst bekannt gemacht, mit ihrem [Graded browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support) Ansatz.

### Prognostizieren der am häufigsten genutzten Browser Ihrer Zielgruppe

Dies beinhaltet typischerweise fundierte Vermutungen basierend auf Benutzerdemografien. Zum Beispiel, wenn Ihre Benutzer in Nordamerika und Westeuropa sind:

Eine schnelle Online-Suche zeigt Ihnen, dass die meisten Menschen in Nordamerika und Westeuropa Windows- oder Mac-Desktops/Laptops verwenden, wo die Hauptbrowser Chrome, Firefox, Safari und Edge sind. Sie würden wahrscheinlich nur die neuesten Versionen dieser Browser testen wollen, da diese regelmäßig aktualisiert werden. Diese sollten alle in die A-Grade-Kategorie fallen.

Die meisten Menschen in dieser demografischen Gruppe verwenden auch entweder iOS- oder Android-Handys, also würden Sie wahrscheinlich die neuesten Versionen von iOS Safari, die letzten paar Versionen des alten Android Standardbrowsers und Chrome und Firefox für iOS und Android testen wollen. Idealerweise sollten Sie diese sowohl auf einem Telefon als auch auf einem Tablet testen, um sicherzustellen, dass responsive Designs funktionieren.

Opera Mini ist nicht sehr fähig, komplexes JavaScript auszuführen, daher sollten wir dies ebenfalls in die B-Grade-Kategorie einordnen.

Daher haben wir unsere Wahl, welche Browser wir testen, auf den Browsern basiert, die wir erwarten, dass unsere Nutzer verwenden.
Das gibt uns bisher das folgende Unterstützungsdiagramm:

1. A-Grade: Chrome und Firefox für Windows/Mac, Safari für Mac, Edge für Windows, iOS Safari für iPhone/iPad, Android Standardbrowser (letzte zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (letzte zwei Versionen) auf Telefon/Tablet
2. B-Grade: Opera Mini
3. C-Grade: n/a

Wenn sich Ihre Zielgruppe größtenteils woanders befindet, können die gängigsten Browser und Betriebssysteme von den oben genannten abweichen.

> [!NOTE]
> "Der CEO meines Unternehmens benutzt ein Blackberry, also sollten wir sicherstellen, dass es darauf gut aussieht" könnte ebenfalls etwas sein, das in Betracht gezogen werden sollte.

### Browser-Statistiken

Einige Websites zeigen, welche Browser in einer bestimmten Region beliebt sind. Zum Beispiel bietet [Statcounter](https://gs.statcounter.com/) einen Eindruck von Trends in Nordamerika.

### Verwendung von Analysen

Eine viel genauere Datenquelle, wenn Sie darauf zugreifen können, ist eine Analyse-App wie [Google Analytics](https://marketingplatform.google.com/about/analytics/), die Ihnen genau sagt, welche Browser Menschen verwenden, um Ihre Website zu durchsuchen. Natürlich setzt dies voraus, dass Sie bereits eine Website haben, um diese darauf anzuwenden, daher ist sie nicht gut für komplett neue Seiten geeignet.

Sie könnten auch überlegen, quelloffene und datenschutzorientierte Analyseplattformen wie [Open Web Analytics](https://www.openwebanalytics.com/) und [Matomo](https://matomo.org/) zu verwenden. Diese erwarten, dass Sie die Analyseplattform selbst hosten.

#### Einrichten von Google Analytics

1. Zuerst benötigen Sie ein Google-Konto. Verwenden Sie dieses Konto, um sich bei [Google Analytics](https://marketingplatform.google.com/about/analytics/) anzumelden.
2. Wählen Sie die Option [Google Analytics](https://analytics.google.com/analytics/web/) (Web) und klicken Sie auf die Schaltfläche _Registrieren_.
3. Geben Sie die Details Ihrer Website/App auf der Registrierungsseite ein. Diese ist recht intuitiv einzurichten; das wichtigste Feld ist die Website-URL. Diese muss die Stamm-URL Ihrer Seite/App sein.
4. Nachdem Sie alles ausgefüllt haben, drücken Sie die Schaltfläche _Tracking-ID abrufen_ und akzeptieren Sie die angezeigten Nutzungsbedingungen.
5. Die nächste Seite bietet Ihnen einige Codeausschnitte und weitere Anweisungen. Für eine einfache Website müssen Sie den _Website-Tracking_-Codeblock kopieren und in alle unterschiedlichen Seiten einfügen, die Sie mit Google Analytics auf Ihrer Website verfolgen möchten. Sie könnten die Snippets unter Ihrem abschließenden `</body>`-Tag platzieren oder an einer anderen geeigneten Stelle, damit sie nicht mit Ihrem Anwendungscode durcheinander geraten.
6. Laden Sie die Änderungen auf den Entwicklungsserver hoch oder dorthin, wo immer Sie Ihren Code benötigen.

Das war's! Ihre Website sollte jetzt bereit sein, damit begonnen werden zu können, Analysedaten zu melden.

#### Analysedaten untersuchen

Nun sollten Sie in der Lage sein, zur [Analytics Web](https://analytics.google.com/analytics/web/) Startseite zurückzukehren und sich die gesammelten Daten über Ihre Seite anzusehen (natürlich müssen Sie ein bisschen Zeit gewähren, damit einige Daten tatsächlich gesammelt werden können).

Standardmäßig sollten Sie den Berichtstab sehen, der so aussieht:

![Wie Google Analytics Daten in seinem Haupt-Dashboard sammelt](analytics-reporting.png)

Es gibt eine riesige Menge an Daten, die Sie mit Google Analytics ansehen könnten — angepasste Berichte in verschiedenen Kategorien usw. — und wir haben nicht die Zeit, alles zu besprechen.
[Einstieg in Analytics](https://support.google.com/analytics/answer/9304153) bietet einige nützliche Anleitung für Berichte (und mehr) für Anfänger.

Sie können sehen, welche Browser und Betriebssysteme Ihre Nutzer verwenden, indem Sie im linken Menü auf _Zielgruppe > Technologie > Browser & OS_ klicken.

> [!NOTE]
> Bei der Verwendung von Google Analytics sollten Sie sich vor irreführenden Vorurteilen in Acht nehmen, z.B. könnte "Wir haben keine Firefox Mobile Nutzer" dazu führen, dass Sie sich nicht darum kümmern, Firefox Mobile zu unterstützen. Aber Sie werden keine Firefox Mobile Nutzer haben, wenn die Seite auf Firefox Mobile von Anfang an kaputt war.

### Weitere Überlegungen

Sie sollten Barrierefreiheit als ein A-Grade-Testkriterium einschließen.

Außerdem sollten Sie sich der situationsspezifischen Anforderungen bewusst sein. Beispielsweise, wenn Ihr Produkt einen Markt anspricht, in dem Mobiltelefone das Hauptmittel zum Zugriff auf das Internet sind, sollten Sie wahrscheinlich die Unterstützung mobiler Browser zur Priorität machen.

### Endgültiges Unterstützungsdiagramm

Unser endgültiges Unterstützungsdiagramm wird somit folgendermaßen aussehen:

1. A-Grade: Chrome und Firefox für Windows/Mac, Safari für Mac und Edge (jeweils die letzten zwei Versionen), iOS Safari für iPhone/iPad, Android Standardbrowser (letzte zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (letzte zwei Versionen) auf Telefon/Tablet. Barrierefreiheit, die gängige Tests besteht.
2. B-Grade: Opera Mini.
3. C-Grade: Opera, andere spezialisierte moderne Browser.

## Was werden Sie testen?

Wenn Sie eine neue Ergänzung zu Ihrem Codebestand haben, die getestet werden muss, sollten Sie, bevor Sie mit dem Testen beginnen, eine Liste von Testanforderungen erstellen, die bestanden werden müssen, um akzeptiert zu werden. Diese Anforderungen können visuell oder funktional sein — beide zusammen machen ein benutzbares Website-Feature aus.

Betrachten Sie das folgende Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html) und auch das [Beispiel live im Einsatz](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)):

![Wie man ein Testszenario vorbereitet, welches das Design und die Benutzeranforderungen zeigt](sliding-box-demo.png)

Testkriterien für dieses Feature könnten wie folgt geschrieben werden:

A und B-Grade:

- Der Button sollte durch den primären Kontrollmechanismus des Benutzers aktivierbar sein, welcher auch immer das ist — das sollte Maus, Tastatur und Touchscreen beinhalten.
- Das Umschalten des Buttons sollte die Informationsbox erscheinenlassen/verschwinden lassen.
- Der Text sollte lesbar sein.
- Sehbehinderte Nutzer, die Screen-Reader verwenden, sollten in der Lage sein, auf den Text zuzugreifen.

A-Grade:

- Die Informationsbox sollte sanft animieren, während sie erscheint/verschwindet.
- Der Verlauf und der Textschatten sollten erscheinen, um das Aussehen der Box zu verbessern.

Sie könnten bemerken, dass der Button mit nur der Tastatur nicht nutzbar ist. Dies könnten wir beheben, indem wir JavaScript verwenden, um eine Tastatursteuerung für das Umschalten zu implementieren, oder eine andere Herangehensweise verwenden.

Diese Testkriterien sind nützlich, weil:

- Sie geben Ihnen eine Reihe von Schritten, denen Sie folgen können, wenn Sie Tests durchführen.
- Sie können leicht in Anweisungen für Benutzergruppen umgewandelt werden, denen diese bei der Durchführung von Tests folgen (z.B. "versuchen Sie, den Button mit Ihrer Maus zu aktivieren und dann mit der Tastatur…") — siehe [Benutzer-Tests](#benutzer-tests) unten.
- Sie können auch eine Grundlage für das Schreiben von automatisierten Tests bieten. Es ist einfacher, solche Tests zu schreiben, wenn Sie genau wissen, was Sie testen möchten und was die Erfolgskriterien sind (siehe [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#selenium) später in der Serie).

## Ein Testlabor zusammenstellen

Eine Option für Browser-Tests ist, die Tests selbst durchzuführen. Dafür verwenden Sie wahrscheinlich eine Kombination aus echten physischen Geräten und emulierten Umgebungen (mittels eines Emulators oder einer virtuellen Maschine).

### Physische Geräte

Es ist generell besser, ein echtes Gerät zu haben, auf dem der zu testende Browser läuft — das bietet die größte Genauigkeit in Bezug auf das Verhalten und das gesamte Nutzererlebnis. Wahrscheinlich möchten Sie so etwas wie das Folgende haben, für ein einigermaßen grundlegendes Geräteminimum:

- Einen Mac, mit den Browsern installiert, die Sie testen müssen — das kann Firefox, Chrome, Opera und Safari beinhalten.
- Einen Windows-PC, mit den Browsern installiert, die Sie testen müssen — das kann Edge (oder IE), Chrome, Firefox und Opera beinhalten.
- Ein höher spezifiziertes Android-Telefon und Tablet mit dem installierten Browser, den Sie testen müssen — das kann Chrome, Firefox und Opera Mini für Android sowie den ursprünglichen Android Standardbrowser beinhalten.
- Ein höher spezifiziertes iOS-Telefon und Tablet mit den installierten Browsern, die Sie testen müssen — das kann iOS Safari, Chrome, Firefox und Opera Mini für iOS beinhalten.

Die folgenden sind ebenfalls gute Optionen, wenn Sie sie bekommen können:

- Ein Linux-PC, für den Fall, dass Sie spezifisch für Linux-Versionen von Browsern Bugs testen müssen. Linux-Nutzer verwenden häufig Firefox, Opera und Chrome. Wenn Sie nur einen Rechner verfügbar haben, könnten Sie in Erwägung ziehen, einen Dual-Boot-Rechner einzurichten, der Linux und Windows auf separaten Partitionen laufen lässt. Der Ubuntu-Installer macht das recht einfach einzurichten; siehe [WindowsDualBoot](https://help.ubuntu.com/community/WindowsDualBoot) für Hilfe hierzu.
- Ein paar weniger leistungsstarke Mobilgeräte, so dass Sie die Leistung von Features wie Animationen auf weniger leistungsstarken Prozessoren testen können.

Ihr Hauptarbeitsrechner kann ebenfalls ein Ort sein, um andere Tools für spezifische Zwecke zu installieren, wie z.B. Tools zur Barrierefreiheitsaudits, Screen-Reader und Emulatoren/virtuelle Maschinen.

Einige größere Unternehmen besitzen Geräfelabore, die eine sehr große Auswahl an verschiedenen Geräten vorhalten und es Entwicklern ermöglichen, Bugs auf sehr spezifischen Browser-/Gerätekombinationen zu finden. Kleinere Unternehmen und Einzelpersonen können sich in der Regel keine so ausgefeilte Laborausrüstung leisten, sodass sie tendenziell auf kleinere Labore, Emulatoren, virtuelle Maschinen und kommerzielle Test-Apps zurückgreifen.

Wir werden jede der anderen Optionen unten besprechen.

> [!NOTE]
> Es wurden einige Anstrengungen unternommen, öffentlich zugängliche Geräte-Labore zu schaffen — siehe [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/).

> [!NOTE]
> Wir müssen auch die Barrierefreiheit berücksichtigen — es gibt eine Reihe nützlicher Tools, die Sie auf Ihrem Rechner installieren können, um Barrierefreiheits-Tests zu erleichtern, aber wir werden diese im Artikel zum Umgang mit allgemeinen Barrierefreiheitsproblemen später im Kurs behandeln.

### Emulatoren

Emulatoren sind im Grunde Programme, die auf Ihrem Computer laufen und ein Gerät oder bestimmte Gerätezustände irgendeiner Art emulieren, sodass Sie einige Ihrer Tests bequemer durchführen können, als eine bestimmte Kombination von Hardware/Software finden zu müssen.

Ein Emulator könnte so einfach sein wie das Testen eines Gerätezustands. Zum Beispiel, wenn Sie eine schnelle und einfache Prüfung Ihrer Breiten/Höhen-Medienabfragen für responsives Design machen möchten, könnten Sie den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) von Firefox verwenden. Safari verfügt ebenfalls über einen ähnlichen Modus, der aktiviert werden kann, indem man auf _Safari > Einstellungen_ geht und _Entwicklermenü anzeigen_ aktiviert, dann _Entwickeln > Responsive Design-Modus aktivieren_ auswählt. Chrome hat auch etwas Ähnliches: den Gerätemodus (siehe [Simulate Mobile Devices with Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)).

Meistens müssen Sie jedoch eine Art Emulator installieren. Die am häufigsten getesteten Geräte/Browser sind wie folgt:

- Die offizielle [Android Studio IDE](https://developer.android.com/studio/) zur Entwicklung von Android-Apps ist etwas schwergewichtig, nur um Websites auf Google Chrome oder dem alten Stock Android Browser zu testen, aber sie wird mit einem robusten [Emulator](https://developer.android.com/studio/run/emulator.html) geliefert. Wenn Sie etwas Leichteres suchen, ist [Andy](https://www.andyroid.net/) eine vernünftige Option, die sowohl auf Windows als auch auf Mac läuft.
- Apple stellt eine App namens [Simulator](https://help.apple.com/simulator/mac/current/) zur Verfügung, die auf dem [XCode](https://developer.apple.com/xcode/) Entwicklungstool aufsetzt und iPad/iPhone/Apple Watch/Apple TV emuliert. Dies beinhaltet den nativen iOS Safari Browser. Leider läuft dies nur auf einem Mac.

Oft können Sie auch Simulatoren für andere mobile Geräteumgebungen finden, zum Beispiel:

- Sie können Opera Mini selbst emulieren, wenn Sie es testen möchten.

> [!NOTE]
> Viele Emulatoren erfordern eigentlich die Verwendung einer virtuellen Maschine (siehe unten); wenn dies der Fall ist, werden oft Anweisungen bereitgestellt und/oder die Nutzung der virtuellen Maschine ist in den Installer des Emulators integriert.

### Virtuelle Maschinen

Virtuelle Maschinen sind Anwendungen, die auf Ihrem Desktop-Computer laufen und Ihnen erlauben, Emulationen ganzer Betriebssysteme auszuführen, die jeweils in ihrer eigenen virtuellen Festplatte compartimentiert sind (oft durch eine einzige große Datei auf der Festplatte der Host-Maschine dargestellt). Es gibt eine Reihe populärer virtueller Maschinen-Apps, wie [Parallels](https://www.parallels.com/), [VMware](https://www.vmware.com/) und [Virtual Box](https://www.virtualbox.org/wiki/Downloads); wir mögen letzteres besonders, weil es kostenlos ist.

> [!NOTE]
> Sie benötigen viel verfügbaren Festplattenspeicher, um virtuelle Maschinenemulationen auszuführen; jedes Betriebssystem, das Sie emulieren, kann viel Speicher beanspruchen. Sie neigen dazu, den Festplattenspeicher auszuwählen, den Sie für jede Installation wünschen; Sie könnten wahrscheinlich mit 10 GB auskommen, aber einige Quellen empfehlen bis zu 50 GB oder mehr, damit das Betriebssystem zuverlässig läuft. Eine gute Option, die von den meisten virtuellen Maschinen-Apps geboten wird, ist eine **dynamisch zugewiesene** Festplatte zu erstellen, die nach Bedarf wächst und schrumpft.

Um eine Virtual Box zu verwenden, müssen Sie:

1. Einen Installationsdatenträger oder ein Image (z.B. ISO-Datei) für das Betriebssystem, das Sie emulieren möchten, beschaffen. Virtual Box kann diese nicht bereitstellen; die meisten, wie Windows OSes, sind kommerzielle Produkte, die nicht frei verteilt werden können.
2. [Laden Sie den geeigneten Installer](https://www.virtualbox.org/wiki/Downloads) für Ihr Betriebssystem herunter und installieren Sie ihn.
3. Öffnen Sie die App; Sie werden mit einer Ansicht wie der folgenden begrüßt: ![Anwendungsfenster: Linkes Panel listet Windows-Betriebssystem und Opera-TV-Emulatoren. Rechtes Panel beinhaltet mehrere Unterpanels, einschließlich Allgemein, System, Display, Einstellungen, Audio, Netzwerk und eine Vorschau.](virtualbox.png)
4. Um eine neue virtuelle Maschine zu erstellen, drücken Sie die _Neu_ Schaltfläche in der obersten linken Ecke.
5. Folgen Sie den Anweisungen und füllen Sie die nachfolgenden Dialogboxen entsprechend aus. Sie werden:

   1. Einen Namen für die neue virtuelle Maschine angeben
   2. Das Betriebssystem und die Version wählen, die Sie darauf installieren
   3. Den zugewiesenen RAM festlegen (wir empfehlen etwa 2048MB oder 2GB)
   4. Eine virtuelle Festplatte erstellen (wählen Sie die Standardoptionen über die drei Dialogboxen mit _Jetzt eine virtuelle Festplatte erstellen_, _VDI (Virtual Disk Image)_ und _Dynamisch zugewiesen_).
   5. Wählen Sie den Speicherort und die Größe der virtuellen Festplatte (wählen Sie einen sinnvollen Namen und Ort, um sie zu speichern, und für die Größe geben Sie etwa 50 GB an oder so viel wie Sie bereit sind anzugeben).

Nun sollte die neue virtuelle Box im linken Menü des Haupt-UIs der Virtual Box erscheinen. An diesem Punkt können Sie darauf doppelklicken, um sie zu öffnen — es wird beginnen, die virtuelle Maschine zu starten, aber sie wird das Betriebssystem (OS) noch nicht installiert haben. An diesem Punkt müssen Sie das Dialogfeld auf das Installationsimage/-diskette verweisen, und es wird die Schritte durchlaufen, um das Betriebssystem wie auf einer physischen Maschine zu installieren.

![Wie man die Virtual Box für ein bestimmtes Betriebssystem installiert](virtualbox-installer.png)

> [!WARNING]
> Sie müssen sicherstellen, dass Sie an diesem Punkt das Betriebssystemimage haben, das Sie auf der virtuellen Maschine installieren möchten, und es sofort installieren. Wenn Sie den Prozess an diesem Punkt abbrechen, kann dies die virtuelle Maschine unbrauchbar machen und es notwendig machen, sie zu löschen und erneut zu erstellen. Dies ist nicht katastrophal, aber es ist ärgerlich.

Nachdem der Prozess abgeschlossen ist, sollten Sie eine virtuelle Maschine haben, die ein Betriebssystem in einem Fenster auf Ihrem Host-Computer ausführt.

![Screenshot von Windows XP, gehostet auf Virtual Box, und auf macOS ausgeführt](virtualbox-running.png)

Sie müssen diese virtuelle Betriebssysteminstallation genauso behandeln wie jede reale Installation — zum Beispiel, zusätzlich zu den zu testenden Browsern, installieren Sie ein Anti-Virus-Programm, um es vor Viren zu schützen.

Mehrere virtuelle Maschinen zu haben, ist sehr nützlich, insbesondere für Windows IE/Edge-Testings — auf Windows ist es nicht möglich, mehrere Versionen des Standardbrowsers nebeneinander installiert zu haben, daher möchten Sie möglicherweise eine Bibliothek von virtuellen Maschinen aufbauen, um unterschiedliche Tests nach Bedarf durchzuführen, z.B.:

- Windows 10 mit Edge 14
- Windows 10 mit Edge 13

> [!NOTE]
> Ein weiterer guter Aspekt von virtuellen Maschinen ist, dass die virtuellen Disk-Images ziemlich in sich abgeschlossen sind. Wenn Sie in einem Team arbeiten, können Sie ein virtuelles Disk-Image erstellen, dann kopieren und weitergeben. Stellen Sie einfach sicher, dass Sie über die notwendigen Lizenzen verfügen, um all diese Kopien von Windows oder was auch immer Sie ausführen, wenn es sich um ein lizenziertes Produkt handelt, laufen zu lassen.

### Automation und kommerzielle Apps

Wie im letzten Kapitel erwähnt, können Sie viel Schmerz aus dem Browser-Testing herausholen, indem Sie ein Automatisierungssystem verwenden. Sie können Ihr eigenes Testautomatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte Wahl), was einigen Aufwand bei der Einrichtung erfordert, aber sehr lohnend sein kann, wenn es einmal eingerichtet ist.

Es gibt auch kommerzielle Tools wie [Sauce Labs](https://saucelabs.com/), [Browser Stack](https://www.browserstack.com/) und [LambdaTest](https://www.lambdatest.com/), die Ihnen diese Art von Dienstleistungen bieten, ohne dass Sie sich um die Einrichtung kümmern müssen, wenn Sie bereit sind, etwas Geld in Ihre Tests zu investieren.

Eine andere Alternative ist die Verwendung von No-Code-Testautomatisierungstools wie [Endtest](https://www.endtest.io/).

Wir werden später in diesem Modul sehen, wie man solche Tools verwendet.

## Benutzer-Tests

Bevor wir fortfahren, schließen wir diesen Artikel ab, indem wir ein wenig über Benutzer-Tests sprechen — dies kann eine gute Option sein, wenn Sie eine Gruppe freiwilliger Benutzer haben, um Ihre neue Funktionalität zu testen. Beachten Sie, dass dies so einfach oder so ausgefeilt sein kann, wie Sie möchten — Ihre Benutzergruppe könnte eine Gruppe von Freunden, eine Gruppe von Kollegen oder eine Gruppe von unbezahlten oder bezahlten Freiwilligen sein, je nachdem, ob Sie etwas Geld für Tests ausgeben möchten.

Im Allgemeinen werden Sie Ihre Benutzer dazu bringen, sich die Seite oder Ansicht mit der neuen Funktionalität auf irgendeinem Entwicklungserver anzusehen, damit Sie die endgültige Seite oder Änderung nicht live haben, bis sie fertig ist. Sie sollten sie dazu bringen, einige Schritte zu folgen und die erhaltenen Ergebnisse zu berichten. Es ist sinnvoll, eine Reihe von Schritten (manchmal auch Skript genannt) bereitzustellen, damit Sie verlässlichere Ergebnisse in Bezug auf das erhalten, was Sie testen wollten. Wir haben dies im Abschnitt [Was werden Sie testen](#what_are_you_going_to_test) oben erwähnt — es ist einfach, die detaillierten Testkriterien dort in auszuführende Schritte zu verwandeln. Zum Beispiel würde das Folgende für einen sehenden Benutzer funktionieren:

- Klicken Sie mit der Maus auf Ihrem Desktop-Computer ein paar Mal auf den Fragezeichen-Button. Aktualisieren Sie das Browserfenster.
- Wählen und aktivieren Sie den Fragezeichen-Button mit der Tastatur auf Ihrem Desktop-Computer ein paar Mal.
- Tippen Sie ein paar Mal auf den Fragezeichen-Button auf Ihrem Touchscreen-Gerät.
- Das Umschalten des Buttons sollte die Informationsbox erscheinenlassen/verschwinden lassen. Tut es das, in jedem der obigen drei Fälle?
- Ist der Text lesbar?
- Animiert die Informationsbox sanft während sie erscheint/verschwindet?

Bei der Durchführung von Tests kann es auch eine gute Idee sein:

- Ein separates Browserprofil einzurichten, wo möglich, mit deaktivierten Browsererweiterungen und anderen solchen Dingen und Ihre Tests in diesem Profil auszuführen (siehe [Verwenden des Profilmanagers zur Erstellung und Entfernung von Firefox-Profilen](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) und [Chrome mit anderen teilen oder Personas hinzufügen](https://support.google.com/chrome/answer/2364824), zum Beispiel).
- Die Funktion für privates Surfen des Browsers, wo verfügbar, bei der Durchführung von Tests zu nutzen (z.B. [Privates Surfen](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) in Firefox, [Inkognito-Modus](https://support.google.com/chrome/answer/95464) in Chrome), so dass Dinge wie Cookies und temporäre Dateien nicht gespeichert werden.

Diese Schritte sind darauf ausgelegt sicherzustellen, dass der Browser, in dem Sie testen, so "rein" wie möglich ist, d.h. es gibt nichts installiert, das die Testergebnisse beeinflussen könnte.

> [!NOTE]
> Eine weitere nützliche, einfache Option, wenn Sie die Hardware zur Verfügung haben, ist, Ihre Seiten auf leistungsschwachen Telefonen/anderen Geräten zu testen — da Seiten größer werden und mehr Effekte bieten, gibt es eine höhere Wahrscheinlichkeit, dass die Seite langsamer wird, daher müssen Sie mehr Rücksicht auf die Leistung nehmen. Zu versuchen, Ihre Funktionalität auf einem leistungsschwachen Gerät zum Laufen zu bringen, erhöht die Wahrscheinlichkeit, dass die Erfahrung auf höherwertigen Geräten gut ist.

> [!NOTE]
> Einige serverseitige Entwicklungsumgebungen bieten nützliche Mechanismen, um Änderungen an Seiten nur an eine Teilmenge von Benutzern auszurollen, was einen nützlichen Mechanismus bietet, um eine Funktion von einer Teilmenge von Benutzern testen zu lassen, ohne dass ein separater Entwicklungsserver erforderlich ist. Ein Beispiel ist [Django Waffle Flags](https://github.com/django-waffle/django-waffle).

## Zusammenfassung

Nach dem Lesen dieses Artikels sollten Sie nun eine gute Vorstellung davon haben, was Sie tun können, um Ihre Zielgruppe/Zielbrowserliste zu identifizieren und dann effektiv Cross-Browser-Tests auf dieser Liste durchzuführen.

Als Nächstes werden wir uns den tatsächlichen Codeproblemen zuwenden, die Ihre Tests möglicherweise aufdecken, beginnend mit HTML und CSS.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}
