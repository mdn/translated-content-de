---
title: console
slug: Web/API/console
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Das **`console`**-Objekt bietet Zugriff auf die Debug-Konsole (z.B. die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) in Firefox).

Implementierungen der Console-API können sich zwischen Laufzeitumgebungen unterscheiden. Insbesondere können einige Console-Methoden in einigen Online-Editoren und IDEs unterschiedlich funktionieren oder gar nicht funktionieren. Um das in dieser Dokumentation beschriebene Verhalten zu sehen, probieren Sie die Methoden in den Entwicklertools Ihres Browsers aus, obwohl es auch hier Unterschiede zwischen den Browsern gibt.

Das `console`-Objekt kann von jedem globalen Objekt aus zugegriffen werden. [`Window`](/de/docs/Web/API/Window) in Browsing-Kontexten und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) als spezifische Varianten in Workern über die Eigenschaft console. Es wird als [`Window.console`](/de/docs/Web/API/Window/console) bereitgestellt und kann als `console` referenziert werden. Zum Beispiel:

```js
console.log("Failed to open the specified link");
```

## Instanzmethoden

- [`console.assert()`](/de/docs/Web/API/Console/assert_static)
  - : Loggen Sie eine Fehlermeldung in die Konsole, wenn das erste Argument `false` ist.
- [`console.clear()`](/de/docs/Web/API/Console/clear_static)
  - : Löschen Sie die Konsole.
- [`console.count()`](/de/docs/Web/API/Console/count_static)
  - : Protokollieren Sie, wie oft diese Zeile mit dem angegebenen Label aufgerufen wurde.
- [`console.countReset()`](/de/docs/Web/API/Console/countReset_static)
  - : Setzt den Wert des Zählers mit dem angegebenen Label zurück.
- [`console.debug()`](/de/docs/Web/API/Console/debug_static)
  - : Gibt eine Nachricht auf der Konsole mit dem Debug-Log-Level aus.
- [`console.dir()`](/de/docs/Web/API/Console/dir_static)
  - : Zeigt eine interaktive Auflistung der Eigenschaften eines angegebenen JavaScript-Objekts an. In dieser Auflistung können Sie die Inhalte von Kindobjekten mit Aufklappdreiecken untersuchen.
- [`console.dirxml()`](/de/docs/Web/API/Console/dirxml_static)
  - : Zeigt eine XML/HTML-Elementdarstellung des angegebenen Objekts an, wenn möglich, oder die JavaScript-Objektansicht, wenn es nicht möglich ist.
- [`console.error()`](/de/docs/Web/API/Console/error_static)
  - : Gibt eine Nachricht auf der Konsole mit dem Fehlerlog-Level aus.
- `console.exception()` {{Non-standard_inline}} {{deprecated_inline}}
  - : Ein Alias für `console.error()`.
- [`console.group()`](/de/docs/Web/API/Console/group_static)
  - : Erstellt eine neue Inline-[Gruppe](#verwendung_von_gruppen_in_der_konsole), die alle folgenden Ausgaben um eine Ebene einrückt. Um auf eine Ebene höher zurückzukehren, rufen Sie `console.groupEnd()` auf.
- [`console.groupCollapsed()`](/de/docs/Web/API/Console/groupCollapsed_static)
  - : Erstellt eine neue Inline-[Gruppe](#verwendung_von_gruppen_in_der_konsole) und rückt alle folgenden Ausgaben um eine Ebene ein. Im Unterschied zu `console.group()` beginnt sie jedoch mit der Einklappen-Gruppe, die mit einem Aufdeckknopf ausgeklappt werden muss. Um auf eine Ebene höher zurückzukehren, rufen Sie `console.groupEnd()` auf.
- [`console.groupEnd()`](/de/docs/Web/API/Console/groupEnd_static)
  - : Verlässt die aktuelle Inline-[Gruppe](#verwendung_von_gruppen_in_der_konsole).
- [`console.info()`](/de/docs/Web/API/Console/info_static)
  - : Gibt eine Nachricht auf der Konsole mit dem Informationslog-Level aus.
- [`console.log()`](/de/docs/Web/API/Console/log_static)
  - : Gibt eine Nachricht auf der Konsole aus.
- [`console.profile()`](/de/docs/Web/API/Console/profile_static) {{Non-standard_inline}}
  - : Startet das eingebaute Profiling-Werkzeug des Browsers (z.B. das [Firefox Performance-Werkzeug](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)). Sie können einen optionalen Namen für das Profil angeben.
- [`console.profileEnd()`](/de/docs/Web/API/Console/profileEnd_static) {{Non-standard_inline}}
  - : Stoppt das Profiling-Werkzeug. Sie können das resultierende Profil im Performance-Werkzeug des Browsers sehen (z.B. das [Firefox Performance-Werkzeug](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)).
- [`console.table()`](/de/docs/Web/API/Console/table_static)
  - : Zeigt tabellarische Daten als Tabelle an.
- [`console.time()`](/de/docs/Web/API/Console/time_static)
  - : Startet einen [Timer](#timer) mit einem als Eingabeparameter angegebenen Namen. Bis zu 10.000 gleichzeitige Timer können auf einer Seite laufen.
- [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static)
  - : Stoppt den angegebenen [Timer](#timer) und protokolliert die verstrichene Zeit in Millisekunden seit dem Start.
- [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static)
  - : Protokolliert den Wert des angegebenen [Timers](#timer) auf der Konsole.
- [`console.timeStamp()`](/de/docs/Web/API/Console/timeStamp_static) {{Non-standard_inline}}
  - : Fügt einen Marker zur Timeline des Browser-Performance-Werkzeugs hinzu ([Chrome](https://developer.chrome.com/docs/devtools/performance/reference) oder [Firefox](https://profiler.firefox.com/docs/#/./guide-ui-tour-timeline)).
- [`console.trace()`](/de/docs/Web/API/Console/trace_static)
  - : Gibt einen [Stack-Trace](#stack-traces) aus.
- [`console.warn()`](/de/docs/Web/API/Console/warn_static)
  - : Gibt eine Nachricht auf der Konsole mit dem Warnlog-Level aus.

## Beispiele

### Textausgabe in die Konsole

Das am häufigsten genutzte Feature der Konsole ist das Loggen von Text und anderen Daten. Es gibt mehrere Kategorien von Ausgaben, die Sie mit den Methoden [`console.log()`](/de/docs/Web/API/Console/log_static), [`console.info()`](/de/docs/Web/API/Console/info_static), [`console.warn()`](/de/docs/Web/API/Console/warn_static), [`console.error()`](/de/docs/Web/API/Console/error_static) oder [`console.debug()`](/de/docs/Web/API/Console/debug_static) erzeugen können. Jede dieser Methoden führt zu einer unterschiedlich gestylten Ausgabe im Log, und Sie können die von Ihrem Browser bereitgestellten Filtersteuerungen verwenden, um nur die Arten von Ausgaben anzuzeigen, die Sie interessieren.

Es gibt zwei Möglichkeiten, jede der Ausgabemethoden zu verwenden:

- Übergeben Sie eine variable Anzahl von Argumenten, deren String-Darstellungen zu einem einzigen String verkettet und dann in der Konsole ausgegeben werden.
- Übergeben Sie einen String, der null oder mehr Ersetzungsstrings enthält, gefolgt von einer variablen Anzahl von Argumenten, die diese ersetzen.

#### Ausgabe eines einzelnen Objekts

Die einfachste Art, die Logging-Methoden zu verwenden, besteht darin, ein einzelnes Objekt auszugeben:

```js
const someObject = { str: "Some text", id: 5 };
console.log(someObject);
```

Die Ausgabe sieht ungefähr so aus:

```plain
{str:"Some text", id:5}
```

Der Browser zeigt so viele Informationen über das Objekt an, wie es kann und möchte. Zum Beispiel könnte auch der private Zustand des Objekts angezeigt werden. Bestimmte Objekttypen, wie DOM-Elemente oder Funktionen, können auch auf eine spezielle Weise angezeigt werden.

#### Objekte schnappschussartig darstellen

Informationen über ein Objekt werden verzögert abgerufen. Das bedeutet, dass die Logmeldung den Inhalt eines Objekts zu dem Zeitpunkt anzeigt, an dem es zuerst betrachtet wird, nicht zu dem Zeitpunkt, an dem es protokolliert wurde. Zum Beispiel:

```js
const obj = {};
console.log(obj);
obj.prop = 123;
```

Dies wird `{}` ausgeben. Wenn Sie jedoch die Details des Objekts erweitern, sehen Sie `prop: 123`.

Wenn Sie Ihr Objekt mutieren werden und verhindern möchten, dass die protokollierten Informationen aktualisiert werden, können Sie das Objekt, bevor Sie es protokollieren, {{Glossary("Deep_copy", "tief klonen")}}. Eine häufige Methode besteht darin, {{jsxref("JSON.stringify()")}} und dann {{jsxref("JSON.parse()")}} zu verwenden:

```js
console.log(JSON.parse(JSON.stringify(obj)));
```

Es gibt andere Alternativen, die in Browsern funktionieren, wie [`structuredClone()`](/de/docs/Web/API/Window/structuredClone), die beim Klonen verschiedener Objekttypen effektiver sind.

#### Ausgabe mehrerer Objekte

Sie können auch mehrere Objekte ausgeben, indem Sie diese beim Aufruf der Logging-Methode auflisten, wie folgt:

```js
const car = "Dodge Charger";
const someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", someObject);
```

Die Ausgabe sieht so aus:

```plain
My first car was a Dodge Charger. The object is: {str:"Some text", id:5}
```

#### Verwendung von String-Ersetzungen

Der erste Parameter der Logging-Methoden kann ein String sein, der null oder mehr Ersetzungsstrings enthält. Jeder Ersetzungsstring wird durch den entsprechenden Argumentwert ersetzt.

- `%o`
  - : Gibt ein JavaScript-Objekt im "optimally useful formatting"-Stil aus, zum Beispiel könnten DOM-Elemente so angezeigt werden, wie sie im Elementinspektor erscheinen würden.
- `%O`
  - : Gibt ein JavaScript-Objekt im "generic JavaScript object formatting"-Stil aus, in der Regel in Form eines erweiterbaren Baums. Dies ist ähnlich zu [`console.dir()`](/de/docs/Web/API/Console/dir_static).
- `%d` oder `%i`
  - : Gibt eine Ganzzahl aus.
- `%s`
  - : Gibt einen String aus.
- `%f`
  - : Gibt einen Gleitkommawert aus.
- `%c`
  - : Wendet CSS-Stilregeln auf den gesamten folgenden Text an. Siehe [Stil der Konsolenausgabe](#stil_der_konsolenausgabe).

Einige Browser implementieren möglicherweise zusätzliche Format-Spezifikatoren. Zum Beispiel unterstützen Safari und Firefox die C-Style-Präzisionsformatierung `%.<precision>f`. Zum Beispiel wird `console.log("Foo %.2f", 1.1)` die Zahl mit 2 Dezimalstellen ausgeben: `Foo 1.10`, während `console.log("Foo %.2d", 1.1)` die Zahl als zwei signifikante Ziffern mit führender 0 ausgeben wird: `Foo 01`.

Jeder dieser Spezifikatoren zieht das nächste Argument nach dem Formatstring von der Parameterliste ab. Zum Beispiel:

```js
for (let i = 0; i < 5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i + 1);
}
```

Die Ausgabe sieht so aus:

```plain
Hello, Bob. You've called me 1 times.
Hello, Bob. You've called me 2 times.
Hello, Bob. You've called me 3 times.
Hello, Bob. You've called me 4 times.
Hello, Bob. You've called me 5 times.
```

#### Stil der Konsolenausgabe

Sie können die `%c`-Anweisung verwenden, um einen CSS-Stil auf die Konsolenausgabe anzuwenden:

```js
console.log(
  "This is %cMy stylish message",
  "color: yellow; font-style: italic; background-color: blue;padding: 2px",
);
```

Der Text vor der Anweisung wird nicht beeinflusst, aber der Text nach der Anweisung wird mit den CSS-Deklarationen im Parameter gestylt.

![Gestylter Text in der Firefox-Konsole](css-styling.png)

Sie können `%c` mehrmals verwenden:

```js
console.log(
  "Multiple styles: %cred %corange",
  "color: red",
  "color: orange",
  "Additional unformatted message",
);
```

Die mit der `%c`-Syntax verwendbaren Eigenschaften sind die folgenden (zumindest in Firefox — sie können sich in anderen Browsern unterscheiden):

- {{cssxref("background")}} und seine Langform-Entsprechungen
- {{cssxref("border")}} und seine Langform-Entsprechungen
- {{cssxref("border-radius")}}
- {{cssxref("box-decoration-break")}}
- {{cssxref("box-shadow")}}
- {{cssxref("clear")}} und {{cssxref("float")}}
- {{cssxref("color")}}
- {{cssxref("cursor")}}
- {{cssxref("display")}}
- {{cssxref("font")}} und seine Langform-Entsprechungen
- {{cssxref("line-height")}}
- {{cssxref("margin")}}
- {{cssxref("outline")}} und seine Langform-Entsprechungen
- {{cssxref("padding")}}
- `text-*`-Eigenschaften wie {{cssxref("text-transform")}}
- {{cssxref("white-space")}}
- {{cssxref("word-spacing")}} und {{cssxref("word-break")}}
- {{cssxref("writing-mode")}}

> [!NOTE]
> Jede Konsolennachricht verhält sich standardmäßig wie ein Inline-Element. Wenn Sie möchten, dass Eigenschaften wie `padding`, `margin` usw. eine Wirkung haben, können Sie die `display`-Eigenschaft auf `display: inline-block` setzen.

> [!NOTE]
> Um sowohl helle als auch dunkle Farbschemata zu unterstützen, kann {{cssxref("color_value/light-dark")}} verwendet werden, wenn Farben angegeben werden; zum Beispiel: `color: light-dark(#D00000, #FF4040);`

### Verwendung von Gruppen in der Konsole

Sie können verschachtelte Gruppen verwenden, um Ihre Ausgabe zu organisieren, indem Sie verwandtes Material visuell kombinieren. Um einen neuen verschachtelten Block zu erstellen, rufen Sie `console.group()` auf. Die Methode `console.groupCollapsed()` ist ähnlich, erstellt jedoch den neuen Block eingeklappt, wodurch ein Offenlegungsbutton erforderlich ist, um ihn zum Lesen zu öffnen.

Um die aktuelle Gruppe zu verlassen, rufen Sie `console.groupEnd()` auf. Zum Beispiel mit diesem Code:

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

Die Ausgabe sieht so aus:

![Demo von verschachtelten Gruppen in der Firefox-Konsole](console_groups_demo.png)

### Timer

Sie können einen Timer starten, um die Dauer eines bestimmten Vorgangs zu berechnen. Um einen zu starten, rufen Sie die `console.time()`-Methode auf und geben ihr als einzigen Parameter einen Namen. Um den Timer zu stoppen und die verstrichene Zeit in Millisekunden zu erhalten, rufen Sie einfach die Methode `console.timeEnd()` auf, wobei Sie den Namen des Timers als Parameter erneut übergeben. Bis zu 10.000 Timer können gleichzeitig auf einer Seite laufen.

Zum Beispiel mit diesem Code:

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

Wird die Zeit, die der Benutzer zum Schließen des Meldungsfeldes benötigt, protokollieren, die Zeit in der Konsole protokollieren, auf das Schließen des zweiten Meldungsfeldes durch den Benutzer warten und dann die Endzeit in der Konsole protokollieren:

![Zeitprotokoll in der Firefox-Konsole](console-timelog.png)

Beachten Sie, dass der Name des Timers sowohl beim Start als auch beim Beenden des Timers angezeigt wird.

### Stack-Traces

Das Konsolenobjekt unterstützt auch die Ausgabe eines Stack-Traces; dies zeigt Ihnen den Aufrufpfad, der genommen wurde, um zu dem Punkt zu gelangen, an dem Sie [`console.trace()`](/de/docs/Web/API/Console/trace_static) aufrufen. Gegebener Code sieht so aus:

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

Die Ausgabe in der Konsole sieht ungefähr so aus:

![Stack Trace in der Firefox-Konsole](api-trace2.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — wie die Webkonsole in Firefox Konsolen-API-Aufrufe behandelt
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) — wie man die Konsolenausgabe sieht, wenn das Debugging-Ziel ein mobiles Gerät ist
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/console/api/)
- [Microsoft Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [Safari Web Inspector](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)
