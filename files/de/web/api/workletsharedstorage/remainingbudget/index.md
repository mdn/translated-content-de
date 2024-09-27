---
title: "WorkletSharedStorage: remainingBudget()-Methode"
short-title: remainingBudget()
slug: Web/API/WorkletSharedStorage/remainingBudget
l10n:
  sourceCommit: d7906ff46e227d013800f34a34894c2fb142a0a1
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`remainingBudget()`**-Methode der [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Schnittstelle gibt das verbleibende Navigationsbudget für den aktuellen Ursprung zurück.

Das Navigationsbudget ist die Anzahl der Entropie-Bits, die innerhalb eines {{htmlelement("fencedframe")}} durch die [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL)-Aufrufe pro Ursprung alle 24 Stunden erlaubt sind. Dies ist nicht dasselbe wie die Anzahl der Navigationsvorgänge, sondern basiert auf der Anzahl der potenziellen Navigationen in jedem Aufruf. Jedes Mal, wenn eine `selectURL()`-Navigation erfolgt, verringert sich das Budget des entsprechenden Ursprungs um den Logarithmus (Basis 2) der Anzahl der URL-Auswahlen.

Das Navigationsbudget ist ein Mechanismus, der entwickelt wurde, um die Geschwindigkeit der Datenübertragung über Seiten hinweg, zu denen in [Fenced Frames](/de/docs/Web/API/Fenced_frame_API) navigiert wird, zu begrenzen.

## Syntax

```js-nolint
remainingBudget()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einer Zahl erfüllt wird, die das verbleibende Navigationsbudget darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde oder wenn die aufrufende Seite die Shared Storage API nicht im Rahmen eines erfolgreichen [Privacy Sandbox-Registrierungsprozesses](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) enthält.

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
