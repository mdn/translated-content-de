---
title: CSS properties and values API
slug: Web/CSS/CSS_properties_and_values_API
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Das Modul **CSS properties and values API** definiert eine Methode zur Registrierung neuer CSS-Eigenschaften, zur Definition des Datentyps der Eigenschaft, des Vererbungssverhaltens und optional eines Anfangswertes. Diese API baut auf dem Modul [CSS custom properties for cascading variables](/de/docs/Web/CSS/CSS_cascading_variables) auf, das es Autoren ermöglicht, benutzerdefinierte Eigenschaften in CSS mithilfe der [Zwei-Bindestrich-Syntax (`--`)](/de/docs/Web/CSS/--*) zu definieren. Die CSS properties and values API ist Teil der [CSS Houdini](/de/docs/Web/CSS/CSS_Houdini) API-Gruppe.

Benutzerdefinierte Eigenschaften ermöglichen es, Werte in einem Projekt wiederzuverwenden, um komplexe oder wiederkehrende Stylesheets zu vereinfachen. Grundlegende benutzerdefinierte Eigenschaften werden im Modul [CSS custom properties for cascading variables](/de/docs/Web/CSS/CSS_cascading_variables) definiert. Die CSS properties and values API erweitert dieses Modul und ermöglicht es, Metadaten zu benutzerdefinierten Eigenschaften mit CSS mittels der [`@property`](/de/docs/Web/CSS/@property) At-Regel oder alternativ mit der JavaScript-Methode [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) hinzuzufügen.

Ob mit CSS oder JavaScript registriert, das Setzen von Metadaten auf benutzerdefinierte Eigenschaften bietet einen erwarteten Datentyp, den der Browser je nach Kontext verwenden kann, definiert einen Anfangswert und ermöglicht die Kontrolle der Vererbung.

Die Registrierung benutzerdefinierter Eigenschaften mit der CSS properties and values API ist robuster als die einfachere Deklaration benutzerdefinierter Eigenschaften in CSS-Cascading-Variablen, insbesondere wenn es um die Übergänge und Animationen von Werten geht, da Browser zwischen benutzerdefinierten Werten dieses Typs interpolieren können, während Eigenschaften, die die [Zwei-Bindestrich-Syntax (`--`)](/de/docs/Web/CSS/--*) verwenden, sich eher wie eine Zeichenersetzung verhalten.

## Properties and values API in Aktion

Um zu sehen, wie benutzerdefinierte Eigenschaften und Werte mittels API verwendet werden können, fahren Sie mit dem Mauszeiger über das folgende Feld.

```js hidden
CSS.registerProperty({
  name: "--stop-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "cornflowerblue",
});
```

```css hidden
.box {
  padding: 1rem;
  width: 90%;
  height: 4rem;
  font-family: sans-serif;
  font-size: large;
  color: white;
  border-radius: 0.5rem;
}

.box {
  background: linear-gradient(to right, var(--stop-color), lavenderblush);
  transition: --stop-color 2s;
}

.box:hover {
  --stop-color: aquamarine;
}
```

```html hidden
<div class="box"><p>Linear gradient with transition</p></div>
```

{{EmbedLiveSample("Properties and values API in action",600,120)}}

Das Feld hat einen [Hintergrund](/de/docs/Web/CSS/background), der aus einem [linearen Verlauf](/de/docs/Web/CSS/gradient/linear-gradient) von `--stop-color` (der benutzerdefinierten Eigenschaft) zu [`lavenderblush`](/de/docs/Web/CSS/named-color) besteht. Der Wert von `--stop-color` ist zunächst auf `cornflowerblue` gesetzt, aber wenn Sie mit dem Mauszeiger über das Feld fahren, [wechselt](/de/docs/Web/CSS/transition) `--stop-color` innerhalb von zwei Sekunden zu `aquamarine` (`linear-gradient(to right, aquamarine, lavenderblush)`).

## Referenz

### At-Regeln

- {{cssxref("@property")}}
  - [syntax](/de/docs/Web/CSS/@property#descriptors) Deskriptor
    - [`+` und `#`](/de/docs/Web/CSS/@property#descriptors) Multiplikatoren
    - [`|`](/de/docs/Web/CSS/@property#descriptors) Kombinator
  - [inherits](/de/docs/Web/CSS/@property#descriptors) Deskriptor
  - [initial-value](/de/docs/Web/CSS/@property#descriptors) Deskriptor

### Schnittstellen und APIs

- [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)
- [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)

## Leitfäden

- [Verwendung der CSS properties and values API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)

  - : Erklärt, wie benutzerdefinierte Eigenschaften in CSS und JavaScript registriert werden, mit Tipps zum Umgang mit undefinierten und ungültigen Werten, Fallbacks und Vererbung.

- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
  - : Erklärt, was CSS Houdini ist und seine Vorteile, zusammen mit einer Liste der verfügbaren APIs und deren Status.

## Verwandte Konzepte

- {{cssxref("var")}}
- [CSSRule](/de/docs/Web/API/CSSRule)
- [CSSStyleValue](/de/docs/Web/API/CSSStyleValue)
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping)
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Worklet](/de/docs/Web/API/Worklet)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API) Modul
- [Worklet](/de/docs/Web/API/Worklet) Schnittstelle
- [CSS `env()`](/de/docs/Web/CSS/env)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
