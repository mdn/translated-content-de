---
title: Fallback
slug: Web/CSS/@counter-style/fallback
l10n:
  sourceCommit: 1afd06b2a278299b4c3a82d5b37dd5a5389987ae
---

{{CSSRef}}

Der **`fallback`**-Deskriptor der {{cssxref("@counter-style")}}-At-Regel kann verwendet werden, um einen Zählerstil anzugeben, auf den zurückgegriffen werden soll, wenn der definierte Zählerstil keine Marker-Darstellung für einen bestimmten Zählerwert erstellen kann.

## Syntax

```css
/* Schlüsselwortwerte */
fallback: lower-alpha;
fallback: custom-gangnam-style;
```

## Wert

Der Deskriptor nimmt einen einzelnen `<counter-style-name>` als Wert an:

- [`<counter-style-name>`](/de/docs/Web/CSS/@counter-style#counter-style-name)
  - : Gibt den Namen des Zählerstils an, der als Fallback verwendet werden soll, entweder das groß-/kleinschreibungsempfindliche `<custom-ident>` eines benutzerdefinierten CSS-Zählerstils (ohne Anführungszeichen) oder ein groß-/kleinschreibungsunempfindlicher {{cssxref("list-style-type")}}-Eigenschaftswert wie `decimal`, `disc` und so weiter.

Wenn weggelassen, wird standardmäßig `decimal` als Zähler-Fallback verwendet.

## Beschreibung

Der Zählerstil, der als Wert des `fallback`-Deskriptors angegeben wird, wird verwendet, wenn ein {{cssxref('@counter-style/range', 'range')}}-Deskriptor für einen Zählerstil angegeben ist; der `fallback`-Stil wird verwendet, um alle Werte darzustellen, die außerhalb des Bereichs liegen. Der `fallback`-Stil wird auch verwendet, wenn das `fixed`-{{cssxref('@counter-style/system', 'system')}} verwendet wird und nicht genug Symbole vorhanden sind, um alle Listeneinträge abzudecken; der `fallback`-Stil wird verwendet, um alle Werte darzustellen, die über den Bereich des festen Systems hinausgehen. In beiden Fällen und immer dann, wenn der definierte Zähler keinen spezifischen Zählerwert erstellen kann, wird der `fallback`-Stil verwendet.

Wenn der angegebene Fallback-Stil ebenfalls keine Darstellung erstellen kann, wird der `fallback`-Wert dieses Fallback-Zählers verwendet. Wenn auch dieser Fallback-Stil kein Fallback erstellen kann, wird der Fallback dieses Fallbacks verwendet. Dieses Rückgreifen setzt sich so lange fort, bis ein Fallback gefunden wird, der die Zählerdarstellung erstellen kann. Wenn kein Fallback-`fallback`-Wert in der Lage ist, eine Darstellung zu erstellen – wenn ein Fallback-Stil keinen `fallback`-Wert gesetzt hat oder wenn kein `fallback`-Wert spezifziert oder ungültig ist – wird standardmäßig `decimal` als Fallback verwendet.

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

- Andere {{cssxref("@counter-style")}}-Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, und {{cssxref("@counter-style/speak-as", "speak-as")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}: die funktionelle Notation zur Erstellung anonymer Zählerstile
