---
title: Was sind Entwicklertools des Browsers?
slug: Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

Jeder moderne Webbrowser enthält eine leistungsstarke Suite von Entwicklertools. Diese Werkzeuge ermöglichen eine Vielzahl von Aufgaben, von der Überprüfung des derzeit geladenen HTML, CSS und JavaScript bis hin zur Anzeige der angeforderten Ressourcen der Seite und der Ladezeiten. Dieser Artikel erklärt, wie Sie die grundlegenden Funktionen der Entwicklertools Ihres Browsers verwenden.

> [!NOTE]
> Bevor Sie die unten aufgeführten Beispiele durchgehen, öffnen Sie die [Anfängerseite](https://mdn.github.io/beginner-html-site-scripted/), die wir während der Artikelserie [Erste Schritte im Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) erstellt haben. Diese Seite sollte geöffnet sein, während Sie die folgenden Schritte durchführen.

## So öffnen Sie die Entwicklertools in Ihrem Browser

Die Entwicklertools befinden sich in einem Unterfenster Ihres Browsers, das je nach verwendeten Browser in etwa so aussieht:

![Screenshot eines Browsers mit geöffneten Entwicklertools. Die Webseite wird in der oberen Hälfte des Browsers dargestellt, die Entwicklertools nehmen die untere Hälfte ein. Es sind drei Panels in den Entwicklertools geöffnet: HTML, mit ausgewähltem body-Element, ein CSS-Panel zeigt Blöcke von Stilen, die auf das hervorgehobene body zielen, und ein Panel für berechnete Stile zeigt alle Autor-Stile an; die Browser-Stile-Checkbox ist nicht aktiviert.](devtools_63_inspector.png)

Wie öffnet man es? Auf drei Arten:

- **_Tastatur:_**

  - **Windows:** <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> oder <kbd>F12</kbd>
  - **macOS:** <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>

- **_Menüleiste:_**

  - **Firefox:** _Menü (☰) ➤ Weitere Werkzeuge ➤ Web-Entwickler-Werkzeuge_
  - **Chrome:** _Weitere Werkzeuge ➤ Entwicklertools_
  - **Opera**: _Entwickler ➤ Entwicklertools_
  - **Safari:** _Entwickeln ➤ Web-Inspektor anzeigen._

    > [!NOTE]
    > Die Safari-Entwicklertools sind standardmäßig nicht aktiviert.
    > Um sie zu aktivieren, gehen Sie zu _Safari ➤ Einstellungen ➤ Erweitert_ und aktivieren Sie das Kontrollkästchen _Entwicklermenü in Menüleiste anzeigen_ oder _Funktionen für Webentwickler aktivieren_.

- **_Kontextmenü:_** Halten Sie die rechte Maustaste gedrückt oder klicken Sie mit der rechten Maustaste auf ein Element einer Webseite (Ctrl-Klick auf dem Mac), und wählen Sie _Element untersuchen_ aus dem erscheinenden Kontextmenü. (_Ein zusätzlicher Vorteil:_ Diese Methode hebt sofort den Code des Elements hervor, auf das Sie rechts geklickt haben.)

![Das Firefox-Logo als DOM-Element auf einer Beispielwebsite mit angezeigtem Kontextmenü. Ein Kontextmenü erscheint, wenn ein Element auf der Webseite mit der rechten Maustaste angeklickt wird. Das letzte Menüelement ist 'Element untersuchen'.](inspector_context.png)

## Der Inspektor: DOM-Explorer und CSS-Editor

Die Entwicklertools öffnen sich standardmäßig normalerweise zum Inspektor, der etwa wie der folgende Screenshot aussieht. Dieses Werkzeug zeigt, wie das HTML auf Ihrer Seite zur Laufzeit aussieht und welche CSS auf jedes Element der Seite angewendet wird. Es erlaubt Ihnen auch, das HTML und CSS sofort zu ändern und die Ergebnisse Ihrer Änderungen live im Browser anzusehen.

![Eine Testwebsite wird in einem Tab des Browsers geöffnet. Das Unterfenster der Entwicklertools des Browsers ist geöffnet. Die Entwicklertools haben mehrere Reiter. Inspektor ist einer dieser Reiter. Der Inspektor-Reiter zeigt den HTML-Code der Website an. Ein Bild-Tag ist aus dem HTML-Code ausgewählt. Dies führt zur Hervorhebung des zum ausgewählten Tag gehörenden Bilds auf der Website.](inspector_highlighted.png)

Wenn Sie den Inspektor _nicht_ sehen,

- **Firefox:** Wählen Sie den **Inspektor**-Reiter aus.
- **Andere Browser:** Wählen Sie den **Elemente**-Reiter aus.

### Den DOM-Inspektor erkunden

Um zu beginnen, klicken Sie mit der rechten Maustaste (Ctrl-Klick) auf ein HTML-Element im DOM-Inspektor und schauen Sie sich das Kontextmenü an. Die verfügbaren Menüoptionen variieren je nach Browser, aber die wichtigsten sind größtenteils identisch:

![Das Unterfenster der Entwicklertools des Browsers ist geöffnet. Der Inspektor-Reiter ist ausgewählt. Ein Link-Element wird aus dem im Inspektor-Reiter verfügbaren HTML-Code mit der rechten Maustaste angeklickt. Ein Kontextmenü erscheint. Die verfügbaren Menüoptionen variieren je nach Browser, aber die wichtigsten sind größtenteils identisch.](dom_inspector.png)

- **Node löschen** (manchmal _Element löschen_). Löscht das aktuelle Element.
- **Als HTML bearbeiten** (manchmal _Attribut hinzufügen_ / _Text bearbeiten_). Ermöglicht Ihnen, das HTML zu ändern und die Ergebnisse sofort zu sehen. Sehr nützlich zum Debuggen und Testen.
- **:hover/:active/:focus**. Erzwingt das Umschalten von Elementzuständen, sodass Sie sehen können, wie ihre Stilisierung aussehen würde.
- **Kopieren/Kopieren als HTML**. Kopieren Sie das derzeit ausgewählte HTML.
- Einige Browser haben auch _CSS-Pfad kopieren_ und _XPath kopieren_ verfügbar, um Ihnen zu ermöglichen, den CSS-Selektor oder den XPath-Ausdruck, der das aktuelle HTML-Element auswählen würde, zu kopieren.

Versuchen Sie nun, einige Ihrer DOM zu bearbeiten. Doppelklicken Sie auf ein Element oder klicken Sie mit der rechten Maustaste darauf und wählen Sie _Als HTML bearbeiten_ aus dem Kontextmenü. Sie können beliebige Änderungen vornehmen, können diese jedoch nicht speichern.

### Den CSS-Editor erkunden

Standardmäßig zeigt der CSS-Editor die auf das aktuell ausgewählte Element angewendeten CSS-Regeln an:

![Ausschnitt des CSS-Panels und des Layout-Panels, das neben dem HTML-Editor in den Entwicklertools des Browsers zu sehen ist. Standardmäßig zeigt der CSS-Editor die auf das aktuell ausgewählte Element im HTML-Editor angewendeten CSS-Regeln an. Das Layout-Panel zeigt die Box-Modell-Eigenschaften des ausgewählten Elements.](css_inspector.png)

Diese Funktionen sind besonders nützlich:

- Die auf das aktuelle Element angewendeten Regeln werden in der Reihenfolge von am spezifischsten zu am wenigsten spezifisch angezeigt.
- Klicken Sie auf die Kontrollkästchen neben jeder Deklaration, um zu sehen, was passieren würde, wenn Sie die Deklaration entfernen.
- Klicken Sie auf den kleinen Pfeil neben jeder Kurzform-Eigenschaft, um die Langform-Äquivalente der Eigenschaft anzuzeigen.
- Klicken Sie auf einen Eigenschaftsnamen oder -wert, um ein Textfeld aufzurufen, in dem Sie einen neuen Wert eingeben können, um eine Live-Vorschau einer Stiländerung zu erhalten.
- Neben jeder Regel befindet sich der Dateiname und die Zeilennummer, in der die Regel definiert ist. Ein Klick auf diese Regel veranlasst die Entwicklertools, sie in einer eigenen Ansicht anzuzeigen, wo sie im Allgemeinen bearbeitet und gespeichert werden kann.
- Sie können auch auf die schließende geschweifte Klammer einer beliebigen Regel klicken, um auf einer neuen Zeile ein Textfeld aufzurufen, in dem Sie eine völlig neue Deklaration für Ihre Seite schreiben können.

Sie werden einige anklickbare Tabs oben im CSS-Viewer bemerken:

- _Berechnet_: Dies zeigt die berechneten Stile für das derzeit ausgewählte Element (die endgültigen, normalisierten Werte, die der Browser anwendet).
- _Layout_: Dies zeigt die Details für CSS [grid](/de/docs/Web/CSS/CSS_grid_layout) und [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)-Layoutmodi, wenn das von Ihnen untersuchte Element sie verwendet.
- _Schriften_: In Firefox und Safari zeigt der _Schriften_-Reiter die auf das aktuelle Element angewendeten Schriften an.

Die Ansicht zum _Box-Modell_ stellt das Box-Modell des aktuellen Elements visuell dar, sodass Sie auf einen Blick sehen können, welche Polsterung, welchen Rahmen und welchen Rand es hat und wie groß sein Inhalt ist. In Firefox befindet sich dies im _Layout_-Reiter, in anderen Browsern im _Berechnet_-Reiter.

In einigen Browsern können die JavaScript-Details des ausgewählten Elements ebenfalls in diesem Panel eingesehen werden. In Safari sind diese unter dem _Knoten_-Reiter vereint, in Chrome, Opera und Edge jedoch in separaten Reitern.

- _Eigenschaften_: Die {{Glossary("Property/JavaScript", "Eigenschaften")}} des Elementobjekts.
- _Ereignis-Listener_: Die [Ereignisse](/de/docs/Web/API/Event), die dem Element zugeordnet sind.

### Mehr erfahren

Erfahren Sie mehr über den Inspektor in verschiedenen Browsern:

- [Firefox Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [Chrome DOM-Inspektor](https://developer.chrome.com/docs/devtools/dom/) (inspektor von Opera und Edge ist der gleiche)
- [Safari Elemente-Reiter](https://webkit.org/web-inspector/elements-tab/)

## Der JavaScript-Debugger

Der JavaScript-Debugger ermöglicht es Ihnen, den Wert von Variablen zu beobachten und Haltepunkte festzulegen, an denen Sie die Ausführung unterbrechen möchten, um Probleme zu identifizieren, die verhindern, dass Ihr Code ordnungsgemäß ausgeführt wird.

![Eine Testwebsite, die lokal im Port 8080 bereitgestellt wird. Das Unterfenster der Entwicklertools ist geöffnet. Der JavaScript-Debugger-Reiter ist ausgewählt. Es ermöglicht Ihnen, den Wert von Variablen zu beobachten und Haltepunkte zu setzen. Eine Datei mit dem Namen 'example.js' ist aus dem Quellenbereich ausgewählt. Ein Haltepunkt ist in der Zeile 18 der Datei gesetzt.](firefox_debugger.png)

Um zum Debugger zu gelangen:

**Firefox**: Öffnen Sie die Entwicklertools und wählen Sie den **Debugger**-Reiter.
**Andere Browser**: Öffnen Sie die Entwicklertools und wählen Sie den **Quellen**-Reiter.

### Den Debugger erkunden

Der JavaScript-Debugger jedes Browsers ist in drei Bereiche unterteilt. Das Layout dieser Bereiche unterscheidet sich je nach verwendetem Browser; dieser Leitfaden verwendet Firefox als Referenz.

#### Dateiliste

Der erste Bereich links enthält die Liste der Dateien, die mit der Seite, die Sie debuggen, verknüpft sind. Wählen Sie die Datei aus, mit der Sie arbeiten möchten, und klicken Sie darauf, um ihren Inhalt im mittleren Bereich des Debuggers anzuzeigen.

![Ausschnitt des Quellenbereichs des Debugger-Reiters in den Entwicklertools des Browsers. Die mit der aktuellen Seite, die Sie debuggen, verbundenen Dateien sind unter dem Ordner sichtbar, dessen Name mit dem URL der Seite, die im aktuellen Browser-Tab geöffnet ist, übereinstimmt.](file_list.png)

#### Quellcode

Setzen Sie Haltepunkte, an denen Sie die Ausführung unterbrechen möchten. Im folgenden Bild zeigt die Hervorhebung der Zahl 18, dass dort ein Haltepunkt gesetzt ist.

![Ausschnitt des Entwickler-Tools-Debugger-Panels mit dem hervorgehobenen Haltepunkt in Zeile 18.](source_code.png)

#### Ausdrücke beobachten und Haltepunkte

Der rechte Bereich zeigt eine Liste der beobachteten Ausdrücke, die Sie hinzugefügt haben, sowie der gesetzten Haltepunkte.

Im Bild zeigt der erste Abschnitt, **Beobachtete Ausdrücke**, dass die Variable listItems hinzugefügt wurde. Sie können die Liste erweitern, um die Werte im Array anzuzeigen.

Der nächste Abschnitt, **Haltepunkte**, listet die auf der Seite gesetzten Haltepunkte auf. In example.js wurde ein Haltepunkt bei der Anweisung `listItems.push(inputNewItem.value);` gesetzt.

Die letzten beiden Abschnitte erscheinen nur, wenn der Code ausgeführt wird.

Der Abschnitt **Aufrufstapel** zeigt Ihnen, welcher Code ausgeführt wurde, um zu der aktuellen Zeile zu gelangen. Sie können sehen, dass sich der Code in der Funktion befindet, die einen Mausklick verarbeitet, und dass der Code derzeit am Haltepunkt pausiert ist.

Der letzte Abschnitt, **Bereiche**, zeigt, welche Werte von verschiedenen Punkten innerhalb Ihres Codes sichtbar sind. Zum Beispiel im unten dargestellten Bild können Sie die Objekte sehen, die dem Code in der Funktion addItemClick zur Verfügung stehen.

![Ausschnitt des Quellenbereichs des Debugger-Reiters der Entwicklertools des Browsers. Im Aufrufstapel wird die in Zeile 18 aufgerufene Funktion angezeigt, was zeigt, dass dort ein Haltepunkt gesetzt ist und der Bereich angezeigt wird.](watch_items.png)

### Mehr erfahren

Erfahren Sie mehr über den JavaScript-Debugger in verschiedenen Browsern:

- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html))
- [Chrome Debugger](https://developer.chrome.com/docs/devtools/javascript/) (Debugger von Opera und Edge ist derselbe)
- [Safari Quellen-Reiter](https://webkit.org/web-inspector/sources-tab/)

## Die JavaScript-Konsole

Die JavaScript-Konsole ist ein unglaublich nützliches Werkzeug zum Debuggen von JavaScript, das nicht wie erwartet funktioniert. Sie ermöglicht es Ihnen, JavaScript-Zeilen gegen die aktuell im Browser geladene Seite auszuführen, und meldet die Fehler, die bei dem Versuch des Browsers auftreten, Ihren Code auszuführen.

Um auf die Konsole in einem Browser zuzugreifen, öffnen Sie die Entwicklertools und wählen Sie den **Konsole**-Reiter. Dies gibt Ihnen ein Fenster wie das folgende:

![Die Konsole im Browser-Entwicklertool. Zwei JavaScript-Funktionen wurden in der Konsole ausgeführt. Der Benutzer hat Funktionen eingegeben, und die Konsole hat die Rückgabewerte angezeigt.](console_only.png)

Um zu sehen, was passiert, versuchen Sie, die folgenden Code-Snippets einzeln in die Konsole einzugeben (und dann die Eingabetaste zu drücken):

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

Sie werden anfangen, die Art von Fehlern zu sehen, die der Browser zurückgibt. Oft sind diese Fehler ziemlich kryptisch, aber es sollte ziemlich einfach sein, diese Probleme zu lösen!

### Mehr erfahren

Erfahren Sie mehr über die JavaScript-Konsole in verschiedenen Browsern:

- [Firefox Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [Chrome JavaScript-Konsole](https://developer.chrome.com/docs/devtools/console/) (Konsole von Opera und Edge ist dieselbe)
- [Safari Console Object API](https://webkit.org/web-inspector/console-object-api/) und [Console Command Line API](https://webkit.org/web-inspector/console-command-line-api/)

## Siehe auch

- [HTML-Debugging](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
- [CSS-Debugging](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
