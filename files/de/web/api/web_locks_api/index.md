---
title: Web Locks API
slug: Web/API/Web_Locks_API
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{DefaultAPISidebar("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **Web Locks API** ermöglicht Skripten, die in einem Tab oder Worker ausgeführt werden, asynchron eine Sperre zu erwerben, sie zu halten, während die Arbeit durchgeführt wird, und sie dann freizugeben. Während die Sperre gehalten wird, kann kein anderes Skript, das im gleichen Ursprung ausgeführt wird, dieselbe Sperre erwerben. Dies ermöglicht einer Webanwendung, die in mehreren Tabs oder Workern läuft, die Arbeit und die Ressourcennutzung zu koordinieren.

## Konzepte und Verwendung

Eine Sperre ist ein abstraktes Konzept, das eine potenziell gemeinsam genutzte Ressource darstellt, identifiziert durch einen vom Webanwendung gewählten Namen. Zum Beispiel, wenn eine Webanwendung, die in mehreren Tabs läuft, sicherstellen möchte, dass nur ein Tab Daten zwischen dem Netzwerk und der Indexed DB synchronisiert, könnte jeder Tab versuchen, eine "my_net_db_sync"-Sperre zu erwerben, aber nur einem Tab wird dies gelingen (das [Leader Election Pattern](https://en.wikipedia.org/wiki/Leader_election)).

Die API wird wie folgt verwendet:

1. Die Sperre wird angefordert.
2. Arbeit wird während des Haltens der Sperre in einer asynchronen Aufgabe durchgeführt.
3. Die Sperre wird automatisch freigegeben, wenn die Aufgabe abgeschlossen ist.

```js
navigator.locks.request("my_resource", async (lock) => {
  // Die Sperre wurde erworben.
  await do_something();
  await do_something_else();
  // Jetzt wird die Sperre freigegeben.
});
```

Während eine Sperre gehalten wird, werden Anfragen für dieselbe Sperre von diesem Ausführungskontext oder von anderen Tabs/Workern in die Warteschlange gestellt. Die erste Anfrage in der Warteschlange wird nur gewährt, wenn die Sperre freigegeben wird.

Die API bietet optionale Funktionalitäten, die nach Bedarf verwendet werden können, einschließlich:

- Rückgabe von Werten aus der asynchronen Aufgabe
- Modus für gemeinsame und exklusive Sperren
- bedingte Erwerbung
- Diagnose, um den Zustand von Sperren in einem Ursprung abzufragen
- eine Notfalllösung zum Schutz gegen Deadlocks

Sperren sind auf Ursprünge beschränkt; die von einem Tab von `https://example.com` erworbenen Sperren haben keine Auswirkungen auf die von einem Tab von `https://example.org:8080` erworbenen Sperren, da es sich um separate Ursprünge handelt.

Der Haupteinstiegspunkt ist {{domxref("LockManager.request", "navigator.locks.request()")}}, der eine Sperre anfordert. Er nimmt einen Sperrnamen, ein optionales Set von Optionen und einen Callback an. Der Callback wird aufgerufen, wenn die Sperre gewährt wird. Die Sperre wird automatisch freigegeben, wenn der Callback zurückkehrt, daher ist der Callback normalerweise eine _async function_, die bewirkt, dass die Sperre erst freigegeben wird, wenn die asynchrone Funktion vollständig abgeschlossen ist.

Die Methode `request()` selbst gibt ein Promise zurück, das aufgelöst wird, sobald die Sperre freigegeben wurde; innerhalb einer asynchronen Funktion kann ein Skript den Aufruf `await`en, um den asynchronen Code linear fließen zu lassen. Zum Beispiel:

```js
await do_something_without_lock();

// Fordern Sie die Sperre an.
await navigator.locks.request("my_resource", async (lock) => {
  // Die Sperre wurde erworben.
  await do_something_with_lock();
  await do_something_else_with_lock();
  // Jetzt wird die Sperre freigegeben.
});
// Die Sperre wurde freigegeben.

await do_something_else_without_lock();
```

### Optionen

Es können mehrere Optionen beim Anfordern einer Sperre übergeben werden:

- `mode`: Der Standardmodus ist "exclusive", aber "shared" kann angegeben werden. Es kann nur einen "exclusiven" Halter einer Sperre geben, aber mehrere "shared"-Anfragen können gleichzeitig gewährt werden. Dies kann verwendet werden, um das [Readers-Writer Pattern](https://en.wikipedia.org/wiki/Readers%E2%80%93writer_lock) zu implementieren.
- `ifAvailable`: Wenn angegeben, schlägt die Sperrenanforderung fehl, wenn die Sperre nicht sofort ohne Warten gewährt werden kann. Der Callback wird mit `null` aufgerufen.
- `steal`: Wenn angegeben, werden alle gehaltenen Sperren mit demselben Namen freigegeben, und die Anforderung wird gewährt, wodurch alle in der Warteschlange stehenden Anfragen vorgezogen werden.
- `signal`: Ein {{domxref("AbortSignal")}} kann übergeben werden, der eine Sperranforderung abgebrochen werden kann. Dies kann verwendet werden, um ein Timeout für Anfragen zu implementieren.

### Überwachung

Die Methode {{domxref("LockManager.query", "navigator.locks.query()")}} kann von Skripten verwendet werden, um den Zustand des Sperrenmanagers für den Ursprung zu untersuchen. Dies kann hilfreich sein beim Debuggen, zum Beispiel um zu identifizieren, warum eine Sperre nicht erworben werden konnte. Die Ergebnisse sind ein Schnappschuss des Sperrenmanagerzustands, der die gehaltenen und angeforderten Sperren und einige zusätzliche Daten (z. B. den Modus) über jede zum Zeitpunkt des Schnappschusses identifiziert.

### Erweiterte Nutzung

Für kompliziertere Fälle, wie z.B. das Halten der Sperre für eine beliebige Zeitspanne, kann der Callback ein explizit vom Skript aufgelöstes Promise zurückgeben:

```js
// Erfassung von Promise-Kontrollfunktionen:
let resolve, reject;
const p = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});

// Fordern Sie die Sperre an:
navigator.locks.request(
  "my_resource",
  // Die Sperre wurde erworben.
  (lock) => p, // Jetzt wird die Sperre gehalten, bis entweder resolve() oder reject() aufgerufen wird.
);
```

### Deadlocks

Ein Deadlock tritt auf, wenn ein Prozess keinen Fortschritt mehr machen kann, weil jeder Teil auf eine nicht erfüllbare Anforderung wartet. Dies kann bei dieser API in komplexen Anwendungsfällen auftreten, zum Beispiel, wenn mehrere Sperren außerhalb der Reihenfolge angefordert werden. Wenn Tab 1 Sperre A hält und Tab 2 Sperre B hält, dann versucht Tab 1 auch Sperre B zu erwerben und Tab 2 versucht auch Sperre A zu erwerben, kann keine der Anforderungen gewährt werden. Webanwendungen können dies durch verschiedene Strategien vermeiden, wie z.B. sicherstellen, dass Sperrenanforderungen nicht verschachtelt sind oder immer gut geordnet oder mit Timeouts versehen sind. Beachten Sie, dass solche Deadlocks nur die Sperren selbst und den davon abhängigen Code betreffen; der Browser, andere Tabs und anderes Skript auf der Seite sind nicht betroffen.

## Schnittstellen

- {{domxref("Lock")}}
  - : Gibt den Namen und den Modus einer zuvor angeforderten Sperre an, die im Callback zu {{domxref("LockManager.request()")}} empfangen wird.
- {{domxref("LockManager")}}
  - : Bietet Methoden zum Anfordern eines neuen {{domxref("Lock")}}-Objekts und zum Abfragen eines bestehenden {{domxref('Lock')}}-Objekts. Um eine Instanz von {{domxref("LockManager")}} zu erhalten, rufen Sie {{domxref("navigator.locks")}} auf.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("Navigator.locks")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("LockManager")}}-Objekt zurück, das Methoden zum Anfordern eines neuen {{domxref('Lock')}}-Objekts und zum Abfragen eines bestehenden {{domxref('Lock')}}-Objekts bietet.
- {{domxref("WorkerNavigator.locks")}} {{ReadOnlyInline}}
  - : Gibt ein {{DOMxRef("LockManager")}}-Objekt zurück, das Methoden zum Anfordern eines neuen {{DOMxRef('Lock')}}-Objekts und zum Abfragen eines bestehenden {{domxref('Lock')}}-Objekts bietet.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
