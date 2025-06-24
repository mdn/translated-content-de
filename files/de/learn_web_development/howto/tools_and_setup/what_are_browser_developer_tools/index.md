---
title: Was sind Entwicklerwerkzeuge im Browser?
slug: Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Jeder moderne Webbrowser enthält eine leistungsstarke Suite von Entwicklerwerkzeugen. Diese Werkzeuge ermöglichen eine Reihe von Funktionen, wie das Untersuchen von aktuell geladenem HTML, CSS und JavaScript sowie das Anzeigen, welche Ressourcen die Seite angefordert hat und wie lange sie geladen haben. Dieser Artikel erklärt, wie Sie die grundlegenden Funktionen der Entwicklerwerkzeuge Ihres Browsers nutzen können.

> [!NOTE]
> Bevor Sie die untenstehenden Beispiele durcharbeiten, öffnen Sie die [Anfängerseite](https://mdn.github.io/beginner-html-site-scripted/) die wir während der Artikelserie [Erste Schritte mit dem Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) erstellt haben. Diese sollte geöffnet sein, während Sie die folgenden Schritte ausführen.

## Anleitung: Öffnen der Entwicklerwerkzeuge in Ihrem Browser

Die Entwicklerwerkzeuge befinden sich in einem Unterfenster Ihres Browsers, das je nach verwendetem Browser etwa so aussieht:

![Bildschirmfoto eines Browsers mit geöffneten Entwicklerwerkzeugen. Die Webseite wird in der oberen Hälfte des Browsers angezeigt, die Entwicklerwerkzeuge belegen die untere Hälfte. Es sind drei Bereiche in den Entwicklerwerkzeugen geöffnet: HTML, mit ausgewähltem body-Element, ein CSS-Bereich, der Stilblöcke anzeigt, die auf das hervorgehobene body abzielen, und ein Bereich für berechnete Stile, der alle Autorenstile zeigt; das Kontrollkästchen für Browserstile ist nicht aktiviert.](devtools_63_inspector.png)

Wie rufen Sie es auf? Drei Wege:

- **_Tastatur:_**

  - **Windows:** <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> oder <kbd>F12</kbd>
  - **macOS:** <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>

- **_Menüleiste:_**

  - **Firefox:** _Menü (☰) ➤ Weitere Werkzeuge ➤ Web-Entwickler-Werkzeuge_
  - **Chrome:** _Weitere Tools ➤ Entwicklerwerkzeuge_
  - **Opera**: _Entwickler ➤ Entwicklerwerkzeuge_
  - **Safari:** _Entwickeln ➤ Web-Inspektor anzeigen._

    > [!NOTE]
    > Die Entwicklerwerkzeuge von Safari sind standardmäßig nicht aktiviert.
    > Um sie zu aktivieren, gehen Sie zu _Safari ➤ Einstellungen ➤ Erweitert_ und aktivieren Sie das Kontrollkästchen _Menü "Entwickeln" in der Menüleiste anzeigen_ oder _Funktionen für Webentwickler aktivieren_.

- **_Kontextmenü:_** Drücken und halten/rechtsklicken Sie ein Element auf einer Webseite (Ctrl-Klick auf dem Mac) und wählen Sie _Element untersuchen_ aus dem angezeigten Kontextmenü. (_Ein zusätzlicher Bonus:_ Mit dieser Methode wird direkt der Code des angeklickten Elements hervorgehoben.)

![Das Firefox-Logo als DOM-Element auf einer Beispiel-Website mit einem angezeigten Kontextmenü. Ein Kontextmenü erscheint, wenn ein Element auf der Webseite angeklickt wird. Das letzte Menüelement ist 'Element untersuchen'.](inspector_context.png)

## Der Inspektor: DOM-Explorer und CSS-Editor

Die Entwicklerwerkzeuge öffnen sich normalerweise standardmäßig mit dem Inspektor, der etwa wie der folgende Screenshot aussieht. Dieses Tool zeigt, wie das HTML Ihrer Seite zur Laufzeit aussieht und welches CSS auf jedes Element der Seite angewendet wird. Es ermöglicht Ihnen auch, das HTML und CSS sofort zu ändern und die Ergebnisse Ihrer Änderungen direkt im Browser-Viewport zu sehen.

![Eine Test-Website ist in einem Tab des Browsers geöffnet. Das Unterfenster der Entwicklerwerkzeuge des Browsers ist geöffnet. Die Entwicklerwerkzeuge haben mehrere Registerkarten. Inspektor ist eine dieser Registerkarten. Die Inspektor-Registerkarte zeigt den HTML-Code der Website an. Ein Bild-Tag ist aus dem HTML-Code ausgewählt. Dies führt zur Hervorhebung des Bildes, das dem ausgewählten Tag auf der Website entspricht.](inspector_highlighted.png)

Wenn Sie den Inspektor _nicht_ sehen,

- **Firefox:** Wählen Sie die **Inspector**-Registerkarte.
- **Andere Browser:** Wählen Sie die **Elements**-Registerkarte.

### Den DOM-Inspektor erkunden

Zunächst klicken Sie mit der rechten Maustaste (Ctrl-Klick) auf ein HTML-Element im DOM-Inspektor und schauen Sie sich das Kontextmenü an. Die verfügbaren Menüoptionen variieren zwischen den Browsern, aber die wichtigen sind meistens dieselben:

![Das Unterfenster der Entwicklerwerkzeuge des Browsers ist geöffnet. Die Inspektor-Registerkarte ist ausgewählt. Ein Link-Element wird aus dem im Inspektor-Tab verfügbaren HTML-Code mit der rechten Maustaste angeklickt. Ein Kontextmenü erscheint. Die verfügbaren Menüoptionen variieren zwischen den Browsern, aber die wichtigen sind meistens dieselben.](dom_inspector.png)

- **Delete Node** (manchmal _Delete Element_). Löscht das aktuelle Element.
- **Edit as HTML** (manchmal _Attribut hinzufügen_/_Text bearbeiten_). Lässt Sie das HTML ändern und die Ergebnisse sofort sehen. Sehr nützlich zum Debuggen und Testen.
- **:hover/:active/:focus**. Erzwingt Zustandsänderungen auf Elementen, sodass Sie sehen können, wie ihre Stile dann aussehen würden.
- **Copy/Copy as HTML**. Kopiert das aktuell ausgewählte HTML.
- Einige Browser haben auch _Copy CSS Path_ und _Copy XPath_ verfügbar, um den CSS-Selektor oder das XPath-Ausdruck zu kopieren, das das aktuelle HTML-Element auswählen würde.

Versuchen Sie nun, einige Ihrer DOM-Elemente zu bearbeiten. Doppelklicken Sie auf ein Element oder klicken Sie mit der rechten Maustaste darauf und wählen Sie _Edit as HTML_ aus dem Kontextmenü. Sie können beliebige Änderungen vornehmen, diese jedoch nicht speichern.

### Den CSS-Editor erkunden

Standardmäßig zeigt der CSS-Editor die CSS-Regeln an, die auf das aktuell ausgewählte Element angewendet werden:

![Ausschnitt des CSS-Panels und des Layout-Panels, die neben dem HTML-Editor in den Entwicklerwerkzeugen des Browsers zu sehen sind. Standardmäßig zeigt der CSS-Editor die CSS-Regeln an, die auf das aktuell ausgewählte Element im HTML-Editor angewendet werden. Das Layout-Panel zeigt die Eigenschaften des Box-Modells des ausgewählten Elements.](css_inspector.png)

Diese Funktionen sind besonders praktisch:

- Die Regeln, die auf das aktuelle Element angewendet werden, werden in der Reihenfolge von am speziellsten zu am wenigsten spezifisch angezeigt.
- Klicken Sie die Kontrollkästchen neben jeder Deklaration an, um zu sehen, was passieren würde, wenn Sie die Deklaration entfernen.
- Klicken Sie auf den kleinen Pfeil neben jeder Kurzform-Eigenschaft, um die Langform-Entsprechungen der Eigenschaft anzuzeigen.
- Klicken Sie auf einen Eigenschaftsnamen oder Wert, um ein Textfeld aufzurufen, in dem Sie einen neuen Wert eingeben können, um eine Live-Vorschau einer Stiländerung zu erhalten.
- Neben jeder Regel steht der Dateiname und die Zeilennummer, in der die Regel definiert ist. Durch Klicken auf diese Regel springt das Entwicklerwerkzeug zu dieser Regel in seiner eigenen Ansicht, wo sie normalerweise bearbeitet und gespeichert werden kann.
- Sie können auch auf die schließende geschweifte Klammer einer Regel klicken, um auf einer neuen Zeile ein Textfeld aufzurufen, in dem Sie eine völlig neue Deklaration für Ihre Seite schreiben können.

Oben im CSS-Viewer sehen Sie eine Reihe von klickbaren Registerkarten:

- _Computed_: Zeigt die berechneten Stile für das aktuell ausgewählte Element an (die endgültigen, normalisierten Werte, die der Browser anwendet).
- _Layout_: Zeigt die Details für CSS [Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) Layout-Modi an, wenn das Element, das Sie untersuchen, diese verwendet.
- _Fonts_: In Firefox und Safari zeigt die Registerkarte _Fonts_ die Schriften an, die auf das aktuelle Element angewendet werden.

Die _Box-Modell_-Ansicht stellt visuell das aktuelle Box-Modell des Elements dar, sodass Sie auf einen Blick sehen können, welche Polsterung, Rand und Einfassung darauf angewendet ist und wie groß ihr Inhalt ist. In Firefox befindet sich dies in der Registerkarte _Layout_, in anderen Browsern in der Registerkarte _Computed_.

In einigen Browsern können auch die JavaScript-Details des ausgewählten Elements in diesem Panel angezeigt werden. In Safari sind diese unter der Registerkarte _Node_ zusammengefasst, in anderen Browsern wie Chrome, Opera und Edge in separaten Registerkarten.

- _Properties_: Die {{Glossary("Property/JavaScript", "Eigenschaften")}} des Elementobjekts.
- _Event Listeners_: Die [Ereignisse](/de/docs/Web/API/Event), die mit dem Element verknüpft sind.

### Mehr erfahren

Erfahren Sie mehr über den Inspektor in verschiedenen Browsern:

- [Firefox Page inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [Chrome DOM inspector](https://developer.chrome.com/docs/devtools/dom/) (Der Inspektor von Opera und Edge ist derselbe)
- [Safari Elements tab](https://webkit.org/web-inspector/elements-tab/)

## Der JavaScript-Debugger

Der JavaScript-Debugger ermöglicht es Ihnen, den Wert von Variablen zu beobachten und Breakpoints zu setzen, Stellen in Ihrem Code, an denen Sie die Ausführung pausieren wollen, um die Probleme zu identifizieren, die Ihre Codeausführung behindern.

![Eine Testwebsite, die lokal auf Port 8080 bereitgestellt wird. Das Unterfenster der Entwicklerwerkzeuge ist geöffnet. Die Registerkarte JavaScript-Debugger ist ausgewählt. Es ermöglicht Ihnen, den Wert von Variablen zu beobachten und Breakpoints zu setzen. Eine Datei mit dem Namen 'example.js' ist aus dem Quellen-Paneel ausgewählt. Ein Breakpoint ist auf Zeile 18 der Datei gesetzt.](firefox_debugger.png)

Um zum Debugger zu gelangen:

**Firefox**: Öffnen Sie die Entwicklerwerkzeuge und wählen Sie die Registerkarte **Debugger**.
**Andere Browser**: Öffnen Sie die Entwicklerwerkzeuge und wählen Sie die Registerkarte **Sources**.

### Den Debugger erkunden

Der JavaScript-Debugger jedes Browsers ist in drei Bereiche unterteilt. Das Layout dieser Bereiche variiert je nach verwendetem Browser; dieser Leitfaden verwendet Firefox als Referenz.

#### Dateiliste

Der erste Bereich links enthält die Liste der Dateien, die mit der Seite verbunden sind, die Sie debuggen. Wählen Sie die Datei aus, mit der Sie arbeiten möchten, aus dieser Liste aus. Klicken Sie auf eine Datei, um sie auszuwählen und ihren Inhalt im mittleren Bereich des Debuggers anzuzeigen.

![Ausschnitt des Quellen-Panels des Debugger-Tabs in den Entwicklerwerkzeugen des Browsers. Die mit der aktuellen Seite, die Sie debuggen, verknüpften Dateien sind unter dem Ordner sichtbar, dessen Name mit der URL der im aktuellen Browser-Tab geöffneten Website identisch ist.](file_list.png)

#### Quellcode

Setzen Sie Breakpoints, an denen Sie die Ausführung pausieren möchten. Im folgenden Bild zeigt die Hervorhebung auf Nummer 18, dass auf der Zeile ein Breakpoint gesetzt ist.

![Ausschnitt des Entwicklerwerkzeuge-Debugger-Panels mit dem bei Zeile 18 gesetzten Breakpoint, der hervorgehoben ist.](source_code.png)

#### Überwachungsausdrücke und Breakpoints

Der rechte Bereich zeigt eine Liste der von Ihnen hinzugefügten Überwachungsausdrücke und gesetzten Breakpoints.

Im Bild zeigt der erste Abschnitt, **Überwachungsausdrücke**, dass die Variable listItems hinzugefügt wurde. Sie können die Liste erweitern, um die Werte im Array anzuzeigen.

Der nächste Abschnitt, **Breakpoints**, listet die auf der Seite gesetzten Breakpoints auf. In example.js wurde ein Breakpoint bei der Anweisung `listItems.push(inputNewItem.value);` gesetzt.

Die letzten beiden Abschnitte erscheinen nur, wenn der Code ausgeführt wird.

Der **Call stack**-Abschnitt zeigt Ihnen, welcher Code ausgeführt wurde, um zur aktuellen Zeile zu gelangen. Sie können sehen, dass sich der Code in der Funktion befindet, die einen Mausklick verarbeitet und dass der Code derzeit am Breakpoint pausiert ist.

Der letzte Abschnitt, **Scopes**, zeigt, welche Werte von verschiedenen Punkten in Ihrem Code aus sichtbar sind. Zum Beispiel können Sie im folgenden Bild die Objekte sehen, die dem Code in der addItemClick-Funktion zur Verfügung stehen.

![Ausschnitt des Quellen-Panels des Debugger-Tabs der Entwicklerwerkzeuge des Browsers. Der Call Stack zeigt die Funktion, die in Zeile 18 aufgerufen wird, und hebt hervor, dass an dieser Zeile ein Breakpoint gesetzt ist und den Scope anzeigt.](watch_items.png)

### Mehr erfahren

Erfahren Sie mehr über den JavaScript-Debugger in verschiedenen Browsern:

- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html))
- [Chrome-Debugger](https://developer.chrome.com/docs/devtools/javascript/) (Der Debugger von Opera und Edge ist derselbe)
- [Safari Sources-Tab](https://webkit.org/web-inspector/sources-tab/)

## Die JavaScript-Konsole

Die JavaScript-Konsole ist ein unglaublich nützliches Werkzeug zum Debuggen von JavaScript, das nicht wie erwartet funktioniert. Sie ermöglicht es Ihnen, JavaScript-Zeilen gegen die aktuell im Browser geladene Seite auszuführen und berichtet die Fehler, die auftauchen, während der Browser versucht, Ihren Code auszuführen.

Um auf die Konsole in jedem Browser zuzugreifen, öffnen Sie die Entwicklerwerkzeuge und wählen Sie die Registerkarte **Console**. Dies gibt Ihnen ein Fenster, das wie folgt aussieht:

![Die Konsolen-Registerkarte der Entwicklerwerkzeuge des Browsers. Zwei JavaScript-Funktionen wurden in der Konsole ausgeführt. Der Benutzer hat Funktionen eingegeben und die Konsole hat die Rückgabewerte angezeigt.](console_only.png)

Um zu sehen, was passiert, versuchen Sie die folgenden Code-Snippets nacheinander in die Konsole einzugeben (und drücken Sie dann Enter):

```js
alert("hello!");
```

```js
document.querySelector("html").style.backgroundColor = "purple";
```

```js
const loginImage = document.createElement("img");
loginImage.setAttribute(
  "src",
  "https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png",
);
document.querySelector("h1").appendChild(loginImage);
```

Versuchen Sie nun, die folgenden fehlerhaften Versionen des Codes einzugeben und sehen Sie, was Sie erhalten.

```js-nolint example-bad
alert("hello!);
```

```js example-bad
document.cheeseSelector("html").style.backgroundColor = "purple";
```

```js example-bad
const loginImage = document.createElement("img");
banana.setAttribute(
  "src",
  "https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png",
);
document.querySelector("h1").appendChild(loginImage);
```

Sie werden beginnen, die Art von Fehlern zu sehen, die der Browser zurückgibt. Oft sind diese Fehler ziemlich kryptisch, aber es sollte relativ einfach sein, diese Probleme zu lösen!

### Mehr erfahren

Erfahren Sie mehr über die JavaScript-Konsole in verschiedenen Browsern:

- [Firefox Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [Chrome JavaScript-Konsole](https://developer.chrome.com/docs/devtools/console/) (Die Konsole von Opera und Edge ist dieselbe)
- [Safari Console Object API](https://webkit.org/web-inspector/console-object-api/) und [Console Command Line API](https://webkit.org/web-inspector/console-command-line-api/)

## Siehe auch

- [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
- [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
