---
title: Strategien zur Durchführung von Tests
slug: Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Introduction","Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS", "Learn/Tools_and_testing/Cross_browser_testing")}}

Dieser Artikel erklärt, wie Cross-Browser-Testing durchgeführt wird: wie man auswählt, welche Browser und Geräte getestet werden sollen, wie man diese Browser und Geräte tatsächlich testet und wie man mit Benutzergruppen testet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen; eine Vorstellung der
        <a
          href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >grundlegenden Prinzipien des Cross-Browser-Testing</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis der grundlegenden Konzepte des Cross-Browser-Testing zu gewinnen.
      </td>
    </tr>
  </tbody>
</table>

## Auswahl der zu testenden Browser und Geräte

Da man nicht jede Kombination von Browser und Gerät testen kann, reicht es, wenn man sicherstellt, dass die Website auf den wichtigsten funktioniert. In der praktischen Anwendung bedeutet "wichtig" oft "häufig von der Zielgruppe genutzt".

Sie können Browser und Geräte nach dem Maß an Unterstützung klassifizieren, das Sie geben möchten. Zum Beispiel:

1. A-Grad: Häufige/moderne Browser — als fähig bekannt. Gründlich testen und volle Unterstützung bieten.
2. B-Grad: Ältere/weniger fähige Browser — als nicht fähig bekannt. Testen und eine einfachere Erfahrung bieten, die vollen Zugriff auf die Kerninformationen und -dienstleistungen bietet.
3. C-Grad: Seltene/unbekannte Browser — nicht testen, aber annehmen, dass sie fähig sind. Die vollständige Website bereitstellen, die funktionieren sollte, zumindest mit den durch unser defensives Codieren bereitgestellten Rückfallebenen.

In den folgenden Abschnitten werden wir ein Unterstützungsdiagramm in diesem Format erstellen.

> [!NOTE]
> Yahoo machte diesen Ansatz zuerst populär mit ihrem [Graded Browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support) Ansatz.

### Prognostizieren der am häufigsten genutzten Browser Ihrer Zielgruppe

Dies beinhaltet typischerweise fundierte Vermutungen basierend auf demografischen Daten der Nutzer. Nehmen wir zum Beispiel an, Ihre Nutzer sind in Nordamerika und Westeuropa:

Eine schnelle Online-Suche zeigt Ihnen, dass die meisten Menschen in Nordamerika und Westeuropa Windows- oder Mac-Desktops/Laptops nutzen, wobei die Hauptbrowser Chrome, Firefox, Safari und Edge sind. Sie würden wahrscheinlich nur die neuesten Versionen dieser Browser testen wollen, da diese regelmäßig aktualisiert werden. Diese sollten alle in den A-Grad eingeordnet werden.

Die meisten Menschen in dieser demografischen Gruppe verwenden auch entweder iOS- oder Android-Telefone, daher möchten Sie wahrscheinlich die neuesten Versionen von iOS Safari, die letzten beiden Versionen des alten Android-Standardbrowsers sowie Chrome und Firefox für iOS und Android testen. Idealerweise sollten Sie diese sowohl auf einem Telefon als auch auf einem Tablet testen, um sicherzustellen, dass responsive Designs funktionieren.

Opera Mini ist nicht sehr fähig, komplexes JavaScript auszuführen, daher sollten wir es ebenfalls in die B-Klasse einordnen.

So haben wir unsere Auswahl der zu testenden Browser auf den Browsern basiert, von denen wir erwarten, dass sie von unseren Nutzern verwendet werden.
Dies gibt uns die folgende Unterstützungsübersicht:

1. A-Grad: Chrome und Firefox für Windows/Mac, Safari für Mac, Edge für Windows, iOS Safari für iPhone/iPad, Android-Standardbrowser (letzte zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (letzte zwei Versionen) auf Telefon/Tablet
2. B-Grad: Opera Mini
3. C-Grad: n/a

Wenn Ihre Zielgruppe hauptsächlich woanders angesiedelt ist, können die am häufigsten genutzten Browser und Betriebssysteme von den oben genannten abweichen.

> [!NOTE]
> "Der CEO meines Unternehmens benutzt ein Blackberry, also sollten wir sicherstellen, dass es darauf gut aussieht" kann auch etwas sein, das man in Betracht zieht.

### Browser-Statistiken

Einige Websites zeigen, welche Browser in einer bestimmten Region beliebt sind. Zum Beispiel gibt [Statcounter](https://gs.statcounter.com/) einen Eindruck von Trends in Nordamerika.

### Nutzung von Analysen

Eine viel genauere Datenquelle, wenn Sie darauf zugreifen können, ist eine Analyse-App wie [Google Analytics](https://marketingplatform.google.com/about/analytics/), die Ihnen genau sagt, welche Browser die Leute verwenden, um Ihre Seite zu durchsuchen. Natürlich setzt dies voraus, dass Sie bereits eine Website haben, um sie darauf verwenden zu können, sodass es für völlig neue Websites nicht geeignet ist.

Sie könnten auch in Betracht ziehen, quelloffene und datenschutzorientierte Analyseplattformen wie [Open Web Analytics](https://www.openwebanalytics.com/) und [Matomo](https://matomo.org/) zu verwenden. Sie erwarten, dass Sie die Analyseplattform selbst hosten.

#### Google Analytics einrichten

1. Zuerst benötigen Sie ein Google-Konto. Verwenden Sie dieses Konto, um sich bei [Google Analytics](https://marketingplatform.google.com/about/analytics/) anzumelden.
2. Wählen Sie die [Google Analytics](https://analytics.google.com/analytics/web/) (Web)-Option und klicken Sie auf den _Anmelden_ Button.
3. Geben Sie Ihre Website-/App-Details auf der Anmeldeseite ein. Dies ist relativ intuitiv einzurichten; das wichtigste Feld, das Sie richtig ausfüllen sollten, ist die Website-URL. Dies muss die Stamm-URL Ihrer Seite/App sein.
4. Wenn Sie alle Angaben ausgefüllt haben, drücken Sie den Button _Tracking-ID abrufen_ und akzeptieren die angezeigten Nutzungsbedingungen.
5. Die nächste Seite bietet Ihnen einige Code-Snippets und andere Anweisungen. Für eine einfache Website müssen Sie den Codeblock _Website-Tracking_ kopieren und auf all die verschiedenen Seiten einfügen, die Sie mit Google Analytics auf Ihrer Seite verfolgen möchten. Sie könnten die Snippets unterhalb Ihres schließenden `</body>`-Tags platzieren oder an einem anderen geeigneten Ort, damit sie nicht mit Ihrem Anwendungs-Code vermischt werden.
6. Laden Sie die Änderungen auf den Entwicklungsserver hoch, oder wo auch immer Sie Ihren Code benötigen.

Das war's! Ihre Seite sollte nun bereit sein, Analysedaten zu melden.

#### Analysedaten studieren

Nun sollten Sie in der Lage sein, zur [Analytics Web](https://analytics.google.com/analytics/web/) Startseite zurückzukehren und die Daten zu betrachten, die Sie über Ihre Seite gesammelt haben (Sie müssen natürlich ein wenig Zeit lassen, damit einige Daten tatsächlich gesammelt werden).

Standardmäßig sollten Sie den Reporting-Tab sehen, wie folgt:

![Wie Google Analytics Daten in seinem Hauptberichtsdashboard sammelt](analytics-reporting.png)

Es gibt eine große Menge an Daten, die Sie mit Google Analytics betrachten könnten — angepasste Berichte in verschiedenen Kategorien usw. — und wir haben keine Zeit, alles zu besprechen.
[Getting started with Analytics](https://support.google.com/analytics/answer/9304153) bietet einige nützliche Hinweise zu Berichten (und mehr) für Anfänger.

Sie können sehen, welche Browser und Betriebssysteme Ihre Nutzer verwenden, indem Sie _Audience > Technology > Browser & OS_ aus dem linken Menü auswählen.

> [!NOTE]
> Bei der Verwendung von Google Analytics müssen Sie sich vor irreführenden Voreingenommenheiten hüten, z. B. "Wir haben keine Firefox Mobile-Nutzer", könnte dazu führen, dass Sie sich nicht um die Unterstützung für Firefox Mobile kümmern. Aber Sie werden keine Firefox Mobile-Nutzer haben, wenn die Seite von Anfang an auf Firefox Mobile nicht funktionierte.

### Andere Überlegungen

Sie sollten Barrierefreiheit als eine Testanforderung der Stufe A einschließen (wir werden genau erklären, was Sie in unserem Artikel [Umgang mit häufigen Barrierefreiheitsproblemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility) testen sollten).

Außerdem sollten Sie sich der situationsspezifischen Bedürfnisse bewusst sein. Wenn Ihr Produkt z. B. einen Markt anspricht, auf dem Mobiltelefone das primäre Mittel zur Internetnutzung sind, sollten Sie wahrscheinlich die Unterstützung mobiler Browser priorisieren.

### Endgültiges Unterstützungsdiagramm

Unser endgültiges Unterstützungsdiagramm sieht also wie folgt aus:

1. A-Grad: Chrome und Firefox für Windows/Mac, Safari für Mac, und Edge (jeweils die letzten zwei Versionen), iOS Safari für iPhone/iPad, Android-Standardbrowser (jeweils die letzten zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (jeweils die letzten zwei Versionen) auf Telefon/Tablet. Barrierefreiheit, die allgemeine Tests besteht.
2. B-Grad: Opera Mini.
3. C-Grad: Opera, andere Nischenbrowser.

## Was werden Sie testen?

Wenn Sie eine neue Ergänzung zu Ihrem Code haben, die getestet werden muss, sollten Sie, bevor Sie mit dem Testen beginnen, eine Liste von Testanforderungen aufschreiben, die bestehen müssen, um akzeptiert zu werden. Diese Anforderungen können visuell oder funktional sein — beide zusammen ergeben eine benutzbare Website-Funktion.

Betrachten Sie das folgende Beispiel (sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html) und auch das [Beispiel, das live läuft](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html) an):

![Wie man ein Testszenario mit Design- und Benutzeranforderungen vorbereitet](sliding-box-demo.png)

Die Testkriterien für diese Funktion könnten wie folgt geschrieben werden:

A- und B-Grad:

- Die Taste sollte durch den primären Steuermechanismus des Benutzers aktiviert werden können, egal welcher es ist — dies sollte Maus, Tastatur und Berührung einschließen.
- Das Umschalten der Taste sollte die Informationsbox erscheinen/verschwinden lassen.
- Der Text sollte lesbar sein.
- Sehbehinderte Benutzer, die Bildschirmleser verwenden, sollten in der Lage sein, auf den Text zuzugreifen.

A-Grad:

- Die Informationsbox sollte sich sanft animieren, während sie erscheint/verschwindet.
- Der Farbverlauf und der Textschatten sollten das Aussehen der Box verbessern.

Sie könnten bemerken, dass die Taste nicht nur mit der Tastatur bedienbar ist. Wir könnten dies mit JavaScript beheben, um eine Tastatursteuerung für das Umschalten zu implementieren, oder einen anderen Ansatz verwenden.

Diese Testkriterien sind nützlich, weil:

- Sie Ihnen eine Reihe von Schritten geben, denen Sie folgen können, wenn Sie Tests durchführen.
- Sie leicht in Anweisungen für Benutzergruppen umgewandelt werden können, denen Sie beim Testen folgen müssen (z. B. "Versuchen Sie, die Taste mit Ihrer Maus zu aktivieren und dann mit der Tastatur…") — siehe [Benutzer-Tests](#benutzer-tests) unten.
- Sie auch als Grundlage für das Schreiben von automatisierten Tests dienen können. Es ist einfacher, solche Tests zu schreiben, wenn Sie genau wissen, was Sie testen möchten und was die Erfolgskriterien sind (siehe [Selenium](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment#selenium), später in der Serie).

## Zusammensetzen eines Testlabors

Eine Option für den Browser-Test ist es, die Tests selbst durchzuführen. Dazu werden Sie wahrscheinlich eine Kombination aus tatsächlichen physischen Geräten und emulierten Umgebungen (mit entweder einem Emulator oder einer virtuellen Maschine) verwenden.

### Physische Geräte

Es ist im Allgemeinen besser, ein echtes Gerät zu haben, das den Browser ausführt, den Sie testen möchten — dies bietet die größte Genauigkeit in Bezug auf Verhalten und allgemeine Benutzererfahrung. Sie möchten wahrscheinlich so etwas wie das Folgende für ein vernünftiges niedrigstufiges Gerätelabor:

- Einen Mac mit den Browsern, die Sie testen müssen — dies kann Firefox, Chrome, Opera und Safari einschließen.
- Einen Windows-PC mit den Browsern, die Sie testen müssen — dies kann Edge (oder IE), Chrome, Firefox und Opera einschließen.
- Ein Android-Telefon und Tablet mit höherem technischem Standard, mit den zu testenden Browsern — dazu kann Chrome, Firefox und Opera Mini für Android sowie der ursprüngliche Android-Standardbrowser gehören.
- Ein iOS-Telefon und Tablet mit höherem technischem Standard, mit den zu testenden Browsern — dazu kann iOS Safari, Chrome, Firefox und Opera Mini für iOS gehören.

Die folgenden Optionen sind ebenfalls gut, wenn Sie sie bekommen können:

- Einen Linux-PC, falls Sie bugspezifische Tests für Linux-Versionen von Browsern durchführen müssen. Linux-Nutzer verwenden häufig Firefox, Opera und Chrome. Wenn Sie nur einen Rechner zur Verfügung haben, könnten Sie in Betracht ziehen, einen Dual-Boot-Rechner zu erstellen, der Linux und Windows auf separaten Partitionen ausführt. Der Ubuntu-Installer macht dies ziemlich einfach einzurichten; siehe [WindowsDualBoot](https://help.ubuntu.com/community/WindowsDualBoot) für Hilfe dabei.
- Ein paar Mobilgeräte mit niedrigerem technischen Standard, damit Sie die Leistung von Funktionen wie Animationen auf weniger leistungsstarken Prozessoren testen können.

Ihre Hauptarbeitsmaschine kann auch ein Ort sein, um andere Tools für besondere Zwecke zu installieren, wie Instrumente zur Zugänglichkeitsprüfung, Bildschirmleser und Emulatoren/virtuelle Maschinen.

Einige größere Unternehmen haben Gerätemanagementlabore, die eine sehr große Auswahl an verschiedenen Geräten lagern, was Entwicklern ermöglicht, Fehler bei sehr spezifischen Browser-/Gerätekombinationen zu finden. Kleinere Unternehmen und Einzelpersonen können sich in der Regel kein so ausgefeiltes Labor leisten, sie begnügen sich daher meist mit kleineren Laboren, Emulatoren, virtuellen Maschinen und kommerziellen Test-Apps.

Wir werden jede der anderen Optionen unten behandeln.

> [!NOTE]
> Einige Anstrengungen wurden unternommen, um öffentlich zugängliche Gerätemanagementlabore zu schaffen — siehe [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/).

> [!NOTE]
> Wir müssen auch die Zugänglichkeit berücksichtigen — es gibt eine Reihe nützlicher Tools, die Sie auf Ihrem Rechner installieren können, um das Testen auf Barrierefreiheit zu erleichtern. Wir werden diese jedoch im Artikel über den Umgang mit häufigen Barrierefreiheitsproblemen im Verlauf des Kurses behandeln.

### Emulatoren

Emulatoren sind im Grunde Programme, die auf Ihrem Computer laufen und ein Gerät oder bestimmte Gerätebedingungen irgendeiner Art emulieren, sodass Sie einige Ihrer Tests bequemer durchführen können, als eine bestimmte Kombination aus Hardware/Software zum Testen zu finden.

Ein Emulator könnte so einfach sein wie das Testen einer Gerätebedingung. Zum Beispiel, wenn Sie einige schnelle und einfache Tests Ihrer Breiten-/Höhenmedienabfragen für responsive Designs durchführen möchten, könnten Sie den [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) von Firefox verwenden. Safari hat auch einen ähnlichen Modus, der durch Aufrufen von _Safari > Preferences_ und Aktivieren des Kontrollkästchens _Show Develop menu_, dann Auswahl von _Develop > Enter Responsive Design Mode_ aktiviert werden kann. Chrome hat auch etwas Ähnliches: den Gerätemodus (siehe [Simulate Mobile Devices with Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)).

Öfter jedoch müssen Sie irgendeine Art von Emulator installieren. Die gängigsten Geräte/Browser, die Sie testen möchten, sind wie folgt:

- Das offizielle [Android Studio IDE](https://developer.android.com/studio/) für die Entwicklung von Android-Apps ist etwas schwergewichtig, um nur Websites auf Google Chrome oder dem alten Stock Android Browser zu testen, aber es enthält einen robusten [Emulator](https://developer.android.com/studio/run/emulator.html). Wenn Sie etwas leichteres möchten, ist [Andy](https://www.andyroid.net/) eine angemessene Option, die sowohl unter Windows als auch auf dem Mac läuft.
- Apple bietet eine App namens [Simulator](https://help.apple.com/simulator/mac/current/) an, die auf der Entwicklungsumgebung [XCode](https://developer.apple.com/xcode/) läuft und iPad/iPhone/Apple Watch/Apple TV emuliert. Dies schließt den nativen iOS Safari Browser ein. Leider läuft dies nur auf einem Mac.

Sie können häufig auch Emulatoren für andere mobile Geräteumgebungen finden, zum Beispiel:

- Sie können Opera Mini allein emulieren, wenn Sie es testen möchten.

> [!NOTE]
> Viele Emulatoren erfordern tatsächlich die Verwendung einer virtuellen Maschine (siehe unten); wenn dies der Fall ist, werden oft Anweisungen bereitgestellt und/oder die Verwendung der virtuellen Maschine ist in den Installer des Emulators integriert.

### Virtuelle Maschinen

Virtuelle Maschinen sind Anwendungen, die auf Ihrem Desktop-Computer laufen und es Ihnen ermöglichen, Emulationen von gesamten Betriebssystemen auszuführen, die jeweils in ihrer eigenen virtuellen Festplatte abgeschottet sind (oft dargestellt durch eine einzige große Datei, die auf der Festplatte des Host-Computers existiert). Es gibt eine Reihe populärer virtueller Maschinen-Apps, wie [Parallels](https://www.parallels.com/), [VMWare](https://www.vmware.com/) und [Virtual Box](https://www.virtualbox.org/wiki/Downloads); uns gefällt besonders letzteres, weil es kostenlos ist.

> [!NOTE]
> Sie benötigen viel freien Speicherplatz auf der Festplatte, um virtuelle Maschinen-Emulationen auszuführen; jedes Betriebssystem, das Sie emulieren, kann viel Speicherplatz beanspruchen. Sie neigen dazu, den zusätzlichen Speicherplatz auszuwählen, den Sie für jede Installation benötigen; mit 10GB könnten Sie auskommen, aber einige Quellen empfehlen bis zu 50GB oder mehr, damit das Betriebssystem zuverlässig läuft. Eine gute Option, die von den meisten virtuellen Maschinen-Apps geboten wird, ist es, eine **dynamisch zugewiesene** Festplatte zu erstellen, die wächst und sich verkleinert, je nach Bedarf.

Um ein Virtual Box zu verwenden, müssen Sie:

1. Einen Installer-Datenträger oder ein Image (z. B. eine ISO-Datei) für das Betriebssystem, das Sie emulieren möchten, besorgen. Virtual Box kann diese nicht bereitstellen; die meisten, wie Windows-Betriebssysteme, sind kommerzielle Produkte, die nicht frei vertrieben werden können.
2. [Laden Sie das geeignete Installationsprogramm herunter](https://www.virtualbox.org/wiki/Downloads) für Ihr Betriebssystem und installieren Sie es.
3. Öffnen Sie die App; Sie werden mit einer Ansicht wie der folgenden konfrontiert sein: ![Anwendungsfenster: Links im Panel sind Windows-Betriebssystem und Opera TV-Emulatoren aufgeführt. Rechts im Panel gibt es mehrere Unterpanels, einschließlich allgemein, System, Anzeige, Einstellungen, Audio, Netzwerk und eine Vorschau.](virtualbox.png)
4. Um eine neue virtuelle Maschine zu erstellen, drücken Sie die Schaltfläche _Neu_ in der oberen linken Ecke.
5. Folgen Sie den Anweisungen und füllen Sie die folgenden Dialogfelder entsprechend aus. Sie werden:

   1. Einen Namen für die neue virtuelle Maschine angeben
   2. Wählen, welches Betriebssystem und welche Version Sie darauf installieren
   3. Festlegen, wie viel RAM zugeordnet werden soll (wir würden etwas wie 2048MB oder 2GB empfehlen)
   4. Eine virtuelle Festplatte erstellen (wählen Sie die Standardoptionen in den drei Dialogfeldern, die _Create a virtual hard disk now_, _VDI (virtual disk image)_ und _Dynamically allocated_ enthalten).
   5. Den Speicherort und die Größe der virtuellen Festplatte wählen (wählen Sie einen sinnvollen Namen und Ort, um sie zu speichern, und für die Größe geben Sie etwa 50GB an, oder so viel, wie Sie comfortably specifying können).

Nun sollte das neue Virtual Box im linken Menü des Hauptfensters der Virtual Box-Benutzeroberfläche erscheinen. An diesem Punkt können Sie doppelklicken, um es zu öffnen — es wird beginnen, die virtuelle Maschine zu starten, aber es wird noch nicht das Betriebssystem (OS) installiert haben. An diesem Punkt müssen Sie das Dialogfeld auf das Installer-Bild/-Disk zeigen, und es durchläuft die Schritte zur Installation des OS genauso, wie auf einer physischen Maschine.

![Wie man das Virtual Box für ein bestimmtes Betriebssystem installiert](virtualbox-installer.png)

> [!WARNING]
> Sie müssen sicherstellen, dass Sie das Betriebssystemabbild, das Sie auf der virtuellen Maschine installieren möchten, an diesem Punkt verfügbar haben und es sofort installieren. Wenn Sie den Prozess an diesem Punkt abbrechen, kann dies die virtuelle Maschine unbrauchbar machen und dazu führen, dass Sie sie löschen und erneut erstellen müssen. Dies ist nicht fatal, aber es ist ärgerlich.

Nachdem der Prozess abgeschlossen ist, sollten Sie eine virtuelle Maschine haben, die ein Betriebssystem in einem Fenster auf Ihrem Host-Computer ausführt.

![Screenshot von Windows XP, gehostet in Virtual Box und auf macOS ausgeführt](virtualbox-running.png)

Sie müssen diese virtuelle Betriebssysteminstallation genauso behandeln wie jede andere Installation — beispielsweise sollten Sie, ebenso wie die Browser, die Sie testen möchten, ein Antivirus-Programm installieren, um sich vor Viren zu schützen.

Mehrere virtuelle Maschinen zu haben, ist besonders nützlich für Windows IE/Edge-Tests — auf Windows können Sie nicht mehrere Versionen des Standardbrowsers parallel installieren, daher möchten Sie möglicherweise eine Bibliothek virtueller Maschinen aufbauen, um verschiedene Tests bei Bedarf durchzuführen, z. B.:

- Windows 10 mit Edge 14
- Windows 10 mit Edge 13

> [!NOTE]
> Ein weiterer Vorteil virtueller Maschinen ist, dass die virtuellen Festplatten-Images ziemlich eigenständig sind. Wenn Sie in einem Team arbeiten, können Sie ein virtuelles Festplatten-Image erstellen, es dann kopieren und weitergeben. Stellen Sie nur sicher, dass Sie die erforderlichen Lizenzen haben, um all diese Kopien von Windows oder was auch immer Sie ausführen, wenn es sich um ein lizenziertes Produkt handelt, auszuführen.

### Automatisierung und kommerzielle Anwendungen

Wie im letzten Kapitel erwähnt, können Sie sich mit einem Automatisierungssystem eine Menge Mühe beim Browser-Testing ersparen. Sie können Ihr eigenes Testautomatisierungssystem einrichten (Selenium ist die beliebte App der Wahl), was einige Einrichtung erfordert, aber sehr lohnend sein kann, wenn es funktioniert.

Es gibt auch kommerzielle Tools wie [Sauce Labs](https://saucelabs.com/), [Browser Stack](https://www.browserstack.com/) und [LambdaTest](https://www.lambdatest.com/), die diese Art von Dingen für Sie übernehmen, ohne dass Sie sich um die Einrichtung kümmern müssen, wenn Sie Geld in Ihr Testing investieren möchten.

Eine weitere Alternative ist die Nutzung von No-Code-Testautomatisierungstools wie [Endtest](https://www.endtest.io/).

Wir werden uns später im Modul damit beschäftigen, wie man solche Tools verwendet.

## Benutzer-Tests

Bevor wir weitermachen, möchten wir diesen Artikel mit ein paar Worten zu Benutzer-Tests abschließen — dies kann eine gute Option sein, wenn Sie eine willige Benutzergruppe haben, um Ihre neuen Funktionen zu testen. Bedenken Sie, dass dies so einfach oder aufwändig sein kann, wie Sie möchten — Ihre Benutzergruppe könnte aus einer Gruppe von Freunden, einer Gruppe von Kollegen oder einer Gruppe von unbezahlten oder bezahlten Freiwilligen bestehen, je nachdem, ob Sie Geld für das Testen ausgeben können.

Im Allgemeinen lassen Sie Ihre Nutzer die Seite oder Ansicht mit der neuen Funktionalität auf einem Entwicklungsserver betrachten, sodass Sie die endgültige Website oder Änderung nicht live stellen, bis sie abgeschlossen ist. Sie sollten sie dazu bringen, einige Schritte zu befolgen und die Ergebnisse, die sie erhalten, zu melden. Es ist nützlich, eine Reihe von Schritten (manchmal als Skript bezeichnet) bereitzustellen, damit Sie verlässlichere Ergebnisse erhalten, die sich auf das beziehen, was Sie testen wollten. Wir haben dies im Abschnitt [Was werden Sie testen](#what_are_you_going_to_test) oben erwähnt — es ist einfach, die dort beschriebenen Testkriterien in Schritte zu verwandeln, die verfolgt werden müssen. Zum Beispiel würde das Folgende für einen sehenden Benutzer funktionieren:

- Klicken Sie ein paar Mal auf die Fragezeichenschaltfläche mit der Maus auf Ihrem Desktop-Computer. Aktualisieren Sie das Browserfenster.
- Wählen und aktivieren Sie die Fragezeichenschaltfläche ein paar Mal mit der Tastatur auf Ihrem Desktop-Computer.
- Tippen Sie ein paar Mal auf die Fragezeichenschaltfläche auf Ihrem Touchscreen-Gerät.
- Das Umschalten der Schaltfläche sollte die Informationsbox erscheinen/verschwinden lassen. Tut es das in jedem der oben genannten drei Fälle?
- Ist der Text lesbar?
- Bewegt sich die Informationsbox sanft, wenn sie erscheint/verschwindet?

Beim Ausführen von Tests kann es auch eine gute Idee sein:

- Richten Sie so weit wie möglich ein separates Browserprofil ein, mit deaktivierten Browsererweiterungen und anderen solchen Dingen, und führen Sie Ihre Tests in diesem Profil durch (siehe [Use the Profile Manager to create and remove Firefox profiles](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) und [Share Chrome with others or add personas](https://support.google.com/chrome/answer/2364824), zum Beispiel).
- Verwenden Sie die Funktionalität des privaten Browsens des Browsers, wenn Sie Tests durchführen, wo verfügbar (z. B. [Private Browsing](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) in Firefox, [Incognito Mode](https://support.google.com/chrome/answer/95464) in Chrome), sodass Dinge wie Cookies und temporäre Dateien nicht gespeichert werden.

Diese Schritte sollen sicherstellen, dass der von Ihnen getestete Browser so "rein" wie möglich ist, d. h. dass nichts installiert ist, das die Testergebnisse beeinflussen könnte.

> [!NOTE]
> Eine weitere nützliche Option mit geringerem Aufwand, wenn Sie die Hardware zur Verfügung haben, ist es, Ihre Websites auf Low-End-Telefonen/anderen Geräten zu testen — da Websites zunehmend größer werden und mehr Effekte präsentieren, besteht eine höhere Wahrscheinlichkeit, dass die Website langsamer wird. Daher müssen Sie der Leistung mehr Beachtung schenken. Die Verbesserung Ihrer Funktionalität auf einem Low-End-Gerät macht wahrscheinlich die Erfahrung auf High-End-Geräten besser.

> [!NOTE]
> Einige serverseitige Entwicklungsumgebungen bieten nützliche Mechanismen für die Einführung von Website-Änderungen für nur eine Teilmenge der Nutzer, was einen nützlichen Mechanismus bietet, um eine Funktion von einer Nutzeruntergruppe testen zu lassen, ohne dass ein separater Entwicklungsserver notwendig ist. Ein Beispiel ist [Django Waffle Flags](https://github.com/jazzband/django-waffle).

## Zusammenfassung

Nach der Lektüre dieses Artikels sollten Sie nun eine gute Vorstellung davon haben, was Sie tun können, um Ihre Zielgruppe/Ihre Zielbrowserliste zu identifizieren, und dann Cross-Browser-Tests effizient auf dieser Liste durchzuführen.

Als Nächstes werden wir uns den eigentlichen Code-Problemen zuwenden, die Ihre Tests möglicherweise aufdecken, beginnend mit HTML und CSS.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Introduction","Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS", "Learn/Tools_and_testing/Cross_browser_testing")}}
