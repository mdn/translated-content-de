---
title: console
slug: Web/API/console
l10n:
  sourceCommit: e61741cfd9f4758eb36694246364ad58e1e8dc56
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Das **`console`**-Objekt ermöglicht den Zugriff auf die Debugging-Konsole (z. B. die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) in Firefox).

Implementierungen der Console API können sich je nach Laufzeitumgebung unterscheiden. Insbesondere funktionieren manche console-Methoden in einigen Online-Editoren und IDEs möglicherweise anders oder gar nicht. Um das in dieser Dokumentation beschriebene Verhalten zu sehen, probieren Sie die Methoden in den Entwicklertools Ihres Browsers aus. Allerdings gibt es auch dort Unterschiede zwischen Browsern.

Das `console`-Objekt ist in jedem globalen Gültigkeitsbereich verfügbar. Zum Beispiel:

```js
console.log("Failed to open the specified link");
```

## Instanzmethoden

- [`console.assert()`](/de/docs/Web/API/console/assert_static)
  - : Gibt eine Fehlermeldung in der Konsole aus, wenn das erste Argument `false` ist.
- [`console.clear()`](/de/docs/Web/API/console/clear_static)
  - : Leert die Konsole.
- [`console.count()`](/de/docs/Web/API/console/count_static)
  - : Gibt aus, wie oft diese Zeile mit dem angegebenen Label aufgerufen wurde.
- [`console.countReset()`](/de/docs/Web/API/console/countReset_static)
  - : Setzt den Wert des Zählers mit dem angegebenen Label zurück.
- [`console.debug()`](/de/docs/Web/API/console/debug_static)
  - : Gibt eine Nachricht mit dem Log-Level „Debug“ in der Konsole aus.
- [`console.dir()`](/de/docs/Web/API/console/dir_static)
  - : Zeigt eine interaktive Liste der Eigenschaften eines angegebenen JavaScript-Objekts an. Über Aufklappdreiecke können Sie den Inhalt untergeordneter Objekte untersuchen.
- [`console.dirxml()`](/de/docs/Web/API/console/dirxml_static)
  - : Zeigt nach Möglichkeit eine XML-/HTML-Elementdarstellung des angegebenen Objekts an, andernfalls eine JavaScript-Objektansicht.
- [`console.error()`](/de/docs/Web/API/console/error_static)
  - : Gibt eine Nachricht mit dem Log-Level „Fehler“ in der Konsole aus.
- `console.exception()` {{Non-standard_inline}} {{deprecated_inline}}
  - : Ein Alias für `console.error()`.
- [`console.group()`](/de/docs/Web/API/console/group_static)
  - : Erstellt eine neue Inline-[Gruppe](#gruppen_in_der_konsole_verwenden) und rückt alle folgenden Ausgaben um eine weitere Ebene ein. Um eine Ebene zurückzugehen, rufen Sie `console.groupEnd()` auf.
- [`console.groupCollapsed()`](/de/docs/Web/API/console/groupCollapsed_static)
  - : Erstellt eine neue Inline-[Gruppe](#gruppen_in_der_konsole_verwenden) und rückt alle folgenden Ausgaben um eine weitere Ebene ein. Anders als bei `console.group()` ist die Inline-Gruppe zunächst eingeklappt und muss über eine Aufklappschaltfläche erweitert werden. Um eine Ebene zurückzugehen, rufen Sie `console.groupEnd()` auf.
- [`console.groupEnd()`](/de/docs/Web/API/console/groupEnd_static)
  - : Verlässt die aktuelle Inline-[Gruppe](#gruppen_in_der_konsole_verwenden).
- [`console.info()`](/de/docs/Web/API/console/info_static)
  - : Gibt eine Nachricht mit dem Log-Level „Info“ in der Konsole aus.
- [`console.log()`](/de/docs/Web/API/console/log_static)
  - : Gibt eine Nachricht in der Konsole aus.
- [`console.profile()`](/de/docs/Web/API/console/profile_static) {{Non-standard_inline}}
  - : Startet den integrierten Profiler des Browsers (z. B. das [Firefox-Performance-Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)). Sie können optional einen Namen für das Profil angeben.
- [`console.profileEnd()`](/de/docs/Web/API/console/profileEnd_static) {{Non-standard_inline}}
  - : Stoppt den Profiler. Das resultierende Profil können Sie im Performance-Tool des Browsers ansehen (z. B. im [Firefox-Performance-Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)).
- [`console.table()`](/de/docs/Web/API/console/table_static)
  - : Zeigt tabellarische Daten als Tabelle an.
- [`console.time()`](/de/docs/Web/API/console/time_static)
  - : Startet einen [Timer](#timer) mit einem Namen, der als Eingabeparameter angegeben wird. Auf einer Seite können bis zu 10.000 Timer gleichzeitig laufen.
- [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static)
  - : Stoppt den angegebenen [Timer](#timer) und gibt die seit seinem Start verstrichene Zeit in Millisekunden aus.
- [`console.timeLog()`](/de/docs/Web/API/console/timeLog_static)
  - : Gibt den Wert des angegebenen [Timers](#timer) in der Konsole aus.
- [`console.timeStamp()`](/de/docs/Web/API/console/timeStamp_static) {{Non-standard_inline}}
  - : Fügt einer Performance-Aufzeichnung in Entwicklertools, die dies unterstützen, eine Markierung hinzu. Aufzeichnung und Anzeige hängen vom Browser und vom Profiling-Tool ab.
- [`console.trace()`](/de/docs/Web/API/console/trace_static)
  - : Gibt einen [Stack-Trace](#stack-traces) aus.
- [`console.warn()`](/de/docs/Web/API/console/warn_static)
  - : Gibt eine Nachricht mit dem Log-Level „Warnung“ in der Konsole aus.

## Beispiele

### Text in der Konsole ausgeben

Die am häufigsten genutzte Funktion der Konsole ist die Ausgabe von Text und anderen Daten. Mit den Methoden [`console.log()`](/de/docs/Web/API/console/log_static), [`console.info()`](/de/docs/Web/API/console/info_static), [`console.warn()`](/de/docs/Web/API/console/warn_static), [`console.error()`](/de/docs/Web/API/console/error_static) und [`console.debug()`](/de/docs/Web/API/console/debug_static) können Sie verschiedene Arten von Ausgaben erzeugen. Jede davon wird im Protokoll anders dargestellt. Mit den Filterfunktionen Ihres Browsers können Sie sich nur die Arten von Ausgaben anzeigen lassen, die Sie interessieren.

Jede der Ausgabemethoden lässt sich auf zwei Arten verwenden:

- Übergeben Sie eine variable Anzahl von Argumenten, deren Zeichenfolgendarstellungen zu einer Zeichenfolge verkettet und anschließend in der Konsole ausgegeben werden.
- Übergeben Sie eine Zeichenfolge mit keiner oder mehreren Platzhalterzeichenfolgen, gefolgt von einer variablen Anzahl von Argumenten, durch die diese ersetzt werden.

#### Ein einzelnes Objekt ausgeben

Die einfachste Verwendung der Ausgabemethoden besteht darin, ein einzelnes Objekt auszugeben:

```js
const someObject = { str: "Some text", id: 5 };
console.log(someObject);
```

Die Ausgabe sieht ungefähr so aus:

```plain
{str:"Some text", id:5}
```

Der Browser zeigt so viele Informationen über das Objekt an, wie er kann und möchte. Beispielsweise kann auch der private Zustand des Objekts angezeigt werden. Bestimmte Objekttypen, etwa DOM-Elemente oder Funktionen, können außerdem auf besondere Weise dargestellt werden.

#### Momentaufnahmen von Objekten

Informationen über ein Objekt werden erst bei Bedarf abgerufen. Das bedeutet, dass die Protokollnachricht den Inhalt eines Objekts zu dem Zeitpunkt zeigt, zu dem sie erstmals angezeigt wird, und nicht zu dem Zeitpunkt, zu dem sie protokolliert wurde. Zum Beispiel:

```js
const obj = {};
console.log(obj);
obj.prop = 123;
```

Dies gibt `{}` aus. Wenn Sie jedoch die Objektdetails aufklappen, sehen Sie `prop: 123`.

Wenn Sie Ihr Objekt verändern und verhindern möchten, dass die protokollierten Informationen aktualisiert werden, können Sie vor der Ausgabe eine {{Glossary("Deep_copy", "tiefe Kopie")}} des Objekts erstellen. Eine übliche Vorgehensweise besteht darin, es mit {{jsxref("JSON.stringify()")}} zu serialisieren und anschließend mit {{jsxref("JSON.parse()")}} wieder einzulesen:

```js
console.log(JSON.parse(JSON.stringify(obj)));
```

Es gibt weitere Alternativen, die in Browsern funktionieren, etwa [`structuredClone()`](/de/docs/Web/API/Window/structuredClone). Sie eignen sich besser zum Kopieren unterschiedlicher Objekttypen.

#### Mehrere Objekte ausgeben

Sie können auch mehrere Objekte ausgeben, indem Sie sie beim Aufruf der Ausgabemethode nacheinander angeben:

```js
const car = "Dodge Charger";
const someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", someObject);
```

Die Ausgabe sieht dann so aus:

```plain
My first car was a Dodge Charger . The object is: {str:"Some text", id:5}
```

#### Zeichenfolgen-Platzhalter verwenden

Der erste Parameter der Ausgabemethoden kann eine Zeichenfolge mit keiner oder mehreren Platzhalterzeichenfolgen sein. Jede Platzhalterzeichenfolge wird durch den Wert des entsprechenden Arguments ersetzt.

- `%o`
  - : Gibt ein JavaScript-Objekt in einem „optimal nützlichen Format“ aus. Beispielsweise können DOM-Elemente so dargestellt werden, wie sie im Elementinspektor erscheinen.
- `%O`
  - : Gibt ein JavaScript-Objekt in einem „allgemeinen JavaScript-Objektformat“ aus, üblicherweise als aufklappbare Baumstruktur. Dies ähnelt [`console.dir()`](/de/docs/Web/API/console/dir_static).
- `%d` oder `%i`
  - : Gibt eine Ganzzahl aus.
- `%s`
  - : Gibt eine Zeichenfolge aus.
- `%f`
  - : Gibt eine Gleitkommazahl aus.
- `%c`
  - : Wendet CSS-Stilregeln auf den gesamten folgenden Text an. Siehe [Konsolenausgaben gestalten](#konsolenausgaben_gestalten).

Einige Browser unterstützen möglicherweise zusätzliche Formatangaben. Safari und Firefox unterstützen beispielsweise die Präzisionsformatierung im C-Stil `%.<precision>f`. So gibt `console.log("Foo %.2f", 1.1)` die Zahl mit zwei Nachkommastellen aus: `Foo 1.10`. Dagegen gibt `console.log("Foo %.2d", 1.1)` die Zahl zweistellig mit einer führenden 0 aus: `Foo 01`.

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

#### Konsolenausgaben gestalten

Mit der Direktive `%c` können Sie einen CSS-Stil auf eine Konsolenausgabe anwenden:

```js
console.log(
  "This is %cMy stylish message",
  "color: yellow; font-style: italic; background-color: blue;padding: 2px",
);
```

Der Text vor der Direktive bleibt unverändert. Der Text nach der Direktive wird anhand der CSS-Deklarationen im Parameter gestaltet.

![Gestalteter Text in der Firefox-Konsole](css-styling.png)

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

Die folgenden Eigenschaften können mit der `%c`-Syntax verwendet werden (zumindest in Firefox – in anderen Browsern kann dies abweichen):

- {{cssxref("background")}} und die zugehörigen Einzeleigenschaften
- {{cssxref("border")}} und die zugehörigen Einzeleigenschaften
- {{cssxref("border-radius")}}
- {{cssxref("box-decoration-break")}}
- {{cssxref("box-shadow")}}
- {{cssxref("clear")}} und {{cssxref("float")}}
- {{cssxref("color")}}
- {{cssxref("cursor")}}
- {{cssxref("display")}}
- {{cssxref("font")}} und die zugehörigen Einzeleigenschaften
- {{cssxref("line-height")}}
- {{cssxref("margin")}}
- {{cssxref("outline")}} und die zugehörigen Einzeleigenschaften
- {{cssxref("padding")}}
- `text-*`-Eigenschaften wie {{cssxref("text-transform")}}
- {{cssxref("white-space")}}
- {{cssxref("word-spacing")}} und {{cssxref("word-break")}}
- {{cssxref("writing-mode")}}

> [!NOTE]
> Jede Konsolennachricht verhält sich standardmäßig wie ein Inline-Element. Damit Eigenschaften wie `padding` und `margin` wirksam werden, können Sie die Eigenschaft `display` auf `display: inline-block` setzen.

> [!NOTE]
> Um sowohl helle als auch dunkle Farbschemata zu unterstützen, können Sie bei Farbangaben {{cssxref("color_value/light-dark")}} verwenden, zum Beispiel: `color: light-dark(#D00000, #FF4040);`

### Gruppen in der Konsole verwenden

Mit verschachtelten Gruppen können Sie Ihre Ausgabe strukturieren, indem Sie zusammengehörige Inhalte visuell zusammenfassen. Um einen neuen verschachtelten Block zu erstellen, rufen Sie `console.group()` auf. Die Methode `console.groupCollapsed()` funktioniert ähnlich, erstellt den neuen Block aber eingeklappt. Zum Anzeigen seines Inhalts muss er über eine Aufklappschaltfläche geöffnet werden.

Um die aktuelle Gruppe zu verlassen, rufen Sie `console.groupEnd()` auf. Zum Beispiel bei folgendem Code:

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

![Beispiel verschachtelter Gruppen in der Firefox-Konsole](console_groups_demo.png)

### Timer

Mit einem Timer können Sie die Dauer eines bestimmten Vorgangs messen. Um einen Timer zu starten, rufen Sie die Methode `console.time()` auf und übergeben ihr als einzigen Parameter einen Namen. Um den Timer zu stoppen und die verstrichene Zeit in Millisekunden zu erhalten, rufen Sie `console.timeEnd()` auf und übergeben erneut den Namen des Timers. Auf einer Seite können bis zu 10.000 Timer gleichzeitig laufen.

Zum Beispiel bei folgendem Code:

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

Dieser Code protokolliert, wie lange die Benutzerin oder der Benutzer zum Schließen des ersten Benachrichtigungsfensters benötigt, gibt die Zeit in der Konsole aus, wartet auf das Schließen des zweiten Benachrichtigungsfensters und gibt anschließend die Endzeit in der Konsole aus:

![Zeitausgabe in der Firefox-Konsole](console-timelog.png)

Beachten Sie, dass der Name des Timers sowohl beim Starten als auch beim Stoppen angezeigt wird.

### Stack-Traces

Das console-Objekt unterstützt auch die Ausgabe eines Stack-Traces. Dieser zeigt den Aufrufpfad bis zu der Stelle, an der Sie [`console.trace()`](/de/docs/Web/API/console/trace_static) aufrufen. Bei folgendem Code:

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

- [Firefox-Entwicklertools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — wie die Web-Konsole in Firefox Aufrufe der Console API verarbeitet
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) — wie Sie Konsolenausgaben anzeigen, wenn das Debugging-Ziel ein Mobilgerät ist
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/console/api/)
- [Microsoft Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [Safari Web Inspector](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)
