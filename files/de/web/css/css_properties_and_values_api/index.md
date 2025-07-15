---
title: CSS-Eigenschaften und Werte API
slug: Web/CSS/CSS_properties_and_values_API
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Eigenschaften und Werte API**-Modul definiert eine Methode zur Registrierung neuer CSS-Eigenschaften, einschließlich der Definition des Datentyps der Eigenschaft, des Verhaltens bei Vererbung und optional eines Anfangswerts.
Diese API erweitert das Modul [CSS custom properties for cascading variables](/de/docs/Web/CSS/CSS_cascading_variables), das es Autoren ermöglicht, benutzerdefinierte Eigenschaften in CSS mithilfe der [Zwei-Strich-Syntax (`--`)](/de/docs/Web/CSS/--*) zu definieren.
Die CSS-Eigenschaften und Werte API ist Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Überbaus.

Benutzerdefinierte Eigenschaften ermöglichen das Wiederverwenden von Werten in einem gesamten Projekt, um komplexe oder sich wiederholende Stylesheets zu vereinfachen.
Grundlegende benutzerdefinierte Eigenschaften werden im Modul [CSS custom properties for cascading variables](/de/docs/Web/CSS/CSS_cascading_variables) definiert.
Die CSS-Eigenschaften und Werte API erweitert dieses Modul, indem sie es ermöglicht, Metadaten zu benutzerdefinierten Eigenschaften mit CSS durch die [`@property`](/de/docs/Web/CSS/@property)- At-Regel oder alternativ mithilfe der JavaScript-Methode [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) hinzuzufügen.

Egal, ob mit CSS oder JavaScript registriert, das Setzen von Metadaten auf benutzerdefinierten Eigenschaften ermöglicht die Definition eines erwarteten Datentyps, den der Browser je nach Kontext verwenden kann, definiert einen Anfangswert und lässt Sie die Vererbung steuern.

Die Registrierung benutzerdefinierter Eigenschaften über die CSS-Eigenschaften und Werte API ist robuster als die grundlegende Deklaration benutzerdefinierter Eigenschaften für CSS-Kaskadenvariablen, insbesondere hinsichtlich der Übergänge und Animationen von Werten, da Browser zwischen benutzerdefinierten Werten dieser Art interpolieren können, während Eigenschaften, die die [Zwei-Strich-Syntax (`--`)](/de/docs/Web/CSS/--*) verwenden, sich eher wie eine Zeichenkettenersetzung verhalten.

## Eigenschaften- und Werte-API in Aktion

Um zu sehen, wie benutzerdefinierte Eigenschaften und Werte über die API verwendet werden können, bewegen Sie den Mauszeiger über das Feld unten.

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

{{EmbedLiveSample("Eigenschaften- und Werte-API in Aktion",600,120)}}

Das Feld hat einen [Hintergrund](/de/docs/Web/CSS/background), der aus einem [linearen Verlauf](/de/docs/Web/CSS/gradient/linear-gradient) von `--stop-color` (die benutzerdefinierte Eigenschaft) zu [`lavenderblush`](/de/docs/Web/CSS/named-color) besteht.
Der Wert von `--stop-color` ist zunächst auf `cornflowerblue` gesetzt, aber wenn Sie den Mauszeiger über das Feld bewegen, [transitioniert](/de/docs/Web/CSS/transition) `--stop-color` über zwei Sekunden zu `aquamarine` (`linear-gradient(to right, aquamarine, lavenderblush)`).

## Referenz

### At-Regeln

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

- [Verwendung der CSS-Eigenschaften und Werte API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
  - : Erklärt, wie man benutzerdefinierte Eigenschaften in CSS und JavaScript registriert, mit Hinweisen zum Umgang mit undefinierten und ungültigen Werten, Fallbacks und Vererbung.
- [CSS Houdini](/de/docs/Web/CSS/CSS_properties_and_values_API/Houdini)
  - : Referenzleitfaden zu Houdini-Ressourcen, einschließlich der CSS-Module, API-Leitfäden und externer Ressourcen.
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
  - : Erklärt, was CSS Houdini ist und welche Vorteile es bietet, zusammen mit einer Liste der verfügbaren APIs und deren Status.

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

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping)-Modul
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)-Modul
- [Worklet](/de/docs/Web/API/Worklet)-Schnittstelle
- [CSS `env()`](/de/docs/Web/CSS/env)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
