---
title: "WorkletSharedStorage: remainingBudget() Methode"
short-title: remainingBudget()
slug: Web/API/WorkletSharedStorage/remainingBudget
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}

Die **`remainingBudget()`** Methode der [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) Schnittstelle gibt das verbleibende Navigationsbudget für den aktuellen Ursprung zurück.

Das Navigationsbudget ist die Anzahl der erlaubten Entropie-Bits innerhalb eines {{htmlelement("fencedframe")}} aufgrund der [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) Aufrufe pro Ursprung alle 24 Stunden. Es entspricht nicht der Anzahl der Navigationen, sondern basiert auf der Anzahl der potenziellen Navigationen bei jedem Aufruf. Jedes Mal, wenn eine `selectURL()` Navigation stattfindet, verringert sich das Budget des entsprechenden Ursprungs um den Logarithmus (zur Basis 2) der Anzahl der URL-Auswahlmöglichkeiten.

Das Navigationsbudget ist ein Mechanismus, der dazu entwickelt wurde, die Rate der Datenweitergabe zwischen verschiedenen Websites an die Zielseiten, zu denen in [fenced frames](/de/docs/Web/API/Fenced_frame_API) navigiert wird, zu begrenzen.

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
  - : Wird ausgelöst, wenn das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde oder wenn die aufrufende Stelle die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Anmeldungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) enthalten hat.

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
