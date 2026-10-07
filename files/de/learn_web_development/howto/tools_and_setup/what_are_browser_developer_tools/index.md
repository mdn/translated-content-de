---
title: Was sind Browser-Entwicklerwerkzeuge?
slug: Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: 306f0d17c10c4bfa8179b81fe676102ea0b0b6fa
---

Jeder moderne Webbrowser enthält eine leistungsfähige Sammlung von Entwicklerwerkzeugen. Mit ihnen können Sie unter anderem das aktuell geladene HTML, CSS und JavaScript untersuchen sowie sehen, welche Ressourcen die Seite angefordert hat und wie lange deren Laden gedauert hat. Dieser Artikel erklärt, wie Sie die grundlegenden Funktionen der Entwicklerwerkzeuge Ihres Browsers verwenden.

> [!NOTE]
> Bevor Sie die folgenden Beispiele ausprobieren, öffnen Sie die [Beispielwebsite für Anfänger](https://mdn.github.io/beginner-html-site-scripted/), die wir in der Artikelreihe [Erste Schritte mit dem Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) erstellt haben. Lassen Sie die Seite geöffnet, während Sie die folgenden Schritte ausführen.

## So öffnen Sie die Entwicklerwerkzeuge in Ihrem Browser

Die Entwicklerwerkzeuge werden in einem Teilfenster Ihres Browsers angezeigt. Je nach Browser sieht es ungefähr so aus:

![Screenshot eines Browsers mit geöffneten Entwicklerwerkzeugen. Die Webseite wird in der oberen Hälfte des Browsers angezeigt, die Entwicklerwerkzeuge nehmen die untere Hälfte ein. In den Entwicklerwerkzeugen sind drei Bereiche geöffnet: HTML mit ausgewähltem body-Element, ein CSS-Bereich mit Stilblöcken für das hervorgehobene body-Element und ein Bereich mit berechneten Stilen, der alle vom Autor definierten Stile anzeigt; das Kontrollkästchen für Browserstile ist nicht aktiviert.](devtools_63_inspector.png)

Es gibt drei Möglichkeiten, sie zu öffnen:

- **_Tastatur:_**
  - **Windows:** <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> oder <kbd>F12</kbd>
  - **macOS:** <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>

- **_Menüleiste:_**
  - **Firefox:** _Menü (☰) ➤ Weitere Werkzeuge ➤ Web-Entwicklerwerkzeuge_
  - **Chrome:** _Weitere Tools ➤ Entwicklertools_
  - **Opera:** _Entwickler ➤ Entwicklerwerkzeuge_
  - **Safari:** _Entwickler ➤ Web-Inspektor einblenden._

    > [!NOTE]
    > Die Entwicklerwerkzeuge von Safari sind standardmäßig nicht aktiviert.
    > Um sie zu aktivieren, gehen Sie zu _Safari ➤ Einstellungen ➤ Erweitert_ und aktivieren Sie das Kontrollkästchen _Menü „Entwickler“ in der Menüleiste anzeigen_ oder _Funktionen für Webentwickler aktivieren_.

- **_Kontextmenü:_** Halten Sie ein Element auf einer Webseite gedrückt oder klicken Sie mit der rechten Maustaste darauf (auf dem Mac: Ctrl-Klick) und wählen Sie im angezeigten Kontextmenü _Element untersuchen_. (_Ein zusätzlicher Vorteil:_ Bei dieser Methode wird der Code des angeklickten Elements sofort hervorgehoben.)

![Das Firefox-Logo als DOM-Element auf einer Beispielwebsite mit geöffnetem Kontextmenü. Ein Kontextmenü erscheint, wenn mit der rechten Maustaste auf ein Element der Webseite geklickt wird. Der letzte Menüeintrag lautet „Element untersuchen“.](inspector_context.png)

## Der Inspektor: DOM-Explorer und CSS-Editor

Die Entwicklerwerkzeuge öffnen sich normalerweise standardmäßig mit dem Inspektor, der ungefähr wie im folgenden Screenshot aussieht. Dieses Werkzeug zeigt, wie das HTML Ihrer Seite zur Laufzeit aussieht und welches CSS auf die einzelnen Elemente der Seite angewendet wird. Sie können damit auch HTML und CSS unmittelbar ändern und die Auswirkungen Ihrer Änderungen live im Ansichtsbereich des Browsers sehen.

![Eine Testwebsite ist in einem Browser-Tab geöffnet. Das Teilfenster mit den Entwicklerwerkzeugen ist geöffnet und enthält mehrere Tabs. Einer davon ist der Inspektor. Der Inspektor-Tab zeigt den HTML-Code der Website. Im HTML-Code ist ein image-Tag ausgewählt. Dadurch wird das Bild, das dem ausgewählten Tag entspricht, auf der Website hervorgehoben.](inspector_highlighted.png)

Wenn Sie den Inspektor _nicht_ sehen:

- **Firefox:** Wählen Sie den Tab **Inspektor**.
- **Andere Browser:** Wählen Sie den Tab **Elemente**.

### Den DOM-Inspektor erkunden

Klicken Sie zunächst im DOM-Inspektor mit der rechten Maustaste auf ein HTML-Element (oder verwenden Sie einen Ctrl-Klick) und sehen Sie sich das Kontextmenü an. Die verfügbaren Menüoptionen unterscheiden sich je nach Browser, die wichtigsten sind jedoch weitgehend gleich:

![Das Teilfenster mit den Entwicklerwerkzeugen des Browsers ist geöffnet. Der Inspektor-Tab ist ausgewählt. Im HTML-Code des Inspektors wird mit der rechten Maustaste auf ein link-Element geklickt. Ein Kontextmenü erscheint. Die verfügbaren Menüoptionen unterscheiden sich je nach Browser, die wichtigsten sind jedoch weitgehend gleich.](dom_inspector.png)

- **Knoten löschen** (manchmal _Element löschen_). Löscht das aktuelle Element.
- **Als HTML bearbeiten** (manchmal _Attribut hinzufügen_/_Text bearbeiten_). Ermöglicht es Ihnen, das HTML zu ändern und die Ergebnisse sofort zu sehen. Das ist besonders nützlich beim Debuggen und Testen.
- **:hover/:active/:focus**. Erzwingt die Aktivierung von Elementzuständen, damit Sie sehen können, wie die jeweiligen Stile aussehen würden.
- **Kopieren/Als HTML kopieren**. Kopiert das aktuell ausgewählte HTML.
- In einigen Browsern stehen auch _CSS-Pfad kopieren_ und _XPath kopieren_ zur Verfügung. Damit können Sie den CSS-Selektor oder den XPath-Ausdruck kopieren, der das aktuelle HTML-Element auswählt.

Versuchen Sie nun, etwas in Ihrem DOM zu bearbeiten. Doppelklicken Sie auf ein Element oder klicken Sie mit der rechten Maustaste darauf und wählen Sie im Kontextmenü _Als HTML bearbeiten_. Sie können beliebige Änderungen vornehmen, diese aber nicht speichern.

### Den CSS-Editor erkunden

Standardmäßig zeigt der CSS-Editor die CSS-Regeln an, die auf das aktuell ausgewählte Element angewendet werden:

![Ausschnitt aus dem CSS-Bereich und dem Layout-Bereich neben dem HTML-Editor in den Browser-Entwicklerwerkzeugen. Standardmäßig zeigt der CSS-Editor die CSS-Regeln an, die auf das aktuell im HTML-Editor ausgewählte Element angewendet werden. Der Layout-Bereich zeigt die Eigenschaften des Boxmodells für das ausgewählte Element.](css_inspector.png)

Die folgenden Funktionen sind besonders praktisch:

- Die auf das aktuelle Element angewendeten Regeln werden von der höchsten zur niedrigsten Spezifität angezeigt.
- Klicken Sie auf die Kontrollkästchen neben den einzelnen Deklarationen, um zu sehen, was passieren würde, wenn Sie sie entfernen.
- Klicken Sie auf den kleinen Pfeil neben einer Kurzschreibweisen-Eigenschaft, um die entsprechenden Einzeleigenschaften anzuzeigen.
- Klicken Sie auf einen Eigenschaftsnamen oder -wert, um ein Textfeld zu öffnen. Dort können Sie einen neuen Wert eingeben und die Stiländerung direkt in der Vorschau sehen.
- Neben jeder Regel stehen der Dateiname und die Zeilennummer, an der sie definiert ist. Wenn Sie darauf klicken, zeigen die Entwicklerwerkzeuge die Regel in einer eigenen Ansicht an, in der sie sich normalerweise bearbeiten und speichern lässt.
- Sie können auch auf die schließende geschweifte Klammer einer Regel klicken, um in einer neuen Zeile ein Textfeld zu öffnen. Dort können Sie eine völlig neue Deklaration für Ihre Seite schreiben.

Oben in der CSS-Ansicht sehen Sie mehrere anklickbare Tabs:

- _Berechnet_: Zeigt die berechneten Stile für das aktuell ausgewählte Element an (die endgültigen, normalisierten Werte, die der Browser anwendet).
- _Layout_: Zeigt Details zu den CSS-Layoutmodi [Grid](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) an, sofern das untersuchte Element sie verwendet.
- _Schriftarten_: In Firefox und Safari zeigt der Tab _Schriftarten_ die auf das aktuelle Element angewendeten Schriftarten an.

Die _Boxmodell_-Ansicht stellt das Boxmodell des aktuellen Elements grafisch dar. So können Sie auf einen Blick erkennen, welche Innenabstände, Rahmen und Außenabstände angewendet werden und wie groß der Inhalt ist. In Firefox befindet sich diese Ansicht im Tab _Layout_, in anderen Browsern im Tab _Berechnet_.

In einigen Browsern können Sie in diesem Bereich auch JavaScript-Details zum ausgewählten Element ansehen. In Safari sind diese im Tab _Node_ zusammengefasst, während sie in Chrome, Opera und Edge auf separate Tabs verteilt sind.

- _Properties_: Die {{Glossary("Property/JavaScript", "Eigenschaften")}} des Elementobjekts.
- _Event Listeners_: Die mit dem Element verknüpften [Ereignisse](/de/docs/Web/API/Event).

### Weitere Informationen

Weitere Informationen zum Inspektor in verschiedenen Browsern:

- [Seiteninspektor von Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [DOM-Inspektor von Chrome](https://developer.chrome.com/docs/devtools/dom/) (der Inspektor von Opera und Edge ist identisch)
- [Elements-Tab von Safari](https://webkit.org/web-inspector/elements-tab/)

## Der JavaScript-Debugger

Mit dem JavaScript-Debugger können Sie die Werte von Variablen beobachten und Breakpoints setzen. Das sind Stellen in Ihrem Code, an denen Sie die Ausführung anhalten können, um Probleme zu finden, die verhindern, dass Ihr Code korrekt ausgeführt wird.

![Eine Testwebsite, die lokal über Port 8080 bereitgestellt wird. Das Teilfenster mit den Entwicklerwerkzeugen ist geöffnet. Der Tab des JavaScript-Debuggers ist ausgewählt. Mit ihm lassen sich die Werte von Variablen beobachten und Breakpoints setzen. Im Quellenbereich ist eine Datei namens „example.js“ ausgewählt. In Zeile 18 der Datei ist ein Breakpoint gesetzt.](firefox_debugger.png)

So öffnen Sie den Debugger:

- **Firefox:** Öffnen Sie die Entwicklerwerkzeuge und wählen Sie den Tab **Debugger**.
- **Andere Browser:** Öffnen Sie die Entwicklerwerkzeuge und wählen Sie den Tab **Sources**.

### Den Debugger erkunden

Der JavaScript-Debugger ist in jedem Browser in drei Bereiche unterteilt. Deren Anordnung unterscheidet sich je nach Browser; dieser Leitfaden verwendet Firefox als Referenz.

#### Dateiliste

Der erste Bereich links enthält eine Liste der Dateien, die mit der Seite verknüpft sind, die Sie debuggen. Wählen Sie daraus die Datei aus, mit der Sie arbeiten möchten. Klicken Sie auf eine Datei, um sie auszuwählen und ihren Inhalt im mittleren Bereich des Debuggers anzuzeigen.

![Ausschnitt aus dem Quellenbereich des Debugger-Tabs in den Browser-Entwicklerwerkzeugen. Die Dateien der Seite, die gerade debuggt wird, sind unter einem Ordner sichtbar, dessen Name der URL der Website im aktuellen Browser-Tab entspricht.](file_list.png)

#### Quellcode

Setzen Sie Breakpoints an den Stellen, an denen Sie die Ausführung anhalten möchten. Im folgenden Bild zeigt die Hervorhebung der Zahl 18, dass in dieser Zeile ein Breakpoint gesetzt ist.

![Ausschnitt aus dem Debugger-Bereich der Entwicklerwerkzeuge, in dem der Breakpoint in Zeile 18 hervorgehoben ist.](source_code.png)

#### Überwachungsausdrücke und Breakpoints

Der rechte Bereich zeigt eine Liste der Überwachungsausdrücke, die Sie hinzugefügt haben, und der Breakpoints, die Sie gesetzt haben.

Im Bild zeigt der erste Abschnitt, **Überwachungsausdrücke**, dass die Variable `listItems` hinzugefügt wurde. Sie können die Liste aufklappen, um die Werte im Array anzuzeigen.

Der nächste Abschnitt, **Breakpoints**, listet die auf der Seite gesetzten Breakpoints auf. In example.js wurde ein Breakpoint für die Anweisung `listItems.push(inputNewItem.value);` gesetzt.

Die letzten beiden Abschnitte erscheinen nur, während der Code ausgeführt wird.

Der Abschnitt **Aufrufstapel** zeigt, welcher Code ausgeführt wurde, um zur aktuellen Zeile zu gelangen. Sie können sehen, dass sich der Code in der Funktion befindet, die einen Mausklick verarbeitet, und dass er momentan am Breakpoint angehalten ist.

Der letzte Abschnitt, **Gültigkeitsbereiche**, zeigt, welche Werte an verschiedenen Stellen Ihres Codes sichtbar sind. Im folgenden Bild sehen Sie beispielsweise die Objekte, die dem Code in der Funktion addItemClick zur Verfügung stehen.

![Ausschnitt aus dem Quellenbereich des Debugger-Tabs in den Browser-Entwicklerwerkzeugen. Der Aufrufstapel zeigt die in Zeile 18 aufgerufene Funktion, hebt den dort gesetzten Breakpoint hervor und zeigt den Gültigkeitsbereich an.](watch_items.png)

### Weitere Informationen

Weitere Informationen zum JavaScript-Debugger in verschiedenen Browsern:

- [JavaScript-Debugger von Firefox](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
- [Debugger von Chrome](https://developer.chrome.com/docs/devtools/javascript/) (der Debugger von Opera und Edge ist identisch)
- [Sources-Tab von Safari](https://webkit.org/web-inspector/sources-tab/)

## Die JavaScript-Konsole

Die JavaScript-Konsole ist ein äußerst nützliches Werkzeug, um JavaScript zu debuggen, das nicht wie erwartet funktioniert. Sie können damit JavaScript-Anweisungen für die aktuell im Browser geladene Seite ausführen. Außerdem zeigt sie Fehler an, die auftreten, wenn der Browser versucht, Ihren Code auszuführen.

Um die Konsole in einem beliebigen Browser zu öffnen, öffnen Sie die Entwicklerwerkzeuge und wählen Sie den Tab **Konsole**. Daraufhin sehen Sie ein Fenster wie dieses:

![Der Konsolen-Tab der Browser-Entwicklerwerkzeuge. In der Konsole wurden zwei JavaScript-Funktionen ausgeführt. Der Benutzer hat die Funktionen eingegeben und die Konsole hat die Rückgabewerte angezeigt.](console_only.png)

Um zu sehen, was passiert, geben Sie die folgenden Codeausschnitte nacheinander in die Konsole ein und drücken Sie jeweils die Eingabetaste:

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

Geben Sie nun die folgenden fehlerhaften Versionen des Codes ein und sehen Sie sich an, was passiert.

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

Sie werden nun sehen, welche Arten von Fehlern der Browser meldet. Diese Fehlermeldungen sind oft recht kryptisch, aber die Probleme sollten sich dennoch relativ leicht herausfinden lassen!

### Weitere Informationen

Weitere Informationen zur JavaScript-Konsole in verschiedenen Browsern:

- [Web-Konsole von Firefox](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [JavaScript-Konsole von Chrome](https://developer.chrome.com/docs/devtools/console/) (die Konsole von Opera und Edge ist identisch)
- [Console Object API von Safari](https://webkit.org/web-inspector/console-object-api/) und [Console Command Line API](https://webkit.org/web-inspector/console-command-line-api/)

## Siehe auch

- [HTML debuggen](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
- [CSS debuggen](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
