---
title: Strategien zur Durchführung von Tests
slug: Learn_web_development/Extensions/Testing/Testing_strategies
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel erklärt, wie man Cross-Browser-Tests durchführt: wie man auswählt, welche Browser und Geräte getestet werden sollen, wie man diese Browser und Geräte tatsächlich testet und wie man mit Benutzergruppen testet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung
        der grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Grundprinzipien des Cross-Browser-Testings</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis für die grundlegenden Konzepte des Cross-Browser-Testings zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Auswahl der zu testenden Browser und Geräte

Da Sie nicht jede Kombination aus Browser und Gerät testen können, reicht es aus, sicherzustellen, dass Ihre Website auf den wichtigsten funktioniert. In praktischen Anwendungen bedeutet "wichtig" oft "häufig unter der Zielgruppe genutzt".

Sie können Browser und Geräte nach dem Maß an Unterstützung, das Sie geben möchten, klassifizieren. Zum Beispiel:

1. A-grade: Häufige/moderne Browser — bekannt, dass sie leistungsfähig sind. Sorgfältig testen und volle Unterstützung gewährleisten.
2. B-grade: Ältere/weniger leistungsfähige Browser — bekannt, dass sie nicht vollständig leistungsfähig sind. Testen und ein einfacheres Erlebnis bieten, das vollen Zugang zu Kerninformationen und -diensten bietet.
3. C-grade: Seltene/unbekannte Browser — nicht testen, aber annehmen, dass sie leistungsfähig sind. Die vollständige Website bereitstellen, die zumindest mit den durch unser defensives Codieren bereitgestellten Fallbacks funktionieren sollte.

In den folgenden Abschnitten werden wir ein Unterstützungsdiagramm in diesem Format aufbauen.

> [!NOTE]
> Yahoo machte diesen Ansatz zuerst mit ihrem [Graded Browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support) populär.

### Prognostizieren Sie die am häufigsten verwendeten Browser Ihrer Zielgruppe

Dies beinhaltet typischerweise, fundierte Vermutungen basierend auf demografischen Daten der Nutzer anzustellen. Angenommen, Ihre Nutzer befinden sich in Nordamerika und Westeuropa:

Eine einfache Online-Suche zeigt Ihnen, dass die meisten Menschen in Nordamerika und Westeuropa Windows- oder Mac-Desktops/Laptops nutzen, wo die Hauptbrowser Chrome, Firefox, Safari und Edge sind. Sie würden wahrscheinlich nur die neuesten Versionen dieser Browser testen wollen, da diese regelmäßig Updates erhalten. Diese sollten alle in die A-grade-Kategorie eingestuft werden.

Die meisten Menschen in dieser demografischen Gruppe nutzen auch entweder iOS- oder Android-Handys, also würden Sie wahrscheinlich die neuesten Versionen von iOS Safari, die letzten beiden Versionen des alten Android-Standardbrowsers sowie Chrome und Firefox für iOS und Android testen wollen. Idealerweise sollten Sie diese sowohl auf einem Telefon als auch auf einem Tablet testen, um sicherzustellen, dass reaktionsschnelle Designs funktionieren.

Opera Mini ist nicht sehr leistungsfähig bei der Ausführung komplexer JavaScript-Inhalte, daher sollten wir diesen in die B-grade-Kategorie einordnen.

So haben wir unsere Auswahl der zu testenden Browser auf den Browsern basiert, von denen wir erwarten, dass sie von unseren Nutzern verwendet werden.
Das gibt uns bisher das folgende Unterstützungsdiagramm:

1. A-grade: Chrome und Firefox für Windows/Mac, Safari für Mac, Edge für Windows, iOS Safari für iPhone/iPad, Android-Standardbrowser (die letzten beiden Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (die letzten beiden Versionen) auf Telefon/Tablet
2. B-grade: Opera Mini
3. C-grade: n/a

Wenn Ihre Zielgruppe sich hauptsächlich woanders befindet, könnten die am häufigsten genutzten Browser und Betriebssysteme von den oben genannten abweichen.

> [!NOTE]
> "Der CEO meines Unternehmens benutzt ein Blackberry, also sollten wir sicherstellen, dass es darauf gut aussieht" kann auch etwas sein, das berücksichtigt werden sollte.

### Browser-Statistiken

Einige Webseiten zeigen, welche Browser in einer bestimmten Region populär sind. Zum Beispiel gibt [Statcounter](https://gs.statcounter.com/) einen Überblick über Trends in Nordamerika.

### Verwendung von Analytics

Eine viel genauere Datenquelle, wenn Sie darauf zugreifen können, ist eine Analytics-App wie [Google Analytics](https://marketingplatform.google.com/about/analytics/), die Ihnen genau sagt, welche Browser die Personen verwenden, um Ihre Website zu durchsuchen. Natürlich setzt das voraus, dass Sie bereits eine Website haben, auf der Sie es einsetzen können, was für völlig neue Websites nicht ideal ist.

Sie könnten auch erwägen, Open-Source- und datenschutzorientierte Analyseplattformen wie [Open Web Analytics](https://www.openwebanalytics.com/) und [Matomo](https://matomo.org/) zu verwenden. Diese erwarten, dass Sie die Analyseplattform selbst hosten.

#### Einrichtung von Google Analytics

1. Zunächst benötigen Sie ein Google-Konto. Nutzen Sie dieses Konto, um sich bei [Google Analytics](https://marketingplatform.google.com/about/analytics/) anzumelden.
2. Wählen Sie die Option [Google Analytics](https://analytics.google.com/analytics/web/) (Web) und klicken Sie auf die Schaltfläche _Anmelden_.
3. Geben Sie Ihre Website-/App-Details auf der Anmeldeseite ein. Diese ist ziemlich intuitiv einzurichten; das wichtigste Feld, das richtig eingestellt werden muss, ist die Website-URL. Dies muss die Root-URL Ihrer Website/App sein.
4. Sobald Sie alles ausgefüllt haben, drücken Sie die Schaltfläche _Tracking-ID abrufen_ und akzeptieren Sie die angezeigten Nutzungsbedingungen.
5. Die nächste Seite stellt Ihnen einige Codeausschnitte und andere Anweisungen zur Verfügung. Für eine grundlegende Website müssen Sie den Codeblock _Website-Nachverfolgung_ kopieren und in allen verschiedenen Seiten einfügen, die Sie mit Google Analytics auf Ihrer Website nachverfolgen wollen. Sie könnten die Ausschnitte unter Ihrem schließenden `</body>`-Tag platzieren oder an einem anderen geeigneten Ort, der verhindert, dass sie mit Ihrem Anwendungscode durcheinander geraten.
6. Laden Sie die Änderungen auf den Entwicklungsserver oder einen anderen Ort hoch, an dem Sie Ihren Code benötigen.

Das war's! Ihre Website sollte nun bereit sein, Analyseeinträge zu erstellen.

#### Analyse von Analysedaten

Nun sollten Sie in der Lage sein, zur [Analytics Web](https://analytics.google.com/analytics/web/)-Startseite zurückzukehren und die Daten zu betrachten, die Sie über Ihre Website gesammelt haben (Sie müssen natürlich ein wenig Zeit lassen, damit tatsächlich Daten gesammelt werden).

Standardmäßig sollten Sie den Berichtsreiter sehen, der etwa so aussieht:

![Wie Google Analytics Daten im Hauptberichtsdashboard erhebt](analytics-reporting.png)

Es gibt eine riesige Menge an Daten, die Sie mit Google Analytics betrachten könnten — kundenspezifische Berichte in verschiedenen Kategorien etc. — und wir haben nicht die Zeit, alles zu besprechen.
[Erste Schritte mit Analytics](https://support.google.com/analytics/answer/9304153) bietet einige nützliche Anleitungen zum Reporting (und mehr) für Anfänger.

Sie können sehen, welche Browser und Betriebssysteme Ihre Benutzer verwenden, indem Sie _Zielgruppe > Technologie > Browser & Betriebssystem_ aus dem linken Menü auswählen.

> [!NOTE]
> Bei der Verwendung von Google Analytics müssen Sie sich bewusst sein, dass es irreführende Verzerrungen geben kann, z.B. "Wir haben keine Firefox Mobile-Nutzer" könnte dazu führen, dass Sie sich nicht um die Unterstützung von Firefox Mobile kümmern. Aber Sie werden keine Firefox Mobile-Nutzer haben, wenn die Seite auf Firefox Mobile von Anfang an nicht funktionierte.

### Weitere Überlegungen

Sie sollten Barrierefreiheit als Anforderung für Tests der Kategorie A aufnehmen.

Sie sollten sich auch über situationsbedingte Bedürfnisse im Klaren sein. Beispielsweise, wenn Ihr Produkt auf einen Markt abzielt, in dem Mobiltelefone das primäre Mittel zum Internetzugang sind, möchten Sie wahrscheinlich die Unterstützung mobiler Browser priorisieren.

### Letzte Unterstützungstabelle

Unsere endgültige Unterstützungstabelle wird am Ende folgendermaßen aussehen:

1. A-grade: Chrome und Firefox für Windows/Mac, Safari für Mac und Edge (die letzten beiden Versionen von jedem), iOS Safari für iPhone/iPad, Android-Standardbrowser (die letzten beiden Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (die letzten beiden Versionen) auf Telefon/Tablet. Barrierefreiheit besteht übliche Tests.
2. B-grade: Opera Mini.
3. C-grade: Opera, andere Nischen-Moderne-Browser.

## Was werden Sie testen?

Wenn Sie eine neue Ergänzung zu Ihrem Codebestand haben, die getestet werden muss, sollten Sie, bevor Sie mit dem Testen beginnen, eine Liste von Testanforderungen schreiben, die erfüllt werden müssen, um akzeptiert zu werden. Diese Anforderungen können visuell oder funktional sein - beide zusammen ergeben eine nutzbare Website-Funktion.

Betrachten Sie das folgende Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html) und auch das [laufende Beispiel](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)):

![Wie man ein Testszenario vorbereitet, das das Design und die Benutzeranforderungen umfasst](sliding-box-demo.png)

Die Testkriterien für dieses Feature könnten folgendermaßen geschrieben werden:

A- und B-grade:

- Die Schaltfläche sollte mit dem primären Steuermechanismus des Benutzers aktivierbar sein, was auch immer dies ist - dies sollte Maus, Tastatur und Touchscreen umfassen.
- Durch Umschalten der Schaltfläche sollte das Informationsfeld angezeigt/versteckt werden.
- Der Text sollte lesbar sein.
- Sehbehinderte Benutzer, die Screenreader verwenden, sollten auf den Text zugreifen können.

A-grade:

- Das Informationsfeld sollte reibungslos animiert werden, wenn es angezeigt/versteckt wird.
- Der Farbverlauf und der Textschatten sollten das Aussehen des Feldes verbessern.

Sie könnten bemerken, dass die Schaltfläche nicht nur mit der Tastatur benutzbar ist. Wir könnten dies mit JavaScript beheben, um eine Tastatursteuerung für das Umschalten zu implementieren, oder einen anderen Ansatz verwenden.

Diese Testkriterien sind nützlich, weil:

- Sie Ihnen eine Reihe von Schritten geben, die Sie befolgen können, wenn Sie Tests durchführen.
- Sie leicht in Anweisungen für Benutzergruppen umgewandelt werden können, wenn Sie Tests durchführen (z.B. "Versuchen Sie, die Schaltfläche mit Ihrer Maus zu aktivieren, und dann mit der Tastatur...") - siehe [Benutzertests](#benutzertests) unten.
- Sie auch eine Grundlage für das Schreiben automatisierter Tests bieten können. Es ist einfacher, solche Tests zu schreiben, wenn Sie genau wissen, was Sie testen möchten und welche Erfolgsbedingungen gelten (siehe [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#selenium), später in der Serie).

## Einrichtung eines Testlabs

Eine Möglichkeit, Browser-Tests durchzuführen, besteht darin, die Tests selbst zu machen. Dafür werden Sie wahrscheinlich eine Kombination aus tatsächlichen physischen Geräten und emulierten Umgebungen (entweder mit einem Emulator oder einer virtuellen Maschine) verwenden.

### Physische Geräte

Es ist generell besser, ein echtes Gerät mit dem Browser zu haben, den Sie testen möchten — dies bietet die größte Genauigkeit in Bezug auf Verhalten und allgemeine Benutzererfahrung. Wahrscheinlich möchten Sie so etwas wie das Folgende haben, für ein vernünftiges Low-Level-Gerätelabor:

- Ein Mac mit den installierten Browsern, die Sie testen müssen — dazu können Firefox, Chrome, Opera und Safari gehören.
- Ein Windows-PC mit den installierten Browsern, die Sie testen müssen — dazu können Edge (oder Internet Explorer), Chrome, Firefox und Opera gehören.
- Ein besser ausgestattetes Android-Telefon und -Tablet mit den installierten Browsern, die Sie testen müssen — dazu können Chrome, Firefox und Opera Mini für Android sowie der ursprüngliche Android-Standardbrowser gehören.
- Ein besser ausgestattetes iOS-Telefon und -Tablet mit den installierten Browsern, die Sie testen müssen — dazu können iOS Safari sowie Chrome, Firefox und Opera Mini für iOS gehören.

Die folgenden Optionen sind ebenfalls gut, wenn Sie sie bekommen können:

- Ein Linux-PC, falls Sie Bugs testen müssen, die spezifisch für Linux-Versionen von Browsern sind. Linux-Nutzer verwenden häufig Firefox, Opera und Chrome. Wenn Ihnen nur eine Maschine zur Verfügung steht, könnten Sie in Betracht ziehen, eine Dual-Boot-Maschine einzurichten, die Linux und Windows auf separaten Partitionen ausführt. Das Ubuntu-Installationsprogramm macht dies recht einfach; siehe [WindowsDualBoot](https://help.ubuntu.com/community/WindowsDualBoot) für Hilfe dazu.
- Ein paar mobile Geräte mit niedrigerer Spezifikation, damit Sie die Leistung von Funktionen wie Animationen auf weniger leistungsstarken Prozessoren testen können.

Ihre Hauptarbeitsmaschine kann auch ein Ort sein, um andere Werkzeuge für spezielle Zwecke zu installieren, wie z.B. Werkzeuge zur Barrierefreiheitsaudits, Screenreader und Emulatoren/virtuelle Maschinen.

Einige größere Unternehmen haben Gerätesteuerungslabore, die eine sehr große Auswahl an verschiedenen Geräten beinhalten, was es Entwicklern ermöglicht, Bugs auf sehr spezifischen Browser-/Gerätekombinationen zu finden. Kleinere Unternehmen und Einzelpersonen können sich in der Regel kein so großes Labor leisten, daher begnügen sie sich in der Regel mit kleineren Laboren, Emulatoren, virtuellen Maschinen und kommerziellen Test-Apps.

Wir werden jede der anderen Optionen unten behandeln.

> [!NOTE]
> Es wurden einige Anstrengungen unternommen, um öffentlich zugängliche Gerätesteuerungslabore zu schaffen — siehe [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/).

> [!NOTE]
> Wir müssen auch Barrierefreiheit berücksichtigen — es gibt eine Reihe nützlicher Werkzeuge, die Sie auf Ihrem Rechner installieren können, um Barrierefreiheitstests zu erleichtern, aber wir werden diese im Artikel Behandlung häufiger Barrierefreiheitsprobleme später im Kurs behandeln.

### Emulatoren

Emulatoren sind im Grunde Programme, die auf Ihrem Computer laufen und ein Gerät oder bestimmte Gerätebedingungen irgendeiner Art emulieren, sodass Sie einige Ihrer Tests bequemer durchführen können, ohne eine bestimmte Kombination aus Hardware/Software finden zu müssen.

Ein Emulator kann so einfach sein wie das Testen einer Gerätebedingung. Zum Beispiel, wenn Sie schnell und einfach Ihre Breite/Höhen-Media-Queries für reaktionsschnelles Design testen wollen, könnten Sie den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) von Firefox verwenden. Safari hat auch einen ähnlichen Modus, der aktiviert werden kann, indem Sie _Safari > Einstellungen_ aufrufen und _Entwicklungsmenü anzeigen_ ankreuzen und dann _Entwickeln > Reaktionsfähigen Designmodus aktivieren_ wählen. Chrome hat auch etwas Ähnliches: Gerätemodus (siehe [Simulate Mobile Devices with Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)).

Meistens müssen Sie jedoch irgendeinen Emulator installieren. Die gängigsten Geräte/Browser, die Sie testen möchten, sind folgende:

- Der offizielle [Android Studio IDE](https://developer.android.com/studio/) zur Entwicklung von Android-Apps ist ein bisschen schwergewichtig, nur um Webseiten auf Google Chrome oder dem alten Stock Android-Browser zu testen, aber es kommt mit einem robusten [Emulator](https://developer.android.com/studio/run/emulator.html). Wenn Sie etwas leichteres wollen, ist [Andy](https://www.andyroid.net/) eine vernünftige Option, die sowohl auf Windows als auch auf Mac läuft.
- Apple bietet eine App namens [Simulator](https://help.apple.com/simulator/mac/current/) an, die auf dem [XCode](https://developer.apple.com/xcode/) Entwicklungsumfeld läuft und iPad/iPhone/Apple Watch/Apple TV emuliert. Dies schließt den nativen iOS Safari-Browser ein. Dies läuft leider nur auf einem Mac.

Man kann oft auch Simulatoren für andere mobile Geräteumgebungen finden, zum Beispiel:

- Sie können Opera Mini selbst emulieren, wenn Sie es testen möchten.

> [!NOTE]
> Viele Emulatoren erfordern tatsächlich die Verwendung einer virtuellen Maschine (siehe unten); wenn dies der Fall ist, werden oft Anweisungen gegeben, und/oder die Verwendung der virtuellen Maschine ist in den Installer des Emulators integriert.

### Virtuelle Maschinen

Virtuelle Maschinen sind Anwendungen, die auf Ihrem Desktop-Computer laufen und es Ihnen ermöglichen, Emulationen ganzer Betriebssysteme auszuführen, die jeweils in ihrer eigenen virtuellen Festplatte gekapselt sind (oft dargestellt durch eine einzelne große Datei, die auf der Festplatte des Hostrechners existiert). Es gibt eine Reihe bekannter virtueller Maschinen-Apps, wie [Parallels](https://www.parallels.com/), [VMware](https://www.vmware.com/) und [Virtual Box](https://www.virtualbox.org/wiki/Downloads); wir persönlich mögen letztere, weil sie kostenlos ist.

> [!NOTE]
> Sie brauchen viel freien Festplattenspeicher, um virtuelle Maschinenemulationen zu betreiben; jedes Betriebssystem, das Sie emulieren, kann viel Speicherplatz beanspruchen. Sie haben die Wahl, wie viel Festplattenspeicher Sie für jede Installation verwenden möchten; wahrscheinlich könnten Sie mit 10 GB auskommen, aber einige Quellen empfehlen bis zu 50 GB oder mehr, damit das Betriebssystem zuverlässig läuft. Eine gute Option, die von den meisten Apps für virtuelle Maschinen angeboten wird, ist das Erstellen einer **dynamisch zugewiesenen** Festplatte, die je nach Bedarf wächst und schrumpft.

Um Virtual Box zu verwenden, müssen Sie:

1. Einen Installationsdatenträger oder ein Image besorgen (z.B. ISO-Datei) für das Betriebssystem, das Sie emulieren möchten. Virtual Box kann diese nicht bereitstellen; die meisten, wie Windows OSs, sind kommerzielle Produkte, die nicht frei verteilt werden können.
2. [Laden Sie den entsprechenden Installer herunter](https://www.virtualbox.org/wiki/Downloads) für Ihr Betriebssystem und installieren Sie ihn.
3. Öffnen Sie die App; Sie werden eine Ansicht wie die folgende sehen: ![Anwendungsfenster links mit Windows-Betriebssystem und Opera TV Emulatoren aufgelistet. Rechts enthält mehrere Unterfenster einschließlich Allgemein, System, Anzeige, Einstellungen, Audio, Netzwerk und eine Vorschau.](virtualbox.png)
4. Um eine neue virtuelle Maschine zu erstellen, drücken Sie die Schaltfläche _Neu_ in der oberen linken Ecke.
5. Folgen Sie den Anweisungen und füllen Sie die folgenden Dialogboxen wie vorgeschrieben aus. Sie werden:

   1. Einen Namen für die neue virtuelle Maschine angeben.
   2. Wählen, welches Betriebssystem und welche Version Sie installieren.
   3. Festlegen, wie viel RAM zugewiesen werden soll (wir empfehlen etwa 2048 MB oder 2 GB).
   4. Eine virtuelle Festplatte erstellen (wählen Sie die Standardoptionen über die drei Dialogboxen hinweg einschließlich _Create a virtual hard disk now_, _VDI (virtuelles Festplatten-Image)_ und _Dynamisch zugewiesen_).
   5. Wählen Sie den Speicherort und die Größe für die virtuelle Festplatte (wählen Sie einen sinnvollen Namen und Speicherort, und für die Größe ungefähr 50 GB oder so viel, wie Sie bequem angeben können).

Jetzt sollte die neue virtuelle Box im linken Menü des Haupt-UI-Fensters von Virtual Box erscheinen. An diesem Punkt können Sie darauf doppelklicken — sie wird beginnen, die virtuelle Maschine hochzufahren, aber sie wird noch kein Betriebssystem (OS) installiert haben. An diesem Punkt müssen Sie das Dialogfeld auf das Installations-Image/-Disk verweisen, und es wird die Schritte zur Installation des Betriebssystems wie auf einem physischen Computer durchlaufen.

![Wie man die virtuelle Box für ein bestimmtes Betriebssystem installiert](virtualbox-installer.png)

> [!WARNING]
> Sie müssen sicherstellen, dass Sie das Betriebssystem-Image, das Sie auf der virtuellen Maschine installieren möchten, an diesem Punkt zur Verfügung haben und es sofort installieren. Wenn Sie den Prozess an diesem Punkt abbrechen, kann das die virtuelle Maschine unbrauchbar machen und Sie müssen sie löschen und erneut erstellen. Dies ist nicht fatal, aber es ist ärgerlich.

Nach Abschluss des Prozesses sollten Sie eine virtuelle Maschine mit einem Betriebssystem in einem Fenster auf Ihrem Host-Computer haben.

![Screenshot von Windows XP, gehostet in Virtual Box und auf macOS ausgeführt](virtualbox-running.png)

Sie müssen diese virtuelle Betriebssysteminstallation genauso behandeln, wie Sie es mit einer realen Installation tun würden — zum Beispiel, neben der Installation der Browser, die Sie testen möchten, installieren Sie ein Antivirenprogramm, um es vor Viren zu schützen.

Mehrere virtuelle Maschinen zu haben, ist sehr nützlich, insbesondere für Windows IE/Edge-Tests — auf Windows können Sie nicht mehrere Versionen des Standardbrowsers nebeneinander installiert haben, also möchten Sie vielleicht eine Bibliothek von virtuellen Maschinen aufbauen, um verschiedene Tests nach Bedarf abzudecken, z.B.:

- Windows 10 mit Edge 14
- Windows 10 mit Edge 13

> [!NOTE]
> Ein weiterer Vorteil von virtuellen Maschinen ist, dass die virtuellen Festplatten-Images ziemlich eigenständig sind. Wenn Sie in einem Team arbeiten, können Sie ein virtuelles Festplatten-Image erstellen, es dann kopieren und weitergeben. Stellen Sie nur sicher, dass Sie die erforderlichen Lizenzen haben, um alle diese Kopien von Windows oder was auch immer Sie laufen zu lassen, wenn es sich um ein lizenziertes Produkt handelt.

### Automatisierung und kommerzielle Apps

Wie im letzten Kapitel erwähnt, können Sie viel Mühe beim Browser-Testen sparen, indem Sie eine Art Automatisierungssystem verwenden. Sie können Ihr eigenes Testautomatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte App der Wahl), was einige Einrichtung erfordert, aber sehr lohnend sein kann, wenn Sie es herausgefunden haben.

Es gibt auch kommerzielle Werkzeuge wie [Sauce Labs](https://saucelabs.com/), [Browser Stack](https://www.browserstack.com/) und [LambdaTest](https://www.lambdatest.com/), die diese Art von Tests für Sie durchführen, ohne dass Sie sich um die Einrichtung kümmern müssen, wenn Sie etwas Geld in Ihre Tests investieren möchten.

Eine weitere Alternative ist die Verwendung von No-Code-Testautomatisierungswerkzeugen wie [Endtest](https://www.endtest.io/).

Wir werden später im Modul darauf eingehen, wie man solche Werkzeuge verwendet.

## Benutzertests

Bevor wir fortfahren, beenden wir diesen Artikel mit einem Gespräch über Benutzertests — dies kann eine gute Option sein, wenn Sie eine willige Benutzergruppe haben, mit der Sie neue Funktionalitäten testen können. Bedenken Sie, dass dies so einfach oder so ausgefeilt sein kann, wie Sie möchten — Ihre Benutzergruppe könnte eine Gruppe von Freunden, eine Gruppe von Kollegen oder eine Gruppe von unbezahlten oder bezahlten Freiwilligen sein, abhängig davon, ob Sie Geld zum Testen zur Verfügung haben.

In der Regel lassen Sie Ihre Benutzer die Seite oder den Blick auf den Entwicklungsserver mit der neuen Funktionalität betrachten, sodass Sie die endgültige Seite oder Änderung nicht live schalten, bis sie fertig ist. Sie sollten sie dazu bringen, einige Schritte zu befolgen und die Ergebnisse zu melden, die sie erhalten. Es ist nützlich, einen Satz von Schritten bereitzustellen (manchmal als Skript bezeichnet), damit Sie zuverlässigere Ergebnisse in Bezug auf das, was Sie testen wollten, erhalten. Wir haben dies im Abschnitt [Was werden Sie testen](#was_are_you_going_to_test) oben erwähnt — es ist einfach, die dort detaillierten Testkriterien in Schritte zu verwandeln, denen man folgen muss. Zum Beispiel würde das Folgende für einen sehenden Benutzer funktionieren:

- Klicken Sie mehrmals mit der Maus auf Ihrem Desktop-Computer auf die Fragezeichen-Schaltfläche. Aktualisieren Sie das Browserfenster.
- Wählen und aktivieren Sie die Fragezeichen-Schaltfläche mehrmals mit der Tastatur auf Ihrem Desktop-Computer.
- Tippen Sie mehrmals auf die Fragezeichen-Schaltfläche auf Ihrem Touchscreen-Gerät.
- Durch Umschalten der Schaltfläche sollte das Informationsfeld angezeigt/versteckt werden. Tut es das in jedem der drei oben genannten Fälle?
- Ist der Text lesbar?
- Wird das Informationsfeld reibungslos animiert, wenn es angezeigt/versteckt wird?

Wenn Sie Tests durchführen, kann es auch eine gute Idee sein:

- Ein separates Browserprofil einzurichten, wo dies möglich ist, mit deaktivierten Browsererweiterungen und Ähnlichem, und Ihre Tests in diesem Profil auszuführen (siehe [Verwenden des Profilmanagers zum Erstellen und Entfernen von Firefox-Profilen](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) und [Chrome mit anderen oder hinzufügen von Personen teilen](https://support.google.com/chrome/answer/2364824), zum Beispiel).
- Die private Modus-Funktionalität des Browsers zu verwenden, wenn Sie Tests durchführen, wo verfügbar (z.B. [Privates Surfen](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) in Firefox, [Inkognito-Modus](https://support.google.com/chrome/answer/95464) in Chrome), damit Dinge wie Cookies und temporäre Dateien nicht gespeichert werden.

Diese Schritte sind darauf ausgelegt, sicherzustellen, dass der Browser, in dem Sie testen, so "rein" wie möglich ist, d.h. es ist nichts installiert, was die Testergebnisse beeinflussen könnte.

> [!NOTE]
> Eine weitere nützliche einfache Option, wenn Sie die Hardware zur Verfügung haben, ist das Testen Ihrer Websites auf leistungsschwachen Telefonen/anderen Geräten — da Websites größer werden und mehr Effekte enthalten, besteht eine höhere Wahrscheinlichkeit, dass die Seite langsamer wird, sodass Sie beginnen müssen, der Leistung mehr Aufmerksamkeit zu schenken. Der Versuch, Ihre Funktionalität auf einem leistungsschwachen Gerät zum Laufen zu bringen, erhöht die Wahrscheinlichkeit, dass die Erfahrung auf leistungsfähigeren Geräten gut ist.

> [!NOTE]
> Einige serverseitige Entwicklungsumgebungen bieten nützliche Mechanismen, um Website-Änderungen nur für einen Teil der Benutzer bereitzustellen, was einen nützlichen Mechanismus bietet, um ein Feature von einem Teil der Benutzer ohne den Bedarf eines separaten Entwicklungsservers testen zu lassen. Ein Beispiel ist [Django Waffle Flags](https://github.com/jazzband/django-waffle).

## Zusammenfassung

Nach der Lektüre dieses Artikels sollten Sie nun eine gute Vorstellung davon haben, was Sie tun können, um Ihre Zielgruppe/Ihren Zielbrowser zu identifizieren und dann effektiv Cross-Browser-Tests in dieser Liste durchzuführen.

Als nächstes wenden wir uns den tatsächlichen Codeproblemen zu, die Ihre Tests aufdecken könnten, beginnend mit HTML und CSS.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}
