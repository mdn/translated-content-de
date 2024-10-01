---
title: symbols
slug: Web/CSS/@counter-style/symbols
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Der **`symbols`** [CSS](/de/docs/Web/CSS) Deskriptor der {{cssxref("@counter-style")}} At-Regel wird verwendet, um die Symbole für die Erstellung von Zählerdarstellungen im angegebenen Zählsystem festzulegen. Die Angabe dieses Deskriptors ist obligatorisch, wenn der Wert des {{cssxref('@counter-style/system', 'system')}} Deskriptors `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist.

## Syntax

```css
symbols: A B C D E;
symbols: "\24B6" "\24B7" "\24B8" D E;
symbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";
symbols: url("one.svg") url("two.svg") url("three.svg");
symbols: indic-numbers;
```

### Werte

Der `symbols` Deskriptor wird als Liste von einem oder mehreren durch Leerzeichen getrennten `<symbol>` Werten angegeben.

- `<symbol>`
  - : Gibt das Symbol an, das im Zählsystem verwendet werden soll. Jedes Symbol in der Liste kann entweder ein {{cssxref("&lt;string&gt;")}}, ein {{cssxref("&lt;image&gt;")}}, oder ein {{cssxref("&lt;custom-ident&gt;")}} sein. Der `<image>` Wert kann wiederum als {{cssxref("&lt;url&gt;")}} oder {{cssxref("&lt;gradient&gt;")}} angegeben werden.

> [!NOTE]
> Wenn Sie einen {{Glossary("identifier", "Bezeichner")}} für ein Symbol verwenden, beachten Sie, dass {{Glossary("ASCII", "ASCII")}} Nicht-Buchstaben wie `*`, `"`, und `\` nicht als Bezeichner betrachtet werden. Sie müssen entweder als Zeichenkette zitiert oder entkommen werden.

## Beschreibung

Ein Symbol kann eine Zeichenkette, ein Bild oder ein Bezeichner sein. Es wird innerhalb der {{cssxref("@counter-style")}} [At-Regel](/de/docs/Web/CSS/At-rule) verwendet.

Wenn der Wert des {{cssxref('@counter-style/system', 'system')}} Deskriptors `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss der `symbols` Deskriptor angegeben werden. Für das `additive` System verwenden Sie stattdessen den {{cssxref('@counter-style/additive-symbols', 'additive-symbols')}} Deskriptor, um die Symbole zu spezifizieren.

Zwar ist ein Leerzeichen zwischen zitierten Symbolen nicht erforderlich, jedoch macht es CSS lesbarer. Um ein Anführungszeichen als Symbol zu verwenden, können Sie entweder das Anführungszeichen-Zeichen entkommen oder das Zeichen innerhalb anderer Anführungszeichen einschließen, wie bei `"'".`

Wenn Sie Symbole mit Bezeichnern anstelle von Zeichenketten definieren, stellen Sie sicher, dass Sie die Syntaxregeln für Bezeichner verwenden. Wie oben erwähnt, sind ASCII Nicht-Buchstaben wie `*` keine Bezeichner und müssen entweder zitiert oder entkommen werden. Hex-Escape-Zeichen werden von einem Leerzeichen gefolgt. Dieses Leerzeichen kann wie das Leerzeichen aussehen, das zwei Bezeichner trennt, es ermöglicht jedoch, dass Ziffern den hex-entkoppelten Zeichen folgen. Das bedeutet, dass zwei Leerzeichen hinter einem hex-entkoppelten Bezeichner enthalten sein müssen, um ihn vom nächsten Bezeichner zu trennen. Es ist zum Beispiel besser, die Zeichenkette `"\2A 1"` anstelle von `\2A  1` mit zwei Leerzeichen zu verwenden, da Ihre Code-Tools möglicherweise doppelte Leerzeichen entfernen. Es ist allgemein sicherer, Bezeichner, die entkommen werden müssen, zu zitieren oder Zeichenketten zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zähler-Symbole einstellen

In diesem Beispiel umfasst die Liste der Werte für den `symbols` Deskriptor Buchstaben (`A`, `D`, `E`), eine Zahl in Anführungszeichen (`"1"`) und einen Hex-Escape-Bezeichner in Anführungszeichen (`"\24B7"`) für das Zeichen `Ⓑ`.

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
- {{cssxref("symbols", "symbols()")}} Funktion
- {{cssxref("url_value", "&lt;url&gt;")}} Typ
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
