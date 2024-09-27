---
title: Web Locks API
slug: Web/API/Web_Locks_API
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{DefaultAPISidebar("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **Web Locks API** ermöglicht es Skripten, die in einem Tab oder Worker laufen, asynchron ein Sperre zu erwerben, sie zu halten, während Arbeiten durchgeführt werden, und sie dann freizugeben. Solange die Sperre gehalten wird, kann kein anderes Skript, das im gleichen Origin ausgeführt wird, dieselbe Sperre erwerben. Dies ermöglicht es einer Web-App, die in mehreren Tabs oder Workern läuft, die Arbeit und die Nutzung von Ressourcen zu koordinieren.

## Konzepte und Verwendung

Eine Sperre ist ein abstraktes Konzept, das eine potenziell gemeinsame Ressource repräsentiert und durch einen vom Web-App ausgewählten Namen identifiziert wird. Beispielsweise, wenn eine Web-App, die in mehreren Tabs läuft, sicherstellen möchte, dass nur ein Tab Daten zwischen dem Netzwerk und der Indexed DB synchronisiert, könnte jeder Tab versuchen, eine "my_net_db_sync" Sperre zu erwerben, aber nur ein Tab wird erfolgreich sein (das [Führerwahlmuster](https://en.wikipedia.org/wiki/Leader_election)).

Die API wird wie folgt verwendet:

1. Die Sperre wird angefordert.
2. Die Arbeit wird während des Haltens der Sperre in einer asynchronen Aufgabe erledigt.
3. Die Sperre wird automatisch freigegeben, wenn die Aufgabe abgeschlossen ist.

```js
navigator.locks.request("my_resource", async (lock) => {
  // The lock has been acquired.
  await do_something();
  await do_something_else();
  // Now the lock will be released.
});
```

Solange eine Sperre gehalten wird, werden Anfragen für dieselbe Sperre aus diesem Ausführungskontext oder von anderen Tabs/Workern in die Warteschlange gestellt. Die erste Anfrage in der Warteschlange wird erst gewährt, wenn die Sperre freigegeben wird.

Die API bietet optionale Funktionalitäten, die nach Bedarf genutzt werden können, einschließlich:

- Rückgabe von Werten aus der asynchronen Aufgabe
- geteilte und exklusive Sperrmodi
- bedingter Erwerb
- Diagnostik zur Abfrage des Zustands von Sperren in einem Origin
- eine Notflucht, um gegen Deadlocks zu schützen

Sperren sind auf Origins beschränkt; die von einem Tab von `https://example.com` erworbenen Sperren haben keine Auswirkungen auf die von einem Tab von `https://example.org:8080` erworbenen Sperren, da es sich um separate Origins handelt.

Der Haupteinstiegspunkt ist [`navigator.locks.request()`](/de/docs/Web/API/LockManager/request), welches eine Sperre anfordert. Es benötigt einen Sperrnamen, eine optionale Menge von Optionen und einen Rückruf. Der Rückruf wird aufgerufen, wenn die Sperre gewährt wird. Die Sperre wird automatisch freigegeben, wenn der Rückruf zurückkehrt, so dass der Rückruf normalerweise eine _async function_ ist, die bewirkt, dass die Sperre erst freigegeben wird, wenn die asynchrone Funktion vollständig abgeschlossen ist.

Die `request()`-Methode selbst gibt ein Versprechen zurück, das sich auflöst, sobald die Sperre freigegeben ist; innerhalb einer asynchronen Funktion kann ein Skript den Aufruf `await` machen, um den asynchronen Code linear fließen zu lassen.
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

- `mode`: Der Standardmodus ist "exclusive", aber "shared" kann angegeben werden. Es kann nur einen "exclusive" Inhaber einer Sperre geben, aber mehrere "shared" Anfragen können gleichzeitig gewährt werden. Dies kann verwendet werden, um das [Readers-Writer-Muster](https://en.wikipedia.org/wiki/Readers%E2%80%93writer_lock) zu implementieren.
- `ifAvailable`: Wenn angegeben, schlägt die Sperranfrage fehl, wenn die Sperre nicht sofort ohne Warten gewährt werden kann. Der Rückruf wird mit `null` aufgerufen.
- `steal`: Wenn angegeben, werden alle gehaltenen Sperren mit demselben Namen freigegeben, und die Anfrage wird gewährt, und alle sich in der Warteschlange befindlichen Anfragen werden vorgezogen.
- `signal`: Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) kann übergeben werden, um eine Sperranfrage abzubrechen. Dies kann verwendet werden, um eine Zeitüberschreitung für Anfragen zu implementieren.

### Überwachung

Die Methode [`navigator.locks.query()`](/de/docs/Web/API/LockManager/query) kann von Skripten verwendet werden, um den Zustand des Sperrmanagers für den Origin zu überprüfen. Dies kann nützlich sein, um beispielsweise beim Debuggen herauszufinden, warum eine Sperre nicht erworben werden konnte. Die Ergebnisse sind eine Momentaufnahme des Sperrmanager-Zustands, die zu dem Zeitpunkt, zu dem die Momentaufnahme gemacht wurde, gehaltene und angeforderte Sperren sowie einige zusätzliche Daten (z. B. Modus) zu jeder identifiziert.

### Fortgeschrittene Nutzung

Für komplexere Fälle, wie das Halten der Sperre für eine beliebige Zeitdauer, kann der Rückruf ein Versprechen explizit zurückgeben, das vom Skript aufgelöst wird:

```js
// Capture promise control functions:
let resolve, reject;
const p = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});

// Request the lock:
navigator.locks.request(
  "my_resource",
  // Lock is acquired.
  (lock) => p, // Now lock will be held until either resolve() or reject() is called.
);
```

### Deadlocks

Ein Deadlock tritt auf, wenn ein Prozess keinen Fortschritt mehr machen kann, weil jede Teilanforderung auf eine Anforderung wartet, die nicht erfüllt werden kann. Dies kann bei dieser API in komplexen Anwendungsfällen auftreten, z. B. wenn mehrere Sperren in falscher Reihenfolge angefordert werden. Wenn Tab 1 Sperre A hält und Tab 2 Sperre B hält, dann versucht Tab 1 auch Sperre B zu erwerben und Tab 2 versucht ebenfalls Sperre A zu erwerben, so kann keine der Anfragen gewährt werden. Webanwendungen können dies durch verschiedene Strategien vermeiden, wie sicherzustellen, dass Sperranfragen nicht verschachtelt oder immer korrekt geordnet sind oder Zeitüberschreitungen haben. Beachten Sie, dass solche Deadlocks nur die Sperren selbst und den Code betreffen, der davon abhängt; der Browser, andere Tabs und anderes Skript auf der Seite sind nicht betroffen.

## Schnittstellen

- [`Lock`](/de/docs/Web/API/Lock)
  - : Bietet den Namen und den Modus einer zuvor angeforderten Sperre, die im Rückruf zu [`LockManager.request()`](/de/docs/Web/API/LockManager/request) empfangen wird.
- [`LockManager`](/de/docs/Web/API/LockManager)
  - : Bietet Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock) Objekts und zum Abfragen eines bestehenden [`Lock`](/de/docs/Web/API/Lock) Objekts. Um eine Instanz von [`LockManager`](/de/docs/Web/API/LockManager) zu erhalten, rufen Sie [`navigator.locks`](/de/docs/Web/API/Navigator/locks) auf.

### Erweiterungen anderer Schnittstellen

- [`Navigator.locks`](/de/docs/Web/API/Navigator/locks) {{ReadOnlyInline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, das Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zum Abfragen eines bestehenden [`Lock`](/de/docs/Web/API/Lock)-Objekts bietet.
- [`WorkerNavigator.locks`](/de/docs/Web/API/WorkerNavigator/locks) {{ReadOnlyInline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, das Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zum Abfragen eines bestehenden [`Lock`](/de/docs/Web/API/Lock)-Objekts bietet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
