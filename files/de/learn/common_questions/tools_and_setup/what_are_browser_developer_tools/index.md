---
title: Was sind Browser-Entwicklerwerkzeuge?
slug: Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Jeder moderne Webbrowser enthält eine leistungsstarke Suite von Entwicklerwerkzeugen. Diese Werkzeuge bieten eine Reihe von Funktionen, vom Inspizieren der aktuell geladenen HTML-, CSS- und JavaScript-Inhalte bis hin zur Anzeige, welche Ressourcen die Seite angefordert hat und wie lange das Laden gedauert hat. Dieser Artikel erklärt, wie Sie die grundlegenden Funktionen der Entwicklerwerkzeuge Ihres Browsers verwenden können.

> [!NOTE]
> Bevor Sie die folgenden Beispiele durchgehen, öffnen Sie die [Anfängerseite](https://mdn.github.io/beginner-html-site-scripted/), die wir während der Artikelserie [Erste Schritte im Web](/de/docs/Learn/Getting_started_with_the_web) erstellt haben. Sie sollten diese geöffnet haben, während Sie die Schritte unten befolgen.

## Anleitung: Öffnen der Entwicklerwerkzeuge in Ihrem Browser

Die Entwicklerwerkzeuge befinden sich in Ihrem Browser in einem Unterfenster, das je nach verwendetem Browser ungefähr so aussieht:

![Screenshot eines Browsers mit geöffneten Entwicklerwerkzeugen. Die Webseite wird im oberen Teil des Browsers angezeigt, die Entwicklerwerkzeuge nehmen die untere Hälfte ein. Es sind drei Panels in den Entwicklerwerkzeugen geöffnet: HTML mit ausgewähltem body-Element, ein CSS-Panel, das Stilblöcke zeigt, die auf das hervorgehobene body-Element abzielen, und ein Panel mit berechneten Stilen, das alle Autorenstile zeigt; das Kontrollkästchen für Browser-Stile ist nicht aktiviert.](devtools_63_inspector.png)

Wie ruft man sie auf? Drei Wege:

- **_Tastatur:_**

  - **Windows:** _<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>_ oder <kbd>F12</kbd>

  - **macOS:** _<kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>_

- **_Menüleiste:_**

  - **Firefox:** Menü ![Firefox Hamburger-Menü-Symbol, das mehr Optionen zur Anpassung und Kontrolle von Firefox bietet.](2014-01-10-13-08-08-f52b8c.png) _➤ Mehr Werkzeuge ➤ Web-Entwicklerwerkzeuge_
  - **Chrome:** _Weitere Werkzeuge ➤ Entwicklerwerkzeuge_
  - **Safari:** _Entwickeln ➤ Web-Inspektor anzeigen_. Wenn das Menü _Entwickeln_ nicht sichtbar ist, gehen Sie zu _Safari ➤ Einstellungen ➤ Erweitert_ und aktivieren Sie das Kontrollkästchen _Entwickeln-Menü in Menüleiste anzeigen_.
  - **Opera**: _Entwickler ➤ Entwicklerwerkzeuge_

- **_Kontextmenü:_** Drücken und halten/rechtsklicken Sie auf einen Gegenstand auf einer Webseite (Ctrl-Klick auf dem Mac) und wählen Sie _Element untersuchen_ aus dem erscheinenden Kontextmenü. (_Ein zusätzlicher Bonus:_ Diese Methode hebt direkt den Code des Elements hervor, auf das Sie rechtsgeklickt haben.)

![Das Firefox-Logo als DOM-Element auf einer Beispiel-Website mit einem angezeigten Kontextmenü. Ein Kontextmenü erscheint, wenn auf ein beliebiges Element der Webseite rechtsgeklickt wird. Der letzte Menüpunkt ist 'Element untersuchen'.](inspector_context.png)

## Der Inspektor: DOM-Explorer und CSS-Editor

Die Entwicklerwerkzeuge öffnen sich standardmäßig in der Regel auf den Inspektor, der etwa wie der folgende Screenshot aussieht. Dieses Werkzeug zeigt, wie das HTML Ihrer Seite zur Laufzeit aussieht und welche CSS-Stile auf jedes Element der Seite angewendet werden. Es erlaubt auch, HTML und CSS sofort zu ändern und die Ergebnisse der Änderungen direkt im Browser-Ansichtsfenster zu sehen.

![Eine Testwebsite ist in einem Tab im Browser geöffnet. Das Unterfenster der Browser-Entwicklerwerkzeuge ist offen. Die Entwicklerwerkzeuge haben mehrere Tabs. Der Inspektor ist einer dieser Tabs. Der Inspektor-Tab zeigt den HTML-Code der Website an. Ein Bild-Tag ist aus dem HTML-Code ausgewählt. Dies führt zur Hervorhebung des Bildes, das dem ausgewählten Tag in der Website entspricht.](inspector_highlighted.png)

Falls Sie den Inspektor _nicht_ sehen,

- Tippen/Klicken Sie auf den _Inspektor_-Tab.
- In Chrome, Microsoft Edge oder Opera tippen/klicken Sie auf _Elemente_.
- In Safari sind die Bedienelemente nicht so klar dargestellt, aber Sie sollten das HTML sehen, wenn Sie nichts anderes für das Fenster ausgewählt haben. Drücken Sie den _Stil_-Button, um das CSS zu sehen.

### Erforschen des DOM-Inspektors

Um zu beginnen, rechtsklicken (Ctrl-Klick) Sie auf ein HTML-Element im DOM-Inspektor und sehen Sie sich das Kontextmenü an. Die verfügbaren Menüoptionen variieren zwischen den Browsern, aber die wichtigen sind meistens gleich:

![Das Unterfenster der Entwicklerwerkzeuge des Browsers ist offen. Der Inspektor-Tab ist ausgewählt. Ein Link-Element wird aus dem im Inspektor-Tab verfügbaren HTML-Code rechtsgeklickt. Ein Kontextmenü erscheint. Die verfügbaren Menüoptionen variieren zwischen den Browsern, aber die wichtigen sind meistens gleich.](dom_inspector.png)

- **Node löschen** (manchmal _Element löschen_). Löscht das aktuelle Element.
- **Als HTML bearbeiten** (manchmal _Attribut hinzufügen_/_Text bearbeiten_). Ermöglicht es Ihnen, das HTML zu ändern und die Ergebnisse sofort zu sehen. Sehr nützlich zum Debuggen und Testen.
- **:hover/:active/:focus**. Erzwingt das Umschalten von Elementzuständen, so dass Sie sehen können, wie ihre Stile aussehen würden.
- **Kopieren/Als HTML kopieren**. Kopiert das aktuell ausgewählte HTML.
- Einige Browser haben auch _CSS-Pfad kopieren_ und _XPath kopieren_ verfügbar, damit Sie den CSS-Selektor oder XPath-Ausdruck kopieren können, der das aktuelle HTML-Element auswählen würde.

Versuchen Sie, einige Ihrer DOM-Elemente jetzt zu bearbeiten. Doppelklicken Sie auf ein Element oder rechtsklicken Sie darauf und wählen Sie _Als HTML bearbeiten_ aus dem Kontextmenü. Sie können beliebige Änderungen vornehmen, aber Sie können Ihre Änderungen nicht speichern.

### Erforschen des CSS-Editors

Standardmäßig zeigt der CSS-Editor die auf das aktuell ausgewählte Element angewendeten CSS-Regeln an:

![Ausschnitt des CSS-Panels und des Layout-Panels, die neben dem HTML-Editor in den Entwicklerwerkzeugen des Browsers zu sehen sind. Standardmäßig zeigt der CSS-Editor die auf das aktuell ausgewählte Element im HTML-Editor angewendeten CSS-Regeln an. Das Layout-Panel zeigt die Eigenschaften des Box-Modells des ausgewählten Elements.](css_inspector.png)

Diese Funktionen sind besonders hilfreich:

- Die auf das aktuelle Element angewendeten Regeln werden in der Reihenfolge von der spezifischsten zur am wenigsten spezifischen angezeigt.
- Klicken Sie auf die Kontrollkästchen neben jeder Deklaration, um zu sehen, was passieren würde, wenn Sie die Deklaration entfernen.
- Klicken Sie auf den kleinen Pfeil neben jeder Kurzform-Eigenschaft, um die Langform-Äquivalente der Eigenschaft anzuzeigen.
- Klicken Sie auf einen Eigenschaftsnamen oder -wert, um ein Textfeld aufzurufen, in das Sie einen neuen Wert eingeben können, um eine Live-Vorschau einer Stiländerung zu erhalten.
- Neben jeder Regel befindet sich der Dateiname und die Zeilennummer, in der die Regel definiert ist. Das Klicken auf diese Regel führt dazu, dass die Entwicklerwerkzeuge in ihrer eigenen Ansicht dorthin springen, wo sie im Allgemeinen bearbeitet und gespeichert werden kann.
- Sie können auch auf die abschließende geschweifte Klammer einer Regel klicken, um ein Textfeld in einer neuen Zeile zu öffnen, in dem Sie eine völlig neue Deklaration für Ihre Seite schreiben können.

Am oberen Rand des CSS-Viewers sehen Sie eine Reihe von anklickbaren Tabs:

- _Computed_: Zeigt die berechneten Stile für das aktuell ausgewählte Element (die endgültigen, normalisierten Werte, die der Browser anwendet).
- _Layout_: In Firefox enthält dieser Bereich zwei Abschnitte:

  - _Box Model_: Stellt visuell das Box-Modell des aktuellen Elements dar, sodass Sie auf einen Blick sehen können, welche Polsterung, Rahmen und Ränder darauf angewendet werden und wie groß sein Inhalt ist.
  - _Grid_: Wenn die Seite, die Sie untersuchen, ein CSS-Grid verwendet, können Sie in diesem Abschnitt die Grid-Details sehen.

- _Fonts_: In Firefox zeigt der _Fonts_-Tab die auf das aktuelle Element angewendeten Schriftarten an.

### Mehr erfahren

Erfahren Sie mehr über den Inspektor in verschiedenen Browsern:

- [Firefox-Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [Chrome-DOM-Inspektor](https://developer.chrome.com/docs/devtools/dom/) (Operas Inspektor funktioniert genauso)
- [Safari-DOM-Inspektor und Stil-Explorer](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/ResourcesandtheDOM/ResourcesandtheDOM.html#//apple_ref/doc/uid/TP40007874-CH3-SW1)

## Der JavaScript-Debugger

Der JavaScript-Debugger ermöglicht es Ihnen, den Wert von Variablen zu überwachen und Haltepunkte festzulegen, an denen Sie die Ausführung anhalten und die Probleme identifizieren, die verhindern, dass Ihr Code korrekt ausgeführt wird.

![Eine Testwebsite, die lokal auf Port 8080 bereitgestellt wird. Das Unterfenster der Entwicklerwerkzeuge ist geöffnet. Der Tab des JavaScript-Debuggers ist ausgewählt. Damit können Sie den Wert von Variablen überwachen und Haltepunkte festlegen. Eine Datei mit dem Namen 'example.js' ist aus dem Quellenbereich ausgewählt. Ein Haltepunkt ist bei Zeile 18 der Datei gesetzt.](firefox_debugger.png)

Um zum Debugger zu gelangen:

**Firefox**: Wählen Sie ![Firefox-Menüsymbol, das mehr Optionen zur Anpassung und Kontrolle von Firefox bietet.](2014-01-10-13-08-08-f52b8c.png) ➤ _Web-Entwickler_ ➤ _Debugger_ oder drücken Sie <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>, um den JavaScript-Debugger zu öffnen. Wenn die Werkzeuge bereits angezeigt werden, klicken Sie auf den **Debugger**-Tab.

**Chrome**: Öffnen Sie die Entwicklerwerkzeuge und wählen Sie dann den **Quellen**-Tab aus. (Opera funktioniert genauso.)

**Safari**: Öffnen Sie die Entwicklerwerkzeuge und wählen Sie dann den Debugger-Tab aus.

### Erforschen des Debuggers

Im JavaScript-Debugger in Firefox gibt es drei Fensterbereiche.

#### Dateiliste

Der erste Bereich links enthält die Liste der mit der von Ihnen debuggten Seite verbundenen Dateien. Wählen Sie die Datei aus, mit der Sie arbeiten möchten, aus dieser Liste. Klicken Sie auf eine Datei, um sie auszuwählen und ihren Inhalt im mittleren Bereich des Debuggers anzuzeigen.

![Ausschnitt aus dem Quellenbereich des Debugger-Tabs in den Entwicklerwerkzeugen des Browsers. Die Dateien, die zur aktuellen Seite gehören, die Sie debuggen, sind unter dem Ordner sichtbar, dessen Name mit der URL der Seite identisch ist, die im aktuellen Browser-Tab geöffnet ist.](file_list.png)

#### Quellcode

Setzen Sie Haltepunkte, an denen Sie die Ausführung anhalten möchten. Im folgenden Bild zeigt das Highlight auf die Nummer 18, dass dort ein Haltepunkt gesetzt ist.

![Ausschnitt des Entwicklerwerkzeuge-Debugger-Panels mit hervorgehobenem Haltepunkt bei Zeile 18.](source_code.png)

#### Überwachungs-Ausdrücke und Haltepunkte

Der rechte Bereich zeigt eine Liste der Überwachungs-Ausdrücke, die Sie hinzugefügt haben, und der Haltepunkte, die Sie gesetzt haben.

Im Bild zeigt der erste Abschnitt, **Überwachungs-Ausdrücke**, dass die Variable listItems hinzugefügt wurde. Sie können die Liste erweitern, um die Werte im Array anzuzeigen.

Der nächste Abschnitt, **Haltepunkte**, listet die Haltepunkte auf, die auf der Seite gesetzt wurden. In example.js wurde ein Haltepunkt bei der Anweisung `listItems.push(inputNewItem.value);` gesetzt.

Die letzten beiden Abschnitte erscheinen nur, wenn der Code gerade ausgeführt wird.

Der Abschnitt **Anruf-Stack** zeigt Ihnen, welcher Code ausgeführt wurde, um zur aktuellen Zeile zu gelangen. Sie können sehen, dass sich der Code in der Funktion befindet, die einen Mausklick behandelt und dass der Code derzeit am Haltepunkt angehalten ist.

Der letzte Abschnitt, **Bereiche**, zeigt, welche Werte von verschiedenen Punkten innerhalb Ihres Codes sichtbar sind. Im folgenden Bild können Sie beispielsweise die Objekte sehen, die dem Code in der addItemClick-Funktion zur Verfügung stehen.

![Ausschnitt aus dem Quellenbereich des Debugger-Tabs der Entwicklerwerkzeuge des Browsers. Im Anruf-Stack wird die Funktion angezeigt, die in Zeile 18 aufgerufen wird, wobei hervorgehoben wird, dass dort ein Haltepunkt gesetzt ist und der Bereich angezeigt wird.](watch_items.png)

### Mehr erfahren

Erfahren Sie mehr über den JavaScript-Debugger in verschiedenen Browsern:

- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html))
- [Microsoft Edge-Debugger](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/devtools-guide/debugger)
- [Chrome-Debugger](https://developer.chrome.com/docs/devtools/javascript/)
- [Safari-Debugger](https://developer.apple.com/safari/tools/)

## Die JavaScript-Konsole

Die JavaScript-Konsole ist ein unglaublich nützliches Werkzeug zum Debuggen von JavaScript, das nicht wie erwartet funktioniert. Sie ermöglicht es Ihnen, JavaScript-Zeilen gegen die aktuell im Browser geladene Seite auszuführen und meldet die Fehler, die aufgetreten sind, als der Browser versucht hat, Ihren Code auszuführen. Um die Konsole in einem beliebigen Browser zu erreichen:

Wenn die Entwicklerwerkzeuge bereits offen sind, klicken oder drücken Sie den Konsole-Tab.

Falls nicht, können Sie in Firefox die Konsole direkt mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd> öffnen oder mit dem Menübefehl: Menü ![Firefox-Menü](2014-01-10-13-08-08-f52b8c.png) _➤ Web-Entwickler ➤ Web-Konsole,_ oder _Werkzeuge ➤_ _Web-Entwickler ➤ Web-Konsole._ In anderen Browsern öffnen Sie die Entwicklerwerkzeuge und klicken dann auf den Konsole-Tab.

Sie erhalten ein Fenster wie das folgende:

![Der Konsole-Tab der Entwicklerwerkzeuge des Browsers. Zwei JavaScript-Funktionen wurden in der Konsole ausgeführt. Die vom Benutzer eingegebenen Funktionen und die Konsole haben die Rückgabewerte angezeigt.](console_only.png)

Um zu sehen, was passiert, versuchen Sie, die folgenden Code-Schnipsel einzeln in die Konsole einzugeben (und drücken Sie dann Enter):

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

Sie werden anfangen, die Art von Fehlern zu sehen, die der Browser zurückgibt. Oft sind diese Fehler ziemlich kryptisch, aber es sollte ziemlich einfach sein, diese Probleme herauszufinden!

### Mehr erfahren

Erfahren Sie mehr über die JavaScript-Konsole in verschiedenen Browsern:

- [Firefox Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [Chrome JavaScript-Konsole](https://developer.chrome.com/docs/devtools/console/) (Operas Inspektor funktioniert genauso)
- [Safari-Konsole](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html#//apple_ref/doc/uid/TP40007874-CH6-SW1)

## Siehe auch

- [HTML-Debugging](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [CSS-Debugging](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS)
