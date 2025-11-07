---
title: Was sind Browser-Entwicklertools?
slug: Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Jeder moderne Webbrowser beinhaltet eine leistungsstarke Suite von Entwicklertools. Diese Tools ermöglichen eine Vielzahl von Funktionen, von der Inspektion der aktuell geladenen HTML-, CSS- und JavaScript-Dateien bis hin zur Anzeige, welche Ressourcen die Seite angefordert hat und wie lange deren Ladezeit war. Dieser Artikel erklärt, wie Sie die grundlegenden Funktionen Ihrer Browser-Entwicklertools nutzen können.

> [!NOTE]
> Bevor Sie die folgenden Beispiele durcharbeiten, öffnen Sie die [Anfänger-Website](https://mdn.github.io/beginner-html-site-scripted/), die wir während der Artikelserie [Erste Schritte mit dem Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) erstellt haben. Diese sollte geöffnet sein, während Sie die folgenden Schritte durchgehen.

## Anleitung zum Öffnen der Entwicklertools in Ihrem Browser

Die Entwicklertools befinden sich in einem Unterfenster Ihres Browsers und sehen je nach verwendeten Browser in etwa so aus:

![Screenshot eines Browsers mit geöffneten Entwicklertools. Die Webseite wird im oberen Browserbereich angezeigt, die Entwicklertools belegen die untere Hälfte. Es sind drei Bereiche in den Entwicklertools geöffnet: HTML, mit ausgewähltem Body-Element, ein CSS-Panel zeigt Style-Blöcke an, die den hervorgehobenen Body anvisieren, und ein berechnetes Styles-Panel zeigt alle Autorenstile an; das Browser-Stile-Kontrollkästchen ist nicht aktiviert.](devtools_63_inspector.png)

Wie öffnet man diese? Es gibt drei Wege:

- **_Tastenkombination:_**

  - **Windows:** <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> oder <kbd>F12</kbd>
  - **macOS:** <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>

- **_Menüleiste:_**

  - **Firefox:** _Menü (☰) ➤ Weitere Werkzeuge ➤ Web-Entwickler-Werkzeuge_
  - **Chrome:** _Weitere Werkzeuge ➤ Entwicklerwerkzeuge_
  - **Opera**: _Entwickler ➤ Entwicklerwerkzeuge_
  - **Safari:** _Entwickeln ➤ Web-Inspektor anzeigen._

    > [!NOTE]
    > Die Safari-Entwicklertools sind nicht standardmäßig aktiviert.
    > Um sie zu aktivieren, gehen Sie zu _Safari ➤ Einstellungen ➤ Erweitert_ und aktivieren Sie das Kontrollkästchen _Menü 'Entwickeln' in der Menüleiste anzeigen_ oder _Funktionen für Webentwickler aktivieren_.

- **_Kontextmenü:_** Halten Sie die rechte Maustaste gedrückt oder klicken Sie mit der rechten Maustaste auf ein Element auf einer Webseite (Strg-Klick auf dem Mac), und wählen Sie _Element untersuchen_ aus dem erscheinenden Kontextmenü. (_Ein zusätzlicher Vorteil:_ Diese Methode hebt sofort den Code des Elements hervor, auf das Sie mit der rechten Maustaste geklickt haben.)

![Das Firefox-Logo als DOM-Element auf einer Beispiel-Website mit eingeblendetem Kontextmenü. Ein Kontextmenü erscheint, wenn ein Element auf der Webseite mit der rechten Maustaste angeklickt wird. Der letzte Menüpunkt ist 'Element untersuchen'.](inspector_context.png)

## Der Inspektor: DOM-Explorer und CSS-Editor

Die Entwicklertools öffnen sich in der Regel standardmäßig mit dem Inspektor, der ungefähr wie der folgende Screenshot aussieht. Dieses Werkzeug zeigt, wie das HTML auf Ihrer Seite zur Laufzeit aussieht und welchen CSS-Stylings auf jedes Element der Seite angewendet werden. Es ermöglicht Ihnen auch, das HTML und CSS sofort zu ändern und die Ergebnisse Ihrer Änderungen live im Browserfenster zu sehen.

![Eine Test-Website ist in einem Tab im Browser geöffnet. Das Unterfenster der Browser-Entwicklertools ist geöffnet. Die Entwicklertools haben mehrere Tabs. Inspektor ist einer dieser Tabs. Der Inspektor-Tab zeigt den HTML-Code der Website an. Ein Bild-Tag ist aus dem HTML-Code ausgewählt. Dies führt dazu, dass das Bild, das dem ausgewählten Tag in der Website entspricht, hervorgehoben wird.](inspector_highlighted.png)

Wenn Sie den Inspektor _nicht_ sehen,

- **Firefox:** Wählen Sie den **Inspektor**-Tab.
- **Andere Browser:** Wählen Sie den **Elemente**-Tab.

### Den DOM-Inspektor erkunden

Klicken Sie zunächst mit der rechten Maustaste (Strg-Klick) auf ein HTML-Element im DOM-Inspektor und sehen Sie sich das Kontextmenü an. Die verfügbaren Menüoptionen variieren je nach Browser, aber die wichtigen sind meistens identisch:

![Das Unterfenster der Browser-Entwicklertools ist geöffnet. Der Inspektor-Tab ist ausgewählt. Ein Link-Element wird im HTML-Code, der im Inspektor-Tab verfügbar ist, mit der rechten Maustaste angeklickt. Ein Kontextmenü erscheint. Die verfügbaren Menüoptionen variieren je nach Browser, aber die wichtigen sind meistens identisch.](dom_inspector.png)

- **Knoten löschen** (manchmal _Element löschen_). Löscht das aktuelle Element.
- **Als HTML bearbeiten** (manchmal _Attribut hinzufügen_/ _Text bearbeiten_). Ermöglicht es Ihnen, das HTML zu ändern und die Ergebnisse sofort zu sehen. Sehr nützlich zum Debuggen und Testen.
- **:hover/:active/:focus**. Erzwingen von Elementzuständen, damit Sie sehen können, wie ihre Stilierung aussehen würde.
- **Kopieren/Als HTML kopieren**. Kopiert das derzeit ausgewählte HTML.
- Einige Browser haben auch _CSS-Pfad kopieren_ und _XPath kopieren_, um den CSS-Selektor oder XPath-Ausdruck zu kopieren, der das aktuelle HTML-Element auswählen würde.

Versuchen Sie nun, Ihren DOM zu bearbeiten. Doppelklicken Sie auf ein Element, oder klicken Sie mit der rechten Maustaste darauf und wählen Sie _Als HTML bearbeiten_ aus dem Kontextmenü. Sie können jede gewünschte Änderung vornehmen, aber Sie können Ihre Änderungen nicht speichern.

### Den CSS-Editor erkunden

Standardmäßig zeigt der CSS-Editor die CSS-Regeln an, die auf das aktuell ausgewählte Element angewendet werden:

![Ausschnitt des CSS-Panels und des Layout-Panels, die neben dem HTML-Editor in den Browser-Entwicklertools sichtbar sind. Standardmäßig zeigt der CSS-Editor die CSS-Regeln an, die auf das derzeit ausgewählte Element im HTML-Editor angewendet werden. Das Layout-Panel zeigt die Boxmodell-Eigenschaften des ausgewählten Elements.](css_inspector.png)

Diese Funktionen sind besonders nützlich:

- Die Regeln, die auf das aktuelle Element angewendet werden, werden in der Reihenfolge von am spezifischsten bis am wenigsten spezifisch angezeigt.
- Klicken Sie auf die Kontrollkästchen neben jeder Deklaration, um zu sehen, wie es aussehen würde, wenn Sie die Deklaration entfernen.
- Klicken Sie auf den kleinen Pfeil neben jeder Kurzschreibweise, um die Langhand-Äquivalente der Eigenschaft anzuzeigen.
- Klicken Sie auf einen Eigenschaftsnamen oder -wert, um ein Textfeld zu öffnen, in das Sie einen neuen Wert eingeben können, um eine Live-Vorschau einer Stiländerung zu erhalten.
- Neben jeder Regel befindet sich der Dateiname und die Zeilennummer, in der die Regel definiert ist. Ein Klick auf diese Regel führt zu einem Sprung, um diese in einer einzelnen Ansicht anzuzeigen, in der sie im Allgemeinen bearbeitet und gespeichert werden kann.
- Sie können auch auf die schließende geschweifte Klammer einer Regel klicken, um ein Textfeld in einer neuen Zeile zu öffnen, wo Sie eine völlig neue Deklaration für Ihre Seite schreiben können.

Oben im CSS-Viewer finden Sie eine Anzahl klickbarer Tabs:

- _Berechnet_: Dies zeigt die berechneten Stile für das derzeit ausgewählte Element (die finalen, normalisierten Werte, die der Browser anwendet).
- _Layout_: Dies zeigt die Details für CSS-[Grid](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) Layout-Modi an, wenn das von Ihnen untersuchte Element sie verwendet.
- _Schriften_: In Firefox und Safari zeigt der _Schriften_ Tab die auf das aktuelle Element angewendeten Schriften an.

Die _Boxmodell_-Ansicht stellt das derzeitige Boxmodell des Elements visuell dar, sodass Sie auf einen Blick sehen können, welche Polsterung, Ränder und Rahmen angewendet werden, und wie groß der Inhalt ist. In Firefox befindet sich dies im _Layout_ Tab, in anderen Browsern ist es im _Berechnet_ Tab.

In einigen Browsern können im Panel auch die JavaScript-Details des ausgewählten Elements angezeigt werden. In Safari sind diese im _Node_ Tab zusammengefasst, aber in Chrome, Opera und Edge befinden sie sich in separaten Tabs.

- _Eigenschaften_: Die {{Glossary("Property/JavaScript", "Eigenschaften")}} des Element-Objekts.
- _Ereignis-Listener_: Die mit dem Element verbundenen [Ereignisse](/de/docs/Web/API/Event).

### Mehr erfahren

Erfahren Sie mehr über den Inspektor in verschiedenen Browsern:

- [Firefox Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [Chrome DOM-Inspektor](https://developer.chrome.com/docs/devtools/dom/) (Opera und Edge's Inspektor ist der gleiche)
- [Safari Elemente Tab](https://webkit.org/web-inspector/elements-tab/)

## Der JavaScript-Debugger

Der JavaScript-Debugger ermöglicht es Ihnen, die Werte von Variablen zu beobachten und Haltepunkte festzulegen, an denen Sie die Ausführung des Codes anhalten und Probleme identifizieren können, die die korrekte Ausführung Ihres Codes verhindern.

![Eine Test-Website, die lokal auf Port 8080 bereitgestellt wird. Das Unterfenster der Entwicklerwerkzeuge ist geöffnet. Der JavaScript-Debugger-Tab ist ausgewählt. Es ermöglicht das Beobachten von Variablenwerten und das Setzen von Haltepunkten. Eine Datei mit dem Namen 'example.js' ist aus dem Quellverzeichnis ausgewählt. Ein Haltepunkt ist bei Zeile 18 der Datei gesetzt.](firefox_debugger.png)

Um zum Debugger zu gelangen:

**Firefox**: Öffnen Sie die Entwicklerwerkzeuge und wählen Sie den **Debugger**-Tab.
**Andere Browser**: Öffnen Sie die Entwicklerwerkzeuge und wählen Sie den **Quellen**-Tab.

### Den Debugger erkunden

Der JavaScript-Debugger jedes Browsers ist in drei Bereiche unterteilt. Die Anordnung dieser Bereiche unterscheidet sich je nach verwendetem Browser; dieser Leitfaden verwendet Firefox als Referenz.

#### Dateiliste

Der erste Bereich links enthält die Liste der Dateien, die mit der Seite verknüpft sind, die Sie debuggen. Wählen Sie die Datei, mit der Sie arbeiten möchten, aus dieser Liste aus. Klicken Sie auf eine Datei, um sie auszuwählen und ihren Inhalt im mittleren Bereich des Debuggers anzuzeigen.

![Ausschnitt des Quellenbereichs des Debugger-Tabs in den Entwicklerwerkzeugen des Browsers. Die zur aktuellen Seite gehörenden Dateien, die Sie debuggen, sind unter dem Ordner sichtbar, dessen Name mit der URL der Site im derzeit geöffneten Browser-Tab übereinstimmt.](file_list.png)

#### Quellcode

Setzen Sie Haltepunkte, wo Sie die Ausführung anhalten möchten. Im folgenden Bild zeigt die Hervorhebung auf Nummer 18, dass die Zeile einen Haltepunkt hat.

![Ausschnitt des Entwicklerwerkzeuge-Debugger-Panels mit dem Hervorhebungspunkt bei Zeile 18.](source_code.png)

#### Beobachtungsausdrücke und Haltepunkte

Der rechte Bereich zeigt eine Liste der von Ihnen hinzugefügten Beobachtungsausdrücke und gesetzten Haltepunkte.

Im Bild zeigt der erste Abschnitt, **Beobachtungsausdrücke**, dass die Variable listItems hinzugefügt wurde. Sie können die Liste erweitern, um die Werte im Array anzuzeigen.

Der nächste Abschnitt, **Haltepunkte**, listet die Haltepunkte auf, die auf der Seite gesetzt wurden. In example.js wurde ein Haltepunkt auf der Anweisung `listItems.push(inputNewItem.value);` gesetzt.

Die letzten beiden Abschnitte erscheinen nur, wenn der Code ausgeführt wird.

Der **Callstack**-Abschnitt zeigt Ihnen, welcher Code ausgeführt wurde, um zur aktuellen Zeile zu gelangen. Sie können sehen, dass sich der Code in der Funktion befindet, die einen Mausklick behandelt, und dass der Code derzeit am Haltepunkt angehalten ist.

Der letzte Abschnitt, **Scopes**, zeigt, welche Werte von verschiedenen Punkten innerhalb Ihres Codes aus sichtbar sind. Zum Beispiel können Sie im Bild unten die Objekte sehen, die dem Code in der addItemClick-Funktion zur Verfügung stehen.

![Ausschnitt aus dem Quellenbereich des Debugger-Tabs der Entwicklerwerkzeuge des Browsers. Im Callstack wird die Funktion angezeigt, die in Zeile 18 aufgerufen wird, wodurch hervorgehoben wird, dass dort ein Haltepunkt gesetzt ist und der Geltungsbereich angezeigt wird.](watch_items.png)

### Mehr erfahren

Erfahren Sie mehr über den JavaScript-Debugger in verschiedenen Browsern:

- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html))
- [Chrome Debugger](https://developer.chrome.com/docs/devtools/javascript/) (Opera und Edge's Debugger ist der gleiche)
- [Safari Quellen-Tab](https://webkit.org/web-inspector/sources-tab/)

## Die JavaScript-Konsole

Die JavaScript-Konsole ist ein unglaublich nützliches Werkzeug zum Debuggen von JavaScript, das nicht wie erwartet funktioniert. Sie ermöglicht Ihnen, JavaScript-Zeilen gegen die aktuell im Browser geladene Seite auszuführen und meldet die aufgetretenen Fehler, als der Browser versucht hat, Ihren Code auszuführen.

Um die Konsole in jedem Browser zu öffnen, öffnen Sie die Entwicklertools und wählen Sie den **Konsole**-Tab. Dies gibt Ihnen ein Fenster wie das folgende:

![Der Konsole-Tab der Browser-Entwicklertools. Zwei JavaScript-Funktionen wurden in der Konsole ausgeführt. Der Benutzer hat Funktionen eingegeben, und die Konsole zeigte die Rückgabewerte an.](console_only.png)

Um zu sehen, was passiert, versuchen Sie, die folgenden Code-Snippets einzeln in die Konsole einzufügen (und dann die Eingabetaste zu drücken):

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

Sie werden beginnen, die Art von Fehlern zu sehen, die der Browser zurückgibt. Oft sind diese Fehler ziemlich kryptisch, aber es sollte ziemlich einfach sein, diese Probleme herauszufinden!

### Mehr erfahren

Erfahren Sie mehr über die JavaScript-Konsole in verschiedenen Browsern:

- [Firefox-Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [Chrome JavaScript-Konsole](https://developer.chrome.com/docs/devtools/console/) (Opera und Edge's Konsole ist die gleiche)
- [Safari Console Object API](https://webkit.org/web-inspector/console-object-api/) und [Console Command Line API](https://webkit.org/web-inspector/console-command-line-api/)

## Siehe auch

- [HTML-Debugging](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
- [CSS-Debugging](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
