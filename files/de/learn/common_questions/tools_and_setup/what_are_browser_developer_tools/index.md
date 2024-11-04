---
title: Was sind Entwicklertools für Browser?
slug: Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: b7a7c441fa025458f2bf67d714c3303085e8258a
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Jeder moderne Webbrowser beinhaltet eine leistungsstarke Suite von Entwicklertools. Diese Werkzeuge erledigen eine Vielzahl von Aufgaben, von der Inspektion aktuell geladener HTML-, CSS- und JavaScript-Dateien bis hin zur Anzeige, welche Ressourcen die Seite angefordert hat und wie lange sie für das Laden benötigt haben. Dieser Artikel erklärt, wie Sie die grundlegenden Funktionen Ihrer Browser-Entwicklertools verwenden.

> [!NOTE]
> Bevor Sie die unten dargestellten Beispiele durchgehen, öffnen Sie die [Beispielseite für Anfänger](https://mdn.github.io/beginner-html-site-scripted/), die wir während der Artikelserie [Erste Schritte mit dem Web](/de/docs/Learn/Getting_started_with_the_web) erstellt haben. Diese sollte geöffnet sein, während Sie die folgenden Schritte durchführen.

## So öffnen Sie die Entwicklertools in Ihrem Browser

Die Entwicklertools befinden sich in einem Unterfenster Ihres Browsers, das je nach verwendetem Browser ungefähr so aussieht:

![Screenshot eines Browsers mit geöffneten Entwicklertools. Die Webseite wird im oberen Teil des Browsers angezeigt, die Entwicklertools nehmen die untere Hälfte ein. In den Entwicklertools sind drei Bereiche geöffnet: HTML, mit dem ausgewählten Body-Element, ein CSS-Bereich, der Style-Blöcke zeigt, die das hervorgehobene Body-Element ansprechen, und ein Bereich für berechnete Styles, der alle Autor-Styles anzeigt; das Kontrollkästchen "Browser-Styles" ist nicht aktiviert.](devtools_63_inspector.png)

Wie rufen Sie diese auf? Drei Möglichkeiten:

- **_Tastatur:_**

  - **Windows:** <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> oder <kbd>F12</kbd>
  - **macOS:** <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>

- **_Menüleiste:_**

  - **Firefox:** _Menü (☰) ➤ Weitere Werkzeuge ➤ Web-Entwickler-Werkzeuge_
  - **Chrome:** _Weitere Werkzeuge ➤ Entwicklertools_
  - **Opera:** _Entwickler ➤ Entwicklertools_
  - **Safari:** _Entwickeln ➤ Web-Inspektor anzeigen._

    > [!NOTE]
    > Die Entwicklerwerkzeuge von Safari sind standardmäßig nicht aktiviert.
    > Um sie zu aktivieren, gehen Sie zu _Safari ➤ Einstellungen ➤ Erweitert_ und aktivieren Sie das Kontrollkästchen _Menü "Entwickeln" in der Menüleiste anzeigen_ oder _Funktionen für Web-Entwickler aktivieren_.

- **_Kontextmenü:_** Drücken und halten (Rechtsklick) Sie auf ein Element auf einer Webseite (Strg-Klick auf dem Mac) und wählen Sie _Element untersuchen_ aus dem erscheinenden Kontextmenü. (_Ein zusätzlicher Vorteil:_ Diese Methode hebt sofort den Code des Elements hervor, auf das Sie rechtsgeklickt haben.)

![Das Firefox-Logo als DOM-Element auf einer Beispielwebsite mit einem angezeigten Kontextmenü. Ein Kontextmenü erscheint, wenn ein beliebiges Element auf der Webseite rechtsgeklickt wird. Der letzte Menüpunkt ist 'Element untersuchen'.](inspector_context.png)

## Der Inspektor: DOM-Explorer und CSS-Editor

Die Entwicklertools öffnen sich standardmäßig normalerweise zum Inspektor, der ähnlich wie der folgende Screenshot aussieht. Dieses Tool zeigt, wie das HTML auf Ihrer Seite zur Laufzeit aussieht sowie welches CSS auf jedes Element der Seite angewendet wird. Es ermöglicht auch, HTML und CSS sofort zu ändern und die Ergebnisse Ihrer Änderungen direkt im Browserfenster zu sehen.

![Eine Test-Website ist in einem Tab des Browsers geöffnet. Das Unterfenster der Entwicklertools ist geöffnet. Die Entwicklertools haben mehrere Tabs. Der Inspektor ist einer dieser Tabs. Der Inspektor-Tab zeigt den HTML-Code der Website an. Ein Bild-Tag ist aus dem HTML-Code ausgewählt. Dies führt dazu, dass das Bild, das dem ausgewählten Tag auf der Website entspricht, hervorgehoben wird.](inspector_highlighted.png)

Falls Sie den Inspektor _nicht_ sehen,

- **Firefox:** Wählen Sie den **Inspektor**-Tab.
- **Andere Browser:** Wählen Sie den **Elements**-Tab.

### Erforschen des DOM-Inspektors

Beginnen Sie damit, ein HTML-Element im DOM-Inspektor mit rechts zu klicken (Strg-Klick) und betrachten Sie das Kontextmenü. Die verfügbaren Menüoptionen variieren je nach Browser, aber die wichtigsten sind meist dieselben:

![Das Unterfenster der Entwicklerwerkzeuge ist geöffnet. Der Inspektor-Tab ist ausgewählt. Ein Linkelement wird aus dem HTML-Code im Inspektor-Tab mit einem Rechtsklick ausgewählt. Ein Kontextmenü erscheint. Die verfügbaren Menüoptionen variieren je nach Browser, aber die wichtigsten sind meist dieselben.](dom_inspector.png)

- **Delete Node** (manchmal _Delete Element_). Löscht das aktuelle Element.
- **Edit as HTML** (manchmal _Attribut hinzufügen_/_Text bearbeiten_). Ermöglicht es Ihnen, das HTML zu ändern und die Ergebnisse sofort zu sehen. Sehr nützlich zum Debuggen und Testen.
- **:hover/:active/:focus**. Erzwingt das Umschalten von Elementzuständen, damit Sie sehen können, wie deren Styling aussieht.
- **Copy/Copy as HTML**. Kopiert das aktuell ausgewählte HTML.
- Einige Browser bieten auch _Copy CSS Path_ und _Copy XPath_ an, um es Ihnen zu ermöglichen, den CSS-Selektor oder XPath-Ausdruck zu kopieren, der das aktuelle HTML-Element auswählt.

Versuchen Sie, einige Ihrer DOM-Inhalte jetzt zu bearbeiten. Doppelklicken Sie auf ein Element oder klicken Sie mit der rechten Maustaste darauf und wählen Sie _Edit as HTML_ aus dem Kontextmenü. Sie können beliebige Änderungen vornehmen, aber Sie können Ihre Änderungen nicht speichern.

### Erforschen des CSS-Editors

Standardmäßig zeigt der CSS-Editor die CSS-Regeln an, die auf das aktuell ausgewählte Element angewendet werden:

![Ausschnitt der CSS- und Layout-Panels, die neben dem HTML-Editor in den Entwicklertools des Browsers zu sehen sind. Standardmäßig zeigt der CSS-Editor die CSS-Regeln an, die auf das aktuell ausgewählte Element im HTML-Editor angewendet werden. Das Layout-Panel zeigt die Boxmodell-Eigenschaften des ausgewählten Elements.](css_inspector.png)

Diese Funktionen sind besonders nützlich:

- Die Regeln, die auf das aktuelle Element angewendet werden, werden in der Reihenfolge von am meisten bis am wenigsten spezifisch angezeigt.
- Aktivieren Sie die Kontrollkästchen neben jeder Deklaration, um zu sehen, was passieren würde, wenn Sie die Deklaration entfernen.
- Klicken Sie auf den kleinen Pfeil neben jeder Kurzform-Eigenschaft, um die Langform-Entsprechungen der Eigenschaft anzuzeigen.
- Klicken Sie auf einen Eigenschaftsnamen oder -wert, um ein Textfeld aufzurufen, in das Sie einen neuen Wert eingeben können, um eine Live-Vorschau einer Stiländerung zu erhalten.
- Neben jeder Regel befinden sich der Dateiname und die Zeilennummer, in denen die Regel definiert ist. Wenn Sie auf diese Regel klicken, springt das Entwicklertool, um sie in einer eigenen Ansicht anzuzeigen, in der sie in der Regel bearbeitet und gespeichert werden kann.
- Sie können auch auf die geschweifte Klammer einer Regel klicken, um auf einer neuen Zeile ein Textfeld aufzurufen, in das Sie eine völlig neue Deklaration für Ihre Seite schreiben können.

Oben im CSS-Viewer sehen Sie eine Reihe anklickbarer Tabs:

- _Computed_: Dies zeigt die berechneten Styles für das aktuell ausgewählte Element (die endgültigen, normierten Werte an, die der Browser anwendet).
- _Layout_: Dies zeigt die Details für CSS-[grid](/de/docs/Web/CSS/CSS_grid_layout) und [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) Layout-Modi, falls das zu inspizierende Element diese verwendet.
- _Fonts_: In Firefox und Safari zeigt der Tab _Fonts_ die auf das aktuelle Element angewendeten Schriftarten an.

Die _box model_-Ansicht stellt das Boxmodell des aktuellen Elements visuell dar, sodass Sie auf einen Blick erkennen können, welches Padding, welche Rahmen und welche Margen darauf angewendet werden und wie groß deren Inhalt ist. In Firefox befindet sich dies im _Layout_-Tab, in anderen Browsern im _Computed_-Tab.

In einigen Browsern können im selben Panel auch die JavaScript-Details des ausgewählten Elements angezeigt werden. In Safari sind diese unter dem _Node_-Tab zusammengefasst, in Chrome, Opera und Edge jedoch in separaten Tabs.

- _Properties_: Die {{Glossary("Property_(JavaScript", "Properties")}}) des Elemente-Objekts.
- _Event Listeners_: Die [Ereignisse](/de/docs/Web/API/Event), die mit dem Element verbunden sind.

### Weitere Informationen

Erfahren Sie mehr über den Inspektor in verschiedenen Browsern:

- [Firefox Page inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [Chrome DOM inspector](https://developer.chrome.com/docs/devtools/dom/) (Der Inspektor von Opera und Edge ist derselbe)
- [Safari Elements tab](https://webkit.org/web-inspector/elements-tab/)

## Der JavaScript-Debugger

Der JavaScript-Debugger ermöglicht es Ihnen, den Wert von Variablen zu beobachten und Breakpoints zu setzen, also Stellen in Ihrem Code, an denen Sie die Ausführung anhalten möchten, um Probleme zu identifizieren, die verhindern, dass Ihr Code ordnungsgemäß ausgeführt wird.

![Eine Test-Website, die lokal auf Port 8080 bereitgestellt wird. Das Unterfenster der Entwicklertools ist geöffnet. Der JavaScript-Debugger-Tab ist ausgewählt. Er ermöglicht es Ihnen, den Wert von Variablen zu beobachten und Breakpoints zu setzen. Eine Datei mit dem Namen 'example.js' ist im Quellfenster ausgewählt. Ein Breakpoint ist bei Zeile 18 der Datei gesetzt.](firefox_debugger.png)

Um zum Debugger zu gelangen:

**Firefox**: Öffnen Sie die Entwicklertools und wählen Sie den **Debugger**-Tab.
**Andere Browser**: Öffnen Sie die Entwicklertools und wählen Sie den **Sources**-Tab.

### Erforschen des Debuggers

Jeder Browser-Debugger für JavaScript ist in drei Bereiche unterteilt. Das Layout dieser Bereiche ist je nach verwendetem Browser etwas anders; dieser Leitfaden verwendet Firefox als Referenz.

#### Dateiliste

Der erste Bereich links enthält die Liste der Dateien, die mit der Seite verbunden sind, die Sie debuggen. Wählen Sie die Datei aus, mit der Sie arbeiten möchten, aus dieser Liste. Klicken Sie auf eine Datei, um diese auszuwählen und deren Inhalt im mittleren Bereich des Debuggers anzuzeigen.

![Ausschnitt aus dem Quellenfenster des Debugger-Tabs in den Entwicklertools des Browsers. Die zur aktuellen Seite gehörenden Dateien, die Sie debuggen, sind unter dem Ordner sichtbar, dessen Name identisch mit der URL der Seite ist, die im aktuellen Browser-Tab geöffnet ist.](file_list.png)

#### Quellcode

Setzen Sie Breakpoints dort, wo Sie die Ausführung anhalten möchten. Im folgenden Bild zeigt das Highlight auf der Nummer 18, dass für diese Zeile ein Breakpoint gesetzt ist.

![Ausschnitt aus dem Debugger-Bereich der Entwicklerwerkzeuge mit einem hervorgehobenen Breakpoint in Zeile 18.](source_code.png)

#### Überwachungs-Ausdrücke und Breakpoints

Der rechte Bereich zeigt eine Liste der von Ihnen hinzugefügten Überwachungs-Ausdrücke und gesetzten Breakpoints an.

Im Bild zeigt der erste Abschnitt, **Überwachungs-Ausdrücke**, dass die Variable listItems hinzugefügt wurde. Sie können die Liste erweitern, um die Werte im Array anzusehen.

Der nächste Abschnitt, **Breakpoints**, listet die Breakpoints auf, die auf der Seite gesetzt wurden. In example.js wurde ein Breakpoint bei der Anweisung `listItems.push(inputNewItem.value);` gesetzt.

Die letzten beiden Abschnitte erscheinen nur, wenn der Code läuft.

Der Abschnitt **Call stack** zeigt Ihnen, welcher Code ausgeführt wurde, um zur aktuellen Zeile zu gelangen. Sie können sehen, dass der Code sich in der Funktion befindet, die einen Mausklick behandelt, und der Code derzeit auf dem Breakpoint angehalten ist.

Der letzte Abschnitt, **Scopes**, zeigt, welche Werte von verschiedenen Punkten innerhalb Ihres Codes sichtbar sind. Im unten stehenden Bild können Sie beispielsweise die Objekte sehen, die im addItemClick-Funktion verfügbar sind.

![Ausschnitt des Quellfensters des Debugger-Tabs der Entwicklertools des Browsers. Im Call-Stack wird die Funktion angezeigt, die in Zeile 18 aufgerufen wird, wobei hervorgehoben wird, dass in dieser Zeile ein Breakpoint gesetzt ist, und der Scope angezeigt wird.](watch_items.png)

### Weitere Informationen

Erfahren Sie mehr über den JavaScript-Debugger in verschiedenen Browsern:

- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html))
- [Chrome Debugger](https://developer.chrome.com/docs/devtools/javascript/) (Der Debugger von Opera und Edge ist derselbe)
- [Safari Sources tab](https://webkit.org/web-inspector/sources-tab/)

## Die JavaScript-Konsole

Die JavaScript-Konsole ist ein unglaublich nützliches Tool zum Debuggen von JavaScript, das nicht wie erwartet funktioniert. Sie ermöglicht es Ihnen, Zeilen von JavaScript gegen die aktuell im Browser geladene Seite auszuführen und die Fehler zu melden, auf die der Browser beim Versuch, Ihren Code auszuführen, stößt.

Um auf die Konsole in einem beliebigen Browser zuzugreifen, öffnen Sie die Entwicklertools und wählen Sie den **Konsole**-Tab. Dies gibt Ihnen ein Fenster wie das folgende:

![Der Console-Tab der Entwicklertools des Browsers. Zwei JavaScript-Funktionen wurden in der Konsole ausgeführt. Der Benutzer hat Funktionen eingegeben, und die Konsole zeigt die Rückgabewerte an.](console_only.png)

Um zu sehen, was passiert, versuchen Sie, die folgenden Code-Schnipsel nacheinander in die Konsole einzugeben (und dann Enter zu drücken):

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

### Weitere Informationen

Erfahren Sie mehr über die JavaScript-Konsole in verschiedenen Browsern:

- [Firefox Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [Chrome JavaScript-Konsole](https://developer.chrome.com/docs/devtools/console/) (Die Konsole von Opera und Edge ist dieselbe)
- [Safari Console Object API](https://webkit.org/web-inspector/console-object-api/) und [Console Command Line API](https://webkit.org/web-inspector/console-command-line-api/)

## Siehe auch

- [Debugging HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [Debugging CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS)
