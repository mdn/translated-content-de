---
title: CSS-Eigenschaften und -Werte API
slug: Web/CSS/CSS_properties_and_values_API
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{CSSRef}}

Das Modul der **CSS-Eigenschaften und -Werte API** definiert eine Methode zur Registrierung neuer CSS-Eigenschaften, zur Definition des Datentyps der Eigenschaft, des Vererbungsverhaltens und optional eines Anfangswertes. Diese API erweitert das Modul [CSS-Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables), das es Autoren ermöglicht, benutzerdefinierte Eigenschaften in CSS mit der [Zwei-Strich-Syntax (`--`)](/de/docs/Web/CSS/--*) zu definieren. Die CSS-Eigenschaften und -Werte API ist Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Gruppe.

Benutzerdefinierte Eigenschaften ermöglichen es, Werte in einem Projekt wiederzuverwenden, um komplexe oder sich wiederholende Stylesheets zu vereinfachen. Grundlegende benutzerdefinierte Eigenschaften sind im Modul [CSS-Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) definiert. Die CSS-Eigenschaften und -Werte API erweitert dieses Modul, indem Metadaten zu benutzerdefinierten Eigenschaften mit CSS mithilfe des [`@property`](/de/docs/Web/CSS/@property)-At-Regel oder alternativ mit der JavaScript-Methode [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) hinzugefügt werden.

Egal, ob sie mit CSS oder JavaScript registriert werden: Das Festlegen von Metadaten auf benutzerdefinierten Eigenschaften bietet einen erwarteten Datentyp, den der Browser je nach Kontext verwenden kann, definiert einen Anfangswert und ermöglicht die Steuerung der Vererbung.

Die Registrierung benutzerdefinierter Eigenschaften mit der CSS-Eigenschaften und -Werte API ist robuster als die einfachere Erklärung benutzerdefinierter kaskadierender Variableneigenschaften, insbesondere wenn es um das Übergangs- und Animationsverhalten geht, da Browser zwischen benutzerdefinierten Werten dieses Typs interpolieren können, während Eigenschaften, die die [Zwei-Strich-Syntax (`--`)](/de/docs/Web/CSS/--*) verwenden, sich eher wie ein String-Austausch verhalten.

## Eigenschaften und Werte API in Aktion

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

Das Feld hat einen [Hintergrund](/de/docs/Web/CSS/background), der aus einem [linearen Verlauf](/de/docs/Web/CSS/gradient/linear-gradient) von `--stop-color` (der benutzerdefinierte Eigenschaft) zu [`lavenderblush`](/de/docs/Web/CSS/named-color) besteht. Der Wert von `--stop-color` ist zunächst auf `cornflowerblue` gesetzt, aber wenn Sie mit der Maus über das Feld fahren, [übergangt](/de/docs/Web/CSS/transition) `--stop-color` über zwei Sekunden nach `aquamarine` (`linear-gradient(to right, aquamarine, lavenderblush)`).

## Referenz

### At-Rules

- {{cssxref("@property")}}
  - [syntax](/de/docs/Web/CSS/@property#descriptors)-Deskriptor
    - [`+` und `#`](/de/docs/Web/CSS/@property#descriptors)-Multiplikatoren
    - [`|`](/de/docs/Web/CSS/@property#descriptors)-Kombinator
  - [inherits](/de/docs/Web/CSS/@property#descriptors)-Deskriptor
  - [initial-value](/de/docs/Web/CSS/@property#descriptors)-Deskriptor

### Schnittstellen und APIs

- [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)
- [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)

## Leitfäden

- [Verwendung der CSS-Eigenschaften und -Werte API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
  - : Erklärt, wie benutzerdefinierte Eigenschaften in CSS und JavaScript registriert werden, mit Tipps zum Umgang mit undefinierten und ungültigen Werten, Fallbacks und Vererbung.
- [CSS Houdini](/de/docs/Web/CSS/CSS_properties_and_values_API/Houdini)
  - : Referenzleitfaden zu Houdini-Ressourcen einschließlich der CSS-Module, API-Leitfäden und externen Ressourcen.
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
  - : Erklärt, was CSS Houdini ist und welche Vorteile es bietet, zusammen mit einer Liste der verfügbaren APIs und ihrem Status.

## Verwandte Konzepte

- {{cssxref("var")}}
- [CSSRule](/de/docs/Web/API/CSSRule)
- [CSSStyleValue](/de/docs/Web/API/CSSStyleValue)
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping)
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Worklet](/de/docs/Web/API/Worklet)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping)-Modul
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)-Modul
- [Worklet](/de/docs/Web/API/Worklet)-Schnittstelle
- [CSS `env()`](/de/docs/Web/CSS/env)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
