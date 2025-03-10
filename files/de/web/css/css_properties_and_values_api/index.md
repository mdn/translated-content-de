---
title: CSS-Eigenschaften- und Werte-API
slug: Web/CSS/CSS_properties_and_values_API
l10n:
  sourceCommit: 2d2f0eecc977b34f20dc4d456bd0fe2f28b0e54d
---

{{CSSRef}}

Das **CSS-Eigenschaften- und Werte-API**-Modul definiert eine Methode zur Registrierung neuer CSS-Eigenschaften, zur Festlegung des Datentyps der Eigenschaft, des Verhaltens bei Vererbung und optional eines Anfangswerts.
Diese API erweitert das [CSS-Custom-Properties für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables)-Modul, das es Autoren ermöglicht, benutzerdefinierte Eigenschaften in CSS mit [zwei Bindestrich-Syntax (`--`)](/de/docs/Web/CSS/--*) zu definieren.
Die CSS-Eigenschaften- und Werte-API ist Teil des [CSS Houdini](/de/docs/Web/CSS/CSS_properties_and_values_API/Houdini) API-Dachmoduls.

Benutzerdefinierte Eigenschaften ermöglichen es, Werte über ein Projekt hinweg wiederzuverwenden, um komplexe oder sich wiederholende Stylesheets zu vereinfachen.
Grundlegende benutzerdefinierte Eigenschaften werden im Modul [CSS-Custom-Properties für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) definiert.
Die CSS-Eigenschaften- und Werte-API erweitert dieses Modul, indem Metadaten zu benutzerdefinierten Eigenschaften in CSS mit der [`@property`](/de/docs/Web/CSS/@property) at-Regel oder alternativ mit der [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) Methode von JavaScript hinzugefügt werden.

Unabhängig davon, ob sie mit CSS oder JavaScript registriert werden, ermöglicht das Setzen von Metadaten auf benutzerdefinierten Eigenschaften die erwartete Verwendung eines Datentyps, den der Browser je nach Kontext nutzen kann, definiert einen Anfangswert und ermöglicht die Kontrolle der Vererbung.

Die Registrierung benutzerdefinierter Eigenschaften mittels der CSS-Eigenschaften- und Werte-API ist robuster als die grundlegendere CSS-kaskadierende-Variable-Erklärung, vor allem wenn es darum geht, Werte zu animieren oder zu transitionieren, da Browser zwischen benutzerdefinierten Werten dieses Typs interpolieren können, während Eigenschaften, die [zwei Bindestrich-Syntax (`--`)](/de/docs/Web/CSS/--*) verwenden, sich eher wie eine String-Ersetzung verhalten.

## Eigenschaften- und Werte-API in Aktion

Um zu sehen, wie benutzerdefinierte Eigenschaften und Werte über die API verwendet werden können, fahren Sie mit der Maus über das Feld unten.

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

Das Feld hat einen [Hintergrund](/de/docs/Web/CSS/background), der aus einem [linearen Verlauf](/de/docs/Web/CSS/gradient/linear-gradient) von `--stop-color` (der benutzerdefinierte Eigenschaft) zu [`lavenderblush`](/de/docs/Web/CSS/named-color) besteht.
Der Wert von `--stop-color` ist zunächst auf `cornflowerblue` gesetzt, aber wenn Sie mit der Maus über das Feld fahren, wird `--stop-color` über zwei Sekunden hinweg nach `aquamarine` [übergeblendet](/de/docs/Web/CSS/transition) (`linear-gradient(to right, aquamarine, lavenderblush)`).

## Referenz

### At-Rules

- {{cssxref("@property")}}
  - [syntax](/de/docs/Web/CSS/@property#descriptors)-Descriptor
    - [`+` und `#`](/de/docs/Web/CSS/@property#descriptors)-Multiplikatoren
    - [`|`](/de/docs/Web/CSS/@property#descriptors)-Kombinator
  - [inherits](/de/docs/Web/CSS/@property#descriptors)-Descriptor
  - [initial-value](/de/docs/Web/CSS/@property#descriptors)-Descriptor

### Schnittstellen und APIs

- [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)
- [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)

## Leitfäden

- [Verwendung der CSS-Eigenschaften- und Werte-API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)

  - : Erklärt, wie man benutzerdefinierte Eigenschaften in CSS und JavaScript registriert, mit Hinweisen zur Handhabung undefinierter und ungültiger Werte, Fallbacks und Vererbung.

- [CSS Houdini](/de/docs/Web/API/CSS_Properties_and_Values_API/Houdini)

  - : Referenzleitfaden zu Houdini-Ressourcen einschließlich der CSS-Module, API-Leitfäden und externen Ressourcen.

- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
  - : Erläutert, was CSS Houdini ist und welche Vorteile es bietet, zusammen mit einer Liste der verfügbaren APIs und deren Status.

## Verwandte Konzepte

- {{cssxref("var")}}
- [CSSRule](/de/docs/Web/API/CSSRule)
- [CSSStyleValue](/de/docs/Web/API/CSSStyleValue)
- [CSS scoping](/de/docs/Web/CSS/CSS_scoping)
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Worklet](/de/docs/Web/API/Worklet)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Kaskadierung und -Vererbung](/de/docs/Web/CSS/CSS_cascade)
- [CSS scoping](/de/docs/Web/CSS/CSS_scoping)-Modul
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)-Modul
- [Worklet](/de/docs/Web/API/Worklet)-Schnittstelle
- [CSS `env()`](/de/docs/Web/CSS/env)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
