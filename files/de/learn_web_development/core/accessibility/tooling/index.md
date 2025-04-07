---
title: Barrierefreiheits-Tools und unterstützende Technologien
short-title: Accessibility tools
slug: Learn_web_development/Core/Accessibility/Tooling
l10n:
  sourceCommit: 9da2567689c0a4397b0d70efbbb878dec3115754
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}

> [!NOTE]
> Der Inhalt dieses Artikels ist derzeit unvollständig, entschuldigen Sie bitte! Wir arbeiten hart daran, den Abschnitt „MDN Webentwicklung Lernen“ zu verbessern, und wir werden die als unvollständig markierten Stellen ("TODO") bald fertigstellen.

Jetzt wenden wir uns den Barrierefreiheits-Tools zu und bieten Informationen zu den Arten von Tools, die Sie zur Lösung von Barrierefreiheitsproblemen verwenden können, sowie zu den unterstützenden Technologien, die von Menschen mit Behinderungen beim Surfen im Web eingesetzt werden. Sie werden diese Tools in den folgenden Artikeln verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und einem <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegenden Verständnis der Barrierefreiheitskonzepte</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit den Arten von Tools, die Sie zur Lösung von Barrierefreiheitsproblemen verwenden können, zum Beispiel Prüfungs-Tools.</li>
          <li>Einrichten von Bildschirmlesegeräten und deren Nutzung zum Testen von Websites auf Desktop und Mobilgeräten.</li>
          <li>Andere unterstützende Technologien wie große Texte oder Braille-Tastaturen, alternative Zeigegeräte und Bildschirmvergrößerer.</li>
          <li>Die Wichtigkeit von Benutzertests neben automatisierten Tests.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheits-Tools

Lassen Sie uns einen Blick auf die Tools werfen, die Sie bei der Implementierung barrierefreier Websites und der Behebung von Barrierefreiheitsproblemen verwenden können.

### Testen der Quellreihenfolge

Ihr Inhalt sollte in seiner Quellreihenfolge logisch Sinn ergeben – Sie können ihn später mit CSS genau an den gewünschten Ort platzieren, aber die Quellreihenfolge sollte von Anfang an stimmen.

Zum Testen können Sie das CSS einer Site deaktivieren und prüfen, wie verständlich sie ohne CSS ist. Dies könnten Sie manuell tun, indem Sie einfach das CSS aus Ihrem Code entfernen, aber der einfachste Weg ist, Browser-Funktionen zu verwenden, beispielsweise:

- Firefox: Wählen Sie _Ansicht > Seitenstil > Kein Stil_ aus dem Hauptmenü.
- Safari: Wählen Sie _Entwickeln > Stile deaktivieren_ aus dem Hauptmenü (um das Menü _Entwickeln_ zu aktivieren, wählen Sie _Safari > Einstellungen > Erweitert > Menü Entwickeln in der Menüleiste anzeigen_).
- Chrome: Installieren Sie die Web Developer Toolbar-Erweiterung, starten Sie den Browser neu. Klicken Sie auf das Zahnradsymbol, das erscheint, und wählen Sie _CSS > Alle Stile deaktivieren_.
- Edge: Wählen Sie _Ansicht > Stil > Kein Stil_ aus dem Hauptmenü.

### Farbkontrast-Prüfwerkzeuge

Bei der Auswahl eines Farbschemas für Ihre Website sollten Sie sicherstellen, dass der Text (Vordergrund) Farbe gut mit der Hintergrundfarbe kontrastiert. Ihr Design mag cool aussehen, aber es ist nicht nützlich, wenn Menschen mit Sehbehinderungen wie Farbenblindheit Ihren Inhalt nicht lesen können. Verwenden Sie ein Tool wie den [Color Contrast Checker von WebAIM](https://webaim.org/resources/contrastchecker/), um zu überprüfen, ob Ihr Schema ausreichend kontrastiert.

Ein weiterer Tipp ist, sich nicht nur auf Farben zur Kennzeichnung von Informationen zu verlassen, da dies für diejenigen nicht hilfreich ist, die die Farben nicht sehen können. Anstatt zum Beispiel erforderliche Formularfelder in Rot zu markieren, markieren Sie sie mit einem Sternchen und in Rot.

> [!NOTE]
> Ein hohes Kontrastverhältnis ermöglicht es auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm verwendet, Seiten besser zu lesen, wenn er sich in einer hellen Umgebung wie Sonnenlicht befindet.

### Prüfwerkzeuge

Es stehen eine Reihe von Prüfwerkzeugen zur Verfügung, in die Sie Ihre Webseiten einspeisen können. Sie prüfen diese und geben eine Liste der Barrierefreiheitsprobleme zurück, die auf der Seite vorhanden sind. Schauen wir uns ein Beispiel an, das [Wave](https://wave.webaim.org/), ein Online-Testtool für Barrierefreiheit, verwendet. Es akzeptiert eine Webadresse und gibt eine annotierte Ansicht dieser Seite mit hervorgehobenen Barrierefreiheitsproblemen zurück.

1. Besuchen Sie die [Wave-Startseite](https://wave.webaim.org/).
2. Geben Sie die URL unseres Beispiels [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) in das Textfeld oben auf der Seite ein. Drücken Sie dann die Eingabetaste oder klicken/tippen Sie auf den Pfeil am rechten Rand des Eingabefeldes.
3. Die Site sollte mit einer Beschreibung der Barrierefreiheitsprobleme antworten. Klicken Sie auf die angezeigten Symbole, um nähere Informationen zu den einzelnen von Waves Evaluation identifizierten Problemen zu sehen.

Andere Prüfwerkzeuge, die es wert sind, überprüft zu werden:

- [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)
- [ANDI-Lesezeichen](https://www.ssa.gov/accessibility/andi/help/install.html)
- [Google Lighthouse Barrierefreiheits-Prüfungen](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)

> [!NOTE]
> Solche Werkzeuge allein reichen nicht aus, um alle Ihre Barrierefreiheitsprobleme zu lösen. Sie benötigen eine Kombination aus diesen, Wissen und Erfahrung, Benutzertests usw., um ein vollständiges Bild zu erhalten.

### Automatisierungstools

[Deque's aXe Tool](https://www.deque.com/axe/) geht ein Stück weiter als die oben genannten Prüfwerkzeuge. Er prüft Seiten und gibt Barrierefreiheitsfehler zurück. Seine immediately nützlichste Form ist wahrscheinlich die Browser-Erweiterungen:

- [aXe für Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe für Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Diese fügen den Entwicklerwerkzeugen des Browsers einen Tab für Barrierefreiheit hinzu. Zum Beispiel haben wir die Firefox-Version installiert und sie verwendet, um unser Beispiel [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) zu prüfen. Wir erhielten die folgenden Ergebnisse:

![Ein Screenshot der von dem Axe-Tool identifizierten Barrierefreiheitsprobleme.](axe-screenshot.png)

aXe ist auch über `npm` installierbar und kann in Task-Runner wie [Grunt](https://gruntjs.com/) und [Gulp](https://gulpjs.com/), Automatisierungsframeworks wie [Selenium](https://www.selenium.dev/) und [Cucumber](https://cucumber.io/), Unittesting-Frameworks wie [Jasmine](https://jasmine.github.io/) und vieles mehr integriert werden (siehe erneut die [Hauptseite von aXe](https://www.deque.com/axe/) für Details).

## Bildschirmleser

Es lohnt sich auf jeden Fall, mit einem Bildschirmleser zu testen, um zu lernen, wie stark sehbehinderte Menschen das Web nutzen. Es gibt eine Reihe von Bildschirmlesern:

- Einige sind kostenpflichtige kommerzielle Produkte, wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows).
- Einige sind kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows und macOS) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Einige sind in das Betriebssystem integriert, wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS und iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf Chromebooks) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

In der Regel sind Bildschirmleser separate Apps, die auf dem Host-Betriebssystem laufen und nicht nur Webseiten, sondern auch Text in anderen Apps lesen können. Dies ist nicht immer der Fall (ChromeVox ist eine Browsererweiterung), aber normalerweise arbeiten Bildschirmleser in leicht unterschiedlicher Weise und haben unterschiedliche Steuerelemente, daher müssen Sie die Dokumentation für Ihren gewählten Bildschirmleser konsultieren, um alle Details zu erhalten – wobei sie alle im Grunde auf die gleiche Weise funktionieren.

Lassen Sie uns einige Tests mit ein paar verschiedenen Bildschirmlesern durchführen, um Ihnen eine allgemeine Vorstellung davon zu geben, wie sie funktionieren und wie man mit ihnen testet.

> [!NOTE]
> WebAIMs [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/) bietet nützliche Informationen über die Nutzung von Bildschirmlesern und was am besten für Bildschirmleser funktioniert. Siehe auch [Screen Reader User Survey #9 Ergebnisse](https://webaim.org/projects/screenreadersurvey9/#used) für interessante Statistiken zur Nutzung von Bildschirmlesern.

### VoiceOver

VoiceOver (VO) wird kostenlos mit Ihrem Mac/iPhone/iPad geliefert, daher ist es nützlich zum Testen auf Desktop/Mobilgeräten, wenn Sie Apple-Produkte verwenden. Wir werden es auf macOS auf einem MacBook Pro testen.

Um es einzuschalten, drücken Sie Cmd + F5. Wenn Sie VO noch nie verwendet haben, wird Ihnen ein Begrüßungsbildschirm angezeigt, auf dem Sie wählen können, ob Sie VO starten möchten oder nicht, und ein ziemlich nützliches Tutorial durchlaufen, um JAWS zu lernen, wie man es benutzt. Um es wieder auszuschalten, drücken Sie erneut Cmd + F5.

> [!NOTE]
> Sie sollten das Tutorial mindestens einmal durchgehen – es ist ein wirklich nützlicher Weg, um VO zu lernen.

Wenn VO eingeschaltet ist, sieht Ihr Bildschirm größtenteils gleich aus, aber Sie sehen ein schwarzes Kästchen unten links auf dem Bildschirm, das Informationen dazu enthält, was VO derzeit ausgewählt hat. Die aktuelle Auswahl wird ebenfalls hervorgehoben und mit einem schwarzen Rand umgeben – diese Hervorhebung wird als **VO-Cursor** bezeichnet.

![Ein Beispiel-Screenshot zur Darstellung des Barrierefreiheitstests mit VoiceOver auf der MDN-Homepage. Links unten im Bild ist eine Hervorhebung der auf der Webseite ausgewählten Informationen.](voiceover.png)

Um VO zu verwenden, werden Sie viele der "VO-modifier" verwenden – dies ist eine Taste oder Tastenkombination, die Sie zusätzlich zu den tatsächlichen VO-Tastenkombinationen drücken müssen, damit sie funktionieren. Die Verwendung eines solchen Modifiers ist bei Bildschirmlesern üblich, um zu verhindern, dass ihre Befehle mit anderen Befehlen in Konflikt geraten. Bei VO kann der Modifier entweder CapsLock oder Ctrl + Option sein.

VO hat viele Tastaturbefehle, und wir werden sie hier nicht alle auflisten. Die grundlegenden, die Sie für das Testen von Webseiten benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastenkombinationen bedeutet "VO" "der VoiceOver-Modifier".

<table class="standard-table no-markdown">
  <caption>
    Die häufigsten VoiceOver-Tastenkombinationen
  </caption>
  <thead>
    <tr>
      <th scope="col">Tastenkombination</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VO + Pfeiltasten</td>
      <td>Bewegen des VO-Cursors nach oben, rechts, unten, links.</td>
    </tr>
    <tr>
      <td>VO + Leertaste</td>
      <td>Auswählen/aktivieren von Elementen, die vom VO-Cursor hervorgehoben werden. Dies beinhaltet auch über den Rotor ausgewählte Elemente (siehe unten).</td>
    </tr>
    <tr>
      <td>VO + Umschalt + Pfeil unten</td>
      <td>In eine Gruppe von Elementen (wie eine HTML-Tabelle oder ein Formular usw.) wechseln. Sobald Sie sich in einer Gruppe befinden, können Sie mit den oben genannten Befehlen normal in der Gruppe navigieren und Elemente auswählen.</td>
    </tr>
    <tr>
      <td>VO + Umschalt + Pfeil nach oben</td>
      <td>Aus einer Gruppe herausgehen.</td>
    </tr>
    <tr>
      <td>VO + C</td>
      <td>(wenn sich innerhalb einer Tabelle) Die Kopfzeile der aktuellen Spalte vorlesen.</td>
    </tr>
    <tr>
      <td>VO + R</td>
      <td>(wenn sich innerhalb einer Tabelle) Die Kopfzeile der aktuellen Zeile vorlesen.</td>
    </tr>
    <tr>
      <td>VO + C + C (zwei Cs hintereinander)</td>
      <td>(wenn sich innerhalb einer Tabelle) Die gesamte aktuelle Spalte einschließlich Kopfzeile vorlesen.</td>
    </tr>
    <tr>
      <td>VO + R + R (zwei Rs hintereinander)</td>
      <td>(wenn sich innerhalb einer Tabelle) Die gesamte aktuelle Zeile einschließlich der Kopfzeilen, die mit jeder Zelle übereinstimmen, vorlesen.</td>
    </tr>
    <tr>
      <td>VO + Pfeil links, VO + Pfeil rechts</td>
      <td>(wenn sich innerhalb einiger horizontaler Optionen, wie z. B. einem Datums- oder Zeitwahler) Zwischen Optionen wechseln.</td>
    </tr>
    <tr>
      <td>VO + Pfeil nach oben, VO + Pfeil nach unten</td>
      <td>(wenn sich innerhalb einiger horizontaler Optionen, wie z. B. einem Datums- oder Zeitwahler) Die aktuelle Option ändern.</td>
    </tr>
    <tr>
      <td>VO + U</td>
      <td>Den Rotor verwenden, der Listen von Überschriften, Links, Formularsteuerungen usw. zur einfachen Navigation anzeigt.</td>
    </tr>
    <tr>
      <td>VO + Pfeil links, VO + Pfeil rechts</td>
      <td>(wenn sich im Rotor) Zwischen verschiedenen im Rotor verfügbaren Listen wechseln.</td>
    </tr>
    <tr>
      <td>VO + Pfeil nach oben, VO + Pfeil nach unten</td>
      <td>(wenn sich im Rotor) Zwischen verschiedenen Elementen in der aktuellen Rotorliste wechseln.</td>
    </tr>
    <tr>
      <td>Esc</td>
      <td>(wenn sich im Rotor) Den Rotor verlassen.</td>
    </tr>
    <tr>
      <td>Strg</td>
      <td>(wenn VO spricht) Sprache pausieren/fortsetzen.</td>
    </tr>
    <tr>
      <td>VO + Z</td>
      <td>Das letzte Sprachstück erneut abspielen.</td>
    </tr>
    <tr>
      <td>VO + D</td>
      <td>Ins Dock des Macs wechseln, so dass Sie Apps auswählen können, die darin ausgeführt werden sollen.</td>
    </tr>
  </tbody>
</table>

Das scheint eine Menge Befehle zu sein, aber es ist nicht so schlimm, wenn man sich daran gewöhnt hat, und VO gibt Ihnen regelmäßig Erinnerungen an die zu verwendenden Befehle an bestimmten Stellen. Spielen Sie jetzt mit VO herum; dann können Sie mit einigen unserer Beispiele im Abschnitt [Bildschirmleser testen](#bildschirmleser_testen) weiter machen.

### NVDA

NVDA ist nur für Windows und Sie müssen es installieren.

1. Laden Sie es von [nvaccess.org](https://www.nvaccess.org/) herunter. Sie können wählen, ob Sie eine Spende machen oder es kostenlos herunterladen möchten; Sie müssen ihnen auch Ihre E-Mail-Adresse geben, bevor Sie es herunterladen können.
2. Nach dem Download installieren - Sie doppelklicken auf den Installer, akzeptieren die Lizenz und folgen den Anweisungen.
3. Um NVDA zu starten, doppelklicken Sie auf die Programmdatei/Verknüpfung oder verwenden Sie die Tastenkombination Strg + Alt + N. Sie sehen den NVDA-Willkommensdialog, wenn Sie ihn starten. Hier können Sie aus ein paar Optionen wählen und dann die _OK_-Taste drücken, um loszulegen.

NVDA wird nun auf Ihrem Computer aktiv sein.

Um NVDA zu verwenden, verwenden Sie den "NVDA-Modifier" häufig – dies ist eine Taste, die Sie zusätzlich zu den tatsächlichen NVDA-Tastenkombinationen drücken müssen, damit sie funktionieren. Die Verwendung eines solchen Modifiers ist bei Bildschirmlesern üblich, um zu verhindern, dass ihre Befehle mit anderen Befehlen in Konflikt geraten. Bei NVDA kann der Modifier entweder Insert (Standard) oder CapsLock (kann durch Aktivieren des ersten Kontrollkästchens im NVDA-Willkommensdialog vor dem Drücken von _OK_ gewählt werden) sein.

> [!NOTE]
> NVDA ist subtiler als VoiceOver in Bezug darauf, wie es anzeigt, wo es ist und was es tut. Wenn Sie durch Überschriften, Listen, etc. scrollen, werden ausgewählte Elemente in der Regel mit einem subtilen Umriss hervorgehoben, aber dies ist nicht immer der Fall. Wenn Sie sich völlig verirren, können Sie Strg + F5 drücken, um die aktuelle Seite zu aktualisieren und von oben erneut zu beginnen.

NVDA hat viele Tastaturbefehle, und wir werden sie hier nicht alle auflisten. Die grundlegenden, die Sie für das Testen von Webseiten benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastenkombinationen bedeutet "NVDA" "der NVDA-Modifier".

<table class="standard-table no-markdown">
  <caption>
    Die häufigsten NVDA-Tastenkombinationen
  </caption>
  <thead>
    <tr>
      <th scope="col">Tastenkombination</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NVDA + Q</td>
      <td>NVDA wieder ausschalten, nachdem Sie es gestartet haben.</td>
    </tr>
    <tr>
      <td>NVDA + Pfeil nach oben</td>
      <td>Die aktuelle Zeile vorlesen.</td>
    </tr>
    <tr>
      <td>NVDA + Pfeil nach unten</td>
      <td>Ab der aktuellen Position zu lesen beginnen.</td>
    </tr>
    <tr>
      <td>Pfeil nach oben und Pfeil nach unten, oder Umschalt + Tab und Tab</td>
      <td>Zum vorherigen/nächsten Element auf der Seite wechseln und vorlesen.</td>
    </tr>
    <tr>
      <td>Pfeil links und Pfeil rechts</td>
      <td>Zum vorherigen/nächsten Zeichen im aktuellen Element wechseln und vorlesen.</td>
    </tr>
    <tr>
      <td>Umschalt + H und H</td>
      <td>Zur vorherigen/nächsten Überschrift wechseln und vorlesen.</td>
    </tr>
    <tr>
      <td>Umschalt + K und K</td>
      <td>Zum vorherigen/nächsten Link wechseln und vorlesen.</td>
    </tr>
    <tr>
      <td>Umschalt + D und D</td>
      <td>Zum vorherigen/nächsten Dokumentpunkt (z. B. <code>&#x3C;nav></code>) wechseln und vorlesen.</td>
    </tr>
    <tr>
      <td>Umschalt + 1–6 und 1–6</td>
      <td>Zur vorherigen/nächsten Überschrift (Ebene 1–6) wechseln und vorlesen.</td>
    </tr>
    <tr>
      <td>Umschalt + F und F</td>
      <td>Zum vorherigen/nächsten Formulareingabefeld wechseln und es fokussieren.</td>
    </tr>
    <tr>
      <td>Umschalt + T und T</td>
      <td>Zur vorherigen/nächsten Datentabelle wechseln und sie fokussieren.</td>
    </tr>
    <tr>
      <td>Umschalt + B und B</td>
      <td>Zum vorherigen/nächsten Button wechseln und dessen Beschriftung vorlesen.</td>
    </tr>
    <tr>
      <td>Umschalt + L und L</td>
      <td>Zur vorherigen/nächsten Liste wechseln und deren erstes Listenelement vorlesen.</td>
    </tr>
    <tr>
      <td>Umschalt + I und I</td>
      <td>Zum vorherigen/nächsten Listenelement wechseln und es vorlesen.</td>
    </tr>
    <tr>
      <td>Enter</td>
      <td>(wenn Link/Button oder anderes aktivierbares Element ausgewählt ist) Element aktivieren.</td>
    </tr>
    <tr>
      <td>NVDA + Leertaste</td>
      <td>(wenn Formular ausgewählt ist) In Formular einsteigen, um einzelne Elemente auszuwählen, oder Formular verlassen, wenn Sie bereits im Formular sind.</td>
    </tr>
    <tr>
      <td>Umschalt Tab und Tab</td>
      <td>(wenn im Formular) Zwischen Formulareingaben wechseln.</td>
    </tr>
    <tr>
      <td>Pfeil nach oben und Pfeil nach unten</td>
      <td>(wenn im Formular) Formulareingabewerte ändern (im Falle von Dingen wie Auswahlboxen).</td>
    </tr>
    <tr>
      <td>Leertaste</td>
      <td>(wenn im Formular) Ausgewählten Wert auswählen.</td>
    </tr>
    <tr>
      <td>Strg + Alt + Pfeiltasten</td>
      <td>(wenn eine Tabelle ausgewählt ist) Zwischen Tabellenzellen wechseln.</td>
    </tr>
  </tbody>
</table>

### Bildschirmleser testen

Jetzt, da Sie sich daran gewöhnt haben, einen Bildschirmleser zu verwenden, möchten wir, dass Sie ihn verwenden, um einige schnelle Barrierefreiheitstests durchzuführen, um eine Vorstellung davon zu bekommen, wie Bildschirmleser mit guten und schlechten Webseitenmerkmalen umgehen:

- Schauen Sie sich [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) an und beachten Sie, wie die Bildschirmleser die Überschriften finden und zur Navigation verwenden können. Schauen Sie sich nun [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) an und beachten Sie, dass der Bildschirmleser keine dieser Informationen erhält. Stellen Sie sich vor, wie ärgerlich dies sein würde, wenn Sie versuchen, eine wirklich lange Seite mit Text zu navigieren.
- Schauen Sie sich [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) an und bemerken Sie, wie sie außerhalb des Kontexts Sinn ergeben. Das ist bei [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) nicht der Fall – dort sind alle Links einfach nur "hier klicken".
- Schauen Sie sich [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) an und bemerken Sie, wie die Formulareingaben aufgrund der korrekten Verwendung von `<label>`-Elementen beschrieben werden. In [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) erhalten sie eine wenig hilfreiche Beschriftung wie "leer".
- Schauen Sie sich unser Beispiel [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) an und sehen Sie, wie der Bildschirmleser in der Lage ist, Reihen und Spalten von Inhalten zu assoziieren und diese zusammenhängend vorzulesen, da wir die Kopfzeilen korrekt definiert haben. In [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) können keine der Zellen überhaupt assoziiert werden. Beachten Sie, dass NVDA scheinbar etwas seltsam reagiert, wenn Sie nur eine einzige Tabelle auf einer Seite haben; Sie könnten stattdessen [WebAIMs Tabellentestseite](https://webaim.org/articles/nvda/tables.htm) ausprobieren.
- Werfen Sie einen Blick auf das [WAI-ARIA-Live-Bereiche-Beispiel](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm), das wir bereits gesehen haben, und bemerken Sie, wie der Bildschirmleser den sich ständig aktualisierenden Abschnitt beim Aktualisieren kontinuierlich vorliest.

## Benutzertests

Wie bereits erwähnt, können Sie sich nicht allein auf automatisierte Tools verlassen, um Barrierefreiheitsprobleme auf Ihrer Website zu bestimmen. Es wird empfohlen, dass Sie beim Erstellen Ihres Testplans nach Möglichkeit einige barrierefreie Nutzergruppen einbeziehen. Versuchen Sie, einige Bildschirmleser-Nutzer, einige reine Tastaturnutzer, einige nicht hörende Nutzer und möglicherweise weitere Gruppen einzubeziehen, je nach Ihren Anforderungen.

## Andere Tools

Es gibt viele andere Arten von unterstützenden Technologien, wie zum Beispiel:

- Große Text- oder Braille-Tastaturen.
- Alternative Zeigegeräte wie Trackballs, Joysticks und Touchpads.
- Bildschirmvergrößerer.
- Spracherkennungssoftware.
- Schaltersysteme.

## Barrierefreiheitstesting-Checkliste

Die folgende Liste stellt einen Prüfpfad für Sie bereit, damit Sie sicherstellen können, dass Sie das empfohlene Barrierefreiheitstesting für Ihr Projekt durchgeführt haben:

1. Stellen Sie sicher, dass Ihr HTML so semantisch korrekt wie möglich ist. [Validieren Sie es](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML#html_validation), ist ein guter Start, ebenso wie die Verwendung eines [Prüfwerkzeugs](#prüfwerkzeuge).
2. Überprüfen Sie, ob Ihr Inhalt verständlich ist, wenn das CSS deaktiviert ist.
3. Stellen Sie sicher, dass Ihre Funktionalität mit der Tastatur zugänglich ist (siehe [Verwenden Sie wo möglich semantische UI-Steuerungen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) für mehr Details). Testen Sie mit Tab, Return/Enter usw.
4. Stellen Sie sicher, dass Ihre nicht-textlichen Inhalte [Tex

t-Alternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) haben. Ein [Prüfwerkzeug](#prüfwerkzeuge) eignet sich gut, um solche Probleme zu erkennen. 5. Sicherstellen, dass der [Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast) Ihrer Website akzeptabel ist, indem Sie ein geeignetes Prüfwerkzeug verwenden. 6. Sicherstellen, dass [versteckter Inhalt](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) von Bildschirmlesern gesehen werden kann. 7. Sicherstellen, dass Funktionalität ohne JavaScript überall da funktioniert, wo möglich. 8. Verwenden Sie ARIA, um Barrierefreiheit dort zu verbessern, wo es angemessen ist. 9. Lassen Sie Ihre Website durch ein [Prüfwerkzeug](#prüfwerkzeuge) laufen. 10. Testen Sie es mit einem Bildschirmleser. 11. Fügen Sie irgendwo leicht auffindbar auf Ihrer Website eine Erklärung zu Ihrer Barrierefreiheitspolitik ein, um darzustellen, was Sie getan haben.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel eine Vorstellung davon gegeben, welche Arten von Tools Sie verwenden können, um Barrierefreiheitsprobleme zu beheben und welche unterstützenden Technologien von Menschen mit Behinderungen verwendet werden, um auf das Web zuzugreifen.

Im nächsten Artikel werden wir uns damit beschäftigen, wie man barrierefreies HTML schreibt.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}
