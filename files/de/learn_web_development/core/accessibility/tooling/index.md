---
title: Zugänglichkeitstools und unterstützende Technologien
short-title: Accessibility tools
slug: Learn_web_development/Core/Accessibility/Tooling
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}

Als Nächstes wenden wir uns den Zugänglichkeitstools zu und bieten Informationen zu den Arten von Tools, die Sie verwenden können, um Zugänglichkeitsprobleme zu lösen, und helfen Ihnen, die **unterstützenden Technologien** zu verstehen, die von Menschen mit Behinderungen verwendet werden, um im Web zu surfen. Sie werden die hier beschriebenen Tools in den folgenden Artikeln verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einem <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">Grundverständnis der Zugänglichkeitskonzepte</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit den Arten von Tools, die Sie zur Lösung von Zugänglichkeitsproblemen verwenden können, zum Beispiel Auditing-Tools.</li>
          <li>Einrichten von Screenreadern und deren Verwendung zum Testen von Websites auf Desktop- und Mobilgeräten.</li>
          <li>Vertrautheit mit anderen Arten von unterstützenden Technologien wie großen Text- oder Braille-Tastaturen, alternativen Zeigegeräten und Bildschirmvergrößerern.</li>
          <li>Die Bedeutung von Benutzertests neben automatisierten Tests.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zugänglichkeitstools

Betrachten wir die Tools und Techniken, die Sie zur Überprüfung der Barrierefreiheit von Websites und zur Behebung der aufgedeckten Probleme verwenden können.

### Testen der Quellreihenfolge

Ihr Inhalt sollte in seiner Quellreihenfolge logisch sinnvoll sein — Sie können ihn später immer mit CSS unterschiedlich anzeigen, aber Sie sollten zunächst die zugrunde liegende Struktur korrekt haben. Dies liegt daran, dass unterstützende Technologien Website-Inhalte basierend auf der Reihenfolge der Quelle lesen, und Menschen mit Behinderungen häufig Teile des CSS modifizieren oder ausschalten, um Inhalte besser lesbar zu machen (häufige Beispiele sind das Vergrößern der Schriftgröße und das Anwenden von Farbkontrasten mit hohem Kontrast).

Um die Quellreihenfolge zu testen, können Sie das CSS einer Website deaktivieren und sehen, wie verständlich sie ohne es ist. Sie könnten dies manuell tun, indem Sie einfach das CSS aus Ihrem Code entfernen, aber die einfachste Methode ist die Verwendung von Browser-Funktionen, zum Beispiel:

- Firefox: Wählen Sie _Ansicht > Seitendarstellung > Ohne Stil_ aus dem Hauptmenü aus.
- Safari: [Öffnen Sie die Entwicklerwerkzeuge des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser), klicken Sie auf die Schaltfläche _Geräteeinstellungen_ oben links im Entwicklerwerkzeug-Panel (sieht aus wie ein Computerbildschirm), und aktivieren Sie das Kontrollkästchen "CSS deaktivieren" im angezeigten Panel.
- Chrome/Edge: Installieren Sie die [Web Developer Toolbar](https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm)-Erweiterung und starten Sie den Browser neu. Klicken Sie auf das Zahnrad-Symbol „Web Developer“, das jetzt in Ihrem Erweiterungsmenü verfügbar sein sollte, und wählen Sie _CSS > Alle Stile deaktivieren_.

### Farbkontrast-Prüfer

Bei der Auswahl eines Farbschemas für Ihre Website sollten Sie sicherstellen, dass die Textfarbe (Vordergrund) gut mit der Hintergrundfarbe kontrastiert. Ihr Design könnte cool aussehen, aber es bringt nichts, wenn die Menschen Ihre Inhalte nicht lesen können. Verwenden Sie ein Tool wie WebAIMs [Color Contrast Checker](https://webaim.org/resources/contrastchecker/), um zu überprüfen, ob Ihr Schema ausreichend kontrastiert.

Ein weiterer Tipp ist, nur Farbe für Wegweiser oder zur Hervorhebung wichtiger Informationen zu verwenden, da dies von Menschen mit Sehbehinderungen wie Farbenblindheit möglicherweise übersehen wird. Anstatt zum Beispiel erforderliche Formularfelder in Rot zu markieren, markieren Sie sie mit einem Sternchen und in Rot.

> [!NOTE]
> Ein hoher Kontrast ermöglicht es auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm verwendet, Seiten besser zu lesen, wenn er sich in einer hellen Umgebung, wie Sonnenlicht, befindet.

### Auditing-Tools

Es gibt mehrere Auditing-Tools, denen Sie Ihre Webseiten zuführen können. Sie werden sie überprüfen und eine Liste der auf der Seite vorhandenen Zugänglichkeitsprobleme zurückgeben. Lassen Sie uns Wave als Beispiel betrachten, ein Online-Zugänglichkeitstest-Tool, das eine Webadresse akzeptiert und eine annotierte Ansicht dieser Seite mit hervorgehobenen Zugänglichkeitsproblemen zurückgibt.

1. Gehen Sie zur [Wave-Homepage](https://wave.webaim.org/).
2. Geben Sie die URL unseres Beispiels [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) in das Text-Eingabefeld oben auf der Seite ein. Drücken Sie dann die Eingabetaste oder klicken/tippen Sie auf den Pfeil am rechten Rand des Eingabefeldes.
3. Die Seite sollte die vorhandenen Zugänglichkeitsprobleme hervorheben. Klicken Sie auf die angezeigten Symbole, um weitere Informationen zu jedem der von Waves Bewertung identifizierten Probleme zu sehen.

Weitere Auditing-Tools, die es zu überprüfen lohnt:

- [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)
- [ANDI bookmarklet](https://www.ssa.gov/accessibility/andi/help/install.html)
- [Google Lighthouse accessibility audits](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)

> [!NOTE]
> Solche Tools sind nicht gut genug, um alle Ihre Zugänglichkeitsprobleme allein zu lösen. Sie benötigen eine Kombination dieser, Wissen und Erfahrung, Benutzertests usw., um ein vollständiges Bild zu erhalten.

[Deques aXe-Tool](https://www.deque.com/axe/) geht ein bisschen weiter als die oben erwähnten Auditing-Tools. Wie die anderen überprüft es Seiten und gibt Zugänglichkeitsfehler zurück. Die wahrscheinlich nützlichste Form ist wahrscheinlich die Browser-Erweiterungen:

- [aXe für Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe für Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Diese fügen den Entwicklerwerkzeugen des Browsers einen Zugänglichkeits-Tab hinzu. Zum Beispiel haben wir die Firefox-Version installiert und dann verwendet, um unser Beispiel [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) zu überprüfen. Wir erhielten folgende Ergebnisse:

![Ein Screenshot der von dem Axe-Tool identifizierten Zugänglichkeitsprobleme.](axe-screenshot.png)

aXe kann auch mit `npm` installiert und in Task-Runner wie [Grunt](https://gruntjs.com/) und [Gulp](https://gulpjs.com/), Automatisierungs-Frameworks wie [Selenium](https://www.selenium.dev/) und [Cucumber](https://cucumber.io/), Unit-Testing-Frameworks wie [Jasmine](https://jasmine.github.io/) und weitere integriert werden (siehe erneut die [Hauptseite von aXe](https://www.deque.com/axe/) für Details).

## Screenreader

Eine der häufigsten Arten von unterstützenden Technologien (AT), die von Menschen mit Behinderungen verwendet werden — und eine der häufigsten, die Sie zur Überprüfung der Zugänglichkeit Ihrer Webseiten verwenden werden — sind **Screenreader**. Dabei handelt es sich um Software, die Webseiteninhalte oder Inhalte anderer auf dem Betriebssystem installierter Apps vorliest. Screenreader ermöglichen Menschen die Nutzung von Computern, ohne visuellen Inhalt sehen zu müssen.

Webbrowser geben Informationen über den Inhalt der Seite an Screenreader (und andere AT) weiter, die dem Benutzer durch eine Darstellung namens {{Glossary("Accessibility_tree", "Accessibility Tree")}} kommuniziert werden. Dies bietet semantische Informationen wie Namen und Beschreibungen von Elementen, deren Zweck oder Rolle (z. B. ob es sich um eine Schaltfläche oder ein Eingabefeld handelt) und ob sie sich in einem bestimmten Zustand befinden (zum Beispiel, ob ein Dialogfeld geöffnet oder geschlossen ist).

Diese Informationen können bei einem Textabsatz trivial erscheinen, der sich im Grunde so anhört, wie er geschrieben ist, aber es kann kompliziert werden, wenn es um Benutzeroberflächenfunktionen wie ein Dropdown-Menü oder einen Videoplayer geht. Aus diesem Grund ist es sehr wichtig, HTML semantisch korrekt zu verwenden, was Sie im nächsten Artikel in diesem Modul ausführlich behandeln werden. Wenn Sie Inhalte mit dem falschen Element markieren, kann dies Benutzer von Screenreadern verwirren.

Stellen Sie sicher, dass Sie einen oder zwei Screenreader auf Ihrem Entwicklungsrechner installiert haben, und versuchen Sie, Ihre Lieblingswebsites mit einem Screenreader zu verwenden, wie unten erläutert. Das Verständnis, wie sehbehinderte Menschen das Web nutzen, ist der Schlüssel zur Gestaltung von Produkten, die besser für alle funktionieren.

### Welche Screenreader sind verfügbar?

Es gibt mehrere Screenreader:

- Einige sind kostenpflichtige kommerzielle Produkte, wie [JAWS](https://vispero.com/jaws-screen-reader-software/) (Windows).
- Einige sind kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows und macOS) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Einige sind im Betriebssystem integriert, wie [VoiceOver](https://www.apple.com/accessibility/features/?vision) (macOS und iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf Chromebooks) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

In der Regel sind Screenreader separate Apps, die auf dem Host-Betriebssystem ausgeführt werden und sowohl Webseiten als auch Inhalte in anderen Apps lesen können (dies ist nicht immer der Fall; ChromeVox ist zum Beispiel eine Browser-Erweiterung). Screenreader weisen tendenziell einige Unterschiede im genauen Verhalten und in den Steuerelementen auf, daher müssen Sie die Dokumentation Ihres gewählten Screenreaders konsultieren, um alle Details zu erhalten. Es sei jedoch gesagt, dass sie alle im Grunde auf ähnliche Weise funktionieren.

In den nächsten Abschnitten werden wir einige Tests mit ein paar verschiedenen Screenreadern durchführen, um Ihnen eine allgemeine Vorstellung davon zu geben, wie sie funktionieren und wie man mit ihnen testet.

> [!NOTE]
> WebAIMs [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/) bietet einige nützliche Informationen zur Verwendung von Screenreadern und was am besten für Screenreader funktioniert. Ebenso interessant sind die [Screen Reader User Survey #10 Results](https://webaim.org/projects/screenreadersurvey10/#used), die einige interessante Statistiken zur Verwendung von Screenreadern bieten.

#### VoiceOver

VoiceOver (VO) ist kostenlos mit Apple Mac/iPhone/iPad verfügbar, was es nützlich für Tests auf Desktop/Mobilgeräten macht, wenn Sie Apple-Produkte verwenden. Wir haben es auf macOS auf einem MacBook Pro getestet.

Um es zu aktivieren, drücken Sie <kbd>Cmd</kbd> + <kbd>F5</kbd>. Wenn Sie VO noch nicht verwendet haben, wird Ihnen ein Begrüßungsbildschirm angezeigt, auf dem Sie wählen können, ob Sie VO aktivieren möchten oder nicht, und durch ein recht nützliches Tutorial gehen können, um zu lernen, wie man es benutzt. Um es auszuschalten, drücken Sie erneut <kbd>Cmd</kbd> + <kbd>F5</kbd>.

> [!NOTE]
> Sie sollten das Tutorial mindestens einmal durchlaufen — es ist eine wirklich nützliche Möglichkeit, VO zu lernen.

Wenn VO aktiviert ist, sieht die Anzeige im Wesentlichen gleich aus, aber Sie sehen ein schwarzes Kästchen unten links auf dem Bildschirm, das Informationen darüber enthält, was VO derzeit ausgewählt hat. Die aktuelle Auswahl wird ebenfalls hervorgehoben, mit einem schwarzen Rahmen — diese Hervorhebung wird als **VO-Cursor** bezeichnet.

![Ein Beispiel-Screenshot, der einen Accessibility-Test mit VoiceOver auf der MDN-Homepage zeigt. Links unten im Bild ist eine Hervorhebung der auf der Webseite ausgewählten Information.](voiceover.png)

Bei der Verwendung von VO werden Sie viel Gebrauch von dem "VO-Modifikator" machen — dies ist eine Taste oder Tastenkombination, die Sie zusätzlich zu den tatsächlichen VO-Tastaturbefehlen drücken müssen, um sie zum Laufen zu bringen. Die Verwendung eines Modifikators wie diesem ist bei Screenreadern üblich, um deren Befehle vor Zusammenstößen mit anderen Befehlen zu schützen. Im Fall von VO kann der Modifikator entweder <kbd>CapsLock</kbd> oder <kbd>Ctrl</kbd> + <kbd>Option</kbd> sein.

VO hat viele Tastaturbefehle, und wir werden hier nicht alle auflisten. Die grundlegenden, die Sie für Webseitentests benötigen, finden Sie in der folgenden Tabelle. In den Tastaturkürzeln bedeutet "VO" "der VoiceOver-Modifikator".

<table class="standard-table no-markdown">
  <caption>
    Allgemeine VoiceOver-Tastaturkürzel
  </caption>
  <thead>
    <tr>
      <th scope="col">Tastaturkürzel</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VO + Cursertasten</td>
      <td>Bewegen Sie den VO-Cursor nach oben, rechts, unten oder links.</td>
    </tr>
    <tr>
      <td>VO + Leertaste</td>
      <td>Markierte Elemente durch den VO-Cursor auswählen/aktivieren. Dies umfasst Elemente, die im Rotor ausgewählt sind (siehe unten).</td>
    </tr>
    <tr>
      <td>VO + <kbd>Umschalt</kbd> + untere Cursortaste</td>
      <td>In eine Gruppe von Elementen wie eine HTML-Tabelle oder ein Formular gehen. Sobald Sie sich in einer Gruppe befinden, können Sie sich um die Elemente darin bewegen und sie wie gewohnt auswählen.</td>
    </tr>
    <tr>
      <td>VO + <kbd>Umschalt</kbd> + obere Cursortaste</td>
      <td>Aus einer Gruppe herausbewegen.</td>
    </tr>
    <tr>
      <td>VO + <kbd>C</kbd></td>
      <td>(wenn in einer Tabelle) Den Kopf der aktuellen Spalte lesen.</td>
    </tr>
    <tr>
      <td>VO + <kbd>R</kbd></td>
      <td>(wenn in einer Tabelle) Den Kopf der aktuellen Zeile lesen.</td>
    </tr>
    <tr>
      <td>VO + <kbd>C</kbd> + <kbd>C</kbd> (zwei Cs nacheinander)</td>
      <td>(wenn in einer Tabelle) Die gesamte aktuelle Spalte, einschließlich Kopf, lesen.</td>
    </tr>
    <tr>
      <td>VO + <kbd>R</kbd> + <kbd>R</kbd> (zwei Rs nacheinander)</td>
      <td>(wenn in einer Tabelle) Die gesamte aktuelle Zeile lesen, einschließlich der Überschriften, die zu jeder Zelle gehören.</td>
    </tr>
    <tr>
      <td>VO + linke Cursortaste, VO + rechte Cursortaste</td>
      <td>(wenn innerhalb einiger horizontaler Optionen, wie eines Datumswählers) Wechseln Sie zwischen Optionen.</td>
    </tr>
    <tr>
      <td>VO + obere Cursortaste, VO + untere Cursortaste</td>
      <td>(wenn innerhalb einiger horizontaler Optionen, wie eines Datumswählers) Ändern Sie die aktuelle Option.</td>
    </tr>
    <tr>
      <td>VO + <kbd>U</kbd></td>
      <td>Öffnen Sie den Rotor, der Listen von Überschriften, Links, Formularelementen usw. für eine einfache Navigation anzeigt.</td>
    </tr>
    <tr>
      <td>VO + linke Cursortaste, VO + rechte Cursortaste</td>
      <td>(wenn im Rotor) Zwischen verschiedenen Listen im Rotor wechseln.</td>
    </tr>
    <tr>
      <td>VO + obere Cursortaste, VO + untere Cursortaste</td>
      <td>(wenn im Rotor) Zwischen verschiedenen Elementen in der aktuellen Rotorliste wechseln.</td>
    </tr>
    <tr>
      <td><kbd>Esc</kbd></td>
      <td>(wenn im Rotor) Rotor verlassen.</td>
    </tr>
    <tr>
      <td><kbd>Strg</kbd></td>
      <td>(wenn VO spricht) Sprache anhalten/fortsetzen.</td>
    </tr>
    <tr>
      <td>VO + <kbd>Z</kbd></td>
      <td>Den letzten gesprochenen Text erneut starten.</td>
    </tr>
    <tr>
      <td>VO + <kbd>D</kbd></td>
      <td>In das Dock des Mac gehen, damit Sie dort Apps auswählen können.</td>
    </tr>
  </tbody>
</table>

Dies scheint eine Menge Befehle zu sein, ist aber nicht so schlimm, wenn Sie sich daran gewöhnt haben, und VO gibt Ihnen regelmäßig Erinnerungen, welche Befehle an bestimmten Stellen verwendet werden sollen. ProbierenSie jetzt VO aus; Sie können dann weiterspielen und einige unserer Beispiele im Abschnitt [Screenreader testen](#screenreader-tests) ausprobieren.

#### NVDA

NVDA ist nur für Windows und Sie müssen es installieren.

1. Laden Sie NVDA von [nvaccess.org](https://www.nvaccess.org/) herunter und installieren Sie es. Sie können wählen, ob Sie eine Spende machen oder es kostenlos herunterladen möchten; Sie müssen ihnen auch Ihre E-Mail-Adresse geben, bevor Sie es herunterladen können.
2. Um NVDA nach der Installation zu starten, doppelklicken Sie auf die Programmdatei/-verknüpfung oder verwenden Sie das Tastenkürzel <kbd>Strg</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd>. Sie sehen das NVDA-Willkommensdialogfeld, wenn Sie es starten. Hier können Sie aus ein paar Optionen wählen, dann drücken Sie die _OK_-Taste, um loszulegen.

NVDA ist jetzt auf Ihrem Computer aktiv.

Bei der Verwendung von NVDA werden Sie viel Gebrauch von dem "NVDA-Modifikator" machen — die Taste, die Sie zusätzlich zu den tatsächlichen NVDA-Tastaturkürzeln drücken müssen, um sie zur Arbeit zu bringen. Der NVDA-Modifikator kann entweder <kbd>Einfügen</kbd> sein (Standard) oder <kbd>CapsLock</kbd> (kann durch Überprüfen des ersten Kontrollkästchens im NVDA-Willkommensdialog vor dem Drücken von _OK_ gewählt werden).

> [!NOTE]
> NVDA ist subtiler als VoiceOver in Bezug auf die Hervorhebung, wo es sich befindet und was es tut. Wenn Sie durch Überschriften, Listen usw. scrollen, werden die von Ihnen ausgewählten Elemente im Allgemeinen mit einer subtilen Umrandung hervorgehoben, dies ist jedoch nicht immer der Fall für alle Dinge. Wenn Sie völlig verloren gehen, können Sie <kbd>Strg</kbd> + <kbd>F5</kbd> drücken, um die aktuelle Seite zu aktualisieren und von oben zu beginnen.

NVDA hat viele Tastaturkürzel, und wir werden nicht alle hier auflisten. Die grundlegenden, die Sie für Webseitentests benötigen, finden Sie in der folgenden Tabelle. In den Tastaturkürzeln bedeutet "NVDA" "der NVDA-Modifikator".

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
      <td>NVDA + <kbd>Q</kbd></td>
      <td>NVDA ausschalten, nachdem Sie es gestartet haben.</td>
    </tr>
    <tr>
      <td>NVDA + obere Cursortaste</td>
      <td>Die aktuelle Zeile lesen.</td>
    </tr>
    <tr>
      <td>NVDA + untere Cursortaste</td>
      <td>Ab der aktuellen Position lesen.</td>
    </tr>
    <tr>
      <td>Obere und untere Cursortaste oder <kbd>Umschalt</kbd> + <kbd>Tab</kbd> und <kbd>Tab</kbd></td>
      <td>Zum vorherigen/nächsten Element auf der Seite wechseln und es lesen.</td>
    </tr>
    <tr>
      <td>Linke und rechte Cursortaste</td>
      <td>Zum vorherigen/nächsten Zeichen im aktuellen Element wechseln und es lesen.</td>
    </tr>
    <tr>
      <td><kbd>Umschalt</kbd> + <kbd>H</kbd> und <kbd>H</kbd></td>
      <td>Zum vorherigen/nächsten Titel wechseln und ihn lesen.</td>
    </tr>
    <tr>
      <td><kbd>Umschalt</kbd> + <kbd>K</kbd> und <kbd>K</kbd></td>
      <td>Zum vorherigen/nächsten Link wechseln und ihn lesen.</td>
    </tr>
    <tr>
      <td><kbd>Umschalt</kbd> + <kbd>D</kbd> und <kbd>D</kbd></td>
      <td>Zum vorherigen/nächsten Dokument-Landmark (z.B. `<nav>`) wechseln und ihn lesen.</td>
    </tr>
    <tr>
      <td><kbd>Umschalt</kbd> + <kbd>1</kbd>–<kbd>6</kbd> und <kbd>1</kbd>–<kbd>6</kbd></td>
      <td>Zum vorherigen/nächsten Titel (Stufe 1–6) wechseln und ihn lesen.</td>
    </tr>
    <tr>
      <td><kbd>Umschalt</kbd> + <kbd>F</kbd> und <kbd>F</kbd></td>
      <td>Zum vorherigen/nächsten Formulareingang wechseln und darauf fokussieren.</td>
    </tr>
    <tr>
      <td><kbd>Umschalt</kbd> + <kbd>T</kbd> und <kbd>T</kbd></td>
      <td>Zur vorherigen/nächsten Datentabelle wechseln und darauf fokussieren.</td>
    </tr>
    <tr>
      <td><kbd>Umschalt</kbd> + <kbd>B</kbd> und <kbd>B</kbd></td>
      <td>Zum vorherigen/nächsten Button wechseln und sein Label lesen.</td>
    </tr>
    <tr>
      <td><kbd>Umschalt</kbd> + <kbd>L</kbd> und <kbd>L</kbd></td>
      <td>Zur vorherigen/nächsten Liste wechseln und ihr erstes Listenelement lesen.</td>
    </tr>
    <tr>
      <td><kbd>Umschalt</kbd> + <kbd>I</kbd> und <kbd>I</kbd></td>
      <td>Zum vorherigen/nächsten Listenelement wechseln und es lesen.</td>
    </tr>
    <tr>
      <td><kbd>Eingabetaste</kbd>/<kbd>Return</kbd></td>
      <td>(Wenn Link/Button oder anderes aktivierbares Element ausgewählt ist) Element aktivieren.</td>
    </tr>
    <tr>
      <td>NVDA + <kbd>Leertaste</kbd></td>
      <td>(wenn Formular ausgewählt ist) In das Formular einsteigen, damit einzelne Elemente ausgewählt werden können, oder das Formular verlassen, wenn Sie sich bereits darin befinden.</td>
    </tr>
    <tr>
      <td><kbd>Umschalt</kbd> + <kbd>Tab</kbd> und <kbd>Tab</kbd></td>
      <td>(wenn im Formular) Zwischen den Formularelementen wechseln.</td>
    </tr>
    <tr>
      <td>Obere und untere Cursortaste</td>
      <td>(wenn im Formular) Formulareingabewerte ändern (im Fall von Steuerelementen wie Dropdown-Boxen).</td>
    </tr>
    <tr>
      <td><kbd>Leertaste</kbd></td>
      <td>(wenn im Formular) Ausgewählten Wert auswählen.</td>
    </tr>
    <tr>
      <td><kbd>Strg</kbd> + <kbd>Alt</kbd> + Cursortasten</td>
      <td>(wenn eine Tabelle ausgewählt ist) Zwischen Tabellenzellen wechseln.</td>
    </tr>
  </tbody>
</table>

### Screenreader-Tests

Nachdem Sie sich mit der Verwendung eines Screenreaders vertraut gemacht haben, möchten wir, dass Sie ihn für einige schnelle Zugänglichkeitstests verwenden, um eine Vorstellung davon zu bekommen, wie Screenreader mit guten und schlechten Webseitenfunktionen umgehen:

- Schauen Sie sich [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) an und achten Sie darauf, wie die Überschriften vom Screenreader erkannt werden und zur Navigation verwendet werden können. Sehen Sie sich nun [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) an und merken Sie sich, wie der Screenreader keine dieser Informationen erhält. Stellen Sie sich vor, wie ärgerlich das wäre, wenn Sie versuchen würden, eine wirklich lange Textseite zu navigieren.
- Sehen Sie sich [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) an und beachten Sie, wie sie aus dem Zusammenhang heraus Sinn machen, beispielsweise im VoiceOver Rotor. Dies ist nicht der Fall bei [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) — sie sind alle nur „hier klicken“.
- Sehen Sie sich [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) an und merken Sie sich, wie die Formulareingaben durch ihre Labels beschrieben werden, da wir entsprechende {{htmlelement("label")}}-Elemente hinzugefügt haben. In [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) erhalten sie ein unhilfreiches Label wie „blank“.
- Sehen Sie sich unser Beispiel [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) an und sehen Sie, wie der Screenreader in der Lage ist, Spalten und Zeilen von Inhalten zuzuordnen und sie alle zusammen vorzulesen, da wir die Tabellenüberschriften korrekt definiert haben. In [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) können keine der Zellen überhaupt zugeordnet werden. Beachten Sie, dass NVDA manchmal seltsam zu sein scheint, wenn Sie nur eine einzige Tabelle auf einer Seite haben; Sie könnten stattdessen [WebAIMs Tabellen-Testseite](https://webaim.org/articles/nvda/tables.htm) ausprobieren.
- Schauen Sie sich das [WAI-ARIA Live-Regionen-Beispiel](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm) an und bemerken Sie, wie der Screenreader den sich ständig aktualisierenden Abschnitt fortlaufend vorlesen wird, während er aktualisiert.

## Weitere Tools

Screenreader sind eine der häufigsten Arten unterstützender Technologien, denen Sie als Webentwickler begegnen werden, aber es gibt auch andere Arten von AT, und es ist nützlich, sich damit vertraut zu machen, was Benutzer möglicherweise verwenden, um auf Ihre Inhalte zuzugreifen. Dieser Abschnitt fasst einige davon zusammen.

### Große Text- oder Braille-Tastaturen

Es ist möglich, große Texttastaturen für die Nutzung durch sehbehinderte oder ältere Benutzer sowie Braille-Tastaturen, die von blinden und stark sehbehinderten Personen verwendet werden können, zu erhalten.

### Alternative Zeigegeräte

Wenn Sie an Zeigegeräte denken, sind Mäuse das offensichtliche Beispiel, aber es gibt andere Zeigegeräte, die es Nutzern mit unterschiedlichen Mobilitätseinschränkungen ermöglichen, Benutzeroberflächen leichter zu navigieren:

- Trackballs: Ähnlich wie umgedrehte Mäuse bestehen Trackballs aus einer montierten Kugel, die auf Ihrem Schreibtisch stationär bleibt und die Sie rollen können, um den Zeiger zu bewegen. Sie gelten als präziser und leichter zu handhaben als Mäuse, insbesondere für Menschen mit eingeschränkter Handbewegung.
- Joysticks: Ein Steuerknüppel, der bewegt werden kann, um den Zeiger zu bewegen. Joysticks sind weniger präzise als Trackballs, aber für Menschen mit einer Vielzahl von körperlichen Beeinträchtigungen, einschließlich schwerer Behinderungen, nutzbar.
- Touchpads: Die meisten modernen Laptops verfügen über ein Touchpad (manchmal auch als Trackpad bezeichnet) — einen flachen taktilen Sensor, mit dem Sie den Zeiger mit einem Finger bewegen können, sowie Mehrfinger-Gesten, ähnlich wie Mobilgesten. Sie können externe Touchpads für Geräte kaufen, die keine internen haben. Einige Menschen finden sie präziser als Mäuse.

### Bildschirmvergrößerer

Bildschirmvergrößerer bieten sehbehinderten Nutzern eine vergrößerte Ansicht der Anzeige ihres Geräts, damit sie die Inhalte des Geräts leichter verstehen und damit interagieren können, sowie weitere Funktionen wie die Farbangleichung, um bei Farbenblindheit zu helfen, und die Anpassung der Größe von Mauszeigern und Text-Cursorn, um sie besser sichtbar zu machen.

Es sind sowohl Software- als auch Hardware-Bildschirmvergrößerer erhältlich:

- Die meisten modernen Betriebssysteme verfügen über eine integrierte App zur Vergrößerung des gesamten oder eines Teils des Bildschirms, beispielsweise Zoom auf dem Mac oder Vergrößerung auf Windows. Sie bieten auch in der Regel Optionen zur universellen Vergrößerung der Textgröße, der Größe des Mauszeigers usw. Drittanbieteroptionen sind ebenso verfügbar.
- Hardware-Bildschirmvergrößerer bestehen tendenziell aus einem separaten Bildschirm, der neben oder vor dem Bildschirm Ihres Geräts steht und eine größere Version oder eine vergrößerte Version eines Teils davon projiziert.

### Spracherkennungssoftware

Sprach- (oder Sprech-)Erkennungssoftware ermöglicht es Ihnen, Befehle zu sprechen, um Ihr Gerät zu steuern oder den Text von E-Mails oder Dokumenten zu diktieren und den Computer den Text für Sie schreiben zu lassen. Dies ist sehr nützlich für Menschen, die nicht in der Lage sind, eine Tastatur oder andere Steuermechanismen zu verwenden.

Moderne Betriebssysteme haben Funktionen, um dies zu ermöglichen (zum Beispiel Diktat auf dem Mac oder Sprachsteuerung auf Windows), und es gibt auch Drittanbieter-Apps, von Desktop-Anwendungen bis zu Browser-Erweiterungen.

### Schaltersteuerungen

Schaltersteuerungen bieten einen Mechanismus zur Interaktion mit Geräten für Benutzer mit sehr eingeschränkter Beweglichkeit oder [kognitiver Einschränkung](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility).

Ein Schaltersteuerungssetup umfasst normalerweise zwei Teile:

- Einen physischen Schalter oder Knopf zur Aktivierung von Optionen auf dem Gerät. Sie können auch regulären Gerätetasten (wie Lautstärkereglern) oder normalen Tasten auf einer Tastatur Schalterfunktionen zuweisen.
- Einen Gerätemodus oder ein Drittanbieter-Software-Add-On, das das Gerät kompatibel mit der Schalter- oder Knopfsteuerung macht. Zum Beispiel ist Switch Access auf Android ein Modus, bei dem die verschiedenen Optionen in verschiedenen Situationen (z.B. Apps auf dem Startbildschirm) durchlaufen werden, und die gewünschte Option kann mit einem Knopf oder Schalter ausgewählt werden, wenn sie erreicht wird.

## Planung für Barrierefreiheit

Sie sollten frühzeitig, zu Beginn jedes Projekts, sorgfältig über Barrierefreiheit nachdenken. Stellen Sie sicher, dass die Zugänglichkeit während der ersten Entwurfsphase berücksichtigt wird, sodass Sie:

- Die Grundlagen richtig machen, zum Beispiel indem Sie [gute Dokumentenstrukturen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_well-structured_text_content) verwenden und [alternative Texte](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) für Bilder bereitstellen.
- Sorgfältig den besten Ansatz für Funktionen überlegen, die voraussichtlich Zugänglichkeitsprobleme haben werden. Zum Beispiel sind Audio und Video für einige Menschen mit Sicherheit unzugänglich, daher sollten Sie Alternativen wie [Transkripte](/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts) und [Textspuren](/de/docs/Learn_web_development/Core/Accessibility/Multimedia#video_text_tracks) bereitstellen.
- Teure Fehler später vermeiden. Probleme, die gegen Ende eines Projekts aufgedeckt werden, sind tendenziell viel zeitsparender und teurer zu beheben als Probleme, die frühzeitig entdeckt werden.

## Benutzertests

Sie können sich nicht allein auf automatisierte Tools verlassen, um Zugänglichkeitsprobleme auf Ihrer Website zu identifizieren. Jedes Website-Projekt benötigt eine [Benutzer-Teststrategie](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies#user_testing), und es wird dringend empfohlen, einige Zugänglichkeits-Benutzergruppen einzubeziehen:

- Versuchen Sie, einige Screenreader-Nutzer einzubeziehen, einige rein tastaturbediente Nutzer, einige hörgeschädigte Nutzer, Nutzer mit Mobilitätseinschränkungen usw.
- Lassen Sie jede Gruppe versuchen, die Website allgemein zu verwenden, beginnend mit der Homepage und anderen wichtigen Seiten und einigen der Hauptfunktionen. Typische Beispiele sind der Kauf eines Produkts oder eine Buchung. Fragen Sie sie, welche Eindrücke sie hatten und auf welche Probleme sie gestoßen sind.
- Lassen Sie sie sich als Nächstes auf Funktionen oder Workflows konzentrieren, bei denen Sie spezifische Zugänglichkeitsbedenken haben, wie komplexe Formularelemente oder Video-Player. Fragen Sie sie, was ihnen an der Benutzererfahrung fehlt und was sie gerne geändert hätten.

Einige Projekte haben ein Budget, um Testgruppen zu bezahlen, während andere auf unbezahlte Freiwillige oder sogar Kollegen und Freunde angewiesen sind.

## Zugänglichkeitstest-Checkliste

Die folgende Liste bietet eine Checkliste, die Sie befolgen können, damit Sie die empfohlenen Zugänglichkeitstests für Ihr Projekt durchgeführt haben:

1. Stellen Sie sicher, dass Ihr HTML so semantisch korrekt wie möglich ist. [Validierung davon](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML#html_validation) ist ein guter Anfang, ebenso wie die Verwendung eines [Auditing-Tools](#auditing-tools).
2. Überprüfen Sie, ob Ihr Inhalt Sinn ergibt, wenn das CSS ausgeschaltet ist.
3. Stellen Sie sicher, dass Ihre Funktionalität tastaturzugänglich ist (siehe [Verwenden Sie semantische UI-Steuerelemente, wo möglich](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) für weitere Details). Testen Sie dies mit Tab, Return/Enter usw.
4. Stellen Sie sicher, dass Ihre nicht-textlichen Inhalte [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) haben. Ein [Auditing-Tool](#auditing-tools) ist gut, um solche Probleme aufzudecken.
5. Stellen Sie sicher, dass der [Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast) Ihrer Website akzeptabel ist, indem Sie ein geeignetes Überprüfungs-Tool verwenden.
6. Stellen Sie sicher, dass [versteckte Inhalte](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) für Screenreader sichtbar sind.
7. Stellen Sie sicher, dass die Funktionalität soweit möglich auch ohne JavaScript nutzbar ist.
8. Verwenden Sie ARIA, um die Barrierefreiheit dort zu verbessern, wo es angebracht ist.
9. Führen Sie Ihre Website durch ein [Auditing-Tool](#auditing-tools).
10. Testen Sie es mit einem Screenreader.
11. Fügen Sie irgendwo auf Ihrer Website eine findbare Zugänglichkeitspolitik/Erklärung hinzu, die erklärt, was Sie getan haben.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel eine Vorstellung von den Arten von Tools gegeben, die Sie verwenden können, um Zugänglichkeitsprobleme zu beheben, und über die unterstützende Technologie, die von Menschen mit Behinderungen verwendet wird, um auf das Web zuzugreifen.

Im nächsten Artikel werden wir uns ansehen, wie man zugängliches HTML schreibt.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}
