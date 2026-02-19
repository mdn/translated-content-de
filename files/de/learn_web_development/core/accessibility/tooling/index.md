---
title: Barrierefreiheitstools und unterstützende Technologie
short-title: Accessibility tools
slug: Learn_web_development/Core/Accessibility/Tooling
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}

Als Nächstes wenden wir uns den Werkzeugen zur Barrierefreiheit zu, stellen Informationen über die Arten von Werkzeugen bereit, die Sie verwenden können, um Barrierefreiheitsprobleme zu lösen, und helfen Ihnen, die **unterstützenden Technologien** zu verstehen, die von Menschen mit Behinderungen verwendet werden, um im Internet zu surfen. Die hier beschriebenen Werkzeuge werden Sie in den folgenden Artikeln verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegendes Verständnis von Barrierefreiheitskonzepten</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit den Arten von Werkzeugen, die Sie zur Lösung von Barrierefreiheitsproblemen verwenden können, zum Beispiel Prüfungswerkzeuge.</li>
          <li>Einrichten von Screenreadern und Verwendung dieser zur Prüfung von Websites auf Desktop und Mobilgeräten.</li>
          <li>Vertrautheit mit anderen Arten von unterstützender Technologie wie große Text- oder Braille-Tastaturen, alternative Zeigegeräte und Bildschirmvergrößerer.</li>
          <li>Die Bedeutung von Benutzer-Tests neben automatisierten Tests.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheitstools

Schauen wir uns die Werkzeuge und Techniken an, die Sie zur Prüfung der Website-Barrierefreiheit verwenden können und zur Behebung der Probleme, die Sie entdecken.

### Prüfung der Quellreihenfolge

Ihr Inhalt sollte in seiner Quellreihenfolge logisch Sinn ergeben – Sie können ihn später immer noch mit CSS anders darstellen, aber zuerst sollten Sie die zugrunde liegende Struktur korrekt herstellen. Das liegt daran, dass unterstützende Technologien den Website-Inhalt basierend auf der Reihenfolge der Quelle lesen, und Menschen mit Behinderungen oft Teile des CSS ändern oder ausschalten, um den Inhalt besser lesbar zu machen (häufige Beispiele sind das Vergrößern der Schriftgröße und das Anwenden von kontrastreichen Farbschemata).

Um die Quellreihenfolge zu überprüfen, können Sie das CSS einer Website ausschalten und sehen, wie verständlich es ohne CSS ist. Sie könnten dies manuell tun, indem Sie einfach das CSS aus Ihrem Code entfernen, aber der einfachste Weg ist die Verwendung von Browser-Features, zum Beispiel:

- Firefox: Wählen Sie _Ansicht > Seitendarstellung > Ohne Stil_ aus dem Hauptmenü.
- Safari: [Öffnen Sie die Entwicklerwerkzeuge des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser), klicken Sie auf die Schaltfläche _Geräteeinstellungen_ in der Nähe der oberen linken Ecke des Entwicklerwerkzeuge-Panels (sieht aus wie ein Computermonitor) und aktivieren Sie das Kontrollkästchen "CSS deaktivieren" im erscheinenden Panel.
- Chrome/Edge: Installieren Sie die [Web Developer Toolbar](https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm)-Erweiterung, starten Sie dann den Browser neu. Klicken Sie auf das Zahnrad-Symbol "Web Developer", das jetzt im Extensions-Menü verfügbar sein sollte, und wählen Sie _CSS > Alle Stile deaktivieren_.

### Farbkontrast-Prüfer

Bei der Wahl eines Farbschemas für Ihre Website sollten Sie sicherstellen, dass die Textfarbe (Vordergrund) gut mit der Hintergrundfarbe kontrastiert. Ihr Design mag toll aussehen, aber es bringt nichts, wenn die Leute Ihren Inhalt nicht lesen können. Verwenden Sie ein Tool wie den [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM, um zu überprüfen, ob Ihr Schema ausreichend kontrastiert.

Ein weiterer Tipp ist, nur Farben für Wegweiser oder das Hervorheben wichtiger Informationen zu vermeiden, da dies von Menschen mit Sehbehinderungen wie Farbenblindheit möglicherweise übersehen wird. Statt erforderliche Formularfelder beispielsweise in Rot zu markieren, markieren Sie sie mit einem Sternchen und in Rot.

> [!NOTE]
> Ein hoher Kontrastverhältnis wird auch jedem ermöglichen, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm verwendet, Seiten bei hellem Licht, wie z. B. Sonnenlicht, besser zu lesen.

### Prüfwerkzeuge

Es gibt mehrere Prüfwerkzeuge, in die Sie Ihre Webseiten einspeisen können. Sie werden sie analysieren und eine Liste der auf der Seite vorhandenen Barrierefreiheitsprobleme zurückgeben. Schauen wir uns [Wave](https://wave.webaim.org/) als Beispiel an, ein Online-Barriefreiheitstest-Tool, das eine Webadresse akzeptiert und eine annotierte Ansicht dieser Seite mit hervorgehobenen Barrierefreiheitsproblemen zurückgibt.

1. Gehen Sie zur [Wave-Homepage](https://wave.webaim.org/).
2. Geben Sie die URL unseres Beispiels [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) in das Texteingabefeld in der Nähe der oberen Seite ein. Drücken Sie dann die Eingabetaste oder klicken Sie/tippen Sie auf den Pfeil am rechten Rand des Eingabefelds.
3. Die Site sollte die vorhandenen Barrierefreiheitsprobleme hervorheben. Klicken Sie auf die angezeigten Symbole, um weitere Informationen zu jedem der von Wave's Bewertung identifizierten Probleme zu erhalten.

Weitere Prüfwerkzeuge, die es sich lohnt, zu überprüfen:

- [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)
- [ANDI bookmarklet](https://www.ssa.gov/accessibility/andi/help/install.html)
- [Google Lighthouse accessibility audits](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)

> [!NOTE]
> Solche Werkzeuge reichen allein nicht aus, um alle Ihre Barrierefreiheitsprobleme zu lösen. Sie benötigen eine Kombination aus diesen, Wissen und Erfahrung, Benutzer-Tests, usw., um ein vollständiges Bild zu erhalten.

Das [Deque's aXe Tool](https://www.deque.com/axe/) geht weiter als die oben genannten Prüfwerkzeuge. Wie die anderen überprüft es Seiten und gibt Barrierefreiheitsfehler zurück. Seine nützlichste Form ist wahrscheinlich die Browser-Erweiterungen:

- [aXe for Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe for Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Diese fügen den Developer-Tools des Browsers einen Barrierefreiheits-Tab hinzu. Zum Beispiel haben wir die Firefox-Version installiert und für die Prüfung unseres Beispiels [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) verwendet. Wir erhielten die folgenden Ergebnisse:

![Ein Screenshot der von dem Axe-Tool identifizierten Barrierefreiheitsprobleme.](axe-screenshot.png)

aXe ist auch mittels `npm` installierbar und kann in Task-Runner wie [Grunt](https://gruntjs.com/) und [Gulp](https://gulpjs.com/), Automatisierungs-Frameworks wie [Selenium](https://www.selenium.dev/) und [Cucumber](https://cucumber.io/), Unit-Test-Frameworks wie [Jasmine](https://jasmine.github.io/) und weitere integriert werden (siehe die [Hauptseite von aXe](https://www.deque.com/axe/) für Details).

## Screenreader

Eine der häufigsten Arten von unterstützender Technologie (AT), die von behinderten Menschen verwendet wird — und eine der häufigsten, die Sie zur Prüfung der Barrierefreiheit Ihrer Webseiten verwenden werden — sind **Screenreader**. Dies sind Softwareprogramme, die Webseiteninhalte oder Inhalte aus anderen auf einem Betriebssystem installierten Anwendungen vorlesen. Screenreader ermöglichen es Menschen, Computer zu verwenden, ohne visuellen Inhalt sehen zu müssen.

Webbrowser stellen Informationen über den Inhalt der Seite für Screenreader (und andere ATs) zur Verfügung, um sie dem Benutzer über eine Darstellung namens {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} zu vermitteln. Dieser liefert semantische Informationen wie Namen und Beschreibungen von Elementen, deren Zweck oder Rolle (ist es ein Button oder ein Eingabefeld?), und ob sie sich in einem bestimmten Zustand befinden (zum Beispiel, ob ein Dialogfeld offen oder geschlossen ist).

Diese Informationen mögen im Fall eines Textabsatzes trivial sein, der ziemlich genau so klingt, wie er geschrieben wurde, aber es kann kompliziert werden, wenn es um Benutzeroberflächenfunktionen geht, wie ein Dropdown-Menü oder einen Videoplayer. Deshalb ist es sehr wichtig, semantisches HTML korrekt zu verwenden, auf das Sie im nächsten Artikel in diesem Modul näher eingehen werden. Wenn Sie Inhalte mit dem falschen Element markieren, kann dies Screenreader-Benutzer verwirren.

Stellen Sie sicher, dass Sie einen oder zwei Screenreader auf Ihrem Entwicklungscomputer installiert haben, und probieren Sie aus, Ihre Lieblingswebsites mit einem Screenreader zu verwenden, wie weiter unten beschrieben. Verstehen, wie sehbehinderte Menschen das Internet nutzen, ist der Schlüssel zur Gestaltung von Produkten, die für alle besser funktionieren.

### Welche Screenreader sind verfügbar?

Es gibt mehrere verfügbare Screenreader:

- Einige sind kostenpflichtige kommerzielle Produkte wie [JAWS](https://vispero.com/jaws-screen-reader-software/) (Windows).
- Einige sind kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows und macOS), und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Einige sind in das Betriebssystem integriert, wie [VoiceOver](https://www.apple.com/accessibility/features/?vision) (macOS und iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf Chromebooks), und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Im Allgemeinen sind Screenreader separate Apps, die auf dem Host-Betriebssystem laufen und auch Webseiten und Inhalte in anderen Apps lesen können (das ist nicht immer der Fall; ChromeVox ist beispielsweise eine Browsererweiterung). Screenreader neigen dazu, einige Unterschiede im genauen Verhalten und in den Steuerungen zu haben. Daher müssen Sie die Dokumentation Ihres gewählten Screenreaders zu Rate ziehen, um alle Details zu erfahren. Trotzdem funktionieren sie im Grunde alle auf gleiche Weise.

In den nächsten Abschnitten gehen wir einige Tests mit ein paar verschiedenen Screenreadern durch, um Ihnen eine allgemeine Vorstellung davon zu geben, wie sie funktionieren und wie man mit ihnen testet.

> [!NOTE]
> WebAIMs [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/) bietet einige nützliche Informationen über die Nutzung von Screenreadern und was am besten für Screenreader funktioniert. Siehe auch [Screen Reader User Survey #10 Results](https://webaim.org/projects/screenreadersurvey10/#used) für einige interessante Statistiken zur Nutzung von Screenreadern.

#### VoiceOver

VoiceOver (VO) ist kostenlos mit Apple mac/iPhone/iPad erhältlich und daher nützlich, um auf Desktop und Mobilgeräten zu testen, wenn Sie Apple-Produkte verwenden. Wir haben es auf macOS auf einem MacBook Pro getestet.

Um es einzuschalten, drücken Sie <kbd>Cmd</kbd> + <kbd>F5</kbd>. Wenn Sie VO noch nie verwendet haben, wird Ihnen ein Begrüßungsbildschirm angezeigt, auf dem Sie wählen können, ob Sie VO starten oder nicht und ein ziemlich nützliches Tutorial durchführen können, um zu lernen, wie man es benutzt. Um es auszuschalten, drücken Sie erneut <kbd>Cmd</kbd> + <kbd>F5</kbd>.

> [!NOTE]
> Sie sollten das Tutorial mindestens einmal durchgehen — es ist eine sehr nützliche Möglichkeit, VO zu lernen.

Wenn VO eingeschaltet ist, sieht die Anzeige größtenteils gleich aus, aber Sie sehen ein schwarzes Feld in der unteren linken Ecke des Bildschirms, das Informationen darüber enthält, was VO derzeit ausgewählt hat. Die aktuelle Auswahl wird auch mit einem schwarzen Rahmen hervorgehoben — dieses Highlight wird als **VO Cursor** bezeichnet.

![Ein Beispiel-Screenshot, der den Barrierefreiheitstest mit VoiceOver auf der MDN-Homepage zeigt. Unten links im Bild ist ein Ausschnitt der auf der Webseite ausgewählten Informationen hervorgehoben.](voiceover.png)

Um VO zu verwenden, werden Sie häufig den "VO Modifier" verwenden — dies ist eine Taste oder Tastenkombination, die Sie zusätzlich zu den eigentlichen VO Tastenkombinationen drücken müssen, damit sie funktionieren. Die Verwendung eines Modifiers wie diesem ist üblich bei Screenreadern, um ihre Befehle vor Konflikten mit anderen Befehlen zu schützen. Im Fall von VO kann der Modifier entweder <kbd>CapsLock</kbd> oder <kbd>Strg</kbd> + <kbd>Option</kbd> sein.

VO hat viele Tastaturbefehle und wir werden nicht alle hier aufzählen. Die grundlegenden, die Sie für die Prüfung von Webseiten benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastaturbefehlen steht "VO" für "den VoiceOver Modifier".

<table class="standard-table no-markdown">
  <caption>
    Häufige VoiceOver Tastaturbefehle
  </caption>
  <thead>
    <tr>
      <th scope="col">Tastaturbefehl</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VO + Pfeiltasten</td>
      <td>Verschiebung des VO Cursors nach oben, rechts, unten, links.</td>
    </tr>
    <tr>
      <td>VO + Leertaste</td>
      <td>
        Auswählen/aktivieren von durch den VO Cursor hervorgehobenen Elementen. Dies schließt auch in Rotor ausgewählte Elemente ein (siehe unten).
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>Shift</kbd> + nach unten Taste</td>
      <td>
        In eine Gruppe von Elementen wie eine HTML-Tabelle oder ein Formular wechseln. Einmal in einer Gruppe, können Sie sich darin bewegen und Elemente wie gewohnt auswählen.
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>Shift</kbd> + nach oben Taste</td>
      <td>Aus einer Gruppe herausgehen.</td>
    </tr>
    <tr>
      <td>VO + <kbd>C</kbd></td>
      <td>(in einer Tabelle) Lesen des Headers der aktuellen Spalte.</td>
    </tr>
    <tr>
      <td>VO + <kbd>R</kbd></td>
      <td>(in einer Tabelle) Lesen des Headers der aktuellen Zeile.</td>
    </tr>
    <tr>
      <td>VO + <kbd>C</kbd> + <kbd>C</kbd> (zwei Cs nacheinander)</td>
      <td>
        (in einer Tabelle) Die gesamte aktuelle Spalte, einschließlich des Headers, lesen.
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>R</kbd> + <kbd>R</kbd> (zwei Rs nacheinander)</td>
      <td>
        (in einer Tabelle) Die gesamte aktuelle Zeile lesen, einschließlich der Header, die zu jeder Zelle gehören.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeiltasten links, VO + Pfeiltasten rechts</td>
      <td>
        (in einigen horizontalen Optionen, wie einem Datumsauswähler)
        Wechseln zwischen den Optionen.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeiltasten nach oben, VO + Pfeiltasten nach unten</td>
      <td>
        (in einigen horizontalen Optionen, wie einem Datumsauswähler)
        Die aktuelle Option ändern.
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>U</kbd></td>
      <td>
        Zeigt den Rotor an, der Listen mit Überschriften, Links, Formularelementen, etc. für eine einfache Navigation enthält.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeiltasten links, VO + Pfeiltasten rechts</td>
      <td>
        (im Rotor) Wechseln zwischen verschiedenen im Rotor verfügbaren Listen.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeiltasten nach oben, VO + Pfeiltasten nach unten</td>
      <td>
        (im Rotor) Wechseln zwischen verschiedenen Elementen in der aktuellen Rotorliste.
      </td>
    </tr>
    <tr>
      <td><kbd>Esc</kbd></td>
      <td>(im Rotor) Rotor verlassen.</td>
    </tr>
    <tr>
      <td><kbd>Strg</kbd></td>
      <td>(wenn VO spricht) Sprache pausieren/resumieren.</td>
    </tr>
    <tr>
      <td>VO + <kbd>Z</kbd></td>
      <td>Letztes Sprachstück neu starten.</td>
    </tr>
    <tr>
      <td>VO + <kbd>D</kbd></td>
      <td>In den mac-Dock gehen, damit Sie darin Apps auswählen können.</td>
    </tr>
  </tbody>
</table>

Das mag wie viele Befehle erscheinen, aber es ist nicht so schlimm, wenn Sie sich daran gewöhnt haben, und VO gibt Ihnen regelmäßig Hinweise, welche Befehle an bestimmten Stellen zu verwenden sind. Spielen Sie jetzt mit VO, Sie können dann mit einigen unserer Beispiele im Abschnitt [Screenreader-Tests](#screenreader-tests) weitermachen.

#### NVDA

NVDA ist nur für Windows erhältlich und Sie müssen es installieren.

1. Laden Sie NVDA von [nvaccess.org](https://www.nvaccess.org/) herunter und installieren Sie es. Sie können wählen, ob Sie eine Spende machen oder es kostenlos herunterladen möchten; Sie müssen auch Ihre E-Mail-Adresse angeben, bevor Sie es herunterladen können.
2. Um NVDA nach der Installation zu starten, doppelklicken Sie auf die Programmdatei/Verknüpfung oder verwenden Sie den Tastaturbefehl <kbd>Strg</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd>. Sie sehen das NVDA-Willkommensdialogfeld, wenn Sie es starten. Hier können Sie aus ein paar Optionen wählen und dann die Schaltfläche _OK_ drücken, um loszulegen.

NVDA wird jetzt auf Ihrem Computer aktiv sein.

Um NVDA zu verwenden, werden Sie häufig den "NVDA Modifier" verwenden — die Taste, die Sie zusätzlich zu den eigentlichen NVDA Tastenkombinationen drücken müssen. Der NVDA Modifier kann entweder <kbd>Einfg</kbd> (der Standardwert) oder <kbd>CapsLock</kbd> sein (kann durch Aktivieren des ersten Kontrollkästchens im NVDA-Willkommensdialog vor dem Drücken von _OK_ ausgewählt werden).

> [!NOTE]
> NVDA ist subtiler als VoiceOver in Bezug darauf, wie es anzeigt, wo es ist und was es tut. Wenn Sie durch Überschriften, Listen etc. scrollen, werden die von Ihnen ausgewählten Elemente im Allgemeinen durch eine subtile Umrandung hervorgehoben, aber dies ist nicht immer der Fall für alle Dinge. Wenn Sie sich komplett verirren, können Sie <kbd>Strg</kbd> + <kbd>F5</kbd> drücken, um die aktuelle Seite zu aktualisieren und von oben wieder zu beginnen.

NVDA hat viele Tastaturbefehle, und wir werden nicht alle hier aufzählen. Die grundlegenden, die Sie für die Prüfung von Webseiten benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastaturbefehlen steht "NVDA" für "den NVDA Modifier".

<table class="standard-table no-markdown">
  <caption>
    Häufigste NVDA Tastaturbefehle
  </caption>
  <thead>
    <tr>
      <th scope="col">Tastaturbefehl</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NVDA + <kbd>Q</kbd></td>
      <td>NVDA ausschalten, nachdem Sie es gestartet haben.</td>
    </tr>
    <tr>
      <td>NVDA + nach oben Taste</td>
      <td>Die aktuelle Zeile lesen.</td>
    </tr>
    <tr>
      <td>NVDA + nach unten Taste</td>
      <td>Ab der aktuellen Position lesen.</td>
    </tr>
    <tr>
      <td>Nach oben Taste und nach unten Taste, oder <kbd>Shift</kbd> + <kbd>Tab</kbd> und <kbd>Tab</kbd></td>
      <td>Zum vorherigen/nächsten Element auf der Seite wechseln und es lesen.</td>
    </tr>
    <tr>
      <td>Linke Pfeiltaste und rechte Pfeiltaste</td>
      <td>Zum vorherigen/nächsten Zeichen im aktuellen Element wechseln und es lesen.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>H</kbd> und <kbd>H</kbd></td>
      <td>Zum vorherigen/nächsten Überschrift wechseln und sie lesen.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>K</kbd> und <kbd>K</kbd></td>
      <td>Zum vorherigen/nächsten Link wechseln und ihn lesen.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>D</kbd> und <kbd>D</kbd></td>
      <td>
        Zum vorherigen/nächsten Dokument-Landmark wechseln (z.B. `<nav>`)
        und es lesen.
      </td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>1</kbd>-<kbd>6</kbd> und <kbd>1</kbd>-<kbd>6</kbd></td>
      <td>Zur vorherigen/nächsten Überschrift (Ebene 1–6) wechseln und sie lesen.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>F</kbd> und <kbd>F</kbd></td>
      <td>Zum vorherigen/nächsten Formulareingabefeld wechseln und den Fokus darauf setzen.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>T</kbd> und <kbd>T</kbd></td>
      <td>Zur vorherigen/nächsten Datentabelle wechseln und den Fokus darauf setzen.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>B</kbd> und <kbd>B</kbd></td>
      <td>Zum vorherigen/nächsten Button wechseln und sein Label lesen.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>L</kbd> und <kbd>L</kbd></td>
      <td>Zur vorherigen/nächsten Liste wechseln und das erste Listenelement lesen.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>I</kbd> und <kbd>I</kbd></td>
      <td>Zum vorherigen/nächsten Listenelement wechseln und es lesen.</td>
    </tr>
    <tr>
      <td><kbd>Enter</kbd>/<kbd>Return</kbd></td>
      <td>
        (wenn Link/Schaltfläche oder anderes aktivierbares Element ausgewählt ist) Element aktivieren.
      </td>
    </tr>
    <tr>
      <td>NVDA + <kbd>Leertaste</kbd></td>
      <td>
        (wenn Formular ausgewählt ist) Formular betreten, damit einzelne Elemente ausgewählt werden können,
        oder Formular verlassen, wenn Sie bereits darin sind.
      </td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>Tab</kbd> und <kbd>Tab</kbd></td>
      <td>(innerhalb eines Formulars) Zwischen den Formulareingabefeldern wechseln.</td>
    </tr>
    <tr>
      <td>Nach oben und nach unten Tasten</td>
      <td>
        (innerhalb eines Formulars) Formulareingabewerte ändern (im Fall von Steuerungen wie Auswahlfeldern).
      </td>
    </tr>
    <tr>
      <td><kbd>Leertaste</kbd></td>
      <td>(innerhalb eines Formulars) Ausgewählten Wert bestätigen.</td>
    </tr>
    <tr>
      <td><kbd>Strg</kbd> + <kbd>Alt</kbd> + Pfeiltasten</td>
      <td>(wenn Tabelle ausgewählt ist) Zwischen Tabellenzellen wechseln.</td>
    </tr>
  </tbody>
</table>

### Screenreader-Tests

Nun, da Sie sich an die Verwendung eines Screenreaders gewöhnt haben, möchten wir, dass Sie ihn für einige schnelle Barrierefreiheitstests verwenden, um ein Gefühl dafür zu bekommen, wie Screenreader mit guten und schlechten Webseiten-Features umgehen:

- Schauen Sie sich [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) an und beachten Sie, wie die Überschriften vom Screenreader erkannt und für die Navigation genutzt werden können. Schauen Sie sich nun [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) an und beachten Sie, wie der Screenreader keine dieser Informationen erhält. Stellen Sie sich vor, wie ärgerlich das wäre, wenn Sie versuchen, sich in einer langen Seite voller Text zurechtzufinden.
- Schauen Sie sich [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) an und beachten Sie, wie sie außerhalb des Kontextes Sinn ergeben, zum Beispiel im VoiceOver Rotor. Das ist bei [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) nicht der Fall – sie alle sind nur "klicken Sie hier".
- Schauen Sie sich [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) an und beachten Sie, wie die Formulareingaben durch ihre Labels beschrieben werden, weil wir entsprechende {{htmlelement("label")}}-Elemente hinzugefügt haben. In [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) erhalten sie ein unhilfreiches Label wie "blank".
- Schauen Sie sich unser Beispiel [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) an und sehen Sie, wie der Screenreader Spalten und Reihen von Inhalten verbinden und alle zusammen lesen kann, weil wir die Tabellen-Header richtig definiert haben. In [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) können keine der Zellen verbunden werden. Beachten Sie, dass sich NVDA leicht seltsam verhält, wenn Sie nur eine einzige Tabelle auf einer Seite haben; Sie könnten stattdessen [WebAIMs Table Test Page](https://webaim.org/articles/nvda/tables.htm) ausprobieren.

## Weitere Werkzeuge

Screenreader sind eine der häufigsten Arten von unterstützender Technologie, die Ihnen als Webentwickler begegnen wird, aber es gibt andere Arten von ATs, und es ist nützlich, vertraut mit dem zu sein, was Benutzer möglicherweise verwenden, um auf Ihre Inhalte zuzugreifen. Dieser Abschnitt fasst einige davon zusammen.

### Große Text- oder Braille-Tastaturen

Es ist möglich, große Text-Tastaturen zu bekommen, die für sehbehinderte oder ältere Benutzer konzipiert sind, und Braille-Tastaturen, die von blinden und schwer sehbehinderten Menschen eingesetzt werden können.

### Alternative Zeigegeräte

Wenn man an Zeigegeräte denkt, sind Mäuse das offensichtliche Beispiel, aber es gibt auch andere Zeigegeräte, die es Nutzern mit unterschiedlicher Mobilitätsbeeinträchtigung ermöglichen, Benutzeroberflächen einfacher zu navigieren:

- Trackballs: Eine Art umgedrehter Maus, bei der es sich um eine montierte Kugel handelt, die stationär auf Ihrem Tisch bleibt, die Sie rollen können, um den Zeiger zu bewegen. Sie gelten als präziser und leichter zu handhaben als Mäuse, insbesondere für Menschen mit eingeschränkter Handbeweglichkeit.
- Joysticks: Ein Steuerknüppel, der bewegt werden kann, um den Zeiger zu bewegen. Joysticks sind weniger präzise als Trackballs, aber nutzbar von Menschen mit einer Vielzahl physischer Beeinträchtigungen, sogar schweren Behinderungen.
- Touchpads: Die meisten modernen Laptops haben ein Touchpad (manchmal auch Trackpad genannt) — einen flachen, taktilen Sensor, mit dem Sie den Zeiger mit einem Finger bewegen sowie Multi-Finger-Gesten durchführen können, ähnlich wie mobile Gesten. Sie können externe Touchpads für Geräte kaufen, die keine integrierten haben. Einige Menschen empfinden sie als präziser als Mäuse.

### Bildschirmvergrößerer

Bildschirmvergrößerer bieten sehbehinderten Nutzern eine vergrößerte Darstellung des Displays ihres Geräts, um ihnen zu ermöglichen, den Geräteinhalt besser zu verstehen und zu nutzen, sowie andere Funktionen wie Farbanpassungen zur Unterstützung bei Farbenblindheit und das Anpassen der Größe des Mauszeigers und der Textcursore, um sie besser sichtbar zu machen.

Sowohl Software- als auch Hardware-Bildschirmvergrößerer sind erhältlich:

- Die meisten modernen Betriebssysteme haben eine integrierte App zur Vergrößerung des gesamten oder eines Teils des Bildschirms, beispielsweise Zoom auf mac oder Lupe auf Windows. Sie bieten auch häufig Optionen zur universellen Erhöhung der Textgröße, Mauszeigergröße, etc. An Optionen von Drittanbietern fehlt es ebenfalls nicht.
- Hardware-Bildschirmvergrößerer bestehen in der Regel aus einem separaten Bildschirm, der neben oder vor dem Bildschirm Ihres Geräts sitzt und eine vergrößerte Version davon projiziert oder eine vergrößerte Version eines Teils davon.

### Sprachsteuerungssoftware

Sprach- (oder Sprachsteuerungs-) Software erlaubt es Ihnen, Befehle auszusprechen, um Ihr Gerät zu steuern und/oder den Text von E-Mails oder Dokumenten zu diktieren und den Computer den Text für Sie schreiben zu lassen. Dies ist sehr nützlich für Personen, die nicht in der Lage sind, eine Tastatur oder andere Steuerungsmechanismen zu verwenden.

Moderne Betriebssysteme haben eingebaute Funktionen, um dies zu ermöglichen (zum Beispiel Diktieren auf mac oder Sprachzugriff auf Windows), und es gibt ebenfalls Drittanbieter-Apps, von Desktop-Apps bis hin zu Browser-Erweiterungen.

### Schaltersteuerungen

Schaltersteuerungen bieten einen Mechanismus zur Interaktion mit Geräten für Benutzer mit sehr eingeschränkter Mobilität oder [kognitiver Beeinträchtigung](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility).

Ein Schaltersteuerung-Setup besteht in der Regel aus zwei Teilen:

- Ein physischer Schalter oder eine Taste zur Aktivierung von Optionen auf dem Gerät. Sie können auch reguläre Gerätetasten (wie Lautstärkeregler) oder Tasten auf einer Tastatur für Schalterfunktionalität einsetzen.
- Ein Gerätemodus oder eine Drittanbieter-Softwareergänzung, die das Gerät mit der Schalter- oder Tastensteuerung kompatibel macht. Zum Beispiel ist Switch Access auf Android ein Modus, bei dem die verschiedenen Optionen in verschiedenen Situationen (zum Beispiel Apps auf dem Startbildschirm) durchgegangen werden und dann die gewünschte Option mit einem Schalter oder einer Taste ausgewählt werden kann, wenn sie erreicht ist.

## Planung für Barrierefreiheit

Sie sollten sorgfältig über Barrierefreiheit am Anfang jedes Projekts nachdenken. Stellen Sie sicher, dass Barrierefreiheit während der anfänglichen Designphase in Betracht gezogen wird, damit Sie:

- Die Grundlagen richtig hinbekommen, zum Beispiel durch die Verwendung von [guter Dokumentenstruktur](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_well-structured_text_content) und Bereitstellung von [alternativem Text](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) für Bilder.
- Die beste Vorgehensweise für Funktionen, die wahrscheinlich Barrierefreiheitsprobleme haben, sorgfältig durchdenken. Zum Beispiel werden Audio und Video definitiv für einige Menschen unzugänglich sein, daher sollten Sie Alternativen wie [Transkripte](/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts) und [Textspuren](/de/docs/Learn_web_development/Core/Accessibility/Multimedia#video_text_tracks) bereitstellen.
- Kostspielige Fehler später vermeiden. Probleme, die gegen Ende eines Projekts entdeckt werden, sind in der Regel weitaus zeitaufwändiger und teurer zu beheben als Probleme, die frühzeitig erkannt werden.

## Benutzer-Tests

Sie können sich nicht nur auf automatisierte Werkzeuge verlassen, um Barrierefreiheitsprobleme auf Ihrer Website zu bestimmen. Jedes Website-Projekt braucht eine [Benutzer-Teststrategie](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies#user_testing), und es wird dringend empfohlen, dass Sie einige Barrierefreiheitsbenutzergruppen einschließen:

- Versuchen Sie, einige Screenreader-Benutzer, einige Nur-Tastatur-Benutzer, einige Benutzer ohne Hörvermögen, Benutzer mit Mobilitätseinschränkungen usw. einzubeziehen.
- Lassen Sie jede Gruppe die Website allgemein ausprobieren, beginnend mit der Betrachtung der Homepage und anderer Hauptseiten und dem Ausprobieren einiger der primären Funktionen. Typische Beispiele sind der Kauf eines Produkts oder das Buchen einer Veranstaltung. Fragen Sie sie nach ihrem Eindruck und welchen Problemen sie begegneten.
- Lassen Sie sie sich auf Funktionen oder Workflows konzentrieren, bei denen Sie spezifische Barrierefreiheitsbedenken haben, wie z.B. komplexe Formularelemente oder Videoplayer. Fragen Sie sie, was ihnen in Bezug auf Benutzererfahrung fehlt und was sie gerne geändert sehen würden.

Einige Projekte werden ein Budget haben, um Testgruppen zu bezahlen, während andere auf unbezahlte Freiwillige oder sogar Kollegen und Freunde angewiesen sind.

## Checkliste für Barrierefreiheitsprüfungen

Die folgende Liste bietet eine Checkliste, die Sie befolgen sollten, um sicherzustellen, dass Sie die empfohlenen Barrierefreiheitsprüfungen für Ihr Projekt durchgeführt haben:

1. Stellen Sie sicher, dass Ihr HTML so semantisch korrekt wie möglich ist. [Validierung](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML#html_validation) ist ein guter Anfang, ebenso wie die Verwendung eines [Prüfwerkzeugs](#prüfwerkzeuge).
2. Überprüfen Sie, ob Ihr Inhalt ohne aktiviertes CSS Sinn ergibt.
3. Stellen Sie sicher, dass Ihre Funktionalität nur mit der Tastatur zugänglich ist (siehe [Verwenden Sie, wenn möglich, semantische UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) für mehr Details). Testen Sie die Verwendung von Tab, Return/Enter usw.
4. Stellen Sie sicher, dass Ihr nicht-textueller Inhalt [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) hat. Ein [Prüfwerkzeug](#prüfwerkzeuge) ist gut geeignet, um solche Probleme zu erfassen.
5. Stellen Sie sicher, dass der [Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast) Ihrer Website akzeptabel ist, indem Sie ein geeignetes Prüfwerkzeug verwenden.
6. Stellen Sie sicher, dass [versteckte Inhalte](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) von Screenreadern sichtbar sind.
7. Stellen Sie sicher, dass die Funktionalität, wo möglich, ohne JavaScript nutzbar ist.
8. Verwenden Sie ARIA, um die Barrierefreiheit dort zu verbessern, wo es angebracht ist.
9. Führen Sie Ihre Website durch ein [Prüfwerkzeug](#prüfwerkzeuge).
10. Testen Sie sie mit einem Screenreader.
11. Fügen Sie an einer leicht auffindbaren Stelle auf Ihrer Website eine Erklärung zur Barrierefreiheit hinzu, die angibt, was Sie getan haben.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel einen Eindruck von den Arten von Werkzeugen gegeben, die Sie verwenden können, um Barrierefreiheitsprobleme zu beheben, und von der unterstützenden Technologie, die von Menschen mit Behinderungen verwendet wird, um auf das Web zuzugreifen.

Im nächsten Artikel schauen wir uns an, wie man barrierefreies HTML schreibt.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}
