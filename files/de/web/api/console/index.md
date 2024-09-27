---
title: console
slug: Web/API/console
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Das **`console`** Objekt bietet Zugriff auf die Debugging-Konsole (z.B. die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) in Firefox).

Die Implementierungen der Console-API können zwischen verschiedenen Laufzeiten variieren. Insbesondere einige Konsolenmethoden können in einigen Online-Editoren und IDEs unterschiedlich arbeiten oder gar nicht funktionieren. Um das in dieser Dokumentation beschriebene Verhalten zu sehen, probieren Sie die Methoden in den Entwicklerwerkzeugen Ihres Browsers aus, obwohl auch hier Unterschiede zwischen den Browsern bestehen können.

Das `console` Objekt kann von jedem globalen Objekt aus zugegriffen werden. [`Window`](/de/docs/Web/API/Window) in Browsing-Scopes und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) als spezifische Varianten in Workern über die Eigenschaft console. Es wird als [`Window.console`](/de/docs/Web/API/Window/console) dargestellt und kann als `console` referenziert werden. Zum Beispiel:

```js
console.log("Failed to open the specified link");
```

## Instanzmethoden

- [`console.assert()`](/de/docs/Web/API/Console/assert_static)
  - : Gibt eine Fehlermeldung in der Konsole aus, wenn das erste Argument `false` ist.
- [`console.clear()`](/de/docs/Web/API/Console/clear_static)
  - : Löscht die Konsole.
- [`console.count()`](/de/docs/Web/API/Console/count_static)
  - : Protokolliert die Anzahl der Aufrufe dieser Zeile mit der gegebenen Bezeichnung.
- [`console.countReset()`](/de/docs/Web/API/Console/countReset_static)
  - : Setzt den Wert des Zählers mit der gegebenen Bezeichnung zurück.
- [`console.debug()`](/de/docs/Web/API/Console/debug_static)
  - : Gibt eine Nachricht mit dem Debug-Log-Level in der Konsole aus.
- [`console.dir()`](/de/docs/Web/API/Console/dir_static)
  - : Zeigt eine interaktive Liste der Eigenschaften eines angegebenen JavaScript-Objekts an. Diese Liste ermöglicht es Ihnen, die Inhalte von Kinderobjekten mit Erweitern-Dreiecken zu untersuchen.
- [`console.dirxml()`](/de/docs/Web/API/Console/dirxml_static)
  - : Zeigt eine XML/HTML-Elementdarstellung des angegebenen Objekts an, wenn möglich, oder die Ansicht des JavaScript-Objekts, falls dies nicht möglich ist.
- [`console.error()`](/de/docs/Web/API/Console/error_static)
  - : Gibt eine Nachricht mit dem Fehler-Log-Level in der Konsole aus.
- `console.exception()` {{Non-standard_inline}} {{deprecated_inline}}
  - : Ein Alias für `console.error()`.
- [`console.group()`](/de/docs/Web/API/Console/group_static)
  - : Erstellt eine neue Inline-[Gruppe](#verwendung_von_gruppen_in_der_konsole), die alle folgenden Ausgaben um eine weitere Ebene einrückt. Um eine Ebene zurück zu gehen, rufen Sie `console.groupEnd()` auf.
- [`console.groupCollapsed()`](/de/docs/Web/API/Console/groupCollapsed_static)
  - : Erstellt eine neue Inline-[Gruppe](#verwendung_von_gruppen_in_der_konsole), die alle folgenden Ausgaben um eine weitere Ebene einrückt. Im Gegensatz zu `console.group()` beginnt dies jedoch mit der eingeklappten Inline-Gruppe, die zum Erweitern einen Erweitern-Button erfordert. Um eine Ebene zurück zu gehen, rufen Sie `console.groupEnd()` auf.
- [`console.groupEnd()`](/de/docs/Web/API/Console/groupEnd_static)
  - : Verlassen der aktuellen Inline-[Gruppe](#verwendung_von_gruppen_in_der_konsole).
- [`console.info()`](/de/docs/Web/API/Console/info_static)
  - : Gibt eine Nachricht mit dem Info-Log-Level in der Konsole aus.
- [`console.log()`](/de/docs/Web/API/Console/log_static)
  - : Gibt eine Nachricht in der Konsole aus.
- [`console.profile()`](/de/docs/Web/API/Console/profile_static) {{Non-standard_inline}}
  - : Startet den integrierten Profiler des Browsers (zum Beispiel das [Firefox Performance Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)). Sie können einen optionalen Namen für das Profil angeben.
- [`console.profileEnd()`](/de/docs/Web/API/Console/profileEnd_static) {{Non-standard_inline}}
  - : Stoppt den Profiler. Sie können das resultierende Profil im Performance-Tool des Browsers sehen (zum Beispiel das [Firefox Performance Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)).
- [`console.table()`](/de/docs/Web/API/Console/table_static)
  - : Zeigt tabellarische Daten als Tabelle an.
- [`console.time()`](/de/docs/Web/API/Console/time_static)
  - : Startet einen [Timer](#timer) mit einem als Eingabeparameter angegebenen Namen. Bis zu 10.000 gleichzeitige Timer können auf einer bestimmten Seite laufen.
- [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static)
  - : Stoppt den angegebenen [Timer](#timer) und protokolliert die verstrichene Zeit in Millisekunden seit seinem Start.
- [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static)
  - : Protokolliert den Wert des angegebenen [Timers](#timer) in der Konsole.
- [`console.timeStamp()`](/de/docs/Web/API/Console/timeStamp_static) {{Non-standard_inline}}
  - : Fügt der Zeitleiste des Performance-Tools des Browsers einen Marker hinzu ([Chrome](https://developer.chrome.com/docs/devtools/performance/reference) oder [Firefox](https://profiler.firefox.com/docs/#/./guide-ui-tour-timeline)).
- [`console.trace()`](/de/docs/Web/API/Console/trace_static)
  - : Gibt einen [Stack-Trace](#stack-traces) aus.
- [`console.warn()`](/de/docs/Web/API/Console/warn_static)
  - : Gibt eine Nachricht mit dem Warn-Log-Level in der Konsole aus.

## Beispiele

### Ausgabe von Text in die Konsole

Die am häufigsten genutzte Funktion der Konsole ist das Protokollieren von Text und anderen Daten. Es gibt mehrere Kategorien von Ausgaben, die Sie mit den Methoden [`console.log()`](/de/docs/Web/API/Console/log_static), [`console.info()`](/de/docs/Web/API/Console/info_static), [`console.warn()`](/de/docs/Web/API/Console/warn_static), [`console.error()`](/de/docs/Web/API/Console/error_static) oder [`console.debug()`](/de/docs/Web/API/Console/debug_static) erzeugen können. Jede von ihnen führt zu unterschiedlichem Styling in der Log-Ausgabe, und Sie können die von Ihrem Browser bereitgestellten Filtersteuerungen verwenden, um nur die Arten von Ausgaben anzuzeigen, die Sie interessieren.

Es gibt zwei Möglichkeiten, jede der Ausgabemethoden zu verwenden:

- Geben Sie eine variable Anzahl von Argumenten ein, deren string-Darstellungen zu einem String zusammengeführt und dann in die Konsole ausgegeben werden.
- Geben Sie einen String mit null oder mehr Ersetzungsstrings ein, gefolgt von einer variablen Anzahl von Argumenten, die sie ersetzen.

#### Ausgabe eines einzelnen Objekts

Die einfachste Art, die Protokollierungsmethoden zu verwenden, ist die Ausgabe eines einzelnen Objekts:

```js
const someObject = { str: "Some text", id: 5 };
console.log(someObject);
```

Die Ausgabe sieht ungefähr so aus:

```plain
{str:"Some text", id:5}
```

Der Browser zeigt so viele Informationen über das Objekt an, wie er kann und möchte. Zum Beispiel kann privater Zustand des Objekts ebenfalls angezeigt werden. Bestimmte Objekttypen, wie DOM-Elemente oder Funktionen, können ebenfalls auf besondere Weise angezeigt werden.

#### Objekte snapshotten

Informationen über ein Objekt werden verzögert abgerufen. Dies bedeutet, dass die Log-Nachricht den Inhalt eines Objekts zu dem Zeitpunkt anzeigt, wenn es zum ersten Mal betrachtet wird, nicht wenn es protokolliert wurde. Zum Beispiel:

```js
const obj = {};
console.log(obj);
obj.prop = 123;
```

Dies wird `{}` ausgeben. Wenn Sie jedoch die Details des Objekts erweitern, sehen Sie `prop: 123`.

Wenn Sie Ihr Objekt ändern möchten und verhindern möchten, dass die protokollierten Informationen aktualisiert werden, können Sie das Objekt vor der Protokollierung [tief klonen](/de/docs/Glossary/Deep_copy). Eine übliche Methode ist die Verwendung von {{jsxref("JSON.stringify()")}} und anschließend {{jsxref("JSON.parse()")}}:

```js
console.log(JSON.parse(JSON.stringify(obj)));
```

Es gibt andere Alternativen, die in Browsern funktionieren, wie [`structuredClone()`](/de/docs/Web/API/Window/structuredClone), die effektiver beim Klonen unterschiedlicher Objekttypen sind.

#### Ausgabe mehrerer Objekte

Sie können auch mehrere Objekte ausgeben, indem Sie sie bei der Aufruf der Protokollierungsmethode auflisten, wie folgt:

```js
const car = "Dodge Charger";
const someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", someObject);
```

Die Ausgabe wird so aussehen:

```plain
My first car was a Dodge Charger. The object is: {str:"Some text", id:5}
```

#### Verwendung von Ersetzungsstrings

Der erste Parameter der Protokollierungsmethoden kann ein String sein, der null oder mehr Ersetzungsstrings enthält. Jeder Ersetzungsstring wird durch den entsprechenden Argumentwert ersetzt.

- `%o`
  - : Gibt ein JavaScript-Objekt im "optimal nützlichen Formatierungsstil" aus, beispielsweise können DOM-Elemente so angezeigt werden, wie sie im Elementinspektor erscheinen.
- `%O`
  - : Gibt ein JavaScript-Objekt im "generischen JavaScript-Objektformatierungsstil" aus, normalerweise in Form eines erweiterbaren Baums. Dies ist ähnlich wie [`console.dir()`](/de/docs/Web/API/Console/dir_static).
- `%d` oder `%i`
  - : Gibt eine ganze Zahl aus.
- `%s`
  - : Gibt einen String aus.
- `%f`
  - : Gibt einen Gleitkommawert aus.
- `%c`
  - : Wendet CSS-Stilregeln auf den gesamten nachfolgenden Text an. Siehe [Styling Console-Ausgaben](#styling_von_konsolenausgaben).

Einige Browser können zusätzliche Format-Spezifizierer implementieren. Zum Beispiel unterstützen Safari und Firefox das C-Stil-Präzisionsformat `%.<precision>f`. Zum Beispiel wird `console.log("Foo %.2f", 1.1)` die Zahl auf 2 Dezimalstellen ausgeben: `Foo 1.10`, während `console.log("Foo %.2d", 1.1)` die Zahl als zwei signifikante Stellen mit einer führenden Null ausgeben wird: `Foo 01`.

Jeder dieser Parameter entfernt das nächste Argument nach dem Formatstring aus der Parameterliste. Zum Beispiel:

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

#### Styling von Konsolenausgaben

Sie können das `%c`-Direktiv verwenden, um einen CSS-Stil auf Konsolenausgaben anzuwenden:

```js
console.log(
  "This is %cMy stylish message",
  "color: yellow; font-style: italic; background-color: blue;padding: 2px",
);
```

Der Text vor dem Direktiv wird nicht beeinflusst, aber der Text nach dem Direktiv wird mit den CSS-Deklarationen im Parameter gestylt.

![Gestylter Text in der Firefox-Konsole](css-styling.png)

Sie können `%c` mehrere Male verwenden:

```js
console.log(
  "Multiple styles: %cred %corange",
  "color: red",
  "color: orange",
  "Additional unformatted message",
);
```

Die folgenden Eigenschaften sind mit der `%c`-Syntax verwendbar (zumindest in Firefox — sie können in anderen Browsern abweichen):

- {{cssxref("background")}} und seine Langhand-Äquivalente
- {{cssxref("border")}} und seine Langhand-Äquivalente
- {{cssxref("border-radius")}}
- {{cssxref("box-decoration-break")}}
- {{cssxref("box-shadow")}}
- {{cssxref("clear")}} und {{cssxref("float")}}
- {{cssxref("color")}}
- {{cssxref("cursor")}}
- {{cssxref("display")}}
- {{cssxref("font")}} und seine Langhand-Äquivalente
- {{cssxref("line-height")}}
- {{cssxref("margin")}}
- {{cssxref("outline")}} und seine Langhand-Äquivalente
- {{cssxref("padding")}}
- `text-*` Eigenschaften wie {{cssxref("text-transform")}}
- {{cssxref("white-space")}}
- {{cssxref("word-spacing")}} und {{cssxref("word-break")}}
- {{cssxref("writing-mode")}}

> [!NOTE]
> Jede Konsolennachricht verhält sich standardmäßig wie ein Inline-Element. Wenn Sie möchten, dass Eigenschaften wie `padding`, `margin` usw. eine Wirkung haben, können Sie die Eigenschaft `display` auf `display: inline-block` setzen.

> [!NOTE]
> Um sowohl helle als auch dunkle Farbschemata zu unterstützen, kann {{cssxref("color_value/light-dark")}} verwendet werden, wenn Farben angegeben werden; zum Beispiel: `color: light-dark(#D00000, #FF4040);`

### Verwendung von Gruppen in der Konsole

Sie können verschachtelte Gruppen verwenden, um Ihre Ausgaben zu organisieren, indem Sie visuell verwandtes Material kombinieren. Um einen neuen verschachtelten Block zu erstellen, rufen Sie `console.group()` auf. Die Methode `console.groupCollapsed()` ist ähnlich, erstellt jedoch den neuen Block eingeklappt, was die Verwendung eines Erweitern-Buttons erfordert, um ihn zum Lesen zu öffnen.

Um die aktuelle Gruppe zu verlassen, rufen Sie `console.groupEnd()` auf. Zum Beispiel, mit folgendem Code:

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

Sieht die Ausgabe so aus:

![Demo von verschachtelten Gruppen in der Firefox-Konsole](console_groups_demo.png)

### Timer

Sie können einen Timer starten, um die Dauer eines speziellen Vorgangs zu berechnen. Um einen zu starten, rufen Sie die Methode `console.time()` auf und geben ihr einen Namen als einzigen Parameter. Um den Timer zu stoppen und die verstrichene Zeit in Millisekunden zu erhalten, rufen Sie einfach die Methode `console.timeEnd()` auf und geben den Namen des Timers erneut als Parameter an. Bis zu 10.000 Timer können gleichzeitig auf einer bestimmten Seite laufen.

Zum Beispiel mit folgendem Code:

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

Wird die Zeitprotokollierung werden: die zum Schließen des Alert-Fensters benötigte Zeit wird protokolliert, die Zeit auf der Konsole ausgegeben, auf das Schließen des zweiten Alerts gewartet und dann wird die Endzeit auf der Konsole ausgegeben:

![Zeitprotokoll in der Firefox-Konsole](console-timelog.png)

Beachten Sie, dass der Name des Timers sowohl beim Starten als auch beim Stoppen angezeigt wird.

### Stack-Traces

Das Console-Objekt unterstützt auch die Ausgabe eines Stack-Traces; dies zeigt Ihnen den Aufrufpfad an, der genommen wurde, um den Punkt zu erreichen, an dem Sie [`console.trace()`](/de/docs/Web/API/Console/trace_static) aufrufen. Mit einem solchen Code:

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

Sieht die Ausgabe in der Konsole etwa so aus:

![Stack-Trace in der Firefox-Konsole](api-trace2.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — wie die Webkonsole in Firefox mit Console-API-Aufrufen umgeht
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) — wie man Konsolenausgaben sieht, wenn das Debugging-Ziel ein mobiles Gerät ist
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/console/api/)
- [Microsoft Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [Safari Web Inspector](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)
