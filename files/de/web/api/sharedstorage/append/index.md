---
title: "SharedStorage: append()-Methode"
short-title: append()
slug: Web/API/SharedStorage/append
l10n:
  sourceCommit: d71c12f2ab7cc289117e13513cb965c88a39065e
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`append()`**-Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle fügt einen String zum Wert eines vorhandenen Schlüssel-Wert-Paares im Shared Storage des aktuellen Ursprungs hinzu.

## Syntax

```js-nolint
append(key, value)
```

### Parameter

- `key`
  - : Ein String, der den Schlüssel des Schlüssel-Wert-Paares darstellt, zu dem Sie einen Wert hinzufügen möchten.
- `value`
  - : Ein String, den Sie zum bestehenden Wert des Schlüssel-Wert-Paares hinzufügen möchten.

> [!NOTE]
> Wenn der angegebene `key` im Shared Storage nicht gefunden wird, entspricht die `append()`-Operation [`set()`](/de/docs/Web/API/SharedStorage/set), das heißt, ein neues Schlüssel-Wert-Paar mit dem angegebenen `key` wird dem Shared Storage hinzugefügt.

### Rückgabewert

Ein {{jsxref("Promise")}}, der sich mit `undefined` erfüllt.

### Ausnahmen

- Das `Promise` wird mit einem {{jsxref("TypeError")}} zurückgewiesen, wenn:
  - Der hinzugefügte Eintrag nicht erfolgreich in der Datenbank gespeichert wurde, weil der Shared Storage nicht verfügbar ist (zum Beispiel, wenn er über eine Browsereinstellung deaktiviert wurde).
  - `key` und/oder `value` die browserdefinierte maximale Länge überschreiten.
  - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox Enrollment Process](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) aufgenommen hat.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} zurückgewiesen, wenn das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), wenn die `append()`-Operation aus einem anderen Grund als der Nichtverfügbarkeit des Shared Storage nicht erfolgreich in die Datenbank schreibt, wird kein Fehler ausgelöst — die Operation wird trotzdem mit `undefined` erfüllt.

## Beispiele

```js
window.sharedStorage
  .append("integer-list", ",9")
  .then(() => console.log("Value appended to integer list"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
