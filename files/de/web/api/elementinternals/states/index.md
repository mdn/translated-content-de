---
title: "ElementInternals: states-Eigenschaft"
short-title: states
slug: Web/API/ElementInternals/states
l10n:
  sourceCommit: f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{APIRef("Web Components")}}

Die schreibgeschützte **`states`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle gibt ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) zurück, das die möglichen Zustände des benutzerdefinierten Elements darstellt.

## Wert

Ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet), der ein {{jsxref("Set")}} von Zeichenfolgen ist.

## Beispiele

Die folgende Funktion fügt den Zustand `--checked` zu einem `CustomStateSet` hinzu und entfernt ihn dann. Anschließend wird in der Konsole `true` oder `false` ausgegeben, je nachdem, ob das benutzerdefinierte Kontrollkästchen aktiviert oder deaktiviert ist.

```js
set checked(flag) {
  if (flag) {
    this._internals.states.add('--checked');
  } else {
    this._internals.states.delete('--checked');
  }

  console.log(this._internals.states.has('--checked'));
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
