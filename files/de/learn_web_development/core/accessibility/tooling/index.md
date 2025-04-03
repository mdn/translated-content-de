---
title: Barrierefreiheitstools und unterstützende Technologien
short-title: Accessibility tools
slug: Learn_web_development/Core/Accessibility/Tooling
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}

> [!NOTE]
> Der Inhalt dieses Artikels ist derzeit unvollständig, entschuldigen Sie das! Wir arbeiten hart daran, den MDN Learn Web Development-Bereich zu verbessern, und werden bald Stellen, die als unvollständig ("TODO") markiert sind, fertigstellen.

Nun richten wir unsere Aufmerksamkeit auf Barrierefreiheitstools und geben Informationen darüber, welche Arten von Werkzeugen Sie verwenden können, um Barrierefreiheitsprobleme zu lösen und welche unterstützenden Technologien von Menschen mit Behinderungen beim Surfen im Web verwendet werden. Sie werden diese Tools in den folgenden Artikeln verwenden.

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
          <li>Vertrautheit mit den Arten von Werkzeugen, die Sie zur Lösung von Barrierefreiheitsproblemen verwenden können, zum Beispiel Auditing-Tools.</li>
          <li>Einrichten von Screenreadern und deren Verwendung zum Testen von Websites auf Desktops und Mobilgeräten.</li>
          <li>Andere unterstützende Technologien wie große Text- oder Brailletastaturen, alternative Zeigegeräte und Bildschirmlupen.</li>
          <li>Die Wichtigkeit von Benutzertests neben automatisierten Tests.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheitstools

Lassen Sie uns einen Blick auf die Tools werfen, die Sie bei der Implementierung barrierefreier Websites und der Behebung von Barrierefreiheitsproblemen nutzen können.

### Testen der Quellreihenfolge

Ihr Inhalt sollte in seiner Quellreihenfolge logisch sinnvoll sein — Sie können ihn später mithilfe von CSS an die gewünschte Stelle platzieren, aber Sie sollten die Quellreihenfolge von Anfang an richtig setzen.

Testen Sie dies, indem Sie das CSS einer Website ausschalten und sehen, wie verständlich sie ohne CSS ist. Sie könnten dies manuell tun, indem Sie das CSS aus Ihrem Code entfernen, aber der einfachste Weg ist die Verwendung von Browserfunktionen, zum Beispiel:

- Firefox: Wählen Sie _Ansicht > Seitenstil > Ohne Stil_ im Hauptmenü.
- Safari: Wählen Sie _Entwickeln > Stile deaktivieren_ im Hauptmenü (um das _Entwickeln_-Menü zu aktivieren, wählen Sie _Safari > Einstellungen > Erweitert > Entwickeln-Menü in der Menüleiste anzeigen_).
- Chrome: Installieren Sie die Erweiterung Web Developer Toolbar, starten Sie den Browser neu. Klicken Sie auf das Zahnradsymbol und wählen Sie dann _CSS > Alle Stile deaktivieren_.
- Edge: Wählen Sie _Ansicht > Stil > Ohne Stil_ im Hauptmenü.

### Farbstärkentester

Wenn Sie ein Farbschema für Ihre Website auswählen, sollten Sie sicherstellen, dass die Textfarbe (Vordergrund) im Kontrast zur Hintergrundfarbe steht. Ihr Design mag cool aussehen, aber es nützt nichts, wenn Menschen mit Sehstörungen wie Farbenblindheit Ihre Inhalte nicht lesen können. Verwenden Sie ein Tool wie den [Color Contrast Checker](https://webaim.org/resources/contrastchecker/), um zu überprüfen, ob Ihr Schema ausreichend kontrastiert ist.

Ein weiterer Tipp ist es, nicht nur auf Farbe für Wegweiser/Informationen zu setzen, da dies für diejenigen, die die Farbe nicht sehen können, unbrauchbar ist. Anstelle von in Rot markierten Pflichtfeldern in Formularen, markieren Sie sie zusätzlich mit einem Sternchen.

> [!NOTE]
> Ein hoher Kontrast ermöglicht es auch Personen, die ein Smartphone oder Tablet mit einem glänzenden Bildschirm nutzen, Seiten in heller Umgebung wie Sonnenlicht besser zu lesen.

### Auditing-Tools

Es gibt zahlreiche Auditing-Tools, in die Sie Ihre Webseiten einspeisen können. Sie durchsuchen die Seiten und geben eine Liste der auf der Seite vorhandenen Barrierefreiheitsprobleme zurück. Lassen Sie uns ein Beispiel anschauen, indem wir [Wave](https://wave.webaim.org/), ein Online-Testtool für Barrierefreiheit, verwenden, welches eine Webadresse akzeptiert und eine kommentierte Ansicht dieser Seite mit hervorgehobenen Zugänglichkeitsproblemen zurückgibt.

1. Gehen Sie zur [Wave-Startseite](https://wave.webaim.org/).
2. Geben Sie die URL unseres Beispiels [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) in das Textfeld oben auf der Seite ein. Drücken Sie dann die Eingabetaste oder klicken/tippen Sie auf den Pfeil am rechten Rand des Eingabefeldes.
3. Die Seite sollte mit einer Beschreibung der Barrierefreiheitsprobleme antworten. Klicken Sie auf die angezeigt Symbole, um mehr Informationen zu den einzelnen von Wave identifizierten Problemen zu erhalten.

Weitere interessante Auditing-Tools:

- [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)
- [ANDI bookmarklet](https://www.ssa.gov/accessibility/andi/help/install.html)
- [Google Lighthouse accessibility audits](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)

> [!NOTE]
> Solche Tools sind allein nicht ausreichend, um all Ihre Barrierefreiheitsprobleme zu lösen. Sie benötigen eine Kombination aus diesen, Wissen und Erfahrung, Benutzertests usw., um sich ein vollständiges Bild zu machen.

### Automatisierungstools

[Deque's aXe Tool](https://www.deque.com/axe/) geht einen Schritt weiter als die oben genannten Auditing-Tools. Wie die anderen überprüft es Seiten und gibt Barrierefreiheitsfehler zurück. In seiner nützlichsten Form ist es wahrscheinlich am besten als Browser-Erweiterung:

- [aXe für Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe für Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Diese fügen den Browser-Entwicklertools einen Barrierefreiheits-Tab hinzu. Zum Beispiel haben wir die Firefox-Version installiert und sie verwendet, um unser Beispiel [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) zu prüfen. Wir erhielten folgende Ergebnisse:

![Ein Screenshot von Barrierefreiheitsproblemen, die vom Axe Tool identifiziert wurden.](axe-screenshot.png)

aXe ist auch mit `npm` installierbar und kann mit Task-Runnern wie [Grunt](https://gruntjs.com/) und [Gulp](https://gulpjs.com/), Automatisierungs-Frameworks wie [Selenium](https://www.selenium.dev/) und [Cucumber](https://cucumber.io/), Unit-Testing-Frameworks wie [Jasmine](https://jasmine.github.io/) und mehr integriert werden (mehr Details finden Sie auf der [Hauptseite von aXe](https://www.deque.com/axe/)).

## Screenreader

Es lohnt sich in jedem Fall, mit einem Screenreader zu testen, um ein Gefühl dafür zu bekommen, wie stark sehbehinderte Menschen das Web nutzen. Es gibt eine Reihe von Screenreadern:

- Einige sind kostenpflichtige kommerzielle Produkte, wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows).
- Einige sind kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows und macOS), und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Einige sind in das Betriebssystem integriert, wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS und iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf Chromebooks) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

In der Regel sind Screenreader separate Apps, die auf dem Host-Betriebssystem laufen und nicht nur Webseiten, sondern auch Texte in anderen Apps lesen können. Dies ist nicht immer der Fall (ChromeVox ist eine Browser-Erweiterung), aber normalerweise verhalten sich Screenreader ein wenig anders und haben unterschiedliche Steuerungen, daher sollten Sie die Dokumentation Ihres gewählten Screenreaders konsultieren, um alle Details zu erfahren – gesagt sei, dass sie grundsätzlich alle auf die gleiche Art arbeiten.

Lassen Sie uns einige Tests mit ein paar verschiedenen Screenreadern durchführen, um Ihnen eine allgemeine Vorstellung davon zu geben, wie sie funktionieren und wie man mit ihnen testet.

> [!NOTE]
> WebAIMs [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/) bietet nützliche Informationen zur Nutzung von Screenreadern und was am besten für Screenreader funktioniert. Siehe auch [Screen Reader User Survey #9 Results](https://webaim.org/projects/screenreadersurvey9/#used) für interessante Statistiken zur Nutzung von Screenreadern.

### VoiceOver

VoiceOver (VO) ist kostenlos auf Ihrem Mac/iPhone/iPad verfügbar und eignet sich daher gut zum Testen auf Desktop/Mobil, wenn Sie Apple-Produkte verwenden. Wir werden es auf macOS auf einem MacBook Pro testen.

Um es einzuschalten, drücken Sie Cmd + F5. Wenn Sie VO noch nicht verwendet haben, wird Ihnen ein Willkommensbildschirm angezeigt, auf dem Sie wählen können, ob Sie VO starten oder nicht, und ein ziemlich nützliches Tutorial durchlaufen können, um zu lernen, wie man es verwendet. Um es wieder auszuschalten, drücken Sie erneut Cmd + F5.

> [!NOTE]
> Sie sollten das Tutorial mindestens einmal durchlaufen – es ist eine wirklich nützliche Möglichkeit, VO zu lernen.

Wenn VO eingeschaltet ist, sieht das Display größtenteils gleich aus, aber Sie sehen ein schwarzes Fenster unten links auf dem Bildschirm, das Informationen zu dem aktuell von VO ausgewählten Element enthält. Die aktuelle Auswahl wird ebenfalls mit einem schwarzen Rand hervorgehoben – dieses Highlight ist als **VO-Cursor** bekannt.

![Ein Beispiel-Screenshot, der das Testen auf Barrierefreiheit mit VoiceOver auf der MDN-Startseite zeigt. Der untere linke Bereich des Bildes ist eine Hervorhebung der auf der Webseite ausgewählten Information.](voiceover.png)

Um VO zu verwenden, werden Sie viel Gebrauch vom "VO-Modifikator" machen – dies ist eine Taste oder Tastenkombination, die Sie zusätzlich zu den tatsächlichen VO-Tastenkombinationen drücken müssen, damit diese funktionieren. Der Einsatz eines Modifikators ist bei Screenreadern üblich, damit ihre Befehle nicht mit anderen Befehlen kollidieren. Im Fall von VO kann der Modifikator entweder die Feststell-Taste oder Strg + Option sein.

VO hat viele Tastaturbefehle, und wir werden hier nicht alle auflisten. Die grundlegenden, die Sie für das Testen von Websites benötigen, finden Sie in der folgenden Tabelle. In den Tastenkombinationen steht "VO" für "den VoiceOver-Modifikator".

<table class="standard-table no-markdown">
  <caption>
    Häufigste VoiceOver-Tastaturbefehle
  </caption>
  <thead>
    <tr>
      <th scope="col">Tastenkombination</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VO + Cursortasten</td>
      <td>Bewegen Sie den VO-Cursor nach oben, rechts, unten, links.</td>
    </tr>
    <tr>
      <td>VO + Leertaste</td>
      <td>
        Auswählen/aktivieren von Elementen, die vom VO-Cursor hervorgehoben sind. Dazu gehören viele Elemente
        im Rotor (siehe unten).
      </td>
    </tr>
    <tr>
      <td>VO + Shift + Pfeil nach unten</td>
      <td>
        Wechseln in eine Gruppe von Elementen (wie eine HTML-Tabelle oder ein Formular usw.).
        Sobald Sie sich in einer Gruppe befinden, können Sie sich umherbewegen und Elemente
        innerhalb dieser Gruppe mit den oben genannten Befehlen wie gewohnt auswählen.
      </td>
    </tr>
    <tr>
      <td>VO + Shift + Pfeil nach oben</td>
      <td>Verlassen einer Gruppe.</td>
    </tr>
    <tr>
      <td>VO + C</td>
      <td>(wenn in einer Tabelle) Lesen der Kopfzeile der aktuellen Spalte.</td>
    </tr>
    <tr>
      <td>VO + R</td>
      <td>(wenn in einer Tabelle) Lesen der Kopfzeile der aktuellen Zeile.</td>
    </tr>
    <tr>
      <td>VO + C + C (zwei C hintereinander)</td>
      <td>
        (wenn in einer Tabelle) Lesen der gesamten aktuellen Spalte, einschließlich der Kopfzeile.
      </td>
    </tr>
    <tr>
      <td>VO + R + R (zwei R hintereinander)</td>
      <td>
        (wenn in einer Tabelle) Lesen der gesamten aktuellen Zeile, einschließlich der Kopfzeilen, die
        den einzelnen Zellen entsprechen.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeil nach links, VO + Pfeil nach rechts</td>
      <td>
        (wenn innerhalb einiger horizontaler Optionen, wie z.B. ein Datum oder eine Uhrzeitauswahl)
        Zwischen Optionen wechseln.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeil nach oben, VO + Pfeil nach unten</td>
      <td>
        (wenn innerhalb einiger horizontaler Optionen, wie z.B. ein Datum oder eine Uhrzeitauswahl)
        Ändern der aktuellen Option.
      </td>
    </tr>
    <tr>
      <td>VO + U</td>
      <td>
        Verwenden des Rotor, der Listen von Überschriften, Links, Formularelementen usw. zur einfachen Navigation anzeigt.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeil nach links, VO + Pfeil nach rechts</td>
      <td>
        (wenn im Rotor) Wechseln zwischen verschiedenen Listen, die im Rotor verfügbar sind.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeil nach oben, VO + Pfeil nach unten</td>
      <td>
        (wenn im Rotor) Wechseln zwischen verschiedenen Elementen in der aktuellen Rotorliste.
      </td>
    </tr>
    <tr>
      <td>Esc</td>
      <td>(wenn im Rotor) Verlassen des Rotors.</td>
    </tr>
    <tr>
      <td>Strg</td>
      <td>(wenn VO spricht) Sprache anhalten/fortsetzen.</td>
    </tr>
    <tr>
      <td>VO + Z</td>
      <td>Wiederhole das letzte Stück Sprache.</td>
    </tr>
    <tr>
      <td>VO + D</td>
      <td>Wechseln in das Dock des Mac, um darin Programme auszuwählen, die ausgeführt werden sollen.</td>
    </tr>
  </tbody>
</table>

Das scheint wie viele Befehle, aber es ist gar nicht so schwer, wenn man sich daran gewöhnt hat, und VO gibt Ihnen regelmäßig Erinnerungen daran, welche Befehle Sie an bestimmten Stellen verwenden können. Spielen Sie jetzt etwas mit VO herum; Sie können dann auch mit einigen unserer Beispiele im Abschnitt [Screenreader-Testen](#screenreader-testen) herumspielen.

### NVDA

NVDA ist nur für Windows verfügbar und Sie müssen es installieren.

1. Laden Sie es von [nvaccess.org](https://www.nvaccess.org/) herunter. Sie können wählen, ob Sie eine Spende machen möchten oder es kostenlos herunterladen möchten; Sie müssen auch Ihre E-Mail-Adresse angeben, bevor Sie es herunterladen können.
2. Sobald es heruntergeladen ist, installieren Sie es — doppelklicken Sie auf die Installationsdatei, akzeptieren Sie die Lizenz und folgen Sie den Anweisungen.
3. Um NVDA zu starten, doppelklicken Sie auf die Programmdatei/-verknüpfung oder verwenden Sie die Tastenkombination Strg + Alt + N. Wenn Sie NVDA starten, wird Ihnen der NVDA-Willkommensdialog angezeigt. Hier können Sie einige Optionen auswählen und dann den _OK_-Button drücken, um loszulegen.

NVDA wird jetzt auf Ihrem Computer aktiv sein.

Um NVDA zu verwenden, werden Sie häufig den "NVDA-Modifikator" verwenden — dies ist eine Taste, die Sie zusätzlich zu den eigentlichen NVDA-Tastenkombinationen drücken müssen, damit diese funktionieren. Der Einsatz eines Modifikators ist bei Screenreadern üblich, um zu vermeiden, dass ihre Befehle mit anderen kollidieren. Im Fall von NVDA kann der Modifikator entweder die Einfügen-Taste (Standard) oder die Feststelltaste (kann gewählt werden, indem Sie die erste Checkbox im NVDA-Willkommensdialog vor dem Drücken von _OK_ markieren) sein.

> [!NOTE]
> NVDA ist subtiler als VoiceOver in Bezug darauf, wie es hervorhebt, wo es ist und was es tut. Wenn Sie durch Überschriften, Listen usw. scrollen, werden Elemente, auf die Sie ausgewählt sind, im Allgemeinen mit einem subtilen Umriss hervorgehoben, aber das ist nicht immer bei allen Dingen der Fall. Wenn Sie sich völlig verloren fühlen, können Sie Strg + F5 drücken, um die aktuelle Seite zu aktualisieren und von oben neu zu beginnen.

NVDA hat viele Tastaturbefehle, und wir werden hier nicht alle auflisten. Die grundlegenden, die Sie für das Testen von Websites benötigen, finden Sie in der folgenden Tabelle. In den Tastenkombinationen steht "NVDA" für "den NVDA-Modifikator".

<table class="standard-table no-markdown">
  <caption>
    Häufigste NVDA-Tastaturbefehle
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
      <td>Ab der aktuellen Position vorlesen.</td>
    </tr>
    <tr>
      <td>Pfeil nach oben und Pfeil nach unten oder Umschalttaste + Tab und Tab</td>
      <td>Zum vorherigen/nächsten Element auf der Seite wechseln und es vorlesen.</td>
    </tr>
    <tr>
      <td>Pfeil nach links und Pfeil nach rechts</td>
      <td>Zum vorherigen/nächsten Zeichen im aktuellen Element wechseln und es vorlesen.</td>
    </tr>
    <tr>
      <td>Umschalttaste + H und H</td>
      <td>Zur vorherigen/nächsten Überschrift wechseln und sie vorlesen.</td>
    </tr>
    <tr>
      <td>Umschalttaste + K und K</td>
      <td>Zum vorherigen/nächsten Link wechseln und ihn vorlesen.</td>
    </tr>
    <tr>
      <td>Umschalttaste + D und D</td>
      <td>
        Zum vorherigen/nächsten Dokument-Landmarke (z. B. <code>&#x3C;nav></code>) wechseln und diese vorlesen.
      </td>
    </tr>
    <tr>
      <td>Umschalttaste + 1–6 und 1–6</td>
      <td>Zur vorherigen/nächsten Überschrift (Stufe 1–6) wechseln und sie vorlesen.</td>
    </tr>
    <tr>
      <td>Umschalttaste + F und F</td>
      <td>Zum vorherigen/nächsten Formulareingabefeld wechseln und es fokussieren.</td>
    </tr>
    <tr>
      <td>Umschalttaste + T und T</td>
      <td>Zur vorherigen/nächsten Datentabelle wechseln und sie fokussieren.</td>
    </tr>
    <tr>
      <td>Umschalttaste + B und B</td>
      <td>Zum vorherigen/nächsten Button wechseln und dessen Beschriftung vorlesen.</td>
    </tr>
    <tr>
      <td>Umschalttaste + L und L</td>
      <td>Zur vorherigen/nächsten Liste wechseln und deren erstes Listenelement vorlesen.</td>
    </tr>
    <tr>
      <td>Umschalttaste + I und I</td>
      <td>Zum vorherigen/nächsten Listenelement wechseln und es vorlesen.</td>
    </tr>
    <tr>
      <td>Return/Enter</td>
      <td>
        (wenn ein Link/Button oder ein anderes aktivierbares Element ausgewählt ist) Element aktivieren.
      </td>
    </tr>
    <tr>
      <td>NVDA + Leertaste</td>
      <td>
        (wenn ein Formular ausgewählt ist) Formular eingeben, damit einzelne Elemente ausgewählt werden können,
        oder das Formular verlassen, wenn Sie bereits darin sind.
      </td>
    </tr>
    <tr>
      <td>Umschalttaste + Tab und Tab</td>
      <td>(im Formular) Zwischen Formulareingaben wechseln.</td>
    </tr>
    <tr>
      <td>Pfeil nach oben und Pfeil nach unten</td>
      <td>
        (im Formular) Formulareingabewerte ändern (im Fall von Dingen wie Auswahlboxen).
      </td>
    </tr>
    <tr>
      <td>Leertaste</td>
      <td>(im Formular) Ausgewählten Wert auswählen.</td>
    </tr>
    <tr>
      <td>Strg + Alt + Cursortasten</td>
      <td>(Wenn eine Tabelle ausgewählt ist) Zwischen Tabellenzellen wechseln.</td>
    </tr>
  </tbody>
</table>

### Screenreader-Testen

Nun, da Sie gelernt haben, wie man einen Screenreader verwendet, möchten wir, dass Sie ihn verwenden, um einige schnelle Barrierefreiheits-Tests durchzuführen, um ein Gefühl dafür zu bekommen, wie Screenreader mit guten und schlechten Webseitenfunktionen umgehen:

- Sehen Sie sich [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) an und notieren Sie, wie die Überschriften vom Screenreader gefunden und für die Navigation verwendet werden können. Sehen Sie sich nun [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) an und stellen Sie fest, dass der Screenreader keine dieser Informationen erhält. Stellen Sie sich vor, wie nervend das beim Navigieren auf einer wirklich langen Textseite wäre.
- Sehen Sie sich [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) an und beachten Sie, wie die Links aus dem Kontext betrachtet sinnvoll sind. Dies ist nicht der Fall bei [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) – es sind einfach alle "hier klicken".
- Sehen Sie sich [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) an und beachten Sie, wie die Formulareingaben durch ihre Labels beschrieben werden, weil wir `<label>`-Elemente richtig verwendet haben. In [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) erhalten sie eine unklare Bezeichnung im Sinne von "leer".
- Sehen Sie sich unser Beispiel [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) an und stellen Sie fest, dass der Screenreader in der Lage ist, Spalten und Zeilen von Inhalten zu assoziieren und sie zusammenhängend vorzulesen, weil wir die Kopfzeilen richtig definiert haben. In [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) kann keine der Zellen zugeordnet werden. Beachten Sie, dass NVDA etwas seltsam funktioniert, wenn Sie nur eine einzige Tabelle auf einer Seite haben; Sie könnten stattdessen [WebAIMs Testseite zur Tabelle](https://webaim.org/articles/nvda/tables.htm) ausprobieren.
- Werfen Sie einen Blick auf das [WAI-ARIA Live Regions-Beispiel](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm), das wir früher gesehen haben, und stellen Sie fest, wie der Screenreader den ständig aktualisierten Abschnitt fortlaufend vorliest, während er aktualisiert wird.

## Benutzertests

Wie bereits erwähnt, können Sie sich bei der Bestimmung von Barrierefreiheitsproblemen auf Ihrer Website nicht allein auf automatisierte Tools verlassen. Es wird empfohlen, dass Sie bei der Erstellung Ihres Testplans, wenn möglich, einige Barrierefreiheitsbenutzergruppen einbeziehen sollten. Versuchen Sie, einige Screenreader-Nutzer einzubinden, einige Nur-Tastatur-Nutzer, einige hörgeschädigte Nutzer und vielleicht auch andere Gruppen, die Ihren Anforderungen entsprechen.

## Andere Tools

Es gibt viele andere Arten von unterstützenden Technologien, wie zum Beispiel:

- Große Text- oder Brailletastaturen.
- Alternative Zeigegeräte wie Trackballs, Joysticks und Touchpads.
- Bildschirmlupen.
- Spracherkennungssoftware.
- Schaltsteuerungen.

## Checkliste für Barrierefreiheitstests

Die folgende Liste bietet Ihnen eine Checkliste, um sicherzustellen, dass Sie die empfohlenen Barrierefreiheitstests für Ihr Projekt durchgeführt haben:

1. Stellen Sie sicher, dass Ihr HTML so semantisch korrekt wie möglich ist. [Die Validierung](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML#html_validation) ist ein guter Anfang, ebenso wie die Nutzung eines [Auditing-Tools](#auditing-tools).
2. Überprüfen Sie, ob Ihr Inhalt ohne CSS sinnvoll ist.
3. Stellen Sie sicher, dass Ihre Funktionalität über die Tastatur zugänglich ist (siehe [UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls) für mehr Details). Testen Sie mit Tab, Return/Enter usw.
4. Stellen Sie sicher, dass Ihr nicht-textlicher Inhalt [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) hat. Ein [Auditing-Tool](#auditing-tools) ist gut, um solche Probleme zu erkennen.
5. Stellen Sie sicher, dass der [Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast) Ihrer Website akzeptabel ist, indem Sie ein geeignetes Überprüfungstool verwenden.
6. Stellen Sie sicher, dass [versteckter Inhalt](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) von Screenreadern sichtbar ist.
7. Stellen Sie sicher, dass die Funktionalität nach Möglichkeit ohne JavaScript nutzbar ist.
8. Verwenden Sie ARIA, um die Barrierefreiheit dort zu verbessern, wo es angebracht ist.
9. Führen Sie Ihre Seite durch ein [Auditing-Tool](#auditing-tools).
10. Testen Sie es mit einem Screenreader.
11. Fügen Sie eine Barrierefreiheitsrichtlinie/-erklärung an einer auffindbaren Stelle auf Ihrer Website hinzu, um zu sagen, was Sie getan haben.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel eine Vorstellung von den Arten von Werkzeugen gegeben, die Sie verwenden können, um Barrierefreiheitsprobleme zu beheben, sowie von den unterstützenden Technologien, die von Menschen mit Behinderungen verwendet werden, um Zugang zum Web zu erhalten.

Im nächsten Artikel werden wir uns ansehen, wie man barrierefreies HTML schreibt.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}
