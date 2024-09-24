---
title: Was sind Entwicklungswerkzeuge des Browsers?
slug: Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Jeder moderne Webbrowser enthält eine leistungsstarke Suite von Entwicklungswerkzeugen. Diese Werkzeuge bieten eine Vielzahl von Funktionen, von der Inspektion der aktuell geladenen HTML-, CSS- und JavaScript-Dateien bis hin zur Anzeige, welche Ressourcen die Seite angefordert hat und wie lange das Laden dieser dauerte. Dieser Artikel erklärt, wie Sie die grundlegenden Funktionen der Entwicklertools Ihres Browsers nutzen können.

> [!NOTE]
> Bevor Sie die nachstehenden Beispiele durchgehen, öffnen Sie die [Anfängerseite](https://mdn.github.io/beginner-html-site-scripted/), die wir während der Artikelserie [Einführung in das Web](/de/docs/Learn/Getting_started_with_the_web) erstellt haben. Sie sollten diese Seite geöffnet haben, während Sie die folgenden Schritte ausführen.

## Wie öffnet man die Entwicklertools in Ihrem Browser?

Die Entwicklertools befinden sich in Ihrem Browser in einem Unterfenster, das je nach verwendeter Browserart ungefähr so aussieht:

![Screenshot eines Browsers mit geöffneten Entwicklertools. Die Webseite wird im oberen Teil des Browsers angezeigt, die Entwicklertools belegen den unteren Teil. Es gibt drei geöffnete Panels in den Entwicklertools: HTML mit dem ausgewählten Body-Element, ein CSS-Panel, das Stilblöcke zeigt, die den hervorgehobenen Body ansprechen, sowie ein Panel für berechnete Stile, das alle Autorenstile anzeigt; das Kontrollkästchen für Browser-Stile ist nicht aktiviert.](devtools_63_inspector.png)

Wie rufen Sie sie auf? Es gibt drei Möglichkeiten:

- **_Tastatur:_**

  - **Windows:** _<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>_ oder <kbd>F12</kbd>

  - **macOS:** _<kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>_

- **_Menüleiste:_**

  - **Firefox:** Menü ![Firefox Hamburger-Menüicon mit weiteren Optionen zur Anpassung und Steuerung von Firefox.](2014-01-10-13-08-08-f52b8c.png) _➤ Weitere Werkzeuge ➤ Web-Entwickler Werkzeuge_
  - **Chrome:** _Weitere Werkzeuge ➤ Entwicklertools_
  - **Safari:** _Entwickeln ➤ Web-Inspektor anzeigen._ Falls das Menü _Entwickeln_ nicht sichtbar ist, gehen Sie zu _Safari ➤ Einstellungen ➤ Erweitert_ und aktivieren Sie das Kontrollkästchen _Menü "Entwickeln" in der Menüleiste anzeigen_.
  - **Opera**: _Entwickler ➤ Entwicklertools_

- **_Kontextmenü:_** Drücken und halten/rechts-klicken Sie auf ein Element auf einer Webseite (Ctrl-Klick auf dem Mac), und wählen Sie _Element untersuchen_ aus dem erscheinenden Kontextmenü. (_Ein zusätzlicher Bonus:_ Diese Methode hebt sofort den Code des Elements hervor, das Sie rechts-klicken.)

![Das Firefox-Logo als DOM-Element in einer Beispielwebsite mit einem geöffneten Kontextmenü. Ein Kontextmenü erscheint, wenn ein beliebiges Element auf der Webseite rechts geklickt wird. Das letzte Menüelement ist 'Element untersuchen'.](inspector_context.png)

## Der Inspektor: DOM-Explorer und CSS-Editor

Die Entwicklertools öffnen sich in der Regel standardmäßig mit dem Inspektor, der etwa so aussieht wie der folgende Screenshot. Dieses Werkzeug zeigt, wie das HTML auf Ihrer Seite zur Laufzeit aussieht, sowie welches CSS auf jedes Element der Seite angewendet wird. Es ermöglicht Ihnen auch, das HTML und CSS sofort zu ändern und die Ergebnisse Ihrer Änderungen live im Browser-Viewport zu sehen.

![Eine Testwebseite ist in einem Tab im Browser geöffnet. Das Entwicklertools-Unterfenster ist geöffnet. Die Entwicklertools haben mehrere Tabs. Der Inspektor ist einer dieser Tabs. Der Inspektor-Tab zeigt den HTML-Code der Website an. Ein Image-Tag ist aus dem HTML-Code ausgewählt. Dies führt zur Hervorhebung des Bildes, das dem ausgewählten Tag auf der Website entspricht.](inspector_highlighted.png)

Falls Sie den Inspektor _nicht_ sehen,

- Tippen/klicken Sie auf den Tab _Inspector_.
- In Chrome, Microsoft Edge oder Opera, tippen/klicken Sie auf _Elements_.
- In Safari sind die Steuerungen nicht so klar dargestellt, aber Sie sollten das HTML sehen, wenn Sie nichts anderes zur Anzeige im Fenster ausgewählt haben. Drücken Sie die _Style_-Taste, um das CSS zu sehen.

### Erkundung des DOM-Inspektors

Um zu beginnen, rechts-klicken (Ctrl-Klick) Sie auf ein HTML-Element im DOM-Inspektor und sehen Sie sich das Kontextmenü an. Die verfügbaren Menüoptionen unterscheiden sich je nach Browser, aber die wichtigen sind größtenteils dieselben:

![Das Entwicklertools-Unterfenster des Browsers ist geöffnet. Der Inspektor-Tab ist ausgewählt. Ein Link-Element wird aus dem im Inspektor-Tab verfügbaren HTML-Code rechts geklickt. Ein Kontextmenü erscheint. Die verfügbaren Menüoptionen variieren je nach Browser, aber die wichtigen sind größtenteils dieselben.](dom_inspector.png)

- **Delete Node** (manchmal _Delete Element_). Löscht das aktuelle Element.
- **Edit as HTML** (manchmal _Add attribute_/_Edit text_). Ermöglicht es Ihnen, das HTML zu ändern und die Ergebnisse direkt zu sehen. Sehr nützlich zum Debuggen und Testen.
- **:hover/:active/:focus**. Erzwingt, dass Zustände von Elementen umgeschaltet werden, sodass Sie sehen können, wie deren Styling aussehen würde.
- **Copy/Copy as HTML**. Kopiert das aktuell ausgewählte HTML.
- Einige Browser bieten auch _Copy CSS Path_ und _Copy XPath_ an, um den CSS-Selektor oder den XPath-Ausdruck zu kopieren, der das aktuelle HTML-Element auswählen würde.

Probieren Sie jetzt, einige Ihrer DOM-Elemente zu bearbeiten. Doppelklicken Sie auf ein Element oder rechts-klicken Sie darauf und wählen Sie _Edit as HTML_ aus dem Kontextmenü. Sie können beliebige Änderungen vornehmen, aber Sie können Ihre Änderungen nicht speichern.

### Erkundung des CSS-Editors

Standardmäßig zeigt der CSS-Editor die auf das aktuell ausgewählte Element angewendeten CSS-Regeln an:

![Ausschnitt des CSS-Panels und des Layout-Panels, die neben dem HTML-Editor in den Entwicklertools des Browsers sichtbar sind. Standardmäßig zeigt der CSS-Editor die auf das aktuell ausgewählte Element im HTML-Editor angewendeten CSS-Regeln an. Das Layout-Panel zeigt die Box-Modell-Eigenschaften des ausgewählten Elements.](css_inspector.png)

Diese Funktionen sind besonders praktisch:

- Die auf das aktuelle Element angewendeten Regeln werden in der Reihenfolge von am spezifischsten bis am wenigsten spezifisch angezeigt.
- Klicken Sie auf die Kontrollkästchen neben jeder Deklaration, um zu sehen, was passiert, wenn Sie die Deklaration entfernen.
- Klicken Sie auf den kleinen Pfeil neben jeder Kurzschreibweise, um die Langform-Äquivalente der Eigenschaft anzuzeigen.
- Klicken Sie auf einen Eigenschaftsnamen oder -wert, um ein Textfeld aufzurufen, in dem Sie einen neuen Wert eingeben können, um eine Vorschau einer Stiländerung in Echtzeit anzuzeigen.
- Neben jeder Regel befinden sich der Dateiname und die Zeilennummer, in der die Regel definiert ist. Ein Klick auf diese Regel lässt die Entwicklertools zu der Ansicht springen, in der sie bearbeitet und gespeichert werden kann.
- Sie können auch auf die schließende geschweifte Klammer jeder Regel klicken, um ein Textfeld in einer neuen Zeile aufzurufen, in dem Sie eine völlig neue Deklaration für Ihre Seite schreiben können.

Sie werden eine Reihe von anklickbaren Tabs an der Spitze des CSS-Viewers bemerken:

- _Computed_: Dies zeigt die berechneten Stile für das aktuell ausgewählte Element (die endgültigen, normalisierten Werte, die der Browser anwendet).
- _Layout_: In Firefox umfasst dieser Bereich zwei Abschnitte:

  - _Box Model_: stellt visuell das Box-Modell des aktuellen Elements dar, sodass Sie auf einen Blick sehen können, welches Padding, welchen Rand und welche Umrandung es hat und wie groß sein Inhalt ist.
  - _Grid_: Wenn die von Ihnen inspizierte Seite CSS-Raster verwendet, können Sie in diesem Abschnitt die Rasterdetails anzeigen.

- _Fonts_: In Firefox zeigt der _Fonts_-Tab die auf das aktuelle Element angewendeten Schriftarten.

### Mehr erfahren

Erfahren Sie mehr über den Inspektor in verschiedenen Browsern:

- [Firefox Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [Chrome DOM-Inspektor](https://developer.chrome.com/docs/devtools/dom/) (Opera's Inspektor funktioniert ebenso)
- [Safari DOM-Inspektor und Stil-Explorer](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/ResourcesandtheDOM/ResourcesandtheDOM.html#//apple_ref/doc/uid/TP40007874-CH3-SW1)

## Der JavaScript-Debugger

Der JavaScript-Debugger ermöglicht es Ihnen, den Wert von Variablen zu überwachen und Haltepunkte zu setzen, also Stellen in Ihrem Code, an denen Sie die Ausführung pausieren möchten, um die Probleme zu identifizieren, die verhindern, dass Ihr Code ordnungsgemäß ausgeführt wird.

![Eine Testwebsite, die lokal auf Port 8080 betrieben wird. Das Entwicklertools-Unterfenster ist geöffnet. Der JavaScript-Debugger-Tab ist ausgewählt. Dieser ermöglicht es Ihnen, den Wert von Variablen zu überwachen und Haltepunkte zu setzen. Eine Datei mit dem Namen 'example.js' ist aus dem Quelltabs-Pane ausgewählt. Ein Haltepunkt ist in Zeile 18 der Datei gesetzt.](firefox_debugger.png)

Um zum Debugger zu gelangen:

**Firefox**: Wählen Sie ![Firefox-Menüicon mit weiteren Optionen zur Anpassung und Steuerung von Firefox.](2014-01-10-13-08-08-f52b8c.png) ➤ _Web-Entwickler_ ➤ _Debugger_ oder drücken Sie <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>, um den JavaScript-Debugger zu öffnen. Wenn die Werkzeuge bereits angezeigt werden, klicken Sie auf den **Debugger**-Tab.

**Chrome**: Öffnen Sie die Entwicklertools und wählen Sie dann den **Sources**-Tab. (Opera funktioniert ebenso.)

**Safari**: Öffnen Sie die Entwicklertools und wählen Sie dann den Debugger-Tab.

### Erkundung des Debuggers

Es gibt drei Bereiche im JavaScript-Debugger auf Firefox.

#### Dateiliste

Der erste Bereich auf der linken Seite enthält die Liste der mit der zu debuggenden Seite verknüpften Dateien. Wählen Sie die Datei, mit der Sie arbeiten möchten, aus dieser Liste aus. Klicken Sie auf eine Datei, um sie auszuwählen und ihren Inhalt im mittleren Bereich des Debuggers anzuzeigen.

![Ausschnitt des Quellen-Panels des Debugger-Tabs in den Entwicklertools des Browsers. Die Dateien, die zur aktuellen Seite gehören, die Sie debuggen, sind unter dem Ordner sichtbar, dessen Name dem URL der Seite entspricht, die im aktuellen Browserfenster geöffnet ist.](file_list.png)

#### Quellcode

Setzen Sie Haltepunkte, an denen Sie die Ausführung pausieren möchten. Im folgenden Bild zeigt die Hervorhebung auf Nummer 18, dass die Zeile einen gesetzten Haltepunkt aufweist.

![Ausschnitt des Entwicklertools-Debugger-Panels mit dem hervorgehobenen Haltepunkt in Zeile 18.](source_code.png)

#### Überwachungsanweisungen und Haltepunkte

Der rechte Bereich zeigt eine Liste der von Ihnen hinzugefügten Überwachungsanweisungen und der von Ihnen gesetzten Haltepunkte an.

Im Bild zeigt der erste Abschnitt, **Watch expressions**, dass die Variable listItems hinzugefügt wurde. Sie können die Liste erweitern, um die Werte im Array anzuzeigen.

Der nächste Abschnitt, **Breakpoints**, listet die auf der Seite gesetzten Haltepunkte auf. In example.js wurde ein Haltepunkt auf der Anweisung `listItems.push(inputNewItem.value);` gesetzt.

Die letzten beiden Abschnitte erscheinen nur, wenn der Code ausgeführt wird.

Der **Call stack**-Abschnitt zeigt Ihnen, welcher Code ausgeführt wurde, um zur aktuellen Zeile zu gelangen. Sie können sehen, dass sich der Code in der Funktion befindet, die einen Mausklick verarbeitet, und dass der Code derzeit auf dem Haltepunkt pausiert ist.

Der letzte Abschnitt, **Scopes**, zeigt, welche Werte von verschiedenen Punkten in Ihrem Code aus sichtbar sind. Zum Beispiel sehen Sie im Bild unten die Objekte, die für den Code in der addItemClick-Funktion verfügbar sind.

![Ausschnitt des Quellen-Panels des Debugger-Tabs der Entwicklertools des Browsers. Im Call-Stack wird die in Zeile 18 aufgerufene Funktion angezeigt und hervorgehoben, dass an dieser Stelle ein Haltepunkt gesetzt ist und den Geltungsbereich zeigt.](watch_items.png)

### Mehr erfahren

Erfahren Sie mehr über den JavaScript-Debugger in verschiedenen Browsern:

- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html))
- [Microsoft Edge Debugger](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/devtools-guide/debugger)
- [Chrome-Debugger](https://developer.chrome.com/docs/devtools/javascript/)
- [Safari-Debugger](https://developer.apple.com/safari/tools/)

## Die JavaScript-Konsole

Die JavaScript-Konsole ist ein unglaublich nützliches Werkzeug zum Debuggen von JavaScript, das nicht wie erwartet funktioniert. Sie ermöglicht es Ihnen, JavaScript-Codezeilen auf der momentan im Browser geladenen Seite auszuführen und meldet die bei der Ausführung aufgetretenen Fehler. Um auf die Konsole in einem beliebigen Browser zuzugreifen:

Wenn die Entwicklertools bereits geöffnet sind, klicken oder drücken Sie die Registerkarte Konsole.

Wenn nicht, erlaubt Firefox Ihnen, die Konsole direkt mit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd> oder über den Menüpunkt zu öffnen: Menü ![Firefox Menü](2014-01-10-13-08-08-f52b8c.png) _➤ Web-Entwickler ➤ Web-Konsole,_ oder _Tools ➤_ _Web-Entwickler ➤ Web-Konsole._ In anderen Browsern öffnen Sie die Entwicklertools und klicken dann auf die Konsole-Registerkarte.

Dies wird Ihnen ein Fenster wie das folgende geben:

![Der Tab Konsole der Entwicklertools des Browsers. Zwei JavaScript-Funktionen wurden in der Konsole ausgeführt. Der Benutzer hat Funktionen eingegeben und die Konsole hat die Rückgabewerte angezeigt.](console_only.png)

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

Versuchen Sie nun, die folgenden falschen Versionen des Codes einzugeben und zu sehen, was Sie erhalten.

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

Sie werden anfangen zu sehen, welche Art von Fehlern der Browser zurückgibt. Oft sind diese Fehler ziemlich kryptisch, aber es sollte ziemlich einfach sein, diese Probleme herauszufinden!

### Mehr erfahren

Erfahren Sie mehr über die JavaScript-Konsole in verschiedenen Browsern:

- [Firefox Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [Chrome JavaScript-Konsole](https://developer.chrome.com/docs/devtools/console/) (der Inspektor von Opera funktioniert genauso)
- [Safari-Konsole](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html#//apple_ref/doc/uid/TP40007874-CH6-SW1)

## Siehe auch

- [HTML-Debugging](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [CSS-Debugging](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS)
