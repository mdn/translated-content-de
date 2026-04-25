---
title: Strategien für das Testen
short-title: Testing strategies
slug: Learn_web_development/Extensions/Testing/Testing_strategies
l10n:
  sourceCommit: ef78a9a3336c884fb3587e4ff833e64704296f01
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}

Dieser Artikel erklärt, wie man ein Cross-Browser-Testing durchführt: wie man auswählt, welche Browser und Geräte getestet werden sollen, wie man diese Browser und Geräte tatsächlich testet und wie man mit Benutzergruppen testet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen; eine Vorstellung
        von den grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des Cross-Browser-Testings</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis für die grundlegenden Konzepte des
        Cross-Browser-Testings zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Auswahl der zu testenden Browser und Geräte

Da Sie nicht jede Kombination von Browsern und Geräten testen können, reicht es aus, wenn Sie sicherstellen, dass Ihre Website auf den wichtigsten Geräten funktioniert. In der praktischen Anwendung bedeutet "wichtig" oft "häufig von der Zielgruppe verwendet".

Sie können Browser und Geräte nach dem Maß an Unterstützung klassifizieren, das Sie bereitstellen möchten. Zum Beispiel:

1. A-Grade: Häufige/moderne Browser — Bekannt dafür, fähig zu sein. Gründlich testen und volle Unterstützung bieten.
2. B-Grade: Ältere/weniger fähige Browser — Bekannt dafür, weniger fähig zu sein. Testen und eine grundlegendere Erfahrung bieten, die vollen Zugriff auf Kerninformationen und -dienste gibt.
3. C-Grade: Seltene/unbekannte Browser — Nicht testen, aber annehmen, dass sie fähig sind. Die volle Website bereitstellen, die mit den durch defensives Codieren bereitgestellten Fallbacks funktionieren sollte.

In den folgenden Abschnitten werden wir ein Unterstützungsdiagramm in diesem Format erstellen.

> [!NOTE]
> Yahoo machte diesen Ansatz zuerst mit ihrem [Graded Browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support) Ansatz populär.

### Vorhersagen, welche Browser Ihre Zielgruppe am häufigsten verwendet

Dies beinhaltet typischerweise fundierte Annahmen basierend auf Benutzer-Demografien. Angenommen, Ihre Benutzer befinden sich in Nordamerika und Westeuropa:

Eine schnelle Online-Suche sagt Ihnen, dass die meisten Menschen in Nordamerika und Westeuropa Windows- oder Mac-Desktops/Laptops verwenden, wobei die Hauptbrowser Chrome, Firefox, Safari und Edge sind. Sie würden wahrscheinlich nur die neuesten Versionen dieser Browser testen wollen, da diese regelmäßig Updates erhalten. Diese sollten alle in die A-Grade-Stufe aufgenommen werden.

Die meisten Menschen in dieser Demografie verwenden auch iOS- oder Android-Telefone, sodass Sie wahrscheinlich die neuesten Versionen von iOS Safari, die letzten paar Versionen des alten Android-Standardbrowsers sowie Chrome und Firefox für iOS und Android testen möchten. Idealerweise testen Sie diese auf einem Telefon und einem Tablet, um sicherzustellen, dass reaktionsfähige Designs funktionieren.

Opera Mini ist nicht sehr fähig, komplexes JavaScript auszuführen, daher sollten wir es auch in B-Grade einordnen.

So haben wir unsere Entscheidung, welche Browser getestet werden sollen, auf den Browsern basiert, von denen wir erwarten, dass unsere Benutzer sie verwenden. Dies gibt uns das folgende Unterstützungsdiagramm bisher:

1. A-Grade: Chrome und Firefox für Windows/Mac, Safari für Mac, Edge für Windows, iOS Safari für iPhone/iPad, Android-Standardbrowser (letzte zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (letzte zwei Versionen) auf Telefon/Tablet.
2. B-Grade: Opera Mini.
3. C-Grade: n. a.

Wenn Ihre Zielgruppe sich hauptsächlich woanders befindet, können die häufigsten Browser und Betriebssysteme von den oben genannten abweichen.

> [!NOTE]
> "Der CEO meines Unternehmens verwendet ein Blackberry, also sollten wir sicherstellen, dass es darauf gut aussieht", kann auch berücksichtigt werden.

### Browser-Statistiken

Einige Websites zeigen, welche Browser in einer bestimmten Region beliebt sind. Zum Beispiel gibt [Statcounter](https://gs.statcounter.com/) eine Vorstellung von Trends in Nordamerika.

### Nutzung von Analytics

Eine viel genauere Datenquelle, wenn Sie darauf zugreifen können, ist eine Analytics-App wie [Google Analytics](https://marketingplatform.google.com/about/analytics/), die Ihnen genau mitteilt, welche Browser von den Personen verwendet werden, die Ihre Website durchsuchen. Natürlich hängt dies davon ab, dass Sie bereits eine Website haben, auf der Sie es nutzen können, daher ist es nicht gut für völlig neue Websites.

Sie können auch open-source und datenschutzorientierte Analyseplattformen wie [Open Web Analytics](https://www.openwebanalytics.com/) und [Matomo](https://matomo.org/) in Betracht ziehen. Diese erwarten, dass Sie die Analyseplattform selbst hosten.

#### Einrichtung von Google Analytics

1. Zuerst benötigen Sie ein Google-Konto. Verwenden Sie dieses Konto, um sich bei [Google Analytics](https://marketingplatform.google.com/about/analytics/) anzumelden.
2. Wählen Sie die [Google Analytics](https://analytics.google.com/analytics/web/) (Web-) Option und klicken Sie auf die Schaltfläche _Anmelden_.
3. Geben Sie Ihre Website/App-Details auf der Anmeldeseite ein. Dies ist ziemlich intuitiv einzurichten; das wichtigste Feld ist die Website-URL. Dies muss die Root-URL Ihrer Website/App sein.
4. Sobald Sie alles ausgefüllt haben, klicken Sie auf die Schaltfläche _Tracking-ID abrufen_ und akzeptieren die erscheinenden Nutzungsbedingungen.
5. Die nächste Seite liefert Ihnen einige Code-Snippets und andere Anweisungen. Für eine einfache Website müssen Sie den Codeblock _Websiten-Tracking_ kopieren und in alle verschiedenen Seiten einfügen, die Sie mit Google Analytics auf Ihrer Website verfolgen möchten. Sie könnten die Snippets unter Ihrem abschließenden `</body>`-Tag oder an einer anderen passenden Stelle platzieren, die verhindert, dass es mit ihrem Anwendungs-Code durcheinander gerät.
6. Laden Sie die Änderungen auf den Entwicklungsserver hoch, oder dorthin, wo Ihr Code benötigt wird.

Das war's! Ihre Website sollte nun bereit sein, analytische Daten zu melden.

#### Analyse von Analytics-Daten

Nun sollten Sie in der Lage sein, zur [Analytics Web](https://analytics.google.com/analytics/web/) Homepage zurückzukehren, und anfangen, die Daten zu betrachten, die Sie über Ihre Website gesammelt haben (Sie müssen natürlich ein wenig Zeit lassen, damit einige Daten tatsächlich gesammelt werden können).

Standardmäßig sollten Sie die Berichtsregisterkarte wie folgt sehen:

![How google analytics collects data in its main reporting dashboard](analytics-reporting.png)

Es gibt eine riesige Menge an Daten, die Sie sich mit Google Analytics ansehen können — benutzerdefinierte Berichte in verschiedenen Kategorien usw. — und wir haben nicht die Zeit, alles zu besprechen.
[Getting started with Analytics](https://support.google.com/analytics/answer/9304153) bietet einige nützliche Anleitungen für Reporting (und mehr) für Anfänger.

Sie können sehen, welche Browser und Betriebssysteme Ihre Benutzer verwenden, indem Sie im linken Menü _Audience > Technology > Browser & OS_ auswählen.

> [!NOTE]
> Wenn Sie Google Analytics verwenden, sollten Sie sich vor irreführenden Verzerrungen in Acht nehmen, z.B. "Wir haben keine Firefox Mobile Nutzer", was dazu führen könnte, dass Sie es versäumen, Firefox Mobil zu unterstützen. Aber Sie werden keine Firefox Mobile Benutzer haben, wenn die Website auf Firefox Mobil von Anfang an kaputt war.

### Andere Überlegungen

Sie sollten Zugänglichkeit als Testanforderung des Grade A einschließen.

Außerdem sollten Sie sich der spezifischen Bedürfnisse der Situation bewusst sein. Wenn Ihr Produkt beispielsweise einen Markt anvisiert, auf dem Mobiltelefone das primäre Mittel zum Zugang zum Internet sind, möchten Sie wahrscheinlich die Unterstützung mobiler Browser priorisieren.

### Endgültiges Unterstützungsdiagramm

Unser endgültiges Unterstützungsdiagramm wird folgendermaßen aussehen:

1. A-Grade: Chrome und Firefox für Windows/Mac, Safari für Mac, und Edge (die letzten zwei Versionen jedes), iOS Safari für iPhone/iPad, Android-Standardbrowser (die letzten zwei Versionen) auf Telefon/Tablet, Chrome und Firefox für Android (die letzten zwei Versionen) auf Telefon/Tablet. Zugänglichkeit, die allgemeine Tests besteht.
2. B-Grade: Opera Mini.
3. C-Grade: Opera, andere Nischen-Modern-Browser.

## Was werden Sie testen?

Wenn Sie eine neue Ergänzung Ihres Codes haben, die getestet werden muss, sollten Sie, bevor Sie mit dem Testen beginnen, eine Liste von Testanforderungen schreiben, die bestehen müssen, um akzeptiert zu werden. Diese Anforderungen können visuell oder funktional sein — beide zusammen ergeben ein nutzbares Website-Feature.

Betrachten Sie das folgende Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html), und auch das [Beispiel, das live läuft](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)):

![How to prepare a testing scenario featuring the design and user requirements](sliding-box-demo.png)

Testkriterien für diese Funktion könnten so geschrieben werden:

A und B Grade:

- Die Schaltfläche sollte durch den primären Steuermechanismus des Benutzers aktivierbar sein, was auch immer das ist — dies sollte Maus, Tastatur und Touch umfassen.
- Das Umschalten der Schaltfläche sollte das Informationsfeld ein-/ausblenden.
- Der Text sollte lesbar sein.
- Sehbehinderte Benutzer, die Bildschirmlesegeräte verwenden, sollten auf den Text zugreifen können.

A-Grade:

- Das Informationsfeld sollte sanft animieren, während es erscheint/verschwindet.
- Der Verlauf und der Textschatten sollten das Aussehen des Feldes verbessern.

Sie bemerken vielleicht, dass die Schaltfläche mit nur der Tastatur nicht benutzbar ist. Wir könnten dies mit JavaScript beheben, um eine Tastatursteuerung für das Umschalten zu implementieren, oder einen anderen Ansatz verwenden.

Diese Testkriterien sind nützlich, weil:

- Sie geben Ihnen eine Reihe von Schritten, die Sie befolgen müssen, wenn Sie Tests durchführen.
- Sie können leicht in Anweisungen für Benutzergruppen umgewandelt werden, die bei der Durchführung von Tests zu befolgen sind (z.B. "Versuchen Sie, die Schaltfläche mit Ihrer Maus zu aktivieren und dann mit der Tastatur…") — siehe [Benutzertests](#benutzertests) unten.
- Sie können auch eine Grundlage für das Schreiben automatisierter Tests bieten. Es ist einfacher, solche Tests zu schreiben, wenn Sie genau wissen, was Sie testen möchten und was die Erfolgskriterien sind (siehe [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#selenium) später in der Serie).

## Ein Testlabor zusammenstellen

Eine Option, um Browser-Tests durchzuführen, besteht darin, die Tests selbst auszuführen. Um dies zu tun, verwenden Sie wahrscheinlich eine Kombination aus tatsächlichen physischen Geräten und simulierten Umgebungen (entweder mit einem Emulator oder einer virtuellen Maschine).

### Physische Geräte

Es ist allgemein besser, ein echtes Gerät mit dem zu testenden Browser zu haben — dies bietet die größte Genauigkeit hinsichtlich Verhalten und allgemeiner Benutzererfahrung. Sie werden wahrscheinlich so etwas wie das Folgende für ein vernünftiges, einfaches Gerätekabor benötigen:

- Einen Mac, mit den erforderlichen installierten Browsern — dies kann Firefox, Chrome, Opera und Safari umfassen.
- Einen Windows-PC, mit den erforderlichen installierten Browsern — dies kann Edge (oder IE), Chrome, Firefox und Opera umfassen.
- Ein leistungsstarkes Android-Telefon und Tablet mit dem erforderlichen installierten Browser — dies kann Chrome, Firefox sowie Opera Mini für Android umfassen, ebenso wie den ursprünglichen Android-Standardbrowser.
- Ein leistungsstarkes iOS-Telefon und Tablet mit den erforderlichen installierten Browsern — dies kann iOS Safari sowie Chrome, Firefox und Opera Mini für iOS umfassen.

Die folgenden sind auch gute Optionen, wenn Sie sie bekommen können:

- Einen Linux-PC, falls Sie spezifische Bugs von Linux-Browser-Versionen testen müssen. Linux-Benutzer verwenden häufig Firefox, Opera und Chrome. Wenn Sie nur einen einzigen Rechner zur Verfügung haben, können Sie in Betracht ziehen, einen Dual-Boot-Rechner einzurichten, der Linux und Windows auf separaten Partitionen ausführt.
- Ein paar weniger leistungsstarke mobile Geräte, sodass Sie die Leistung von Funktionen wie Animationen auf weniger leistungsstarken Prozessoren testen können.

Ihr Hauptarbeitsgerät kann auch ein Platz sein, um andere Werkzeuge für spezifische Zwecke zu installieren, wie z.B. Werkzeuge für die Zugänglichkeitsprüfung, Bildschirmlesegeräte und Emulatoren/virtuelle Maschinen.

Einige größere Unternehmen haben Gerätekabors, die eine sehr große Auswahl verschiedener Geräte vorhalten, die es Entwicklern ermöglichen, Fehler auf sehr spezifischen Browser-/Gerätekombinationen zu finden. Kleinere Unternehmen und Einzelpersonen können sich in der Regel ein solch ausgefeiltes Labor nicht leisten, daher arbeiten sie mit kleineren Labs, Emulatoren, virtuellen Maschinen und kommerziellen Test-Apps.

Wir werden die anderen Optionen unten behandeln.

> [!NOTE]
> Einige Bemühungen wurden unternommen, um öffentlich zugängliche Gerätekabors zu schaffen — siehe [Open Device Labs](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/).

> [!NOTE]
> Wir müssen auch die Zugänglichkeit berücksichtigen — es gibt eine Reihe nützlicher Tools, die Sie auf Ihrem Gerät installieren können, um die Zugänglichkeitstests zu erleichtern, aber wir werden diese im Artikel "Umgang mit häufigen Zugänglichkeitsproblemen" später im Kurs behandeln.

### Emulatoren

Emulatoren sind im Grunde Programme, die in Ihrem Computer laufen und ein Gerät oder bestimmte Gerätebedingungen irgendeiner Art emulieren, sodass Sie einige Ihrer Tests bequemer durchführen können, als eine bestimmte Kombination aus Hardware/Software zu finden, um zu testen.

Ein Emulator könnte so einfach sein wie das Testen einer Gerätebedingung. Wenn Sie zum Beispiel schnell und unaufwendig Ihre Breiten-/Höhenabfragen für reaktionsfähiges Design testen möchten, könnten Sie den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) von Firefox verwenden. Safari hat auch einen ähnlichen Modus, der durch das Gehen zu _Safari > Präferenzen_ und das Kontrollkästchen "Entwicklermenü anzeigen" aktiviert werden kann, dann wählen Sie _Entwickeln > Responsive Design Mode aktivieren_. Chrome hat ebenfalls etwas Ähnliches: den Gerätemodus (siehe [Simulate Mobile Devices with Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)).

Viel häufiger müssen Sie jedoch irgendeine Art von Emulator installieren. Die häufigsten Geräte/Browser, die Sie testen möchten, sind wie folgt:

- Das offizielle [Android Studio IDE](https://developer.android.com/studio/) für die Entwicklung von Android-Apps ist etwas schwergewichtig, nur um Websites bei Google Chrome oder dem alten Stock-Android-Browser zu testen, aber es bietet einen robusten [Emulator](https://developer.android.com/studio/run/emulator.html).
- Apple bietet eine App namens [Simulator](https://help.apple.com/simulator/mac/current/) an, die auf der Entwicklungsumgebung [Xcode](https://developer.apple.com/xcode/) läuft und iPad/iPhone/Apple Watch/Apple TV emuliert. Dies beinhaltet den nativen iOS Safari-Browser. Leider läuft dies nur auf einem Mac.

Sie können oft auch Simulatoren für andere mobile Geräteumgebungen finden, zum Beispiel:

- Sie können Opera Mini selbst emulieren, wenn Sie ihn testen möchten.

> [!NOTE]
> Viele Emulatoren erfordern tatsächlich den Einsatz einer virtuellen Maschine (siehe unten); wenn dies der Fall ist, werden oft Anweisungen bereitgestellt und/oder die Nutzung der virtuellen Maschine wird in den Installer des Emulators integriert.

### Virtuelle Maschinen

Virtuelle Maschinen sind Anwendungen, die auf Ihrem Desktop-Computer laufen und Ihnen erlauben, Emulationen ganzer Betriebssysteme auszuführen, von denen jedes in seiner eigenen virtuellen Festplatte gekapselt ist (oft repräsentiert durch eine einzelne große Datei, die auf der Festplatte des Host-Rechners existiert). Es gibt eine Reihe beliebter virtueller Machine-Apps, wie [Parallels](https://www.parallels.com/), [VMware](https://www.vmware.com/), und [Virtual Box](https://www.virtualbox.org/wiki/Downloads); wir persönlich mögen Letzteres, da es kostenlos ist.

> [!NOTE]
> Um virtuelle Maschinenemulationen auszuführen, benötigen Sie viel freien Speicherplatz auf der Festplatte; jedes Betriebssystem, das Sie emulieren, kann eine Menge Speicher belegen. Sie neigen dazu, den Speicherplatz zu wählen, den Sie für jede Installation möchten; wahrscheinlich könnten Sie mit 10GB auskommen, aber einige Quellen empfehlen bis zu 50GB oder mehr, damit das Betriebssystem zuverlässig läuft. Eine gute Option, die die meisten virtuellen Machine-Apps bieten, ist es, eine **dynamisch zugewiesene** Festplatte zu erstellen, die wächst und schrumpft, wenn Bedarf besteht.

Um eine Virtual Box zu verwenden, müssen Sie folgendes tun:

1. Holen Sie sich ein Installationsmedium oder -abbild (z.B. ISO-Datei) für das Betriebssystem, das Sie emulieren möchten. Virtual Box kann diese nicht zur Verfügung stellen; die meisten, wie Windows-OSes, sind kommerzielle Produkte, die nicht frei verteilt werden können.
2. [Laden Sie den entsprechenden Installer herunter](https://www.virtualbox.org/wiki/Downloads) für Ihr Betriebssystem und installieren Sie ihn.
3. Öffnen Sie die App; Ihnen wird eine Ansicht wie die folgende angezeigt werden: ![Application window left panel lists Windows operating system and Opera TV emulators. Right panel include several subpanels including general, system, display, settings, audio, network and a preview.](virtualbox.png)
4. Um eine neue virtuelle Machine zu erstellen, drücken Sie den _Neu_-Knopf in der linken oberen Ecke.
5. Folgen Sie den Anweisungen und füllen Sie die folgenden Dialogfelder entsprechend aus. Sie werden:
   1. Einen Namen für die neue virtuelle Maschine angeben
   2. Wählen, welches Betriebssystem und welche Version Sie darauf installieren
   3. Festlegen, wie viel RAM zugewiesen werden soll (wir empfehlen etwas wie 2048MB, oder 2GB)
   4. Eine virtuelle Festplatte erstellen (wählen Sie die Standardoptionen über die drei Dialogfelder _Jetzt eine virtuelle Festplatte erstellen_, _VDI (Virtual Disk Image)_ und _Dynamisch zugewiesen_).
   5. Den Speicherort und die Größe für die virtuelle Festplatte wählen (wählen Sie einen sinnvollen Namen und Ort, um sie aufzubewahren, und als Größe geben Sie etwa 50GB an, oder so viel, wie Sie bereit sind zu spezifizieren).

Nun sollte die neue virtuelle Box im linken Menü des Hauptfensters der Virtual Box-UI erscheinen. An diesem Punkt können Sie doppelklicken, um sie zu öffnen — sie wird beginnen, die virtuelle Maschine zu booten, aber sie wird noch nicht das Betriebssystem (OS) installiert haben. An diesem Punkt müssen Sie das Dialogfeld auf das Installationsabbild/-medium verweisen, und es wird die Schritte durchlaufen, um das OS genau wie auf einem physischen Rechner zu installieren.

![How to install the virtual Box for a specific operating system](virtualbox-installer.png)

> [!WARNING]
> Sie müssen sicherstellen, dass Sie das Betriebssystem-Abbild, das Sie auf der virtuellen Maschine installieren möchten, an diesem Punkt verfügbar haben und es sofort installieren. Wenn Sie den Vorgang an diesem Punkt abbrechen, kann dies die virtuelle Maschine unbrauchbar machen, und Sie müssen sie löschen und erneut erstellen. Das ist nicht fatal, aber es ist ärgerlich.

Nachdem der Prozess abgeschlossen ist, sollten Sie eine virtuelle Maschine haben, die ein Betriebssystem in einem Fenster auf Ihrem Host-Computer ausführt.

![Screenshot of Windows XP, hosted in Virtual box, and running on macOS](virtualbox-running.png)

Sie müssen diese virtuelle Betriebssysteminstallation wie jede echte Installation behandeln — zum Beispiel, neben der Installation der Browser, die Sie testen möchten, installieren Sie ein Anti-Virus-Programm, um sie vor Viren zu schützen.

Mehrere virtuelle Maschinen zu haben ist sehr nützlich, besonders für Windows IE/Edge-Tests — auf Windows können Sie nicht mehrere Versionen des Standardbrowsers nebeneinander installiert haben, daher möchten Sie vielleicht eine Bibliothek von virtuellen Maschinen aufbauen, um verschiedene Tests nach Bedarf durchzuführen, z.B.:

- Windows 10 mit Edge 14
- Windows 10 mit Edge 13

> [!NOTE]
> Ein weiterer Vorteil von virtuellen Maschinen ist, dass die virtuellen Festplattenabbilder relativ eigenständig sind. Wenn Sie in einem Team arbeiten, können Sie ein virtuelles Festplattenabbild erstellen, dann kopieren und weitergeben. Stellen Sie nur sicher, dass Sie die erforderlichen Lizenzen haben, um all diese Kopien von Windows oder was auch immer Sie laufen, wenn es sich um ein lizenziertes Produkt handelt.

### Automatisierung und kommerzielle Apps

Wie im letzten Kapitel erwähnt, können Sie den Großteil der Mühe aus dem Browsertest nehmen, indem Sie ein Automatisierungssystem verwenden. Sie können Ihr eigenes Test-Automatisierungssystem einrichten ([Selenium](https://www.selenium.dev/) ist die beliebte Wahl), das einige Einrichtungsarbeiten erfordert, aber sehr lohnend sein kann, wenn Sie es geschafft haben.

Es gibt auch kommerzielle Tools wie [Sauce Labs](https://saucelabs.com/) und [Browser Stack](https://www.browserstack.com/), die Ihnen diese Art von Dingen abnehmen, ohne dass Sie sich um die Einrichtung kümmern müssen, wenn Sie gewillt sind, etwas Geld in Ihre Tests zu investieren.

Eine andere Alternative ist die Nutzung von No-Code-Testautomatisierungstools wie [Endtest](https://www.endtest.io/).

Wir werden später in diesem Modul ansehen, wie man solche Tools verwendet.

## Benutzertests

Bevor wir weitergehen, möchten wir diesen Artikel mit einem kleinen Abschnitt über Benutzertests abschließen — dies kann eine gute Option sein, wenn Sie eine willige Benutzergruppe haben, um Ihre neue Funktionalität zu testen. Beachten Sie, dass dies so einfach oder so sophisticated wie Sie möchten sein kann — Ihre Benutzergruppe könnte eine Gruppe von Freunden, eine Gruppe von Kollegen oder eine Gruppe unbezahlter oder bezahlter Freiwilliger sein, abhängig davon, ob Sie Geld für Tests zur Verfügung haben.

Im Allgemeinen werden Sie Ihre Benutzer auf der Seite oder Ansicht mit der neuen Funktionalität auf irgendeinem Entwicklungsserver schauen lassen, sodass Sie nicht die endgültige Website oder Änderung live stellen, bis sie fertig ist. Sie sollten sie dazu bringen, einige Schritte zu befolgen und die Ergebnisse zu melden, die sie erhalten. Es ist nützlich, eine Reihe von Schritten (manchmal als Skript bezeichnet) bereitzustellen, damit Sie zuverlässigere Ergebnisse in Bezug auf das erhalten, was Sie testen wollten. Wir erwähnten dies im Abschnitt [Was werden Sie testen](#what_are_you_going_to_test) oben — es ist einfach, die dort detaillierten Testkriterien in Schritte umzuwandeln, die befolgt werden sollen. Zum Beispiel würde das Folgende für einen sehenden Benutzer funktionieren:

- Klicken Sie einige Male auf die Schaltfläche mit dem Fragezeichen mit der Maus auf Ihrem Desktop-Computer. Aktualisieren Sie das Browserfenster.
- Wählen und aktivieren Sie die Fragezeichen-Schaltfläche mit der Tastatur auf Ihrem Desktop-Computer einige Male.
- Tippen Sie einige Male auf die Fragezeichen-Schaltfläche auf Ihrem Touchscreen-Gerät.
- Das Umschalten der Schaltfläche sollte das Informationsfeld ein-/ausblenden. Tut es dies in jedem der oben genannten drei Fälle?
- Ist der Text lesbar?
- Animiert das Informationsfeld sanft, während es erscheint/verschwindet?

Beim Durchführen von Tests kann es auch eine gute Idee sein:

- Ein separates Browser-Profil einzurichten, wo möglich, mit deaktivierten Browser-Erweiterungen und ähnlichen Dingen, und Ihre Tests in diesem Profil durchzuführen (siehe [Verwenden Sie den Profil-Manager, um Firefox-Profile zu erstellen und zu löschen](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) und [Teilen Sie Chrome mit anderen oder fügen Sie Personas hinzu](https://support.google.com/chrome/answer/2364824), zum Beispiel).
- Die private Modus-Funktionalität des Browsers zu verwenden, wenn verfügbar, (z.B. [Private Browsing](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) in Firefox, [Incognito Mode](https://support.google.com/chrome/answer/95464) in Chrome), damit Dinge wie Cookies und temporäre Dateien nicht gespeichert werden.

Diese Schritte sind entworfen, um sicherzustellen, dass der Browser, in dem Sie testen, so "rein" wie möglich ist, d.h. dass nichts installiert ist, was die Testergebnisse beeinflussen könnte.

> [!NOTE]
> Eine andere nützliche einfache Option, wenn Sie die Hardware haben, ist es, Ihre Websites auf Geräten mit niedrigerem Ende zu testen — da Websites größer werden und mehr Effekte beinhalten, besteht eine höhere Chance, dass die Website langsamer wird, daher müssen Sie der Leistung mehr Aufmerksamkeit schenken. Wenn Sie versuchen, Ihre Funktionalität auf einem Low-End-Gerät zum Laufen zu bringen, ist es wahrscheinlicher, dass die Erfahrung auf höherwertigen Geräten gut ist.

> [!NOTE]
> Einige serverseitige Entwicklungsumgebungen bieten nützliche Mechanismen, um Website-Änderungen nur für eine Teilmenge von Benutzern bereitzustellen, was einen nützlichen Mechanismus bietet, um ein Feature von einer Teilmenge von Benutzern testen zu lassen, ohne dass ein separater Entwicklungsserver erforderlich ist. Ein Beispiel sind [Django Waffle Flags](https://github.com/django-waffle/django-waffle).

## Zusammenfassung

Nach dem Lesen dieses Artikels sollten Sie nun eine gute Vorstellung davon haben, was Sie tun können, um Ihre Zielgruppe/Ziel-Browser-Liste zu identifizieren und dann effektiv Cross-Browser-Tests auf dieser Liste durchzuführen.

Als nächstes werden wir unseren Fokus auf die tatsächlichen Code-Probleme richten, die Ihre Tests möglicherweise aufdecken, beginnend mit HTML und CSS.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Introduction","Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing")}}
