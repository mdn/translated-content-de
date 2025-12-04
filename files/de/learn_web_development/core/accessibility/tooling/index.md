---
title: Barrierefreiheitswerkzeuge und unterstützende Technologien
short-title: Accessibility tools
slug: Learn_web_development/Core/Accessibility/Tooling
l10n:
  sourceCommit: d64e1ee3cdbe602324fce3f7320d026f58186715
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}

Als nächstes richten wir unsere Aufmerksamkeit auf Barrierefreiheitswerkzeuge, die Informationen darüber bieten, welche Arten von Werkzeugen Sie verwenden können, um Barrierefreiheitsprobleme zu lösen. Außerdem helfen wir Ihnen, die **assistiven Technologien** zu verstehen, die von Menschen mit Behinderungen genutzt werden, um im Internet zu surfen. Sie werden die hier beschriebenen Werkzeuge in den folgenden Artikeln verwenden.

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
          <li>Vertrautheit mit der Art von Werkzeugen, die Sie zur Lösung von Barrierefreiheitsproblemen verwenden können, zum Beispiel Auditing-Tools.</li>
          <li>Einrichtung von Screen-Readern und deren Verwendung zum Testen von Websites auf Desktop und Mobilgeräten.</li>
          <li>Vertrautheit mit anderen Arten von assistiver Technologie wie großen Text- oder Brailletastaturen, alternativen Zeigegeräten und Bildschirmvergrößerern.</li>
          <li>Die Wichtigkeit von Benutzertests neben automatisierten Tests.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheitswerkzeuge

Sehen wir uns die Werkzeuge und Techniken an, die Sie verwenden können, um die Barrierefreiheit von Websites zu testen und die aufgedeckten Probleme zu beheben.

### Testen der Quellreihenfolge

Ihr Inhalt sollte in seiner Quellreihenfolge logisch sinnvoll sein – Sie können ihn später immer noch mit CSS anders darstellen, aber Sie sollten die zugrunde liegende Struktur von Anfang an korrekt haben. Dies liegt daran, dass assistive Technologien Webinhalte basierend auf der Reihenfolge der Quelle lesen, und Menschen mit Behinderungen häufig Teile des CSS ändern oder ausschalten, um Inhalte lesbarer zu machen (übliche Beispiele sind das Erhöhen der Schriftgröße und das Anwenden von Farbkontrastschemata mit hohem Kontrast).

Um die Quellreihenfolge zu testen, können Sie das CSS einer Site deaktivieren und sehen, wie verständlich sie ohne CSS ist. Sie könnten dies manuell tun, indem Sie einfach das CSS aus Ihrem Code entfernen, aber der einfachste Weg ist, Browserfunktionen zu verwenden, zum Beispiel:

- Firefox: _Ansicht > Seitenstil > Kein Stil_ aus dem Hauptmenü auswählen.
- Safari: [Öffnen Sie die Entwicklerwerkzeuge des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser), klicken Sie auf die Schaltfläche _Geräteeinstellungen_ in der Nähe der oberen linken Ecke des Entwicklerwerkzeug-Fensters (sieht aus wie ein Computermonitor), und aktivieren Sie das Kontrollkästchen "CSS deaktivieren".
- Chrome/Edge: Installieren Sie die [Web Developer Toolbar](https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm) Erweiterung, starten Sie dann den Browser neu. Klicken Sie auf das "Web Developer" Zahnrad-Symbol, das jetzt im Erweiterungsmenü verfügbar sein sollte, und wählen Sie _CSS > Alle Stile deaktivieren_.

### Farbkontrast-Checker

Bei der Auswahl eines Farbschemas für Ihre Website sollten Sie sicherstellen, dass die Textfarbe (Vordergrund) gut mit der Hintergrundfarbe kontrastiert. Das Design könnte cool aussehen, aber es nützt nichts, wenn die Leute Ihren Inhalt nicht lesen können. Verwenden Sie ein Werkzeug wie das [Farbkontrast-Checker](https://webaim.org/resources/contrastchecker/) von WebAIM, um zu überprüfen, ob Ihr Schema ausreichend Kontraste aufweist.

Ein weiterer Tipp ist, es zu vermeiden, nur Farbe für Wegweiser oder um wichtige Informationen hervorzuheben zu verwenden, da dies von Menschen mit Sehbehinderungen wie Farbenblindheit übersehen werden könnte. Anstatt beispielsweise erforderliche Formularfelder rot zu markieren, markieren Sie sie mit einem Sternchen und in Rot.

> [!NOTE]
> Ein hoher Kontrast hilft auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm verwendet, Seiten besser zu lesen, wenn er sich in einer hellen Umgebung befindet, wie etwa im Sonnenlicht.

### Auditing-Tools

Es gibt mehrere Auditing-Tools, in die Sie Ihre Webseiten einspeisen können. Sie überblicken diese und geben eine Liste der Barrierefreiheitsprobleme zurück, die auf der Seite vorhanden sind. Sehen wir uns zum Beispiel [Wave](https://wave.webaim.org/) an, ein Online-Tool zur Barrierefreiheitstestung, das eine Webadresse annimmt und eine annotierte Ansicht dieser Seite mit hervorgehobenen Barrierefreiheitsproblemen zurückgibt.

1. Gehen Sie zur [Wave-Homepage](https://wave.webaim.org/).
2. Geben Sie die URL unseres [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) Beispiels in das Texteingabefeld oben auf der Seite ein. Drücken Sie dann die Eingabetaste oder klicken/tippen Sie auf den Pfeil am rechten Rand des Eingabefeldes.
3. Die Site sollte die vorhandenen Barrierefreiheitsprobleme hervorheben. Klicken Sie auf die angezeigten Symbole, um weitere Informationen zu jedem der von Waves Bewertung identifizierten Probleme zu erhalten.

Andere Audit-Tools, die einen Blick wert sind:

- [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)
- [ANDI Bookmarklet](https://www.ssa.gov/accessibility/andi/help/install.html)
- [Google Lighthouse Accessibility Audits](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)

> [!NOTE]
> Solche Tools allein reichen nicht aus, um all Ihre Barrierefreiheitsprobleme zu lösen. Sie benötigen eine Kombination aus diesen Tools, Wissen und Erfahrung, Benutzertests usw., um ein vollständiges Bild zu erhalten.

[Deques aXe-Werkzeug](https://www.deque.com/axe/) geht etwas weiter als die oben genannten Auditing-Tools. Wie die anderen überprüft es Seiten und gibt Barrierefreiheitsfehler zurück. Seine wahrscheinlich direkt nützlichste Form sind die Browsererweiterungen:

- [aXe für Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe für Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Diese fügen den Entwicklerwerkzeugen des Browsers einen Reiter für Barrierefreiheit hinzu. Zum Beispiel haben wir die Firefox-Version installiert und sie dann verwendet, um unser [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) Beispiel zu überprüfen. Wir erhielten die folgenden Ergebnisse:

![Ein Screenshot von Barrierefreiheitsproblemen, die vom Axe-Werkzeug identifiziert wurden.](axe-screenshot.png)

aXe kann auch mit `npm` installiert werden und lässt sich in Task-Runner wie [Grunt](https://gruntjs.com/) und [Gulp](https://gulpjs.com/), Automatisierungsframeworks wie [Selenium](https://www.selenium.dev/) und [Cucumber](https://cucumber.io/), Unit-Testing-Frameworks wie [Jasmine](https://jasmine.github.io/) und mehr integrieren (weitere Details finden Sie auf der [Hauptseite von aXe](https://www.deque.com/axe/)).

## Screen-Reader

Eine der häufigsten Arten von assistiver Technologie (AT), die von Menschen mit Behinderungen verwendet wird – und eine der häufigsten, die Sie zum Testen der Barrierefreiheit Ihrer Webseiten verwenden werden – sind **Screen-Reader**. Diese sind Softwarestücke, die Webseiteninhalte oder Inhalte aus anderen auf dem Betriebssystem installierten Apps vorlesen. Screen-Reader ermöglichen es Menschen, Computer zu nutzen, ohne visuellen Inhalt sehen zu müssen.

Webbrowser stellen Informationen über den Inhalt der Seite für Screen-Reader (und andere AT) zur Verfügung, um sie dem Nutzer durch eine Darstellung namens {{Glossary("Accessibility_tree", "Accessibility Tree")}} zu kommunizieren. Dieser bietet semantische Informationen wie Namen und Beschreibungen von Elementen, welchen Zweck oder welche Rolle sie haben (ist es ein Button oder ein Eingabefeld?) und ob sie in einem bestimmten Zustand sind (z.B. ist ein Dialogfeld geöffnet oder geschlossen?).

Diese Informationen mögen im Fall eines Textabschnitts banal erscheinen, der sich so gut wie in geschriebener Form anhört, aber es kann kompliziert werden, wenn es um Benutzeroberflächenfunktionen wie ein Dropdown-Menü oder einen Videoplayer geht. Deshalb ist es sehr wichtig, semantisches HTML korrekt zu verwenden, was Sie im nächsten Artikel dieses Moduls detailliert behandeln werden. Wenn Sie Inhalte mit dem falschen Element markieren, kann dies für Screen-Reader-Nutzer verwirrend sein.

Stellen Sie sicher, dass Sie einen oder zwei Screen-Reader auf Ihrer Entwicklungsmaschine installiert haben, und versuchen Sie, Ihre Lieblingswebsites über einen Screen-Reader zu nutzen, wie unten beschrieben. Zu verstehen, wie sehbehinderte Menschen das Web nutzen, ist der Schlüssel zur Gestaltung von Produkten, die besser für alle funktionieren.

### Welche Screen-Reader sind verfügbar?

Es gibt mehrere Screen-Reader:

- Einige sind kostenpflichtige kommerzielle Produkte, wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows).
- Einige sind kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows und macOS) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Einige sind im Betriebssystem integriert, wie [VoiceOver](https://www.apple.com/accessibility/features/?vision) (macOS und iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf Chromebooks) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Im Allgemeinen sind Screen-Reader eigenständige Anwendungen, die auf dem Host-Betriebssystem laufen und Webseiten sowie Inhalte in anderen Anwendungen lesen können (das ist nicht immer der Fall; ChromeVox zum Beispiel ist eine Browser-Erweiterung). Screen-Reader weisen tendenziell einige Unterschiede im genauen Verhalten und in den Steuerungsmöglichkeiten auf, daher sollten Sie die Dokumentation Ihres gewählten Screen-Readers konsultieren, um alle Details zu erfahren. Dennoch funktionieren sie alle grundsätzlich auf dieselbe Weise.

In den nächsten Abschnitten gehen wir auf einige Tests mit ein paar verschiedenen Screen-Readern ein, um Ihnen eine allgemeine Vorstellung davon zu geben, wie sie funktionieren und wie man mit ihnen testet.

> [!NOTE]
> WebAIMs [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/) bietet einige nützliche Informationen über die Nutzung von Screen-Readern und was für Screen-Reader am besten funktioniert. Siehe auch [Screen Reader User Survey #10 Results](https://webaim.org/projects/screenreadersurvey10/#used) für einige interessante Statistiken zur Nutzung von Screen-Readern.

#### VoiceOver

VoiceOver (VO) wird kostenlos mit Apple Mac/iPhone/iPad geliefert, daher ist es nützlich zum Testen auf Desktop/Mobilgeräten, wenn Sie Apple-Produkte verwenden. Wir haben es auf macOS auf einem MacBook Pro getestet.

Um es zu aktivieren, drücken Sie <kbd>Cmd</kbd> + <kbd>F5</kbd>. Wenn Sie VO noch nie benutzt haben, wird Ihnen ein Willkommensbildschirm angezeigt, auf dem Sie wählen können, ob Sie VO starten möchten oder nicht. Sie können auch ein wirklich nützliches Tutorial durchlaufen, um zu lernen, wie man es benutzt. Um es zu deaktivieren, drücken Sie <kbd>Cmd</kbd> + <kbd>F5</kbd> erneut.

> [!NOTE]
> Sie sollten das Tutorial mindestens einmal durchlaufen — es ist eine wirklich nützliche Möglichkeit, VO zu lernen.

Wenn VO aktiviert ist, sieht das Display größtenteils gleich aus, aber Sie sehen ein schwarzes Feld unten links auf dem Bildschirm, das Informationen darüber enthält, was VO gerade ausgewählt hat. Die aktuelle Auswahl wird ebenfalls hervorgehoben, mit einem schwarzen Rand - diese Hervorhebung wird als **VO-Cursor** bezeichnet.

![Ein Beispielscreenshot, der das Testen der Barrierefreiheit mit VoiceOver auf der MDN-Startseite zeigt. Unten links im Bild ist die Hervorhebung der Informationen auf der Webseite zu sehen.](voiceover.png)

Um VO zu verwenden, werden Sie die "VO-Modifikatortaste" häufig verwenden, dies ist eine Taste oder Tastenkombination, die Sie zusätzlich zu den eigentlichen VO-Tastenkürzeln drücken müssen, um sie funktionieren zu lassen. Die Verwendung eines Modifikators wie diesem ist bei Screen-Readern üblich, um ihre Befehle davon abzuhalten, mit anderen Befehlen zu kollidieren. Im Fall von VO kann der Modifikator entweder <kbd>CapsLock</kbd> oder <kbd>Ctrl</kbd> + <kbd>Option</kbd> sein.

VO hat viele Tastaturbefehle, und wir werden nicht alle hier auflisten. Die grundlegenden, die Sie für das Testen von Webseiten benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastaturkürzeln bedeutet "VO" "der VoiceOver-Modifikator".

<table class="standard-table no-markdown">
  <caption>
    Häufig genutzte VoiceOver-Tastaturkürzel
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
      <td>Bewegen des VO-Cursors nach oben, rechts, unten, links.</td>
    </tr>
    <tr>
      <td>VO + Leertaste</td>
      <td>
        Wählen/Aktivieren von Elementen, die durch den VO-Cursor hervorgehoben sind. Dies
        schließt Elemente ein, die im Rotor ausgewählt sind (siehe unten).
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>Shift</kbd> + Pfeil nach unten</td>
      <td>
        In eine Gruppe von Elementen wechseln, wie z.B. eine HTML-Tabelle oder ein Formular.
        Einmal in einer Gruppe können Sie sich bewegen und Elemente in dieser Gruppe
        auswählen, indem Sie die obigen Befehle wie gewohnt verwenden.
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>Shift</kbd> + Pfeil nach oben</td>
      <td>Aus einer Gruppe herausbewegen.</td>
    </tr>
    <tr>
      <td>VO + <kbd>C</kbd></td>
      <td>(wenn in einer Tabelle) Den Header der aktuellen Spalte vorlesen.</td>
    </tr>
    <tr>
      <td>VO + <kbd>R</kbd></td>
      <td>(wenn in einer Tabelle) Den Header der aktuellen Zeile vorlesen.</td>
    </tr>
    <tr>
      <td>VO + <kbd>C</kbd> + <kbd>C</kbd> (zwei C in Folge)</td>
      <td>
        (wenn in einer Tabelle) Die gesamte aktuelle Spalte, einschließlich des Headers,
        vorlesen.
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>R</kbd> + <kbd>R</kbd> (zwei R in Folge)</td>
      <td>
        (wenn in einer Tabelle) Die gesamte aktuelle Zeile vorlesen, einschließlich der
        entsprechenden Headers für jede Zelle.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeil nach links, VO + Pfeil nach rechts</td>
      <td>
        (wenn in einigen horizontalen Optionen, wie z.B. einem Date Picker)
        Zwischen Optionen wechseln.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeil nach oben, VO + Pfeil nach unten</td>
      <td>
        (wenn in einigen horizontalen Optionen, wie z.B. einem Date Picker)
        Die aktuelle Option ändern.
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>U</kbd></td>
      <td>
        Den Rotor öffnen, der Listenelemente wie Überschriften, Links, Formularelemente
        usw. zur einfachen Navigation anzeigt.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeil nach links, VO + Pfeil nach rechts</td>
      <td>
        (wenn im Rotor) Zwischen den verschiedenen Listen im Rotor wechseln.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeil nach oben, VO + Pfeil nach unten</td>
      <td>
        (wenn im Rotor) Zwischen den verschiedenen Elementen in der aktuellen
        Rotorliste wechseln.
      </td>
    </tr>
    <tr>
      <td><kbd>Esc</kbd></td>
      <td>(wenn im Rotor) Rotor verlassen.</td>
    </tr>
    <tr>
      <td><kbd>Ctrl</kbd></td>
      <td>(wenn VO spricht) Sprache anhalten/fortsetzen.</td>
    </tr>
    <tr>
      <td>VO + <kbd>Z</kbd></td>
      <td>Den letzten Sprachabschnitt erneut abspielen.</td>
    </tr>
    <tr>
      <td>VO + <kbd>D</kbd></td>
      <td>In das Dock des Mac wechseln, um Programme darin auszuführen.</td>
    </tr>
  </tbody>
</table>

Dies scheint eine Menge an Befehlen zu sein, aber es ist nicht so schlimm, wenn Sie sich daran gewöhnt haben, und VO gibt Ihnen regelmäßig Erinnerungen daran, welche Befehle an bestimmten Stellen verwendet werden sollen. Spielen Sie jetzt ein wenig mit VO herum; dann können Sie mit einigen unserer Beispiele in dem Abschnitt [Screen-Reader-Tests](#screen-reader-tests) weitermachen.

#### NVDA

NVDA ist nur für Windows verfügbar und Sie müssen es installieren.

1. Laden Sie NVDA von [nvaccess.org](https://www.nvaccess.org/) herunter und installieren Sie es. Sie können wählen, ob Sie eine Spende machen oder es kostenlos herunterladen möchten; Sie müssen auch Ihre E-Mail-Adresse angeben, bevor Sie es herunterladen können.
2. Um NVDA nach der Installation zu starten, doppelklicken Sie auf die Programmdatei/das Verknüpfungssymbol oder verwenden Sie das Tastenkürzel <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd>. Wenn Sie starten, wird das NVDA-Willkommensdialogfeld angezeigt. Hier können Sie einige Optionen wählen und dann die _OK_-Taste drücken, um loszulegen.

NVDA wird jetzt auf Ihrem Computer aktiv sein.

Um NVDA zu verwenden, werden Sie die "NVDA-Modifikatortaste" häufig verwenden – die Taste, die Sie zusätzlich zu den eigentlichen NVDA-Tastenkürzeln drücken müssen, damit sie funktionieren. Der NVDA-Modifikator kann entweder <kbd>Einfügen</kbd> (Standard) oder <kbd>CapsLock</kbd> (kann durch das erste Kontrollkästchen im NVDA-Willkommensdialog ausgewählt werden, bevor Sie _OK_ drücken) sein.

> [!NOTE]
> NVDA ist subtiler als VoiceOver in Bezug darauf, wie es hervorhebt, wo es ist und was es tut. Wenn Sie durch Überschriften, Listen usw. scrollen, werden die ausgewählten Elemente im Allgemeinen mit einer subtilen Umrandung hervorgehoben, aber dies trifft nicht immer auf alle Dinge zu. Wenn Sie sich völlig verirren, können Sie Strg + F5 drücken, um die aktuelle Seite zu aktualisieren und erneut von oben zu beginnen.

NVDA hat viele Tastaturbefehle, und wir listen nicht alle hier auf. Die grundlegenden, die Sie für das Testen von Webseiten benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastaturkürzeln bedeutet "NVDA" "der NVDA-Modifikator".

<table class="standard-table no-markdown">
  <caption>
    Die häufigsten NVDA-Tastaturkürzel
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
      <td>Schaltet NVDA wieder aus, nachdem Sie es gestartet haben.</td>
    </tr>
    <tr>
      <td>NVDA + Pfeil nach oben</td>
      <td>Liest die aktuelle Zeile vor.</td>
    </tr>
    <tr>
      <td>NVDA + Pfeil nach unten</td>
      <td>Beginnt ab der aktuellen Position zu lesen.</td>
    </tr>
    <tr>
      <td>Pfeil nach oben und Pfeil nach unten, oder <kbd>Shift</kbd> + <kbd>Tab</kbd> und <kbd>Tab</kbd></td>
      <td>Zum vorherigen/nächsten Element auf der Seite wechseln und es vorlesen.</td>
    </tr>
    <tr>
      <td>Pfeil nach links und Pfeil nach rechts</td>
      <td>Zum vorherigen/nächsten Zeichen im aktuellen Element wechseln und es vorlesen.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>H</kbd> und <kbd>H</kbd></td>
      <td>Zur vorherigen/nächsten Überschrift wechseln und sie vorlesen.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>K</kbd> und <kbd>K</kbd></td>
      <td>Zum vorherigen/nächsten Link wechseln und ihn vorlesen.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>D</kbd> und <kbd>D</kbd></td>
      <td>
        Zum vorherigen/nächsten Dokument-Meilenstein (z.B. <code>&#x3C;nav></code>) wechseln
        und ihn vorlesen.
      </td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>1</kbd>&ndash;<kbd>6</kbd> und <kbd>1</kbd>&ndash;<kbd>6</kbd></td>
      <td>Zur vorherigen/nächsten Überschrift (Level 1&ndash;6) wechseln und sie vorlesen.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>F</kbd> und <kbd>F</kbd></td>
      <td>Zum vorherigen/nächsten Formulareingabefeld wechseln und darauf fokussieren.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>T</kbd> und <kbd>T</kbd></td>
      <td>Zur vorherigen/nächsten Datentabelle wechseln und darauf fokussieren.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>B</kbd> und <kbd>B</kbd></td>
      <td>Zum vorherigen/nächsten Button wechseln und dessen Beschriftung vorlesen.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>L</kbd> und <kbd>L</kbd></td>
      <td>Zur vorherigen/nächsten Liste wechseln und deren erstes Listenelement vorlesen.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>I</kbd> und <kbd>I</kbd></td>
      <td>Zum vorherigen/nächsten Listenelement wechseln und es vorlesen.</td>
    </tr>
    <tr>
      <td><kbd>Enter</kbd>/<kbd>Return</kbd></td>
      <td>
        (wenn Link/Button oder anderes aktivierbares Element ausgewählt ist) Element
        aktivieren.
      </td>
    </tr>
    <tr>
      <td>NVDA + <kbd>Leertaste</kbd></td>
      <td>
        (wenn Formular ausgewählt ist) Ins Formular wechseln, damit einzelne Elemente
        ausgewählt werden können, oder Formular verlassen, wenn Sie darin sind.
      </td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>Tab</kbd> und <kbd>Tab</kbd></td>
      <td>(wenn im Formular) Zwischen Formulareingaben wechseln.</td>
    </tr>
    <tr>
      <td>Pfeil nach oben und Pfeil nach unten</td>
      <td>
        (wenn im Formular) Formulareingabewerte ändern (im Fall von Steuermöglichkeiten
        wie Auswahlboxen).
      </td>
    </tr>
    <tr>
      <td><kbd>Leertaste</kbd></td>
      <td>(wenn im Formular) Ausgewählten Wert auswählen.</td>
    </tr>
    <tr>
      <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + Pfeiltasten</td>
      <td>(wenn eine Tabelle ausgewählt ist) Zwischen Zellen wechseln.</td>
    </tr>
  </tbody>
</table>

### Screen-Reader-Tests

Jetzt, da Sie sich an die Verwendung eines Screen-Readers gewöhnt haben, möchten wir, dass Sie ihn verwenden, um einige schnelle Barrierefreiheitstests durchzuführen, um eine Vorstellung davon zu bekommen, wie Screen-Reader mit guten und schlechten Webseitenfunktionen umgehen:

- Sehen Sie sich [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) an und stellen Sie fest, wie die Überschriften vom Screen-Reader gefunden werden und für die Navigation verfügbar sind. Schauen Sie sich nun [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) an und stellen Sie fest, wie der Screen-Reader keines dieser Informationen erhält. Stellen Sie sich vor, wie ärgerlich das wäre, wenn Sie versuchen, sich durch eine wirklich lange Seite mit Text zu navigieren.
- Sehen Sie sich [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) an und stellen Sie fest, dass sie, wenn sie aus dem Kontext betrachtet werden, im VoiceOver-Rotor Sinn ergeben. Dies ist nicht der Fall bei [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) – sie alle sind nur "klicken Sie hier".
- Sehen Sie sich [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) an und stellen Sie fest, dass die Formulareingaben durch ihre Beschriftungen beschrieben werden, weil wir angemessene {{htmlelement("label")}}-Elemente hinzugefügt haben. In [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) erhalten sie eine unhilfreiche Bezeichnung wie "leer".
- Schauen Sie sich unser [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) Beispiel an und sehen Sie, wie der Screen-Reader in der Lage ist, Spalten und Zeilen von Inhalten zuzuordnen und zusammenhängend vorzulesen, weil wir die Tabellenüberschriften richtig definiert haben. In [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) können keine der Zellen zugeordnet werden. Beachten Sie, dass NVDA sich ein wenig seltsam verhält, wenn Sie nur eine einzelne Tabelle auf einer Seite haben; Sie könnten stattdessen die [WebAIM Tabelle-Testseite](https://webaim.org/articles/nvda/tables.htm) ausprobieren.
- Sehen Sie sich das [WAI-ARIA Live Regions Beispiel](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm) an und stellen Sie fest, dass der Screen-Reader den ständig aktualisierten Abschnitt liest, während er aktualisiert wird.

## Weitere Werkzeuge

Screen-Reader sind eine der häufigsten Arten von assistiver Technologie, denen Sie als Webentwickler begegnen werden, aber es gibt andere Arten von AT, und es ist nützlich, sich mit dem vertraut zu machen, was Benutzer möglicherweise verwenden, um auf Ihren Inhalt zuzugreifen. Dieser Abschnitt fasst einige davon zusammen.

### Große Text- oder Braille-Tastaturen

Es ist möglich, große Text-Tastaturen zu bekommen, die für Sehbehinderte oder ältere Nutzer konzipiert sind, sowie Braille-Tastaturen, die von blinden und stark sehbehinderten Menschen verwendet werden können.

### Alternative Zeigegeräte

Wenn Sie an Zeigegeräte denken, sind Mäuse das offensichtliche Beispiel, aber es gibt andere Zeigegeräte, die entwickelt wurden, um Benutzern mit unterschiedlichen Mobilitätsbeeinträchtigungen die Navigation in Benutzeroberflächen zu erleichtern:

- Trackballs: Eine Art umgedrehte Maus, Trackballs bestehen aus einer befestigten Kugel, die auf Ihrem Schreibtisch bleibt, die Sie rollen können, um den Zeiger zu bewegen. Sie werden als präziser und einfacher zu bedienen als Mäuse angesehen, besonders für Menschen mit eingeschränkter Handbewegung.
- Joysticks: Ein Steuerknüppel, der bewegt werden kann, um den Zeiger zu bewegen. Joysticks sind weniger präzise als Trackballs, aber von Menschen mit einem breiten Spektrum von körperlichen Beeinträchtigungen, sogar schweren Behinderungen, nutzbar.
- Touchpads: Die meisten modernen Laptops haben ein Touchpad (manchmal Trackpad genannt) – einen flachen taktilen Sensor, der es Ihnen ermöglicht, den Zeiger mit einem Finger zu bewegen, sowie mehrfingerige Gesten wie auf Mobilgeräten auszuführen. Sie können externe Touchpads für Geräte kaufen, die keine internen haben. Einige Leute finden sie präziser als Mäuse.

### Bildschirmvergrößerer

Bildschirmvergrößerer bieten sehbehinderten Nutzern eine vergrößerte Ansicht des Displays ihres Geräts, um ihnen das Verständnis und die Interaktion mit den Inhalten des Geräts zu erleichtern, und bieten auch andere Funktionen wie Farbkorrekturen, um Menschen mit Farbenblindheit zu helfen, sowie die Anpassungen der Größe von Mauszeigern und Textcursor, damit sie leichter zu sehen sind.

Software- und Hardware-Bildschirmvergrößerer sind erhältlich:

- Die meisten modernen Betriebssysteme haben eine integrierte App zum Vergrößern des gesamten Bildschirms oder ausgewählter Bildschirminhalte, zum Beispiel Zoom auf Mac oder Magnifier auf Windows. Sie bieten auch oft Optionen zum universellen Vergrößern der Textgröße, Mauszeigergröße usw. Auch Drittanbieteroptionen sind verfügbar.
- Hardware-Bildschirmvergrößerer bestehen in der Regel aus einem separaten Bildschirm, der neben oder vor dem Bildschirm Ihres Geräts platziert wird und eine vergrößerte Version davon oder eine herangezoomte Version eines Teils davon projiziert.

### Spracherkennungssoftware

Sprach- (oder Sprachtexteingabe-) Software ermöglicht es Ihnen, Befehle zu sprechen, um Ihr Gerät zu steuern, und/oder den Text von E-Mails oder Dokumenten zu sprechen und den Computer den Text für Sie schreiben zu lassen. Dies ist sehr nützlich für Menschen, die keine Tastatur oder andere Steuermechanismen verwenden können.

Moderne Betriebssysteme verfügen über abgeängige Funktionen, um dies zu ermöglichen (zum Beispiel Diktierfunktion auf Mac oder Sprachzugriff auf Windows), und es gibt auch Drittanbieter-Apps, von Desktop-Anwendungen bis hin zu Browsererweiterungen.

### Schaltersteuerungen

Schaltersteuerungen bieten eine Mechanismus zur Interaktion mit Geräten für Benutzer mit sehr eingeschränkter Mobilität oder [kognitiven Beeinträchtigungen](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility).

Ein Schaltersteuerungs-Setup beinhaltet üblicherweise zwei Teile:

- Einen physischen Schalter oder Knopf zum Aktivieren von Optionen auf dem Gerät. Sie können die Schalterfunktion auch regulären Gerätetasten (wie Lautstärketasten) oder Tasten auf einer Tastatur zuweisen.
- Einen Gerätemodus oder eine Drittanbieter-Softwareerweiterung, die das Gerät mit der Schalter- oder Knopfsteuerung kompatibel macht. Zum Beispiel ist Switch Access auf Android ein Modus, bei dem die verschiedenen Optionen in verschiedenen Situationen (zum Beispiel Apps auf dem Startbildschirm) durchlaufen werden und dann die gewünschte Option mit einem Knopf oder Schalter ausgewählt werden kann, wenn sie erreicht wird.

## Planung für Barrierefreiheit

Sie sollten sorgfältig über Barrierefreiheit nachdenken, gleich zu Beginn jedes Projekts. Stellen Sie sicher, dass Barrierefreiheit während der anfänglichen Designphase berücksichtigt wird, damit Sie:

- Die Grundlagen richtig hinbekommen, zum Beispiel durch die Verwendung von [gut strukturierten Textinhalten](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_well-structured_text_content) und das Bereitstellen von [alternativen Texten](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) für Bilder.
- Sorgfältig den besten Ansatz für Funktionen wählen, die wahrscheinlich Barrierefreiheitsprobleme haben. Zum Beispiel wird Audio und Video für einige Menschen sicherlich unzugänglich sein, daher sollten Sie Alternativen wie [Transkripte](/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts) und [Textuntertitel](/de/docs/Learn_web_development/Core/Accessibility/Multimedia#video_text_tracks) bereitstellen.
- Kostenintensive Fehler später vermeiden. Probleme, die am Ende eines Projekts aufgedeckt werden, neigen dazu, viel zeitaufwändiger und teurer zu sein als Probleme, die früher entdeckt werden.

## Benutzertests

Sie können sich nicht allein auf automatisierte Tools zur Bestimmung von Barrierefreiheitsproblemen auf Ihrer Site verlassen. Jedes Web-Projekt benötigt eine [Benutzer-Teststrategie](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies#user_testing), und es wird dringend empfohlen, dass Sie einige Benutzergruppen mit Barrierefreiheitsbedarfen einbeziehen:

- Versuchen Sie, einige Screen-Reader-Nutzer, einige reine Tastaturnutzer, einige nicht hörbehinderte Nutzer, Nutzer mit Mobilitätsbeeinträchtigungen usw. einzubeziehen.
- Lassen Sie jede Gruppe die Website allgemein ausprobieren, beginnend mit der Betrachtung der Startseite und anderer wichtiger Seiten und dem Ausprobieren einiger der primären Funktionen. Typische Beispiele sind der Kauf eines Produkts oder die Buchung einer Reservierung. Fragen Sie sie, welchen Eindruck sie hatten und auf welche Schwierigkeiten sie gestoßen sind.
- Lassen Sie sie dann auf Funktionen oder Arbeitsabläufe fokussieren, bei denen Sie spezielle Barrierefreiheitssorgen haben, wie komplexe Formulareingabeelemente oder Videoplayer. Fragen Sie sie, was ihnen in Bezug auf Benutzererfahrung fehlt und was sie gerne geändert sehen würden.

Einige Projekte haben ein Budget, um Testgruppen zu bezahlen, während andere auf unbezahlte Freiwillige oder sogar Kollegen und Freunde angewiesen sind.

## Checkliste für Barrierefreiheitstests

Die folgende Liste bietet eine Checkliste, die Sie befolgen können, um sicherzustellen, dass Sie die empfohlenen Barrierefreiheitstests für Ihr Projekt durchgeführt haben:

1. Stellen Sie sicher, dass Ihr HTML so semantisch korrekt wie möglich ist. [Validieren (überprüfen) Sie es](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML#html_validation) als gute Grundlage, genauso wie ein [Audit-Tool](#auditing-tools) zu verwenden.
2. Überprüfen Sie, ob Ihr Inhalt Sinn macht, wenn das CSS deaktiviert ist.
3. Stellen Sie sicher, dass Ihre Funktionalität über die Tastatur zugänglich ist (siehe [Verwendung semantischer UI-Kontrollen, wo möglich](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) für weitere Details). Testen Sie mit Tab, Return/Enter usw.
4. Stellen Sie sicher, dass Ihr nicht textlicher Inhalt [Alternativtexte](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) hat. Ein [Audit-Tool](#auditing-tools) ist gut, um solche Probleme zu entdecken.
5. Stellen Sie sicher, dass der [Farbkontrast Ihrer Website](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast) akzeptabel ist, indem Sie ein geeignetes Überprüfungswerkzeug verwenden.
6. Stellen Sie sicher, dass [versteckter Inhalt](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) von Screen-Readern sichtbar ist.
7. Stellen Sie sicher, dass die Funktionalität, wo möglich, ohne JavaScript nutzbar ist.
8. Verwenden Sie ARIA, um die Barrierefreiheit dort zu verbessern, wo es angebracht ist.
9. Führen Sie Ihre Site durch ein [Audit-Tool](#auditing-tools).
10. Testen Sie es mit einem Screen-Reader.
11. Fügen Sie irgendwo auf Ihrer Site eine zugängliche Erklärung/Politik hinzu, um zu sagen, was Sie getan haben.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel eine Vorstellung davon gegeben, welche Art von Werkzeugen Sie zur Lösung von Barrierefreiheitsproblemen und assistiven Technologien, die von Menschen mit Behinderungen zur Nutzung des Internets verwendet werden, verwenden können.

Im nächsten Artikel werden wir anschauen, wie man zugängliches HTML schreibt.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}
