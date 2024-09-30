---
title: Fallback
slug: Web/CSS/@counter-style/fallback
l10n:
  sourceCommit: 1afd06b2a278299b4c3a82d5b37dd5a5389987ae
---

{{CSSRef}}

Der **`fallback`** Deskriptor der {{cssxref("@counter-style")}} at-rule kann verwendet werden, um einen Ersatz-Counter-Stil anzugeben, falls der definierte Counter-Stil keine Marker-Darstellung für einen bestimmten Zählerwert erstellen kann.

## Syntax

```css
/* Keyword values */
fallback: lower-alpha;
fallback: custom-gangnam-style;
```

## Wert

Der Deskriptor nimmt einen einzelnen `<counter-style-name>` als seinen Wert:

- [`<counter-style-name>`](/de/docs/Web/CSS/@counter-style#counter-style-name)
  - : Gibt den Namen des Counter-Stils an, der als Fallback verwendet werden soll, entweder den genau Schreibweise-sensitiven `<custom-ident>` eines benutzerdefinierten CSS-Counter-Stils (ohne Anführungszeichen) oder einen Schreibweise-unsensitiven Wert der {{cssxref("list-style-type")}}-Eigenschaft, wie `decimal`, `disc` und so weiter.

Wenn weggelassen, fällt der Counter-Style-Back auf `decimal` zurück.

## Beschreibung

Der als Wert des `fallback` Deskriptors angegebene Counter-Stil wird verwendet, wenn ein {{cssxref('@counter-style/range', 'range')}}-Deskriptor für einen Counter-Stil angegeben ist; der `fallback`-Stil wird verwendet, um alle Werte darzustellen, die außerhalb des Bereichs liegen. Der `fallback`-Stil wird auch verwendet, wenn das `fixed` {{cssxref('@counter-style/system', 'system')}} verwendet wird und nicht genügend Symbole vorhanden sind, um alle Listenelemente abzudecken; der `fallback`-Stil wird verwendet, um alle Werte darzustellen, die über den Umfang des fixen Systems hinausgehen. In beiden diesen Fällen und jedem anderen Mal, wenn der definierte Counter keinen spezifischen Counter-Wert erstellen kann, wird der `fallback`-Stil verwendet.

Wenn der angegebene Fallback-Stil ebenfalls keine Darstellung konstruieren kann, wird der `fallback`-Wert dieses Fallback-Counters verwendet. Wenn der Fallback des Fallback-Stils ebenfalls keine Darstellung konstruieren kann, wird der Fallback dieses Fallbacks verwendet. Dieses Rückgreifen setzt sich fort, bis ein Fallback gefunden wird, der die Counter-Darstellung konstruieren kann. Wenn kein Fallback `fallback`-Wert eine Darstellung konstruieren kann – falls ein Fallback-Stil keinen `fallback`-Wert hat oder wenn ein `fallback`-Wert nicht angegeben oder ungültig ist – fällt der Fallback auf `decimal` zurück.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifizieren eines Fallback-Counter-Stils

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
- {{cssxref("symbols", "symbols()")}}: die funktionale Notation zur Erstellung anonymer Counter-Stile
