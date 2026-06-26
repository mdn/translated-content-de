---
title: "WorkletSharedStorage: remainingBudget() Methode"
short-title: remainingBudget()
slug: Web/API/WorkletSharedStorage/remainingBudget
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`remainingBudget()`** Methode des
[`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) Interfaces gibt das verbleibende Navigationsbudget für den aktuellen Ursprung zurück.

Das Navigationsbudget entspricht der Anzahl der Entropie-Bits, die innerhalb eines {{htmlelement("fencedframe")}} aufgrund der [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) Aufrufe pro Ursprung alle 24 Stunden zulässig sind. Dies ist nicht dasselbe wie die Anzahl der Navigationen; vielmehr basiert es auf der Anzahl der potenziellen Navigationen bei jedem Aufruf. Jedes Mal, wenn eine `selectURL()` Navigation stattfindet, verringert sich das Budget des entsprechenden Ursprungs um den Logarithmus (Basis 2) der Anzahl der URL-Optionen.

Das Navigationsbudget ist ein Mechanismus, der entwickelt wurde, um die Rate der Datenleckage von Cross-Site-Daten zu den Zieldateien, die in [fenced frames](/de/docs/Web/API/Fenced_frame_API) navigiert werden, zu begrenzen.

## Syntax

```js-nolint
remainingBudget()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Zahl erfüllt wird, die das verbleibende Navigationsbudget repräsentiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde oder wenn die aufrufende Stelle die Shared Storage API nicht im Rahmen eines erfolgreichen [Privacy Sandbox Anmeldeverfahrens](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) enthalten hat.

## Beispiele

```js
// remainingBudget() available inside a shared storage worklet module

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
