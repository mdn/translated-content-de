---
title: Strategien zur Durchführung von Tests
short-title: Testing strategies
slug: Learn_web_development/Extensions/Testing/Testing_strategies
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
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
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; ein Verständnis der
        grundlegenden
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Tests</a>.
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

Da Sie nicht jede Kombination aus Browser und Gerät testen können, reicht es aus, sicherzustellen, dass Ihre Website auf den wichtigsten funktioniert. In praktischen Anwendungen bedeutet "wichtig" oft "häufig von der Zielgruppe genutzt".

Sie können Browser und Geräte nach dem Umfang der Unterstützung klassifizieren, die Sie bereitstellen möchten. Zum Beispiel:

1. A-Grad: Häufige/moderne Browser — Bekanntermaßen leistungsfähig. Gründlich testen und volle Unterstützung bieten.
2. B-Grad: Ältere/weniger leistungsfähige Browser — Bekanntermaßen nicht leistungsfähig. Testen und ein grundlegendes Erlebnis bieten, das vollen Zugang zu den Kerninformationen und Dienstleistungen bietet.
3. C-Grad: Seltene/unbekannte Browser — nicht testen, aber annehmen, dass sie leistungsfähig sind. Die vollständige Website bereitstellen, die zumindest mit den durch defensives Codieren bereitgestellten Fallbacks funktionieren sollte.

In den folgenden Abschnitten werden wir ein Unterstützungsdiagramm in diesem Format erstellen.

> [!NOTE]
> Yahoo machte diesen Ansatz mit ihrem [Graded Browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support) populär.

### Vorhersage der am häufigsten genutzten Browser Ihrer Zielgruppe

Dies beinhaltet normalerweise informierte Vermutungen basierend auf Benutzerdemografie. Zum Beispiel, wenn Ihre Benutzer in Nordamerika und Westeuropa sind:

Eine kurze Online-Suche sagt Ihnen, dass die meisten Menschen in Nordamerika und Westeuropa Windows- oder Mac-Desktops/Laptops nutzen, wo die Hauptbrowser Chrome, Firefox, Safari und Edge sind. Sie würden wahrscheinlich nur die neuesten Versionen dieser Browser testen wollen, da diese regelmäßig Updates erhalten. Diese sollten alle in die A-Grad-Kategorie eingeordnet werden.

Die meisten Menschen in dieser Demografie nutzen auch entweder iOS- oder Android-Telefone, also würden Sie wahrscheinlich die neuesten Versionen von iOS Safari, die letzten paar Versionen des alten Android-Standardbrowsers sowie Chrome und Firefox für iOS und Android testen wollen. Idealerweise sollten Sie diese sowohl auf einem Telefon als auch einem Tablet testen, um sicherzustellen, dass responsive Designs funktionieren.

Opera Mini ist nicht sehr fähig, komplexes JavaScript auszuführen, daher sollten wir diesen ebenfalls in den B-Grad einordnen.

Wir haben unsere Auswahl, welche Browser getestet werden sollen, auf den Browsern basiert, die wir von unseren Benutzern erwarten, die diese nutzen. Das gibt uns bisher folgendes Unterstützungsdiagramm:

1. A-Grad: Chrome und Firefox für Windows/Mac, Safari für Mac, Edge für Windows, iOS Safari für iPhone/iPad, Android-Standardbrowser (letzte zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (letzte zwei Versionen) auf Telefon/Tablet
2. B-Grad: Opera Mini
3. C-Grad: n/a

Sollte sich Ihre Zielgruppe hauptsächlich anderswo befinden, könnten die am häufigsten genutzten Browser und Betriebssysteme von dem oben genannten abweichen.

> [!NOTE]
> "Der Geschäftsführer meines Unternehmens benutzt ein Blackberry, also sollten wir sicherstellen, dass es darauf gut aussieht" kann ebenfalls in Betracht gezogen werden.

### Browser-Statistiken

Einige Websites zeigen, welche Browser in einer bestimmten Region beliebt sind. Zum Beispiel gibt [Statcounter](https://gs.statcounter.com/) einen Eindruck von Trends in Nordamerika.

### Verwendung von Analysen

Eine viel genauere Datenquelle, wenn Sie dazu Zugang haben, ist eine Analytik-App wie [Google Analytics](https://marketingplatform.google.com/about/analytics/), die Ihnen genau sagt, welche Browser die Leute verwenden, um Ihre Website zu durchsuchen. Natürlich setzt dies voraus, dass Sie bereits eine Website haben, um sie zu nutzen; es ist also nicht gut für völlig neue Websites geeignet.

Sie könnten auch in Betracht ziehen, Open-Source- und datenschutzorientierte Analyseplattformen wie [Open Web Analytics](https://www.openwebanalytics.com/) und [Matomo](https://matomo.org/) zu verwenden. Sie erwarten, dass die Analytik-Plattform selbst gehostet wird.

#### Einrichtung von Google Analytics

1. Zuerst benötigen Sie ein Google-Konto. Verwenden Sie dieses Konto, um sich bei [Google Analytics](https://marketingplatform.google.com/about/analytics/) anzumelden.
2. Wählen Sie die Option [Google Analytics](https://analytics.google.com/analytics/web/) (Web) und klicken Sie auf die Schaltfläche _Anmelden_.
3. Geben Sie Ihre Website/App-Details in die Anmeldeseite ein. Dies ist relativ intuitiv einzurichten; das wichtigste Feld ist die Website-URL, die korrekt sein muss. Diese sollte die Haupt-URL Ihrer Site/App sein.
4. Sobald Sie alles ausgefüllt haben, drücken Sie die Schaltfläche _Tracking-ID abrufen_ und akzeptieren Sie die erscheinenden Nutzungsbedingungen.
5. Die nächste Seite bietet Ihnen einige Code-Snippets und andere Anweisungen. Für eine grundlegende Website müssen Sie den _Website-Tracking_-Codeblock kopieren und in alle verschiedenen Seiten einfügen, die Sie mithilfe von Google Analytics auf Ihrer Website tracken möchten. Sie könnten die Snippets unter Ihrem abschließenden `</body>`-Tag platzieren oder an einer anderen geeigneten Stelle, um zu verhindern, dass sie mit Ihrem Anwendungscode vermischt werden.
6. Laden Sie die Änderungen auf den Entwicklungsserver hoch oder wohin auch immer Ihr Code benötigt wird.

Das war's! Ihre Website sollte jetzt bereit sein, Analysedaten zu melden.

#### Untersuchung der Analysedaten

Nun sollten Sie in der Lage sein, zur [Analytics Web](https://analytics.google.com/analytics/web/)-Homepage zurückzukehren und die Daten zu studieren, die Sie über Ihre Website gesammelt haben (natürlich müssen Sie ein wenig Zeit lassen, damit tatsächlich einige Daten gesammelt werden).

Standardmäßig sollten Sie das Berichts-Tab sehen, wie folgt:

![Wie Google Analytics Daten in seinem Hauptberichtsdashboard sammelt](analytics-reporting.png)

Es gibt eine riesige Menge an Daten, die Sie mit Google Analytics untersuchen könnten — angepasste Berichte in verschiedenen Kategorien usw. — und wir haben nicht die Zeit, alles zu besprechen. [Erste Schritte mit Analytics](https://support.google.com/analytics/answer/9304153) bietet einige nützliche Anleitungen zur Berichterstellung (und mehr) für Anfänger.

Sie können sehen, welche Browser und Betriebssysteme Ihre Benutzer verwenden, indem Sie _Zielgruppen > Technologie > Browser & OS_ aus dem linken Menü auswählen.

> [!NOTE]
> Wenn Sie Google Analytics verwenden, müssen Sie sich vor irreführenden Verzerrungen hüten, z. B. "Wir haben keine Firefox Mobile-Benutzer", könnte Sie dazu verleiten, sich nicht die Mühe zu machen, Firefox Mobile zu unterstützen. Aber Sie werden keine Firefox Mobile-Benutzer haben, wenn die Seite von Anfang an auf Firefox Mobile kaputt war.

### Weitere Überlegungen

Sie sollten Barrierefreiheit als Erfordernis für Tests der Klasse A einbeziehen.

Ebenso sollten Sie sich der situationsspezifischen Bedürfnisse bewusst sein. Wenn Ihr Produkt beispielsweise einen Markt anspricht, in dem Mobiltelefone das primäre Mittel zum Zugriff auf das Internet sind, sollten Sie wahrscheinlich die Unterstützung mobiler Browser priorisieren.

### Endgültiges Unterstützungsdiagramm

Unser endgültiges Unterstützungsdiagramm wird am Ende wie folgt aussehen:

1. A-Grad: Chrome und Firefox für Windows/Mac, Safari für Mac und Edge (letzte zwei Versionen von jedem), iOS Safari für iPhone/iPad, Android-Standardbrowser (letzte zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (letzte zwei Versionen) auf Telefon/Tablet. Barrierefreiheit, die gängige Tests besteht.
2. B-Grad: Opera Mini.
3. C-Grad: Opera, andere moderne Nischenbrowser.

## Was werden Sie testen?

Wenn Sie eine neue Ergänzung zu Ihrem Code haben, die getestet werden muss, sollten Sie, bevor Sie mit dem Testen beginnen, eine Liste mit Testanforderungen schreiben, die bestanden werden müssen, um akzeptiert zu werden. Diese Anforderungen können visuell oder funktional sein - beide zusammen ergeben ein benutzbares Website-Feature.

Betrachten Sie das folgende Beispiel (sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html) an und auch das [Beispiel live in Aktion](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)):

![Wie man ein Testszenario mit den Design- und Benutzeranforderungen vorbereitet](sliding-box-demo.png)

Testkriterien für dieses Feature könnten so geschrieben werden:

A und B-Grad:

- Die Schaltfläche sollte durch das primäre Steuerungsmechanismus des Benutzers aktiviert werden können, was auch immer es ist — dies sollte Maus, Tastatur und Touch umfassen.
- Das Umschalten der Schaltfläche sollte die Informationsbox erscheinen/verschwinden lassen.
- Der Text sollte lesbar sein.
- Sehbehinderte Benutzer, die Bildschirmleser verwenden, sollten in der Lage sein, auf den Text zuzugreifen.

A-Grad:

- Die Informationsbox sollte flüssig animiert werden, während sie erscheint/verschwindet.
- Der Verlauf und der Textschatten sollten erscheinen, um das Aussehen der Box zu verbessern.

Sie könnten bemerken, dass die Schaltfläche mit nur der Tastatur nicht nutzbar ist. Wir könnten das mit JavaScript beheben, um eine Tastatursteuerung für das Umschalten zu implementieren, oder eine andere Lösung verwenden.

Diese Testkriterien sind nützlich, weil:

- Sie Ihnen einen Satz von Schritten geben, denen Sie folgen können, wenn Sie Tests durchführen.
- Sie leicht in Anweisungen für Benutzergruppen umgewandelt werden können, denen Benutzer folgen sollen, wenn sie Tests durchführen (z. B. "Versuchen Sie, die Schaltfläche mit Ihrer Maus zu aktivieren, und dann mit der Tastatur") — siehe [Benutzertests](#benutzertests), unten.
- Sie auch als Grundlage für das Schreiben automatisierter Tests dienen können. Es ist einfacher, solche Tests zu schreiben, wenn Sie genau wissen, was Sie testen möchten und was die Erfolgsbedingungen sind (siehe [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#selenium), später in der Serie).

## Aufbau eines Testlabors

Eine Möglichkeit, Browser-Tests durchzuführen, besteht darin, die Tests selbst durchzuführen. Dazu verwenden Sie wahrscheinlich eine Kombination aus echten physischen Geräten und emulierten Umgebungen (entweder mit einem Emulator oder einer virtuellen Maschine).

### Physische Geräte

Es ist im Allgemeinen besser, ein echtes Gerät mit dem Browser zu haben, den Sie testen möchten – dies bietet die größte Genauigkeit in Bezug auf Verhalten und allgemeines Benutzererlebnis. Sie werden wahrscheinlich etwas wie die folgende Ausrüstung für ein angemessenes Low-Level-Gerätelabor wünschen:

- Ein Mac, mit den installierten Browsern, die Sie testen müssen — dies kann Firefox, Chrome, Opera und Safari umfassen.
- Ein Windows-PC, mit den installierten Browsern, die Sie testen müssen — dies kann Edge (oder IE), Chrome, Firefox und Opera umfassen.
- Ein Android-Telefon und -Tablet mit höherer Spezifikation mit den installierten Browsern, die Sie testen müssen — dies kann Chrome, Firefox und Opera Mini für Android sowie den originalen Android-Standardbrowser umfassen.
- Ein iOS-Telefon und -Tablet mit höherer Spezifikation mit den installierten Browsern, die Sie testen müssen — dies kann iOS Safari und Chrome, Firefox und Opera Mini für iOS umfassen.

Die folgenden Optionen sind ebenfalls gut, wenn Sie sie bekommen können:

- Ein Linux-PC, verfügbar, falls Sie spezifische Fehler in Linux-Versionen von Browsern testen müssen. Linux-Benutzer verwenden häufig Firefox, Opera und Chrome. Wenn Sie nur eine Maschine zur Verfügung haben, könnten Sie in Betracht ziehen, eine Dual-Boot-Maschine einzurichten, die Linux und Windows auf separaten Partitionen ausführt. Der Ubuntu-Installer macht das ziemlich einfach; sehen Sie sich [WindowsDualBoot](https://help.ubuntu.com/community/WindowsDualBoot) an, um Unterstützung dabei zu erhalten.
- Ein paar mobile Geräte mit niedriger Spezifikation, um die Performance von Features wie Animationen auf weniger leistungsstarken Prozessoren zu testen.

Ihre Hauptarbeitsmaschine kann auch ein Ort sein, um andere Tools für spezielle Zwecke zu installieren, wie z. B. Werkzeuge für Barrierefreiheitsaudits, Bildschirmleser und Emulatoren/virtuelle Maschinen.

Einige größere Unternehmen haben Geräteslabore, die eine sehr große Auswahl an verschiedenen Geräten bereithalten, um Entwicklern zu ermöglichen, Bugs auf sehr spezifischen Browser-/Gerätekombinationen zu jagen. Kleinere Unternehmen und Einzelpersonen können sich in der Regel kein so ausgeklügeltes Labor leisten und behelfen sich daher mit kleineren Laboren, Emulatoren, virtuellen Maschinen und kommerziellen Test-Apps.

Wir werden jede der anderen Optionen unten behandeln.

> [!NOTE]
> Es wurden einige Anstrengungen unternommen, um öffentlich zugängliche Geräteslabore zu schaffen — siehe [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/).

> [!NOTE]
> Wir müssen auch die Barrierefreiheit in Betracht ziehen — es gibt eine Reihe nützlicher Tools, die Sie auf Ihrem Computer installieren können, um Barrierefreiheits-Tests zu unterstützen, aber wir werden diese im Artikel zum Umgang mit häufigen Barrierefreiheitsproblemen, später im Kurs, behandeln.

### Emulatoren

Emulatoren sind im Grunde Programme, die auf Ihrem Computer laufen und ein Gerät oder bestimmte Gerätezustände irgendeiner Art emulieren, sodass Sie einige Ihrer Tests bequemer durchführen können, anstatt eine bestimmte Kombination aus Hardware/Software finden zu müssen, um zu testen.

Ein Emulator könnte so einfach sein wie das Testen eines Gerätezustands. Wenn Sie beispielsweise ein schnelles und einfaches Testen Ihrer Breiten-/Höhen-Medienabfragen für responsives Design durchführen möchten, können Sie den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) von Firefox verwenden. Safari bietet ebenfalls einen ähnlichen Modus, der aktiviert werden kann, indem man zu _Safari > Einstellungen_ geht und das _Entwicklungsmenü einblenden_ aktiviert und dann _Entwickeln > Responsive Design Mode aktivieren_ auswählt. Chrome hat ebenfalls etwas Ähnliches: den Gerätemodus (siehe [Simulate Mobile Devices with Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)).

Oftmals müssen Sie jedoch einen Emulator installieren. Die häufigsten Geräte/Browser, die Sie testen möchten, sind die folgenden:

- Die offizielle [Android Studio IDE](https://developer.android.com/studio/) für die Entwicklung von Android-Apps ist ein wenig schwergewichtig, nur um Websites auf Google Chrome oder dem alten Android-Standardbrowser zu testen, aber sie kommt mit einem robusten [Emulator](https://developer.android.com/studio/run/emulator.html). Wenn Sie etwas Leichteres möchten, ist [Andy](https://www.andyroid.net/) eine vernünftige Option, die auf sowohl Windows als auch Mac läuft.
- Apple bietet eine App namens [Simulator](https://help.apple.com/simulator/mac/current/) an, die auf der Entwicklungsumgebung [XCode](https://developer.apple.com/xcode/) läuft und iPad/iPhone/Apple Watch/Apple TV emuliert. Dies umfasst auch den nativen iOS Safari-Browser. Leider läuft dies nur auf einem Mac.

Sie können oft Simulatoren für andere mobile Geräteumgebungen finden, zum Beispiel:

- Sie können Opera Mini alleine emulieren, wenn Sie ihn testen möchten.

> [!NOTE]
> Viele Emulatoren erfordern tatsächlich den Einsatz einer virtuellen Maschine (siehe unten); in solchen Fällen werden oft Anleitungen bereitgestellt, und/oder die Nutzung der virtuellen Maschine ist in den Installer des Emulators integriert.

### Virtuelle Maschinen

Virtuelle Maschinen sind Anwendungen, die auf Ihrem Desktop-Computer laufen und es Ihnen ermöglichen, ganze Betriebssysteme zu emulieren, die jeweils in ihrem eigenen virtuellen Laufwerk kappen:(oft dargestellt durch eine einzelne große Datei, die auf der Festplatte des Host-Computers existiert). Es gibt eine Reihe beliebter virtueller Maschinen-Apps, wie [Parallels](https://www.parallels.com/), [VMware](https://www.vmware.com/) und [Virtual Box](https://www.virtualbox.org/wiki/Downloads); wir bevorzugen persönlich Letzteres, da es kostenlos ist.

> [!NOTE]
> Sie benötigen viel freien Speicherplatz auf der Festplatte, um virtuelle Maschinen-Emulationen auszuführen; jedes Betriebssystem, das Sie emulieren, kann viel Speicherplatz beanspruchen. Sie wählen im Allgemeinen den Speicherplatz aus, den Sie für jede Installation wünschen; Sie könnten mit wahrscheinlich 10 GB auskommen, aber einige Quellen empfehlen 50 GB oder mehr, damit das Betriebssystem zuverlässig läuft. Eine gute Option, die die meisten virtuellen Maschinen-Apps bieten, besteht darin, ein **dynamisch zugewiesenes** Laufwerk zu erstellen, das sich nach Bedarf vergrößert und verkleinert.

Um eine Virtual Box zu verwenden, müssen Sie:

1. Einen Installationsdatenträger oder ein Image (z. B. ISO-Datei) für das Betriebssystem, das Sie emulieren möchten, beschaffen. Virtual Box kann diese nicht bereitstellen; die meisten Betriebssysteme, wie Windows OS, sind kommerzielle Produkte, die nicht frei verteilt werden können.
2. [Den entsprechenden Installer herunterladen](https://www.virtualbox.org/wiki/Downloads) für Ihr Betriebssystem und installieren.
3. Öffnen der App; Sie werden mit einer Ansicht wie der folgenden konfrontiert sein: ![Anwendungsfenster linkes Panel listet Windows-Betriebssystem und Opera TV-Emulatoren. Rechtes Panel enthält mehrere Unterpanels, einschließlich allgemeiner System-, Anzeige-, Audio-, Netzwerk- und Vorschauoptionen.](virtualbox.png)
4. Um eine neue virtuelle Maschine zu erstellen, drücken Sie die Schaltfläche _Neu_ in der oberen linken Ecke.
5. Folgen Sie den Anweisungen und füllen Sie die folgenden Dialogfelder entsprechend aus. Sie werden:

   1. Einen Namen für die neue virtuelle Maschine angeben
   2. Wählen, welches Betriebssystem und welche Version Sie installieren
   3. Wie viel RAM zugewiesen werden soll (wir empfehlen etwa 2048 MB oder 2 GB)
   4. Ein virtuelles Laufwerk erstellen (wählen Sie die Standardoptionen über die drei Dialogfelder mit _Erstellen eines virtuellen Laufwerks jetzt_, _VDI (Virtual Disk Image)_ und _Dynamisch zugeteilt_).
   5. Den Dateistandort und die Größe für das virtuelle Laufwerk wählen (wählen Sie einen sinnvollen Namen und Standort, um es zu speichern, und für die Größe geben Sie etwa 50 GB an oder so viel, wie Sie bereit sind, anzugeben).

Jetzt sollte die neue virtuelle Box im linken Menü des Hauptbenutzeroberflächenfensters von Virtual Box erscheinen. An diesem Punkt können Sie doppelklicken, um es zu öffnen – es wird beginnen, die virtuelle Maschine zu starten, aber es wird noch nicht das Betriebssystem (OS) installiert haben. An diesem Punkt müssen Sie das Dialogfeld auf das Installations-Image/die Festplatte verweisen, und es wird die Schritte zur Installation des Betriebssystems wie auf einer physischen Maschine durchlaufen.

![Wie man die virtuelle Box für ein bestimmtes Betriebssystem installiert](virtualbox-installer.png)

> [!WARNING]
> Sie müssen sicherstellen, dass Sie das Betriebssystem-Image, das Sie auf der virtuellen Maschine installieren möchten, an diesem Punkt zur Verfügung haben und sofort installieren. Wenn Sie den Vorgang an diesem Punkt abbrechen, kann dies die virtuelle Maschine unbrauchbar machen und dazu führen, dass Sie sie löschen und neu erstellen müssen. Dies ist nicht fatal, aber ärgerlich.

Nachdem der Prozess abgeschlossen ist, sollten Sie eine virtuelle Maschine haben, die ein Betriebssystem innerhalb eines Fensters auf Ihrem Host-Computer ausführt.

![Screenshot von Windows XP, gehostet in Virtual Box und ausgeführt auf macOS](virtualbox-running.png)

Sie müssen diese virtuelle Betriebssysteminstallation genauso behandeln, wie Sie eine reale Installation behandeln würden – zum Beispiel sollten Sie neben der Installation der Browser, die Sie testen möchten, auch ein Antivirenprogramm installieren, um sie vor Viren zu schützen.

Es ist sehr nützlich, mehrere virtuelle Maschinen zu haben, insbesondere für Windows IE/Edge-Tests – unter Windows können Sie nicht mehrere Versionen des Standardbrowsers nebeneinander installiert haben, sodass Sie möglicherweise eine Bibliothek von virtuellen Maschinen erstellen möchten, um verschiedene Tests durchzuführen, z. B.:

- Windows 10 mit Edge 14
- Windows 10 mit Edge 13

> [!NOTE]
> Ein weiterer Vorteil von virtuellen Maschinen ist, dass die virtuellen Festplatten-Images relativ eigenständig sind. Wenn Sie in einem Team arbeiten, können Sie ein virtuelles Festplatten-Image erstellen, es dann kopieren und weitergeben. Stellen Sie jedoch sicher, dass Sie die erforderlichen Lizenzen haben, um alle diese Kopien von Windows oder was auch immer Sie ausführen, wenn es ein lizenziertes Produkt ist.

### Automatisierungs- und kommerzielle Apps

Wie bereits im letzten Kapitel erwähnt, können Sie mit der Nutzung eines Automatisierungssystems eine Menge der Mühe aus den Browser-Tests herausnehmen. Sie können Ihr eigenes Testautomatisierungssystem einrichten (Selenium ist die beliebte App der Wahl), das zwar eine gewisse Einrichtung erfordert, aber sehr lohnend sein kann, wenn Sie es hinbekommen.

Es gibt auch kommerzielle Tools wie [Sauce Labs](https://saucelabs.com/), [Browser Stack](https://www.browserstack.com/) und [LambdaTest](https://www.lambdatest.com/), die diese Art von Aufgaben für Sie erledigen, ohne dass Sie sich um die Einrichtung kümmern müssen, wenn Sie bereit sind, etwas Geld in Ihre Tests zu investieren.

Eine weitere Alternative ist die Nutzung von No-Code-Testautomatisierungstools wie [Endtest](https://www.endtest.io/).

Wir werden später im Modul darauf eingehen, wie man solche Tools verwendet.

## Benutzertests

Bevor wir weitermachen, beenden wir diesen Artikel mit der Diskussion über Benutzertests – dies kann eine gute Option sein, wenn Sie eine willige Benutzergruppe haben, die Ihre neue Funktionalität testet. Bedenken Sie, dass dies so unkompliziert oder komplex sein kann, wie Sie möchten – Ihre Benutzergruppe könnte eine Gruppe von Freunden, Kollegen oder eine Gruppe unbezahlter oder bezahlter Freiwilliger sein, abhängig davon, ob Sie Geld für Tests ausgeben können.

Im Allgemeinen werden Sie Ihre Benutzer die Seite oder den Anzeigebereich mit der neuen Funktionalität auf irgendeinem Entwicklungsserver ansehen lassen, sodass Sie die endgültige Website oder Änderung nicht live schalten, bevor sie fertig ist. Sie sollten sie einige Schritte ausführen und die Ergebnisse melden lassen. Es ist hilfreich, eine Reihe von Schritten bereitzustellen (manchmal als ein Skript bezeichnet), damit Sie zuverlässigere Ergebnisse erhalten, die sich auf das beziehen, was Sie testen wollten. Wir haben dies im Abschnitt [Was werden Sie testen](#what_are_you_going_to_test) oben erwähnt – es ist einfach, die dort detaillierten Testkriterien in Schritte umzuwandeln, die befolgt werden sollen. Zum Beispiel könnte Folgendes für einen sehenden Benutzer funktionieren:

- Klicken Sie mit der Maus auf die Fragezeichen-Schaltfläche auf Ihrem Desktop-Computer mehrmals. Aktualisieren Sie das Browserfenster.
- Wählen und aktivieren Sie die Fragezeichen-Schaltfläche mit der Tastatur auf Ihrem Desktop-Computer mehrmals.
- Tippen Sie die Fragezeichen-Schaltfläche mehrmals auf Ihrem Touchscreen-Gerät an.
- Das Umschalten der Schaltfläche sollte die Informationsbox erscheinen/verschwinden lassen. Macht es das in jedem der oben genannten drei Fälle?
- Ist der Text lesbar?
- Animiert die Informationsbox flüssig, während sie erscheint/verschwindet?

Beim Ausführen von Tests kann es auch eine gute Idee sein:

- Ein separates Browserprofil dort einzurichten, wo möglich, mit deaktivierten Browsererweiterungen und anderen solchen Dingen, und die Tests in diesem Profil auszuführen (siehe [Verwendung des Profilmanagers zum Erstellen und Entfernen von Firefox-Profilen](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) und [Teilen von Chrome mit anderen oder Hinzufügen von Personas](https://support.google.com/chrome/answer/2364824), zum Beispiel).
- Die private Modus-Funktionalität des Browsers zu verwenden, wenn Sie Tests ausführen, wenn verfügbar (z. B. [Private Browsing](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) in Firefox, [Incognito-Modus](https://support.google.com/chrome/answer/95464) in Chrome), damit Dinge wie Cookies und temporäre Dateien nicht gespeichert werden.

Diese Schritte sollen sicherstellen, dass der Browser, in dem Sie testen, so "rein" wie möglich ist, d.h. es ist nichts installiert, das die Testergebnisse beeinflussen könnte.

> [!NOTE]
> Eine weitere nützliche lo-fi-Option, wenn Sie die entsprechende Hardware zur Verfügung haben, ist es, Ihre Websites auf Geräten mit niedrigem Ende zu testen – da Websites größer werden und mehr Effekte enthalten, besteht eine höhere Wahrscheinlichkeit, dass die Website langsamer wird, sodass Sie mehr Erwägungen über die Performance machen müssen. Der Versuch, Ihre Funktionalität auf einem Gerät mit niedrigem Ende zum Laufen zu bringen, wird die Wahrscheinlichkeit erhöhen, dass das Erlebnis auf Geräten mit höherem Ende gut ist.

> [!NOTE]
> Einige serverseitige Entwicklungsumgebungen bieten nützliche Mechanismen, um Änderungen an der Website nur für eine Teilmenge von Benutzern bereitzustellen, was einen nützlichen Mechanismus darstellt, um eine Funktion von einer Teilmenge von Benutzern testen zu lassen, ohne einen separaten Entwicklungsserver zu benötigen. Ein Beispiel ist [Django Waffle Flags](https://github.com/jazzband/django-waffle).

## Zusammenfassung

Nach dem Lesen dieses Artikels sollten Sie nun eine gute Vorstellung davon haben, was Sie tun können, um Ihre Zielgruppen/Zielbrowserliste zu identifizieren und dann effektiv Cross-Browser-Tests auf dieser Liste durchzuführen.

Als Nächstes werden wir uns den tatsächlichen Codeproblemen zuwenden, die Ihre Tests aufdecken könnten, beginnend mit HTML und CSS.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}
