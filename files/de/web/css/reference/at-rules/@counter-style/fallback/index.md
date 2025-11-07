---
title: fallback
slug: Web/CSS/Reference/At-rules/@counter-style/fallback
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **`fallback`** Deskriptor der {{cssxref("@counter-style")}} At-Regel kann verwendet werden, um einen Zählerstil anzugeben, auf den zurückgegriffen werden soll, wenn der definierte Zählerstil keine Markierungsdarstellung für einen bestimmten Zählerwert erstellen kann.

## Syntax

```css
/* Keyword values */
fallback: lower-alpha;
fallback: custom-gangnam-style;
```

## Wert

Der Deskriptor nimmt einen einzelnen `<counter-style-name>` als Wert:

- [`<counter-style-name>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name)
  - : Gibt den Namen des Zählerstils an, der als Fallback verwendet werden soll. Dies kann entweder der groß-/kleinschreibungssensitive `<custom-ident>` eines benutzerdefinierten CSS-Zählerstils (ohne Anführungszeichen) oder ein groß-/kleinschreibungsunsensitiver Wert der {{cssxref("list-style-type")}} Eigenschaft sein, wie z.B. `decimal`, `disc`, usw.

Wird dieser weggelassen, fällt der Zähler-Fallback standardmäßig auf `decimal` zurück.

## Beschreibung

Der Zählerstil, der als Wert des `fallback`-Deskriptors angegeben ist, wird verwendet, wenn ein {{cssxref('@counter-style/range', 'range')}}-Deskriptor für einen Zählerstil angegeben ist; der `fallback`-Stil wird verwendet, um alle Werte darzustellen, die außerhalb des Bereichs liegen. Der `fallback`-Stil wird auch verwendet, wenn das `fixed` {{cssxref('@counter-style/system', 'system')}} verwendet wird und es nicht genug Symbole gibt, um alle Listeneinträge abzudecken; der `fallback`-Stil wird verwendet, um alle Werte darzustellen, die über den Umfang des festen Systems hinausgehen. In beiden Fällen, und immer dann, wenn der definierte Zähler keinen spezifischen Zählerwert erstellen kann, wird der `fallback`-Stil verwendet.

Wenn der angegebene Fallback-Stil ebenfalls keine Darstellung konstruieren kann, wird der `fallback`-Wert dieses Fallback-Zählers verwendet. Wenn dieser Fallback-Stil ebenfalls keine Darstellung erstellen kann, wird der Fallback des Fallbacks verwendet. Dieses Zurückfallen wird fortgesetzt, bis ein Fallback gefunden wird, der die Zähldarstellung konstruieren kann. Wenn kein Fallback-`fallback`-Wert in der Lage ist, eine Darstellung zu konstruieren - wenn ein Fallback-Stil keinen `fallback`-Wert gesetzt hat oder wenn ein `fallback`-Wert nicht angegeben oder ungültig ist - fällt der `fallback` standardmäßig auf `decimal` zurück.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen eines Fallback-Zählerstils

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
- {{cssxref("symbols", "symbols()")}}: die funktionale Notation zur Erstellung anonymer Zählerstile
