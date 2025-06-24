---
title: Strategien zur Durchführung von Tests
short-title: Testing strategies
slug: Learn_web_development/Extensions/Testing/Testing_strategies
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
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
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung der
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Grundprinzipien des Cross-Browser-Tests</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis für die grundlegenden Konzepte des Cross-Browser-Testings zu gewinnen.
      </td>
    </tr>
  </tbody>
</table>

## Auswahl der zu testenden Browser und Geräte

Da Sie nicht jede Kombination aus Browser und Gerät testen können, reicht es aus, sicherzustellen, dass Ihre Website auf den wichtigsten funktioniert. In der Praxis bedeutet "wichtig" oft "häufig von der Zielgruppe genutzt".

Sie können Browser und Geräte nach dem Maß der Unterstützung klassifizieren, das Sie bieten möchten. Zum Beispiel:

1. A-Klasse: Häufige/Moderne Browser — Als fähig bekannt. Gründlich testen und volle Unterstützung bieten.
2. B-Klasse: Ältere/weniger fähige Browser — Als nicht besonders fähig bekannt. Testen und ein grundlegenderes Erlebnis bieten, das dennoch vollen Zugang zu den Kerninformationen und Diensten gibt.
3. C-Klasse: Seltene/unbekannte Browser — nicht testen, aber annehmen, dass sie fähig sind. Die vollständige Website bereitstellen, die zumindest mit den bereitgestellten Fallbacks funktionieren sollte.

In den folgenden Abschnitten erstellen wir eine Unterstützungsübersicht in diesem Format.

> [!NOTE]
> Yahoo hat diesen Ansatz zuerst mit seinem [Graded Browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support) populär gemacht.

### Prognose der meistgenutzten Browser Ihrer Zielgruppe

Dies bedeutet typischerweise, fundierte Vermutungen auf der Grundlage von Benutzerdemografien anzustellen. Wenn z. B. Ihre Nutzer in Nordamerika und Westeuropa sind:

Eine kurze Online-Suche zeigt Ihnen, dass die meisten Menschen in Nordamerika und Westeuropa Windows oder Mac Desktops/Laptops nutzen, bei denen die Hauptbrowser Chrome, Firefox, Safari und Edge sind. Sie würden wahrscheinlich nur die neuesten Versionen dieser Browser testen wollen, da diese regelmäßig Updates erhalten. Diese sollten alle in die A-Klasse fallen.

Die meisten Menschen in dieser Demografie verwenden auch entweder iOS oder Android-Telefone, so dass Sie wahrscheinlich die neuesten Versionen von iOS Safari, die letzten ein oder zwei Versionen des alten Android-Standardbrowsers sowie Chrome und Firefox für iOS und Android testen möchten. Idealerweise sollten Sie diese sowohl auf einem Handy als auch auf einem Tablet testen, um sicherzustellen, dass das responsive Design funktioniert.

Opera Mini ist nicht sehr fähig, komplexe JavaScript auszuführen, daher sollten wir dies ebenso in B einordnen.

Daher basiert unsere Wahl, welche Browser getestet werden sollen, auf den Browsern, die wir erwarten, dass unsere Nutzer verwenden.
Das gibt uns bisher das folgende Unterstützungsdiagramm:

1. A-Klasse: Chrome und Firefox für Windows/Mac, Safari für Mac, Edge für Windows, iOS Safari für iPhone/iPad, Android Standardbrowser (die letzten zwei Versionen) auf Handy/Tablet, Chrome und Firefox für Android (die letzten zwei Versionen) auf Handy/Tablet
2. B-Klasse: Opera Mini
3. C-Klasse: n/a

Wenn Ihre Zielgruppe größtenteils woanders ansässig ist, können sich die gängigsten Browser und Betriebssysteme von den obigen unterscheiden.

> [!NOTE]
> "Der CEO meines Unternehmens benutzt ein Blackberry, also sollten wir sicherstellen, dass es darauf gut aussieht" kann ebenfalls ein Faktor sein, den es zu berücksichtigen gilt.

### Browserstatistiken

Einige Websites zeigen, welche Browser in einer bestimmten Region beliebt sind. Statcounter zum Beispiel gibt einen Eindruck von Trends in Nordamerika.

### Nutzung von Analysen

Eine wesentlich genauere Datenquelle, wenn diese verfügbar ist, ist eine Analyseanwendung wie [Google Analytics](https://marketingplatform.google.com/about/analytics/), die Ihnen genau sagt, welche Browser die Leute nutzen, um Ihre Seite zu durchsuchen. Dies setzt natürlich voraus, dass Sie bereits eine Website haben, um sie zu nutzen, daher ist es für komplett neue Seiten nicht geeignet.

Sie könnten auch in Betracht ziehen, quelloffene und datenschutzorientierte Analyseplattformen wie [Open Web Analytics](https://www.openwebanalytics.com/) und [Matomo](https://matomo.org/) zu verwenden. Diese erwarten von Ihnen, dass Sie die Analyseplattform selbst hosten.

#### Einrichten von Google Analytics

1. Vor allem benötigen Sie ein Google-Konto. Nutzen Sie dieses Konto, um sich bei [Google Analytics](https://marketingplatform.google.com/about/analytics/) anzumelden.
2. Wählen Sie die Option [Google Analytics](https://analytics.google.com/analytics/web/) (Web), und klicken Sie auf die Schaltfläche _Registrieren_.
3. Geben Sie Ihre Website/App-Details auf der Registrierungsseite ein. Dies ist relativ intuitiv einzustellen; das wichtigste Feld, das Sie richtig ausfüllen müssen, ist die URL der Website. Dies muss die Stamm-URL Ihrer Site/App sein.
4. Sobald Sie alles ausgefüllt haben, drücken Sie die Schaltfläche _Tracking-ID abrufen_ und akzeptieren die angezeigten Nutzungsbedingungen.
5. Die nächste Seite bietet Ihnen einige Codesnippets und andere Anweisungen. Für eine einfache Website müssen Sie den _Website-Tracking_-Codeblock kopieren und in all die verschiedenen Seiten einfügen, die Sie mit Google Analytics auf Ihrer Site nachverfolgen möchten. Sie könnten die Snippets unterhalb Ihres schließenden `</body>`-Tags platzieren oder irgendwo anders, wo sie nicht mit Ihrem Anwendungscode durcheinander geraten.
6. Laden Sie die Änderungen auf den Entwicklungsserver hoch oder dorthin, wo Sie Ihren Code benötigen.

Das war's! Ihre Seite sollte nun bereit sein, Analysedaten zu melden.

#### Analyse der Analysedaten

Jetzt sollten Sie in der Lage sein, zur [Analytics Web](https://analytics.google.com/analytics/web/) Homepage zurückzugehen und die gesammelten Daten über Ihre Seite zu betrachten (natürlich müssen Sie etwas Zeit lassen, damit tatsächlich Daten gesammelt werden).

Standardmäßig sollten Sie den Reiter für Berichte sehen, dieser sieht wie folgt aus:

![Wie Google Analytics Daten in seinem Hauptberichts-Dashboard sammelt](analytics-reporting.png)

Es gibt eine riesige Menge an Daten, die Sie mit Google Analytics betrachten können — angepasste Berichte in verschiedenen Kategorien, etc. — und wir haben nicht die Zeit, alles zu besprechen.
[Erste Schritte mit Analytics](https://support.google.com/analytics/answer/9304153) bietet einige nützliche Leitlinien zur Berichterstattung (und mehr) für Anfänger.

Sie können sehen, welche Browser und Betriebssysteme Ihre Benutzer verwenden, indem Sie im Menü links _Zielgruppe > Technologie > Browser & Betriebssystem_ auswählen.

> [!NOTE]
> Wenn Sie Google Analytics verwenden, müssen Sie sich vor irreführenden Verzerrungen in Acht nehmen, z.B., "Wir haben keine Firefox Mobile-Nutzer" könnte Sie dazu verleiten, die Unterstützung für Firefox Mobile zu vernachlässigen. Aber Sie werden keine Firefox Mobile-Nutzer haben, wenn die Website von Anfang an auf Firefox Mobile nicht funktionierte.

### Weitere Überlegungen

Sie sollten Barrierefreiheit als Anforderung für Tests der A-Klasse aufnehmen.

Außerdem sollten Sie sich der situationsspezifischen Bedürfnisse bewusst sein. Zum Beispiel, wenn Ihr Produkt einen Markt anspricht, bei dem Mobiltelefone das primäre Mittel zum Internetzugang sind, werden Sie wahrscheinlich die Unterstützung für mobile Browser zur Priorität machen.

### Endgültige Unterstützungsübersicht

Unsere endgültige Unterstützungsübersicht könnte letztlich wie folgt aussehen:

1. A-Klasse: Chrome und Firefox für Windows/Mac, Safari für Mac, und Edge (die letzten zwei Versionen von jedem), iOS Safari für iPhone/iPad, Android Standardbrowser (die letzten zwei Versionen) auf Handy/Tablet, Chrome und Firefox für Android (die letzten zwei Versionen) auf Handy/Tablet. Barrierefreiheit, die häufige Tests besteht.
2. B-Klasse: Opera Mini.
3. C-Klasse: Opera, andere spezielle moderne Browser.

## Was werden Sie testen?

Wenn Sie eine neue Ergänzung zu Ihrem Codebestand haben, die getestet werden muss, sollten Sie, bevor Sie mit dem Testen beginnen, eine Liste von Testanforderungen zusammenstellen, die für eine Akzeptanz bestehen müssen. Diese Anforderungen können visuell oder funktional sein – beide verbinden sich zu einem brauchbaren Website-Feature.

Betrachten Sie das folgende Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html) und das [Beispiel im Live-Betrieb](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)):

![Wie man ein Testszenario vorbereitet, das Design- und Benutzeranforderungen beinhaltet](sliding-box-demo.png)

Testkriterien für diese Funktion könnten so formuliert werden:

A- und B-Klasse:

- Die Schaltfläche sollte mit dem primären Steuerungsmechanismus des Benutzers aktivierbar sein, welcher auch immer es ist — dies sollte Maus, Tastatur und Touch umfassen.
- Durch Umschalten der Schaltfläche sollte das Informationsfeld erscheinen/verschwinden.
- Der Text sollte lesbar sein.
- Sehbehinderte Benutzer, die Screenreader verwenden, sollten auf den Text zugreifen können.

A-Klasse:

- Das Informationsfeld sollte geschmeidig animiert werden, wenn es erscheint/verschwindet.
- Der Verlauf und der Textschatten sollten erscheinen, um das Aussehen des Feldes zu verbessern.

Sie bemerken vielleicht, dass die Schaltfläche nicht nur mit der Tastatur nutzbar ist. Wir könnten dies mit JavaScript beheben, um eine Tastatursteuerung für das Umschalten zu implementieren, oder einen anderen Ansatz verwenden.

Diese Testkriterien sind nützlich, weil sie:

- Ihnen eine Reihe von Schritten bieten, denen Sie folgen können, wenn Sie Tests durchführen.
- Einfach in eine Reihe von Anweisungen umgewandelt werden können, denen Benutzergruppen folgen, wenn sie Tests durchführen (z.B. „versuchen Sie, die Schaltfläche mit Ihrer Maus zu aktivieren, und dann mit der Tastatur…“) — siehe [Benutzer-Testing](#benutzer-tests) unten.
- Auch als Grundlage für das Schreiben automatisierter Tests dienen können. Es ist einfacher, solche Tests zu schreiben, wenn Sie genau wissen, was Sie testen möchten und was die Erfolgskriterien sind (siehe [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#selenium), später in der Serie).

## Einrichtung eines Testlabors

Eine Möglichkeit, Browser-Tests durchzuführen, besteht darin, die Tests selbst zu machen. Dazu werden Sie wahrscheinlich eine Kombination aus tatsächlichen physischen Geräten und emulierten Umgebungen (entweder mit einem Emulator oder einer virtuellen Maschine) verwenden.

### Physische Geräte

Es ist in der Regel besser, ein echtes Gerät zu haben, auf dem der zu testende Browser läuft — dies bietet die größte Genauigkeit in Bezug auf Verhalten und Gesamtnutzererlebnis. Sie werden wahrscheinlich etwas in der Art wie das Folgende für ein vernünftiges, niedrigstufiges Gerätestatus-Labor haben wollen:

- Einen Mac mit den installierten Browsern, die Sie testen müssen — dies kann Firefox, Chrome, Opera und Safari umfassen.
- Einen Windows-PC mit den installierten Browsern, die Sie testen müssen — dies kann Edge (oder IE), Chrome, Firefox und Opera umfassen.
- Ein Android-Handy und -Tablet mit höherer Spezifikation und den zu testenden Browsern — dies kann Chrome, Firefox und Opera Mini für Android sowie den ursprünglichen Android-Standardbrowser umfassen.
- Ein iOS-Handy und -Tablet mit höherer Spezifikation und den zu testenden Browsern — dies kann iOS Safari und Chrome, Firefox und Opera Mini für iOS umfassen.

Die folgenden sind ebenfalls gute Optionen, wenn Sie sie bekommen können:

- Ein Linux-PC, falls spezifische Fehler in Linux-Versionen von Browsern getestet werden müssen. Linux-Nutzer verwenden häufig Firefox, Opera und Chrome. Wenn Sie nur einen Computer zur Verfügung haben, könnten Sie in Betracht ziehen, eine Dual-Boot-Maschine einzurichten, auf der Linux und Windows auf separaten Partitionen laufen. Das Ubuntu-Installationsprogramm macht dies recht einfach; siehe [WindowsDualBoot](https://help.ubuntu.com/community/WindowsDualBoot) für Hilfe dazu.
- Ein paar weniger leistungsstarke mobile Geräte, damit Sie die Leistung von Funktionen wie Animationen auf weniger leistungsstarken Prozessoren testen können.

Ihre Hauptarbeitsmaschine kann auch ein Ort sein, um andere Werkzeuge für spezielle Zwecke zu installieren, wie z.B. Werkzeuge für Barrierefreiheitsprüfungen, Screenreader und Emulatoren/virtuelle Maschinen.

Einige größere Unternehmen haben Gerätestatus-Labore, die eine sehr große Auswahl an verschiedenen Geräten haben, was es den Entwicklern ermöglicht, Fehler auf sehr spezifischen Browser-/Gerätekombinationen aufzuspüren. Kleinere Unternehmen und Einzelpersonen sind im Allgemeinen nicht in der Lage, sich ein solch anspruchsvolles Labor zu leisten, und behelfen sich daher meistens mit kleineren Laboren, Emulatoren, virtuellen Maschinen und kommerziellen Testanwendungen.

Wir werden jede der anderen Optionen unten behandeln.

> [!NOTE]
> Einige Bemühungen wurden unternommen, öffentlich zugängliche Gerätestatus-Labore zu schaffen — siehe [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/).

> [!NOTE]
> Wir müssen auch die Barrierefreiheit in Betracht ziehen — es gibt eine Reihe nützlicher Werkzeuge, die Sie auf Ihrem Gerät installieren können, um Barrierefreiheitstests zu erleichtern, aber wir werden diese im Artikel „Umgang mit häufigen Barrierefreiheitsproblemen“ behandeln, später in diesem Kurs.

### Emulatoren

Emulatoren sind im Grunde Programme, die innerhalb Ihres Computers laufen und ein Gerät oder bestimmte Gerätebedingungen irgendeiner Art emulieren, wodurch einige Ihrer Tests bequemer durchgeführt werden können, als eine bestimmte Hardware-/Softwarekombination für den Test zu finden.

Ein Emulator könnte so einfach sein wie das Testen einer Gerätebedingung. Zum Beispiel, wenn Sie einige schnelle und schmutzige Tests Ihrer Breiten-/Höhen-Medienabfragen für responsive Design machen möchten, könnten Sie den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) von Firefox verwenden. Safari hat ebenfalls einen ähnlichen Modus, der durch _Safari > Einstellungen_ aktiviert werden kann, indem Sie _Entwicklungsmenü anzeigen_ anhaken, und dann _Entwickeln > In den Modus für responsive Darstellung wechseln_ wählen. Chrome hat auch etwas Ähnliches: den Gerätemodus (siehe [Simulate Mobile Devices with Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)).

Häufig müssen Sie jedoch irgendeine Art von Emulator installieren. Die häufigsten Geräte/Browser, die Sie testen möchten, sind die folgenden:

- Die offizielle [Android Studio IDE](https://developer.android.com/studio/) zur Entwicklung von Android-Apps ist mit etwas Gewicht für das bloße Testen von Websites auf Google Chrome oder dem alten Stock Android Browser versehen, aber sie kommt mit einem robusten [Emulator](https://developer.android.com/studio/run/emulator.html). Wenn Sie etwas Leichteres wollen, ist [Andy](https://www.andyroid.net/) eine vernünftige Option, die auf Windows und Mac läuft.
- Apple bietet eine App namens [Simulator](https://help.apple.com/simulator/mac/current/), die über die [XCode](https://developer.apple.com/xcode/)-Entwicklungsumgebung läuft und iPad/iPhone/Apple Watch/Apple TV emuliert. Dies umfasst den nativen iOS Safari-Browser. Leider läuft dies nur auf einem Mac.

Sie können oft auch Simulatoren für andere mobile Geräteumgebungen finden, z.B.:

- Sie können Opera Mini alleine emulieren, wenn Sie es testen möchten.

> [!NOTE]
> Viele Emulatoren erfordern tatsächlich die Verwendung einer virtuellen Maschine (siehe unten); wenn dies der Fall ist, werden oft Anleitungen bereitgestellt, und/oder die Verwendung der virtuellen Maschine ist in den Installer des Emulators integriert.

### Virtuelle Maschinen

Virtuelle Maschinen sind Anwendungen, die auf Ihrem Desktop-Computer laufen und es Ihnen ermöglichen, ganze Betriebssysteme zu emulieren, wobei jedes in seinen eigenen virtuellen Festplatten compartmentalisiert ist (oft durch eine einzige große Datei auf der Festplatte des Host-Computers vertreten). Es gibt eine Reihe von beliebten Virtual-Machine-Apps wie [Parallels](https://www.parallels.com/), [VMware](https://www.vmware.com/) und [Virtual Box](https://www.virtualbox.org/wiki/Downloads); letzteres gefällt uns persönlich, da es kostenlos ist.

> [!NOTE]
> Sie benötigen viel freien Festplattenspeicher, um virtuelle Maschinenemulatoren auszuführen; jedes Betriebssystem, das Sie emulieren, kann viel Speicher beanspruchen. Sie wählen in der Regel den für jede Installation gewünschten Speicherplatz; wahrscheinlich kommen Sie mit 10 GB aus, aber einige Quellen empfehlen bis zu 50 GB oder mehr, damit das Betriebssystem zuverlässig läuft. Eine gute Option, die von den meisten virtuellen Maschinen-Apps angeboten wird, ist die Erstellung einer **dynamisch zugewiesenen** Festplatte, die je nach Bedarf wächst und schrumpft.

Um eine Virtual Box zu verwenden, müssen Sie:

1. Ein Installationsmedium oder -bild (z.B. ISO-Datei) für das zu emulierende Betriebssystem in die Hände bekommen. Virtual Box kann diese nicht bereitstellen; die meisten, wie Windows OSes, sind kommerzielle Produkte, die nicht frei verbreitet werden können.
2. [Laden Sie den entsprechenden Installer](https://www.virtualbox.org/wiki/Downloads) für Ihr Betriebssystem herunter und installieren Sie ihn.
3. Öffnen Sie die App; Ihnen wird eine Ansicht wie die folgende angezeigt: ![Anwendungsfenster, linkes Menü listet Windows-Betriebssystem und Opera TV-Emulatoren auf. Rechtes Menü enthält mehrere Untermenüs, darunter Allgemein, System, Anzeige, Einstellungen, Audio, Netzwerk und eine Vorschau.](virtualbox.png)
4. Um eine neue virtuelle Maschine zu erstellen, drücken Sie die Schaltfläche _Neu_ in der oberen linken Ecke.
5. Folgen Sie den Anweisungen und füllen Sie die folgenden Dialoge entsprechend aus. Sie werden:
   1. Einen Namen für die neue virtuelle Maschine bereitstellen
   2. Auswählen, welches Betriebssystem und welche Version Sie darauf installieren
   3. Festlegen, wie viel RAM zugewiesen werden soll (wir würden etwas wie 2048 MB oder 2 GB empfehlen)
   4. Eine virtuelle Festplatte erstellen (wählen Sie die Standardeinstellungen in den drei Dialogfeldern mit _Create a virtual hard disk now_, _VDI (virtual disk image)_ und _Dynamically allocated_).
   5. Den Dateispeicherort und die Größe der virtuellen Festplatte festlegen (wählen Sie einen sinnvollen Namen und Speicherort, und geben Sie für die Größe etwa 50 GB an, oder so viel, wie Sie anzugeben bereit sind).

Jetzt sollte die neue Virtual Box im linken Menü des Hauptfensters der Virtual Box-Benutzeroberfläche erscheinen. Zu diesem Zeitpunkt können Sie es doppelklicken, um es zu öffnen — es wird versuchen, die virtuelle Maschine zu starten, hat aber noch kein Betriebssystem (OS) installiert. Zu diesem Zeitpunkt müssen Sie das Dialogfeld auf das Installationsmedium/-bild verweisen, und es wird die Schritte zur Installation des Betriebssystems wie auf einer physischen Maschine durchlaufen.

![Wie man die Virtual Box für ein bestimmtes Betriebssystem installiert](virtualbox-installer.png)

> [!WARNING]
> Sie müssen sicherstellen, dass Sie das Betriebssystem-Image haben, das Sie auf der virtuellen Maschine installieren möchten, und es sofort installieren. Wenn Sie den Prozess an diesem Punkt abbrechen, kann dies die virtuelle Maschine unbrauchbar machen und es dazu führen, dass Sie sie löschen und neu erstellen müssen. Das ist nicht fatal, aber es ist lästig.

Nachdem der Prozess abgeschlossen ist, sollten Sie eine virtuelle Maschine mit einem darin laufenden Betriebssystem in einem Fenster auf Ihrem Host-Computer haben.

![Screenshot von Windows XP, ausgeführt in Virtual Box und auf macOS laufend](virtualbox-running.png)

Sie müssen diese virtuelle Betriebssysteminstallation genauso behandeln, wie Sie jede echte Installation behandeln würden — zum Beispiel, neben der Installation der zu testenden Browser auch ein Anti-Virus-Programm installieren, um es vor Viren zu schützen.

Mehrere virtuelle Maschinen zu haben, ist sehr nützlich, insbesondere für Windows IE/Edge-Tests — auf Windows können Sie nicht gleichzeitig mehrere Versionen des Standardbrowsers installiert haben, daher möchten Sie möglicherweise eine Bibliothek mit virtuellen Maschinen erstellen, um verschiedene Tests nach Bedarf durchzuführen, z.B.:

- Windows 10 mit Edge 14
- Windows 10 mit Edge 13

> [!NOTE]
> Ein weiterer Vorteil von virtuellen Maschinen ist, dass die virtuellen Festplattenimages ziemlich in sich geschlossen sind. Wenn Sie in einem Team arbeiten, können Sie ein virtuelles Festplattenimage erstellen, dann kopieren und weitergeben. Stellen Sie nur sicher, dass Sie die erforderlichen Lizenzen besitzen, um all diese Kopien von Windows oder was auch immer sonst laufen zu lassen, wenn es sich um ein lizenziertes Produkt handelt.

### Automatisierung und kommerzielle Apps

Wie im letzten Kapitel erwähnt, können Sie sich eine Menge Schmerz beim Browser-Testing ersparen, indem Sie ein Automatisierungssystem verwenden. Sie können Ihr eigenes Testautomatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebteste Wahl), was einige Einrichtung erfordert, aber sehr lohnend sein kann, wenn Sie es geschafft haben.

Es gibt auch kommerzielle Werkzeuge wie [Sauce Labs](https://saucelabs.com/), [Browser Stack](https://www.browserstack.com/) und [LambdaTest](https://www.lambdatest.com/), die solche Dinge für Sie erledigen, ohne dass Sie sich mit der Einrichtung auseinandersetzen müssen, falls Sie bereit sind, etwas Geld in Ihre Tests zu investieren.

Eine weitere Alternative ist die Verwendung von No-Code-Testautomatisierungswerkzeugen wie [Endtest](https://www.endtest.io/).

Wir werden später im Modul sehen, wie man solche Werkzeuge benutzt.

## Benutzer-Tests

Bevor wir weitermachen, schließen wir diesen Artikel mit einem Gespräch über Benutzer-Tests ab — das kann eine gute Option sein, wenn Sie eine willige Benutzergruppe haben, auf der Sie Ihre neue Funktionalität testen können. Bedenken Sie, dass dies so einfach oder so anspruchsvoll sein kann, wie Sie möchten — Ihre Benutzergruppe könnte aus einer Gruppe von Freunden, einer Gruppe von Kollegen oder einer Gruppe von unbezahlten oder bezahlten Freiwilligen bestehen, je nachdem, ob Sie Geld für Tests ausgeben können.

Im Allgemeinen lassen Sie Ihre Benutzer die Seite oder Ansicht besuchen, die die neue Funktionalität auf einem Entwicklungssystem enthält, damit Sie die endgültige Website oder Änderung nicht live schalten, bis sie fertig ist. Sie sollten sie einige Schritte ausführen lassen und die Ergebnisse, die sie erhalten, melden lassen. Es ist nützlich, eine Reihe von Schritten (manchmal als Drehbuch bezeichnet) bereitzustellen, damit Sie verlässlichere Ergebnisse erhalten, die sich auf das beziehen, was Sie testen möchten. Wir haben dies im Abschnitt [Was werden Sie testen](#was_are_you_going_to_test) oben erwähnt — es ist einfach, die dort detaillierten Testkriterien in Schritte umzuwandeln, denen zu folgen ist. Zum Beispiel würden die Folgenden für einen sehenden Benutzer funktionieren:

- Klicken Sie mehrmals mit der Maus auf die Fragezeichenschaltfläche auf Ihrem Desktop-Computer. Aktualisieren Sie das Browserfenster.
- Wählen Sie die Fragezeichenschaltfläche auf Ihrem Desktop-Computer mit der Tastatur aus und aktivieren Sie sie mehrmals.
- Tippen Sie die Fragezeichenschaltfläche auf Ihrem Touchscreen-Gerät mehrmals an.
- Das Umschalten der Schaltfläche sollte das Informationsfeld erscheinen/verschwinden lassen. Tut es das in jedem der obigen drei Fälle?
- Ist der Text lesbar?
- Animiert das Informationsfeld geschmeidig, wenn es erscheint/verschwindet?

Wenn Sie Tests durchführen, kann es auch eine gute Idee sein:

- Wo möglich, ein separates Browser-Profil einzurichten, mit deaktivierten Browsererweiterungen und anderen solchen Dingen, und Ihre Tests in diesem Profil auszuführen (siehe [Use the Profile Manager to create and remove Firefox profiles](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) und [Share Chrome with others or add personas](https://support.google.com/chrome/answer/2364824), zum Beispiel).
- Die Private-Mode-Funktionalität des Browsers beim Ausführen von Tests zu nutzen, wo verfügbar (z.B. [Private Browsing](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) in Firefox, [Incognito Mode](https://support.google.com/chrome/answer/95464) in Chrome), sodass Dinge wie Cookies und temporäre Dateien nicht gespeichert werden.

Diese Schritte sollen sicherstellen, dass der Browser, in dem Sie testen, so "rein" wie möglich ist, d.h. es ist nichts installiert, was die Testergebnisse beeinflussen könnte.

> [!NOTE]
> Eine weitere nützliche einfache Option, wenn Sie die Hardware zur Verfügung haben, ist es, Ihre Websites auf minderwertigen Telefonen/anderen Geräten zu testen — da Websites größer werden und mehr Effekte bieten, besteht eine höhere Wahrscheinlichkeit, dass die Website langsamer wird, daher müssen Sie der Leistung mehr Aufmerksamkeit schenken. Versuchen Sie, Ihre Funktionalität auf einem Gerät mit niedrigem Standard zum Laufen zu bringen, wird es wahrscheinlicher machen, dass die Erfahrung auf höherwertigen Geräten gut sein wird.

> [!NOTE]
> Einige Server-seitige Entwicklungsumgebungen bieten nützliche Mechanismen, um Site-Änderungen nur für eine Teilmenge von Benutzern auszurollen, was einen nützlichen Mechanismus zum Testen einer Funktion durch eine Teilmenge von Benutzern ohne die Notwendigkeit eines separaten Entwicklungsservers bietet. Ein Beispiel ist [Django Waffle Flags](https://github.com/django-waffle/django-waffle).

## Zusammenfassung

Nach der Lektüre dieses Artikels sollten Sie nun eine gute Vorstellung davon haben, was Sie tun können, um Ihre Zielgruppe/Ihre Zielbrowserliste zu identifizieren, und dann effektiv Cross-Browser-Tests an dieser Liste durchzuführen.

Als nächstes widmen wir uns den tatsächlichen Codefragen, die Ihre Tests möglicherweise aufdecken, beginnend mit HTML und CSS.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}
