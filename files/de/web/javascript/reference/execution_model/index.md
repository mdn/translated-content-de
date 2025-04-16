---
title: JavaScript-Ausführungsmodell
slug: Web/JavaScript/Reference/Execution_model
l10n:
  sourceCommit: 0872e0155437463972424c0c52a481ebf0d8e6d8
---

{{jsSidebar("More")}}

Diese Seite stellt die grundlegende Infrastruktur der JavaScript-Laufzeitumgebung vor. Das Modell ist weitgehend theoretisch und abstrakt, ohne plattform- oder implementierungsspezifische Details. Moderne JavaScript-Engines optimieren die beschriebenen Semantiken stark.

Diese Seite ist ein Nachschlagewerk. Es wird vorausgesetzt, dass Sie bereits mit dem Ausführungsmodell anderer Programmiersprachen wie C und Java vertraut sind. Es gibt viele Verweise auf bestehende Konzepte in Betriebssystemen und Programmiersprachen.

## Die Engine und das Host-Umfeld

Die Ausführung von JavaScript erfordert die Zusammenarbeit von zwei Software-Komponenten: der **JavaScript-Engine** und dem **Host-Umfeld**.

Die JavaScript-Engine implementiert die [ECMAScript- (JavaScript-) Sprache](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript), indem sie die Kernfunktionalität bereitstellt. Sie nimmt Quellcode entgegen, analysiert ihn und führt ihn aus. Um jedoch mit der Außenwelt zu interagieren, beispielsweise um sinnvolle Ausgaben zu erzeugen, auf externe Ressourcen zuzugreifen oder sicherheits- oder leistungsbezogene Mechanismen zu implementieren, benötigen wir zusätzliche, umgebungsspezifische Mechanismen, die das Host-Umfeld bereitstellt. Beispielsweise ist das HTML-DOM das Host-Umfeld, wenn JavaScript in einem Webbrowser ausgeführt wird. Node.js ist ein weiteres Host-Umfeld, das es ermöglicht, JavaScript serverseitig auszuführen.

Während wir uns in diesem Nachschlagewerk hauptsächlich auf die in ECMAScript definierten Mechanismen konzentrieren, werden wir gelegentlich über Mechanismen sprechen, die in der HTML-Spezifikation definiert sind und die oft von anderen Host-Umgebungen wie Node.js oder Deno nachgeahmt werden. Auf diese Weise können wir ein kohärentes Bild des JavaScript-Ausführungsmodells geben, wie es im Web und darüber hinaus verwendet wird.

## Agenten-Ausführungsmodell

In der JavaScript-Spezifikation wird jeder autonome Ausführende von JavaScript als **Agent** bezeichnet, der seine Einrichtungen für die Code-Ausführung verwaltet:

- **Heap** (von Objekten): Dies ist nur ein Name für einen großen (meist unstrukturierten) Speicherbereich. Er wird gefüllt, wenn Objekte im Programm erstellt werden. Beachten Sie, dass im Falle von gemeinsam genutztem Speicher jeder Agent seinen eigenen Heap mit seiner eigenen Version eines {{jsxref("SharedArrayBuffer")}}-Objekts hat, aber der zugrundeliegende Speicher, der durch den Puffer dargestellt wird, gemeinsam genutzt wird.
- [**Queue** (von Aufgaben)](#auftragswarteschlange_und_ereignisschleife): Dies ist im HTML (und auch allgemein) als das _Ereignisschleife_ bekannt, das asynchrones Programmieren in JavaScript ermöglicht, obwohl es ein Single-Threaded ist. Es wird eine Queue genannt, weil es im Allgemeinen First-In-First-Out ist: frühere Aufgaben werden vor späteren ausgeführt.
- [**Stack** (von Ausführungskontexten)](#stack_und_ausführungskontexte): Dies ist bekannt als ein _Call Stack_ und ermöglicht die Steuerflussübertragung durch Eingabe und Verlassen von Ausführungskontexten wie Funktionen. Es wird als ein Stack bezeichnet, weil es Last-In-First-Out ist. Jede Aufgabe tritt ein, indem ein neuer Rahmen auf den (leeren) Stapel geschoben wird, und verlässt ihn, indem der Stapel geleert wird.

Dies sind drei verschiedene Datenstrukturen, die verschiedene Daten verfolgen. Wir werden die Queue und den Stack in den folgenden Abschnitten detaillierter einführen. Um mehr darüber zu erfahren, wie Heap-Speicher zugewiesen und freigegeben wird, siehe [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management).

Jeder Agent ist analog zu einem Thread (beachten Sie, dass die zugrundeliegende Implementierung möglicherweise kein echter Betriebssystem-Thread sein muss). Jeder Agent kann mehrere [Realms](#realms) besitzen (die eine 1-zu-1-Korrelation mit globalen Objekten haben), die sich gegenseitig synchronistisch zugreifen können und daher in einem einzigen Ausführungs-Thread laufen müssen. Ein Agent hat auch ein einzelnes Speicher-Modell, das angibt, ob es sich um Little-Endian handelt, ob es [synchron blockiert](#parallelität_und_gewährleistung_von_fortschritt) werden kann, ob atomare Operationen [sperrfrei](/de/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree) sind, usw.

Ein Agent im Web kann eines der folgenden sein:

- Ein _Agent eines ähnlichen Ursprungs-Fensters_, das verschiedene [`Window`](/de/docs/Web/API/Window) Objekte enthält, die sich möglicherweise gegenseitig erreichen können, entweder direkt oder durch Verwendung von [`document.domain`](/de/docs/Web/API/Document/domain). Wenn das Fenster [ursprungsbasiert](/de/docs/Web/API/Window/originAgentCluster) ist, können sich nur Fenster desselben Ursprungs gegenseitig erreichen.
- Ein _dedizierter Arbeiter-Agent_, der einen einzigen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) enthält.
- Ein _geteilter Arbeiter-Agent_, der einen einzigen [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) enthält.
- Ein _Service-Arbeiter-Agent_, der einen einzigen [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) enthält.
- Ein _Worklet-Agent_, der einen einzigen [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope) enthält.

Mit anderen Worten, jeder Worker erstellt seinen eigenen Agenten, während ein oder mehrere Fenster im gleichen Agenten sein können — normalerweise ein Hauptdokument und seine ähnlichen Ursprungs-iFrames. In Node.js ist ein ähnliches Konzept unter dem Namen [Worker Threads](https://nodejs.org/api/worker_threads.html) verfügbar.

Das folgende Diagramm veranschaulicht das Ausführungsmodell von Agenten:

![Ein Diagramm bestehend aus zwei Agenten: eine HTML-Seite und ein Worker. Jeder hat seinen eigenen Stack, der Ausführungskontexte enthält, seinen eigenen Heap, der Objekte enthält, und seine eigene Queue, die Aufträge enthält.](runtime-environment-diagram.svg)

## Realms

Jeder Agent besitzt ein oder mehrere **Realms**. Jeder JavaScript-Code ist einem Realm zugeordnet, wenn er geladen wird, und bleibt derselbe, auch wenn er von einem anderen Realm aufgerufen wird. Ein Realm besteht aus folgenden Informationen:

- Einer Liste von intrinsischen Objekten wie `Array`, `Array.prototype`, etc.
- Global deklarierten Variablen, dem Wert von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) und dem globalen Objekt
- Einem Cache von [Template-String-Arrays](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates), weil die Auswertung desselben getaggten Template-String-Ausdrucks immer dazu führt, dass der Tag das gleiche Array-Objekt erhält

Im Web korrespondieren der Realm und das globale Objekt 1-zu-1. Das globale Objekt ist entweder ein [`Window`](/de/docs/Web/API/Window), ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) oder ein [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope). Zum Beispiel führt jeder `iframe` in einem anderen Realm aus, obwohl es im gleichen Agenten wie das Elternfenster sein kann.

Realms werden normalerweise erwähnt, wenn von den Identitäten globaler Objekte die Rede ist. Zum Beispiel benötigen wir Methoden wie {{jsxref("Array.isArray()")}} oder {{jsxref("Error.isError()")}}, weil ein Array, das in einem anderen Realm erstellt wurde, ein anderes Prototype-Objekt als das `Array.prototype`-Objekt im aktuellen Realm hat, wodurch `instanceof Array` fälschlicherweise `false` zurückgibt.

## Stack und Ausführungskontexte

Zunächst betrachten wir die synchrone Code-Ausführung. Jede [Aufgabe](#auftragswarteschlange_und_ereignisschleife) beginnt, indem ihr zugeordneter Callback aufgerufen wird. Code innerhalb dieses Callbacks kann Variablen erstellen, Funktionen aufrufen oder beenden. Jede Funktion muss ihren eigenen Variablenumgebungen und ihrer Rücksprungadresse folgen. Um dies zu verwalten, benötigt der Agent einen Stack, um die Ausführungskontexte zu verfolgen. Ein **Ausführungskontext**, auch allgemein bekannt als ein _Stack Frame_, ist die kleinste Einheit der Ausführung. Er verfolgt die folgenden Informationen:

- Status der Code-Auswertung
- Das Modul oder Skript, die Funktion (falls zutreffend) und den aktuell ausführenden [Generator](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator), der diesen Code enthält
- Der aktuelle [Realm](#realms)
- {{Glossary("Binding", "Bindings")}}, einschließlich:
  - Variablen, die mit `var`, `let`, `const`, `function`, `class`, etc. definiert sind
  - Private Bezeichner wie `#foo`, die nur im aktuellen Kontext gültig sind
  - `this`-Referenz

Stellen Sie sich ein Programm vor, das aus einer einzelnen Aufgabe besteht, die durch den folgenden Code definiert ist:

```js
function foo(b) {
  const a = 10;
  return a + b + 11;
}

function bar(x) {
  const y = 3;
  return foo(x * y);
}

const baz = bar(7); // assigns 42 to baz
```

1. Wenn die Aufgabe beginnt, wird der erste Frame erstellt, in dem die Variablen `foo`, `bar` und `baz` definiert sind. Es ruft `bar` mit dem Argument `7` auf.
2. Ein zweiter Frame wird für den `bar`-Aufruf erstellt, der Bindungen für den Parameter `x` und die lokale Variable `y` enthält. Zuerst wird die Multiplikation `x * y` durchgeführt, dann wird `foo` mit dem Ergebnis aufgerufen.
3. Ein dritter Frame wird für den `foo`-Aufruf erstellt, der Bindungen für den Parameter `b` und die lokale Variable `a` enthält. Zuerst wird die Addition `a + b + 11` durchgeführt und dann das Ergebnis zurückgegeben.
4. Wenn `foo` zurückkehrt, wird das oberste Element des Stacks entfernt, und der Aufrufausdruck `foo(x * y)` wird auf den Rückgabewert aufgelöst. Dann wird die Ausführung fortgesetzt, was nur bedeutet, dieses Ergebnis zurückzugeben.
5. Wenn `bar` zurückkehrt, wird das oberste Element des Stacks entfernt, und der Aufrufausdruck `bar(7)` wird auf den Rückgabewert aufgelöst. Dies initialisiert `baz` mit dem Rückgabewert.
6. Wir erreichen das Ende des Quellcodes der Aufgabe, sodass der Stack-Frame für den Einstiegspunkt aus dem Stack entfernt wird. Der Stack ist leer, sodass die Aufgabe als abgeschlossen betrachtet wird.

### Generatoren und Wiedereintritt

Wenn ein Frame entfernt wird, ist er nicht notwendigerweise für immer weg, da wir manchmal zu ihm zurückkehren müssen. Betrachten Sie z.B. eine Generatorfunktion:

```js
function* gen() {
  console.log(1);
  yield;
  console.log(2);
}

const g = gen();
g.next(); // logs 1
g.next(); // logs 2
```

In diesem Fall erstellt der Aufruf von `gen()` zuerst einen Ausführungskontext, der angehalten wird — kein Code innerhalb von `gen` wird noch ausgeführt. Der Generator `g` speichert diesen Ausführungskontext intern. Der derzeit laufende Ausführungskontext bleibt der Einstiegspunkt. Wenn `g.next()` aufgerufen wird, wird der Ausführungskontext für `gen` auf den Stack geschoben, und der Code innerhalb von `gen` wird bis zum `yield`-Ausdruck ausgeführt. Dann wird der Generator-Ausführungskontext angehalten und aus dem Stack entfernt, wodurch die Kontrolle zurück zum Einstiegspunkt übergeben wird. Wenn `g.next()` erneut aufgerufen wird, wird der Generator-Ausführungskontext wieder auf den Stack geschoben, und der Code innerhalb von `gen` wird dort fortgesetzt, wo er aufgehört hat.

### Tail Calls

Ein Mechanismus, der in der Spezifikation definiert ist, ist der _Proper Tail Call_ (PTC). Ein Funktionsaufruf ist ein Tail Call, wenn der Aufrufer nach dem Aufruf nichts mehr tut, außer den Wert zurückzugeben:

```js
function f() {
  return g();
}
```

In diesem Fall ist der Aufruf von `g` ein Tail Call. Wenn ein Funktionsaufruf im Tail-Bereich ist, ist die Engine verpflichtet, den aktuellen Ausführungskontext zu verwerfen und ihn durch den Kontext des Tail Calls zu ersetzen, anstatt einen neuen Frame für den `g()`-Aufruf zu erstellen. Dies bedeutet, dass Tail-Rekursion nicht den Stapelgrößenbeschränkungen unterliegt:

```js
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc);
}
```

In der Realität verursacht das Verwerfen des aktuellen Frames Probleme beim Debuggen, denn wenn `g()` einen Fehler auslöst, ist `f` nicht mehr im Stack und wird nicht im Stack-Trace angezeigt. Derzeit wird PTC nur von Safari (JavaScriptCore) implementiert, und sie haben einige [spezifische Infrastrukturen](https://webkit.org/blog/6240/ecmascript-6-proper-tail-calls-in-webkit/) erfunden, um das Debugging-Problem zu adressieren.

### Closures

Ein weiteres interessantes Phänomen im Zusammenhang mit Variablenbereich und Funktionsaufrufen sind [Closures](/de/docs/Web/JavaScript/Guide/Closures). Immer wenn eine Funktion erstellt wird, merkt sie sich auch intern die Variablenbindungen des aktuell laufenden Ausführungskontexts. Dann können diese Variablenbindungen den Ausführungskontext überdauern.

```js
let f;
{
  let x = 10;
  f = () => x;
}
console.log(f()); // logs 10
```

## Auftragswarteschlange und Ereignisschleife

Ein Agent ist ein Thread, was bedeutet, dass der Interpreter nur eine Anweisung auf einmal verarbeiten kann. Wenn der Code vollständig synchron ist, ist das in Ordnung, da wir immer Fortschritte machen können. Wenn der Code jedoch eine asynchrone Aktion ausführen muss, können wir keine Fortschritte machen, bis diese Aktion abgeschlossen ist. Wenn jedoch das gesamte Programm angehalten wird, wäre dies nachteilig für die Benutzererfahrung — die Natur von JavaScript als Web-Skriptsprache erfordert, dass es [niemals blockiert](#niemals_blockieren). Daher wird der Code, der das Abschließen dieser asynchronen Aktion verarbeitet, als ein Callback definiert. Dieser Callback definiert eine **Aufgabe**, die in eine **Auftragswarteschlange** — oder in HTML-Terminologie, eine Ereignisschleife — gestellt wird, sobald die Aktion abgeschlossen ist.

Jedes Mal zieht der Agent eine Aufgabe aus der Warteschlange und führt sie aus. Wenn die Aufgabe ausgeführt wird, kann sie weitere Aufgaben erstellen, die am Ende der Warteschlange hinzugefügt werden. Aufgaben können auch durch den Abschluss von asynchronen Plattformmechanismen wie Timern, I/O und Ereignissen hinzugefügt werden. Eine Aufgabe gilt als abgeschlossen, wenn der [Stack](#stack_und_ausführungskontexte) leer ist; dann wird die nächste Aufgabe aus der Warteschlange gezogen. Aufgaben werden möglicherweise nicht mit einheitlicher Priorität gezogen — zum Beispiel teilen HTML-Ereignisschleifen Aufgaben in zwei Kategorien: _Aufgaben_ und _Mikroaufgaben_. Mikroaufgaben haben höhere Priorität, und die Mikroaufgabenwarteschlange wird zuerst geleert, bevor die Aufgabenwarteschlange gezogen wird. Für weitere Informationen, siehe den [HTML-Mikroaufgaben-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide). Wenn die Auftragswarteschlange leer ist, wartet der Agent darauf, dass weitere Aufgaben hinzugefügt werden.

### "Run-to-Completion"

Jede Aufgabe wird vollständig bearbeitet, bevor eine andere Aufgabe bearbeitet wird. Dies bietet einige nette Eigenschaften beim Nachdenken über Ihr Programm, einschließlich der Tatsache, dass, wenn eine Funktion läuft, sie nicht unterbrochen werden kann und vollständig ausgeführt wird, bevor anderer Code ausgeführt wird (und Daten, die die Funktion manipuliert, ändern kann). Dies unterscheidet sich beispielsweise von C, wo, wenn eine Funktion in einem Thread läuft, sie jederzeit vom Laufzeitsystem angehalten werden kann, um anderen Code in einem anderen Thread auszuführen.

Zum Beispiel betrachten Sie dieses Beispiel:

```js
const promise = Promise.resolve();
let i = 0;
promise.then(() => {
  i += 1;
  console.log(i);
});
promise.then(() => {
  i += 1;
  console.log(i);
});
```

In diesem Beispiel erstellen wir ein bereits aufgelöstes Versprechen, was bedeutet, dass jeder daran angehängte Callback sofort als Aufgaben geplant wird. Die beiden Callbacks scheinen eine Race-Bedingung zu verursachen, aber tatsächlich ist die Ausgabe vollständig vorhersehbar: `1` und `2` werden in der Reihenfolge protokolliert. Dies liegt daran, dass jede Aufgabe bis zum Abschluss ausgeführt wird, bevor die nächste ausgeführt wird. Daher ist die Gesamtordnung immer `i += 1; console.log(i); i += 1; console.log(i);` und niemals `i += 1; i += 1; console.log(i); console.log(i);`.

Ein Nachteil dieses Modells ist, dass, wenn eine Aufgabe zu lange dauert, die Webanwendung nicht in der Lage ist, Benutzerinteraktionen wie Klicks oder Bildlauf zu verarbeiten. Der Browser mildert dies mit dem Dialog "Ein Skript dauert zu lange, um ausgeführt zu werden". Eine gute Praxis besteht darin, die Aufgabenverarbeitung kurz zu halten und, falls möglich, eine Aufgabe in mehrere Aufgaben zu unterteilen.

### Niemals blockieren

Ein weiteres wichtiges Versprechen des Ereignisschleifenmodells ist, dass die Ausführung von JavaScript niemals blockiert. Die Verarbeitung von I/O wird normalerweise über Ereignisse und Callbacks durchgeführt, sodass die Anwendung, wenn sie auf die Rückgabe einer [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Abfrage wartet oder eine `fetch()`-Anforderung auf Rückgabe wartet, immer noch andere Dinge wie Benutzereingaben verarbeiten kann. Der Code, der nach Abschluss einer asynchronen Aktion ausgeführt wird, wird immer als Callback-Funktion angegeben (zum Beispiel, der {{jsxref("Promise/then", "then()")}}-Handler des Versprechens, die Callback-Funktion in `setTimeout()` oder der Ereignis-Handler), der eine Aufgabe definiert, die zur Auftragswarteschlange hinzugefügt wird, sobald die Aktion abgeschlossen ist.

Natürlich erfordert das Versprechen von "niemals blockieren", dass die Plattform-API von Natur aus asynchron ist, aber es gibt einige ältere Ausnahmen wie `alert()` oder synchrones XHR. Es wird als gute Praxis angesehen, diese zu vermeiden, um die Reaktionsfähigkeit der Anwendung sicherzustellen.

## Agenten-Cluster und Speicheraustausch

Mehrere Agenten können durch Speicheraustausch kommunizieren und einen **Agenten-Cluster** bilden. Agenten befinden sich im selben Cluster, wenn und nur wenn sie Speicher gemeinsam nutzen können. Es gibt keinen eingebauten Mechanismus, mit dem zwei Agenten-Cluster Informationen austauschen können, sodass sie als vollständig isolierte Ausführungsmodelle angesehen werden können.

Beim Erstellen eines Agenten (z.B. durch Starten eines Arbeiters) gibt es einige Kriterien dafür, ob es sich im gleichen Cluster wie der aktuelle Agent befindet oder ein neuer Cluster erstellt wird. Zum Beispiel befinden sich die folgenden Paare von globalen Objekten jeweils im selben Agenten-Cluster und können daher Speicher miteinander teilen:

- Ein `Window`-Objekt und ein dedizierter Worker, den es erstellt hat.
- Ein Worker (jeglichen Typs) und ein dedizierter Worker, den er erstellt hat.
- Ein `Window`-Objekt A und das `Window`-Objekt eines `iframe`-Elements gleichen Ursprungs, das A erstellt hat.
- Ein `Window`-Objekt und ein `Window`-Objekt gleichen Ursprungs, das es geöffnet hat.
- Ein `Window`-Objekt und ein Worklet, das es erstellt hat.

Die folgenden Paare von globalen Objekten befinden sich nicht im selben Agenten-Cluster und können daher keinen Speicher austauschen:

- Ein `Window`-Objekt und ein geteilter Worker, den es erstellt hat.
- Ein Worker (jeglichen Typs) und ein geteilter Worker, den er erstellt hat.
- Ein `Window`-Objekt und ein Service Worker, den es erstellt hat.
- Ein `Window`-Objekt A und das `Window`-Objekt eines `iframe`-Elements, das A erstellt hat, das nicht gleichen Ursprungs sein kann wie A.
- Irgendein zwei `Window`-Objekte, die keine Öffner- oder Vorfahrenbeziehung haben. Dies gilt sogar, wenn die beiden `Window`-Objekte gleichen Ursprungs sind.

Den genauen Algorithmus finden Sie in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-agent-cluster-formalism).

### Agenten-übergreifende Kommunikation und Speicher-Modell

Wie bereits erwähnt, kommunizieren Agenten über Speicheraustausch. Im Web wird der Speicher über die [`postMessage()`](/de/docs/Web/API/Window/postMessage)-Methode geteilt. Der [Leitfaden zur Verwendung von Webarbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) bietet einen Überblick darüber. Typischerweise werden Daten nur durch Wertübergabe (via [strukturierter Klon](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)) übergeben und erfordert daher keine Konkurrenz-Komplikationen. Um Speicher zu teilen, muss man ein {{jsxref("SharedArrayBuffer")}}-Objekt posten, das simultan von mehreren Agenten zugegriffen werden kann. Sobald zwei Agenten Zugriff auf denselben Speicher über einen `SharedArrayBuffer` teilen, können sie die Ausführungen über das {{jsxref("Atomics")}}-Objekt synchronisieren.

Es gibt zwei Möglichkeiten, auf geteilten Speicher zuzugreifen: über normalen Speicherzugriff (der nicht atomar ist) und über atomaren Speicherzugriff. Letzterer ist [sequenziell konsistent](https://en.wikipedia.org/wiki/Sequential_consistency) (was bedeutet, dass es eine strikte Gesamtreihenfolge von Ereignissen gibt, die von allen Agenten im Cluster vereinbart wird), während der erstere nicht geordnet ist (was bedeutet, dass keine Ordnung existiert); JavaScript bietet keine Operationen mit anderen Ordnungs-Garantien.

Die Spezifikation bietet folgende Richtlinien für Programmierer, die mit geteiltem Speicher arbeiten:

> Wir empfehlen, Programme rennenfrei zu halten, d.h. es so zu gestalten, dass es unmöglich ist, dass es konkurrierende nicht-atomare Operationen an derselben Speicherstelle gibt. Rennenfreie Programme haben Interleaving-Semantiken, bei denen jeder Schritt in den Evaluationssemantiken jedes Agenten miteinander verflochten ist. Für rennenfreie Programme ist es nicht notwendig, die Details des Speichermodells zu verstehen. Die Details werden unwahrscheinlich Intuition aufbauen, die einem hilft, ECMAScript besser zu schreiben.
>
> Allgemeiner gesagt, selbst wenn ein Programm nicht rennenfrei ist, könnte es vorhersehbares Verhalten haben, solange atomare Operationen nicht an irgendwelchen Rennen beteiligt sind und die Operationen, die Rennen haben, alle dieselbe Zugriffsgröße haben. Der einfachste Weg, um zu arrangieren, dass Atomics nicht an Rennen beteiligt sind, besteht darin, sicherzustellen, dass verschiedene Speicherzellen von atomaren und nicht-atomaren Operationen verwendet werden und dass atomare Zugriffe unterschiedlicher Größe nicht gleichzeitig dieselben Zellen verwenden. Im Grunde sollte das Programm versuchen, den geteilten Speicher so stark typisiert wie möglich zu behandeln. Man kann sich immer noch nicht auf die Ordnung und das Timing von nicht-atomaren Zugriffen verlassen, die rennen, aber wenn der Speicher so stark typisiert behandelt wird, reißen die rennenden Zugriffe nicht (Bits ihrer Werte werden nicht vermischt).

### Parallelität und Gewährleistung von Fortschritt

Wenn mehrere Agenten zusammenarbeiten, hält das [niemals blockierende](#niemals_blockieren) Versprechen nicht immer. Ein Agent kann _blockiert_ oder unterbrochen werden, während er auf einen anderen Agenten wartet, um eine Aktion auszuführen. Dies unterscheidet sich vom Warten auf ein Versprechen im gleichen Agenten, da es den gesamten Agenten anhält und keinen anderen Code in der Zwischenzeit ausgeführt werden kann — in anderen Worten, er kann keinen _Fortschritt machen_.

Um Deadlocks zu verhindern, gibt es einige starke Beschränkungen, wann und welche Agenten blockiert werden können.

- Jeder unblockierte Agent mit einem dedizierten Ausführungs-Thread macht schließlich Fortschritte.
- In einem Satz von Agenten, die sich einen Ausführungs-Thread teilen, macht schließlich ein Agent Fortschritte.
- Ein Agent verursacht nicht, dass ein anderer Agent blockiert wird, außer durch explizite APIs, die Blocking bieten.
- Nur bestimmte Agenten können blockiert werden. Im Web sind dies dedizierte Worker und gemeinsame Worker, nicht jedoch ähnliche Ursprungsfenster oder Servicemitarbeiter.

Der Agenten-Cluster stellt ein gewisses Maß an Integrität über die Aktivität seiner Agenten sicher, im Falle von externen Pausen oder Beendigungen:

- Ein Agent kann ohne Wissen oder Kooperation pausiert oder fortgesetzt werden. Zum Beispiel kann das Navigieren weg von einem Fenster den Codeausführung anhalten, aber seinen Zustand bewahren. Ein Agenten-Cluster darf jedoch nicht teilweise deaktiviert werden, um zu verhindern, dass ein Agent hungert, weil ein anderer Agent deaktiviert wurde. Zum Beispiel befinden sich gemeinsame Worker niemals im gleichen Agenten-Cluster wie das Erstellerfenster oder andere dedizierte Worker. Dies liegt daran, dass die Lebensdauer eines gemeinsamen Workers unabhängig von Dokumenten ist: Wenn ein Dokument deaktiviert wird, während sein dedizierter Worker einen Lock hält, wird der gemeinsame Worker daran gehindert, den Lock zu erwerben, bis der dedizierte Worker wieder aktiviert wird, falls überhaupt. Währenddessen verhungern andere Worker, die versuchen, auf den gemeinsamen Worker von anderen Fenstern aus zuzugreifen.
- Ebenso kann ein Agent von Faktoren außerhalb des Clusters beendet werden. Zum Beispiel, wenn Betriebssysteme oder Benutzer einen Browser-Prozess beenden, oder der Browser einen Agenten zwangsweise beendet, weil er zu viele Ressourcen verwendet. In diesem Fall werden alle Agenten im Cluster beendet. (Die Spezifikation erlaubt auch eine zweite Strategie, die eine API ist, die mindestens einem verbleibenden Mitglied des Clusters ermöglicht, die Beendigung und den Agenten, der beendet wurde, zu identifizieren, aber dies ist im Web nicht implementiert.)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Ereignisschleifen](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) im HTML-Standard
- [Was ist die Ereignisschleife?](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop) in den Node.js-Dokumenten
