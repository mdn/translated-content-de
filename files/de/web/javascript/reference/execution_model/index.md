---
title: JavaScript-Ausführungsmodell
slug: Web/JavaScript/Reference/Execution_model
l10n:
  sourceCommit: 9d64ff6c5d0eee1800b0d3b4f9076de65f34f5ce
---

Diese Seite stellt die grundlegende Infrastruktur der JavaScript-Laufzeitumgebung vor. Das Modell ist weitgehend theoretisch und abstrakt und geht nicht auf plattform- oder implementierungsspezifische Details ein. Moderne JavaScript-Engines optimieren die beschriebenen Abläufe erheblich.

Diese Seite dient als Referenz. Sie setzt voraus, dass Sie bereits mit dem Ausführungsmodell anderer Programmiersprachen wie C und Java vertraut sind. Sie verweist häufig auf bestehende Konzepte aus Betriebssystemen und Programmiersprachen.

## Die Engine und die Host-Umgebung

Für die Ausführung von JavaScript müssen zwei Softwarekomponenten zusammenwirken: die **JavaScript-Engine** und die **Host-Umgebung**.

Die JavaScript-Engine implementiert die [ECMAScript-Sprache (JavaScript)](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) und stellt deren Kernfunktionalität bereit. Sie nimmt Quellcode entgegen, analysiert ihn und führt ihn aus. Um jedoch mit der Außenwelt zu interagieren – etwa um eine sinnvolle Ausgabe zu erzeugen, auf externe Ressourcen zuzugreifen oder Sicherheits- und Leistungsmechanismen umzusetzen –, benötigen wir zusätzliche, umgebungsspezifische Mechanismen der Host-Umgebung. Wenn JavaScript in einem Webbrowser ausgeführt wird, gehört beispielsweise das HTML-DOM zur Host-Umgebung. Node.js ist eine weitere Host-Umgebung, in der JavaScript auf dem Server ausgeführt werden kann.

Obwohl sich diese Referenz hauptsächlich auf die in ECMAScript definierten Mechanismen konzentriert, behandeln wir gelegentlich auch Mechanismen der HTML-Spezifikation. Diese werden häufig von anderen Host-Umgebungen wie Node.js oder Deno nachgebildet. So können wir ein zusammenhängendes Bild des JavaScript-Ausführungsmodells im Web und darüber hinaus vermitteln.

## Ausführungsmodell von Agents

In der JavaScript-Spezifikation heißt jede eigenständige Ausführungsinstanz von JavaScript **Agent**. Jeder Agent verwaltet die für die Codeausführung benötigten Strukturen:

- **Heap** (für Objekte): Dies ist die Bezeichnung für einen großen, überwiegend unstrukturierten Speicherbereich. Er füllt sich, wenn im Programm Objekte erstellt werden. Bei gemeinsam genutztem Speicher hat jeder Agent seinen eigenen Heap mit einer eigenen Version eines {{jsxref("SharedArrayBuffer")}}-Objekts. Der zugrunde liegende Speicher, den der Buffer repräsentiert, wird jedoch gemeinsam genutzt.
- [**Queue** (für Jobs)](#job_queue_und_event_loop): Sie wird in HTML – und auch allgemein – als _Event Loop_ bezeichnet. Sie ermöglicht asynchrone Programmierung in JavaScript, obwohl die Ausführung auf einem einzelnen Thread erfolgt. Sie heißt Queue, weil sie im Allgemeinen nach dem First-in-first-out-Prinzip arbeitet: Frühere Jobs werden vor späteren ausgeführt.
- [**Stack** (für Ausführungskontexte)](#stack_und_ausführungskontexte): Er wird auch _Call Stack_ genannt und ermöglicht es, den Kontrollfluss durch das Betreten und Verlassen von Ausführungskontexten wie Funktionen zu übertragen. Er heißt Stack, weil er nach dem Last-in-first-out-Prinzip arbeitet. Jeder Job beginnt damit, einen neuen Frame auf den leeren Stack zu legen, und endet, wenn der Stack wieder leer ist.

Dies sind drei unterschiedliche Datenstrukturen, die jeweils andere Daten verwalten. Die Queue und den Stack erläutern wir in den folgenden Abschnitten genauer. Weitere Informationen darüber, wie Speicher im Heap zugewiesen und freigegeben wird, finden Sie unter [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management).

Ein Agent entspricht ungefähr einem Thread (die zugrunde liegende Implementierung kann ein tatsächlicher Betriebssystem-Thread sein, muss es aber nicht). Jeder Agent kann mehrere [Realms](#realms) besitzen, die jeweils genau einem globalen Objekt entsprechen. Diese Realms können synchron aufeinander zugreifen und müssen daher in einem einzigen Ausführungs-Thread laufen. Ein Agent hat außerdem ein einheitliches Speichermodell, das unter anderem festlegt, ob er Little-Endian verwendet, ob er [synchron blockiert werden kann](#nebenläufigkeit_und_sicherstellung_des_fortschritts) und ob atomare Operationen [lock-free](/de/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree) sind.

Ein Agent im Web kann einer der folgenden Typen sein:

- Ein _Similar-origin window agent_ enthält mehrere [`Window`](/de/docs/Web/API/Window)-Objekte, die einander potenziell erreichen können – entweder direkt oder über [`document.domain`](/de/docs/Web/API/Document/domain). Ist das Fenster [origin-keyed](/de/docs/Web/API/Window/originAgentCluster), können nur Fenster mit demselben Origin einander erreichen.
- Ein _Dedicated worker agent_ enthält einen einzelnen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope).
- Ein _Shared worker agent_ enthält einen einzelnen [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope).
- Ein _Service worker agent_ enthält einen einzelnen [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope).
- Ein _Worklet agent_ enthält einen einzelnen [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope).

Anders ausgedrückt: Jeder Worker erzeugt einen eigenen Agent, während sich ein oder mehrere Fenster denselben Agent teilen können – üblicherweise ein Hauptdokument und seine Iframes mit ähnlichem Origin. In Node.js gibt es ein vergleichbares Konzept namens [Worker Threads](https://nodejs.org/api/worker_threads.html).

Das folgende Diagramm veranschaulicht das Ausführungsmodell von Agents:

![Ein Diagramm mit zwei Agents: einer HTML-Seite und einem Worker. Jeder hat einen eigenen Stack mit Ausführungskontexten, einen Heap mit Objekten und eine Queue mit Jobs.](runtime-environment-diagram.svg)

## Realms

Jeder Agent besitzt einen oder mehrere **Realms**. Jeder JavaScript-Code wird beim Laden einem Realm zugeordnet. Diese Zuordnung bleibt auch dann bestehen, wenn der Code aus einem anderen Realm aufgerufen wird. Ein Realm umfasst die folgenden Informationen:

- Eine Liste intrinsischer Objekte wie `Array`, `Array.prototype` usw.
- Global deklarierte Variablen, den Wert von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) und das globale Objekt
- Einen Cache für [Template-Literal-Arrays](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates), da bei jeder Auswertung desselben Tagged-Template-Literal-Ausdrucks dem Tag dasselbe Array-Objekt übergeben wird

Im Web entsprechen Realm und globales Objekt einander eins zu eins. Das globale Objekt ist entweder ein [`Window`](/de/docs/Web/API/Window), ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) oder ein [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope). So wird beispielsweise jeder `iframe` in einem anderen Realm ausgeführt, auch wenn er sich im selben Agent wie das übergeordnete Fenster befindet.

Realms werden meist erwähnt, wenn es um die Identität globaler Objekte geht. Beispielsweise benötigen wir Methoden wie {{jsxref("Array.isArray()")}} oder {{jsxref("Error.isError()")}}, weil ein in einem anderen Realm erstelltes Array ein anderes Prototypobjekt hat als das `Array.prototype`-Objekt im aktuellen Realm. Daher würde `instanceof Array` fälschlicherweise `false` zurückgeben.

## Stack und Ausführungskontexte

Betrachten wir zunächst die synchrone Codeausführung. Jeder [Job](#job_queue_und_event_loop) beginnt mit dem Aufruf seines zugehörigen Callbacks. Der Code in diesem Callback kann Variablen erstellen, Funktionen aufrufen oder die Ausführung beenden. Jede Funktion muss ihre eigene Variablenumgebung und die Stelle, an die sie zurückkehrt, nachverfolgen. Dazu benötigt der Agent einen Stack für Ausführungskontexte. Ein **Ausführungskontext**, allgemein auch als _Stack Frame_ bezeichnet, ist die kleinste Ausführungseinheit. Er erfasst die folgenden Informationen:

- Den Zustand der Codeauswertung
- Das Modul oder Skript, die Funktion (falls zutreffend) und den aktuell ausgeführten [Generator](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator), zu denen dieser Code gehört
- Den aktuellen [Realm](#realms)
- {{Glossary("Binding", "Bindings")}}, darunter:
  - Mit `var`, `let`, `const`, `function`, `class` usw. definierte Variablen
  - Private Bezeichner wie `#foo`, die nur im aktuellen Kontext gültig sind
  - Die `this`-Referenz

Stellen Sie sich ein Programm vor, das aus einem einzigen Job mit folgendem Code besteht:

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

1. Wenn der Job beginnt, wird der erste Frame erstellt. Darin sind die Variablen `foo`, `bar` und `baz` definiert. Er ruft `bar` mit dem Argument `7` auf.
2. Für den Aufruf von `bar` wird ein zweiter Frame erstellt. Er enthält Bindings für den Parameter `x` und die lokale Variable `y`. Zunächst wird `x * y` multipliziert; anschließend wird `foo` mit dem Ergebnis aufgerufen.
3. Für den Aufruf von `foo` wird ein dritter Frame erstellt. Er enthält Bindings für den Parameter `b` und die lokale Variable `a`. Zunächst wird `a + b + 11` berechnet; anschließend wird das Ergebnis zurückgegeben.
4. Wenn `foo` zurückkehrt, wird der oberste Frame vom Stack entfernt und der Aufrufausdruck `foo(x * y)` nimmt den Rückgabewert an. Danach wird die Ausführung fortgesetzt, wobei nur noch dieses Ergebnis zurückgegeben wird.
5. Wenn `bar` zurückkehrt, wird der oberste Frame vom Stack entfernt und der Aufrufausdruck `bar(7)` nimmt den Rückgabewert an. Mit diesem Wert wird `baz` initialisiert.
6. Wir erreichen das Ende des Quellcodes des Jobs. Daher wird der Frame des Einstiegspunkts vom Stack entfernt. Der Stack ist nun leer und der Job gilt als abgeschlossen.

### Generatoren und erneuter Eintritt

Wenn ein Frame entfernt wird, ist er nicht unbedingt endgültig verschwunden: Manchmal muss die Ausführung zu ihm zurückkehren. Betrachten Sie beispielsweise eine Generatorfunktion:

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

In diesem Fall erzeugt der Aufruf von `gen()` zunächst einen Ausführungskontext, der ausgesetzt wird – Code innerhalb von `gen` wird noch nicht ausgeführt. Der Generator `g` speichert diesen Ausführungskontext intern. Der aktuell laufende Ausführungskontext bleibt der des Einstiegspunkts. Wird `g.next()` aufgerufen, wird der Ausführungskontext von `gen` auf den Stack gelegt und der Code in `gen` bis zum `yield`-Ausdruck ausgeführt. Dann wird der Ausführungskontext des Generators ausgesetzt und vom Stack entfernt. Dadurch geht die Kontrolle an den Einstiegspunkt zurück. Beim nächsten Aufruf von `g.next()` wird der Ausführungskontext des Generators erneut auf den Stack gelegt und der Code in `gen` an der Stelle fortgesetzt, an der er unterbrochen wurde.

### Tail Calls

Ein in der Spezifikation definierter Mechanismus sind _Proper Tail Calls_ (PTC). Ein Funktionsaufruf ist ein Tail Call, wenn die aufrufende Funktion nach dem Aufruf nichts weiter tut, als dessen Wert zurückzugeben:

```js
function f() {
  return g();
}
```

In diesem Fall ist der Aufruf von `g` ein Tail Call. Steht ein Funktionsaufruf an einer Tail-Position, muss die Engine den aktuellen Ausführungskontext verwerfen und durch den Kontext des Tail Calls ersetzen, statt für den Aufruf von `g()` einen neuen Frame auf den Stack zu legen. Dadurch unterliegt Tail-Rekursion nicht den Größenbeschränkungen des Stacks:

```js
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc);
}
```

In der Praxis verursacht das Verwerfen des aktuellen Frames Probleme beim Debugging: Wenn `g()` einen Fehler auslöst, befindet sich `f` nicht mehr auf dem Stack und erscheint nicht im Stacktrace. Derzeit implementiert nur Safari (JavaScriptCore) PTC. Das Team hat eine [spezielle Infrastruktur](https://webkit.org/blog/6240/ecmascript-6-proper-tail-calls-in-webkit/) entwickelt, um dieses Debugging-Problem zu lösen.

### Closures

Ein weiteres interessantes Phänomen im Zusammenhang mit dem Gültigkeitsbereich von Variablen und Funktionsaufrufen sind [Closures](/de/docs/Web/JavaScript/Guide/Closures). Jedes Mal, wenn eine Funktion erstellt wird, merkt sie sich intern auch die Variablen-Bindings des gerade laufenden Ausführungskontexts. Diese Bindings können dann über die Lebensdauer des Ausführungskontexts hinaus bestehen bleiben.

```js
let f;
{
  let x = 10;
  f = () => x;
}
console.log(f()); // logs 10
```

## Job Queue und Event Loop

Ein Agent ist ein Thread. Das bedeutet, dass der Interpreter jeweils nur eine Anweisung verarbeiten kann. Solange der gesamte Code synchron ist, ist das kein Problem, denn die Ausführung kann stets fortgesetzt werden. Muss der Code jedoch eine asynchrone Aktion ausführen, kann er erst fortfahren, wenn diese abgeschlossen ist. Würde dadurch das gesamte Programm angehalten, wäre das schlecht für die Benutzererfahrung: JavaScript muss als Skriptsprache für das Web [nicht blockierend](#nicht_blockierend) sein. Deshalb wird der Code, der nach Abschluss einer asynchronen Aktion ausgeführt werden soll, als Callback definiert. Dieser Callback definiert einen **Job**, der nach Abschluss der Aktion in eine **Job Queue** eingereiht wird – in der HTML-Terminologie in eine Event Loop.

Der Agent entnimmt jeweils einen Job aus der Queue und führt ihn aus. Während seiner Ausführung kann ein Job weitere Jobs erzeugen, die am Ende der Queue eingereiht werden. Jobs können auch durch den Abschluss asynchroner Plattformmechanismen wie Timer, I/O und Events hinzugefügt werden. Ein Job gilt als abgeschlossen, wenn der [Stack](#stack_und_ausführungskontexte) leer ist. Dann wird der nächste Job aus der Queue entnommen. Jobs werden möglicherweise nicht mit einheitlicher Priorität entnommen: HTML-Event-Loops unterteilen sie beispielsweise in zwei Kategorien, _Tasks_ und _Microtasks_. Microtasks haben eine höhere Priorität; die Microtask Queue wird vollständig abgearbeitet, bevor ein Job aus der Task Queue entnommen wird. Weitere Informationen finden Sie im [HTML-Leitfaden zu Microtasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide). Ist die Job Queue leer, wartet der Agent darauf, dass weitere Jobs hinzugefügt werden.

### „Run-to-completion“

Jeder Job wird vollständig verarbeitet, bevor ein anderer Job an die Reihe kommt. Das erleichtert es, das Verhalten eines Programms nachzuvollziehen: Eine laufende Funktion kann nicht unterbrochen werden. Sie wird vollständig ausgeführt, bevor anderer Code ausgeführt wird und möglicherweise Daten verändert, mit denen die Funktion arbeitet. Das unterscheidet sich beispielsweise von C: Dort kann eine in einem Thread laufende Funktion jederzeit vom Laufzeitsystem angehalten werden, damit anderer Code in einem anderen Thread ausgeführt wird.

Betrachten Sie beispielsweise folgenden Code:

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

Hier erstellen wir ein bereits erfülltes Promise. Das bedeutet, dass alle daran angehängten Callbacks sofort als Jobs eingeplant werden. Die beiden Callbacks scheinen eine Race Condition zu verursachen. Tatsächlich ist die Ausgabe aber vollständig vorhersehbar: `1` und `2` werden in dieser Reihenfolge protokolliert. Denn jeder Job läuft vollständig ab, bevor der nächste ausgeführt wird. Die Gesamtreihenfolge ist daher immer `i += 1; console.log(i); i += 1; console.log(i);` und niemals `i += 1; i += 1; console.log(i); console.log(i);`.

Ein Nachteil dieses Modells ist, dass eine Webanwendung Benutzerinteraktionen wie Klicken oder Scrollen nicht verarbeiten kann, wenn ein Job zu lange dauert. Der Browser wirkt dem mit einem Dialog entgegen, der meldet, dass die Ausführung eines Skripts zu lange dauert. Es empfiehlt sich, Jobs kurz zu halten und einen Job nach Möglichkeit in mehrere Jobs aufzuteilen.

### Nicht blockierend

Eine weitere wichtige Eigenschaft des Event-Loop-Modells ist, dass die JavaScript-Ausführung nicht blockiert. I/O wird üblicherweise über Events und Callbacks verarbeitet. Während die Anwendung also auf das Ergebnis einer [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Abfrage oder einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage wartet, kann sie weiterhin andere Vorgänge wie Benutzereingaben verarbeiten. Der Code, der nach Abschluss einer asynchronen Aktion ausgeführt wird, wird immer als Callback-Funktion bereitgestellt – beispielsweise als {{jsxref("Promise/then", "then()")}}-Handler eines Promise, als Callback-Funktion in `setTimeout()` oder als Event-Handler. Diese Funktion definiert einen Job, der nach Abschluss der Aktion in die Job Queue eingereiht wird.

Die Garantie einer nicht blockierenden Ausführung setzt natürlich voraus, dass die Plattform-API grundsätzlich asynchron ist. Es gibt jedoch einige ältere Ausnahmen wie `alert()` oder synchrones XHR. Sie sollten vermieden werden, damit die Anwendung reaktionsfähig bleibt.

## Agent Clusters und gemeinsame Speichernutzung

Mehrere Agents können über gemeinsam genutzten Speicher kommunizieren und so einen **Agent Cluster** bilden. Agents gehören genau dann demselben Cluster an, wenn sie Speicher gemeinsam nutzen können. Für den Informationsaustausch zwischen zwei Agent Clusters gibt es keinen integrierten Mechanismus. Sie können daher als vollständig voneinander isolierte Ausführungsmodelle betrachtet werden.

Beim Erstellen eines Agents, beispielsweise durch das Starten eines Workers, bestimmen bestimmte Kriterien, ob er zum selben Cluster wie der aktuelle Agent gehört oder ein neuer Cluster erstellt wird. Die folgenden Paare globaler Objekte gehören jeweils zum selben Agent Cluster und können daher Speicher miteinander teilen:

- Ein `Window`-Objekt und ein von ihm erstellter Dedicated Worker.
- Ein Worker beliebigen Typs und ein von ihm erstellter Dedicated Worker.
- Ein `Window`-Objekt A und das `Window`-Objekt eines von A erstellten `iframe`-Elements mit demselben Origin.
- Ein `Window`-Objekt und ein `Window`-Objekt mit demselben Origin, das es geöffnet hat.
- Ein `Window`-Objekt und ein von ihm erstelltes Worklet.

Die folgenden Paare globaler Objekte gehören nicht zum selben Agent Cluster und können daher keinen Speicher miteinander teilen:

- Ein `Window`-Objekt und ein von ihm erstellter Shared Worker.
- Ein Worker beliebigen Typs und ein von ihm erstellter Shared Worker.
- Ein `Window`-Objekt und ein von ihm erstellter Service Worker.
- Ein `Window`-Objekt A und das `Window`-Objekt eines von A erstellten `iframe`-Elements, das nicht denselben Origin-Domain-Wert wie A haben kann.
- Zwei beliebige `Window`-Objekte, zwischen denen keine Beziehung als öffnendes oder übergeordnetes Fenster besteht. Das gilt auch dann, wenn die beiden `Window`-Objekte denselben Origin haben.

Den genauen Algorithmus finden Sie in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-agent-cluster-formalism).

### Kommunikation zwischen Agents und Speichermodell

Wie bereits erwähnt, kommunizieren Agents über gemeinsam genutzten Speicher. Im Web erfolgt der Speicheraustausch über die Methode [`postMessage()`](/de/docs/Web/API/Window/postMessage). Einen Überblick dazu bietet der [Leitfaden zur Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers). Üblicherweise werden Daten nur als Werte übertragen – mittels [strukturierter Klonung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). Dadurch entstehen keine Komplikationen durch konkurrierende Zugriffe. Um Speicher tatsächlich gemeinsam zu nutzen, muss ein {{jsxref("SharedArrayBuffer")}}-Objekt übermittelt werden, auf das mehrere Agents gleichzeitig zugreifen können. Sobald zwei Agents über einen `SharedArrayBuffer` Zugriff auf denselben Speicher haben, können sie ihre Ausführung mithilfe des {{jsxref("Atomics")}}-Objekts synchronisieren.

Auf gemeinsam genutzten Speicher kann auf zwei Arten zugegriffen werden: durch normalen Speicherzugriff, der nicht atomar ist, und durch atomaren Speicherzugriff. Letzterer ist [sequenziell konsistent](https://en.wikipedia.org/wiki/Sequential_consistency): Alle Agents im Cluster stimmen über eine strikte Gesamtreihenfolge der Ereignisse überein. Für normalen Speicherzugriff ist dagegen keine Reihenfolge festgelegt. JavaScript stellt keine Operationen mit anderen Reihenfolgegarantien bereit.

Die Spezifikation gibt Programmierenden, die mit gemeinsam genutztem Speicher arbeiten, folgende Empfehlungen:

> Wir empfehlen, Programme frei von Datenrennen zu halten. Das heißt, gleichzeitige nicht atomare Operationen auf derselben Speicherstelle sollten unmöglich sein. Bei Programmen ohne Datenrennen können die einzelnen Auswertungsschritte der Agents ineinander verschachtelt werden. Für solche Programme ist es nicht erforderlich, die Details des Speichermodells zu verstehen. Diese Details dürften kaum zu einem intuitiven Verständnis beitragen, das beim Schreiben von ECMAScript hilfreich wäre.
>
> Allgemeiner gilt: Selbst wenn ein Programm Datenrennen aufweist, kann sein Verhalten vorhersehbar sein, solange an keinem Datenrennen atomare Operationen beteiligt sind und alle konkurrierenden Operationen dieselbe Zugriffsgröße haben. Am einfachsten lässt sich verhindern, dass atomare Operationen an Datenrennen beteiligt sind, indem für atomare und nicht atomare Operationen unterschiedliche Speicherzellen verwendet werden. Außerdem sollten atomare Zugriffe unterschiedlicher Größe nicht gleichzeitig auf dieselben Zellen zugreifen. Im Ergebnis sollte das Programm gemeinsam genutzten Speicher möglichst wie stark typisierten Speicher behandeln. Auf die Reihenfolge und den Zeitpunkt konkurrierender nicht atomarer Zugriffe kann man sich weiterhin nicht verlassen. Wird der Speicher jedoch wie stark typisierter Speicher behandelt, kommt es bei diesen Zugriffen nicht zum „Tearing“: Bits ihrer Werte werden nicht vermischt.

### Nebenläufigkeit und Sicherstellung des Fortschritts

Wenn mehrere Agents zusammenarbeiten, gilt die Garantie einer [nicht blockierenden Ausführung](#nicht_blockierend) nicht immer. Ein Agent kann _blockiert_ oder angehalten werden, während er darauf wartet, dass ein anderer Agent eine Aktion ausführt. Das unterscheidet sich vom Warten auf ein Promise innerhalb desselben Agents: Der gesamte Agent wird angehalten und kann in der Zwischenzeit keinen anderen Code ausführen. Anders ausgedrückt: Er kann keinen _Fortschritt_ erzielen.

Um Deadlocks zu verhindern, gelten strenge Einschränkungen dafür, wann und welche Agents blockiert werden dürfen.

- Jeder nicht blockierte Agent mit einem eigenen Ausführungs-Thread erzielt irgendwann Fortschritt.
- Teilen sich mehrere Agents einen Ausführungs-Thread, erzielt irgendwann einer dieser Agents Fortschritt.
- Ein Agent blockiert einen anderen Agent nur über explizite APIs, die eine Blockierung ermöglichen.
- Nur bestimmte Agents dürfen blockiert werden. Im Web gehören dazu Dedicated Worker und Shared Worker, nicht jedoch Similar-origin Windows oder Service Worker.

Der Agent Cluster stellt auch dann ein gewisses Maß an Integrität hinsichtlich der Aktivität seiner Agents sicher, wenn diese von außen angehalten oder beendet werden:

- Ein Agent kann ohne sein Wissen oder seine Mitwirkung angehalten und später fortgesetzt werden. Wenn beispielsweise von einem Fenster weg navigiert wird, kann die Codeausführung ausgesetzt werden, während ihr Zustand erhalten bleibt. Ein Agent Cluster darf jedoch nicht nur teilweise deaktiviert werden. So wird verhindert, dass ein Agent dauerhaft nicht vorankommt, weil ein anderer deaktiviert wurde. Shared Worker befinden sich beispielsweise nie im selben Agent Cluster wie das Fenster, das sie erstellt hat, oder andere Dedicated Worker. Der Grund ist, dass die Lebensdauer eines Shared Workers unabhängig von Dokumenten ist: Wird ein Dokument deaktiviert, während sein Dedicated Worker eine Sperre hält, kann der Shared Worker diese Sperre erst erhalten, wenn der Dedicated Worker wieder aktiviert wird – falls das überhaupt geschieht. In der Zwischenzeit könnten auch andere Worker, die aus anderen Fenstern auf den Shared Worker zugreifen möchten, nicht vorankommen.
- Ebenso kann ein Agent durch Faktoren außerhalb des Clusters beendet werden. Beispielsweise können ein Betriebssystem oder Benutzer einen Browserprozess beenden, oder der Browser kann einen Agent wegen zu hohen Ressourcenverbrauchs zwangsweise beenden. In diesem Fall werden alle Agents im Cluster beendet. Die Spezifikation erlaubt auch eine zweite Strategie: Eine API könnte es mindestens einem verbleibenden Mitglied des Clusters ermöglichen, die Beendigung und den betroffenen Agent zu erkennen. Diese Strategie ist im Web jedoch nicht implementiert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Kommunikation und Koordination zwischen Agents](/de/docs/Web/JavaScript/Guide/Agent_communication_and_coordination)
- [Event Loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) im HTML-Standard
- [Was ist die Event Loop?](https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop) in der Node.js-Dokumentation
