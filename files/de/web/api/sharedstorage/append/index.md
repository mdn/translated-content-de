---
title: "SharedStorage: append()-Methode"
short-title: append()
slug: Web/API/SharedStorage/append
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`append()`**-Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle fügt einen String zum Wert eines vorhandenen Schlüssel-Wert-Paares im freigegebenen Speicher des aktuellen Ursprungs hinzu.

## Syntax

```js-nolint
append(key, value)
```

### Parameter

- `key`
  - : Ein String, der den Schlüssel des Schlüssel-Wert-Paares darstellt, dem Sie einen Wert hinzufügen möchten.
- `value`
  - : Ein String, den Sie dem vorhandenen Wert des Schlüssel-Wert-Paares hinzufügen möchten.

> [!NOTE]
> Wenn der angegebene `key` nicht im freigegebenen Speicher gefunden wird, ist der `append()`-Vorgang äquivalent zu [`set()`](/de/docs/Web/API/SharedStorage/set). Das bedeutet, dass ein neues Schlüssel-Wert-Paar mit dem angegebenen `key` zum freigegebenen Speicher hinzugefügt wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- Das `Promise` wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Der hinzugefügte Eintrag aufgrund der Nichtverfügbarkeit des freigegebenen Speichers (z.B. durch Deaktivierung über eine Browsereinstellung) nicht erfolgreich in der Datenbank gespeichert wurde.
  - `key` und/oder `value` die vom Browser definierte maximale Länge überschreiten.
  - Die aufrufende Stelle die Shared Storage API nicht durch einen erfolgreichen [Privacy Sandbox Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) eingebunden hat.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), wenn der `append()`-Vorgang aus einem anderen Grund als der Nichtverfügbarkeit des freigegebenen Speichers nicht erfolgreich in die Datenbank geschrieben wird, wird kein Fehler ausgelöst — der Vorgang wird trotzdem mit `undefined` erfüllt.

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
