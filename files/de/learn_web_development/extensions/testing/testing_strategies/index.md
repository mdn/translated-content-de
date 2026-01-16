---
title: Strategien zur Durchführung von Tests
short-title: Testing strategies
slug: Learn_web_development/Extensions/Testing/Testing_strategies
l10n:
  sourceCommit: 3251a58ecf1ded5df0e1aa5d23c8436247252b52
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel erklärt, wie Sie Cross-Browser-Tests durchführen: wie Sie auswählen, welche Browser und Geräte zu testen sind, wie Sie diese Browser und Geräte tatsächlich testen und wie Sie mit Benutzergruppen testen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung von den
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >grundlegenden Prinzipien des Cross-Browser-Tests</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis für die grundlegenden Konzepte der Cross-Browser-Tests zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Auswahl der Browser und Geräte, die getestet werden sollen

Da es nicht möglich ist, jede Kombination von Browser und Gerät zu testen, ist es ausreichend sicherzustellen, dass Ihre Website auf den wichtigsten funktioniert. In der Praxis bedeutet "wichtig" oft "häufig von der Zielgruppe genutzt".

Sie können Browser und Geräte nach dem Grad der Unterstützung klassifizieren, den Sie zu geben beabsichtigen. Zum Beispiel:

1. A-Klasse: Häufig genutzte/moderne Browser — Als fähig bekannt. Gründlich testen und volle Unterstützung bieten.
2. B-Klasse: Ältere/weniger leistungsfähige Browser — Sind bekannt dafür, nicht fähig zu sein. Testen und eine einfachere Erfahrung bieten, die vollen Zugang zu den Kerninformationen und Diensten ermöglicht.
3. C-Klasse: Seltene/unbekannte Browser — nicht testen, aber annehmen, dass sie fähig sind. Die vollständige Website bereitstellen, die zumindest mit den durch unser defensives Codieren bereitgestellten Fallbacks funktionieren sollte.

In den folgenden Abschnitten werden wir eine Support-Tabelle in diesem Format entwickeln.

> [!NOTE]
> Yahoo machte diesen Ansatz erstmals populär mit ihrem [Graded Browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support)-Ansatz.

### Prognose der am häufigsten genutzten Browser Ihrer Zielgruppe

Dies beinhaltet typischerweise das Treffen fundierter Annahmen basierend auf den demografischen Daten Ihrer Benutzer. Angenommen, Ihre Benutzer befinden sich in Nordamerika und Westeuropa:

Eine schnelle Online-Suche sagt Ihnen, dass die meisten Menschen in Nordamerika und Westeuropa Windows- oder Mac-Desktops/-Laptops verwenden, wobei die Hauptbrowser Chrome, Firefox, Safari und Edge sind. Sie würden wahrscheinlich nur die neuesten Versionen dieser Browser testen wollen, da diese Browser regelmäßige Updates erhalten. Diese sollten alle in den A-Klasse-Bereich gehen.

Die meisten Menschen in dieser demografischen Gruppe verwenden auch entweder iOS- oder Android-Telefone, sodass Sie wahrscheinlich die neuesten Versionen von iOS Safari, die letzten Versionen des alten Android-Standardbrowsers und Chrome und Firefox für iOS und Android testen möchten. Ideal wäre es, diese sowohl auf einem Telefon als auch auf einem Tablet zu testen, um sicherzustellen, dass responsive Designs funktionieren.

Opera Mini ist nicht sehr fähig, komplexes JavaScript auszuführen, daher sollten wir diesen ebenfalls in Klasse B einordnen.

Auf diese Weise haben wir unsere Wahl getroffen, welche Browser wir testen wollen, basierend auf den Browsern, von denen wir erwarten, dass unsere Benutzer sie verwenden.
Dies ergibt die folgende Unterstützungstabelle bis jetzt:

1. A-Klasse: Chrome und Firefox für Windows/Mac, Safari für Mac, Edge für Windows, iOS Safari für iPhone/iPad, Android-Standardbrowser (die letzten zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (die letzten zwei Versionen) auf Telefon/Tablet
2. B-Klasse: Opera Mini
3. C-Klasse: nicht zutreffend

Wenn Ihre Zielgruppe sich größtenteils woanders befindet, können sich die gebräuchlichsten Browser und Betriebssysteme von den oben genannten unterscheiden.

> [!NOTE]
> "Der CEO meines Unternehmens verwendet ein Blackberry, also sollten wir sicherstellen, dass es darauf gut aussieht", kann ebenfalls etwas sein, das in Betracht gezogen werden sollte.

### Browser-Statistiken

Einige Webseiten zeigen, welche Browser in einer bestimmten Region beliebt sind. Zum Beispiel gibt [Statcounter](https://gs.statcounter.com/) eine Vorstellung von Trends in Nordamerika.

### Nutzung von Analysen

Eine viel genauere Datenquelle, wenn Sie sie erhalten können, ist eine Analytik-App wie [Google Analytics](https://marketingplatform.google.com/about/analytics/), die Ihnen genau sagt, welche Browser die Leute verwenden, um Ihre Website zu durchsuchen. Natürlich setzt dies voraus, dass Sie bereits eine Website haben, auf der Sie es verwenden können, daher ist sie nicht gut für völlig neue Websites.

Vielleicht sollten Sie auch in Betracht ziehen, quelloffene und datenschutzorientierte Analyseplattformen wie [Open Web Analytics](https://www.openwebanalytics.com/) und [Matomo](https://matomo.org/) zu verwenden. Sie erwarten, dass Sie die Analyseplattform selbst hosten.

#### Einrichten von Google Analytics

1. Zuerst benötigen Sie ein Google-Konto. Verwenden Sie dieses Konto, um sich bei [Google Analytics](https://marketingplatform.google.com/about/analytics/) anzumelden.
2. Wählen Sie die [Google Analytics](https://analytics.google.com/analytics/web/)-Option (Web), und klicken Sie auf die _Anmelden_-Schaltfläche.
3. Geben Sie Ihre Websitedetails auf der Anmeldeseite ein. Dies ist relativ intuitiv einzurichten; das wichtigste Feld, das korrekt eingegeben werden muss, ist die Website-URL. Dies muss die Stamm-URL Ihrer Website/App sein.
4. Sobald Sie alles ausgefüllt haben, drücken Sie auf die _Tracking-ID erhalten_-Schaltfläche und akzeptieren die angezeigten Nutzungsbedingungen.
5. Die nächste Seite liefert Ihnen einige Codeschnipsel und weitere Anweisungen. Für eine einfache Website müssen Sie den _Website-Tracking_-Codeblock kopieren und in alle Seiten einfügen, die Sie mit Google Analytics auf Ihrer Site verfolgen möchten. Sie könnten die Schnipsel unter Ihrem schließenden `</body>`-Tag platzieren oder an einem anderen geeigneten Ort, damit sie nicht mit Ihrem Anwendungscode vermischt werden.
6. Laden Sie die Änderungen auf den Entwicklungsserver hoch oder an einen anderen Ort, an dem Sie Ihren Code benötigen.

Das war's! Ihre Website sollte nun bereit sein, Analyse-Daten zu melden.

#### Analyse von Analysedaten

Jetzt sollten Sie in der Lage sein, zur [Analytics Web](https://analytics.google.com/analytics/web/)-Startseite zurückzukehren und die Daten zu betrachten, die Sie über Ihre Website gesammelt haben (Sie müssen natürlich etwas Zeit lassen, damit einige Daten tatsächlich gesammelt werden).

Standardmäßig sollten Sie das Berichts-Tab sehen, wie folgt:

![Wie Google Analytics Daten auf seinem Hauptdashboard sammelt](analytics-reporting.png)

Es gibt eine riesige Menge an Daten, die Sie sich in Google Analytics ansehen könnten — benutzerdefinierte Berichte in verschiedenen Kategorien, etc. — und wir haben keine Zeit, alles zu besprechen.
[Einführung in Analytics](https://support.google.com/analytics/answer/9304153) bietet einige nützliche Anleitungen zum Reporting (und mehr) für Anfänger.

Sie können sehen, welche Browser und Betriebssysteme Ihre Benutzer verwenden, indem Sie im linken Menü _Zielgruppe > Technologie > Browser & OS_ auswählen.

> [!NOTE]
> Bei der Nutzung von Google Analytics sollten Sie sich über irreführende Verzerrungen im Klaren sein, z. B. kann "Wir haben keine Firefox Mobile-Benutzer" dazu führen, dass Sie die Unterstützung für Firefox Mobile vernachlässigen. Aber Sie werden keine Firefox Mobile-Benutzer haben, wenn die Website auf Firefox Mobile von Anfang an kaputt war.

### Weitere Überlegungen

Sie sollten Barrierefreiheit als Anforderung der Klasse A in Ihre Tests aufnehmen.

Außerdem sollten Sie sich über situationsspezifische Bedürfnisse im Klaren sein. Wenn Ihr Produkt beispielsweise einen Markt anspricht, in dem mobile Telefone das primäre Mittel zum Zugriff auf das Internet sind, werden Sie wahrscheinlich den Support für mobile Browser priorisieren müssen.

### Finale Unterstützungstabelle

So wird unsere finale Unterstützungstabelle wie folgt aussehen:

1. A-Klasse: Chrome und Firefox für Windows/Mac, Safari für Mac und Edge (die letzten zwei Versionen von jedem), iOS Safari für iPhone/iPad, Android-Standardbrowser (die letzten zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (die letzten zwei Versionen) auf Telefon/Tablet. Barrierefreiheit, die gängige Tests besteht.
2. B-Klasse: Opera Mini.
3. C-Klasse: Opera, andere Nischenbrowser.

## Was werden Sie testen?

Wenn Sie eine neue Ergänzung zu Ihrem Codebase haben, die getestet werden muss, sollten Sie vor dem Testen eine Liste von Testanforderungen erstellen, die bestanden werden müssen, um akzeptiert zu werden. Diese Anforderungen können visuell oder funktional sein — beides zusammen ergibt eine benutzbare Website-Funktion.

Betrachten Sie das folgende Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html) und auch das [Beispiel live laufend](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)):

![Wie man ein Testszenario mit Design- und Benutzeranforderungen vorbereitet](sliding-box-demo.png)

Testkriterien für diese Funktion könnten wie folgt geschrieben werden:

A- und B-Klasse:

- Der Button sollte durch den primären Kontrollmechanismus des Benutzers aktivierbar sein, was auch immer es ist — dies sollte Maus, Tastatur und Berührung einschließen.
- Das Umschalten des Buttons sollte die Informationsbox erscheinen/verschwinden lassen.
- Der Text sollte lesbar sein.
- Sehbehinderte Benutzer, die Screenreader verwenden, sollten in der Lage sein, auf den Text zuzugreifen.

A-Klasse:

- Die Informationsbox sollte sich reibungslos animieren, wenn sie erscheint/verschwindet.
- Der Verlauf und der Textschatten sollten das Erscheinungsbild der Box optisch verbessern.

Sie könnten bemerken, dass der Button nicht nur mit der Tastatur verwendbar ist. Wir könnten dies mit JavaScript beheben, um eine Tastatursteuerung für das Umschalten zu implementieren, oder einen anderen Ansatz verwenden.

Diese Testkriterien sind nützlich, weil:

- Sie Ihnen eine Reihe von Schritten geben, denen Sie beim Durchführen von Tests folgen können.
- Sie leicht in Anweisungen für Benutzergruppen umgewandelt werden können, wenn sie Tests durchführen (z. B. "versuchen Sie, den Button mit Ihrer Maus und dann mit der Tastatur zu aktivieren...") — siehe [Benutzertests](#benutzertests) weiter unten.
- Sie auch eine Grundlage für das Schreiben von automatisierten Tests bieten können. Es ist einfacher, solche Tests zu schreiben, wenn Sie genau wissen, was Sie testen möchten und welche die Erfolgskriterien sind (siehe [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#selenium), später in der Serie).

## Ein Testlabor zusammenstellen

Eine Möglichkeit, Browser-Tests durchzuführen, besteht darin, die Tests selbst zu machen. Dazu werden Sie wahrscheinlich eine Kombination aus tatsächlichen physischen Geräten und emulierten Umgebungen (entweder mit einem Emulator oder einer virtuellen Maschine) verwenden.

### Physische Geräte

Es ist im Allgemeinen besser, ein echtes Gerät zu haben, auf dem der Browser läuft, den Sie testen möchten — dies bietet die größte Genauigkeit in Bezug auf das Verhalten und die Gesamtnutzererfahrung. Sie werden wahrscheinlich etwas wie das Folgende für ein vernünftiges Low-Level-Gerätelabor wünschen:

- Einen Mac, mit den installierten Browsern, die Sie testen müssen — dies kann Firefox, Chrome, Opera und Safari umfassen.
- Einen Windows-PC, mit den installierten Browsern, die Sie testen müssen — dies kann Edge (oder IE), Chrome, Firefox und Opera umfassen.
- Ein höher spezifiziertes Android-Telefon und Tablet mit den installierten Browsern, die Sie testen müssen — dies kann Chrome, Firefox und Opera Mini für Android sowie den ursprünglichen Android-Standardbrowser umfassen.
- Ein höher spezifiziertes iOS-Telefon und Tablet mit den installierten Browsern, die Sie testen müssen — dies kann iOS Safari sowie Chrome, Firefox und Opera Mini für iOS umfassen.

Die folgenden sind ebenfalls gute Optionen, wenn Sie sie bekommen können:

- Ein Linux-PC, falls Sie spezifische Fehler in Linux-Versionen von Browsern testen müssen. Linux-Nutzer verwenden häufig Firefox, Opera und Chrome. Wenn Sie nur eine Maschine zur Verfügung haben, könnten Sie erwägen, eine Dual-Boot-Maschine mit Linux und Windows auf separaten Partitionen zu erstellen.
- Ein paar weniger spezifizierte mobile Geräte, sodass Sie die Leistung von Funktionen wie Animationen auf weniger leistungsstarken Prozessoren testen können.

Ihre Hauptarbeitsmaschine kann auch ein Ort sein, um andere Tools für bestimmte Zwecke zu installieren, wie z. B. Werkzeuge zur Barrierefreiheitsauditierung, Screenreader und Emulatoren/virtuelle Maschinen.

Einige größere Unternehmen haben Gerätemoderationen, die eine sehr große Auswahl an verschiedenen Geräten beherbergen, sodass Entwickler Bugs auf sehr spezifischen Browser-/Gerätekombinationen aufspüren können. Kleinere Unternehmen und Einzelpersonen sind im Allgemeinen nicht in der Lage, ein so ausgeklügeltes Labor zu finanzieren, so dass sie mit kleineren Laboren, Emulatoren, virtuellen Maschinen und kommerziellen Testapps auskommen müssen.

Wir werden jede der anderen Optionen unten abdecken.

> [!NOTE]
> Es wurden einige Anstrengungen unternommen, um öffentlich zugängliche Gerätemoderationen zu erstellen — siehe [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/).

> [!NOTE]
> Wir müssen auch die Barrierefreiheit berücksichtigen — es gibt eine Reihe nützlicher Tools, die Sie auf Ihrer Maschine installieren können, um Barrierefreiheitstests zu erleichtern, aber wir werden diese im Artikel zum Umgang mit häufigen Barrierefreiheitsproblemen später im Kurs behandeln.

### Emulatoren

Emulatoren sind im Grunde Programme, die auf Ihrem Computer laufen und ein Gerät oder bestimmte Gerätezustände emulieren, sodass Sie einige Ihrer Tests bequemer durchführen können, als eine bestimmte Kombination von Hardware/Software finden zu müssen, um zu testen.

Ein Emulator könnte so einfach sein wie das Testen eines Gerätezustands. Wenn Sie beispielsweise einige schnelle und einfache Tests Ihrer Breiten-/Höhen-Medienabfragen für responsives Design durchführen möchten, könnten Sie den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) von Firefox verwenden. Safari hat ebenfalls einen ähnlichen Modus, der aktiviert werden kann, indem Sie auf _Safari > Einstellungen_ gehen und das _Entwicklermenü anzeigen_ überprüfen, dann _Entwickeln > In den Modus für responsives Design wechseln_ auswählen. Chrome hat auch etwas Ähnliches: den Gerätemodus (siehe [Simuliere mobile Geräte mit dem Gerätemodus](https://developer.chrome.com/docs/devtools/device-mode/)).

Oftmals müssen Sie jedoch einen Emulator installieren. Die gebräuchlichsten Geräte/Browser, die Sie testen möchten, sind wie folgt:

- Die offizielle [Android Studio IDE](https://developer.android.com/studio/) zur Entwicklung von Android-Apps ist etwas schwer für das bloße Testen von Websites auf Google Chrome oder dem alten Android-Standardbrowser, aber sie kommt mit einem robusten [Emulator](https://developer.android.com/studio/run/emulator.html). Wenn Sie etwas Leichteres wünschen, ist [Andy](https://www.andyroid.net/) eine vernünftige Option, die sowohl unter Windows als auch unter Mac läuft.
- Apple bietet eine App namens [Simulator](https://help.apple.com/simulator/mac/current/), die auf der Entwicklungsumgebung [Xcode](https://developer.apple.com/xcode/) läuft und iPad/iPhone/Apple Watch/Apple TV emuliert. Dies beinhaltet den nativen iOS Safari-Browser. Dies läuft leider nur auf einem Mac.

Sie können häufig auch Simulatoren für andere mobile Geräteumgebungen finden, zum Beispiel:

- Sie können Opera Mini eigenständig emulieren, wenn Sie ihn testen möchten.

> [!NOTE]
> Viele Emulatoren erfordern tatsächlich die Nutzung einer virtuellen Maschine (siehe unten); wenn dies der Fall ist, werden oft Anweisungen bereitgestellt und/oder die Nutzung der virtuellen Maschine wird in den Installer des Emulators integriert.

### Virtuelle Maschinen

Virtuelle Maschinen sind Anwendungen, die auf Ihrem Desktop-Computer laufen und Ihnen ermöglichen, Emulationen ganzer Betriebssysteme auszuführen, die jeweils in ihrer eigenen virtuellen Festplatte compartmentalisiert sind (oft dargestellt durch eine einzelne große Datei, die auf der Festplatte der Host-Maschine existiert). Es gibt eine Reihe beliebter Apps für virtuelle Maschinen, wie [Parallels](https://www.parallels.com/), [VMware](https://www.vmware.com/) und [Virtual Box](https://www.virtualbox.org/wiki/Downloads); wir persönlich bevorzugen letztere, weil sie kostenlos ist.

> [!NOTE]
> Sie benötigen viel verfügbaren Festplattenspeicher, um Virtual Machine-Emulationen auszuführen; jedes Betriebssystem, das Sie emulieren, kann viel Speicherplatz beanspruchen. Sie tendieren dazu, den benötigten Festplattenspeicher für jede Installation zu wählen; wahrscheinlich können Sie mit 10 GB auskommen, aber einige Quellen empfehlen bis zu 50 GB oder mehr, damit das Betriebssystem zuverlässig läuft. Eine gute Option, die von den meisten virtuellen Maschinen-Apps angeboten wird, ist die Erstellung einer **dynamisch zugewiesenen** Festplatte, die wächst und schrumpft, je nach Bedarf.

Um eine Virtual Box zu verwenden, müssen Sie:

1. Einen Installationsdatenträger oder ein Installationsimage (z. B. ISO-Datei) für das Betriebssystem besorgen, das Sie emulieren möchten. Virtual Box ist nicht in der Lage, diese bereitzustellen; die meisten, wie Windows OSes, sind kommerzielle Produkte, die nicht frei verteilt werden können.
2. [Laden Sie den passenden Installer](https://www.virtualbox.org/wiki/Downloads) für Ihr Betriebssystem herunter und installieren Sie ihn.
3. Öffnen Sie die App; Sie werden mit einer Ansicht wie der folgenden begrüßt: ![Anwendungsfenster: Das linke Panel listet Windows-Betriebssystem und Opera TV Emulatoren auf. Das rechte Panel enthält mehrere Unterpanels, einschließlich Allgemein, System, Anzeige, Einstellungen, Audio, Netzwerk und eine Vorschau.](virtualbox.png)
4. Um eine neue virtuelle Maschine zu erstellen, drücken Sie die _Neu_-Schaltfläche in der oberen linken Ecke.
5. Folgen Sie den Anweisungen und füllen Sie die folgenden Dialogfelder entsprechend aus. Sie werden:
   1. Einen Namen für die neue virtuelle Maschine angeben
   2. Wählen, welches Betriebssystem und welche Version Sie darauf installieren
   3. Festlegen, wie viel RAM zugewiesen werden soll (wir würden etwa 2048 MB oder 2 GB empfehlen)
   4. Eine virtuelle Festplatte erstellen (wählen Sie die Standardoptionen in den drei Dialogfeldern _Jetzt eine virtuelle Festplatte erstellen_, _VDI (virtuelles Festplattenimage)_ und _Dynamisch zugewiesen_).
   5. Den Dateispeicherort und die Größe der virtuellen Festplatte wählen (wählen Sie einen sinnvollen Namen und Speicherort und geben Sie für die Größe etwa 50 GB oder so viel ein, wie Sie komfortabel angeben können).

Jetzt sollte die neue virtuelle Box im linken Menü des Hauptfensters der Virtual Box-Benutzeroberfläche erscheinen. In diesem Moment können Sie doppelklicken, um sie zu öffnen — sie wird beginnen, die virtuelle Maschine zu starten, aber sie wird noch nicht das Betriebssystem (OS) installiert haben. An diesem Punkt müssen Sie das Dialogfeld auf das Installationsimage/den Installationsdatenträger zeigen lassen, und es wird Schritt für Schritt durch die Installation des OS laufen, ähnlich wie auf einer physischen Maschine.

![Wie man die Virtual Box für ein bestimmtes Betriebssystem installiert](virtualbox-installer.png)

> [!WARNING]
> Sie müssen sicherstellen, dass Sie zu diesem Zeitpunkt das Image des Betriebssystems, das Sie auf der virtuellen Maschine installieren möchten, verfügbar haben und es sofort installieren. Wenn Sie den Prozess an diesem Punkt abbrechen, kann es die virtuelle Maschine unbrauchbar machen und Sie müssen sie löschen und noch einmal erstellen. Das ist nicht fatal, aber ärgerlich.

Nachdem der Prozess abgeschlossen ist, sollten Sie eine virtuelle Maschine haben, die ein Betriebssystem in einem Fenster auf Ihrem Host-Computer ausführt.

![Screenshot von Windows XP, gehostet in einer Virtual Box und ausgeführt auf macOS](virtualbox-running.png)

Sie müssen diese virtuelle Betriebssysteminstallation genauso behandeln wie jede echte Installation — beispielsweise sollten Sie neben den zu testenden Browsern auch ein Antivirenprogramm installieren, um sie vor Viren zu schützen.

Mehrere virtuelle Maschinen zu haben, ist sehr nützlich, insbesondere für Windows IE/Edge Testing — unter Windows können Sie nicht mehrere Versionen des Standardbrowsers parallel installiert haben, sodass Sie möglicherweise eine Bibliothek von virtuellen Maschinen aufbauen möchten, um verschiedene Tests nach Bedarf durchzuführen, z. B.:

- Windows 10 mit Edge 14
- Windows 10 mit Edge 13

> [!NOTE]
> Ein weiterer guter Punkt zu virtuellen Maschinen ist, dass die virtuellen Festplattenimages relativ in sich geschlossen sind. Wenn Sie in einem Team arbeiten, können Sie ein virtuelles Festplattenimage erstellen, es kopieren und weitergeben. Vergewissern Sie sich nur, dass Sie die erforderlichen Lizenzen haben, um alle diese Kopien von Windows oder was auch immer Sie laufen lassen, auszuführen, wenn es sich um ein lizenziertes Produkt handelt.

### Automatisierung und kommerzielle Apps

Wie im letzten Kapitel erwähnt, können Sie eine Menge der Schmerzen beim Browser-Testing durch den Einsatz eines Automatisierungssystems vermeiden. Sie können Ihr eigenes Testautomatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte App der Wahl), was einige Einrichtung erfordert, aber sehr lohnend sein kann, wenn Sie es eingerichtet haben.

Es gibt auch kommerzielle Tools wie [Sauce Labs](https://saucelabs.com/) und [Browser Stack](https://www.browserstack.com/), die diese Art von Dingen für Sie erledigen, ohne dass Sie sich um die Einrichtung kümmern müssen, wenn Sie bereit sind, etwas Geld in Ihre Tests zu investieren.

Eine weitere Alternative ist die Verwendung von No-Code-Testautomatisierungstools wie [Endtest](https://www.endtest.io/).

Wir werden später im Modul darauf eingehen, wie man solche Tools benutzt.

## Benutzertests

Bevor wir fortfahren, schließen wir diesen Artikel mit einem kurzen Wort zu Benutzertests ab — dies kann eine gute Option sein, wenn Sie eine willige Benutzergruppe haben, um Ihre neue Funktionalität zu testen. Beachten Sie, dass dies so wenig ausgefeilt oder so anspruchsvoll sein kann, wie Sie möchten — Ihre Benutzergruppe könnte eine Gruppe von Freunden, eine Gruppe von Kollegen oder eine Gruppe unbezahlter oder bezahlter Freiwilliger sein, abhängig davon, ob Sie etwas Geld für Tests ausgeben haben.

Im Allgemeinen werden Sie Ihre Benutzer die Seite oder den Ansicht mit der neuen Funktionalität auf einem Entwicklungsserver betrachten lassen, damit Sie die endgültige Website oder Änderung nicht live schalten, bis sie fertig ist. Sie sollten sie einige Schritte durchgehen lassen und die Ergebnisse, die sie erhalten, melden. Es ist nützlich, eine Reihe von Schritten (manchmal Skript genannt) bereitzustellen, damit Sie zuverlässigere Ergebnisse in Bezug auf das erhalten, was Sie zu testen versucht haben. Wir haben dies im Abschnitt [Was werden Sie testen](#what_are_you_going_to_test) oben erwähnt — es ist einfach, die dort detaillierten Testkriterien in Schritten zu folgen. Beispielsweise würden die folgenden Schritte für einen sehenden Benutzer funktionieren:

- Klicken Sie mit der Maus auf Ihrem Desktop-Computer ein paar Mal auf die Fragezeichen-Schaltfläche. Aktualisieren Sie das Browserfenster.
- Wählen und aktivieren Sie die Fragezeichen-Schaltfläche mit der Tastatur auf Ihrem Desktop-Computer ein paar Mal.
- Tippen Sie ein paar Mal auf die Fragezeichen-Schaltfläche auf Ihrem Touchscreen-Gerät.
- Das Umschalten der Schaltfläche sollte die Informationsbox erscheinen/verschwinden lassen. Tut sie das in jedem der oben genannten drei Fälle?
- Ist der Text lesbar?
- Lässt sich die Informationsbox beim Erscheinen/Verschwinden glatt animieren?

Beim Durchführen von Tests kann es ebenfalls eine gute Idee sein:

- Wo möglich, ein separates Browser-Profil einzurichten, mit deaktivierten Browsererweiterungen und anderen solcher Dinge, und Ihre Tests in diesem Profil auszuführen (siehe zum Beispiel [Verwenden des Profilmanagers, um Firefox-Profile zu erstellen und zu entfernen](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) und [Chrome mit anderen teilen oder Personas hinzufügen](https://support.google.com/chrome/answer/2364824)).
- Verwenden Sie die Funktionalität des privaten Modus des Browsers, wo vorhanden (z. B. [Privates Surfen](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) in Firefox, [Inkognito-Modus](https://support.google.com/chrome/answer/95464) in Chrome), sodass Dinge wie Cookies und temporäre Dateien nicht gespeichert werden.

Diese Schritte sollen sicherstellen, dass der Browser, den Sie testen, so "rein" wie möglich ist, d.h. nichts installiert ist, das die Testergebnisse beeinflussen könnte.

> [!NOTE]
> Eine weitere nützliche Low-Fi-Option, wenn Sie die Hardware zur Verfügung haben, ist es, Ihre Seiten auf schlechteren Telefonen/anderen Geräten zu testen — da Websites größer werden und mehr Effekte enthalten, steigt die Wahrscheinlichkeit, dass die Website langsamer wird, sodass Sie der Leistung mehr Aufmerksamkeit schenken müssen. Wenn Sie versuchen, Ihre Funktionalität auf einem schwächeren Gerät zum Laufen zu bringen, wird das Erlebnis auf leistungsstärkeren Geräten wahrscheinlich besser sein.

> [!NOTE]
> Einige serverseitige Entwicklungsumgebungen bieten nützliche Mechanismen zur Einführung von Site-Änderungen nur für einen Teil der Benutzer, was einen nützlichen Mechanismus bietet, um eine Funktion von einem Teil der Benutzer testen zu lassen, ohne dass ein separater Entwicklungsserver erforderlich ist. Ein Beispiel ist [Django Waffle Flags](https://github.com/django-waffle/django-waffle).

## Zusammenfassung

Nach dem Lesen dieses Artikels sollten Sie nun eine gute Vorstellung davon haben, was Sie tun können, um Ihre Zielgruppe/Zielliste von Browsern zu identifizieren, und dann effektiv Cross-Browser-Tests auf dieser Liste durchzuführen.

Als nächstes werden wir uns den eigentlichen Codeproblemen zuwenden, die Ihre Tests aufdecken könnten, beginnend mit HTML und CSS.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}
