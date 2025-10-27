---
title: Barrierefreiheit-Tools und unterstützende Technologien
short-title: Accessibility tools
slug: Learn_web_development/Core/Accessibility/Tooling
l10n:
  sourceCommit: df5c06337227656e53af3dfb5b544c1c1cd0e6c7
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}

Als nächstes wenden wir uns den Barrierefreiheit-Tools zu, die Informationen über die Arten von Tools bereitstellen, die Sie zur Lösung von Barrierefreiheitsproblemen verwenden können. Außerdem helfen sie Ihnen, die **assistierenden Technologien** zu verstehen, die von Menschen mit Behinderungen genutzt werden, um im Web zu surfen. Sie werden die hier beschriebenen Tools in den folgenden Artikeln verwenden.

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
          <li>Vertrautheit mit den Arten von Tools, die Sie zur Lösung von Barrierefreiheitsproblemen verwenden können, beispielsweise Auditing-Tools.</li>
          <li>Einrichten von Screenreadern und deren Nutzung zur Website-Überprüfung auf Desktop und Mobil.</li>
          <li>Vertrautheit mit anderen Arten assistiver Technologien wie Großtext- oder Braille-Tastaturen, alternativen Zeigegeräten und Bildschirmlupen.</li>
          <li>Die Bedeutung von Benutzertests neben automatisierten Tests.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheits-Tools

Sehen wir uns die Tools und Techniken an, die Sie zur Überprüfung der Barrierefreiheit von Websites und zur Behebung der von Ihnen entdeckten Probleme verwenden können.

### Testen der Quellcode-Reihenfolge

Ihr Inhalt sollte in seiner Quellcode-Reihenfolge logisch sinnvoll angeordnet sein – Sie können ihn später immer mit CSS anders anzeigen lassen, aber Sie sollten die zugrunde liegende Struktur von Anfang an korrekt erstellen. Dies liegt daran, dass assistierende Technologien den Website-Inhalt basierend auf der Quellcode-Reihenfolge lesen, und behinderte Menschen häufig Teile des CSS ändern oder deaktivieren, um den Inhalt besser leserlich zu machen (häufige Beispiele sind das Erhöhen der Schriftgröße und das Anwenden von Farbkontrastschemata).

Um die Quellcode-Reihenfolge zu testen, können Sie das CSS einer Website deaktivieren und sehen, wie verständlich sie ohne es ist. Sie könnten dies manuell tun, indem Sie das CSS einfach aus Ihrem Code entfernen, aber der einfachste Weg ist es, Browser-Funktionen zu nutzen, zum Beispiel:

- Firefox: Wählen Sie _View > Page Style > No Style_ aus dem Hauptmenü.
- Safari: [Öffnen Sie die Entwickler-Tools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser), klicken Sie auf die Schaltfläche _Device Settings_ oben links im Entwickler-Tools-Panel (sieht aus wie ein Computermonitor) und aktivieren Sie das Kontrollkästchen "Disable CSS" im angezeigten Panel.
- Chrome/Edge: Installieren Sie die [Web Developer Toolbar](https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm) Erweiterung und starten Sie den Browser neu. Klicken Sie auf das "Web Developer" Zahnrad, das jetzt im Extensions-Menü verfügbar sein sollte, und wählen Sie dann _CSS > Disable All Styles_.

### Farbkontrastprüfer

Wenn Sie ein Farbschema für Ihre Website wählen, sollten Sie sicherstellen, dass die Textfarbe (Vordergrund) gut mit der Hintergrundfarbe kontrastiert. Ihr Design könnte zwar cool aussehen, aber es ist nutzlos, wenn die Leute Ihren Inhalt nicht lesen können. Verwenden Sie ein Tool wie den [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM, um zu überprüfen, ob Ihr Schema ausreichend kontrastiert.

Ein weiterer Tipp ist es, zu vermeiden, nur Farben zu verwenden, um Wegweiser oder wichtige Informationen hervorzuheben, da dies von Menschen mit Sehbehinderungen wie Farbenblindheit übersehen werden könnte. Anstatt beispielsweise erforderliche Formularfelder mit Rot zu kennzeichnen, können Sie sie mit einem Sternchen und in Rot markieren.

> [!NOTE]
> Ein hoher Kontrast ermöglicht es auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm verwendet, Seiten besser zu lesen, wenn er sich in einem hellen Umfeld, wie Sonnenlicht, befindet.

### Auditing-Tools

Es sind mehrere Auditing-Tools verfügbar, in die Sie Ihre Webseiten einspeisen können. Sie werden diese durchsuchen und eine Liste der auf der Seite vorhandenen Barrierefreiheitsprobleme zurückgeben. Lassen Sie uns [Wave](https://wave.webaim.org/) als Beispiel betrachten, ein Online-Tool zur Barrierefreiheitsprüfung, das eine Webadresse akzeptiert und eine annotierte Ansicht dieser Seite mit hervorgehobenen Barrierefreiheitsproblemen zurückgibt.

1. Gehen Sie zur [Wave-Homepage](https://wave.webaim.org/).
2. Geben Sie die URL unseres [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) Beispiel in das Texteingabefeld oben auf der Seite ein. Drücken Sie dann die Eingabetaste oder klicken/tippen Sie auf den Pfeil am rechten Rand des Eingabefeldes.
3. Die Site sollte die vorhandenen Barrierefreiheitsprobleme hervorheben. Klicken Sie auf die angezeigten Symbole, um weitere Informationen zu jedem der von der Wave-Bewertung identifizierten Probleme zu erhalten.

Weitere Auditing-Tools, die es wert sind, überprüft zu werden:

- [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)
- [ANDI bookmarklet](https://www.ssa.gov/accessibility/andi/help/install.html)
- [Google Lighthouse accessibility audits](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)

> [!NOTE]
> Solche Tools sind nicht gut genug, um alle Ihre Barrierefreiheitsprobleme allein zu lösen. Sie benötigen eine Kombination aus diesen, Wissen und Erfahrung, Benutzertests usw., um ein vollständiges Bild zu erhalten.

[Deque's aXe tool](https://www.deque.com/axe/) geht etwas weiter als die oben erwähnten Auditing-Tools. Wie die anderen überprüft es Seiten und gibt Barrierefreiheitsfehler zurück. Die wohl nützlichste Form sind die Browser-Erweiterungen:

- [aXe für Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe für Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Diese fügen den Entwickler-Tools des Browsers einen Barrierefreiheits-Tab hinzu. Beispielsweise haben wir die Firefox-Version installiert und sie verwendet, um unser [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) Beispiel zu überprüfen. Wir erhielten die folgenden Ergebnisse:

![Ein Screenshot der von dem Axe-Tool identifizierten Barrierefreiheitsprobleme.](axe-screenshot.png)

aXe kann auch mit `npm` installiert werden und kann mit Aufgabenplanern wie [Grunt](https://gruntjs.com/) und [Gulp](https://gulpjs.com/), Automatisierungsframeworks wie [Selenium](https://www.selenium.dev/) und [Cucumber](https://cucumber.io/), Unit-Test-Frameworks wie [Jasmine](https://jasmine.github.io/) und mehr integriert werden (siehe erneut die [Hauptseite von aXe](https://www.deque.com/axe/) für Details).

## Screenreader

Eines der am häufigsten verwendeten Arten von assistierenden Technologien (AT) von behinderten Menschen – und eines der häufigsten, das Sie verwenden werden, um die Zugänglichkeit Ihrer Webseiten zu testen – sind **Screenreader**. Diese sind Software, die Webseite-Inhalte oder Inhalte aus anderen auf dem Betriebssystem installierten Apps laut vorliest. Screenreader ermöglichen es Menschen, Computer zu nutzen, ohne visuellen Inhalt sehen zu müssen.

Webbrowser stellen Screenreadern (und anderen AT) Informationen über den Inhalt der Seite über eine Darstellung namens {{Glossary("Accessibility_tree", "accessibility tree")}} bereit. Diese liefert semantische Informationen wie Namen und Beschreibungen von Elementen, deren Zweck oder Rolle (ist es eine Schaltfläche oder ein Eingabefeld?) und ob sie sich in einem bestimmten Zustand befinden (zum Beispiel, ob ein Dialogfeld geöffnet oder geschlossen ist).

Diese Informationen mögen im Fall eines Textabsatzes trivial sein, der ungefähr so klingt, wie er geschrieben ist, aber sie können kompliziert werden, wenn es um Benutzeroberflächen-Funktionen wie ein Dropdown-Menü oder einen Videoplayer geht. Deshalb ist es sehr wichtig, semantisches HTML korrekt zu verwenden, worauf Sie im nächsten Artikel in diesem Modul detailliert eingehen werden. Wenn Sie Inhalte mit dem falschen Element kennzeichnen, kann dies Screenreader-Benutzer verwirren.

Stellen Sie sicher, dass Sie einen oder zwei Screenreader auf Ihrem Entwicklungsrechner installiert haben, und versuchen Sie, Ihre Lieblingswebseiten über einen Screenreader zu verwenden, wie unten besprochen. Das Verständnis dafür, wie sehbehinderte Menschen das Web nutzen, ist entscheidend für das Design von Produkten, die für alle besser funktionieren.

### Welche Screenreader sind verfügbar?

Es gibt mehrere verfügbare Screenreader:

- Einige sind kostenpflichtige kommerzielle Produkte wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows).
- Einige sind kostenlose Produkte wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows und macOS) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Einige sind in das Betriebssystem integriert wie [VoiceOver](https://www.apple.com/accessibility/features/?vision) (macOS und iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf Chromebooks) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Im Allgemeinen sind Screenreader separate Apps, die auf dem Host-Betriebssystem ausgeführt werden und sowohl Webseiten als auch Inhalte in anderen Apps lesen können (das ist nicht immer der Fall; ChromeVox ist zum Beispiel eine Browser-Erweiterung). Screenreader weisen in genauem Verhalten und Bedienelementen einige Unterschiede auf, daher müssen Sie die Dokumentation für Ihren gewählten Screenreader konsultieren, um alle Details zu erhalten. Allerdings arbeiten sie im Wesentlichen auf dieselbe Weise.

In den nächsten Abschnitten werden wir einige Tests mit ein paar verschiedenen Screenreadern durchgehen, um Ihnen eine allgemeine Vorstellung davon zu geben, wie sie funktionieren und wie Sie damit testen.

> [!NOTE]
> WebAIM's [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/) bietet nützliche Informationen über die Nutzung von Screenreadern und was am besten mit ihnen funktioniert. Siehe auch [Screen Reader User Survey #10 Results](https://webaim.org/projects/screenreadersurvey10/#used) für interessante Nutzungsstatistiken.

#### VoiceOver

VoiceOver (VO) ist kostenlos mit Apple Mac/iPhone/iPad erhältlich, daher ist es nützlich für Tests auf Desktop/Mobil, wenn Sie Apple-Produkte verwenden. Wir haben es auf macOS auf einem MacBook Pro getestet.

Um es einzuschalten, drücken Sie <kbd>Cmd</kbd> + <kbd>F5</kbd>. Wenn Sie VO noch nie verwendet haben, wird Ihnen ein Begrüßungsbildschirm angezeigt, auf dem Sie wählen können, ob Sie VO starten möchten, und ein nützliches Tutorial durchlaufen können, um zu lernen, wie man es benutzt. Um es auszuschalten, drücken Sie erneut <kbd>Cmd</kbd> + <kbd>F5</kbd>.

> [!NOTE]
> Sie sollten das Tutorial mindestens einmal durchlaufen – es ist ein wirklich nützlicher Weg, VO zu lernen.

Wenn VO eingeschaltet ist, sieht das Display größtenteils gleich aus, aber Sie sehen ein schwarzes Feld unten links auf dem Bildschirm, das Informationen darüber enthält, was VO derzeit ausgewählt hat. Die aktuelle Auswahl wird ebenfalls hervorgehoben, mit einem schwarzen Rahmen – dieses Highlight wird als **VO-Cursor** bezeichnet.

![Ein Beispiel-Screenshot, der das Testen der Barrierefreiheit mit VoiceOver auf der MDN-Homepage zeigt. Die Informationen auf der Webseite sind unten links im Bild hervorgehoben.](voiceover.png)

Um VO zu verwenden, werden Sie viel Gebrauch vom "VO-Modifikator" machen – dies ist eine Taste oder Tastenkombination, die Sie zusätzlich zu den tatsächlichen VO-Tastenkombinationen drücken müssen, damit sie funktionieren. Die Verwendung eines Modifikators wie diesen ist bei Screenreadern üblich, um zu verhindern, dass ihre Befehle mit anderen Befehlen kollidieren. Im Falle von VO kann der Modifikator entweder <kbd>CapsLock</kbd> oder <kbd>Ctrl</kbd> + <kbd>Option</kbd> sein.

VO hat viele Tastaturbefehle und wir werden sie hier nicht alle auflisten. Die grundlegenden, die Sie für Webseiten-Tests benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastenkombinationen bedeutet "VO" "der VoiceOver-Modifikator".

<table class="standard-table no-markdown">
  <caption>
    Häufige VoiceOver-Tastenkombinationen
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
      <td>Bewegen Sie den VO-Cursor nach oben, rechts, unten oder links.</td>
    </tr>
    <tr>
      <td>VO + Leertaste</td>
      <td>
        Wählen/aktivieren Sie Elemente, die vom VO-Cursor hervorgehoben sind. Dies schließt Elemente ein,
        die im Rotor ausgewählt sind (siehe unten).
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>Shift</kbd> + Abwärtspfeil</td>
      <td>
        Ziehen Sie in eine Gruppe von Elementen, beispielsweise eine HTML-Tabelle oder ein Formular. Sobald
        Sie sich in einer Gruppe befinden, können Sie sich in der Gruppe bewegen und Elemente auswählen,
        indem Sie die obigen Befehle wie gewohnt verwenden.
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>Shift</kbd> + Aufwärtspfeil</td>
      <td>Verlassen Sie eine Gruppe.</td>
    </tr>
    <tr>
      <td>VO + <kbd>C</kbd></td>
      <td>(wenn sich in einer Tabelle) Lesen Sie die Kopfzeile der aktuellen Spalte.</td>
    </tr>
    <tr>
      <td>VO + <kbd>R</kbd></td>
      <td>(wenn sich in einer Tabelle) Lesen Sie die Kopfzeile der aktuellen Zeile.</td>
    </tr>
    <tr>
      <td>VO + <kbd>C</kbd> + <kbd>C</kbd> (zwei Cs in Folge)</td>
      <td>
        (wenn sich in einer Tabelle) Lesen Sie die gesamte aktuelle Spalte einschließlich der Kopfzeile.
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>R</kbd> + <kbd>R</kbd> (zwei Rs in Folge)</td>
      <td>
        (wenn sich in einer Tabelle) Lesen Sie die gesamte aktuelle Zeile einschließlich der Kopfzeilen,
        die zu jeder Zelle passen.
      </td>
    </tr>
    <tr>
      <td>VO + linke Cursortaste, VO + rechte Cursortaste</td>
      <td>
        (wenn Sie sich in einigen horizontalen Optionen befinden, beispielsweise in einem Datumsauswahlfeld)
        Bewegen Sie sich zwischen Optionen.
      </td>
    </tr>
    <tr>
      <td>VO + Aufwärtspfeil, VO + Abwärtspfeil</td>
      <td>
        (wenn Sie sich in einigen horizontalen Optionen befinden, beispielsweise in einem Datumsauswahlfeld)
        Ändern Sie die aktuelle Option.
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>U</kbd></td>
      <td>
        Öffnen Sie den Rotor, der Listen von Überschriften, Links, Formularsteuerungen usw. für eine
        einfache Navigation anzeigt.
      </td>
    </tr>
    <tr>
      <td>VO + linke Cursortaste, VO + rechte Cursortaste</td>
      <td>
        (wenn im Rotor) Bewegen Sie sich zwischen verschiedenen im Rotor verfügbaren Listen.
      </td>
    </tr>
    <tr>
      <td>VO + Aufwärtspfeil, VO + Abwärtspfeil</td>
      <td>
        (wenn im Rotor) Bewegen Sie sich zwischen verschiedenen Elementen in der aktuellen Rotorliste.
      </td>
    </tr>
    <tr>
      <td><kbd>Esc</kbd></td>
      <td>(wenn im Rotor) Verlassen Sie den Rotor.</td>
    </tr>
    <tr>
      <td><kbd>Ctrl</kbd></td>
      <td>(wenn VO spricht) Pausieren/Weiterhalten der Sprache.</td>
    </tr>
    <tr>
      <td>VO + <kbd>Z</kbd></td>
      <td>Starten Sie den letzten Sprachabschnitt neu.</td>
    </tr>
    <tr>
      <td>VO + <kbd>D</kbd></td>
      <td>Gehen Sie in das Dock des mac, damit Sie Apps darin auswählen können.</td>
    </tr>
  </tbody>
</table>

Das sieht wie viele Befehle aus, aber es ist nicht so schlimm, wenn Sie sich daran gewöhnt haben, und VO gibt Ihnen regelmäßig Erinnerungen daran, welche Befehle Sie an bestimmten Stellen verwenden sollen. Probieren Sie VO jetzt aus; Sie können dann einige unserer Beispiele im Abschnitt [Screenreader testen](#screenreader_testen) ausprobieren.

#### NVDA

NVDA ist nur für Windows und Sie müssen es installieren.

1. Laden Sie NVDA von [nvaccess.org](https://www.nvaccess.org/) herunter und installieren Sie es. Sie können wählen, ob Sie eine Spende machen oder es kostenlos herunterladen möchten; Sie müssen ihnen auch Ihre E-Mail-Adresse geben, bevor Sie es herunterladen können.
2. Um NVDA zu starten, nachdem es installiert ist, doppelklicken Sie auf die Programmdatei/Verknüpfung oder verwenden Sie die Tastenkombination <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd>. Beim Start wird Ihnen der NVDA-Willkommensdialog angezeigt. Hier können Sie aus einigen Optionen wählen und dann die _OK_-Taste drücken, um fortzufahren.

NVDA ist nun auf Ihrem Computer aktiv.

Um NVDA zu verwenden, werden Sie viel Gebrauch vom "NVDA-Modifikator" machen – der Taste, die Sie zusätzlich zu den tatsächlichen NVDA-Tastenkombinationen drücken müssen, damit sie funktionieren. Der NVDA-Modifikator kann entweder <kbd>Einfügen</kbd> (Standard) oder <kbd>CapsLock</kbd> sein (kann durch Markieren des ersten Kontrollkästchens im NVDA-Willkommensdialog ausgewählt werden, bevor Sie auf _OK_ drücken).

> [!NOTE]
> NVDA ist subtiler als VoiceOver in Bezug darauf, wie hervorgehoben wird, wo es sich befindet und was es tut. Wenn Sie durch Überschriften, Listen usw. scrollen, werden die von Ihnen ausgewählten Elemente im Allgemeinen mit einem subtilen Umriss hervorgehoben, aber das ist nicht immer der Fall für alle Dinge. Wenn Sie sich völlig verlaufen haben, können Sie Strg + F5 drücken, um die aktuelle Seite zu aktualisieren und von oben erneut zu beginnen.

NVDA hat viele Tastaturbefehle, und wir werden sie hier nicht alle auflisten. Die grundlegenden, die Sie für Webseiten-Tests benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastenkombinationen bedeutet "NVDA" "der NVDA-Modifikator".

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
      <td>NVDA + <kbd>Q</kbd></td>
      <td>Schalten Sie NVDA wieder aus, nachdem Sie es gestartet haben.</td>
    </tr>
    <tr>
      <td>NVDA + Aufwärtspfeil</td>
      <td>Lesen Sie die aktuelle Zeile.</td>
    </tr>
    <tr>
      <td>NVDA + Abwärtspfeil</td>
      <td>Starten Sie das Lesen an der aktuellen Position.</td>
    </tr>
    <tr>
      <td>Aufwärts- und Abwärtspfeil oder <kbd>Shift</kbd> + <kbd>Tab</kbd> und <kbd>Tab</kbd></td>
      <td>Gehen Sie zum vorherigen/nächsten Element auf der Seite und lesen Sie es.</td>
    </tr>
    <tr>
      <td>Linker und rechter Pfeil</td>
      <td>Gehen Sie zum vorherigen/nächsten Zeichen im aktuellen Element und lesen Sie es.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>H</kbd> und <kbd>H</kbd></td>
      <td>Gehen Sie zur vorherigen/nächsten Überschrift und lesen Sie sie.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>K</kbd> und <kbd>K</kbd></td>
      <td>Gehen Sie zum vorherigen/nächsten Link und lesen Sie ihn.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>D</kbd> und <kbd>D</kbd></td>
      <td>
        Gehen Sie zum vorherigen/nächsten Dokumentbezeichner (z.B. <code>&#x3C;nav></code>)
        und lesen Sie ihn.
      </td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>1</kbd>–<kbd>6</kbd> und <kbd>1</kbd>–<kbd>6</kbd></td>
      <td>Gehen Sie zum vorherigen/nächsten Überschrift (Stufe 1–6) und lesen Sie sie.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>F</kbd> und <kbd>F</kbd></td>
      <td>Gehen Sie zum vorherigen/nächsten Formulareingang und fokusieren Sie darauf.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>T</kbd> und <kbd>T</kbd></td>
      <td>Gehen Sie zur vorherigen/nächsten Datentabelle und fokusieren Sie darauf.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>B</kbd> und <kbd>B</kbd></td>
      <td>Gehen Sie zum vorherigen/nächsten Schaltfläche und lesen Sie ihr Etikett.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>L</kbd> und <kbd>L</kbd></td>
      <td>Gehen Sie zur vorherigen/nächsten Liste und lesen Sie ihr erstes Listenelement.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>I</kbd> und <kbd>I</kbd></td>
      <td>Gehen Sie zum vorherigen/nächsten Listenelement und lesen Sie es.</td>
    </tr>
    <tr>
      <td><kbd>Enter</kbd>/<kbd>Return</kbd></td>
      <td>
        (wenn Link/Schaltfläche oder anderes aktivierbares Element ausgewählt ist) Aktivieren Sie das Element.
      </td>
    </tr>
    <tr>
      <td>NVDA + <kbd>Leertaste</kbd></td>
      <td>
        (wenn Formular ausgewählt) Betreten Sie ein Formular, sodass einzelne Elemente ausgewählt werden können,
        oder verlassen Sie das Formular, wenn Sie bereits darin sind.
      </td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>Tab</kbd> und <kbd>Tab</kbd></td>
      <td>(wenn im Formular) Bewegen Sie sich zwischen Formulareingaben.</td>
    </tr>
    <tr>
      <td>Aufwärts- und Abwärtspfeil</td>
      <td>
        (wenn im Formular) Ändern Sie die Werte der Formulareingabe (im Fall von Steuerungen wie Auswahlboxen).
      </td>
    </tr>
    <tr>
      <td><kbd>Leertaste</kbd></td>
      <td>(wenn im Formular) Wählen Sie den gewählten Wert aus.</td>
    </tr>
    <tr>
      <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + Pfeiltasten</td>
      <td>(wenn eine Tabelle ausgewählt ist) Bewegen Sie sich zwischen Tabellzellen.</td>
    </tr>
  </tbody>
</table>

### Screenreader testen

Nun, da Sie sich an die Verwendung eines Screenreaders gewöhnt haben, möchten wir, dass Sie ihn verwenden, um einige schnelle Barrierefreiheits-Tests durchzuführen, um eine Vorstellung davon zu bekommen, wie Screenreader mit guten und schlechten Webseiten-Funktionen umgehen:

- Sehen Sie sich [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) an und beachten Sie, wie die Überschriften vom Screenreader gefunden und zur Navigation verwendet werden können. Sehen Sie sich nun [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) an und beachten Sie, wie der Screenreader keine dieser Informationen erhält. Stellen Sie sich vor, wie nervig das wäre, wenn Sie versuchen, eine wirklich lange Seite Text zu navigieren.
- Sehen Sie sich [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) an und beachten Sie, wie sie aus dem Kontext heraus Sinn machen, beispielsweise im VoiceOver-Rotor. Dies ist bei [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) nicht der Fall – sie sind alle nur "hier klicken".
- Sehen Sie sich [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) an und beachten Sie, wie die Formulareingaben mithilfe ihrer Labels beschrieben werden, da wir geeignete {{htmlelement("label")}} Elemente hinzugefügt haben. In [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) erhalten sie ein nicht hilfreiches Label wie "leer".
- Sehen Sie sich unser [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) Beispiel an und sehen Sie, wie der Screenreader in der Lage ist, Spalten und Zeilen von Inhalten zu assoziieren und sie alle zusammen vorzulesen, da wir die Tabellenüberschriften korrekt definiert haben. In [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) können keine der Zellen überhaupt assoziiert werden. Beachten Sie, dass NVDA anscheinend etwas seltsam reagiert, wenn Sie nur eine einzelne Tabelle auf einer Seite haben; Sie könnten stattdessen [WebAIMs Tabellentestseite](https://webaim.org/articles/nvda/tables.htm) ausprobieren.
- Sehen Sie sich das [WAI-ARIA Live-Regionen-Beispiel](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm) an und beachten Sie, wie der Screenreader den ständig aktualisierten Abschnitt vorliest, während er aktualisiert wird.

## Andere Tools

Screenreader sind eine der häufigsten assistiven Technologien, denen Sie als Webentwickler begegnen, aber es gibt andere Formen von ATs, und es ist nützlich, mit dem vertraut zu sein, was Benutzer möglicherweise verwenden, um auf Ihre Inhalte zuzugreifen. Dieser Abschnitt fasst einige von ihnen zusammen.

### Großtext- oder Braille-Tastaturen

Es ist möglich, Großtext-Tastaturen zu bekommen, die von sehbehinderten oder älteren Benutzern verwendet werden, und Braille-Tastaturen, die für blinde und stark sehbehinderte Personen nutzbar sind.

### Alternative Zeigegeräte

Wenn Sie an Zeigegeräte denken, sind Mäuse das offensichtliche Beispiel, aber es gibt andere Zeigegeräte, die entwickelt wurden, um Benutzern mit unterschiedlichen Mobilitätseinschränkungen die Bedienung von Benutzeroberflächen zu erleichtern:

- Trackballs: Eine Art umgekehrte Mäuse, Trackballs bestehen aus einer montierten Kugel, die stationär auf Ihrem Schreibtisch bleibt, die Sie rollen können, um den Zeiger zu bewegen. Sie gelten als präziser und einfacher zu handhaben als Mäuse, insbesondere für Menschen mit eingeschränkter Handbeweglichkeit.
- Joysticks: Ein Steuerknüppel, der sich bewegen lässt, um den Zeiger zu bewegen. Joysticks sind weniger präzise als Trackballs, aber von Menschen mit einer Vielzahl von physischen Behinderungen verwendbar, sogar von schwerstbehinderten Personen.
- Touchpads: Die meisten modernen Laptops verfügen über ein Touchpad (manchmal Trackpad genannt) – einen flachen, tastbaren Sensor, der es Ihnen ermöglicht, den Zeiger mit einem Finger zu bewegen sowie Gesten mit mehreren Fingern auszuführen, genauso wie mobile Gesten. Für Geräte, die keine internen Touchpads haben, können externe Touchpads gekauft werden. Einige Menschen finden sie präziser als Mäuse.

### Bildschirmlupen

Bildschirmlupen bieten sehbehinderten Nutzern eine vergrößerte Ansicht des Bildschirms ihres Geräts, um ihnen das Verständnis und die Interaktion mit den Inhalten des Geräts zu erleichtern, sowie andere Funktionen wie Farbanpassung zur Unterstützung von Farbenblindheit und Anpassung der Größe von Mauszeigern und Textcursoren, um sie besser sichtbar zu machen.

Es gibt sowohl Software- als auch Hardware-Lösungen:

- Die meisten modernen Betriebssysteme haben eine integrierte App, um den ganzen Bildschirm oder einen Teil davon zu vergrößern, zum Beispiel Zoom auf mac oder Magnifier auf Windows. Sie bieten typischerweise auch Optionen, um die Textgröße, Mauszeigergröße usw. universell zu erhöhen. Es sind auch Drittanbieter-Optionen verfügbar.
- Hardware-Lösungen bestehen tendenziell aus einem separaten Bildschirm, der neben oder vor dem Bildschirm Ihres Geräts steht und eine größere oder gezoomte Version eines Teils davon projiziert.

### Sprachsteuerungssoftware

Sprachsteuerungssoftware erlaubt es Ihnen, Befehle zu sprechen, um Ihr Gerät zu steuern und/oder den Text von E-Mails oder Dokumenten zu diktieren, die der Computer für Sie schreibt. Dies ist sehr nützlich für Personen, die nicht in der Lage sind, eine Tastatur oder andere Steuerungsmechanismen zu verwenden.

Moderne Betriebssysteme haben Funktionen integriert, um dies zu ermöglichen (beispielsweise Diktat auf mac oder Voice Access auf Windows), und es gibt auch Drittanbieter-Apps, von Desktop-Apps bis hin zu Browser-Erweiterungen.

### Schaltersteuerungen

Schaltersteuerungen bieten Menschen mit sehr eingeschränkter Mobilität oder [kognitiver Beeinträchtigung](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) eine Möglichkeit zur Interaktion mit Geräten.

Ein Schaltersteuerungssetup besteht in der Regel aus zwei Teilen:

- Einem physischen Schalter oder einer Taste zur Aktivierung von Optionen auf dem Gerät. Sie können Schalterfunktionen auch regulären Gerätetasten (wie Lautstärkereglern) oder Tasten auf einer Tastatur zuweisen.
- Einem Gerätemodus oder einer Softwareerweiterung von Drittanbietern, die das Gerät mit der Schalter- oder Tastensteuerung kompatibel macht. Beispielsweise ist Switch Access auf Android ein Modus, bei dem die verschiedenen Optionen in verschiedenen Situationen (z.B. Apps auf dem Startbildschirm) durchlaufen werden und dann die gewünschte Option mit einem Knopf oder Schalter ausgewählt werden kann, wenn sie erreicht wird.

## Planen für Barrierefreiheit

Sie sollten sorgfältig über Barrierefreiheit nachdenken, wenn Sie ein neues Projekt starten. Stellen Sie sicher, dass die Barrierefreiheit während der ersten Designphase berücksichtigt wird, damit Sie:

- Die Grundlagen richtig machen, beispielsweise durch die Verwendung [guter Dokumentenstruktur](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_well-structured_text_content) und Bereitstellung [alternativer Texte](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) für Bilder.
- Den besten Ansatz für Funktionen sorgfältig abwägen, die wahrscheinlich Barrierefreiheitsprobleme haben. Zum Beispiel sind Audio und Video für einige Personen nicht zugänglich, daher sollten Sie Alternativen wie [Transkripte](/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts) und [Textspuren](/de/docs/Learn_web_development/Core/Accessibility/Multimedia#video_text_tracks) bereitstellen.
- Kostenintensive Fehler später vermeiden. Probleme, die gegen Ende eines Projekts entdeckt werden, sind tendenziell viel zeitaufwendiger und teurer zu beheben als Probleme, die frühzeitig entdeckt werden.

## Benutzertests

Sie können sich nicht allein auf automatisierte Tools verlassen, um Barrierefreiheitsprobleme auf Ihrer Seite zu bestimmen. Jedes Webprojekt benötigt eine [Benutzerteststrategie](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies#user_testing), und es wird dringend empfohlen, einige Barrierefreiheits-Benutzergruppen einzubeziehen:

- Versuchen Sie, einige Screenreader-Benutzer, einige nur-Tastatur-Benutzer, einige nichthörende Benutzer, Benutzer mit Mobilitätseinschränkungen usw. einzubeziehen.
- Lassen Sie jede Gruppe versuchen, die Website allgemein zu verwenden, beginnend mit der Startseite und anderen wichtigen Seiten, und probieren Sie einige der primären Funktionen aus. Typische Beispiele sind der Kauf eines Produkts oder eine Buchung. Fragen Sie sie, welchen Eindruck sie hatten und welche Probleme sie hatten.
- Lassen Sie sie sich auf Funktionen oder Abläufe konzentrieren, bei denen Sie spezifische Barrierefreiheitsbedenken haben, zum Beispiel komplexe Formulareingaben oder Videoplayer. Fragen Sie sie, was ihnen in Bezug auf die Benutzererfahrung fehlt und was sie sich wünschen würden.

Einige Projekte haben ein Budget zur Bezahlung von Testgruppen, während andere auf unbezahlte Freiwillige oder sogar Kollegen und Freunde angewiesen sind.

## Checkliste zur Barrierefreiheitsprüfung

Die folgende Liste bietet eine Checkliste, die Sie befolgen sollten, um sicherzustellen, dass Sie die empfohlene Barrierefreiheitsprüfung für Ihr Projekt durchgeführt haben:

1. Stellen Sie sicher, dass Ihr HTML so semantisch korrekt wie möglich ist. [Es zu validieren](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML#html_validation) ist ein guter Anfang, ebenso wie die Verwendung eines [Auditing-Tools](#auditing-tools).
2. Überprüfen Sie, ob Ihr Inhalt Sinn ergibt, wenn das CSS deaktiviert ist.
3. Stellen Sie sicher, dass Ihre Funktionalität über die Tastatur zugänglich ist (siehe [Nutzen Sie semantische UI-Steuerelemente, wo möglich](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) für mehr Details). Testen Sie dies mit Tab, Enter usw.
4. Stellen Sie sicher, dass Ihre nicht-textlichen Inhalte [textliche Alternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) haben. Ein [Auditing-Tool](#auditing-tools) ist gut, um solche Probleme zu erkennen.
5. Sicherstellen, dass der [Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast) Ihrer Website akzeptabel ist, mithilfe eines geeigneten Prüfwerkzeugs.
6. Stellen Sie sicher, dass [versteckte Inhalte](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) von Screenreadern lesbar sind.
7. Stellen Sie sicher, dass die Funktionalität ohne JavaScript, wo immer möglich, nutzbar ist.
8. Verwenden Sie ARIA, um Barrierefreiheit zu verbessern, wo es geeignet ist.
9. Führen Sie Ihre Website durch ein [Auditing-Tool](#auditing-tools).
10. Testen Sie es mit einem Screenreader.
11. Fügen Sie irgendwo auf Ihrer Seite eine auffindbare Barrierefreiheitsrichtlinie/-erklärung hinzu, um zu sagen, was Sie getan haben.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel eine Vorstellung davon gegeben, welche Arten von Tools Sie verwenden können, um Barrierefreiheitsprobleme zu lösen, sowie die assistierenden Technologien, die von Menschen mit Behinderungen zur Nutzung des Webs verwendet werden.

Im nächsten Artikel werden wir uns damit beschäftigen, wie man zugängliches HTML schreibt.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}
