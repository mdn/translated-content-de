---
title: syntax
slug: Web/CSS/@property/syntax
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Der **`syntax`** [CSS](/de/docs/Web/CSS) Deskriptor ist erforderlich, wenn die {{cssxref("@property")}} [At-Regel](/de/docs/Web/CSS/At-rule) verwendet wird und beschreibt die zulässige Syntax für die Eigenschaft.

## Syntax

Die folgenden sind alle gültigen Syntaxzeichenfolgen:

```css
syntax: "<color>"; /* accepts a color */

syntax: "<length> | <percentage>"; /* accepts lengths or percentages but not calc expressions with a combination of the two */

syntax: "small | medium | large"; /* accepts one of these values set as custom idents. */

syntax: "*"; /* any valid token */
```

## Werte

Ein String mit einer unterstützten Syntax, wie sie durch die Spezifikation definiert ist. Unterstützte Syntaxen sind ein Teil der [CSS-Typen](/de/docs/Web/CSS/CSS_Types). Diese können allein verwendet werden, oder eine Anzahl von Typen kann in Kombination verwendet werden.

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
  - : Eine Liste von gültigen {{cssxref("&lt;transform-function&gt;")}} Werten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Fügen Sie Typüberprüfung für die `--my-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) hinzu, indem Sie die `<color>` Syntax verwenden:

Verwendung der [CSS](/de/docs/Web/CSS) {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/At-rule):

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Verwendung von [JavaScript](/de/docs/Web/JavaScript) [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static):

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
