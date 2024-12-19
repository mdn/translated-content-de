---
title: Barrierefreiheitstools und unterstützende Technologien
slug: Learn_web_development/Core/Accessibility/Tooling
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}

> [!NOTE]
> Der Inhalt in diesem Artikel ist derzeit unvollständig, sorry dafür! Wir arbeiten hart daran, den MDN Learn Web Development-Bereich zu verbessern, und wir werden bald die als unvollständig ("TODO") markierten Stellen fertigstellen.

Als nächstes richten wir unsere Aufmerksamkeit auf Barrierefreiheitstools und geben Ihnen Informationen zu den Arten von Werkzeugen, die Sie verwenden können, um Barrierefreiheitsprobleme zu lösen, sowie zu den unterstützenden Technologien, die von Menschen mit Behinderungen beim Surfen im Internet verwendet werden. Sie werden diese Werkzeuge in den folgenden Artikeln nutzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, ein <a href="/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">Grundverständnis von Barrierefreiheitskonzepten</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit den Arten von Werkzeugen, die Sie zur Lösung von Barrierefreiheitsproblemen verwenden können, wie z.B. Prüftools.</li>
          <li>Einrichten von Screenreadern und deren Verwendung zur Überprüfung von Websites auf Desktop und Mobilgeräten.</li>
          <li>Andere unterstützende Technologien wie z.B. große Text- oder Brailletastaturen, alternative Zeigegeräte und Bildschirmvergrößerer.</li>
          <li>Die Bedeutung von Benutzertests neben automatisierten Tests.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheitstools

Lassen Sie uns einen Blick auf die Werkzeuge werfen, die Sie bei der Implementierung barrierefreier Websites und der Behebung von Barrierefreiheitsproblemen nutzen können.

### Prüfung der Quellreihenfolge

Ihr Inhalt sollte in seiner Quellreihenfolge logisch Sinn ergeben – Sie können ihn später immer noch mit CSS nach Belieben platzieren, aber Sie sollten die Quellreihenfolge von Anfang an richtig festlegen.

Als Test können Sie das CSS einer Website deaktivieren und prüfen, wie verständlich sie ohne CSS ist. Sie könnten dies manuell tun, indem Sie das CSS einfach aus Ihrem Code entfernen, aber der einfachste Weg ist die Verwendung von Browser-Funktionen, zum Beispiel:

- Firefox: Wählen Sie im Hauptmenü _Ansicht > Seitenstil > Kein Stil_.
- Safari: Wählen Sie im Hauptmenü _Entwickeln > Stile deaktivieren_ (um das Menü _Entwickeln_ zu aktivieren, wählen Sie _Safari > Einstellungen > Erweitert > Entwicklermenü in Menüleiste anzeigen_).
- Chrome: Installieren Sie die Erweiterung Web Developer Toolbar, starten Sie den Browser neu, klicken Sie auf das Zahnradsymbol und wählen Sie _CSS > Alle Stile deaktivieren_.
- Edge: Wählen Sie im Hauptmenü _Ansicht > Stil > Kein Stil_.

### Prüfwerkzeuge für den Farbkontrast

Wenn Sie ein Farbschema für Ihre Website wählen, sollten Sie sicherstellen, dass die Textfarbe (Vordergrund) gut mit der Hintergrundfarbe kontrastiert. Ihr Design mag cool aussehen, aber es nützt nichts, wenn Menschen mit Sehbehinderungen wie Farbenblindheit Ihre Inhalte nicht lesen können. Nutzen Sie ein Werkzeug wie WebAIM's [Farbkontrastprüfer](https://webaim.org/resources/contrastchecker/), um zu überprüfen, ob Ihr Schema ausreichend kontrastiert.

Ein weiterer Tipp ist, sich nicht nur auf Farbe für Wegweiser/Informationen zu verlassen, da dies für diejenigen, die keine Farbe sehen können, nicht hilfreich ist. Anstatt z.B. erforderliche Formularfelder rot zu markieren, markieren Sie sie mit einem Sternchen und in Rot.

> [!NOTE]
> Ein hoher Kontrast ermöglicht es auch jedem, der ein Smartphone oder Tablet mit glänzendem Bildschirm verwendet, Seiten besser in einer hellen Umgebung, wie Sonnenlicht, zu lesen.

### Prüftools

Es gibt eine Reihe von Prüftools, in die Sie Ihre Webseiten einspeisen können. Sie analysieren die Seiten und geben eine Liste der vorhandenen Barrierefreiheitsprobleme auf der Seite zurück. Lassen Sie uns ein Beispiel ansehen, indem wir [Wave](https://wave.webaim.org/), ein Online-Barrierefreiheitsprüfungstool, das eine Webadresse akzeptiert und eine annotierte Ansicht dieser Seite mit hervorgehobenen Barrierefreiheitsproblemen zurückgibt, verwenden.

1. Gehen Sie zur [Wave-Startseite](https://wave.webaim.org/).
2. Geben Sie die URL unseres Beispiels [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) in das Text-Eingabefeld nahe der Seite ein. Drücken Sie dann die Eingabetaste oder klicken/tippen Sie auf den Pfeil am rechten Rand des Eingabefeldes.
3. Die Seite sollte mit einer Beschreibung der Barrierefreiheitsprobleme antworten. Klicken Sie auf die angezeigten Symbole, um weitere Informationen zu den von Wave ermittelten Problemen zu erhalten.

Andere Prüftools, die sich lohnen, anzusehen:

- [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)
- [ANDI Bookmarklet](https://www.ssa.gov/accessibility/andi/help/install.html)
- [Google Lighthouse Accessibility Audits](https://developer.chrome.com/docs/lighthouse/accessibility/)

> [!NOTE]
> Solche Werkzeuge sind nicht gut genug, um alle Ihre Barrierefreiheitsprobleme allein zu lösen. Sie benötigen eine Kombination daraus, Wissen und Erfahrung, Benutzertests etc., um ein vollständiges Bild zu bekommen.

### Automatisierungstools

[Deque's aXe tool](https://www.deque.com/axe/) geht etwas weiter als die oben genannten Prüftools. Wie die anderen überprüft es Seiten und gibt Barrierefreiheitsfehler zurück. Seine nützlichste Form sind wahrscheinlich die Browser-Erweiterungen:

- [aXe für Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe für Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Diese fügen den Entwicklertools des Browsers einen Barrierefreiheitsreiter hinzu. Zum Beispiel installierten wir die Firefox-Version und verwendeten sie, um unser Beispiel [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) zu prüfen. Wir erhielten die folgenden Ergebnisse:

![Ein Screenshot der von Axe identifizierten Barrierefreiheitsprobleme.](axe-screenshot.png)

aXe lässt sich auch mit `npm` installieren und kann in Task-Runner wie [Grunt](https://gruntjs.com/) und [Gulp](https://gulpjs.com/), Automatisierungs-Frameworks wie [Selenium](https://www.selenium.dev/) und [Cucumber](https://cucumber.io/), Unit-Testing-Frameworks wie [Jasmine](https://jasmine.github.io/), und mehr integriert werden (siehe hierzu auch die [Haupt-AXe-Seite](https://www.deque.com/axe/) für weitere Details).

## Screenreader

Es lohnt sich auf jeden Fall, mit einem Screenreader zu testen, um sich daran zu gewöhnen, wie stark sehbehinderte Menschen das Web nutzen. Es gibt eine Reihe von Screenreadern:

- Einige sind kostenpflichtige kommerzielle Produkte, wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows).
- Einige sind kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows und macOS) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Einige sind im Betriebssystem integriert, wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS und iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf Chromebooks) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Screenreader sind im Allgemeinen eigenständige Apps, die im Host-Betriebssystem laufen und nicht nur Webseiten, sondern auch Text in anderen Apps lesen können. Dies ist nicht immer der Fall (ChromeVox ist eine Browsererweiterung), aber normalerweise neigen Screenreader dazu, sich auf leicht unterschiedliche Weise zu verhalten und andere Steuerungen zu haben, sodass Sie die Dokumentation Ihres gewählten Screenreaders konsultieren müssen, um alle Details zu erfahren – sie funktionieren im Grunde alle ähnlich.

Lassen Sie uns einige Tests mit ein paar verschiedenen Screenreadern durchgehen, um Ihnen eine allgemeine Vorstellung davon zu geben, wie sie funktionieren und wie man mit ihnen testet.

> [!NOTE]
> WebAIMs [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/) bietet einige nützliche Informationen zur Nutzung von Screenreadern und was am besten für sie funktioniert. Siehe auch [Screen Reader User Survey #9 Ergebnisse](https://webaim.org/projects/screenreadersurvey9/#used) für einige interessante Statistiken zur Nutzung von Screenreadern.

### VoiceOver

VoiceOver (VO) ist kostenlos mit Ihrem Mac/iPhone/iPad erhältlich und nützlich für Tests auf Desktop und Mobilgerät, wenn Sie Apple-Produkte verwenden. Wir werden es auf macOS auf einem MacBook Pro testen.

Um es zu aktivieren, drücken Sie Cmd + F5. Wenn Sie VO noch nicht verwendet haben, wird Ihnen ein Begrüßungsbildschirm angezeigt, bei dem Sie auswählen können, ob Sie VO starten oder nicht, und ein sehr nützliches Tutorial durchlaufen können, um zu lernen, wie man es benutzt. Um es wieder auszuschalten, drücken Sie erneut Cmd + F5.

> [!NOTE]
> Sie sollten das Tutorial mindestens einmal durchlaufen – es ist ein wirklich nützlicher Weg, um VO zu lernen.

Wenn VO aktiviert ist, sieht die Anzeige im Wesentlichen gleich aus, aber Sie sehen einen schwarzen Kasten unten links auf dem Bildschirm mit Informationen darüber, was VO derzeit ausgewählt hat. Die aktuelle Auswahl wird auch hervorgehoben, mit einem schwarzen Rahmen – diese Hervorhebung ist als **VO-Cursor** bekannt.

![Ein Beispiel-Screenshot, der den Barrierefreiheitstest mit VoiceOver auf der MDN-Startseite zeigt. Unten links im Bild ist eine Hervorhebung der Informationen ausgewählt auf der Webseite.](voiceover.png)

Um VO zu verwenden, werden Sie viel Gebrauch vom "VO-Modifikator" machen – dies ist eine Taste oder Tastenkombination, die Sie zusätzlich zu den tatsächlichen VO-Tastaturkürzeln drücken müssen, damit sie funktionieren. Die Verwendung eines solchen Modifikators ist bei Screenreadern üblich, um ihre Befehle davor zu bewahren, mit anderen Befehlen zu kollidieren. Im Fall von VO kann der Modifikator entweder CapsLock oder Strg + Option sein.

VO hat viele Tastaturbefehle, und wir werden nicht alle hier auflisten. Die grundlegendsten Befehle, die Sie für Websitetests benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastaturkürzeln bedeutet "VO" "der VoiceOver-Modifikator".

<table class="standard-table no-markdown">
  <caption>
    Die häufigsten VoiceOver-Tastaturkürzel
  </caption>
  <thead>
    <tr>
      <th scope="col">Tastaturkürzel</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VO + Cursortasten</td>
      <td>Bewegen des VO-Cursors nach oben, rechts, unten, links.</td>
    </tr>
    <tr>
      <td>VO + Leertaste</td>
      <td>Auswählen/Aktivieren von Elementen, die vom VO-Cursor hervorgehoben werden. Dies umfasst auch im Rotor (siehe unten) ausgewählte Elemente.</td>
    </tr>
    <tr>
      <td>VO + Umschalt + nach unten</td>
      <td>In eine Gruppe von Elementen (wie eine HTML-Tabelle oder ein Formular usw.) wechseln. Innerhalb einer Gruppe können Sie sich bewegen und Elemente darin auswählen, wie gewohnt.</td>
    </tr>
    <tr>
      <td>VO + Umschalt + nach oben</td>
      <td>Aus einer Gruppe heraus wechseln.</td>
    </tr>
    <tr>
      <td>VO + C</td>
      <td>(wenn innerhalb einer Tabelle) Lesen der Kopfzeile der aktuellen Spalte.</td>
    </tr>
    <tr>
      <td>VO + R</td>
      <td>(wenn innerhalb einer Tabelle) Lesen der Kopfzeile der aktuellen Reihe.</td>
    </tr>
    <tr>
      <td>VO + C + C (zwei Cs hintereinander)</td>
      <td>(wenn innerhalb einer Tabelle) Lesen der gesamten aktuellen Spalte, einschließlich Kopfzeile.</td>
    </tr>
    <tr>
      <td>VO + R + R (zwei Rs hintereinander)</td>
      <td>(wenn innerhalb einer Tabelle) Lesen der gesamten aktuellen Reihe, einschließlich der Kopfzeilen, die zu jeder Zelle gehören.</td>
    </tr>
    <tr>
      <td>VO + linker Cursor, VO + rechter Cursor</td>
      <td>(wenn innerhalb einiger horizontaler Optionen, wie Datum- oder Zeitauswahl) Zwischen Optionen wechseln.</td>
    </tr>
    <tr>
      <td>VO + nach oben, VO + nach unten</td>
      <td>(wenn innerhalb einiger horizontaler Optionen, wie Datum- oder Zeitauswahl) Aktuelle Option ändern.</td>
    </tr>
    <tr>
      <td>VO + U</td>
      <td>Verwendung des Rotors, der Listen von Überschriften, Links, Formularelementen usw. zur einfachen Navigation anzeigt.</td>
    </tr>
    <tr>
      <td>VO + linker Cursor, VO + rechter Cursor</td>
      <td>(wenn innerhalb des Rotors) Zwischen verschiedenen Listen im Rotor wechseln.</td>
    </tr>
    <tr>
      <td>VO + nach oben, VO + nach unten</td>
      <td>(wenn innerhalb des Rotors) Zwischen verschiedenen Elementen in der aktuellen Rotorliste wechseln.</td>
    </tr>
    <tr>
      <td>Esc</td>
      <td>(wenn innerhalb des Rotors) Rotor verlassen.</td>
    </tr>
    <tr>
      <td>Strg</td>
      <td>(wenn VO spricht) Rede pausieren/fortsetzen.</td>
    </tr>
    <tr>
      <td>VO + Z</td>
      <td>Letztes Sprachstück erneut starten.</td>
    </tr>
    <tr>
      <td>VO + D</td>
      <td>In das Dock des Mac wechseln, um darin Apps auszuwählen, die ausgeführt werden sollen.</td>
    </tr>
  </tbody>
</table>

Das klingt nach vielen Befehlen, ist aber nicht so schlimm, wenn Sie sich daran gewöhnt haben, und VO gibt Ihnen regelmäßig Erinnerungen, welche Befehle an bestimmten Stellen verwendet werden sollen. Probieren Sie VO jetzt aus; Sie können dann einige unserer Beispiele im Abschnitt [Screenreader-Tests](#screenreader-tests) ausprobieren.

### NVDA

NVDA ist nur für Windows verfügbar und Sie müssen es installieren.

1. Laden Sie es von [nvaccess.org](https://www.nvaccess.org/) herunter. Sie können wählen, ob Sie eine Spende machen oder es kostenlos herunterladen möchten; Sie müssen ihnen auch Ihre E-Mail-Adresse geben, bevor Sie es herunterladen können.
2. Sobald es heruntergeladen wurde, installieren Sie es – doppelklicken Sie auf die Installationsdatei, akzeptieren Sie die Lizenz und folgen Sie den Anweisungen.
3. Um NVDA zu starten, doppelklicken Sie auf die Programmdatei/-verknüpfung oder verwenden Sie das Tastaturkürzel Strg + Alt + N. Sie sehen den NvDA-Begrüßungsdialog beim Start. Hier können Sie aus ein paar Optionen auswählen und dann auf die Schaltfläche _OK_ klicken, um fortzufahren.

NVDA ist jetzt auf Ihrem Computer aktiv.

Um NVDA zu verwenden, werden Sie viel Gebrauch vom "NVDA-Modifikator" machen – dies ist eine Taste, die Sie zusätzlich zu den tatsächlichen NVDA-Tastaturkürzeln drücken müssen, damit sie funktionieren. Die Verwendung eines solchen Modifikators ist bei Screenreadern üblich, um ihre Befehle davor zu bewahren, mit anderen Befehlen zu kollidieren. Im Fall von NVDA kann der Modifikator entweder Einfügen (der Standard) oder CapsLock (kann durch Aktivieren der ersten Checkbox im NVDA-Begrüßungsdialog vor dem Drücken von _OK_ gewählt werden).

> [!NOTE]
> NVDA ist subtiler als VoiceOver, was die Hervorhebung angeht, wo es sich befindet und was es tut. Wenn Sie durch Überschriften, Listen usw. scrollen, werden die von Ihnen ausgewählten Elemente in der Regel durch eine subtile Umrandung hervorgehoben, aber dies ist nicht immer der Fall bei allen Dingen. Wenn Sie völlig verloren sind, können Sie Strg + F5 drücken, um die aktuelle Seite zu aktualisieren und von oben zu beginnen.

NVDA hat viele Tastaturbefehle, und wir werden nicht alle hier auflisten. Die grundlegenden Befehle, die Sie für Websitetests benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastaturkürzeln bedeutet "NVDA" "der NVDA-Modifikator".

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
      <td>NVDA + Q</td>
      <td>NVDA wieder ausschalten, nachdem Sie es gestartet haben.</td>
    </tr>
    <tr>
      <td>NVDA + nach oben</td>
      <td>Aktuelle Zeile lesen.</td>
    </tr>
    <tr>
      <td>NVDA + nach unten</td>
      <td>Lesen ab der aktuellen Position beginnen.</td>
    </tr>
    <tr>
      <td>Nach oben und nach unten, oder Umschalt + Tabulator und Tabulator</td>
      <td>Zum vorherigen/nächsten Element auf der Seite gehen und es lesen.</td>
    </tr>
    <tr>
      <td>Nach links und nach rechts</td>
      <td>Zum vorherigen/nächsten Zeichen im aktuellen Element gehen und es lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + H und H</td>
      <td>Zur vorherigen/nächsten Überschrift gehen und sie lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + K und K</td>
      <td>Zum vorherigen/nächsten Link gehen und ihn lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + D und D</td>
      <td>Zur vorherigen/nächsten Dokumentmarkierung (z.B. <code>&#x3C;nav></code>) gehen und sie lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + 1–6 und 1–6</td>
      <td>Zur vorherigen/nächsten Überschrift (Stufe 1–6) gehen und sie lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + F und F</td>
      <td>Zum vorherigen/nächsten Formulareingabefeld gehen und es fokussieren.</td>
    </tr>
    <tr>
      <td>Umschalt + T und T</td>
      <td>Zur vorherigen/nächsten Datentabelle gehen und sie fokussieren.</td>
    </tr>
    <tr>
      <td>Umschalt + B und B</td>
      <td>Zum vorherigen/nächsten Button gehen und dessen Beschriftung lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + L und L</td>
      <td>Zur vorherigen/nächsten Liste gehen und deren erstes Listenelement lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + I und I</td>
      <td>Zum vorherigen/nächsten Listenelement gehen und es lesen.</td>
    </tr>
    <tr>
      <td>Eingabe/Return</td>
      <td>(Wenn Link/Button oder ein anderes aktivierbares Element ausgewählt ist) Element aktivieren.</td>
    </tr>
    <tr>
      <td>NVDA + Leertaste</td>
      <td>(Wenn Formular ausgewählt) Formular betreten, damit einzelne Elemente ausgewählt werden können, oder Formular verlassen, wenn Sie bereits darin sind.</td>
    </tr>
    <tr>
      <td>Umschalt Tabulator und Tabulator</td>
      <td>(Wenn innerhalb des Formulars) Zwischen Formulareingabefeldern wechseln.</td>
    </tr>
    <tr>
      <td>Nach oben und nach unten</td>
      <td>(Wenn innerhalb des Formulars) Formulareingabewerte ändern (im Falle von Dingen wie Auswahlboxen).</td>
    </tr>
    <tr>
      <td>Leertaste</td>
      <td>(Wenn innerhalb des Formulars) Ausgewählten Wert auswählen.</td>
    </tr>
    <tr>
      <td>Strg + Alt + Cursortasten</td>
      <td>(Wenn eine Tabelle ausgewählt ist) Zwischen Tabellenelementen wechseln.</td>
    </tr>
  </tbody>
</table>

### Screenreader-Tests

Jetzt, da Sie sich mit der Verwendung eines Screenreaders vertraut gemacht haben, möchten wir, dass Sie ihn verwenden, um einige kurze Barrierefreiheitsprüfungen durchzuführen, um eine Vorstellung davon zu bekommen, wie Screenreader mit guten und schlechten Webseitenmerkmalen umgehen:

- Schauen Sie sich [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) an und achten Sie darauf, wie die Überschriften vom Screenreader gefunden werden und zur Navigation genutzt werden können. Nun schauen Sie sich [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) an und beachten Sie, wie der Screenreader all diese Informationen nicht erhält. Stellen Sie sich vor, wie ärgerlich dies wäre, wenn man versucht, eine wirklich lange Seite mit Text zu navigieren.
- Schauen Sie sich [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) an und beachten Sie, wie sie auch aus dem Kontext heraus Sinn machen. Dies ist bei [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) nicht der Fall – sie alle sind nur "hier klicken".
- Schauen Sie sich [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) an und beachten Sie, wie die Formulareingaben mit ihren Labels beschrieben werden, weil wir `<label>`-Elemente richtig verwendet haben. In [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) erhalten sie ein unhilfreiches Label wie "leer".
- Schauen Sie sich unser Beispiel [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) an und sehen Sie, wie der Screenreader in der Lage ist, Spalten und Zeilen von Inhalten zuzuordnen und sie alle zusammenzulesen, weil wir die Kopfzeilen richtig definiert haben. In [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) können keine der Zellen zugeordnet werden. Beachten Sie, dass NVDA etwas seltsam scheint, wenn Sie nur eine einzige Tabelle auf einer Seite haben; Sie könnten versuchen, [WebAIMs Tabelle-Testseite](https://webaim.org/articles/nvda/tables.htm) stattdessen zu testen.
- Sehen Sie sich das frühere [WAI-ARIA Live-Regionen-Beispiel](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm) an und beachten Sie, wie der Screenreader kontinuierlich den ständig aktualisierten Abschnitt liest, während er aktualisiert wird.

## Benutzertests

Wie oben erwähnt, können Sie sich nicht auf automatisierte Werkzeuge allein verlassen, um Barrierefreiheitsprobleme auf Ihrer Website zu bestimmen. Es wird empfohlen, dass Sie bei der Erstellung Ihres Testplans, sofern möglich, einige Barrierefreiheitsanwendergruppen einbeziehen. Versuchen Sie, einige Screenreader-Benutzer, einige reine Tastaturbenutzer, einige nicht hörende Benutzer und vielleicht auch andere Gruppen einzubeziehen, je nach Ihren Anforderungen.

## Weitere Werkzeuge

Es gibt viele andere Arten von unterstützender Technologie, wie z.B.:

- Große Text- oder Brailletastaturen.
- Alternative Zeigegeräte wie Trackballs, Joysticks und Touchpads.
- Bildschirmvergrößerer.
- Sprachsteuerungssoftware.
- Schaltersteuerungen.

## Barrierefreiheits-Checkliste

Die folgende Liste bietet eine Checkliste, der Sie folgen können, um sicherzustellen, dass Sie die empfohlene Barrierefreiheitsprüfung für Ihr Projekt durchgeführt haben:

1. Stellen Sie sicher, dass Ihr HTML so semantisch korrekt wie möglich ist. Die [Validierung](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML#html_validation) ist ein guter Anfang, ebenso wie die Verwendung eines [Prüftools](#prüftools).
2. Überprüfen Sie, ob Ihr Inhalt Sinn macht, wenn das CSS deaktiviert ist.
3. Stellen Sie sicher, dass Ihre Funktionalität tastaturzugänglich ist (siehe [UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls) für mehr Details). Testen Sie das mit Tabulator, Return/Enter usw.
4. Stellen Sie sicher, dass Ihre nicht-textuellen Inhalte [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) haben. Ein [Prüftool](#prüftools) ist gut geeignet, um solche Probleme zu erkennen.
5. Stellen Sie sicher, dass der [Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast) Ihrer Website akzeptabel ist, unter Verwendung eines geeigneten Prüfwerkzeugs.
6. Stellen Sie sicher, dass [versteckter Inhalt](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) für Screenreader sichtbar ist.
7. Stellen Sie sicher, dass die Funktionalität nach Möglichkeit ohne JavaScript nutzbar ist.
8. Verwenden Sie ARIA, um die Barrierefreiheit dort zu verbessern, wo es angemessen ist.
9. Lassen Sie Ihre Seite durch ein [Prüftool](#prüftools) laufen.
10. Testen Sie sie mit einem Screenreader.
11. Fügen Sie irgendwo auffindbar auf Ihrer Website eine Erklärung zur Barrierefreiheit hinzu, um zu beschreiben, was Sie unternommen haben.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel eine Vorstellung davon gegeben, welche Arten von Werkzeugen Sie zur Lösung von Barrierefreiheitsproblemen nutzen können und welche unterstützenden Technologien von Menschen mit Behinderungen zur Nutzung des Internets verwendet werden.

Im nächsten Artikel werden wir uns ansehen, wie man barrierefreies HTML schreibt.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}
