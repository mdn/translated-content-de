---
title: JavaScript-Ausführungsmodell
slug: Web/JavaScript/Reference/Execution_model
l10n:
  sourceCommit: 1886fa6bcf40d900ec274ed2c101b3398e0fa4a0
---

Diese Seite stellt die grundlegende Infrastruktur der JavaScript-Laufzeitumgebung vor. Das Modell ist weitgehend theoretisch und abstrakt, ohne plattform- oder implementierungsspezifische Details. Moderne JavaScript-Engines optimieren die beschriebenen Semantiken stark.

Diese Seite ist ein Referenzdokument. Es wird vorausgesetzt, dass Sie mit dem Ausführungsmodell anderer Programmiersprachen wie C und Java bereits vertraut sind. Es werden umfassende Referenzen zu bestehenden Konzepten in Betriebssystemen und Programmiersprachen gemacht.

## Die Engine und der Host

Für die Ausführung von JavaScript ist die Zusammenarbeit von zwei Softwarekomponenten erforderlich: der **JavaScript-Engine** und der **Host-Umgebung**.

Die JavaScript-Engine implementiert die [ECMAScript (JavaScript) Sprache](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) und bietet die Kernfunktionalität. Sie nimmt Quellcode, analysiert ihn und führt ihn aus. Um jedoch mit der Außenwelt zu interagieren, beispielsweise um eine sinnvolle Ausgabe zu erzeugen, auf externe Ressourcen zuzugreifen oder sicherheits- oder leistungsbezogene Mechanismen zu implementieren, benötigen wir zusätzliche, umgebungsspezifische Mechanismen, die von der Host-Umgebung bereitgestellt werden. Zum Beispiel ist das HTML DOM die Host-Umgebung, wenn JavaScript in einem Webbrowser ausgeführt wird. Node.js ist eine weitere Host-Umgebung, die es ermöglicht, JavaScript auf der Serverseite auszuführen.

Während wir uns in dieser Referenz hauptsächlich auf die in ECMAScript definierten Mechanismen konzentrieren, werden wir gelegentlich über Mechanismen sprechen, die in der HTML-Spezifikation definiert sind und die oft von anderen Host-Umgebungen wie Node.js oder Deno nachgeahmt werden. Auf diese Weise können wir ein kohärentes Bild des JavaScript-Ausführungsmodells sowohl im Web als auch darüber hinaus vermitteln.

## Agent-Ausführungsmodell

In der JavaScript-Spezifikation wird jeder eigenständige JavaScript-Ausführer als **Agent** bezeichnet, der seine Einrichtungen zur Codeausführung bereitstellt:

- **Heap** (von Objekten): dies ist nur ein Name für einen großen (meist unstrukturierten) Bereich des Speichers. Er wird mit Objekten gefüllt, die im Programm erstellt werden. Beachten Sie, dass im Fall von gemeinsam genutztem Speicher jeder Agent seinen eigenen Heap mit seiner eigenen Version eines {{jsxref("SharedArrayBuffer")}}-Objekts hat, der zugrunde liegende Speicher, der durch den Puffer dargestellt wird, jedoch gemeinsam genutzt wird.
- [**Warteschlange** (von Jobs)](#job-warteschlange_und_event_loop): dies ist im HTML (und auch allgemein) als _Event Loop_ bekannt, die asynchrones Programmieren in JavaScript ermöglicht, während sie single-threaded bleibt. Sie wird als Warteschlange bezeichnet, weil sie im Allgemeinen first-in-first-out ist: frühere Jobs werden vor späteren ausgeführt.
- [**Stack** (von Ausführungskontexten)](#stack_und_ausführungskontexte): dies ist als _Call Stack_ bekannt und ermöglicht die Steuerflussübertragung durch das Betreten und Verlassen von Ausführungskontexten wie Funktionen. Es wird als Stack bezeichnet, weil es last-in-first-out ist. Jeder Job tritt ein, indem er einen neuen Frame auf den (leeren) Stack legt, und beendet, indem er den Stack leert.

Dies sind drei separate Datenstrukturen, die unterschiedliche Daten nachverfolgen. Wir werden die Warteschlange und den Stack in den folgenden Abschnitten detaillierter einführen. Weitere Informationen darüber, wie der Heapspeicher zugewiesen und freigegeben wird, finden Sie im Abschnitt [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management).

Jeder Agent ist analog zu einem Thread (beachten Sie, dass die zugrunde liegende Implementierung möglicherweise nicht unbedingt ein tatsächlicher Betriebssystem-Thread ist). Jeder Agent kann mehrere [Realms](#realms) besitzen (die 1-zu-1 mit globalen Objekten korrelieren), die synchron aufeinander zugreifen können, und muss daher in einem einzelnen Ausführungs-Thread laufen. Ein Agent hat auch ein einzelnes Speicher-Modell, das angibt, ob er little-endian ist, ob er [synchron blockiert](#nebenläufigkeit_und_sicherstellen_von_fortschritt) werden kann, ob atomare Operationen [sperrenfrei](/de/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree) sind, usw.

Ein Agent im Web kann eines der folgenden sein:

- Ein _Gleichursprungs-Fensteragent_, der verschiedene [`Window`](/de/docs/Web/API/Window) Objekte enthält, die potenziell einander erreichen können, entweder direkt oder durch Verwendung von [`document.domain`](/de/docs/Web/API/Document/domain). Wenn das Fenster [ursprungskodiert](/de/docs/Web/API/Window/originAgentCluster) ist, können nur gleichursprungs-Fenster einander erreichen.
- Ein _Dedizierter Worker-Agent_, der einen einzigen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) enthält.
- Ein _Geteilter Worker-Agent_, der einen einzigen [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) enthält.
- Ein _Service-Worker-Agent_, der einen einzigen [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) enthält.
- Ein _Worklet-Agent_, der einen einzigen [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope) enthält.

Mit anderen Worten, jeder Worker erzeugt seinen eigenen Agenten, während ein oder mehrere Fenster im selben Agenten sein können – üblicherweise ein Hauptdokument und seine gleichursprungs-iFrames. In Node.js ist ein ähnliches Konzept namens [Worker Threads](https://nodejs.org/api/worker_threads.html) verfügbar.

Das untenstehende Diagramm veranschaulicht das Ausführungsmodell von Agenten:

![Ein Diagramm bestehend aus zwei Agenten: eine HTML-Seite und ein Worker. Jeder hat seinen eigenen Stack mit Ausführungskontexten, Heap mit Objekten und Warteschlange mit Jobs.](/runtime-environment-diagram.svg)

## Realms

Jeder Agent besitzt ein oder mehrere **Realms**. Jedes Stück JavaScript-Code ist einem Realm zugeordnet, wenn es geladen wird, und bleibt dasselbe, selbst wenn es aus einem anderen Realm heraus aufgerufen wird. Ein Realm besteht aus den folgenden Informationen:

- Eine Liste von intrinsischen Objekten wie `Array`, `Array.prototype` usw.
- Global deklarierte Variablen, der Wert von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis), und das globale Objekt
- Ein Cache von [Template-Literal-Arrays](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates), da die Auswertung desselben getaggten Template-Literal-Ausdrucks immer dazu führt, dass das Tag dasselbe Array-Objekt erhält

Im Web korrespondieren das Realm und das globale Objekt 1-zu-1. Das globale Objekt ist entweder ein [`Window`](/de/docs/Web/API/Window), ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope), oder ein [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope). Zum Beispiel führt jedes `iframe` in einem anderen Realm aus, obwohl es möglicherweise im gleichen Agenten wie das übergeordnete Fenster ist.

Realms werden normalerweise erwähnt, wenn es um die Identitäten globaler Objekte geht. Zum Beispiel benötigen wir Methoden wie {{jsxref("Array.isArray()")}} oder {{jsxref("Error.isError()")}}, da ein in einem anderen Realm konstruiertes Array ein anderes Prototype-Objekt als das `Array.prototype`-Objekt im aktuellen Realm hat, sodass `instanceof Array` fälschlicherweise `false` zurückgeben würde.

## Stack und Ausführungskontexte

Betrachten wir zuerst die synchrone Codeausführung. Jeder [Job](#job-warteschlange_und_event_loop) wird ausgeführt, indem sein zugehöriger Callback aufgerufen wird. Der Code innerhalb dieses Callbacks kann Variablen erstellen, Funktionen aufrufen oder beenden. Jede Funktion muss ihren eigenen Variablensatz und die Stelle, zu der zurückgekehrt werden soll, nachverfolgen. Um dies zu handhaben, benötigt der Agent einen Stack, um die Ausführungskontexte nachzuverfolgen. Ein **Ausführungskontext**, auch allgemein als _Stack-Frame_ bekannt, ist die kleinste Ausführungseinheit. Er verfolgt die folgenden Informationen:

- Zustand der Codebewertung
- Das Modul oder Skript, die Funktion (falls zutreffend), und der derzeit ausgeführte [Generator](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator), der diesen Code enthält
- Der aktuelle [Realm](#realms)
- {{Glossary("Binding", "Bindings")}}, einschließlich:
  - Variablen definiert mit `var`, `let`, `const`, `function`, `class`, usw.
  - Private Identifier wie `#foo`, die nur im aktuellen Kontext gültig sind
  - Referenz auf `this`

Stellen Sie sich ein Programm vor, das aus einem einzigen Job besteht, der durch den folgenden Code definiert ist:

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

1. Wenn der Job beginnt, wird der erste Frame erstellt, in dem die Variablen `foo`, `bar` und `baz` definiert sind. Es ruft `bar` mit dem Argument `7` auf.
2. Ein zweiter Frame wird für den `bar`-Aufruf erstellt, der Bindungen für den Parameter `x` und die lokale Variable `y` enthält. Zuerst wird die Multiplikation `x * y` durchgeführt, dann `foo` mit dem Ergebnis aufgerufen.
3. Ein dritter Frame wird für den `foo`-Aufruf erstellt, der Bindungen für den Parameter `b` und die lokale Variable `a` enthält. Zuerst wird die Addition `a + b + 11` durchgeführt, dann das Ergebnis zurückgegeben.
4. Wenn `foo` zurückgibt, wird das oberste Frame-Element aus dem Stack gepoppt, und der Funktionsaufruf `foo(x * y)` wird auf den Rückgabewert ausgewertet. Dann wird die Ausführung fortgesetzt, was nur die Rückgabe dieses Ergebnisses ist.
5. Wenn `bar` zurückgibt, wird das oberste Frame-Element aus dem Stack gepoppt, und der Funktionsaufruf `bar(7)` wird auf den Rückgabewert ausgewertet. Dies initialisiert `baz` mit dem Rückgabewert.
6. Wir erreichen das Ende des Quellcodes des Jobs, also wird das Stack-Frame für den Einstiegspunkt aus dem Stack gepoppt. Der Stack ist leer, sodass der Job als abgeschlossen betrachtet wird.

### Generatoren und erneutes Betreten

Wenn ein Frame gepoppt wird, ist es nicht unbedingt für immer verschwunden, da wir manchmal zurückkehren müssen. Betrachten Sie zum Beispiel eine Generatorfunktion:

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

In diesem Fall erstellt das Aufrufen von `gen()` zuerst einen Ausführungskontext, der ausgesetzt wird – kein Code innerhalb von `gen` wird noch ausgeführt. Der Generator `g` speichert diesen Ausführungskontext intern. Der derzeit laufende Ausführungskontext bleibt der Einstiegspunkt. Wenn `g.next()` aufgerufen wird, wird der Ausführungskontext für `gen` auf den Stack gelegt, und der Code innerhalb von `gen` wird bis zum `yield`-Ausdruck ausgeführt. Dann wird der Generatorausführungskontext ausgesetzt und aus dem Stack entfernt, was die Kontrolle zurück an den Einstiegspunkt gibt. Wenn `g.next()` erneut aufgerufen wird, wird der Generatorausführungskontext zurück auf den Stack gelegt, und der Code innerhalb von `gen` wird ab dem Punkt weitergeführt, an dem er aufgehört hat.

### Tail Calls

Ein Mechanismus, der in der Spezifikation definiert ist, ist der _Proper Tail Call_ (PTC). Ein Funktionsaufruf ist ein Tail Call, wenn der Aufrufer nach dem Aufruf nichts anderes tut, als den Wert zurückzugeben:

```js
function f() {
  return g();
}
```

In diesem Fall ist der Aufruf von `g` ein Tail Call. Wenn ein Funktionsaufruf in Tail-Position ist, ist die Engine verpflichtet, den aktuellen Ausführungskontext zu verwerfen und ihn durch den Kontext des Tail-Aufrufs zu ersetzen, anstatt einen neuen Frame für den `g()`-Aufruf zu erstellen. Das bedeutet, dass Tail-Rekursion nicht den Stapelgrößenbeschränkungen unterliegt:

```js
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc);
}
```

In der Realität verursacht das Verwerfen des aktuellen Frames Debugging-Probleme, da, wenn `g()` einen Fehler wirft, `f` nicht mehr auf dem Stack ist und nicht im Stack-Trace erscheint. Derzeit implementiert nur Safari (JavaScriptCore) PTC, und sie haben eine [spezifische Infrastruktur](https://webkit.org/blog/6240/ecmascript-6-proper-tail-calls-in-webkit/) erfunden, um das Debugging-Problem zu adressieren.

### Closures

Ein weiteres interessantes Phänomen im Zusammenhang mit Variablescope und Funktionsaufrufen sind [Closures](/de/docs/Web/JavaScript/Guide/Closures). Immer wenn eine Funktion erstellt wird, merkt sie sich intern auch die Variablenbindungen des aktuellen laufenden Ausführungskontexts. Dann können diese Variablenbindungen den Ausführungskontext überdauern.

```js
let f;
{
  let x = 10;
  f = () => x;
}
console.log(f()); // logs 10
```

## Job-Warteschlange und Event Loop

Ein Agent ist ein Thread, was bedeutet, dass der Interpreter jeweils nur eine Anweisung verarbeiten kann. Wenn der gesamte Code synchron ist, ist das kein Problem, da wir immer Fortschritte machen können. Aber wenn der Code eine asynchrone Aktion ausführen muss, können wir erst weiterkommen, wenn diese Aktion abgeschlossen ist. Allerdings wäre es nachteilig für die Benutzererfahrung, wenn das das gesamte Programm anhalten würde – die Natur von JavaScript als Web-Skriptsprache erfordert, dass es [nie blockiert](#nie_blockieren). Daher wird der Code, der die Fertigstellung dieser asynchronen Aktion behandelt, als Callback definiert. Dieser Callback definiert einen **Job**, der in eine **Job-Warteschlange** – oder, in HTML-Terminologie, eine Event-Loop – gestellt wird, sobald die Aktion abgeschlossen ist.

Jedes Mal zieht der Agent einen Job aus der Warteschlange und führt ihn aus. Wenn der Job ausgeführt wird, kann er weitere Jobs erstellen, die am Ende der Warteschlange hinzugefügt werden. Jobs können auch durch den Abschluss asynchroner Plattformmechanismen hinzugefügt werden, wie Timer, I/O und Ereignisse. Ein Job wird als abgeschlossen betrachtet, wenn der [Stack](#stack_und_ausführungskontexte) leer ist; dann wird der nächste Job aus der Warteschlange gezogen. Jobs werden möglicherweise nicht mit gleichmäßiger Priorität gezogen – beispielsweise teilen HTML-Event Loops Jobs in zwei Kategorien: _Tasks_ und _Microtasks_. Microtasks haben eine höhere Priorität und die Microtask-Warteschlange wird zuerst abgearbeitet, bevor die Task-Warteschlange gezogen wird. Weitere Informationen finden Sie im [HTML-Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide). Wenn die Job-Warteschlange leer ist, wartet der Agent darauf, dass weitere Jobs hinzugefügt werden.

### "Run-to-completion"

Jeder Job wird vollständig verarbeitet, bevor ein anderer Job verarbeitet wird. Dies bietet einige nette Eigenschaften beim Nachdenken über Ihr Programm, einschließlich der Tatsache, dass wann immer eine Funktion ausgeführt wird, sie nicht unterbrochen werden kann und vollständig ausgeführt wird, bevor ein anderer Code ausgeführt wird (und Daten, die die Funktion manipuliert, ändern kann). Dies unterscheidet sich von C, zum Beispiel, wo wenn eine Funktion in einem Thread läuft, sie jederzeit vom Laufzeitsystem gestoppt werden kann, um Code in einem anderen Thread auszuführen.

Betrachten Sie zum Beispiel dieses Beispiel:

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

In diesem Beispiel erstellen wir ein bereits aufgelöstes Promise, was bedeutet, dass jeder angehängte Callback sofort als Jobs geplant wird. Die beiden Callbacks scheinen eine Race Condition zu verursachen, aber tatsächlich ist die Ausgabe vollständig vorhersagbar: `1` und `2` werden in Reihenfolge protokolliert. Dies liegt daran, dass jeder Job vollständig ausgeführt wird, bevor der nächste ausgeführt wird, sodass die gesamte Reihenfolge immer `i += 1; console.log(i); i += 1; console.log(i);` und niemals `i += 1; i += 1; console.log(i); console.log(i);` ist.

Ein Nachteil dieses Modells ist, dass wenn ein Job zu lange dauert, die Webanwendung nicht in der Lage ist, Benutzerinteraktionen wie Klicken oder Scrollen zu verarbeiten. Der Browser mildert dies mit dem Dialog "Ein Skript benötigt zu lange, um ausgeführt zu werden". Es ist eine gute Praxis, die Bearbeitung von Jobs kurz zu halten und, wenn möglich, einen Job in mehrere Jobs aufzuteilen.

### Nie blockieren

Ein weiteres wichtiges Versprechen des Event Loop-Modells ist, dass die JavaScript-Ausführung niemals blockiert. Die Verarbeitung von I/O wird typischerweise über Ereignisse und Callbacks durchgeführt, sodass, wenn die Anwendung auf eine [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Abfrage oder eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage wartet, sie trotzdem andere Dinge wie Benutzereingaben verarbeiten kann. Der Code, der nach dem Abschluss einer asynchronen Aktion ausgeführt wird, wird immer als Callback-Funktion bereitgestellt (zum Beispiel, der Promise-{{jsxref("Promise/then", "then()")}}-Handler, die Callback-Funktion in `setTimeout()` oder der Ereignishandler), der einen Job definiert, der der Job-Warteschlange hinzugefügt wird, sobald die Aktion abgeschlossen ist.

Natürlich erfordert das Versprechen des "Nie-blockieren", dass die Plattform-API von Natur aus asynchron ist, aber es gibt einige seltene Ausnahmen wie `alert()` oder synchrone XHR. Es wird als gute Praxis angesehen, diese zu vermeiden, um die Reaktionsfähigkeit der Anwendung sicherzustellen.

## Agentencluster und Speichersharing

Mehrere Agenten können über Speichersharing kommunizieren und bilden einen **Agentencluster**. Agenten sind im selben Cluster, wenn und nur wenn sie Speicher teilen können. Es gibt keinen eingebauten Mechanismus, mit dem zwei Agentencluster Informationen austauschen können, sodass sie als völlig isolierte Ausführungsmodelle betrachtet werden können.

Wenn ein Agent erstellt wird (zum Beispiel durch das Erstellen eines Workers), gibt es einige Kriterien, ob er im selben Cluster wie der aktuelle Agent ist oder ein neuer Cluster erstellt wird. Zum Beispiel befinden sich die folgenden Paare von globalen Objekten jeweils im selben Agentencluster und können daher Speicher miteinander teilen:

- Ein `Window`-Objekt und ein dedizierter Worker, den es erstellt hat.
- Ein Worker (jeglicher Typ) und ein dedizierter Worker, den er erstellt hat.
- Ein `Window`-Objekt A und das `Window`-Objekt eines gleichursprungs `iframe`-Elements, das A erstellt hat.
- Ein `Window`-Objekt und ein gleichursprungs `Window`-Objekt, das es geöffnet hat.
- Ein `Window`-Objekt und ein Worklet, das es erstellt hat.

Die folgenden Paare von globalen Objekten befinden sich nicht im selben Agentencluster und können daher keinen Speicher teilen:

- Ein `Window`-Objekt und ein geteilter Worker, den es erstellt hat.
- Ein Worker (jeglicher Typ) und ein geteilter Worker, den er erstellt hat.
- Ein `Window`-Objekt und ein Service Worker, den es erstellt hat.
- Ein `Window`-Objekt A und das `Window`-Objekt eines `iframe`-Elements, das A erstellt hat, das nicht denselben Ursprung-Domain mit A haben kann.
- Zwei `Window`-Objekte ohne Opener- oder Vorfahren-Beziehung. Dies gilt auch dann, wenn die beiden `Window`-Objekte denselben Ursprung haben.

Für den genauen Algorithmus, siehe die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-agent-cluster-formalism).

### Cross-Agent-Kommunikation und Speicher-Modell

Wie zuvor erwähnt, kommunizieren Agenten über Speichersharing. Im Web wird Speicher über die Methode [`postMessage()`](/de/docs/Web/API/Window/postMessage) geteilt. Der [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) Leitfaden bietet einen Überblick darüber. Typischerweise werden Daten nur durch Wert übergeben (über [strukturiertes Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)), und deshalb entstehen keine Konkurrenzergebnisse. Um Speicher zu teilen, muss ein {{jsxref("SharedArrayBuffer")}}-Objekt gepostet werden, das von mehreren Agenten gleichzeitig zugänglich ist. Sobald zwei Agenten Zugriff auf denselben Speicher über einen `SharedArrayBuffer` haben, können sie Ausführungen über das {{jsxref("Atomics")}}-Objekt synchronisieren.

Es gibt zwei Möglichkeiten, auf freigegebenen Speicher zuzugreifen: durch normalen Speicherzugriff (der nicht atomar ist) und durch atomaren Speicherzugriff. Letzterer ist [sequentiell konsistent](https://en.wikipedia.org/wiki/Sequential_consistency) (das heißt, es gibt eine strikte Gesamtordnung der Ereignisse, die alle Agenten im Cluster akzeptieren), während ersterer ungeordnet ist (das heißt, es existiert keine Ordnung); JavaScript bietet keine Operationen mit anderen Ordnungsversprechen.

Die Spezifikation bietet die folgenden Richtlinien für Programmierer, die mit freigegebenem Speicher arbeiten:

> Wir empfehlen, Programme frei von Datenrennen zu halten, d.h. es so zu gestalten, dass es unmöglich ist, dass auf demselben Speicherort gleichzeitig nicht-atomare Operationen stattfinden. Datenrennfrei Programme haben Zwischenlaufsemantiken, bei denen jeder Schritt in den Evaluierungssemantiken jedes Agenten mit den anderen Agenten verschachtelt sind. Für datenrennfrei Programme ist es nicht notwendig, die Details des Speichermodells zu verstehen. Die Details sind wahrscheinlich nicht hilfreich, um Intuition aufzubauen, die das Schreiben von ECMAScript erleichtert.
>
> Allgemeiner, selbst wenn ein Programm nicht datenrennfrei ist, kann es vorhersehbares Verhalten haben, solange atomare Operationen in keinen Datenrennen beteiligt sind und die konkurrierenden Operationen alle dieselbe Zugriffsgröße haben. Der einfachste Weg, um sicherzustellen, dass Atomics nicht in Rennen involviert sind, besteht darin, sicherzustellen, dass verschiedene Speicherzellen durch atomare und nicht-atomare Operationen genutzt und dass atomare Zugriffe unterschiedlicher Größen nicht gleichzeitig auf dieselben Zellen zugreifen. Effektiv sollte das Programm den freigegebenen Speicher so stark wie möglich getypt behandeln. Man kann sich dennoch nicht auf die Ordnung und das Timing nicht-atomarer Zugriffe verlassen, die Rennen fahren, aber wenn Speicher als stark typisiert behandelt wird, werden die rennenden Zugriffe nicht "reißen" (Teile ihrer Werte werden nicht vermischt).

### Nebenläufigkeit und Sicherstellen von Fortschritt

Wenn mehrere Agenten kooperieren, hält das [Nie-blockieren](#nie_blockieren)-Versprechen nicht immer. Ein Agent kann _blockiert_ oder pausiert werden, während er auf einen anderen Agenten wartet, um eine Aktion durchzuführen. Dies unterscheidet sich von der Erwartung an ein Promise im selben Agenten, weil es den gesamten Agenten anhält und keinen anderen Code in der Zwischenzeit ausführen lässt – mit anderen Worten, es kann keinen _Fortschritt_ machen.

Um Deadlocks zu vermeiden, gibt es starke Einschränkungen, wann und welche Agenten blockiert werden können.

- Jeder nicht blockierte Agent mit einem dedizierten auszuführenden Thread macht schließlich Fortschritte.
- In einer Menge von Agenten, die einen auszuführenden Thread teilen, macht schließlich ein Agent Fortschritte.
- Ein Agent führt nicht dazu, dass ein anderer Agent blockiert wird, es sei denn, er verwendet explizite APIs, die Blockierung bereitstellen.
- Nur bestimmte Agenten können blockiert werden. Im Web schließen diese dedizierte Worker und geteilte Worker ein, aber keine gleichursprungs Fenster oder Service Worker.

Der Agentencluster gewährleistet ein gewisses Maß an Integrität über die Aktivität seiner Agenten im Falle externer Pausen oder Beendigungen:

- Ein Agent kann ohne sein Wissen oder seine Kooperation pausiert oder fortgesetzt werden. Zum Beispiel kann das Navigieren weg von einem Fenster die Codeausführung aussetzen, aber seinen Zustand bewahren. Ein Agentencluster darf jedoch nicht teilweise deaktiviert werden, um zu verhindern, dass ein Agent hungert, weil ein anderer Agent deaktiviert wurde. Zum Beispiel befinden sich geteilte Worker niemals im selben Agentencluster wie das Erstellerfenster oder andere dedizierte Worker. Dies liegt daran, dass die Lebensdauer eines geteilten Workers unabhängig von Dokumenten ist: Wenn ein Dokument deaktiviert wird, während sein dedizierter Worker eine Sperre hält, kann der geteilte Worker die Sperre nicht bekommen, bis der dedizierte Worker reaktiviert wird, falls überhaupt. In der Zwischenzeit versuchen andere Worker, die von anderen Fenstern aus auf den geteilten Worker zugreifen, nicht mehr zu ernähren.
- Ebenso kann ein Agent durch externe Faktoren zum Cluster beendet werden. Zum Beispiel, Betriebssysteme oder Benutzer, die einen Browser-Prozess beenden, oder der Browser, der einen Agenten zwangsweise beendet, weil er zu viele Ressourcen verbraucht. In diesem Fall werden alle Agenten im Cluster beendet. (Die Spezifikation erlaubt auch eine zweite Strategie, die ein API ist, das es zumindest einem verbleibenden Mitglied des Clusters ermöglicht zu identifizieren, dass eine Beendigung stattgefunden hat und welcher Agent beendet wurde, aber dies ist im Web nicht implementiert.)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Ereignisschleifen](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) im HTML-Standard
- [Was ist die Ereignisschleife?](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop) in den Node.js-Dokumenten
