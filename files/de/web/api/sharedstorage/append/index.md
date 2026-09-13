---
title: "SharedStorage: append()-Methode"
short-title: append()
slug: Web/API/SharedStorage/append
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}{{non-standard_header}}

Die **`append()`**-Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle fügt einen String zum Wert eines vorhandenen Schlüssel-Wert-Paares im freigegebenen Speicher des aktuellen Ursprungs hinzu.

## Syntax

```js-nolint
append(key, value)
```

### Parameter

- `key`
  - : Ein String, der den Schlüssel des Schlüssel-Wert-Paares darstellt, zu dem Sie einen Wert hinzufügen möchten.
- `value`
  - : Ein String, den Sie zum vorhandenen Wert des Schlüssel-Wert-Paares hinzufügen möchten.

> [!NOTE]
> Wenn der angegebene `key` nicht im freigegebenen Speicher gefunden wird, entspricht der `append()`-Vorgang der [`set()`](/de/docs/Web/API/SharedStorage/set)-Methode, das heißt, ein neues Schlüssel-Wert-Paar mit dem angegebenen `key` wird dem freigegebenen Speicher hinzugefügt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- Das `Promise` wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Der hinzugefügte Eintrag nicht erfolgreich in der Datenbank gespeichert wurde, weil der freigegebene Speicher nicht verfügbar ist (zum Beispiel, wenn er durch eine Browsereinstellung deaktiviert wurde).
  - `key` und/oder `value` die vom Browser definierte maximale Länge überschreiten.
  - Der aufrufende Standort die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) enthalten hat.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), wenn der `append()`-Vorgang aus einem anderen Grund als der Nichtverfügbarkeit des freigegebenen Speichers nicht erfolgreich in die Datenbank schreibt, wird kein Fehler ausgelöst — der Vorgang wird trotzdem mit `undefined` erfüllt.

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
