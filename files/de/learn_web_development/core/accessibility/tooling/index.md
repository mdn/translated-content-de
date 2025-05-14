---
title: Barrierefreiheit Tools und unterstützende Technologien
short-title: Barrierefreiheit Tools
slug: Learn_web_development/Core/Accessibility/Tooling
l10n:
  sourceCommit: eaec5c4226ac64696a95314a7bce995165a4d124
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}

Als nächstes widmen wir uns den Tools zur Barrierefreiheit und geben Informationen über die Arten von Tools, die Sie verwenden können, um Barrierefreiheitsprobleme zu lösen. Außerdem erklären wir die **unterstützenden Technologien**, die von Menschen mit Behinderungen verwendet werden, um das Internet zu durchsuchen. Sie werden die hier beschriebenen Tools in den folgenden Artikeln nutzen.

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
          <li>Vertrautheit mit den Arten von Tools, die Sie verwenden können, um Barrierefreiheitsprobleme zu lösen, zum Beispiel Auditing-Tools.</li>
          <li>Einrichten von Screenreadern und deren Nutzung zur Website-Prüfung auf Desktop und Mobilgeräten.</li>
          <li>Vertrautheit mit anderen Arten von unterstützenden Technologien wie große Text- oder Braille-Tastaturen, alternative Eingabegeräte und Bildschirmlupen.</li>
          <li>Die Bedeutung von Benutzertests neben automatisierten Tests.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit Tools

Schauen wir uns die Tools und Techniken an, die Sie zur Prüfung der Barrierefreiheit von Websites nutzen und um die dabei entdeckten Probleme zu beheben.

### Prüfung der Quellreihenfolge

Ihr Inhalt sollte in der Quellreihenfolge logisch Sinn ergeben – Sie können ihn später immer noch mit CSS unterschiedlich anzeigen, aber Sie sollten die zugrundeliegende Struktur korrekt von Anfang an erstellen. Dies liegt daran, dass unterstützende Technologien Website-Inhalte basierend auf der Quellreihenfolge lesen und Menschen mit Behinderungen oft Teile des CSS ändern oder ausschalten, um Inhalte lesbarer zu machen (häufige Beispiele sind das Erhöhen der Schriftgröße und das Anwenden von Hochkontrast-Farbschemata).

Um die Quellreihenfolge zu testen, können Sie das CSS einer Seite ausschalten und sehen, wie verständlich sie ohne CSS ist. Sie könnten dies manuell tun, indem Sie das CSS aus Ihrem Code entfernen, aber der einfachste Weg ist die Verwendung von Browser-Funktionalitäten, zum Beispiel:

- Firefox: Wählen Sie _Ansicht > Seitenstil > Kein Stil_ aus dem Hauptmenü.
- Safari: [Öffnen Sie die Entwickler-Tools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser), klicken Sie auf die Schaltfläche _Geräteeinstellungen_ oben links im Entwickler-Tools-Panel (sieht aus wie ein Computermonitor), und aktivieren Sie das Kontrollkästchen "CSS deaktivieren" im erschienenen Panel.
- Chrome/Edge: Installieren Sie die [Web Developer Toolbar](https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm) Erweiterung und starten Sie den Browser neu. Klicken Sie auf das "Web Developer" Zahnrad-Symbol, das nun im Erweiterungsmenü verfügbar sein sollte, und wählen Sie _CSS > Alle Stile deaktivieren_.

### Prüfwerkzeuge für Farbkontraste

Wenn Sie ein Farbschema für Ihre Website wählen, sollten Sie sicherstellen, dass die Textfarbe (Vordergrund) einen guten Kontrast zur Hintergrundfarbe hat. Ihr Design mag cool aussehen, aber es nützt nichts, wenn Leute Ihre Inhalte nicht lesen können. Verwenden Sie ein Tool wie den [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM, um zu prüfen, ob Ihr Schema ausreichend kontrastiert.

Ein weiterer Tipp ist, nur Farbe für Wegweiser oder das Hervorheben wichtiger Informationen zu verwenden, da dies von Menschen mit Sehschwächen wie Farbenblindheit übersehen werden könnte. Anstatt zum Beispiel erforderliche Formularfelder in Rot zu markieren, markieren Sie sie mit einem Sternchen und in Rot.

> [!NOTE]
> Ein hoher Kontrastverhältnis ermöglicht es auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm verwendet, Seiten in einer hellen Umgebung, wie z. B. Sonnenlicht, besser zu lesen.

### Prüfwerkzeuge für Audits

Es gibt mehrere Auditing-Tools, in die Sie Ihre Webseiten einspeisen können. Sie werden diese Seiten durchsehen und eine Liste der auf der Seite vorhandenen Barrierefreiheitsprobleme zurückgeben. Schauen wir uns [Wave](https://wave.webaim.org/) als Beispiel an, ein Online-Tool zur Barrierefreiheitstests, das eine Webadresse akzeptiert und eine annotierte Ansicht dieser Seite mit hervorgehobenen Barrierefreiheitsproblemen zurückgibt.

1. Gehen Sie zur [Wave-Startseite](https://wave.webaim.org/).
2. Geben Sie die URL unseres [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) Beispiels in das Text-Eingabefeld oben auf der Seite ein. Drücken Sie dann die Eingabetaste oder klicken/tippen Sie auf den Pfeil am rechten Rand des Eingabefelds.
3. Die Seite sollte die vorhandenen Barrierefreiheitsprobleme hervorheben. Klicken Sie auf die angezeigten Symbole, um mehr Informationen über jedes der von Waves Auswertung identifizierten Probleme zu sehen.

Andere zu überprüfende Auditing-Tools:

- [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)
- [ANDI bookmarklet](https://www.ssa.gov/accessibility/andi/help/install.html)
- [Google Lighthouse accessibility audits](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)

> [!NOTE]
> Solche Tools sind nicht ausreichend, um all Ihre Barrierefreiheitsprobleme alleine zu lösen. Sie benötigen eine Kombination aus diesen, Wissen und Erfahrung, Benutzertests usw., um ein vollständiges Bild zu bekommen.

Das [Deque's aXe Tool](https://www.deque.com/axe/) geht etwas weiter als die oben erwähnten Auditing-Tools. Wie die anderen überprüft es Seiten und gibt Barrierefreiheitsfehler zurück. Die wahrscheinlich unmittelbar nützlichste Form ist die der Browsererweiterungen:

- [aXe für Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe für Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Diese fügen den Entwicklertools der Browser einen Reiter zur Barrierefreiheit hinzu. Zum Beispiel haben wir die Firefox-Version installiert und sie genutzt, um unser [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) Beispiel zu prüfen. Wir erhielten die folgenden Ergebnisse:

![Ein Screenshot von Barrierefreiheitsproblemen, die vom Axe-Tool identifiziert wurden.](axe-screenshot.png)

aXe ist auch über `npm` installierbar und kann in Task-Runner wie [Grunt](https://gruntjs.com/) und [Gulp](https://gulpjs.com/) integriert werden, sowie mit Automatisierungs-Frameworks wie [Selenium](https://www.selenium.dev/) und [Cucumber](https://cucumber.io/), Test-Frameworks wie [Jasmine](https://jasmine.github.io/) und mehr (siehe erneut die [Haupt aXe Seite](https://www.deque.com/axe/) für Details).

## Screenreader

Einer der häufigsten unterstützenden Technologien, den Menschen mit Behinderungen verwenden — und einer der häufigsten, die Sie verwenden werden, um die Barrierefreiheit Ihrer Webseiten zu testen — sind **Screenreader**. Diese sind Softwarestücke, die Webseiteninhalte oder Inhalte von anderen auf dem Betriebssystem eines Benutzers installierten Apps vorlesen. Screenreader ermöglichen es Menschen, Computer zu nutzen, ohne visuelle Inhalte sehen zu müssen.

Webbrowser stellen Informationen über die Inhalte der Seite für Screenreader (und andere unterstützende Technologien) bereit, um durch eine Darstellung namens {{Glossary("Accessibility_tree", "Barrierefreibaum")}} an den Benutzer zu kommunizieren. Dies bietet semantische Informationen wie Namen und Beschreibungen von Elementen, ihren Zweck oder ihre Rolle (ist es ein Button oder ein Eingabefeld?) und ob sie sich in einem bestimmten Zustand befinden (zum Beispiel, ob eine Dialogbox offen oder geschlossen ist).

Diese Informationen könnten im Fall eines Textabsatzes trivial erscheinen, der sich ziemlich genau so anhört, wie er geschrieben ist, jedoch kann es bei Benutzeroberflächenelementen wie einem Dropdown-Menü oder einem Videoplayer komplexer werden. Deshalb ist es sehr wichtig, semantisches HTML korrekt zu verwenden, was Sie im nächsten Artikel dieses Moduls detailliert betrachten werden. Wenn Sie Inhalte mit dem falschen Element auszeichnen, könnte dies Screenreader-Benutzer verwirren.

Stellen Sie sicher, dass auf Ihrem Entwicklungsgerät ein Screenreader installiert ist, und versuchen Sie, Ihre Lieblingswebseiten über einen Screenreader zu nutzen, wie im Folgenden besprochen. Verstehen, wie sehbehinderte Menschen das Internet nutzen, ist der Schlüssel zur Gestaltung von Produkten, die für alle besser funktionieren.

### Welche Screenreader sind verfügbar?

Es gibt mehrere verfügbare Screenreader:

- Einige sind kostenpflichtige kommerzielle Produkte, wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows).
- Einige sind kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows und macOS) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Einige sind in das Betriebssystem eingebaut, wie [VoiceOver](https://www.apple.com/accessibility/features/?vision) (macOS und iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf Chromebooks), und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Im Allgemeinen sind Screenreader separate Apps, die auf dem Host-Betriebssystem laufen können und sowohl Webseiten als auch Inhalte in anderen Apps vorlesen können (dies ist nicht immer der Fall; ChromeVox ist zum Beispiel eine Browsererweiterung). Screenreader haben tendenziell einige Unterschiede im genauen Verhalten und den Steuerungen, daher müssen Sie die Dokumentation für den von Ihnen gewählten Screenreader konsultieren, um alle Details zu erhalten. Dennoch arbeiten alle im Wesentlichen in derselben Weise.

In den nächsten Abschnitten werden wir einige Tests mit ein paar verschiedenen Screenreadern durchgehen, um Ihnen eine allgemeine Vorstellung davon zu geben, wie sie funktionieren und wie man mit ihnen testet.

> [!NOTE]
> WebAIM's [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/) bietet nützliche Informationen über die Nutzung von Screenreadern und was am besten für sie funktioniert. Siehe auch [Screen Reader User Survey #10 Results](https://webaim.org/projects/screenreadersurvey10/#used) für einige interessante Statistiken zur Nutzung von Screenreadern.

#### VoiceOver

VoiceOver (VO) ist kostenlos mit Apple Mac/iPhone/iPad erhältlich, daher ist es nützlich für Tests auf Desktop/Mobilgeräten, wenn Sie Apple-Produkte verwenden. Wir haben es auf macOS auf einem MacBook Pro getestet.

Um es einzuschalten, drücken Sie <kbd>Cmd</kbd> + <kbd>F5</kbd>. Wenn Sie VO noch nicht verwendet haben, erhalten Sie einen Begrüßungsbildschirm, auf dem Sie wählen können, ob Sie VO starten oder nicht, und durch ein ziemlich nützliches Tutorial zur Nutzung geführt werden. Zum Ausschalten drücken Sie erneut <kbd>Cmd</kbd> + <kbd>F5</kbd>.

> [!NOTE]
> Sie sollten das Tutorial mindestens einmal durchgehen — es ist eine wirklich nützliche Möglichkeit, VO zu lernen.

Wenn VO eingeschaltet ist, sieht der Bildschirm größtenteils gleich aus, aber Sie sehen ein schwarzes Feld unten links auf dem Bildschirm, das Informationen zu dem enthält, was VO aktuell ausgewählt hat. Die aktuelle Auswahl wird ebenfalls hervorgehoben, mit einem schwarzen Rand — diese Hervorhebung wird als der **VO-Cursor** bezeichnet.

![Ein Beispiel-Screenshot, der das Testen der Barrierefreiheit mit VoiceOver auf der MDN-Homepage zeigt. Unten links im Bild ist eine Hervorhebung der auf der Webseite ausgewählten Informationen.](voiceover.png)

Um VO zu verwenden, werden Sie viel Gebrauch vom "VO-Modifikator" machen — dies ist eine Taste oder Tastenkombination, die Sie zusätzlich zu den eigentlichen VO-Tastaturkürzeln drücken müssen, damit sie funktionieren. Die Verwendung eines Modifikators ist bei Screenreadern üblich, um zu verhindern, dass ihre Befehle mit anderen Befehlen in Konflikt geraten. Im Fall von VO kann der Modifikator entweder <kbd>CapsLock</kbd> oder <kbd>Ctrl</kbd> + <kbd>Option</kbd> sein.

VO hat viele Tastaturbefehle, und wir werden nicht alle hier auflisten. Die grundlegenden, die Sie für die Webseitentests benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastaturkürzeln bedeutet "VO" "der VoiceOver-Modifikator".

<table class="standard-table no-markdown">
  <caption>
    Häufige VoiceOver Tastenkombinationen
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
      <td>Bewegen Sie den VO-Cursor nach oben, rechts, unten, links.</td>
    </tr>
    <tr>
      <td>VO + Leertaste</td>
      <td>
        Wählen/aktivieren Sie die von dem VO-Cursor hervorgehobenen Elemente. Dazu gehören
        Elemente, die im Rotor ausgewählt sind (siehe unten).
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>Umschalttaste</kbd> + Pfeil nach unten</td>
      <td>
        Wechseln Sie in eine Gruppe von Elementen wie eine HTML-Tabelle oder ein Formular. Wenn
        Sie sich in einer Gruppe befinden, können Sie sich darin bewegen und darin Elemente
        auswählen, indem Sie die obigen Befehle wie gewohnt verwenden.
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>Umschalttaste</kbd> + Pfeil nach oben</td>
      <td>Verlassen Sie eine Gruppe.</td>
    </tr>
    <tr>
      <td>VO + <kbd>C</kbd></td>
      <td>(wenn in einer Tabelle) Lesen Sie die Kopfzeile der aktuellen Spalte.</td>
    </tr>
    <tr>
      <td>VO + <kbd>R</kbd></td>
      <td>(wenn in einer Tabelle) Lesen Sie die Kopfzeile der aktuellen Zeile.</td>
    </tr>
    <tr>
      <td>VO + <kbd>C</kbd> + <kbd>C</kbd> (zwei C in Folge)</td>
      <td>
        (wenn in einer Tabelle) Lesen Sie die gesamte aktuelle Spalte, einschließlich der Kopfzeile.
      </td>
    </tr>
    <tr>
      <td>VO + <kbd>R</kbd> + <kbd>R</kbd> (zwei R in Folge)</td>
      <td>
        (wenn in einer Tabelle) Lesen Sie die gesamte aktuelle Zeile, einschließlich der Kopfzeilen,
        die zu jeder Zelle gehören.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeil nach links, VO + Pfeil nach rechts</td>
      <td>
        (wenn in einigen horizontalen Optionen, wie einem Datumsauswahlfeld)
        Wechseln Sie zwischen den Optionen.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeil nach oben, VO + Pfeil nach unten</td>
      <td>
        (wenn in einigen horizontalen Option
