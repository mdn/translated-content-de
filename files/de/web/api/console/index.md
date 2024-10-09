---
title: console
slug: Web/API/console
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Das **`console`** Objekt bietet Zugriff auf die Debug-Konsole (z.B. die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) in Firefox).

Die Implementierungen der Console API können sich zwischen den Laufzeiten unterscheiden. Insbesondere können einige Console-Methoden in manchen Online-Editoren und IDEs unterschiedlich funktionieren oder gar nicht funktionieren. Um das in dieser Dokumentation beschriebene Verhalten zu sehen, probieren Sie die Methoden in den Entwicklerwerkzeugen Ihres Browsers aus; aber auch hier gibt es einige Unterschiede zwischen den Browsern.

Das `console` Objekt kann von jedem globalen Objekt aus aufgerufen werden. [`Window`](/de/docs/Web/API/Window) in Browsing-Bereichen und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) als spezifische Varianten in Workern über die Eigenschaft console. Es wird als [`Window.console`](/de/docs/Web/API/Window/console) bereitgestellt und kann als `console` referenziert werden. Zum Beispiel:

```js
console.log("Failed to open the specified link");
```

## Instanzmethoden

- [`console.assert()`](/de/docs/Web/API/Console/assert_static)
  - : Protokolliert eine Fehlermeldung in die Konsole, wenn das erste Argument `false` ist.
- [`console.clear()`](/de/docs/Web/API/Console/clear_static)
  - : Löscht die Konsole.
- [`console.count()`](/de/docs/Web/API/Console/count_static)
  - : Protokolliert die Anzahl der Aufrufe dieser Zeile mit dem angegebenen Label.
- [`console.countReset()`](/de/docs/Web/API/Console/countReset_static)
  - : Setzt den Wert des Zählers mit dem gegebenen Label zurück.
- [`console.debug()`](/de/docs/Web/API/Console/debug_static)
  - : Gibt eine Nachricht mit dem Debug-Protokolllevel in die Konsole aus.
- [`console.dir()`](/de/docs/Web/API/Console/dir_static)
  - : Zeigt eine interaktive Auflistung der Eigenschaften eines angegebenen JavaScript-Objekts an. Diese Auflistung ermöglicht es, mittels Aufklappdreiecken den Inhalt von Kindobjekten zu untersuchen.
- [`console.dirxml()`](/de/docs/Web/API/Console/dirxml_static)
  - : Zeigt, wenn möglich, eine XML/HTML-Elementdarstellung des angegebenen Objekts oder die JavaScript-Objektansicht an, wenn dies nicht möglich ist.
- [`console.error()`](/de/docs/Web/API/Console/error_static)
  - : Gibt eine Nachricht mit dem Fehler-Protokolllevel in die Konsole aus.
- `console.exception()` {{Non-standard_inline}} {{deprecated_inline}}
  - : Ein Alias für `console.error()`.
- [`console.group()`](/de/docs/Web/API/Console/group_static)
  - : Erstellt eine neue Inline-[Gruppe](#verwendung_von_gruppen_in_der_konsole), die alle folgenden Ausgaben um ein weiteres Level einrückt. Um das Level zu verlassen, rufen Sie `console.groupEnd()` auf.
- [`console.groupCollapsed()`](/de/docs/Web/API/Console/groupCollapsed_static)
  - : Erstellt eine neue Inline-[Gruppe](#verwendung_von_gruppen_in_der_konsole), die alle folgenden Ausgaben um ein weiteres Level einrückt. Im Gegensatz zu `console.group()` beginnt diese Gruppe jedoch zusammengeklappt, sodass ein Offenlegungsknopf erforderlich ist, um sie zu erweitern. Um das Level zu verlassen, rufen Sie `console.groupEnd()` auf.
- [`console.groupEnd()`](/de/docs/Web/API/Console/groupEnd_static)
  - : Beendet die aktuelle Inline-[Gruppe](#verwendung_von_gruppen_in_der_konsole).
- [`console.info()`](/de/docs/Web/API/Console/info_static)
  - : Gibt eine Nachricht mit dem Info-Protokolllevel in die Konsole aus.
- [`console.log()`](/de/docs/Web/API/Console/log_static)
  - : Gibt eine Nachricht in die Konsole aus.
- [`console.profile()`](/de/docs/Web/API/Console/profile_static) {{Non-standard_inline}}
  - : Startet das eingebaute Profiler-Tool des Browsers (zum Beispiel das [Firefox Performance-Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)). Sie können einen optionalen Namen für das Profil angeben.
- [`console.profileEnd()`](/de/docs/Web/API/Console/profileEnd_static) {{Non-standard_inline}}
  - : Stoppt das Profiler-Tool. Sie können das resultierende Profil im Performance-Tool des Browsers einsehen (zum Beispiel das [Firefox Performance-Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)).
- [`console.table()`](/de/docs/Web/API/Console/table_static)
  - : Zeigt tabellarische Daten als Tabelle an.
- [`console.time()`](/de/docs/Web/API/Console/time_static)
  - : Startet einen [Timer](#timer) mit einem als Eingabeparameter spezifizierten Namen. Bis zu 10.000 Timer können gleichzeitig auf einer Seite laufen.
- [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static)
  - : Stoppt den angegebenen [Timer](#timer) und protokolliert die seit dem Start vergangene Zeit in Millisekunden.
- [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static)
  - : Protokolliert den Wert des angegebenen [Timers](#timer) in die Konsole.
- [`console.timeStamp()`](/de/docs/Web/API/Console/timeStamp_static) {{Non-standard_inline}}
  - : Fügt der Zeitleiste des Performance-Tools des Browsers einen Markierer hinzu ([Chrome](https://developer.chrome.com/docs/devtools/performance/reference) oder [Firefox](https://profiler.firefox.com/docs/#/./guide-ui-tour-timeline)).
- [`console.trace()`](/de/docs/Web/API/Console/trace_static)
  - : Gibt einen [Stack-Trace](#stack-traces) aus.
- [`console.warn()`](/de/docs/Web/API/Console/warn_static)
  - : Gibt eine Nachricht in die Konsole aus mit dem Warn-Protokolllevel.

## Beispiele

### Textausgabe in die Konsole

Die am häufigsten genutzte Funktion der Konsole ist das Protokollieren von Text und anderen Daten. Es gibt mehrere Kategorien von Ausgaben, die Sie mit den Methoden [`console.log()`](/de/docs/Web/API/Console/log_static), [`console.info()`](/de/docs/Web/API/Console/info_static), [`console.warn()`](/de/docs/Web/API/Console/warn_static), [`console.error()`](/de/docs/Web/API/Console/error_static) oder [`console.debug()`](/de/docs/Web/API/Console/debug_static) erzeugen können. Jede dieser Methoden liefert unterschiedlich gestylte Ausgaben im Protokoll, und Sie können die Filtersteuerungen Ihres Browsers nutzen, um nur die Arten von Ausgaben anzuzeigen, die Sie interessieren.

Es gibt zwei Möglichkeiten, jede der Ausgabemethoden zu verwenden:

- Übergeben Sie eine variable Anzahl von Argumenten, deren String-Repräsentationen zu einem String zusammengeführt werden, der dann in die Konsole ausgegeben wird.
- Übergeben Sie einen String, der null oder mehr Substitutions-Strings enthält, gefolgt von einer variablen Anzahl von Argumenten, die sie ersetzen.

#### Ausgabe eines einzelnen Objekts

Der einfachste Weg, die Logging-Methoden zu verwenden, besteht darin, ein einzelnes Objekt auszugeben:

```js
const someObject = { str: "Some text", id: 5 };
console.log(someObject);
```

Die Ausgabe sieht ungefähr so aus:

```plain
{str:"Some text", id:5}
```

Der Browser zeigt so viele Informationen über das Objekt an, wie er kann und möchte. Zum Beispiel können auch der private Status des Objekts angezeigt werden. Bestimmte Arten von Objekten, wie DOM-Elemente oder Funktionen, können auch auf spezielle Weise angezeigt werden.

#### Schnappschüsse von Objekten

Informationen über ein Objekt werden verzögert abgefragt. Das bedeutet, dass die Lognachricht den Inhalt eines Objekts zu dem Zeitpunkt zeigt, an dem es zum ersten Mal betrachtet wird, nicht wenn es protokolliert wird. Zum Beispiel:

```js
const obj = {};
console.log(obj);
obj.prop = 123;
```

Dies wird `{}` ausgeben. Wenn Sie jedoch die Details des Objekts erweitern, werden Sie `prop: 123` sehen.

Wenn Sie Ihr Objekt mutieren und verhindern möchten, dass die protokollierten Informationen aktualisiert werden, können Sie das Objekt vor dem Protokollieren {{Glossary("Deep_copy", "tief klonen")}}. Ein gängiger Weg ist die Verwendung von {{jsxref("JSON.stringify()")}} und dann {{jsxref("JSON.parse()")}}:

```js
console.log(JSON.parse(JSON.stringify(obj)));
```

Es gibt andere Alternativen, die in Browsern funktionieren, wie zum Beispiel [`structuredClone()`](/de/docs/Web/API/Window/structuredClone), die effektiver beim Klonen verschiedener Arten von Objekten sind.

#### Ausgabe mehrerer Objekte

Sie können auch mehrere Objekte ausgeben, indem Sie sie beim Aufruf der Logging-Methode auflisten, wie folgt:

```js
const car = "Dodge Charger";
const someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", someObject);
```

Die Ausgabe wird so aussehen:

```plain
My first car was a Dodge Charger. The object is: {str:"Some text", id:5}
```

#### Verwendung von String-Substitutionen

Der erste Parameter der Logging-Methoden kann ein String sein, der null oder mehr Substitutions-Strings enthält. Jeder Substitutions-String wird durch den entsprechenden Argumentwert ersetzt.

- `%o`
  - : Gibt ein JavaScript-Objekt im "optimal nützlichen Formatierungsstil" aus, z.B. können DOM-Elemente genauso angezeigt werden, wie sie im Elementinspektor erscheinen würden.
- `%O`
  - : Gibt ein JavaScript-Objekt im "allgemeinen JavaScript-Objektformatierungsstil" aus, normalerweise in Form eines erweiterbaren Baums. Dies ist ähnlich wie bei [`console.dir()`](/de/docs/Web/API/Console/dir_static).
- `%d` oder `%i`
  - : Gibt eine Ganzzahl aus.
- `%s`
  - : Gibt einen String aus.
- `%f`
  - : Gibt einen Gleitkommawert aus.
- `%c`
  - : Wendet CSS-Stilregeln auf den gesamten folgenden Text an. Siehe [Stil der Konsolenausgabe](#styling_der_konsolenausgabe).

Einige Browser können zusätzliche Formatspezifizierer implementieren. Zum Beispiel unterstützen Safari und Firefox die C-Style-Präzisionsformatierung `%.<precision>f`. Beispielsweise wird `console.log("Foo %.2f", 1.1)` die Zahl auf 2 Dezimalstellen gerundet ausgeben: `Foo 1.10`, während `console.log("Foo %.2d", 1.1)` die Zahl als zwei signifikante Stellen mit einer führenden 0 ausgeben wird: `Foo 01`.

Jeder dieser zieht das nächste Argument nach dem Formatstring von der Parameterliste ab. Zum Beispiel:

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

#### Styling der Konsolenausgabe

Sie können die `%c` Direktive verwenden, um eine CSS-Formatierung auf die Konsolenausgabe anzuwenden:

```js
console.log(
  "This is %cMy stylish message",
  "color: yellow; font-style: italic; background-color: blue;padding: 2px",
);
```

Der Text vor der Direktive wird nicht beeinflusst, aber der Text nach der Direktive wird mit den CSS-Erklärungen im Parameter formatiert.

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

Die mit der `%c` Syntax verwendbaren Eigenschaften sind wie folgt (zumindest in Firefox - sie können in anderen Browsern abweichen):

- {{cssxref("background")}} und ihre Langformen
- {{cssxref("border")}} und ihre Langformen
- {{cssxref("border-radius")}}
- {{cssxref("box-decoration-break")}}
- {{cssxref("box-shadow")}}
- {{cssxref("clear")}} und {{cssxref("float")}}
- {{cssxref("color")}}
- {{cssxref("cursor")}}
- {{cssxref("display")}}
- {{cssxref("font")}} und ihre Langformen
- {{cssxref("line-height")}}
- {{cssxref("margin")}}
- {{cssxref("outline")}} und ihre Langformen
- {{cssxref("padding")}}
- `text-*` Eigenschaften wie {{cssxref("text-transform")}}
- {{cssxref("white-space")}}
- {{cssxref("word-spacing")}} und {{cssxref("word-break")}}
- {{cssxref("writing-mode")}}

> [!NOTE]
> Jede Konsolennachricht verhält sich standardmäßig wie ein Inline-Element. Wenn Sie möchten, dass Eigenschaften wie `padding`, `margin` und so weiter einen Effekt haben, können Sie die Eigenschaft `display` auf `display: inline-block` setzen.

> [!NOTE]
> Um sowohl helle als auch dunkle Farbschemata zu unterstützen, kann {{cssxref("color_value/light-dark")}} verwendet werden, um Farben anzugeben; zum Beispiel: `color: light-dark(#D00000, #FF4040);`

### Verwendung von Gruppen in der Konsole

Sie können verschachtelte Gruppen verwenden, um Ihre Ausgabe zu organisieren, indem Sie verwandtes Material visuell zusammenfassen. Um einen neuen verschachtelten Block zu erstellen, rufen Sie `console.group()` auf. Die Methode `console.groupCollapsed()` ist ähnlich, erstellt jedoch den neuen Block eingeklappt, sodass ein Offenlegungsknopf erforderlich ist, um ihn zum Lesen zu öffnen.

Um die aktuelle Gruppe zu verlassen, rufen Sie `console.groupEnd()` auf. Zum Beispiel, gegeben dieser Code:

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

Sie können einen Timer starten, um die Dauer eines bestimmten Vorgangs zu berechnen. Um einen zu starten, rufen Sie die Methode `console.time()` auf und geben ihr einen Namen als einziges Argument. Um den Timer zu stoppen und die verstrichene Zeit in Millisekunden zu erhalten, rufen Sie einfach die Methode `console.timeEnd()` auf und geben erneut den Namen des Timers als Argument an. Bis zu 10.000 Timer können gleichzeitig auf einer Seite laufen.

Zum Beispiel, gegeben dieser Code:

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

Wird die Zeit protokollieren, die der Benutzer benötigt, um das Alarmfeld zu schließen, die Zeit in die Konsole protokollieren, auf den Benutzer warten, um das zweite Alarmfeld zu schließen, und dann die Endzeit in die Konsole protokollieren:

![Zeitprotokoll in der Firefox-Konsole](console-timelog.png)

Beachten Sie, dass der Name des Timers sowohl beim Starten als auch beim Stoppen des Timers angezeigt wird.

### Stack-Traces

Das Konsolenobjekt unterstützt auch die Ausgabe eines Stack-Traces; dies zeigt Ihnen den Aufrufpfad, der genommen wurde, um den Punkt zu erreichen, an dem Sie [`console.trace()`](/de/docs/Web/API/Console/trace_static) aufrufen. Angenommener Code wie dieser:

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

![Stack-Trace in der Firefox-Konsole](api-trace2.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — wie die Webkonsole in Firefox Konsolen-API-Aufrufe behandelt
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) — wie man die Konsolenausgabe sieht, wenn das Debug-Ziel ein mobiles Gerät ist
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/console/api/)
- [Microsoft Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [Safari Web Inspector](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)
