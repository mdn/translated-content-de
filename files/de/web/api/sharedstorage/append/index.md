---
title: "SharedStorage: append()-Methode"
short-title: append()
slug: Web/API/SharedStorage/append
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`append()`**-Methode der {{domxref("SharedStorage")}}-Schnittstelle fügt einen String dem Wert eines bestehenden Schlüssel-Wert-Paares im Shared Storage des aktuellen Ursprungs hinzu.

## Syntax

```js-nolint
append(key, value)
```

### Parameter

- `key`
  - : Ein String, der den Schlüssel des Schlüssel-Wert-Paares darstellt, dem Sie einen Wert hinzufügen möchten.
- `value`
  - : Ein String, den Sie dem bestehenden Wert des Schlüssel-Wert-Paares hinzufügen möchten.

> [!NOTE]
> Wenn der angegebene `key` im Shared Storage nicht gefunden wird, ist der `append()`-Vorgang gleichbedeutend mit {{domxref("SharedStorage.set", "set()")}}, das heißt, ein neues Schlüssel-Wert-Paar mit dem angegebenen `key` wird dem Shared Storage hinzugefügt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird.

### Ausnahmen

- Das `Promise` wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn:
  - Der hinzugefügte Eintrag aufgrund von nicht verfügbarem Shared Storage (z. B. deaktiviert durch eine Browsereinstellung) nicht erfolgreich in der Datenbank gespeichert wurde.
  - `key` und/oder `value` die vom Browser definierte maximale Länge überschreiten.
  - Die Aufrufstelle die Shared Storage API nicht im Rahmen eines erfolgreichen [Privacy Sandbox-Einschreibungsprozesses](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) enthalten hat.
- Im Fall von {{domxref("WorkletSharedStorage")}} wird das `Promise` mit einem {{jsxref("TypeError")}} abgelehnt, wenn das Worklet-Modul nicht mit {{domxref("Worklet.addModule", "SharedStorageWorklet.addModule()")}} hinzugefügt wurde.

> [!NOTE]
> Im Fall von {{domxref("WindowSharedStorage")}}, wenn der `append()`-Vorgang aus einem anderen Grund als nicht verfügbarer Shared Storage nicht erfolgreich in die Datenbank schreibt, wird kein Fehler geworfen — der Vorgang wird weiterhin mit `undefined` erfüllt.

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
