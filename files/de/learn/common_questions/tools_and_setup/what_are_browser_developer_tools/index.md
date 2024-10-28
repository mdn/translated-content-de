---
title: Was sind Browser-Entwicklertools?
slug: Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: 6d0cd4f3fb3da8536bb733c00df211ead8884395
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Jeder moderne Webbrowser enthält eine leistungsstarke Suite von Entwicklertools. Diese Tools bieten eine Reihe von Funktionen, vom Untersuchen des aktuell geladenen HTML, CSS und JavaScript bis hin zum Anzeigen der angeforderten Assets der Seite und wie lange deren Ladezeit ist. Dieser Artikel erklärt, wie Sie die Grundfunktionen der Entwicklertools Ihres Browsers verwenden.

> [!NOTE]
> Bevor Sie die untenstehenden Beispiele durchgehen, öffnen Sie die [Beispielseite für Anfänger](https://mdn.github.io/beginner-html-site-scripted/), die wir während der Artikelserie [Erste Schritte mit dem Web](/de/docs/Learn/Getting_started_with_the_web) gebaut haben. Diese Seite sollte geöffnet sein, während Sie die folgenden Schritte ausführen.

## Anleitung zum Öffnen der Entwicklertools in Ihrem Browser

Die Entwicklertools befinden sich in einem Unterfenster in Ihrem Browser, das je nach verwendetem Browser ungefähr so aussieht:

![Screenshot eines Browsers mit geöffneten Entwicklertools. Die Webseite wird in der oberen Hälfte des Browsers angezeigt, die Entwicklertools beanspruchen die untere Hälfte. Es sind drei Panels in den Entwicklertools geöffnet: HTML mit ausgewähltem body-Element, ein CSS-Panel, das Styleblöcke für das hervorgehobene body-Element zeigt, und ein berechnetes Styles-Panel, das alle Autorenstile zeigt; das Browser-Stile-Checkbox ist nicht markiert.](devtools_63_inspector.png)

Wie öffnen Sie es? Es gibt drei Möglichkeiten:

- **_Tastatur:_**

  - **Windows:** _<kbd>Strg</kbd> + <kbd>Umschalt</kbd> + <kbd>I</kbd>_ oder <kbd>F12</kbd>

  - **macOS:** _<kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>_

- **_Menüleiste:_**

  - **Firefox:** _Menü (☰) ➤ Weitere Werkzeuge ➤ Webentwicklung_
  - **Chrome:** _Weitere Werkzeuge ➤ Entwicklertools_
  - **Opera:** _Entwickler ➤ Entwicklertools_
  - **Safari:** _Entwickeln ➤ Web-Inspektor anzeigen._

    > [!NOTE]
    > Die Safari-Entwicklertools sind standardmäßig nicht aktiviert.
    > Um sie zu aktivieren, gehen Sie zu _Safari ➤ Einstellungen ➤ Erweitert_ und aktivieren Sie die Checkbox _Entwicklermenü in der Menüleiste anzeigen_ oder _Features für Webentwickler aktivieren_.

- **_Kontextmenü:_** Drücken und halten Sie ein Element auf einer Webseite (Strg-Klick auf dem Mac) und wählen Sie _Element untersuchen_ aus dem erscheinenden Kontextmenü. (_Ein zusätzlicher Vorteil:_ Diese Methode hebt sofort den Code des Elements hervor, das Sie angeklickt haben.)

![Das Firefox-Logo als DOM-Element in einer Beispielwebsite mit einem Kontextmenü. Ein Kontextmenü erscheint, wenn ein Element der Webseite rechtsgeklickt wird. Der letzte Menüpunkt ist 'Element untersuchen'.](inspector_context.png)

## Der Inspektor: DOM-Explorer und CSS-Editor

Die Entwicklertools öffnen sich standardmäßig im Inspektor, der in etwa wie der folgende Screenshot aussieht. Dieses Tool zeigt, wie das HTML Ihrer Seite zur Laufzeit aussieht und welcher CSS auf jedes auf der Seite befindliche Element angewendet wird. Es ermöglicht Ihnen auch, HTML und CSS sofort zu ändern und die Ergebnisse Ihrer Änderungen live im Browser-Viewport zu sehen.

![Eine Testwebsite ist in einem Browser-Tab geöffnet. Das Unterfenster der Browserentwicklertools ist offen. Die Entwicklertools haben mehrere Tabs. Der Inspektor ist einer dieser Tabs. Der Inspektor-Tab zeigt den HTML-Code der Website. Ein Bild-Tag ist aus dem HTML-Code ausgewählt. Dies führt zur Hervorhebung des Bildes, das dem ausgewählten Tag in der Website entspricht.](inspector_highlighted.png)

Wenn Sie den Inspektor _nicht_ sehen,

- **Firefox:** Wählen Sie den **Inspektor**-Tab aus.
- **Andere Browser:** Wählen Sie den **Elemente**-Tab aus.

### Den DOM-Inspektor erkunden

Beginnen Sie, indem Sie mit der rechten Maustaste (Strg-Klick) auf ein HTML-Element im DOM-Inspektor klicken und das Kontextmenü ansehen. Die verfügbaren Menüoptionen variieren je nach Browser, aber die wichtigsten sind meistens gleich:

![Das Unterfenster der Browserentwicklertools ist offen. Der Inspektor-Tab ist ausgewählt. Ein Link-Element wird aus dem HTML-Code im Inspektor-Tab mit Rechtsklick ausgewählt. Es erscheint ein Kontextmenü. Die verfügbaren Menüoptionen variieren je nach Browser, aber die wichtigsten sind meistens gleich.](dom_inspector.png)

- **Knoten löschen** (manchmal _Element löschen_). Löscht das aktuelle Element.
- **Als HTML bearbeiten** (manchmal _Attribut hinzufügen_/_Text bearbeiten_). Ermöglicht das Ändern des HTML und das Anzeigen der Ergebnisse in Echtzeit. Sehr nützlich für Debugging und Tests.
- **:hover/:active/:focus**. Erzwingt das Umschalten der Elementzustände, sodass Sie sehen können, wie ihr Stil aussehen würde.
- **Kopieren/Als HTML kopieren**. Kopiert das derzeit ausgewählte HTML.
- Einige Browser bieten auch _CSS-Pfad kopieren_ und _XPath kopieren_ an, um den CSS-Selektor oder den XPath-Ausdruck zu kopieren, der das aktuelle HTML-Element auswählen würde.

Versuchen Sie nun, einige Ihrer DOM-Elemente zu bearbeiten. Doppelklicken Sie auf ein Element oder klicken Sie mit der rechten Maustaste darauf und wählen Sie _Als HTML bearbeiten_ aus dem Kontextmenü. Sie können alle Änderungen vornehmen, die Sie möchten, aber Sie können Ihre Änderungen nicht speichern.

### Den CSS-Editor erkunden

Der CSS-Editor zeigt standardmäßig die CSS-Regeln an, die auf das derzeit ausgewählte Element angewendet werden:

![Ausschnitt des CSS-Panels und des Layout-Panels, das neben dem HTML-Editor in den Browserentwicklertools zu sehen ist. Der CSS-Editor zeigt standardmäßig die CSS-Regeln an, die auf das derzeit ausgewählte Element im HTML-Editor angewendet werden. Das Layout-Panel zeigt die Boxmodell-Eigenschaften des ausgewählten Elements.](css_inspector.png)

Diese Funktionen sind besonders praktisch:

- Die auf das aktuelle Element angewendeten Regeln werden in der Reihenfolge von am spezifischsten bis am wenigsten spezifisch angezeigt.
- Klicken Sie auf die Checkboxen neben jeder Deklaration, um zu sehen, was passieren würde, wenn Sie die Deklaration entfernen.
- Klicken Sie auf den kleinen Pfeil neben jeder Kurzform-Eigenschaft, um die Langformäquivalente der Eigenschaft anzuzeigen.
- Klicken Sie auf einen Eigenschaftsnamen oder -wert, um ein Textfeld zu öffnen, in das Sie einen neuen Wert eingeben können, um eine Live-Vorschau einer Stiländerung zu erhalten.
- Neben jeder Regel befindet sich der Dateiname und die Zeilennummer, in der die Regel definiert ist. Ein Klick auf diese Regel bewirkt, dass die Entwicklertools zu dieser Regel in ihrer eigenen Ansicht springen, in der sie in der Regel bearbeitet und gespeichert werden kann.
- Sie können auch auf die schließende geschweifte Klammer einer Regel klicken, um ein Textfeld in einer neuen Zeile zu öffnen, in der Sie eine völlig neue Deklaration für Ihre Seite schreiben können.

Sie werden eine Reihe von anklickbaren Tabs oben im CSS-Viewer bemerken:

- _Berechnet_: Dies zeigt die berechneten Stile für das derzeit ausgewählte Element an (die endgültigen, normalisierten Werte, die der Browser anwendet).
- _Layout_: Dies zeigt die Details für die CSS-[Grid](/de/docs/Web/CSS/CSS_grid_layout)- und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)-Layoutmodi an, wenn das Element, das Sie untersuchen, diese verwendet.
- _Schriftarten_: In Firefox und Safari zeigt der _Schriftarten_-Tab die auf das aktuelle Element angewendeten Schriftarten.

Die _Boxmodell_-Ansicht stellt das Boxmodell des aktuellen Elements visuell dar, sodass Sie auf einen Blick sehen können, welches Padding, welche Ränder und welcher Abstand darauf angewendet werden und wie groß dessen Inhalt ist. In Firefox befindet sich dies im _Layout_-Tab und in anderen Browsern im _Berechnet_-Tab.

In einigen Browsern können im ausgewählten Element auch die JavaScript-Details in diesem Panel angezeigt werden. In Safari sind diese unter dem _Node_-Tab zusammengefasst, in Chrome, Opera und Edge jedoch in separaten Tabs.

- _Eigenschaften_: Die {{Glossary("Property_(JavaScript", "Eigenschaften")}}) des Elementobjekts.
- _Ereignislistener_: Die [Ereignisse](/de/docs/Web/API/Event), die mit dem Element verbunden sind.

### Erfahren Sie mehr

Erfahren Sie mehr über den Inspektor in verschiedenen Browsern:

- [Firefox Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [Chrome DOM Inspector](https://developer.chrome.com/docs/devtools/dom/) (Das Inspektor von Opera und Edge ist gleich)
- [Safari Elements Tab](https://webkit.org/web-inspector/elements-tab/)

## Der JavaScript-Debugger

Der JavaScript-Debugger ermöglicht es Ihnen, den Wert von Variablen zu überwachen und Haltepunkte zu setzen, Orte in Ihrem Code, an denen Sie die Ausführung pausieren und die Probleme identifizieren möchten, die die ordnungsgemäße Ausführung Ihres Codes verhindern.

![Eine Testwebsite, die lokal auf Port 8080 ausgeliefert wird. Das Entwicklerwerkzeuge-Unterfenster ist offen. Der JavaScript-Debugger-Tab ist ausgewählt. Er ermöglicht es Ihnen, den Wert von Variablen zu überwachen und Haltepunkte zu setzen. Eine Datei mit dem Namen 'example.js' ist im Quelltext-Paneel ausgewählt. Ein Haltepunkt ist bei Zeilennummer 18 der Datei gesetzt.](firefox_debugger.png)

Um zum Debugger zu gelangen:

**Firefox**: Öffnen Sie die Entwicklertools und wählen Sie den **Debugger**-Tab.
**Andere Browser**: Öffnen Sie die Entwicklertools und wählen Sie den **Quellen**-Tab.

### Den Debugger erkunden

Der JavaScript-Debugger jedes Browsers ist in drei Bereiche unterteilt. Das Layout dieser Bereiche unterscheidet sich je nach verwendeten Browser ein wenig; dieser Leitfaden verwendet Firefox als Referenz.

#### Dateiliste

Der erste Bereich auf der linken Seite enthält die Liste der Dateien, die mit der von Ihnen debuggenen Seite verbunden sind. Wählen Sie die Datei aus, mit der Sie arbeiten möchten. Klicken Sie auf eine Datei, um sie auszuwählen und ihren Inhalt im mittleren Bereich des Debuggers anzuzeigen.

![Ausschnitt des Quelltext-Panels des Debugger-Tabs in den Browser-Entwicklerwerkzeugen. Die zur aktuellen Seite gehörenden Dateien, die Sie debuggen, sind unter dem Ordner sichtbar, dessen Name dem URL der geöffneten Seite im aktuellen Browser-Tab entspricht.](file_list.png)

#### Quellcode

Setzen Sie Haltepunkte dort, wo Sie die Ausführung anhalten möchten. Im folgenden Bild zeigt das markierte Nummer 18, dass dort ein Haltepunkt gesetzt ist.

![Ausschnitt des Entwicklerwerkzeuge-Debugger-Panels mit hervorgehobenem Haltepunkt bei Zeile 18.](source_code.png)

#### Anzeigefelder für Überwachungen und Haltepunkte

Der rechte Bereich zeigt eine Liste der von Ihnen hinzugefügten Überwachungsausdrücke und der gesetzten Haltepunkte an.

Im Bild zeigt der erste Abschnitt, **Überwachungsausdrücke**, dass die `listItems`-Variable hinzugefügt wurde. Sie können die Liste erweitern, um die Werte im Array anzuzeigen.

Der nächste Abschnitt, **Haltepunkte**, listet die auf der Seite gesetzten Haltepunkte auf. In `example.js` wurde ein Haltepunkt bei der Anweisung `listItems.push(inputNewItem.value);` gesetzt.

Die letzten beiden Abschnitte erscheinen nur, wenn der Code ausgeführt wird.

Der Abschnitt **Aufruf-Stack** zeigt Ihnen, welcher Code ausgeführt wurde, um zur aktuellen Zeile zu gelangen. Sie können sehen, dass sich der Code in der Funktion befindet, die einen Mausklick verarbeitet, und dass der Code derzeit beim Haltepunkt angehalten ist.

Der letzte Abschnitt, **Geltungsbereiche**, zeigt, welche Werte von verschiedenen Punkten in Ihrem Code sichtbar sind. Zum Beispiel können Sie im Bild unten die Objekte sehen, die im `addItemClick`-Funktionsbereich zur Verfügung stehen.

![Ausschnitt des Quelltext-Panels des Debugger-Tabs in den Browser-Entwicklerwerkzeugen. Im Aufruf-Stack wird die bei Line 18 aufgerufene Funktion angezeigt, die den Haltepunkt bei dieser Zeile zeigt und den Geltungsbereich zeigt.](watch_items.png)

### Erfahren Sie mehr

Erfahren Sie mehr über den JavaScript-Debugger in verschiedenen Browsern:

- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
- [Chrome Debugger](https://developer.chrome.com/docs/devtools/javascript/) (Das Debugger von Opera und Edge ist gleich)
- [Safari Sources Tab](https://webkit.org/web-inspector/sources-tab/)

## Die JavaScript-Konsole

Die JavaScript-Konsole ist ein unglaublich nützliches Werkzeug für das Debuggen von JavaScript, das nicht wie erwartet funktioniert. Es ermöglicht Ihnen, JavaScript-Zeilen gegen die derzeit im Browser geladene Seite auszuführen und Meldungen über die bei der Ausführung Ihres Codes aufgetretenen Fehler anzuzeigen.

Um auf die Konsole in jedem Browser zuzugreifen, öffnen Sie die Entwicklertools und wählen Sie den **Konsole**-Tab. Dies gibt Ihnen ein Fenster wie das folgende:

![Der Konsole-Tab der Browser-Entwicklerwerkzeuge. Zwei JavaScript-Funktionen wurden in der Konsole ausgeführt. Der Benutzer gab Funktionen ein, und die Konsole zeigte die Rückgabewerte an.](console_only.png)

Um zu sehen, was passiert, versuchen Sie, die folgenden Code-Snippets nacheinander in die Konsole einzugeben (und dann die Eingabetaste zu drücken):

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

Versuchen Sie jetzt, die folgenden fehlerhaften Versionen des Codes einzugeben und schauen Sie, was passiert.

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

### Erfahren Sie mehr

Erfahren Sie mehr über die JavaScript-Konsole in verschiedenen Browsern:

- [Firefox Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [Chrome JavaScript Console](https://developer.chrome.com/docs/devtools/console/) (Die Konsole von Opera und Edge ist gleich)
- [Safari Console Object API](https://webkit.org/web-inspector/console-object-api/) und [Console Command Line API](https://webkit.org/web-inspector/console-command-line-api/)

## Siehe auch

- [Debugging HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [Debugging CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS)
