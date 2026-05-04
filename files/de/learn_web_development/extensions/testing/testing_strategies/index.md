---
title: Strategien zur Durchführung von Tests
short-title: Testing strategies
slug: Learn_web_development/Extensions/Testing/Testing_strategies
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel erklärt, wie Cross-Browser-Tests durchgeführt werden: wie Sie entscheiden, welche Browser und Geräte getestet werden sollen, wie tatsächlich auf diesen Browsern und Geräten getestet wird und wie man mit Benutzergruppen testet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>-,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>- und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen; grundlegende Ideen
        zu den hochrangigen
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des Cross-Browser-Testings</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Ein Verständnis für die hochrangigen Konzepte des Cross-Browser-Testings zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Auswahl von Browsern und Geräten zum Testen

Da Sie nicht jede Kombination von Browser und Gerät testen können, reicht es aus, sicherzustellen, dass Ihre Website auf den wichtigsten funktioniert. In der Praxis bedeutet "wichtig" oft "häufig unter der Zielgruppe verwendet".

Sie können Browser und Geräte nach dem Grad der Unterstützung klassifizieren, die Sie ihnen geben möchten. Zum Beispiel:

1. A-Grade: Moderne und häufig genutzte Browser — Als fähig bekannt. Gründlich testen und volle Unterstützung bieten.
2. B-Grade: Ältere/weniger fähige Browser — Als nicht fähig bekannt. Testen und eine einfachere Benutzererfahrung bieten, die vollen Zugang zu den Kerninformationen und -diensten ermöglicht.
3. C-Grade: Seltene/unbekannte Browser — Nicht testen, aber annehmen, dass sie fähig sind. Die volle Website bereitstellen, die zumindest mit den durch unser defensives Codieren bereitgestellten Fallbacks funktionieren sollte.

In den folgenden Abschnitten werden wir ein Unterstützungsdiagramm in diesem Format erstellen.

> [!NOTE]
> Yahoo machte diesen Ansatz zuerst populär mit ihrem [Graded Browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support) Ansatz.

### Voraussage der am häufigsten verwendeten Browser Ihrer Zielgruppe

Dies beinhaltet typischerweise fundierte Vermutungen basierend auf benutzerdemografischen Daten. Angenommen, Ihre Benutzer befinden sich in Nordamerika und Westeuropa:

Eine schnelle Online-Recherche zeigt, dass die meisten Menschen in Nordamerika und Westeuropa Windows- oder Mac-Desktops/Laptops verwenden, bei denen die Hauptbrowser Chrome, Firefox, Safari und Edge sind. Sie möchten wahrscheinlich nur die neuesten Versionen dieser Browser testen, da diese regelmäßig aktualisiert werden. Diese sollten alle in die A-Grade-Kategorie fallen.

Die meisten Menschen in dieser demografischen Gruppe nutzen auch iOS- oder Android-Telefone, sodass Sie wahrscheinlich die neuesten Versionen von iOS Safari, die letzten Versionen des alten Android-Browsers sowie Chrome und Firefox für iOS und Android testen möchten. Sie sollten idealerweise sowohl auf einem Telefon als auch einem Tablet testen, um sicherzustellen, dass responsive Designs funktionieren.

Opera Mini ist nicht sehr fähig, komplexes JavaScript auszuführen, daher sollten wir diese auch in die B-Grade-Kategorie einordnen.

So haben wir die Auswahl der zu testenden Browser auf den Browsern basierend, von denen wir erwarten, dass unsere Benutzer sie verwenden, getroffen.
Das gibt uns das bisher folgende Unterstützungsdiagramm:

1. A-Grade: Chrome und Firefox für Windows/Mac, Safari für Mac, Edge für Windows, iOS Safari für iPhone/iPad, Android-Browser (die letzten zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (die letzten zwei Versionen) auf Telefon/Tablet
2. B-Grade: Opera Mini
3. C-Grade: n/a

Wenn sich Ihre Zielgruppe hauptsächlich an einem anderen Ort befindet, können die am häufigsten verwendeten Browser und Betriebssysteme von den oben genannten abweichen.

> [!NOTE]
> "Der CEO meines Unternehmens verwendet ein Blackberry, also sollten wir sicherstellen, dass es darauf gut aussieht" kann auch eine Überlegung wert sein.

### Browser-Statistiken

Einige Websites zeigen, welche Browser in einer bestimmten Region beliebt sind. Beispielsweise gibt [Statcounter](https://gs.statcounter.com/) einen Hinweis auf Trends in Nordamerika.

### Verwendung von Analysen

Eine viel genauere Datenquelle, wenn Sie darauf zugreifen können, ist eine Analyse-App wie [Google Analytics](https://marketingplatform.google.com/about/analytics/), die Ihnen genau sagt, welche Browser Menschen verwenden, um Ihre Website zu durchsuchen. Natürlich hängt dies davon ab, dass Sie bereits eine Website haben, um sie darauf anzuwenden, daher ist es nicht ideal für vollständig neue Websites.

Sie könnten auch Open-Source- und datenschutzorientierte Analyseplattformen wie [Open Web Analytics](https://www.openwebanalytics.com/) und [Matomo](https://matomo.org/) in Betracht ziehen. Sie erwarten, dass Sie die Analyseplattform selbst hosten.

#### Einrichten von Google Analytics

1. Zuerst benötigen Sie ein Google-Konto. Verwenden Sie dieses Konto, um sich bei [Google Analytics](https://marketingplatform.google.com/about/analytics/) anzumelden.
2. Wählen Sie die [Google Analytics](https://analytics.google.com/analytics/web/) (Web) Option und klicken Sie auf die Schaltfläche _Anmelden_.
3. Geben Sie Ihre Website/App-Details auf der Anmeldeseite ein. Das Einrichten ist ziemlich intuitiv; das wichtigste Feld, das korrekt sein muss, ist die URL der Website. Dies muss die Stamm-URL Ihrer Website/App sein.
4. Wenn Sie alles ausgefüllt haben, drücken Sie die Schaltfläche _Tracking-ID abrufen_ und akzeptieren Sie die erscheinenden Nutzungsbedingungen.
5. Die nächste Seite gibt Ihnen einige Code-Snippets und andere Anweisungen. Für eine grundlegende Website müssen Sie den _Website-Tracking_-Codeblock kopieren und in alle verschiedenen Seiten einfügen, die Sie mit Google Analytics auf Ihrer Website verfolgen möchten. Sie könnten die Snippets unter Ihrem schließenden `</body>`-Tag platzieren oder an einer anderen geeigneten Stelle, die verhindert, dass sie mit Ihrem Anwendungscode vermischt werden.
6. Laden Sie die Änderungen auf den Entwicklungsserver hoch oder wo immer Sie Ihren Code benötigen.

Das war's! Ihre Website sollte jetzt bereit sein, um Analysedaten zu melden.

#### Analysedaten untersuchen

Jetzt sollten Sie zur [Analytics Web](https://analytics.google.com/analytics/web/) Startseite zurückkehren können und beginnen, die Daten zu betrachten, die Sie über Ihre Website gesammelt haben (natürlich müssen Sie etwas Zeit lassen, damit einige Daten tatsächlich gesammelt werden).

Standardmäßig sollten Sie den Bericht-Tab sehen, so:

![Wie Google Analytics Daten im Hauptbericht-Dashboard sammelt](analytics-reporting.png)

Es gibt eine riesige Menge an Daten, die Sie mit Google Analytics betrachten könnten — angepasste Berichte in verschiedenen Kategorien etc. — und wir haben nicht die Zeit, alles zu besprechen.
[Die ersten Schritte mit Analytics](https://support.google.com/analytics/answer/9304153) bietet nützliche Anleitungen zu Berichten (und mehr) für Anfänger.

Sie können sehen, welche Browser und Betriebssysteme Ihre Nutzer verwenden, indem Sie _Audience > Technology > Browser & OS_ aus dem Menü auf der linken Seite auswählen.

> [!NOTE]
> Bei der Verwendung von Google Analytics müssen Sie sich vor irreführender Verzerrung hüten, z.B. "Wir haben keine Firefox Mobile Nutzer", was Sie dazu veranlassen könnte, die Unterstützung von Firefox Mobile nicht zu berücksichtigen. Aber Sie werden keine Firefox Mobile Nutzer haben, wenn die Seite auf Firefox Mobile von Anfang an nicht funktionierte.

### Andere Überlegungen

Sie sollten Barrierefreiheit als eine Anforderung der A-Kategorie in den Tests einbeziehen.

Außerdem sollten Sie sich der situationsspezifischen Bedürfnisse bewusst sein. Wenn Ihr Produkt zum Beispiel einen Markt anspricht, in dem Mobiltelefone das primäre Mittel zum Internetzugang sind, möchten Sie wahrscheinlich die Unterstützung mobiler Browser priorisieren.

### Abschließendes Unterstützungsdiagramm

Unser endgültiges Unterstützungsdiagramm sieht etwa so aus:

1. A-Grade: Chrome und Firefox für Windows/Mac, Safari für Mac, und Edge (die letzten zwei Versionen von jedem), iOS Safari für iPhone/iPad, Android-Browser (die letzten zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (die letzten zwei Versionen) auf Telefon/Tablet. Barrierefreiheit, die allgemeine Tests besteht.
2. B-Grade: Opera Mini.
3. C-Grade: Opera, andere moderne Nischenbrowser.

## Was werden Sie testen?

Wenn Sie eine neue Funktion in Ihrer Codebasis haben, die getestet werden muss, sollten Sie, bevor Sie mit dem Testen beginnen, eine Liste von Testanforderungen verfassen, die bestanden werden müssen, um akzeptiert zu werden. Diese Anforderungen können visuell oder funktional sein — beides zusammen ergibt eine nutzbare Website-Funktion.

Betrachten Sie das folgende Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html) und auch das [Beispiel im Livebetrieb](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)):

![Wie man ein Testszenario mit der Design- und Benutzeranforderungen vorbereitet](sliding-box-demo.png)

Testkriterien für diese Funktion könnten wie folgt geschrieben werden:

A- und B-Grade:

- Die Schaltfläche sollte durch den primären Steuerungsmechanismus des Benutzers aktivierbar sein, was auch immer es ist — dies sollte Maus, Tastatur und Berührung umfassen.
- Das Umschalten der Schaltfläche sollte das Informationsfeld erscheinen/verschwinden lassen.
- Der Text sollte lesbar sein.
- Visuell beeinträchtigte Nutzer, die Bildschirmlesegeräte verwenden, sollten auf den Text zugreifen können.

A-Grade:

- Das Informationsfeld sollte sanft animieren, wenn es erscheint/verschwindet.
- Der Verlauf und der Textschatten sollten erscheinen, um das Erscheinungsbild der Box zu verbessern.

Sie könnten bemerken, dass die Schaltfläche nicht nutzbar ist, wenn nur die Tastatur verwendet wird. Wir könnten dies mit JavaScript beheben, um eine Tastatursteuerung für das Umschalten zu implementieren, oder eine andere Methode verwenden.

Diese Testkriterien sind nützlich, weil:

- Sie Ihnen eine Reihe von Schritten geben, die Sie befolgen können, wenn Sie Tests durchführen.
- Sie leicht in Anweisungen für Benutzergruppen umzuwandeln sind, die Tests durchführen (z.B. "versuchen Sie, die Schaltfläche mit Ihrer Maus zu aktivieren, und dann mit der Tastatur…") — siehe [Benutzertests](#benutzer-tests) unten.
- Sie auch eine Basis für das Schreiben von automatisierten Tests bieten können. Es ist einfacher, solche Tests zu schreiben, wenn Sie genau wissen, was Sie testen möchten und was die Erfolgskriterien sind (siehe [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#selenium), später in der Serie).

## Aufbau eines Testlabors

Eine Option für die Durchführung von Browser-Tests ist das Testen durch Sie selbst. Dazu verwenden Sie wahrscheinlich eine Kombination aus tatsächlichen physischen Geräten und emulierten Umgebungen (entweder mit einem Emulator oder einer virtuellen Maschine).

### Physische Geräte

Im Allgemeinen ist es besser, ein echtes Gerät zu haben, das den zu testenden Browser ausführt — dies bietet die höchste Genauigkeit in Bezug auf Verhalten und allgemeine Benutzererfahrung. Sie werden wahrscheinlich etwas wie das Folgende für ein vernünftiges Low-Level-Gerätelabor haben wollen:

- Ein Mac mit den Browsern, die getestet werden müssen — dazu können Firefox, Chrome, Opera und Safari gehören.
- Ein Windows-PC mit den Browsern, die getestet werden müssen — dazu können Edge (oder IE), Chrome, Firefox und Opera gehören.
- Ein Android-Telefon und Tablet mit höherer Spezifikation, auf dem der Browser installiert ist, den Sie testen müssen — dazu können Chrome, Firefox, und Opera Mini für Android sowie der ursprüngliche Android-Browser gehören.
- Ein iOS-Telefon und Tablet mit höherer Spezifikation mit den zu testenden Browsern — dazu können iOS Safari und Chrome, Firefox, und Opera Mini für iOS gehören.

Die folgenden Optionen sind ebenfalls gut, wenn Sie sie erhalten können:

- Ein Linux-PC, falls Sie Bugs testen müssen, die speziell für Linux-Versionen von Browsern sind. Linux-Nutzer verwenden häufig Firefox, Opera und Chrome. Wenn Sie nur einen Computer zur Verfügung haben, können Sie in Betracht ziehen, einen Dual-Boot-Computer zu erstellen, der Linux und Windows auf separaten Partitionen ausführt.
- Ein paar mobile Geräte mit niedrigerer Spezifikation, damit Sie die Leistung von Funktionen wie Animationen auf weniger leistungsstarken Prozessoren testen können.

Ihr Hauptarbeitsgerät kann auch ein Ort sein, um andere Tools für spezifische Zwecke zu installieren, wie Barrierefreiheit-Audit-Tools, Bildschirmlesegeräte und Emulatoren/virtuelle Maschinen.

Einige größere Unternehmen haben Geräteslabore, die eine sehr große Auswahl an verschiedenen Geräten vorrätig halten und es Entwicklern ermöglichen, Fehler in sehr spezifischen Browser-/Geräte-Kombinationen zu finden. Kleinere Unternehmen und Einzelpersonen können sich in der Regel kein so ausgeklügeltes Labor leisten und sind eher auf kleinere Labore, Emulatoren, virtuelle Maschinen und kommerzielle Test-Apps angewiesen.

Wir werden jede der anderen Optionen unten abdecken.

> [!NOTE]
> Einige Bemühungen wurden unternommen, um öffentlich zugängliche Geräteslabore zu schaffen — siehe [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/).

> [!NOTE]
> Wir müssen auch Barrierefreiheit berücksichtigen — es gibt eine Reihe nützlicher Tools, die Sie auf Ihrem Rechner installieren können, um Barrierefreiheitstests zu erleichtern, aber wir werden diese in dem Artikel zur Behandlung häufiger Barrierefreiheitsprobleme später im Kurs behandeln.

### Emulatoren

Emulatoren sind im Wesentlichen Programme, die auf Ihrem Computer laufen und ein Gerät oder bestimmte Gerätebedingungen irgendwie emulieren, sodass Sie einige Ihrer Tests bequemer durchführen können, als eine bestimmte Kombination aus Hardware/Software zum Testen zu finden.

Ein Emulator könnte so einfach sein wie das Testen einer Gerätebedingung. Zum Beispiel, wenn Sie einige schnelle und einfache Tests Ihrer Breiten-/Höhen-Medienabfragen für responsives Design durchführen möchten, könnten Sie den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) von Firefox verwenden. Safari hat auch einen ähnlichen Modus, den Sie aktivieren können, indem Sie zu _Safari > Einstellungen_ gehen und _Entwicklungsmenü anzeigen_ aktivieren, dann _Entwickeln > Responsive Design Mode betreten_ wählen. Chrome hat auch etwas Ähnliches: den Gerätemodus (siehe [Mobile Geräte mit dem Gerätemodus simulieren](https://developer.chrome.com/docs/devtools/device-mode/)).

In den meisten Fällen müssen Sie jedoch eine Art Emulator installieren. Die häufigsten Geräte/Browser, die Sie testen möchten, sind zum Beispiel:

- Die offizielle [Android Studio IDE](https://developer.android.com/studio/) für die Entwicklung von Android-Apps ist etwas schwergewichtig, nur um Websites auf Google Chrome oder dem alten Android-Browser zu testen, aber sie enthält einen robusten [Emulator](https://developer.android.com/studio/run/emulator.html).
- Apple bietet eine App namens [Simulator](https://help.apple.com/simulator/mac/current/) an, die auf der [Xcode](https://developer.apple.com/xcode/) Entwicklungsumgebung läuft und iPad/iPhone/Apple Watch/Apple TV emuliert. Dazu gehört der native iOS Safari Browser. Dieser funktioniert leider nur auf einem Mac.

Sie können oft auch Emulatoren für andere mobile Geräteumgebungen finden, zum Beispiel:

- Sie können Opera Mini eigenständig emulieren, wenn Sie es testen möchten.

> [!NOTE]
> Viele Emulatoren erfordern tatsächlich die Verwendung einer virtuellen Maschine (siehe unten); wenn dies der Fall ist, werden oft Anleitungen bereitgestellt und/oder die Nutzung der virtuellen Maschine ist im Installer des Emulators integriert.

### Virtuelle Maschinen

Virtuelle Maschinen sind Anwendungen, die auf Ihrem Desktop-Computer laufen und Ihnen die Möglichkeit geben, Emulationen ganzer Betriebssysteme auszuführen, die jeweils in ihrer eigenen virtuellen Festplatte (oft dargestellt durch eine einzelne große Datei auf der Festplatte des Host-Computers) enthalten sind. Es gibt eine Reihe beliebter virtueller Maschinen-Apps, wie [Parallels](https://www.parallels.com/), [VMware](https://www.vmware.com/) und [VirtualBox](https://www.virtualbox.org/wiki/Downloads); Letzteres mögen wir persönlich, weil es kostenlos ist.

> [!NOTE]
> Sie benötigen eine Menge Speicherplatz auf Ihrer Festplatte, um virtuelle Maschinen-Emulationen auszuführen; jedes Betriebssystem, das Sie emulieren, kann viel Speicher in Anspruch nehmen. Sie wählen tendenziell den Festplattenspeicherplatz, den Sie für jede Installation benötigen; Sie können mit etwa 10GB auskommen, aber einige Quellen empfehlen bis zu 50GB oder mehr, damit das Betriebssystem zuverlässig läuft. Eine gute Option, die die meisten virtuellen Maschinen-Apps bieten, ist das Erstellen einer **dynamisch zugewiesenen** Festplatte, die bei Bedarf wächst und schrumpft.

Um eine VirtualBox zu verwenden, müssen Sie:

1. Einen Installationsdatenträger oder ein Bild (z.B. ISO-Datei) für das Betriebssystem erhalten, das Sie emulieren möchten. VirtualBox kann diese nicht bereitstellen; die meisten, wie Windows-Betriebssysteme, sind kommerzielle Produkte, die nicht frei verteilt werden können.
2. [Laden Sie den passenden Installer herunter](https://www.virtualbox.org/wiki/Downloads) für Ihr Betriebssystem und installieren Sie ihn.
3. Öffnen Sie die App; Sie erhalten eine Ansicht wie die folgende: ![Anwendungsfenster linker Bereich listet Windows-Betriebssystem und Opera TV-Emulatoren auf. Rechter Bereich enthält mehrere Unterbereiche einschließlich Allgemein, System, Anzeige, Einstellungen, Audio, Netzwerk und eine Vorschau.](virtualbox.png)
4. Um eine neue virtuelle Maschine zu erstellen, drücken Sie die Schaltfläche _Neu_ in der oberen linken Ecke.
5. Folgen Sie den Anweisungen und füllen Sie die darauf folgenden Dialogfelder gegebenenfalls aus. Sie werden:
   1. Einen Namen für die neue virtuelle Maschine angeben
   2. Das zu installierende Betriebssystem und die Version wählen
   3. Einstellen, wie viel RAM bereitgestellt werden soll (wir empfehlen etwa 2.048 MB oder 2 GB)
   4. Eine virtuelle Festplatte erstellen (wählen Sie die Standardoptionen über die drei Dialogfelder mit _Jetzt eine virtuelle Festplatte erstellen_, _VDI (Virtual Disk Image)_, und _Dynamisch zugewiesen_).
   5. Den Dateispeicherort und die Größe der virtuellen Festplatte wählen (wählen Sie einen sinnvollen Namen und Ort, um sie zu speichern, und geben Sie eine Größe von etwa 50 GB oder so viel ein, wie Sie bereitstellen möchten).

Jetzt sollte die neue VirtualBox im linken Menü des Hauptfensters der VirtualBox-Benutzeroberfläche erscheinen. An diesem Punkt können Sie doppelklicken, um sie zu öffnen — es wird damit beginnen, die virtuelle Maschine zu booten, aber sie hat noch nicht das Betriebssystem installiert. An diesem Punkt müssen Sie das Dialogfeld auf das Installationsimage/-diskett verweisen und es wird die Schritte zur Installation des Betriebssystems genauso ausführen, wie auf einem physischen Maschinen.

![Wie man das VirtualBox für ein spezifisches Betriebssystem installiert](virtualbox-installer.png)

> [!WARNING]
> Sie müssen sicherstellen, dass Sie das Betriebssystem-Image, das Sie auf der virtuellen Maschine installieren möchten, zu diesem Zeitpunkt verfügbar haben und es sofort installieren. Wenn Sie den Vorgang zu diesem Zeitpunkt abbrechen, kann dies die virtuelle Maschine unbrauchbar machen und erfordert, diese zu löschen und erneut zu erstellen. Das ist nicht fatal, aber es ist ärgerlich.

Nachdem der Prozess abgeschlossen ist, sollten Sie eine virtuelle Maschine haben, die ein Betriebssystem in einem Fenster auf Ihrem Host-Computer ausführt.

![Screenshot von Windows XP, gehostet in VirtualBox, und laufend auf macOS](virtualbox-running.png)

Sie müssen diese virtuelle Betriebssysteminstallation so behandeln, wie Sie es mit jeder echten Installation würden — zum Beispiel, neben der Installation der Browser, die Sie testen möchten, installieren Sie ein Antivirenprogramm, um es vor Viren zu schützen.

Mehrere virtuelle Maschinen zu haben, ist sehr nützlich, besonders für Windows IE/Edge Tests — auf Windows können Sie nicht mehrere Versionen des Standardbrowsers nebeneinander installiert haben, also möchten Sie vielleicht eine Bibliothek von virtuellen Maschinen erstellen, um verschiedene Tests nach Bedarf durchzuführen, z.B.:

- Windows 10 mit Edge 14
- Windows 10 mit Edge 13

> [!NOTE]
> Ein weiterer guter Aspekt von virtuellen Maschinen ist, dass die virtuellen Festplattenabbilder ziemlich eigenständig sind. Wenn Sie in einem Team arbeiten, können Sie ein virtuelles Festplattenabbild erstellen, es dann kopieren und weitergeben. Stellen Sie nur sicher, dass Sie die erforderlichen Lizenzen haben, um alle diese Windows-Kopien oder was auch immer Sie ausführen, wenn es ein lizenziertes Produkt ist, auszuführen.

### Automatisierung und kommerzielle Apps

Wie im letzten Kapitel erwähnt, können Sie viele der Mühen bei Browsertests durch den Einsatz eines Automatisierungssystems erleichtern. Sie können Ihr eigenes Testautomatisierungssystem aufbauen (Selenium ist die beliebte Wahl), was einige Einrichtung erfordert, aber sehr lohnend sein kann, wenn es gelingt.

Es gibt auch kommerzielle Tools wie [Sauce Labs](https://saucelabs.com/) und [Browser Stack](https://www.browserstack.com/), die diese Art von Aufgaben für Sie erledigen, ohne dass Sie sich um die Einrichtung kümmern müssen, wenn Sie bereit sind, etwas Geld in Ihre Tests zu investieren.

Eine weitere Alternative ist die Verwendung von No-Code-Testautomatisierungstools wie [Endtest](https://endtest.io/).

Wir werden uns später im Modul ansehen, wie man solche Tools verwendet.

## Benutzer-Tests

Bevor wir weitermachen, beenden wir diesen Artikel mit einem kurzen Gespräch über Benutzer-Tests — dies kann eine gute Option sein, wenn Sie eine willige Benutzergruppe haben, die Ihre neue Funktionalität testen kann. Beachten Sie, dass dies so einfach oder so ausgefeilt sein kann, wie Sie möchten — Ihre Benutzergruppe könnte aus einer Gruppe von Freunden, einer Gruppe von Kollegen oder einer Gruppe von unbezahlten oder bezahlten Freiwilligen bestehen, je nachdem, ob Sie Geld für Tests ausgeben können.

Im Allgemeinen werden Sie Ihren Benutzern die Seite oder Ansicht mit der neuen Funktionalität auf einem Entwicklungsserver zur Verfügung zu stellen, sodass Sie die endgültige Seite oder Änderung nicht live stellen, bis sie fertig ist. Sie sollten sie veranlassen, einige Schritte zu befolgen und die Ergebnisse zu melden, die sie erhalten. Es ist nützlich, eine Reihe von Schritten (manchmal als Script bezeichnet) bereitzustellen, damit Sie zuverlässigere Ergebnisse in Bezug auf das, was Sie testen wollten, erhalten. Wir haben dies im Abschnitt [Was werden Sie testen](#was_are_you_going_to_test) oben erwähnt — es ist einfach, die dort beschriebenen Testkriterien in Schritte umzuwandeln, die befolgt werden müssen. Ein Beispiel, wie folgt, würde für einen sehenden Benutzer funktionieren:

- Klicken Sie mehrmals die Fragezeichen-Schaltfläche mit der Maus auf Ihrem Desktop-Computer an. Aktualisieren Sie das Browserfenster.
- Wählen Sie die Fragezeichen-Schaltfläche mit der Tastatur auf Ihrem Desktop-Computer einige Male aus und führen Sie sie aus.
- Tippen Sie die Fragezeichen-Schaltfläche einige Male auf Ihrem Touchscreen-Gerät an.
- Das Umschalten der Schaltfläche sollte das Informationsfeld erscheinen oder verschwinden lassen. Tut es das in jedem der oben genannten drei Fälle?
- Ist der Text lesbar?
- Animiert das Informationsfeld sanft beim Erscheinen/Verschwinden?

Bei der Durchführung von Tests kann es auch eine gute Idee sein:

- Wo möglich, ein separates Browserprofil einrichten, mit deaktivierten Browsererweiterungen und anderen derartigen Dingen und Ihre Tests in diesem Profil ausführen (siehe [Verwenden Sie den Profilmanager, um Firefox-Profile zu erstellen und zu entfernen](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) und [Chrome mit anderen teilen oder Personas hinzufügen](https://support.google.com/chrome/answer/2364824), zum Beispiel).
- Die Privatmodus-Funktionalität des Browsers beim Ausführen von Tests verwenden, wo verfügbar (z.B. [Privates Surfen](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) in Firefox, [Incognito-Modus](https://support.google.com/chrome/answer/95464) in Chrome), damit Dinge wie Cookies und temporäre Dateien nicht gespeichert werden.

Diese Schritte sollen sicherstellen, dass der getestete Browser so "rein" wie möglich ist, d.h. es ist nichts installiert, das die Testergebnisse beeinflussen könnte.

> [!NOTE]
> Eine weitere nützliche einfache Option, wenn Sie die Hardware zur Verfügung haben, ist das Testen Ihrer Seiten auf günstigen Telefonen/anderen Geräten — da Seiten größer werden und mehr Effekte enthalten, besteht eine größere Chance, dass die Seite langsamer wird, daher müssen Sie anfangen, der Leistung mehr Beachtung zu schenken. Wenn Sie versuchen, Ihre Funktion auf einem Gerät mit niedrigerem Leistungsniveau zum Laufen zu bringen, wird dies wahrscheinlicher, dass die Erfahrung auf Geräten mit höherem Leistungsniveau gut ist.

> [!NOTE]
> Einige serverseitige Entwicklungsumgebungen bieten nützliche Mechanismen, um Webseitenänderungen nur an eine Teilmenge von Benutzern auszurollen und einen nützlichen Mechanismus zu bieten, um eine Funktion von einer Teilmenge von Benutzern testen zu lassen, ohne dass ein separater Entwicklungsserver erforderlich ist. Ein Beispiel dafür sind [Django Waffle Flags](https://github.com/django-waffle/django-waffle).

## Zusammenfassung

Nach der Lektüre dieses Artikels sollten Sie nun eine gute Vorstellung davon haben, was Sie tun können, um Ihre Zielgruppe/Liste der zu testenden Browser zu identifizieren und dann effektiv Cross-Browser-Tests auf dieser Liste durchzuführen.

Als Nächstes werden wir uns den tatsächlichen Codeproblemen widmen, die Ihre Tests aufdecken könnten, beginnend mit HTML und CSS.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}
