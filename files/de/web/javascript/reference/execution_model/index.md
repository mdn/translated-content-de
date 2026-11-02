---
title: JavaScript-Ausführungsmodell
slug: Web/JavaScript/Reference/Execution_model
l10n:
  sourceCommit: 389605121ed8ea78cc1878f31bbca6759cc7417d
---

Diese Seite stellt die grundlegende Infrastruktur der JavaScript-Laufzeitumgebung vor. Das Modell ist weitgehend theoretisch und abstrakt; plattform- oder implementierungsspezifische Details bleiben außen vor. Moderne JavaScript-Engines optimieren die beschriebenen Abläufe umfassend.

Diese Seite dient als Referenz. Sie setzt voraus, dass Sie bereits mit den Ausführungsmodellen anderer Programmiersprachen wie C und Java vertraut sind. Sie bezieht sich häufig auf bestehende Konzepte aus Betriebssystemen und Programmiersprachen.

## Die Engine und die Host-Umgebung

Für die Ausführung von JavaScript müssen zwei Softwarekomponenten zusammenarbeiten: die **JavaScript-Engine** und die **Host-Umgebung**.

Die JavaScript-Engine implementiert die [Sprache ECMAScript (JavaScript)](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) und stellt deren Kernfunktionalität bereit. Sie nimmt Quellcode entgegen, analysiert ihn und führt ihn aus. Um jedoch mit der Außenwelt zu interagieren – etwa um eine sinnvolle Ausgabe zu erzeugen, auf externe Ressourcen zuzugreifen oder Mechanismen für Sicherheit und Leistung bereitzustellen –, benötigen wir zusätzliche, umgebungsspezifische Mechanismen der Host-Umgebung. Wenn JavaScript in einem Webbrowser ausgeführt wird, gehört beispielsweise das HTML-DOM zur Host-Umgebung. Node.js ist eine weitere Host-Umgebung, in der JavaScript serverseitig ausgeführt werden kann.

Obwohl wir uns in dieser Referenz vor allem auf die in ECMAScript definierten Mechanismen konzentrieren, gehen wir gelegentlich auch auf Mechanismen der HTML-Spezifikation ein. Diese werden häufig von anderen Host-Umgebungen wie Node.js oder Deno nachgebildet. So lässt sich ein zusammenhängendes Bild des JavaScript-Ausführungsmodells im Web und darüber hinaus vermitteln.

## Ausführungsmodell von Agents

In der JavaScript-Spezifikation wird jede eigenständige Ausführungseinheit für JavaScript als **Agent** bezeichnet. Ein Agent verwaltet die folgenden Strukturen für die Codeausführung:

- **Heap** (für Objekte): Dies ist die Bezeichnung für einen großen, überwiegend unstrukturierten Speicherbereich. Er füllt sich, wenn im Programm Objekte erstellt werden. Bei gemeinsam genutztem Speicher hat jeder Agent einen eigenen Heap mit einer eigenen Version eines {{jsxref("SharedArrayBuffer")}}-Objekts. Der zugrunde liegende Speicher, den der Puffer repräsentiert, wird jedoch gemeinsam genutzt.
- [**Queue** (für Jobs)](#job-queue_und_event_loop): Diese wird in HTML und auch im allgemeinen Sprachgebrauch als _Event Loop_ bezeichnet. Sie ermöglicht asynchrone Programmierung in JavaScript, obwohl die Ausführung innerhalb eines Agents nur über einen Thread erfolgt. Sie heißt Queue, weil Jobs im Allgemeinen nach dem First-in-first-out-Prinzip verarbeitet werden: Frühere Jobs werden vor späteren ausgeführt.
- [**Stack** (für Ausführungskontexte)](#stack_und_ausführungskontexte): Dieser wird als _Call Stack_ bezeichnet und ermöglicht es, den Kontrollfluss durch das Betreten und Verlassen von Ausführungskontexten wie Funktionen weiterzugeben. Er heißt Stack, weil er nach dem Last-in-first-out-Prinzip arbeitet. Jeder Job beginnt damit, einen neuen Frame auf den leeren Stack zu legen, und endet, wenn der Stack wieder leer ist.

Diese drei eigenständigen Datenstrukturen verwalten unterschiedliche Daten. Die Queue und den Stack erläutern wir in den folgenden Abschnitten genauer. Weitere Informationen dazu, wie Heap-Speicher zugewiesen und freigegeben wird, finden Sie unter [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management).

Jeder Agent ist mit einem Thread vergleichbar. Beachten Sie, dass die zugrunde liegende Implementierung dafür nicht unbedingt einen tatsächlichen Betriebssystem-Thread verwendet. Ein Agent kann mehrere [Realms](#realms) besitzen, die jeweils genau einem globalen Objekt zugeordnet sind und synchron aufeinander zugreifen können. Daher müssen sie in einem einzigen Ausführungs-Thread laufen. Ein Agent hat außerdem ein einheitliches Speichermodell. Dieses legt unter anderem fest, ob Little-Endian verwendet wird, ob der Agent [synchron blockiert werden kann](#nebenläufigkeit_und_sicherstellung_des_fortschritts) und ob atomare Operationen [lock-free](/de/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree) sind.

Im Web kann ein Agent einer der folgenden Typen sein:

- Ein _Similar-origin window agent_, der verschiedene [`Window`](/de/docs/Web/API/Window)-Objekte enthält, die potenziell aufeinander zugreifen können – entweder direkt oder über [`document.domain`](/de/docs/Web/API/Document/domain). Wenn das Fenster [origin-keyed](/de/docs/Web/API/Window/originAgentCluster) ist, können nur Fenster mit demselben Ursprung aufeinander zugreifen.
- Ein _Dedicated worker agent_ mit einem einzelnen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope).
- Ein _Shared worker agent_ mit einem einzelnen [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope).
- Ein _Service worker agent_ mit einem einzelnen [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope).
- Ein _Worklet agent_ mit einem einzelnen [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope).

Anders ausgedrückt: Jeder Worker erstellt einen eigenen Agent, während sich ein oder mehrere Fenster im selben Agent befinden können – typischerweise ein Hauptdokument und dessen iframes mit ähnlichem Ursprung. In Node.js gibt es ein vergleichbares Konzept namens [worker threads](https://nodejs.org/api/worker_threads.html).

Das folgende Diagramm veranschaulicht das Ausführungsmodell von Agents:

![Ein Diagramm mit zwei Agents: einer HTML-Seite und einem Worker. Jeder hat einen eigenen Stack mit Ausführungskontexten, einen Heap mit Objekten und eine Queue mit Jobs.](runtime-environment-diagram.svg)

## Realms

Jeder Agent besitzt einen oder mehrere **Realms**. Jeder JavaScript-Code wird beim Laden einem Realm zugeordnet. Diese Zuordnung bleibt bestehen, selbst wenn der Code aus einem anderen Realm aufgerufen wird. Ein Realm umfasst folgende Informationen:

- Eine Liste intrinsischer Objekte wie `Array`, `Array.prototype` usw.
- Global deklarierte Variablen, den Wert von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) und das globale Objekt
- Einen Cache für [Template-Literal-Arrays](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates), da die Auswertung desselben Tagged-Template-Literal-Ausdrucks dem Tag stets dasselbe Array-Objekt übergibt

Im Web ist jedem Realm genau ein globales Objekt zugeordnet und umgekehrt. Das globale Objekt ist entweder ein [`Window`](/de/docs/Web/API/Window), ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) oder ein [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope). Beispielsweise wird jeder `iframe` in einem anderen Realm ausgeführt, auch wenn er sich im selben Agent wie das übergeordnete Fenster befinden kann.

Realms werden meist erwähnt, wenn es um die Identität globaler Objekte geht. Beispielsweise benötigen wir Methoden wie {{jsxref("Array.isArray()")}} oder {{jsxref("Error.isError()")}}, weil ein in einem anderen Realm erstelltes Array ein anderes Prototypobjekt hat als das `Array.prototype`-Objekt im aktuellen Realm. Daher würde `instanceof Array` fälschlicherweise `false` zurückgeben.

## Stack und Ausführungskontexte

Betrachten wir zunächst die synchrone Codeausführung. Jeder [Job](#job-queue_und_event_loop) beginnt mit dem Aufruf seines zugehörigen Callbacks. Der Code in diesem Callback kann Variablen erstellen, Funktionen aufrufen oder die Ausführung beenden. Jede Funktion muss ihre eigene Variablenumgebung und die Stelle verwalten, zu der sie zurückkehrt. Dazu benötigt der Agent einen Stack, auf dem er die Ausführungskontexte nachverfolgt. Ein **Ausführungskontext**, allgemein auch _Stack Frame_ genannt, ist die kleinste Ausführungseinheit. Er verwaltet die folgenden Informationen:

- Den Zustand der Codeauswertung
- Das Modul oder Skript, die Funktion (falls vorhanden) und den aktuell ausgeführten [Generator](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator), die diesen Code enthalten
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
2. Für den Aufruf von `bar` wird ein zweiter Frame erstellt, der Bindings für den Parameter `x` und die lokale Variable `y` enthält. Zunächst wird `x * y` berechnet; anschließend wird `foo` mit dem Ergebnis aufgerufen.
3. Für den Aufruf von `foo` wird ein dritter Frame erstellt, der Bindings für den Parameter `b` und die lokale Variable `a` enthält. Zunächst wird `a + b + 11` berechnet; anschließend wird das Ergebnis zurückgegeben.
4. Wenn `foo` zurückkehrt, wird der oberste Frame vom Stack entfernt. Der Aufrufausdruck `foo(x * y)` wird dadurch zum Rückgabewert ausgewertet. Danach wird die Ausführung fortgesetzt, indem dieser Wert zurückgegeben wird.
5. Wenn `bar` zurückkehrt, wird der oberste Frame vom Stack entfernt. Der Aufrufausdruck `bar(7)` wird dadurch zum Rückgabewert ausgewertet. Mit diesem Rückgabewert wird `baz` initialisiert.
6. Das Ende des Quellcodes des Jobs ist erreicht. Daher wird der Frame des Einstiegspunkts vom Stack entfernt. Der Stack ist nun leer und der Job gilt als abgeschlossen.

### Generatoren und erneuter Eintritt

Ein vom Stack entfernter Frame ist nicht unbedingt endgültig verschwunden, denn manchmal muss die Ausführung dorthin zurückkehren. Betrachten Sie beispielsweise eine Generatorfunktion:

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

In diesem Fall erzeugt der Aufruf von `gen()` zunächst einen Ausführungskontext, der angehalten wird – Code innerhalb von `gen` wird noch nicht ausgeführt. Der Generator `g` speichert diesen Ausführungskontext intern. Der aktuell laufende Ausführungskontext bleibt der des Einstiegspunkts. Beim Aufruf von `g.next()` wird der Ausführungskontext von `gen` auf den Stack gelegt. Der Code in `gen` wird bis zum `yield`-Ausdruck ausgeführt. Dann wird der Ausführungskontext des Generators angehalten und vom Stack entfernt, wodurch die Steuerung zum Einstiegspunkt zurückkehrt. Wird `g.next()` erneut aufgerufen, wird der Ausführungskontext des Generators wieder auf den Stack gelegt und der Code in `gen` an der Stelle fortgesetzt, an der er angehalten wurde.

### Tail Calls

Ein in der Spezifikation definierter Mechanismus ist der _Proper Tail Call_ (PTC). Ein Funktionsaufruf ist ein Tail Call, wenn die aufrufende Funktion nach dem Aufruf nichts weiter tut, als dessen Wert zurückzugeben:

```js
function f() {
  return g();
}
```

In diesem Fall ist der Aufruf von `g` ein Tail Call. Ausschließlich im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) muss die Engine bei einem Funktionsaufruf in Tail-Position den aktuellen Ausführungskontext verwerfen und durch den Kontext des Tail Calls ersetzen, statt für den Aufruf von `g()` einen neuen Frame auf den Stack zu legen. Dadurch unterliegt Tail-Rekursion nicht den Grenzen der Stack-Größe:

```js
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc);
}
```

In der Praxis erschwert das Verwerfen des aktuellen Frames allerdings das Debugging: Wenn `g()` einen Fehler auslöst, befindet sich `f` nicht mehr auf dem Stack und erscheint nicht im Stack-Trace. Derzeit implementiert nur Safari (JavaScriptCore) PTC. Dort wurde eine [spezielle Infrastruktur](https://webkit.org/blog/6240/ecmascript-6-proper-tail-calls-in-webkit/) entwickelt, um das Debugging-Problem zu lösen.

### Closures

Ein weiteres interessantes Phänomen im Zusammenhang mit Variablengültigkeitsbereichen und Funktionsaufrufen sind [Closures](/de/docs/Web/JavaScript/Guide/Closures). Wenn eine Funktion erstellt wird, merkt sie sich intern auch die Variablen-Bindings des aktuell laufenden Ausführungskontexts. Diese Bindings können dadurch länger bestehen bleiben als der Ausführungskontext selbst.

```js
let f;
{
  let x = 10;
  f = () => x;
}
console.log(f()); // logs 10
```

## Job-Queue und Event Loop

Ein Agent ist ein Thread. Das bedeutet, dass der Interpreter jeweils nur eine Anweisung auf einmal verarbeiten kann. Solange der gesamte Code synchron ist, stellt das kein Problem dar, weil die Ausführung stets fortgesetzt werden kann. Muss der Code jedoch eine asynchrone Aktion ausführen, kann er erst fortfahren, wenn diese Aktion abgeschlossen ist. Würde dadurch das gesamte Programm angehalten, wäre das allerdings schlecht für die Benutzererfahrung. JavaScript als Skriptsprache für das Web muss daher [niemals blockieren](#niemals_blockieren). Deshalb wird der Code, der auf den Abschluss einer asynchronen Aktion reagiert, als Callback definiert. Dieser Callback bildet einen **Job**, der nach Abschluss der Aktion in eine **Job-Queue** eingereiht wird – in der HTML-Terminologie in einen Event Loop.

Der Agent entnimmt der Queue jeweils einen Job und führt ihn aus. Während der Ausführung kann dieser Job weitere Jobs erzeugen, die am Ende der Queue eingereiht werden. Jobs können auch durch den Abschluss asynchroner Plattformmechanismen wie Timer, I/O und Events hinzukommen. Ein Job gilt als abgeschlossen, wenn der [Stack](#stack_und_ausführungskontexte) leer ist. Anschließend wird der nächste Job aus der Queue entnommen. Jobs werden möglicherweise nicht mit einheitlicher Priorität entnommen: HTML-Event-Loops teilen Jobs beispielsweise in zwei Kategorien ein, _Tasks_ und _Microtasks_. Microtasks haben eine höhere Priorität; die Microtask-Queue wird vollständig abgearbeitet, bevor ein Job aus der Task-Queue entnommen wird. Weitere Informationen finden Sie im [Leitfaden zu HTML-Microtasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide). Ist die Job-Queue leer, wartet der Agent, bis neue Jobs hinzugefügt werden.

### „Run-to-completion“

Jeder Job wird vollständig verarbeitet, bevor ein anderer Job ausgeführt wird. Das erleichtert die Analyse eines Programms: Eine laufende Funktion kann nicht unterbrochen werden und wird vollständig ausgeführt, bevor anderer Code läuft, der die von ihr verwendeten Daten verändern könnte. Das unterscheidet sich beispielsweise von C. Dort kann eine Funktion, die in einem Thread läuft, vom Laufzeitsystem jederzeit angehalten werden, damit anderer Code in einem anderen Thread ausgeführt wird.

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

In diesem Beispiel erstellen wir ein bereits erfülltes Promise. Daher wird jeder daran angehängte Callback sofort als Job eingeplant. Die beiden Callbacks scheinen eine Race Condition zu verursachen, tatsächlich ist die Ausgabe aber vollständig vorhersehbar: `1` und `2` werden in dieser Reihenfolge protokolliert. Der Grund ist, dass jeder Job abgeschlossen wird, bevor der nächste beginnt. Die Gesamtreihenfolge lautet daher immer `i += 1; console.log(i); i += 1; console.log(i);` und niemals `i += 1; i += 1; console.log(i); console.log(i);`.

Ein Nachteil dieses Modells ist, dass die Webanwendung keine Benutzerinteraktionen wie Klicks oder Scrollen verarbeiten kann, wenn ein Job zu lange dauert. Der Browser begegnet dem mit einem Dialog, der darauf hinweist, dass die Ausführung eines Skripts zu lange dauert. Es empfiehlt sich daher, Jobs kurz zu halten und einen Job nach Möglichkeit in mehrere Jobs aufzuteilen.

### Niemals blockieren

Eine weitere wichtige Eigenschaft des Event-Loop-Modells ist, dass die JavaScript-Ausführung niemals blockiert. I/O wird üblicherweise über Events und Callbacks verarbeitet. Während die Anwendung auf das Ergebnis einer [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Abfrage oder einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage wartet, kann sie daher weiterhin andere Dinge wie Benutzereingaben verarbeiten. Der Code, der nach Abschluss einer asynchronen Aktion ausgeführt wird, wird stets als Callback-Funktion bereitgestellt – beispielsweise als {{jsxref("Promise/then", "then()")}}-Handler eines Promise, als Callback-Funktion in `setTimeout()` oder als Event-Handler. Dieser Callback definiert einen Job, der nach Abschluss der Aktion in die Job-Queue eingereiht wird.

Damit die Ausführung „niemals blockiert“, muss die Plattform-API natürlich grundsätzlich asynchron sein. Es gibt jedoch einige ältere Ausnahmen, etwa `alert()` oder synchrones XHR. Es gilt als gute Praxis, diese zu vermeiden, damit die Anwendung reaktionsfähig bleibt.

## Agent-Cluster und gemeinsame Speichernutzung

Mehrere Agents können über gemeinsam genutzten Speicher kommunizieren und bilden dadurch einen **Agent-Cluster**. Agents gehören genau dann zum selben Cluster, wenn sie Speicher gemeinsam nutzen können. Agents in unterschiedlichen Clustern können dennoch über andere Protokolle wie `postMessage()` Informationen austauschen.

Beim Erstellen eines Agents, etwa durch das Starten eines Workers, bestimmen bestimmte Kriterien, ob er zum selben Cluster wie der aktuelle Agent gehört oder ein neuer Cluster erstellt wird. Die folgenden Paare globaler Objekte befinden sich beispielsweise jeweils im selben Agent-Cluster und können daher Speicher gemeinsam nutzen:

- Ein `Window`-Objekt und ein Dedicated Worker, den es erstellt hat.
- Ein Worker beliebigen Typs und ein Dedicated Worker, den er erstellt hat.
- Ein `Window`-Objekt A und das `Window`-Objekt eines von A erstellten `iframe`-Elements mit demselben Ursprung.
- Ein `Window`-Objekt und ein `Window`-Objekt mit demselben Ursprung, das es geöffnet hat.
- Ein `Window`-Objekt und ein Worklet, das es erstellt hat.

Die folgenden Paare globaler Objekte befinden sich nicht im selben Agent-Cluster und können daher keinen Speicher gemeinsam nutzen:

- Ein `Window`-Objekt und ein Shared Worker, den es erstellt hat.
- Ein Worker beliebigen Typs und ein Shared Worker, den er erstellt hat.
- Ein `Window`-Objekt und ein Service Worker, den es erstellt hat.
- Ein `Window`-Objekt A und das `Window`-Objekt eines von A erstellten `iframe`-Elements, das einen anderen Ursprung als A hat, wenn der Agent-Cluster von A origin-keyed ist.
- Zwei beliebige `Window`-Objekte, zwischen denen keine Beziehung als öffnendes oder übergeordnetes Fenster besteht. Dies gilt auch dann, wenn die beiden `Window`-Objekte denselben Ursprung haben.

Den genauen Algorithmus finden Sie in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-agent-cluster-formalism).

### Kommunikation zwischen Agents und Speichermodell

Wie bereits erwähnt, können Agents über gemeinsam genutzten Speicher kommunizieren. Im Web wird Speicher über die Methode [`postMessage()`](/de/docs/Web/API/Window/postMessage) geteilt. Der Leitfaden [Web Worker verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers) gibt hierzu einen Überblick. Üblicherweise werden Daten nur als Wert übergeben – mithilfe des [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). Dadurch entstehen keine Komplikationen durch gleichzeitige Zugriffe. Um Speicher gemeinsam zu nutzen, muss ein {{jsxref("SharedArrayBuffer")}}-Objekt übergeben werden, auf das mehrere Agents gleichzeitig zugreifen können. Sobald zwei Agents über einen `SharedArrayBuffer` auf denselben Speicher zugreifen können, können sie ihre Ausführung mithilfe des {{jsxref("Atomics")}}-Objekts synchronisieren.

Es gibt zwei Möglichkeiten, auf gemeinsam genutzten Speicher zuzugreifen: durch normale Speicherzugriffe, die nicht atomar sind, und durch atomare Speicherzugriffe. Letztere sind [sequenziell konsistent](https://en.wikipedia.org/wiki/Sequential_consistency). Das bedeutet, dass eine strenge, vollständige Reihenfolge der Ereignisse besteht, über die alle Agents im Cluster übereinstimmen. Normale Speicherzugriffe sind dagegen ungeordnet; für sie besteht keine solche Reihenfolge. JavaScript stellt keine Operationen mit anderen Reihenfolgegarantien bereit.

Die Spezifikation gibt Programmierenden, die mit gemeinsam genutztem Speicher arbeiten, folgende Empfehlungen:

> Wir empfehlen, Programme frei von Data Races zu halten. Das bedeutet, dass gleichzeitige nicht-atomare Operationen auf dieselbe Speicherstelle unmöglich sein sollten. Programme ohne Data Races haben eine Ausführungssemantik, bei der sich die einzelnen Auswertungsschritte der Agents miteinander verschränken. Für solche Programme ist es nicht erforderlich, die Einzelheiten des Speichermodells zu verstehen. Diese Einzelheiten tragen wahrscheinlich kaum zu einem besseren intuitiven Verständnis bei, das beim Schreiben von ECMAScript-Code helfen würde.
>
> Allgemeiner gilt: Selbst wenn ein Programm nicht frei von Data Races ist, kann sein Verhalten vorhersagbar sein, solange keine atomaren Operationen an den Data Races beteiligt sind und alle konkurrierenden Operationen dieselbe Zugriffsgröße haben. Am einfachsten lässt sich verhindern, dass atomare Operationen an Data Races beteiligt sind, indem atomare und nicht-atomare Operationen auf unterschiedliche Speicherzellen zugreifen und atomare Zugriffe unterschiedlicher Größe nicht gleichzeitig auf dieselben Zellen zugreifen. Das Programm sollte gemeinsam genutzten Speicher also so weit wie möglich als streng typisiert behandeln. Auf Reihenfolge und Zeitpunkt konkurrierender nicht-atomarer Zugriffe kann man sich weiterhin nicht verlassen. Wird der Speicher jedoch als streng typisiert behandelt, kommt es bei solchen Zugriffen nicht zum „Tearing“: Die Bits ihrer Werte werden nicht vermischt.

### Nebenläufigkeit und Sicherstellung des Fortschritts

Wenn mehrere Agents zusammenarbeiten, gilt die Garantie des [niemals blockierenden](#niemals_blockieren) Ablaufs nicht immer. Ein Agent kann _blockiert_ beziehungsweise angehalten werden, während er darauf wartet, dass ein anderer Agent eine Aktion ausführt. Dies unterscheidet sich vom Warten auf ein Promise innerhalb desselben Agents: Dabei wird der gesamte Agent angehalten und in der Zwischenzeit kann kein anderer Code in ihm ausgeführt werden. Anders ausgedrückt: Der Agent kann keinen _Fortschritt_ erzielen.

Um Deadlocks zu vermeiden, gelten strenge Einschränkungen dafür, wann und welche Agents blockiert werden dürfen.

- Jeder nicht blockierte Agent mit einem eigenen Ausführungs-Thread erzielt letztlich Fortschritt.
- Innerhalb einer Gruppe von Agents, die sich einen Ausführungs-Thread teilen, erzielt letztlich mindestens ein Agent Fortschritt.
- Ein Agent blockiert einen anderen Agent nur über ausdrücklich dafür vorgesehene APIs.
- Nur bestimmte Agents dürfen blockiert werden. Im Web gehören dazu Dedicated Workers und Shared Workers, nicht aber Fenster mit ähnlichem Ursprung oder Service Workers.

Der Agent-Cluster gewährleistet ein gewisses Maß an Integrität hinsichtlich der Aktivität seiner Agents, wenn diese durch äußere Einflüsse angehalten oder beendet werden:

- Ein Agent kann ohne sein Wissen oder seine Mitwirkung angehalten und fortgesetzt werden. Beispielsweise kann das Navigieren weg von einem Fenster die Codeausführung aussetzen, den Zustand jedoch erhalten. Ein Agent-Cluster darf allerdings nicht nur teilweise deaktiviert werden. So wird verhindert, dass ein Agent keinen Fortschritt mehr erzielt, weil ein anderer Agent deaktiviert wurde. Shared Workers befinden sich beispielsweise nie im selben Agent-Cluster wie das Fenster, das sie erstellt hat, oder andere Dedicated Workers. Das liegt daran, dass die Lebensdauer eines Shared Workers unabhängig von Dokumenten ist: Wird ein Dokument deaktiviert, während sein Dedicated Worker eine Sperre hält, kann der Shared Worker diese Sperre erst erwerben, wenn der Dedicated Worker wieder aktiviert wird – falls das überhaupt geschieht. Währenddessen kommen auch andere Worker, die aus anderen Fenstern auf den Shared Worker zugreifen möchten, nicht voran.
- Ebenso kann ein Agent durch Faktoren außerhalb des Clusters beendet werden. Beispielsweise können Betriebssysteme oder Benutzer einen Browserprozess beenden, oder der Browser kann einen Agent zwangsweise beenden, weil er zu viele Ressourcen verbraucht. In diesem Fall werden alle Agents des Clusters beendet. Die Spezifikation erlaubt auch eine zweite Strategie: Eine API kann mindestens einem verbleibenden Mitglied des Clusters ermöglichen, die Beendigung und den beendeten Agent zu erkennen. Diese Strategie ist im Web jedoch nicht implementiert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Kommunikation und Koordination zwischen Agents](/de/docs/Web/JavaScript/Guide/Agent_communication_and_coordination)
- [Event Loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) im HTML-Standard
- [Was ist der Event Loop?](https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop) in der Node.js-Dokumentation
