---
title: "CSS: registerProperty() statische Methode"
short-title: registerProperty()
slug: Web/API/CSS/registerProperty_static
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("CSSOM")}}

Die **`CSS.registerProperty()`** statische Methode registriert
[benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*), ermöglicht die Überprüfung des Eigenschaftstyps, Standardwerte und Eigenschaften, die ihre Werte erben oder nicht.

Das Registrieren einer benutzerdefinierten Eigenschaft ermöglicht es Ihnen, dem Browser mitzuteilen, wie sich die benutzerdefinierte Eigenschaft verhalten soll; welche Typen erlaubt sind, ob die benutzerdefinierte Eigenschaft ihren Wert erbt und welcher Standardwert sie hat.

## Syntax

```js-nolint
CSS.registerProperty(propertyDefinition)
```

### Parameter

- `propertyDefinition`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `name`
      - : Ein String, der den
        Namen der definierten Eigenschaft repräsentiert.
    - `syntax` {{optional_inline}}
      - : Ein String, der die erwartete Syntax der definierten Eigenschaft repräsentiert. Standardwert ist `"*"`.
    - `inherits`
      - : Ein boolescher Wert, der definiert, ob die definierte Eigenschaft vererbt werden soll
        (`true`) oder nicht (`false`). Standardwert ist `false`.
    - `initialValue` {{optional_inline}}
      - : Ein String, der den Anfangswert der definierten Eigenschaft repräsentiert.

### Rückgabewert

`undefined`.

### Ausnahmen

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene `name` wurde bereits registriert.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene `name` ist kein gültiger benutzerdefinierter Eigenschaftsname (beginnt mit zwei
    Bindestrichen, z.B. `--foo`).
- {{jsxref("TypeError")}}
  - : Die erforderlichen `name` und/oder `inherits` Mitglieder des Wörterbuchs wurden nicht bereitgestellt.

## Beispiele

Das Folgende registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*),
`--my-color`, mit `registerProperty()`, als Farbe, gibt ihr einen
Standardwert, und lässt sie ihren Wert nicht erben:

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

In diesem Beispiel wurde die benutzerdefinierte Eigenschaft `--my-color` mit der Syntax `<color>` registriert. Wir können diese Eigenschaft nun verwenden, um einen
Farbverlauf bei Hover oder Fokus zu überblenden. Beachten Sie, dass der Übergang mit der registrierten Eigenschaft funktioniert, aber nicht mit der nicht registrierten Eigenschaft!

```css
.registered {
  --my-color: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--my-color));
  transition: --my-color 1s ease-in-out;
}

.registered:hover,
.registered:focus {
  --my-color: #b4d455;
}

.unregistered {
  --unregistered: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--unregistered));
  transition: --unregistered 1s ease-in-out;
}

.unregistered:hover,
.unregistered:focus {
  --unregistered: #b4d455;
}
button {
  font-size: 3vw;
}
```

Wir können diese Stile zu einigen Schaltflächen hinzufügen:

```html
<button class="registered">Background Registered</button>
<button class="unregistered">Background Not Registered</button>
```

{{EmbedLiveSample("Examples", 320, 320)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der CSS-Eigenschaften- und Werte-API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [`CSS`](/de/docs/Web/API/CSS)
- [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static)
- [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static)
- [CSS Fabrikfunktionen](/de/docs/Web/API/CSS/factory_functions_static)
- CSS {{cssxref("@property")}}
