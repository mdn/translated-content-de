---
title: JavaScript-Ausführungsmodell
slug: Web/JavaScript/Reference/Execution_model
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Diese Seite führt in die grundlegende Infrastruktur der JavaScript-Laufzeitumgebung ein. Das Modell ist weitgehend theoretisch und abstrakt, ohne plattformspezifische oder implementierungsspezifische Details. Moderne JavaScript-Engines optimieren die beschriebenen Semantiken stark.

Diese Seite dient als Referenz. Es wird davon ausgegangen, dass Sie bereits mit dem Ausführungsmodell anderer Programmiersprachen wie C und Java vertraut sind. Es wird stark auf bestehende Konzepte in Betriebssystemen und Programmiersprachen verwiesen.

## Die Engine und der Host

Die Ausführung von JavaScript erfordert die Zusammenarbeit von zwei Softwareteilen: der **JavaScript-Engine** und der **Host-Umgebung**.

Die JavaScript-Engine implementiert die [ECMAScript (JavaScript) Sprache](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) und stellt die grundlegende Funktionalität bereit. Sie nimmt Quellcode, analysiert ihn und führt ihn aus. Um jedoch mit der Außenwelt zu interagieren, z. B. um sinnvolle Ausgaben zu erzeugen, Schnittstellen zu externen Ressourcen zu schaffen oder Sicherheits- oder Leistungsmechanismen zu implementieren, benötigen wir zusätzliche, umgebungsspezifische Mechanismen, die von der Host-Umgebung bereitgestellt werden. Zum Beispiel ist das HTML-DOM die Host-Umgebung, wenn JavaScript in einem Webbrowser ausgeführt wird. Node.js ist eine weitere Host-Umgebung, die es erlaubt, JavaScript auf der Serverseite auszuführen.

Während wir uns in dieser Referenz hauptsächlich auf die in ECMAScript definierten Mechanismen konzentrieren, werden wir gelegentlich über Mechanismen sprechen, die in der HTML-Spezifikation definiert sind und oft von anderen Host-Umgebungen wie Node.js oder Deno nachgeahmt werden. Auf diese Weise können wir ein kohärentes Bild des JavaScript-Ausführungsmodells sowohl im Web als auch darüber hinaus vermitteln.

## Agentenausführungsmodell

In der JavaScript-Spezifikation wird jeder autonome Ausführer von JavaScript als **Agent** bezeichnet, der seine Einrichtungen zur Code-Ausführung verwaltet:

- **Heap** (von Objekten): Dies ist einfach ein Name, um einen großen (meist unstrukturierten) Speicherbereich zu bezeichnen. Dieser wird gefüllt, wenn Objekte im Programm erstellt werden. Beachten Sie, dass im Fall von gemeinsam genutztem Speicher jeder Agent seinen eigenen Heap mit seiner eigenen Version eines {{jsxref("SharedArrayBuffer")}}-Objekts hat, aber der zugrunde liegende Speicher, den der Puffer repräsentiert, geteilt wird.
- [**Queue** (von Jobs)](#job-warteschlange_und_ereignisschleife): Dies wird in HTML (und auch allgemein) als _Ereignisschleife_ bezeichnet, die asynchrones Programmieren in JavaScript ermöglicht, während es einthreading bleibt. Sie wird als Warteschlange bezeichnet, weil sie im Allgemeinen first-in-first-out ist: frühere Jobs werden vor späteren ausgeführt.
- [**Stack** (von Ausführungskontexten)](#stack_und_ausführungskontexte): Dies ist das, was als _Aufrufstapel_ bekannt ist und die Übertragung des Kontrollflusses durch Ein- und Ausstieg aus Ausführungskontexten wie Funktionen ermöglicht. Es wird als Stack bezeichnet, da es last-in-first-out ist. Jeder Job beginnt, indem er einen neuen Frame auf den (leeren) Stack schiebt, und endet, indem der Stack geleert wird.

Dies sind drei unterschiedliche Datenstrukturen, die unterschiedliche Daten nachverfolgen. Wir werden die Queue und den Stack in den folgenden Abschnitten genauer vorstellen. Um mehr darüber zu erfahren, wie Speicherheap zugewiesen und freigegeben wird, sehen Sie sich die [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management) an.

Jeder Agent ist analog zu einem Thread (beachten Sie, dass die zugrunde liegende Implementierung möglicherweise kein tatsächlicher Betriebssystem-Thread ist oder nicht). Jeder Agent kann mehrere [Realms](#realms) besitzen (die 1-zu-1 mit globalen Objekten korrelieren), die synchron aufeinander zugreifen können und daher in einem einzigen Ausführungsthread laufen müssen. Ein Agent hat auch ein einzelnes Speichermodell, das angibt, ob es wenig-endian ist, ob es [synchron blockiert](#parallelverarbeitung_und_sicherstellung_des_fortschritts) werden kann, ob atomare Operationen [sperrfrei](/de/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree) sind usw.

Ein Agent im Web kann einer der folgenden sein:

- Ein _Agent für ähnliche Herkunftsfenster_, der verschiedene [`Window`](/de/docs/Web/API/Window)-Objekte enthält, die potenziell aufeinander zugreifen können, entweder direkt oder durch Verwendung von [`document.domain`](/de/docs/Web/API/Document/domain). Wenn das Fenster [ursprungsbasiert](/de/docs/Web/API/Window/originAgentCluster) ist, können nur gleichursprüngliche Fenster aufeinander zugreifen.
- Ein _Dedizierter Worker-Agent_ mit einem einzigen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope).
- Ein _Gemeinsamer Worker-Agent_ mit einem einzigen [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope).
- Ein _Service Worker-Agent_ mit einem einzigen [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope).
- Ein _Worklet-Agent_ mit einem einzigen [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope).

Mit anderen Worten, jeder Worker erstellt seinen eigenen Agenten, während ein oder mehrere Fenster innerhalb desselben Agenten sein können – in der Regel ein Hauptdokument und seine ähnliche Herkunfts-Iframes. In Node.js ist ein ähnliches Konzept namens [Arbeitsthreads](https://nodejs.org/api/worker_threads.html) verfügbar.

Das folgende Diagramm illustriert das Ausführungsmodell von Agenten:

![Ein Diagramm bestehend aus zwei Agenten: eine HTML-Seite und ein Worker. Jeder hat seinen eigenen Stack mit Ausführungskontexten, Heap mit Objekten und Queue mit Jobs.](runtime-environment-diagram.svg)

## Realms

Jeder Agent besitzt ein oder mehrere **Realms**. Jeder JavaScript-Code ist mit einem Realm verbunden, wenn er geladen wird, was auch dann gleich bleibt, wenn er aus einem anderen Realm aufgerufen wird. Ein Realm besteht aus den folgenden Informationen:

- Eine Liste von intrinsischen Objekten wie `Array`, `Array.prototype` usw.
- Global deklarierte Variablen, der Wert von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) und das globale Objekt
- Ein Cache von [Template-String-Arrays](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates), da die Auswertung desselben getaggten Template-String-Ausdrucks immer dazu führt, dass der Tag dasselbe Array-Objekt erhält

Im Web stehen das Realm und das globale Objekt in einer 1-zu-1-Korrespondenz. Das globale Objekt ist entweder ein [`Window`](/de/docs/Web/API/Window), ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) oder ein [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope). Zum Beispiel führt jedes `iframe` in einem anderen Realm aus, obwohl es im selben Agenten wie das Elternfenster sein kann.

Realms werden häufig erwähnt, wenn es um die Identitäten globaler Objekte geht. Zum Beispiel benötigen wir Methoden wie {{jsxref("Array.isArray()")}} oder {{jsxref("Error.isError()")}}, weil ein in einem anderen Realm erstelltes Array ein anderes Prototypobjekt als das `Array.prototype`-Objekt im aktuellen Realm haben wird, sodass `instanceof Array` fälschlicherweise `false` zurückgibt.

## Stack und Ausführungskontexte

Betrachten wir zunächst die synchrone Code-Ausführung. Jeder [Job](#job-warteschlange_und_ereignisschleife) wird durch Aufrufen seines zugehörigen Rückrufs gestartet. Code innerhalb dieses Rückrufs kann Variablen erstellen, Funktionen aufrufen oder beendet werden. Jede Funktion muss ihre eigenen Variablenumgebungen und den Rücksprungpunkt speichern. Um damit umzugehen, benötigt der Agent einen Stack, um die Ausführungskontexte nachzuverfolgen. Ein **Ausführungskontext**, auch allgemein als _Stack-Frame_ bekannt, ist die kleinste Ausführungseinheit. Es verfolgt die folgenden Informationen:

- Codeauswertungszustand
- Das Modul oder Skript, die Funktion (falls zutreffend) und der aktuell ausführende [Generator](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator), der diesen Code enthält
- Der aktuelle [Realm](#realms)
- {{Glossary("Binding", "Bindings")}}, einschließlich:
  - Mit `var`, `let`, `const`, `function`, `class` usw. definierte Variablen
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

1. Wenn der Job beginnt, wird der erste Frame erstellt, in dem die Variablen `foo`, `bar` und `baz` definiert sind. Er ruft `bar` mit dem Argument `7` auf.
2. Ein zweiter Frame wird für den `bar`-Aufruf erstellt, der Bindungen für den Parameter `x` und die lokale Variable `y` enthält. Zuerst wird die Multiplikation `x * y` durchgeführt und dann `foo` mit dem Ergebnis aufgerufen.
3. Ein dritter Frame wird für den `foo`-Aufruf erstellt, der Bindungen für den Parameter `b` und die lokale Variable `a` enthält. Zuerst wird die Addition `a + b + 11` durchgeführt und dann das Ergebnis zurückgegeben.
4. Wenn `foo` zurückkehrt, wird das oberste Frame-Element aus dem Stack entfernt, und der Ausdruck `foo(x * y)` löst sich in den Rückgabewert auf. Dann wird die Ausführung fortgesetzt, was nur bedeutet, dieses Ergebnis zurückzugeben.
5. Wenn `bar` zurückkehrt, wird das oberste Frame-Element aus dem Stack entfernt, und der Ausdruck `bar(7)` löst sich in den Rückgabewert auf. Dies initialisiert `baz` mit dem Rückgabewert.
6. Wir erreichen das Ende des Quellcodes des Jobs, sodass der Stack-Frame für den Einstiegspunkt aus dem Stack entfernt wird. Der Stack ist leer, also wird der Job als abgeschlossen betrachtet.

### Generatoren und Wiedereintritt

Wenn ein Frame entfernt wird, ist es nicht unbedingt für immer weg, da wir manchmal zu ihm zurückkehren müssen. Betrachten Sie zum Beispiel eine Generatorfunktion:

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

In diesem Fall erstellt der Aufruf von `gen()` zuerst einen Ausführungskontext, der ausgesetzt wird – es wird kein Code innerhalb von `gen` ausgeführt. Der Generator `g` speichert diesen Ausführungskontext intern. Der aktuell laufende Ausführungskontext bleibt der Einstiegspunkt. Wenn `g.next()` aufgerufen wird, wird der Ausführungskontext für `gen` auf den Stack geschoben, und der Code innerhalb von `gen` wird bis zum `yield`-Ausdruck ausgeführt. Dann wird der Generator-Ausführungskontext ausgesetzt und aus dem Stack entfernt, wodurch die Kontrolle an den Einstiegspunkt zurückgegeben wird. Wenn `g.next()` erneut aufgerufen wird, wird der Generator-Ausführungskontext wieder auf den Stack geschoben, und der Code innerhalb von `gen` wird an der Stelle fortgesetzt, an der er unterbrochen wurde.

### Tail-Calls

Ein im Standard definiertes Mechanismus ist der _echte Tail-Call_ (PTC). Ein Funktionsaufruf ist ein Tail-Call, wenn der Aufrufer nach dem Aufruf nichts anderes tut, außer den Wert zurückzugeben:

```js
function f() {
  return g();
}
```

In diesem Fall ist der Aufruf von `g` ein Tail-Call. Wenn ein Funktionsaufruf in Tail-Position steht, muss die Engine den aktuellen Ausführungskontext verwerfen und ihn durch den Kontext des Tail-Calls ersetzen, anstelle eines neuen Frames für den `g()`-Aufruf zu pushen. Dies bedeutet, dass Tail-Rekursion nicht den Stapelgrößenbegrenzungen unterliegt:

```js
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc);
}
```

In der Praxis verursacht das Verwerfen des aktuellen Frames Debugging-Probleme, da wenn `g()` einen Fehler auslöst, `f` nicht mehr im Stack ist und nicht im Stack-Trace erscheint. Derzeit implementiert nur Safari (JavaScriptCore) PTC, und sie haben einige [spezifische Infrastruktur](https://webkit.org/blog/6240/ecmascript-6-proper-tail-calls-in-webkit/) entwickelt, um das Debugging-Problem zu adressieren.

### Closures

Ein weiteres interessantes Phänomen im Zusammenhang mit dem Variablescopen und Funktionsaufrufen sind [Closures](/de/docs/Web/JavaScript/Guide/Closures). Wann immer eine Funktion erstellt wird, speichert sie intern auch die Variablenbindungen des aktuell laufenden Ausführungskontexts. Diese Variablenbindungen können dann den Ausführungskontext überdauern.

```js
let f;
{
  let x = 10;
  f = () => x;
}
console.log(f()); // logs 10
```

## Job-Warteschlange und Ereignisschleife

Ein Agent ist ein Thread, was bedeutet, dass der Interpreter nur eine Anweisung gleichzeitig verarbeiten kann. Wenn der gesamte Code synchron ist, ist dies in Ordnung, da wir immer Fortschritte machen können. Aber wenn der Code eine asynchrone Aktion durchführen muss, können wir keinen Fortschritt machen, solange diese Aktion nicht abgeschlossen ist. Es wäre jedoch nachteilig für die Benutzererfahrung, wenn das das ganze Programm anhalten würde – die Natur von JavaScript als Web-Skriptsprache erfordert, dass es [niemals blockiert](#niemals_blockierend). Daher wird der Code, der die Vollendung dieser asynchronen Aktion behandelt, als Rückruf definiert. Dieser Rückruf definiert einen **Job**, der in eine **Job-Warteschlange** – oder in HTML-Terminologie eine Ereignisschleife – aufgenommen wird, sobald die Aktion abgeschlossen ist.

Jedes Mal zieht der Agent einen Job aus der Warteschlange und führt ihn aus. Wenn der Job ausgeführt wird, kann er weitere Jobs erstellen, die am Ende der Warteschlange hinzugefügt werden. Jobs können auch durch den Abschluss von asynchronen Plattformmechanismen, wie Timern, I/O und Ereignissen, hinzugefügt werden. Ein Job gilt als abgeschlossen, wenn der [Stack](#stack_und_ausführungskontexte) leer ist; dann wird der nächste Job aus der Warteschlange gezogen. Jobs können nicht mit gleichmäßiger Priorität gezogen werden – zum Beispiel teilen HTML-Ereignisschleifen Jobs in zwei Kategorien auf: _Tasks_ und _Microtasks_. Microtasks haben höhere Priorität und die Microtask-Warteschlange wird zuerst geleert, bevor die Task-Warteschlange gezogen wird. Für weitere Informationen lesen Sie den [HTML Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide). Wenn die Job-Warteschlange leer ist, wartet der Agent darauf, dass weitere Jobs hinzugefügt werden.

### "Run-to-completion"

Jeder Job wird vollständig verarbeitet, bevor ein anderer Job verarbeitet wird. Dies bietet einige angenehme Eigenschaften, wenn Sie über Ihr Programm nachdenken, einschließlich der Tatsache, dass immer, wenn eine Funktion läuft, sie nicht unterbrochen werden kann und vollständig läuft, bevor ein anderer Code läuft (und Daten, die die Funktion manipuliert, ändern kann). Dies unterscheidet sich von C, wo eine Funktion, die in einem Thread läuft, jederzeit vom Laufzeitsystem angehalten werden kann, um in einem anderen Thread einen anderen Code auszuführen.

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

In diesem Beispiel erstellen wir ein bereits erfülltes Promise, was bedeutet, dass jeder angehängte Rückruf sofort als Jobs geplant wird. Die beiden Rückrufe scheinen ein Rennen zu verursachen, aber tatsächlich ist die Ausgabe vollständig vorhersehbar: `1` und `2` werden in der Reihenfolge ausgegeben. Dies liegt daran, dass jeder Job vollständig ausgeführt wird, bevor der nächste ausgeführt wird, sodass die Gesamtreihenfolge immer `i += 1; console.log(i); i += 1; console.log(i);` ist und nie `i += 1; i += 1; console.log(i); console.log(i);`.

Ein Nachteil dieses Modells ist, dass eine Webanwendung nicht in der Lage ist, Benutzerinteraktionen wie Klicken oder Scrollen zu verarbeiten, wenn ein Job zu lange dauert, um abgeschlossen zu werden. Der Browser mildert dies mit dem "Ein Skript braucht zu lange, um ausgeführt zu werden"-Dialog ab. Eine gute Praxis ist, die Verarbeitung von Jobs kurz zu halten und, wenn möglich, einen Job in mehrere Jobs zu unterteilen.

### Niemals blockierend

Ein weiteres wichtiges Versprechen des Ereignisschleifenmodells ist, dass die JavaScript-Ausführung niemals blockiert. Die Behandlung von I/O wird in der Regel über Ereignisse und Rückrufe durchgeführt, sodass die Anwendung andere Dinge wie Benutzereingaben verarbeiten kann, während auf das Ergebnis einer [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Abfrage oder eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Anrufs gewartet wird. Der Code, der nach dem Abschluss einer asynchronen Aktion ausgeführt wird, wird immer als Rückruffunktion bereitgestellt (z. B. der Handler {{jsxref("Promise/then", "then()")}}, die Rückruffunktion in `setTimeout()` oder der Ereignishandler), die einen Job definiert, der nach Abschluss der Aktion in die Job-Warteschlange aufgenommen wird.

Natürlich erfordert die Garantie "niemals blockierend" die Eigenasynchronität der Plattform-API, aber es gibt einige Legacy-Ausnahmen wie `alert()` oder das synchrone XHR. Es gilt als gute Praxis, sie zu vermeiden, um die Reaktionsfähigkeit der Anwendung sicherzustellen.

## Agentencluster und Speicheraustausch

Mehrere Agenten können über Speicheraustausch kommunizieren und so einen **Agentencluster** bilden. Agenten befinden sich innerhalb desselben Clusters, wenn und nur wenn sie Speicher teilen können. Es gibt keine eingebaute Mechanismus für zwei Agentencluster, irgendwelche Informationen auszutauschen, daher können sie als vollständig isolierte Ausführungsmodelle betrachtet werden.

Beim Erstellen eines Agenten (z. B. durch das Starten eines Workers) gibt es einige Kriterien dafür, ob er im selben Cluster wie der aktuelle Agent ist oder ein neuer Cluster erstellt wird. Zum Beispiel sind die folgenden Paare von globalen Objekten jeweils innerhalb desselben Agentenclusters und können daher Speicher miteinander teilen:

- Ein `Window`-Objekt und ein dedizierter Worker, den es erstellt hat.
- Ein Worker (jeglicher Art) und ein dedizierter Worker, den es erstellt hat.
- Ein `Window`-Objekt A und das `Window`-Objekt eines gleichursprünglichen `iframe`, das A erstellt hat.
- Ein `Window`-Objekt und ein gleichursprüngliches `Window`-Objekt, das es geöffnet hat.
- Ein `Window`-Objekt und ein Worklet, das es erstellt hat.

Die folgenden Paare von globalen Objekten befinden sich nicht innerhalb desselben Agentenclusters und können daher keinen Speicher austauschen:

- Ein `Window`-Objekt und ein gemeinsam genutzter Worker, den es erstellt hat.
- Ein Worker (jeglicher Art) und ein gemeinsam genutzter Worker, den es erstellt hat.
- Ein `Window`-Objekt und ein Service Worker, den es erstellt hat.
- Ein `Window`-Objekt A und das `Window`-Objekt eines `iframe`, das A erstellt hat, das nicht dieselbe Ursprungs-Domain wie A haben kann.
- Zwei beliebige `Window`-Objekte ohne Opener- oder Vorfahrenbeziehung. Dies trifft auch zu, wenn die beiden `Window`-Objekte den gleichen Ursprung haben.

Für den genauen Algorithmus siehe die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-agent-cluster-formalism).

### Agentenübergreifende Kommunikation und Speicherverwaltungsmodell

Wie bereits erwähnt, kommunizieren Agenten über den Speicheraustausch. Im Web wird der Speicher über die [`postMessage()`](/de/docs/Web/API/Window/postMessage)-Methode geteilt. Der [Leitfaden zur Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) bietet einen Überblick darüber. Normalerweise werden Daten nur nach Wert übergeben (über [strukturierte Kopien](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)), und daher sind keine Schwierigkeiten mit Parallelität verbunden. Um Speicher zu teilen, muss ein {{jsxref("SharedArrayBuffer")}}-Objekt gepostet werden, auf das mehrere Agenten gleichzeitig zugreifen können. Sobald zwei Agenten Zugriff auf denselben Speicher über einen `SharedArrayBuffer` haben, können sie Ausführungen über das {{jsxref("Atomics")}}-Objekt synchronisieren.

Es gibt zwei Möglichkeiten, auf gemeinsamen Speicher zuzugreifen: über normalen Speicherzugriff (der nicht atomar ist) und über atomaren Speicherzugriff. Letzterer ist [sequenziell konsistent](https://en.wikipedia.org/wiki/Sequential_consistency) (was bedeutet, dass es eine strikte totale Ordnung von Ereignissen gibt, über die sich alle Agenten im Cluster einig sind), während der ersterer ungeordnet ist (was bedeutet, dass keine Ordnung existiert); JavaScript bietet keine Operationen mit anderen Ordnungszusicherungen an.

Die Spezifikation bietet die folgenden Richtlinien für Programmierer, die mit gemeinsamem Speicher arbeiten:

> Wir empfehlen, Programme frei von Datenrennen zu halten, d.h. es soll unmöglich sein, dass es gleichzeitige nicht-atomare Operationen auf derselben Speicherstelle gibt. Datenrennfreie Programme haben Durchlaufsemantik, bei der jeder Schritt in der Auswertungssemantik eines jeden Agenten mit einander verwoben ist. Für datenrennfreie Programme ist es nicht notwendig, die Details des Speichermodells zu verstehen. Die Details sind wahrscheinlich nicht hilfreich, um Intuition zu entwickeln, die es einem ermöglicht, ECMAScript besser zu schreiben.
>
> Allgemeiner gesagt, selbst wenn ein Programm nicht rennfrei ist, kann es vorhersehbares Verhalten haben, solange atomare Operationen nicht an irgendwelchen Datenrennen beteiligt sind und die Operationen, die rennen, alle die gleiche Zugriffgröße haben. Der einfachste Weg, Atomics nicht in Rennen zu verwickeln, ist sicherzustellen, dass unterschiedliche Speicherstellen von atomaren und nicht-atomaren Operationen verwendet werden und dass atomare Zugriffe unterschiedlicher Größe nicht gleichzeitig auf dieselben Stellen zugreifen. Effektiv sollte das Programm den gemeinsamen Speicher so stark typisiert wie möglich behandeln. Man kann sich dennoch nicht auf die Ordnung und das Timing nicht-atomarer Zugriffe, die rennen, verlassen, aber wenn Speicher stark typisiert behandelt wird, werden die rennenden Zugriffe nicht "reißen" (Teile ihrer Werte werden nicht gemischt).

### Parallelverarbeitung und Sicherstellung des Fortschritts

Wenn mehrere Agenten zusammenarbeiten, gilt die [niemals blockierende](#niemals_blockierend) Garantie nicht immer. Ein Agent kann _blockiert_ oder angehalten werden, während er darauf wartet, dass ein anderer Agent eine Aktion durchführt. Dies unterscheidet sich vom Warten auf ein Versprechen im selben Agenten, weil es den gesamten Agenten anhält und keinen anderen Code zwischenzeitlich ausführen lässt – mit anderen Worten, der Agent kann keinen _Fortschritt machen_.

Um Deadlocks zu vermeiden, gibt es einige starke Einschränkungen, wann und welche Agenten blockiert werden können.

- Jeder nicht blockierte Agent mit einem dedizierten Ausführungsthread macht schließlich Fortschritte.
- In einer Menge von Agenten, die einen Ausführungsthread teilen, macht schließlich ein Agent Fortschritte.
- Ein Agent verursacht keinen anderen Agenten, blockiert zu werden, außer über explizite APIs, die Blockierung bereitstellen.
- Nur bestimmte Agenten können blockiert sein. Im Web schließen diese dedizierte Worker und geteilte Worker ein, jedoch keine ähnliche Herkunftsfenster oder Service Worker.

Der Agentencluster stellt ein gewisses Maß an Integrität über die Aktivität seiner Agenten im Falle externer Pausen oder Beendigungen sicher:

- Ein Agent kann angehalten oder fortgesetzt werden, ohne sein Wissen oder seine Mitwirkung. Zum Beispiel kann das Navigieren von einem Fenster weg den Codeausführung anhalten, aber seinen Zustand beibehalten. Ein Agentencluster darf jedoch nicht teilweise deaktiviert werden, um zu verhindern, dass ein Agent verhungert, weil ein anderer Agent deaktiviert wurde. Zum Beispiel sind geteilte Worker niemals im selben Agentencluster wie das erstellende Fenster oder andere dedizierte Worker. Dies liegt daran, dass die Lebensdauer eines geteilten Workers unabhängig von Dokumenten ist: wenn ein Dokument deaktiviert wird, während sein dedizierter Worker eine Sperre hält, blockiert der geteilte Worker von der Sperre zu bekommen, bis der dedizierte Worker reaktiviert wird, wenn überhaupt. Währenddessen versuchen andere Worker von anderen Fenstern Zugriff auf den geteilten Worker und werden verhungert.
- Ebenso kann ein Agent durch Faktoren, die extern zum Cluster sind, beendet werden. Zum Beispiel Betriebssysteme oder Benutzer, die einen Browserprozess töten, oder der Browser, der einen Agenten aufgrund zu hoher Ressourcennutzung zwangsweise beendet. In diesem Fall werden alle Agenten im Cluster beendet. (Die Spezifikation erlaubt auch eine zweite Strategie, nämlich eine API, die es zumindest einem verbleibenden Mitglied des Clusters ermöglicht, die Beendigung und den Agenten zu identifizieren, der beendet wurde, aber dies ist im Web nicht implementiert.)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Ereignisschleifen](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) im HTML-Standard
- [Was ist die Ereignisschleife?](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop) in den Node.js-Dokumenten
