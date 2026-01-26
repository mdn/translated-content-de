---
title: CSS-Eigenschaften und Werte API
short-title: Eigenschaften und Werte API
slug: Web/CSS/Guides/Properties_and_values_API
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **CSS Properties and Values API**-Modul definiert eine Methode zum Registrieren neuer CSS-Eigenschaften, zur Definition des Datentyps der Eigenschaft, ihres Vererbungsverhaltens und optional eines Anfangswerts.
Diese API erweitert das Modul [CSS Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables), das es Autoren ermöglicht, benutzerdefinierte Eigenschaften in CSS mit der [Syntax mit zwei Bindestrichen (`--`)](/de/docs/Web/CSS/Reference/Properties/--*) zu definieren.
Die CSS Properties and Values API ist Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs)-Pakets von APIs.

Benutzerdefinierte Eigenschaften ermöglichen die Wiederverwendung von Werten in einem Projekt, um komplexe oder sich wiederholende Stylesheets zu vereinfachen.
Grundlegende benutzerdefinierte Eigenschaften werden im Modul [CSS Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) definiert.
Die CSS Properties and Values API erweitert dieses Modul, indem sie das Hinzufügen von Metadaten zu benutzerdefinierten Eigenschaften in CSS mit der {{cssxref("@property")}}-Regel ermöglicht oder alternativ die Verwendung der [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static)-Methode in JavaScript.

Ob in CSS oder JavaScript registriert: Das Festlegen von Metadaten auf benutzerdefinierten Eigenschaften bietet einen erwarteten Datentyp, den der Browser je nach Kontext verwenden kann, definiert einen Anfangswert und ermöglicht die Kontrolle der Vererbung.

Die Registrierung benutzerdefinierter Eigenschaften mittels der CSS Properties and Values API ist robuster als die grundlegendere CSS-Kaskadenvariable-Erklärung benutzerdefinierter Eigenschaften, insbesondere wenn es um das Übergang und die Animation von Werten geht. Browser können zwischen benutzerdefinierten Werten dieses Typs interpolieren, während Eigenschaften, die die [Syntax mit zwei Bindestrichen (`--`)](/de/docs/Web/CSS/Reference/Properties/--*) verwenden, sich eher wie ein String-Ersatz verhalten.

## Eigenschaften und Werte API in Aktion

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

{{EmbedLiveSample("Properties and values API in action",600,120)}}

Das Feld hat einen [Hintergrund](/de/docs/Web/CSS/Reference/Properties/background), der aus einem [linearen Verlauf](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient) von `--stop-color` (der benutzerdefinierten Eigenschaft) zu [`lavenderblush`](/de/docs/Web/CSS/Reference/Values/named-color) besteht.
Der Wert von `--stop-color` ist zunächst auf `cornflowerblue` gesetzt, aber wenn Sie den Mauszeiger über das Feld bewegen, [übergang](/de/docs/Web/CSS/Reference/Properties/transition) `--stop-color` zu `aquamarine` über zwei Sekunden (`linear-gradient(to right, aquamarine, lavenderblush)`).

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

- [Verwendung der CSS-Eigenschaften und Werte API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
  - : Erklärt, wie benutzerdefinierte Eigenschaften in CSS und JavaScript registriert werden, mit Hinweisen zur Handhabung undefinierter und ungültiger Werte, Fallbacks und Vererbung.
- [CSS Houdini](/de/docs/Web/CSS/Guides/Properties_and_values_API/Houdini)
  - : Referenzleitfaden zu Houdini-Ressourcen, einschließlich der CSS-Module, API-Leitfäden und externen Ressourcen.
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
  - : Erklärt, was CSS Houdini ist und seine Vorteile, zusammen mit einer Liste der verfügbaren APIs und deren Status.

## Verwandte Konzepte

- {{cssxref("var")}}
- [CSSRule](/de/docs/Web/API/CSSRule)
- [CSSStyleValue](/de/docs/Web/API/CSSStyleValue)
- [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping)
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Worklet](/de/docs/Web/API/Worklet)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)
- [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API) Modul
- [Worklet](/de/docs/Web/API/Worklet) Schnittstelle
- [CSS `env()`](/de/docs/Web/CSS/Reference/Values/env)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
