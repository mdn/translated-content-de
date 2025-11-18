---
title: CSS-Eigenschaften- und Werte-API
short-title: Eigenschaften- und Werte-API
slug: Web/CSS/Guides/Properties_and_values_API
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Das **CSS-Eigenschaften- und Werte-API**-Modul definiert eine Methode zur Registrierung neuer CSS-Eigenschaften und zur Definition des Datentyps der Eigenschaft, des Vererbungsverhaltens und, optional, eines Anfangswerts. Diese API erweitert das Modul [CSS Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables), das es Autoren ermöglicht, benutzerdefinierte Eigenschaften in CSS mit der [zwei-Bindestrich-Syntax (`--`)](/de/docs/Web/CSS/Reference/Properties/--*) zu definieren. Die CSS-Eigenschaften- und Werte-API ist Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Sammlungen.

Benutzerdefinierte Eigenschaften ermöglichen die Wiederverwendung von Werten in einem Projekt, um komplexe oder sich wiederholende Stylesheets zu vereinfachen. Grundlegende benutzerdefinierte Eigenschaften werden im Modul [CSS Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) definiert. Die CSS-Eigenschaften- und Werte-API erweitert dieses Modul und ermöglicht das Hinzufügen von Metadaten zu benutzerdefinierten Eigenschaften in CSS mit der [`@property`](/de/docs/Web/CSS/Reference/At-rules/@property) At-Regel oder alternativ mit der JavaScript-Methode [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static).

Unabhängig davon, ob die Registrierung mit CSS oder JavaScript erfolgt, ermöglicht die Festlegung von Metadaten auf benutzerdefinierten Eigenschaften, einen erwarteten Datentyp zu definieren, den der Browser je nach Kontext verwenden kann, einen Anfangswert zu definieren und die Vererbung zu steuern.

Die Registrierung von benutzerdefinierten Eigenschaften mit der CSS-Eigenschaften- und Werte-API ist robuster als die einfachere Deklaration von benutzerdefinierten CSS-Kaskadenvariablen, insbesondere wenn es um das Überblenden und Animieren von Werten geht, da Browser zwischen benutzerdefinierten Werten dieses Typs interpolieren können, während Eigenschaften, die die [zwei-Bindestrich-Syntax (`--`)](/de/docs/Web/CSS/Reference/Properties/--*) verwenden, eher wie eine Zeichenersatzfunktion wirken.

## Eigenschaften- und Werte-API in Aktion

Um zu sehen, wie benutzerdefinierte Eigenschaften und Werte über die API verwendet werden können, bewegen Sie den Mauszeiger über das unten stehende Feld.

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

Das Feld hat einen [background](/de/docs/Web/CSS/Reference/Properties/background), der aus einem [linear gradient](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient) von `--stop-color` (die benutzerdefinierte Eigenschaft) zu [`lavenderblush`](/de/docs/Web/CSS/Reference/Values/named-color) besteht. Der Wert von `--stop-color` ist zunächst auf `cornflowerblue` gesetzt, aber wenn Sie den Mauszeiger über das Feld bewegen, [übergang](/de/docs/Web/CSS/Reference/Properties/transition) `--stop-color` in `aquamarine` über zwei Sekunden (`linear-gradient(to right, aquamarine, lavenderblush)`).

## Referenz

### At-Regeln und Deskriptoren

- {{cssxref("@property")}}
  - [syntax](/de/docs/Web/CSS/Reference/At-rules/@property#descriptors) Deskriptor
    - [`+` und `#`](/de/docs/Web/CSS/Reference/At-rules/@property#descriptors) Multiplikatoren
    - [`|`](/de/docs/Web/CSS/Reference/At-rules/@property#descriptors) Kombinator
  - [inherits](/de/docs/Web/CSS/Reference/At-rules/@property#descriptors) Deskriptor
  - [initial-value](/de/docs/Web/CSS/Reference/At-rules/@property#descriptors) Deskriptor

### Schnittstellen und APIs

- [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)
- [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)

## Leitfäden

- [Verwendung der CSS-Eigenschaften- und Werte-API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
  - : Erklärt, wie benutzerdefinierte Eigenschaften in CSS und JavaScript registriert werden, mit Hinweisen zur Behandlung undefinierter und ungültiger Werte, Rückfallszenarien und Vererbung.
- [CSS Houdini](/de/docs/Web/CSS/Guides/Properties_and_values_API/Houdini)
  - : Referenzleitfaden zu Houdini-Ressourcen inklusive der CSS-Module, API-Leitfäden und externen Ressourcen.
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
  - : Erklärt, was CSS Houdini ist und welche Vorteile es bietet, zusammen mit einer Liste verfügbarer APIs und deren Status.

## Verwandte Konzepte

- {{cssxref("var")}}
- [CSSRule](/de/docs/Web/API/CSSRule)
- [CSSStyleValue](/de/docs/Web/API/CSSStyleValue)
- [CSS-Bereichsbegrenzung](/de/docs/Web/CSS/Guides/Scoping)
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS-Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS-Malereien-API](/de/docs/Web/API/CSS_Painting_API)
- [Worklet](/de/docs/Web/API/Worklet)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)
- [CSS-Bereichsbegrenzung](/de/docs/Web/CSS/Guides/Scoping) Modul
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS-Malereien-API](/de/docs/Web/API/CSS_Painting_API) Modul
- [Worklet](/de/docs/Web/API/Worklet) Schnittstelle
- [CSS `env()`](/de/docs/Web/CSS/Reference/Values/env)
- [CSS-Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
