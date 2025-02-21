---
title: "WorkletSharedStorage: remainingBudget()-Methode"
short-title: remainingBudget()
slug: Web/API/WorkletSharedStorage/remainingBudget
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`remainingBudget()`**-Methode des [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Interfaces gibt das verbleibende Navigationsbudget für den aktuellen Ursprung zurück.

Das Navigationsbudget ist die Anzahl der Entropie-Bits, die innerhalb eines {{htmlelement("fencedframe")}} aufgrund der [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL)-Aufrufe pro Ursprung alle 24 Stunden erlaubt sind. Dies ist nicht dasselbe wie die Anzahl der Navigationen; es basiert vielmehr auf der Anzahl potenzieller Navigationen bei jedem Aufruf. Jedes Mal, wenn eine `selectURL()`-Navigation erfolgt, verringert sich das Budget des entsprechenden Ursprungs um den Logarithmus (zur Basis 2) der Anzahl der URL-Optionen.

Das Navigationsbudget ist ein Mechanismus, der darauf abzielt, die Rate der Weitergabe von Cross-Site-Daten an die Zielseiten, zu denen in [fenced frames](/de/docs/Web/API/Fenced_frame_API) navigiert wird, zu begrenzen.

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
  - : Wird ausgelöst, wenn das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde oder wenn die aufrufende Seite die Shared Storage API nicht im Rahmen eines erfolgreichen [Privacy Sandbox-Einschreibungsprozesses](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten hat.

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
