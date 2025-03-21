---
title: console
slug: Web/API/console
l10n:
  sourceCommit: f19387e11b429473d515019a0b8d9ba4e615f88f
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Das **`console`**-Objekt bietet Zugriff auf die Debugging-Konsole (z. B. die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) in Firefox).

Implementierungen der Console-API können sich je nach Laufzeitumgebung unterscheiden. Insbesondere können einige `console`-Methoden in einigen Online-Editoren und Entwicklungsumgebungen (IDEs) unterschiedlich funktionieren oder überhaupt nicht verfügbar sein. Um das hier beschriebene Verhalten zu sehen, probieren Sie die Methoden in den Entwickler-Tools Ihres Browsers aus. Beachten Sie jedoch, dass selbst zwischen Browsern Unterschiede bestehen können.

Das `console`-Objekt ist in jedem globalen Scope verfügbar. Zum Beispiel:

```js
console.log("Failed to open the specified link");
```

## Methoden

- [`console.assert()`](/de/docs/Web/API/console/assert_static)
  - : Gibt eine Fehlermeldung in der Konsole aus, falls das erste Argument `false` ist.
- [`console.clear()`](/de/docs/Web/API/console/clear_static)
  - : Löscht die Konsole.
- [`console.count()`](/de/docs/Web/API/console/count_static)
  - : Gibt aus, wie oft eine Zeile mit einem bestimmten Label aufgerufen wurde.
- [`console.countReset()`](/de/docs/Web/API/console/countReset_static)
  - : Setzt den Zähler mit dem angegebenen Label zurück.
- [`console.debug()`](/de/docs/Web/API/console/debug_static)
  - : Gibt eine Nachricht mit dem Debug-Log-Level in der Konsole aus.
- [`console.dir()`](/de/docs/Web/API/console/dir_static)
  - : Zeigt eine interaktive Auflistung der Eigenschaften eines angegebenen JavaScript-Objekts an. Diese Anzeige ermöglicht die Verwendung von Aufklappdreiecken, um die Inhalte von untergeordneten Objekten zu überprüfen.
- [`console.dirxml()`](/de/docs/Web/API/console/dirxml_static)
  - : Zeigt, wenn möglich, eine XML/HTML-Element-Darstellung des angegebenen Objekts an, andernfalls wird die JavaScript-Objektansicht dargestellt.
- [`console.error()`](/de/docs/Web/API/console/error_static)
  - : Gibt eine Nachricht mit dem Fehler-Log-Level in der Konsole aus.
- `console.exception()` {{Non-standard_inline}} {{deprecated_inline}}
  - : Ein Alias für `console.error()`.
- [`console.group()`](/de/docs/Web/API/console/group_static)
  - : Erstellt eine neue Inline-[Gruppe](#verwendung_von_gruppen_in_der_konsole) und rückt alle folgenden Ausgaben eine Ebene ein. Um eine Ebene zurückzukehren, rufen Sie `console.groupEnd()` auf.
- [`console.groupCollapsed()`](/de/docs/Web/API/console/groupCollapsed_static)
  - : Erstellt eine neue Inline-[Gruppe](#verwendung_von_gruppen_in_der_konsole), jedoch im eingeklappten Zustand, sodass ein Aufklapp-Button verwendet werden muss, um sie zu erweitern. Um eine Ebene zurückzukehren, rufen Sie `console.groupEnd()` auf.
- [`console.groupEnd()`](/de/docs/Web/API/console/groupEnd_static)
  - : Beendet die aktuelle Inline-[Gruppe](#verwendung_von_gruppen_in_der_konsole).
- [`console.info()`](/de/docs/Web/API/console/info_static)
  - : Gibt eine Nachricht mit dem Info-Log-Level in der Konsole aus.
- [`console.log()`](/de/docs/Web/API/console/log_static)
  - : Gibt eine Nachricht in der Konsole aus.
- [`console.profile()`](/de/docs/Web/API/console/profile_static) {{Non-standard_inline}}
  - : Startet den eingebauten Profiler des Browsers (z. B. das [Firefox Performance-Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)). Sie können optional einen Namen für das Profil angeben.
- [`console.profileEnd()`](/de/docs/Web/API/console/profileEnd_static) {{Non-standard_inline}}
  - : Beendet den Profiler. Sie können das resultierende Profil im Performance-Tool des Browsers sehen (z. B. im [Firefox Performance-Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)).
- [`console.table()`](/de/docs/Web/API/console/table_static)
  - : Zeigt tabellarische Daten als Tabelle an.
- [`console.time()`](/de/docs/Web/API/console/time_static)
  - : Startet einen [Timer](#timer) mit einem Namen, der als Eingabeparameter angegeben wurde. Bis zu 10.000 Timer können auf einer Seite gleichzeitig laufen.
- [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static)
  - : Beendet den angegebenen [Timer](#timer) und gibt die vergangene Zeit in Millisekunden seit dem Start aus.
- [`console.timeLog()`](/de/docs/Web/API/console/timeLog_static)
  - : Gibt den Wert des angegebenen [Timers](#timer) in der Konsole aus.
- [`console.timeStamp()`](/de/docs/Web/API/console/timeStamp_static) {{Non-standard_inline}}
  - : Fügt der Zeitleiste des Performance-Tools des Browsers ([Chrome](https://developer.chrome.com/docs/devtools/performance/reference) oder [Firefox](https://profiler.firefox.com/docs/#/./guide-ui-tour-timeline)) eine Markierung hinzu.
- [`console.trace()`](/de/docs/Web/API/console/trace_static)
  - : Gibt einen [Stack Trace](#stack_traces) aus.
- [`console.warn()`](/de/docs/Web/API/console/warn_static)
  - : Gibt eine Nachricht mit dem Warn-Log-Level in der Konsole aus.

## Beispiele

### Textausgabe in die Konsole

Die am häufigsten verwendete Funktion der Konsole ist das Protokollieren von Text und anderen Daten. Es gibt verschiedene Kategorien von Ausgaben, die Sie mit den Methoden [`console.log()`](/de/docs/Web/API/console/log_static), [`console.info()`](/de/docs/Web/API/console/info_static), [`console.warn()`](/de/docs/Web/API/console/warn_static), [`console.error()`](/de/docs/Web/API/console/error_static) oder [`console.debug()`](/de/docs/Web/API/console/debug_static) erzeugen können. Jede dieser Methoden erzeugt unterschiedlich gestylten Text in der Konsole, und Sie können die Filterfunktionen Ihres Browsers verwenden, um nur die gewünschten Ausgaben zu sehen.

Es gibt zwei Möglichkeiten, jede der Ausgabemethoden zu verwenden:

- Geben Sie eine variable Anzahl von Argumenten mit, deren String-Darstellungen zu einem String zusammengefügt und dann in der Konsole ausgegeben werden.
- Geben Sie einen String an, der Null oder mehr Substitutionszeichenfolgen enthält, gefolgt von einer variablen Anzahl von Argumenten, um diese zu ersetzen.

#### Ausgabe eines einzelnen Objekts

Die einfachste Methode, die Logging-Methoden zu verwenden, besteht darin, ein einzelnes Objekt auszugeben:

```js
const someObject = { str: "Some text", id: 5 };
console.log(someObject);
```

Die Ausgabe sieht ungefähr so aus:

```plain
{str:"Some text", id:5}
```

Der Browser zeigt so viele Informationen über das Objekt an, wie möglich und vorgesehen ist. Beispielsweise können private Zustände des Objekts ebenfalls angezeigt werden. Bestimmte Objekttypen, wie DOM-Elemente oder Funktionen, können in einer speziellen Darstellung angezeigt werden.

#### Objekte snapshotten

Informationen über ein Objekt werden verzögert abgerufen. Das bedeutet, dass die Log-Nachricht den Inhalt eines Objekts erst zeigt, wenn es das erste Mal betrachtet wird, nicht, wann es protokolliert wurde. Zum Beispiel:

```js
const obj = {};
console.log(obj);
obj.prop = 123;
```

Dies gibt `{}` aus. Wenn Sie jedoch die Details des Objekts erweitern, sehen Sie `prop: 123`.

Wenn Sie Ihr Objekt ändern möchten und verhindern wollen, dass die protokollierten Informationen aktualisiert werden, können Sie das Objekt {{Glossary("Deep_copy", "tiefkopieren")}}, bevor Sie es protokollieren. Ein üblicher Ansatz besteht darin, {{jsxref("JSON.stringify()")}} und anschließend {{jsxref("JSON.parse()")}} zu verwenden:

```js
console.log(JSON.parse(JSON.stringify(obj)));
```

Es gibt andere Alternativen, die in Browsern funktionieren, wie beispielsweise [`structuredClone()`](/de/docs/Web/API/Window/structuredClone), die effektiver bei der Kopie unterschiedlicher Objekttypen sind.

#### Ausgabe mehrerer Objekte

Sie können auch mehrere Objekte ausgeben, indem Sie sie beim Aufruf der Logging-Methode auflisten, wie hier:

```js
const car = "Dodge Charger";
const someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", someObject);
```

Die Ausgabe sieht wie folgt aus:

```plain
My first car was a Dodge Charger . The object is: {str:"Some text", id:5}
```

#### Verwendung von String-Substitutionen

Das erste Argument der Logging-Methoden kann ein String sein, der Null oder mehr Substitutionszeichenfolgen enthält. Jede Substitutionszeichenfolge wird durch den entsprechenden Argumentwert ersetzt.

- `%o`
  - : Gibt ein JavaScript-Objekt im Stil der „optimal nützlichen Formatierung“ aus, z.B. DOM-Elemente werden möglicherweise genauso angezeigt, wie sie im Element-Inspektor erscheinen würden.
- `%O`
  - : Gibt ein JavaScript-Objekt im Stil der „generischen JavaScript-Objektformatierung“ aus, meist in Form einer erweiterbaren Baumansicht. Dies ähnelt [`console.dir()`](/de/docs/Web/API/console/dir_static).
- `%d` oder `%i`
  - : Gibt eine Ganzzahl aus.
- `%s`
  - : Gibt eine Zeichenfolge aus.
- `%f`
  - : Gibt einen Fließkommawert aus.
- `%c`
  - : Wendet CSS-Stilregeln auf den gesamten nachfolgenden Text an. Siehe [Styling console output](#styling_der_konsolenausgabe).

Einige Browser können zusätzliche Format-Spezifizierer implementieren. Beispielsweise unterstützen Safari und Firefox die C-ähnliche Präzisionsformatierung `%.<precision>f`. Zum Beispiel: `console.log("Foo %.2f", 1.1)` gibt die Zahl mit zwei Dezimalstellen aus: `Foo 1.10`, während `console.log("Foo %.2d", 1.1)` die Zahl als zweistellige Zahl mit führender Null ausgibt: `Foo 01`.

Jeder dieser Spezifizierer zieht das nächste Argument nach dem Format-String aus der Parameterliste. Beispielsweise:

```js
for (let i = 0; i < 5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i + 1);
}
```

Die Ausgabe sieht wie folgt aus:

```plain
Hello, Bob. You've called me 1 times.
Hello, Bob. You've called me 2 times.
Hello, Bob. You've called me 3 times.
Hello, Bob. You've called me 4 times.
Hello, Bob. You've called me 5 times.
```

#### Styling der Konsolenausgabe

Sie können die `%c`-Direktive verwenden, um einen CSS-Stil auf die Konsolenausgabe anzuwenden:

```js
console.log(
  "This is %cMy stylish message",
  "color: yellow; font-style: italic; background-color: blue;padding: 2px",
);
```

Der Text vor der Direktive wird nicht beeinträchtigt, aber der Text nach der Direktive wird entsprechend den CSS-Deklarationen im Parameter gestylt.

![Gestylter Text in der Firefox-Konsole](css-styling.png)

Sie können `%c` mehrfach verwenden:

<!-- cSpell:ignore corange cred -->

```js
console.log(
  "Multiple styles: %cred %corange",
  "color: red",
  "color: orange",
  "Additional unformatted message",
);
```

Die folgenden Eigenschaften können zusammen mit der `%c`-Syntax verwendet werden (zumindest in Firefox — sie können in anderen Browsern unterschiedlich sein):

- {{cssxref("background")}} und deren Langformen
- {{cssxref("border")}} und deren Langformen
- {{cssxref("border-radius")}}
- {{cssxref("box-decoration-break")}}
- {{cssxref("box-shadow")}}
- {{cssxref("clear")}} und {{cssxref("float")}}
- {{cssxref("color")}}
- {{cssxref("cursor")}}
- {{cssxref("display")}}
- {{cssxref("font")}} und dessen Langformen
- {{cssxref("line-height")}}
- {{cssxref("margin")}}
- {{cssxref("outline")}} und deren Langformen
- {{cssxref("padding")}}
- Text-bezogene Eigenschaften wie {{cssxref("text-transform")}}
- {{cssxref("white-space")}}
- {{cssxref("word-spacing")}} und {{cssxref("word-break")}}
- {{cssxref("writing-mode")}}

> [!NOTE]
> Jede Konsolennachricht verhält sich standardmäßig wie ein Inline-Element. Wenn Sie möchten, dass Eigenschaften wie `padding`, `margin` usw. Auswirkungen haben, können Sie die Eigenschaft `display` auf `inline-block` setzen.

> [!NOTE]
> Um sowohl helle als auch dunkle Farbschemata zu unterstützen, kann {{cssxref("color_value/light-dark")}} verwendet werden, um Farben anzugeben; zum Beispiel: `color: light-dark(#D00000, #FF4040);`

### Verwendung von Gruppen in der Konsole

Mit verschachtelten Gruppen können Sie Ihre Ausgaben organisieren, indem Sie visuell zusammengehöriges Material kombinieren. Um einen neuen verschachtelten Block zu erstellen, rufen Sie `console.group()` auf. Die Methode `console.groupCollapsed()` ist ähnlich, erstellt jedoch den neuen Block eingeklappt, sodass ein Aufklapp-Button erforderlich ist, um ihn zu lesen.

Um die aktuelle Gruppe zu verlassen, rufen Sie `console.groupEnd()` auf. Zum Beispiel ergibt der folgende Code:

```js
console.log("This is the outer level");
console.group("First group");
console.log("In the first group");
console.group("Second group");
console.log("In the second group");
console.warn("Still in the second group");
console.groupEnd();
console.log("Back to the first group");
console.groupEnd();
console.debug("Back to the outer level");
```

Die Ausgabe sieht wie folgt aus:

![Demo verschachtelter Gruppen in der Firefox-Konsole](console_groups_demo.png)

### Timer

Sie können einen Timer starten, um die Dauer einer bestimmten Operation zu berechnen. Um einen Timer zu starten, rufen Sie die Methode `console.time()` auf und geben Sie ihr einen Namen als einzigen Parameter. Um den Timer zu stoppen und die verstrichene Zeit in Millisekunden zu erhalten, rufen Sie einfach die Methode `console.timeEnd()` auf, indem Sie erneut den Namen des Timers angeben. Bis zu 10.000 Timer können auf einer Seite gleichzeitig laufen.

Zum Beispiel ergibt der folgende Code:

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

Eine Ausgabe, die die verstrichene Zeit protokolliert, während der Benutzer ein Alert-Fenster bestätigt:

![Zeitdokumentation in der Firefox-Konsole](console-timelog.png)

Beachten Sie, dass der Name des Timers sowohl beim Start als auch beim Stoppen angezeigt wird.

### Stack Traces

Das Konsolenobjekt unterstützt auch das Ausgeben eines Stack Traces; dieser zeigt Ihnen den Aufrufpfad, der zu dem Punkt geführt hat, an dem Sie [`console.trace()`](/de/docs/Web/API/console/trace_static) aufrufen. Gegebenen Code wie diesen:

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

Das Ergebnis in der Konsole sieht so aus:

![Stack Trace in der Firefox-Konsole](api-trace2.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — wie die Web-Konsole in Firefox Konsolen-API-Aufrufe behandelt
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) — wie man Konsolenausgaben sieht, wenn das Debugging-Ziel ein mobiles Gerät ist
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/console/api/)
- [Microsoft Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [Safari Web Inspector](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)
