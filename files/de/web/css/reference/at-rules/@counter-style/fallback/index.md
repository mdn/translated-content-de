---
title: "`fallback` CSS At-Regel-Deskriptor"
short-title: fallback
slug: Web/CSS/Reference/At-rules/@counter-style/fallback
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`fallback`** Deskriptor der {{cssxref("@counter-style")}} At-Regel kann verwendet werden, um einen Zählerstil anzugeben, auf den zurückgegriffen wird, wenn der definierte Zählerstil keine Marker-Darstellung für einen bestimmten Zählerwert erstellen kann.

## Syntax

```css
/* Keyword values */
fallback: lower-alpha;
fallback: custom-gangnam-style;
```

## Wert

Der Deskriptor nimmt einen einzelnen `<counter-style-name>` als Wert an:

- [`<counter-style-name>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name)
  - : Gibt den Namen des Zählerstils an, der als Fallback verwendet werden soll, entweder das groß-/kleinschreibungssensitive `<custom-ident>` eines benutzerdefinierten CSS-Zählerstils (ohne Anführungszeichen) oder einen groß-/kleinschreibungsinsensitiven {{cssxref("list-style-type")}} Eigenschaftswert wie `decimal`, `disc` und so weiter.

Wird dies weggelassen, wird der Zähler-Fallback standardmäßig auf `decimal` gesetzt.

## Beschreibung

Der Zählerstil, der als Wert des `fallback` Deskriptors angegeben ist, wird verwendet, wenn ein {{cssxref('@counter-style/range', 'range')}} Deskriptor für einen Zählerstil spezifiziert ist; der `fallback` Stil wird verwendet, um alle Werte zu repräsentieren, die außerhalb des Bereichs liegen. Der `fallback` Stil wird auch verwendet, wenn das `fixed` {{cssxref('@counter-style/system', 'system')}} verwendet wird und es nicht genug Symbole gibt, um alle Listenelemente abzudecken; der `fallback` Stil wird verwendet, um alle Werte zu repräsentieren, die außerhalb des Bereichs des festen Systems liegen. In beiden Fällen und immer dann, wenn der definierte Zähler keinen spezifischen Zählerwert erstellen kann, wird der `fallback` Stil verwendet.

Wenn der angegebene Fallbackstil auch nicht in der Lage ist, eine Darstellung zu konstruieren, wird der `fallback` Wert dieses Fallback-Zählers verwendet. Wenn der Fallback des Fallbackstils ebenfalls keine Darstellung konstruieren kann, wird der Fallback des Fallbacks verwendet. Dieses Zurückfallen geht so lange weiter, bis ein Fallback gefunden wird, das die Zählerdarstellung konstruieren kann. Wenn kein Fallback `fallback` Wert eine Darstellung konstruieren kann — wenn ein Fallbackstil keinen `fallback` Wert gesetzt hat, oder wenn ein `fallback` Wert nicht spezifiziert oder ungültig ist — wird der `fallback` standardmäßig auf `decimal` gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Angeben eines Fallback-Zählerstils

#### HTML

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

#### CSS

```css
@counter-style fallback-example {
  system: fixed;
  symbols: "\24B6" "\24B7" "\24B8";
  fallback: upper-alpha;
}

.list {
  list-style: fallback-example;
}
```

#### Ergebnis

{{ EmbedLiveSample('Specifying_a_fallback_counter_style') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, und {{cssxref("@counter-style/speak-as", "speak-as")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols()")}}: die funktionale Notation zur Erstellung anonymer Zählerstile
