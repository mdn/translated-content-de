---
title: fallback
slug: Web/CSS/Reference/At-rules/@counter-style/fallback
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`fallback`** Deskriptor der {{cssxref("@counter-style")}} At-Regel kann verwendet werden, um einen Zählerstil anzugeben, auf den zurückgegriffen wird, wenn der definierte Zählerstil keine Markierung für einen bestimmten Zählerwert erstellen kann.

## Syntax

```css
/* Keyword values */
fallback: lower-alpha;
fallback: custom-gangnam-style;
```

## Wert

Der Deskriptor nimmt einen einzelnen `<counter-style-name>` als Wert an:

- [`<counter-style-name>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name)
  - : Gibt den Namen des Zählerstils an, der als Fallback verwendet werden soll, entweder das groß- und kleinschreibungssensitive `<custom-ident>` eines benutzerdefinierten CSS-Zählerstils (ohne Anführungszeichen) oder ein groß- und kleinschreibungsunsensitiver Wert der {{cssxref("list-style-type")}}-Eigenschaft wie `decimal`, `disc` usw.

Wird dieser Wert weggelassen, fällt die Zähler-Ersetzung auf `decimal` zurück.

## Beschreibung

Der als Wert des `fallback` Deskriptors angegebene Zählerstil wird verwendet, wenn ein {{cssxref('@counter-style/range', 'range')}}-Deskriptor für einen Zählerstil angegeben ist; der `fallback` Stil wird verwendet, um alle Werte darzustellen, die außerhalb des Bereichs liegen. Der `fallback` Stil wird auch verwendet, wenn das `fixed`-System von {{cssxref('@counter-style/system', 'system')}} verwendet wird und nicht genügend Symbole vorhanden sind, um alle Listenelemente abzudecken; der `fallback` Stil wird verwendet, um alle Werte außerhalb des Anwendungsbereichs des festen Systems darzustellen. In beiden Fällen und immer dann, wenn der definierte Zähler keinen spezifischen Zählerwert erstellen kann, wird der `fallback` Stil verwendet.

Wenn der angegebene Fallback-Stil ebenfalls keine Darstellung konstruieren kann, wird der `fallback` Wert dieses Fallback-Zählers verwendet. Wenn auch der Fallback des Fallback-Stils keine Darstellung konstruieren kann, wird der Fallback des Fallbacks verwendet. Dieser Rückgriff setzt sich fort, bis ein Fallback gefunden wird, der die Zählerdarstellung konstruieren kann. Wenn kein `fallback` Wert eine Darstellung konstruieren kann - wenn ein Fallback-Stil keinen `fallback` Wert gesetzt hat oder ein `fallback` Wert nicht angegeben oder ungültig ist - fällt der `fallback` auf `decimal` zurück.

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
- {{cssxref("symbols()")}}: die funktionale Notation zur Erstellung anonymer Zählerstile
