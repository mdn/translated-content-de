---
title: CSS-Eigenschaften- und Werte-API
slug: Web/CSS/CSS_properties_and_values_API
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **CSS properties and values API**-Modul definiert eine Methode zur Registrierung neuer CSS-Eigenschaften, zur Definition des Datentyps der Eigenschaft, ihres Vererbungsverhaltens und optional eines Anfangswertes. Diese API erweitert das Modul [CSS Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables), das es Autoren ermöglicht, benutzerdefinierte Eigenschaften in CSS mit der [Zwei-Strich-Syntax (`--`)](/de/docs/Web/CSS/Reference/Properties/--*) zu definieren. Die CSS properties and values API ist Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Sammlung.

Benutzerdefinierte Eigenschaften ermöglichen die Wiederverwendung von Werten in einem Projekt, um komplexe oder sich wiederholende Stylesheets zu vereinfachen. Grundlegende benutzerdefinierte Eigenschaften werden im Modul [CSS Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) definiert. Die CSS properties and values API erweitert dieses Modul, indem Metadaten zu benutzerdefinierten Eigenschaften mit CSS durch die [`@property`](/de/docs/Web/CSS/Reference/At-rules/@property)-At-Regel oder alternativ mittels der JavaScript-Methode [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) hinzugefügt werden können.

Unabhängig davon, ob sie mit CSS oder JavaScript registriert sind, ermöglicht das Setzen von Metadaten zu benutzerdefinierten Eigenschaften einen erwarteten Datentyp, den der Browser je nach Kontext verwenden kann, definiert einen Anfangswert und gibt Ihnen die Kontrolle über die Vererbung.

Die Registrierung benutzerdefinierter Eigenschaften mit der CSS properties and values API ist robuster als die einfachere Deklaration benutzerdefinierter Eigenschaften mit CSS-Kaskadenvariablen, insbesondere wenn es um das Übergangs- und Animationsverhalten von Werten geht. Browser können zwischen benutzerdefinierten Werten dieses Typs interpolieren, während Eigenschaften, die die [Zwei-Strich-Syntax (`--`)](/de/docs/Web/CSS/Reference/Properties/--*) verwenden, sich mehr wie eine Zeichenersetzung verhalten.

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

Das Feld hat einen [Hintergrund](/de/docs/Web/CSS/Reference/Properties/background), der aus einem [linearer Verlauf](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient) von `--stop-color` (der benutzerdefinierten Eigenschaft) zu [`lavenderblush`](/de/docs/Web/CSS/Reference/Values/named-color) besteht. Der Wert von `--stop-color` ist zunächst auf `cornflowerblue` gesetzt, aber wenn Sie mit der Maus über das Feld fahren, [wechselt](/de/docs/Web/CSS/Reference/Properties/transition) `--stop-color` über zwei Sekunden zu `aquamarine` (`linear-gradient(to right, aquamarine, lavenderblush)`).

## Referenz

### At-Rules und Deskriptoren

- {{cssxref("@property")}}
  - [syntax](/de/docs/Web/CSS/Reference/At-rules/@property#descriptors)-Deskriptor
    - [`+` and `#`](/de/docs/Web/CSS/Reference/At-rules/@property#descriptors) Multiplikatoren
    - [`|`](/de/docs/Web/CSS/Reference/At-rules/@property#descriptors) Kombinator
  - [inherits](/de/docs/Web/CSS/Reference/At-rules/@property#descriptors)-Deskriptor
  - [initial-value](/de/docs/Web/CSS/Reference/At-rules/@property#descriptors)-Deskriptor

### Schnittstellen und APIs

- [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)
- [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)

## Leitfäden

- [Verwendung der CSS properties and values API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
  - : Erklärt, wie benutzerdefinierte Eigenschaften in CSS und JavaScript registriert werden, mit Hinweisen zum Umgang mit undefinierten und ungültigen Werten, Fallbacks und Vererbung.
- [CSS Houdini](/de/docs/Web/CSS/Guides/Properties_and_values_API/Houdini)
  - : Referenzleitfaden zu Houdini-Ressourcen einschließlich der CSS-Module, API-Leitfäden und externen Ressourcen.
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
  - : Erklärt, was CSS Houdini ist und seine Vorteile, zusammen mit einer Liste verfügbarer APIs und deren Status.

## Verwandte Konzepte

- {{cssxref("var")}}
- [CSSRule](/de/docs/Web/API/CSSRule)
- [CSSStyleValue](/de/docs/Web/API/CSSStyleValue)
- [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping)
- [Using shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Worklet](/de/docs/Web/API/Worklet)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)
- [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping)-Modul
- [Using shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)-Modul
- [Worklet](/de/docs/Web/API/Worklet)-Schnittstelle
- [CSS `env()`](/de/docs/Web/CSS/Reference/Values/env)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
