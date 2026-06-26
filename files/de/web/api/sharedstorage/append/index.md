---
title: "SharedStorage: append()-Methode"
short-title: append()
slug: Web/API/SharedStorage/append
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}{{non-standard_header}}

Die **`append()`**-Methode der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle hängt einen String an den Wert eines bestehenden Schlüssel-Wert-Paares im gemeinsamen Speicher des aktuellen Ursprungs an.

## Syntax

```js-nolint
append(key, value)
```

### Parameter

- `key`
  - : Ein String, der den Schlüssel des Schlüssel-Wert-Paares darstellt, dem Sie einen Wert anhängen möchten.
- `value`
  - : Ein String, den Sie an den bestehenden Wert des Schlüssel-Wert-Paares anhängen möchten.

> [!NOTE]
> Wenn der angegebene `key` im gemeinsamen Speicher nicht gefunden wird, ist der `append()`-Vorgang äquivalent zu [`set()`](/de/docs/Web/API/SharedStorage/set), das heißt, ein neues Schlüssel-Wert-Paar mit dem angegebenen `key` wird dem gemeinsamen Speicher hinzugefügt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- Das `Promise` wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Der angehängte Eintrag nicht erfolgreich in der Datenbank gespeichert wurde, weil der gemeinsame Speicher nicht verfügbar ist (beispielsweise ist er über eine Browsereinstellung deaktiviert).
  - `key` und/oder `value` die browserdefinierte maximale Länge überschreiten.
  - Die aufrufende Stelle nicht im Rahmen eines erfolgreichen [Privacy Sandbox Einschreibungsprozesses](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) die Shared Storage API eingebunden hat.
- Im Fall von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn das Worklet-Modul nicht mit [`SharedStorageWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.

> [!NOTE]
> Im Fall von [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage), wenn der `append()`-Vorgang nicht erfolgreich in die Datenbank schreibt, aus einem anderen Grund als dass der gemeinsame Speicher nicht verfügbar ist, wird kein Fehler ausgelöst — der Vorgang wird dennoch mit `undefined` erfüllt.

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
