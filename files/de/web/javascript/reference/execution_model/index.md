---
title: JavaScript-Ausführungsmodell
slug: Web/JavaScript/Reference/Execution_model
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Diese Seite führt in die grundlegende Infrastruktur der JavaScript-Laufzeitumgebung ein. Das Modell ist größtenteils theoretisch und abstrakt, ohne plattform- oder implementierungs-spezifische Details. Moderne JavaScript-Engines optimieren die beschriebenen Semantiken stark.

Diese Seite ist eine Referenz. Sie setzt voraus, dass Sie bereits mit dem Ausführungsmodell anderer Programmiersprachen wie C und Java vertraut sind. Sie bezieht sich stark auf bestehende Konzepte in Betriebssystemen und Programmiersprachen.

## Die Engine und der Host

Für die Ausführung von JavaScript ist die Zusammenarbeit von zwei Software-Komponenten erforderlich: der **JavaScript-Engine** und die **Host-Umgebung**.

Die JavaScript-Engine implementiert die [ECMAScript (JavaScript) Sprache](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript), welche die Kernfunktionalität bereitstellt. Sie nimmt Quellcode, analysiert ihn und führt ihn aus. Um jedoch mit der Außenwelt zu interagieren, beispielsweise um aussagekräftige Ausgaben zu erzeugen, externe Ressourcen zu nutzen oder sicherheits- oder leistungsbezogene Mechanismen zu implementieren, benötigen wir zusätzliche, umgebungsspezifische Mechanismen, die von der Host-Umgebung bereitgestellt werden. Zum Beispiel ist der HTML DOM die Host-Umgebung, wenn JavaScript in einem Webbrowser ausgeführt wird. Node.js ist eine weitere Host-Umgebung, die es JavaScript ermöglicht, serverseitig ausgeführt zu werden.

Während wir uns in dieser Referenz hauptsächlich auf die in ECMAScript definierten Mechanismen konzentrieren, werden wir gelegentlich über Mechanismen sprechen, die in der HTML-Spezifikation definiert sind und oft von anderen Host-Umgebungen wie Node.js oder Deno nachgeahmt werden. So können wir ein kohärentes Bild des JavaScript-Ausführungsmodells geben, wie es im Web und darüber hinaus verwendet wird.

## Agenten-Ausführungsmodell

In der JavaScript-Spezifikation wird jeder autonome JavaScript-Ausführer als **Agent** bezeichnet, der seine eigenen Mittel zur Ausführung von Code unterhält:

- **Heap** (von Objekten): Dies ist nur ein Name für einen großen (meist unstrukturierten) Speicherbereich. Er wird gefüllt, wenn Objekte im Programm erstellt werden. Beachten Sie, dass im Falle einer gemeinsamen Speicherverwendung jeder Agent seinen eigenen Heap mit seiner eigenen Version eines {{jsxref("SharedArrayBuffer")}}-Objekts hat, der zugrundeliegende Speicher, der durch den Buffer dargestellt wird, jedoch gemeinsam genutzt wird.
- [**Warteschlange** (von Jobs)](#aufgabenwarteschlange_und_ereignisschleife): Dies ist in HTML (und üblicherweise) bekannt als die _Ereignisschleife_, die asynchrones Programmieren in JavaScript ermöglicht, während es doch single-threaded bleibt. Es wird als Warteschlange bezeichnet, weil es im Allgemeinen ein First-in-First-out ist: frühere Jobs werden vor späteren ausgeführt.
- [**Stapel** (von Ausführungskontexten)](#stapel_und_ausführungskontexte): Dies ist das, was als _Aufrufstapel_ bekannt ist und die Steuerflussübertragung durch Eingeben und Verlassen von Ausführungskontexten wie Funktionen ermöglicht. Es wird als Stapel bezeichnet, da es ein Last-in-First-out ist. Jeder Job beginnt durch Hinzufügen eines neuen Frames auf den (leeren) Stapel und endet, wenn der Stapel geleert wird.

Dies sind drei verschiedene Datenstrukturen, die unterschiedliche Daten im Auge behalten. Wir werden die Warteschlange und den Stapel in den folgenden Abschnitten genauer vorstellen. Um mehr darüber zu lesen, wie Speicherplatz im Heap zugewiesen und freigegeben wird, lesen Sie [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management).

Jeder Agent ist analog zu einem Thread (beachten Sie, dass die zugrunde liegende Implementierung möglicherweise nicht tatsächlich ein Betriebssystem-Thread ist). Jeder Agent kann mehrere [Realm](#realms) besitzen (die 1-zu-1 mit globalen Objekten korrelieren), die sich gegenseitig synchron aufrufen können und dadurch in einem einzelnen Ausführungsthread laufen müssen. Ein Agent hat auch ein einzelnes Speicher-Modell, das angibt, ob es little-endian ist, ob es [synchron blockiert](#nebenläufigkeit_und_sicherstellung_von_fortschritten) werden kann, ob atomare Operationen [sperrfrei](/de/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree) sind, etc.

Ein Agent im Web kann eine der folgenden Formen annehmen:

- Ein _Ähnlich-Ursprungs-Fensteragent_, das verschiedene [`Window`](/de/docs/Web/API/Window)-Objekte enthält, die sich gegenseitig direkt oder mithilfe von [`document.domain`](/de/docs/Web/API/Document/domain) erreichen können. Wenn das Fenster [ursprungsbasiert](/de/docs/Web/API/Window/originAgentCluster) ist, können sich nur Fenster mit demselben Ursprungswert erreichen.
- Ein _Dedizierter Arbeiteragent_, der einen einzigen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) enthält.
- Ein _Gemeinsamer Arbeiteragent_, der einen einzigen [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) enthält.
- Ein _Dienstarbeitsagent_, der einen einzigen [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) enthält.
- Ein _Worklet-Agent_, der einen einzigen [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope) enthält.

Mit anderen Worten, jeder Arbeiter erstellt seinen eigenen Agenten, während eines oder mehrere Fenster im selben Agent sein können—normalerweise ein Hauptdokument und seine ähnlichen Ursprungs-Iframes. In Node.js steht ein ähnliches Konzept namens [worker threads](https://nodejs.org/api/worker_threads.html) zur Verfügung.

Das nachstehende Diagramm illustriert das Ausführungsmodell von Agenten:

![Ein Diagramm, das aus zwei Agenten besteht: eine HTML-Seite und ein Worker. Jeder hat seinen eigenen Stapel mit Ausführungskontexten, Heap mit Objekten und Warteschlange mit Jobs.](runtime-environment-diagram.svg)

## Realms

Jeder Agent besitzt ein oder mehrere **Realms**. Jedes Stück JavaScript-Code ist einem Realm zugeordnet, wenn es geladen wird, der gleich bleibt, selbst wenn er von einem anderen Realm aus aufgerufen wird. Ein Realm besteht aus den folgenden Informationen:

- Eine Liste von intrinsischen Objekten wie `Array`, `Array.prototype`, usw.
- Global deklarierte Variablen, der Wert von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) und das globale Objekt
- Ein Cache von [Template-Literal-Arrays](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates), da die Auswertung des gleichen getaggten Template-Literal-Ausdrucks immer dazu führt, dass der Tag dasselbe Array-Objekt erhält

Im Web korrespondieren das Realm und das globale Objekt 1-zu-1. Das globale Objekt ist entweder ein [`Window`](/de/docs/Web/API/Window), ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) oder ein [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope). Zum Beispiel führt jedes `iframe` in einem anderen Realm aus, obwohl es sich im selben Agenten wie das übergeordnete Fenster befinden kann.

Realms werden normalerweise erwähnt, wenn es um die Identitäten globaler Objekte geht. Zum Beispiel benötigen wir Methoden wie {{jsxref("Array.isArray()")}} oder {{jsxref("Error.isError()")}}, weil ein Array, das in einem anderen Realm konstruiert wurde, ein anderes Prototypobjekt als das `Array.prototype`-Objekt im derzeitigen Realm hat, sodass `instanceof Array` fälschlicherweise `false` zurückgeben würde.

## Stapel und Ausführungskontexte

Wir betrachten zuerst die synchrone Code-Ausführung. Jeder [Job](#aufgabenwarteschlange_und_ereignisschleife) startet mit dem Aufruf seines zugehörigen Callbacks. Code innerhalb dieses Callback kann Variablen erstellen, Funktionen aufrufen oder enden. Jede Funktion muss ihre eigenen Variablendeklarationen und den Rücksprungpunkt speichern. Um dies zu handhaben, benötigt der Agent einen Stapel, um die Ausführungskontexte zu verfolgen. Ein **Ausführungskontext**, auch allgemein als _Stapelrahmen_ bekannt, ist die kleinste Ausführungseinheit. Er verfolgt die folgenden Informationen:

- Status der Codeauswertung
- Das Modul oder das Skript, die Funktion (falls zutreffend) und der aktuell ausführende [Generator](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator), der diesen Code enthält
- Der aktuelle [Realm](#realms)
- {{Glossary("Binding", "Bindings")}}, einschließlich:
  - Variablen, die mit `var`, `let`, `const`, `function`, `class` usw. definiert sind
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

1. Wenn der Job startet, wird der erste Frame erstellt, in dem die Variablen `foo`, `bar` und `baz` definiert werden. Er ruft `bar` mit dem Argument `7` auf.
2. Ein zweiter Frame wird für den `bar`-Aufruf erstellt, der Bindungen für den Parameter `x` und die lokale Variable `y` enthält. Zuerst führt er die Multiplikation `x * y` aus und ruft dann `foo` mit dem Ergebnis auf.
3. Ein dritter Frame wird für den `foo`-Aufruf erstellt, der Bindungen für den Parameter `b` und die lokale Variable `a` enthält. Zuerst führt er die Addition `a + b + 11` aus und gibt dann das Ergebnis zurück.
4. Wenn `foo` zurückgibt, wird das oberste Element des Stapelrahmens entfernt, und der Aufrufausdruck `foo(x * y)` wird in den Rückgabewert aufgelöst. Es wird dann mit der Ausführung fortgesetzt, was darin besteht, dieses Ergebnis zurückzugeben.
5. Wenn `bar` zurückgibt, wird das oberste Element des Stapelrahmens entfernt, und der Aufrufausdruck `bar(7)` wird in den Rückgabewert aufgelöst. Dies initialisiert `baz` mit dem Rückgabewert.
6. Wir erreichen das Ende des Quellcodes des Jobs, sodass der Stapelrahmen für den Einstiegspunkt aus dem Stapel entfernt wird. Der Stapel ist leer, sodass der Job als abgeschlossen betrachtet wird.

### Generatoren und Wiedereintritt

Wenn ein Frame entfernt wird, ist er nicht unbedingt für immer verschwunden, denn manchmal müssen wir zu ihm zurückkehren. Betrachten Sie zum Beispiel eine Generatorfunktion:

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

In diesem Fall erstellt der Aufruf von `gen()` zuerst einen Ausführungskontext, der angehalten wird—kein Code innerhalb von `gen` wird bis jetzt ausgeführt. Der Generator `g` speichert diesen Ausführungskontext intern. Der aktuell laufende Ausführungskontext bleibt der Einstiegspunkt. Wenn `g.next()` aufgerufen wird, wird der Ausführungskontext für `gen` auf den Stapel geschoben und der Code innerhalb von `gen` wird bis zum `yield`-Ausdruck ausgeführt. Dann wird der Ausführungskontext des Generators angehalten und aus dem Stapel entfernt, was die Kontrolle zurück an den Einstiegspunkt gibt. Wenn `g.next()` erneut aufgerufen wird, wird der Ausführungskontext des Generators wieder auf den Stapel geschoben und der Code innerhalb von `gen` wird dort fortgesetzt, wo er aufgehört hat.

### Tail Calls

Ein Mechanismus, der in der Spezifikation definiert ist, ist der _proper tail call_ (PTC). Ein Funktionsaufruf ist ein Tail Call, wenn der Aufrufer nach dem Aufruf nichts anderes tut, als den Wert zurückzugeben:

```js
function f() {
  return g();
}
```

In diesem Fall ist der Aufruf von `g` ein Tail Call. Wenn ein Funktionsaufruf in Tail-Position ist, wird die Engine angewiesen, den aktuellen Ausführungskontext zu verwerfen und ihn durch den Kontext des Tail Calls zu ersetzen, anstelle eines neuen Frames für den `g()`-Aufruf. Dies bedeutet, dass Tail-Rekursion nicht den Stapelgrößenbeschränkungen unterliegt:

```js
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc);
}
```

In der Praxis verursacht das Verwerfen des aktuellen Frames Debugging-Probleme, denn wenn `g()` einen Fehler wirft, ist `f` nicht mehr im Stapel und erscheint nicht im Stack-Trace. Derzeit implementiert nur Safari (JavaScriptCore) PTC, und sie haben einige [spezielle Infrastruktur](https://webkit.org/blog/6240/ecmascript-6-proper-tail-calls-in-webkit/) erfunden, um dieses Debugging-Problem zu lösen.

### Closures

Ein weiteres interessantes Phänomen im Zusammenhang mit Variablen-Bereich und Funktionsaufrufen sind [Closures](/de/docs/Web/JavaScript/Guide/Closures). Wann immer eine Funktion erstellt wird, merkt sie sich auch die Variablenbindungen des aktuell laufenden Ausführungskontexts intern. Dann können diese Variablenbindungen den Ausführungskontext überdauern.

```js
let f;
{
  let x = 10;
  f = () => x;
}
console.log(f()); // logs 10
```

## Aufgabenwarteschlange und Ereignisschleife

Ein Agent ist ein Thread, was bedeutet, dass der Interpreter nur eine Anweisung auf einmal verarbeiten kann. Wenn der Code vollständig synchron ist, ist dies in Ordnung, da wir immer Fortschritte machen können. Aber wenn der Code asynchrone Aktionen durchführen muss, dann können wir nicht weiter machen, es sei denn, diese Aktion ist abgeschlossen. Es wäre jedoch für die Benutzererfahrung nachteilig, wenn das das gesamte Programm anhalten würde—die Natur von JavaScript als Web-Skriptsprache erfordert, dass es [niemals blockiert](#niemals_blockieren). Daher wird der Code, der die Fertigstellung dieser asynchronen Aktion verarbeitet, als Callback definiert. Dieses Callback definiert einen **Job**, der in eine **Aufgabenwarteschlange**—oder in HTML-Begriffen, eine Ereignisschleife—nach Abschluss der Aktion gesetzt wird.

Jedes Mal zieht der Agent einen Job aus der Warteschlange und führt ihn aus. Wenn der Job ausgeführt wird, kann er weitere Jobs erstellen, die am Ende der Warteschlange hinzugefügt werden. Jobs können auch durch den Abschluss asynchroner Plattformmechanismen wie Timer, I/O und Ereignisse hinzugefügt werden. Ein Job wird als abgeschlossen betrachtet, wenn der [Stapel](#stapel_und_ausführungskontexte) leer ist; dann wird der nächste Job aus der Warteschlange gezogen. Die Jobs können möglicherweise nicht mit gleichmäßiger Priorität ausgeführt werden—zum Beispiel teilen HTML-Ereignisschleifen Jobs in zwei Kategorien auf: _Aufgaben_ und _Mikroaufgaben_. Mikroaufgaben haben eine höhere Priorität und die Mikroaufgaben-Warteschlange wird zuerst geleert, bevor die Aufgaben-Warteschlange aufgerufen wird. Für weitere Informationen lesen Sie den [HTML-Mikroaufgaben-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide). Wenn die Arbeitswarteschlange leer ist, wartet der Agent, bis weitere Jobs hinzugefügt werden.

### "Run-to-completion"

Jeder Job wird vollständig verarbeitet, bevor ein anderer Job verarbeitet wird. Dies bietet einige nette Eigenschaften bei der Argumentation über Ihr Programm, einschließlich der Tatsache, dass, wenn eine Funktion ausgeführt wird, sie nicht unterbrochen werden kann und vollständig ausgeführt wird, bevor ein anderer Code ausgeführt wird (und Daten, mit denen die Funktion arbeitet, geändert werden können). Dies unterscheidet sich von C, wo, wenn eine Funktion in einem Thread läuft, sie an jedem Punkt vom Laufzeitsystem angehalten werden kann, um einen anderen Code in einem anderen Thread auszuführen.

Zum Beispiel, betrachten Sie dieses Beispiel:

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

In diesem Beispiel erstellen wir ein bereits aufgelöstes Promise, was bedeutet, dass jeder angefügte Callback sofort als Jobs eingeplant wird. Die beiden Callbacks scheinen eine Race-Bedingung zu verursachen, aber tatsächlich ist die Ausgabe vollständig vorhersehbar: `1` und `2` werden in Reihenfolge protokolliert. Dies liegt daran, dass jeder Job vollständig ausgeführt wird, bevor der nächste gestartet wird, sodass die Gesamtreihenfolge immer `i += 1; console.log(i); i += 1; console.log(i);` und niemals `i += 1; i += 1; console.log(i); console.log(i);` ist.

Ein Nachteil dieses Modells ist, dass, wenn ein Job zu lange braucht, um abgeschlossen zu werden, die Webanwendung nicht in der Lage ist, Benutzerinteraktionen wie Klicken oder Scrollen zu verarbeiten. Der Browser mildert dies mit dem Dialog "Ein Skript läuft zu lange". Eine gute Praxis ist, die Bearbeitung von Jobs kurz zu halten und, wenn möglich, einen Job in mehrere Jobs zu unterteilen.

### Niemals blockieren

Ein weiteres wichtiges Versprechen des Ereignisschleifenmodells ist, dass die JavaScript-Ausführung niemals blockiert. Die Behandlung von Eingabe/Ausgabe wird normalerweise über Ereignisse und Callbacks durchgeführt, sodass die Anwendung, während sie auf eine Antwort einer [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Abfrage oder einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage wartet, weiterhin andere Dinge wie Benutzereingaben verarbeiten kann. Der Code, der nach der Fertigstellung einer asynchronen Aktion ausgeführt wird, wird immer als Callback-Funktion bereitgestellt (zum Beispiel, der Promise {{jsxref("Promise/then", "then()")}}-Handler, die Callback-Funktion in `setTimeout()` oder der Ereignis-Handler), was einen Job definiert, der in die Aufgabenschlange eingefügt wird, sobald die Aktion beendet ist.

Natürlich erfordert das Versprechen "niemals blockieren", dass die Plattform-API inhärent asynchron ist, aber einige veraltete Ausnahmen existieren, wie `alert()` oder synchrones XHR. Es wird als gute Praxis angesehen, diese zu vermeiden, um die Reaktionsfähigkeit der Anwendung sicherzustellen.

## Agenten-Cluster und gemeinsame Speicherverwendung

Mehrere Agenten können über die gemeinsame Nutzung von Speicher kommunizieren und bilden dabei einen **Agenten-Cluster**. Agenten befinden sich im selben Cluster, wenn und nur wenn sie Speicher teilen können. Es gibt keinen eingebauten Mechanismus, damit zwei Agenten-Cluster Informationen austauschen können, sodass sie als vollständig isolierte Ausführungsmodelle angesehen werden können.

Beim Erstellen eines Agenten (wie zum Beispiel durch das Starten eines Workers), gibt es einige Kriterien dafür, ob er sich im selben Cluster wie der aktuelle Agent befindet oder ob ein neuer Cluster erstellt wird. Zum Beispiel gehören die folgenden Paare von globalen Objekten jeweils zum selben Agenten-Cluster und können daher Speicher miteinander teilen:

- Ein `Window`-Objekt und ein dedizierter Worker, den es erstellt hat.
- Ein Worker (von jedem Typ) und ein dedizierter Worker, den es erstellt hat.
- Ein `Window`-Objekt A und das `Window`-Objekt eines Ursprungs-`iframe`-Objekts, das A erstellt hat.
- Ein `Window`-Objekt und ein Ursprungs-`Window`-Objekt, das es geöffnet hat.
- Ein `Window`-Objekt und ein Worklet, das es erstellt hat.

Die folgenden Paare von globalen Objekten gehören nicht zum selben Agenten-Cluster und können daher keinen Speicher teilen:

- Ein `Window`-Objekt und ein gemeinsam genutzter Worker, den es erstellt hat.
- Ein Worker (von jedem Typ) und ein gemeinsam genutzter Worker, den es erstellt hat.
- Ein `Window`-Objekt und ein Service-Worker, den es erstellt hat.
- Ein `Window`-Objekt A und das `Window`-Objekt eines `iframe`-Elements, das A erstellt hat, das nicht denselben Ursprungsbereich wie A haben kann.
- Beliebige zwei `Window`-Objekte ohne Öffner oder Vorfahren-Beziehung. Dies gilt auch dann, wenn die beiden `Window`-Objekte denselben Ursprungswert haben.

Für den genauen Algorithmus siehe die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-agent-cluster-formalism).

### Kommunikation zwischen Agenten und Speicher-Modell

Wie bereits erwähnt, kommunizieren Agenten über die gemeinsame Nutzung von Speicher. Im Web wird Speicher über die Methode [`postMessage()`](/de/docs/Web/API/Window/postMessage) geteilt. Der [Leitfaden zur Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) bietet einen Überblick darüber. Typischerweise werden Daten nur durch Wert übergeben (durch [strukturierte Duplizierung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)) und beinhalten daher keine Probleme mit der Nebenläufigkeit. Um Speicher zu teilen, muss ein {{jsxref("SharedArrayBuffer")}}-Objekt gepostet werden, das von mehreren Agenten gleichzeitig verwendet werden kann. Sobald zwei Agenten Zugriff auf denselben Speicher über einen `SharedArrayBuffer` teilen, können sie die Ausführungen über das {{jsxref("Atomics")}}-Objekt synchronisieren.

Es gibt zwei Möglichkeiten, auf den gemeinsamen Speicher zuzugreifen: über normale Speicherzugriffe (die nicht atomar sind) und über atomare Speicherzugriffe. Letztere sind [sequentiell konsistent](https://en.wikipedia.org/wiki/Sequential_consistency) (das bedeutet, dass es eine strenge Gesamtordnung von Ereignissen gibt, auf die sich alle Agenten im Cluster einigen), während die erstere ungeordnet ist (das bedeutet, dass es keine Ordnung gibt); JavaScript bietet keine Operationen mit anderen Ordnungsversprechen.

Die Spezifikation gibt die folgenden Richtlinien für Programmierer, die mit gemeinsamem Speicher arbeiten:

> Wir empfehlen, Programme rennbedingungsfrei zu halten, d.h. sicherzustellen, dass es unmöglich ist, dass nicht-atomare Vorgänge gleichzeitig auf derselben Speicherstelle stattfinden. Rennbedingungsfreie Programme haben Verflechtungssemantiken, bei denen jeder Schritt in der Evaluierungssemantik jedes Agenten untereinander verflochten ist. Für rennbedingungsfreie Programme ist es nicht notwendig, die Details des Speicher-Modells zu verstehen. Die Details werden wahrscheinlich keine Intuition vermitteln, die dabei hilft, ECMAScript besser zu schreiben.
>
> Allgemeiner gesagt, auch wenn ein Programm nicht rennbedingungsfrei ist, kann es vorhersehbares Verhalten haben, solange atomare Vorgänge nicht in Races involviert sind und die Vorgänge, die in Races involviert sind, alle dieselbe Zugriffsgröße haben. Der einfachste Weg, um sicherzustellen, dass Atomics nicht in Rennen verwickelt sind, besteht darin, sicherzustellen, dass unterschiedliche Speicherzellen von atomaren und nicht-atomaren Vorgängen verwendet werden und dass atomare Zugriffe unterschiedlicher Größen nicht gleichzeitig auf dieselben Zellen zugreifen. Effektiv sollte das Programm versuchen, den gemeinsam genutzten Speicher so stark wie möglich typisiert zu behandeln. Man kann sich immer noch nicht auf die Ordnung und das Timing von nicht-atomaren Zugriffen, die in Rennen stehen, verlassen, aber wenn Speicher stark typisiert behandelt wird, werden die rennbedingten Zugriffe nicht "zerreißen" (Teile ihrer Werte werden nicht durchgemischt).

### Nebenläufigkeit und Sicherstellung von Fortschritten

Wenn mehrere Agenten zusammenarbeiten, gilt das Versprechen des [niemals blockierenden](#niemals_blockieren) nicht immer. Ein Agent kann blockiert oder pausiert werden, während er darauf wartet, dass ein anderer Agent eine Aktion durchführt. Dies unterscheidet sich von einem Warten auf ein Versprechen im selben Agenten, da es den gesamten Agenten stoppt und keinen anderen Code in der Zwischenzeit ausführen lässt—in anderen Worten, es kann keine _Fortschritte_ machen.

Um Deadlocks zu verhindern, gibt es starke Einschränkungen, wann und welche Agenten blockiert werden können.

- Jeder nicht blockierte Agent mit einem dedizierten ausführenden Thread macht schließlich Fortschritte.
- In einer Gruppe von Agenten, die einen ausführenden Thread teilen, macht schließlich ein Agent Fortschritte.
- Ein Agent verursacht keinen anderen Agenten, blockiert zu werden, außer über explizite APIs, die das Blockieren ermöglichen.
- Nur bestimmte Agenten können blockiert werden. Im Web sind dies dedizierte Worker und gemeinsam genutzte Worker, jedoch nicht ähnlich-ursprungsbasierte Fenster oder Service-Worker.

Der Agenten-Cluster sorgt für ein gewisses Maß an Integrität über die Aktivität seiner Agenten im Falle externer Pausen oder Beendigungen:

- Ein Agent kann ohne sein Wissen oder Einverständnis angehalten oder fortgesetzt werden. Zum Beispiel kann das Navigieren weg von einem Fenster die Code-Ausführung aussetzen, aber seinen Zustand bewahren. Ein Agenten-Cluster darf jedoch nicht teilweise deaktiviert sein, um zu vermeiden, dass ein Agent verhungert, weil ein anderer Agent deaktiviert wurde. Zum Beispiel sind gemeinsam genutzte Worker niemals im gleichen Agenten-Cluster wie das erzeugende Fenster oder andere dedizierte Worker. Dies liegt daran, dass die Lebensdauer eines gemeinsam genutzten Workers unabhängig von Dokumenten ist: Wenn ein Dokument deaktiviert wird, während sein dedizierter Worker einen Lock hält, wird der gemeinsam genutzte Worker daran gehindert, den Lock zu erwerben, bis der dedizierte Worker wieder aktiviert wird, wenn überhaupt. In der Zwischenzeit verhungern andere Worker, die versuchen, über andere Fenster auf den gemeinsam genutzten Worker zuzugreifen.
- Ebenso kann ein Agent von Faktoren außerhalb des Clusters beendet werden. Zum Beispiel durch Betriebssysteme oder Benutzer, die einen Browser-Prozess töten, oder den Browser, der einen Agenten zwangsweise beendet, weil er zu viele Ressourcen verbraucht. In diesem Fall werden alle Agenten im Cluster beendet. (Die Spezifikation erlaubt auch eine zweite Strategie, die darin besteht, eine API bereitzustellen, die es ermöglicht, dass mindestens ein verbleibendes Mitglied des Clusters die Beendigung und den Agenten zu identifizieren, der beendet wurde, aber dies ist im Web nicht implementiert.)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Ereignisschleifen](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) im HTML-Standard
- [Was ist die Ereignisschleife?](https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop) in der Node.js-Dokumentation
