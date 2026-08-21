---
title: Was sind Entwicklerwerkzeuge des Browsers?
slug: Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Jeder moderne Webbrowser verfügt über eine leistungsstarke Suite von Entwicklerwerkzeugen. Diese Werkzeuge ermöglichen eine Reihe von Funktionen, von der Inspektion der aktuell geladenen HTML-, CSS- und JavaScript-Dateien bis hin zur Anzeige, welche Ressourcen die Seite angefordert hat und wie lange deren Ladezeit betrug. Dieser Artikel erklärt, wie man die grundlegenden Funktionen der Entwicklerwerkzeuge Ihres Browsers nutzt.

> [!NOTE]
> Bevor Sie die untenstehenden Beispiele durchgehen, öffnen Sie das [Anfängerseite Beispielsite](https://mdn.github.io/beginner-html-site-scripted/), die wir in der Artikelreihe [Der Einstieg ins Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) erstellt haben. Diese sollten Sie geöffnet haben, während Sie die folgenden Schritte durchführen.

## Wie Sie die Entwicklerwerkzeuge in Ihrem Browser öffnen

Die Entwicklerwerkzeuge befinden sich innerhalb Ihres Browsers in einem Unterfenster, das je nach verwendetem Browser etwa so aussieht:

![Screenshot eines Browsers mit geöffneten Entwicklerwerkzeugen. Die Webseite wird im oberen Teil des Browsers angezeigt, die Entwicklerwerkzeuge belegen die untere Hälfte. Es sind drei Panels in den Entwicklerwerkzeugen geöffnet: HTML mit dem ausgewählten Body-Element, ein CSS-Panel zeigt Stilblöcke, die auf den hervorgehobenen Body abzielen, und ein Panel mit berechneten Stilen zeigt alle Autorenstile; das Kontrollkästchen für Browserstile ist nicht aktiviert.](devtools_63_inspector.png)

Wie rufen Sie es auf? Es gibt drei Möglichkeiten:

- **_Tastatur:_**
  - **Windows:** <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> oder <kbd>F12</kbd>
  - **macOS:** <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>

- **_Menüleiste:_**
  - **Firefox:** _Menü (☰) ➤ Weitere Werkzeuge ➤ Web-Entwicklerwerkzeuge_
  - **Chrome:** _Weitere Werkzeuge ➤ Entwicklerwerkzeuge_
  - **Opera**: _Entwickler ➤ Entwicklerwerkzeuge_
  - **Safari:** _Entwickeln ➤ Web-Inspektor anzeigen._

    > [!NOTE]
    > Die Safari-Entwicklerwerkzeuge sind standardmäßig nicht aktiviert.
    > Um sie zu aktivieren, gehen Sie zu _Safari ➤ Einstellungen ➤ Erweitert_ und aktivieren Sie das Kontrollkästchen _Entwickeln-Menü in der Menüleiste anzeigen_ oder _Funktionen für Webentwickler aktivieren_.

- **_Kontextmenü:_** Halten Sie die Taste gedrückt oder klicken Sie mit der rechten Maustaste auf ein Element auf einer Webseite (Strg-Klick auf dem Mac) und wählen Sie _Element untersuchen_ aus dem erscheinenden Kontextmenü aus. (_Ein zusätzlicher Bonus:_ Diese Methode hebt sofort den Code des Elements hervor, das Sie mit der rechten Maustaste angeklickt haben.)

![Das Firefox-Logo als DOM-Element auf einer Beispielwebsite mit einem angezeigten Kontextmenü. Ein Kontextmenü erscheint, wenn ein beliebiges Element auf der Webseite mit der rechten Maustaste angeklickt wird. Das letzte Menüelement ist 'Element untersuchen'.](inspector_context.png)

## Der Inspektor: DOM-Explorer und CSS-Editor

Die Entwicklerwerkzeuge öffnen sich standardmäßig im Inspektor, der etwa so aussieht wie der folgende Screenshot. Dieses Werkzeug zeigt, wie das HTML auf Ihrer Seite zur Laufzeit aussieht, sowie welche CSS-Regeln auf jedes Element der Seite angewendet werden. Es ermöglicht Ihnen außerdem, das HTML und CSS sofort zu ändern und die Ergebnisse Ihrer Änderungen live im Browser-Viewport zu sehen.

![Eine Testwebsite ist in einem Tab im Browser geöffnet. Das Unterfenster der Entwicklerwerkzeuge des Browsers ist geöffnet. Die Entwicklerwerkzeuge haben mehrere Tabs. Der Inspektor ist einer dieser Tabs. Der Inspektor-Tab zeigt den HTML-Code der Website. Ein Bild-Tag ist im HTML-Code ausgewählt. Dies führt dazu, dass das Bild, das dem ausgewählten Tag in der Website entspricht, hervorgehoben wird.](inspector_highlighted.png)

Falls Sie den Inspektor _nicht_ sehen:

- **Firefox:** Wählen Sie den **Inspektor**-Tab.
- **Andere Browser:** Wählen Sie den **Elemente**-Tab.

### Erkundung des DOM-Inspektors

Beginnen Sie, indem Sie mit der rechten Maustaste (Strg-Klick) auf ein HTML-Element im DOM-Inspektor klicken und sich das Kontextmenü ansehen. Die verfügbaren Menüoptionen variieren je nach Browser, aber die wichtigen sind größtenteils dieselben:

![Das Unterfenster der Entwicklerwerkzeuge des Browsers ist geöffnet. Der Inspektor-Tab ist ausgewählt. Ein Link-Element wird im HTML-Code, der im Inspektor-Tab verfügbar ist, mit der rechten Maustaste angeklickt. Ein Kontextmenü erscheint. Die verfügbaren Menüoptionen variieren je nach Browser, aber die wichtigen sind größtenteils dieselben.](dom_inspector.png)

- **Node löschen** (manchmal _Element löschen_). Löscht das aktuelle Element.
- **Als HTML bearbeiten** (manchmal _Attribut hinzufügen_/_Text bearbeiten_). Ermöglicht Änderungen am HTML und zeigt die Ergebnisse sofort an. Sehr nützlich zum Debuggen und Testen.
- **:hover/:active/:focus**. Erzwingt, dass Elementzustände umgeschaltet werden, sodass Sie sehen können, wie ihre Gestaltung aussehen würde.
- **Kopieren/Als HTML kopieren**. Kopiert das aktuell ausgewählte HTML.
- Einige Browser bieten auch _CSS-Pfad kopieren_ und _XPath kopieren_ an, um den CSS-Selektor oder XPath-Ausdruck zu kopieren, der das aktuelle HTML-Element auswählen würde.

Versuchen Sie jetzt, einige Ihrer DOM-Elemente zu bearbeiten. Doppelklicken Sie auf ein Element oder klicken Sie mit der rechten Maustaste darauf und wählen Sie _Als HTML bearbeiten_ aus dem Kontextmenü. Sie können alle gewünschten Änderungen vornehmen, jedoch können Ihre Änderungen nicht gespeichert werden.

### Erkundung des CSS-Editors

Standardmäßig zeigt der CSS-Editor die auf das aktuell ausgewählte Element angewendeten CSS-Regeln an:

![Ausschnitt des CSS-Panels und des Layout-Panels, das neben dem HTML-Editor in den Entwicklerwerkzeugen des Browsers zu sehen ist. Der CSS-Editor zeigt standardmäßig die auf das aktuell ausgewählte Element im HTML-Editor angewendeten CSS-Regeln an. Das Layout-Panel zeigt die Eigenschaften des Box-Modells des ausgewählten Elements.](css_inspector.png)

Diese Funktionen sind besonders nützlich:

- Die Regeln, die auf das aktuelle Element angewendet werden, werden in der Reihenfolge von spezifisch zu allgemein angezeigt.
- Klicken Sie auf die Kontrollkästchen neben jeder Deklaration, um zu sehen, was passiert, wenn Sie die Deklaration entfernen.
- Klicken Sie auf den kleinen Pfeil neben jeder Kurzform-Eigenschaft, um die Langform-Entsprechungen der Eigenschaft anzuzeigen.
- Klicken Sie auf einen Eigenschaftsnamen oder -wert, um ein Textfeld zu öffnen, in das Sie einen neuen Wert eingeben können, um eine Live-Vorschau einer Stiländerung zu erhalten.
- Neben jeder Regel wird der Dateiname und die Zeilennummer angezeigt, in der die Regel definiert ist. Ein Klick auf diese Regel lässt die Entwicklerwerkzeuge sie in einem eigenen Fenster anzeigen, wo sie in der Regel bearbeitet und gespeichert werden kann.
- Sie können auch auf die geschweifte Schlussklammer einer beliebigen Regel klicken, um ein Textfeld in einer neuen Zeile zu öffnen, in dem Sie eine völlig neue Deklaration für Ihre Seite schreiben können.

Oben im CSS-Viewer werden Ihnen mehrere klickbare Tabs auffallen:

- _Berechnet_: Dies zeigt die berechneten Stile für das aktuell ausgewählte Element an (die endgültigen, normalisierten Werte, die der Browser anwendet).
- _Layout_: Dies zeigt die Details für die CSS [grid](/de/docs/Web/CSS/Guides/Grid_layout) und [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) Layout-Modi, wenn das von Ihnen inspizierte Element diese verwendet.
- _Schriftarten_: In Firefox und Safari zeigt der Tab _Schriftarten_ die auf das aktuelle Element angewendeten Schriftarten an.

Die _Boxmodell_-Ansicht stellt visuell das Box-Modell des aktuellen Elements dar, sodass Sie auf einen Blick sehen können, welche Polsterung, Rand und Margin darauf angewendet wurden und wie groß der Inhalt ist. In Firefox befindet sich dies im _Layout_-Tab; in anderen Browsern im _Berechnet_-Tab.

In einigen Browsern können die JavaScript-Details des ausgewählten Elements ebenfalls in diesem Panel angezeigt werden. In Safari sind diese unter dem _Node_-Tab zusammengefasst, in Chrome, Opera und Edge befinden sie sich jedoch in separaten Tabs.

- _Eigenschaften_: Die {{Glossary("Property/JavaScript", "Eigenschaften")}} des Elementobjekts.
- _Ereignis-Listener_: Die [Ereignisse](/de/docs/Web/API/Event), die dem Element zugeordnet sind.

### Weitere Informationen

Erfahren Sie mehr über den Inspektor in verschiedenen Browsern:

- [Firefox-Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [Chrome DOM-Inspektor](https://developer.chrome.com/docs/devtools/dom/) (Der Inspektor von Opera und Edge ist derselbe)
- [Safari-Elemente-Tab](https://webkit.org/web-inspector/elements-tab/)

## Der JavaScript-Debugger

Der JavaScript-Debugger ermöglicht es Ihnen, die Werte von Variablen zu überwachen und Haltepunkte festzulegen, Stellen in Ihrem Code, an denen Sie die Ausführung anhalten und die Probleme identifizieren wollen, die verhindern, dass Ihr Code ordnungsgemäß ausgeführt wird.

![Eine Testwebsite, die lokal auf Port 8080 ausgeführt wird. Das Unterfenster der Entwicklerwerkzeuge ist geöffnet. Der JavaScript-Debugger-Tab ist ausgewählt. Es erlaubt Ihnen, die Werte von Variablen zu überwachen und Haltepunkte festzulegen. Eine Datei mit dem Namen 'example.js' ist im Quellcode-Pane ausgewählt. Ein Haltepunkt ist in Zeile 18 der Datei gesetzt.](firefox_debugger.png)

Um zum Debugger zu gelangen:

- **Firefox**: Öffnen Sie die Entwicklerwerkzeuge und wählen Sie den **Debugger**-Tab.
- **Andere Browser**: Öffnen Sie die Entwicklerwerkzeuge und wählen Sie den **Quellen**-Tab.

### Erkundung des Debuggers

Der JavaScript-Debugger jedes Browsers ist in drei Bereiche unterteilt. Das Layout dieser unterscheidet sich je nach Browser; dieser Leitfaden verwendet Firefox als Referenz.

#### Dateiliste

Der erste Bereich auf der linken Seite enthält die Liste der Dateien, die mit der Seite verbunden sind, die Sie debuggen. Wählen Sie die Datei aus, mit der Sie arbeiten möchten. Klicken Sie auf eine Datei, um sie auszuwählen und ihren Inhalt im mittleren Bereich des Debuggers anzuzeigen.

![Ausschnitt des Quellcode-Panels im Debugger-Tab der Entwicklerwerkzeuge. Die Dateien, die mit der aktuellen Seite, die Sie debuggen, verbunden sind, sind unter dem Ordner sichtbar, dessen Name mit der URL der Seite, die im aktuellen Browsertab geöffnet ist, übereinstimmt.](file_list.png)

#### Quellcode

Legen Sie Haltepunkte fest, an denen Sie die Ausführung anhalten möchten. Im folgenden Bild zeigt die Hervorhebung auf der Zahl 18, dass in dieser Zeile ein Haltepunkt gesetzt wurde.

![Ausschnitt des Debugger-Panels der Entwicklerwerkzeuge mit dem Haltepunkt in Zeile 18 hervorgehoben.](source_code.png)

#### Überwachte Ausdrücke und Haltepunkte

Der rechte Bereich zeigt eine Liste der von Ihnen hinzugefügten Überwachungsausdrücke und der gesetzten Haltepunkte.

Im Bild zeigt der erste Abschnitt, **Überwachungsausdrücke**, dass die Variable `listItems` hinzugefügt wurde. Sie können die Liste erweitern, um die Werte im Array anzuzeigen.

Der nächste Abschnitt, **Haltepunkte**, listet die auf der Seite gesetzten Haltepunkte auf. In example.js wurde ein Haltepunkt auf der Anweisung `listItems.push(inputNewItem.value);` gesetzt.

Die letzten beiden Abschnitte erscheinen nur, wenn der Code ausgeführt wird.

Der Abschnitt **Call Stack** zeigt Ihnen, welcher Code ausgeführt wurde, um zur aktuellen Zeile zu gelangen. Sie können sehen, dass sich der Code in der Funktion befindet, die einen Mausklick verarbeitet, und dass der Code derzeit am Haltepunkt pausiert.

Der letzte Abschnitt, **Geltungsbereiche**, zeigt, welche Werte von verschiedenen Punkten innerhalb Ihres Codes sichtbar sind. Zum Beispiel können Sie im Bild unten die Objekte sehen, die dem Code in der Funktion addItemClick zur Verfügung stehen.

![Ausschnitt des Quellcode-Panels des Debugger-Tabs der Entwicklerwerkzeuge. Im Call Stack zeigt es die Funktion, die in Zeile 18 aufgerufen wird, und hebt hervor, dass ein Haltepunkt in dieser Zeile gesetzt ist und zeigt den Geltungsbereich an.](watch_items.png)

### Weitere Informationen

Erfahren Sie mehr über den JavaScript-Debugger in verschiedenen Browsern:

- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html))
- [Chrome-Debugger](https://developer.chrome.com/docs/devtools/javascript/) (Der Debugger von Opera und Edge ist derselbe)
- [Safari-Quellen-Tab](https://webkit.org/web-inspector/sources-tab/)

## Die JavaScript-Konsole

Die JavaScript-Konsole ist ein unglaublich nützliches Werkzeug zum Debuggen von JavaScript, das nicht wie erwartet funktioniert. Sie ermöglicht es Ihnen, JavaScript-Codezeilen gegen die momentan im Browser geladene Seite auszuführen, und meldet die beim Versuch des Browsers, Ihren Code auszuführen, aufgetretenen Fehler.

Um in einem beliebigen Browser auf die Konsole zuzugreifen, öffnen Sie die Entwicklerwerkzeuge und wählen Sie den **Konsole**-Tab. Dadurch wird Ihnen ein Fenster wie das folgende angezeigt:

![Der Konsole-Tab der Entwicklerwerkzeuge des Browsers. Zwei JavaScript-Funktionen wurden in der Konsole ausgeführt. Der Benutzer gab Funktionen ein, und die Konsole zeigte die Rückgabewerte an.](console_only.png)

Um zu sehen, was passiert, versuchen Sie die folgenden Code-Schnipsel nacheinander in die Konsole einzugeben (und dann Enter zu drücken):

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

Versuchen Sie nun die folgenden fehlerhaften Versionen des Codes einzugeben und sehen Sie, was Sie erhalten.

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

Sie werden beginnen, die Art von Fehlern zu sehen, die der Browser zurückgibt. Oft sind diese Fehler ziemlich kryptisch, aber es sollte ziemlich einfach sein, diese Probleme zu erkennen!

### Weitere Informationen

Erfahren Sie mehr über die JavaScript-Konsole in verschiedenen Browsern:

- [Firefox-Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [Chrome-JavaScript-Konsole](https://developer.chrome.com/docs/devtools/console/) (Die Konsole von Opera und Edge ist dieselbe)
- [Safari-Konsole Objekt-API](https://webkit.org/web-inspector/console-object-api/) und [Kommandozeilen-API der Konsole](https://webkit.org/web-inspector/console-command-line-api/)

## Siehe auch

- [Debugging von HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
- [Debugging von CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
