---
title: Was sind Entwicklerwerkzeuge für Browser?
slug: Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: 1af3d045bad1d27c20b1236966301839971f9c09
---

Jeder moderne Webbrowser enthält eine leistungsfähige Suite von Entwicklerwerkzeugen. Diese Werkzeuge führen eine Reihe von Funktionen aus, von der Inspektion des aktuell geladenen HTML, CSS und JavaScript bis hin zur Anzeige, welche Assets die Seite angefordert hat und wie lange sie zum Laden benötigt haben. Dieser Artikel erklärt, wie Sie die grundlegenden Funktionen der Entwicklertools Ihres Browsers nutzen können.

> [!NOTE]
> Bevor Sie die unten stehenden Beispiele durchgehen, öffnen Sie die [Anfängerseite](https://mdn.github.io/beginner-html-site-scripted/), die wir während der [Einstieg in das Web](/de/docs/Learn_web_development/Getting_started/Your_first_website)-Artikelserie erstellt haben. Diese sollten Sie offen haben, während Sie die folgenden Schritte durchführen.

## So öffnen Sie die Entwicklertools in Ihrem Browser

Die Entwicklertools befinden sich in einem Unterfenster Ihres Browsers, das je nach verwendetem Browser ungefähr so aussieht:

![Screenshot eines Browsers mit geöffneten Entwicklerwerkzeugen. Die Webseite wird in der oberen Hälfte des Browsers angezeigt, die Entwicklerwerkzeuge nehmen die untere Hälfte ein. Es sind drei Panels in den Entwicklerwerkzeugen geöffnet: HTML, mit dem ausgewählten body-Element; ein CSS-Panel, das die Styles-Blöcke zeigt, die das hervorgehobene body anvisieren; und ein berechnetes Stile-Panel, das alle Autorstile zeigt; das Browser-Stile-Checkbox ist nicht aktiviert.](devtools_63_inspector.png)

Wie rufen Sie es auf? Drei Möglichkeiten:

- **_Tastatur:_**
  - **Windows:** <kbd>Strg</kbd> + <kbd>Umschalt</kbd> + <kbd>I</kbd> oder <kbd>F12</kbd>
  - **macOS:** <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>

- **_Menüleiste:_**
  - **Firefox:** _Menü (☰) ➤ Weitere Werkzeuge ➤ Webentwickler-Werkzeuge_
  - **Chrome:** _Weitere Tools ➤ Entwicklertools_
  - **Opera**: _Entwickler ➤ Entwicklertools_
  - **Safari:** _Entwickeln ➤ Web-Inspektor anzeigen._

    > [!NOTE]
    > Die Safari-Entwicklerwerkzeuge sind standardmäßig nicht aktiviert.
    > Um sie zu aktivieren, gehen Sie zu _Safari ➤ Einstellungen ➤ Erweitert_ und aktivieren Sie die Checkbox _Menü „Entwickeln“ in der Menüleiste anzeigen_ oder _Funktionen für Webentwickler aktivieren_.

- **_Kontextmenü:_** Drücken und halten bzw. rechtsklicken Sie ein Element auf einer Webseite (Strg-Klick auf dem Mac), und wählen Sie _Element untersuchen_ aus dem erscheinenden Kontextmenü. (_Ein zusätzlicher Bonus:_ Diese Methode hebt sofort den Code des Elements hervor, auf das Sie geklickt haben.)

![Das Firefox-Logo als ein DOM-Element auf einer Beispielwebsite mit einem angezeigten Kontextmenü. Ein Kontextmenü erscheint, wenn ein Element auf der Webseite mit der rechten Maustaste angeklickt wird. Das letzte Menüelement ist „Element untersuchen“.](inspector_context.png)

## Der Inspektor: DOM-Explorer und CSS-Editor

Die Entwicklerwerkzeuge werden standardmäßig meist im Inspektor geöffnet, der etwa so aussieht wie der folgende Screenshot. Dieses Werkzeug zeigt, wie das HTML Ihrer Seite zur Laufzeit aussieht und welche CSS-Styles auf jedes Element der Seite angewendet werden. Es ermöglicht Ihnen auch, das HTML und CSS sofort zu ändern und die Ergebnisse Ihrer Änderungen live im Browser-Ansichtsfenster zu sehen.

![Eine Test-Website ist in einem Tab im Browser geöffnet. Das Entwicklerwerkzeuge-Unterfenster des Browsers ist offen. Die Entwicklertools haben mehrere Tabs. Der Inspektor ist einer dieser Tabs. Der Inspektor-Tab zeigt den HTML-Code der Website an. Ein img-Tag ist aus dem HTML-Code ausgewählt. Dies führt dazu, dass das Bild, das dem ausgewählten Tag auf der Website entspricht, hervorgehoben wird.](inspector_highlighted.png)

Wenn Sie den Inspektor _nicht_ sehen:

- **Firefox:** Wählen Sie den **Inspektor**-Tab.
- **Andere Browser:** Wählen Sie den **Elemente**-Tab.

### Den DOM-Inspektor erkunden

Zu Beginn, klicken Sie mit der rechten Maustaste (Strg-Klick) auf ein HTML-Element im DOM-Inspektor und sehen Sie sich das Kontextmenü an. Die verfügbaren Menüoptionen variieren zwischen den Browsern, aber die wichtigen sind größtenteils gleich:

![Das Entwicklerwerkzeuge-Unterfenster des Browsers ist geöffnet. Der Inspektor-Tab ist ausgewählt. Ein Link-Element wird im HTML-Code, der im Inspektor-Tab verfügbar ist, mit der rechten Maustaste angeklickt. Ein Kontextmenü erscheint. Die verfügbaren Menüoptionen variieren zwischen den Browsern, aber die wichtigen sind größtenteils gleich.](dom_inspector.png)

- **Knoten löschen** (manchmal _Element löschen_). Löscht das aktuelle Element.
- **Als HTML bearbeiten** (manchmal _Attribut hinzufügen_/_Text bearbeiten_). Ermöglicht Ihnen, das HTML zu ändern und die Ergebnisse im Handumdrehen zu sehen. Sehr nützlich zum Debuggen und Testen.
- **:hover/:active/:focus**. Erzwingt das Toggeln von Elementzuständen, sodass Sie sehen können, wie deren Styling aussehen würde.
- **Kopieren/Als HTML kopieren**. Kopieren Sie das derzeit ausgewählte HTML.
- In einigen Browsern sind auch _CSS-Pfad kopieren_ und _XPath kopieren_ verfügbar, um Ihnen das Kopieren des CSS-Selectors oder des XPath-Ausdrucks zu ermöglichen, der das aktuelle HTML-Element auswählen würde.

Versuchen Sie nun, etwas von Ihrem DOM zu bearbeiten. Doppelklicken Sie auf ein Element oder klicken Sie mit der rechten Maustaste darauf und wählen Sie _Als HTML bearbeiten_ aus dem Kontextmenü. Sie können beliebige Änderungen vornehmen, aber Sie können Ihre Änderungen nicht speichern.

### Den CSS-Editor erkunden

Standardmäßig zeigt der CSS-Editor die auf das derzeit ausgewählte Element angewendeten CSS-Regeln an:

![Ausschnitt des CSS-Panels und des Layout-Panels, das neben dem HTML-Editor in den Entwicklerwerkzeugen des Browsers zu sehen ist. Standardmäßig zeigt der CSS-Editor die auf das derzeit ausgewählte Element im HTML-Editor angewendeten CSS-Regeln an. Das Layout-Panel zeigt die Boxmodell-Eigenschaften des ausgewählten Elements.](css_inspector.png)

Diese Funktionen sind besonders praktisch:

- Die auf das aktuelle Element angewendeten Regeln werden in der Reihenfolge von der spezifischsten zur am wenigsten spezifischen angezeigt.
- Klicken Sie auf die Kontrollkästchen neben jeder Deklaration, um zu sehen, was passieren würde, wenn Sie die Deklaration entfernen.
- Klicken Sie auf den kleinen Pfeil neben jeder Kurzform-Eigenschaft, um die Langform-Äquivalente der Eigenschaft anzuzeigen.
- Klicken Sie auf einen Eigenschaftsnamen oder Wert, um ein Textfeld einzublenden, in das Sie einen neuen Wert eingeben können, um eine Live-Vorschau einer Stiländerung zu erhalten.
- Neben jeder Regel steht der Dateiname und die Zeilennummer, in der die Regel definiert ist. Ein Klick auf diese Regel zeigt sie in einem eigenen Fenster der Entwicklertools an, wo sie in der Regel bearbeitet und gespeichert werden kann.
- Sie können auch auf die schließende geschweifte Klammer einer Regel klicken, um ein Textfeld in einer neuen Zeile anzuzeigen, in dem Sie eine völlig neue Deklaration für Ihre Seite schreiben können.

Oben im CSS-Viewer werden Ihnen verschiedene anklickbare Tabs auffallen:

- _Berechnet_: Dies zeigt die berechneten Stile für das derzeit ausgewählte Element an (die endgültigen, vom Browser angewendeten normalisierten Werte).
- _Layout_: Dies zeigt die Details für die CSS-[Raster](/de/docs/Web/CSS/Guides/Grid_layout)- und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout)-Layout-Modi, wenn das von Ihnen untersuchte Element diese verwendet.
- _Fonts_: In Firefox und Safari zeigt der _Fonts_-Tab die auf das aktuelle Element angewendeten Schriftarten an.

Die _Boxmodell_-Ansicht stellt auf visuelle Weise das Boxmodell des aktuellen Elements dar, sodass Sie auf einen Blick sehen können, welche Abstände, Ränder und Randeigenschaften darauf angewendet werden und wie groß der Inhalt ist. In Firefox befindet sich dies im _Layout_-Tab; in anderen Browsern befindet es sich im _Berechnete_-Tab.

In einigen Browsern können die JavaScript-Details des ausgewählten Elements ebenfalls in diesem Panel betrachtet werden. In Safari sind diese unter dem _Node_-Tab vereinheitlicht, befinden sich jedoch in separaten Tabs in Chrome, Opera und Edge.

- _Eigenschaften_: Die {{Glossary("Property/JavaScript", "Eigenschaften")}} des Elementobjekts.
- _Ereignis-Listener_: Die [Ereignisse](/de/docs/Web/API/Event), die dem Element zugeordnet sind.

### Mehr erfahren

Erfahren Sie mehr über den Inspektor in verschiedenen Browsern:

- [Firefox-Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [Chrome-DOM-Inspektor](https://developer.chrome.com/docs/devtools/dom/) (Der Inspektor von Opera und Edge ist der gleiche)
- [Safari-Elemente-Tab](https://webkit.org/web-inspector/elements-tab/)

## Der JavaScript-Debugger

Der JavaScript-Debugger ermöglicht es Ihnen, den Wert von Variablen zu beobachten und Haltepunkte festzulegen, also Stellen in Ihrem Code, an denen Sie die Ausführung pausieren und die Probleme identifizieren möchten, die verhindern, dass Ihr Code ordnungsgemäß ausgeführt wird.

![Eine Test-Website, die lokal auf Port 8080 bereitgestellt wird. Das Entwicklerwerkzeuge-Unterfenster ist geöffnet. Der JavaScript-Debugger-Tab ist ausgewählt. Er ermöglicht es Ihnen, den Wert von Variablen zu beobachten und Haltepunkte festzulegen. Eine Datei mit dem Namen 'example.js' ist aus dem Quellbereich ausgewählt. Ein Haltepunkt ist bei Zeile 18 der Datei gesetzt.](firefox_debugger.png)

So gelangen Sie zum Debugger:

- **Firefox**: Öffnen Sie die Entwicklertools und wählen Sie den **Debugger**-Tab.
- **Andere Browser**: Öffnen Sie die Entwicklertools und wählen Sie den **Quellen**-Tab.

### Den Debugger erkunden

Jeder Browser hat seinen JavaScript-Debugger in drei Bereiche unterteilt. Das Layout unterscheidet sich je nach Browser; dieser Leitfaden verwendet Firefox als Referenz.

#### Dateiliste

Der erste Bereich auf der linken Seite enthält die Liste der mit der Seite verbundenen Dateien, die Sie debuggen. Wählen Sie die Datei aus, mit der Sie arbeiten möchten. Klicken Sie auf eine Datei, um sie auszuwählen und ihren Inhalt im mittleren Bereich des Debuggers anzuzeigen.

![Ausschnitt aus dem Quellenbereich des Debugger-Tabs in den Entwicklerwerkzeugen des Browsers. Die mit der aktuellen Seite verbundenen Dateien, die Sie debuggen, sind unter dem Ordner sichtbar, dessen Name mit der URL der Seite übereinstimmt, die im aktuellen Browsertab geöffnet ist.](file_list.png)

#### Quellcode

Setzen Sie Haltepunkte dort, wo Sie die Ausführung anhalten möchten. Im folgenden Bild zeigt die Hervorhebung bei der Nummer 18, dass in dieser Zeile ein Haltepunkt gesetzt ist.

![Ausschnitt des Entwicklerwerkzeuge-Debugger-Panels mit dem bei Zeile 18 hervorgehobenen Haltepunkt.](source_code.png)

#### Überwachungs-Ausdrücke und Haltepunkte

Der rechte Bereich zeigt eine Liste der hinzugefügten Überwachungs-Ausdrücke und der festgelegten Haltepunkte.

Im Bild zeigt der erste Abschnitt, **Überwachungs-Ausdrücke**, dass die Variable `listItems` hinzugefügt wurde. Sie können die Liste erweitern, um die Werte im Array anzuzeigen.

Der nächste Abschnitt, **Haltepunkte**, listet die auf der Seite festgelegten Haltepunkte auf. In example.js wurde ein Haltepunkt bei der Anweisung `listItems.push(inputNewItem.value);` gesetzt.

Die letzten beiden Abschnitte erscheinen nur, wenn der Code ausgeführt wird.

Der **Callstack**-Abschnitt zeigt Ihnen, welcher Code ausgeführt wurde, um zur aktuellen Zeile zu gelangen. Sie können sehen, dass sich der Code in der Funktion befindet, die einen Mausklick behandelt, und dass der Code derzeit bei einem Haltepunkt angehalten ist.

Der letzte Abschnitt, **Scopes**, zeigt, welche Werte von verschiedenen Punkten innerhalb Ihres Codes sichtbar sind. Im folgenden Bild können Sie beispielsweise die Objekte sehen, die dem Code in der addItemClick-Funktion zur Verfügung stehen.

![Ausschnitt aus dem Quellenbereich des Debugger-Tabs der Entwicklerwerkzeuge des Browsers. Im Callstack wird die Funktion angezeigt, die in Zeile 18 aufgerufen wird. Sie hebt hervor, dass ein Haltepunkt bei dieser Zeile gesetzt ist, und zeigt den Geltungsbereich.](watch_items.png)

### Mehr erfahren

Erfahren Sie mehr über den JavaScript-Debugger in verschiedenen Browsern:

- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html))
- [Chrome-Debugger](https://developer.chrome.com/docs/devtools/javascript/) (Der Debugger von Opera und Edge ist der gleiche)
- [Safari Quellen-Tab](https://webkit.org/web-inspector/sources-tab/)

## Die JavaScript-Konsole

Die JavaScript-Konsole ist ein unglaublich nützliches Werkzeug zur Fehlersuche in JavaScript, das nicht wie erwartet funktioniert. Sie ermöglicht es Ihnen, Zeilen von JavaScript gegen die aktuell im Browser geladene Seite auszuführen und berichtet die Fehler, die auftreten, wenn der Browser versucht, Ihren Code auszuführen.

Um die Konsole in einem beliebigen Browser zu öffnen, öffnen Sie die Entwicklertools und wählen Sie den **Konsole**-Tab. Dies gibt Ihnen ein Fenster wie das folgende:

![Der Konsole-Tab der Entwicklerwerkzeuge des Browsers. Zwei JavaScript-Funktionen wurden in der Konsole ausgeführt. Der Benutzer hat Funktionen eingegeben und die Konsole zeigt die Rückgabewerte an.](console_only.png)

Um zu sehen, was passiert, versuchen Sie, die folgenden Code-Ausschnitte nacheinander in die Konsole einzugeben (und dann die Eingabetaste zu drücken):

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

Versuchen Sie jetzt, die folgenden falschen Versionen des Codes einzugeben und sehen Sie, was Sie erhalten.

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

### Mehr erfahren

Erfahren Sie mehr über die JavaScript-Konsole in verschiedenen Browsern:

- [Firefox-Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [Chrome-JavaScript-Konsole](https://developer.chrome.com/docs/devtools/console/) (Die Konsole von Opera und Edge ist die gleiche)
- [Safari Console Object API](https://webkit.org/web-inspector/console-object-api/) und [Console Command Line API](https://webkit.org/web-inspector/console-command-line-api/)

## Siehe auch

- [Debugging von HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
- [Debugging von CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
