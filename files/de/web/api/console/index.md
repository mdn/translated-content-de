---
title: console
slug: Web/API/console
l10n:
  sourceCommit: 6c8fe847cba7ba4c85b003a21eb7e6d4005054e3
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Das **`console`**-Objekt ermöglicht den Zugriff auf die Debugging-Konsole (z. B. die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) in Firefox).

Die Implementierungen der Console API können sich je nach Laufzeitumgebung unterscheiden. Insbesondere funktionieren manche Konsolenmethoden in einigen Online-Editoren und IDEs möglicherweise anders oder gar nicht. Um das in dieser Dokumentation beschriebene Verhalten zu sehen, probieren Sie die Methoden in den Entwicklertools Ihres Browsers aus. Allerdings gibt es auch dort Unterschiede zwischen Browsern.

Das `console`-Objekt ist in jedem globalen Gültigkeitsbereich verfügbar. Zum Beispiel:

```js
console.log("Failed to open the specified link");
```

## Instanzmethoden

- [`console.assert()`](/de/docs/Web/API/console/assert_static)
  - : Gibt eine Fehlermeldung in der Konsole aus, wenn das erste Argument `false` ist.
- [`console.clear()`](/de/docs/Web/API/console/clear_static)
  - : Leert die Konsole.
- [`console.context()`](/de/docs/Web/API/console/context_static) {{Non-standard_inline}}
  - : Erstellt einen neuen Konsolenkontext: ein Objekt mit den meisten `console`-Methoden, dessen Meldungen einer optionalen Bezeichnung zugeordnet sind.
- [`console.count()`](/de/docs/Web/API/console/count_static)
  - : Gibt aus, wie oft diese Zeile mit der angegebenen Bezeichnung aufgerufen wurde.
- [`console.countReset()`](/de/docs/Web/API/console/countReset_static)
  - : Setzt den Zähler mit der angegebenen Bezeichnung zurück.
- [`console.debug()`](/de/docs/Web/API/console/debug_static)
  - : Gibt eine Meldung mit dem Debug-Protokollierungslevel in der Konsole aus.
- [`console.dir()`](/de/docs/Web/API/console/dir_static)
  - : Zeigt eine interaktive Auflistung der Eigenschaften eines angegebenen JavaScript-Objekts an. Mithilfe der Aufklappdreiecke können Sie den Inhalt untergeordneter Objekte untersuchen.
- [`console.dirxml()`](/de/docs/Web/API/console/dirxml_static)
  - : Zeigt nach Möglichkeit eine XML-/HTML-Element-Darstellung des angegebenen Objekts an, andernfalls die JavaScript-Objektansicht.
- [`console.error()`](/de/docs/Web/API/console/error_static)
  - : Gibt eine Meldung mit dem Fehler-Protokollierungslevel in der Konsole aus.
- `console.exception()` {{Non-standard_inline}} {{deprecated_inline}}
  - : Ein Alias für `console.error()`.
- [`console.group()`](/de/docs/Web/API/console/group_static)
  - : Erstellt eine neue verschachtelte [Gruppe](#gruppen_in_der_konsole_verwenden) und rückt alle folgenden Ausgaben um eine weitere Ebene ein. Rufen Sie `console.groupEnd()` auf, um eine Ebene zurückzugehen.
- [`console.groupCollapsed()`](/de/docs/Web/API/console/groupCollapsed_static)
  - : Erstellt eine neue verschachtelte [Gruppe](#gruppen_in_der_konsole_verwenden) und rückt alle folgenden Ausgaben um eine weitere Ebene ein. Anders als bei `console.group()` ist die Gruppe zunächst eingeklappt und muss über eine Schaltfläche aufgeklappt werden. Rufen Sie `console.groupEnd()` auf, um eine Ebene zurückzugehen.
- [`console.groupEnd()`](/de/docs/Web/API/console/groupEnd_static)
  - : Verlässt die aktuelle verschachtelte [Gruppe](#gruppen_in_der_konsole_verwenden).
- [`console.info()`](/de/docs/Web/API/console/info_static)
  - : Gibt eine Meldung mit dem Info-Protokollierungslevel in der Konsole aus.
- [`console.log()`](/de/docs/Web/API/console/log_static)
  - : Gibt eine Meldung in der Konsole aus.
- [`console.profile()`](/de/docs/Web/API/console/profile_static) {{Non-standard_inline}}
  - : Startet den integrierten Profiler des Browsers (zum Beispiel das [Firefox-Performance-Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)). Sie können optional einen Namen für das Profil angeben.
- [`console.profileEnd()`](/de/docs/Web/API/console/profileEnd_static) {{Non-standard_inline}}
  - : Stoppt den Profiler. Das erstellte Profil können Sie im Performance-Tool des Browsers ansehen (zum Beispiel im [Firefox-Performance-Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)).
- [`console.table()`](/de/docs/Web/API/console/table_static)
  - : Zeigt tabellarische Daten als Tabelle an.
- [`console.time()`](/de/docs/Web/API/console/time_static)
  - : Startet einen [Timer](#timer) mit einem als Eingabeparameter angegebenen Namen. Auf einer Seite können bis zu 10.000 Timer gleichzeitig laufen.
- [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static)
  - : Stoppt den angegebenen [Timer](#timer) und protokolliert die seit seinem Start verstrichene Zeit in Millisekunden.
- [`console.timeLog()`](/de/docs/Web/API/console/timeLog_static)
  - : Gibt den Wert des angegebenen [Timers](#timer) in der Konsole aus.
- [`console.timeStamp()`](/de/docs/Web/API/console/timeStamp_static) {{Non-standard_inline}}
  - : Fügt einer Performance-Aufzeichnung in Entwicklertools, die dies unterstützen, eine Markierung hinzu. Aufzeichnung und Anzeige hängen vom Browser und Profiling-Tool ab.
- [`console.trace()`](/de/docs/Web/API/console/trace_static)
  - : Gibt einen [Stacktrace](#stacktraces) aus.
- [`console.warn()`](/de/docs/Web/API/console/warn_static)
  - : Gibt eine Meldung mit dem Warnungs-Protokollierungslevel in der Konsole aus.

## Beispiele

### Text in der Konsole ausgeben

Die am häufigsten verwendete Funktion der Konsole ist die Ausgabe von Text und anderen Daten. Mit den Methoden [`console.log()`](/de/docs/Web/API/console/log_static), [`console.info()`](/de/docs/Web/API/console/info_static), [`console.warn()`](/de/docs/Web/API/console/warn_static), [`console.error()`](/de/docs/Web/API/console/error_static) und [`console.debug()`](/de/docs/Web/API/console/debug_static) können Sie verschiedene Arten von Ausgaben erzeugen. Diese werden im Protokoll jeweils unterschiedlich dargestellt. Mit den Filterfunktionen Ihres Browsers können Sie nur die Ausgabearten anzeigen, die Sie interessieren.

Jede der Ausgabemethoden lässt sich auf zwei Arten verwenden:

- Übergeben Sie eine variable Anzahl von Argumenten, deren Zeichenfolgendarstellungen zu einer Zeichenfolge verknüpft und anschließend in der Konsole ausgegeben werden.
- Übergeben Sie eine Zeichenfolge mit keiner oder mehreren Platzhalterzeichenfolgen, gefolgt von einer variablen Anzahl von Argumenten, die diese ersetzen.

#### Ein einzelnes Objekt ausgeben

Die einfachste Verwendung der Protokollierungsmethoden besteht darin, ein einzelnes Objekt auszugeben:

```js
const someObject = { str: "Some text", id: 5 };
console.log(someObject);
```

Die Ausgabe sieht ungefähr so aus:

```plain
{str:"Some text", id:5}
```

Der Browser zeigt so viele Informationen über das Objekt an, wie er kann und anzeigen möchte. Beispielsweise kann auch der private Zustand des Objekts angezeigt werden. Bestimmte Objekttypen, etwa DOM-Elemente oder Funktionen, können zudem auf besondere Weise dargestellt werden.

#### Momentaufnahmen von Objekten erstellen

Informationen über ein Objekt werden erst bei Bedarf abgerufen. Das bedeutet, dass die Protokollmeldung den Inhalt eines Objekts zu dem Zeitpunkt zeigt, zu dem es erstmals betrachtet wird, und nicht zu dem Zeitpunkt, zu dem es protokolliert wurde. Zum Beispiel:

```js
const obj = {};
console.log(obj);
obj.prop = 123;
```

Dies gibt `{}` aus. Wenn Sie jedoch die Details des Objekts aufklappen, sehen Sie `prop: 123`.

Wenn Sie Ihr Objekt verändern möchten und verhindern wollen, dass die protokollierten Informationen aktualisiert werden, können Sie vor der Protokollierung eine {{Glossary("Deep_copy", "tiefe Kopie")}} des Objekts erstellen. Eine gängige Methode ist, es zunächst mit {{jsxref("JSON.stringify()")}} und anschließend mit {{jsxref("JSON.parse()")}} zu verarbeiten:

```js
console.log(JSON.parse(JSON.stringify(obj)));
```

Es gibt weitere Alternativen, die in Browsern funktionieren, etwa [`structuredClone()`](/de/docs/Web/API/Window/structuredClone). Diese eignen sich besser zum Kopieren unterschiedlicher Objekttypen.

#### Mehrere Objekte ausgeben

Sie können auch mehrere Objekte ausgeben, indem Sie diese beim Aufruf der Protokollierungsmethode angeben:

```js
const car = "Dodge Charger";
const someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", someObject);
```

Die Ausgabe sieht dann so aus:

```plain
My first car was a Dodge Charger . The object is: {str:"Some text", id:5}
```

#### Platzhalter in Zeichenfolgen verwenden

Der erste Parameter der Protokollierungsmethoden kann eine Zeichenfolge mit keiner oder mehreren Platzhalterzeichenfolgen sein. Jede Platzhalterzeichenfolge wird durch den Wert des entsprechenden Arguments ersetzt.

- `%o`
  - : Gibt ein JavaScript-Objekt in einer „optimal nutzbaren Formatierung“ aus. DOM-Elemente können beispielsweise so dargestellt werden, wie sie im Element-Inspektor erscheinen.
- `%O`
  - : Gibt ein JavaScript-Objekt in einer „allgemeinen JavaScript-Objektformatierung“ aus, üblicherweise als aufklappbare Baumstruktur. Dies ähnelt [`console.dir()`](/de/docs/Web/API/console/dir_static).
- `%d` oder `%i`
  - : Gibt eine Ganzzahl aus.
- `%s`
  - : Gibt eine Zeichenfolge aus.
- `%f`
  - : Gibt eine Gleitkommazahl aus.
- `%c`
  - : Wendet CSS-Stilregeln auf den gesamten folgenden Text an. Siehe [Konsolenausgaben formatieren](#konsolenausgaben_formatieren).

Einige Browser unterstützen möglicherweise zusätzliche Formatbezeichner. Safari und Firefox unterstützen beispielsweise die Präzisionsformatierung im C-Stil `%.<precision>f`. So gibt `console.log("Foo %.2f", 1.1)` die Zahl mit zwei Nachkommastellen aus: `Foo 1.10`. Dagegen gibt `console.log("Foo %.2d", 1.1)` die Zahl mit zwei signifikanten Stellen und einer führenden 0 aus: `Foo 01`.

Jeder dieser Platzhalter verwendet das nächste Argument nach der Formatzeichenfolge aus der Parameterliste. Zum Beispiel:

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

#### Konsolenausgaben formatieren

Mit der `%c`-Direktive können Sie CSS-Stile auf Konsolenausgaben anwenden:

```js
console.log(
  "This is %cMy stylish message",
  "color: yellow; font-style: italic; background-color: blue;padding: 2px",
);
```

Der Text vor der Direktive bleibt unverändert. Der Text danach wird gemäß den CSS-Deklarationen im Parameter formatiert.

![Formatierter Text in der Firefox-Konsole](css-styling.png)

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

Die Eigenschaften, die Sie zusammen mit der `%c`-Syntax verwenden können, sind folgende (zumindest in Firefox – in anderen Browsern können sie abweichen):

- {{cssxref("background")}} und die entsprechenden Einzeleigenschaften
- {{cssxref("border")}} und die entsprechenden Einzeleigenschaften
- {{cssxref("border-radius")}}
- {{cssxref("box-decoration-break")}}
- {{cssxref("box-shadow")}}
- {{cssxref("clear")}} und {{cssxref("float")}}
- {{cssxref("color")}}
- {{cssxref("cursor")}}
- {{cssxref("display")}}
- {{cssxref("font")}} und die entsprechenden Einzeleigenschaften
- {{cssxref("line-height")}}
- {{cssxref("margin")}}
- {{cssxref("outline")}} und die entsprechenden Einzeleigenschaften
- {{cssxref("padding")}}
- `text-*`-Eigenschaften wie {{cssxref("text-transform")}}
- {{cssxref("white-space")}}
- {{cssxref("word-spacing")}} und {{cssxref("word-break")}}
- {{cssxref("writing-mode")}}

> [!NOTE]
> Jede Konsolenmeldung verhält sich standardmäßig wie ein Inline-Element. Damit Eigenschaften wie `padding` und `margin` eine Wirkung haben, können Sie die Eigenschaft `display` auf `display: inline-block` setzen.

> [!NOTE]
> Um sowohl helle als auch dunkle Farbschemata zu unterstützen, können Sie bei der Angabe von Farben {{cssxref("color_value/light-dark")}} verwenden, zum Beispiel: `color: light-dark(#D00000, #FF4040);`

### Gruppen in der Konsole verwenden

Mit verschachtelten Gruppen können Sie Ihre Ausgaben organisieren, indem Sie zusammengehörige Inhalte visuell gruppieren. Rufen Sie `console.group()` auf, um einen neuen verschachtelten Block zu erstellen. Die Methode `console.groupCollapsed()` funktioniert ähnlich, erstellt den neuen Block jedoch eingeklappt. Um ihn lesen zu können, müssen Sie ihn über eine Schaltfläche aufklappen.

Rufen Sie `console.groupEnd()` auf, um die aktuelle Gruppe zu verlassen. Bei folgendem Code beispielsweise:

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

sieht die Ausgabe so aus:

![Demonstration verschachtelter Gruppen in der Firefox-Konsole](console_groups_demo.png)

### Timer

Sie können einen Timer starten, um die Dauer eines bestimmten Vorgangs zu ermitteln. Rufen Sie dazu die Methode `console.time()` auf und übergeben Sie ihr einen Namen als einzigen Parameter. Um den Timer zu stoppen und die verstrichene Zeit in Millisekunden zu erhalten, rufen Sie `console.timeEnd()` auf und übergeben erneut den Namen des Timers. Auf einer Seite können bis zu 10.000 Timer gleichzeitig laufen.

Bei folgendem Code beispielsweise:

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

wird die Zeit protokolliert, die der Benutzer zum Schließen des Hinweisfensters benötigt. Die Zeit wird in der Konsole ausgegeben. Anschließend wird gewartet, bis der Benutzer den zweiten Hinweis schließt, und die Endzeit wird in der Konsole ausgegeben:

![Zeitprotokoll in der Firefox-Konsole](console-timelog.png)

Beachten Sie, dass der Name des Timers sowohl beim Starten als auch beim Stoppen angezeigt wird.

### Stacktraces

Das Konsolenobjekt unterstützt auch die Ausgabe eines Stacktraces. Dieser zeigt den Aufrufpfad bis zu der Stelle, an der Sie [`console.trace()`](/de/docs/Web/API/console/trace_static) aufrufen. Bei folgendem Code:

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

sieht die Ausgabe in der Konsole ungefähr so aus:

![Stacktrace in der Firefox-Konsole](api-trace2.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox-Entwicklertools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — wie die Web-Konsole in Firefox Aufrufe der Console API verarbeitet
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) — wie Sie Konsolenausgaben anzeigen, wenn das Debugging-Ziel ein Mobilgerät ist
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/console/api/)
- [Microsoft Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [Safari Web Inspector](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)
