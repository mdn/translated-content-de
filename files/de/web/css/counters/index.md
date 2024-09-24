---
title: counters()
slug: Web/CSS/counters
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`counters()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht das Kombinieren von Markierungen beim Verschachteln von Zählern. Die Funktion gibt eine Zeichenkette zurück, die die aktuellen Werte der benannten und verschachtelten Zähler, falls vorhanden, mit der angegebenen Zeichenkette verknüpft. Der dritte, optionale Parameter ermöglicht die Definition des Listenstils.

Die `counters()` Funktion wird generell innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) durch die {{cssxref("content")}} Eigenschaft verwendet, kann theoretisch jedoch überall eingesetzt werden, wo ein [`<string>`](/de/docs/Web/CSS/string) Wert unterstützt wird.

Die `counters()` Funktion hat zwei Formen: `counters(<name>, <string>)` und `counters(<name>, <string>, <style>)`. Der generierte Text ist der Wert aller Zähler mit dem angegebenen `<name>`, angeordnet von der äußersten bis zur innersten Verschachtelung, und durch das angegebene `<string>` getrennt. Die Zähler werden im angegebenen `<style>` gerendert, wobei standardmäßig `decimal` verwendet wird, falls kein `<style>` angegeben wird.

{{EmbedInteractiveExample("pages/tabbed/function-counters.html", "tabbed-standard")}}

## Syntax

```css
/* Einfache Verwendung - Stil standardmäßig auf dezimal */
counters(countername, '.');

/* Ändern der Zähleranzeige */
counters(countername, '-', upper-roman)
```

Ein [Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) hat für sich genommen keine sichtbare Wirkung. Die `counters()` Funktion (und die {{cssxref("counter", "counter()")}} Funktion) macht ihn nützlich, indem sie benutzerdefinierte Inhalte zurückgibt.

### Werte

Die `counters()` Funktion akzeptiert zwei oder drei Parameter. Der erste Parameter ist der `<counter-name>`. Der zweite Parameter ist der Trennstring `<string>`. Der optionale dritte Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}}, der die Zähler identifiziert, derselbe fall-sensitive Name, der für die {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} Eigenschaften verwendet wird. Der Name darf nicht mit zwei Bindestrichen beginnen und nicht `none`, `unset`, `initial` oder `inherit` sein. Alternativ kann für einmalige, inline Zähler die {{cssxref("symbols")}} Funktion anstelle eines benannten Zählers in [Browsern, die `symbols()` unterstützen](/de/docs/Web/CSS/symbols#browser_compatibility), verwendet werden.
- {{cssxref("&lt;string&gt;")}}
  - : Beliebige Anzahl an Textzeichen. Nicht-lateinische Zeichen müssen mit ihren Unicode-Escape-Sequenzen kodiert werden: Beispielsweise repräsentiert `\000A9` das Copyright-Symbol.
- `<counter-style>`
  - : Ein Zählerstilname oder eine [`symbols()`](/de/docs/Web/CSS/symbols) Funktion. Der Zählerstilname kann ein einfacher vordefinierter Stil sein wie numerisch, alphabetisch oder symbolisch, ein komplexer langer vordefinierter Stil wie ostasiatisch oder äthiopisch oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/CSS_counter_styles). Wenn weggelassen, ist der Standardwert des Zählerstils dezimal.

Der Rückgabewert ist eine Zeichenkette, die alle Werte aller Zähler im CSS-Zähler-Set des Elements enthält, das mit `<counter-name>` benannt ist, im durch `<counter-style>` definierten Zählerstil (oder dezimal, wenn weggelassen). Die Rückgabezeichenkette ist in einer äußeren-bis-inneren Reihenfolge sortiert, verbunden durch das angegebene `<string>`.

> [!NOTE]
> Für Informationen über nicht-verknüpfte Zähler siehe die {{cssxref("counter", "counter()")}} Funktion, die das `<string>` als Parameter weglässt.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich des Standardzählwerts mit römischen Großbuchstaben

Dieses Beispiel beinhaltet zwei `counters()` Funktionen: eine mit gesetztem `<counter-style>` und die andere mit dem Standardwert `decimal`.

#### HTML

```html
<ol>
  <li>
    <ol>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </li>
  <li></li>
  <li></li>
  <li>
    <ol>
      <li></li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
```

#### CSS

```css-nolint
ol {
  counter-reset: listCounter;
}
li {
  counter-increment: listCounter;
}
li::marker {
  content:
    counters(listCounter, ".", upper-roman) ") ";
}
li::before {
  content:
    counters(listCounter, ".") " == "
    counters(listCounter, ".", lower-roman);
}
```

#### Ergebnis

{{EmbedLiveSample("Comparing default counter value to uppercase roman numerals", "100%", 270)}}

### Vergleich des dezimalführenden Nullzählers mit Kleinbuchstaben

Dieses Beispiel beinhaltet drei `counters()` Funktionen, jede mit unterschiedlichen `<string>` und `<counter-style>` Werten.

#### HTML

```html
<ol>
  <li>
    <ol>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </li>
  <li></li>
  <li></li>
  <li>
    <ol>
      <li></li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
```

#### CSS

```css-nolint
ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::marker {
  content:
    counters(count, "-", decimal-leading-zero) ") ";
}
li::before {
  content:
    counters(count, "~", upper-alpha) " == "
    counters(count,  "*", lower-alpha);
}
```

#### Ergebnis

{{EmbedLiveSample("Comparing decimal-leading-zero counter value to lowercase letters", "100%", 270)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("counter-set")}} Eigenschaft
- {{cssxref("counter-reset")}} Eigenschaft
- {{cssxref("counter-increment")}} Eigenschaft
- {{cssxref("@counter-style")}} At-Regel
- CSS [`counter()`](/de/docs/Web/CSS/counter) Funktion
- {{cssxref("::marker")}} Pseudo-Element
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content) Modul
