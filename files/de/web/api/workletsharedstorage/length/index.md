---
title: "WorkletSharedStorage: length()-Methode"
short-title: length()
slug: Web/API/WorkletSharedStorage/length
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`length()`**-Methode des [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Interfaces gibt die Anzahl der aktuell im gemeinsamen Speicher für die aktuelle Herkunft gespeicherten Einträge zurück.

## Syntax

```js-nolint
length()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Zahl erfüllt wird, die die Gesamtanzahl der aktuell im gemeinsamen Speicher gespeicherten Schlüssel-Werte-Paare darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - Die aufrufende Stelle die Shared Storage API nicht im Rahmen eines erfolgreichen [Privacy Sandbox-Einschreibungsprozesses](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) enthalten hat.
    - Der Browser aus einem anderen Grund die Anzahl der Einträge nicht abrufen kann.

## Beispiele

```js
// length() available inside a shared storage worklet module

async function retrieveLength() {
  const length = await this.sharedStorage.length();
  console.log(length);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
