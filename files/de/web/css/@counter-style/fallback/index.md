---
title: fallback
slug: Web/CSS/@counter-style/fallback
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`fallback`** Deskriptor der {{cssxref("@counter-style")}} At-Regel kann verwendet werden, um einen Zählerstil anzugeben, auf den zurückgegriffen werden kann, wenn der definierte Zählerstil keine Markerdarstellung für einen bestimmten Zählerwert erstellen kann.

## Syntax

```css
/* Keyword values */
fallback: lower-alpha;
fallback: custom-gangnam-style;
```

## Wert

Der Deskriptor nimmt einen einzelnen `<counter-style-name>` als Wert an:

- [`<counter-style-name>`](/de/docs/Web/CSS/@counter-style#counter-style-name)
  - : Gibt den Namen des Zählerstils an, der als Fallback verwendet werden soll. Dies ist entweder der `<custom-ident>` eines benutzerdefinierten CSS-Zählerstils (ohne Anführungszeichen) oder ein nicht-empfindlicher Wert der Eigenschaft {{cssxref("list-style-type")}} wie `decimal`, `disc` usw.

Wird der Deskriptor weggelassen, ist der Standard-Fallback für Zähler `decimal`.

## Beschreibung

Der Zählerstil, der als Wert des `fallback` Deskriptors angegeben wird, wird verwendet, wenn für einen Zählerstil ein {{cssxref('@counter-style/range', 'range')}}-Deskriptor angegeben ist; der `fallback`-Stil wird verwendet, um alle Werte darzustellen, die außerhalb des Bereichs liegen. Der `fallback`-Stil wird auch verwendet, wenn das `fixed` {{cssxref('@counter-style/system', 'system')}} verwendet wird und nicht genügend Symbole vorhanden sind, um alle Listenelemente abzudecken; der `fallback`-Stil wird verwendet, um alle Werte darzustellen, die über den Umfang des festen Systems hinausgehen. In beiden Fällen und immer, wenn der definierte Zähler keinen spezifischen Zählerwert erstellen kann, wird der `fallback`-Stil verwendet.

Wenn der angegebene Fallback-Stil ebenfalls keine Darstellung erstellen kann, wird der `fallback`-Wert dieses Fallback-Zählers verwendet. Wenn auch der Fallback dieses Fallback-Stils keine Darstellung erstellen kann, wird der Fallback dieses Fallbacks verwendet. Dieses Zurückgreifen setzt sich fort, bis ein Fallback gefunden wird, das die Zählerdarstellung erstellen kann. Wenn kein Fallback-`fallback`-Wert eine Darstellung erstellen kann – wenn ein Fallback-Stil keinen festgelegten `fallback`-Wert hat oder wenn ein `fallback`-Wert nicht angegeben oder ungültig ist – fällt der Fallback standardmäßig auf `decimal` zurück.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen Fallback-Zählerstil angeben

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
- {{cssxref("symbols", "symbols()")}}: die funktionale Notation zum Erstellen anonymer Zählerstile
