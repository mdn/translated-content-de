---
title: "ElementInternals: states-Eigenschaft"
short-title: states
slug: Web/API/ElementInternals/states
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{APIRef("Web Components")}}

Die schreibgeschützte **`states`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle gibt ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) zurück, das die möglichen Zustände des benutzerdefinierten Elements repräsentiert.

## Wert

Ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet), das ein {{jsxref("Set")}} von Zeichenfolgen ist.

## Beispiele

Die folgende Funktion fügt dem `CustomStateSet` den Zustand `--checked` hinzu bzw. entfernt ihn, und gibt dann `true` oder `false` an die Konsole aus, je nachdem, ob das benutzerdefinierte Kontrollkästchen aktiviert oder deaktiviert ist.

```js
class MyElement extends HTMLElement {
  set checked(flag) {
    if (flag) {
      this._internals.states.add("--checked");
    } else {
      this._internals.states.delete("--checked");
    }

    console.log(this._internals.states.has("--checked"));
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
