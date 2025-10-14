---
title: Strategien zur Durchführung von Tests
short-title: Testing strategies
slug: Learn_web_development/Extensions/Testing/Testing_strategies
l10n:
  sourceCommit: dc9d517589ac7b74bc205f49492b0450dfdb78de
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel erklärt, wie man Cross-Browser-Tests durchführt: wie man auswählt, welche Browser und Geräte getestet werden sollen, wie man diese Browser und Geräte tatsächlich testet und wie man mit Benutzergruppen testet.

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
          >Prinzipien des Cross-Browser-Tests</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis der grundlegenden Konzepte des Cross-Browser-Tests zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Auswahl der zu testenden Browser und Geräte

Da Sie nicht jede Kombination aus Browser und Gerät testen können, reicht es aus, sicherzustellen, dass Ihre Website auf den wichtigsten funktioniert. In praktischen Anwendungen bedeutet "wichtig" oft "häufig von der Zielgruppe verwendet".

Sie können Browser und Geräte nach dem Maß an Support, den Sie geben möchten, klassifizieren. Zum Beispiel:

1. A-Klasse: Häufige/moderne Browser — Als fähig bekannt. Gründlich testen und vollen Support bieten.
2. B-Klasse: Ältere/weniger fähige Browser — Als nicht fähig bekannt. Testen und eine einfachere Erfahrung bieten, die vollen Zugang zu den Kerninformationen und -diensten ermöglicht.
3. C-Klasse: Seltene/unbekannte Browser — nicht testen, aber annehmen, dass sie fähig sind. Die vollständige Website bereitstellen, die mit den durch unsere defensive Programmierung bereitgestellten Fallbacks funktionieren sollte.

In den folgenden Abschnitten werden wir eine Unterstützungstabelle in diesem Format aufbauen.

> [!NOTE]
> Yahoo machte diesen Ansatz mit ihrem [Graded browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support) Ansatz erstmals populär.

### Vorhersage der am häufigsten verwendeten Browser Ihrer Zielgruppe

Dies beinhaltet typischerweise das Treffen fundierter Vermutungen basierend auf Benutzerdemografien. Zum Beispiel, nehmen wir an, Ihre Benutzer befinden sich in Nordamerika und Westeuropa:

Eine schnelle Online-Recherche zeigt Ihnen, dass die meisten Menschen in Nordamerika und Westeuropa Windows- oder Mac-Desktops/Laptops verwenden, bei denen die Hauptbrowser Chrome, Firefox, Safari und Edge sind. Sie würden wahrscheinlich nur die neuesten Versionen dieser Browser testen wollen, da diese Browser regelmäßig aktualisiert werden. Diese sollten alle in die A-Klasse aufgenommen werden.

Die meisten Menschen in dieser demografischen Gruppe verwenden auch entweder iOS- oder Android-Telefone, so dass Sie vermutlich die neuesten Versionen von iOS Safari, den letzten paar Versionen des alten Android-Standardbrowsers sowie Chrome und Firefox für iOS und Android testen möchten. Sie sollten diese idealerweise sowohl auf einem Telefon als auch auf einem Tablet testen, um sicherzustellen, dass responsive Designs funktionieren.

Opera Mini ist nicht sehr fähig, komplexes JavaScript auszuführen, daher sollten wir es ebenfalls in die B-Klasse einordnen.

Auf diese Weise haben wir die Wahl getroffen, welche Browser wir testen, basierend auf den Browsern, die wir erwarten, dass unsere Benutzer sie verwenden.
Dies gibt uns die bisher folgende Unterstützungstabelle:

1. A-Klasse: Chrome und Firefox für Windows/Mac, Safari für Mac, Edge für Windows, iOS Safari für iPhone/iPad, Android-Standardbrowser (die letzten zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (die letzten zwei Versionen) auf Telefon/Tablet
2. B-Klasse: Opera Mini
3. C-Klasse: n/a

Wenn sich Ihre Zielgruppe hauptsächlich woanders befindet, können die gängigsten Browser und Betriebssysteme von den oben genannten abweichen.

> [!NOTE]
> "Der CEO meines Unternehmens verwendet ein Blackberry, also sollten wir sicherstellen, dass es darauf gut aussieht" kann auch ein zu berücksichtigender Punkt sein.

### Browserstatistiken

Einige Websites zeigen, welche Browser in einer bestimmten Region populär sind. Zum Beispiel gibt [Statcounter](https://gs.statcounter.com/) einen Eindruck von den Trends in Nordamerika.

### Verwendung von Analysedaten

Eine viel genauere Datenquelle, wenn Sie darauf zugreifen können, ist eine Analyse-App wie [Google Analytics](https://marketingplatform.google.com/about/analytics/), die Ihnen genau mitteilt, welche Browser die Menschen verwenden, um Ihre Website zu durchsuchen. Natürlich setzt dies voraus, dass Sie bereits eine Site haben, um sie zu nutzen, daher ist sie nicht gut für völlig neue Sites.

Sie können auch die Verwendung von Open-Source- und datenschutzfreundlichen Analyseplattformen wie [Open Web Analytics](https://www.openwebanalytics.com/) und [Matomo](https://matomo.org/) in Betracht ziehen. Sie erwarten, dass Sie die Analyseplattform selbst hosten.

#### Einrichten von Google Analytics

1. Zunächst benötigen Sie ein Google-Konto. Verwenden Sie dieses Konto, um sich bei [Google Analytics](https://marketingplatform.google.com/about/analytics/) anzumelden.
2. Wählen Sie die [Google Analytics](https://analytics.google.com/analytics/web/) (Web) Option und klicken Sie auf die Schaltfläche _Registrieren_.
3. Geben Sie die Details Ihrer Website/App auf der Registrierungsseite ein. Dies ist relativ intuitiv einzurichten; das wichtigste Feld, das Sie richtig inrichten müssen, ist die URL der Website. Dies muss die Root-URL Ihrer Site/App sein.
4. Sobald Sie alles ausgefüllt haben, drücken Sie die Schaltfläche _Tracking-ID abrufen_ und akzeptieren Sie die angezeigten Nutzungsbedingungen.
5. Die nächste Seite bietet Ihnen einige Codeausschnitte und andere Anleitungen. Für eine einfache Website müssen Sie den _Website-Tracking_ Codeblock kopieren und auf allen verschiedenen Seiten einfügen, die Sie mit Google Analytics auf Ihrer Website verfolgen möchten. Sie könnten die Snippets unterhalb Ihres schließenden `</body>`-Tags oder an einem anderen geeigneten Ort platzieren, damit sie nicht mit Ihrem Anwendungscode durcheinander geraten.
6. Laden Sie die Änderungen auf den Entwicklungsserver hoch oder wohin auch immer Sie Ihren Code benötigen.

Das war's! Ihre Site sollte jetzt bereit sein, Analysedaten zu melden.

#### Analysedaten auswerten

Jetzt sollten Sie in der Lage sein, zur [Analytics Web](https://analytics.google.com/analytics/web/) Startseite zurückzukehren und die gesammelten Daten über Ihre Website anzusehen (Sie müssen natürlich etwas Zeit lassen, damit tatsächlich einige Daten gesammelt werden).

Standardmäßig sollten Sie den Berichtstab wie folgt sehen:

![Wie Google Analytics Daten in seinem Hauptberichtsdashboard sammelt](analytics-reporting.png)

Es gibt eine riesige Menge an Daten, die Sie mit Google Analytics ansehen könnten — benutzerdefinierte Berichte in verschiedenen Kategorien usw. — und wir haben keine Zeit, alles zu besprechen.
[Erste Schritte mit Analytics](https://support.google.com/analytics/answer/9304153) bietet nützliche Anleitungen zum Berichten (und mehr) für Anfänger.

Sie können sehen, welche Browser und Betriebssysteme Ihre Benutzer verwenden, indem Sie _Audience > Technology > Browser & OS_ im linken Menü auswählen.

> [!NOTE]
> Beim Einsatz von Google Analytics müssen Sie sich vor irreführenden Verzerrungen hüten, z.B. könnte „Wir haben keine Firefox Mobile Nutzer“ dazu führen, dass Sie den Support für Firefox Mobile nicht mehr in Betracht ziehen. Aber Sie werden keine Firefox Mobile Nutzer haben, wenn die Website auf Firefox Mobile von Anfang an kaputt war.

### Weitere Überlegungen

Sie sollten die Barrierefreiheit als Anforderung für Tests der A-Klasse einbeziehen.

Außerdem sollten Sie sich der spezifischen Bedürfnisse der Situation bewusst sein. Wenn Ihr Produkt beispielsweise einen Markt anspricht, in dem mobile Telefone das primäre Mittel zum Zugriff auf das Internet sind, sollten Sie den mobilen Browsersupport wahrscheinlich als Priorität behandeln.

### Abschließende Unterstützungstabelle

Unsere endgültige Unterstützungstabelle sieht dann folgendermaßen aus:

1. A-Klasse: Chrome und Firefox für Windows/Mac, Safari für Mac und Edge (jeweils die letzten zwei Versionen), iOS Safari für iPhone/iPad, Android-Standardbrowser (jeweils die letzten zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (jeweils die letzten zwei Versionen) auf Telefon/Tablet. Barrierefreiheit durch Bestehen allgemeiner Tests.
2. B-Klasse: Opera Mini.
3. C-Klasse: Opera, andere Nischenmoderne Browser.

## Was werden Sie testen?

Wenn Sie eine neue Ergänzung zu Ihrem Codebasis haben, die getestet werden muss, sollten Sie, bevor Sie mit dem Testen beginnen, eine Liste von Testanforderungen schreiben, die bestanden werden müssen, um akzeptiert zu werden. Diese Anforderungen können visuell oder funktional sein — beides kombiniert, um ein nutzbares Websitedesign zu gestalten.

Betrachten Sie das folgende Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html) und auch das [Beispiel live in Aktion](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)):

![Wie man ein Testszenario mit den Design- und Benutzeranforderungen vorbereitet](sliding-box-demo.png)

Testkriterien für dieses Feature könnten so geschrieben werden:

A- und B-Klasse:

- Die Schaltfläche sollte durch das primäre Steuermechanismus des Benutzers aktivierbar sein, was auch immer es ist — dies sollte Maus, Tastatur und Touch einschließen.
- Das Umschalten der Schaltfläche sollte das Informationsfeld erscheinen/verschwinden lassen.
- Der Text sollte lesbar sein.
- Sehbehinderte Benutzer, die Bildschirmleser verwenden, sollten auf den Text zugreifen können.

A-Klasse:

- Das Informationsfeld sollte sanft animiert werden, wenn es erscheint/verschwindet.
- Der Verlauf und der Textschatten sollten das Aussehen des Kästchens verbessern.

Sie könnten bemerken, dass die Schaltfläche nicht nur mit der Tastatur verwendbar ist. Wir könnten dies mit JavaScript beheben, um eine Tastatursteuerung für das Umschalten zu implementieren, oder einen anderen Ansatz verwenden.

Diese Testkriterien sind hilfreich, weil:

- Sie Ihnen eine Reihe von Schritten geben, denen Sie folgen müssen, wenn Sie Tests durchführen.
- Sie sich leicht in Anweisungen für Benutzergruppen umwandeln lassen, die bei Tests durchgeführt werden sollen (z.B. "Versuchen Sie, die Schaltfläche mit Ihrer Maus und dann mit der Tastatur zu aktivieren...") — siehe [Benutzertests](#benutzertests) unten.
- Sie auch eine Grundlage für das Schreiben automatisierter Tests bieten. Es ist einfacher, solche Tests zu schreiben, wenn Sie genau wissen, was Sie testen möchten und was die Erfolgskriterien sind (siehe [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#selenium) später in der Serie).

## Ein Testlabor zusammenstellen

Eine Möglichkeit zur Durchführung von Browser-Tests besteht darin, die Tests selbst durchzuführen. Um dies zu tun, werden Sie wahrscheinlich eine Kombination aus tatsächlichen physischen Geräten und emulierten Umgebungen (entweder unter Verwendung eines Emulators oder einer virtuellen Maschine) verwenden.

### Physische Geräte

Es ist im Allgemeinen besser, ein echtes Gerät zu haben, das den zu testenden Browser ausführt — dies bietet die größte Genauigkeit in Bezug auf Verhalten und Gesamterlebnis des Benutzers. Sie werden wahrscheinlich etwas wie das Folgende für ein vernünftiges Low-Level-Gerätelabor benötigen:

- Ein Mac mit den installierten Browsern, die Sie testen müssen — darunter können Firefox, Chrome, Opera und Safari sein.
- Ein Windows-PC mit den installierten Browsern, die Sie testen müssen — darunter können Edge (oder IE), Chrome, Firefox und Opera sein.
- Ein Android-Telefon und Tablet mit höherer Spezifikation mit den installierten Browsern, die Sie testen müssen — darunter können Chrome, Firefox und Opera Mini für Android sowie der ursprüngliche Android-Standardbrowser sein.
- Ein iOS-Telefon und Tablet mit höherer Spezifikation mit den installierten Browsern, die Sie testen müssen — darunter können iOS Safari und Chrome, Firefox und Opera Mini für iOS sein.

Die folgenden sind ebenfalls gute Optionen, wenn Sie sie bekommen können:

- Ein Linux-PC verfügbar, falls Sie Bugs testen müssen, die spezifisch für Linux-Versionen von Browsern sind. Linux-Benutzer verwenden üblicherweise Firefox, Opera und Chrome. Wenn Sie nur eine Maschine zur Verfügung haben, könnten Sie in Betracht ziehen, eine Dual-Boot-Maschine zu erstellen, die Linux und Windows auf separaten Partitionen ausführt.
- Ein paar Geräte mit niedrigerer Spezifikation, damit Sie die Leistung von Funktionen wie Animationen auf weniger leistungsstarken Prozessoren testen können.

Ihre Hauptarbeitsmaschine kann auch ein Ort sein, um andere Werkzeuge für spezifische Zwecke zu installieren, wie z.B. Tools zur Überprüfung der Barrierefreiheit, Bildschirmleser und Emulatoren/virtuelle Maschinen.

Einige größere Unternehmen führen Gerätelabore, die eine sehr große Auswahl an verschiedenen Geräten enthalten, wodurch Entwicklern die Möglichkeit gegeben wird, Bugs auf sehr spezifischen Browser-/Gerätekombinationen aufzuspüren. Kleinere Unternehmen und Einzelpersonen sind normalerweise nicht in der Lage, ein so fortschrittliches Labor zu finanzieren, und neigen dazu, mit kleineren Laboren, Emulatoren, virtuellen Maschinen und kommerziellen Test-Apps auszukommen.

Wir werden jede der anderen Optionen unten behandeln.

> [!NOTE]
> Einige Bemühungen wurden unternommen, um öffentlich zugängliche Gerätelabore zu schaffen — siehe [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/).

> [!NOTE]
> Wir müssen auch die Barrierefreiheit berücksichtigen — es gibt eine Reihe nützlicher Tools, die Sie auf Ihrem Rechner installieren können, um die Barrierefreiheitstests zu erleichtern, aber wir werden diese im Artikel zur Bewältigung häufig auftretender Barrierefreiheitsprobleme später im Kurs behandeln.

### Emulatoren

Emulatoren sind im Grunde Programme, die auf Ihrem Computer laufen und ein Gerät oder bestimmte Gerätebedingungen irgendeiner Art emulieren, sodass Sie einige Ihrer Tests bequemer durchführen können, als eine bestimmte Kombination von Hardware/Software zum Testen zu finden.

Ein Emulator könnte so einfach sein wie das Testen einer Gerätebedingung. Zum Beispiel, wenn Sie ein schnelles Testen Ihrer Breiten-/Höhen-Media-Queries für responsive Designs durchführen möchten, könnten Sie den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) von Firefox verwenden. Safari hat ebenfalls einen ähnlichen Modus, der aktiviert werden kann, indem man auf _Safari > Preferences_ geht und _Show Develop menu_ auswählt, dann _Develop > Enter Responsive Design Mode_ auswählt. Chrome hat auch etwas Ähnliches: den Geräte-Modus (siehe [Simulate Mobile Devices with Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)).

Häufiger müssen Sie jedoch eine Art Emulator installieren. Die gebräuchlichsten Geräte/Browser, die Sie testen möchten, sind wie folgt:

- Die offizielle [Android Studio IDE](https://developer.android.com/studio/) zur Entwicklung von Android-Apps ist etwas schwerfällig, nur um Websites auf Google Chrome oder dem alten Stock Android-Browser zu testen, bietet aber einen robusten [Emulator](https://developer.android.com/studio/run/emulator.html). Wenn Sie etwas leichteres möchten, ist [Andy](https://www.andyroid.net/) eine vernünftige Option, die sowohl auf Windows als auch auf Mac läuft.
- Apple bietet eine App namens [Simulator](https://help.apple.com/simulator/mac/current/) an, die auf der [Xcode](https://developer.apple.com/xcode/) Entwicklungsumgebung läuft und iPad/iPhone/Apple Watch/Apple TV emuliert. Dies beinhaltet den nativen iOS Safari Browser. Leider läuft dies nur auf einem Mac.

Sie können oft auch Simulatoren für andere mobile Geräteumgebungen finden, zum Beispiel:

- Sie können Opera Mini alleine emulieren, wenn Sie es testen möchten.

> [!NOTE]
> Viele Emulatoren erfordern tatsächlich die Verwendung einer virtuellen Maschine (siehe unten); in solchen Fällen werden oft Anweisungen bereitgestellt, und/oder die Verwendung der virtuellen Maschine ist im Installationsprogramm des Emulators integriert.

### Virtuelle Maschinen

Virtuelle Maschinen sind Anwendungen, die auf Ihrem Desktop-Computer laufen und es Ihnen ermöglichen, Emulationen ganzer Betriebssysteme auszuführen, die jeweils in ihrer eigenen virtuellen Festplatte compartmentalized sind (oft durch eine einzige große Datei dargestellt, die auf der Festplatte des Host-Rechners existiert). Es gibt eine Reihe von beliebten virtuellen Maschinen-Apps wie [Parallels](https://www.parallels.com/), [VMware](https://www.vmware.com/) und [Virtual Box](https://www.virtualbox.org/wiki/Downloads); uns gefällt besonders letztere, da sie kostenlos ist.

> [!NOTE]
> Sie benötigen eine Menge Festplattenspeicher, um virtuelle Maschinen-Emulationen auszuführen; jedes Betriebssystem, das Sie emulieren, kann eine Menge Speicherplatz in Anspruch nehmen. Sie neigen dazu, den Festplattenspeicher zu wählen, den Sie für jede Installation wünschen; normalerweise kommt man mit 10 GB aus, aber einige Quellen empfehlen bis zu 50 GB oder mehr, damit das Betriebssystem stabil läuft. Eine gute Option, die von den meisten virtuellen Maschinen-Apps angeboten wird, ist die Erstellung einer **dynamisch zugeordneten** Festplatte, die nach Bedarf wächst und schrumpft.

Um eine Virtual Box zu verwenden, müssen Sie:

1. Einen Installationsdatenträger oder ein Image (z.B. ISO-Datei) für das Betriebssystem, das Sie emulieren möchten, besorgen. Virtual Box kann diese nicht bereitstellen; die meisten, wie Windows-Betriebssysteme, sind kommerzielle Produkte, die nicht frei verbreitet werden können.
2. [Laden Sie den passenden Installer](https://www.virtualbox.org/wiki/Downloads) für Ihr Betriebssystem herunter und installieren Sie ihn.
3. Öffnen Sie die App; Sie werden mit einer Ansicht wie der folgenden präsentiert: ![Anwendungsfenster linke Panel listet Windows Betriebssystem und Opera TV Emulatoren. Rechtes Panel enthält mehrere Unterfenster einschließlich Allgemein, System, Anzeige, Einstellungen, Audio, Netzwerk und Vorschau.](virtualbox.png)
4. Um eine neue virtuelle Maschine zu erstellen, drücken Sie die _Neu_ Schaltfläche in der oberen linken Ecke.
5. Folgen Sie den Anweisungen und füllen Sie die folgenden Dialogfelder wie angemessen aus. Sie werden:
   1. Einen Namen für die neue virtuelle Maschine angeben
   2. Wählen, welches Betriebssystem und welche Version Sie darauf installieren
   3. Einstellen, wie viel RAM zugewiesen werden soll (wir empfehlen etwas wie 2048 MB oder 2 GB)
   4. Eine virtuelle Festplatte erstellen (Wählen Sie die Standardeinstellungen über die drei Dialogfelder _Erstellen Sie jetzt eine virtuelle Festplatte_, _VDI (virtuelles Festplatten-Image)_ und _dynamisch zugewiesen_).
   5. Den Dateispeicherort und die Größe für die virtuelle Festplatte wählen (wählen Sie einen sinnvollen Namen und Speicherort zur Aufbewahrung und für die Größe geben Sie etwa 50 GB an oder so viel, wie Sie bereit sind anzugeben).

Nun sollte die neue Virtual Box im Menü auf der linken Seite des Haupt-UI-Fensters der Virtual Box erscheinen. An diesem Punkt können Sie durch Doppelklick öffnen — sie beginnt die virtuelle Maschine zu booten, hat aber das Betriebssystem (OS) noch nicht installiert. An diesem Punkt müssen Sie das Dialogfeld auf das Installationsimage/-datenträger hinweisen, und es wird die Schritte zur Installation des Betriebssystems wie auf einer physischen Maschine durchlaufen.

![Wie man den virtual Box für ein spezifisches Betriebssystem installiert](virtualbox-installer.png)

> [!WARNING]
> Sie müssen sicherstellen, dass Sie das Betriebssystem-Image, das Sie auf der virtuellen Maschine installieren möchten, zu diesem Zeitpunkt verfügbar haben und es sofort installieren. Wenn Sie den Prozess an diesem Punkt abbrechen, kann dies die virtuelle Maschine unbrauchbar machen und dazu führen, dass sie gelöscht werden muss und erneut erstellt werden muss. Dies ist nicht fatal, aber es ist ärgerlich.

Nach Abschluss des Prozesses sollten Sie eine virtuelle Maschine haben, die ein Betriebssystem innerhalb eines Fensters auf Ihrem Host-Computer ausführt.

![Screenshot von Windows XP, gehostet in Virtual Box und laufend auf macOS](virtualbox-running.png)

Sie müssen diese virtuelle Betriebssysteminstallation genauso behandeln, wie Sie jede reale Installation behandeln würden — zum Beispiel, ebenso wie die Installation der Browser, die Sie testen möchten, installieren Sie ein Antivirenprogramm, um es vor Viren zu schützen.

Eine Vielzahl von virtuellen Maschinen ist besonders nützlich, insbesondere für Windows IE/Edge-Tests — auf Windows können Sie nicht mehrere Versionen des Standardbrowsers nebeneinander installieren, also möchten Sie möglicherweise eine Bibliothek von virtuellen Maschinen aufbauen, um verschiedene Tests durchzuführen, z.B.:

- Windows 10 mit Edge 14
- Windows 10 mit Edge 13

> [!NOTE]
> Ein weiterer guter Punkt von virtuellen Maschinen ist, dass die virtuellen Festplatten-Images ziemlich eigenständig sind. Wenn Sie in einem Team arbeiten, können Sie ein virtuelles Festplatten-Image erstellen und es dann kopieren und weitergeben. Stellen Sie nur sicher, dass Sie die erforderlichen Lizenzen haben, um all diese Kopien von Windows oder was auch immer Sie laufen zu lassen, wenn es sich um ein lizenziertes Produkt handelt.

### Automatisierung und kommerzielle Apps

Wie im letzten Kapitel erwähnt, können Sie sich eine Menge Ärger beim Browser-Tests ersparen, indem Sie ein Automatisierungssystem verwenden. Sie können Ihr eigenes Testautomatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte App der Wahl), was einige Einrichtung erfordert, aber sehr lohnend sein kann, wenn Sie es herausgefunden haben.

Es gibt auch kommerzielle Tools wie [Sauce Labs](https://saucelabs.com/), [Browser Stack](https://www.browserstack.com/) und [LambdaTest](https://www.lambdatest.com/), die dies für Sie übernehmen, ohne dass Sie sich um die Einrichtung kümmern müssen, wenn Sie bereit sind, etwas Geld in Ihre Tests zu investieren.

Eine weitere Alternative ist die Verwendung von No-Code-Testautomatisierungstools wie [Endtest](https://www.endtest.io/).

Wir werden uns später im Modul anschauen, wie solche Tools verwendet werden.

## Benutzertests

Bevor wir weitermachen, beenden wir diesen Artikel mit einigen Worten zu Benutzertests — das kann eine gute Option sein, wenn Sie eine willige Benutzergruppe haben, um Ihre neue Funktionalität darauf zu testen. Beachten Sie, dass dies so einfach oder so anspruchsvoll sein kann, wie Sie möchten — Ihre Benutzergruppe könnte eine Gruppe von Freunden, eine Gruppe von Kollegen oder eine Gruppe von unbezahlten oder bezahlten Freiwilligen sein, je nachdem, ob Sie Geld für das Testen ausgeben möchten.

Im Allgemeinen bringen Sie Ihre Benutzer dazu, sich die Seite oder Ansicht mit der neuen Funktionalität auf einem Entwicklungsserver anzusehen, damit Sie die endgültige Webseite oder Änderung nicht live schalten müssen, bis sie fertig ist. Sie sollten sie dazu bringen, einige Schritte zu befolgen und die Ergebnisse, die sie erhalten, zu berichten. Es ist nützlich, eine Reihe von Schritten (manchmal als Script bezeichnet) bereitzustellen, sodass Sie verlässlichere Ergebnisse in Bezug auf das erhalten, was Sie testen wollten. Wir haben dies im Abschnitt [Was werden Sie testen](#was_sie_testen_werden) oben erwähnt — es ist einfach, die dort genannten Testkriterien in Schritte umzuwandeln, die zu befolgen sind. Zum Beispiel, das Folgende würde für einen sehenden Benutzer funktionieren:

- Klicken Sie einige Male mit der Maus auf die Schaltfläche mit dem Fragezeichen auf Ihrem Desktop-Computer. Aktualisieren Sie das Browserfenster.
- Wählen und aktivieren Sie die Schaltfläche mit dem Fragezeichen mit der Tastatur auf Ihrem Desktop-Computer ein paar Mal.
- Tippen Sie ein paar Mal mit Ihrem Touch-Screen-Gerät auf die Fragezeichenschaltfläche.
- Das Umschalten der Schaltfläche sollte das Informationsfeld erscheinen/verschwinden lassen. Tut es das in jedem der oben genannten drei Fälle?
- Ist der Text lesbar?
- Animiert das Informationsfeld sanft ein, wenn es erscheint/verschwindet?

Beim Durchführen von Tests kann es auch eine gute Idee sein:

- Ein separates Browserprofil einzurichten, wo immer möglich, mit deaktivierten Browsererweiterungen und ähnlichen Dingen, und Ihre Tests in diesem Profil auszuführen (siehe [Den Profil-Manager zum Erstellen und Entfernen von Firefox-Profilen verwenden](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) und [Chrome mit anderen teilen oder Personas hinzufügen](https://support.google.com/chrome/answer/2364824), zum Beispiel).
- Die private Modusfunktionalität des Browsers beim Ausführen von Tests zu verwenden, wo verfügbar (z.B. [Privates Browsen](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) in Firefox, [Inkognito-Modus](https://support.google.com/chrome/answer/95464) in Chrome), damit Dinge wie Cookies und temporäre Dateien nicht gespeichert werden.

Diese Schritte sind darauf ausgelegt, sicherzustellen, dass der Browser, den Sie testen, so "rein" wie möglich ist, d.h. dass nichts installiert ist, das die Testergebnisse beeinflussen könnte.

> [!NOTE]
> Eine weitere nützliche einfache Option, wenn Sie die Hardware verfügbar haben, ist, Ihre Seiten auf Low-End-Telefonen/anderen Geräten zu testen — da Seiten größer werden und mehr Effekte enthalten, besteht eine höhere Wahrscheinlichkeit, dass die Seite langsamer wird, weshalb Sie der Leistung mehr Aufmerksamkeit widmen müssen. Der Versuch, Ihre Funktionalität auf einem Low-End-Gerät lauffähig zu machen, erhöht die Wahrscheinlichkeit, dass die Erfahrung auf höherwertigen Geräten gut ist.

> [!NOTE]
> Einige serverseitige Entwicklungsumgebungen bieten nützliche Mechanismen für Rollouts, die Änderungen auf der Seite nur an einem Teil der Benutzer aktivieren und so einen nützlichen Mechanismus bereitstellen, um eine Funktion von einer Teilmenge von Benutzern testen zu lassen, ohne dass ein separater Entwicklungsserver benötigt wird. Ein Beispiel dafür sind [Django Waffle Flags](https://github.com/django-waffle/django-waffle).

## Zusammenfassung

Nach dem Lesen dieses Artikels sollten Sie jetzt eine gute Vorstellung davon haben, was Sie tun können, um Ihr Zielpublikum/Ihre Zielbrowserliste zu identifizieren und dann effektiv Cross-Browser-Tests auf dieser Liste durchzuführen.

Als nächstes werden wir uns den tatsächlichen Codeproblemen zuwenden, die Ihre Tests aufdecken könnten, beginnend mit HTML und CSS.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}
