---
title: "SharedStorage: append()-Methode"
short-title: append()
slug: Web/API/SharedStorage/append
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`append()`**-Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle fügt einen String zum Wert eines vorhandenen Schlüssel-Wert-Paares im gemeinsamen Speicher des aktuellen Ursprungs hinzu.

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
> Wenn der angegebene `key` im gemeinsamen Speicher nicht gefunden wird, ist die `append()`-Operation äquivalent zu [`set()`](/de/docs/Web/API/SharedStorage/set), das heißt, ein neues Schlüssel-Wert-Paar mit dem angegebenen `key` wird dem gemeinsamen Speicher hinzugefügt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- Das `Promise` wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Der hinzugefügte Eintrag aufgrund des nicht verfügbaren gemeinsamen Speichers nicht erfolgreich in der Datenbank gespeichert wurde (zum Beispiel, wenn er über eine Browsereinstellung deaktiviert ist).
  - `key` und/oder `value` die vom Browser definierte maximale Länge überschreiten.
  - Die aufrufende Webseite den Shared Storage API nicht im Rahmen eines erfolgreichen [Privacy-Sandbox-Anmeldeprozesses](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) beinhaltet.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), wenn die `append()`-Operation aufgrund eines anderen Grundes als der Nichtverfügbarkeit des gemeinsamen Speichers nicht erfolgreich in die Datenbank geschrieben wird, wird kein Fehler ausgelöst — die Operation wird dennoch mit `undefined` erfüllt.

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
