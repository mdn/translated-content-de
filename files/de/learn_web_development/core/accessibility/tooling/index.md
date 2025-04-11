---
title: Barrierefreiheitstools und unterstützende Technologien
short-title: Accessibility tools
slug: Learn_web_development/Core/Accessibility/Tooling
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}

> [!NOTE]
> Der Inhalt dieses Artikels ist derzeit unvollständig, entschuldigen Sie bitte dafür! Wir arbeiten hart daran, den Bereich „MDN Learn Web Development“ zu verbessern, und werden die als unvollständig („TODO“) markierten Stellen bald fertigstellen.

Als nächstes richten wir unsere Aufmerksamkeit auf Barrierefreiheitstools und bieten Informationen über die Arten von Tools, die Sie verwenden können, um Barrierefreiheitsprobleme zu lösen, sowie die unterstützenden Technologien, die von Menschen mit Behinderungen beim Surfen im Internet genutzt werden. Sie werden diese Tools in den folgenden Artikeln verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">grundlegendes Verständnis von Barrierefreiheitskonzepten</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Vertrautheit mit der Art von Tools, die Sie zur Lösung von Barrierefreiheitsproblemen verwenden können, beispielsweise Prüfungstools.</li>
          <li>Einrichtung von Screenreadern und deren Verwendung zum Testen von Websites auf Desktop und Mobilgeräten.</li>
          <li>Andere unterstützende Technologien wie große Text- oder Brailletastaturen, alternative Zeigegeräte und Bildschirmvergrößerer.</li>
          <li>Die Bedeutung von Benutzertests neben automatisierten Tests.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheitstools

Lassen Sie uns einen Blick auf die Tools werfen, die bei der Implementierung von barrierefreien Websites und der Behebung von Barrierefreiheitsproblemen verwendet werden können.

### Testen der Quellreihenfolge

Ihr Inhalt sollte in seiner Quellreihenfolge logisch sinnvoll sein – Sie können ihn später jederzeit mit CSS an die gewünschte Stelle platzieren, aber Sie sollten die Quellreihenfolge von Anfang an richtig festlegen.

Als Test können Sie das CSS einer Website deaktivieren und sehen, wie verständlich sie ohne CSS ist. Sie könnten dies manuell tun, indem Sie einfach das CSS aus Ihrem Code entfernen, aber der einfachste Weg ist die Verwendung von Browserfunktionen, zum Beispiel:

- Firefox: Wählen Sie im Hauptmenü _Ansicht > Seitenstil > Kein Stil_.
- Safari: Wählen Sie im Hauptmenü _Entwickeln > Stile deaktivieren_ (um das Menü _Entwickeln_ zu aktivieren, wählen Sie _Safari > Einstellungen > Erweitert > Menü „Entwickeln“ in der Menüleiste anzeigen_).
- Chrome: Installieren Sie die Web Developer Toolbar-Erweiterung, starten Sie dann den Browser neu. Klicken Sie auf das Erscheinungsbild-Zahnrad, das angezeigt wird, und wählen Sie dann _CSS > Alle Stile deaktivieren_.
- Edge: Wählen Sie im Hauptmenü _Ansicht > Stil > Kein Stil_.

### Farbkontrastprüfer

Bei der Auswahl eines Farbschemas für Ihre Website sollten Sie sicherstellen, dass sich die Textfarbe (Vordergrund) gut von der Hintergrundfarbe abhebt. Ihr Design mag cool aussehen, ist jedoch nutzlos, wenn Menschen mit Sehbehinderungen wie Farbenblindheit Ihren Inhalt nicht lesen können. Verwenden Sie ein Tool wie WebAIMs [Color Contrast Checker](https://webaim.org/resources/contrastchecker/), um zu überprüfen, ob Ihr Schema ausreichend kontrastiert.

Ein weiterer Tipp ist, sich nicht ausschließlich auf Farbe für Informationen oder Hinweise zu verlassen, da dies für diejenigen, die die Farbe nicht sehen können, nicht gut ist. Anstatt zum Beispiel benötigte Formularfelder rot zu markieren, kennzeichnen Sie sie zusätzlich mit einem Sternchen in Rot.

> [!NOTE]
> Ein hoher Kontrast ermöglicht es auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm verwendet, Seiten besser zu lesen, wenn er sich in einer hellen Umgebung wie Sonnenlicht befindet.

### Prüfungswerkzeuge

Es gibt eine Reihe von Prüfungswerkzeugen, in die Sie Ihre Webseiten einspeisen können. Sie werden sie überprüfen und eine Liste der auf der Seite vorhandenen Barrierefreiheitsprobleme zurückgeben. Schauen wir uns ein Beispiel an, indem wir [Wave](https://wave.webaim.org/), ein Online-Accessibility-Testtool, verwenden, das eine Webadresse akzeptiert und eine annotierte Ansicht dieser Seite mit hervorgehobenen Barrierefreiheitsproblemen zurückgibt.

1. Gehen Sie zur [Wave-Startseite](https://wave.webaim.org/).
2. Geben Sie die URL unseres [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) Beispiels in das Textfeld ein, das sich in der Nähe des oberen Randes der Seite befindet. Drücken Sie dann die Eingabe- oder Klick/Tap-Taste auf dem Pfeil am rechten Ende des Eingabefeldes.
3. Die Seite sollte mit einer Beschreibung der Barrierefreiheitsprobleme antworten. Klicken Sie auf die angezeigten Symbole, um weitere Informationen zu jedem der von Wave identifizierten Probleme zu sehen.

Andere Prüfungswerkzeuge, die es sich lohnt, auszuprobieren:

- [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)
- [ANDI Bookmarklet](https://www.ssa.gov/accessibility/andi/help/install.html)
- [Google Lighthouse Accessibility Audits](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)

> [!NOTE]
> Solche Tools sind allein nicht ausreichend, um alle Ihre Barrierefreiheitsprobleme zu lösen. Sie benötigen eine Kombination dieser, sowie Wissen und Erfahrung, Benutzertests usw., um ein vollständiges Bild zu erhalten.

### Automatisierungstools

Das [Deque's aXe Tool](https://www.deque.com/axe/) geht ein bisschen weiter als die oben erwähnten Prüfungswerkzeuge. Wie die anderen überprüft es Seiten und gibt Barrierefreiheitsfehler zurück. Die nützlichste Form ist wahrscheinlich die Browsererweiterungen:

- [aXe für Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe für Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Diese fügen den Entwicklerwerkzeugen des Browsers einen Barrierefreiheits-Tab hinzu. Zum Beispiel haben wir die Firefox-Version installiert und dann genutzt, um unser [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) Beispiel zu prüfen. Wir erhielten folgende Ergebnisse:

![Ein Screenshot von durch das Axe-Tool identifizierten Barrierefreiheitsproblemen.](axe-screenshot.png)

aXe kann auch mithilfe von `npm` installiert und mit Task-Runnern wie [Grunt](https://gruntjs.com/) und [Gulp](https://gulpjs.com/), Automatisierungsframeworks wie [Selenium](https://www.selenium.dev/) und [Cucumber](https://cucumber.io/), Testing-Frameworks wie [Jasmine](https://jasmine.github.io/) und mehr integriert werden (siehe erneut die [Hauptseite von aXe](https://www.deque.com/axe/) für Details).

## Screenreader

Es lohnt sich auf jeden Fall, mit einem Screenreader zu testen, um sich daran zu gewöhnen, wie stark sehbehinderte Menschen das Web nutzen. Es stehen mehrere Screenreader zur Verfügung:

- Einige sind kostenpflichtige kommerzielle Produkte, wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows).
- Einige sind kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows und macOS) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Einige sind im Betriebssystem integriert, wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS und iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf Chromebooks) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Im Allgemeinen sind Screenreader separate Apps, die auf dem Host-Betriebssystem laufen und nicht nur Webseiten, sondern auch Texte in anderen Apps lesen können. Das ist nicht immer der Fall (ChromeVox ist eine Browser-Erweiterung), aber normalerweise neigen Screenreader dazu, auf etwas unterschiedliche Weise zu agieren und unterschiedliche Steuerungen zu haben, sodass Sie die Dokumentation für Ihren gewählten Screenreader konsultieren müssen, um alle Details zu erfahren – allerdings arbeiten sie im Wesentlichen auf dieselbe Art und Weise.

Gehen wir einige Tests mit ein paar unterschiedlichen Screenreadern durch, um Ihnen eine allgemeine Vorstellung davon zu geben, wie sie funktionieren und wie Sie mit ihnen testen können.

> [!NOTE]
> WebAIMs [Gestaltung für Bildschirmlesekompatibilität](https://webaim.org/techniques/screenreader/) bietet einige nützliche Informationen über die Nutzung von Screenreadern und was für Screenreader am besten funktioniert. Siehe auch [Screen Reader User Survey #9 Ergebnisse](https://webaim.org/projects/screenreadersurvey9/#used) für einige interessante Statistiken zur Nutzung von Screenreadern.

### VoiceOver

VoiceOver (VO) ist kostenlos in Ihrem Mac/iPhone/iPad enthalten, sodass es nützlich für Tests auf Desktop/Mobilgeräten ist, wenn Sie Apple-Produkte verwenden. Wir werden VO unter macOS auf einem MacBook Pro testen.

Um es zu aktivieren, drücken Sie Cmd + F5. Wenn Sie VO noch nie verwendet haben, wird ein Willkommensbildschirm angezeigt, auf dem Sie wählen können, ob Sie VO starten oder nicht und ein recht nützliches Tutorial durchlaufen können, um die Verwendung zu lernen. Um es zu deaktivieren, drücken Sie erneut Cmd + F5.

> [!NOTE]
> Sie sollten das Tutorial mindestens einmal durchlaufen – es ist eine wirklich nützliche Möglichkeit, VO zu lernen.

Wenn VO aktiviert ist, sieht die Anzeige größtenteils gleich aus, aber Sie sehen ein schwarzes Feld unten links auf dem Bildschirm, das Informationen über das derzeit von VO ausgewählte Element enthält. Die aktuelle Auswahl wird ebenfalls mit einem schwarzen Rahmen hervorgehoben – dieses Highlight wird als **VO-Cursor** bezeichnet.

![Ein Beispielscreenshot, der die Barrierefreiheitstests mit VoiceOver auf der MDN-Homepage demonstriert. Unten links im Bild ist ein Highlight der auf der Webseite ausgewählten Informationen.](voiceover.png)

Um VO zu verwenden, werden Sie viel Gebrauch vom „VO-Modifikator“ machen – dies ist eine Taste oder Tastenkombination, die Sie zusätzlich zu den tatsächlichen VO-Tastenkombinationen verwenden müssen, um sie zum Funktionieren zu bringen. Die Verwendung eines Modifikators wie dieser ist bei Screenreadern üblich, um zu verhindern, dass ihre Befehle mit anderen Befehlen in Konflikt geraten. Im Fall von VO kann der Modifikator entweder die Feststelltaste oder Strg + Option sein.

VO verfügt über viele Tastenkombinationen, und wir werden sie hier nicht alle auflisten. Die grundlegenden, die Sie für das Testen von Webseiten benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastenkombinationen bedeutet „VO“ „der VoiceOver-Modifikator“.

<table class="standard-table no-markdown">
  <caption>
    Die gängigsten VoiceOver-Tastenkombinationen
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
        Elemente auswählen/aktivieren, die vom VO-Cursor hervorgehoben werden. Dazu gehören Elemente, die im Rotor ausgewählt sind (siehe unten).
      </td>
    </tr>
    <tr>
      <td>VO + Umschalt + Abwärtspfeil</td>
      <td>
        In eine Gruppe von Elementen wechseln (z. B. eine HTML-Tabelle oder ein Formular usw.). Sobald Sie sich in einer Gruppe befinden, können Sie sich bewegen und Elemente auswählen, die sich in dieser Gruppe mit den oben genannten Befehlen befinden.
      </td>
    </tr>
    <tr>
      <td>VO + Umschalt + Aufwärtspfeil</td>
      <td>Aus einer Gruppe herausgehen.</td>
    </tr>
    <tr>
      <td>VO + C</td>
      <td>(wenn in einer Tabelle) Kopfzeile der aktuellen Spalte vorlesen.</td>
    </tr>
    <tr>
      <td>VO + R</td>
      <td>(wenn in einer Tabelle) Kopfzeile der aktuellen Zeile vorlesen.</td>
    </tr>
    <tr>
      <td>VO + C + C (zwei C hintereinander)</td>
      <td>
        (wenn in einer Tabelle) Ganze aktuelle Spalte vorlesen, einschließlich der Kopfzeile.
      </td>
    </tr>
    <tr>
      <td>VO + R + R (zwei R hintereinander)</td>
      <td>
        (wenn in einer Tabelle) Ganze aktuelle Zeile vorlesen, einschließlich der Kopfzeilen, die sich auf jede Zelle beziehen.
      </td>
    </tr>
    <tr>
      <td>VO + Linkspfeil, VO + Rechtspfeil</td>
      <td>
        (wenn innerhalb einiger horizontaler Optionen, wie bei einem Datums- oder Zeitwähler) Zwischen Optionen wechseln.
      </td>
    </tr>
    <tr>
      <td>VO + Aufwärtspfeil, VO + Abwärtspfeil</td>
      <td>
        (wenn innerhalb einiger horizontaler Optionen, wie bei einem Datums- oder Zeitwähler) Aktuelle Option ändern.
      </td>
    </tr>
    <tr>
      <td>VO + U</td>
      <td>
        Rotor verwenden, der Listen von Überschriften, Links, Formularsteuerelementen usw. zur einfachen Navigation anzeigt.
      </td>
    </tr>
    <tr>
      <td>VO + Linkspfeil, VO + Rechtspfeil</td>
      <td>
        (wenn innerhalb des Rotors) Zwischen verschiedenen Listen im Rotor wechseln.
      </td>
    </tr>
    <tr>
      <td>VO + Aufwärtspfeil, VO + Abwärtspfeil</td>
      <td>
        (wenn innerhalb des Rotors) Zwischen verschiedenen Elementen in der aktuellen Rotorliste wechseln.
      </td>
    </tr>
    <tr>
      <td>Esc</td>
      <td>(wenn im Rotor) Rotor verlassen.</td>
    </tr>
    <tr>
      <td>Strg</td>
      <td>(wenn VO spricht) Sprache anhalten/fortsetzen.</td>
    </tr>
    <tr>
      <td>VO + Z</td>
      <td>Das letzte Stück der Rede neu starten.</td>
    </tr>
    <tr>
      <td>VO + D</td>
      <td>In das Dock des Macs gehen, sodass Sie darin auszuführende Apps auswählen können.</td>
    </tr>
  </tbody>
</table>

Diese Menge an Befehlen scheint viel zu sein, aber es ist nicht so schlimm, wenn man sich daran gewöhnt, und VO gibt Ihnen regelmäßig Erinnerungen daran, welche Befehle an bestimmten Stellen zu verwenden sind. Probieren Sie VO jetzt aus; Sie können dann mit einigen unserer Beispiele im Abschnitt [Screenreader-Testen](#screenreader-testen) weitermachen.

### NVDA

NVDA ist nur für Windows verfügbar und Sie müssen es installieren.

1. Laden Sie es von [nvaccess.org](https://www.nvaccess.org/) herunter. Sie können wählen, ob Sie eine Spende machen oder es kostenlos herunterladen möchten; Sie müssen außerdem Ihre E-Mail-Adresse angeben, bevor Sie es herunterladen können.
2. Nach dem Herunterladen installieren Sie es – doppelklicken Sie auf die Installationsdatei, akzeptieren Sie die Lizenz und folgen Sie den Anweisungen.
3. Um NVDA zu starten, doppelklicken Sie auf die Programmdatei/Verknüpfung oder verwenden Sie die Tastenkombination Strg + Alt + N. Beim Start sehen Sie das NVDA-Willkommensdialogfeld. Hier können Sie aus ein paar Optionen auswählen und dann die Schaltfläche _OK_ drücken, um loszulegen.

NVDA ist nun auf Ihrem Computer aktiv.

Um NVDA zu verwenden, werden Sie viel Gebrauch vom „NVDA-Modifikator“ machen – dies ist eine Taste, die Sie zusätzlich zu den tatsächlichen NVDA-Tastenkombinationen verwenden müssen. Die Verwendung eines Modifikators wie dieser ist bei Screenreadern üblich, um zu verhindern, dass ihre Befehle mit anderen Befehlen in Konflikt geraten. Im Fall von NVDA kann der Modifikator entweder Einfügen (Standard) oder Feststelltaste sein (kann durch Markieren des ersten Kontrollkästchens im NVDA-Willkommensdialog vor dem Drücken von _OK_ ausgewählt werden).

> [!NOTE]
> NVDA ist subtiler als VoiceOver in Bezug auf die Hervorhebung seines aktuellen Orts und seiner aktuellen Tätigkeit. Wenn Sie durch Überschriften, Listen usw. scrollen, werden normalerweise ausgewählte Elemente mit einer subtilen Umrandung hervorgehoben, aber dies ist nicht bei allem der Fall. Wenn Sie sich völlig verloren fühlen, können Sie durch Drücken von Strg + F5 die aktuelle Seite aktualisieren und von oben beginnen.

NVDA verfügt über viele Tastenkombinationen, und wir werden sie hier nicht alle auflisten. Die grundlegenden, die Sie für das Testen von Webseiten benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastenkombinationen bedeutet „NVDA“ „der NVDA-Modifikator“.

<table class="standard-table no-markdown">
  <caption>
    Die gängigsten NVDA-Tastenkombinationen
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
      <td>Schaltet NVDA wieder aus, nachdem es gestartet wurde.</td>
    </tr>
    <tr>
      <td>NVDA + Aufwärtspfeil</td>
      <td>Die aktuelle Zeile vorlesen.</td>
    </tr>
    <tr>
      <td>NVDA + Abwärtspfeil</td>
      <td>Ab der aktuellen Position lesen.</td>
    </tr>
    <tr>
      <td>Aufwärtspfeil und Abwärtspfeil, oder Umschalt + Tab und Tab</td>
      <td>Zum vorherigen/nächsten Element auf der Seite wechseln und es lesen.</td>
    </tr>
    <tr>
      <td>Linkspfeil und Rechtspfeil</td>
      <td>Zum vorherigen/nächsten Zeichen im aktuellen Element wechseln und es lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + H und H</td>
      <td>Zum vorherigen/nächsten Titel wechseln und ihn lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + K und K</td>
      <td>Zum vorherigen/nächsten Link wechseln und ihn lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + D und D</td>
      <td>
        Zum vorherigen/nächsten Dokumentlandmark (z. B. <code>&#x3C;nav></code>) wechseln
        und es lesen.
      </td>
    </tr>
    <tr>
      <td>Umschalt + 1–6 und 1–6</td>
      <td>Zum vorherigen/nächsten Titel (Ebene 1-6) wechseln und ihn lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + F und F</td>
      <td>Zum vorherigen/nächsten Formulareingabefeld wechseln und darauf fokussieren.</td>
    </tr>
    <tr>
      <td>Umschalt + T und T</td>
      <td>Zum vorherigen/nächsten Datentabelle wechseln und darauf fokussieren.</td>
    </tr>
    <tr>
      <td>Umschalt + B und B</td>
      <td>Zum vorherigen/nächsten Knopf wechseln und dessen Etikett lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + L und L</td>
      <td>Zur vorherigen/nächsten Liste wechseln und das erste Listenelement lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + I und I</td>
      <td>Zum vorherigen/nächsten Listenelement wechseln und es lesen.</td>
    </tr>
    <tr>
      <td>Eingabetaste/Return</td>
      <td>
        (wenn Link/Button oder anderes aktivierbares Element ausgewählt ist) Aktivieren Sie das Element.
      </td>
    </tr>
    <tr>
      <td>NVDA + Leertaste</td>
      <td>
        (wenn Formular ausgewählt ist) Formular betreten, um individuelle Elemente auszuwählen, oder Formular verlassen, wenn Sie bereits darin sind.
      </td>
    </tr>
    <tr>
      <td>Umschalt + Tab und Tab</td>
      <td>(wenn im Formular) Zwischen Formulareingabe wechseln.</td>
    </tr>
    <tr>
      <td>Aufwärtspfeil und Abwärtspfeil</td>
      <td>
        (wenn im Formular) Formulareingabewerte ändern (im Fall von Dingen wie Auswahlboxen).
      </td>
    </tr>
    <tr>
      <td>Leertaste</td>
      <td>(wenn im Formular) Ausgewählten Wert auswählen.</td>
    </tr>
    <tr>
      <td>Strg + Alt + Pfeiltasten</td>
      <td>(wenn Tabelle ausgewählt ist) Zwischen Tabellenzellen wechseln.</td>
    </tr>
  </tbody>
</table>

### Screenreader-Testen

Nun, da Sie sich an die Verwendung eines Screenreaders gewöhnt haben, möchten wir, dass Sie ihn verwenden, um einige schnelle Barrierefreiheitstests durchzuführen, um eine Vorstellung davon zu bekommen, wie Screenreader mit guten und schlechten Webseitenmerkmalen umgehen:

- Schauen Sie sich [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) an, und beachten Sie, wie die Überschriften vom Screenreader gefunden werden und zur Navigation genutzt werden können. Schauen Sie sich nun [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) an und beachten Sie, wie der Screenreader keine dieser Informationen erhält. Stellen Sie sich vor, wie ärgerlich dies bei dem Versuch wäre, eine wirklich lange Seite mit Text zu navigieren.
- Schauen Sie sich [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) an und beachten Sie, wie sie im Kontext sinnvoll sind. Dies ist nicht der Fall bei [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) – sie sind alle einfach nur "hier klicken".
- Schauen Sie sich [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) an und beachten Sie, wie die Formulareingaben durch ihre Etiketten beschrieben werden, da wir `<label>`-Elemente ordnungsgemäß verwendet haben. In [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) erhalten sie ein unhilfreiches Etikett wie "leer".
- Schauen Sie sich unser [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) Beispiel an und sehen Sie, wie der Screenreader in der Lage ist, Spalten und Reihen von Inhalt zu assoziieren und sie alle zusammen zu lesen, da wir Kopfzeilen ordnungsgemäß definiert haben. In [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) können keine der Zellen überhaupt assoziiert werden. Beachten Sie, dass sich NVDA etwas seltsam zu verhalten scheint, wenn Sie nur eine einzelne Tabelle auf einer Seite haben; Sie könnten stattdessen [WebAIMs Tabellentestseite](https://webaim.org/articles/nvda/tables.htm) ausprobieren.
- Schauen Sie sich das [WAI-ARIA Live-Regions-Beispiel](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm) an, das wir früher gesehen haben, und beachten Sie, wie der Screenreader den ständig aktualisierten Abschnitt weiterlesen wird, wenn er aktualisiert wird.

## Benutzertests

Wie oben erwähnt, können Sie sich nicht allein auf automatisierte Tools verlassen, um Barrierefreiheitsprobleme auf Ihrer Website zu bestimmen. Es wird empfohlen, dass Sie bei der Erstellung Ihres Testplans, wenn möglich, einige Barrierefreiheits-Benutzergruppen einbeziehen. Versuchen Sie, einige Screenreader-Benutzer, einige reine Tastaturnutzer, einige nicht-hörende Benutzer und vielleicht andere Gruppen einzubeziehen, die Ihren Anforderungen entsprechen.

## Sonstige Hilfsmittel

Es gibt viele andere Arten von unterstützenden Technologien, wie zum Beispiel:

- Große Text- oder Brailletastaturen.
- Alternative Zeigegeräte wie Trackballs, Joysticks und Touchpads.
- Bildschirmvergrößerer.
- Spracherkennungssoftware.
- Schaltersteuerungen.

## Barrierefreiheitstesting-Checkliste

Die folgende Liste bietet Ihnen eine Checkliste, der Sie folgen können, um sicherzustellen, dass Sie das empfohlene Barrierefreiheitstesting für Ihr Projekt durchgeführt haben:

1. Stellen Sie sicher, dass Ihr HTML so semantisch korrekt wie möglich ist. [Validieren es](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML#html_validation) ist ein guter Anfang, ebenso wie die Verwendung eines [Prüfungstools](#prüfungswerkzeuge).
2. Überprüfen Sie, ob Ihr Inhalt Sinn ergibt, wenn das CSS deaktiviert ist.
3. Stellen Sie sicher, dass Ihre Funktionalität mit der Tastatur zugänglich ist (siehe [Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) für weitere Details). Testen Sie die Verwendung von Tab, Return/Enter usw.
4. Stellen Sie sicher, dass Ihr nicht-textlicher Inhalt [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) hat. Ein [Prüfungstool](#prüfungswerkzeuge) ist gut, um solche Probleme zu erkennen.
5. Stellen Sie sicher, dass der [Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast) Ihrer Website akzeptabel ist, durch die Verwendung eines geeigneten Prüfungstools.
6. Stellen Sie sicher, dass [versteckter Inhalt](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) von Screenreadern sichtbar ist.
7. Stellen Sie sicher, dass die Funktionalität, soweit möglich, auch ohne JavaScript nutzbar ist.
8. Verwenden Sie ARIA, um die Barrierefreiheit dort zu verbessern, wo es angemessen ist.
9. Lassen Sie Ihre Website durch ein [Prüfungstool](#prüfungswerkzeuge) laufen.
10. Testen Sie es mit einem Screenreader.
11. Schließen Sie eine Barrierefreiheitspolitik/-erklärung irgendwo auf Ihrer Website ein, um zu erklären, was Sie getan haben.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel eine Vorstellung davon gegeben, welche Tools Sie verwenden können, um Barrierefreiheitsprobleme zu beheben, sowie über die unterstützenden Technologien, die von Menschen mit Behinderungen genutzt werden, um auf das Internet zuzugreifen.

Im nächsten Artikel schauen wir, wie man barrierefreies HTML schreibt.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}
