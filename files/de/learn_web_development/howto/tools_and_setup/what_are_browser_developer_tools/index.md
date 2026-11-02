---
title: Was sind Browser-Entwicklertools?
slug: Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

Jeder moderne Webbrowser enthält eine leistungsfähige Sammlung von Entwicklertools (DevTools). Mit diesen Tools können Sie beispielsweise das aktuell geladene HTML, CSS und JavaScript untersuchen oder sehen, welche Ressourcen die Seite angefordert hat und wie lange deren Laden gedauert hat. Dieser Artikel erklärt, was DevTools sind und wie Sie ihre grundlegenden Funktionen nutzen.

> [!NOTE]
> Bevor Sie die folgenden Beispiele durchgehen, öffnen Sie die [Beispielwebsite für Einsteiger](https://mdn.github.io/beginner-html-site-scripted/), die wir in der Artikelreihe [Erste Schritte mit dem Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) erstellt haben. Öffnen Sie die Website, bevor Sie die folgenden Schritte ausführen.

## Was sind DevTools?

Die DevTools Ihres Browsers zeigen Ihnen den aktuellen Zustand des Codes, den Ihr Browser für die sichtbare Webseite verarbeitet hat. Dieser kann sich von Ihrem ursprünglichen Quellcode unterscheiden: Der Browser korrigiert fehlerhaftes HTML, führt JavaScript aus, das möglicherweise das Markup oder CSS verändert, und so weiter.

Die DevTools können jedoch weit mehr, als nur Code anzuzeigen: Sie können HTML und CSS bearbeiten und sehen, wie sich dadurch die Benutzeroberfläche verändert, JavaScript auf der geladenen Seite ausführen und das Ergebnis beobachten, JavaScript debuggen (einschließlich der Anzeige von Fehlermeldungen), Netzwerkanfragen untersuchen, unterschiedliche Viewport-Größen emulieren, Informationen zur Barrierefreiheit anzeigen und vieles mehr.

Dieser Artikel bietet grundlegende Informationen zu den am häufigsten verwendeten Funktionen der DevTools. Weitere Informationen finden Sie in den Ressourcen der jeweiligen Browser:

- [Benutzerdokumentation der Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools) (Opera und Edge verwenden denselben Inspektor)
- [Safari Web Inspector](https://developer.apple.com/documentation/safari-developer-tools/web-inspector)

## So öffnen Sie die DevTools in Ihrem Browser

Die DevTools befinden sich in einem Teilfenster Ihres Browsers, das etwa wie folgt aussieht. Das genaue Erscheinungsbild hängt vom verwendeten Browser ab:

![Screenshot eines Browsers mit geöffneten Entwicklertools. Die Webseite wird in der oberen Hälfte des Browsers angezeigt, die Entwicklertools belegen die untere Hälfte. In den Entwicklertools sind drei Bereiche geöffnet: HTML mit ausgewähltem body-Element, ein CSS-Bereich mit Style-Blöcken für das hervorgehobene body-Element und ein Bereich mit berechneten Styles, der alle vom Autor definierten Styles zeigt; das Kontrollkästchen für Browser-Styles ist nicht aktiviert.](devtools_63_inspector.png)

Sie können die DevTools auf drei Arten öffnen:

- **_Tastatur:_**
  - **Windows und Linux:** <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> oder <kbd>F12</kbd>
  - **macOS:** <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>

- **_Menüleiste:_**
  - **Firefox:** _Menü (☰) ➤ Weitere Werkzeuge ➤ Web-Entwicklerwerkzeuge_
  - **Chrome und Edge:** _Weitere Tools ➤ Entwicklertools_
  - **Opera:** _Entwickler ➤ Entwicklertools_
  - **Safari:** _Entwickler ➤ Web-Inspektor einblenden_

    > [!NOTE]
    > Die Entwicklertools von Safari sind standardmäßig nicht aktiviert.
    > Um sie zu aktivieren, öffnen Sie _Safari ➤ Einstellungen ➤ Erweitert_ und aktivieren Sie das Kontrollkästchen _Funktionen für Webentwickler anzeigen_.

- **_Kontextmenü:_** Klicken Sie mit der rechten Maustaste auf ein Element einer Webseite (auf einem Mac mit gedrückter Ctrl-Taste) und wählen Sie im angezeigten Kontextmenü _Element untersuchen_/_Untersuchen_. (_Ein Vorteil:_ Bei dieser Methode wird der Code des ausgewählten Elements sofort hervorgehoben.)

![Das Firefox-Logo als DOM-Element auf einer Beispielwebsite mit geöffnetem Kontextmenü. Das Kontextmenü erscheint, wenn mit der rechten Maustaste auf ein Element der Webseite geklickt wird. Der letzte Menüeintrag lautet „Element untersuchen“.](inspector_context.png)

## Der Inspektor: DOM-Explorer und CSS-Editor

Die Entwicklertools öffnen sich normalerweise standardmäßig mit dem Inspektor, der etwa so aussieht:

![Eine Testwebsite ist in einem Browser-Tab geöffnet. Das Teilfenster mit den Browser-Entwicklertools ist geöffnet. Die Entwicklertools haben mehrere Tabs, darunter den Inspektor. Im Inspektor-Tab wird der HTML-Code der Website angezeigt. Ein image-Tag ist im HTML-Code ausgewählt. Dadurch wird das zum ausgewählten Tag gehörende Bild auf der Website hervorgehoben.](inspector_highlighted.png)

Dieses Tool zeigt, wie das HTML Ihrer Seite zur Laufzeit aussieht und welches CSS auf die einzelnen Elemente der Seite angewendet wird. Sie können damit außerdem HTML und CSS unmittelbar ändern und die Auswirkungen Ihrer Änderungen direkt im Browser sehen.

Falls Sie den Inspektor _nicht_ sehen:

- **Firefox:** Wählen Sie den Tab **Inspektor**.
- **Andere Browser:** Wählen Sie den Tab **Elements**.

### Den DOM-Inspektor erkunden

Klicken Sie zunächst im DOM-Inspektor mit der rechten Maustaste (oder mit gedrückter Ctrl-Taste) auf ein HTML-Element und sehen Sie sich das Kontextmenü an.

![Das Teilfenster mit den Browser-Entwicklertools ist geöffnet. Der Inspektor-Tab ist ausgewählt. Im dort angezeigten HTML-Code wurde mit der rechten Maustaste auf ein link-Element geklickt. Ein Kontextmenü erscheint. Die verfügbaren Menüoptionen unterscheiden sich je nach Browser, die wichtigsten sind jedoch weitgehend gleich.](dom_inspector.png)

Die verfügbaren Menüoptionen unterscheiden sich je nach Browser, die wichtigsten sind jedoch weitgehend gleich:

- **Knoten löschen** (manchmal _Element löschen_): Löscht das aktuelle Element.
- **Als HTML bearbeiten** (manchmal _Attribut hinzufügen_/_Text bearbeiten_): Hiermit können Sie das HTML ändern und die Ergebnisse sofort sehen. Das ist besonders hilfreich beim Debuggen und Testen.
- **:hover/:active/:focus**: Erzwingt die Aktivierung von Elementzuständen, damit Sie sehen können, wie das Element in diesen Zuständen dargestellt wird.
- **Kopieren/Als HTML kopieren**: Kopiert das aktuell ausgewählte HTML.
- Manche Browser bieten außerdem _CSS-Pfad kopieren_ und _XPath kopieren_ an. Damit können Sie den CSS-Selektor oder XPath-Ausdruck kopieren, der das aktuelle HTML-Element auswählt.

Versuchen Sie nun, Ihr DOM zu bearbeiten. Doppelklicken Sie auf ein Element oder klicken Sie mit der rechten Maustaste darauf und wählen Sie im Kontextmenü _Als HTML bearbeiten_. Sie können beliebige Änderungen vornehmen, diese aber nicht speichern.

### Den CSS-Editor erkunden

Standardmäßig zeigt der CSS-Editor die CSS-Regeln an, die auf das untersuchte Element angewendet werden. In manchen Browsern gibt es dafür einen eigenen Bereich, in anderen befinden sich die Regeln im Tab _Styles_.

![Ausschnitt aus dem CSS-Bereich und dem Layout-Bereich, die in den Browser-Entwicklertools neben dem HTML-Editor angezeigt werden. Standardmäßig zeigt der CSS-Editor die CSS-Regeln an, die auf das aktuell im HTML-Editor ausgewählte Element angewendet werden. Der Layout-Bereich zeigt die Eigenschaften des Box-Modells für das ausgewählte Element.](css_inspector.png)

Beachten Sie die folgenden Funktionen:

- Die Regeln, die auf das aktuelle Element angewendet werden, sind von der höchsten zur niedrigsten Spezifität geordnet.
- Klicken Sie auf die Kontrollkästchen neben den einzelnen Deklarationen, um zu sehen, was geschieht, wenn Sie die jeweilige Deklaration entfernen.
- Klicken Sie auf den kleinen Pfeil neben einer Kurzschreibweise-Eigenschaft, um die entsprechenden ausgeschriebenen Eigenschaften anzuzeigen.
- Klicken Sie auf den Namen oder Wert einer Eigenschaft, um ein Textfeld zu öffnen. Dort können Sie einen neuen Wert eingeben und die Änderung des Styles direkt in einer Vorschau sehen.
- Neben jeder Regel stehen der Dateiname und die Zeilennummer, an der sie definiert ist. Wenn Sie darauf klicken, zeigen die DevTools die Regel in einer eigenen Ansicht an, in der sie sich in der Regel bearbeiten und speichern lässt.
- Klicken Sie auf die schließende geschweifte Klammer einer Regel, um eine neue Zeile einzufügen. Dort können Sie eine weitere Deklaration hinzufügen, die auf die Seite angewendet wird.

Im CSS-Editor finden Sie mehrere weitere anklickbare Tabs, zum Beispiel:

- _Computed_: Zeigt die berechneten Styles für das aktuell ausgewählte Element an – also die endgültigen, normalisierten Werte, die der Browser anwendet.
- _Layout_: Zeigt gegebenenfalls Details zu Layout-Modi wie CSS [Grid](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) an, die auf das untersuchte Element angewendet werden.
- _Fonts_: In Firefox und Safari zeigt der Tab _Fonts_ die Schriftarten an, die auf das aktuelle Element angewendet werden.

Die Ansicht des _Box-Modells_ stellt das Box-Modell des aktuellen Elements grafisch dar. So können Sie auf einen Blick erkennen, welche Innenabstände, Rahmen und Außenabstände angewendet werden und wie groß der Inhalt ist. In Firefox befindet sich diese Ansicht im Tab _Layout_, in anderen Browsern im Tab _Computed_.

In manchen Browsern können Sie in diesem Bereich auch JavaScript-Details zum ausgewählten Element ansehen. In Safari sind diese im Tab _Node_ zusammengefasst; in Chrome, Opera und Edge befinden sie sich in separaten Tabs.

- _Properties_: Die {{Glossary("Property/JavaScript", "Eigenschaften")}} des Elementobjekts.
- _Event Listeners_: Die [Events](/de/docs/Web/API/Event), die mit dem Element verknüpft sind.

### Weitere Informationen

Weitere Informationen über den Inspektor in verschiedenen Browsern:

- [Firefox-Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [Chrome-DOM-Inspektor](https://developer.chrome.com/docs/devtools/dom/) (Opera und Edge verwenden denselben Inspektor)
- [Elements-Tab in Safari](https://webkit.org/web-inspector/elements-tab/)

## Der JavaScript-Debugger

Mit dem JavaScript-Debugger können Sie Variablenwerte beobachten und Breakpoints setzen. Das sind Stellen in Ihrem Code, an denen Sie die Ausführung anhalten können, um Probleme zu finden, die verhindern, dass Ihr Code korrekt ausgeführt wird.

![Eine Testwebsite, die lokal über Port 8080 bereitgestellt wird. Das Teilfenster mit den Entwicklertools ist geöffnet. Der Tab des JavaScript-Debuggers ist ausgewählt. Mit ihm lassen sich Variablenwerte beobachten und Breakpoints setzen. Im Bereich Sources ist eine Datei namens „example.js“ ausgewählt. In Zeile 18 der Datei ist ein Breakpoint gesetzt.](firefox_debugger.png)

So öffnen Sie den Debugger:

- **Firefox:** Öffnen Sie die Entwicklertools und wählen Sie den Tab **Debugger**.
- **Andere Browser:** Öffnen Sie die Entwicklertools und wählen Sie den Tab **Sources**.

### Den Debugger erkunden

Der JavaScript-Debugger ist in jedem Browser in drei Bereiche unterteilt. Deren Anordnung unterscheidet sich je nach Browser; dieser Leitfaden verwendet Firefox als Referenz.

#### Dateiliste

Der erste Bereich auf der linken Seite enthält die Dateien, die mit der Seite verbunden sind, die Sie debuggen. Wählen Sie aus dieser Liste die Datei aus, mit der Sie arbeiten möchten. Klicken Sie auf eine Datei, um sie auszuwählen und ihren Inhalt im mittleren Bereich des Debuggers anzuzeigen.

![Ausschnitt aus dem Quellenbereich des Debugger-Tabs in den Browser-Entwicklertools. Die Dateien der aktuell untersuchten Seite sind unter einem Ordner sichtbar, dessen Name mit der URL der im aktuellen Browser-Tab geöffneten Website übereinstimmt.](file_list.png)

#### Quellcode

Setzen Sie Breakpoints an den Stellen, an denen Sie die Ausführung anhalten möchten. Im folgenden Bild zeigt die Hervorhebung von Zeile 18, dass dort ein Breakpoint gesetzt ist.

![Ausschnitt aus dem Debugger-Bereich der Entwicklertools mit hervorgehobenem Breakpoint in Zeile 18.](source_code.png)

#### Überwachungsausdrücke und Breakpoints

Der rechte Bereich zeigt eine Liste der hinzugefügten Überwachungsausdrücke und gesetzten Breakpoints.

![Ausschnitt aus dem Quellenbereich des Debugger-Tabs in den Browser-Entwicklertools. Der Aufrufstapel zeigt die in Zeile 18 aufgerufene Funktion, hebt den dort gesetzten Breakpoint hervor und zeigt den Gültigkeitsbereich an.](watch_items.png)

- Der erste Abschnitt, **Watch expressions**, zeigt, dass die Variable `listItems` hinzugefügt wurde. Sie können die Liste aufklappen, um die Werte des Arrays anzuzeigen.
- Im nächsten Abschnitt, **Breakpoints**, sind die auf der Seite gesetzten Breakpoints aufgeführt. In example.js wurde ein Breakpoint für die Anweisung `listItems.push(inputNewItem.value);` gesetzt.
- Die letzten beiden Abschnitte erscheinen nur, wenn der Code ausgeführt wird.
  - Der Abschnitt **Call stack** zeigt, welcher Code ausgeführt wurde, um zur aktuellen Zeile zu gelangen. Sie können erkennen, dass sich der Code in der Funktion befindet, die einen Mausklick verarbeitet, und dass die Ausführung derzeit am Breakpoint angehalten ist.
  - Der letzte Abschnitt, **Scopes**, zeigt, welche Werte an verschiedenen Stellen Ihres Codes verfügbar sind. Im Bild sehen Sie beispielsweise die Objekte, auf die der Code in der Funktion addItemClick zugreifen kann.

### Weitere Informationen

Weitere Informationen über den JavaScript-Debugger in verschiedenen Browsern:

- [JavaScript-Debugger in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
- [JavaScript-Debugging in Chrome](https://developer.chrome.com/docs/devtools/javascript/) (Opera und Edge verwenden denselben Debugger)
- [Sources-Tab in Safari](https://webkit.org/web-inspector/sources-tab/)

## Die JavaScript-Konsole

In der JavaScript-Konsole können Sie JavaScript-Anweisungen auf der aktuell im Browser geladenen Seite ausführen. Außerdem zeigt sie Fehler an, die beim Ausführen Ihres Codes auftreten.

Um die Konsole in einem beliebigen Browser zu öffnen, öffnen Sie die Entwicklertools und wählen Sie den Tab **Console**. Daraufhin sehen Sie ein Fenster wie dieses:

![Der Console-Tab der Browser-Entwicklertools. In der Konsole wurden zwei JavaScript-Funktionen ausgeführt. Der Benutzer hat die Funktionen eingegeben und die Konsole hat die Rückgabewerte angezeigt.](console_only.png)

Um zu sehen, was geschieht, geben Sie die folgenden Codeausschnitte nacheinander in die Konsole ein und drücken Sie jeweils die Eingabetaste:

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

Geben Sie nun die folgenden fehlerhaften Codeausschnitte ein und sehen Sie sich die Ergebnisse an.

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

Sie werden nun sehen, welche Arten von Fehlern der Browser meldet. Manche Fehlermeldungen sind zunächst recht schwer verständlich, werden Ihnen aber mit zunehmender Erfahrung vertrauter.

### Weitere Informationen

Weitere Informationen über die JavaScript-Konsole in verschiedenen Browsern:

- [Web-Konsole in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [Konsole in Chrome](https://developer.chrome.com/docs/devtools/console/) (Opera und Edge verwenden dieselbe Konsole)
- [Console Object API in Safari](https://webkit.org/web-inspector/console-object-api/) und [Console Command Line API](https://webkit.org/web-inspector/console-command-line-api/)

## Der Netzwerk-Inspektor

Mit dem Netzwerk-Inspektor können Sie die Netzwerkanfragen und -antworten untersuchen, die beim Abrufen der HTML-Dokumente, Bilder, CSS-Dateien, JavaScript-Dateien und anderer Ressourcen anfallen, aus denen die im Browser dargestellte Website besteht.

Um ihn zu öffnen, öffnen Sie die Entwicklertools und wählen Sie den Tab **Network**. Daraufhin sehen Sie ein Fenster wie dieses:

![Der Network-Tab der Browser-Entwicklertools mit mehreren Netzwerkanfragen und unterschiedlichen Statuscodes.](network_inspector.png)

Hier gibt es viele Informationen. Grundsätzlich ist es aber hilfreich zu sehen, welche Dateien Ihre Website anfordert und ob sie erfolgreich geladen werden.

Wenn Sie beispielsweise den Statuscode {{httpstatus("200")}} sehen, wurde eine Ressource erfolgreich bereitgestellt. Der Code {{httpstatus("404")}} bedeutet dagegen, dass die Ressource nicht gefunden wurde. Möglicherweise müssen Sie einen falschen Dateipfad oder Dateinamen korrigieren, oder Sie haben vergessen, die Datei auf den Server hochzuladen.

### HTTP-Statuscodes

Server antworten jedes Mal mit einer Statusmeldung, wenn sie eine Anfrage erhalten. Dies sind die häufigsten Statuscodes:

- **200: OK**
  - : Die angeforderte Ressource wurde bereitgestellt.
- **301: Moved permanently**
  - : Die Ressource wurde dauerhaft an einen neuen Ort verschoben. Diesen Status sehen Sie im Browser nicht häufig. Es ist jedoch gut, „301“ zu kennen, da Suchmaschinen diese Information oft verwenden, um ihre Indizes zu aktualisieren.
- **304: Not modified**
  - : Die Datei hat sich seit Ihrer letzten Anfrage nicht geändert. Ihr Browser kann daher die Version aus seinem Cache anzeigen. Das führt zu kürzeren Antwortzeiten und einer effizienteren Nutzung der Bandbreite.
- **403: Forbidden**
  - : Sie dürfen nicht auf die Ressource zugreifen. Üblicherweise deutet dies auf einen Konfigurationsfehler hin (beispielsweise wenn Ihr Hosting-Anbieter Ihnen keine Zugriffsrechte für ein Verzeichnis erteilt hat).
- **404: Not found**
  - : Die angeforderte Ressource wurde am angegebenen Ort nicht gefunden.
- **500: Internal server error**
  - : Auf dem Server ist ein Fehler aufgetreten. Beispielsweise funktioniert die serverseitige Sprache ({{Glossary("PHP", "PHP")}}, .Net usw.) nicht mehr oder der Webserver selbst hat ein Konfigurationsproblem. Melden Sie solche Probleme dem Support-Team Ihres Hosting-Anbieters.
- **503: Service unavailable**
  - : Dieser Status ist meist die Folge einer vorübergehenden Überlastung des Servers. Versuchen Sie es nach einer Weile erneut.

### Weitere Informationen

Weitere Informationen über den Netzwerk-Inspektor in verschiedenen Browsern:

- [Netzwerkmonitor in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [Network-Bereich in Chrome](https://developer.chrome.com/docs/devtools/network/overview) (Opera und Edge verwenden denselben Netzwerk-Bereich)
- [Network-Tab in Safari](https://webkit.org/web-inspector/network-tab/)

## Siehe auch

- [HTML debuggen](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
- [CSS debuggen](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
