---
title: Web Locks API
slug: Web/API/Web_Locks_API
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{DefaultAPISidebar("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **Web Locks API** erlaubt es Skripten, die in einem Tab oder einem Worker ausgeführt werden, asynchron eine Sperre zu erwerben, sie zu halten, während Arbeit verrichtet wird, und sie dann wieder freizugeben. Solange sie gehalten wird, kann kein anderes Skript, das im gleichen Ursprung ausgeführt wird, dieselbe Sperre erwerben. Dies ermöglicht es einer Web-Anwendung, die in mehreren Tabs oder Workern läuft, Arbeit und Ressourcenverwendung zu koordinieren.

## Konzepte und Verwendung

Eine Sperre ist ein abstraktes Konzept, das eine potenziell geteilte Ressource repräsentiert, identifiziert durch einen vom Web-App gewählten Namen. Zum Beispiel, wenn eine Web-App, die in mehreren Tabs läuft, sicherstellen möchte, dass nur ein Tab Daten zwischen dem Netzwerk und Indexed DB synchronisiert, könnte jeder Tab versuchen, eine "my_net_db_sync" Sperre zu erwerben, doch nur ein Tab wird erfolgreich sein (das [Führerwahlschema](https://en.wikipedia.org/wiki/Leader_election)).

Die API wird wie folgt verwendet:

1. Die Sperre wird angefragt.
2. Arbeit wird erledigt, während die Sperre in einem asynchronen Task gehalten wird.
3. Die Sperre wird automatisch freigegeben, wenn der Task abgeschlossen ist.

```js
navigator.locks.request("my_resource", async (lock) => {
  // The lock has been acquired.
  await do_something();
  await do_something_else();
  // Now the lock will be released.
});
```

Solange eine Sperre gehalten wird, werden Anfragen für dieselbe Sperre von diesem Ausführungskontext oder von anderen Tabs/Workern in die Warteschlange gestellt. Die erste Anfrage in der Warteschlange wird erst gewährt, wenn die Sperre freigegeben wird.

Die API bietet optionale Funktionalitäten, die nach Bedarf genutzt werden können, einschließlich:

- Rückgabe von Werten aus dem asynchronen Task
- geteilte und exklusive Sperrmodi
- bedingte Erfassung
- Diagnosen, um den Zustand der Sperren in einem Ursprung abzufragen
- eine Notlösung, um vor Deadlocks zu schützen

Sperren sind auf Ursprünge beschränkt; die von einem Tab von `https://example.com` erworbenen Sperren haben keinen Einfluss auf die von einem Tab von `https://example.org:8080` erworbenen Sperren, da es sich um separate Ursprünge handelt.

Der Haupteinstiegspunkt ist [`navigator.locks.request()`](/de/docs/Web/API/LockManager/request), womit eine Sperre angefordert wird. Es nimmt einen Sperrnamen, eine optionale Menge von Optionen und einen Callback entgegen. Der Callback wird aufgerufen, wenn die Sperre gewährt wird. Die Sperre wird automatisch freigegeben, wenn der Callback zurückkehrt, also ist der Callback normalerweise eine _async function_, die bewirkt, dass die Sperre erst freigegeben wird, wenn die asynchrone Funktion vollständig abgeschlossen ist.

Die `request()` Methode selbst gibt ein Promise zurück, das sich auflöst, sobald die Sperre freigegeben wurde; innerhalb einer async Funktion kann ein Skript `await` dem Aufruf hinzufügen, um den asynchronen Code linear ablaufen zu lassen. Zum Beispiel:

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

- `mode`: Der Standardmodus ist "exclusive", aber "shared" kann angegeben werden. Es kann nur einen "exclusive" Inhaber einer Sperre geben, aber mehrere "shared" Anfragen können gleichzeitig gewährt werden. Dies kann verwendet werden, um das [Leser-Schreiber-Muster](https://en.wikipedia.org/wiki/Readers%E2%80%93writer_lock) zu implementieren.
- `ifAvailable`: Wenn angegeben, schlägt die Sperranfrage fehl, wenn die Sperre nicht sofort ohne Warten gewährt werden kann. Der Callback wird mit `null` aufgerufen.
- `steal`: Wenn angegeben, werden alle gehaltenen Sperren mit demselben Namen freigegeben, und die Anfrage wird gewährt, wobei alle wartenden Anfragen vorweggenommen werden.
- `signal`: Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) kann übergeben werden, um eine Sperranfrage abzubrechen. Dies kann verwendet werden, um ein Zeitlimit für Anfragen zu implementieren.

### Überwachung

Die Methode [`navigator.locks.query()`](/de/docs/Web/API/LockManager/query) kann von Skripten verwendet werden, um den Zustand des Sperr-Managers für den Ursprung zu untersuchen. Dies kann nützlich sein, um beim Debuggen, zum Beispiel, herauszufinden, warum eine Sperre nicht erworben werden konnte. Die Ergebnisse sind ein Schnappschuss des Sperrmanager-Zustands, der gehaltene und angeforderte Sperren und einige zusätzliche Daten (z. B. Modus) zu jedem Zeitpunkt identifiziert, an dem der Schnappschuss gemacht wurde.

### Fortgeschrittene Nutzung

Für kompliziertere Fälle, wie das Halten der Sperre für eine beliebige Zeitdauer, kann der Callback ein Promise zurückgeben, das explizit vom Skript aufgelöst wird:

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

Ein Deadlock tritt auf, wenn ein Prozess keinen Fortschritt mehr machen kann, da jeder Teil auf eine Anfrage wartet, die nicht erfüllt werden kann. Dies kann mit dieser API in komplexen Anwendungsfällen auftreten, zum Beispiel, wenn mehrere Sperren außerhalb der Reihenfolge angefordert werden. Wenn Tab 1 Sperre A hält und Tab 2 Sperre B hält, und dann Tab 1 auch Sperre B und Tab 2 auch Sperre A zu erwerben versucht, kann keine Anfrage gewährt werden. Web-Anwendungen können dies durch verschiedene Strategien vermeiden, wie z.B. sicherzustellen, dass Sperranfragen nicht verschachtelt sind, immer gut geordnet sind oder Zeitlimits haben. Beachten Sie, dass solche Deadlocks nur die Sperren selbst und den Code beeinflussen, der von ihnen abhängt; der Browser, andere Tabs und andere Skripte auf der Seite sind nicht betroffen.

## Schnittstellen

- [`Lock`](/de/docs/Web/API/Lock)
  - : Bietet den Namen und Modus einer zuvor angeforderten Sperre, die im Callback für [`LockManager.request()`](/de/docs/Web/API/LockManager/request) empfangen wird.
- [`LockManager`](/de/docs/Web/API/LockManager)
  - : Bietet Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zur Abfrage eines bestehenden [`Lock`](/de/docs/Web/API/Lock)-Objekts. Um eine Instanz von [`LockManager`](/de/docs/Web/API/LockManager) zu erhalten, rufen Sie [`navigator.locks`](/de/docs/Web/API/Navigator/locks) auf.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.locks`](/de/docs/Web/API/Navigator/locks) {{ReadOnlyInline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, das Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zur Abfrage eines bestehenden [`Lock`](/de/docs/Web/API/Lock)-Objekts bereitstellt.
- [`WorkerNavigator.locks`](/de/docs/Web/API/WorkerNavigator/locks) {{ReadOnlyInline}}
  - : Gibt ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, das Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zur Abfrage eines bestehenden [`Lock`](/de/docs/Web/API/Lock)-Objekts bereitstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
