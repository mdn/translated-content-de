---
title: fallback
slug: Web/CSS/@counter-style/fallback
l10n:
  sourceCommit: 1afd06b2a278299b4c3a82d5b37dd5a5389987ae
---

{{CSSRef}}

Der **`fallback`** Descriptor der {{cssxref("@counter-style")}} At-Regel kann verwendet werden, um einen Zählerstil anzugeben, zu dem zurückgefallen wird, wenn der gerade definierte Zählerstil keine Markerdarstellung für einen bestimmten Zählerwert erstellen kann.

## Syntax

```css
/* Keyword values */
fallback: lower-alpha;
fallback: custom-gangnam-style;
```

## Wert

Der Descriptor nimmt einen einzelnen `<counter-style-name>` als Wert an:

- [`<counter-style-name>`](/de/docs/Web/CSS/@counter-style#counter-style-name)
  - : Gibt den Namen des zu verwendenden Zählerstils als Fallback an, entweder den groß-/kleinschreibungssensitiven `<custom-ident>` eines benutzerdefinierten CSS-Zählerstils (ohne Anführungszeichen) oder einen groß-/kleinschreibungsinsensitiven Wert der {{cssxref("list-style-type")}} Eigenschaft wie `decimal`, `disc` usw.

Wird dieser weggelassen, ist der Fallback-Standardwert `decimal`.

## Beschreibung

Der als Wert des `fallback` Descriptors angegebene Zählerstil wird verwendet, wenn ein {{cssxref('@counter-style/range', 'range')}} Descriptor für einen Zählerstil angegeben ist; der `fallback` Stil wird verwendet, um alle Werte darzustellen, die außerhalb des Bereichs liegen. Der `fallback` Stil wird auch verwendet, wenn das `fixed` {{cssxref('@counter-style/system', 'system')}} verwendet wird und nicht genug Symbole vorhanden sind, um alle Listenelemente abzudecken; der `fallback` Stil stellt alle Werte außerhalb des Wirkungsbereichs des festen Systems dar. In beiden Fällen und auch immer dann, wenn der definierte Zähler keinen bestimmten Zählerwert erstellen kann, wird der `fallback` Stil verwendet.

Wenn der angegebene Fallback-Stil ebenfalls keine Darstellung konstruieren kann, wird der `fallback` Wert dieses Fallback-Zählers verwendet. Wenn dieser Fallback-Stil ebenfalls keine Darstellung konstruieren kann, wird dessen Fallback verwendet. Dieses Zurückfallen geht so lange weiter, bis ein Fallback gefunden wird, der die Zählerdarstellung konstruieren kann. Wenn kein Fallback-Wert in der Lage ist, eine Darstellung zu konstruieren―wenn ein Fallback-Stil keinen `fallback` Wert gesetzt hat, oder wenn kein `fallback` Wert angegeben oder ungültig ist―ist der Fallback-Standardwert `decimal`.

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
- {{cssxref("symbols", "symbols()")}}: die funktionale Notation zur Erstellung anonymer Zählerstile
