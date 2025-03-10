---
title: Accessibility-Tools und unterstützende Technologien
slug: Learn_web_development/Core/Accessibility/Tooling
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}

> [!NOTE]
> Der Inhalt dieses Artikels ist derzeit unvollständig, entschuldigen Sie bitte! Wir arbeiten hart daran, den MDN Learn Web Development-Bereich zu verbessern, und wir werden die als unvollständig markierten Stellen („TODO“) bald fertigstellen.

Nun richten wir unsere Aufmerksamkeit auf Accessibility-Tools und bieten Informationen zu den Arten von Tools, die Sie verwenden können, um Barrierefreiheitsprobleme zu lösen, sowie die unterstützenden Technologien, die von Menschen mit Behinderungen beim Surfen im Internet verwendet werden. Diese Tools werden Sie in den folgenden Artikeln verwenden.

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
          <li>Vertrautheit mit den Arten von Werkzeugen, die Ihnen bei der Lösung von Barrierefreiheitsproblemen helfen können, wie zum Beispiel Prüfungstools.</li>
          <li>Einrichten von Bildschirmlesern und deren Verwendung zur Website-Überprüfung auf Desktop und Mobilgeräten.</li>
          <li>Andere unterstützende Technologien wie große Text- oder Brailletastaturen, alternative Zeigegeräte und Bildschirmvergrößerer.</li>
          <li>Die Bedeutung von Benutzertests neben automatisierten Tests.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Accessibility-Tools

Werfen wir einen Blick auf die Tools, die bei der Implementierung barrierefreier Websites und der Behebung von Barrierefreiheitsproblemen eingesetzt werden können.

### Testen der Quellreihenfolge

Ihr Inhalt sollte in seiner Quellreihenfolge logisch sinnvoll sein – Sie können ihn später mittels CSS an die gewünschte Stelle setzen, aber Sie sollten zunächst die Quellreihenfolge richtig gestalten.

Als Test können Sie das CSS einer Website deaktivieren und sehen, wie verständlich sie ohne ist. Sie könnten dies manuell tun, indem Sie das CSS aus Ihrem Code entfernen, aber der einfachste Weg ist die Nutzung von Browser-Features, zum Beispiel:

- Firefox: Wählen Sie im Hauptmenü _Ansicht > Seitenstil > Kein Stil_.
- Safari: Wählen Sie im Hauptmenü _Entwickler > Stile deaktivieren_ (um das Menü _Entwickler_ zu aktivieren, wählen Sie _Safari > Einstellungen > Erweitert > Menü Entwickler in Menüleiste anzeigen_).
- Chrome: Installieren Sie die Webentwickler-Toolbar-Erweiterung und starten Sie den Browser neu. Klicken Sie auf das Zahnradsymbol, das erscheint, und wählen Sie dann _CSS > Alle Stile deaktivieren_.
- Edge: Wählen Sie im Hauptmenü _Ansicht > Stil > Kein Stil_.

### Farbkontrast-Prüfer

Bei der Auswahl eines Farbschemas für Ihre Website sollten Sie sicherstellen, dass die Text- (Vordergrund-) Farbe gut mit der Hintergrundfarbe kontrastiert. Ihr Design mag cool aussehen, doch ist es nicht gut, wenn Menschen mit Sehbeeinträchtigungen wie Farbenblindheit Ihre Inhalte nicht lesen können. Verwenden Sie ein Tool wie den [Color Contrast Checker von WebAIM](https://webaim.org/resources/contrastchecker/), um zu überprüfen, ob Ihr Schema ausreichend kontrastiert.

Ein weiterer Tipp ist, sich nicht allein auf Farbe für Wegweiser/Informationen zu verlassen, da dies für diejenigen, die die Farben nicht sehen können, nutzlos ist. Statt erforderliche Formularfelder beispielsweise rot zu kennzeichnen, markieren Sie sie mit einem Sternchen und in Rot.

> [!NOTE]
> Ein hoher Kontrast ermöglicht auch Personen, die ein Smartphone oder ein Tablet mit einem glänzenden Bildschirm verwenden, Seiten in einer hellen Umgebung wie Sonnenlicht besser zu lesen.

### Prüfungswerkzeuge

Es gibt eine Reihe von Prüfwerkzeugen, in die Sie Ihre Webseiten einfügen können. Sie werden sie analysieren und eine Liste der auf der Seite vorhandenen Barrierefreiheitsprobleme zurückgeben. Lassen Sie uns ein Beispiel betrachten, das [Wave](https://wave.webaim.org/), ein Online-Accessibility-Testwerkzeug, verwendet, das eine Webadresse akzeptiert und eine annotierte Ansicht dieser Seite mit hervorgehobenen Barrierefreiheitsproblemen zurückgibt.

1. Besuchen Sie die [Wave-Homepage](https://wave.webaim.org/).
2. Geben Sie im Eingabefeld in der Nähe der oberen Seite die URL unseres Beispiels [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) ein. Drücken Sie dann die Eingabetaste oder klicken/tippen Sie den Pfeil am rechten Rand des Eingabefeldes.
3. Die Seite sollte mit einer Beschreibung der Barrierefreiheitsprobleme antworten. Klicken Sie die angezeigten Symbole an, um weitere Informationen zu den jeweiligen Problemen, die von Waves Bewertung hervorgehoben wurden, zu sehen.

Weitere Prüfungswerkzeuge, die es sich zu überprüfen lohnt:

- [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)
- [ANDI Bookmarklet](https://www.ssa.gov/accessibility/andi/help/install.html)
- [Google Lighthouse Accessibility Audits](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)

> [!NOTE]
> Solche Werkzeuge reichen allein nicht aus, um alle Ihre Barrierefreiheitsprobleme zu lösen. Sie benötigen eine Kombination dieser Werkzeuge, Wissen und Erfahrung, Benutzertests usw., um ein umfassendes Bild zu erhalten.

### Automatisierungstools

Deque's [aXe tool](https://www.deque.com/axe/) geht etwas weiter als die oben genannten Prüfungswerkzeuge. Wie die anderen überprüft es Seiten und gibt Barrierefreiheitsfehler zurück. Seine unmittelbar nützlichste Form sind wahrscheinlich die Browser-Erweiterungen:

- [aXe für Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe für Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Diese fügen den Entwicklerwerkzeugen des Browsers einen Barrierefreiheitstab hinzu. Zum Beispiel haben wir die Firefox-Version installiert und sie dann verwendet, um unser Beispiel [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) zu überprüfen. Wir erhielten die folgenden Ergebnisse:

![Ein Screenshot von Barrierefreiheitsproblemen, die vom Axe-Tool identifiziert wurden.](axe-screenshot.png)

aXe kann auch mit `npm` installiert werden und in Aufgabenausführungsprogramme wie [Grunt](https://gruntjs.com/) und [Gulp](https://gulpjs.com/), Automatisierungsrahmen wie [Selenium](https://www.selenium.dev/) und [Cucumber](https://cucumber.io/), Unit-Testing-Frameworks wie [Jasmine](https://jasmine.github.io/) und andere integriert werden (sehen Sie sich für Details die [Hauptseite von aXe](https://www.deque.com/axe/) an).

## Bildschirmleser

Es lohnt sich auf jeden Fall, mit einem Bildschirmleser zu testen, um sich daran zu gewöhnen, wie stark sehbehinderte Menschen das Internet nutzen. Es gibt eine Reihe von Bildschirmlesern:

- Einige sind bezahlte kommerzielle Produkte wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows).
- Einige sind kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows und macOS) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Einige sind im Betriebssystem integriert, wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS und iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf Chromebooks) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Im Allgemeinen sind Bildschirmleser separate Anwendungen, die auf dem Hostbetriebssystem laufen und nicht nur Webseiten, sondern auch Texte in anderen Apps lesen können. Dies ist nicht immer der Fall (ChromeVox ist eine Browser-Erweiterung), aber normalerweise neigen Bildschirmleser dazu, auf leicht unterschiedliche Weise zu handeln und haben unterschiedliche Steuerungen, sodass Sie die Dokumentation des von Ihnen gewählten Bildschirmlesers konsultieren müssen, um alle Details zu erfahren – dennoch funktionieren sie im Wesentlichen auf die gleiche Art und Weise.

Lassen Sie uns einige Tests mit ein paar unterschiedlichen Bildschirmlesern durchführen, um Ihnen einen allgemeinen Eindruck davon zu vermitteln, wie sie arbeiten und wie man mit ihnen testet.

> [!NOTE]
> WebAIMs [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/) bietet einige nützliche Informationen über die Verwendung von Bildschirmlesern und was am besten für sie funktioniert. Lesen Sie auch die [Umfrage zu Bildschirmleser-Nutzern Nr. 9 Ergebnisse](https://webaim.org/projects/screenreadersurvey9/#used) für interessante Nutzungsstatistiken.

### VoiceOver

VoiceOver (VO) ist kostenlos auf Ihrem Mac/iPhone/iPad verfügbar, also nützlich für Tests auf Desktop/Mobilgeräten, wenn Sie Apple-Produkte verwenden. Wir testen es auf macOS auf einem MacBook Pro.

Um es einzuschalten, drücken Sie Cmd + F5. Wenn Sie VO noch nie genutzt haben, erhalten Sie einen Willkommensbildschirm, auf dem Sie wählen können, ob Sie VO starten und ein wirklich nützliches Tutorial durchlaufen möchten, um zu lernen, wie man es benutzt. Um es wieder auszuschalten, drücken Sie erneut Cmd + F5.

> [!NOTE]
> Gehen Sie das Tutorial mindestens einmal durch – es ist eine wirklich nützliche Möglichkeit, VO zu erlernen.

Wenn VO eingeschaltet ist, sieht der Bildschirm weitgehend identisch aus, aber Sie sehen ein schwarzes Feld unten links auf dem Bildschirm mit Informationen darüber, was VO derzeit ausgewählt hat. Die aktuelle Auswahl wird ebenfalls hervorgehoben, mit einem schwarzen Rahmen – diese Hervorhebung wird als **VO-Cursor** bezeichnet.

![Ein Beispiel-Screenshot, der das Accessibility-Testing mit VoiceOver auf der MDN-Startseite zeigt. Unten links im Bild ist eine Hervorhebung der auf der Webseite ausgewählten Informationen.](voiceover.png)

Um VO zu verwenden, wird man den „VO-Modifikator“ häufig verwenden – dies ist eine Taste oder Tastenkombination, die zusätzlich zu den tatsächlichen VO-Tastenkombinationen gedrückt werden muss, um diese zu aktivieren. Die Verwendung eines Modifikators wie dieses ist bei Bildschirmlesern üblich, um ihre Befehle davon abzuhalten, mit anderen Befehlen in Konflikt zu geraten. Bei VO kann der Modifikator entweder CapsLock oder Strg + Option sein.

VO hat viele Tastaturbefehle, und wir werden hier nicht alle auflisten. Die Grundlegenden, die Sie für Webseitentests benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastaturkurzbefehlen bedeutet „VO“ „der VoiceOver-Modifikator“.

<table class="standard-table no-markdown">
  <caption>
    Häufigste VoiceOver-Tastaturkurzbefehle
  </caption>
  <thead>
    <tr>
      <th scope="col">Tastaturkurzbefehl</th>
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
      <td>Elemente auswählen/aktivieren, die vom VO-Cursor hervorgehoben sind. Dies umfasst Elemente, die im Rotor ausgewählt sind (siehe unten).</td>
    </tr>
    <tr>
      <td>VO + Shift + Pfeil nach unten</td>
      <td>In eine Gruppe von Elementen gelangen (wie eine HTML-Tabelle, ein Formular, etc.). Einmal in einer Gruppe können Sie sich bewegen und Elemente innerhalb dieser Gruppe mit den oben genannten Befehlen wie gewohnt auswählen.</td>
    </tr>
    <tr>
      <td>VO + Shift + Pfeil nach oben</td>
      <td>Aus einer Gruppe heraus bewegen.</td>
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
      <td>VO + C + C (zwei Cs nacheinander)</td>
      <td>(wenn innerhalb einer Tabelle) Lesen Sie die gesamte aktuelle Spalte, einschließlich der Kopfzeile.</td>
    </tr>
    <tr>
      <td>VO + R + R (zwei Rs nacheinander)</td>
      <td>(wenn innerhalb einer Tabelle) Lesen Sie die gesamte aktuelle Zeile, einschließlich der Kopfzeilen, die zu jeder Zelle gehören.</td>
    </tr>
    <tr>
      <td>VO + Pfeil nach links, VO + Pfeil nach rechts</td>
      <td>(wenn innerhalb einiger horizontaler Optionen, wie ein Datums- oder Zeitauswahl) Wechseln Sie zwischen Optionen.</td>
    </tr>
    <tr>
      <td>VO + Pfeil nach oben, VO + Pfeil nach unten</td>
      <td>(wenn innerhalb einiger horizontaler Optionen, wie ein Datums- oder Zeitauswahl) Ändern der aktuellen Option.</td>
    </tr>
    <tr>
      <td>VO + U</td>
      <td>Verwenden Sie den Rotor, der Listen von Überschriften, Links, Formularsteuerelementen etc. für eine einfache Navigation anzeigt.</td>
    </tr>
    <tr>
      <td>VO + Pfeil nach links, VO + Pfeil nach rechts</td>
      <td>(wenn im Rotor) Wechseln Sie zwischen verschiedenen im Rotor verfügbaren Listen.</td>
    </tr>
    <tr>
      <td>VO + Pfeil nach oben, VO + Pfeil nach unten</td>
      <td>(wenn im Rotor) Wechseln Sie zwischen verschiedenen Elementen in der aktuellen Rotorliste.</td>
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
      <td>Wiederholen Sie den letzten gesprochenen Abschnitt.</td>
    </tr>
    <tr>
      <td>VO + D</td>
      <td>Wechseln Sie in das Dock des Mac, um dort auszuführende Apps auszuwählen.</td>
    </tr>
  </tbody>
</table>

Es scheint, dass es viele Befehle sind, aber es ist nicht so schlimm, wenn Sie sich daran gewöhnen, und VO gibt Ihnen regelmäßig Erinnerungen an die zu verwendenden Befehle an bestimmten Stellen. Spielen Sie jetzt mit VO herum; Sie können dann zu einigen unserer Beispiele im Abschnitt [Bildschirmlesertest](#bildschirmlesertests) übergehen.

### NVDA

NVDA ist nur für Windows verfügbar, und Sie müssen es installieren.

1. Laden Sie es von [nvaccess.org](https://www.nvaccess.org/) herunter. Sie können wählen, ob Sie eine Spende machen oder es kostenlos herunterladen möchten; Sie müssen auch Ihre E-Mail-Adresse eingeben, bevor Sie es herunterladen können.
2. Nach dem Download installieren Sie es – doppelklicken Sie auf das Installationsprogramm, akzeptieren Sie die Lizenz und folgen Sie den Anweisungen.
3. Um NVDA zu starten, doppelklicken Sie auf die Programmdatei/Verknüpfung oder verwenden Sie die Tastenkombination Strg + Alt + N. Beim Start von NVDA wird das Begrüßungsdialogfeld angezeigt. Hier können Sie einige Optionen auswählen und dann die _OK_-Taste drücken, um loszulegen.

NVDA ist nun auf Ihrem Computer aktiv.

Um NVDA zu benutzen, werden Sie den „NVDA-Modifikator“ häufig verwenden – dies ist eine Taste, die in Kombination mit den tatsächlichen NVDA-Tastenkombinationen gedrückt werden muss, um diese zu aktivieren. Die Nutzung eines Modifikators wie dieser ist bei Bildschirmlesern üblich, um deren Befehle davon abzuhalten, mit anderen Befehlen in Konflikt zu geraten. Bei NVDA kann der Modifikator entweder die Einfügetaste (Standard) oder CapsLock sein (kann ausgewählt werden, indem das erste Kontrollkästchen im NVDA-Begrüßungsdialog aktiviert wird, bevor Sie _OK_ drücken).

> [!NOTE]
> NVDA ist subtiler als VoiceOver in Bezug darauf, wie es hervorhebt, wo es sich befindet und was es tut. Wenn Sie durch Überschriften, Listen usw. blättern, werden die ausgewählten Elemente im Allgemeinen mit einem subtilen Umriss hervorgehoben, aber dies ist nicht immer bei allen Dingen der Fall. Wenn Sie sich vollständig verlaufen, können Sie Strg + F5 drücken, um die aktuelle Seite zu aktualisieren und von oben neu zu beginnen.

NVDA hat viele Tastaturbefehle, und wir listen hier nicht alle auf. Die grundlegenden, die Sie für Webseitentests benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastaturkürzeln bedeutet „NVDA“ „der NVDA-Modifikator“.

<table class="standard-table no-markdown">
  <caption>
    Häufigste NVDA-Tastaturkurzbefehle
  </caption>
  <thead>
    <tr>
      <th scope="col">Tastaturkurzbefehl</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NVDA + Q</td>
      <td>Schalten Sie NVDA nach dem Start wieder aus.</td>
    </tr>
    <tr>
      <td>NVDA + Pfeil nach oben</td>
      <td>Lesen Sie die aktuelle Zeile.</td>
    </tr>
    <tr>
      <td>NVDA + Pfeil nach unten</td>
      <td>Beginnen Sie mit dem Lesen an der aktuellen Position.</td>
    </tr>
    <tr>
      <td>Pfeil nach oben und Pfeil nach unten oder Shift + Tab und Tab</td>
      <td>Zum vorhergehenden/nächsten Element auf der Seite gehen und es lesen.</td>
    </tr>
    <tr>
      <td>Pfeil nach links und Pfeil nach rechts</td>
      <td>Zum vorhergehenden/nächsten Zeichen im aktuellen Element gehen und es lesen.</td>
    </tr>
    <tr>
      <td>Shift + H und H</td>
      <td>Zur vorhergehenden/nächsten Überschrift gehen und diese lesen.</td>
    </tr>
    <tr>
      <td>Shift + K und K</td>
      <td>Zum vorhergehenden/nächsten Link gehen und diesen lesen.</td>
    </tr>
    <tr>
      <td>Shift + D und D</td>
      <td>Zum vorhergehenden/nächsten Dokumenten-Landmark (z. B. <code>&#x3C;nav></code>) gehen und es lesen.</td>
    </tr>
    <tr>
      <td>Shift + 1–6 und 1–6</td>
      <td>Zur vorhergehenden/nächsten Überschrift (Ebene 1–6) gehen und diese lesen.</td>
    </tr>
    <tr>
      <td>Shift + F und F</td>
      <td>Zum vorhergehenden/nächsten Formulareingabefeld gehen und den Fokus darauf setzen.</td>
    </tr>
    <tr>
      <td>Shift + T und T</td>
      <td>Zur vorhergehenden/nächsten Datentabelle gehen und den Fokus darauf setzen.</td>
    </tr>
    <tr>
      <td>Shift + B und B</td>
      <td>Zum vorhergehenden/nächsten Button gehen und das Label lesen.</td>
    </tr>
    <tr>
      <td>Shift + L und L</td>
      <td>Zur vorhergehenden/nächsten Liste gehen und das erste Listenelement lesen.</td>
    </tr>
    <tr>
      <td>Shift + I und I</td>
      <td>Zum vorhergehenden/nächsten Listenelement gehen und es lesen.</td>
    </tr>
    <tr>
      <td>Eingabetaste</td>
      <td>(wenn ein Link/Button oder ein anderes aktivierbares Element ausgewählt ist) Element aktivieren.</td>
    </tr>
    <tr>
      <td>NVDA + Leertaste</td>
      <td>(wenn ein Formular ausgewählt ist) Formular betreten, damit einzelne Elemente ausgewählt werden können, oder Formular verlassen, wenn Sie bereits darin sind.</td>
    </tr>
    <tr>
      <td>Shift + Tab und Tab</td>
      <td>(wenn innerhalb eines Formulars) Zwischen Formulareingaben wechseln.</td>
    </tr>
    <tr>
      <td>Pfeil nach oben und Pfeil nach unten</td>
      <td>(wenn innerhalb eines Formulars) Formulareingaben ändern (im Fall von Elementen wie Auswahlboxen).</td>
    </tr>
    <tr>
      <td>Leertaste</td>
      <td>(wenn innerhalb eines Formulars) Ausgewählten Wert auswählen.</td>
    </tr>
    <tr>
      <td>Strg + Alt + Pfeiltasten</td>
      <td>(wenn eine Tabelle ausgewählt ist) Zwischen Tabellenzellen wechseln.</td>
    </tr>
  </tbody>
</table>

### Bildschirmlesertests

Nun, da Sie sich daran gewöhnt haben, einen Bildschirmleser zu verwenden, möchten wir, dass Sie ihn für schnelle Barrierefreiheitsprüfungen verwenden, um eine Vorstellung davon zu bekommen, wie Bildschirmleser mit guten und schlechten Webseiteneigenschaften umgehen:

- Schauen Sie sich [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) an und beachten Sie, wie die Überschriften vom Bildschirmleser gefunden werden und zur Navigation verwendet werden können. Schauen Sie sich nun [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) an und beachten Sie, wie der Bildschirmleser keine dieser Informationen erhält. Stellen Sie sich vor, wie ärgerlich das wäre, wenn Sie versuchen würden, eine wirklich lange Seite voller Text zu navigieren.
- Schauen Sie sich [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) an und beachten Sie, wie sie aus dem Kontext heraus Sinn ergeben. Dies ist bei [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) nicht der Fall – sie sind alle nur „hier klicken“.
- Schauen Sie sich [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) an und beachten Sie, wie die Formulareingaben durch ihre Labels beschrieben werden, da wir `<label>`-Elemente korrekt verwendet haben. In [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) erhalten sie ein unbrauchbares Label in der Art von „leer“.
- Schauen Sie sich unser Beispiel [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) an und sehen Sie, wie der Bildschirmleser in der Lage ist, Spalten und Zeilen von Inhalten zu verknüpfen und diese insgesamt vorzulesen, weil wir die Kopfzeilen korrekt definiert haben. In [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) können keine der Zellen zugeordnet werden. Beachten Sie, dass NVDA etwas seltsam zu verhalten scheint, wenn Sie nur eine einzelne Tabelle auf einer Seite haben; Sie könnten stattdessen [WebAIMs Tabellentestseite](https://webaim.org/articles/nvda/tables.htm) versuchen.
- Schauen Sie sich das bereits erwähnte Beispiel für [WAI-ARIA-Live-Regionen](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm) an und beachten Sie, wie der Bildschirmleser den ständig aktualisierten Abschnitt ständig vorliest, während er sich aktualisiert.

## Benutzertests

Wie oben erwähnt, können Sie sich bei der Ermittlung von Barrierefreiheitsproblemen auf Ihrer Site nicht nur auf automatisierte Tools verlassen. Es wird empfohlen, dass Sie, wenn Sie Ihren Testplan erstellen, versuchsweise einige Benutzergruppen mit Barrierefreiheitsanforderungen einbeziehen. Versuchen Sie, einige Bildschirmleser-Nutzer, einige nur Tastatur-Nutzer, einige nicht hörende Nutzer und vielleicht auch andere Gruppen einzubeziehen, die Ihren Anforderungen entsprechen.

## Weitere Tools

Viele andere Arten von unterstützender Technologie existieren, wie z.B.:

- Große Text- oder Brailletastaturen.
- Alternative Zeigegeräte wie Trackballs, Joysticks und Touchpads.
- Bildschirmvergrößerer.
- Spracherkennungssoftware.
- Schaltersteuerungen.

## Accessibility-Testing-Checkliste

Die folgende Liste bietet Ihnen eine Checkliste, der Sie folgen sollten, um sicherzustellen, dass Sie die empfohlenen Barrierefreiheitsprüfungen für Ihr Projekt durchgeführt haben:

1. Stellen Sie sicher, dass Ihr HTML so semantisch korrekt wie möglich ist. [Validierung](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML#html_validation) ist ein guter Anfang, ebenso die Verwendung eines [Prüfungswerkzeugs](#prüfungswerkzeuge).
2. Prüfen Sie, ob Ihre Inhalte verständlich sind, wenn das CSS deaktiviert ist.
3. Stellen Sie sicher, dass Ihre Funktionalität tastaturzugänglich ist (siehe [UI-Kontrollen](/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls) für weitere Details). Testen Sie mit Tab, Return/Enter usw.
4. Stellen Sie sicher, dass Ihre nicht-textlichen Inhalte [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) haben. Ein [Prüfungswerkzeug](#prüfungswerkzeuge) ist gut, um solche Probleme zu erkennen.
5. Stellen Sie sicher, dass der [Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast) Ihrer Website akzeptabel ist und verwenden Sie ein entsprechendes Überprüfungstool.
6. Stellen Sie sicher, dass [versteckte Inhalte](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) für Bildschirmleser zugänglich sind.
7. Stellen Sie sicher, dass die Funktionalität, soweit möglich, ohne JavaScript nutzbar ist.
8. Verwenden Sie ARIA, um die Barrierefreiheit dort zu verbessern, wo es angebracht ist.
9. Lassen Sie Ihre Website durch ein [Prüfungswerkzeug](#prüfungswerkzeuge) laufen.
10. Testen Sie sie mit einem Bildschirmleser.
11. Fügen Sie eine Barrierefreiheitsrichtlinie/-erklärung an einem auffindbaren Ort auf Ihrer Website hinzu, um zu erklären, was Sie unternommen haben.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel eine Vorstellung von den Arten von Werkzeugen gegeben, die Sie verwenden können, um Barrierefreiheitsprobleme zu beheben und der unterstützenden Technologien, die von Menschen mit Behinderungen verwendet werden, um auf das Web zuzugreifen.

Im nächsten Artikel werden wir uns anschauen, wie man zugängliches HTML schreibt.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/What_is_Accessibility","Learn_web_development/Core/Accessibility/HTML", "Learn_web_development/Core/Accessibility")}}
