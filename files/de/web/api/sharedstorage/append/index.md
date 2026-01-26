---
title: "SharedStorage: append()-Methode"
short-title: append()
slug: Web/API/SharedStorage/append
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`append()`**-Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle fügt einen String zum Wert eines bestehenden Schlüssel-Wert-Paares im Shared Storage des aktuellen Ursprungs hinzu.

## Syntax

```js-nolint
append(key, value)
```

### Parameter

- `key`
  - : Ein String, der den Schlüssel des Schlüssel-Wert-Paares repräsentiert, dem Sie einen Wert hinzufügen möchten.
- `value`
  - : Ein String, den Sie zum bestehenden Wert des Schlüssel-Wert-Paares hinzufügen möchten.

> [!NOTE]
> Wenn der angegebene `key` im Shared Storage nicht gefunden wird, entspricht die `append()`-Operation der [`set()`](/de/docs/Web/API/SharedStorage/set)-Methode, das heißt, ein neues Schlüssel-Wert-Paar mit dem angegebenen `key` wird zum Shared Storage hinzugefügt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- Das `Promise` schlägt mit einem {{jsxref("TypeError")}} fehl, wenn:
  - Der hinzugefügte Eintrag nicht erfolgreich in der Datenbank gespeichert wurde, weil der Shared Storage nicht verfügbar ist (z.B. ist er über eine Browsereinstellung deaktiviert).
  - `key` und/oder `value` die vom Browser definierte maximale Länge überschreiten.
  - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox Enrollment Prozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) implementiert hat.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) schlägt das `Promise` mit einem {{jsxref("TypeError")}} fehl, wenn das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), wenn die `append()`-Operation nicht erfolgreich in die Datenbank geschrieben wird aus einem Grund, der nicht die Nichtverfügbarkeit des Shared Storages ist, wird kein Fehler geworfen — die Operation wird trotzdem mit `undefined` erfüllt.

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
