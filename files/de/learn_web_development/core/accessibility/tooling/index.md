---
title: Barrierefreiheitstools und unterstützende Technologien
short-title: Accessibility tools
slug: Learn_web_development/Core/Accessibility/Tooling
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}

> [!NOTE]
> Der Inhalt dieses Artikels ist derzeit unvollständig, entschuldigen Sie bitte! Wir arbeiten hart daran, den MDN Learn Web Development-Bereich zu verbessern, und werden bald die als unvollständig („TODO“) markierten Stellen fertigstellen.

Als Nächstes richten wir unsere Aufmerksamkeit auf Barrierefreiheitstools und bieten Informationen darüber, welche Tools Sie verwenden können, um Barrierefreiheitsprobleme zu lösen, und welche unterstützenden Technologien von Menschen mit Behinderungen genutzt werden, während sie im Internet surfen. Diese Tools werden Sie auch in den folgenden Artikeln nutzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegendes Verständnis von Barrierefreiheitskonzepten</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Vertrautheit mit der Art von Tools, die Sie zur Lösung von Barrierefreiheitsproblemen verwenden können, z.B. Auditing-Tools.</li>
          <li>Einrichten von Screenreadern und deren Verwendung zur Testung von Websites auf Desktop und Mobilgeräten.</li>
          <li>Andere Hilfstechnologien wie große Texte oder Brailletastaturen, alternative Zeigegeräte und Bildschirmvergrößerer.</li>
          <li>Die Wichtigkeit von Benutzer-Tests neben automatisierten Tests.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheitstools

Lassen Sie uns einen Blick auf die Tools werfen, die Sie nutzen können, um barrierefreie Websites zu implementieren und Barrierefreiheitsprobleme zu beheben.

### Testen der Quelltextordnung

Ihr Inhalt sollte in seiner Quelltextordnung logisch sinnvoll sein — Sie können ihn später immer mit CSS an die gewünschte Stelle setzen, aber die Quelltextordnung sollte von Anfang an stimmen.

Als Test können Sie das CSS einer Seite ausschalten und sehen, wie verständlich sie ohne CSS ist. Sie könnten dies manuell tun, indem Sie das CSS aus Ihrem Code entfernen, aber der einfachste Weg ist die Verwendung von Browser-Funktionen, zum Beispiel:

- Firefox: Wählen Sie _Ansicht > Seitenstil > Kein Stil_ im Hauptmenü.
- Safari: Wählen Sie _Entwickeln > Stile deaktivieren_ im Hauptmenü (um das _Entwickeln_-Menü zu aktivieren, wählen Sie _Safari > Einstellungen > Erweitert > Entwicklermenü in der Menüleiste einblenden_).
- Chrome: Installieren Sie die Web Developer Toolbar-Erweiterung, dann starten Sie den Browser neu. Klicken Sie auf das Zahnradsymbol, das erscheint, und wählen Sie dann _CSS > Alle Stile deaktivieren_.
- Edge: Wählen Sie _Ansicht > Stil > Kein Stil_ im Hauptmenü.

### Farbkontrastprüfer

Bei der Auswahl eines Farbschemas für Ihre Website sollten Sie sicherstellen, dass die Textfarbe (Vordergrund) gut mit der Hintergrundfarbe kontrastiert. Ihr Design mag cool aussehen, aber es ist nicht gut, wenn Menschen mit Sehbehinderungen wie Farbenblindheit Ihren Inhalt nicht lesen können. Verwenden Sie ein Tool wie WebAIMs [Color Contrast Checker](https://webaim.org/resources/contrastchecker/), um zu überprüfen, ob Ihr Farbschema genügend Kontrast bietet.

Ein weiterer Tipp ist, sich nicht allein auf Farben für Wegweiser/Informationen zu verlassen, da dies für diejenigen, die die Farbe nicht sehen können, nicht hilfreich ist. Anstelle von rot markierten Pflichtfeldern in einem Formular markieren Sie diese mit einem Sternchen und in Rot.

> [!NOTE]
> Ein hoher Kontrast ermöglicht es auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm benutzt, Seiten besser bei hellem Umfeld, wie Sonnenlicht, zu lesen.

### Auditing-Tools

Es gibt eine Reihe von Auditing-Tools, in die Sie Ihre Webseiten eingeben können. Diese werden sie überprüfen und eine Liste von vorhandenen Barrierefreiheitsproblemen auf der Seite zurückgeben. Lassen Sie uns ein Beispiel ansehen, unter Verwendung von [Wave](https://wave.webaim.org/), einem Online-Barrierefreiheitstest-Tool, das eine Webadresse akzeptiert und eine annotierte Ansicht dieser Seite zurückgibt, bei der Barrierefreiheitsprobleme hervorgehoben sind.

1. Gehen Sie zur [Wave-Homepage](https://wave.webaim.org/).
2. Geben Sie die URL unseres [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) Beispiels in das Textfeld oben auf der Seite ein. Drücken Sie dann Enter oder klicken/tippen Sie auf den Pfeil am äußersten rechten Rand des Eingabefelds.
3. Die Seite sollte mit einer Beschreibung der Barrierefreiheitsprobleme antworten. Klicken Sie auf die angezeigten Symbole, um mehr Informationen zu jedem der von Wave identifizierten Probleme zu sehen.

Weitere Auditing-Tools, die es wert sind, überprüft zu werden:

- [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)
- [ANDI Bookmarklet](https://www.ssa.gov/accessibility/andi/help/install.html)
- [Google Lighthouse Barrierefreiheitsaudits](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)

> [!NOTE]
> Solche Tools sind nicht allein ausreichend, um alle Ihre Barrierefreiheitsprobleme zu lösen. Sie benötigen eine Kombination aus diesen Tools, Wissen und Erfahrung, Benutzer-Tests usw., um ein vollständiges Bild zu erhalten.

### Automatisierungstools

[Deque's aXe Tool](https://www.deque.com/axe/) geht etwas weiter als die oben erwähnten Auditing-Tools. Wie die anderen untersucht es Seiten und gibt Barrierefreiheitsfehler zurück. In seiner nützlichsten Form sind wahrscheinlich die Browser-Erweiterungen:

- [aXe für Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe für Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Diese fügen den Entwickler-Tools des Browsers einen Barrierefreiheits-Tab hinzu. Zum Beispiel installierten wir die Firefox-Version und benutzten sie, um unser [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) Beispiel zu prüfen. Wir erhielten folgende Ergebnisse:

![Ein Screenshot der von Axe identifizierten Barrierefreiheitsprobleme.](axe-screenshot.png)

aXe ist auch über `npm` installierbar und kann mit Task-Runnern wie [Grunt](https://gruntjs.com/) und [Gulp](https://gulpjs.com/), Automatisierungsframeworks wie [Selenium](https://www.selenium.dev/) und [Cucumber](https://cucumber.io/), Unit-Test-Frameworks wie [Jasmine](https://jasmine.github.io/) und mehr integriert werden (siehe erneut die [Hauptseite von aXe](https://www.deque.com/axe/) für Details).

## Screenreader

Es lohnt sich definitiv, einen Screenreader zu testen, um sich daran zu gewöhnen, wie stark sehbehinderte Menschen das Web nutzen. Es gibt eine Reihe von Screenreadern:

- Einige sind kommerzielle Produkte, wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows).
- Einige sind kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows und macOS) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Einige sind im Betriebssystem integriert, wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS und iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf Chromebooks) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

In der Regel sind Screenreader separate Apps, die auf dem Host-Betriebssystem laufen und nicht nur Webseiten, sondern auch Text in anderen Apps lesen können. Dies ist nicht immer der Fall (ChromeVox ist eine Browser-Erweiterung), aber normalerweise neigen Screenreader dazu, leicht unterschiedlich zu agieren und unterschiedliche Steuerung zu haben. Sie müssen die Dokumentation Ihres gewählten Screenreaders konsultieren, um alle Details zu erhalten – wobei gesagt, sie funktionieren alle im Wesentlichen auf die gleiche Weise.

Lassen Sie uns einige Tests mit mehreren verschiedenen Screenreadern durchführen, um Ihnen eine allgemeine Vorstellung davon zu geben, wie sie funktionieren und wie man mit ihnen testet.

> [!NOTE]
> WebAIMs [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/) bietet nützliche Informationen über die Nutzung von Screenreadern und was am besten für Screenreader funktioniert. Siehe auch [Screen Reader User Survey #9 Results](https://webaim.org/projects/screenreadersurvey9/#used) für interessante Statistiken zur Nutzung von Screenreadern.

### VoiceOver

VoiceOver (VO) wird kostenlos mit Ihrem Mac/iPhone/iPad geliefert, daher ist es nützlich für Tests auf Desktop/Mobil, wenn Sie Apple-Produkte nutzen. Wir werden es auf macOS auf einem MacBook Pro testen.

Um es zu aktivieren, drücken Sie Cmd + F5. Falls Sie VO vorher nicht genutzt haben, wird Ihnen sich ein Willkommensbildschirm präsentieren, auf dem Sie wählen können, ob Sie VO starten oder nicht und eine recht nützliche Einführung durchlaufen können, um zu lernen, wie man es verwendet. Um es wieder auszuschalten, drücken Sie erneut Cmd + F5.

> [!NOTE]
> Sie sollten die Einführung mindestens einmal durchlaufen – es ist eine wirklich nützliche Möglichkeit, VO zu erlernen.

Wenn VO eingeschaltet ist, sieht das Display im Wesentlichen gleich aus, aber Sie sehen ein schwarzes Feld unten links auf dem Bildschirm, das Informationen darüber enthält, was VO derzeit ausgewählt hat. Die aktuelle Auswahl wird ebenfalls hervorgehoben, mit einem schwarzen Rahmen – diese Hervorhebung ist als **VO-Cursor** bekannt.

![Ein Beispiel-Screenshot, der Accessibility-Tests mit VoiceOver auf der MDN-Startseite zeigt. Unten links im Bild ist eine Hervorhebung der Informationen auf der Webseite.](voiceover.png)

Um VoiceOver zu nutzen, werden Sie häufig den "VO-Modifier" verwenden müssen — dies ist eine Taste oder Tastenkombination, die Sie zusätzlich zu den eigentlichen VO-Tastaturkürzeln drücken müssen, um diese zum Laufen zu bringen. Die Verwendung eines solchen Modifiers ist bei Screenreadern üblich, um deren Befehle davor zu schützen, mit anderen Befehlen in Konflikt zu geraten. Bei VoiceOver kann der Modifier entweder CapsLock oder Strg + Wahl sein.

VO hat viele Tastaturbefehle, und wir werden hier nicht alle auflisten. Die grundlegenden, die Sie für die Testung von Webseiten benötigen, finden Sie in der folgenden Tabelle. In den Tastenkombinationen steht "VO" für "den VoiceOver-Modifier".

<table class="standard-table no-markdown">
  <caption>
    Häufigste VoiceOver-Tastaturkürzel
  </caption>
  <thead>
    <tr>
      <th scope="col">Tastaturkürzel</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VO + Pfeiltasten</td>
      <td>Verschieben Sie den VO-Cursor nach oben, rechts, unten, links.</td>
    </tr>
    <tr>
      <td>VO + Leertaste</td>
      <td>
        Wählen/Aktivieren von Elementen, die der VO-Cursor hervorgehoben hat.
        Dies schließt Elemente ein, die im Rotor ausgewählt wurden (siehe unten).
      </td>
    </tr>
    <tr>
      <td>VO + Umschalt + Pfeil nach unten</td>
      <td>
        In eine Gruppe von Elementen gehen (z.B. eine HTML-Tabelle, ein Formular,
        usw.). Einmal in der Gruppe kann man sich bewegen und Elemente darin
        auswählen, indem man die obigen Befehle wie gewohnt verwendet.
      </td>
    </tr>
    <tr>
      <td>VO + Umschalt + Pfeil nach oben</td>
      <td>Aus einer Gruppe herausgehen.</td>
    </tr>
    <tr>
      <td>VO + C</td>
      <td>(wenn innerhalb einer Tabelle) Lesen Sie die Kopfzeile der aktuellen Spalte.</td>
    </tr>
    <tr>
      <td>VO + R</td>
      <td>(wenn innerhalb einer Tabelle) Lesen Sie die Kopfzeile der aktuellen Zeile.</td>
    </tr>
    <tr>
      <td>VO + C + C (zwei Cs hintereinander)</td>
      <td>
        (wenn innerhalb einer Tabelle) Lesen Sie die gesamte aktuelle Spalte,
        einschließlich der Kopfzeile.
      </td>
    </tr>
    <tr>
      <td>VO + R + R (zwei Rs hintereinander)</td>
      <td>
        (wenn innerhalb einer Tabelle) Lesen Sie die gesamte aktuelle Zeile,
        einschließlich der Kopfzeilen, die jedem Feld entsprechen.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeil nach links, VO + Pfeil nachrechts</td>
      <td>
        (wenn in einigen horizontalen Optionen, wie einem Datums- oder Uhrzeitauswahl)
        Wechseln zwischen Optionen.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeil nach oben, VO + Pfeil nach unten</td>
      <td>
        (wenn in einigen horizontalen Optionen, wie einem Datums- oder
        Uhrzeitauswahl) Ändern Sie die aktuelle Option.
      </td>
    </tr>
    <tr>
      <td>VO + U</td>
      <td>
        Verwenden Sie den Rotor, der Listen von Überschriften, Links,
        Formularsteuerelemente usw. zur leichten Navigation anzeigt.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeil nach links, VO + Pfeil nach rechts</td>
      <td>
        (wenn innerhalb des Rotors) Wechseln zwischen verschiedenen Listen, die
        im Rotor verfügbar sind.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeil nach oben, VO + Pfeil nach unten</td>
      <td>
        (wenn innerhalb des Rotors) Wechseln zwischen verschiedenen Elementen in
        der aktuellen Rotorliste.
      </td>
    </tr>
    <tr>
      <td>Esc</td>
      <td>(wenn innerhalb des Rotors) Rotor verlassen.</td>
    </tr>
    <tr>
      <td>Strg</td>
      <td>(wenn VO spricht) Sprache anhalten/fortsetzen.</td>
    </tr>
    <tr>
      <td>VO + Z</td>
      <td>Letztes gesprochenes Segment neu starten.</td>
    </tr>
    <tr>
      <td>VO + D</td>
      <td>Gehe ins Mac-Dock, um darin Anwendungen auszuwählen.</td>
    </tr>
  </tbody>
</table>

Das scheint eine Menge Befehle zu sein, aber es ist nicht so schlecht, wenn man sich daran gewöhnt, und VO erinnert einen regelmäßig daran, welche Befehle in bestimmten Situationen zu verwenden sind. Spielen Sie jetzt mit VO herum; Sie können dann weiter mit einigen unserer Beispiele im Abschnitt [Screenreader-Tests](#screenreader-tests) experimentieren.

### NVDA

NVDA ist nur für Windows verfügbar und Sie müssen es installieren.

1. Laden Sie es von [nvaccess.org](https://www.nvaccess.org/) herunter. Sie können wählen, ob Sie eine Spende machen oder es kostenlos herunterladen möchten; Sie müssen ihnen auch Ihre E-Mail-Adresse mitteilen, bevor Sie es herunterladen können.
2. Einmal heruntergeladen, installieren Sie es – Sie doppelklicken auf das Installationsprogramm, akzeptieren die Lizenz und befolgen die Anweisungen.
3. Um NVDA zu starten, doppelklicken Sie auf die Programmdatei/Verknüpfung oder verwenden Sie die Tastenkombination Strg + Alt + N. Sie sehen den NVDA-Willkommensdialog, wenn Sie es starten. Hier können Sie einige Optionen auswählen und dann auf die Schaltfläche _OK_ drücken, um loszulegen.

NVDA wird jetzt auf Ihrem Computer aktiv sein.

Um NVDA zu nutzen, werden Sie häufig den "NVDA-Modifier" verwenden – dies ist eine Taste, die Sie zusätzlich zu den eigentlichen NVDA-Tastaturkürzeln drücken müssen, damit sie funktionieren. Die Verwendung eines solchen Modifiers ist bei Screenreadern üblich, um deren Befehle davor zu schützen, mit anderen Befehlen in Konflikt zu geraten. Bei NVDA kann der Modifier entweder Insert (die Standardeinstellung) oder CapsLock sein (kann durch Markieren des ersten Kontrollkästchens im NVDA-Willkommensdialog gewählt werden, bevor _OK_ gedrückt wird).

> [!NOTE]
> NVDA ist subtiler als VoiceOver in Bezug darauf, wie es hervorhebt, wo es sich befindet und was es tut. Wenn Sie Überschriften, Listen usw. durchblättern, werden Ihnen im Allgemeinen die Elemente, auf denen Sie sich befinden, mit einem subtilen Umriss hervorgehoben, dies ist jedoch nicht immer bei allen Dingen der Fall. Wenn Sie komplett verloren gehen, können Sie Strg + F5 drücken, um die aktuelle Seite zu aktualisieren und von oben an neu zu beginnen.

NVDA hat viele Tastaturbefehle, und wir werden hier nicht alle auflisten. Die grundlegenden, die Sie für die Testung von Webseiten benötigen, finden Sie in der folgenden Tabelle. In den Tastenkombinationen steht "NVDA" für "den NVDA-Modifier".

<table class="standard-table no-markdown">
  <caption>
    Häufigste NVDA-Tastaturkürzel
  </caption>
  <thead>
    <tr>
      <th scope="col">Tastaturkürzel</th>
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
      <td>Aktuelle Zeile lesen.</td>
    </tr>
    <tr>
      <td>NVDA + Pfeil nach unten</td>
      <td>Ab der aktuellen Position beginnen zu lesen.</td>
    </tr>
    <tr>
      <td>Pfeil nach oben und Pfeil nach unten, oder Umschalt + Tabulator und Tabulator</td>
      <td>Zum vorherigen/nächsten Element auf der Seite bewegen und lesen.</td>
    </tr>
    <tr>
      <td>Pfeil nach links und Pfeil nach rechts</td>
      <td>Zum vorherigen/nächsten Zeichen im aktuellen Element bewegen und lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + H und H</td>
      <td>Zur vorherigen/nächsten Überschrift bewegen und lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + K und K</td>
      <td>Zum vorherigen/nächsten Link bewegen und lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + D und D</td>
      <td>
        Zum vorherigen/nächsten Dokumentenbereich (z.B. <code>&#x3C;nav></code>)
        bewegen und lesen.
      </td>
    </tr>
    <tr>
      <td>Umschalt + 1–6 und 1–6</td>
      <td>Zur vorherigen/nächsten Überschrift (Level 1–6) bewegen und lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + F und F</td>
      <td>Zum vorherigen/nächsten Formulareingabefeld bewegen und darauf fokussieren.</td>
    </tr>
    <tr>
      <td>Umschalt + T und T</td>
      <td>Zur vorherigen/nächsten Datentabelle bewegen und darauf fokussieren.</td>
    </tr>
    <tr>
      <td>Umschalt + B und B</td>
      <td>Zum vorherigen/nächsten Button bewegen und sein Label lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + L und L</td>
      <td>Zur vorherigen/nächsten Liste bewegen und das erste Listen-Element lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + I und I</td>
      <td>Zum vorherigen/nächsten Listenelement bewegen und es lesen.</td>
    </tr>
    <tr>
      <td>Eingabe-/Enter-Taste</td>
      <td>
        (wenn Link/Button oder ein anderes aktivierbares Element ausgewählt ist)
        Element aktivieren.
      </td>
    </tr>
    <tr>
      <td>NVDA + Leertaste</td>
      <td>
        (wenn Formular ausgewählt ist) Formular betreten, sodass
        individuelle Elemente ausgewählt werden können, oder Formular verlassen,
        wenn Sie sich bereits darin befinden.
      </td>
    </tr>
    <tr>
      <td>Umschalt-Tabulator und Tabulator</td>
      <td>(wenn innerhalb des Formulars) Zwischen den Formulareingabefeldern bewegen.</td>
    </tr>
    <tr>
      <td>Pfeil nach oben und Pfeil nach unten</td>
      <td>
        (wenn innerhalb des Formulars) Formulareingabewerte ändern (im Fall von
        Dingen wie Auswahllisten).
      </td>
    </tr>
    <tr>
      <td>Leertaste</td>
      <td>(wenn innerhalb des Formulars) Ausgewählten Wert wählen.</td>
    </tr>
    <tr>
      <td>Strg + Alt + Pfeiltasten</td>
      <td>(wenn eine Tabelle ausgewählt ist) Zwischen Tabellenzellen bewegen.</td>
    </tr>
  </tbody>
</table>

### Screenreader-Tests

Jetzt, da Sie sich an die Nutzung eines Screenreaders gewöhnt haben, möchten wir, dass Sie ihn für einige schnelle Barrierefreiheits-Tests nutzen, um ein Gefühl dafür zu bekommen, wie Screenreader mit guten und schlechten Webseiten-Funktionen umgehen:

- Sehen Sie sich [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) an und achten Sie darauf, wie die Überschriften vom Screenreader gefunden werden und für die Navigation genutzt werden können. Dies ist bei [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) nicht der Fall – der Screenreader erhält keine dieser Informationen. Stellen Sie sich vor, wie ärgerlich dies beim Navigieren durch eine wirklich lange Textseite wäre.
- Sehen Sie sich [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) an und achten Sie darauf, wie sie außerhalb des Kontexts Sinn machen. Dies ist bei [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) nicht der Fall – sie sind alle einfach nur „hier klicken“.
- Sehen Sie sich [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) an und achten Sie darauf, wie die Formulareingabefelder mithilfe ihrer Labels beschrieben werden, weil wir die `<label>`-Elemente richtig genutzt haben. Bei [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) erhalten sie ein unpräzises Label wie „leer“.
- Sehen Sie sich unser [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) Beispiel an und feststellen, wie der Screenreader in der Lage ist, Spalten und Zeilen von Inhalten zu verknüpfen und sie alle zusammen vorzulesen, weil wir Kopfzeilen richtig definiert haben. In [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) können keine der Zellen verknüpft werden. Beachten Sie, dass NVDA etwas seltsam verhält, wenn Sie nur eine einzelne Tabelle auf einer Seite haben; Sie könnten stattdessen [WebAIMs Tabellen-Testseite](https://webaim.org/articles/nvda/tables.htm) ausprobieren.
- Werfen Sie einen Blick auf das [WAI-ARIA Live-Bereiche Beispiel](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm), das wir zuvor gesehen haben, und beachten Sie, wie der Screenreader den ständig aktualisierten Abschnitt liest, während er sich aktualisiert.

## Benutzer-Tests

Wie bereits erwähnt, können Sie sich nicht allein auf automatisierte Tools verlassen, um Barrierefreiheitsprobleme auf Ihrer Website zu bestimmen. Es wird empfohlen, dass Sie, während Sie Ihren Testplan erstellen, nach Möglichkeit einige Barrierefreiheits-Benutzergruppen einbeziehen. Versuchen Sie, einige Screenreader-Nutzer zu beteiligen, einige Tastaturnutzer, einige nicht hörende Nutzer und vielleicht auch andere Gruppen, je nach Ihren Anforderungen.

## Weitere Tools

Viele andere Arten von assistiver Technologie existieren, wie z.B.:

- Große Text- oder Braille-Tastaturen.
- Alternative Zeigegeräte wie Trackballs, Joysticks und Touchpads.
- Bildschirmvergrößerer.
- Spracherkennungssoftware.
- Schalterkontrollen.

## Barrierefreiheits-Testcheckliste

Die folgende Liste bietet eine Checkliste, der Sie folgen können, um sicherzustellen, dass Sie die empfohlenen Barrierefreiheits-Tests für Ihr Projekt durchgeführt haben:

1. Stellen Sie sicher, dass Ihr HTML so semantisch korrekt wie möglich ist. [Validierung](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML#html_validation) ist ein guter Anfang, ebenso wie die Verwendung eines [Auditing-Tools](#auditing-tools).
2. Überprüfen, ob Ihr Inhalt Sinn macht, wenn das CSS ausgeschaltet ist.
3. Stellen Sie sicher, dass Ihre Funktionalität mit der Tastatur zugänglich ist (siehe [UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls) für weitere Details). Testen mit Tab, Return/Enter usw.
4. Stellen Sie sicher, dass Ihre nichttextlichen Inhalte [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) haben. Ein [Auditing-Tool](#auditing-tools) ist gut geeignet, um solche Probleme zu erfassen.
5. Stellen Sie sicher, dass der [Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast) Ihrer Website akzeptabel ist, indem Sie ein geeignetes Prüfwerkzeug verwenden.
6. Stellen Sie sicher, dass [versteckter Inhalt](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) von Screenreadern sichtbar ist.
7. Stellen Sie sicher, dass die Funktionalität ohne JavaScript so weit wie möglich nutzbar ist.
8. Nutzen Sie ARIA, um die Barrierefreiheit dort zu verbessern, wo es angemessen ist.
9. Führen Sie Ihre Site durch ein [Auditing-Tool](#auditing-tools).
10. Testen Sie es mit einem Screenreader.
11. Fügen Sie irgendwo auf Ihrer Website eine barrierefreie Erklärung/Politik hinzu, die auffindbar ist und beschreibt, was Sie getan haben.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel eine Vorstellung von den Arten von Tools gegeben, die Sie verwenden können, um Barrierefreiheitsprobleme zu lösen, und wie die unterstützende Technologie verwendet wird, die von Menschen mit Behinderungen genutzt wird, um im Web zu navigieren.

Im nächsten Artikel werden wir uns damit befassen, wie man zugängliches HTML schreibt.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}
