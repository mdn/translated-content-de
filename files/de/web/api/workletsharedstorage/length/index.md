---
title: "WorkletSharedStorage: length() Methode"
short-title: length()
slug: Web/API/WorkletSharedStorage/length
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`length()`**-Methode der [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Schnittstelle gibt die Anzahl der aktuell im Shared Storage für den aktuellen Ursprung gespeicherten Einträge zurück.

## Syntax

```js-nolint
length()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Zahl erfüllt wird, die die Gesamtanzahl der aktuell im Shared Storage gespeicherten Schlüssel-Wert-Paare darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - Die aufrufende Stelle die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten hat.
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
