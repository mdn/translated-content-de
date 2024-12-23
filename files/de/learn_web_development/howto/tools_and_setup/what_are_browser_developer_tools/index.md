---
title: Was sind Browser-Entwicklertools?
slug: Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Jeder moderne Webbrowser enthält eine leistungsstarke Suite von Entwicklertools. Diese Werkzeuge bieten eine Vielzahl von Funktionen, von der Inspektion des aktuell geladenen HTML, CSS und JavaScript bis hin zur Anzeige, welche Ressourcen die Seite angefordert hat und wie lange deren Ladezeit betrug. Dieser Artikel erklärt, wie Sie die grundlegenden Funktionen der Entwicklertools Ihres Browsers verwenden.

> [!NOTE]
> Bevor Sie die untenstehenden Beispiele durchgehen, öffnen Sie die [Anfängerseite](https://mdn.github.io/beginner-html-site-scripted/), die wir während der [Einstieg ins Web](/de/docs/Learn_web_development/Getting_started/Your_first_website)-Artikelserie erstellt haben. Sie sollten diese geöffnet haben, während Sie die folgenden Schritte ausführen.

## So öffnen Sie die Entwicklertools in Ihrem Browser

Die Entwicklertools befinden sich in einem Unterfenster Ihres Browsers, das je nach verwendetem Browser ungefähr so aussieht:

![Screenshot eines Browsers mit geöffneten Entwicklertools. Die Webseite wird im oberen Teil des Browsers angezeigt, die Entwicklertools belegen die untere Hälfte. Drei Panels sind in den Entwicklertools geöffnet: HTML mit dem ausgewählten body-Element, ein CSS-Panel, das auf das hervorgehobene body-Element gerichtete Stilblöcke zeigt, und ein berechnetes Stil-Panel, das alle Autorenstile anzeigt; das Browser-Stil-Kontrollkästchen ist nicht aktiviert.](devtools_63_inspector.png)

Wie öffnen Sie das? Auf drei Arten:

- **_Tastatur:_**

  - **Windows:** <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> oder <kbd>F12</kbd>
  - **macOS:** <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>

- **_Menüleiste:_**

  - **Firefox:** _Menü (☰) ➤ Mehr Werkzeuge ➤ Web-Entwickler-Werkzeuge_
  - **Chrome:** _Mehr Werkzeuge ➤ Entwicklertools_
  - **Opera**: _Entwickler ➤ Entwicklertools_
  - **Safari:** _Entwickeln ➤ Web-Inspektor anzeigen._

    > [!NOTE]
    > Die Safari-Entwicklertools sind standardmäßig nicht aktiviert.
    > Um sie zu aktivieren, gehen Sie zu _Safari ➤ Einstellungen ➤ Erweitert_ und markieren Sie das Kontrollkästchen _Menü Entwickeln in der Menüleiste anzeigen_ oder _Funktionen für Webentwickler aktivieren_.

- **_Kontextmenü:_** Drücken und halten oder rechtsklicken Sie ein Element auf einer Webseite (Ctrl-Klick auf dem Mac) und wählen Sie _Element untersuchen_ aus dem erscheinenden Kontextmenü. (_Ein zusätzlicher Bonus:_ Diese Methode hebt sofort den Code des Elements hervor, das Sie rechtsgeklickt haben.)

![Das Firefox-Logo als DOM-Element auf einer Beispielwebsite mit geöffnetem Kontextmenü. Ein Kontextmenü erscheint, wenn ein Element auf der Webseite rechtsgeklickt wird. Der letzte Menüpunkt ist 'Element untersuchen'.](inspector_context.png)

## Der Inspektor: DOM-Explorer und CSS-Editor

Die Entwicklertools öffnen sich normalerweise standardmäßig auf den Inspektor, der wie der folgende Screenshot aussieht. Dieses Tool zeigt, wie das HTML auf Ihrer Seite zur Laufzeit aussieht, sowie den CSS-Stil, der auf jedes Element der Seite angewendet wird. Sie können damit auch sofort sowohl HTML als auch CSS ändern und die Ergebnisse Ihrer Änderungen live im Browser-Viewport sehen.

![Eine Testwebsite ist in einem Tab im Browser geöffnet. Das Unterfenster der Browser-Entwicklertools ist geöffnet. Die Entwicklertools haben mehrere Tabs. Der Tab Inspektor ist einer dieser Tabs. Der Inspektor-Tab zeigt den HTML-Code der Website. Ein img-Tag ist aus dem HTML-Code ausgewählt, was zur Hervorhebung des Bildes führt, das dem ausgewählten Tag auf der Website entspricht.](inspector_highlighted.png)

Wenn Sie _den Inspektor nicht_ sehen,

- **Firefox:** Wählen Sie den Tab **Inspektor**.
- **Andere Browser:** Wählen Sie den Tab **Elemente**.

### Den DOM-Inspektor erkunden

Rechtsklicken Sie für den Anfang (Ctrl-Klick) auf ein HTML-Element im DOM-Inspektor und sehen Sie sich das Kontextmenü an. Die verfügbaren Menüoptionen variieren je nach Browser, aber die wichtigsten sind weitgehend die gleichen:

![Das Unterfenster der Browser-Entwicklertools ist geöffnet. Der Inspektor-Tab ist ausgewählt. Ein Link-Element wird aus dem im Inspektor-Tab verfügbaren HTML-Code rechtsgeklickt. Ein Kontextmenü erscheint. Die verfügbaren Menüoptionen variieren je nach Browser, sind aber im Wesentlichen gleich.](dom_inspector.png)

- **Knoten löschen** (manchmal _Element löschen_). Löscht das aktuelle Element.
- **Als HTML bearbeiten** (manchmal _Attribut hinzufügen_/_Text bearbeiten_). Ermöglicht es Ihnen, das HTML zu ändern und die Ergebnisse sofort zu sehen. Sehr nützlich zum Debuggen und Testen.
- **:hover/:active/:focus**. Erzwingt, dass Elementzustände umgeschaltet werden, sodass Sie sehen können, wie ihr Stil aussehen würde.
- **Kopieren/Kopieren als HTML**. Kopiert das aktuell ausgewählte HTML.
- Einige Browser bieten auch _CSS-Pfad kopieren_ und _XPath kopieren_ an, um den CSS-Selektor oder den XPath-Ausdruck zu kopieren, der das aktuelle HTML-Element auswählen würde.

Versuchen Sie nun, einige Ihrer DOM-Elemente zu bearbeiten. Doppelklicken Sie auf ein Element oder rechtsklicken Sie und wählen Sie _Als HTML bearbeiten_ aus dem Kontextmenü. Sie können beliebige Änderungen vornehmen, aber Sie können Ihre Änderungen nicht speichern.

### Den CSS-Editor erkunden

Der CSS-Editor zeigt standardmäßig die CSS-Regeln an, die auf das aktuell ausgewählte Element angewendet werden:

![Ausschnitt des CSS-Panels und des Layout-Panels, die neben dem HTML-Editor in den Browser-Entwicklertools zu sehen sind. Standardmäßig zeigt der CSS-Editor die CSS-Regeln an, die auf das aktuell ausgewählte Element im HTML-Editor angewendet werden. Das Layout-Panel zeigt die Boxmodell-Eigenschaften des ausgewählten Elements.](css_inspector.png)

Diese Funktionen sind besonders nützlich:

- Die Regeln, die auf das aktuelle Element angewendet werden, werden in der Reihenfolge von der spezifischsten zur allgemeinsten angezeigt.
- Klicken Sie die Kontrollkästchen neben jeder Deklaration an, um zu sehen, was passieren würde, wenn Sie die Deklaration entfernen.
- Klicken Sie auf den kleinen Pfeil neben jeder Kurzform-Eigenschaft, um die Langform-Äquivalente der Eigenschaft anzuzeigen.
- Klicken Sie auf einen Eigenschaftsnamen oder -wert, um ein Textfeld anzuzeigen, in dem Sie einen neuen Wert eingeben können, um eine Live-Vorschau einer Stiländerung zu erhalten.
- Neben jeder Regel befinden sich der Dateiname und die Zeilennummer, in der die Regel definiert ist. Beim Klicken auf diese Regel springen die Entwicklertools zu dieser Regel in einer eigenen Ansicht, wo sie bearbeitet und gespeichert werden kann.
- Sie können auch auf die schließende geschweifte Klammer jeder Regel klicken, um ein Textfeld in einer neuen Zeile zu öffnen, in dem Sie eine völlig neue Deklaration für Ihre Seite schreiben können.

Oben im CSS Viewer sehen Sie eine Reihe von klickbaren Tabs:

- _Berechnet_: Diese zeigt die berechneten Stile für das aktuell ausgewählte Element (die endgültigen, normalisierten Werte, die der Browser anwendet).
- _Layout_: Diese zeigt die Details für die CSS-Layoutmodi [grid](/de/docs/Web/CSS/CSS_grid_layout) und [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) an, falls das von Ihnen untersuchte Element diese verwendet.
- _Schriften_: In Firefox und Safari zeigt der Tab _Schriften_ die auf das aktuelle Element angewendeten Schriften an.

Die _Boxmodell_-Ansicht stellt das aktuelle Boxmodell des Elements visuell dar, sodass Sie auf einen Blick sehen können, welche Polsterung, welcher Rahmen und welcher Rand darauf angewendet werden und wie groß der Inhalt ist. In Firefox befindet sich dies im Tab _Layout_, in anderen Browsern im Tab _Berechnet_.

In einigen Browsern können die JavaScript-Details des ausgewählten Elements auch in diesem Panel eingesehen werden. In Safari sind diese unter dem Tab _Knoten_ vereinheitlicht, aber in separaten Tabs in Chrome, Opera und Edge.

- _Eigenschaften_: Die {{Glossary("Property/JavaScript", "Eigenschaften")}} des Elementobjekts.
- _Ereignislistener_: Die [Ereignisse](/de/docs/Web/API/Event), die dem Element zugeordnet sind.

### Mehr erfahren

Erfahren Sie mehr über den Inspektor in verschiedenen Browsern:

- [Firefox Page Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [Chrome DOM Inspektor](https://developer.chrome.com/docs/devtools/dom/) (Der Inspektor von Opera und Edge ist der gleiche)
- [Safari Elemente-Tab](https://webkit.org/web-inspector/elements-tab/)

## Der JavaScript-Debugger

Der JavaScript-Debugger ermöglicht es Ihnen, den Wert von Variablen zu überwachen und Haltepunkte zu setzen, also Stellen in Ihrem Code, an denen Sie die Ausführung anhalten möchten, um die Probleme zu identifizieren, die verhindern, dass Ihr Code ordnungsgemäß ausgeführt wird.

![Eine Testwebsite, die lokal auf Port 8080 bereitgestellt wird. Das Unterfenster der Entwicklertools ist geöffnet. Der Tab JavaScript Debugger ist ausgewählt. Er ermöglicht es Ihnen, den Wert von Variablen zu überwachen und Haltepunkte zu setzen. Eine Datei mit dem Namen 'example.js' ist im Quellen-Bereich ausgewählt. Ein Haltepunkt ist bei Zeilennummer 18 der Datei gesetzt.](firefox_debugger.png)

Um zum Debugger zu gelangen:

**Firefox**: Öffnen Sie die Entwicklertools und wählen Sie den Tab **Debugger**.
**Andere Browser**: Öffnen Sie die Entwicklertools und wählen Sie den Tab **Quellen**.

### Den Debugger erkunden

Der JavaScript-Debugger jedes Browsers ist in drei Bereiche unterteilt. Die Anordnung dieser Bereiche variiert je nach verwendetem Browser; dieser Leitfaden verwendet Firefox als Referenz.

#### Dateiliste

Der erste Bereich links enthält die Liste der Dateien, die mit der Seite verbunden sind, die Sie debuggen. Wählen Sie die Datei aus, mit der Sie arbeiten möchten. Klicken Sie auf eine Datei, um sie auszuwählen und ihren Inhalt im mittleren Paneel des Debuggers anzuzeigen.

![Ausschnitt des Quellenbereichs des Debugger-Tabs in den Browser-Entwicklertools. Die Dateien, die mit der aktuellen Seite, die Sie debuggen, zusammenhängen, sind unter dem Ordner sichtbar, dessen Name mit der URL der Seite, die im aktuellen Browser-Tab geöffnet ist, übereinstimmt.](file_list.png)

#### Quellcode

Setzen Sie Haltepunkte, an denen Sie die Ausführung anhalten möchten. Im folgenden Bild zeigt die Hervorhebung auf der Nummer 18, dass die Zeile einen Haltepunkt enthält.

![Ausschnitt des Debugger-Panels der Entwicklertools mit hervorgehobenem Haltepunkt in Zeile 18.](source_code.png)

#### Überwachungs-Ausdrücke und Haltepunkte

Der rechte Bereich zeigt eine Liste der Überwachungs-Ausdrücke, die Sie hinzugefügt haben, und der Haltepunkte, die Sie gesetzt haben.

Im Bild zeigt der erste Abschnitt, **Überwachungs-Ausdrücke**, dass die Variable listItems hinzugefügt wurde. Sie können die Liste erweitern, um die Werte im Array anzuzeigen.

Der nächste Abschnitt, **Haltepunkte**, listet die Haltepunkte auf, die auf der Seite gesetzt wurden. In example.js wurde ein Haltepunkt auf der Anweisung `listItems.push(inputNewItem.value);` gesetzt.

Die letzten zwei Abschnitte erscheinen nur, wenn der Code ausgeführt wird.

Der Abschnitt **Aufrufliste** zeigt Ihnen, welcher Code ausgeführt wurde, um zur aktuellen Zeile zu gelangen. Sie können sehen, dass der Code in der Funktion ist, die einen Mausklick behandelt, und dass der Code derzeit am Haltepunkt angehalten ist.

Der letzte Abschnitt, **Geltungsbereiche**, zeigt, welche Werte von verschiedenen Punkten innerhalb Ihres Codes sichtbar sind. Beispielsweise können Sie auf dem folgenden Bild die Objekte sehen, die dem Code in der Funktion addItemClick zur Verfügung stehen.

![Ausschnitt des Quellenbereichs des Debugger-Tabs der Browser-Entwicklertools. In der Aufrufliste zeigt er die Funktion an, die in Zeile 18 aufgerufen wird. Dies hebt hervor, dass ein Haltepunkt an dieser Zeile gesetzt wurde und zeigt den Geltungsbereich an.](watch_items.png)

### Mehr erfahren

Erfahren Sie mehr über den JavaScript-Debugger in verschiedenen Browsern:

- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
- [Chrome-Debugger](https://developer.chrome.com/docs/devtools/javascript/) (Der Debugger von Opera und Edge ist der gleiche)
- [Safari Quellen-Tab](https://webkit.org/web-inspector/sources-tab/)

## Die JavaScript-Konsole

Die JavaScript-Konsole ist ein unglaublich nützliches Werkzeug zum Debuggen von JavaScript, das nicht wie erwartet funktioniert. Es ermöglicht Ihnen, JavaScript-Zeilen gegen die derzeit im Browser geladene Seite auszuführen und die Fehler zu melden, auf die der Browser stößt, während er versucht, Ihren Code auszuführen.

Um die Konsole in einem beliebigen Browser zu öffnen, öffnen Sie die Entwicklertools und wählen Sie den Tab **Konsole**. Dies öffnet ein Fenster wie das folgende:

![Der Konsolen-Tab der Browser-Entwicklertools. Zwei JavaScript-Funktionen wurden in der Konsole ausgeführt. Der Benutzer gab Funktionen ein, und die Konsole zeigte die Rückgabewerte an.](console_only.png)

Um zu sehen, was passiert, versuchen Sie, die folgenden Code-Snippets nacheinander in die Konsole einzugeben (und dann Enter zu drücken):

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

Versuchen Sie nun, die folgenden fehlerhaften Versionen des Codes einzufügen und zu sehen, was Sie bekommen.

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

Sie werden anfangen, die Art von Fehlern zu sehen, die der Browser zurückgibt. Oft sind diese Fehler ziemlich kryptisch, aber es sollte ziemlich einfach sein, diese Probleme zu lösen!

### Mehr erfahren

Erfahren Sie mehr über die JavaScript-Konsole in verschiedenen Browsern:

- [Firefox Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [Chrome JavaScript-Konsole](https://developer.chrome.com/docs/devtools/console/) (Die Konsole von Opera und Edge ist die gleiche)
- [Safari Console Object API](https://webkit.org/web-inspector/console-object-api/) und [Console Command Line API](https://webkit.org/web-inspector/console-command-line-api/)

## Siehe auch

- [Debugging von HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
- [Debugging von CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
