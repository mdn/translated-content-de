---
title: Web Locks API
slug: Web/API/Web_Locks_API
l10n:
  sourceCommit: 8a5618d6a53a3716df0a24f36fec04235fd6e90e
---

{{DefaultAPISidebar("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **Web Locks API** ermöglicht Skripten, die in einem Tab oder Worker ausgeführt werden, asynchron eine Sperre zu erwerben, sie zu halten, während Arbeit verrichtet wird, und sie dann freizugeben. Solange die Sperre gehalten wird, kann kein anderes Skript, das im selben Ursprung ausgeführt wird, dieselbe Sperre erwerben. Dies ermöglicht es einer Webanwendung, die in mehreren Tabs oder Workern läuft, Arbeit und Ressourcennutzung zu koordinieren.

## Konzepte und Verwendung

Eine Sperre ist ein abstraktes Konzept, das eine möglicherweise gemeinsam genutzte Ressource darstellt, die von der Webanwendung durch einen selbst gewählten Namen identifiziert wird. Beispielsweise, wenn eine Webanwendung, die in mehreren Tabs läuft, sicherstellen will, dass nur ein Tab Daten zwischen dem Netzwerk und dem Indexed DB synchronisiert, könnte jeder Tab versuchen, eine "my_net_db_sync"-Sperre zu erwerben, aber nur ein Tab wird Erfolg haben (das [Leader Election Muster](https://en.wikipedia.org/wiki/Leader_election).)

Die API wird wie folgt verwendet:

1. Die Sperre wird angefordert.
2. Arbeit wird während des Haltens der Sperre in einer asynchronen Aufgabe durchgeführt.
3. Die Sperre wird automatisch freigegeben, wenn die Aufgabe abgeschlossen ist.

```js
navigator.locks.request("my_resource", async (lock) => {
  // The lock has been acquired.
  await do_something();
  await do_something_else();
  // Now the lock will be released.
});
```

Während eine Sperre gehalten wird, werden Anforderungen für dieselbe Sperre aus diesem Ausführungskontext oder von anderen Tabs/Workern in eine Warteschlange gestellt. Die erste Anfrage in der Warteschlange wird nur gewährt, wenn die Sperre freigegeben wird.

Die API bietet optionale Funktionalitäten, die nach Bedarf genutzt werden können, darunter:

- Rückgabe von Werten aus der asynchronen Aufgabe
- geteilte und exklusive Sperrmodi
- bedingtes Erwerben
- Diagnostik zur Abfrage des Zustands von Sperren in einem Ursprung
- ein Notausgang zum Schutz vor Deadlocks

Sperren sind an Ursprünge gebunden; die von einem Tab von `https://example.com` erworbenen Sperren haben keinen Einfluss auf die von einem Tab von `https://example.org:8080` erworbenen Sperren, da sie unterschiedliche Ursprünge sind.

Der Haupteinstiegspunkt ist [`navigator.locks.request()`](/de/docs/Web/API/LockManager/request), der eine Sperre anfordert. Er nimmt einen Sperrnamen, einen optionalen Satz von Optionen und eine Rückruffunktion an. Die Rückruffunktion wird aufgerufen, wenn die Sperre gewährt wird. Die Sperre wird automatisch freigegeben, sobald die Rückruffunktion zurückkehrt. Daher ist die Rückruffunktion in der Regel eine _async function_, die bewirkt, dass die Sperre nur freigegeben wird, wenn die async-Funktion vollständig abgeschlossen ist.

Die Methode `request()` gibt selbst ein Promise zurück, das aufgelöst wird, sobald die Sperre freigegeben wurde; innerhalb einer async Funktion kann ein Skript `await` verwenden, um den asynchronen Code linear fließen zu lassen.
Zum Beispiel:

```js
await do_something_without_lock();

// Request the lock.
await navigator.locks.request("my_resource", async (lock) => {
  // The lock has been acquired.
  await do_something_with_lock();
  await do_something_else_with_lock();
  // Now the lock will be released.
});
// The lock has been released.

await do_something_else_without_lock();
```

### Optionen

Beim Anfordern einer Sperre können mehrere Optionen übergeben werden:

- `mode`: Der Standardmodus ist "exclusive", aber "shared" kann spezifiziert werden. Es kann nur einen "exclusive"-Halter einer Sperre geben, aber mehrere "shared"-Anfragen können gleichzeitig gewährt werden. Dies kann verwendet werden, um das [Readers-Writer Muster](https://en.wikipedia.org/wiki/Readers%E2%80%93writer_lock) zu implementieren.
- `ifAvailable`: Wenn angegeben, schlägt die Sperranfrage fehl, wenn die Sperre nicht sofort, ohne zu warten, gewährt werden kann. Die Rückruffunktion wird mit `null` aufgerufen.
- `steal`: Wenn angegeben, werden alle gehaltenen Sperren mit demselben Namen freigegeben, und die Anfrage wird gewährt, wobei alle in der Warteschlange stehenden Anfragen vorrangig abgewiesen werden.
- `signal`: Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) kann übergeben werden, um eine Sperranfrage abzubrechen. Dies kann verwendet werden, um eine Zeitüberschreitung bei Anfragen zu implementieren.

### Überwachung

Die Methode [`navigator.locks.query()`](/de/docs/Web/API/LockManager/query) kann von Skripten verwendet werden, um den Zustand des Sperrmanagers für den Ursprung zu inspizieren. Dies kann nützlich sein, wenn man z.B. herausfinden möchte, warum eine Sperre nicht erworben werden konnte. Die Ergebnisse sind eine Momentaufnahme des Zustands des Sperrmanagers, die zu einem bestimmten Zeitpunkt gehaltene und angeforderte Sperren sowie einige zusätzliche Daten (z.B. Modus) über jede Sperre identifiziert.

### Fortgeschrittene Nutzung

Für komplexere Fälle, wie das Halten der Sperre für eine beliebige Zeitdauer, kann der Rückruf ein Promise zurückgeben, das explizit durch das Skript aufgelöst wird:

```js
// Capture promise control functions:
const { promise, resolve, reject } = Promise.withResolvers();

// Request the lock:
navigator.locks.request(
  "my_resource",
  // Lock is acquired.
  (lock) => promise, // Now lock will be held until either resolve() or reject() is called.
);
```

### Deadlocks

Ein Deadlock tritt auf, wenn ein Prozess nicht mehr weiterkommt, weil jeder Teil auf eine Anforderung wartet, die nicht erfüllt werden kann. Dies kann mit dieser API in komplexen Anwendungsfällen auftreten, z.B. wenn mehrere Sperren in der falschen Reihenfolge angefordert werden. Wenn Tab 1 die Sperre A hält und Tab 2 die Sperre B hält, dann versucht Tab 1 außerdem, die Sperre B zu erwerben, und Tab 2 versucht außerdem, die Sperre A zu erwerben, keine der Anforderungen kann gewährt werden. Webanwendungen können dies durch verschiedene Strategien vermeiden, z.B. indem sichergestellt wird, dass Sperranfragen nicht verschachtelt sind, immer gut geordnet sind oder Zeitüberschreitungen haben. Beachten Sie, dass solche Deadlocks nur die Sperren selbst und den auf ihnen beruhenden Code betreffen; der Browser, andere Tabs und andere Skripte auf der Seite sind nicht betroffen.

## Schnittstellen

- [`Lock`](/de/docs/Web/API/Lock)
  - : Stellt den Namen und den Modus einer zuvor angeforderten Sperre bereit, die im Rückruf an [`LockManager.request()`](/de/docs/Web/API/LockManager/request) empfangen wird.
- [`LockManager`](/de/docs/Web/API/LockManager)
  - : Bietet Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zum Abfragen eines vorhandenen [`Lock`](/de/docs/Web/API/Lock)-Objekts. Um eine Instanz von [`LockManager`](/de/docs/Web/API/LockManager) zu erhalten, rufen Sie [`navigator.locks`](/de/docs/Web/API/Navigator/locks) auf.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.locks`](/de/docs/Web/API/Navigator/locks) {{ReadOnlyInline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, das Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zum Abfragen eines vorhandenen [`Lock`](/de/docs/Web/API/Lock)-Objekts bietet.
- [`WorkerNavigator.locks`](/de/docs/Web/API/WorkerNavigator/locks) {{ReadOnlyInline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, das Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zum Abfragen eines vorhandenen [`Lock`](/de/docs/Web/API/Lock)-Objekts bietet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
