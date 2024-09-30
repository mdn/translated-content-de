---
title: "SharedStorage: append()-Methode"
short-title: append()
slug: Web/API/SharedStorage/append
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`append()`**-Methode des [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Interfaces fügt einen String zum Wert eines bestehenden Schlüssel-Wert-Paares im gemeinsam genutzten Speicher des aktuellen Ursprungs hinzu.

## Syntax

```js-nolint
append(key, value)
```

### Parameter

- `key`
  - : Ein String, der den Schlüssel des Schlüssel-Wert-Paares darstellt, zu dem Sie einen Wert hinzufügen möchten.
- `value`
  - : Ein String, den Sie dem bestehenden Wert des Schlüssel-Wert-Paares hinzufügen möchten.

> [!NOTE]
> Wenn der angegebene `key` im gemeinsam genutzten Speicher nicht gefunden wird, ist der `append()`-Vorgang gleichbedeutend mit [`set()`](/de/docs/Web/API/SharedStorage/set), das heißt, ein neues Schlüssel-Wert-Paar mit dem angegebenen `key` wird zum gemeinsam genutzten Speicher hinzugefügt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- Das `Promise` wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Der hinzugefügte Eintrag aufgrund der Nichtverfügbarkeit des gemeinsam genutzten Speichers nicht erfolgreich in der Datenbank gespeichert wurde (zum Beispiel, wenn er durch eine Browsereinstellung deaktiviert ist).
  - `key` und/oder `value` die vom Browser definierte maximale Länge überschreiten.
  - Die aufrufende Stelle die Shared Storage API nicht in einem erfolgreichen [Datenschutz-Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) eingeschlossen hat.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage) wird kein Fehler ausgelöst, wenn der `append()`-Vorgang aus einem anderen Grund als der Nichtverfügbarkeit des gemeinsam genutzten Speichers nicht erfolgreich in die Datenbank geschrieben wird — der Vorgang wird dennoch mit `undefined` erfüllt.

## Beispiele

```js
window.sharedStorage
  .append("integer-list", ",9")
  .then(console.log("Value appended to integer list"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
