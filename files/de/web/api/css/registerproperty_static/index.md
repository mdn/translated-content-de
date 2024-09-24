---
title: "CSS: registerProperty()-Methode"
short-title: registerProperty()
slug: Web/API/CSS/registerProperty_static
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("CSSOM")}}

Die statische Methode **`CSS.registerProperty()`** registriert [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*), was eine Typprüfung der Eigenschaften, Standardwerte und die Möglichkeit, Eigenschaften zu definieren, die ihren Wert erben oder nicht, ermöglicht.

Durch das Registrieren einer benutzerdefinierten Eigenschaft können Sie dem Browser mitteilen, wie die benutzerdefinierte Eigenschaft sich verhalten soll; welche Typen erlaubt sind, ob die benutzerdefinierte Eigenschaft ihren Wert erbt und welcher Standardwert für die benutzerdefinierte Eigenschaft gilt.

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
      - : Ein String, der die erwartete Syntax der definierten Eigenschaft darstellt. Der Standardwert ist `"*"`.
    - `inherits`
      - : Ein Boolean-Wert, der definiert, ob die definierte Eigenschaft geerbt werden soll (`true`) oder nicht (`false`). Der Standardwert ist `false`.
    - `initialValue` {{optional_inline}}
      - : Ein String, der den Anfangswert der definierten Eigenschaft darstellt.

### Rückgabewert

`undefined`.

### Ausnahmen

- `InvalidModificationError` {{domxref("DOMException")}}
  - : Der angegebene `name` wurde bereits registriert.
- `SyntaxError` {{domxref("DOMException")}}
  - : Der angegebene `name` ist kein gültiger Name für eine benutzerdefinierte Eigenschaft (beginnt mit zwei Bindestrichen, z.B. `--foo`).
- {{jsxref("TypeError")}}
  - : Die erforderlichen `name`- und/oder `inherits`-Dictionary-Mitglieder wurden nicht bereitgestellt.

## Beispiele

Das folgende Beispiel registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*), `--my-color`, mit `registerProperty()`, als Farbe, gibt ihr einen Standardwert und legt fest, dass sie ihren Wert nicht erbt:

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

In diesem Beispiel wurde die benutzerdefinierte Eigenschaft `--my-color` mithilfe der Syntax `<color>` registriert. Wir können diese Eigenschaft nun verwenden, um einen Farbverlauf beim Hover oder Fokus zu überblenden. Beachten Sie, dass der Übergang mit der registrierten Eigenschaft funktioniert, jedoch nicht mit der nicht registrierten Eigenschaft!

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

Wir können diese Stile auf einige Buttons anwenden:

```html
<button class="registered">Hintergrund registriert</button>
<button class="unregistered">Hintergrund nicht registriert</button>
```

{{EmbedLiveSample("Examples", 320, 320)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden der CSS-Eigenschaften- und Werte-API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- {{DOMxRef("CSS")}}
- {{DOMxRef("CSS/supports_static", "CSS.supports()")}}
- {{DOMxRef("CSS/escape_static", "CSS.escape()")}}
- [CSS-Fabrikfunktionen](/de/docs/Web/API/CSS/factory_functions_static)
- CSS {{cssxref("@property")}}
