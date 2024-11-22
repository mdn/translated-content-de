---
title: Strategien zur Durchführung von Tests
slug: Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
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
        Ein Verständnis der grundlegenden Konzepte des Cross-Browser-Testing zu
        erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Auswahl der zu testenden Browser und Geräte

Da man nicht jede Kombination von Browser und Gerät testen kann, reicht es aus, wenn Sie sicherstellen, dass Ihre Website auf den wichtigsten funktioniert. In der Praxis bedeutet "wichtig" oft "häufig verwendet bei der Zielgruppe".

Sie können Browser und Geräte danach klassifizieren, wie viel Unterstützung Sie zu geben beabsichtigen. Zum Beispiel:

1. A-Note: Häufige/moderne Browser — Bekanntermaßen fähig. Gründlich testen und vollständige Unterstützung bieten.
2. B-Note: Ältere/weniger fähige Browser — bekannt dafür, nicht voll fähig zu sein. Testen und eine einfachere Erfahrung bieten, die vollen Zugriff auf Kerninformationen und -dienste gibt.
3. C-Note: Seltene/unbekannte Browser — nicht testen, aber annehmen, dass sie fähig sind. Die vollständige Seite bereitstellen, die funktionieren sollte, zumindest mit den durch unser defensives Codieren bereitgestellten Fallbacks.

In den folgenden Abschnitten werden wir eine Unterstützungs-Tabelle in diesem Format erstellen.

> [!NOTE]
> Yahoo machte diesen Ansatz mit ihrem [Graded Browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support) populär.

### Vorhersage der am häufigsten verwendeten Browser Ihrer Zielgruppe

Dies beinhaltet typischerweise fundierte Vermutungen basierend auf Benutzerdemografien. Wenn beispielsweise Ihre Benutzer in Nordamerika und Westeuropa sind:

Eine schnelle Online-Suche sagt Ihnen, dass die meisten Menschen in Nordamerika und Westeuropa Windows- oder Mac-Desktops/Laptops verwenden, wobei die Hauptbrowser Chrome, Firefox, Safari und Edge sind. Sie würden wahrscheinlich nur die neuesten Versionen dieser Browser testen wollen, da diese regelmäßig Updates erhalten. Diese sollten alle in die A-Note-Stufe gehen.

Die meisten Menschen in dieser demografischen Gruppe verwenden auch entweder iOS- oder Android-Telefone, also würden Sie wahrscheinlich die neuesten Versionen von iOS Safari, die letzten paar Versionen des alten Android-Standardbrowsers sowie Chrome und Firefox für iOS und Android testen wollen. Sie sollten idealerweise diese auf sowohl einem Telefon als auch einem Tablet testen, um sicherzustellen, dass responsive Designs funktionieren.

Opera Mini kann nicht sehr gut mit komplexem JavaScript umgehen, daher sollten wir dies ebenfalls in Note B einordnen.

So haben wir unsere Wahl, welche Browser getestet werden sollen, auf den Browsern basiert, die wir erwarten, dass unsere Benutzer verwenden.
Das gibt uns bisher folgende Unterstützungs-Tabelle:

1. A-Note: Chrome und Firefox für Windows/Mac, Safari für Mac, Edge für Windows, iOS Safari für iPhone/iPad, Android-Standardbrowser (die letzten zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (die letzten zwei Versionen) auf Telefon/Tablet
2. B-Note: Opera Mini
3. C-Note: nicht anwendbar

Sollte Ihre Zielgruppe hauptsächlich woanders angesiedelt sein, könnten die am häufigsten verwendeten Browser und Betriebssysteme von den obigen abweichen.

> [!NOTE]
> "Der CEO meines Unternehmens verwendet ein Blackberry, also sollten wir sicherstellen, dass es darauf gut aussieht" kann auch etwas sein, das zu berücksichtigen ist.

### Browser-Statistiken

Einige Websites zeigen, welche Browser in einer bestimmten Region populär sind. Zum Beispiel gibt [Statcounter](https://gs.statcounter.com/) einen Eindruck von Trends in Nordamerika.

### Die Nutzung von Analysen

Eine viel genauere Datenquelle, wenn Sie darauf zugreifen können, ist eine Analyse-App wie [Google Analytics](https://marketingplatform.google.com/about/analytics/), die Ihnen genau sagt, welche Browser Benutzer verwenden, um Ihre Website zu durchsuchen. Natürlich setzt dies voraus, dass Sie bereits eine Website haben, auf der Sie es verwenden können, daher ist es für komplett neue Sites nicht geeignet.

Sie können auch in Betracht ziehen, Open-Source- und datenschutzorientierte Analyseplattformen wie [Open Web Analytics](https://www.openwebanalytics.com/) und [Matomo](https://matomo.org/) zu verwenden. Diese erwarten, dass Sie die Analyseplattform selbst hosten.

#### Einrichtung von Google Analytics

1. Zuerst benötigen Sie ein Google-Konto. Verwenden Sie dieses Konto, um sich bei [Google Analytics](https://marketingplatform.google.com/about/analytics/) anzumelden.
2. Wählen Sie die Option [Google Analytics](https://analytics.google.com/analytics/web/) (Web) und klicken Sie auf die _Anmelden_-Schaltfläche.
3. Geben Sie Ihre Website/App-Daten auf der Anmeldeseite ein. Diese ist recht intuitiv einzurichten; das wichtigste Feld, das korrekt sein sollte, ist die Website-URL. Diese muss die Stamm-URL Ihrer Site/App sein.
4. Nachdem Sie alles ausgefüllt haben, drücken Sie die Schaltfläche _Tracking-ID abrufen_ und akzeptieren Sie die angezeigten Nutzungsbedingungen.
5. Auf der nächsten Seite erhalten Sie einige Code-Snippets und weitere Anweisungen. Für eine einfache Website müssen Sie den _Website-Tracking_-Codeblock kopieren und in alle verschiedenen Seiten einfügen, die Sie mit Google Analytics auf Ihrer Site verfolgen möchten. Sie könnten die Snippets unter Ihrem schließenden `</body>`-Tag platzieren oder an einer anderen geeigneten Stelle, die sicherstellt, dass es sich nicht mit Ihrem Anwendungscode vermischt.
6. Laden Sie die Änderungen auf den Entwicklungsserver hoch oder wohin auch immer Sie Ihren Code benötigen.

Das ist es! Ihre Website sollte jetzt bereit sein, Analysedaten zu melden.

#### Analyse der Analysedaten

Jetzt sollten Sie in der Lage sein, zur Startseite [Analytics Web](https://analytics.google.com/analytics/web/) zurückzukehren und die Daten anzusehen, die Sie über Ihre Website gesammelt haben (natürlich müssen Sie ein wenig Zeit verstreichen lassen, damit tatsächlich Daten gesammelt werden).

Standardmäßig sollten Sie die Berichtskarte sehen, die so aussieht:

![Wie Google Analytics Daten in seinem Hauptberichts-Dashboard sammelt](analytics-reporting.png)

Es gibt eine riesige Menge an Daten, die Sie mit Google Analytics betrachten könnten — angepasste Berichte in verschiedenen Kategorien etc. — und wir haben nicht die Zeit, alles zu besprechen.
[Erste Schritte mit Analytics](https://support.google.com/analytics/answer/9304153) bietet nützliche Anleitungen für Berichte (und mehr) für Anfänger.

Sie können sehen, welche Browser und Betriebssysteme Ihre Benutzer verwenden, indem Sie _Zielgruppe > Technologie > Browser & OS_ aus dem linken Menü auswählen.

> [!NOTE]
> Bei der Verwendung von Google Analytics müssen Sie sich vor irreführenden Verzerrungen hüten, z.B. "Wir haben keine Firefox Mobile-Benutzer" könnte Sie dazu verleiten, Firefox Mobile nicht mehr zu unterstützen. Aber Sie werden keine Firefox Mobile-Benutzer haben, wenn die Site auf Firefox Mobile von Anfang an defekt war.

### Weitere Überlegungen

Sie sollten Barrierefreiheit als A-Note-Testanforderung einbeziehen (wir werden genau behandeln, was Sie in unserem Artikel [Umgang mit häufigen Zugänglichkeitsproblemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility) testen sollten).

Außerdem sollten Sie sich der situationsspezifischen Bedürfnisse bewusst sein. Zum Beispiel, wenn Ihr Produkt einen Markt anvisiert, wo Mobiltelefone das primäre Mittel sind, um auf das Internet zuzugreifen, dann werden Sie wahrscheinlich mobile Browser-Unterstützung als Priorität sehen.

### Endgültige Unterstützungs-Tabelle

Also wird unsere endgültige Unterstützungs-Tabelle so aussehen:

1. A-Note: Chrome und Firefox für Windows/Mac, Safari für Mac und Edge (die letzten zwei Versionen von jedem), iOS Safari für iPhone/iPad, Android-Standardbrowser (die letzten zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (die letzten zwei Versionen) auf Telefon/Tablet. Barrierefreiheit, die gängige Tests besteht.
2. B-Note: Opera Mini.
3. C-Note: Opera, andere nischenmoderne Browser.

## Was werden Sie testen?

Wenn Sie eine neue Ergänzung zu Ihrem Codebase haben, die getestet werden muss, sollten Sie, bevor Sie mit den Tests beginnen, eine Liste von Testerfordernissen schreiben, die bestehen müssen, um akzeptiert zu werden. Diese Anforderungen können visuell oder funktional sein — beide zusammen bilden ein benutzbares Website-Feature.

Betrachten Sie das folgende Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html) und auch das [Beispiel livelaufend](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)):

![Wie man ein Testszenario vorbereitet, das das Design und die Benutzeranforderungen umfasst](sliding-box-demo.png)

Testkriterien für dieses Feature könnten so geschrieben werden:

A und B Note:

- Der Button sollte durch den primären Steuermechanismus des Benutzers aktivierbar sein, was auch immer dieser ist — dies sollte Maus, Tastatur und Touch umfassen.
- Durch das Umschalten des Buttons sollte das Informationsfeld erscheinen/verschwinden.
- Der Text sollte lesbar sein.
- Visuell beeinträchtigte Benutzer, die Bildschirmleser verwenden, sollten auf den Text zugreifen können.

A-Note:

- Das Informationsfeld sollte reibungslos animieren, während es erscheint/verschwindet.
- Der Verlauf und der Textschatten sollte das Erscheinungsbild der Box verbessern.

Sie werden bemerken, dass der Button nicht nur mit der Tastatur benutzbar ist. Wir könnten dies mit JavaScript beheben, um eine Tastatursteuerung für das Umschalten zu implementieren, oder einen anderen Ansatz verwenden.

Diese Testkriterien sind nützlich, weil:

- Sie Ihnen eine Reihe von Schritten geben, die Sie beim Testen befolgen können.
- Sie in Sätze von Anweisungen für Benutzergruppen leicht umgewandelt werden können, die während der Tests befolgt werden (z.B. "versuchen Sie, den Button mit Ihrer Maus zu aktivieren, und dann mit der Tastatur…") — siehe [Benutzer-Testing](#benutzer-testing) unten.
- Sie auch die Grundlage für das Schreiben automatisierter Tests bilden können. Es ist einfacher, solche Tests zu schreiben, wenn Sie genau wissen, was Sie testen wollen und was die Erfolgskonditionen sind (siehe [Selenium](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment#selenium), später in der Serie).

## Ein Testlabor zusammenstellen

Eine Option, um Browser-Tests durchzuführen, ist, die Tests selbst zu machen. Dafür verwenden Sie wahrscheinlich eine Kombination aus tatsächlichen physischen Geräten und emulierten Umgebungen (entweder mit einem Emulator oder einer virtuellen Maschine).

### Physische Geräte

In der Regel ist es besser, ein echtes Gerät zu haben, das den zu testenden Browser ausführt — das bietet die größte Genauigkeit in Bezug auf Verhalten und allgemeine Benutzererfahrung. Sie werden wahrscheinlich so etwas wie das Folgende wünschen, für ein angemessenes Gerätelabor mit niedrigem Level:

- Einen Mac mit den installierten Browsern, die Sie testen müssen — das kann Firefox, Chrome, Opera und Safari umfassen.
- Einen Windows-PC mit den installierten Browsern, die Sie testen müssen — das kann Edge (oder IE), Chrome, Firefox und Opera umfassen.
- Ein höherwertiges Android-Telefon und -Tablet mit dem installierten Browser, den Sie testen müssen — das kann Chrome, Firefox und Opera Mini für Android sowie den ursprünglichen Android-Standardbrowser umfassen.
- Ein höherwertiges iOS-Telefon und -Tablet mit den installierten Browsern, die Sie testen müssen — das kann iOS Safari sowie Chrome, Firefox und Opera Mini für iOS umfassen.

Die folgenden sind auch gute Optionen, wenn Sie sie bekommen können:

- Ein Linux-PC verfügbar, falls Sie spezifische Fehler für Linux-Versionen von Browsern testen müssen. Linux-Nutzer verwenden häufig Firefox, Opera und Chrome. Wenn Sie nur eine Maschine zur Verfügung haben, könnten Sie in Erwägung ziehen, eine Dual-Boot-Maschine zu erstellen, die Linux und Windows auf separaten Partitionen ausführt. Der Ubuntu-Installer macht dies recht einfach einzurichten; siehe [WindowsDualBoot](https://help.ubuntu.com/community/WindowsDualBoot) für Hilfe dabei.
- Ein paar mobile Geräte mit niedrigerer Spezifikation, damit Sie die Leistung von Funktionen wie Animationen auf weniger leistungsstarken Prozessoren testen können.

Ihre Hauptarbeitsmaschine kann auch ein Ort sein, um andere Tools für spezifische Zwecke zu installieren, wie Barrierefreiheit-Auditing-Tools, Bildschirmleser und Emulatoren/virtuelle Maschinen.

Einige größere Unternehmen haben Gerätelabore, die eine sehr große Auswahl an unterschiedlichen Geräten bevorraten, was Entwicklern ermöglicht, Bugs auf sehr spezifischen Browser/Geräte-Kombinationen aufzuspüren. Kleinere Unternehmen und Einzelpersonen können sich im Allgemeinen kein so ausgeklügeltes Labor leisten und tendieren dazu, mit kleineren Laboren, Emulatoren, virtuellen Maschinen und kommerziellen Test-Apps zurechtzukommen.

Wir werden jede der anderen Optionen unten behandeln.

> [!NOTE]
> Einige Anstrengungen wurden unternommen, um öffentlich zugängliche Gerätelabore zu schaffen — siehe [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/).

> [!NOTE]
> Wir müssen auch die Barrierefreiheit berücksichtigen — es gibt eine Anzahl nützlicher Tools, die Sie auf Ihrem Computer installieren können, um Barrierefreiheitstests zu unterstützen, aber wir werden diese im Artikel zum Umgang mit häufigen Barrierefreiheitsproblemen behandeln, später im Kurs.

### Emulatoren

Emulatoren sind im Grunde Programme, die auf Ihrem Computer laufen und ein Gerät oder bestimmte Gerätebedingungen irgendeiner Art emulieren, sodass Sie einige Ihrer Tests bequemer durchführen können, als wenn Sie eine bestimmte Kombination aus Hardware/Software finden müssten, um zu testen.

Ein Emulator könnte so einfach sein wie das Testen einer Gerätebedingung. Wenn Sie beispielsweise einige schnelle und einfache Tests Ihrer Breiten/Höhen-Medienelemente für Responsive Design durchführen möchten, können Sie den [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) von Firefox verwenden. Safari hat auch einen ähnlichen Modus, der aktiviert werden kann, indem man _Safari > Einstellungen_ wählt und Menü _Entwickeln anzeigen_ auswählt, dann _Entwickeln > Responsive Design Modus aktivieren_ wählt. Chrome hat auch etwas Ähnliches: Gerätemodus (siehe [Simulieren von mobilen Geräten mit Gerätemodus](https://developer.chrome.com/docs/devtools/device-mode/)).

In den meisten Fällen müssen Sie jedoch irgendeine Art von Emulator installieren. Die häufigsten Geräte/Browser, die Sie testen wollen, sind:

- Das offizielle [Android Studio IDE](https://developer.android.com/studio/) zur Entwicklung von Android-Apps ist etwas schwergewichtig, nur um Websites auf Google Chrome oder dem alten Stock Android-Browser zu testen, aber es kommt mit einem robusten [Emulator](https://developer.android.com/studio/run/emulator.html). Wenn Sie etwas leichteres wünschen, ist [Andy](https://www.andyroid.net/) eine vernünftige Option, die sowohl unter Windows als auch Mac läuft.
- Apple bietet eine App namens [Simulator](https://help.apple.com/simulator/mac/current/) an, die auf dem Entwicklungsumfeld [XCode](https://developer.apple.com/xcode/) läuft und iPad/iPhone/Apple Watch/Apple TV emuliert. Dies umfasst den nativen iOS Safari Browser. Leider läuft dies nur auf einem Mac.

Sie können häufig Simulatoren für andere mobile Geräteumgebungen finden, zum Beispiel:

- Sie können Opera Mini auf seine eigene Weise emulieren, wenn Sie ihn testen möchten.

> [!NOTE]
> Viele Emulatoren erfordern tatsächlich die Verwendung einer virtuellen Maschine (siehe unten); wenn dies der Fall ist, werden oft Anleitungen bereitgestellt, und/oder die Nutzung der virtuellen Maschine ist Teil des Installationsprogramms des Emulators.

### Virtuelle Maschinen

Virtuelle Maschinen sind Anwendungen, die auf Ihrem Desktop-Computer laufen und Ihnen erlauben, Emulationen ganzer Betriebssysteme auszuführen, jedes in seiner eigenen virtuellen Festplatte compartmentalisiert (oft durch eine einzelne große Datei auf dem Host-Computer dargestellt). Es gibt eine Reihe populärer virtueller Maschinen-Apps, wie [Parallels](https://www.parallels.com/), [VMware](https://www.vmware.com/) und [Virtual Box](https://www.virtualbox.org/wiki/Downloads); wir persönlich mögen letzteres, weil es kostenlos ist.

> [!NOTE]
> Sie benötigen viel verfügbaren Speicherplatz, um Emulationen von virtuellen Maschinen auszuführen; jedes Betriebssystem, das Sie emulieren, kann viel Speicher beanspruchen. Sie haben die Möglichkeit, den Speicherplatz zu wählen, den Sie für jede Installation verwenden möchten; Sie könnten mit wahrscheinlich 10GB auskommen, jedoch empfehlen einige Quellen bis zu 50GB oder mehr, damit das Betriebssystem zuverlässig läuft. Eine gute Option, die die meisten virtuellen Maschinen-Apps bieten, ist die Erstellung eines **dynamisch zugewiesenen** Laufwerks, das wächst und schrumpft, wie es benötigt wird.

Um Virtual Box zu verwenden, benötigen Sie:

1. Einen Installations-Disk oder ein Image (z.B. ISO-Datei) für das Betriebssystem, das Sie emulieren möchten, zu besorgen. Virtual Box kann diese nicht bereitstellen; die meisten, wie z.B. Windows OSes, sind kommerzielle Produkte, die nicht frei verteilt werden können.
2. [Den entsprechenden Installer herunterladen](https://www.virtualbox.org/wiki/Downloads) für Ihr Betriebssystem und ihn installieren.
3. Die App öffnen; Ihnen wird eine Ansicht wie die folgende präsentiert: ![Anwendungsfenster links enthält Windows-Betriebssystem- und Opera TV-Emulatoren. Rechts enthält mehrere Unterpanels einschließlich allgemein, System, Anzeige, Einstellungen, Audio, Netzwerk und eine Vorschau.](virtualbox.png)
4. Um eine neue virtuelle Maschine zu erstellen, drücken Sie die Schaltfläche _Neu_ in der oberen linken Ecke.
5. Folgen Sie den Anweisungen und füllen Sie die folgenden Dialogfelder wie erforderlich aus. Sie werden:

   1. Einen Namen für die neue virtuelle Maschine angeben
   2. Wählen, welches Betriebssystem und welche Version Sie darauf installieren
   3. Einstellen, wie viel RAM zugewiesen werden soll (wir empfehlen etwa 2048MB oder 2GB)
   4. Eine virtuelle Festplatte erstellen (wählen Sie die Standardoptionen über die drei Dialogfelder mit _Jetzt eine virtuelle Harddisk erstellen_, _VDI (virtuelle Festplatte)_ und _Dynamisch zugewiesene_)
   5. Die Dateispeicherstelle und Größe für die virtuelle Festplatte auswählen (wählen Sie einen vernünftigen Namen und Standort, um sie zu behalten, und für die Größe etwa 50GB oder so viel angeben, wie Sie bequem angeben können).

Nun sollte die neue virtuelle Box im linken Menü der Hauptansicht des Virtual Box Interface-Fensters erscheinen. An diesem Punkt können Sie darauf doppelklicken, um sie zu öffnen – sie wird beginnen, die virtuelle Maschine zu booten, hat aber noch nicht das Betriebssystem (OS) installiert. An diesem Punkt müssen Sie das Dialogfeld auf das Installations-Image/Disk verweisen und es durch die Schritte zur Installation des OS just like auf einer physischen Maschine laufen lassen.

![Wie man die Virtual Box für ein spezifisches Betriebssystem installiert](virtualbox-installer.png)

> [!WARNING]
> Sie müssen sicher sein, dass Sie das Image des Betriebssystems, das Sie auf der virtuellen Maschine installieren möchten, zu diesem Zeitpunkt verfügbar haben, und es sofort installieren. Wenn Sie den Vorgang an diesem Punkt abbrechen, kann die virtuelle Maschine unbrauchbar werden, und es kann erforderlich sein, dass Sie sie löschen und erneut erstellen müssen. Dies ist nicht fatal, aber es ist ärgerlich.

Nach Abschluss des Prozesses sollten Sie eine virtuelle Maschine haben, die ein Betriebssystem in einem Fenster auf Ihrem Host-Computer ausführt.

![Screenshot von Windows XP, gehostet in Virtual Box, und laufend auf macOS](virtualbox-running.png)

Sie müssen diese virtuelle Betriebssystem-Installation genauso behandeln, wie Sie jede reale Installation behandeln würden – zum Beispiel, ebenso wie die Browser zu installieren, die Sie testen möchten, installieren Sie ein Anti-Virus-Programm, um es vor Viren zu schützen.

Mehrere virtuelle Maschinen zu haben ist sehr nützlich, insbesondere für Tests mit Windows IE/Edge – auf Windows können Sie nicht mehrere Versionen des Standardbrowsers Seite an Seite installiert haben, so dass Sie möglicherweise eine Bibliothek virtueller Maschinen aufbauen möchten, um verschiedene Tests wie erforderlich durchzuführen, z.B.:

- Windows 10 mit Edge 14
- Windows 10 mit Edge 13

> [!NOTE]
> Ein weiterer guter Aspekt von virtuellen Maschinen ist, dass die virtuelle Disk-Abbilder recht autark sind. Wenn Sie in einem Team arbeiten, können Sie ein virtuelles Disk-Abbild erstellen, es dann kopieren und herumgeben. Stellen Sie nur sicher, dass Sie die erforderlichen Lizenzen haben, um all diese Kopien von Windows oder was auch immer Sie sonst ausführen, wenn es ein lizenziertes Produkt ist, zu betreiben.

### Automatisierung und kommerzielle Apps

Wie im letzten Kapitel erwähnt, können Sie eine Menge des Aufwands beim Browser-Testing reduzieren, indem Sie irgendeine Art von Automatisierungssystem verwenden. Sie können Ihr eigenes Testautomatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte App der Wahl), was etwas Einrichtung erfordert, aber sehr lohnend sein kann, wenn Sie es geschafft haben.

Es gibt auch kommerzielle Tools wie [Sauce Labs](https://saucelabs.com/), [Browser Stack](https://www.browserstack.com/) und [LambdaTest](https://www.lambdatest.com/), die diese Art von Dingen für Sie erledigen, ohne dass Sie sich um die Einrichtung sorgen müssen, wenn Sie etwas Geld in Ihre Tests investieren möchten.

Eine weitere Alternative sind No-Code-Testautomatisierungstools wie [Endtest](https://www.endtest.io/).

Wir werden später im Modul darauf eingehen, wie man solche Tools verwendet.

## Benutzer-Testing

Bevor wir weitermachen, beenden wir diesen Artikel, indem wir ein bisschen über Benutzer-Tests sprechen — dies kann eine gute Option sein, wenn Sie eine bereitwillige Benutzergruppe haben, auf der neuen Funktionalität zu testen. Beachten Sie, dass dies so einfach oder so ausgeklügelt sein kann, wie Sie möchten — Ihre Benutzergruppe könnte eine Gruppe von Freunden, eine Gruppe von Kollegen oder eine Gruppe von unbezahlten oder bezahlten Freiwilligen sein, je nachdem, ob Sie Geld für Tests haben oder nicht.

Im Allgemeinen werden Sie Ihre Benutzer dazu bringen, sich die Seite oder Ansicht anzusehen, die die neue Funktionalität auf irgendeinem Entwicklungsserver enthält, so dass Sie die endgültige Website oder Änderung nicht live stellen, bis sie abgeschlossen ist. Sie sollten sie dazu bringen, einige Schritte zu befolgen und die Ergebnisse zu melden, die sie erhalten. Es ist nützlich, eine Reihe von Schritten (manchmal ein Skript genannt) bereitzustellen, so dass Sie verlässlichere Ergebnisse in Bezug auf das, was Sie testen wollten, erhalten. Wir haben dies im vorherigen Abschnitt [Was werden Sie testen](#what_are_you_going_to_test) erwähnt — es ist einfach, die dort detaillierten Testkriterien in Schritte zu verwandeln, die befolgt werden können. Zum Beispiel würde das folgende für einen sehenden Benutzer funktionieren:

- Klicken Sie mehrmals auf die Fragezeichen-Schaltfläche mit der Maus auf Ihrem Desktop-Computer. Aktualisieren Sie das Browserfenster.
- Wählen Sie mehrmals die Fragezeichen-Schaltfläche mit der Tastatur auf Ihrem Desktop-Computer und aktivieren Sie sie.
- Tippen Sie mehrmals auf die Fragezeichen-Schaltfläche auf Ihrem Touchscreen-Gerät.
- Durch das Umschalten der Schaltfläche sollte das Informationsfeld erscheinen/verschwinden. Tut es dies in jedem der obigen drei Fälle?
- Ist der Text lesbar?
- Animiert sich das Informationsfeld reibungslos, während es erscheint/verschwindet?

Beim Ausführen von Tests kann es auch eine gute Idee sein:

- Richten Sie nach Möglichkeit ein separates Browserprofil ein, bei dem Browsererweiterungen und andere solche Dinge deaktiviert sind, und führen Sie Ihre Tests in diesem Profil aus (siehe [Profilmanager verwenden, um Firefox-Profile zu erstellen und zu entfernen](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) und [Chrome mit anderen teilen oder Personas hinzufügen](https://support.google.com/chrome/answer/2364824) zum Beispiel).
- Verwenden Sie die private Modus-Funktionalität des Browsers, wenn sie verfügbar ist (z.B. [Privates Surfen](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) in Firefox, [Inkognito-Modus](https://support.google.com/chrome/answer/95464) in Chrome), damit Dinge wie Cookies und temporäre Dateien nicht gespeichert werden.

Diese Schritte sind darauf ausgelegt sicherzustellen, dass der Browser, in dem Sie testen, so "rein" wie möglich ist, d.h. es ist nichts installiert, das die Testergebnisse beeinflussen könnte.

> [!NOTE]
> Eine weitere nützliche einfache Option, wenn Sie die Hardware zur Verfügung haben, ist, Ihre Websites auf Geräten niedrigeren Endes zu testen — da Websites immer größer werden und mehr Effekte aufweisen, steigt die Wahrscheinlichkeit, dass die Website langsamer wird, so dass Sie anfangen müssen, der Leistung mehr Beachtung zu schenken. Wenn Sie versuchen, Ihre Funktionalität auf einem Gerät mit niedrigerem Ende zum Laufen zu bringen, wird es wahrscheinlicher, dass die Erfahrung auf höherwertigen Geräten gut ist.

> [!NOTE]
> Einige serverseitige Entwicklungsumgebungen bieten nützliche Mechanismen, um Änderungen an der Website nur an eine Teilmenge von Benutzern auszurollen, was einen nützlichen Mechanismus bietet, um eine Funktion von einer Teilmenge von Benutzern testen zu lassen, ohne einen separaten Entwicklungsserver zu benötigen. Ein Beispiel ist [Django Waffle Flags](https://github.com/jazzband/django-waffle).

## Zusammenfassung

Nachdem Sie diesen Artikel gelesen haben, solltenSie jetzt eine gute Vorstellung davon haben, was Sie tun können, um Ihre Zielgruppe/liste der Zielbrowser zu identifizieren und dann effektiv Cross-Browser-Tests auf dieser Liste durchzuführen.

Als nächstes werden wir uns den tatsächlichen Code-Problemen zuwenden, die Ihre Tests aufdecken könnten, angefangen mit HTML und CSS.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Introduction","Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS", "Learn/Tools_and_testing/Cross_browser_testing")}}
