---
title: Konsole
slug: Web/API/console
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Das **`console`**-Objekt bietet Zugriff auf die Debugging-Konsole (z. B. die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) in Firefox).

Implementierungen der Konsole-API können sich zwischen Laufzeitumgebungen unterscheiden. Insbesondere können einige Konsolenmethoden in bestimmten Online-Editoren und IDEs unterschiedlich funktionieren oder gar nicht arbeiten. Um das in dieser Dokumentation beschriebene Verhalten zu sehen, probieren Sie die Methoden in den Entwicklungstools Ihres Browsers aus, obwohl es selbst hier einige Unterschiede zwischen den Browsern gibt.

Das `console`-Objekt kann von jedem globalen Objekt aus zugegriffen werden. {{domxref("Window")}} in Browserscopes und {{domxref("WorkerGlobalScope")}} als spezifische Varianten in Workern über die Eigenschaft console. Es ist als {{domxref("Window.console")}} exponiert und kann als `console` referenziert werden. Zum Beispiel:

```js
console.log("Failed to open the specified link");
```

## Instanzmethoden

- {{domxref("console/assert_static", "console.assert()")}}
  - : Protokolliert eine Fehlermeldung zur Konsole, wenn das erste Argument `false` ist.
- {{domxref("console/clear_static", "console.clear()")}}
  - : Löscht die Konsole.
- {{domxref("console/count_static", "console.count()")}}
  - : Protokolliert, wie oft diese Zeile mit dem gegebenen Label aufgerufen wurde.
- {{domxref("console/countReset_static", "console.countReset()")}}
  - : Setzt den Wert des Zählers mit dem gegebenen Label zurück.
- {{domxref("console/debug_static", "console.debug()")}}
  - : Gibt eine Nachricht mit dem Debug-Protokolllevel zur Konsole aus.
- {{domxref("console/dir_static", "console.dir()")}}
  - : Zeigt eine interaktive Auflistung der Eigenschaften eines angegebenen JavaScript-Objekts an. Diese Auflistung ermöglicht es Ihnen, die Inhalte von Unterobjekten mit Hilfe von Ausklapp-Dreiecken zu untersuchen.
- {{domxref("console/dirxml_static", "console.dirxml()")}}
  - : Zeigt, wenn möglich, eine XML/HTML-Elementdarstellung des angegebenen Objekts an oder die JavaScript-Objektansicht, wenn es nicht möglich ist.
- {{domxref("console/error_static", "console.error()")}}
  - : Gibt eine Nachricht mit dem Error-Protokolllevel zur Konsole aus.
- `console.exception()` {{Non-standard_inline}} {{deprecated_inline}}
  - : Ein Alias für `console.error()`.
- {{domxref("console/group_static", "console.group()")}}
  - : Erstellt eine neue Inline-[Gruppe](#gruppen_in_der_konsole_verwenden), die alle folgenden Ausgaben um eine weitere Ebene einrückt. Um eine Ebene zurückzugehen, rufen Sie `console.groupEnd()` auf.
- {{domxref("console/groupCollapsed_static", "console.groupCollapsed()")}}
  - : Erstellt eine neue Inline-[Gruppe](#gruppen_in_der_konsole_verwenden), die alle folgenden Ausgaben um eine weitere Ebene einrückt. Im Gegensatz zu `console.group()` beginnt diese jedoch mit der eingefalteten Inline-Gruppe, die ein Offnen mit einer Ausklapptaste erfordert. Um eine Ebene zurückzugehen, rufen Sie `console.groupEnd()` auf.
- {{domxref("console/groupEnd_static", "console.groupEnd()")}}
  - : Verlassen Sie die aktuelle Inline-[Gruppe](#gruppen_in_der_konsole_verwenden).
- {{domxref("console/info_static", "console.info()")}}
  - : Gibt eine Nachricht mit dem Info-Protokolllevel zur Konsole aus.
- {{domxref("console/log_static", "console.log()")}}
  - : Gibt eine Nachricht zur Konsole aus.
- {{domxref("console/profile_static", "console.profile()")}} {{Non-standard_inline}}
  - : Startet den integrierten Profiler des Browsers (zum Beispiel das [Firefox Performance Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)). Sie können einen optionalen Namen für das Profil angeben.
- {{domxref("console/profileEnd_static", "console.profileEnd()")}} {{Non-standard_inline}}
  - : Beendet den Profiler. Sie können das resultierende Profil im Performance-Tool des Browsers sehen (zum Beispiel das [Firefox Performance Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)).
- {{domxref("console/table_static", "console.table()")}}
  - : Zeigt tabellarische Daten als Tabelle an.
- {{domxref("console/time_static", "console.time()")}}
  - : Startet einen [Timer](#timer) mit einem als Eingabeparameter angegebenen Namen. Bis zu 10.000 gleichzeitige Timer können auf einer bestimmten Seite ausgeführt werden.
- {{domxref("console/timeEnd_static", "console.timeEnd()")}}
  - : Stoppt den angegebenen [Timer](#timer) und protokolliert die verstrichene Zeit in Millisekunden, seit er gestartet wurde.
- {{domxref("console/timeLog_static", "console.timeLog()")}}
  - : Protokolliert den Wert des angegebenen [Timers](#timer) zur Konsole.
- {{domxref("console/timeStamp_static", "console.timeStamp()")}} {{Non-standard_inline}}
  - : Fügt einen Marker zur Zeitleiste des Performance-Tools des Browsers hinzu ([Chrome](https://developer.chrome.com/docs/devtools/performance/reference) oder [Firefox](https://profiler.firefox.com/docs/#/./guide-ui-tour-timeline)).
- {{domxref("console/trace_static", "console.trace()")}}
  - : Gibt einen [Stacktrace](#stacktraces) zur Konsole aus.
- {{domxref("console/warn_static", "console.warn()")}}
  - : Gibt eine Warnmeldung zur Konsole aus.

## Beispiele

### Text zur Konsole ausgeben

Das am häufigsten verwendete Feature der Konsole ist das Protokollieren von Text und anderen Daten. Es gibt verschiedene Kategorien von Ausgaben, die Sie mit den Methoden {{domxref("console/log_static", "console.log()")}}, {{domxref("console/info_static", "console.info()")}}, {{domxref("console/warn_static", "console.warn()")}}, {{domxref("console/error_static", "console.error()")}} oder {{domxref("console/debug_static", "console.debug()")}} erzeugen können. Jede dieser Methoden führt zu anders gestylter Ausgabe im Protokoll, und Sie können die von Ihrem Browser bereitgestellten Filterkontrollen verwenden, um nur die Arten von Ausgaben anzuzeigen, die Sie interessieren.

Es gibt zwei Möglichkeiten, jede der Ausgabemethoden zu verwenden:

- Übergeben Sie eine variable Anzahl von Argumenten, deren Zeichenfolgenrepräsentationen zu einer einzigen Zeichenfolge zusammengefügt und dann zur Konsole ausgegeben werden.
- Übergeben Sie eine Zeichenfolge, die null oder mehr Ersetzungszeichenfolgen enthält, gefolgt von einer variablen Anzahl von Argumenten, um diese zu ersetzen.

#### Ein einzelnes Objekt ausgeben

Die einfachste Möglichkeit, die Protokolliermethoden zu verwenden, ist das Ausgeben eines einzelnen Objekts:

```js
const someObject = { str: "Some text", id: 5 };
console.log(someObject);
```

Die Ausgabe sieht ungefähr so aus:

```plain
{str:"Some text", id:5}
```

Der Browser wird so viele Informationen über das Objekt anzeigen, wie er kann und möchte. Beispielsweise können auch private Status des Objekts angezeigt werden. Bestimmte Objekttypen, wie DOM-Elemente oder Funktionen, können ebenfalls auf spezielle Weise angezeigt werden.

#### Objekte schnappschussartig aufnehmen

Informationen über ein Objekt werden verzögert abgerufen. Das bedeutet, dass die Protokollnachricht den Inhalt eines Objekts zu dem Zeitpunkt zeigt, an dem es zum ersten Mal angesehen wird, nicht, wann es protokolliert wurde. Beispielsweise:

```js
const obj = {};
console.log(obj);
obj.prop = 123;
```

Dies wird `{}` ausgeben. Wenn Sie jedoch die Details des Objekts erweitern, sehen Sie `prop: 123`.

Wenn Sie Ihr Objekt mutieren und verhindern möchten, dass die protokollierten Informationen aktualisiert werden, können Sie das Objekt vor dem Protokollieren [tief klonen](/de/docs/Glossary/Deep_copy). Eine übliche Methode ist es, {{jsxref("JSON.stringify()")}} und dann {{jsxref("JSON.parse()")}} zu verwenden:

```js
console.log(JSON.parse(JSON.stringify(obj)));
```

Es gibt andere Alternativen, die in Browsern funktionieren, wie [`structuredClone()`](/de/docs/Web/API/structuredClone), die effektiver beim Klonen verschiedener Objekttypen sind.

#### Mehrere Objekte ausgeben

Sie können auch mehrere Objekte ausgeben, indem Sie sie auflisten, wenn Sie die Protokolliermethode aufrufen, wie folgt:

```js
const car = "Dodge Charger";
const someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", someObject);
```

Die Ausgabe wird so aussehen:

```plain
My first car was a Dodge Charger. The object is: {str:"Some text", id:5}
```

#### Ersetzen von Zeichenfolgen verwenden

Der erste Parameter der Protokolliermethoden kann eine Zeichenfolge enthalten, die null oder mehr Ersetzungszeichenfolgen enthält. Jede Ersetzungszeichenfolge wird durch den entsprechenden Argumentwert ersetzt.

- `%o`
  - : Gibt ein JavaScript-Objekt im Stil der "nützlichsten Formatierung" aus, zum Beispiel können DOM-Elemente so angezeigt werden, wie sie im Elementinspektor erscheinen würden.
- `%O`
  - : Gibt ein JavaScript-Objekt im Stil der "generischen JavaScript-Objektformatierung" aus, normalerweise in Form eines erweiterbaren Baums. Dies ist ähnlich wie bei {{domxref("console/dir_static", "console.dir()")}}.
- `%d` oder `%i`
  - : Gibt einen Integer aus.
- `%s`
  - : Gibt eine Zeichenfolge aus.
- `%f`
  - : Gibt einen Gleitkommawert aus.
- `%c`
  - : Wendet CSS-Stilregeln auf den gesamten folgenden Text an. Siehe [Styling console output](#styling_der_konsolenausgabe).

Einige Browser können zusätzliche Formatspezifizierer implementieren. Beispielsweise unterstützen Safari und Firefox die C-Style-Präzisionsformatierung `%.<precision>f`. Zum Beispiel wird `console.log("Foo %.2f", 1.1)` die Zahl mit zwei Dezimalstellen ausgeben: `Foo 1.10`, während `console.log("Foo %.2d", 1.1)` die Zahl als zwei signifikante Zahlen mit führender 0 ausgeben wird: `Foo 01`.

Jeder dieser zieht das nächste Argument nach der Formatzeichenfolge von der Parameterliste ab. Zum Beispiel:

```js
for (let i = 0; i < 5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i + 1);
}
```

Die Ausgabe sieht folgendermaßen aus:

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

Der Text vor der Direktive wird nicht beeinflusst, aber der Text nach der Direktive wird unter Verwendung der CSS-Deklarationen im Parameter formatiert.

![Styled Text in Firefox console](css-styling.png)

Sie können `%c` mehrfach verwenden:

```js
console.log(
  "Multiple styles: %cred %corange",
  "color: red",
  "color: orange",
  "Additional unformatted message",
);
```

Die mit der `%c`-Syntax verwendbaren Eigenschaften sind wie folgt (zumindest in Firefox — sie können in anderen Browsern abweichen):

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
> Jede Konsolennachricht verhält sich standardmäßig wie ein Inline-Element. Wenn Sie möchten, dass Eigenschaften wie `padding`, `margin` und so weiter eine Wirkung haben, können Sie die `display`-Eigenschaft auf `display: inline-block` setzen.

> [!NOTE]
> Um sowohl helle als auch dunkle Farbschemata zu unterstützen, kann {{cssxref("color_value/light-dark")}} verwendet werden, wenn Farben angegeben werden; zum Beispiel: `color: light-dark(#D00000, #FF4040);`

### Gruppen in der Konsole verwenden

Sie können verschachtelte Gruppen verwenden, um Ihre Ausgabe zu organisieren, indem Sie verwandtes Material visuell kombinieren. Um einen neuen verschachtelten Block zu erstellen, rufen Sie `console.group()` auf. Die Methode `console.groupCollapsed()` ist ähnlich, erstellt jedoch den neuen Block eingefaltet, was die Verwendung einer Ausklapptaste erfordert, um ihn zum Lesen zu öffnen.

Um die aktuelle Gruppe zu verlassen, rufen Sie `console.groupEnd()` auf. Zum Beispiel, gegebenen diesen Code:

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

![Demo of nested groups in Firefox console](console_groups_demo.png)

### Timer

Sie können einen Timer starten, um die Dauer einer bestimmten Operation zu berechnen. Um einen Timer zu starten, rufen Sie die Methode `console.time()` auf und geben ihr einen Namen als einzigen Parameter. Um den Timer zu stoppen und die verstrichene Zeit in Millisekunden zu erhalten, rufen Sie einfach die Methode `console.timeEnd()` auf und geben erneut den Namen des Timers als Parameter an. Bis zu 10.000 Timer können gleichzeitig auf einer gegebenen Seite laufen.

Zum Beispiel, gegebenen diesen Code:

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

Wird die Zeit protokollieren, die der Benutzer benötigt, um das Alarmfeld zu schließen, die Zeit zur Konsole protokollieren, darauf warten, dass der Benutzer das zweite Alarmfeld schließt, und dann die Endzeit zur Konsole protokollieren:

![Time log in Firefox console](console-timelog.png)

Beachten Sie, dass der Name des Timers sowohl angezeigt wird, wenn der Timer gestartet als auch wenn er gestoppt wird.

### Stacktraces

Das Console-Objekt unterstützt auch das Ausgeben eines Stacktraces; dies zeigt Ihnen den Pfad der Aufrufe, der genommen wurde, um den Punkt zu erreichen, an dem Sie {{domxref("console/trace_static", "console.trace()")}} aufrufen. Gegebener Code wie dieser:

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

![Stack trace in Firefox console](api-trace2.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — wie die Web-Konsole in Firefox Konsolen-API-Aufrufe verarbeitet
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) — wie Sie Konsolenausgaben sehen können, wenn das Debugging-Ziel ein mobiles Gerät ist
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/console/api/)
- [Microsoft Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [Safari Web Inspector](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)
