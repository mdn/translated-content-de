---
title: CSS properties and values API
slug: Web/CSS/CSS_properties_and_values_API
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Das Modul **CSS properties and values API** definiert eine Methode zur Registrierung neuer CSS-Eigenschaften, zur Definition des Datentyps der Eigenschaft, des Verhaltens bei Vererbung und optional eines Anfangswerts.
Diese API erweitert das Modul [CSS custom properties for cascading variables](/de/docs/Web/CSS/CSS_cascading_variables), das es Autoren ermöglicht, benutzerdefinierte Eigenschaften in CSS mithilfe der [Two-Dash-Syntax (`--`)](/de/docs/Web/CSS/--*) zu definieren.
Die CSS properties and values API ist Teil des [CSS Houdini](/de/docs/Web/CSS/CSS_Houdini)-APIs.

Benutzerdefinierte Eigenschaften ermöglichen Ihnen das Wiederverwenden von Werten in einem Projekt, um komplexe oder wiederkehrende Stylesheets zu vereinfachen.
Grundlegende benutzerdefinierte Eigenschaften werden im Modul [CSS custom properties for cascading variables](/de/docs/Web/CSS/CSS_cascading_variables) definiert.
Die CSS properties and values API baut auf diesem Modul auf und ermöglicht es, Metadaten zu benutzerdefinierten Eigenschaften mit CSS über die [`@property`](/de/docs/Web/CSS/@property)-Regel oder alternativ über die JavaScript-Methode [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) hinzuzufügen.

Egal, ob mit CSS oder JavaScript registriert, das Festlegen von Metadaten auf benutzerdefinierten Eigenschaften bietet einen erwarteten Datentyp, den der Browser je nach Kontext verwenden kann, definiert einen Anfangswert und ermöglicht Ihnen die Kontrolle über die Vererbung.

Die Registrierung benutzerdefinierter Eigenschaften über die CSS properties and values API ist robuster als die einfache Deklaration benutzerdefinierter Eigenschaften bei CSS-Cascading-Variablen, insbesondere wenn es um das Übergangs- und Animationsverhalten geht, da Browser zwischen benutzerdefinierten Werten dieses Typs interpolieren können, während Eigenschaften, die die [Two-Dash-Syntax (`--`)](/de/docs/Web/CSS/--*) verwenden, eher wie ein String-Ersatz funktionieren.

## Eigenschaften- und Werte-API in Aktion

Um zu sehen, wie benutzerdefinierte Eigenschaften und Werte über die API verwendet werden können, bewegen Sie den Mauszeiger über das untenstehende Feld.

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

Das Feld hat einen [Hintergrund](/de/docs/Web/CSS/background), der aus einem [linearen Verlauf](/de/docs/Web/CSS/gradient/linear-gradient) von `--stop-color` (der benutzerdefinierten Eigenschaft) bis [`lavenderblush`](/de/docs/Web/CSS/named-color) besteht.
Der Wert von `--stop-color` ist zunächst auf `cornflowerblue` gesetzt, aber wenn Sie über das Feld fahren, [übergang](/de/docs/Web/CSS/transition) `--stop-color` nach `aquamarine` über zwei Sekunden (`linear-gradient(to right, aquamarine, lavenderblush)`).

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

- [Verwendung der CSS properties and values API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)

  - : Erklärt, wie benutzerdefinierte Eigenschaften in CSS und JavaScript registriert werden, mit Hinweisen zum Umgang mit undefinierten und ungültigen Werten, Alternativen und Vererbung.

- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
  - : Erklärt, was CSS Houdini ist und seine Vorteile, zusammen mit einer Liste verfügbarer APIs und deren Status.

## Verwandte Konzepte

- {{cssxref("var")}}
- [CSSRule](/de/docs/Web/API/CSSRule)
- [CSSStyleValue](/de/docs/Web/API/CSSStyleValue)
- [CSS scoping](/de/docs/Web/CSS/CSS_scoping)
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Worklet](/de/docs/Web/API/Worklet)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)
- [CSS scoping](/de/docs/Web/CSS/CSS_scoping)-Modul
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)-Modul
- [Worklet](/de/docs/Web/API/Worklet)-Schnittstelle
- [CSS `env()`](/de/docs/Web/CSS/env)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
