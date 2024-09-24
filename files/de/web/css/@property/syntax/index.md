---
title: Syntax
slug: Web/CSS/@property/syntax
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Der **`syntax`** [CSS](/de/docs/Web/CSS) Deskriptor ist erforderlich, wenn die {{cssxref("@property")}} [At-Regel](/de/docs/Web/CSS/At-rule) verwendet wird und beschreibt die zulässige Syntax für die Eigenschaft.

## Syntax

Die folgenden sind alle gültigen Syntax-Strings:

```css
syntax: "<color>"; /* akzeptiert eine Farbe */

syntax: "<length> | <percentage>"; /* akzeptiert Längen oder Prozentsätze, aber keine calc-Ausdrücke mit einer Kombination aus beiden */

syntax: "small | medium | large"; /* akzeptiert einen dieser Werte als benutzerdefinierte Identifikatoren. */

syntax: "*"; /* jeder gültige Token */
```

## Werte

Ein String mit einer unterstützten Syntax, wie sie in der Spezifikation definiert ist. Unterstützte Syntaxen sind eine Teilmenge von [CSS-Typen](/de/docs/Web/CSS/CSS_Types). Diese können allein oder in Kombination mehrerer Typen verwendet werden.

- `"<length>"`
  - : Alle gültigen {{cssxref("&lt;length&gt;")}} Werte.
- `"<number>"`
  - : Alle gültigen {{cssxref("&lt;number&gt;")}} Werte.
- `"<percentage>"`
  - : Alle gültigen {{cssxref("&lt;percentage&gt;")}} Werte.
- `"<length-percentage>"`
  - : Alle gültigen {{cssxref("&lt;length-percentage&gt;")}} Werte.
- `"<color>"`
  - : Alle gültigen {{cssxref("&lt;color&gt;")}} Werte.
- `"<image>"`
  - : Alle gültigen {{cssxref("&lt;image&gt;")}} Werte.
- `"<url>"`
  - : Alle gültigen {{cssxref("url_value", "&lt;url&gt;")}} Werte.
- `"<integer>"`
  - : Alle gültigen {{cssxref("&lt;integer&gt;")}} Werte.
- `"<angle>"`
  - : Alle gültigen {{cssxref("&lt;angle&gt;")}} Werte.
- `"<time>"`
  - : Alle gültigen {{cssxref("&lt;time&gt;")}} Werte.
- `"<resolution>"`
  - : Alle gültigen {{cssxref("&lt;resolution&gt;")}} Werte.
- `"<transform-function>"`
  - : Alle gültigen {{cssxref("&lt;transform-function&gt;")}} Werte.
- `"<custom-ident>"`
  - : Alle gültigen {{cssxref("&lt;custom-ident&gt;")}} Werte.
- `"<transform-list>"`
  - : Eine Liste gültiger {{cssxref("&lt;transform-function&gt;")}} Werte.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Fügen Sie der `--my-color` [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) eine Typprüfung hinzu, unter Verwendung der `<color>` Syntax:

Verwendung der [CSS](/de/docs/Web/CSS) {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/At-rule):

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Verwendung von [JavaScript](/de/docs/Web/JavaScript) {{domxref('CSS.registerProperty_static', 'CSS.registerProperty()')}}:

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
