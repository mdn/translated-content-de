---
title: "CSS: registerProperty() statische Methode"
short-title: registerProperty()
slug: Web/API/CSS/registerProperty_static
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef("CSSOM")}}

Die statische Methode **`CSS.registerProperty()`** registriert
[benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) und ermöglicht die Überprüfung von Eigenschaftstypen, Standardwerte und Eigenschaften, die ihre Werte entweder erben oder nicht.

Durch das Registrieren einer benutzerdefinierten Eigenschaft können Sie dem Browser mitteilen, wie sich die benutzerdefinierte Eigenschaft verhalten soll: welche Typen erlaubt sind, ob die benutzerdefinierte Eigenschaft ihren Wert erbt und was der Standardwert der benutzerdefinierten Eigenschaft ist.

## Syntax

```js-nolint
CSS.registerProperty(propertyDefinition)
```

### Parameter

- `propertyDefinition`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `name`
      - : Ein String, der den Namen der definierten Eigenschaft darstellt.
    - `syntax` {{optional_inline}}
      - : Ein String, der die erwartete Syntax der definierten Eigenschaft darstellt. Standardwert ist `"*"`.
    - `inherits`
      - : Ein boolescher Wert, der definiert, ob die definierte Eigenschaft vererbt werden soll (`true`) oder nicht (`false`). Standardwert ist `false`.
    - `initialValue` {{optional_inline}}
      - : Ein String, der den Anfangswert der definierten Eigenschaft darstellt.

### Rückgabewert

`undefined`.

### Ausnahmen

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene `name` wurde bereits registriert.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene `name` ist kein gültiger Name für eine benutzerdefinierte Eigenschaft (beginnt mit zwei Bindestrichen, z.B. `--foo`).
- {{jsxref("TypeError")}}
  - : Die erforderlichen `name`- und/oder `inherits`-Einträge im Wörterbuch wurden nicht angegeben.

## Beispiele

Das folgende Beispiel registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*),
`--my-color`, mit der Methode `registerProperty()`, als Farbe, gibt ihr einen
Standardwert und lässt sie ihren Wert nicht erben:

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

In diesem Beispiel wurde die benutzerdefinierte Eigenschaft `--my-color` mit der Syntax `<color>` registriert. Wir können nun diese Eigenschaft nutzen, um einen
Gradienten beim Hover oder Fokus zu überblenden. Beachten Sie, dass mit der registrierten Eigenschaft die Überblendung funktioniert, jedoch nicht mit der nicht registrierten Eigenschaft!

```css
.registered {
  --my-color: #c0ffee;
  background-image: linear-gradient(to right, white, var(--my-color));
  transition: --my-color 1s ease-in-out;
}

.registered:hover,
.registered:focus {
  --my-color: #b4d455;
}

.unregistered {
  --unregistered: #c0ffee;
  background-image: linear-gradient(to right, white, var(--unregistered));
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

Wir können diese Stile zu einigen Buttons hinzufügen:

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
- [CSS-Fabrikenfunktionen](/de/docs/Web/API/CSS/factory_functions_static)
- CSS {{cssxref("@property")}}
