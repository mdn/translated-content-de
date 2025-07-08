---
title: JavaScript-Ausführungsmodell
slug: Web/JavaScript/Reference/Execution_model
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Diese Seite führt in die grundlegende Infrastruktur der JavaScript-Laufzeitumgebung ein. Das Modell ist größtenteils theoretisch und abstrakt, ohne plattform- oder implementierungsspezifische Details. Moderne JavaScript-Engines optimieren die beschriebenen Semantiken stark.

Diese Seite dient als Referenz. Es wird vorausgesetzt, dass Sie bereits mit dem Ausführungsmodell anderer Programmiersprachen wie C und Java vertraut sind. Es wird stark auf bestehende Konzepte in Betriebssystemen und Programmiersprachen verwiesen.

## Die Engine und der Host

Die Ausführung von JavaScript erfordert die Zusammenarbeit von zwei Softwarebestandteilen: der **JavaScript-Engine** und der **Host-Umgebung**.

Die JavaScript-Engine implementiert die [ECMAScript (JavaScript)-Sprache](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) und bietet die Kernfunktionalität. Sie nimmt Quellcode, parst ihn und führt ihn aus. Um jedoch mit der Außenwelt zu interagieren, etwa um sinnvolle Ausgaben zu erzeugen, externe Ressourcen anzusprechen oder sicherheits- oder leistungsbezogene Mechanismen zu implementieren, sind zusätzliche, umgebungsspezifische Mechanismen erforderlich, die von der Host-Umgebung bereitgestellt werden. Beispielsweise ist das HTML-DOM die Host-Umgebung, wenn JavaScript in einem Webbrowser ausgeführt wird. Node.js ist eine andere Host-Umgebung, die es erlaubt, JavaScript auf der Serverseite auszuführen.

Obwohl wir uns in dieser Referenz hauptsächlich auf Mechanismen konzentrieren, die in ECMAScript definiert sind, werden wir gelegentlich über Mechanismen sprechen, die in der HTML-Spezifikation definiert sind, und die oft von anderen Host-Umgebungen wie Node.js oder Deno nachgeahmt werden. Auf diese Weise können wir ein kohärentes Bild des JavaScript-Ausführungsmodells sowohl im Web als auch darüber hinaus zeichnen.

## Agent-Ausführungsmodell

In der JavaScript-Spezifikation wird jeder autonome Ausführer von JavaScript als **Agent** bezeichnet, der seine Einrichtungen zur Codeausführung aufrechterhält:

- **Heap** (von Objekten): Dies ist nur ein Name für einen großen (meist unstrukturierten) Speicherbereich. Er wird gefüllt, sobald im Programm Objekte erzeugt werden. Beachten Sie, dass im Fall von gemeinsam genutztem Speicher jeder Agent seinen eigenen Heap mit seiner eigenen Version eines {{jsxref("SharedArrayBuffer")}}-Objekts hat, aber der zugrunde liegende Speicher, den der Puffer repräsentiert, geteilt wird.
- [**Warteschlange** (von Jobs)](#job-warteschlange_und_ereignisschleife): Dies ist im HTML (und auch allgemein) als _Ereignisschleife_ bekannt, die asynchrones Programmieren in JavaScript ermöglicht, während es single-threaded bleibt. Es wird eine Warteschlange genannt, weil es im Allgemeinen ein First-in-First-out-Prinzip ist: Früher eingegangene Jobs werden vor späteren ausgeführt.
- [**Stack** (von Ausführungskontexten)](#stack_und_ausführungskontexte): Dies ist als _Aufruf-Stack_ bekannt und ermöglicht die Übertragung des Kontrollflusses durch das Betreten und Verlassen von Ausführungskontexten wie Funktionen. Es wird ein Stack genannt, weil es ein Last-in-First-out-Prinzip ist. Jeder Job beginnt, indem ein neuer Rahmen auf den (leeren) Stack geschoben wird, und endet durch Leeren des Stacks.

Dies sind drei verschiedene Datenstrukturen, die unterschiedliche Daten verfolgen. Wir werden die Warteschlange und den Stack in den folgenden Abschnitten ausführlicher vorstellen. Weitere Informationen dazu, wie Heap-Speicher zugewiesen und freigegeben wird, finden Sie unter [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management).

Jeder Agent ist analog zu einem Thread (beachten Sie, dass die zugrunde liegende Implementierung nicht unbedingt ein tatsächlicher Betriebssystem-Thread sein muss). Jeder Agent kann mehrere [Realms](#realms) besitzen (die 1-zu-1 mit globalen Objekten korrelieren), die sich gegenseitig synchron zugreifen können und daher in einem einzigen Ausführungsthread ausgeführt werden müssen. Ein Agent hat auch ein einzelnes Speicher-Modell, das angibt, ob es sich um ein Little-Endian handelt, ob es [synchron blockiert](#nebenläufigkeit_und_sicherstellung_des_fortschritts) werden kann, ob atomare Operationen [sperrfrei](/de/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree) sind, usw.

Ein Agent im Web kann einer der folgenden sein:

- Ein _Ähnlich-Herkunft-Fenster-Agent_, der verschiedene [`Window`](/de/docs/Web/API/Window)-Objekte enthält, die sich entweder direkt oder durch Verwendung von [`document.domain`](/de/docs/Web/API/Document/domain) potenziell erreichen können. Wenn das Fenster [herkunftsschlüssig](/de/docs/Web/API/Window/originAgentCluster) ist, können sich nur gleichartige Fenster gegenseitig erreichen.
- Ein _Dedizierter Arbeiter-Agent_, der einen einzelnen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) enthält.
- Ein _Gemeinsamer Arbeiter-Agent_, der einen einzelnen [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) enthält.
- Ein _Service-Arbeiter-Agent_, der einen einzelnen [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) enthält.
- Ein _Worklet-Agent_, der einen einzelnen [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope) enthält.

Mit anderen Worten, jeder Arbeiter erstellt seinen eigenen Agenten, während ein oder mehrere Fenster sich im selben Agenten befinden können—gewöhnlich ein Hauptdokument und seine gleichartig-herkunftsgleichen Iframes. In Node.js ist ein ähnliches Konzept als [worker threads](https://nodejs.org/api/worker_threads.html) verfügbar.

Das untenstehende Diagramm veranschaulicht das Ausführungsmodell von Agenten:

![Ein Diagramm bestehend aus zwei Agenten: eine HTML-Seite und ein Arbeiter. Jeder hat seinen eigenen Stack mit Ausführungskontexten, Heap mit Objekten und Warteschlange mit Jobs.](runtime-environment-diagram.svg)

## Realms

Jeder Agent besitzt einen oder mehrere **Realms**. Jeder JavaScript-Code ist mit einem Realm assoziiert, wenn er geladen wird, welcher derselbe bleibt, auch wenn er aus einem anderen Realm aufgerufen wird. Ein Realm besteht aus folgenden Informationen:

- Eine Liste intrinsischer Objekte wie `Array`, `Array.prototype`, usw.
- Global deklarierte Variablen, der Wert von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) und das globale Objekt
- Ein Cache von [Template Literal Arrays](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates), da die Auswertung eines gleichen Template-Literal-Ausdrucks immer dazu führt, dass das Tag das gleiche Array-Objekt erhält

Im Web entsprechen das Realm und das globale Objekt einander 1-zu-1. Das globale Objekt ist entweder ein [`Window`](/de/docs/Web/API/Window), ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) oder ein [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope). So zum Beispiel wird jeder `iframe` in einem anderen Realm ausgeführt, obwohl es sich im gleichen Agenten wie das übergeordnete Fenster befinden kann.

Realms werden gewöhnlich erwähnt, wenn man über die Identitäten von globalen Objekten spricht. Zum Beispiel benötigen wir Methoden wie {{jsxref("Array.isArray()")}} oder {{jsxref("Error.isError()")}}, weil ein Array, das in einem anderen Realm konstruiert wird, ein anderes Prototypen-Objekt hat als das `Array.prototype`-Objekt im aktuellen Realm, sodass `instanceof Array` fälschlicherweise `false` zurückgibt.

## Stack und Ausführungskontexte

Betrachten wir zuerst die synchrone Codeausführung. Jeder [Job](#job-warteschlange_und_ereignisschleife) beginnt mit dem Aufruf seines zugeordneten Rückrufs. Code innerhalb dieses Rückrufs kann Variablen erstellen, Funktionen aufrufen oder beenden. Jede Funktion muss ihre eigenen Umgebungen für Variablen und den Rücksprungort verfolgen. Dazu benötigt der Agent einen Stack zur Nachverfolgung der Ausführungskontexte. Ein **Ausführungskontext**, auch allgemein als _Stack-Frame_ bekannt, ist die kleinste Einheit der Ausführung. Er verfolgt die folgenden Informationen:

- Zustand der Codeauswertung
- Das Modul oder Skript, die Funktion (falls zutreffend) und der aktuell ausgeführte [Generator](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator), der diesen Code enthält
- Der aktuelle [Realm](#realms)
- {{Glossary("Binding", "Bindings")}}, einschließlich:
  - Variablen, die mit `var`, `let`, `const`, `function`, `class` usw. definiert sind
  - Private Bezeichner wie `#foo`, die nur im aktuellen Kontext gültig sind
  - `this`-Referenz

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

1. Wenn der Job startet, wird der erste Rahmen erstellt, wo die Variablen `foo`, `bar` und `baz` definiert werden. Es ruft `bar` mit dem Argument `7` auf.
2. Ein zweiter Rahmen wird für den Aufruf von `bar` erstellt, der Bindungen für den Parameter `x` und die lokale Variable `y` enthält. Zuerst wird die Multiplikation `x * y` durchgeführt, dann wird `foo` mit dem Ergebnis aufgerufen.
3. Ein dritter Rahmen wird für den Aufruf von `foo` erstellt, der Bindungen für den Parameter `b` und die lokale Variable `a` enthält. Zuerst wird die Addition `a + b + 11` durchgeführt, dann wird das Ergebnis zurückgegeben.
4. Wenn `foo` zurückkehrt, wird das oberste Rahmenelement aus dem Stack entfernt, und der Aufrufausdruck `foo(x * y)` wird durch den Rückgabewert aufgelöst. Die Ausführung wird fortgesetzt, was nur bedeutet, dass das Ergebnis zurückgegeben wird.
5. Wenn `bar` zurückkehrt, wird das oberste Rahmenelement aus dem Stack entfernt, und der Aufrufausdruck `bar(7)` wird durch den Rückgabewert aufgelöst. Dadurch wird `baz` mit dem Rückgabewert initialisiert.
6. Wir erreichen das Ende des Quellcodes des Jobs, sodass der Stackrahmen für den Einstiegspunkt aus dem Stack entfernt wird. Der Stack ist leer, daher wird der Job als abgeschlossen betrachtet.

### Generatoren und Wiedereintritt

Wenn ein Rahmen entfernt wird, ist er nicht unbedingt für immer verschwunden, da wir manchmal darauf zurückkommen müssen. Betrachten Sie zum Beispiel eine Generatorfunktion:

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

In diesem Fall wird beim Aufruf von `gen()` zuerst ein Ausführungskontext erstellt, der ausgesetzt wird—kein Code innerhalb von `gen` wird noch ausgeführt. Der Generator `g` speichert diesen Ausführungskontext intern. Der aktuell laufende Ausführungskontext bleibt der Einstiegspunkt. Wenn `g.next()` aufgerufen wird, wird der Ausführungskontext für `gen` auf den Stack gelegt und der Code innerhalb von `gen` bis zum `yield`-Ausdruck ausgeführt. Dann wird der Generator-Ausführungskontext ausgesetzt und aus dem Stack entfernt, was die Kontrolle zurück an den Einstiegspunkt gibt. Wenn `g.next()` erneut aufgerufen wird, wird der Ausführungskontext des Generators wieder auf den Stack gelegt und der Code innerhalb von `gen` wird von dort fortgesetzt, wo er aufgehört hat.

### Tail Calls

Ein Mechanismus, der in der Spezifikation definiert ist, ist der _Proper Tail Call_ (PTC). Ein Funktionsaufruf ist ein Tail Call, wenn der Aufrufer nach dem Aufruf nichts anderes tut, als den Wert zurückzugeben:

```js
function f() {
  return g();
}
```

In diesem Fall ist der Aufruf von `g` ein Tail Call. Wenn ein Funktionsaufruf in Tail-Position ist, ist die Engine verpflichtet, den aktuellen Ausführungskontext zu verwerfen und ihn durch den Kontext des Tail Calls zu ersetzen, anstatt einen neuen Rahmen für den `g()`-Aufruf zu erstellen. Dies bedeutet, dass Tail-Rekursion nicht den Stackgrößenbeschränkungen unterliegt:

```js
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc);
}
```

In der Realität verursacht das Verwerfen des aktuellen Rahmens Debugging-Probleme, da wenn `g()` einen Fehler auslöst, `f` nicht mehr im Stack ist und nicht im Stack-Trace erscheint. Derzeit implementiert nur Safari (JavaScriptCore) PTC, und sie haben eine spezielle [Infrastruktur entwickelt](https://webkit.org/blog/6240/ecmascript-6-proper-tail-calls-in-webkit/), um das Debugging-Problem zu adressieren.

### Closures

Ein weiteres interessantes Phänomen im Zusammenhang mit Variablenscoping und Funktionsaufrufen sind [Closures](/de/docs/Web/JavaScript/Guide/Closures). Wann immer eine Funktion erstellt wird, memoriert sie intern auch die Variablenbindungen des aktuell laufenden Ausführungskontextes. Diese Variablenbindungen können dann den Ausführungskontext überleben.

```js
let f;
{
  let x = 10;
  f = () => x;
}
console.log(f()); // logs 10
```

## Job-Warteschlange und Ereignisschleife

Ein Agent ist ein Thread, was bedeutet, dass der Interpreter nur eine Anweisung zu einem Zeitpunkt verarbeiten kann. Wenn der Code vollständig synchron ist, ist das in Ordnung, denn wir können immer Fortschritte machen. Aber wenn der Code asynchrone Aktionen ausführen muss, können wir nicht vorankommen, solange diese Aktion nicht abgeschlossen ist. Es wäre jedoch nachteilig für die Benutzererfahrung, wenn das das ganze Programm stoppt—die Natur von JavaScript als Web-Skriptsprache erfordert, dass es [niemals blockiert](#niemals_blockieren). Daher wird der Code, der die Fertigstellung dieser asynchronen Aktion handhabt, als Rückruf definiert. Dieser Rückruf definiert einen **Job**, der in eine **Job-Warteschlange**—oder in HTML-Terminologie, eine Ereignisschleife—gelegt wird, sobald die Aktion abgeschlossen ist.

Jedes Mal zieht der Agent einen Job aus der Warteschlange und führt ihn aus. Wenn der Job ausgeführt wird, kann er mehr Jobs erstellen, die ans Ende der Warteschlange hinzugefügt werden. Jobs können auch durch den Abschluss asynchroner Plattformmechanismen hinzugefügt werden, wie Timer, I/O und Ereignisse. Ein Job wird als abgeschlossen betrachtet, wenn der [Stack](#stack_und_ausführungskontexte) leer ist; dann wird der nächste Job aus der Warteschlange gezogen. Jobs werden möglicherweise nicht mit einheitlicher Priorität gezogen—zum Beispiel trennt HTML-Ereignisschleifen Jobs in zwei Kategorien: _Tasks_ und _Microtasks_. Microtasks haben höhere Priorität und die Microtask-Warteschlange wird zuerst geleert, bevor die Task-Warteschlange gezogen wird. Weitere Informationen finden Sie im [HTML-Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide). Wenn die Job-Warteschlange leer ist, wartet der Agent darauf, dass weitere Jobs hinzugefügt werden.

### "Bis-zum-Abschluss"-Ausführung

Jeder Job wird vollständig abgearbeitet, bevor ein anderer Job abgearbeitet wird. Dies bietet einige angenehme Eigenschaften beim Nachdenken über Ihr Programm, einschließlich der Tatsache, dass, wenn eine Funktion ausgeführt wird, sie nicht unterbrochen werden kann und vollständig ausgeführt wird, bevor ein anderer Code ausgeführt wird (und Daten ändern kann, mit denen die Funktion arbeitet). Dies unterscheidet sich von C, beispielsweise, wo eine Funktion, die in einem Thread ausgeführt wird, jederzeit vom Laufzeitsystem angehalten werden kann, um einen anderen Code in einem anderen Thread auszuführen.

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

In diesem Beispiel erstellen wir ein bereits gelöstes Versprechen, was bedeutet, dass jeder angehängte Rückruf sofort als Jobs geplant wird. Die beiden Rückrufe scheinen eine Renndiskrepanz zu verursachen, aber tatsächlich ist die Ausgabe vollständig vorhersehbar: `1` und `2` werden in Reihenfolge protokolliert. Dies liegt daran, dass jeder Job bis zum Abschluss ausgeführt wird, bevor der nächste ausgeführt wird, sodass die Gesamtreihenfolge immer `i += 1; console.log(i); i += 1; console.log(i);` ist und niemals `i += 1; i += 1; console.log(i); console.log(i);`.

Ein Nachteil dieses Modells ist, dass, wenn ein Job zu lange dauert, um abgeschlossen zu werden, die Webanwendung nicht in der Lage ist, Benutzerinteraktionen wie Klicken oder Scrollen zu verarbeiten. Der Browser mildert dies mit dem Dialog "Ein Skript dauert zu lange, um ausgeführt zu werden". Eine gute Praxis besteht darin, die Jobverarbeitung kurz zu halten und wenn möglich einen Job in mehrere Jobs zu unterteilen.

### Niemals blockieren

Ein weiteres wichtiges Versprechen des Ereignisschleifenmodells besteht darin, dass die Ausführung von JavaScript niemals blockiert. Die Behandlung von I/O wird typischerweise über Ereignisse und Rückrufe durchgeführt, sodass die Anwendung während des Wartens auf eine [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Anfrage oder eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage weiterhin andere Dinge wie Benutzereingaben verarbeiten kann. Der Code, der nach Abschluss einer asynchronen Aktion ausgeführt wird, wird immer als Rückruffunktion angegeben (zum Beispiel der Promise-{{jsxref("Promise/then", "then()")}}-Handler, die Rückruffunktion in `setTimeout()` oder der Ereignishandler), der einen Job definiert, der in die Job-Warteschlange eingefügt wird, sobald die Aktion abgeschlossen ist.

Natürlich erfordert das Versprechen "niemals-blockieren", dass die Plattform-API von Natur aus asynchron ist, jedoch existieren einige Legacy-Ausnahmen wie `alert()` oder synchrones XHR. Es wird als gute Praxis angesehen, diese zu vermeiden, um die Reaktionsfähigkeit der Anwendung sicherzustellen.

## Agentencluster und Speichernutzung

Mehrere Agenten können über Speichernutzung kommunizieren und bilden so einen **Agentencluster**. Agenten befinden sich nur dann im selben Cluster, wenn sie Speicher teilen können. Es gibt keinen eingebauten Mechanismus, mit dem zwei Agentencluster Informationen austauschen können, sodass sie als völlig isolierte Ausführungsmodelle betrachtet werden können.

Beim Erstellen eines Agenten (wie durch das Erstellen eines Arbeiters), gibt es einige Kriterien dafür, ob er sich im gleichen Cluster wie der aktuelle Agent befindet oder ob ein neuer Cluster erstellt wird. Beispielsweise befinden sich die folgenden Paare von globalen Objekten im selben Agentencluster und können daher Speicher miteinander teilen:

- Ein `Window`-Objekt und ein dedizierter Arbeiter, den es erstellt hat.
- Ein Arbeiter (jeglichen Typs) und ein dedizierter Arbeiter, den es erstellt hat.
- Ein `Window`-Objekt A und das `Window`-Objekt eines gleichartigen Herkunfts-Mediendocuments, das von einem `iframe`-Element erstellt wurde, das A erstellt hat.
- Ein `Window`-Objekt und ein gleichartiges Herkunfts-`Window`-Objekt, das es geöffnet hat.
- Ein `Window`-Objekt und ein Worklet, das es erstellt hat.

Die folgenden Paare von globalen Objekten befinden sich nicht im selben Agentencluster und können daher keinen Speicher teilen:

- Ein `Window`-Objekt und ein gemeinsam genutzter Arbeiter, den es erstellt hat.
- Ein Arbeiter (jeglichen Typs) und ein gemeinsam genutzter Arbeiter, den es erstellt hat.
- Ein `Window`-Objekt und ein Service-Arbeiter, den es erstellt hat.
- Ein `Window`-Objekt A und das `Window`-Objekt eines `iframe`-Elements, dass A erstellt hat, das nicht die gleiche Ursprungsdomäne wie A haben kann.
- Zwei `Window`-Objekte ohne Eröffnungs- oder Vorfahren-Beziehung. Dies gilt auch, wenn die beiden `Window`-Objekte gleichen Ursprung haben.

Für den genauen Algorithmus lesen Sie bitte die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-agent-cluster-formalism).

### Kommunikation über Agenten hinweg und Speicher-Modell

Wie bereits erwähnt, kommunizieren Agenten über Speichernutzung. Im Web erfolgt die Speichernutzung über die Methode [`postMessage()`](/de/docs/Web/API/Window/postMessage). Der [Leitfaden zur Nutzung von Webarbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) bietet einen Überblick darüber. Typischerweise werden Daten nur wertmäßig (über [strukturiertes Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)) übergeben und daher keine Konkurrenzkomplikationen einbezogen. Um Speicher zu teilen, muss ein {{jsxref("SharedArrayBuffer")}}-Objekt gepostet werden, das gleichzeitig von mehreren Agenten zugegriffen werden kann. Sobald zwei Agenten über ein `SharedArrayBuffer` Zugriff auf denselben Speicher teilen, können sie die Ausführungen über das {{jsxref("Atomics")}}-Objekt synchronisieren.

Es gibt zwei Möglichkeiten, auf gemeinsamen Speicher zuzugreifen: über normalen Speicherzugriff (der nicht atomar ist) und über atomaren Speicherzugriff. Letzterer ist [sequenziell konsistent](https://en.wikipedia.org/wiki/Sequential_consistency) (was bedeutet, dass es eine strikte ganzheitliche Ordnung von Ereignissen gibt, die von allen Agenten im Cluster vereinbart wird), während der erstgenannte ungeordnet ist (was bedeutet, dass keine Ordnung existiert); JavaScript bietet keine Operationen mit anderen Ordnungsversprechen.

Die Spezifikation bietet folgende Richtlinien für Programmierer, die mit gemeinsam genutztem Speicher arbeiten:

> Wir empfehlen, Programme rennenfrei zu halten, d.h. es unmöglich zu machen, dass gleichzeitig nicht-atomische Operationen auf derselben Speicheradresse stattfinden. Rennenfreie Programme haben eine Zwischenreihensemantik, bei der jeder Schritt in den Bewertungssemantiken jedes Agenten mit denen der anderen Agenten verwebt ist. Bei rennenfreien Programmen ist es nicht erforderlich, die Details des Speicher-Modells zu verstehen. Die Details sind unwahrscheinlich, um eine Intuition aufzubauen, die bei der besseren Programmierung von ECMAScript hilft.
>
> Allgemeiner ist, dass selbst wenn ein Programm nicht rennenfrei ist, es vorhersehbares Verhalten aufweisen kann, solange atomare Operationen nicht in irgendwelche Datenrennen verwickelt sind und die rennenden Operationen alle die gleiche Zugriffgröße haben. Der einfachste Weg, um zu verhindern, dass Atomics in Rennen involviert sind, besteht darin sicherzustellen, dass verschiedene Speicherzellen von atomaren und nicht-atomaren Operationen verwendet werden und dass atomare Zugriffe unterschiedlicher Größe nicht gleichzeitig auf dieselben Zellen zugreifen. Im Wesentlichen sollte das Programm versuchen, gemeinsam genutzten Speicher so stark typisiert wie möglich zu behandeln. Man kann sich immer noch nicht auf die Ordnungen und das Timing von nicht-atomischen Zugängen verlassen, die rennen, aber wenn der Speicher stark typisiert behandelt wird, werden rennende Zugriffe nicht "reißen" (Teile ihrer Werte werden nicht vermischt).

### Nebenläufigkeit und Sicherstellung des Fortschritts

Wenn mehrere Agenten zusammenarbeiten, gilt die [niemals-blockieren](#niemals_blockieren)-Garantie nicht immer. Ein Agent kann _blockiert_, oder pausiert, werden, während er darauf wartet, dass ein anderer Agent eine Aktion ausführt. Dies unterscheidet sich vom Warten auf ein Versprechen im gleichen Agenten, da es den gesamten Agenten anhält und keinen anderen Code in der Zwischenzeit ausgeführt werden lässt—in anderen Worten, es kann keinen _Fortschritt machen_.

Um Deadlocks zu verhindern, gibt es einige strenge Beschränkungen, wann und welche Agenten blockiert werden können.

- Jeder nicht blockierte Agent mit einem dedizierten Ausführungsthread macht schließlich Fortschritte.
- In einem Satz von Agenten, die einen Ausführungsthread teilen, macht schließlich ein Agent Fortschritte.
- Ein Agent blockiert keinen anderen Agenten, es sei denn, es erfolgt über explizite APIs, die Blockierungen ermöglichen.
- Nur bestimmte Agenten können blockiert werden. Im Web schließen diese dedizierte Arbeiter und gemeinsam genutzte Arbeiter ein, aber nicht ähnliche Herkunftsfenster oder Service-Arbeiter.

Der Agentencluster sorgt für ein gewisses Maß an Integrität über die Aktivität seiner Agenten im Fall von externen Pausen oder Beendigungen:

- Ein Agent kann pausiert oder fortgesetzt werden, ohne sein Wissen oder seine Mitarbeit. Beispielsweise kann das Navigieren weg von einem Fenster die Codeausführung unterbrechen, aber seinen Zustand bewahren. Ein Agentencluster darf jedoch nicht teilweise deaktiviert werden, um zu vermeiden, dass ein Agent verhungert, weil ein anderer Agent deaktiviert wurde. Zum Beispiel befinden sich gemeinsam genutzte Arbeiter niemals im gleichen Agentencluster wie das Erstellerfenster oder andere dedizierte Arbeiter. Dies liegt daran, dass die Lebensdauer eines gemeinsam genutzten Arbeiters unabhängig von Dokumenten ist: Wenn ein Dokument deaktiviert wird, während sein dedizierter Arbeiter ein Schloss hält, wird der gemeinsam genutzte Arbeiter daran gehindert, das Schloss zu erwerben, bis der dedizierte Arbeiter wieder aktiviert wird, falls überhaupt. Währenddessen würden andere Arbeiter, die versuchen, von anderen Fenstern aus auf den gemeinsam genutzten Arbeiter zuzugreifen, verhungern.
- Ebenso kann ein Agent durch externe Faktoren des Clusters beendet werden. Beispielsweise durch Betriebssysteme oder Benutzer, die einen Browser-Prozess beenden, oder durch den Browser, der einen Agenten zwangsweise beendet, weil er zu viele Ressourcen verbraucht. In diesem Fall werden alle Agenten im Cluster beendet. (Die Spezifikation erlaubt auch eine zweite Strategie, die ein API ist, das es erlaubt, dass mindestens ein weiteres Mitglied des Clusters die Beendigung und den Agenten, der beendet wurde, identifiziert, aber dies wird im Web nicht implementiert.)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Ereignisschleifen](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) im HTML-Standard
- [Was ist die Ereignisschleife?](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop) in den Node.js-Dokumenten
