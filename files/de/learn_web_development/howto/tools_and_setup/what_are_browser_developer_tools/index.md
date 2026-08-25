---
title: Was sind Entwicklerwerkzeuge für Browser?
slug: Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

Jeder moderne Webbrowser enthält eine leistungsstarke Suite von Entwicklerwerkzeugen. Diese Werkzeuge erledigen eine Reihe von Aufgaben, vom Inspizieren der aktuell geladenen HTML-, CSS- und JavaScript-Inhalte bis hin zum Anzeigen, welche Assets die Seite angefordert hat und wie lange deren Ladezeit war. Dieser Artikel erklärt, wie Sie die grundlegenden Funktionen der Entwickler-Tools Ihres Browsers verwenden.

> [!NOTE]
> Bevor Sie die untenstehenden Beispiele durchgehen, öffnen Sie die [Anfängerseite](https://mdn.github.io/beginner-html-site-scripted/), die wir während der Artikelreihe [Erster Schritt im Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) erstellt haben. Sie sollten diese geöffnet haben, während Sie die untenstehenden Schritte befolgen.

## So öffnen Sie die Entwicklerwerkzeuge in Ihrem Browser

Die Entwicklerwerkzeuge befinden sich in einem Unterfenster Ihres Browsers, das je nach verwendetem Browser in etwa so aussieht:

![Screenshot eines Browsers mit geöffneten Entwicklerwerkzeugen. Die Webseite wird im oberen Teil des Browsers angezeigt, die Entwicklerwerkzeuge belegen den unteren Teil. In den Entwicklerwerkzeugen sind drei Panels geöffnet: HTML, mit ausgewähltem Body-Element, ein CSS-Panel, das Stilblöcke anzeigt, die das hervorgehobene Body-Element ansprechen, und ein berechnetes Stilelement, das alle Autorenstile anzeigt; das Kontrollkästchen "Browserstile" ist nicht ausgewählt.](devtools_63_inspector.png)

Wie rufen Sie es auf? Drei Wege:

- **_Tastatur:_**
  - **Windows:** <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> oder <kbd>F12</kbd>
  - **macOS:** <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>

- **_Menüleiste:_**
  - **Firefox:** _Menü (☰) ➤ Weitere Werkzeuge ➤ Web-Entwickler-Werkzeuge_
  - **Chrome:** _Weitere Werkzeuge ➤ Entwicklerwerkzeuge_
  - **Opera**: _Entwickler ➤ Entwicklerwerkzeuge_
  - **Safari:** _Entwickeln ➤ Web-Inspektor anzeigen._

    > [!NOTE]
    > Die Entwicklerwerkzeuge in Safari sind standardmäßig nicht aktiviert.
    > Um sie zu aktivieren, gehen Sie zu _Safari ➤ Einstellungen ➤ Erweitert_ und aktivieren Sie das Kontrollkästchen _Menü "Entwickeln" in der Menüleiste anzeigen_ oder _Funktionen für Webentwickler aktivieren_.

- **_Kontextmenü:_** Halten Sie gedrückt oder klicken Sie mit der rechten Maustaste auf ein Element auf einer Webseite (Ctrl-Klick auf dem Mac) und wählen Sie _Element untersuchen_ aus dem angezeigten Kontextmenü. (_Ein zusätzlicher Bonus:_ Diese Methode hebt sofort den Code des Elements hervor, auf das Sie geklickt haben.)

![Das Firefox-Logo als DOM-Element auf einer Beispielwebsite mit einem Kontextmenü. Ein Kontextmenü erscheint, wenn auf ein beliebiges Element auf der Webseite mit der rechten Maustaste geklickt wird. Der letzte Menüeintrag ist "Element untersuchen".](inspector_context.png)

## Der Inspektor: DOM-Explorer und CSS-Editor

Die Entwicklerwerkzeuge öffnen sich normalerweise standardmäßig im Inspektor, der etwa so aussieht wie der folgende Screenshot. Dieses Werkzeug zeigt, wie das HTML Ihrer Seite zur Laufzeit aussieht und welche CSS-Stile auf jedes Element der Seite angewendet werden. Es ermöglicht Ihnen auch, das HTML und CSS sofort zu ändern und die Ergebnisse Ihrer Änderungen live im Browser-Ansichtsfenster zu sehen.

![Eine Testwebsite ist in einem Tab im Browser geöffnet. Das Unterfenster der Entwicklerwerkzeuge ist geöffnet. Die Entwicklerwerkzeuge haben mehrere Registerkarten. Der Inspektor ist eine dieser Registerkarten. Die Registerkarte Inspektor zeigt den HTML-Code der Website an. Ein Bild-Tag ist im HTML-Code ausgewählt, was dazu führt, dass das Bild, das dem ausgewählten Tag auf der Website entspricht, hervorgehoben wird.](inspector_highlighted.png)

Wenn Sie den Inspektor _nicht_ sehen:

- **Firefox:** Wählen Sie die Registerkarte **Inspektor**.
- **Andere Browser:** Wählen Sie die Registerkarte **Elemente**.

### Erforschen des DOM-Inspektors

Zu Beginn klicken Sie mit der rechten Maustaste (Ctrl-Klick) auf ein HTML-Element im DOM-Inspektor und schauen sich das Kontextmenü an. Die verfügbaren Menüoptionen variieren je nach Browser, aber die wichtigsten sind größtenteils gleich:

![Das Unterfenster der Entwicklerwerkzeuge des Browsers ist geöffnet. Die Registerkarte Inspektor ist ausgewählt. Ein Link-Element wird mit der rechten Maustaste aus dem im Inspektor verfügbaren HTML-Code ausgewählt. Ein Kontextmenü erscheint. Die verfügbaren Menüoptionen variieren je nach Browser, aber die wichtigsten sind größtenteils gleich.](dom_inspector.png)

- **Knoten löschen** (manchmal _Element löschen_). Löscht das aktuelle Element.
- **Als HTML bearbeiten** (manchmal _Attribut hinzufügen_/_Text bearbeiten_). Ermöglicht es Ihnen, das HTML zu ändern und die Ergebnisse sofort zu sehen. Sehr nützlich zum Debuggen und Testen.
- **:hover/:active/:focus**. Erzwingt, dass Elementzustände umgeschaltet werden, sodass Sie sehen können, wie deren Stil aussehen würde.
- **Kopieren/Kopieren als HTML**. Kopiert das aktuell ausgewählte HTML.
- Einige Browser bieten auch _CSS-Pfad kopieren_ und _XPath kopieren_ an, um den CSS-Selektor oder den XPath-Ausdruck zu kopieren, der das aktuelle HTML-Element auswählen würde.

Versuchen Sie nun, einige Ihrer DOM-Elemente zu bearbeiten. Doppelklicken Sie auf ein Element oder klicken Sie mit der rechten Maustaste darauf und wählen Sie _Als HTML bearbeiten_ im Kontextmenü. Sie können beliebige Änderungen vornehmen, aber Sie können Ihre Änderungen nicht speichern.

### Erforschen des CSS-Editors

Standardmäßig zeigt der CSS-Editor die auf das aktuell ausgewählte Element angewendeten CSS-Regeln an:

![Ausschnitt des CSS-Panels und des Layout-Panels, die neben dem HTML-Editor in den Entwicklerwerkzeugen des Browsers sichtbar sind. Standardmäßig zeigt der CSS-Editor die auf das aktuell ausgewählte Element im HTML-Editor angewendeten CSS-Regeln an. Das Layout-Panel zeigt die Box-Modell-Eigenschaften des ausgewählten Elements.](css_inspector.png)

Diese Funktionen sind besonders nützlich:

- Die auf das aktuelle Element angewendeten Regeln werden in der Reihenfolge von der spezifischsten zur unspezifischsten angezeigt.
- Klicken Sie auf die Kontrollkästchen neben jeder Deklaration, um zu sehen, was passieren würde, wenn Sie die Deklaration entfernen.
- Klicken Sie auf den kleinen Pfeil neben jeder Kurzform-Eigenschaft, um die Langform-Äquivalente der Eigenschaft anzuzeigen.
- Klicken Sie auf einen Eigenschaftsnamen oder -wert, um ein Textfeld zu öffnen, in das Sie einen neuen Wert eingeben können, um eine Live-Vorschau einer Stiländerung zu erhalten.
- Neben jeder Regel stehen der Dateiname und die Zeilennummer, in der die Regel definiert ist. Wenn Sie auf diese Regel klicken, zeigen die Entwicklerwerkzeuge sie in einer eigenen Ansicht an, in der sie in der Regel bearbeitet und gespeichert werden kann.
- Sie können auch die schließende geschweifte Klammer einer Regel anklicken, um in einem neuen Zeilen-Textfeld eine völlig neue Deklaration für Ihre Seite zu schreiben.

Sie werden mehrere klickbare Registerkarten oben im CSS-Viewer bemerken:

- _Berechnet_: Zeigt die berechneten Stile für das derzeit ausgewählte Element (die endgültigen, normalisierten Werte, die der Browser anwendet).
- _Layout_: Zeigt die Details für die CSS-Layoutmodi [Grid](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), wenn das untersuchte Element diese verwendet.
- _Schriften_: In Firefox und Safari zeigt die Registerkarte _Schriften_ die auf das aktuelle Element angewendeten Schriften.

Die _Box-Modell_-Ansicht stellt das aktuelle Box-Modell des Elements visuell dar, sodass Sie auf einen Blick sehen können, welche Abstände, Rahmen und Ränder darauf angewendet werden und wie groß der Inhalt ist. In Firefox befindet sich das im Tab _Layout_, in anderen Browsern im Tab _Berechnet_.

In einigen Browsern können auch die JavaScript-Details des ausgewählten Elements in diesem Panel angezeigt werden. In Safari sind diese unter dem Tab _Node_ zusammengefasst, in Chrome, Opera und Edge befinden sie sich in separaten Tabs.

- _Eigenschaften_: Die {{Glossary("Property/JavaScript", "Eigenschaften")}} des Elementobjekts.
- _Ereignis-Listener_: Die [Ereignisse](/de/docs/Web/API/Event), die mit dem Element verbunden sind.

### Mehr erfahren

Erfahren Sie mehr über den Inspektor in verschiedenen Browsern:

- [Firefox Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [Chrome DOM-Inspektor](https://developer.chrome.com/docs/devtools/dom/) (Der Inspektor von Opera und Edge ist derselbe)
- [Safari-Elemente-Tab](https://webkit.org/web-inspector/elements-tab/)

## Der JavaScript-Debugger

Der JavaScript-Debugger ermöglicht es Ihnen, den Wert von Variablen zu überwachen und Breakpoints festzulegen, um die Ausführung an bestimmten Stellen im Code anzuhalten und die Probleme zu identifizieren, die verhindern, dass Ihr Code ordnungsgemäß ausgeführt wird.

![Eine Testwebsite, die lokal auf Port 8080 bereitgestellt wird. Das Unterfenster der Entwicklerwerkzeuge ist geöffnet. Der JavaScript-Debugger-Tab ist ausgewählt. Er ermöglicht es Ihnen, den Wert von Variablen zu überwachen und Breakpoints festzulegen. Eine Datei mit dem Namen 'example.js' ist im Quellenbereich ausgewählt. Ein Breakpoint ist bei Zeile 18 der Datei gesetzt.](firefox_debugger.png)

So gelangen Sie zum Debugger:

- **Firefox**: Öffnen Sie die Entwicklerwerkzeuge und wählen Sie die Registerkarte **Debugger**.
- **Andere Browser**: Öffnen Sie die Entwicklerwerkzeuge und wählen Sie die Registerkarte **Quellen**.

### Erforschen des Debuggers

Jeder Browser-Debugger für JavaScript ist in drei Bereiche unterteilt. Die Anordnung dieser Bereiche variiert je nach Browser; dieser Leitfaden verwendet Firefox als Referenz.

#### Dateiliste

Der erste Bereich auf der linken Seite enthält die Liste der mit der zu debuggenden Seite verbundenen Dateien. Wählen Sie die Datei, mit der Sie arbeiten möchten, aus dieser Liste aus. Klicken Sie auf eine Datei, um sie auszuwählen und ihren Inhalt im mittleren Bereich des Debuggers anzuzeigen.

![Ausschnitt des Quellenbereichs des Debugger-Tabs in den Entwicklerwerkzeugen des Browsers. Die Dateien, die mit der aktuellen Seite verbunden sind, die Sie gerade debuggen, sind unter dem Ordner sichtbar, dessen Name dem URL der geöffneten Seite im aktuellen Browser-Tab entspricht.](file_list.png)

#### Quellcode

Setzen Sie Breakpoints, wo Sie die Ausführung pausieren möchten. Im folgenden Bild zeigt die Hervorhebung auf der Nummer 18 an, dass für die Zeile ein Breakpoint gesetzt ist.

![Ausschnitt des Debugger-Panels der Entwicklerwerkzeuge mit hervorgehobenem Breakpoint in Zeile 18.](source_code.png)

#### Beobachtungsausdrücke und Breakpoints

Der rechte Bereich zeigt eine Liste der hinzugefügten Beobachtungsausdrücke und der gesetzten Breakpoints.

Im Bild zeigt der erste Abschnitt, **Beobachtungsausdrücke**, dass die Variable `listItems` hinzugefügt wurde. Sie können die Liste erweitern, um die Werte im Array anzuzeigen.

Der nächste Abschnitt, **Breakpoints**, listet die auf der Seite gesetzten Breakpoints auf. In example.js wurde ein Breakpoint bei der Anweisung `listItems.push(inputNewItem.value);` gesetzt.

Die letzten beiden Abschnitte erscheinen nur, wenn der Code ausgeführt wird.

Der Abschnitt **Aufrufstapel** zeigt, welcher Code ausgeführt wurde, um zur aktuellen Zeile zu gelangen. Sie können sehen, dass der Code sich in der Funktion befindet, die einen Mausklick behandelt, und dass der Code derzeit an einem Breakpoint angehalten ist.

Der letzte Abschnitt, **Bereiche**, zeigt, welche Werte von verschiedenen Punkten in Ihrem Code aus sichtbar sind. Zum Beispiel können Sie im Bild unten die Objekte sehen, die dem Code in der addItemClick-Funktion zur Verfügung stehen.

![Ausschnitt des Quellenbereichs des Debugger-Tabs der Entwicklerwerkzeuge des Browsers. Im Aufrufstapel wird die Funktion angezeigt, die in Zeile 18 aufgerufen wird. Es wird hervorgehoben, dass an dieser Linie ein Breakpoint gesetzt ist und der Bereich angezeigt wird.](watch_items.png)

### Mehr erfahren

Erfahren Sie mehr über den JavaScript-Debugger in verschiedenen Browsern:

- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
- [Chrome-Debugger](https://developer.chrome.com/docs/devtools/javascript/) (Der Debugger von Opera und Edge ist derselbe)
- [Safari Quellen-Tab](https://webkit.org/web-inspector/sources-tab/)

## Die JavaScript-Konsole

Die JavaScript-Konsole ist ein unglaublich nützliches Werkzeug zum Debuggen von JavaScript, das nicht wie erwartet funktioniert. Sie ermöglicht es Ihnen, JavaScript-Zeilen gegen die aktuell im Browser geladene Seite auszuführen und die Fehler zu melden, die auftreten, wenn der Browser versucht, Ihren Code auszuführen.

Um die Konsole in einem beliebigen Browser zu öffnen, öffnen Sie die Entwicklerwerkzeuge und wählen Sie die Registerkarte **Konsole**. Dies wird Ihnen ein Fenster wie das folgende bieten:

![Die Registerkarte Konsole der Entwicklerwerkzeuge des Browsers. Zwei JavaScript-Funktionen wurden in der Konsole ausgeführt. Der Benutzer hat Funktionen eingegeben und die Konsole hat die Rückgabewerte angezeigt.](console_only.png)

Um zu sehen, was passiert, versuchen Sie die folgenden Code-Snippets nacheinander in die Konsole einzugeben (und dann Enter zu drücken):

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
  "https://mdn.github.io/shared-assets/images/examples/login-button.png",
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
  "https://mdn.github.io/shared-assets/images/examples/login-button.png",
);
document.querySelector("h1").appendChild(loginImage);
```

Sie werden anfangen, die Art von Fehlern zu sehen, die der Browser zurückgibt. Oft sind diese Fehler ziemlich kryptisch, aber es sollte ziemlich einfach sein, diese Probleme zu lösen!

### Mehr erfahren

Erfahren Sie mehr über die JavaScript-Konsole in verschiedenen Browsern:

- [Firefox Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [Chrome JavaScript-Konsole](https://developer.chrome.com/docs/devtools/console/) (Die Konsole von Opera und Edge ist dieselbe)
- [Safari Console Object API](https://webkit.org/web-inspector/console-object-api/) und [Console Command Line API](https://webkit.org/web-inspector/console-command-line-api/)

## Siehe auch

- [Debugging von HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
- [Debugging von CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
