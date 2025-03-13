---
title: JavaScript-Ausführungsmodell
slug: Web/JavaScript/Reference/Execution_model
l10n:
  sourceCommit: 60fcf9497ef19a8578c19d640cf04b6a34d44849
---

{{jsSidebar("More")}}

Diese Seite führt in die grundlegende Infrastruktur der JavaScript-Laufzeitumgebung ein. Das Modell ist weitgehend theoretisch und abstrakt, ohne spezifische Details zu Plattformen oder Implementierungen. Moderne JavaScript-Engines optimieren die beschriebenen Semantiken stark.

Diese Seite dient als Referenz. Es wird angenommen, dass Sie bereits mit dem Ausführungsmodell anderer Programmiersprachen wie C und Java vertraut sind. Es wird stark auf bestehende Konzepte in Betriebssystemen und Programmiersprachen Bezug genommen.

## Die Engine und der Host

Die Ausführung von JavaScript erfordert die Zusammenarbeit von zwei Softwares: der **JavaScript-Engine** und der **Host-Umgebung**.

Die JavaScript-Engine implementiert die [ECMAScript (JavaScript) Sprache](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) und stellt die Kernfunktionalität bereit. Sie nimmt den Quellcode, parst ihn und führt ihn aus. Um jedoch mit der Außenwelt zu interagieren, beispielsweise um bedeutungsvolle Ausgaben zu erzeugen, mit externen Ressourcen zu interagieren oder sicherheits- oder leistungsbezogene Mechanismen zu implementieren, benötigen wir zusätzliche hostumgebungsspezifische Mechanismen. Beispielweise ist der HTML DOM die Host-Umgebung, wenn JavaScript in einem Webbrowser ausgeführt wird. Node.js ist eine weitere Host-Umgebung, die JavaScript auf der Serverseite ausführt.

Während wir uns in dieser Referenz hauptsächlich auf die in ECMAScript definierten Mechanismen konzentrieren, werden wir gelegentlich über Mechanismen sprechen, die in der HTML-Spezifikation definiert sind und die oft von anderen Host-Umgebungen wie Node.js oder Deno nachgeahmt werden. Auf diese Weise können wir ein kohärentes Bild des JavaScript-Ausführungsmodells sowohl im Web als auch darüber hinaus zeichnen.

## Agent-Ausführungsmodell

In der JavaScript-Spezifikation wird jeder autonome Ausführer von JavaScript als **Agent** bezeichnet, der seine Mittel zur Codeausführung bereitstellt:

- **Heap** (von Objekten): Dies ist einfach ein Name für einen großen (meist unstrukturierten) Speicherbereich. Er wird gefüllt, wenn im Programm Objekte erstellt werden. Beachten Sie, dass im Fall von gemeinsam genutztem Speicher jeder Agent seinen eigenen Heap mit seiner eigenen Version eines {{jsxref("SharedArrayBuffer")}}-Objekts hat, während der zugrunde liegende Speicher, der durch den Puffer dargestellt wird, gemeinsam genutzt wird.
- [**Queue** (von Jobs)](#job-warteschlange_und_ereignisschleife): Dies ist im HTML-Bereich (und allgemein) als _Ereignisschleife_ bekannt, die asynchrones Programmieren in JavaScript ermöglicht, während sie gleichzeitig einkettig bleibt. Es wird als Warteschlange bezeichnet, weil es im Allgemeinen in der Reihenfolge des Eintreffens nach dem Prinzip "First In, First Out" arbeitet: Frühere Jobs werden vor späteren ausgeführt.
- [**Stack** (von Ausführungskontexten)](#stack_und_ausführungskontexte): Dies ist das, was als _Call-Stack_ bekannt ist, und ermöglicht die Kontrolle des Datenflusses durch das Betreten und Verlassen von Ausführungskontexten wie Funktionen. Es wird als Stapel bezeichnet, weil es dem Prinzip "Last In, First Out" folgt. Jeder Job beginnt, indem ein neuer Rahmen auf den (leeren) Stapel gelegt wird, und beendet sich, indem der Stapel geleert wird.

Diese sind drei unterschiedliche Datenstrukturen, die verschiedene Datensätze verfolgen. Wir werden die Queue und den Stack im Folgenden näher erläutern. Um mehr darüber zu erfahren, wie Heap-Speicher zugewiesen und freigegeben wird, sehen Sie sich das Thema [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management) an.

Jeder Agent entspricht einem Thread (beachten Sie, dass die zugrunde liegende Implementierung möglicherweise kein tatsächlicher Betriebssystem-Thread ist). Jeder Agent kann mehrere [Realms](#realms) besitzen (die mit globalen Objekten 1-zu-1 korrelieren), die synchron aufeinander zugreifen können und daher in einem einzigen Ausführungsthread laufen müssen. Ein Agent hat auch ein einziges Speichermodell, das angibt, ob es sich um Little-Endian handelt, ob es [synchron blockiert](#gleichzeitigkeit_und_fortschrittssicherung) werden kann, ob atomare Operationen [sperrfrei](/de/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree) sind, usw.

Ein Agent im Web kann einer der folgenden sein:

- Ein _ähnlicher Ursprungsfenster-Agent_, der verschiedene [`Window`](/de/docs/Web/API/Window)-Objekte enthält, die sich potenziell gegenseitig erreichen können, entweder direkt oder durch Verwendung von [`document.domain`](/de/docs/Web/API/Document/domain). Ist das Fenster [ursprungsversiegelt](/de/docs/Web/API/Window/originAgentCluster), dann können nur Fenster des gleichen Ursprungs einander erreichen.
- Ein _dedizierter Arbeiter-Agent_, der eine einzelne [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) enthält.
- Ein _gemeinsam genutzter Arbeiter-Agent_, der eine einzelne [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) enthält.
- Ein _Service-Arbeiter-Agent_, der eine einzelne [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) enthält.
- Ein _Worklet-Agent_, der eine einzelne [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope) enthält.

Mit anderen Worten, jeder Arbeiter erstellt seinen eigenen Agenten, während ein oder mehrere Fenster innerhalb des gleichen Agenten sein können - in der Regel ein Hauptdokument und seine ursprungsgleichen iframes. In Node.js steht ein ähnliches Konzept namens [worker threads](https://nodejs.org/api/worker_threads.html) zur Verfügung.

Das folgende Diagramm veranschaulicht das Ausführungsmodell der Agenten:

![Ein Diagramm mit zwei Agenten: eine HTML-Seite und ein Worker. Jeder hat seinen eigenen Stack mit Ausführungskontexten, einen Heap mit Objekten und eine Queue mit Jobs.](runtime-environment-diagram.svg)

## Realms

Jeder Agent besitzt ein oder mehrere **Realms**. Jedes JavaScript-Stück wird einem Realm zugeordnet, wenn es geladen wird, was auch bleibt, wenn es von einem anderen Realm aufgerufen wird. Ein Realm besteht aus den folgenden Informationen:

- Einer Liste von intrinsischen Objekten wie `Array`, `Array.prototype` usw.
- Global deklarierten Variablen, dem Wert von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) und dem globalen Objekt
- Einem Cache von [Template-String-Arrays](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates), weil die Auswertung des gleichen markierten Template-String-Ausdrucks immer dazu führt, dass das Tag das gleiche Array-Objekt erhält

Im Web entsprechen der Realm und das globale Objekt einander 1-zu-1. Das globale Objekt ist entweder ein [`Window`](/de/docs/Web/API/Window), ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) oder ein [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope). Ein `iframe` führt also zum Beispiel in einem anderen Realm aus, obwohl es sich im gleichen Agenten wie das übergeordnete Fenster befinden kann.

Realms werden oft im Zusammenhang mit den Identitäten globaler Objekte erwähnt. Zum Beispiel benötigen wir Methoden wie {{jsxref("Array.isArray()")}} oder {{jsxref("Error.isError()")}}, weil ein Array, das in einem anderen Realm erstellt wurde, ein anderes Prototyp-Objekt als das `Array.prototype`-Objekt im aktuellen Realm haben wird, sodass `instanceof Array` fälschlicherweise `false` zurückgeben würde.

## Stack und Ausführungskontexte

Wir betrachten zuerst die synchrone Codeausführung. Jeder [Job](#job-warteschlange_und_ereignisschleife) beginnt mit dem Aufruf seines zugehörigen Callback. Code innerhalb dieses Callbacks kann Variablen erstellen, Funktionen aufrufen oder beenden. Jede Funktion muss ihre eigenen Variablenumgebungen und den Rückkehrort verfolgen. Um dies zu handhaben, benötigt der Agent einen Stack, um die Ausführungskontexte zu verfolgen. Ein **Ausführungskontext**, der allgemein auch als _Stackrahmen_ bekannt ist, ist die kleinste Ausführungseinheit. Er verfolgt die folgende Informationen:

- Codeauswertungszustand
- Das Modul oder Skript, die Funktion (falls zutreffend) und der aktuell ausführende [Generator](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator), der diesen Code enthält
- Das aktuelle [Realm](#realms)
- {{Glossary("Binding", "Bindings")}}, einschließlich:
  - Variablen, die mit `var`, `let`, `const`, `function`, `class` usw. definiert wurden
  - Private Bezeichner wie `#foo`, die nur im aktuellen Kontext gültig sind
  - `this`-Referenz

Stellen Sie sich ein Programm vor, das aus einem einzelnen Job besteht, der durch den folgenden Code definiert ist:

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

1. Wenn der Job startet, wird der erste Rahmen erstellt, in dem die Variablen `foo`, `bar` und `baz` definiert werden. Er ruft `bar` mit dem Argument `7` auf.
2. Ein zweiter Rahmen wird für den Aufruf von `bar` erstellt, der Bindungen für den Parameter `x` und die lokale Variable `y` enthält. Er führt zunächst die Multiplikation `x * y` aus, und ruft dann `foo` mit dem Ergebnis auf.
3. Ein dritter Rahmen wird für den Aufruf von `foo` erstellt, der Bindungen für den Parameter `b` und die lokale Variable `a` enthält. Er führt zunächst die Addition `a + b + 11` aus und gibt dann das Ergebnis zurück.
4. Wenn `foo` zurückkehrt, wird das oberste Rahmen-Element aus dem Stack entfernt, und der Aufrufausdruck `foo(x * y)` löst sich in den Rückgabewert auf. Es wird dann mit der Ausführung fortgefahren, was nur die Rückgabe dieses Ergebnisses ist.
5. Wenn `bar` zurückkehrt, wird das oberste Rahmen-Element aus dem Stack entfernt, und der Aufrufausdruck `bar(7)` löst sich in den Rückgabewert auf. Dies initialisiert `baz` mit dem Rückgabewert.
6. Wir erreichen das Ende des Quellcodes des Jobs, sodass der Stackrahmen für den Einstiegspunkt aus dem Stack entfernt wird. Der Stack ist leer, sodass der Job als abgeschlossen gilt.

### Generatoren und Wiedereintritt

Wenn ein Rahmen entfernt wird, ist er nicht unbedingt endgültig verschwunden, da wir manchmal darauf zurückkommen müssen. Beispielweise bei einer Generatorfunktion:

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

In diesem Fall erstellt der Aufruf von `gen()` zunächst einen Ausführungskontext, der angehalten wird—kein Code innerhalb von `gen` wird noch ausgeführt. Der Generator `g` speichert diesen Ausführungskontext intern. Der aktuell laufende Ausführungskontext bleibt der Einstiegspunkt. Wenn `g.next()` aufgerufen wird, wird der Ausführungskontext für `gen` auf den Stack gelegt und der Code innerhalb von `gen` wird bis zum `yield`-Ausdruck ausgeführt. Dann wird der Generator-Ausführungskontext angehalten und aus dem Stack entfernt, was die Kontrolle zurück an den Einstiegspunkt gibt. Wenn `g.next()` erneut aufgerufen wird, wird der Generator-Ausführungskontext wieder auf den Stack gelegt und der Code innerhalb von `gen` wird von der Stelle an fortgesetzt, an der er aufgehört hat.

### Tail-Aufrufe

Ein Mechanismus, der in der Spezifikation definiert ist, ist der _korrekte Tail Call_ (PTC). Ein Funktionsaufruf ist ein Tail-Aufruf, wenn der Aufrufer nach dem Aufruf nichts tut, außer den Wert zurückzugeben:

```js
function f() {
  return g();
}
```

In diesem Fall ist der Aufruf von `g` ein Tail-Aufruf. Wenn ein Funktionsaufruf im Tail-Bereich liegt, muss die Engine den aktuellen Ausführungskontext verwerfen und ihn durch den Kontext des Tail-Aufrufs ersetzen, anstatt einen neuen Rahmen für den Aufruf von `g()` hinzuzufügen. Das bedeutet, dass Tail-Rekursion nicht den Stapelgrößenbeschränkungen unterliegt:

```js
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc);
}
```

In der Realität verursacht das Verwerfen des aktuellen Rahmens Debugging-Probleme, weil, wenn `g()` einen Fehler wirft, `f` nicht mehr im Stack ist und nicht in der Stack-Spur erscheinen wird. Derzeit implementiert nur Safari (JavaScriptCore) PTC, und sie haben eine spezielle [Infrastruktur](https://webkit.org/blog/6240/ecmascript-6-proper-tail-calls-in-webkit/) erfunden, um das Debugging-Problem zu adressieren.

### Closures

Ein weiteres interessantes Phänomen im Zusammenhang mit der Variablenscope und Funktionsaufrufen sind [Closures](/de/docs/Web/JavaScript/Guide/Closures). Immer wenn eine Funktion erstellt wird, merkt sie sich auch intern die Variablenbindungen des aktuell laufenden Ausführungskontexts. Dann können diese Variablenbindungen den Ausführungskontext überleben.

```js
let f;
{
  let x = 10;
  f = () => x;
}
console.log(f()); // logs 10
```

## Job-Warteschlange und Ereignisschleife

Ein Agent ist ein Thread, was bedeutet, dass der Interpreter immer nur eine Anweisung gleichzeitig verarbeiten kann. Wenn der Code vollständig synchron ist, ist das in Ordnung, da wir immer Fortschritte machen können. Aber wenn der Code eine asynchrone Aktion ausführen muss, können wir keinen Fortschritt machen, solange diese Aktion nicht abgeschlossen ist. Es wäre jedoch nachteilig für das Benutzererlebnis, wenn dies das ganze Programm stoppen würde—die Natur von JavaScript als Web-Skriptsprache erfordert, dass es [niemals blockiert](#niemals_blockierend). Daher wird der Code, der die Fertigstellung dieser asynchronen Aktion bearbeitet, als Callback definiert. Dieses Callback definiert einen **Job**, der in eine **Job-Warteschlange**—oder in HTML-Begriffen eine Ereignisschleife—gestellt wird, sobald die Aktion abgeschlossen ist.

Jedes Mal zieht der Agent einen Job aus der Warteschlange und führt ihn aus. Wenn der Job ausgeführt wird, kann er weitere Jobs erstellen, die ans Ende der Warteschlange gestellt werden. Jobs können auch durch die Fertigstellung asynchroner Plattformmechanismen wie Timer, I/O und Ereignisse hinzugefügt werden. Ein Job wird als abgeschlossen betrachtet, wenn der [Stack](#stack_und_ausführungskontexte) leer ist; dann wird der nächste Job aus der Warteschlange gezogen. Jobs werden möglicherweise nicht gleichmäßig priorisiert—zum Beispiel teilen HTML-Ereignisschleifen Jobs in zwei Kategorien ein: _Tasks_ und _Mikro-Tasks_. Mikro-Tasks haben höchste Priorität, und die Mikro-Task-Warteschlange wird zuerst entleert, bevor die Task-Warteschlange gezogen wird. Weitere Informationen finden Sie im [HTML-Mikro-Task-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide). Wenn die Job-Warteschlange leer ist, wartet der Agent darauf, dass mehr Jobs hinzugefügt werden.

### "Durchlaufende Ausführung"

Jeder Job wird vollständig verarbeitet, bevor ein anderer Job bearbeitet wird. Dies bietet einige interessante Eigenschaften beim Nachdenken über Ihr Programm, einschließlich der Tatsache, dass wann immer eine Funktion ausgeführt wird, sie nicht unterbrochen und vollständig ausgeführt wird, bevor ein anderer Code ausgeführt wird (und Daten, die die Funktion manipuliert, ändern kann). Dies unterscheidet sich von C, wo, wenn eine Funktion in einem Thread ausgeführt wird, sie irgendwann vom Laufzeitsystem gestoppt werden kann, um irgendeinen anderen Code in einem anderen Thread auszuführen.

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

In diesem Beispiel erstellen wir ein bereits gelöstes Versprechen, was bedeutet, dass jeder Callback, der daran gekoppelt wird, sofort als Jobs eingeplant wird. Die beiden Callbacks scheinen eine Rennbedingung zu verursachen, aber tatsächlich ist die Ausgabe vollständig vorhersagbar: `1` und `2` werden in der Reihenfolge protokolliert. Dies liegt daran, dass jeder Job zur Fertigstellung ausgeführt wird, bevor der nächste ausgeführt wird, sodass die Gesamtreihenfolge immer `i += 1; console.log(i); i += 1; console.log(i);` und niemals `i += 1; i += 1; console.log(i); console.log(i);` ist.

Ein Nachteil dieses Modells ist, dass, wenn ein Job zu lange dauert, die Webanwendung nicht in der Lage ist, Benutzerinteraktionen wie Klicken oder Scrollen zu verarbeiten. Der Browser mildert dies durch den Dialog "Ein Skript benötigt zu lange zum Ausführen". Eine gute Praxis ist es, die Jobbearbeitung kurz zu halten und, wenn möglich, einen Job in mehrere Jobs zu unterteilen.

### Niemals blockierend

Ein weiteres wichtiges Versprechen des Ereignisschleifenmodells ist, dass die JavaScript-Ausführung nie blockiert. Die Verarbeitung von I/O erfolgt in der Regel über Ereignisse und Callbacks, sodass die Anwendung, während sie auf die Rückkehr eines [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Abfrageergebnisses oder einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anforderung wartet, weiterhin andere Dinge wie Benutzereingaben verarbeiten kann. Der Code, der nach dem Abschluss einer asynchronen Aktion ausgeführt wird, wird immer als Callback-Funktion bereitgestellt (beispielsweise der {{jsxref("Promise/then", "then()")}}-Handler des Versprechens, die Callback-Funktion in `setTimeout()`, oder der Ereignishandler), der einen Job definiert, der der Job-Warteschlange hinzugefügt wird, sobald die Aktion abgeschlossen ist.

Natürlich erfordert die Garantie des "niemals-blockierend" sein, dass die Plattform-API von Natur aus asynchron ist, aber es gibt einige ältere Ausnahmen wie `alert()` oder synchrones XHR. Es gilt als gute Praxis, diese zu vermeiden, um die Reaktionsfähigkeit der Anwendung sicherzustellen.

## Agenten-Cluster und Speichernutzung

Mehrere Agenten können durch Speichernutzung kommunizieren und bilden so einen **Agenten-Cluster**. Agenten sind nur dann innerhalb desselben Clusters, wenn sie Speichernutzung teilen können. Es gibt keinen eingebauten Mechanismus, damit zwei Agenten-Cluster Informationen austauschen können, daher können sie als vollständig isolierte Ausführungsmodelle betrachtet werden.

Bei der Erstellung eines Agenten (zum Beispiel durch das Starten eines Arbeiters) gibt es einige Kriterien, ob er im gleichen Cluster wie der aktuelle Agent ist oder ein neuer Cluster erstellt wird. Zum Beispiel sind die folgenden Paare von globalen Objekten jeweils innerhalb des gleichen Agenten-Clusters und können daher Speicher miteinander teilen:

- Ein `Window`-Objekt und ein dedizierter Arbeiter, den es erstellt hat.
- Ein Arbeiter (jedes Typs) und ein dedizierter Arbeiter, den es erstellt hat.
- Ein `Window`-Objekt A und das `Window`-Objekt eines ursprungsgleichen `iframe`-Elements, das A erstellt hat.
- Ein `Window`-Objekt und ein ursprungsgleiches `Window`-Objekt, das es geöffnet hat.
- Ein `Window`-Objekt und ein Worklet, das es erstellt hat.

Die folgenden Paare von globalen Objekten sind nicht innerhalb des gleichen Agenten-Clusters und können daher keinen Speicher teilen:

- Ein `Window`-Objekt und ein gemeinsam genutzter Arbeiter, den es erstellt hat.
- Ein Arbeiter (jedes Typs) und ein gemeinsam genutzter Arbeiter, den es erstellt hat.
- Ein `Window`-Objekt und ein Servicearbeiter, den es erstellt hat.
- Ein `Window`-Objekt A und das `Window`-Objekt eines `iframe`-Elements, das A erstellt hat und dass nicht ursprungsgleich mit A sein kann.
- Zwei `Window`-Objekte ohne Öffner- oder Vorfahrenbeziehung. Dies gilt auch dann, wenn die beiden `Window`-Objekte ursprungsgleich sind.

Für den genauen Algorithmus siehe die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-agent-cluster-formalism).

### Cross-Agent-Kommunikation und Speicher-Modell

Wie bereits erwähnt, kommunizieren Agenten über Speichernutzung. Im Web erfolgt dies über die Methode [`postMessage()`](/de/docs/Web/API/Window/postMessage). Der [Verwendung von Webarbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)-Leitfaden bietet dazu einen Überblick. Typischerweise werden Daten nur durch Wertübergabe (über [strukturiertes Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)) weitergegeben und beinhalten daher keine Konkurrenzkomplikationen. Um Speicher gemeinsam zu nutzen, muss ein {{jsxref("SharedArrayBuffer")}}-Objekt gepostet werden, auf das mehrere Agenten gleichzeitig zugreifen können. Sobald zwei Agenten Zugriff auf denselben Speicher über einen `SharedArrayBuffer` haben, können sie Ausführungen über das {{jsxref("Atomics")}}-Objekt synchronisieren.

Es gibt zwei Möglichkeiten, auf gemeinsam genutzten Speicher zuzugreifen: über normalen Speicherzugriff (der nicht atomar ist) und über atomaren Speicherzugriff. Letzterer ist [sequentiell konsistent](https://en.wikipedia.org/wiki/Sequential_consistency) (was bedeutet, dass es eine strenge Gesamtordnung von Ereignissen gibt, auf die sich alle Agenten im Cluster einigen), während ersterer ungeordnet ist (was bedeutet, dass keine Ordnung existiert); JavaScript stellt keine Operationen mit anderen Ordnungsversprechen bereit.

Die Spezifikation bietet die folgenden Richtlinien für Programmierer, die mit gemeinsam genutztem Speicher arbeiten:

> Wir empfehlen, Programme frei von Datenrennen zu halten, das heißt, machen Sie es unmöglich, dass es gleichzeitige nicht-atomare Operationen auf derselben Speicherstelle gibt. Datenrennen-freie Programme haben interleaving Semantiken, bei denen jeder Schritt in der Auswertungssemantik jedes Agenten mit denen anderer Agenten eingeordnet wird. Bei Datenrennen-freien Programmen ist es nicht notwendig, die Details des Speichermodells zu verstehen. Die Details werden wahrscheinlich nicht dazu beitragen, eine Intuition zu entwickeln, die einem hilft, ECMAScript besser zu schreiben.
>
> Allgemeiner gesagt, selbst wenn ein Programm nicht Datenrennen-frei ist, kann es ein vorhersehbares Verhalten haben, solange atomare Operationen nicht in Datenrennen verwickelt sind und die Operationen, die in Rennen sind, alle dieselbe Zugriffsgröße haben. Der einfachste Weg, um zu verhindern, dass Atomics in Rennen verwickelt sind, besteht darin, sicherzustellen, dass verschiedene Speicherzellen von atomaren und nicht-atomaren Operationen genutzt werden und dass atomare Zugriffe verschiedener Größen nicht zur gleichen Zeit auf dieselben Zellen zugreifen. Effektiv sollte das Programm den gemeinsam genutzten Speicher so stark wie möglich typisiert betrachten. Man kann sich dennoch nicht auf die Order und das Timing von nicht-atomaren Zugriffen verlassen, die Rennen haben, aber solange Speicher stark typisiert behandelt wird, werden die rennenden Zugriffe nicht "reißen" (Teile ihrer Werte werden nicht gemischt).

### Gleichzeitigkeit und Fortschrittssicherung

Wenn mehrere Agenten zusammenarbeiten, hält das [niemals-blockierend](#niemals_blockierend)-Versprechen nicht immer. Ein Agent kann _blockiert_ oder pausiert werden, während er auf einen anderen Agenten wartet, um eine Aktion auszuführen. Das unterscheidet sich vom Warten auf ein Versprechen im gleichen Agenten, da es den gesamten Agenten stoppt und keinen anderen Code in der Zwischenzeit ausführen lässt—mit anderen Worten, er kann keinen _Fortschritt erzielen_.

Um Deadlocks zu verhindern, gibt es einige strenge Einschränkungen, wann und welche Agenten blockiert werden können.

- Jeder nicht blockierte Agent mit einem dedizierten Ausführungs-Thread macht schließlich Fortschritte.
- In einer Gruppe von Agenten, die einen Ausführungs-Thread teilen, macht ein Agent schließlich Fortschritte.
- Ein Agent führt keinen anderen Agenten in ein blockiertes Stadium, außer durch explizite APIs, die ein Blockieren vorsehen.
- Nur bestimmte Agenten können blockiert werden. Im Web umfasst dies dedizierte Arbeiter und gemeinsam genutzte Arbeiter, jedoch nicht ähnliche Ursprungsfenster oder Servicearbeiter.

Der Agenten-Cluster sorgt für eine gewisse Integrität über die Aktivität seiner Agenten, im Fall von externen Pausen oder Beendigungen:

- Ein Agent kann angehalten oder fortgesetzt werden, ohne dass er dies weiß oder kooperiert. Zum Beispiel kann das Navigieren weg von einem Fenster die Codeausführung anhalten, den Zustand jedoch bewahren. Ein Agenten-Cluster darf jedoch nicht teilweise deaktiviert werden, um zu verhindern, dass ein Agent verhungert, weil ein anderer Agent deaktiviert wurde. Zum Beispiel sind gemeinsam genutzte Arbeiter niemals im gleichen Agenten-Cluster wie das Erstellungfenster oder andere dedizierte Arbeiter. Dies liegt daran, dass die Lebensdauer eines gemeinsam genutzten Arbeiters unabhängig von Dokumenten ist: Wenn ein Dokument deaktiviert wird, während sein dedizierter Arbeiter eine Sperre hält, wird der gemeinsam genutzte Arbeiter daran gehindert, die Sperre zu erwerben, bis der dedizierte Arbeiter reaktiviert wird, falls überhaupt. Währenddessen würden andere Arbeiter, die versuchen, auf den gemeinsam genutzten Arbeiter von anderen Fenstern zuzugreifen, verhungern.
- Ein Agent kann hingegen von Faktoren außerhalb des Clusters beendet werden. Zum Beispiel kann das Betriebssystem oder die Benutzer einen Browserprozess beenden oder der Browser das Beenden eines Agenten erzwingen, weil er zu viele Ressourcen nutzt. In diesem Fall werden alle Agenten im Cluster beendet. (Die Spezifikation erlaubt auch eine zweite Strategie, die eine API ist, die mindestens einem verbleibenden Mitglied des Clusters ermöglicht, die Beendigung und den Agenten, der beendet wurde, zu identifizieren, aber dies ist im Web nicht implementiert.)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Ereignisschleifen](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) im HTML-Standard
- [Was ist die Ereignisschleife?](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop) in der Node.js-Dokumentation
