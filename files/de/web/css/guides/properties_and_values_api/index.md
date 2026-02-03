---
title: CSS Eigenschaften- und Werte-API
short-title: Eigenschaften- und Werte-API
slug: Web/CSS/Guides/Properties_and_values_API
l10n:
  sourceCommit: 98bbdcd90e5487539cebe19b12fe3d731fb5a03e
---

Das **CSS Eigenschaften- und Werte-API**-Modul definiert eine Methode zur Registrierung neuer CSS-Eigenschaften, zur Definition des Datentyps der Eigenschaften, des Verhaltens bei Vererbung und optional eines Anfangswerts.
Dieses API erweitert das Modul [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables), das Autoren ermöglicht, benutzerdefinierte Eigenschaften in CSS mithilfe der [Zwei-Strich-Syntax (`--`)](/de/docs/Web/CSS/Reference/Properties/--*) zu definieren.
Die CSS Eigenschaften- und Werte-API ist Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) Sammlung von APIs.

Benutzerdefinierte Eigenschaften ermöglichen die Wiederverwendung von Werten in einem Projekt, um komplexe oder repetitive Stylesheets zu vereinfachen.
Grundlegende benutzerdefinierte Eigenschaften werden im Modul [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) definiert.
Die CSS Eigenschaften- und Werte-API erweitert dieses Modul und ermöglicht es, Metadaten zu benutzerdefinierten Eigenschaften mithilfe von CSS mit der {{cssxref("@property")}}-At-Regel hinzuzufügen oder alternativ die [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static)-Methode von JavaScript zu verwenden.

Egal, ob sie mit CSS oder JavaScript registriert werden, das Setzen von Metadaten auf benutzerdefinierten Eigenschaften ermöglicht einen erwarteten Datentyp, den der Browser je nach Kontext verwenden kann, definiert einen Anfangswert und ermöglicht die Kontrolle der Vererbung.

Die Registrierung benutzerdefinierter Eigenschaften mit der CSS Eigenschaften- und Werte-API ist robuster als die grundlegende Erklärung von benutzerdefinierten CSS-Kaskadenvariablen, besonders wenn es um das Übergang von und die Animation von Werten geht, da Browser zwischen benutzerdefinierten Werten dieser Art interpolieren können, während Eigenschaften, die die [Zwei-Strich-Syntax (`--`)](/de/docs/Web/CSS/Reference/Properties/--*) verwenden, sich mehr wie Stringersetzungen verhalten.

## Eigenschaften- und Werte-API in Aktion

Um zu sehen, wie benutzerdefinierte Eigenschaften und Werte über die API verwendet werden können, fahren Sie mit der Maus über das untenstehende Feld.

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

Das Feld hat einen [Hintergrund](/de/docs/Web/CSS/Reference/Properties/background), der aus einem [linearen Gradient](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient) von `--stop-color` (der benutzerdefinierten Eigenschaft) zu [`lavenderblush`](/de/docs/Web/CSS/Reference/Values/named-color) besteht.
Der Wert von `--stop-color` ist zunächst auf `cornflowerblue` gesetzt, aber wenn Sie mit der Maus über das Feld fahren, [wechselt](/de/docs/Web/CSS/Reference/Properties/transition) `--stop-color` in `aquamarine` über zwei Sekunden (`linear-gradient(to right, aquamarine, lavenderblush)`).

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

- [Registrierung von benutzerdefinierten CSS-Eigenschaften](/de/docs/Web/CSS/Guides/Properties_and_values_API/Registering_properties)
  - : Behandelt, wie CSS-Benutzereigenschaften mit der `@property`-At-Regel registriert werden und erklärt die Vorteile davon.
- [Verwendung der CSS Eigenschaften- und Werte-API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
  - : Erklärt, wie man benutzerdefinierte Eigenschaften in CSS und JavaScript registriert, mit Hinweisen zum Umgang mit undefinierten und ungültigen Werten, Fallbacks und Vererbung.
- [CSS Houdini](/de/docs/Web/CSS/Guides/Properties_and_values_API/Houdini)
  - : Referenzleitfaden zu Houdini-Ressourcen, einschließlich der CSS-Module, API-Leitfäden und externen Ressourcen.
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
  - : Erklärt, was CSS Houdini ist und seine Vorteile, zusammen mit einer Liste der verfügbaren APIs und deren Status.

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

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)
- [CSS Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API) Modul
- [Worklet](/de/docs/Web/API/Worklet) Schnittstelle
- [CSS `env()`](/de/docs/Web/CSS/Reference/Values/env)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
