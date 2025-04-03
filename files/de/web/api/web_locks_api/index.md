---
title: Web Locks API
slug: Web/API/Web_Locks_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **Web Locks API** ermöglicht Skripten, die in einem Tab oder Worker ausgeführt werden, asynchron eine Sperre zu erwerben, sie zu halten, während Arbeiten ausgeführt werden, und sie dann freizugeben. Solange die Sperre gehalten wird, kann kein anderes Skript im selben Ursprung die gleiche Sperre erwerben, was es einer Webanwendung ermöglicht, die in mehreren Tabs oder Workern ausgeführt wird, die Arbeit und die Nutzung von Ressourcen zu koordinieren.

## Konzepte und Nutzung

Eine Sperre ist ein abstraktes Konzept, das eine potenziell geteilte Ressource darstellt, die durch einen vom Webanwendung gewählten Namen identifiziert wird. Zum Beispiel, wenn eine Webanwendung, die in mehreren Tabs läuft, sicherstellen möchte, dass nur ein Tab Daten zwischen dem Netzwerk und Indexed DB synchronisiert, könnte jeder Tab versuchen, eine "my_net_db_sync"-Sperre zu erwerben, aber nur ein Tab wird erfolgreich sein (das [Leader-Wahl-Muster](https://en.wikipedia.org/wiki/Leader_election).)

Die API wird wie folgt verwendet:

1. Die Sperre wird angefordert.
2. Arbeit wird in einem asynchronen Task ausgeführt, während die Sperre gehalten wird.
3. Die Sperre wird automatisch freigegeben, wenn der Task abgeschlossen ist.

```js
navigator.locks.request("my_resource", async (lock) => {
  // The lock has been acquired.
  await do_something();
  await do_something_else();
  // Now the lock will be released.
});
```

Während eine Sperre gehalten wird, werden Anfragen für dieselbe Sperre von diesem Ausführungskontext oder von anderen Tabs/Workern in die Warteschlange gestellt. Die erste Anfrage in der Warteschlange wird nur gewährt, wenn die Sperre freigegeben wird.

Die API bietet optionale Funktionalität, die bei Bedarf verwendet werden kann, einschließlich:

- Rückgabe von Werten aus dem asynchronen Task
- geteilte und exklusive Sperrmodi
- bedingte Erfassung
- Diagnosen, um den Zustand der Sperren in einem Ursprung abzufragen
- eine Notlösung, um Deadlocks zu vermeiden

Sperren sind auf Ursprünge beschränkt; die von einem Tab unter `https://example.com` erworbenen Sperren haben keinen Einfluss auf die von einem Tab unter `https://example.org:8080` erworbenen Sperren, da sie unterschiedliche Ursprünge sind.

Der Haupteinstiegspunkt ist [`navigator.locks.request()`](/de/docs/Web/API/LockManager/request), der eine Sperre anfordert. Es nimmt einen Sperrnamen, eine optionale Menge von Optionen und einen Rückruf an. Der Rückruf wird aufgerufen, wenn die Sperre gewährt wird. Die Sperre wird automatisch freigegeben, wenn der Rückruf zurückkehrt, daher ist der Rückruf normalerweise eine _async function_, die bewirkt, dass die Sperre erst freigegeben wird, wenn die asynchrone Funktion vollständig beendet ist.

Die `request()`-Methode selbst gibt ein Promise zurück, welches sich auflöst, sobald die Sperre freigegeben wurde; innerhalb einer async Funktion kann ein Skript das Aufrufen mit `await` warten lassen, um den asynchronen Code linear auszuführen. Zum Beispiel:

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

Mehrere Optionen können beim Anfordern einer Sperre übergeben werden:

- `mode`: Der Standardmodus ist "exklusive", aber "shared" kann angegeben werden. Es kann nur einen "exklusive" Halter einer Sperre geben, aber mehrere "shared" Anfragen können gleichzeitig gewährt werden. Dies kann verwendet werden, um das [Readers-Writer-Muster](https://en.wikipedia.org/wiki/Readers%E2%80%93writer_lock) zu implementieren.
- `ifAvailable`: Wenn angegeben, wird das Sperranforderung fehlschlagen, wenn die Sperre nicht sofort ohne Warten gewährt werden kann. Der Rückruf wird mit `null` aufgerufen.
- `steal`: Wenn angegeben, werden alle gehaltenen Sperren mit demselben Namen freigegeben, und die Anfrage wird gewährt, wobei alle anderen eingereihten Anfragen dafür vorangestellt werden.
- `signal`: Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) kann übergeben werden, das es ermöglicht, eine Sperranforderung abzubrechen. Dies kann verwendet werden, um eine Zeitüberschreitung bei Anfragen zu implementieren.

### Überwachung

Die Methode [`navigator.locks.query()`](/de/docs/Web/API/LockManager/query) kann von Skripten verwendet werden, um den Zustand des Sperrmanagers für den Ursprung zu introspektieren. Dies kann beim Debuggen nützlich sein, z.B. um zu identifizieren, warum eine Sperre nicht erworben werden konnte. Die Ergebnisse sind ein Schnappschuss des Sperrmanager-Zustands, der gehaltene und angeforderte Sperren sowie einige zusätzliche Daten (z.B. Modus) über jede zum Zeitpunkt der Aufnahme des Schnappschusses identifiziert.

### Erweiterte Nutzung

Für kompliziertere Fälle, wie das Halten der Sperre für eine willkürlich lange Zeit, kann der Rückruf ein Promise explizit auflösen, das vom Skript aufgerufen wird:

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

Ein Deadlock tritt auf, wenn ein Prozess nicht mehr weiterarbeiten kann, weil jeder Teil auf eine Anfrage wartet, die nicht erfüllt werden kann. Dies kann bei dieser API in komplexen Anwendungsfällen auftreten, z.B. wenn mehrere Sperren in der falschen Reihenfolge angefordert werden. Wenn Tab 1 Sperre A hält und Tab 2 Sperre B hält, dann versucht Tab 1 auch Sperre B zu erwerben und Tab 2 versucht auch Sperre A zu erwerben, kann keine der Anfragen gewährt werden. Webanwendungen können dies durch verschiedene Strategien vermeiden, wie z.B. sicherzustellen, dass Sperranforderungen nicht verschachtelt sind, oder immer gut geordnet oder mit Zeitüberschreitungen versehen sind. Beachten Sie, dass solche Deadlocks nur die Sperren selbst und den von ihnen abhängigen Code betreffen; der Browser, andere Tabs und andere Skripte auf der Seite sind nicht betroffen.

## Schnittstellen

- [`Lock`](/de/docs/Web/API/Lock)
  - : Bietet den Namen und den Modus einer zuvor angeforderten Sperre, die im Rückruf an [`LockManager.request()`](/de/docs/Web/API/LockManager/request) empfangen wird.
- [`LockManager`](/de/docs/Web/API/LockManager)
  - : Bietet Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zum Abfragen eines vorhandenen [`Lock`](/de/docs/Web/API/Lock)-Objekts. Um eine Instanz von [`LockManager`](/de/docs/Web/API/LockManager) zu erhalten, rufen Sie [`navigator.locks`](/de/docs/Web/API/Navigator/locks) auf.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.locks`](/de/docs/Web/API/Navigator/locks) {{ReadOnlyInline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, das Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zum Abfragen eines vorhandenen [`Lock`](/de/docs/Web/API/Lock)-Objekts bietet.
- [`WorkerNavigator.locks`](/de/docs/Web/API/WorkerNavigator/locks) {{ReadOnlyInline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, welches Methoden bietet, um ein neues [`Lock`](/de/docs/Web/API/Lock)-Objekt anzufordern und ein vorhandenes [`Lock`](/de/docs/Web/API/Lock)-Objekt abzufragen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
