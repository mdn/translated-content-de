---
title: JavaScript-Ausführungsmodell
slug: Web/JavaScript/Reference/Execution_model
l10n:
  sourceCommit: 43bd841296433b2c1adb8fa9d819212f86b37358
---

Diese Seite stellt die grundlegende Infrastruktur der JavaScript-Laufzeitumgebung vor. Das Modell ist weitgehend theoretisch und abstrakt; plattform- oder implementierungsspezifische Details werden nicht behandelt. Moderne JavaScript-Engines optimieren die beschriebenen Abläufe umfassend.

Diese Seite dient als Referenz. Sie setzt voraus, dass Sie bereits mit dem Ausführungsmodell anderer Programmiersprachen wie C und Java vertraut sind. Sie nimmt häufig Bezug auf bestehende Konzepte aus Betriebssystemen und Programmiersprachen.

## Die Engine und die Host-Umgebung

Für die Ausführung von JavaScript müssen zwei Softwarekomponenten zusammenwirken: die **JavaScript-Engine** und die **Host-Umgebung**.

Die JavaScript-Engine implementiert die [Sprache ECMAScript (JavaScript)](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) und stellt deren Kernfunktionalität bereit. Sie nimmt Quellcode entgegen, analysiert ihn und führt ihn aus. Um jedoch mit der Außenwelt zu interagieren – etwa eine sinnvolle Ausgabe zu erzeugen, auf externe Ressourcen zuzugreifen oder Mechanismen für Sicherheit und Leistung bereitzustellen –, benötigen wir zusätzliche, umgebungsspezifische Mechanismen der Host-Umgebung. Beispielsweise ist das HTML-DOM die Host-Umgebung, wenn JavaScript in einem Webbrowser ausgeführt wird. Node.js ist eine weitere Host-Umgebung, mit der JavaScript serverseitig ausgeführt werden kann.

Obwohl sich diese Referenz hauptsächlich auf die in ECMAScript definierten Mechanismen konzentriert, gehen wir gelegentlich auch auf Mechanismen der HTML-Spezifikation ein, die von anderen Host-Umgebungen wie Node.js oder Deno häufig nachgebildet werden. So lässt sich ein zusammenhängendes Bild des JavaScript-Ausführungsmodells vermitteln, wie es im Web und darüber hinaus verwendet wird.

## Ausführungsmodell der Agenten

In der JavaScript-Spezifikation heißt jede eigenständige Ausführungseinheit für JavaScript **Agent**. Ein Agent verwaltet die folgenden Strukturen für die Codeausführung:

- **Heap** (für Objekte): Dies ist die Bezeichnung für einen großen, weitgehend unstrukturierten Speicherbereich. Er füllt sich, wenn im Programm Objekte erstellt werden. Bei gemeinsam genutztem Speicher hat jeder Agent seinen eigenen Heap mit einer eigenen Version eines {{jsxref("SharedArrayBuffer")}}-Objekts; der zugrunde liegende Speicher, den der Buffer repräsentiert, wird jedoch gemeinsam genutzt.
- [**Queue** (für Jobs)](#job-queue_und_event_loop): Sie wird in HTML – und auch allgemein – als _Event Loop_ bezeichnet. Sie ermöglicht asynchrone Programmierung in JavaScript, obwohl ein Agent jeweils nur einen Ausführungs-Thread verwendet. Sie heißt Queue, weil sie im Allgemeinen nach dem FIFO-Prinzip arbeitet: Frühere Jobs werden vor späteren ausgeführt.
- [**Stack** (für Ausführungskontexte)](#stack_und_ausführungskontexte): Er wird als _Call Stack_ bezeichnet und ermöglicht es, den Kontrollfluss durch das Betreten und Verlassen von Ausführungskontexten wie Funktionen zu übertragen. Er heißt Stack, weil er nach dem LIFO-Prinzip arbeitet. Jeder Job beginnt damit, einen neuen Frame auf den (leeren) Stack zu legen, und endet, wenn der Stack wieder leer ist.

Dies sind drei unterschiedliche Datenstrukturen, die verschiedene Daten verwalten. Die Queue und den Stack betrachten wir in den folgenden Abschnitten genauer. Weitere Informationen darüber, wie Heap-Speicher zugewiesen und freigegeben wird, finden Sie unter [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management).

Jeder Agent ist mit einem Thread vergleichbar (die zugrunde liegende Implementierung kann ein tatsächlicher Betriebssystem-Thread sein, muss es aber nicht). Ein Agent kann mehrere [Realms](#realms) enthalten, die jeweils genau einem globalen Objekt entsprechen. Diese Realms können synchron aufeinander zugreifen und müssen daher in einem einzigen Ausführungs-Thread laufen. Ein Agent hat außerdem ein einheitliches Speichermodell, das unter anderem festlegt, ob er Little-Endian verwendet, ob er [synchron blockiert werden kann](#nebenläufigkeit_und_sicherstellung_des_ausführungsfortschritts) und ob atomare Operationen [lock-free](/de/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree) sind.

Ein Agent im Web kann einer der folgenden Typen sein:

- Ein _Similar-origin window agent_ mit mehreren [`Window`](/de/docs/Web/API/Window)-Objekten, die potenziell aufeinander zugreifen können – entweder direkt oder mithilfe von [`document.domain`](/de/docs/Web/API/Document/domain). Ist das Fenster [origin-keyed](/de/docs/Web/API/Window/originAgentCluster), können nur Fenster mit demselben Origin aufeinander zugreifen.
- Ein _Dedicated worker agent_ mit genau einem [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope).
- Ein _Shared worker agent_ mit genau einem [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope).
- Ein _Service worker agent_ mit genau einem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope).
- Ein _Worklet agent_ mit genau einem [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope).

Anders ausgedrückt: Jeder Worker erstellt einen eigenen Agenten, während sich ein oder mehrere Fenster im selben Agenten befinden können – üblicherweise ein Hauptdokument und dessen Iframes mit ähnlichem Origin. In Node.js gibt es ein vergleichbares Konzept namens [Worker Threads](https://nodejs.org/api/worker_threads.html).

Das folgende Diagramm veranschaulicht das Ausführungsmodell von Agenten:

![Ein Diagramm mit zwei Agenten: einer HTML-Seite und einem Worker. Jeder hat einen eigenen Stack mit Ausführungskontexten, einen Heap mit Objekten und eine Queue mit Jobs.](runtime-environment-diagram.svg)

## Realms

Jeder Agent besitzt einen oder mehrere **Realms**. Jedem JavaScript-Code wird beim Laden ein Realm zugeordnet. Diese Zuordnung bleibt bestehen, auch wenn der Code aus einem anderen Realm aufgerufen wird. Ein Realm umfasst die folgenden Informationen:

- Eine Liste intrinsischer Objekte wie `Array`, `Array.prototype` usw.
- Global deklarierte Variablen, den Wert von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) und das globale Objekt
- Einen Cache für [Template-Literal-Arrays](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates), da die Auswertung desselben Tagged-Template-Literal-Ausdrucks dem Tag immer dasselbe Array-Objekt übergibt

Im Web besteht eine Eins-zu-eins-Zuordnung zwischen Realms und globalen Objekten. Das globale Objekt ist entweder ein [`Window`](/de/docs/Web/API/Window), ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) oder ein [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope). Beispielsweise wird jedes `iframe` in einem anderen Realm ausgeführt, auch wenn es sich im selben Agenten wie das übergeordnete Fenster befinden kann.

Realms werden meist erwähnt, wenn es um die Identität globaler Objekte geht. Beispielsweise benötigen wir Methoden wie {{jsxref("Array.isArray()")}} oder {{jsxref("Error.isError()")}}, weil ein in einem anderen Realm erstelltes Array ein anderes Prototypobjekt hat als das `Array.prototype`-Objekt im aktuellen Realm. Deshalb würde `instanceof Array` fälschlicherweise `false` zurückgeben.

## Stack und Ausführungskontexte

Betrachten wir zunächst die synchrone Codeausführung. Jeder [Job](#job-queue_und_event_loop) beginnt mit dem Aufruf seines zugehörigen Callbacks. Der Code in diesem Callback kann Variablen erstellen, Funktionen aufrufen oder die Ausführung beenden. Jede Funktion muss ihre eigene Variablenumgebung und die Stelle verwalten, an die sie zurückkehrt. Dazu benötigt der Agent einen Stack, der die Ausführungskontexte verwaltet. Ein **Ausführungskontext**, allgemein auch als _Stack Frame_ bezeichnet, ist die kleinste Ausführungseinheit. Er enthält die folgenden Informationen:

- Den Zustand der Codeauswertung
- Das Modul oder Skript, die Funktion (falls vorhanden) und den aktuell ausgeführten [Generator](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator), zu denen dieser Code gehört
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

1. Wenn der Job beginnt, wird der erste Frame erstellt, in dem die Variablen `foo`, `bar` und `baz` definiert sind. Er ruft `bar` mit dem Argument `7` auf.
2. Für den Aufruf von `bar` wird ein zweiter Frame erstellt. Er enthält Bindings für den Parameter `x` und die lokale Variable `y`. Zunächst wird `x * y` berechnet, dann wird `foo` mit dem Ergebnis aufgerufen.
3. Für den Aufruf von `foo` wird ein dritter Frame erstellt. Er enthält Bindings für den Parameter `b` und die lokale Variable `a`. Zunächst wird `a + b + 11` berechnet, dann wird das Ergebnis zurückgegeben.
4. Wenn `foo` zurückkehrt, wird der oberste Frame vom Stack entfernt und der Aufrufausdruck `foo(x * y)` ergibt den Rückgabewert. Anschließend wird die Ausführung fortgesetzt, wobei lediglich dieses Ergebnis zurückgegeben wird.
5. Wenn `bar` zurückkehrt, wird der oberste Frame vom Stack entfernt und der Aufrufausdruck `bar(7)` ergibt den Rückgabewert. Mit diesem Rückgabewert wird `baz` initialisiert.
6. Wir erreichen das Ende des Quellcodes des Jobs. Daher wird der Stack Frame des Einstiegspunkts vom Stack entfernt. Der Stack ist nun leer, und der Job gilt als abgeschlossen.

### Generatoren und Wiedereintritt

Wenn ein Frame vom Stack entfernt wird, ist er nicht unbedingt endgültig verschwunden: Manchmal müssen wir zu ihm zurückkehren. Betrachten Sie beispielsweise eine Generatorfunktion:

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

In diesem Fall erstellt der Aufruf von `gen()` zunächst einen Ausführungskontext, der angehalten wird – der Code innerhalb von `gen` wird noch nicht ausgeführt. Der Generator `g` speichert diesen Ausführungskontext intern. Der aktuell laufende Ausführungskontext bleibt der des Einstiegspunkts. Wenn `g.next()` aufgerufen wird, wird der Ausführungskontext für `gen` auf den Stack gelegt und der Code innerhalb von `gen` bis zum `yield`-Ausdruck ausgeführt. Anschließend wird der Ausführungskontext des Generators angehalten und vom Stack entfernt, wodurch die Kontrolle an den Einstiegspunkt zurückkehrt. Beim nächsten Aufruf von `g.next()` wird der Ausführungskontext des Generators erneut auf den Stack gelegt, und der Code in `gen` wird an der Stelle fortgesetzt, an der er angehalten wurde.

### Tail Calls

Ein in der Spezifikation definierter Mechanismus ist der _Proper Tail Call_ (PTC). Ein Funktionsaufruf ist ein Tail Call, wenn die aufrufende Funktion nach dem Aufruf nichts weiter tut, als dessen Wert zurückzugeben:

```js
function f() {
  return g();
}
```

In diesem Fall ist der Aufruf von `g` ein Tail Call. Steht ein Funktionsaufruf an einer Tail-Position, muss die Engine den aktuellen Ausführungskontext verwerfen und durch den Kontext des Tail Calls ersetzen, statt für den Aufruf von `g()` einen neuen Frame auf den Stack zu legen. Dadurch unterliegt Tail-Rekursion nicht den Grenzen der Stack-Größe:

```js
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc);
}
```

In der Praxis verursacht das Verwerfen des aktuellen Frames Probleme beim Debuggen: Wenn `g()` einen Fehler auslöst, befindet sich `f` nicht mehr auf dem Stack und erscheint daher nicht im Stacktrace. Derzeit implementiert nur Safari (JavaScriptCore) PTC. Dort wurde eine [spezielle Infrastruktur](https://webkit.org/blog/6240/ecmascript-6-proper-tail-calls-in-webkit/) entwickelt, um dieses Problem beim Debuggen zu beheben.

### Closures

Ein weiteres interessantes Phänomen im Zusammenhang mit dem Gültigkeitsbereich von Variablen und Funktionsaufrufen sind [Closures](/de/docs/Web/JavaScript/Guide/Closures). Immer wenn eine Funktion erstellt wird, merkt sie sich intern auch die Variablen-Bindings des gerade laufenden Ausführungskontexts. Diese Bindings können somit länger bestehen bleiben als der Ausführungskontext.

```js
let f;
{
  let x = 10;
  f = () => x;
}
console.log(f()); // logs 10
```

## Job-Queue und Event Loop

Ein Agent ist mit einem Thread vergleichbar. Das bedeutet, dass der Interpreter jeweils nur eine Anweisung verarbeiten kann. Solange der gesamte Code synchron ist, ist das kein Problem, da die Ausführung stets fortgesetzt werden kann. Muss der Code jedoch eine asynchrone Aktion ausführen, kann er deren Ergebnis erst verarbeiten, wenn die Aktion abgeschlossen ist. Würde deshalb das gesamte Programm angehalten, wäre das für die Benutzererfahrung nachteilig – JavaScript muss als Skriptsprache für das Web [nicht blockierend](#nicht_blockierende_ausführung) sein. Daher wird der Code, der den Abschluss der asynchronen Aktion verarbeitet, als Callback definiert. Dieser Callback definiert einen **Job**, der nach Abschluss der Aktion in eine **Job-Queue** aufgenommen wird – in der HTML-Terminologie: in einen Event Loop.

Der Agent entnimmt der Queue jeweils einen Job und führt ihn aus. Während der Ausführung kann der Job weitere Jobs erstellen, die am Ende der Queue hinzugefügt werden. Jobs können auch durch den Abschluss asynchroner Plattformmechanismen wie Timer, I/O und Ereignisse hinzugefügt werden. Ein Job gilt als abgeschlossen, wenn der [Stack](#stack_und_ausführungskontexte) leer ist; dann wird der nächste Job aus der Queue entnommen. Jobs werden möglicherweise nicht mit gleicher Priorität entnommen. HTML-Event-Loops unterteilen Jobs beispielsweise in zwei Kategorien: _Tasks_ und _Microtasks_. Microtasks haben eine höhere Priorität: Die Microtask-Queue wird vollständig abgearbeitet, bevor ein Job aus der Task-Queue entnommen wird. Weitere Informationen finden Sie im [HTML-Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide). Ist die Job-Queue leer, wartet der Agent darauf, dass weitere Jobs hinzugefügt werden.

### „Run-to-completion“

Jeder Job wird vollständig abgearbeitet, bevor ein anderer Job verarbeitet wird. Dies bietet hilfreiche Eigenschaften, wenn Sie über das Verhalten Ihres Programms nachdenken: Eine laufende Funktion kann nicht unterbrochen werden und wird vollständig ausgeführt, bevor anderer Code läuft und möglicherweise die von der Funktion verwendeten Daten verändert. Das unterscheidet sich beispielsweise von C: Dort kann eine in einem Thread laufende Funktion jederzeit vom Laufzeitsystem angehalten werden, damit anderer Code in einem anderen Thread ausgeführt wird.

Betrachten Sie beispielsweise Folgendes:

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

In diesem Beispiel erstellen wir eine bereits erfüllte Promise. Das bedeutet, dass alle daran angehängten Callbacks sofort als Jobs eingeplant werden. Die beiden Callbacks scheinen eine Race Condition zu verursachen. Tatsächlich ist die Ausgabe jedoch vollständig vorhersehbar: `1` und `2` werden in dieser Reihenfolge protokolliert. Das liegt daran, dass jeder Job vollständig ausgeführt wird, bevor der nächste beginnt. Die Gesamtreihenfolge lautet daher immer `i += 1; console.log(i); i += 1; console.log(i);` und niemals `i += 1; i += 1; console.log(i); console.log(i);`.

Ein Nachteil dieses Modells ist, dass die Webanwendung Benutzerinteraktionen wie Klicken oder Scrollen nicht verarbeiten kann, wenn ein Job zu lange dauert. Der Browser begegnet dem mit einem Dialog, der darauf hinweist, dass die Ausführung eines Skripts zu lange dauert. Eine bewährte Vorgehensweise ist, Jobs kurz zu halten und einen Job nach Möglichkeit in mehrere Jobs aufzuteilen.

### Nicht blockierende Ausführung

Eine weitere wichtige Zusicherung des Event-Loop-Modells ist, dass die JavaScript-Ausführung nicht blockiert. I/O wird üblicherweise über Ereignisse und Callbacks verarbeitet. Während die Anwendung auf das Ergebnis einer [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Abfrage oder einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage wartet, kann sie daher weiterhin andere Vorgänge wie Benutzereingaben verarbeiten. Der Code, der nach Abschluss einer asynchronen Aktion ausgeführt wird, wird stets als Callback-Funktion bereitgestellt – beispielsweise als {{jsxref("Promise/then", "then()")}}-Handler einer Promise, als Callback-Funktion in `setTimeout()` oder als Event-Handler. Dieser Callback definiert einen Job, der nach Abschluss der Aktion zur Job-Queue hinzugefügt wird.

Die Zusicherung einer nicht blockierenden Ausführung setzt natürlich voraus, dass die Plattform-API von sich aus asynchron ist. Es gibt jedoch einige ältere Ausnahmen wie `alert()` oder synchrones XHR. Sie sollten diese vermeiden, damit die Anwendung reaktionsfähig bleibt.

## Agenten-Cluster und gemeinsam genutzter Speicher

Mehrere Agenten können über gemeinsam genutzten Speicher kommunizieren und so einen **Agenten-Cluster** bilden. Agenten gehören genau dann zum selben Cluster, wenn sie Speicher gemeinsam nutzen können. Agenten in unterschiedlichen Clustern können dennoch über andere Protokolle wie `postMessage()` Informationen austauschen.

Beim Erstellen eines Agenten – beispielsweise durch das Starten eines Workers – bestimmen bestimmte Kriterien, ob er zum selben Cluster wie der aktuelle Agent gehört oder ob ein neuer Cluster erstellt wird. Die folgenden Paare globaler Objekte befinden sich beispielsweise jeweils im selben Agenten-Cluster und können daher Speicher gemeinsam nutzen:

- Ein `Window`-Objekt und ein von ihm erstellter Dedicated Worker.
- Ein Worker beliebigen Typs und ein von ihm erstellter Dedicated Worker.
- Ein `Window`-Objekt A und das `Window`-Objekt eines von A erstellten `iframe`-Elements mit demselben Origin.
- Ein `Window`-Objekt und ein `Window`-Objekt mit demselben Origin, das es geöffnet hat.
- Ein `Window`-Objekt und ein von ihm erstelltes Worklet.

Die folgenden Paare globaler Objekte befinden sich nicht im selben Agenten-Cluster und können daher keinen Speicher gemeinsam nutzen:

- Ein `Window`-Objekt und ein von ihm erstellter Shared Worker.
- Ein Worker beliebigen Typs und ein von ihm erstellter Shared Worker.
- Ein `Window`-Objekt und ein von ihm erstellter Service Worker.
- Ein `Window`-Objekt A und das `Window`-Objekt eines von A erstellten `iframe`-Elements, das einen anderen Origin als A hat, wenn der Agenten-Cluster von A origin-keyed ist.
- Zwei beliebige `Window`-Objekte, zwischen denen keine Beziehung als öffnendes oder übergeordnetes Fenster besteht. Dies gilt auch dann, wenn die beiden `Window`-Objekte denselben Origin haben.

Den genauen Algorithmus finden Sie in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-agent-cluster-formalism).

### Kommunikation zwischen Agenten und Speichermodell

Wie bereits erwähnt, können Agenten über gemeinsam genutzten Speicher kommunizieren. Im Web wird Speicher über die Methode [`postMessage()`](/de/docs/Web/API/Window/postMessage) geteilt. Der Leitfaden zur [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) bietet hierzu einen Überblick. Üblicherweise werden Daten nur als Werte übergeben (mittels [Structured Cloning](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)); dabei entstehen keine Probleme durch gleichzeitige Zugriffe. Um Speicher gemeinsam zu nutzen, muss ein {{jsxref("SharedArrayBuffer")}}-Objekt übermittelt werden, auf das mehrere Agenten gleichzeitig zugreifen können. Sobald zwei Agenten über einen `SharedArrayBuffer` Zugriff auf denselben Speicher haben, können sie ihre Ausführung mithilfe des {{jsxref("Atomics")}}-Objekts synchronisieren.

Es gibt zwei Arten, auf gemeinsam genutzten Speicher zuzugreifen: durch normalen Speicherzugriff (der nicht atomar ist) und durch atomaren Speicherzugriff. Letzterer ist [sequenziell konsistent](https://en.wikipedia.org/wiki/Sequential_consistency). Das bedeutet, dass es eine strikte Gesamtreihenfolge der Ereignisse gibt, die für alle Agenten im Cluster gilt. Normaler Speicherzugriff ist dagegen ungeordnet; für ihn besteht keine solche Reihenfolge. JavaScript stellt keine Operationen mit anderen Ordnungsgarantien bereit.

Die Spezifikation enthält für Programmierende, die mit gemeinsam genutztem Speicher arbeiten, die folgenden Empfehlungen:

> Wir empfehlen, Programme frei von Data Races zu halten. Das heißt, gleichzeitige nicht atomare Operationen auf derselben Speicherstelle sollten ausgeschlossen sein. Programme ohne Data Races haben eine Semantik, bei der sich die einzelnen Auswertungsschritte der Agenten ineinander verschachteln. Für solche Programme ist es nicht erforderlich, die Einzelheiten des Speichermodells zu verstehen. Diese Einzelheiten tragen wahrscheinlich auch nicht zu einem intuitiven Verständnis bei, das beim Schreiben von ECMAScript hilfreich wäre.
>
> Allgemeiner gilt: Selbst ein Programm mit Data Races kann ein vorhersehbares Verhalten aufweisen, solange an den Data Races keine atomaren Operationen beteiligt sind und alle konkurrierenden Operationen dieselbe Zugriffsgröße haben. Am einfachsten lässt sich verhindern, dass atomare Operationen an Data Races beteiligt sind, indem für atomare und nicht atomare Operationen unterschiedliche Speicherzellen verwendet werden und atomare Zugriffe unterschiedlicher Größe nicht gleichzeitig auf dieselben Zellen zugreifen. Praktisch sollte das Programm gemeinsam genutzten Speicher möglichst als streng typisiert behandeln. Auf die Reihenfolge und den Zeitpunkt konkurrierender nicht atomarer Zugriffe kann man sich weiterhin nicht verlassen. Wird der Speicher jedoch als streng typisiert behandelt, kommt es bei diesen Zugriffen nicht zum „Tearing“: Die Bits ihrer Werte werden nicht vermischt.

### Nebenläufigkeit und Sicherstellung des Ausführungsfortschritts

Wenn mehrere Agenten zusammenarbeiten, gilt die Zusicherung einer [nicht blockierenden Ausführung](#nicht_blockierende_ausführung) nicht immer. Ein Agent kann _blockiert_ oder angehalten werden, während er darauf wartet, dass ein anderer Agent eine Aktion ausführt. Das unterscheidet sich vom Warten auf eine Promise innerhalb desselben Agenten: Hierbei wird der gesamte Agent angehalten, sodass zwischenzeitlich kein anderer Code in ihm ausgeführt werden kann. Anders ausgedrückt: Er kann keinen _Ausführungsfortschritt_ erzielen.

Um Deadlocks zu vermeiden, gelten strenge Einschränkungen dafür, wann und welche Agenten blockiert werden dürfen.

- Jeder nicht blockierte Agent mit einem eigenen Ausführungs-Thread erzielt letztlich Ausführungsfortschritt.
- Innerhalb einer Gruppe von Agenten, die sich einen Ausführungs-Thread teilen, erzielt letztlich mindestens ein Agent Ausführungsfortschritt.
- Ein Agent bewirkt nur über ausdrücklich blockierende APIs, dass ein anderer Agent blockiert wird.
- Nur bestimmte Agenten dürfen blockiert werden. Im Web gehören dazu Dedicated Worker und Shared Worker, nicht jedoch Fenster mit ähnlichem Origin oder Service Worker.

Der Agenten-Cluster stellt auch bei extern verursachten Unterbrechungen oder Beendigungen sicher, dass seine Agenten in einem gewissen Maß gemeinsam aktiv bleiben:

- Ein Agent kann ohne sein Wissen oder seine Mitwirkung angehalten oder fortgesetzt werden. Beispielsweise kann beim Verlassen eines Fensters die Codeausführung ausgesetzt werden, während ihr Zustand erhalten bleibt. Ein Agenten-Cluster darf jedoch nicht nur teilweise deaktiviert werden. So wird verhindert, dass ein Agent dauerhaft nicht zum Zug kommt, weil ein anderer Agent deaktiviert wurde. Shared Worker befinden sich beispielsweise nie im selben Agenten-Cluster wie das Fenster, das sie erstellt hat, oder wie andere Dedicated Worker. Der Grund ist, dass die Lebensdauer eines Shared Workers unabhängig von Dokumenten ist: Wird ein Dokument deaktiviert, während sein Dedicated Worker eine Sperre hält, kann der Shared Worker diese Sperre erst erhalten, wenn der Dedicated Worker wieder aktiviert wird – falls das überhaupt geschieht. In der Zwischenzeit kommen auch andere Worker, die aus anderen Fenstern auf den Shared Worker zugreifen möchten, nicht zum Zug.
- Ebenso kann ein Agent durch Faktoren außerhalb des Clusters beendet werden. Beispielsweise können Betriebssysteme oder Benutzer einen Browserprozess beenden, oder der Browser kann einen Agenten zwangsweise beenden, weil er zu viele Ressourcen verbraucht. In diesem Fall werden alle Agenten des Clusters beendet. (Die Spezifikation erlaubt außerdem eine zweite Strategie: eine API, mit der mindestens ein verbleibendes Mitglied des Clusters die Beendigung und den beendeten Agenten erkennen kann. Diese Strategie ist im Web jedoch nicht implementiert.)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Kommunikation und Koordination zwischen Agenten](/de/docs/Web/JavaScript/Guide/Agent_communication_and_coordination)
- [Event Loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) im HTML-Standard
- [Was ist der Event Loop?](https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop) in der Node.js-Dokumentation
