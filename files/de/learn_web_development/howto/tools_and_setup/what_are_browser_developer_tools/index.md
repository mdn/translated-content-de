---
title: Was sind Browser-Entwicklertools?
slug: Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Jeder moderne Webbrowser enthält eine leistungsstarke Suite von Entwicklertools. Diese Tools erfüllen eine Vielzahl von Aufgaben, von der Inspektion des aktuell geladenen HTML, CSS und JavaScript bis hin zur Anzeige der Assets, die die Seite angefordert hat, und wie lange sie zum Laden benötigt haben. Dieser Artikel erklärt, wie Sie die grundlegenden Funktionen der Entwicklertools Ihres Browsers nutzen können.

> [!NOTE]
> Bevor Sie die untenstehenden Beispiele durchgehen, öffnen Sie die [Anfängerseite](https://mdn.github.io/beginner-html-site-scripted/), die wir während der Artikelserie [Erste Schritte mit dem Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) erstellt haben. Sie sollten diese offen haben, während Sie den Anweisungen folgen.

## Wie Sie die Entwicklertools in Ihrem Browser öffnen

Die Entwicklertools befinden sich in Ihrem Browser in einem Unterfenster, das je nach Browser ungefähr so aussieht:

![Screenshot eines Browsers mit geöffneten Entwicklertools. Die Webseite wird in der oberen Hälfte des Browsers angezeigt, die Entwicklertools belegen die untere Hälfte. Es sind drei Bereiche in den Entwicklertools geöffnet: HTML mit dem ausgewählten Body-Element, ein CSS-Bereich, der Stilblöcke zeigt, die auf den hervorgehobenen Body abzielen, und ein Bereich für berechnete Stile, der alle Autorenstile zeigt; das Kontrollkästchen für Browserstile ist nicht angekreuzt.](devtools_63_inspector.png)

Wie rufen Sie es auf? Drei Möglichkeiten:

- **_Tastatur:_**

  - **Windows:** <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> oder <kbd>F12</kbd>
  - **macOS:** <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>

- **_Menüleiste:_**

  - **Firefox:** _Menü (☰) ➤ Weitere Werkzeuge ➤ Web-Entwicklerwerkzeuge_
  - **Chrome:** _Weitere Werkzeuge ➤ Entwicklertools_
  - **Opera**: _Entwickler ➤ Entwicklertools_
  - **Safari:** _Entwickler ➤ Web-Inspector anzeigen._

    > [!NOTE]
    > Die Entwicklerwerkzeuge in Safari sind standardmäßig nicht aktiviert.
    > Um sie zu aktivieren, gehen Sie zu _Safari ➤ Einstellungen ➤ Erweitert_ und aktivieren Sie das Kontrollkästchen _Menü „Entwickler“ in Menüleiste anzeigen_ oder _Funktionen für Web-Entwickler aktivieren_.

- **_Kontextmenü:_** Halten Sie ein Element auf einer Webseite gedrückt oder klicken Sie mit der rechten Maustaste darauf (Ctrl-Klick auf dem Mac) und wählen Sie _Element untersuchen_ aus dem Kontextmenü, das erscheint. (_Ein zusätzlicher Bonus:_ Diese Methode hebt sofort den Code des Elements hervor, auf das Sie mit der rechten Maustaste geklickt haben.)

![Das Firefox-Logo als DOM-Element in einer Beispielwebsite mit einem geöffneten Kontextmenü. Ein Kontextmenü erscheint, wenn ein beliebiges Element auf der Webseite mit der rechten Maustaste angeklickt wird. Der letzte Menüpunkt ist 'Element untersuchen'.](inspector_context.png)

## Der Inspektor: DOM-Explorer und CSS-Editor

Die Entwicklertools öffnen sich standardmäßig meistens mit dem Inspektor, der wie der folgende Screenshot aussieht. Dieses Tool zeigt, wie das HTML auf Ihrer Seite zur Laufzeit aussieht, sowie welches CSS auf jedes Element der Seite angewendet wird. Es ermöglicht Ihnen zudem, HTML und CSS sofort zu ändern und die Auswirkungen Ihrer Änderungen live im Browser-Viewport zu sehen.

![Eine Testwebsite ist in einem Tab im Browser geöffnet. Das Unterfenster der Entwicklertools ist geöffnet. Die Entwicklertools haben mehrere Tabs. Inspektor ist einer dieser Tabs. Der Inspektor-Tab zeigt den HTML-Code der Website an. Ein Bild-Tag ist aus dem HTML-Code ausgewählt. Dies führt zur Hervorhebung des Bildes, das dem ausgewählten Tag auf der Website entspricht.](inspector_highlighted.png)

Falls Sie den Inspektor _nicht_ sehen,

- **Firefox:** Wählen Sie den Tab **Inspektor**.
- **Andere Browser:** Wählen Sie den Tab **Elemente**.

### Erforschen des DOM-Inspektors

Zu Beginn klicken Sie mit der rechten Maustaste (Ctrl-Klick) auf ein HTML-Element im DOM-Inspektor und betrachten Sie das Kontextmenü. Die verfügbaren Menüoptionen variieren je nach Browser, aber die wichtigsten sind meistens die gleichen:

![Das Unterfenster der Entwicklertools ist geöffnet. Der Inspektor-Tab ist ausgewählt. Ein Link-Element wird im HTML-Code des Inspektor-Tabs mit der rechten Maustaste angeklickt. Ein Kontextmenü erscheint. Die verfügbaren Menüoptionen variieren je nach Browser, sind aber größtenteils gleich.](dom_inspector.png)

- **Knoten löschen** (manchmal _Element löschen_). Löscht das aktuelle Element.
- **Als HTML bearbeiten** (manchmal _Attribut hinzufügen_/_Text bearbeiten_). Ermöglicht Ihnen, das HTML zu ändern und die Ergebnisse sofort zu sehen. Sehr nützlich zum Debuggen und Testen.
- **:hover/:active/:focus**. Erzwingt die Umschaltung von Elementzuständen, so dass Sie sehen können, wie deren Styling aussehen würde.
- **Kopieren/Als HTML kopieren**. Kopiert das aktuell ausgewählte HTML.
- Einige Browser haben auch _CSS-Pfad kopieren_ und _XPath kopieren_ verfügbar, um Ihnen zu ermöglichen, den CSS-Selektor oder das XPath-Ausdruck zu kopieren, das das aktuelle HTML-Element auswählen würde.

Versuchen Sie jetzt, einige Teile Ihres DOM zu bearbeiten. Doppelklicken Sie auf ein Element oder klicken Sie mit der rechten Maustaste darauf und wählen Sie _Als HTML bearbeiten_ aus dem Kontextmenü. Sie können beliebige Änderungen vornehmen, aber Sie können Ihre Änderungen nicht speichern.

### Erkunden des CSS-Editors

Standardmäßig zeigt der CSS-Editor die CSS-Regeln an, die auf das derzeit ausgewählte Element angewendet werden:

![Ausschnitt des CSS-Panels und des Layout-Panels, das neben dem HTML-Editor in den Entwicklertools des Browsers sichtbar ist. Standardmäßig zeigt der CSS-Editor die CSS-Regeln an, die auf das derzeit ausgewählte Element im HTML-Editor angewendet werden. Das Layout-Panel zeigt die Boxmodell-Eigenschaften des ausgewählten Elements an.](css_inspector.png)

Diese Funktionen sind besonders nützlich:

- Die auf das aktuelle Element angewendeten Regeln werden in der Reihenfolge von der spezifischsten zur allgemeinsten angezeigt.
- Klicken Sie auf die Kontrollkästchen neben jeder Deklaration, um zu sehen, was passieren würde, wenn Sie die Deklaration entfernen.
- Klicken Sie auf den kleinen Pfeil neben jeder Kurzform-Eigenschaft, um die Langform-Äquivalente der Eigenschaft anzuzeigen.
- Klicken Sie auf einen Eigenschaftsnamen oder -wert, um ein Textfeld aufzurufen, in dem Sie einen neuen Wert eingeben können, um eine Live-Vorschau der Stiländerung zu erhalten.
- Neben jeder Regel steht der Dateiname und die Zeilennummer, in die die Regel definiert ist. Ein Klick auf diese Regel lässt die Entwicklertools zu ihr springen, um sie in einer eigenen Ansicht anzuzeigen, wo sie normalerweise bearbeitet und gespeichert werden kann.
- Sie können auch auf die schließende geschweifte Klammer einer Regel klicken, um auf einer neuen Zeile ein Textfeld aufzurufen, in dem Sie eine vollkommen neue Deklaration für Ihre Seite schreiben können.

Sie werden oben im CSS-Viewer eine Reihe von klickbaren Tabs bemerken:

- _Berechnet_: Dies zeigt die berechneten Stile für das derzeit ausgewählte Element (die endgültigen, normalisierten Werte, die der Browser anwendet).
- _Layout_: Dies zeigt die Details für die Layout-Modi [grid](/de/docs/Web/CSS/CSS_grid_layout) und [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) an, wenn das Element, das Sie untersuchen, diese verwendet.
- _Schriften_: In Firefox und Safari zeigt der _Schriften_-Tab die auf das aktuelle Element angewendeten Schriften an.

Die _Boxmodell_-Ansicht stellt das aktuale Element's Boxmodell visuell dar, so dass Sie auf einen Blick sehen können, welche Polsterung, Rand und welcher Abstand darauf angewendet wird, und wie groß der Inhalt ist. In Firefox befindet sich dies im _Layout_-Tab und in anderen Browsern ist es im _Berechnet_-Tab.

In einigen Browsern können die JavaScript-Details des ausgewählten Elements auch in diesem Panel angezeigt werden. In Safari sind diese im _Knoten_-Tab zusammengefasst, aber in Chrome, Opera und Edge sind sie in separate Tabs aufgeteilt.

- _Eigenschaften_: Die {{Glossary("Property/JavaScript", "Eigenschaften")}} des Element-Objekts.
- _Ereignis-Listener_: Die [Ereignisse](/de/docs/Web/API/Event), die mit dem Element verbunden sind.

### Mehr erfahren

Erfahren Sie mehr über den Inspektor in verschiedenen Browsern:

- [Firefox Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [Chrome DOM-Inspektor](https://developer.chrome.com/docs/devtools/dom/) (Der Inspektor von Opera und Edge ist derselbe)
- [Safari Elemente-Tab](https://webkit.org/web-inspector/elements-tab/)

## Der JavaScript-Debugger

Der JavaScript-Debugger ermöglicht Ihnen, den Wert von Variablen zu beobachten und Haltepunkte zu setzen, Orte in Ihrem Code, an denen Sie die Ausführung pausieren und die Probleme identifizieren möchten, die verhindern, dass Ihr Code ordnungsgemäß ausgeführt wird.

![Eine Testwebsite, die lokal auf Port 8080 bedient wird. Das Unterfenster der Entwicklertools ist geöffnet. Der JavaScript-Debugger-Tab ist ausgewählt. Er ermöglicht Ihnen, den Wert von Variablen zu beobachten und Haltepunkte zu setzen. Eine Datei mit dem Namen 'example.js' ist aus dem Quellbereich ausgewählt. Ein Haltepunkt ist in Zeile 18 der Datei gesetzt.](firefox_debugger.png)

Um zum Debugger zu gelangen:

**Firefox**: Öffnen Sie die Entwicklertools und wählen Sie den Tab **Debugger**.
**Andere Browser**: Öffnen Sie die Entwicklertools und wählen Sie den Tab **Quellen**.

### Erforschen des Debuggers

Jeder Browser-JavaScript-Debugger ist in drei Bereiche unterteilt. Das Layout dieser Bereiche unterscheidet sich je nach verwendetem Browser; dieser Leitfaden verwendet Firefox als Referenz.

#### Dateiliste

Der erste Bereich links enthält die Liste der Dateien, die mit der Seite, die Sie debuggen, verbunden sind. Wählen Sie die Datei aus, mit der Sie arbeiten möchten, aus dieser Liste. Klicken Sie auf eine Datei, um sie auszuwählen und ihren Inhalt im mittleren Bereich des Debuggers anzuzeigen.

![Ausschnitt des Quellenbereichs des Debugger-Tabs in den Entwicklertools des Browsers. Die für die aktuelle Seite relevanten Dateien, die Sie debuggen, sind unter dem Ordner sichtbar, dessen Name dem URL der Website entspricht, die im aktuellen Browser-Tab geöffnet ist.](file_list.png)

#### Quellcode

Setzen Sie Haltepunkte, wo Sie die Ausführung pausieren möchten. Im folgenden Bild zeigt die Hervorhebung der Nummer 18, dass in dieser Zeile ein Haltepunkt gesetzt ist.

![Ausschnitt des Debugger-Panels der Entwicklertools mit dem Haltepunkt, der in Zeile 18 hervorgehoben ist.](source_code.png)

#### Beobachtungsausdrücke und Haltepunkte

Der rechte Bereich zeigt eine Liste der Beobachtungsausdrücke, die Sie hinzugefügt haben, und der Haltepunkte, die Sie gesetzt haben.

Im Bild zeigt der erste Abschnitt, **Beobachtungsausdrücke**, dass die Variable listItems hinzugefügt wurde. Sie können die Liste erweitern, um die Werte im Array anzuzeigen.

Der nächste Abschnitt, **Haltepunkte**, führt die auf der Seite gesetzten Haltepunkte auf. In example.js wurde ein Haltepunkt auf der Anweisung `listItems.push(inputNewItem.value);` gesetzt.

Die letzten beiden Abschnitte erscheinen nur, wenn der Code ausgeführt wird.

Der Abschnitt **Aufrufstapel** zeigt Ihnen, welcher Code ausgeführt wurde, um zur aktuellen Zeile zu gelangen. Sie können sehen, dass sich der Code in der Funktion befindet, die einen Mausklick behandelt, und dass der Code derzeit am Haltepunkt pausiert ist.

Der letzte Abschnitt, **Geltungsbereiche**, zeigt, welche Werte von verschiedenen Punkten innerhalb Ihres Codes sichtbar sind. Im folgenden Bild sehen Sie beispielsweise die Objekte, die dem Code in der Funktion addItemClick zur Verfügung stehen.

![Ausschnitt des Quellenbereichs des Debugger-Tabs der Entwicklertools des Browsers. Im Aufrufstapel zeigt sich die Funktion, die in Zeile 18 aufgerufen wird, wobei hervorgehoben ist, dass in dieser Zeile ein Haltepunkt gesetzt ist und der Geltungsbereich angezeigt wird.](watch_items.png)

### Mehr erfahren

Erfahren Sie mehr über den JavaScript-Debugger in verschiedenen Browsern:

- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
- [Chrome Debugger](https://developer.chrome.com/docs/devtools/javascript/) (Opera und Edge's Debugger ist derselbe)
- [Safari Quellen-Tab](https://webkit.org/web-inspector/sources-tab/)

## Die JavaScript-Konsole

Die JavaScript-Konsole ist ein unglaublich nützliches Werkzeug zum Debuggen von JavaScript, das nicht wie erwartet funktioniert. Sie erlaubt Ihnen, Zeilen von JavaScript gegen die aktuell im Browser geladene Seite auszuführen und gibt die Fehler aus, auf die der Browser beim Versuch, Ihren Code auszuführen, stößt.

Um auf die Konsole in einem beliebigen Browser zuzugreifen, öffnen Sie die Entwicklertools und wählen Sie den Tab **Konsole**. Dies gibt Ihnen ein Fenster wie das folgende:

![Der Konsole-Tab der Entwicklertools des Browsers. Zwei JavaScript-Funktionen wurden in der Konsole ausgeführt. Der Benutzer hat Funktionen eingegeben, und die Konsole zeigte die Rückgabewerte an.](console_only.png)

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

Versuchen Sie nun, die folgenden fehlerhaften Versionen des Codes einzugeben und zu sehen, was Sie erhalten.

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

Sie werden die Art von Fehlern sehen, die der Browser zurückgibt. Oft sind diese Fehler ziemlich kryptisch, aber es sollte ziemlich einfach sein, diese Probleme zu lösen!

### Mehr erfahren

Erfahren Sie mehr über die JavaScript-Konsole in verschiedenen Browsern:

- [Firefox Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [Chrome JavaScript-Konsole](https://developer.chrome.com/docs/devtools/console/) (Opera und Edge's Konsole ist dieselbe)
- [Safari Console Object API](https://webkit.org/web-inspector/console-object-api/) und [Konsole-Befehlszeilen-API](https://webkit.org/web-inspector/console-command-line-api/)

## Siehe auch

- [Debuggen von HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
- [Debuggen von CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
