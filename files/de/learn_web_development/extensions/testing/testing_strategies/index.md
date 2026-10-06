---
title: Strategien für die Durchführung von Tests
short-title: Testing strategies
slug: Learn_web_development/Extensions/Testing/Testing_strategies
l10n:
  sourceCommit: c529f2672b3541cc28ea687ff9266f98b1734191
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel erklärt, wie Sie browserübergreifende Tests durchführen: wie Sie die zu testenden Browser und Geräte auswählen, wie Sie diese Browser und Geräte testen und wie Sie Tests mit Benutzergruppen durchführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; ein grundlegendes
        Verständnis der
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien browserübergreifender Tests</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziel:</th>
      <td>
        Die grundlegenden Konzepte browserübergreifender Tests verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Auswahl der zu testenden Browser und Geräte

Da Sie nicht jede Kombination aus Browser und Gerät testen können, reicht es aus, sicherzustellen, dass Ihre Website auf den wichtigsten Kombinationen funktioniert. In der Praxis bedeutet „wichtig“ oft „bei der Zielgruppe häufig verwendet“.

Sie können Browser und Geräte danach einteilen, wie umfassend Sie sie unterstützen möchten. Zum Beispiel:

1. Kategorie A: Gängige, moderne Browser – sie sind bekanntermaßen in der Lage, die Website vollständig darzustellen. Testen Sie sie gründlich und bieten Sie vollständige Unterstützung.
2. Kategorie B: Ältere, weniger leistungsfähige Browser – sie sind bekanntermaßen nicht in der Lage, die Website vollständig darzustellen. Testen Sie sie und bieten Sie eine einfachere Darstellung, die uneingeschränkten Zugang zu den wichtigsten Informationen und Diensten ermöglicht.
3. Kategorie C: Seltene oder unbekannte Browser – testen Sie sie nicht, gehen Sie aber davon aus, dass sie die Website darstellen können. Stellen Sie die vollständige Website bereit; sie sollte zumindest dank der Fallbacks funktionieren, die durch vorsorgliche Programmierung vorgesehen wurden.

In den folgenden Abschnitten erstellen wir eine Übersicht der unterstützten Browser und Geräte in diesem Format.

> [!NOTE]
> Yahoo hat diesen Ansatz mit seinem Konzept der [abgestuften Browserunterstützung](https://github.com/yui/yui3/wiki/Graded-Browser-Support) bekannt gemacht.

### Ermitteln Sie, welche Browser Ihre Zielgruppe am häufigsten verwendet

In der Regel müssen Sie dazu anhand der demografischen Merkmale Ihrer Zielgruppe fundierte Annahmen treffen. Nehmen wir zum Beispiel an, Ihre Nutzer befinden sich in Nordamerika und Westeuropa:

Eine kurze Online-Recherche zeigt, dass die meisten Menschen in Nordamerika und Westeuropa Desktop-Computer oder Laptops mit Windows oder Mac verwenden. Die wichtigsten Browser dort sind Chrome, Firefox, Safari und Edge. Wahrscheinlich möchten Sie nur die neuesten Versionen dieser Browser testen, da sie regelmäßig aktualisiert werden. Sie sollten alle in Kategorie A eingeordnet werden.

Die meisten Menschen dieser Zielgruppe verwenden außerdem iOS- oder Android-Smartphones. Daher sollten Sie wahrscheinlich die neuesten Versionen von iOS Safari, die letzten Versionen des älteren Android-Standardbrowsers sowie Chrome und Firefox für iOS und Android testen. Idealerweise testen Sie diese Browser sowohl auf einem Smartphone als auch auf einem Tablet, um sicherzustellen, dass responsive Designs funktionieren.

Opera Mini kann komplexes JavaScript nur eingeschränkt ausführen. Deshalb sollten wir diesen Browser in Kategorie B einordnen.

Unsere Auswahl der zu testenden Browser basiert also darauf, welche Browser unsere Nutzer voraussichtlich verwenden. Daraus ergibt sich bisher die folgende Übersicht:

1. Kategorie A: Chrome und Firefox für Windows/Mac, Safari für Mac, Edge für Windows, iOS Safari für iPhone/iPad, der Android-Standardbrowser (die letzten zwei Versionen) auf Smartphone/Tablet sowie Chrome und Firefox für Android (die letzten zwei Versionen) auf Smartphone/Tablet
2. Kategorie B: Opera Mini
3. Kategorie C: keine Angabe

Wenn sich Ihre Zielgruppe überwiegend in einer anderen Region befindet, können die dort am häufigsten verwendeten Browser und Betriebssysteme von dieser Liste abweichen.

> [!NOTE]
> Auch eine Überlegung wie „Die Geschäftsführung meines Unternehmens verwendet ein Blackberry, also sollten wir dafür sorgen, dass die Website darauf gut aussieht“ kann eine Rolle spielen.

### Browserstatistiken

Einige Websites zeigen, welche Browser in einer bestimmten Region beliebt sind. [Statcounter](https://gs.statcounter.com/) vermittelt beispielsweise einen Eindruck von den Trends in Nordamerika.

### Analysedaten verwenden

Eine wesentlich genauere Datenquelle ist, sofern Sie darauf zugreifen können, eine Analyseanwendung wie [Google Analytics](https://marketingplatform.google.com/about/analytics/). Sie zeigt Ihnen genau, mit welchen Browsern Menschen Ihre Website besuchen. Dafür muss Ihre Website allerdings bereits existieren; für völlig neue Websites eignet sich dieser Ansatz daher nicht.

Sie können auch Open-Source-Analyseplattformen mit Schwerpunkt auf Datenschutz wie [Open Web Analytics](https://www.openwebanalytics.com/) und [Matomo](https://matomo.org/) in Betracht ziehen. Bei diesen Plattformen müssen Sie das Analysesystem selbst hosten.

#### Google Analytics einrichten

1. Zunächst benötigen Sie ein Google-Konto. Melden Sie sich damit bei [Google Analytics](https://marketingplatform.google.com/about/analytics/) an.
2. Wählen Sie die Option [Google Analytics](https://analytics.google.com/analytics/web/) (Web) und klicken Sie auf _Sign Up_.
3. Geben Sie auf der Registrierungsseite die Angaben zu Ihrer Website oder App ein. Die Einrichtung ist weitgehend selbsterklärend. Besonders wichtig ist, dass Sie die richtige Website-URL angeben: die Stamm-URL Ihrer Website oder App.
4. Wenn Sie alles ausgefüllt haben, klicken Sie auf _Get Tracking ID_ und akzeptieren Sie anschließend die angezeigten Nutzungsbedingungen.
5. Auf der nächsten Seite finden Sie Codeausschnitte und weitere Anweisungen. Für eine einfache Website kopieren Sie den Codeblock _Website tracking_ und fügen ihn auf allen Seiten Ihrer Website ein, die Sie mit Google Analytics erfassen möchten. Sie können den Code beispielsweise direkt vor dem schließenden `</body>`-Tag oder an einer anderen geeigneten Stelle platzieren, an der er nicht mit Ihrem Anwendungscode vermischt wird.
6. Laden Sie die Änderungen auf den Entwicklungsserver oder an den Ort hoch, an dem Ihr Code benötigt wird.

Das war's! Ihre Website sollte nun bereit sein, Analysedaten zu erfassen.

#### Analysedaten auswerten

Sie können nun zur Startseite von [Analytics Web](https://analytics.google.com/analytics/web/) zurückkehren und sich die Daten ansehen, die Sie über Ihre Website gesammelt haben. Geben Sie dem System natürlich zunächst etwas Zeit, tatsächlich Daten zu erfassen.

Standardmäßig sollten Sie den Tab für Berichte sehen, etwa so:

![Das Hauptdashboard für Berichte in Google Analytics](analytics-reporting.png)

Google Analytics stellt eine große Menge an Daten bereit, etwa angepasste Berichte in verschiedenen Kategorien. Wir können hier nicht alles besprechen. [Erste Schritte mit Analytics](https://support.google.com/analytics/answer/9304153) bietet Einsteigern hilfreiche Informationen zu Berichten und weiteren Funktionen.

Welche Browser und Betriebssysteme Ihre Nutzer verwenden, sehen Sie, wenn Sie im Menü auf der linken Seite _Audience > Technology > Browser & OS_ auswählen.

> [!NOTE]
> Achten Sie bei der Verwendung von Google Analytics auf irreführende Verzerrungen. Die Feststellung „Wir haben keine Nutzer von Firefox Mobile“ könnte Sie beispielsweise dazu verleiten, Firefox Mobile nicht zu unterstützen. Wenn Ihre Website auf Firefox Mobile von Anfang an nicht funktioniert, werden Sie allerdings auch keine Nutzer dieses Browsers haben.

### Weitere Überlegungen

Barrierefreiheit sollte zu den Testanforderungen der Kategorie A gehören.

Berücksichtigen Sie außerdem Anforderungen, die sich aus Ihrer konkreten Situation ergeben. Wenn Ihr Produkt beispielsweise auf einen Markt ausgerichtet ist, in dem Mobiltelefone das wichtigste Mittel für den Internetzugang sind, sollten Sie der Unterstützung mobiler Browser wahrscheinlich Vorrang geben.

### Abschließende Übersicht der unterstützten Browser und Geräte

Unsere abschließende Übersicht sieht damit wie folgt aus:

1. Kategorie A: Chrome und Firefox für Windows/Mac, Safari für Mac und Edge (jeweils die letzten zwei Versionen), iOS Safari für iPhone/iPad, der Android-Standardbrowser (die letzten zwei Versionen) auf Smartphone/Tablet sowie Chrome und Firefox für Android (die letzten zwei Versionen) auf Smartphone/Tablet. Die gängigen Tests zur Barrierefreiheit werden bestanden.
2. Kategorie B: Opera Mini.
3. Kategorie C: Opera und andere moderne Nischenbrowser.

## Was werden Sie testen?

Wenn Sie Ihrer Codebasis eine neue Funktion hinzufügen, die getestet werden muss, sollten Sie vor Beginn der Tests eine Liste mit Anforderungen erstellen, die für die Abnahme erfüllt sein müssen. Diese Anforderungen können das Erscheinungsbild oder die Funktion betreffen – beides zusammen macht eine Website-Funktion nutzbar.

Betrachten Sie das folgende Beispiel:

{{EmbedGHLiveSample("learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html", '100%', 400)}}

Die Testkriterien für diese Funktion könnten so aussehen:

Kategorie A und B:

- Die Schaltfläche mit dem Fragezeichen sollte sich mit der bevorzugten Eingabemethode der jeweiligen Nutzer aktivieren lassen, sei es per Maus, Tastatur oder Touch.
- Beim Aktivieren der Schaltfläche sollte das Informationsfeld erscheinen beziehungsweise verschwinden.
- Der Informationstext im einblendbaren Bereich sollte lesbar sein.
- Menschen mit Sehbeeinträchtigungen, die Screenreader verwenden, sollten auf den Text zugreifen können.

Kategorie A:

- Der einblendbare Bereich sollte beim Erscheinen und Verschwinden flüssig animiert sein.

Diese Testkriterien sind nützlich, weil:

- sie Ihnen konkrete Schritte für die Durchführung der Tests vorgeben.
- sie sich leicht in Anweisungen für Benutzergruppen umwandeln lassen, die Tests durchführen. Ein Beispiel wäre: „Versuchen Sie, die Schaltfläche zuerst mit der Maus und dann mit der Tastatur zu aktivieren.“ Mehr dazu erfahren Sie unten unter [Tests mit Nutzern](#tests_mit_nutzern).
- sie als Grundlage für automatisierte Tests dienen können. Solche Tests lassen sich leichter schreiben, wenn Sie genau wissen, was Sie testen möchten und welche Bedingungen für einen erfolgreichen Test erfüllt sein müssen (siehe [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#selenium) später in dieser Artikelreihe).

## Eine Testumgebung zusammenstellen

Eine Möglichkeit, Browsertests durchzuführen, besteht darin, selbst zu testen. Dafür verwenden Sie wahrscheinlich eine Kombination aus physischen Geräten und emulierten Umgebungen, die mit einem Emulator oder einer virtuellen Maschine bereitgestellt werden.

### Physische Geräte

Im Allgemeinen ist es besser, ein echtes Gerät mit dem Browser zu verwenden, den Sie testen möchten. So erhalten Sie die genauesten Ergebnisse hinsichtlich des Verhaltens und der gesamten Benutzererfahrung. Für eine einfache, zweckmäßige Sammlung von Testgeräten benötigen Sie ungefähr Folgendes:

- Einen Mac mit den Browsern, die Sie testen müssen. Dazu können Firefox, Chrome, Opera und Safari gehören.
- Einen Windows-PC mit den Browsern, die Sie testen müssen. Dazu können Edge (oder IE), Chrome, Firefox und Opera gehören.
- Ein leistungsstärkeres Android-Smartphone und -Tablet mit den Browsern, die Sie testen müssen. Dazu können Chrome, Firefox und Opera Mini für Android sowie der ursprüngliche Android-Standardbrowser gehören.
- Ein leistungsstärkeres iOS-Smartphone und -Tablet mit den Browsern, die Sie testen müssen. Dazu können iOS Safari sowie Chrome, Firefox und Opera Mini für iOS gehören.

Wenn Sie Zugriff darauf haben, sind auch die folgenden Optionen sinnvoll:

- Ein Linux-PC, falls Sie Fehler testen müssen, die speziell in Linux-Versionen von Browsern auftreten. Linux-Nutzer verwenden häufig Firefox, Opera und Chrome. Wenn Ihnen nur ein Rechner zur Verfügung steht, können Sie ein Dual-Boot-System erwägen, auf dem Linux und Windows auf getrennten Partitionen installiert sind.
- Einige weniger leistungsstarke Mobilgeräte, damit Sie die Leistung von Funktionen wie Animationen auf schwächeren Prozessoren testen können.

Auf Ihrem hauptsächlich genutzten Arbeitsrechner können Sie außerdem Werkzeuge für bestimmte Zwecke installieren, etwa Programme zur Prüfung der Barrierefreiheit, Screenreader sowie Emulatoren oder virtuelle Maschinen.

Einige größere Unternehmen unterhalten Testumgebungen mit einer sehr großen Auswahl unterschiedlicher Geräte. Damit können Entwickler Fehler auf ganz bestimmten Browser-Geräte-Kombinationen aufspüren. Kleinere Unternehmen und Einzelpersonen können sich eine so umfangreiche Testumgebung in der Regel nicht leisten. Sie nutzen daher meist eine kleinere Geräteauswahl, Emulatoren, virtuelle Maschinen und kommerzielle Testanwendungen.

Die weiteren Möglichkeiten behandeln wir im Folgenden.

> [!NOTE]
> Es gibt auch Initiativen für öffentlich zugängliche Gerätesammlungen. Weitere Informationen finden Sie unter [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/).

> [!NOTE]
> Auch Barrierefreiheit müssen wir berücksichtigen. Sie können verschiedene nützliche Werkzeuge auf Ihrem Rechner installieren, um entsprechende Tests zu erleichtern. Diese behandeln wir später im Kurs im Artikel über den Umgang mit häufigen Problemen bei der Barrierefreiheit.

### Emulatoren

Emulatoren sind Programme, die auf Ihrem Computer ausgeführt werden und ein Gerät oder bestimmte Gerätebedingungen nachbilden. Dadurch können Sie manche Tests bequemer durchführen, als wenn Sie erst eine bestimmte Kombination aus Hardware und Software beschaffen müssten.

Eine einfache Form der Emulation besteht darin, bestimmte Gerätebedingungen nachzubilden. Wenn Sie beispielsweise schnell und unkompliziert Ihre Breiten- und Höhen-Media-Queries für ein responsives Design testen möchten, können Sie den [Modus „Bildschirmgrößen testen“](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) von Firefox verwenden. Safari bietet einen ähnlichen Modus: Öffnen Sie _Safari > Preferences_, aktivieren Sie _Show Develop menu_ und wählen Sie dann _Develop > Enter Responsive Design Mode_. Chrome verfügt ebenfalls über eine vergleichbare Funktion, den Device Mode (siehe [Mobilgeräte mit Device Mode simulieren](https://developer.chrome.com/docs/devtools/device-mode/)).

Häufig müssen Sie jedoch einen Emulator installieren. Zu den Geräten und Browsern, die Sie am ehesten testen möchten, gehören:

- Die offizielle [Android Studio IDE](https://developer.android.com/studio/) für die Entwicklung von Android-Apps ist recht umfangreich, wenn Sie lediglich Websites in Google Chrome oder dem älteren Android-Standardbrowser testen möchten. Sie enthält jedoch einen leistungsfähigen [Emulator](https://developer.android.com/studio/run/emulator.html).
- Apple stellt eine Anwendung namens [Simulator](https://help.apple.com/simulator/mac/current/) bereit. Sie läuft innerhalb der Entwicklungsumgebung [Xcode](https://developer.apple.com/xcode/) und emuliert iPad, iPhone, Apple Watch und Apple TV. Dazu gehört auch der native Browser iOS Safari. Leider läuft diese Anwendung nur auf einem Mac.

Oft finden Sie auch Simulatoren für andere Mobilgeräteumgebungen, zum Beispiel:

- Sie können Opera Mini separat emulieren, wenn Sie den Browser testen möchten.

> [!NOTE]
> Viele Emulatoren benötigen eine virtuelle Maschine (siehe unten). Ist das der Fall, werden häufig entsprechende Anweisungen bereitgestellt oder die Einrichtung der virtuellen Maschine ist im Installationsprogramm des Emulators enthalten.

### Virtuelle Maschinen

Virtuelle Maschinen sind Anwendungen, die auf Ihrem Desktop-Computer laufen und die Emulation vollständiger Betriebssysteme ermöglichen. Jedes Betriebssystem befindet sich dabei auf einer eigenen virtuellen Festplatte, die häufig als einzelne große Datei auf der Festplatte des Host-Rechners gespeichert ist. Es gibt verschiedene beliebte Anwendungen für virtuelle Maschinen, darunter [Parallels](https://www.parallels.com/), [VMware](https://www.vmware.com/) und [Virtual Box](https://www.virtualbox.org/wiki/Downloads). Wir bevorzugen Letzteres, weil es kostenlos ist.

> [!NOTE]
> Für virtuelle Maschinen benötigen Sie viel freien Festplattenspeicher: Jedes emulierte Betriebssystem kann viel Platz beanspruchen. Üblicherweise legen Sie für jede Installation fest, wie viel Festplattenspeicher Sie bereitstellen möchten. Möglicherweise reichen 10 GB aus, manche Quellen empfehlen jedoch 50 GB oder mehr, damit das Betriebssystem zuverlässig läuft. Eine gute Option, die die meisten Anwendungen für virtuelle Maschinen anbieten, ist eine **dynamisch zugewiesene** Festplatte, deren belegter Speicherplatz je nach Bedarf wächst und schrumpft.

So verwenden Sie Virtual Box:

1. Besorgen Sie sich ein Installationsmedium oder ein Image, beispielsweise eine ISO-Datei, für das Betriebssystem, das Sie emulieren möchten. Virtual Box stellt diese nicht bereit. Viele Betriebssysteme, darunter Windows, sind kommerzielle Produkte und dürfen nicht frei verbreitet werden.
2. [Laden Sie das passende Installationsprogramm](https://www.virtualbox.org/wiki/Downloads) für Ihr Betriebssystem herunter und installieren Sie es.
3. Öffnen Sie die Anwendung. Sie sehen eine Ansicht wie diese: ![Im linken Bereich des Anwendungsfensters sind Emulatoren für Windows-Betriebssysteme und Opera TV aufgelistet. Rechts befinden sich mehrere Bereiche, darunter Allgemein, System, Anzeige, Einstellungen, Audio, Netzwerk und eine Vorschau.](virtualbox.png)
4. Um eine neue virtuelle Maschine zu erstellen, klicken Sie oben links auf _New_.
5. Folgen Sie den Anweisungen und füllen Sie die folgenden Dialogfelder aus. Dabei:
   1. geben Sie einen Namen für die neue virtuelle Maschine ein.
   2. wählen Sie das Betriebssystem und die Version aus, die Sie darauf installieren möchten.
   3. legen Sie fest, wie viel RAM zugewiesen werden soll. Wir empfehlen etwa 2048 MB beziehungsweise 2 GB.
   4. erstellen Sie eine virtuelle Festplatte. Wählen Sie in den drei Dialogfeldern _Create a virtual hard disk now_, _VDI (virtual disk image)_ und _Dynamically allocated_ jeweils die Standardeinstellungen.
   5. wählen Sie den Speicherort und die Größe der virtuellen Festplatte aus. Geben Sie ihr einen passenden Namen, wählen Sie einen geeigneten Speicherort und legen Sie eine Größe von etwa 50 GB fest – oder eine andere Größe, mit der Sie sich wohlfühlen.

Die neue virtuelle Maschine sollte nun im linken Menü des Hauptfensters von Virtual Box erscheinen. Sie können sie per Doppelklick öffnen. Die virtuelle Maschine startet dann, allerdings ist noch kein Betriebssystem installiert. Wählen Sie im angezeigten Dialogfeld das Installations-Image oder -Medium aus. Anschließend durchlaufen Sie die Installation des Betriebssystems wie auf einem physischen Rechner.

![Installation eines Betriebssystems in Virtual Box](virtualbox-installer.png)

> [!WARNING]
> Stellen Sie sicher, dass Ihnen das Image des Betriebssystems, das Sie in der virtuellen Maschine installieren möchten, jetzt zur Verfügung steht, und installieren Sie es direkt. Wenn Sie den Vorgang an dieser Stelle abbrechen, kann die virtuelle Maschine unbrauchbar werden. Dann müssen Sie sie löschen und neu erstellen. Das ist kein schwerwiegendes Problem, aber lästig.

Nach Abschluss des Vorgangs sollte auf Ihrem Host-Rechner in einem Fenster eine virtuelle Maschine mit einem Betriebssystem laufen.

![Screenshot von Windows XP, das in Virtual Box unter macOS ausgeführt wird](virtualbox-running.png)

Behandeln Sie die Installation des virtuellen Betriebssystems wie jede andere Betriebssysteminstallation: Installieren Sie beispielsweise neben den Browsern, die Sie testen möchten, auch ein Antivirenprogramm zum Schutz vor Viren.

Mehrere virtuelle Maschinen sind besonders für Tests mit Windows IE/Edge nützlich. Unter Windows können Sie nicht mehrere Versionen des Standardbrowsers nebeneinander installieren. Daher empfiehlt es sich, eine Sammlung virtueller Maschinen für unterschiedliche Tests anzulegen, zum Beispiel:

- Windows 10 mit Edge 14
- Windows 10 mit Edge 13

> [!NOTE]
> Ein weiterer Vorteil virtueller Maschinen ist, dass die Images ihrer virtuellen Festplatten weitgehend eigenständig sind. Wenn Sie in einem Team arbeiten, können Sie ein solches Image erstellen, kopieren und an andere Teammitglieder weitergeben. Stellen Sie lediglich sicher, dass Sie über die erforderlichen Lizenzen verfügen, um alle Kopien von Windows oder anderen lizenzpflichtigen Produkten auszuführen.

### Automatisierung und kommerzielle Anwendungen

Wie im vorherigen Kapitel erwähnt, können Sie sich Browsertests durch ein Automatisierungssystem erheblich erleichtern. Sie können ein eigenes System zur Testautomatisierung einrichten – [Selenium](https://www.selenium.dev/) ist dafür eine beliebte Wahl. Die Einrichtung erfordert etwas Aufwand, kann sich aber sehr lohnen, sobald alles funktioniert.

Es gibt auch kommerzielle Werkzeuge wie [Sauce Labs](https://saucelabs.com/) und [Browser Stack](https://www.browserstack.com/), die diese Aufgaben für Sie übernehmen. Wenn Sie bereit sind, Geld in Ihre Tests zu investieren, müssen Sie sich dadurch nicht selbst um die Einrichtung kümmern.

Eine weitere Möglichkeit sind No-Code-Werkzeuge zur Testautomatisierung wie [Endtest](https://endtest.io/).

Wie Sie solche Werkzeuge verwenden, sehen wir uns später in diesem Modul an.

## Tests mit Nutzern

Bevor wir fortfahren, schließen wir diesen Artikel mit einem Blick auf Tests mit Nutzern ab. Wenn Sie eine Gruppe finden, die bereit ist, Ihre neue Funktion zu testen, kann das eine gute Möglichkeit sein. Solche Tests können so einfach oder aufwendig sein, wie Sie möchten. Je nachdem, welches Budget Ihnen zur Verfügung steht, kann Ihre Testgruppe aus Freunden, Kollegen oder ehrenamtlich beziehungsweise bezahlt Mitwirkenden bestehen.

Üblicherweise lassen Sie die Testpersonen die Seite oder Ansicht mit der neuen Funktion auf einem Entwicklungsserver aufrufen. So veröffentlichen Sie die endgültige Website oder Änderung erst, wenn alles fertig ist. Bitten Sie die Testpersonen, bestimmte Schritte auszuführen und die Ergebnisse zu melden. Eine Liste dieser Schritte, manchmal auch Skript genannt, hilft Ihnen, zuverlässigere Ergebnisse zu genau den Punkten zu erhalten, die Sie testen möchten. Das haben wir oben im Abschnitt [Was werden Sie testen?](#what_are_you_going_to_test) bereits angesprochen: Die dort beschriebenen Testkriterien lassen sich leicht in konkrete Schritte umwandeln. Für eine sehende Testperson könnten diese beispielsweise so aussehen:

- Klicken Sie auf Ihrem Desktop-Computer einige Male mit der Maus auf die Schaltfläche mit dem Fragezeichen. Laden Sie anschließend das Browserfenster neu.
- Wählen und aktivieren Sie die Schaltfläche mit dem Fragezeichen auf Ihrem Desktop-Computer einige Male mit der Tastatur.
- Tippen Sie auf Ihrem Touchscreen-Gerät einige Male auf die Schaltfläche mit dem Fragezeichen.
- Beim wiederholten Aktivieren der Schaltfläche sollte das Informationsfeld erscheinen und wieder verschwinden. Funktioniert das in allen drei genannten Fällen?
- Ist der Text lesbar?
- Ist das Informationsfeld beim Erscheinen und Verschwinden flüssig animiert?

Bei der Durchführung von Tests kann es außerdem sinnvoll sein:

- Nach Möglichkeit ein separates Browserprofil einzurichten, in dem Browsererweiterungen und Ähnliches deaktiviert sind, und die Tests in diesem Profil auszuführen (siehe beispielsweise [Firefox-Profile mit der Profilverwaltung erstellen und entfernen](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) und [Chrome mit anderen teilen oder Personas hinzufügen](https://support.google.com/chrome/answer/2364824)).
- Sofern verfügbar, die Funktion für privates Surfen des Browsers für die Tests zu verwenden, etwa [Privates Surfen](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) in Firefox oder den [Inkognitomodus](https://support.google.com/chrome/answer/95464) in Chrome. So werden beispielsweise Cookies und temporäre Dateien nicht gespeichert.

Diese Maßnahmen sollen sicherstellen, dass der getestete Browser möglichst „unverändert“ ist, also nichts installiert ist, was die Testergebnisse beeinflussen könnte.

> [!NOTE]
> Wenn Ihnen die entsprechenden Geräte zur Verfügung stehen, ist das Testen Ihrer Websites auf einfachen Smartphones oder anderen weniger leistungsfähigen Geräten eine weitere nützliche und unkomplizierte Möglichkeit. Je größer Websites werden und je mehr Effekte sie enthalten, desto eher können sie langsam werden. Deshalb sollten Sie der Leistung zunehmend Beachtung schenken. Wenn Ihre Funktion auf einem leistungsschwachen Gerät gut funktioniert, ist die Wahrscheinlichkeit größer, dass sie auch auf leistungsstärkeren Geräten eine gute Benutzererfahrung bietet.

> [!NOTE]
> Manche serverseitigen Entwicklungsumgebungen bieten nützliche Mechanismen, um Änderungen an einer Website nur für einen Teil der Nutzer bereitzustellen. So können Sie eine Funktion von ausgewählten Nutzern testen lassen, ohne einen separaten Entwicklungsserver zu benötigen. Ein Beispiel dafür ist [Django Waffle Flags](https://github.com/django-waffle/django-waffle).

## Zusammenfassung

Nach der Lektüre dieses Artikels sollten Sie eine gute Vorstellung davon haben, wie Sie Ihre Zielgruppe und die relevanten Browser ermitteln und mit dieser Auswahl wirksame browserübergreifende Tests durchführen können.

Als Nächstes befassen wir uns mit konkreten Problemen im Code, die bei Ihren Tests auftreten können, beginnend mit HTML und CSS.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}
