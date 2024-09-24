---
title: API für CSS-Eigenschaften und -Werte
slug: Web/CSS/CSS_properties_and_values_API
l10n:
  sourceCommit: 27977f96015d1b74e743fa3762672894e087bd3d
---

{{CSSRef}}

Das **CSS properties and values API** Modul definiert eine Methode zum Registrieren neuer CSS-Eigenschaften, zur Definition des Datentyps der Eigenschaft, des Vererbungsverhaltens und optional eines Anfangswertes. Diese API erweitert das Modul [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables), welches es Autoren erlaubt, benutzerdefinierte Eigenschaften in CSS unter Verwendung der [Zwei-Bindestrich-Syntax (`--`)](/de/docs/Web/CSS/--*) zu definieren. Die API für CSS-Eigenschaften und -Werte ist Teil der [CSS Houdini](/de/docs/Web/CSS/CSS_Houdini) Sammlung von APIs.

Benutzerdefinierte Eigenschaften ermöglichen es Ihnen, Werte in einem Projekt wiederzuverwenden, um komplexe oder sich wiederholende Stylesheets zu vereinfachen. Grundlegende benutzerdefinierte Eigenschaften werden im Modul [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) definiert. Die API für CSS-Eigenschaften und -Werte erweitert dieses Modul, indem sie die Möglichkeit bietet, Metadaten zu benutzerdefinierten Eigenschaften mit CSS über die [`@property`](/de/docs/Web/CSS/@property) At-Regel oder alternativ mit der JavaScript-Methode {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}} hinzuzufügen.

Unabhängig davon, ob sie mit CSS oder JavaScript registriert werden, ermöglicht die Festlegung von Metadaten auf benutzerdefinierten Eigenschaften die Angabe eines erwarteten Datentyps, den der Browser je nach Kontext verwenden kann, definiert einen Anfangswert und ermöglicht die Kontrolle der Vererbung.

Die Registrierung benutzerdefinierter Eigenschaften mit der API für CSS-Eigenschaften und -Werte ist robuster als die grundlegendere Deklaration benutzerdefinierter CSS-Werte, insbesondere wenn es darum geht, Werte zu überblenden und zu animieren, da Browser zwischen benutzerdefinierten Werten dieses Typs interpolieren können, während Eigenschaften, die die [Zwei-Bindestrich-Syntax (`--`)](/de/docs/Web/CSS/--*) verwenden, eher wie eine Zeichenersetzung funktionieren.

## API für Eigenschaften und Werte in Aktion

Um zu sehen, wie benutzerdefinierte Eigenschaften und Werte über die API verwendet werden können, fahren Sie mit dem Mauszeiger über das unten stehende Feld.

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
<div class="box"><p>Lineares Farbverlauf mit Übergang</p></div>
```

{{EmbedLiveSample("API für Eigenschaften und Werte in Aktion",600,120)}}

Das Feld hat einen [Hintergrund](/de/docs/Web/CSS/background), der aus einem [linearen Farbverlauf](/de/docs/Web/CSS/gradient/linear-gradient) von `--stop-color` (der benutzerdefinierten Eigenschaft) zu [`lavenderblush`](/de/docs/Web/CSS/named-color) besteht. Der Wert von `--stop-color` ist zunächst auf `cornflowerblue` gesetzt, aber wenn Sie mit dem Mauszeiger über das Feld fahren, [wechselt](/de/docs/Web/CSS/transition) `--stop-color` in zwei Sekunden zu `aquamarine` (`linear-gradient(to right, aquamarine, lavenderblush)`).

## Referenz

### At-Regeln

- {{cssxref("@property")}}
  - [Syntax](/de/docs/Web/CSS/@property#descriptors) Deskriptor
    - [`+` und `#`](/de/docs/Web/CSS/@property#descriptors) Multiplikatoren
    - [`|`](/de/docs/Web/CSS/@property#descriptors) Kombinator
  - [Erbt](/de/docs/Web/CSS/@property#descriptors) Deskriptor
  - [Initialwert](/de/docs/Web/CSS/@property#descriptors) Deskriptor

### Schnittstellen und APIs

- {{domxref('CSSPropertyRule')}}
- {{domxref('CSS/registerProperty_static', 'CSS.registerProperty()')}}

## Anleitungen

- [Verwendung der API für CSS-Eigenschaften und -Werte](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)

  - : Erklärt, wie benutzerdefinierte Eigenschaften in CSS und JavaScript registriert werden, mit Hinweisen zum Umgang mit undefinierten und ungültigen Werten, Fallbacks und Vererbung.

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
