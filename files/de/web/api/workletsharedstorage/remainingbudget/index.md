---
title: "WorkletSharedStorage: remainingBudget() Methode"
short-title: remainingBudget()
slug: Web/API/WorkletSharedStorage/remainingBudget
l10n:
  sourceCommit: 923adb616baa87402ca965ebd18a73380cc84d27
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`remainingBudget()`**-Methode der [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Schnittstelle gibt das verbleibende Navigationsbudget für den aktuellen Ursprung zurück.

Das Navigationsbudget ist die Anzahl der Entropie-Bits, die innerhalb eines {{htmlelement("fencedframe")}} aufgrund der [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL)-Aufrufe pro Ursprung alle 24 Stunden erlaubt sind. Dies entspricht nicht der Anzahl der Navigationen; vielmehr basiert es auf der Anzahl der potenziellen Navigationen bei jedem Aufruf. Jedes Mal, wenn eine `selectURL()`-Navigation erfolgt, verringert sich das entsprechende Ursprungsbudget um den Logarithmus (Basis 2) der Anzahl der URL-Auswahlmöglichkeiten.

Das Navigationsbudget ist ein Mechanismus, der entwickelt wurde, um die Rate der Datenlecks von einer Website zu den Zielseiten, zu denen in [fenced frames](/de/docs/Web/API/Fenced_frame_API) navigiert wird, zu begrenzen.

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
  - : Wird ausgelöst, wenn das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde oder wenn die aufrufende Stelle die Shared Storage API nicht in einem erfolgreichen [Privacy-Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten hat.

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
