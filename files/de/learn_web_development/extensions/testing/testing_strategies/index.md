---
title: Strategien zur Durchführung von Tests
short-title: Testing strategies
slug: Learn_web_development/Extensions/Testing/Testing_strategies
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel erklärt, wie Sie Cross-Browser-Tests durchführen: wie man entscheidet, welche Browser und Geräte getestet werden sollen, wie man diese Browser und Geräte tatsächlich testet und wie man mit Nutzergruppen testet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; ein Verständnis der grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des Cross-Browser-Testens</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis der übergeordneten Konzepte des Cross-Browser-Testens zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Auswahl der zu testenden Browser und Geräte

Da Sie nicht jede Kombination aus Browser und Gerät testen können, reicht es aus, sicherzustellen, dass Ihre Website auf den wichtigsten funktioniert. In der Praxis bedeutet "wichtig" oft "häufig verwendet unter der Zielgruppe".

Sie können Browser und Geräte nach dem Maß an Unterstützung, das Sie bieten möchten, klassifizieren. Zum Beispiel:

1. A-Klasse: Häufige/moderne Browser — Als fähig bekannt. Gründlich testen und volle Unterstützung bieten.
2. B-Klasse: Ältere/weniger fähige Browser — Als nicht fähig bekannt. Testen und eine grundlegendere Erfahrung bieten, die vollen Zugang zu Kerninformationen und -diensten gewährt.
3. C-Klasse: Seltene/unbekannte Browser — nicht testen, aber annehmen, dass sie fähig sind. Die vollständige Website bereitstellen, die zumindest mit den durch defensives Kodieren bereitgestellten Fallbacks funktionieren sollte.

In den folgenden Abschnitten werden wir eine Unterstützungstabelle in diesem Format erstellen.

> [!NOTE]
> Yahoo machte diesen Ansatz zuerst populär mit ihrem [Graded Browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support).

### Die am häufigsten verwendeten Browser Ihrer Zielgruppe vorhersagen

Dies beinhaltet in der Regel, fundierte Vermutungen basierend auf Benutzerdemografien zu machen. Angenommen, Ihre Nutzer sind in Nordamerika und Westeuropa:

Eine schnelle Online-Suche zeigt Ihnen, dass die meisten Menschen in Nordamerika und Westeuropa Windows- oder Mac-Desktops/Laptops verwenden, wo die Hauptbrowser Chrome, Firefox, Safari und Edge sind. Sie möchten wahrscheinlich nur die neuesten Versionen dieser Browser testen, da diese regelmäßig aktualisiert werden. Diese sollten alle in die A-Klasse eingestuft werden.

Die meisten Menschen in dieser Demografie verwenden auch entweder iOS- oder Android-Telefone, daher möchten Sie wahrscheinlich die neuesten Versionen von iOS Safari, die letzten Versionen des alten Android-Standardbrowsers sowie Chrome und Firefox für iOS und Android testen. Idealerweise sollten Sie diese sowohl auf einem Telefon als auch auf einem Tablet testen, um sicherzustellen, dass responsive Designs funktionieren.

Opera Mini ist nicht sehr fähig, komplexes JavaScript auszuführen, daher sollten wir diesen ebenfalls in die B-Klasse einordnen.

So haben wir unsere Wahl, welche Browser getestet werden sollen, auf den Browsern basiert, von denen wir erwarten, dass unsere Nutzer sie verwenden. Dies ergibt folgendes Unterstützungsschema:

1. A-Klasse: Chrome und Firefox für Windows/Mac, Safari für Mac, Edge für Windows, iOS Safari für iPhone/iPad, Android-Standardbrowser (letzte zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (letzte zwei Versionen) auf Telefon/Tablet
2. B-Klasse: Opera Mini
3. C-Klasse: n/a

Wenn Ihre Zielgruppe hauptsächlich woanders ansässig ist, können die am meisten genutzten Browser und Betriebssysteme von den oben genannten abweichen.

> [!NOTE]
> "Der CEO meiner Firma nutzt ein Blackberry, also sollten wir sicherstellen, dass es darauf gut aussieht" kann auch etwas sein, das man berücksichtigen sollte.

### Browser-Statistiken

Einige Websites zeigen, welche Browser in einer bestimmten Region beliebt sind. Zum Beispiel gibt [Statcounter](https://gs.statcounter.com/) eine Vorstellung von Trends in Nordamerika.

### Verwendung von Analytics

Eine viel genauere Datenquelle, wenn Sie darauf zugreifen können, ist eine Analytics-App wie [Google Analytics](https://marketingplatform.google.com/about/analytics/), die Ihnen genau sagt, welche Browser die Leute verwenden, um Ihre Website zu durchsuchen. Natürlich setzt dies voraus, dass Sie bereits eine Website haben, auf der Sie es verwenden können, daher ist es für ganz neue Websites nicht geeignet.

Sie könnten auch überlegen, Open-Source- und datenschutzorientierte Analysetools wie [Open Web Analytics](https://www.openwebanalytics.com/) und [Matomo](https://matomo.org/) zu verwenden. Es wird erwartet, dass Sie die Plattform selbst hosten.

#### Einrichten von Google Analytics

1. Zunächst benötigen Sie ein Google-Konto. Verwenden Sie dieses Konto, um sich bei [Google Analytics](https://marketingplatform.google.com/about/analytics/) anzumelden.
2. Wählen Sie die [Google Analytics](https://analytics.google.com/analytics/web/) (Web)-Option und klicken Sie auf die Schaltfläche _Anmelden_.
3. Geben Sie die Details Ihrer Website/App in die Anmeldeseite ein. Dies ist recht intuitiv einzurichten; das wichtigste Feld, das korrekt sein muss, ist die Website-URL. Diese muss die Stamm-URL Ihrer Website/App sein.
4. Nachdem Sie alles ausgefüllt haben, drücken Sie die Schaltfläche _Tracking-ID abrufen_ und akzeptieren Sie die erscheinenden Nutzungsbedingungen.
5. Die nächste Seite bietet Ihnen einige Codeabschnitte und andere Anweisungen. Für eine einfache Website müssen Sie den Codeblock für das _Website-Tracking_ kopieren und in alle verschiedenen Seiten einfügen, die Sie mit Google Analytics auf Ihrer Website verfolgen möchten. Sie könnten die Schnipsel unter Ihrem schließenden `</body>`-Tag platzieren oder an einem anderen geeigneten Ort, der verhindert, dass sie mit Ihrem Anwendungscode vermischt werden.
6. Laden Sie die Änderungen auf den Entwicklungsserver hoch oder wohin auch immer Sie Ihren Code benötigen.

Das war's! Ihre Website sollte nun bereit sein, Analysedaten zu melden.

#### Analysedaten untersuchen

Jetzt sollten Sie in der Lage sein, zur [Analytics Web](https://analytics.google.com/analytics/web/)-Homepage zurückzukehren und mit dem Betrachten der gesammelten Daten über Ihre Site zu beginnen (Sie müssen natürlich etwas Zeit lassen, damit einige Daten tatsächlich gesammelt werden können.)

Standardmäßig sehen Sie die Registerkarte "Berichte", wie folgt:

![Wie Google Analytics Daten in seinem Haupt-Berichtsdashboard sammelt](analytics-reporting.png)

Es gibt eine riesige Menge an Daten, die Sie mit Google Analytics betrachten können — maßgeschneiderte Berichte in verschiedenen Kategorien usw. — und wir haben nicht die Zeit, alles zu diskutieren. [Erste Schritte mit Analytics](https://support.google.com/analytics/answer/9304153) bietet einige nützliche Anleitungen zum Reporting (und mehr) für Anfänger.

Sie können sehen, welche Browser und Betriebssysteme Ihre Nutzer verwenden, indem Sie _Zielgruppe > Technologie > Browser & Betriebssystem_ aus dem linken Menü auswählen.

> [!NOTE]
> Bei der Verwendung von Google Analytics müssen Sie auf irreführende Verzerrungen achten, z.B. könnte "Wir haben keine Firefox Mobile-Nutzer" dazu führen, dass Sie keine Unterstützung mehr für Firefox Mobile bereitstellen. Aber Sie werden keine Firefox Mobile-Nutzer haben, wenn die Website sie ursprünglich auf Firefox Mobile nicht richtig funktionierte.

### Weitere Überlegungen

Sie sollten Barrierefreiheit als Anforderung für Tests der A-Klasse einbeziehen.

Außerdem sollten Sie sich der spezifischen Bedürfnisse bewusst sein. Wenn Ihr Produkt beispielsweise einen Markt anspricht, in dem Mobiltelefone das Hauptmittel zum Zugang zum Internet sind, möchten Sie wahrscheinlich die Unterstützung mobiler Browser priorisieren.

### Endgültige Unterstützungstabelle

Unsere endgültige Unterstützungstabelle wird somit folgendermaßen aussehen:

1. A-Klasse: Chrome und Firefox für Windows/Mac, Safari für Mac und Edge (jeweils die letzten zwei Versionen), iOS Safari für iPhone/iPad, Android-Standardbrowser (die letzten zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (die letzten zwei Versionen) auf Telefon/Tablet. Barrierefreiheit, die gängige Tests besteht.
2. B-Klasse: Opera Mini.
3. C-Klasse: Opera, andere moderne Nischenbrowser.

## Was werden Sie testen?

Wenn Sie einen neuen Bestandteil in Ihrem Code haben, der getestet werden muss, sollten Sie bevor Sie mit den Tests beginnen, eine Liste mit Testanforderungen erstellen, die erfüllt werden müssen, bevor sie akzeptiert werden. Diese Anforderungen können visuell oder funktional sein — beides zusammen macht eine nutzbare Website-Funktion aus.

Betrachten Sie folgendes Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html) und auch das [Beispiel live](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)):

![Wie man ein Test-Szenario mit den Design- und Benutzeranforderungen vorbereitet](sliding-box-demo.png)

Testkriterien für diese Funktion könnten so geschrieben werden:

A- und B-Klasse:

- Die Schaltfläche sollte über den primären Steuermechanismus des Nutzers aktiviert werden können, egal welcher das ist — dies sollte Maus, Tastatur und Touch einschließen.
- Das Umschalten der Schaltfläche sollte die Informationsbox erscheinen/verschwinden lassen.
- Der Text sollte lesbar sein.
- Sehbehinderte Nutzer, die Screenreader verwenden, sollten auf den Text zugreifen können.

A-Klasse:

- Die Informationsbox sollte sanft animiert erscheinen/verschwinden.
- Der Verlauf und der Textschatten sollten das Aussehen der Box verbessern.

Sie werden bemerken, dass die Schaltfläche nur mit der Tastatur nicht nutzbar ist. Wir könnten das mit JavaScript beheben, um eine Tastatursteuerung für das Umschalten zu implementieren, oder einen anderen Ansatz verwenden.

Diese Testkriterien sind nützlich, weil:

- Sie Ihnen eine Reihe von Schritten geben, die Sie bei der Durchführung von Tests befolgen können.
- Sie leicht in Anweisungen für Benutzergruppen umgewandelt werden können, die Tests durchführen (z. B. "Versuchen Sie, die Schaltfläche mit Ihrer Maus zu aktivieren, und dann mit der Tastatur…") — siehe [Benutzertests](#benutzertests) unten.
- Sie auch eine Grundlage für das Schreiben automatisierter Tests bieten können. Es ist einfacher, solche Tests zu schreiben, wenn Sie genau wissen, was Sie testen möchten und was die Erfolgskriterien sind (siehe [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#selenium) später in der Serie).

## Ein Testlabor zusammenstellen

Eine Möglichkeit, Browser-Tests durchzuführen, besteht darin, die Tests selbst zu machen. Dazu werden Sie wahrscheinlich eine Kombination aus tatsächlichen physischen Geräten und emulierten Umgebungen (mit einem Emulator oder einer virtuellen Maschine) verwenden.

### Physische Geräte

Es ist im Allgemeinen besser, ein echtes Gerät mit dem Browser zu haben, den Sie testen möchten, da dies die größte Genauigkeit in Bezug auf das Verhalten und das allgemeine Benutzererlebnis bietet. Sie benötigen wahrscheinlich etwas wie das Folgende für ein angemessenes Basistestlabor:

- Einen Mac mit den Browsern, die Sie testen müssen — dies kann Firefox, Chrome, Opera und Safari umfassen.
- Einen Windows-PC mit den Browsern, die Sie testen müssen — dies kann Edge (oder IE), Chrome, Firefox und Opera umfassen.
- Ein leistungsstärkeres Android-Telefon und -Tablet mit den Browsern, die Sie testen müssen — dies kann Chrome, Firefox und Opera Mini für Android sowie den originalen Android-Standardbrowser umfassen.
- Ein leistungsstärkeres iOS-Telefon und -Tablet mit den Browsern, die Sie testen müssen — dies kann iOS Safari sowie Chrome, Firefox und Opera Mini für iOS umfassen.

Die folgenden sind ebenfalls gute Optionen, wenn Sie sie bekommen können:

- Ein Linux-PC, falls Sie Fehler testen müssen, die spezifisch für Linux-Versionen von Browsern sind. Linux-Nutzer verwenden häufig Firefox, Opera und Chrome. Wenn Sie nur eine Maschine zur Verfügung haben, könnten Sie in Betracht ziehen, eine Dual-Boot-Maschine einzurichten, die Linux und Windows auf separaten Partitionen ausführt. Der Ubuntu-Installer erleichtert dies; siehe [WindowsDualBoot](https://help.ubuntu.com/community/WindowsDualBoot) für Hilfe bei diesem Vorgang.
- Ein paar leistungsschwächere mobile Geräte, damit Sie die Leistung von Funktionen wie Animationen auf weniger leistungsstarken Prozessoren testen können.

Ihre Hauptarbeitsmaschine kann auch ein Ort sein, um andere Tools für spezifische Zwecke zu installieren, wie Barrierefreiheitstools, Screenreader und Emulatoren/virtuelle Maschinen.

Einige größere Unternehmen haben Gerätemaschinen, die eine sehr große Auswahl an verschiedenen Geräten halten, sodass Entwickler Bugs auf sehr spezifischen Browser-/Gerätekombinationen aufspüren können. Kleinere Unternehmen und Einzelpersonen können sich in der Regel nicht ein solch ausgefeiltes Labor leisten, sondern behelfen sich mit kleineren Laboren, Emulatoren, virtuellen Maschinen und kommerziellen Testanwendungen.

Wir werden jede der anderen Optionen im Folgenden behandeln.

> [!NOTE]
> Es wurden einige Anstrengungen unternommen, öffentlich zugängliche Gerätemaschinen zu schaffen — siehe [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/).

> [!NOTE]
> Wir müssen auch die Barrierefreiheit berücksichtigen — es gibt eine Reihe nützlicher Tools, die Sie auf Ihrer Maschine installieren können, um Barrierefreiheitstests zu erleichtern, aber wir werden diese im Artikel "Umgang mit häufigen Problemen bei der Barrierefreiheit" später im Kurs behandeln.

### Emulatoren

Emulatoren sind grundsätzlich Programme, die auf Ihrem Computer laufen und ein Gerät oder bestimmte Gerätebedingungen irgendeiner Art emulieren, was es Ihnen ermöglicht, einige Ihrer Tests bequemer durchzuführen, als wenn Sie eine bestimmte Hardware-/Softwarekombination finden müssten, auf der Sie testen.

Ein Emulator könnte so einfach sein wie das Testen einer Gerätebedingung. Beispielsweise, wenn Sie Ihre Breiten-/Höhen-Media-Queries für responsives Design schnell und unkompliziert testen möchten, könnten Sie den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) von Firefox verwenden. Auch Safari hat einen ähnlichen Modus, den Sie aktivieren können, indem Sie zu _Safari > Einstellungen_ gehen und das _Entwicklermenü anzeigen_ aktivieren, dann _Entwickeln > In den Modus für responsives Design wechseln_ auswählen. Chrome hat ebenfalls etwas ähnliches: den Gerätemodus (siehe [Mobile Geräte mit dem Gerätemodus simulieren](https://developer.chrome.com/docs/devtools/device-mode/)).

Häufiger müssen Sie jedoch irgendeine Art von Emulator installieren. Die häufigsten Geräte/Browser, die Sie testen möchten, sind wie folgt:

- Die offizielle [Android Studio IDE](https://developer.android.com/studio/) zur Entwicklung von Android-Apps ist etwas schwergewichtig, nur um Websites auf Google Chrome oder dem alten Stock-Android-Browser zu testen, verfügt aber über einen robusten [Emulator](https://developer.android.com/studio/run/emulator.html). Wenn Sie etwas leichteres möchten, ist [Andy](https://www.andyroid.net/) eine vernünftige Option, die sowohl auf Windows als auch auf Mac läuft.
- Apple bietet eine App namens [Simulator](https://help.apple.com/simulator/mac/current/) an, die auf dem [XCode](https://developer.apple.com/xcode/)-Entwicklungsumfeld läuft und iPad/iPhone/Apple Watch/Apple TV emuliert. Dazu gehört auch der native iOS Safari-Browser. Leider läuft dies nur auf einem Mac.

Sie können oft auch Simulatoren für andere mobile Geräteumgebungen finden, zum Beispiel:

- Sie können Opera Mini allein emulieren, wenn Sie es testen möchten.

> [!NOTE]
> Viele Emulatoren erfordern tatsächlich die Verwendung einer virtuellen Maschine (siehe unten); in diesem Fall werden oft Anweisungen bereitgestellt, und/oder die Verwendung der virtuellen Maschine ist in den Emulator-Installer integriert.

### Virtuelle Maschinen

Virtuelle Maschinen sind Anwendungen, die auf Ihrem Desktop-Computer laufen und Ihnen erlauben, Emulationen ganzer Betriebssysteme auszuführen, die jeweils in einer eigenen virtuellen Festplatte getrennter sind (oft dargestellt durch eine einzelne große Datei, die auf der Festplatte des Host-Rechners existiert). Es gibt eine Reihe populärer virtueller Maschinenanwendungen, wie [Parallels](https://www.parallels.com/), [VMware](https://www.vmware.com/) und [Virtual Box](https://www.virtualbox.org/wiki/Downloads); letzteres mögen wir persönlich, weil es kostenlos ist.

> [!NOTE]
> Sie benötigen eine Menge Festplattenspeicher, um Emulationen virtueller Maschinen laufen zu lassen; jedes Betriebssystem, das Sie emulieren, kann viel Speicher erfordern. Sie neigen dazu, den Speicherplatz auf der Festplatte auszuwählen, den Sie für jede Installation wünschen; Sie könnten mit wahrscheinlich 10 GB auskommen, aber einige Quellen empfehlen bis zu 50 GB oder mehr, damit das Betriebssystem zuverlässig läuft. Eine gute Option, die die meisten virtuellen Maschinen anbieten, ist es, eine **dynamisch zugeordnete** Festplatte zu erstellen, die sich vergrößert und verkleinert, je nach Bedürfnis.

Um eine Virtual Box zu verwenden, müssen Sie:

1. Einen Installationsdatenträger oder ein Image (z. B. ISO-Datei) für das Betriebssystem, das Sie emulieren möchten, besorgen. Virtual Box kann diese nicht bereitstellen; die meisten, wie Windows-Betriebssysteme, sind kommerzielle Produkte, die nicht frei verteilt werden können.
2. [Laden Sie das entsprechende Installationsprogramm](https://www.virtualbox.org/wiki/Downloads) für Ihr Betriebssystem herunter und installieren Sie es.
3. Öffnen Sie die App; Ihnen wird eine Ansicht wie die folgende angezeigt: ![Anwendungsfenster: Das linke Panel listet Windows-Betriebssysteme und Opera TV-Emulatoren auf. Das rechte Panel enthält mehrere Unterpanels einschließlich Allgemein, System, Anzeige, Einstellungen, Audio, Netzwerk und eine Vorschau.](virtualbox.png)
4. Um eine neue virtuelle Maschine zu erstellen, drücken Sie die Schaltfläche _Neu_ in der oberen linken Ecke.
5. Folgen Sie den Anweisungen und füllen Sie die folgenden Dialogfelder aus. Sie werden:

   1. Einen Namen für die neue virtuelle Maschine angeben
   2. Wählen, welches Betriebssystem und welche Version Sie darauf installieren
   3. Festlegen, wie viel RAM zugewiesen werden soll (wir empfehlen etwas wie 2048 MB oder 2 GB)
   4. Eine virtuelle Festplatte erstellen (wählen Sie die Standardoptionen über die drei Dialogfelder aus mit _Jetzt eine virtuelle Festplatte erstellen_, _VDI (Virtuelles Festplatten-Image)_ und _Dynamisch zugewiesen_).
   5. Den Dateispeicherort und die Größe für die virtuelle Festplatte wählen (wählen Sie einen sinnvollen Namen und Standort aus, und für die Größe geben Sie etwa 50 GB an, oder so viel, wie Sie bereit sind anzugeben).

Jetzt sollte die neue virtuelle Box im linken Menü des Hauptbenutzerfensters der Virtual Box UI erscheinen. An diesem Punkt können Sie doppelklicken, um es zu öffnen — es wird beginnen, die virtuelle Maschine zu booten, aber sie wird noch nicht das Betriebssystem (OS) installiert haben. Jetzt müssen Sie das Dialogfeld auf das Installationsimage/-medium verweisen, und es wird die Schritte zur Installation des OS wie auf einer physischen Maschine durchlaufen.

![Wie man die Virtual Box für ein spezifisches Betriebssystem installiert](virtualbox-installer.png)

> [!WARNING]
> Sie müssen sicherstellen, dass Sie an diesem Punkt das Installationsimage des Betriebssystems haben, das Sie auf der virtuellen Maschine installieren möchten, und es sofort installieren. Wenn Sie den Prozess an diesem Punkt abbrechen, kann dies die virtuelle Maschine unbrauchbar machen, sodass Sie sie löschen und erneut erstellen müssen. Das ist nicht fatal, aber es ist ärgerlich.

Nachdem der Prozess abgeschlossen ist, sollten Sie eine virtuelle Maschine mit einem Betriebssysteminstallation in einem Fenster auf Ihrem Host-Rechner haben.

![Screenshot of Windows XP, hosted in Virtual box, and running on macOS](virtualbox-running.png)

Diese virtuelle Betriebssystem-Installation müssen Sie wie jede echte Installation behandeln — z.B. außer der Installation der Browser, die Sie testen möchten, installieren Sie ein Antivirenprogramm, um es vor Viren zu schützen.

Mehrere virtuelle Maschinen zu haben ist sehr nützlich, insbesondere für das Testen von Windows IE/Edge — auf Windows können Sie nicht mehrere Versionen des Standardbrowsers parallel installiert haben, deshalb möchten Sie eine Bibliothek von virtuellen Maschinen aufbauen, um verschiedene Tests nach Bedarf durchzuführen, z.B.:

- Windows 10 mit Edge 14
- Windows 10 mit Edge 13

> [!NOTE]
> Ein weiterer Vorteil von virtuellen Maschinen ist, dass die virtuellen Festplattenabbilder relativ in sich geschlossen sind. Wenn Sie in einem Team arbeiten, können Sie ein virtuelles Festplattenabbild erstellen, es dann kopieren und verteilen. Stellen Sie nur sicher, dass Sie die erforderlichen Lizenzen zum Ausführen all dieser Kopien von Windows oder anderem haben, was Sie, falls es ein lizenziertes Produkt ist, ausführen.

### Automatisierung und kommerzielle Apps

Wie im letzten Kapitel erwähnt, können Sie viel von der Arbeit des Browser-Testens durch die Verwendung eines Automatisierungssystems vereinfachen. Sie können Ihr eigenes Testautomatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte Wahl der App), welches zwar einige Einrichtung erfordert, jedoch sehr lohnend sein kann, wenn Sie es erst einmal hinbekommen.

Es gibt auch kommerzielle Tools wie [Sauce Labs](https://saucelabs.com/), [Browser Stack](https://www.browserstack.com/) und [LambdaTest](https://www.lambdatest.com/), die diese Art von Dienstleistung für Sie übernehmen, ohne dass Sie sich um die Einrichtung kümmern müssen, wenn Sie bereit sind, etwas Geld in Ihre Tests zu investieren.

Eine andere Alternative besteht darin, No-Code-Testautomatisierungstools wie [Endtest](https://www.endtest.io/) zu verwenden.

Wir werden uns später im Modul ansehen, wie man solche Tools verwendet.

## Benutzertests

Bevor wir weitermachen, schließen wir diesen Artikel mit einem Gespräch über Benutzertests ab — dies kann eine gute Option sein, wenn Sie eine willige Benutzergruppe haben, mit der Sie Ihre neue Funktion testen wollen. Bedenken Sie, dass dies so niedrigschwellig oder ausgefeilt sein kann, wie Sie möchten — Ihre Benutzergruppe könnte aus einer Gruppe von Freunden, einer Gruppe von Kollegen oder einer Gruppe von unbezahlten oder bezahlten Freiwilligen bestehen, je nachdem, ob Sie etwas Geld haben, um es in Tests zu investieren.

Im Allgemeinen werden Sie Ihre Benutzer bitten, sich die Seite oder Ansicht mit der neuen Funktion auf irgendeinem Entwicklungsserver anzusehen, damit Sie die endgültige Website oder Änderung nicht live schalten, bevor sie fertig ist. Sie sollten sie auffordern, einigen Schritten zu folgen und die Ergebnisse, die sie erhalten, zu berichten. Es ist hilfreich, eine Reihe von Schritten (oft als Skript bezeichnet) bereitzustellen, sodass Sie zuverlässigere Ergebnisse in Bezug auf das erhalten, was Sie testen wollten. Wir erwähnten dies im Abschnitt [Was werden Sie testen](#what_are_you_going_to_test) oben — es ist leicht, die dort beschriebenen Testkriterien in Schritte zu verwandeln, die man befolgen soll. Beispielsweise wäre Folgendes für einen sehenden Benutzer geeignet:

- Klicken Sie mehrmals auf die Fragezeichen-Schaltfläche mit der Maus auf Ihrem Desktop-Computer. Aktualisieren Sie das Browserfenster.
- Wählen und aktivieren Sie die Fragezeichen-Schaltfläche mit der Tastatur auf Ihrem Desktop-Computer mehrmals.
- Tippen Sie mehrmals auf die Fragezeichen-Schaltfläche auf Ihrem Touchscreen-Gerät.
- Das Umschalten der Schaltfläche sollte die Informationsbox erscheinen/verschwinden lassen. Tut es das, in jedem der drei oben genannten Fälle?
- Ist der Text lesbar?
- Animiert sich die Informationsbox sanft, während sie erscheint/verschwindet?

Beim Ausführen von Tests kann es auch eine gute Idee sein:

- Wenn möglich, ein separates Browserprofil mit deaktivierten Browser-Erweiterungen und anderen derartigen Dingen einzurichten und Ihre Tests in diesem Profil auszuführen (siehe [Den Profil-Manager verwenden, um Firefox-Profile zu erstellen und zu entfernen](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) und [Chrome mit anderen teilen oder Profile hinzufügen](https://support.google.com/chrome/answer/2364824), zum Beispiel).
- Die private Modus-Funktionalität von Browsern zu verwenden, wo verfügbar (z.B. [Privates Surfen](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) in Firefox, [Inkognito-Modus](https://support.google.com/chrome/answer/95464) in Chrome), sodass Dinge wie Cookies und temporäre Dateien nicht gespeichert werden.

Diese Schritte sind darauf ausgelegt, sicherzustellen, dass der Browser, in dem Sie testen, so "rein" wie möglich ist, d.h. dass nichts installiert ist, was die Testergebnisse beeinflussen könnte.

> [!NOTE]
> Eine weitere nützliche Low-Tech-Option, wenn Sie die Hardware zur Verfügung haben, ist es, Ihre Websites auf leistungsschwächeren Telefonen/anderen Geräten zu testen — da Websites größer werden und mehr Effekte bieten, ist die Wahrscheinlichkeit größer, dass die Website verlangsamt wird, sodass Sie mehr Augenmerk auf die Leistung legen müssen. Zu versuchen, Ihre Funktionalität auf einem leistungsschwachen Gerät zum Laufen zu bringen, wird es wahrscheinlicher machen, dass das Erlebnis auf leistungsstärkeren Geräten gut sein wird.

> [!NOTE]
> Einige serverseitige Entwicklungsumgebungen bieten nützliche Mechanismen, um Websiteänderungen nur für eine Teilmenge von Benutzern bereitzustellen, und bieten so einen nützlichen Mechanismus, um eine Funktion von einer Teilmenge von Benutzern testen zu lassen, ohne dass ein separater Entwicklungsserver erforderlich ist. Ein Beispiel dafür sind [Django Waffle Flags](https://github.com/jazzband/django-waffle).

## Zusammenfassung

Nach der Lektüre dieses Artikels sollten Sie nun eine gute Vorstellung davon haben, wie Sie Ihre Zielgruppe/Zielliste von Browsern identifizieren und dann effektiv Cross-Browser-Tests auf dieser Liste durchführen können.

Als Nächstes werden wir unsere Aufmerksamkeit auf die tatsächlichen Codeprobleme richten, die Ihre Tests möglicherweise aufdecken, beginnend mit HTML und CSS.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}
