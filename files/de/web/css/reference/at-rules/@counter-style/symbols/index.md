---
title: "`symbols` CSS At-Regel-Descriptor"
short-title: symbols
slug: Web/CSS/Reference/At-rules/@counter-style/symbols
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`symbols`** [CSS](/de/docs/Web/CSS)-Descriptor der {{cssxref("@counter-style")}} At-Regel wird verwendet, um die Symbole für die Erstellung von Zählerdarstellungen im angegebenen Zählersystem festzulegen. Das Festlegen dieses Descriptors ist obligatorisch, wenn der Wert des {{cssxref('@counter-style/system', 'system')}} Descriptors `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist.

## Syntax

```css
symbols: A B C D E;
symbols: "\24B6" "\24B7" "\24B8" D E;
symbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";
symbols: url("one.svg") url("two.svg") url("three.svg");
symbols: indic-numbers;
```

### Werte

Der `symbols`-Descriptor wird als Liste von einem oder mehreren durch Leerzeichen getrennten `<symbol>`-Werten angegeben.

- `<symbol>`
  - : Gibt das Symbol an, das im Zählersystem verwendet werden soll. Jedes Symbol in der Liste kann entweder ein {{cssxref("&lt;string&gt;")}}, ein {{cssxref("image")}} oder ein {{cssxref("&lt;custom-ident&gt;")}} sein. Der `<image>`-Wert kann wiederum als {{cssxref("url_value", "&lt;url&gt;")}} oder {{cssxref("gradient")}} angegeben werden.

> [!NOTE]
> Beim Verwenden eines {{Glossary("identifier", "Bezeichners")}} für ein Symbol beachten Sie, dass {{Glossary("ASCII", "ASCII")}}-Nicht-Buchstaben wie `*`, `"`, und `\` keine Bezeichner sind. Sie müssen entweder als Zeichenfolge zitiert oder entkommen werden.

## Beschreibung

Ein Symbol kann eine Zeichenfolge, ein Bild oder ein Bezeichner sein. Es wird innerhalb der {{cssxref("@counter-style")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) verwendet.

Wenn der Wert des {{cssxref('@counter-style/system', 'system')}} Descriptors `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss der `symbols`-Descriptor angegeben werden. Für das `additive`-System verwenden Sie stattdessen den {{cssxref('@counter-style/additive-symbols', 'additive-symbols')}}-Descriptor, um die Symbole festzulegen.

Obwohl ein Leerzeichen zwischen zitierten Symbolen nicht erforderlich ist, macht es das CSS lesbarer. Um ein Anführungszeichen als Symbol zu verwenden, entkommen Sie entweder das Anführungszeichenzeichen oder schließen Sie das Zeichen innerhalb verschiedener Anführungszeichen ein, wie beispielsweise `"'"`.

Beim Definieren von Symbolen mit Bezeichnern anstelle von Zeichenfolgen stellen Sie sicher, dass Sie die Syntaxregeln für Bezeichner verwenden. Zum Beispiel, wie oben erwähnt, sind ASCII-Nicht-Buchstaben wie `*` keine Bezeichner und müssen entweder zitiert oder entkommen werden. Hex-Escape-Zeichen werden von einem Leerzeichen gefolgt. Dieses Leerzeichen kann wie der Trennraum zwischen zwei Bezeichnern erscheinen, ermöglicht jedoch das Folgen von Ziffern auf hex-entfaltete Zeichen. Dies bedeutet, dass zwei Leerzeichen nach einem hex-entflachten Bezeichner eingefügt werden müssen, um ihn vom nächsten Bezeichner zu trennen. Beispielsweise ist es besser, die Zeichenfolge `"\2A 1"` anstelle von `\2A  1` mit zwei Leerzeichen zu verwenden, da Ihre Code-Tools Doppelleerzeichen entfernen könnten. Es ist generell sicherer, Bezeichner, die entkommen werden müssen, zu zitieren oder Zeichenfolgen zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zähler-Symbole setzen

In diesem Beispiel umfasst die Liste der Werte für den `symbols`-Descriptor Buchstaben (`A`, `D`, `E`), eine Zahl in Anführungszeichen (`"1"`) und einen hex-escape Bezeichner in Anführungszeichen (`"\24B7"`) für das Zeichen `Ⓑ`.

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
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
