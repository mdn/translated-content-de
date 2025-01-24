---
title: CSS-Eigenschaften und Werte API
slug: Web/CSS/CSS_properties_and_values_API
l10n:
  sourceCommit: c9c86abc12c3bdd3fdb07c73a0d1cf88cdd0e1bc
---

{{CSSRef}}

Das Modul der **CSS-Eigenschaften und Werte API** definiert eine Methode zur Registrierung neuer CSS-Eigenschaften, definiert den Datentyp der Eigenschaft, das Vererbungsverhalten und optional einen Anfangswert.
Diese API erweitert das Modul [CSS Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables), das es Entwicklern erlaubt, eigene Eigenschaften in CSS mithilfe der [Zwei-Strich-Syntax (`--`)](/de/docs/Web/CSS/--*) zu definieren.
Die CSS-Eigenschaften und Werte API ist Teil der [CSS Houdini](/de/docs/Web/CSS/CSS_Houdini) API-Gruppe.

Eigene Eigenschaften ermöglichen es, Werte innerhalb eines Projekts wiederzuverwenden, um komplexe oder sich wiederholende Stylesheets zu vereinfachen.
Grundlegende eigene Eigenschaften sind im Modul [CSS Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) definiert.
Die CSS-Eigenschaften und Werte API erweitert dieses Modul, indem sie das Hinzufügen von Metadaten zu eigenen Eigenschaften mit CSS mithilfe der [`@property`](/de/docs/Web/CSS/@property) At-Regel oder alternativ mit der JavaScript-Methode [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) ermöglicht.

Unabhängig davon, ob sie mit CSS oder JavaScript registriert werden, ermöglicht das Setzen von Metadaten auf eigene Eigenschaften einen erwarteten Datentyp, den der Browser je nach Kontext verwenden kann, definiert einen Anfangswert und ermöglicht es, die Vererbung zu kontrollieren.

Die Registrierung von eigenen Eigenschaften mit der CSS-Eigenschaften und Werte API ist robuster als die einfachere Deklaration von CSS-kaskadierenden Variablen, insbesondere beim Übergang und Animieren von Werten, da Browser zwischen benutzerdefinierten Werten dieser Art interpolieren können, während Eigenschaften, die die [Zwei-Strich-Syntax (`--`)](/de/docs/Web/CSS/--*) verwenden, eher wie eine Zeichenersetzung funktionieren.

## Eigenschaften und Werte API in Aktion

Um zu sehen, wie eigene Eigenschaften und Werte über die API verwendet werden können, bewegen Sie den Mauszeiger über das Feld unten.

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

{{EmbedLiveSample("Eigenschaften und Werte API in Aktion",600,120)}}

Das Feld hat einen [Hintergrund](/de/docs/Web/CSS/background), der aus einem [linearen Verlauf](/de/docs/Web/CSS/gradient/linear-gradient) von `--stop-color` (die eigene Eigenschaft) zu [`lavenderblush`](/de/docs/Web/CSS/named-color) besteht.
Der Wert von `--stop-color` ist zunächst auf `cornflowerblue` gesetzt, aber wenn Sie den Mauszeiger über das Feld bewegen, [übergang](/de/docs/Web/CSS/transition) `--stop-color` über zwei Sekunden zu `aquamarine` (`linear-gradient(to right, aquamarine, lavenderblush)`).

## Referenz

### At-Regeln

- {{cssxref("@property")}}
  - [Syntax](/de/docs/Web/CSS/@property#descriptors) Deskriptor
    - [`+` und `#`](/de/docs/Web/CSS/@property#descriptors) Multiplikatoren
    - [`|`](/de/docs/Web/CSS/@property#descriptors) Kombinator
  - [vererbt](/de/docs/Web/CSS/@property#descriptors) Deskriptor
  - [Anfangswert](/de/docs/Web/CSS/@property#descriptors) Deskriptor

### Schnittstellen und APIs

- [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)
- [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)

## Leitfäden

- [Verwendung der CSS-Eigenschaften und Werte API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)

  - : Erklärt, wie man eigene Eigenschaften in CSS und JavaScript registriert, mit Hinweisen zum Umgang mit undefinierten und ungültigen Werten, Fallbacks und Vererbung.

- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
  - : Erklärt, was CSS Houdini ist und welche Vorteile es bietet, zusammen mit einer Liste der verfügbaren APIs und deren Status.

## Verwandte Konzepte

- {{cssxref("var")}}
- [CSSRule](/de/docs/Web/API/CSSRule)
- [CSSStyleValue](/de/docs/Web/API/CSSStyleValue)
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping)
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Worklet](/de/docs/Web/API/Worklet)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API) Modul
- [Worklet](/de/docs/Web/API/Worklet) Schnittstelle
- [CSS `env()`](/de/docs/Web/CSS/env)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
