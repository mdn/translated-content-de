---
title: Barrierefreiheitstools und unterstützende Technologien
slug: Learn_web_development/Core/Accessibility/Tooling
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}

> [!NOTE]
> Der Inhalt dieses Artikels ist derzeit unvollständig, tut uns leid! Wir arbeiten hart daran, den MDN Web Development-Bereich zu verbessern, und wir werden bald die als unvollständig markierten Stellen ("TODO") fertigstellen.

Als nächstes wenden wir unsere Aufmerksamkeit auf Barrierefreiheitstools und geben Informationen über die Arten von Tools, die Sie verwenden können, um Barrierefreiheitsprobleme zu lösen, sowie über die assistiven Technologien, die von Menschen mit Behinderungen beim Surfen im Internet genutzt werden. Sie werden diese Tools in den folgenden Artikeln verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegendes Verständnis von Barrierefreiheitskonzepten</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit der Art von Werkzeugen, die Sie verwenden können, um Barrierefreiheitsprobleme zu lösen, zum Beispiel Prüftools.</li>
          <li>Bildschirmlesegeräte einrichten und sie benutzen, um Websites auf Desktop- und Mobilgeräten zu testen.</li>
          <li>Andere unterstützende Technologien wie große Text- oder Braille-Tastaturen, alternative Zeigegeräte und Bildschirmlupen.</li>
          <li>Die Wichtigkeit von Benutzertests in Kombination mit automatisierten Tests.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheitstools

Lassen Sie uns einen Blick auf die Tools werfen, die Sie verwenden können, um barrierefreie Websites zu implementieren und Barrierefreiheitsprobleme zu beheben.

### Testen der Quellreihenfolge

Ihr Inhalt sollte in der Quellreihenfolge logisch sinnvoll sein — Sie können ihn später immer mit CSS an die gewünschte Stelle platzieren, aber Sie sollten die Quellreihenfolge von Anfang an richtig festlegen.

Als Test können Sie das CSS einer Seite ausschalten und prüfen, wie verständlich sie ohne CSS ist. Sie könnten dies manuell tun, indem Sie einfach das CSS aus Ihrem Code entfernen, aber der einfachste Weg ist die Verwendung von Browser-Features, zum Beispiel:

- Firefox: Wählen Sie _Ansicht > Seitenstil > Kein Stil_ aus dem Hauptmenü.
- Safari: Wählen Sie _Entwickeln > Stile deaktivieren_ aus dem Hauptmenü (um das _Entwickeln_-Menü zu aktivieren, wählen Sie _Safari > Einstellungen > Erweitert > Entwicklermenü in der Menüleiste anzeigen_).
- Chrome: Installieren Sie die Web Developer Toolbar-Erweiterung, starten Sie dann den Browser neu. Klicken Sie auf das Zahnrad-Symbol, das erscheint, und wählen Sie _CSS > Alle Stile deaktivieren_.
- Edge: Wählen Sie _Ansicht > Stil > Kein Stil_ aus dem Hauptmenü.

### Farbkontrastprüfer

Bei der Auswahl eines Farbschemas für Ihre Website sollten Sie sicherstellen, dass die Textfarbe (Vordergrund) gut mit der Hintergrundfarbe kontrastiert. Ihr Design mag cool aussehen, aber es nützt nichts, wenn Menschen mit Sehbehinderungen wie Farbenblindheit Ihren Inhalt nicht lesen können. Verwenden Sie ein Tool wie WebAIM's [Color Contrast Checker](https://webaim.org/resources/contrastchecker/), um zu überprüfen, ob Ihr Schema ausreichend kontrastiert.

Ein weiterer Tipp ist, nicht nur auf Farben für Schilder/Informationen zu setzen, da dies für diejenigen, die die Farbe nicht sehen können, keinen Nutzen hat. Markieren Sie zum Beispiel verpflichtende Formularfelder zusätzlich zu rot mit einem Sternchen.

> [!NOTE]
> Ein hoher Kontrast ermöglicht es auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm benutzt, Seiten in einer hellen Umgebung wie Sonnenlicht besser zu lesen.

### Prüftools

Es gibt eine Reihe von Prüftools, in die Sie Ihre Webseiten einfügen können. Sie überprüfen diese und geben eine Liste der auf der Seite vorhandenen Barrierefreiheitsprobleme zurück. Schauen wir uns ein Beispiel an, die Verwendung von [Wave](https://wave.webaim.org/), einem Online-Testtool für Barrierefreiheit, das eine Webadresse akzeptiert und eine annotierte Ansicht dieser Seite mit hervorgehobenen Barrierefreiheitsproblemen zurückgibt.

1. Gehen Sie zur [Wave-Startseite](https://wave.webaim.org/).
2. Geben Sie die URL unseres [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)-Beispiels in das Texteingabefeld oben auf der Seite ein. Drücken Sie dann die Eingabetaste oder klicken/tippen Sie auf den Pfeil am rechten Rand des Eingabefeldes.
3. Die Seite sollte auf die Barrierefreiheitsprobleme antworten. Klicken Sie auf die angezeigten Symbole, um mehr Informationen zu jedem der von Wave's Bewertung identifizierten Probleme zu erhalten.

Andere Prüftools, die es wert sind, ausprobiert zu werden:

- [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)
- [ANDI Bookmarklet](https://www.ssa.gov/accessibility/andi/help/install.html)
- [Google Lighthouse accessibility audits](https://developer.chrome.com/docs/lighthouse/accessibility/)

> [!NOTE]
> Solche Tools sind nicht genug, um alle Ihre Barrierefreiheitsprobleme allein zu lösen. Sie benötigen eine Kombination aus diesen Tools, Wissen und Erfahrung, Benutzertests usw., um ein vollständiges Bild zu bekommen.

### Automatisierungstools

[Deque's aXe-Tool](https://www.deque.com/axe/) geht etwas weiter als die oben genannten Prüftools. Wie die anderen prüft es Seiten und gibt Barrierefreiheitsfehler zurück. In seiner unmittelbar nützlichsten Form ist es wahrscheinlich in den Browsererweiterungen erhältlich:

- [aXe für Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe für Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Diese fügen den Entwicklerwerkzeugen des Browsers einen Barrierefreiheits-Reiter hinzu. Zum Beispiel haben wir die Firefox-Version installiert und dann verwendet, um unser [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html)-Beispiel zu prüfen. Wir erhielten die folgenden Ergebnisse:

![Ein Screenshot von Barrierefreiheitsproblemen, die vom Axe-Tool identifiziert wurden.](axe-screenshot.png)

aXe kann auch mit `npm` installiert werden und lässt sich mit Task-Runnern wie [Grunt](https://gruntjs.com/) und [Gulp](https://gulpjs.com/), Automatisierungs-Frameworks wie [Selenium](https://www.selenium.dev/) und [Cucumber](https://cucumber.io/), Unit-Test-Frameworks wie [Jasmine](https://jasmine.github.io/) und vielen anderen integrieren (siehe erneut die [Hauptseite von aXe](https://www.deque.com/axe/) für Details).

## Bildschirmlesegeräte

Es ist auf jeden Fall lohnenswert, ein Bildschirmlesegerät zu testen, um sich daran zu gewöhnen, wie stark sehbehinderte Menschen das Web nutzen. Es gibt mehrere Bildschirmlesegeräte:

- Einige sind kostenpflichtige kommerzielle Produkte wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows).
- Einige sind kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows und macOS) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Einige sind in das Betriebssystem integriert, wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS und iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf Chromebooks) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Im Allgemeinen sind Bildschirmlesegeräte separate Apps, die auf dem Host-Betriebssystem laufen und nicht nur Webseiten, sondern auch Text in anderen Apps lesen können. Dies ist nicht immer der Fall (ChromeVox ist eine Browsererweiterung), aber normalerweise tendieren Bildschirmlesegeräte dazu, in leicht unterschiedlichen Arten zu agieren und unterschiedliche Steuerungen zu haben, sodass Sie die Dokumentation für Ihr ausgewähltes Bildschirmlesegerät konsultieren müssen, um alle Details zu erhalten — dennoch funktionieren sie alle im Grunde auf die gleiche Weise.

Lassen Sie uns einige Tests mit verschiedenen Bildschirmlesegeräten durchführen, um Ihnen eine allgemeine Vorstellung davon zu geben, wie sie funktionieren und wie man mit ihnen testet.

> [!NOTE]
> WebAIMs [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/) bietet nützliche Informationen über die Nutzung von Bildschirmlesegeräten und was am besten für sie funktioniert. Siehe auch [Ergebnisse der Screen Reader User Survey #9](https://webaim.org/projects/screenreadersurvey9/#used) für einige interessante Nutzungsstatistiken von Bildschirmlesegeräten.

### VoiceOver

VoiceOver (VO) wird kostenlos mit Ihrem Mac/iPhone/iPad geliefert, daher ist es nützlich für Tests auf Desktop/Mobilgeräten, wenn Sie Apple-Produkte verwenden. Wir werden es auf macOS auf einem MacBook Pro testen.

Um es zu aktivieren, drücken Sie Cmd + F5. Wenn Sie VO noch nie verwendet haben, wird Ihnen ein Begrüßungsbildschirm angezeigt, auf dem Sie VO starten oder nicht starten können und ein sehr nützliches Tutorial durchführen können, um zu lernen, wie man es benutzt. Um VO wieder auszuschalten, drücken Sie erneut Cmd + F5.

> [!NOTE]
> Sie sollten das Tutorial mindestens einmal durchgehen — es ist eine wirklich nützliche Möglichkeit, VO zu lernen.

Wenn VO eingeschaltet ist, sieht das Display größtenteils gleich aus, aber Sie sehen ein schwarzes Feld unten links auf dem Bildschirm, das Informationen über das enthält, was VO gerade ausgewählt hat. Die aktuelle Auswahl wird ebenfalls hervorgehoben, mit einem schwarzen Rand — diese Hervorhebung wird als **VO-Cursor** bezeichnet.

![Ein Beispiel-Screenshot, der Barrierefreiheitstests mit VoiceOver auf der MDN-Homepage demonstriert. Unten links im Bild ist ein Highlight der auf der Webseite ausgewählten Informationen zu sehen.](voiceover.png)

Um VO zu verwenden, nutzen Sie den "VO-Modifikator" — dies ist eine Taste oder Tastenkombination, die Sie zusätzlich zu den tatsächlichen VO-Tastenkombinationen drücken müssen, damit sie funktionieren. Die Verwendung eines Modifikators ist bei Bildschirmlesegeräten üblich, um zu verhindern, dass ihre Befehle mit anderen Befehlen kollidieren. Im Fall von VO kann der Modifikator entweder CapsLock oder Strg + Option sein.

VO hat viele Tastaturbefehle, und wir werden sie hier nicht alle auflisten. Die grundlegenden, die Sie für Webseitentests benötigen, sind in der folgenden Tabelle. In den Tastaturkürzeln steht "VO" für "den VoiceOver-Modifikator".

<table class="standard-table no-markdown">
  <caption>
    Häufigste VoiceOver-Tastenkombinationen
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
      <td>Bewege den VO-Cursor nach oben, rechts, unten, links.</td>
    </tr>
    <tr>
      <td>VO + Leertaste</td>
      <td>Wählen/Aktivieren von Elementen, die vom VO-Cursor hervorgehoben sind. Dies schließt Elemente ein, die im Rotor ausgewählt sind (siehe unten).</td>
    </tr>
    <tr>
      <td>VO + Shift + Pfeil nach unten</td>
      <td>Wechseln in eine Gruppe von Elementen (wie eine HTML-Tabelle oder ein Formular etc.). Einmal innerhalb einer Gruppe können Sie mit den obigen Befehlen wie üblich durch die Elemente in dieser Gruppe navigieren und diese auswählen.</td>
    </tr>
    <tr>
      <td>VO + Shift + Pfeil nach oben</td>
      <td>Aus einer Gruppe herausgehen.</td>
    </tr>
    <tr>
      <td>VO + C</td>
      <td>(innerhalb einer Tabelle) Den Header der aktuellen Spalte lesen.</td>
    </tr>
    <tr>
      <td>VO + R</td>
      <td>(innerhalb einer Tabelle) Den Header der aktuellen Zeile lesen.</td>
    </tr>
    <tr>
      <td>VO + C + C (zweimal C nacheinander)</td>
      <td>(innerhalb einer Tabelle) Die gesamte aktuelle Spalte einschließlich Header lesen.</td>
    </tr>
    <tr>
      <td>VO + R + R (zweimal R nacheinander)</td>
      <td>(innerhalb einer Tabelle) Die gesamte aktuelle Zeile einschließlich der für jede Zelle entsprechenden Header lesen.</td>
    </tr>
    <tr>
      <td>VO + Pfeil nach links, VO + Pfeil nach rechts</td>
      <td>(innerhalb einiger horizontaler Optionen, wie einem Datums- oder Zeitauswahlfeld) Zwischen Optionen wechseln.</td>
    </tr>
    <tr>
      <td>VO + Pfeil nach oben, VO + Pfeil nach unten</td>
      <td>(innerhalb einiger horizontaler Optionen, wie einem Datums- oder Zeitauswahlfeld) Die aktuelle Option ändern.</td>
    </tr>
    <tr>
      <td>VO + U</td>
      <td>Den Rotor verwenden, der Listen von Überschriften, Links, Steuerungen im Formular usw. für die einfache Navigation anzeigt.</td>
    </tr>
    <tr>
      <td>VO + Pfeil nach links, VO + Pfeil nach rechts</td>
      <td>(innerhalb des Rotors) Zwischen verschiedenen im Rotor verfügbaren Listen wechseln.</td>
    </tr>
    <tr>
      <td>VO + Pfeil nach oben, VO + Pfeil nach unten</td>
      <td>(innerhalb des Rotors) Zwischen verschiedenen Elementen in der aktuellen Rotorliste wechseln.</td>
    </tr>
    <tr>
      <td>Esc</td>
      <td>(innerhalb des Rotors) Rotor verlassen.</td>
    </tr>
    <tr>
      <td>Strg</td>
      <td>(wenn VO spricht) Sprache pausieren/fortsetzen.</td>
    </tr>
    <tr>
      <td>VO + Z</td>
      <td>Das letzte Stück Sprache erneut wiedergeben.</td>
    </tr>
    <tr>
      <td>VO + D</td>
      <td>In das Dock des Macs wechseln, um darin Apps auswählen und ausführen zu können.</td>
    </tr>
  </tbody>
</table>

Das scheint eine Menge an Befehlen zu sein, aber es ist nicht so schlimm, wenn Sie sich daran gewöhnt haben, und VO gibt Ihnen regelmäßig Erinnerungen, welche Befehle Sie an bestimmten Stellen verwenden können. Spielen Sie jetzt mit VO; Sie können dann mit einigen unserer Beispiele im Abschnitt [Bildschirmlesegeräte-Tests](#bildschirmlesegeräte-tests) weitermachen.

### NVDA

NVDA ist nur für Windows verfügbar, und Sie müssen es installieren.

1. Laden Sie es von [nvaccess.org](https://www.nvaccess.org/) herunter. Sie können sich entscheiden, ob Sie eine Spende machen oder es kostenlos herunterladen möchten; Sie müssen ihnen auch Ihre E-Mail-Adresse geben, bevor Sie es herunterladen können.
2. Sobald es heruntergeladen ist, installieren Sie es – doppelklicken Sie auf die Installationsdatei, akzeptieren Sie die Lizenz und folgen Sie den Anweisungen.
3. Um NVDA zu starten, doppelklicken Sie auf die Programmdatei/Verknüpfung oder verwenden Sie die Tastenkombination Strg + Alt + N. Sie sehen das NVDA Begrüßungsdialog, wenn Sie es starten. Hier können Sie aus einigen Optionen auswählen und dann auf die _OK_-Schaltfläche klicken, um loszulegen.

NVDA ist jetzt auf Ihrem Computer aktiv.

Um NVDA zu verwenden, nutzen Sie den "NVDA-Modifikator" — dies ist eine Taste, die Sie zusätzlich zu den tatsächlichen NVDA-Tastenkombinationen drücken müssen, damit sie funktionieren. Die Verwendung eines Modifikators ist bei Bildschirmlesegeräten üblich, um zu verhindern, dass ihre Befehle mit anderen Befehlen kollidieren. Im Fall von NVDA kann der Modifikator entweder Einfg (Standard) oder CapsLock (kann durch Markieren des ersten Kontrollkästchens im NVDA-Begrüßungsdialog ausgewählt werden, bevor Sie auf _OK_ klicken) sein.

> [!NOTE]
> NVDA ist subtiler als VoiceOver, wie es hervorhebt, wo es sich befindet und was es tut. Wenn Sie durch Überschriften, Listen usw. scrollen, werden die von Ihnen ausgewählten Elemente in der Regel mit einer subtilen Umrandung hervorgehoben, aber dies ist nicht immer bei allen Dingen der Fall. Wenn Sie völlig verwirrt sind, können Sie Strg + F5 drücken, um die aktuelle Seite zu aktualisieren und von oben zu beginnen.

NVDA hat viele Tastaturbefehle, und wir werden sie hier nicht alle auflisten. Die grundlegenden, die Sie für Webseitentests benötigen, sind in der folgenden Tabelle. In den Tastaturkürzeln steht "NVDA" für "den NVDA-Modifikator".

<table class="standard-table no-markdown">
  <caption>
    Häufigste NVDA-Tastenkombinationen
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
      <td>Schalten Sie NVDA wieder aus, nachdem Sie es gestartet haben.</td>
    </tr>
    <tr>
      <td>NVDA + Pfeil nach oben</td>
      <td>Die aktuelle Zeile lesen.</td>
    </tr>
    <tr>
      <td>NVDA + Pfeil nach unten</td>
      <td>Ab der aktuellen Position lesen.</td>
    </tr>
    <tr>
      <td>Pfeil nach oben und Pfeil nach unten oder Umschalt + Tab und Tab</td>
      <td>Zum vorherigen/nächsten Element auf der Seite wechseln und es lesen.</td>
    </tr>
    <tr>
      <td>Pfeil nach links und Pfeil nach rechts</td>
      <td>Zum vorherigen/nächsten Zeichen im aktuellen Element wechseln und es lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + H und H</td>
      <td>Zur vorherigen/nächsten Überschrift wechseln und diese lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + K und K</td>
      <td>Zum vorherigen/nächsten Link wechseln und diesen lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + D und D</td>
      <td>
        Zum vorherigen/nächsten Dokument-Markierungspunkt wechseln (z. B. <code>&#x3C;nav></code>)
        und diesen lesen.
      </td>
    </tr>
    <tr>
      <td>Umschalt + 1–6 und 1–6</td>
      <td>Zur vorherigen/nächsten Überschrift (Level 1–6) wechseln und diese lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + F und F</td>
      <td>Zur vorherigen/nächsten Formulareingabe wechseln und darauf fokussieren.</td>
    </tr>
    <tr>
      <td>Umschalt + T und T</td>
      <td>Zur vorherigen/nächsten Datentabelle wechseln und darauf fokussieren.</td>
    </tr>
    <tr>
      <td>Umschalt + B und B</td>
      <td>Zum vorherigen/nächsten Knopf wechseln und dessen Beschriftung lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + L und L</td>
      <td>Zur vorherigen/nächsten Liste wechseln und deren erstes Listenelement lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + I und I</td>
      <td>Zum vorherigen/nächsten Listenelement wechseln und es lesen.</td>
    </tr>
    <tr>
      <td>Eingabetaste</td>
      <td>
        (wenn ein Link/Knopf oder ein anderes aktivierbares Element ausgewählt ist) Element aktivieren.
      </td>
    </tr>
    <tr>
      <td>NVDA + Leertaste</td>
      <td>
        (wenn ein Formular ausgewählt ist) Formular betreten, um einzelne Elemente auswählen zu können, oder Formular verlassen, wenn Sie sich bereits darin befinden.
      </td>
    </tr>
    <tr>
      <td>Umschalt + Tab und Tab</td>
      <td>(innerhalb des Formulars) Zwischen Formulareingaben wechseln.</td>
    </tr>
    <tr>
      <td>Pfeil nach oben und Pfeil nach unten</td>
      <td>
        (innerhalb des Formulars) Formulareingabewerte ändern (im Falle von Dingen wie Auswahlfeldern).
      </td>
    </tr>
    <tr>
      <td>Leertaste</td>
      <td>(innerhalb des Formulars) Gewählten Wert auswählen.</td>
    </tr>
    <tr>
      <td>Strg + Alt + Pfeiltasten</td>
      <td>(wenn eine Tabelle ausgewählt ist) Zwischen Tabellenzellen wechseln.</td>
    </tr>
  </tbody>
</table>

### Bildschirmlesegeräte-Tests

Nachdem Sie sich an die Verwendung eines Bildschirmlesegeräts gewöhnt haben, möchten wir, dass Sie es für einige schnelle Barrierefreiheitstests verwenden, um eine Vorstellung davon zu bekommen, wie Bildschirmlesegeräte mit guten und schlechten Webseitenmerkmalen umgehen:

- Sehen Sie sich [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) an und bemerken Sie, wie die Überschriften vom Bildschirmlesegerät gefunden und zur Navigation verwendbar sind. Sehen Sie sich dann [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) an und bemerken Sie, wie das Bildschirmlesegerät keinerlei dieser Informationen erhält. Stellen Sie sich vor, wie nervig dies beim Versuch, eine wirklich lange Textseite zu navigieren, wäre.
- Sehen Sie sich [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) an und bemerken Sie, wie sie aus dem Kontext heraus Sinn machen. Dies ist nicht der Fall bei [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) — alle lauten nur "hier klicken".
- Sehen Sie sich [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) an und bemerken Sie, wie die Formulareingaben mit ihren Labels beschrieben werden, da wir `<label>`-Elemente ordnungsgemäß verwendet haben. In [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) erhalten sie ein unhilfreiches Label wie "leer".
- Sehen Sie sich unser [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html)-Beispiel an und sehen Sie, wie Bildschirmlesegeräte in der Lage sind, Spalten und Zeilen von Inhalten zuzuordnen und sie alle zusammen vorzulesen, da wir die Header richtig definiert haben. In [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) können keine der Zellen zugeordnet werden. Beachten Sie, dass NVDA etwas seltsam agiert, wenn Sie nur eine einzige Tabelle auf einer Seite haben; Sie könnten stattdessen [WebAIMs Tabellentestseite](https://webaim.org/articles/nvda/tables.htm) ausprobieren.
- Schauen Sie sich das [WAI-ARIA Live Regionen Beispiel](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm) an, das wir bereits gesehen haben, und bemerken Sie, wie das Bildschirmlesegerät den ständig aktualisierten Abschnitt mitliest, sobald er aktualisiert wird.

## Benutzertests

Wie bereits erwähnt, können Sie sich nicht allein auf automatisierte Tools verlassen, um Barrierefreiheitsprobleme auf Ihrer Seite zu bestimmen. Es wird empfohlen, bei der Erstellung Ihres Testplans, wenn möglich, einige Gruppen von Benutzern mit Behinderungen einzubeziehen. Versuchen Sie, einige Bildschirmleser-Benutzer, einige nur mit der Tastatur arbeitende Benutzer, einige nicht hörende Benutzer und vielleicht andere Gruppen einzubeziehen, je nach Ihren Anforderungen.

## Andere Werkzeuge

Es gibt viele andere Arten von assistiver Technologie, wie:

- Große Text- oder Braille-Tastaturen.
- Alternative Zeigegeräte wie Trackballs, Joysticks und Touchpads.
- Bildschirmvergrößerer.
- Sprachsteuerungssoftware.
- Schaltsteuerungen.

## Prüfliste für Barrierefreiheitstests

Die folgende Liste bietet Ihnen eine Prüfliste, die Sie befolgen können, um sicherzustellen, dass Sie die empfohlenen Barrierefreiheitstests für Ihr Projekt durchgeführt haben:

1. Stellen Sie sicher, dass Ihr HTML so semantisch korrekt wie möglich ist. [Es zu validieren](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML#html_validation) ist ein guter Anfang, ebenso wie die Verwendung eines [Prüftools](#prüftools).
2. Überprüfen Sie, dass Ihr Inhalt Sinn ergibt, wenn das CSS deaktiviert ist.
3. Stellen Sie sicher, dass Ihre Funktionen über die Tastatur zugänglich sind (siehe [UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls) für weitere Details). Testen Sie mit Tab, Eingabetaste etc.
4. Stellen Sie sicher, dass Ihre Nicht-Text-Inhalte [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) haben. Ein [Prüftool](#prüftools) eignet sich gut, um solche Probleme zu erkennen.
5. Stellen Sie sicher, dass der [Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast) Ihrer Website akzeptabel ist, indem ein geeignetes Prüfwerkzeug verwendet wird.
6. Stellen Sie sicher, dass [versteckter Inhalt](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) von Bildschirmlesern erkannt wird.
7. Stellen Sie sicher, dass die Funktionalität, wo immer möglich, ohne JavaScript nutzbar ist.
8. Verwenden Sie ARIA, um die Barrierefreiheit dort zu verbessern, wo es angemessen ist.
9. Lassen Sie Ihre Website durch ein [Prüftool](#prüftools) laufen.
10. Testen Sie sie mit einem Bildschirmlesegerät.
11. Fügen Sie eine Barrierefreiheitspolitik/Erklärung irgendwo auffindbar auf Ihrer Webseite ein, um zu erklären, was Sie getan haben.

## Zusammenfassung

Hoffentlich hat dieser Artikel Ihnen eine Vorstellung davon gegeben, welche Arten von Tools Sie zur Behebung von Barrierefreiheitsproblemen verwenden können, und welche assistiven Technologien von Menschen mit Behinderungen verwendet werden, um das Internet zu nutzen.

Im nächsten Artikel werden wir uns ansehen, wie man barrierefreies HTML schreibt.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}
