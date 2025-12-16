---
title: symbols
slug: Web/CSS/Reference/At-rules/@counter-style/symbols
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`symbols`** [CSS](/de/docs/Web/CSS)-Deskriptor der {{cssxref("@counter-style")}}-At-Regel wird verwendet, um die Symbole für die Erstellung von Zählerdarstellungen im angegebenen Zählsystem zu spezifizieren. Die Spezifizierung dieses Deskriptors ist zwingend erforderlich, wenn der Wert des {{cssxref('@counter-style/system', 'system')}}-Deskriptors `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist.

## Syntax

```css
symbols: A B C D E;
symbols: "\24B6" "\24B7" "\24B8" D E;
symbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";
symbols: url("one.svg") url("two.svg") url("three.svg");
symbols: indic-numbers;
```

### Werte

Der `symbols`-Deskriptor wird als Liste von einem oder mehreren durch Leerzeichen getrennten `<symbol>`-Werten angegeben.

- `<symbol>`
  - : Gibt das Symbol an, das im Zählsystem verwendet werden soll. Jedes Symbol in der Liste kann entweder ein {{cssxref("&lt;string&gt;")}}, ein {{cssxref("image")}} oder ein {{cssxref("&lt;custom-ident&gt;")}} sein. Der `<image>`-Wert kann wiederum als {{cssxref("url_value", "&lt;url&gt;")}} oder {{cssxref("gradient")}} angegeben werden.

> [!NOTE]
> Wenn ein {{Glossary("identifier", "Identifier")}} für ein Symbol verwendet wird, beachten Sie, dass {{Glossary("ASCII", "ASCII")}} Nicht-Buchstaben wie `*`, `"`, und `\` nicht als Identifier gelten. Sie müssen entweder als String zitiert oder maskiert werden.

## Beschreibung

Ein Symbol kann ein String, Bild oder Identifier sein. Es wird in der {{cssxref("@counter-style")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) verwendet.

Wenn der Wert des {{cssxref('@counter-style/system', 'system')}}-Deskriptors `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss der `symbols`-Deskriptor angegeben werden. Für das `additive`-System verwenden Sie stattdessen den {{cssxref('@counter-style/additive-symbols', 'additive-symbols')}}-Deskriptor, um die Symbole anzugeben.

Obwohl ein Leerzeichen zwischen zitierten Symbolen nicht erforderlich ist, macht es das CSS lesbarer. Um ein Anführungszeichen als Symbol zu verwenden, maskieren Sie entweder das Anführungszeichen oder schließen Sie das Zeichen in unterschiedliche Anführungszeichen ein, wie zum Beispiel `"'""`.

Beim Definieren von Symbolen mit Identifikatoren anstelle von Strings, achten Sie darauf, die Identifikatorsyntax-Regeln zu verwenden. Zum Beispiel, wie oben erwähnt, sind ASCII Nicht-Buchstaben wie `*` keine Identifikatoren und müssen entweder zitiert oder maskiert werden. Hex-Codierungen folgen einem Leerzeichen. Dieses Leerzeichen kann wie das Leerzeichen wirken, das zwei Identifikatoren trennt, aber es ermöglicht Ziffern, den hex-kodierten Zeichen zu folgen. Das bedeutet, dass zwei Leerzeichen nach einem hex-kodierten Identifikator eingefügt werden müssen, um ihn vom nächsten Identifikator zu trennen. Zum Beispiel ist es besser, den String `"\2A 1"` anstelle von `\2A  1` mit zwei Leerzeichen zu verwenden, da Ihre Code-Werkzeuge doppelte Leerzeichen entfernen könnten. Es ist im Allgemeinen sicherer, Identifikatoren zu zitieren, die maskiert werden müssen, oder Strings zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zählersymbole festlegen

In diesem Beispiel umfasst die Liste der Werte für den `symbols`-Deskriptor Buchstaben (`A`, `D`, `E`), eine Zahl in Anführungszeichen (`"1"`) und einen hex-maskierten Identifikator in Anführungszeichen (`"\24B7"`) für das Zeichen `Ⓑ`.

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
@counter-style symbols-example {
  system: fixed;
  symbols: A "1" "\24B7" D E;
}

.list {
  list-style: symbols-example;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_counter_symbols')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- Listeneigenschaften: {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols()")}} Funktion
- {{cssxref("url_value", "&lt;url&gt;")}} Typ
- [CSS Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
