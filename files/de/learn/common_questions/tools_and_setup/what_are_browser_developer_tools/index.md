---
title: Was sind Browser-Entwicklertools?
slug: Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Jeder moderne Webbrowser enthält eine leistungsstarke Suite von Entwicklerwerkzeugen. Diese Werkzeuge ermöglichen eine Reihe von Aufgaben, von der Inspektion der aktuell geladenen HTML-, CSS- und JavaScript-Dateien bis hin zur Anzeige der angeforderten Assets der Seite und der Zeit, die sie zum Laden benötigt haben. Dieser Artikel erklärt, wie Sie die grundlegenden Funktionen der Entwicklerwerkzeuge Ihres Browsers verwenden können.

> [!NOTE]
> Bevor Sie die unten stehenden Beispiele durchgehen, öffnen Sie die [Anfängerseite](https://mdn.github.io/beginner-html-site-scripted/), die wir während der Artikelserie [Erste Schritte mit dem Web](/de/docs/Learn/Getting_started_with_the_web) erstellt haben. Sie sollten diese geöffnet haben, während Sie die folgenden Schritte ausführen.

## So öffnen Sie die Entwicklertools in Ihrem Browser

Die Entwicklertools befinden sich in einem Unterfenster Ihres Browsers, das je nach verwendetem Browser ungefähr so aussieht:

![Screenshot eines Browsers mit geöffneten Entwicklerwerkzeugen. Die Webseite wird im oberen Teil des Browsers angezeigt, die Entwicklerwerkzeuge nehmen den unteren Teil ein. Es sind drei Panels in den Entwicklerwerkzeugen geöffnet: HTML, mit ausgewähltem body-Element, ein CSS-Panel, das Styles-Blöcke zeigt, die auf das hervorgehobene body-Element abzielen, und ein Panel mit berechneten Styles, das alle Autorenstile zeigt; das Kontrollkästchen für Browserstile ist nicht aktiviert.](devtools_63_inspector.png)

Wie rufen Sie es auf? Drei Möglichkeiten:

- **_Tastatur:_**

  - **Windows:** _<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>_ oder <kbd>F12</kbd>

  - **macOS:** _<kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>_

- **_Menüleiste:_**

  - **Firefox:** Menü ![Firefox-Hamburger-Menü-Symbol, das mehr Optionen zum Anpassen und Steuern von Firefox bietet.](2014-01-10-13-08-08-f52b8c.png) _➤ Weitere Werkzeuge ➤ Web-Entwicklerwerkzeuge_
  - **Chrome:** _Weitere Tools ➤ Entwicklertools_
  - **Safari:** _Entwickeln ➤ Web-Inspector anzeigen._ Wenn Sie das Menü _Entwickeln_ nicht sehen können, gehen Sie zu _Safari ➤ Einstellungen ➤ Erweitert_ und aktivieren Sie das Kontrollkästchen _Menü 'Entwickeln' in Menüleiste einblenden_.
  - **Opera**: _Entwickler ➤ Entwicklertools_

- **_Kontextmenü:_** Drücken und halten/rechtsklicken Sie auf ein Element auf einer Webseite (Ctrl-Klick auf dem Mac) und wählen Sie _Element untersuchen_ aus dem erscheinenden Kontextmenü. (_Ein zusätzlicher Bonus:_ Diese Methode hebt sofort den Code des Elements hervor, auf das Sie rechtsgeklickt haben.)

![Das Firefox-Logo als DOM-Element auf einer Beispiel-Website mit einem geöffneten Kontextmenü. Ein Kontextmenü erscheint, wenn ein Element auf der Webseite rechts angeklickt wird. Der letzte Menüpunkt ist 'Element untersuchen'.](inspector_context.png)

## Der Inspector: DOM-Explorer und CSS-Editor

Die Entwicklerwerkzeuge öffnen sich in der Regel standardmäßig zum Inspector, der ungefähr wie der folgende Screenshot aussieht. Dieses Werkzeug zeigt, wie das HTML auf Ihrer Seite zur Laufzeit aussieht, sowie welches CSS auf jedes Element der Seite angewendet wird. Es ermöglicht Ihnen auch, das HTML und CSS sofort zu ändern und die Ergebnisse Ihrer Änderungen live im Browser-Viewport zu sehen.

![Eine Testwebsite ist in einem Tab im Browser geöffnet. Das Unterfenster der Entwicklerwerkzeuge ist offen. Die Entwicklerwerkzeuge haben mehrere Tabs. Inspector ist einer dieser Tabs. Der Inspector-Tab zeigt den HTML-Code der Website an. Ein Image-Tag ist aus dem HTML-Code ausgewählt. Dies führt zur Hervorhebung des Bildes, das dem ausgewählten Tag in der Website entspricht.](inspector_highlighted.png)

Wenn Sie den Inspector _nicht_ sehen,

- Tippen/klicken Sie auf den Tab _Inspector_.
- In Chrome, Microsoft Edge oder Opera tippen/klicken Sie auf Elemente.
- In Safari sind die Bedienelemente nicht so deutlich dargestellt, aber Sie sollten das HTML sehen, wenn Sie nichts anderes zur Anzeige im Fenster ausgewählt haben. Drücken Sie die _Style_-Taste, um das CSS zu sehen.

### Erforschen des DOM-Inspectors

Klicken Sie für den Anfang mit der rechten Maustaste (Ctrl-Klick) auf ein HTML-Element im DOM-Inspector und sehen Sie sich das Kontextmenü an. Die verfügbaren Menüoptionen variieren zwischen den Browsern, aber die wichtigen sind größtenteils gleich:

![Das Unterfenster der Entwicklerwerkzeuge ist geöffnet. Der Inspector-Tab ist ausgewählt. Ein Link-Element wurde aus dem im Inspector-Tab verfügbaren HTML-Code rechts angeklickt. Ein Kontextmenü erscheint. Die verfügbaren Menüoptionen variieren zwischen den Browsern, aber die wichtigen sind größtenteils gleich.](dom_inspector.png)

- **Knoten löschen** (manchmal _Element löschen_). Löscht das aktuelle Element.
- **Als HTML bearbeiten** (manchmal _Attribut hinzufügen_/_Text bearbeiten_). Ermöglicht Ihnen, das HTML zu ändern und die Ergebnisse sofort zu sehen. Sehr nützlich zum Debuggen und Testen.
- **:hover/:active/:focus**. Erzwingt den Wechsel der Zustände eines Elements, damit Sie sehen können, wie das Styling aussehen würde.
- **Kopieren/Als HTML kopieren**. Kopiert das derzeit ausgewählte HTML.
- Einige Browser bieten auch _CSS-Pfad kopieren_ und _XPath kopieren_ an, um den CSS-Selektor oder den XPath-Ausdruck zu kopieren, der das aktuelle HTML-Element auswählen würde.

Versuchen Sie jetzt, einige Ihrer DOMs zu bearbeiten. Doppelklicken Sie auf ein Element oder klicken Sie mit der rechten Maustaste darauf und wählen Sie _Als HTML bearbeiten_ im Kontextmenü. Sie können beliebige Änderungen vornehmen, aber Sie können Ihre Änderungen nicht speichern.

### Erforschen des CSS-Editors

Standardmäßig zeigt der CSS-Editor die auf das aktuell ausgewählte Element angewendeten CSS-Regeln an:

![Ausschnitt des CSS-Panels und des Layout-Panels, die neben dem HTML-Editor in den Entwicklerwerkzeugen des Browsers zu sehen sind. Standardmäßig zeigt der CSS-Editor die CSS-Regeln an, die auf das im HTML-Editor aktuell ausgewählte Element angewendet werden. Das Layout-Panel zeigt die Box-Modell-Eigenschaften des ausgewählten Elements.](css_inspector.png)

Diese Funktionen sind besonders praktisch:

- Die auf das aktuelle Element angewendeten Regeln werden in der Reihenfolge von der spezifischsten zur wenigst spezifischen angezeigt.
- Klicken Sie auf die Kontrollkästchen neben jeder Deklaration, um zu sehen, was passieren würde, wenn Sie die Deklaration entfernen.
- Klicken Sie auf den kleinen Pfeil neben jedem Kurzschreib-Eigenschaftsbegriff, um die Langschreib-Entsprechungen der Eigenschaft anzuzeigen.
- Klicken Sie auf einen Eigenschaftsnamen oder -wert, um ein Textfeld zu öffnen, in dem Sie einen neuen Wert eingeben können, um eine Live-Vorschau einer Stiländerung zu erhalten.
- Neben jeder Regel befindet sich der Dateiname und die Zeilennummer, in der die Regel definiert ist. Durch Klicken auf diese Regel springen die Entwicklertools, um sie in einer eigenen Ansicht anzuzeigen, wo sie in der Regel bearbeitet und gespeichert werden kann.
- Sie können auch die schließende geschweifte Klammer jeder Regel anklicken, um ein Textfeld in einer neuen Zeile zu öffnen, in dem Sie eine völlig neue Deklaration für Ihre Seite schreiben können.

Sie werden eine Anzahl von anklickbaren Tabs oben im CSS-Viewer bemerken:

- _Berechnet_: Dies zeigt die berechneten Stile für das aktuell ausgewählte Element (die endgültigen, normalisierten Werte, die der Browser anwendet).
- _Layout_: In Firefox umfasst dieser Bereich zwei Abschnitte:

  - _Box-Modell_: Stellt das aktuelle Box-Modell des Elements visuell dar, sodass Sie auf einen Blick sehen können, welche Abstände, Ränder und wie groß der Inhalt ist, angewendet werden.
  - _Grid_: Wenn die Seite, die Sie untersuchen, ein CSS-Grid verwendet, können Sie in diesem Abschnitt die Grid-Details anzeigen.

- _Schriften_: In Firefox zeigt der Tab _Schriften_ die auf das aktuelle Element angewendeten Schriften an.

### Erfahren Sie mehr

Erfahren Sie mehr über den Inspector in verschiedenen Browsern:

- [Firefox-Seiteninspektion](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [Chrome-DOM-Inspektor](https://developer.chrome.com/docs/devtools/dom/) (Der Inspektor von Opera funktioniert genauso)
- [Safari-DOM-Inspektor und Stilexplorer](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/ResourcesandtheDOM/ResourcesandtheDOM.html#//apple_ref/doc/uid/TP40007874-CH3-SW1)

## Der JavaScript-Debugger

Der JavaScript-Debugger ermöglicht es Ihnen, den Wert von Variablen zu beobachten und Breakpoints festzulegen – Punkte in Ihrem Code, an denen Sie die Ausführung anhalten möchten, um Probleme zu identifizieren, die verhindern, dass Ihr Code ordnungsgemäß ausgeführt wird.

![Eine Testwebsite, die lokal auf Port 8080 bereitgestellt wird. Das Unterfenster der Entwicklerwerkzeuge ist offen. Der JavaScript-Debugger-Tab ist ausgewählt. Er ermöglicht es Ihnen, den Wert von Variablen zu beobachten und Breakpoints festzulegen. Eine Datei mit dem Namen 'example.js' ist im Quellen-Panel ausgewählt. Ein Breakpoint ist in Zeile 18 der Datei gesetzt.](firefox_debugger.png)

Um zum Debugger zu gelangen:

**Firefox**: Wählen Sie ![Firefox-Menüsymbol, das mehr Optionen zur Anpassung und Steuerung von Firefox bietet.](2014-01-10-13-08-08-f52b8c.png) ➤ _Web-Entwickler_ ➤ _Debugger_ oder drücken Sie <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>, um den JavaScript-Debugger zu öffnen. Wenn die Werkzeuge bereits angezeigt werden, klicken Sie auf den Tab **Debugger**.

**Chrome**: Öffnen Sie die Entwicklertools und wählen Sie dann den Tab **Quellen** aus. (Opera funktioniert auf die gleiche Weise.)

**Safari**: Öffnen Sie die Entwicklerwerkzeuge und wählen Sie dann den Tab Debugger aus.

### Den Debugger erkunden

Im JavaScript-Debugger von Firefox gibt es drei Bereiche.

#### Dateiliste

Der erste Bereich links enthält die Liste der mit der Seite verbundenen Dateien, die Sie debuggen. Wählen Sie die Datei aus, mit der Sie arbeiten möchten. Klicken Sie auf eine Datei, um sie auszuwählen und ihren Inhalt im mittleren Bereich des Debuggers anzuzeigen.

![Ausschnitt des Quell-Ordners des Debugger-Tabs in den Entwicklerwerkzeugen des Browsers. Die mit der aktuellen Seite verbundenen Dateien, die Sie debuggen, sind unter dem Ordner sichtbar, dessen Name dem URL der aufgerufenen Website in der aktuellen Browser-Registerkarte entspricht.](file_list.png)

#### Quellcode

Setzen Sie Breakpoints, wo Sie die Ausführung anhalten möchten. Im folgenden Bild zeigt das Highlight auf der Nummer 18, dass in dieser Zeile ein Breakpoint gesetzt ist.

![Ausschnitt des Entwicklerwerkzeuge-Debugger-Panels mit hervorgehobenem Breakpoint in Zeile 18.](source_code.png)

#### Überwachungs-Ausdrücke und Breakpoints

Der rechte Bereich zeigt eine Liste der Überwachungs-Ausdrücke, die Sie hinzugefügt haben und der gesetzten Breakpoints.

Im Bild zeigt der erste Abschnitt, **Überwachungs-Ausdrücke**, dass die Variable listItems hinzugefügt wurde. Sie können die Liste erweitern, um die Werte im Array anzuzeigen.

Der nächste Abschnitt, **Breakpoints**, listet die auf der Seite gesetzten Breakpoints auf. In example.js wurde ein Breakpoint auf die Anweisung `listItems.push(inputNewItem.value);` gesetzt.

Die letzten beiden Abschnitte erscheinen nur, wenn der Code ausgeführt wird.

Der **Callstack**-Abschnitt zeigt Ihnen, welcher Code ausgeführt wurde, um zur aktuellen Zeile zu gelangen. Sie können sehen, dass sich der Code in der Funktion befindet, die einen Mausklick verarbeitet, und dass der Code derzeit am Breakpoint angehalten ist.

Der letzte Abschnitt, **Scopes**, zeigt an, welche Werte von verschiedenen Punkten in Ihrem Code sichtbar sind. Beispielsweise können Sie im Bild unten die Objekte sehen, die dem Code in der addItemClick-Funktion zur Verfügung stehen.

![Ausschnitt des Quell-Ordners des Debugger-Tabs der Entwicklerwerkzeuge des Browsers. Es zeigt die Funktion, die in Zeile 18 aufgerufen wird, im Callstack an und hebt hervor, dass dort ein Breakpoint gesetzt ist, und zeigt den Scope an.](watch_items.png)

### Erfahren Sie mehr

Erfahren Sie mehr über den JavaScript-Debugger in verschiedenen Browsern:

- [Firefox-JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
- [Microsoft Edge-Debugger](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/devtools-guide/debugger)
- [Chrome-Debugger](https://developer.chrome.com/docs/devtools/javascript/)
- [Safari-Debugger](https://developer.apple.com/safari/tools/)

## Die JavaScript-Konsole

Die JavaScript-Konsole ist ein unglaublich nützliches Werkzeug zum Debuggen von JavaScript, das nicht wie erwartet funktioniert. Sie ermöglicht es Ihnen, JavaScript-Zeilen gegen die aktuelle Seite im Browser auszuführen und die aufgetretenen Fehler zu melden, die der Browser beim Ausführen Ihres Codes findet. Um auf die Konsole in einem beliebigen Browser zuzugreifen:

Wenn die Entwicklerwerkzeuge bereits geöffnet sind, klicken Sie oder drücken Sie den Tab Konsole.

Wenn nicht, ermöglicht Ihnen Firefox den direkten Zugriff auf die Konsole mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd> oder über den Menübefehl: Menü ![Firefox-Menü](2014-01-10-13-08-08-f52b8c.png) _➤ Webentwickler ➤ Web-Konsole,_ oder _Werkzeuge ➤_ _Webentwickler ➤ Web-Konsole._ In anderen Browsern öffnen Sie die Entwicklertools und klicken dann den Tab Konsole.

Dies gibt Ihnen ein Fenster, das wie folgt aussieht:

![Der Konsolen-Tab der Entwicklerwerkzeuge des Browsers. Zwei JavaScript-Funktionen wurden in der Konsole ausgeführt. Der Benutzer gab Funktionen ein, und die Konsole zeigte die Rückgabewerte an.](console_only.png)

Um zu sehen, was passiert, versuchen Sie, die folgenden Codeschnipsel nacheinander in die Konsole einzugeben (und drücken Sie dann Enter):

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

Versuchen Sie nun, die folgenden falschen Versionen des Codes einzugeben und sehen Sie, was Sie erhalten.

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

Sie werden anfangen zu sehen, welche Art von Fehlern der Browser zurückgibt. Oft sind diese Fehler ziemlich kryptisch, aber es sollte ziemlich einfach sein, diese Probleme zu verstehen!

### Erfahren Sie mehr

Erfahren Sie mehr über die JavaScript-Konsole in verschiedenen Browsern:

- [Firefox-Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [Chrome-JavaScript-Konsole](https://developer.chrome.com/docs/devtools/console/) (Der Inspektor von Opera funktioniert genauso)
- [Safari-Konsole](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html#//apple_ref/doc/uid/TP40007874-CH6-SW1)

## Siehe auch

- [HTML debuggen](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [CSS debuggen](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS)
