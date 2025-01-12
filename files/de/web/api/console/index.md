---
title: console
slug: Web/API/console
l10n:
  sourceCommit: 0a5ad3b05dcb0b45b774417c0f86bc8ead26575e
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Das **`console`** Objekt bietet Zugriff auf die Debug-Konsole (z. B. die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) in Firefox).

Die Implementierungen der Console-API können zwischen verschiedenen Laufzeiten variieren. Insbesondere können einige Console-Methoden in bestimmten Online-Editoren und IDEs unterschiedlich funktionieren oder überhaupt nicht funktionieren. Um das in dieser Dokumentation beschriebene Verhalten zu sehen, probieren Sie die Methoden in den Entwicklertools Ihres Browsers aus, obwohl es selbst hier zwischen den Browsern einige Unterschiede gibt.

Das `console` Objekt kann von jedem globalen Objekt aus abgerufen werden. [`Window`](/de/docs/Web/API/Window) in Browsing-Bereichen und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) als spezifische Varianten in Worker über die Eigenschaft console. Es wird als [`Window.console`](/de/docs/Web/API/Window/console) bereitgestellt und kann als `console` referenziert werden. Zum Beispiel:

```js
console.log("Failed to open the specified link");
```

## Instanzmethoden

- [`console.assert()`](/de/docs/Web/API/Console/assert_static)
  - : Gibt eine Fehlermeldung auf der Konsole aus, wenn das erste Argument `false` ist.
- [`console.clear()`](/de/docs/Web/API/Console/clear_static)
  - : Löscht die Konsole.
- [`console.count()`](/de/docs/Web/API/Console/count_static)
  - : Gibt die Anzahl der Male aus, die diese Zeile mit dem angegebenen Label aufgerufen wurde.
- [`console.countReset()`](/de/docs/Web/API/Console/countReset_static)
  - : Setzt den Wert des Zählers mit dem angegebenen Label zurück.
- [`console.debug()`](/de/docs/Web/API/Console/debug_static)
  - : Gibt eine Nachricht auf der Konsole mit dem Debug-Protokollebene aus.
- [`console.dir()`](/de/docs/Web/API/Console/dir_static)
  - : Zeigt eine interaktive Auflistung der Eigenschaften eines angegebenen JavaScript-Objekts an. Diese Liste ermöglicht die Verwendung von Dreiecksymbolen, um den Inhalt von Kinderobjekten zu untersuchen.
- [`console.dirxml()`](/de/docs/Web/API/Console/dirxml_static)
  - : Zeigt eine XML/HTML Element-Darstellung des angegebenen Objekts an, wenn möglich, oder die JavaScript-Objektansicht, wenn dies nicht möglich ist.
- [`console.error()`](/de/docs/Web/API/Console/error_static)
  - : Gibt eine Nachricht auf der Konsole mit der Fehler-Protokollebene aus.
- `console.exception()` {{Non-standard_inline}} {{deprecated_inline}}
  - : Ein Alias für `console.error()`.
- [`console.group()`](/de/docs/Web/API/Console/group_static)
  - : Erstellt eine neue Inline-[Gruppe](#verwenden_von_gruppen_in_der_konsole), durch Einrücken der gesamten nachfolgenden Ausgabe um eine weitere Ebene. Um wieder eine Ebene herauszurücken, rufen Sie `console.groupEnd()` auf.
- [`console.groupCollapsed()`](/de/docs/Web/API/Console/groupCollapsed_static)
  - : Erstellt eine neue Inline-[Gruppe](#verwenden_von_gruppen_in_der_konsole), durch Einrücken der gesamten nachfolgenden Ausgabe um eine weitere Ebene. Im Gegensatz zu `console.group()` beginnt dies jedoch mit der zugeklappten Inline-Gruppe, die die Verwendung einer Offenlegungstaste erfordert, um sie zu erweitern. Um wieder eine Ebene herauszurücken, rufen Sie `console.groupEnd()` auf.
- [`console.groupEnd()`](/de/docs/Web/API/Console/groupEnd_static)
  - : Beendet die aktuelle Inline-[Gruppe](#verwenden_von_gruppen_in_der_konsole).
- [`console.info()`](/de/docs/Web/API/Console/info_static)
  - : Gibt eine Nachricht auf der Konsole mit der Info-Protokollebene aus.
- [`console.log()`](/de/docs/Web/API/Console/log_static)
  - : Gibt eine Nachricht auf der Konsole aus.
- [`console.profile()`](/de/docs/Web/API/Console/profile_static) {{Non-standard_inline}}
  - : Startet das eingebaute Profiler-Tool des Browsers (zum Beispiel das [Firefox Performance-Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)). Sie können einen optionalen Namen für das Profil angeben.
- [`console.profileEnd()`](/de/docs/Web/API/Console/profileEnd_static) {{Non-standard_inline}}
  - : Stoppt den Profiler. Sie können das resultierende Profil im Performance-Tool des Browsers sehen (zum Beispiel das [Firefox Performance-Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)).
- [`console.table()`](/de/docs/Web/API/Console/table_static)
  - : Zeigt tabellarische Daten als Tabelle an.
- [`console.time()`](/de/docs/Web/API/Console/time_static)
  - : Startet einen [Timer](#timer) mit einem als Eingabeparameter angegebenen Namen. Bis zu 10.000 gleichzeitige Timer können auf einer gegebenen Seite laufen.
- [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static)
  - : Stoppt den angegebenen [Timer](#timer) und gibt die verstrichene Zeit in Millisekunden seit seinem Start aus.
- [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static)
  - : Gibt den Wert des angegebenen [Timers](#timer) auf der Konsole aus.
- [`console.timeStamp()`](/de/docs/Web/API/Console/timeStamp_static) {{Non-standard_inline}}
  - : Fügt der Zeitachse des Performance-Tools des Browsers eine Markierung hinzu ([Chrome](https://developer.chrome.com/docs/devtools/performance/reference) oder [Firefox](https://profiler.firefox.com/docs/#/./guide-ui-tour-timeline)).
- [`console.trace()`](/de/docs/Web/API/Console/trace_static)
  - : Gibt einen [Stack-Trace](#stack-traces) aus.
- [`console.warn()`](/de/docs/Web/API/Console/warn_static)
  - : Gibt eine Nachricht auf der Konsole mit der Warnung-Protokollebene aus.

## Beispiele

### Textausgabe in die Konsole

Die am häufigsten genutzte Funktion der Konsole ist das Protokollieren von Text und anderen Daten. Es gibt mehrere Kategorien von Ausgaben, die Sie mit den Methoden [`console.log()`](/de/docs/Web/API/Console/log_static), [`console.info()`](/de/docs/Web/API/Console/info_static), [`console.warn()`](/de/docs/Web/API/Console/warn_static), [`console.error()`](/de/docs/Web/API/Console/error_static) oder [`console.debug()`](/de/docs/Web/API/Console/debug_static) erzeugen können. Jede dieser Ausgaben wird unterschiedlich im Protokoll gestylt, und Sie können die Filtersteuerungen Ihres Browsers verwenden, um nur die Arten von Ausgaben anzuzeigen, die Sie interessieren.

Es gibt zwei Möglichkeiten, jede der Ausgabemethoden zu verwenden:

- Übergeben Sie eine variable Anzahl von Argumenten, deren String-Darstellungen zu einem String verkettet und dann an die Konsole ausgegeben werden.
- Übergeben Sie einen String, der null oder mehrere Ersetzungs-Strings enthält, gefolgt von einer variablen Anzahl von Argumenten, die diese ersetzen.

#### Ausgabe eines einzelnen Objekts

Der einfachste Weg, die Protokollierungsmethoden zu verwenden, besteht darin, ein einzelnes Objekt auszugeben:

```js
const someObject = { str: "Some text", id: 5 };
console.log(someObject);
```

Die Ausgabe sieht ungefähr so aus:

```plain
{str:"Some text", id:5}
```

Der Browser zeigt so viele Informationen über das Objekt an, wie er kann und möchte. Zum Beispiel kann auch der private Zustand des Objekts angezeigt werden. Bestimmte Objekttypen, wie DOM-Elemente oder Funktionen, können ebenfalls auf eine spezielle Weise angezeigt werden.

#### Objekte schnappschussartig darstellen

Informationen über ein Objekt werden verzögert abgerufen. Das bedeutet, dass die Protokollnachricht den Inhalt eines Objekts zeigt, wenn es das erste Mal betrachtet wird, nicht als es protokolliert wurde. Zum Beispiel:

```js
const obj = {};
console.log(obj);
obj.prop = 123;
```

Dies wird `{}` ausgeben. Wenn Sie jedoch die Details des Objekts erweitern, sehen Sie `prop: 123`.

Wenn Sie Ihr Objekt ändern wollen und verhindern möchten, dass die protokollierten Informationen aktualisiert werden, können Sie das Objekt vor dem Protokollieren {{Glossary("Deep_copy", "tief klonen")}}. Eine übliche Methode ist es, {{jsxref("JSON.stringify()")}} zu verwenden und es dann mit {{jsxref("JSON.parse()")}} zu parsen:

```js
console.log(JSON.parse(JSON.stringify(obj)));
```

Es gibt andere Alternativen, die in Browsern funktionieren, wie [`structuredClone()`](/de/docs/Web/API/Window/structuredClone), die effektiver beim Klonen verschiedener Objekttypen sind.

#### Ausgabe mehrerer Objekte

Sie können auch mehrere Objekte ausgeben, indem Sie sie bei der Aufruf der Protokollierungsmethode auflisten, so:

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

Der erste Parameter der Protokollierungsmethoden kann ein String sein, der null oder mehrere Ersetzungs-Strings enthält. Jeder Ersetzungs-String wird durch den entsprechenden Argumentwert ersetzt.

- `%o`
  - : Gibt ein JavaScript-Objekt im "optimal nützlichen Formatierungsstil" aus, beispielsweise können DOM-Elemente genauso angezeigt werden, wie sie im Element-Inspektor erscheinen.
- `%O`
  - : Gibt ein JavaScript-Objekt im "generischen JavaScript-Objekt-Formatierungsstil" aus, normalerweise in Form eines erweiterbaren Baumes. Dies ist ähnlich zu [`console.dir()`](/de/docs/Web/API/Console/dir_static).
- `%d` oder `%i`
  - : Gibt eine Ganzzahl aus.
- `%s`
  - : Gibt einen String aus.
- `%f`
  - : Gibt einen Gleitkommawert aus.
- `%c`
  - : Wendet CSS-Stilregeln auf allen folgenden Text an. Siehe [Konsolenausgabe stylen](#konsolenausgabe_stylen).

Einige Browser könnten zusätzliche Formatbezeichner implementieren. Zum Beispiel unterstützen Safari und Firefox die C-Style Präzisionsformatierung `%.<precision>f`. Beispielsweise gibt `console.log("Foo %.2f", 1.1)` die Zahl auf 2 Dezimalstellen aus: `Foo 1.10`, während `console.log("Foo %.2d", 1.1)` die Zahl mit zwei signifikanten Stellen mit einer führenden Null ausgibt: `Foo 01`.

Jeder dieser zieht das nächste Argument nach dem Format-String von der Parameterliste ab. Zum Beispiel:

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

#### Konsolenausgabe stylen

Sie können die `%c`-Anweisung verwenden, um einen CSS-Stil für Konsolenausgaben anzuwenden:

```js
console.log(
  "This is %cMy stylish message",
  "color: yellow; font-style: italic; background-color: blue;padding: 2px",
);
```

Der Text vor der Anweisung wird nicht beeinflusst, aber der Text nach der Anweisung wird mit den CSS-Deklarationen im Parameter gestylt.

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

Die mit der `%c`-Syntax verwendbaren Eigenschaften sind wie folgt (zumindest in Firefox — sie können in anderen Browsern abweichen):

- {{cssxref("background")}} und seine Langform-Äquivalente
- {{cssxref("border")}} und seine Langform-Äquivalente
- {{cssxref("border-radius")}}
- {{cssxref("box-decoration-break")}}
- {{cssxref("box-shadow")}}
- {{cssxref("clear")}} und {{cssxref("float")}}
- {{cssxref("color")}}
- {{cssxref("cursor")}}
- {{cssxref("display")}}
- {{cssxref("font")}} und seine Langform-Äquivalente
- {{cssxref("line-height")}}
- {{cssxref("margin")}}
- {{cssxref("outline")}} und seine Langform-Äquivalente
- {{cssxref("padding")}}
- `text-*` Eigenschaften wie {{cssxref("text-transform")}}
- {{cssxref("white-space")}}
- {{cssxref("word-spacing")}} und {{cssxref("word-break")}}
- {{cssxref("writing-mode")}}

> [!NOTE]
> Jede Konsolennachricht verhält sich standardmäßig wie ein Inline-Element. Wenn Sie möchten, dass Eigenschaften wie `padding`, `margin`, usw. irgendeine Wirkung haben, können Sie die `display`-Eigenschaft auf `display: inline-block` setzen.

> [!NOTE]
> Um sowohl helle als auch dunkle Farbschemata zu unterstützen, kann {{cssxref("color_value/light-dark")}} verwendet werden, wenn Farben spezifiziert werden; zum Beispiel: `color: light-dark(#D00000, #FF4040);`

### Verwenden von Gruppen in der Konsole

Sie können verschachtelte Gruppen verwenden, um Ihre Ausgabe zu organisieren, indem Sie verwandtes Material visuell kombinieren. Um einen neuen verschachtelten Block zu erstellen, rufen Sie `console.group()` auf. Die Methode `console.groupCollapsed()` ist ähnlich, erstellt jedoch den neuen Block zugeklappt und erfordert die Verwendung einer Offenlegungstaste, um ihn zum Lesen zu öffnen.

Um die aktuelle Gruppe zu verlassen, rufen Sie `console.groupEnd()` auf. Zum Beispiel, mit diesem Code:

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

Sie können einen Timer starten, um die Dauer einer spezifischen Operation zu berechnen. Um einen zu starten, rufen Sie die Methode `console.time()` auf und geben ihr einen Namen als einzigen Parameter. Um den Timer zu stoppen und die vergangene Zeit in Millisekunden zu erhalten, rufen Sie einfach die Methode `console.timeEnd()` auf, wobei Sie erneut den Namen des Timers als Parameter übergeben. Bis zu 10.000 Timer können gleichzeitig auf einer angegebenen Seite laufen.

Zum Beispiel, mit diesem Code:

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

Wird die Zeit protokolliert, die der Benutzer benötigt, um das Alert-Fenster zu schließen, die Zeit an die Konsole senden, warten, bis der Benutzer das zweite Alert schließt, und dann die Endzeit an die Konsole senden:

![Zeitprotokoll in der Firefox-Konsole](console-timelog.png)

Beachten Sie, dass der Name des Timers sowohl beim Start als auch beim Stoppen angezeigt wird.

### Stack-Traces

Das Konsolenobjekt unterstützt auch das Ausgeben eines Stack-Traces; dies zeigt Ihnen den Aufrufpfad, der zu dem Punkt führt, an dem Sie [`console.trace()`](/de/docs/Web/API/Console/trace_static) aufrufen. Mit Code wie diesem:

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

Die Ausgabe in der Konsole sieht so aus:

![Stack-Trace in der Firefox-Konsole](api-trace2.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — wie die Web-Konsole in Firefox mit Console-API-Aufrufen umgeht
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) — wie Sie Konsolenausgaben sehen, wenn das Debugging-Ziel ein Mobilgerät ist
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/console/api/)
- [Microsoft Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [Safari Web Inspector](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)
