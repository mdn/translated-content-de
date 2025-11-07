---
title: CSS Properties und Werte API
short-title: Eigenschaften- und Werte-API
slug: Web/CSS/Guides/Properties_and_values_API
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS Eigenschaften- und Werte-API**-Modul definiert eine Methode zum Registrieren neuer CSS-Eigenschaften, zur Definition des Datentyps der Eigenschaft, des Vererbungsverhaltens und optional eines Anfangswertes.
Dieses API erweitert das Modul [CSS Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables), welches es Autoren ermöglicht, benutzerdefinierte Eigenschaften in CSS unter Verwendung der [Zwei-Strich-Syntax (`--`)](/de/docs/Web/CSS/Reference/Properties/--*) zu definieren.
Das CSS Eigenschaften- und Werte-API ist Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Familie.

Benutzerdefinierte Eigenschaften ermöglichen die Wiederverwendung von Werten in einem Projekt, um komplexe oder wiederholte Stylesheets zu vereinfachen.
Grundlegende benutzerdefinierte Eigenschaften sind im Modul [CSS Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) definiert.
Die CSS Eigenschaften- und Werte-API erweitert dieses Modul, indem es die Hinzufügung von Metadaten zu benutzerdefinierten Eigenschaften unter Verwendung von CSS mit der [`@property`](/de/docs/Web/CSS/Reference/At-rules/@property) At-Regel oder alternativ mit der JavaScript-Methode [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) ermöglicht.

Egal, ob mit CSS oder JavaScript registriert, das Festlegen von Metadaten für benutzerdefinierte Eigenschaften erlaubt einen erwarteten Datentyp, den der Browser je nach Kontext verwenden kann, definiert einen Anfangswert und ermöglicht es Ihnen, die Vererbung zu kontrollieren.

Die Registrierung von benutzerdefinierten Eigenschaften mit der CSS Eigenschaften- und Werte-API ist robuster als die einfachere CSS-Erklärung von kaskadierenden Variablen für benutzerdefinierte Eigenschaften, insbesondere wenn es darum geht, Werte zu überblenden und zu animieren, da Browser zwischen benutzerdefinierten Werten dieses Typs interpolieren können, während Eigenschaften, die die [Zwei-Strich-Syntax (`--`)](/de/docs/Web/CSS/Reference/Properties/--*) verwenden, mehr wie eine Zeichenfolgenersetzung funktionieren.

## Eigenschaften- und Werte-API in Aktion

Um zu sehen, wie benutzerdefinierte Eigenschaften und Werte über API verwendet werden können, bewegen Sie den Mauszeiger über das untenstehende Feld.

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

Das Feld hat einen [Hintergrund](/de/docs/Web/CSS/Reference/Properties/background), der aus einem [linearen Farbverlauf](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient) von `--stop-color` (die benutzerdefinierte Eigenschaft) zu [`lavenderblush`](/de/docs/Web/CSS/Reference/Values/named-color) besteht.
Der Wert von `--stop-color` ist zunächst auf `cornflowerblue` gesetzt, aber wenn Sie mit der Maus über das Feld fahren, [wechselt](/de/docs/Web/CSS/Reference/Properties/transition) `--stop-color` innerhalb von zwei Sekunden zu `aquamarine` (`linear-gradient(to right, aquamarine, lavenderblush)`).

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

- [Verwendung der CSS Eigenschaften- und Werte-API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
  - : Erklärt, wie man benutzerdefinierte Eigenschaften in CSS und JavaScript registriert, mit Tipps zum Umgang mit nicht definierten und ungültigen Werten, Fallbacks und Vererbung.
- [CSS Houdini](/de/docs/Web/CSS/Guides/Properties_and_values_API/Houdini)
  - : Referenzleitfaden zu Houdini-Ressourcen einschließlich der CSS-Module, API-Leitfäden und externen Ressourcen.
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
  - : Erklärt, was CSS Houdini ist und seine Vorteile, zusammen mit einer Liste der verfügbaren APIs und ihrem Status.

## Verwandte Konzepte

- {{cssxref("var")}}
- [CSSRule](/de/docs/Web/API/CSSRule)
- [CSSStyleValue](/de/docs/Web/API/CSSStyleValue)
- [CSS Scoping](/de/docs/Web/CSS/Guides/Scoping)
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Worklet](/de/docs/Web/API/Worklet)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)
- [CSS Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API) Modul
- [Worklet](/de/docs/Web/API/Worklet) Schnittstelle
- [CSS `env()`](/de/docs/Web/CSS/Reference/Values/env)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
