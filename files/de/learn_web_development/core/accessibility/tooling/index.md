---
title: Barrierefreiheitstools und unterstützende Technologien
short-title: Accessibility tools
slug: Learn_web_development/Core/Accessibility/Tooling
l10n:
  sourceCommit: a6ccdff81d675a5271a670f1e416e79bc546f45e
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}

Als Nächstes wenden wir uns den Barrierefreiheitstools zu, die Informationen über die Arten von Werkzeugen bereitstellen, die Sie zur Lösung von Barrierefreiheitsproblemen nutzen können, und Ihnen helfen, die **unterstützenden Technologien** zu verstehen, die von Menschen mit Behinderungen verwendet werden, um im Internet zu surfen. Sie werden die hier beschriebenen Tools in den nachfolgenden Artikeln verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegendes Verständnis für Barrierefreiheitskonzepte</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit der Art von Tools, die Sie zur Lösung von Barrierefreiheitsproblemen nutzen können, zum Beispiel Prüfwerkzeuge.</li>
          <li>Einrichten von Bildschirmlesegeräten und deren Nutzung zum Testen von Websites auf Desktop und Mobilgeräten.</li>
          <li>Vertrautheit mit anderen Arten von unterstützenden Technologien, wie große Text- oder Brailletastaturen, alternative Zeigegeräte und Bildschirmlupen.</li>
          <li>Die Bedeutung von Benutzer-Tests neben automatisierten Tests.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheitstools

Werfen wir einen Blick auf die Tools und Techniken, die Sie zur Prüfung der Barrierefreiheit von Websites und zur Behebung der aufgedeckten Probleme nutzen können.

### Testen der Quellreihenfolge

Ihr Inhalt sollte in seiner Quellreihenfolge logisch Sinn ergeben — Sie können ihn später mit CSS anders darstellen, aber zunächst sollten Sie die zugrundeliegende Struktur korrekt aufbauen. Der Grund dafür ist, dass unterstützende Technologien den Inhalt der Website basierend auf der Reihenfolge der Quelle lesen, und Menschen mit Behinderungen häufig Teile des CSS modifizieren oder ausschalten, um den Inhalt lesbarer zu machen (häufige Beispiele sind die Erhöhung der Schriftgröße und die Anwendung von kontraststarken Farbschemata).

Um die Quellreihenfolge zu testen, können Sie das CSS einer Site ausschalten und sehen, wie verständlich sie ohne CSS ist. Sie könnten dies manuell tun, indem Sie einfach das CSS aus Ihrem Code entfernen, aber die einfachste Möglichkeit ist die Nutzung von Browser-Funktionen, zum Beispiel:

- Firefox: Wählen Sie _Ansicht > Seitenstil > Kein Stil_ im Hauptmenü.
- Safari: [Öffnen Sie die Entwicklerwerkzeuge des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser), klicken Sie auf die Schaltfläche für _Geräteeinstellungen_ oben links im Entwicklerwerkzeug-Panel (sieht aus wie ein Computermonitor), und aktivieren Sie das Kontrollkästchen "CSS deaktivieren" im erscheinenden Panel.
- Chrome/Edge: Installieren Sie die [Web Developer Toolbar](https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm)-Erweiterung und starten Sie den Browser neu. Klicken Sie auf das Zahnrad-Symbol "Web Developer", das nun im Menü Ihrer Erweiterungen verfügbar sein sollte, und wählen Sie _CSS > Alle Stile deaktivieren_.

### Farbkontrast-Prüfer

Wenn Sie ein Farbschema für Ihre Website auswählen, sollten Sie sicherstellen, dass die Textfarbe (Vordergrund) einen guten Kontrast zur Hintergrundfarbe hat. Ihr Design sieht vielleicht cool aus, aber es nützt nichts, wenn Menschen Ihre Inhalte nicht lesen können. Verwenden Sie ein Tool wie den [Farbkontrast-Prüfer](https://webaim.org/resources/contrastchecker/) von WebAIM, um zu prüfen, ob Ihr Schema ausreichend kontrastreich ist.

Ein weiterer Tipp ist, es zu vermeiden, nur Farben zum Markieren oder Hervorheben wichtiger Informationen zu verwenden, wie es bei Menschen mit Sehbeeinträchtigungen wie Farbenblindheit möglicherweise nicht auffällt. Anstelle von rot markierten Pflichtfeldern im Formular könnten Sie beispielsweise ein Sternchen und die Farbe Rot verwenden.

> [!NOTE]
> Ein hoher Kontrast wird es auch Benutzern von Smartphones oder Tablets mit glänzendem Bildschirm ermöglichen, Seiten in einer hellen Umgebung, wie z.B. Sonnenlicht, besser zu lesen.

### Prüfwerkzeuge

Es gibt mehrere Prüfwerkzeuge, in die Sie Ihre Webseiten einspeisen können. Sie werden diese durchsehen und eine Liste von Barrierefreiheitsproblemen auf der Seite zurückgeben. Schauen wir uns als Beispiel [Wave](https://wave.webaim.org/) an, ein Online-Werkzeug zur Barrierefreiheitstests, das eine Webadresse akzeptiert und eine kommentierte Ansicht dieser Seite mit hervorgehobenen Barrierefreiheitsproblemen zurückgibt.

1. Gehen Sie zur [Wave-Startseite](https://wave.webaim.org/).
2. Geben Sie die URL unseres Beispiels [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) in das Text-Eingabefeld oben auf der Seite ein. Drücken Sie dann die Eingabetaste oder klicken/tippen Sie auf den Pfeil am rechten Rand des Eingabefelds.
3. Die Site sollte die bestehenden Barrierefreiheitsprobleme hervorheben. Klicken Sie auf die angezeigten Symbole, um mehr Informationen über jedes der von Waves Bewertung identifizierten Probleme zu erhalten.

Weitere Prüfwerkzeuge, die es sich anzusehen lohnt:

- [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)
- [ANDI bookmarklet](https://www.ssa.gov/accessibility/andi/help/install.html)
- [Google Lighthouse accessibility audits](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)

> [!NOTE]
> Solche Tools reichen allein nicht aus, um alle Ihre Barrierefreiheitsprobleme zu lösen. Sie benötigen eine Kombination aus diesen, Wissen und Erfahrung, Benutzertests usw., um ein umfassendes Bild zu erhalten.

[Deque's aXe-Tool](https://www.deque.com/axe/) geht ein Stück weiter als die oben erwähnten Prüfwerkzeuge. Wie die anderen überprüft es Seiten und gibt Barrierefreiheitsfehler zurück. Seine unmittelbar nützlichste Form sind wahrscheinlich die Browser-Erweiterungen:

- [aXe für Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe für Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Diese fügen den Entwickler-Tools des Browsers eine Barrierefreiheits-Registerkarte hinzu. Zum Beispiel installierten wir die Firefox-Version und verwendeten sie, um unser [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html)-Beispiel zu überprüfen. Wir erhielten die folgenden Ergebnisse:

![Ein Screenshot von durch das Axe-Tool identifizierten Barrierefreiheitsproblemen.](axe-screenshot.png)

aXe ist auch über `npm` installierbar und kann in Task-Runner wie [Grunt](https://gruntjs.com/) und [Gulp](https://gulpjs.com/), Automatisierungs-Frameworks wie [Selenium](https://www.selenium.dev/) und [Cucumber](https://cucumber.io/), Unit-Testing-Frameworks wie [Jasmine](https://jasmine.github.io/) und mehr integriert werden (siehe erneut die [Hauptseite von aXe](https://www.deque.com/axe/) für Details).

## Bildschirmlesegeräte

Eine der am häufigsten verwendeten Arten von unterstützender Technologie (AT), die von behinderten Menschen genutzt wird — und eine der häufigsten, die Sie zur Überprüfung der Barrierefreiheit Ihrer Webseiten verwenden werden — sind **Bildschirmlesegeräte**. Hierbei handelt es sich um Software, die den Inhalt von Webseiten oder andere auf einem Betriebssystem installierte App-Inhalte vorliest. Bildschirmlesegeräte ermöglichen es Menschen, Computer ohne visuelle Inhalte zu verwenden.

Webbrowser stellen Informationen über den Inhalt der Seite für Bildschirmleser (und andere AT) zur Verfügung, die dem Benutzer durch eine Darstellung namens {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}} mitgeteilt werden. Dies bietet semantische Informationen wie Namen und Beschreibungen von Elementen, deren Zweck oder Rolle (ist es ein Button oder ein Eingabefeld?) und ob sie sich in einem bestimmten Zustand befinden (z.B. ist ein Dialogfeld offen oder geschlossen?).

Diese Informationen könnten im Fall eines Absatzes von Text trivial sein, der sich genau so anhört, wie er geschrieben steht, aber es kann kompliziert werden, wenn es um Benutzeroberflächenfunktionen wie ein Dropdown-Menü oder einen Videoplayer geht. Deshalb ist es sehr wichtig, semantisches HTML korrekt zu verwenden, was Sie im nächsten Artikel in diesem Modul genauer betrachten werden. Wenn Sie Inhalte mit dem falschen Element markieren, kann dies Benutzer von Bildschirmlesegeräten verwirren.

Stellen Sie sicher, dass Sie ein oder zwei Bildschirmlesegeräte auf Ihrem Entwicklungscomputer installiert haben und versuchen Sie, Ihre bevorzugten Websites über ein Bildschirmlesegerät zu verwenden, wie im Folgenden besprochen. Das Verständnis, wie sehbehinderte Menschen das Internet nutzen, ist der Schlüssel zur Verbesserung von Produkten, die für alle besser funktionieren.

### Welche Bildschirmlesegeräte sind verfügbar?

Es gibt mehrere verfügbare Bildschirmlesegeräte:

- Einige sind kostenpflichtige kommerzielle Produkte, wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows).
- Einige sind kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows und macOS) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Einige sind ins Betriebssystem integriert, wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS und iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf Chromebooks) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Im Allgemeinen sind Bildschirmlesegeräte separate Apps, die auf dem Host-Betriebssystem laufen und sowohl Webseiten als auch Inhalte in anderen Apps lesen können (das ist nicht immer der Fall; ChromeVox ist zum Beispiel eine Browser-Erweiterung). Bildschirmlesegeräte haben tendenziell einige Unterschiede in ihrem genauen Verhalten und ihren Steuerungen, daher müssen Sie die Dokumentation des von Ihnen gewählten Bildschirmlesegeräts konsultieren, um alle Details zu erhalten. Dennoch funktionieren sie im Grunde auf die gleiche Weise.

In den nächsten Abschnitten werden wir einige Tests mit ein paar verschiedenen Bildschirmlesegeräten durchführen, um Ihnen eine allgemeine Vorstellung davon zu geben, wie sie funktionieren und wie Sie mit ihnen testen können.

> [!NOTE]
> WebAIMs [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/) bietet einige nützliche Informationen zur Nutzung von Bildschirmlesern und was am besten für Bildschirmleser funktioniert. Auch die [Screen Reader User Survey #10 Results](https://webaim.org/projects/screenreadersurvey10/#used) enthält einige interessante Statistiken zur Nutzung von Bildschirmlesern.

#### VoiceOver

VoiceOver (VO) ist kostenlos mit Apple Mac/iPhone/iPad verfügbar, daher ist es nützlich zum Testen auf Desktop/Mobil, wenn Sie Apple-Produkte verwenden. Wir haben es auf macOS auf einem MacBook Pro getestet.

Um es einzuschalten, drücken Sie <kbd>Cmd</kbd> + <kbd>F5</kbd>. Wenn Sie VO zuvor nicht verwendet haben, wird Ihnen ein Willkommensbildschirm angezeigt, auf dem Sie wählen können, ob Sie VO starten oder nicht, und ein ziemlich nützliches Tutorial durchlaufen können, um zu lernen, wie man es benutzt. Um es auszuschalten, drücken Sie <kbd>Cmd</kbd> + <kbd>F5</kbd> erneut.

> [!NOTE]
> Sie sollten das Tutorial mindestens einmal durchgehen — es ist eine wirklich nützliche Möglichkeit, VO zu lernen.

Wenn VO eingeschaltet ist, sieht das Display größtenteils gleich aus, aber Sie sehen ein schwarzes Kästchen unten links auf dem Bildschirm, das Informationen darüber enthält, was VO derzeit ausgewählt hat. Die aktuelle Auswahl wird ebenfalls hervorgehoben, mit einem schwarzen Rahmen — diese Hervorhebung wird als **VO-Cursor** bezeichnet.

![Ein Beispiel-Screenshot, der die Barrierefreiheitsprüfung mit VoiceOver auf der MDN-Homepage zeigt. Unten links im Bild ist eine Hervorhebung der auf der Webseite ausgewählten Informationen.](voiceover.png)

Um VO zu verwenden, werden Sie viel Gebrauch vom "VO-Modifikator" machen — dies ist eine Taste oder Tastenkombination, die Sie zusätzlich zu den eigentlichen VO-Tastenkombinationen drücken müssen, damit diese funktionieren. Der Einsatz eines Modifikators wie diesem ist üblich bei Bildschirmlesern, um deren Befehle vor Kollisionen mit anderen Befehlen zu schützen. Im Falle von VO kann der Modifikator entweder <kbd>CapsLock</kbd> oder <kbd>Ctrl</kbd> + <kbd>Option</kbd> sein.

VO hat viele Tastaturbefehle, und wir werden sie hier nicht alle auflisten. Die grundlegenden, die Sie für das Testen von Webseiten benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastenkombinationen bedeutet "VO" "der VoiceOver-Modifikator".

<table class="standard-table no-markdown">
  <caption>
    Allgemeine VoiceOver-Tastenkombinationen
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
        Elemente auswählen/aktivieren, die vom VO-Cursor hervorgehoben sind. Dies umfasst Elemente, die im Rotor ausgewählt wurden (siehe unten).
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>Shift</kbd> + Abwärtspfeil</td>
      <td>
        In eine Gruppe von Elementen wie eine HTML-Tabelle oder ein Formular bewegen. Einmal in einer Gruppe können Sie sich darin bewegen und Elemente darin mit den obigen Befehlen wie gewohnt auswählen.
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>Shift</kbd> + Aufwärtspfeil</td>
      <td>Aus einer Gruppe heraus bewegen.</td>
    </tr>
    <tr>
      <td>VO + <kbd>C</kbd></td>
      <td>(wenn sich in einer Tabelle) Kopfzeile der aktuellen Spalte lesen.</td>
    </tr>
    <tr>
      <td>VO + <kbd>R</kbd></td>
      <td>(wenn sich in einer Tabelle) Kopfzeile der aktuellen Zeile lesen.</td>
    </tr>
    <tr>
      <td>VO + <kbd>C</kbd> + <kbd>C</kbd> (zwei Cs in Folge)</td>
      <td>
        (wenn sich in einer Tabelle) Ganze aktuelle Spalte einschließlich Kopfzeile lesen.
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>R</kbd> + <kbd>R</kbd> (zwei Rs in Folge)</td>
      <td>
        (wenn sich in einer Tabelle) Ganze aktuelle Zeile einschließlich der Kopfzeilen, die zu jeder Zelle gehören, lesen.
      </td>
    </tr>
    <tr>
      <td>VO + linke Cursortaste, VO + rechte Cursortaste</td>
      <td>
        (wenn sich in einigen horizontalen Optionen, z.B. einem Datumsauswahler)
        Zwischen Optionen bewegen.
      </td>
    </tr>
    <tr>
      <td>VO + aufwärts Cursortaste, VO + abwärts Cursortaste</td>
      <td>
        (wenn sich in einigen horizontalen Optionen, z.B. einem Datumsauswahler)
        Aktuelle Option ändern.
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>U</kbd></td>
      <td>
        Öffnen Sie den Rotor, der Listen von Überschriften, Links, Formularelemente usw. zur einfachen Navigation anzeigt.
      </td>
    </tr>
    <tr>
      <td>VO + linke Cursortaste, VO + rechte Cursortaste</td>
      <td>
        (wenn sich im Rotor) Zwischen verschiedenen Listen im Rotor wechseln.
      </td>
    </tr>
    <tr>
      <td>VO + aufwärts Cursortaste, VO + abwärts Cursortaste</td>
      <td>
        (wenn sich im Rotor) Zwischen verschiedenen Elementen in der aktuellen Rotenliste wechseln.
      </td>
    </tr>
    <tr>
      <td><kbd>Esc</kbd></td>
      <td>(wenn sich im Rotor) Rotor verlassen.</td>
    </tr>
    <tr>
      <td><kbd>Ctrl</kbd></td>
      <td>(wenn VO spricht) Sprache pausieren/fortsetzen.</td>
    </tr>
    <tr>
      <td>VO + <kbd>Z</kbd></td>
      <td>Den letzten gesprochenen Teil wiederholen.</td>
    </tr>
    <tr>
      <td>VO + <kbd>D</kbd></td>
      <td>Zum Dock des Mac gehen, um dort Apps auszuwählen, die ausgeführt werden sollen.</td>
    </tr>
  </tbody>
</table>

Das scheint eine Menge an Befehlen zu sein, aber es ist nicht so schlimm, wenn man sich daran gewöhnt, und VO gibt Ihnen regelmäßig Erinnerungen an die zu verwendenden Befehle in bestimmten Situationen. Spielen Sie jetzt mit VO herum; dann können Sie mit einigen unserer Beispiele im Abschnitt [Bildschirmleser-Testen](#bildschirmleser-testen) weitergehen.

#### NVDA

NVDA ist nur für Windows verfügbar und Sie müssen es installieren.

1. Laden Sie NVDA von [nvaccess.org](https://www.nvaccess.org/) herunter und installieren Sie es dann. Sie können wählen, ob Sie eine Spende leisten oder es kostenlos herunterladen möchten; Sie müssen auch Ihre E-Mail-Adresse angeben, bevor Sie es herunterladen können.
2. Um NVDA nach der Installation zu starten, doppelklicken Sie auf die Programmdatei/das Verknüpfungssymbol oder verwenden Sie die Tastenkombination <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd>. Sie sehen beim Starten den NVDA-Willkommensdialog. Hier können Sie ein paar Optionen wählen und dann den _OK_-Button drücken, um loszulegen.

NVDA wird jetzt auf Ihrem Computer aktiv sein.

Um NVDA zu verwenden, werden Sie viel Gebrauch vom "NVDA-Modifikator" machen — der Taste, die Sie zusätzlich zu den eigentlichen NVDA-Tastenkombinationen drücken müssen, damit diese funktionieren. Der NVDA-Modifikator kann entweder <kbd>Insert</kbd> (standardmäßig) oder <kbd>CapsLock</kbd> (kann durch Aktivieren des ersten Kontrollkästchens im NVDA-Willkommensdialog ausgewählt werden, bevor Sie auf _OK_ drücken) sein.

> [!NOTE]
> NVDA ist subtiler als VoiceOver in Bezug darauf, wie es hervorhebt, wo es sich befindet und was es tut. Wenn Sie durch Überschriften, Listen usw. scrollen, werden die Elemente, auf denen Sie ausgewählt sind, im Allgemeinen mit einem subtilen Umriss hervorgehoben, aber das ist nicht immer der Fall für alle Dinge. Wenn Sie sich komplett verlieren, können Sie `Ctrl + F5` drücken, um die aktuelle Seite zu aktualisieren und von oben zu beginnen.

NVDA hat viele Tastaturbefehle, und wir werden sie hier nicht alle auflisten. Die grundlegenden, die Sie für das Testen von Webseiten benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastenkombinationen bedeutet "NVDA" "der NVDA-Modifikator".

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
      <td>NVDA + <kbd>Q</kbd></td>
      <td>NVDA wieder ausschalten, nachdem Sie es gestartet haben.</td>
    </tr>
    <tr>
      <td>NVDA + Aufwärtspfeil</td>
      <td>Die aktuelle Zeile lesen.</td>
    </tr>
    <tr>
      <td>NVDA + Abwärtspfeil</td>
      <td>Beginnen Sie mit dem Lesen an der aktuellen Position.</td>
    </tr>
    <tr>
      <td>Aufwärtspfeil und Abwärtspfeil oder <kbd>Shift</kbd> + <kbd>Tab</kbd> und <kbd>Tab</kbd></td>
      <td>Zum vorherigen/nächsten Element auf der Seite wechseln und es lesen.</td>
    </tr>
    <tr>
      <td>Linkspfeil und Rechtspfeil</td>
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
        Zum vorherigen/nächsten Dokument-Landmark (z.B. <code>&#x3C;nav></code>) wechseln und es lesen.
      </td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>1</kbd>–<kbd>6</kbd> und <kbd>1</kbd>–<kbd>6</kbd></td>
      <td>Zum vorherigen/nächsten Überschrift (Stufe 1–6) wechseln und sie lesen.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>F</kbd> und <kbd>F</kbd></td>
      <td>Zum vorherigen/nächsten Formulareingabefeld wechseln und es fokussieren.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>T</kbd> und <kbd>T</kbd></td>
      <td>Zum vorherigen/nächsten Datentabelle wechseln und sie fokussieren.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>B</kbd> und <kbd>B</kbd></td>
      <td>Zum vorherigen/nächsten Button wechseln und sein Etikett lesen.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>L</kbd> und <kbd>L</kbd></td>
      <td>Zur vorherigen/nächsten Liste wechseln und ihr erstes Listenelement lesen.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>I</kbd> und <kbd>I</kbd></td>
      <td>Zum vorherigen/nächsten Listenelement wechseln und es lesen.</td>
    </tr>
    <tr>
      <td><kbd>Enter</kbd>/<kbd>Return</kbd></td>
      <td>
        (wenn Link/Button oder anderer aktivierbarer Punkt ausgewählt ist) Element aktivieren.
      </td>
    </tr>
    <tr>
      <td>NVDA + <kbd>Leertaste</kbd></td>
      <td>
        (wenn Formular ausgewählt) Formular betreten, um einzelne Elemente auszuwählen, oder Formular verlassen, falls Sie bereits drin sind.
      </td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>Tab</kbd> und <kbd>Tab</kbd></td>
      <td>(wenn im Formular) Zwischen Formulareingabefeldern wechseln.</td>
    </tr>
    <tr>
      <td>Aufwärtspfeil und Abwärtspfeil</td>
      <td>
        (wenn im Formular) Formulareingabewerte ändern (im Fall von Steuerungen wie Auswahlboxen).
      </td>
    </tr>
    <tr>
      <td><kbd>Leertaste</kbd></td>
      <td>(wenn im Formular) Gewählten Wert auswählen.</td>
    </tr>
    <tr>
      <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + Cursortasten</td>
      <td>(wenn eine Tabelle ausgewählt ist) Zwischen den Tabellenzellen wechseln.</td>
    </tr>
  </tbody>
</table>

### Bildschirmleser-Testen

Jetzt, da Sie sich an die Verwendung eines Bildschirmlesegeräts gewöhnt haben, möchten wir, dass Sie es verwenden, um einige schnelle Barrierefreiheitsprüfungen durchzuführen, um eine Vorstellung davon zu bekommen, wie Bildschirmlesegeräte mit guten und schlechten Webseiten-Funktionen umgehen:

- Sehen Sie sich [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) an und beachten Sie, wie die Überschriften vom Bildschirmlesegerät gefunden werden und zur Navigation genutzt werden können. Sehen Sie sich nun [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) an und beachten Sie, wie das Bildschirmlesegerät keine dieser Informationen erhält. Stellen Sie sich vor, wie ärgerlich dies bei der Navigation auf einer wirklich langen Textseite wäre.
- Sehen Sie sich [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) an und beachten Sie, wie sie sinnvoll sind, wenn sie aus dem Kontext betrachtet werden, beispielsweise im VoiceOver-Rotor. Dies ist bei [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) nicht der Fall — sie sind alle nur "hier klicken".
- Sehen Sie sich [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) an und beachten Sie, wie die Formulareingabefelder mit ihren Beschriftungen beschrieben werden, da wir die entsprechenden {{htmlelement("label")}}-Elemente hinzugefügt haben. Bei [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) erhalten sie eine wenig hilfreiche Beschriftung wie "leer".
- Sehen Sie sich unser Beispiel [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) an und sehen Sie, wie das Bildschirmlesegerät in der Lage ist, Spalten und Zeilen von Inhalten zuzuordnen und sie alle zusammen vorzulesen, weil wir die Tabellenköpfe richtig definiert haben. In [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) können keine der Zellen zugeordnet werden. Beachten Sie, dass NVDA etwas seltsam zu reagieren scheint, wenn Sie nur eine einzige Tabelle auf einer Seite haben; Sie können stattdessen [WebAIMs Tabellen-Testseite](https://webaim.org/articles/nvda/tables.htm) ausprobieren.
- Werfen Sie einen Blick auf [WAI-ARIA-Live-Bereiche-Beispiel](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm) und fahren Sie fort, wie der Bildschirmleser weiterhin den ständig aktualisierenden Bereich vorliest, während er aktualisiert wird.

## Andere Werkzeuge

Bildschirmlesegeräte sind eine der am häufigsten anzutreffenden Arten von unterstützender Technologie, auf die Sie als Webentwickler stoßen werden, aber es existieren auch andere AT-Typen, und es ist nützlich, mit den potenziell von Benutzern verwendeten Mitteln zur Anzeige Ihrer Inhalte vertraut zu sein. Dieser Abschnitt fasst einige von ihnen zusammen.

### Große Text- oder Brailletastaturen

Es ist möglich, große Texttastaturen zu erhalten, die für sehbehinderte oder ältere Benutzer entwickelt wurden, sowie Brailletastaturen, die für blinde und schwer sehbehinderte Menschen verwendbar sind.

### Alternative Zeigegeräte

Wenn Sie an Zeigegeräte denken, sind Mäuse das naheliegendste Beispiel, aber es gibt andere Zeigegeräte, die es ermöglichen, Benutzer mit verschiedenen Mobilitätseinschränkungen zu navigieren:

- Trackballs: Eine Art umgedrehte Mäuse, bestehen Trackballs aus einer montierten Kugel, die auf Ihrem Schreibtisch stationär bleibt, die Sie rollen können, um den Zeiger zu bewegen. Sie gelten als präziser und leichter zu handhaben als Mäuse, insbesondere für Menschen mit eingeschränkter Handbewegung.
- Joysticks: Ein Steuerknüppel, der bewegt werden kann, um den Zeiger zu bewegen. Joysticks sind weniger präzise als Trackballs, aber von Menschen mit einer breiten Palette von physischen Behinderungen nutzbar, selbst bei schweren Behinderungen.
- Touchpads: Die meisten modernen Laptops haben ein Touchpad (manchmal Trackpad genannt) — ein flacher taktiler Sensor, der es Ihnen ermöglicht, den Zeiger mit einem Finger zu bewegen, so wie auch Multi-Finger-Gesten ähnlich wie mobile Gesten. Sie können externe Touchpads für Geräte kaufen, die keine internen haben. Einige Menschen empfinden sie als präziser als Mäuse.

### Bildschirmlupen

Bildschirmlupen bieten sehbehinderten Benutzern eine vergrößerte Ansicht des Displays ihres Geräts, um ihnen zu ermöglichen, den Inhalt des Geräts besser zu verstehen und mit ihm zu interagieren, sowie andere Funktionen wie Farbkorrekturen, um mit Farbenblindheit umzugehen, und das Anpassen der Größe von Mauszeigern und Textcursoren, um sie besser sichtbar zu machen.

Es gibt sowohl Software- als auch Hardware-Bildschirmlupen:

- Die meisten modernen Betriebssysteme verfügen über eine integrierte App zur Vergrößerung des Bildschirms oder von Teilen davon, wie z.B. Zoom auf dem Mac oder Magnifier auf Windows. Sie bieten auch Optionen zur universellen Erhöhung der Textgröße, der Größe des Mauszeigers usw. Anbietern von Drittanbietern sind ebenfalls verfügbar.
- Hardware-Bildschirmlupen bestehen meist aus einem separaten Bildschirm, der neben oder vor dem Gerätebildschirm sitzt und eine größere Version davon oder eine vergrößerte Version eines Teils davon projiziert.

### Spracherkennungssoftware

Sprach- (oder Sprach-) Erkennungssoftware ermöglicht es Ihnen, Sprachbefehle zur Steuerung Ihres Geräts zu geben und/oder den Text von E-Mails oder Dokumenten vorzulesen, und der Computer schreibt den Text für Sie. Dies ist sehr nützlich für Menschen, die keine Tastatur oder andere Steuermechanismen verwenden können.

Moderne Betriebssysteme bieten Funktionen, die dies ermöglichen (z.B. Diktat auf dem Mac oder Sprachzugriff auf Windows), und es gibt auch Drittanbieter-Apps, von Desktop-Apps bis hin zu Browser-Erweiterungen.

### Schaltflächensteuerungen

Schaltflächensteuerungen bieten einen Mechanismus zur Interaktion mit Geräten für Nutzer mit sehr eingeschränkter Mobilität oder [kognitiven Beeinträchtigungen](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility).

Eine Schaltflächensteuerungs-Setup enthält in der Regel zwei Teile:

- Ein physischer Schalter oder Button zum Aktivieren von Optionen auf dem Gerät. Sie können auch Schaltflächenfunktionalität regulären Gerätetasten (wie Lautstärkeregler) oder Tasten auf einer Tastatur zuweisen.
- Ein Gerätemodus oder ein Drittanbieter-Software-Add-on, das das Gerät mit der Schaltfläche oder Button-Steuerung kompatibel macht. Zum Beispiel Switch Access auf Android ist ein Modus, bei dem die verschiedenen Optionen in verschiedenen Situationen (zum Beispiel Apps auf dem Startbildschirm) durchgegangen werden und dann die gewünschte Option mit einem Schalter oder Button ausgewählt werden kann, wenn sie erreicht ist.

## Planung für Barrierefreiheit

Sie sollten sorgfältig über Barrierefreiheit nachdenken, gleich zu Beginn eines jeden Projekts. Stellen Sie sicher, dass Barrierefreiheit in der anfänglichen Designphase berücksichtigt wird, damit Sie:

- Die Grundlagen richtig verstehen, beispielsweise durch [gute Dokumentenstruktur](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_well-structured_text_content) und durch das Bereitstellen [alternativer Texte](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) für Bilder.
- Den besten Ansatz für Funktionen sorgfältig in Betracht ziehen, die wahrscheinlich Barrierefreiheitsprobleme verursachen. Zum Beispiel werden Audio und Video für einige Menschen definitiv unzugänglich sein, sodass Sie Alternativen wie [Transkriptionen](/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts) und [Textspuren](/de/docs/Learn_web_development/Core/Accessibility/Multimedia#video_text_tracks) bereitstellen sollten.
- Teure Fehler später vermeiden. Probleme, die am Ende eines Projekts aufgedeckt werden, sind tendenziell viel zeitaufwändiger und teurer zu beheben als Probleme, die frühzeitig erkannt werden.

## Benutzertests

Sie können sich nicht nur auf automatisierte Werkzeuge verlassen, um Barrierefreiheitsprobleme auf Ihrer Website zu bestimmen. Jedes Website-Projekt benötigt eine [Benutzer-Teststrategie](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies#user_testing) und es wird dringend empfohlen, dass Sie einige Barrierefreiheits-Benutzergruppen einbeziehen:

- Versuchen Sie, einige Bildschirmleser-Benutzer, einige ausschließlich Tastaturnutzer, einige Benutzer, die nicht hören können, Benutzer mit Bewegungseinschränkungen usw. einzubeziehen.
- Lassen Sie jede Gruppe die Website allgemein ausprobieren, beginnend mit dem Betrachten der Startseite und anderer Hauptseiten und dem Ausprobieren einiger der primären Funktionen. Typische Beispiele sind der Kauf eines Produkts oder das Buchen einer Reservierung. Fragen Sie sie, was ihre Eindrücke waren und welche Probleme sie hatten.
- Lassen Sie sie sich als Nächstes auf Funktionen oder Workflows konzentrieren, bei denen Sie spezifische Bedenken in Bezug auf die Barrierefreiheit haben, z.B. komplexe Formularelemente oder Videoplayer. Fragen Sie sie, was aus ihrer Sicht an Benutzererfahrung fehlt und was sie gerne verändert sehen möchten.

Einige Projekte haben ein Budget, um Testgruppen zu zahlen, während andere sich auf unbezahlte Freiwillige oder sogar Kollegen und Freunde verlassen.

## Barrierefreiheits-Testcheckliste

Die folgende Liste bietet eine Checkliste, die Sie befolgen können, um sicherzustellen, dass Sie die empfohlenen Barrierefreitests für Ihr Projekt durchgeführt haben:

1. Stellen Sie sicher, dass Ihr HTML so semantisch korrekt wie möglich ist. [Es validieren](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML#html_validation) ist ein guter Start, ebenso wie die Verwendung eines [Prüfwerkzeugs](#prüfwerkzeuge).
2. Überprüfen Sie, dass Ihr Inhalt Sinn ergibt, wenn das CSS ausgeschaltet ist.
3. Stellen Sie sicher, dass Ihre Funktionalität tastaturfreundlich ist (siehe [Verwenden Sie semantische UI-Steuerelemente, wo möglich](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) für mehr Details). Testen Sie die Verwendung von Tab, Return/Enter, usw.
4. Stellen Sie sicher, dass Ihre nicht-text-basierten Inhalte [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) haben. Ein [Prüfwerkzeug](#prüfwerkzeuge) ist gut für das Auffangen solcher Probleme.
5. Stellen Sie sicher, dass der [Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast) auf Ihrer Seite akzeptabel ist, indem Sie ein geeignetes Prüfwerkzeug verwenden.
6. Stellen Sie sicher, dass [verborgene Inhalte](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) von Bildschirmlesern sichtbar sind.
7. Stellen Sie sicher, dass die Funktionalität, wo immer möglich, ohne JavaScript nutzbar ist.
8. Verwenden Sie ARIA zur Verbesserung der Barrierefreiheit, wo es angemessen ist.
9. Führen Sie Ihre Website durch ein [Prüfwerkzeug](#prüfwerkzeuge).
10. Testen Sie sie mit einem Bildschirmlesegerät.
11. Fügen Sie irgendwo auf Ihrer Seite zugänglich eine Erklärung zu Ihrer Barrierefreiheitspolitik hinzu, die beschreibt, was Sie getan haben.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel eine Vorstellung von den Arten von Tools gegeben, die Sie verwenden können, um Barrierefreiheitsprobleme zu beheben, sowie von der unterstützenden Technologie, die von Menschen mit Behinderungen genutzt wird, um auf das Web zuzugreifen.

Im nächsten Artikel werden wir uns ansehen, wie man barrierefreies HTML schreibt.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}
