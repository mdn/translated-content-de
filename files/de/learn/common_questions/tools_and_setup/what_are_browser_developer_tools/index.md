---
title: Was sind Browser-Entwicklertools?
slug: Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Jeder moderne Webbrowser enthält eine leistungsstarke Suite von Entwicklertools. Diese Tools ermöglichen eine Vielzahl von Dingen, von der Inspektion der aktuell geladenen HTML-, CSS- und JavaScript-Dateien bis hin zur Anzeige, welche Ressourcen die Seite angefordert hat und wie lange sie zum Laden benötigt haben. Dieser Artikel erklärt, wie Sie die grundlegenden Funktionen der Entwicklertools Ihres Browsers nutzen können.

> [!NOTE]
> Bevor Sie die folgenden Beispiele durchgehen, öffnen Sie die [Anfängerseite](https://mdn.github.io/beginner-html-site-scripted/), die wir während der Artikelserie [Einführung ins Web](/de/docs/Learn/Getting_started_with_the_web) erstellt haben. Sie sollten diese geöffnet haben, während Sie die unten stehenden Schritte befolgen.

## So öffnen Sie die Entwicklertools in Ihrem Browser

Die Entwicklertools befinden sich in einem Unterfenster Ihres Browsers und sehen ungefähr so aus, je nachdem, welchen Browser Sie verwenden:

![Screenshot eines Browsers mit geöffneten Entwicklertools. Die Webseite wird im oberen Teil des Browsers angezeigt, die Entwicklertools belegen den unteren Teil. Es sind drei Fenster in den Entwicklertools geöffnet: HTML, mit dem ausgewählten Body-Element, ein CSS-Fenster, das Stilblöcke zeigt, die das hervorgehobene Body-Element anvisieren, und ein berechnetes Stilfenster, das alle Autorenstile anzeigt; das Kontrollkästchen für Browserstile ist nicht aktiviert.](devtools_63_inspector.png)

Wie rufen Sie es auf? Es gibt drei Möglichkeiten:

- **_Tastenkombinationen:_**

  - **Windows:** <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> oder <kbd>F12</kbd>
  - **macOS:** <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>

- **_Menüleiste:_**

  - **Firefox:** _Menü (☰) ➤ Weitere Werkzeuge ➤ Web-Entwicklerwerkzeuge_
  - **Chrome:** _Weitere Werkzeuge ➤ Entwicklertools_
  - **Opera**: _Entwickler ➤ Entwicklertools_
  - **Safari:** _Entwickeln ➤ Web-Inspektor anzeigen._

    > [!NOTE]
    > Die Entwicklertools in Safari sind standardmäßig nicht aktiviert.
    > Um sie zu aktivieren, gehen Sie zu _Safari ➤ Einstellungen ➤ Erweitert_ und aktivieren Sie das Kontrollkästchen _Entwickler-Menü in der Menüleiste anzeigen_ oder _Funktionen für Webentwickler aktivieren_.

- **_Kontextmenü:_** Halten Sie einen Gegenstand auf einer Webseite gedrückt oder klicken Sie mit der rechten Maustaste (Ctrl-Klick auf dem Mac) und wählen Sie _Element untersuchen_ aus dem erscheinenden Kontextmenü. (_Ein zusätzlicher Vorteil:_ Mit dieser Methode wird gleich der Code des Elements hervorgehoben, auf das Sie geklickt haben.)

![Das Firefox-Logo als DOM-Element auf einer Beispielwebsite mit einem geöffneten Kontextmenü. Ein Kontextmenü erscheint, wenn ein Element auf der Webseite mit der rechten Maustaste angeklickt wird. Der letzte Menüpunkt ist 'Element untersuchen'.](inspector_context.png)

## Der Inspektor: DOM-Explorer und CSS-Editor

Die Entwicklertools öffnen sich standardmäßig normalerweise im Inspektor, der etwa wie der folgende Screenshot aussieht. Dieses Tool zeigt, wie das HTML auf Ihrer Seite zur Laufzeit aussieht und welche CSS-Stile auf jedes Element der Seite angewendet werden. Es ermöglicht Ihnen auch, HTML und CSS sofort zu ändern und die Ergebnisse Ihrer Änderungen live im Browser-Viewport zu sehen.

![Eine Testwebsite ist in einem Tab im Browser geöffnet. Das Entwicklertools-Unterfenster ist geöffnet. Die Entwicklertools haben mehrere Tabs. Inspektor ist einer dieser Tabs. Der Inspektor-Tab zeigt den HTML-Code der Website. Ein Bild-Tag ist aus dem HTML-Code ausgewählt. Dies führt zu einer Hervorhebung des Bildes, das dem ausgewählten Tag auf der Website entspricht.](inspector_highlighted.png)

Falls Sie den Inspektor _nicht_ sehen,

- **Firefox:** Wählen Sie den **Inspektor**-Tab.
- **Andere Browser:** Wählen Sie den **Elemente**-Tab.

### Den DOM-Inspektor erkunden

Zunächst einmal klicken Sie mit der rechten Maustaste (Ctrl-Klick) auf ein HTML-Element im DOM-Inspektor und schauen Sie sich das Kontextmenü an. Die verfügbaren Menüoptionen variieren zwischen den Browsern, aber die wichtigen sind meistens dieselben:

![Das Unterfenster der Browser-Entwicklertools ist geöffnet. Der Inspektor-Tab ist ausgewählt. Ein Link-Element wird aus dem im Inspektor-Tab verfügbaren HTML-Code mit der rechten Maustaste angeklickt. Ein Kontextmenü erscheint. Die verfügbaren Menüoptionen variieren zwischen den Browsern, aber die wichtigsten sind meistens dieselben.](dom_inspector.png)

- **Knoten löschen** (manchmal _Element löschen_). Löscht das aktuelle Element.
- **Als HTML bearbeiten** (manchmal _Attribut hinzufügen_/_Text bearbeiten_). Ermöglicht das Ändern von HTML und das sofortige Betrachten der Ergebnisse. Sehr nützlich zum Debuggen und Testen.
- **:hover/:active/:focus**. Erzwingt, dass Elementzustände aktiviert werden, damit Sie sehen, wie deren Stylings aussehen würden.
- **Kopieren/Kopieren als HTML**. Kopiert das aktuell ausgewählte HTML.
- Einige Browser bieten auch _CSS-Pfad kopieren_ und _XPath kopieren_ an, um Ihnen zu ermöglichen, den CSS-Selektor oder den XPath-Ausdruck zu kopieren, der das aktuelle HTML-Element auswählen würde.

Versuchen Sie jetzt, etwas in Ihrem DOM zu bearbeiten. Doppelklicken Sie auf ein Element oder klicken Sie mit der rechten Maustaste darauf und wählen Sie _Als HTML bearbeiten_ aus dem Kontextmenü. Sie können beliebige Änderungen vornehmen, aber Sie können Ihre Änderungen nicht speichern.

### Den CSS-Editor erkunden

Standardmäßig zeigt der CSS-Editor die CSS-Regeln an, die auf das aktuell ausgewählte Element angewendet werden:

![Ausschnitt des CSS-Panels und des Layout-Panels, das neben dem HTML-Editor in den Browser-Entwicklertools zu sehen ist. Standardmäßig zeigt der CSS-Editor die CSS-Regeln an, die auf das aktuell ausgewählte Element im HTML-Editor angewendet werden. Das Layout-Panel zeigt die Boxmodell-Eigenschaften des ausgewählten Elements.](css_inspector.png)

Diese Funktionen sind besonders praktisch:

- Die Regeln, die auf das aktuelle Element angewendet werden, werden in der Reihenfolge von spezifisch bis weniger spezifisch angezeigt.
- Klicken Sie auf die Kontrollkästchen neben jeder Deklaration, um zu sehen, was passieren würde, wenn Sie die Deklaration entfernen.
- Klicken Sie auf den kleinen Pfeil neben jeder Kurzschreibweise, um die ausführlichen Äquivalente der Eigenschaft anzuzeigen.
- Klicken Sie auf einen Eigenschaftsnamen oder -wert, um ein Textfeld aufzurufen, in dem Sie einen neuen Wert eingeben können, um eine Live-Vorschau einer Stiländerung zu erhalten.
- Neben jeder Regel steht der Dateiname und die Zeilennummer, in der die Regel definiert ist. Wenn Sie auf diese Regel klicken, springen die Entwicklertools zu einer Ansicht, in der sie bearbeitet und gespeichert werden kann.
- Sie können auch auf die schließende geschweifte Klammer einer Regel klicken, um ein Textfeld in einer neuen Zeile aufzurufen, in dem Sie eine vollständig neue Deklaration für Ihre Seite schreiben können.

Sie werden eine Reihe von anklickbaren Registerkarten am oberen Rand des CSS-Viewers bemerken:

- _Berechnet_: Dies zeigt die berechneten Stile für das aktuell ausgewählte Element an (die endgültigen, normalisierten Werte, die der Browser anwendet).
- _Layout_: Dies zeigt die Details für CSS-[Grid](/de/docs/Web/CSS/CSS_grid_layout)- und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)-Layout-Modi, wenn das Element, das Sie untersuchen, diese verwendet.
- _Schriften_: In Firefox und Safari zeigt die Registerkarte _Schriften_ die auf das aktuelle Element angewendeten Schriften an.

Die _Boxmodell_-Ansicht stellt das aktuelle Element-Boxmodell visuell dar, sodass Sie auf einen Blick sehen können, welche Polster, Rahmen und Ränder darauf angewendet werden und wie groß der Inhalt ist. In Firefox befindet sich dies auf der Registerkarte _Layout_, und in anderen Browsern im Register _Berechnet_.

In einigen Browsern können auch die JavaScript-Details des ausgewählten Elements in diesem Panel angezeigt werden. In Safari sind diese im _Knoten_-Tab vereint, in Chrome, Opera und Edge sind sie in separaten Tabs untergebracht.

- _Eigenschaften_: Die {{Glossary("Property/JavaScript", "Eigenschaften")}} des Elementobjekts.
- _Ereignis-Listener_: Die [Ereignisse](/de/docs/Web/API/Event), die mit dem Element verbunden sind.

### Mehr erfahren

Erfahren Sie mehr über den Inspektor in verschiedenen Browsern:

- [Firefox Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [Chrome DOM-Inspektor](https://developer.chrome.com/docs/devtools/dom/) (Operas und Edges Inspektor ist derselbe)
- [Safari Elemente-Tab](https://webkit.org/web-inspector/elements-tab/)

## Der JavaScript-Debugger

Der JavaScript-Debugger ermöglicht es Ihnen, den Wert von Variablen zu beobachten und Haltepunkte festzulegen, Stellen in Ihrem Code, an denen Sie die Ausführung pausieren und die Probleme identifizieren möchten, die Ihre Fehlerbehebung verhindern.

![Eine Testwebsite, die lokal auf Port 8080 bereitgestellt wird. Das Entwicklertools-Unterfenster ist geöffnet. Der JavaScript-Debugger-Tab ist ausgewählt. Er erlaubt es Ihnen, den Wert von Variablen zu beobachten und Haltepunkte zu setzen. Eine Datei mit dem Namen 'example.js' ist im Quellfenster ausgewählt. Ein Haltepunkt ist bei Zeilennummer 18 der Datei festgelegt.](firefox_debugger.png)

Um zum Debugger zu gelangen:

**Firefox**: Öffnen Sie die Entwicklertools und wählen Sie den **Debugger**-Tab.
**Andere Browser**: Öffnen Sie die Entwicklertools und wählen Sie den **Quellen**-Tab.

### Den Debugger erkunden

Der JavaScript-Debugger in jedem Browser ist in drei Fenster unterteilt. Das Layout dieser Fenster ist abhängig vom verwendeten Browser unterschiedlich; dieser Leitfaden verwendet Firefox als Referenz.

#### Datei-Liste

Das erste Fenster auf der linken Seite enthält die Liste der Dateien, die mit der Seite verbunden sind, die Sie debuggen. Wählen Sie aus dieser Liste die Datei aus, mit der Sie arbeiten möchten. Klicken Sie auf eine Datei, um sie auszuwählen und ihren Inhalt im mittleren Fenster des Debuggers anzuzeigen.

![Ausschnitt des Quellfensters des Debugger-Tabs in den Entwicklertools. Die Dateien, die mit der aktuellen Seite verbunden sind, die Sie debuggen, sind unter dem Ordner sichtbar, dessen Name mit der URL der geöffneten Seite im aktuellen Browser-Tab übereinstimmt.](file_list.png)

#### Quellcode

Setzen Sie Haltepunkte an den Stellen, an denen Sie die Ausführung pausieren möchten. Im folgenden Bild zeigt die Hervorhebung der Nummer 18, dass auf der Zeile ein Haltepunkt gesetzt ist.

![Ausschnitt des Entwicklertools-Debugger-Panels mit dem Haltepunkt bei Zeile 18 hervorgehoben.](source_code.png)

#### Beobachtungsausdrücke und Haltepunkte

Das rechte Fenster zeigt eine Liste der von Ihnen hinzugefügten Beobachtungsausdrücke und gesetzten Haltepunkte.

Im Bild zeigt der erste Abschnitt, **Beobachtungsausdrücke**, dass die Variable listItems hinzugefügt wurde. Sie können die Liste erweitern, um die Werte im Array anzuzeigen.

Der nächste Abschnitt, **Haltepunkte**, listet die gesetzten Haltepunkte auf der Seite auf. In example.js wurde ein Haltepunkt in der Anweisung `listItems.push(inputNewItem.value);` gesetzt.

Die letzten beiden Abschnitte erscheinen nur, wenn der Code ausgeführt wird.

Der Abschnitt **Call-Stack** zeigt Ihnen, welcher Code ausgeführt wurde, um zur aktuellen Zeile zu gelangen. Sie können sehen, dass sich der Code in der Funktion befindet, die einen Mausklick behandelt, und dass der Code derzeit an dem Haltepunkt pausiert ist.

Der letzte Abschnitt, **Bereiche**, zeigt, welche Werte von verschiedenen Punkten innerhalb Ihres Codes sichtbar sind. Zum Beispiel können Sie im Bild unten die im addItemClick-Funktion verfügbaren Objekte sehen.

![Ausschnitt des Quellfensters des Debugger-Tabs der Entwicklertools. Im Call-Stack zeigt es die Funktion an, die in Zeile 18 aufgerufen wurde, und hebt hervor, dass in dieser Zeile ein Haltepunkt gesetzt ist und zeigt den Bereich.](watch_items.png)

### Mehr erfahren

Erfahren Sie mehr über den JavaScript-Debugger in verschiedenen Browsern:

- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html))
- [Chrome Debugger](https://developer.chrome.com/docs/devtools/javascript/) (Operas und Edges Debugger ist derselbe)
- [Safari Quellen-Tab](https://webkit.org/web-inspector/sources-tab/)

## Die JavaScript-Konsole

Die JavaScript-Konsole ist ein unglaublich nützliches Tool zum Debuggen von JavaScript, das nicht wie erwartet funktioniert. Sie ermöglicht es Ihnen, JavaScript-Zeilen gegen die aktuell im Browser geladene Seite auszuführen und meldet die Fehler, auf die der Browser beim Versuch, Ihren Code auszuführen, stößt.

Um die Konsole in einem beliebigen Browser zu öffnen, öffnen Sie die Entwicklertools und wählen Sie den **Konsole**-Tab. Dies gibt Ihnen ein Fenster wie das Folgende:

![Der Konsole-Tab der Entwicklertools. Zwei JavaScript-Funktionen wurden in der Konsole ausgeführt. Der Benutzer hat Funktionen eingegeben, und die Konsole hat die Rückgabewerte angezeigt.](console_only.png)

Um zu sehen, was passiert, versuchen Sie, die folgenden Code-Schnipsel nacheinander in die Konsole einzugeben (und dann die Eingabetaste zu drücken):

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

- [Firefox Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [Chrome JavaScript-Konsole](https://developer.chrome.com/docs/devtools/console/) (Operas und Edges Konsole ist dieselbe)
- [Safari Console Objekt-API](https://webkit.org/web-inspector/console-object-api/) und [Console-Befehlszeilen-API](https://webkit.org/web-inspector/console-command-line-api/)

## Siehe auch

- [Debugging von HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [Debugging von CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS)
