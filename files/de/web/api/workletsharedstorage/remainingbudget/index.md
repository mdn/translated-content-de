---
title: "WorkletSharedStorage: remainingBudget()-Methode"
short-title: remainingBudget()
slug: Web/API/WorkletSharedStorage/remainingBudget
l10n:
  sourceCommit: d7906ff46e227d013800f34a34894c2fb142a0a1
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`remainingBudget()`**-Methode der {{domxref("WorkletSharedStorage")}}-Schnittstelle gibt das verbleibende Navigationsbudget für den aktuellen Ursprung zurück.

Das Navigationsbudget ist die Anzahl der Entropie-Bits, die innerhalb eines {{htmlelement("fencedframe")}} aufgrund der {{domxref("WindowSharedStorage.selectURL()")}}-Aufrufe pro Ursprung alle 24 Stunden erlaubt sind. Dies ist nicht gleichbedeutend mit der Anzahl der Navigationen, sondern basiert auf der Anzahl der potenziellen Navigationen bei jedem Aufruf. Jedes Mal, wenn eine `selectURL()`-Navigation erfolgt, verringert sich das entsprechende Ursprungsbudget um den Logarithmus (Basis 2) der Anzahl der URL-Auswahlmöglichkeiten.

Das Navigationsbudget ist ein Mechanismus, der entwickelt wurde, um die Rate des Lecks von domänenübergreifenden Daten zu den Zielseiten, die in [fenced frames](/de/docs/Web/API/Fenced_frame_API) navigiert werden, zu begrenzen.

## Syntax

```js-nolint
remainingBudget()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Zahl erfüllt wird, die das verbleibende Navigationsbudget darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Worklet-Modul noch nicht mit {{domxref("Worklet.addModule", "addModule()")}} hinzugefügt wurde oder wenn die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) integriert hat.

## Beispiele

```js
// remainingBudget() verfügbar innerhalb eines Shared Storage Worklet-Moduls

async function retrieveBudget() {
  const budget = await this.sharedStorage.remainingBudget();
  console.log(budget);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
