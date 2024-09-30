---
title: Strategien für das Testen
slug: Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Introduction","Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS", "Learn/Tools_and_testing/Cross_browser_testing")}}

Dieser Artikel erklärt, wie man Cross-Browser-Tests durchführt: wie man auswählt, welche Browser und Geräte getestet werden sollen, wie man diese Browser und Geräte tatsächlich testet und wie man mit Benutzergruppen testet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>; eine Vorstellung von den
        grundlegenden
        <a
          href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >Prinzipien des Cross-Browser-Testing</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis der Konzepte im High-Level-Bereich des Cross-Browser-Testings
        zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Auswahl der zu testenden Browser und Geräte

Da Sie nicht jede Kombination von Browser und Gerät testen können, reicht es aus, sicherzustellen, dass Ihre Website auf den wichtigsten funktioniert. In der Praxis bedeutet "wichtig" oft "häufig von der Zielgruppe genutzt".

Sie können Browser und Geräte nach dem Umfang der Unterstützung klassifizieren, die Sie bereitstellen möchten. Zum Beispiel:

1. A-Grad: Häufige/moderne Browser — Bekannt als fähig. Gründlich testen und volle Unterstützung bieten.
2. B-Grad: Ältere/weniger fähige Browser — Bekannt als nicht fähig. Testen und eine einfachere Erfahrung bieten, die vollen Zugang zu den Kerninformationen und Dienstleistungen gibt.
3. C-Grad: Seltene/unbekannte Browser — nicht testen, aber annehmen, dass sie fähig sind. Die volle Website anbieten, die mindestens mit den von unserem defensiven Codieren bereitgestellten Fallbacks funktionieren sollte.

In den folgenden Abschnitten erstellen wir ein Unterstützungsdiagramm in diesem Format.

> [!NOTE]
> Yahoo hat diesen Ansatz zuerst mit ihrem [Graded browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support) populär gemacht.

### Vorhersage der am häufigsten genutzten Browser Ihrer Zielgruppe

Dies beinhaltet typischerweise fundierte Vermutungen basierend auf demografischen Merkmalen der Benutzer. Zum Beispiel, wenn Ihre Benutzer in Nordamerika und Westeuropa sind:

Eine schnelle Online-Suche sagt Ihnen, dass die meisten Menschen in Nordamerika und Westeuropa Windows- oder Mac-Desktops/Laptops verwenden, wobei die Hauptbrowser Chrome, Firefox, Safari und Edge sind. Sie würden wahrscheinlich nur die neuesten Versionen dieser Browser testen wollen, da diese Browser regelmäßig Updates erhalten. Diese sollten alle in den A-Grad eingeordnet werden.

Die meisten Menschen in dieser demografischen Gruppe verwenden auch iOS- oder Android-Telefone, so dass Sie wahrscheinlich die neuesten Versionen von iOS Safari, die letzten paar Versionen des alten Android-Standardsbrowser sowie Chrome und Firefox für iOS und Android testen möchten. Idealerweise sollten Sie diese sowohl auf einem Telefon als auch einem Tablet testen, um sicherzustellen, dass responsive Designs funktionieren.

Opera Mini ist nicht sehr fähig, komplexes JavaScript auszuführen, daher sollten wir dies ebenfalls in den B-Grad einordnen.

Somit haben wir unsere Auswahl, welche Browser getestet werden sollen, auf den Browsern basiert, die wir erwarten, dass unsere Benutzer verwenden. Dies gibt uns bisher das folgende Unterstützungsdiagramm:

1. A-Grad: Chrome und Firefox für Windows/Mac, Safari für Mac, Edge für Windows, iOS Safari für iPhone/iPad, Android-Standardbrowser (die letzten zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (die letzten zwei Versionen) auf Telefon/Tablet
2. B-Grad: Opera Mini
3. C-Grad: n/a

Wenn Ihre Zielgruppe hauptsächlich anderswo angesiedelt ist, können die am häufigsten genutzten Browser und Betriebssysteme von den obigen abweichen.

> [!NOTE]
> "Der CEO meiner Firma benutzt ein Blackberry, also sollten wir sicherstellen, dass es darauf gut aussieht" kann auch etwas sein, das in Betracht gezogen werden sollte.

### Browser-Statistiken

Einige Websites zeigen, welche Browser in einer bestimmten Region beliebt sind. Zum Beispiel gibt [Statcounter](https://gs.statcounter.com/) einen Einblick in Trends in Nordamerika.

### Nutzung von Analysen

Eine viel genauere Datenquelle, wenn Sie sie bekommen können, ist eine Analyse-App wie [Google Analytics](https://marketingplatform.google.com/about/analytics/), die Ihnen genau sagt, welche Browser die Leute verwenden, um Ihre Website zu durchsuchen. Natürlich setzt dies voraus, dass Sie bereits eine Website haben, die Sie dafür verwenden können, daher ist es nicht gut für völlig neue Websites.

Sie könnten auch in Betracht ziehen, Open-Source- und datenschutzfreundliche Analyseplattformen wie [Open Web Analytics](https://www.openwebanalytics.com/) und [Matomo](https://matomo.org/) zu verwenden. Sie erwarten, dass Sie die Analyseplattform selbst hosten.

#### Google Analytics einrichten

1. Zuerst benötigen Sie ein Google-Konto. Verwenden Sie dieses Konto, um sich bei [Google Analytics](https://marketingplatform.google.com/about/analytics/) anzumelden.
2. Wählen Sie die Option [Google Analytics](https://analytics.google.com/analytics/web/) (Web) und klicken Sie auf die _Anmelden_-Schaltfläche.
3. Geben Sie Ihre Website/Anwendungsdetails auf der Anmeldeseite ein. Dies ist ziemlich intuitiv einzurichten; das wichtigste Feld, das korrekt sein muss, ist die Website-URL. Dies muss die Root-URL Ihrer Website/Anwendung sein.
4. Sobald Sie alles ausgefüllt haben, drücken Sie den _Tracking-ID erhalten_-Button und akzeptieren Sie die erscheinenden Nutzungsbedingungen.
5. Die nächste Seite stellt Ihnen einige Code-Snippets und andere Anweisungen zur Verfügung. Für eine einfache Website müssen Sie den _Website-Tracking_-Codeblock kopieren und in alle verschiedenen Seiten einfügen, die Sie mit Google Analytics auf Ihrer Website verfolgen möchten. Sie könnten die Snippets unter Ihrem abschließenden `</body>`-Tag oder an einer anderen geeigneten Stelle platzieren, die Verwirrung mit Ihrem Anwendungscode vermeidet.
6. Laden Sie die Änderungen auf den Entwicklungsserver hoch oder wohin auch immer Sie Ihren Code benötigen.

Das war's! Ihre Website sollte nun bereit sein, Analysedaten zu melden.

#### Analysedaten studieren

Nun sollten Sie zur [Analytics Web](https://analytics.google.com/analytics/web/)-Homepage zurückkehren und beginnen können, sich die gesammelten Daten über Ihre Website anzusehen (Sie müssen natürlich etwas Zeit lassen, damit einige Daten tatsächlich gesammelt werden).

Standardmäßig sollten Sie den Reporting-Tab sehen, wie folgt:

![Wie Google Analytics Daten in seinem Hauptberichtsdashboard sammelt](analytics-reporting.png)

In Google Analytics gibt es eine riesige Menge an Daten, die Sie sich ansehen können — angepasste Berichte in verschiedenen Kategorien usw. — und wir haben nicht die Zeit, alles zu diskutieren. [Erste Schritte mit Analytics](https://support.google.com/analytics/answer/9304153) bietet eine nützliche Anleitung zum Reporting (und mehr) für Anfänger.

Sie können sehen, welche Browser und Betriebssysteme Ihre Benutzer verwenden, indem Sie im linken Menü _Zielgruppe > Technologie > Browser & OS_ auswählen.

> [!NOTE]
> Bei der Verwendung von Google Analytics müssen Sie sich vor irreführenden Verzerrungen in Acht nehmen, z.B. "Wir haben keine Firefox Mobile Benutzer" könnte Sie dazu führen, die Unterstützung von Firefox Mobile nicht zu berücksichtigen. Aber Sie werden keine Firefox Mobile Benutzer haben, wenn die Website von Anfang an in Firefox Mobile nicht funktioniert hat.

### Weitere Überlegungen

Sie sollten Barrierefreiheit als A-Grad-Testanforderung einschließen (wir werden in unserem Artikel [Umgang mit allgemeinen Barrierefreiheitsproblemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility) genau behandeln, was Sie testen sollten).

Auch sollten Sie sich der situationsspezifischen Anforderungen bewusst sein. Wenn Ihr Produkt beispielsweise einen Markt anspricht, in dem Mobiltelefone das primäre Mittel zum Zugang zum Internet sind, werden Sie wahrscheinlich die Unterstützung von mobilen Browsern priorisieren wollen.

### Endgültiges Unterstützungsdiagramm

So wird unser endgültiges Unterstützungsdiagramm aussehen:

1. A-Grad: Chrome und Firefox für Windows/Mac, Safari für Mac und Edge (die letzten zwei Versionen von jedem), iOS Safari für iPhone/iPad, Android-Standardbrowser (die letzten zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (die letzten zwei Versionen) auf Telefon/Tablet. Barrierefreiheit, die gängigen Tests besteht.
2. B-Grad: Opera Mini.
3. C-Grad: Opera, andere spezialisierte moderne Browser.

## Was werden Sie testen?

Wenn Sie eine neue Ergänzung zu Ihrem Code haben, die getestet werden muss, sollten Sie, bevor Sie mit dem Testen beginnen, eine Liste von Testanforderungen aufschreiben, die bestehen müssen, um akzeptiert zu werden. Diese Anforderungen können visuell oder funktional sein — beide zusammen ergeben eine nutzbare Website-Funktion.

Betrachten Sie das folgende Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html) und auch das [Beispiel im Live-Betrieb](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)):

![Wie man ein Testszenario vorbereiten kann, das Design und Benutzeranforderungen umfasst](sliding-box-demo.png)

Testkriterien für diese Funktion könnten wie folgt geschrieben werden:

A- und B-Grad:

- Die Schaltfläche sollte durch den primären Steuerungsmechanismus des Benutzers aktiviert werden können, unabhängig davon, welcher das ist — dies sollte Maus, Tastatur und Touchscreen einschließen.
- Das Umschalten der Schaltfläche sollte das Informationsfeld erscheinen/verschwinden lassen.
- Der Text sollte lesbar sein.
- Seheingeschränkte Benutzer, die Bildschirmleser verwenden, sollten auf den Text zugreifen können.

A-Grad:

- Das Informationsfeld sollte beim Erscheinen/Verschwinden sanft animieren.
- Der Verlauf und der Textschatten sollten erscheinen, um das Aussehen des Feldes zu verbessern.

Sie könnten bemerken, dass die Schaltfläche nur mit der Tastatur nicht nutzbar ist. Wir könnten dies durch JavaScript beheben, um eine Tastatursteuerung für das Umschalten zu implementieren, oder einen anderen Ansatz verwenden.

Diese Testkriterien sind nützlich, weil:

- Sie Ihnen eine Reihe von Schritten geben, denen Sie beim Durchführen von Tests folgen können.
- Sie leicht in Instruktionssätze für Benutzergruppen umgewandelt werden können, die sie bei Tests befolgen (z.B. "Versuchen Sie, die Schaltfläche mit Ihrer Maus zu aktivieren und dann mit der Tastatur...") — siehe [Benutzertest](#benutzertest) unten.
- Sie auch eine Grundlage für das Schreiben automatisierter Tests bieten können. Es ist einfacher, solche Tests zu schreiben, wenn Sie genau wissen, was Sie testen möchten und welche die Erfolgskriterien sind (siehe [Selenium](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment#selenium) später in der Serie).

## Erstellung eines Testlabors

Eine Möglichkeit, Browser-Tests durchzuführen, besteht darin, die Tests selbst zu machen. Dazu werden Sie wahrscheinlich eine Kombination aus tatsächlichen physischen Geräten und emulierten Umgebungen verwenden (entweder mit einem Emulator oder einer virtuellen Maschine).

### Physische Geräte

Im Allgemeinen ist es besser, ein echtes Gerät zu haben, auf dem der zu testende Browser läuft — dies bietet die größte Genauigkeit in Bezug auf Verhalten und Benutzererfahrung. Sie werden wahrscheinlich so etwas wie das Folgende für ein angemessenes Low-Level-Gerätelabor wünschen:

- Einen Mac, mit den installierten Browsern, die Sie testen müssen — dies kann Firefox, Chrome, Opera und Safari umfassen.
- Einen Windows-PC, mit den installierten Browsern, die Sie testen müssen — dies kann Edge (oder IE), Chrome, Firefox und Opera umfassen.
- Ein höherwertiges Android-Telefon und -Tablet mit den installierten Browsern, die Sie testen müssen — dies kann Chrome, Firefox und Opera Mini für Android sowie den ursprünglichen Android-Standardbrowser umfassen.
- Ein höherwertiges iOS-Telefon und -Tablet mit den installierten Browsern, die Sie testen müssen — dies kann iOS Safari sowie Chrome, Firefox und Opera Mini für iOS umfassen.

Folgende sind auch gute Optionen, wenn Sie sie bekommen können:

- Ein Linux-PC, falls Sie spezifische Bugs in Linux-Versionen von Browsern testen müssen. Linux-Benutzer verwenden häufig Firefox, Opera und Chrome. Wenn Sie nur über eine Maschine verfügen, könnten Sie eine Dual-Boot-Maschine in Betracht ziehen, die Linux und Windows auf separaten Partitionen ausführt. Der Ubuntu-Installer erleichtert dies; siehe [WindowsDualBoot](https://help.ubuntu.com/community/WindowsDualBoot) für Hilfe bei diesem Vorhaben.
- Ein paar Geräte mit niedrigerer Leistung, damit Sie die Leistung von Funktionen wie Animationen auf weniger leistungsstarken Prozessoren testen können.

Ihre Hauptarbeitsmaschine kann auch ein Ort sein, um andere Werkzeuge für spezifische Zwecke zu installieren, wie Barrierefreiheitstools, Bildschirmleser und Emulatoren/virtuelle Maschinen.

Einige größere Unternehmen haben Gerätekabinen, die eine sehr große Auswahl verschiedener Geräte vorhalten, sodass Entwickler Bugs auf sehr spezifischen Browser/Gerätekombinationen aufspüren können. Kleinere Unternehmen und Einzelpersonen sind in der Regel nicht in der Lage, ein solch ausgeklügeltes Labor zu finanzieren, sodass sie mit kleineren Laboren, Emulatoren, virtuellen Maschinen und kommerziellen Test-Apps auskommen müssen.

Wir werden jede der anderen Optionen unten abdecken.

> [!NOTE]
> Einige Bemühungen wurden unternommen, öffentlich zugängliche Gerätekabinen zu schaffen — siehe [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/).

> [!NOTE]
> Wir müssen auch die Barrierefreiheit berücksichtigen — es gibt eine Reihe nützlicher Tools, die Sie auf Ihrem Rechner installieren können, um Barrierefreiheitstests zu erleichtern, aber wir werden das in dem Artikel Umgang mit allgemeinen Barrierefreiheitsproblemen im Verlauf des Kurses behandeln.

### Emulatoren

Emulatoren sind im Grunde Programme, die auf Ihrem Computer laufen und ein Gerät oder bestimmte Gerätekonfigurationen irgendeiner Art emulieren, was es Ihnen ermöglicht, einige Ihrer Tests bequemer durchzuführen, als die passende Kombination von Hardware/Software zu finden.

Ein Emulator könnte so einfach sein wie das Testen einer Gerätekonfiguration. Beispielsweise, wenn Sie einige schnelle und einfache Tests Ihrer Breiten-/Höhen-Media-Queries für responsives Design durchführen möchten, können Sie den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) von Firefox verwenden. Safari hat auch einen ähnlichen Modus, der aktiviert werden kann, indem Sie zu _Safari > Einstellungen_ gehen, und _Entwicklermenü anzeigen_ aktivieren, dann _Entwickeln > Responsive Design Mode_ auswählen. Chrome hat auch etwas Ähnliches: Gerätemodus (siehe [Simulate Mobile Devices with Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)).

Oft müssen Sie jedoch irgendeine Art von Emulator installieren. Die häufigsten Geräte/Browser, die Sie testen möchten, sind wie folgt:

- Das offizielle [Android Studio IDE](https://developer.android.com/studio/) für die Entwicklung von Android-Apps ist ein bisschen schwergewichtig, um einfach nur Webseiten auf Google Chrome oder dem alten Stock Android-Browser zu testen, aber es kommt mit einem robusten [Emulator](https://developer.android.com/studio/run/emulator.html). Wenn Sie etwas leichteres wollen, ist [Andy](https://www.andyroid.net/) eine vernünftige Option, die auf Windows und Mac läuft.
- Apple bietet eine App namens [Simulator](https://help.apple.com/simulator/mac/current/) an, die auf dem [XCode](https://developer.apple.com/xcode/) Entwicklungsumgebung läuft und iPad/iPhone/Apple Watch/Apple TV emuliert. Dies schließt den nativen iOS Safari-Browser ein. Bedauerlicherweise läuft das nur auf einem Mac.

Sie können Simulatoren für andere mobile Gerätekonfigurationen auch oft finden, zum Beispiel:

- Sie können Opera Mini für sich selbst emulieren, wenn Sie ihn testen wollen.

> [!NOTE]
> Viele Emulatoren benötigen tatsächlich die Verwendung einer virtuellen Maschine (siehe unten); wenn dies der Fall ist, werden häufig Anweisungen bereitgestellt, und/oder die Verwendung der virtuellen Maschine ist in den Installer des Emulators integriert.

### Virtuelle Maschinen

Virtuelle Maschinen sind Anwendungen, die auf Ihrem Desktop-Computer laufen und es Ihnen ermöglichen, vollständige Betriebssystememulationen auszuführen, jede in ihrer eigenen virtuellen Festplatte (oft als eine große Datei auf der Festplatte des Host-Computers dargestellt) gekapselt. Es gibt eine Reihe beliebter virtueller Maschinen-Apps, wie [Parallels](https://www.parallels.com/), [VMWare](https://www.vmware.com/) und [Virtual Box](https://www.virtualbox.org/wiki/Downloads); wir persönlich mögen Letzteres, da es kostenlos ist.

> [!NOTE]
> Sie benötigen viel freien Festplattenspeicher, um virtuelle Maschinen-Emulationen auszuführen; jedes Betriebssystem, das Sie emulieren, kann viel Speicher verbrauchen. Sie wählen normalerweise den Speicherplatz, den Sie für jede Installation wünschen; Sie könnten mit wahrscheinlich 10GB auskommen, aber einige Quellen empfehlen bis zu 50GB oder mehr, damit das Betriebssystem zuverlässig läuft. Eine gute Option, die von den meisten virtuellen Maschinen-Apps angeboten wird, ist die Erstellung einer **dynamisch zugewiesenen** Festplatte, die nach Bedarf wächst und schrumpft.

Um ein Virtual Box zu verwenden, müssen Sie:

1. Holen Sie sich eine Installations-CD oder ein Image (z.B. ISO-Datei) für das Betriebssystem, das Sie emulieren möchten. Virtual Box kann diese nicht bereitstellen; die meisten, wie Windows-OSes, sind kommerzielle Produkte, die nicht frei verteilt werden können.
2. [Laden Sie den geeigneten Installer](https://www.virtualbox.org/wiki/Downloads) für Ihr Betriebssystem herunter und installieren Sie ihn.
3. Öffnen Sie die App; Ihnen wird ein Fenster wie das folgende angezeigt: ![Anwendungsfenster linkes Panel listet Windows-Betriebssystem und Opera TV Emulatoren. Rechtes Panel enthält mehrere Unterfenster einschließlich allgemein, System, Anzeige, Einstellungen, Ton, Netzwerk und einer Vorschau.](virtualbox.png)
4. Um eine neue virtuelle Maschine zu erstellen, drücken Sie die _Neu_-Schaltfläche in der oberen linken Ecke.
5. Folgen Sie den Anweisungen und füllen Sie die folgenden Dialogfelder entsprechend aus. Sie werden:

   1. Einen Namen für die neue virtuelle Maschine angeben
   2. Wählen, welches Betriebssystem und welche Version Sie darauf installieren
   3. Festlegen, wie viel RAM zugewiesen werden soll (wir würden etwas wie 2048MB, oder 2GB empfehlen)
   4. Eine virtuelle Festplatte erstellen (wählen Sie die Standardoptionen über die drei Dialogfelder mit _Jetzt eine virtuelle Festplatte erstellen_, _VDI (Virtuelles Festplattenabbild)_ und _Dynamisch zugewiesen_).
   5. Den Speicherort und die Größe der virtuellen Festplatte wählen (wählen Sie einen sinnvollen Namen und Ort, an dem sie gespeichert wird, und für die Größe spezifizieren Sie etwa 50GB oder so viel, wie Sie bereit sind anzugeben).

Nun sollte die neue virtuelle Box im linken Menü des Hauptfensters der Virtual Box UI erscheinen. An diesem Punkt können Sie doppelklicken, um sie zu öffnen — sie wird anfangen, die virtuelle Maschine hochzufahren, aber sie hat noch nicht das Betriebssystem (OS) installiert. An diesem Punkt müssen Sie das Dialogfeld auf das Installationsabbild/-disk zeigen, und es wird durch die Schritte zur Installation des OS ähnlich wie auf einer physischen Maschine gehen.

![Wie man die virtuelle Box für ein bestimmtes Betriebssystem installiert](virtualbox-installer.png)

> [!WARNING]
> Sie müssen sicherstellen, dass Sie das Betriebssystemabbild, das Sie auf der virtuellen Maschine installieren möchten, an diesem Punkt verfügbar haben, und es direkt installieren. Wenn Sie den Prozess zu diesem Zeitpunkt abbrechen, kann dies die virtuelle Maschine unbrauchbar machen und Sie zwingen, sie zu löschen und neu zu erstellen. Dies ist nicht tödlich, aber es ist lästig.

Nachdem der Prozess abgeschlossen ist, sollten Sie eine virtuelle Maschine haben, die ein Betriebssystem innerhalb eines Fensters auf Ihrem Host-Computer ausführt.

![Screenshot von Windows XP, gehostet in Virtual Box und auf macOS laufend](virtualbox-running.png)

Sie müssen diese virtuelle Betriebssysteminstallation genauso behandeln, wie Sie jede echte Installation behandeln würden — zum Beispiel, neben der Installation der Browser, die Sie testen möchten, sollten Sie auch ein Antivirus-Programm installieren, um es vor Viren zu schützen.

Mehrere virtuelle Maschinen zu haben, ist sehr nützlich, insbesondere für Windows IE/Edge-Tests — unter Windows können Sie nicht mehrere Versionen des Standardbrowsers nebeneinander installieren, daher möchten Sie vielleicht eine Bibliothek von virtuellen Maschinen aufbauen, um verschiedene Tests bei Bedarf durchzuführen, z.B.:

- Windows 10 mit Edge 14
- Windows 10 mit Edge 13

> [!NOTE]
> Ein weiterer Vorteil von virtuellen Maschinen ist, dass die virtuellen Festplattenabbilder ziemlich in sich geschlossen sind. Wenn Sie in einem Team arbeiten, können Sie ein virtuelles Festplattenabbild erstellen, es dann kopieren und weitergeben. Stellen Sie nur sicher, dass Sie die erforderlichen Lizenzen haben, um alle diese Kopien von Windows oder was auch immer Sie laufen lassen, wenn es sich um ein lizenziertes Produkt handelt.

### Automatisierung und kommerzielle Apps

Wie im letzten Kapitel erwähnt, können Sie sich viel Mühe bei den Browser-Tests sparen, indem Sie ein Automatisierungssystem verwenden. Sie können Ihr eigenes Testautomatisierungssystem einrichten (wobei [Selenium](https://www.selenium.dev/) die beliebte App der Wahl ist), was einige Einrichtung erfordert, aber sehr lohnend sein kann, wenn Sie es einmal eingerichtet haben.

Es gibt auch kommerzielle Tools wie [Sauce Labs](https://saucelabs.com/), [Browser Stack](https://www.browserstack.com/) und [LambdaTest](https://www.lambdatest.com/), die diese Art von Dingen für Sie tun, ohne dass Sie sich um die Einrichtung kümmern müssen, wenn Sie bereit sind, etwas Geld in Ihr Testing zu investieren.

Eine andere Alternative ist die Verwendung von No-Code-Test-Automatisierungswerkzeugen wie [Endtest](https://www.endtest.io/).

Wir werden uns später im Modul damit befassen, wie man solche Tools verwendet.

## Benutzertest

Bevor wir fortfahren, beenden wir diesen Artikel mit einem kleinen Gespräch über Benutzertests — dies kann eine gute Option sein, wenn Sie eine willige Benutzergruppe haben, um Ihre neue Funktionalität zu testen. Bedenken Sie, dass dies so niedrig oder so ausgefeilt sein kann, wie Sie wollen — Ihre Benutzergruppe könnte eine Gruppe von Freunden, eine Gruppe von Kollegen oder eine Gruppe von unbezahlten oder bezahlten Freiwilligen sein, je nachdem, ob Sie Geld zum Ausgeben für Tests haben.

In der Regel werden Sie Ihre Benutzer dazu bringen, die Seite oder Ansicht mit der neuen Funktionalität auf einer Art Entwicklungsserver zu betrachten, damit Sie die endgültige Website oder Änderung nicht live schalten, bis sie fertig ist. Sie sollten sie dazu bringen, einige Schritte zu befolgen und die Ergebnisse zu berichten, die sie erhalten. Es ist nützlich, einen Satz von Schritten bereitzustellen (manchmal als Skript bezeichnet), damit Sie zuverlässigere Ergebnisse zu dem erhalten, was Sie testen wollten. Wir haben dies im Abschnitt [Was werden Sie testen](#what_are_you_going_to_test) oben erwähnt — es ist einfach, die dort beschriebenen Testkriterien in Schritte umzuwandeln, die befolgt werden sollen. Zum Beispiel würde das Folgende für einen sehenden Benutzer funktionieren:

- Klicken Sie mehrmals mit der Maus Ihres Desktop-Computers auf den Fragezeichen-Button. Aktualisieren Sie das Browserfenster.
- Wählen und aktivieren Sie den Fragezeichen-Button mehrmals mit der Tastatur Ihres Desktop-Computers.
- Tippen Sie mehrmals auf den Fragezeichen-Button auf Ihrem Touchscreen-Gerät.
- Das Umschalten der Schaltfläche sollte das Informationsfeld erscheinen/verschwinden lassen. Tut es dies in jedem der obigen drei Fälle?
- Ist der Text lesbar?
- Animiert das Informationsfeld sanft, wenn es erscheint/verschwindet?

Bei Tests kann es auch eine gute Idee sein:

- Richten Sie ein separates Browserprofil ein, sofern möglich, mit deaktivierten Browsererweiterungen und anderen derartigen Dingen, und führen Sie Ihre Tests in diesem Profil durch (siehe [Verwenden des Profil-Managers zum Erstellen und Entfernen von Firefox-Profilen](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) und [Chrome mit anderen teilen oder Personen hinzufügen](https://support.google.com/chrome/answer/2364824), zum Beispiel).
- Verwenden Sie die private Modus-Funktionalität des Browsers, wenn möglich (z.B. [Privates Surfen](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) in Firefox, [Inkognito-Modus](https://support.google.com/chrome/answer/95464) in Chrome), sodass Dinge wie Cookies und temporäre Dateien nicht gespeichert werden.

Diese Schritte sollen sicherstellen, dass der Browser, in dem Sie testen, so "rein" wie möglich ist, d.h. es ist nichts installiert, was die Testergebnisse beeinflussen könnte.

> [!NOTE]
> Eine weitere nützliche niedrigtechnische Option, wenn Sie die Hardware zur Verfügung haben, ist, Ihre Websites auf preisgünstigen Telefonen/anderen Geräten zu testen — da Websites größer werden und mehr Effekte enthalten, steigt die Wahrscheinlichkeit, dass die Website langsamer wird. Daher müssen Sie anfangen, der Leistung mehr Aufmerksamkeit zu schenken. Wenn Sie versuchen, Ihre Funktionalität auf einem Gerät mit niedrigerer Leistung zum Laufen zu bringen, wird es wahrscheinlicher, dass die Erfahrung auf Geräten mit höherer Leistung gut ist.

> [!NOTE]
> Einige serverseitige Entwicklungsumgebungen bieten nützliche Mechanismen zum Ausrollen von Website-Änderungen auf nur für eine Untergruppe von Benutzern, was einen nützlichen Mechanismus bietet, um eine Funktion von einer Teilmenge von Benutzern testen zu lassen, ohne dass ein separater Entwicklungsserver erforderlich ist. Ein Beispiel ist [Django Waffle Flags](https://github.com/jazzband/django-waffle).

## Zusammenfassung

Nachdem Sie diesen Artikel gelesen haben, sollten Sie nun eine gute Vorstellung davon haben, was Sie tun können, um Ihre Zielgruppe/Zielbrowserliste zu identifizieren und dann effektives Cross-Browser-Testing auf dieser Liste durchzuführen.

Als nächstes werden wir uns den tatsächlichen Codeproblemen widmen, die Ihr Testen aufdecken könnte, beginnend mit HTML und CSS.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Introduction","Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS", "Learn/Tools_and_testing/Cross_browser_testing")}}
