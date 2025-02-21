---
title: counters()
slug: Web/CSS/counters
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`counters()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht das Kombinieren von Markierungen beim Verschachteln von Zählern. Die Funktion gibt einen String zurück, der die aktuellen Werte der benannten und verschachtelten Zähler, falls vorhanden, mit dem bereitgestellten String verbindet. Der dritte, optionale Parameter ermöglicht das Definieren des Listenstils.

Die `counters()`-Funktion wird in der Regel innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) durch die {{cssxref("content")}}-Eigenschaft verwendet, kann theoretisch jedoch überall dort eingesetzt werden, wo ein [`<string>`](/de/docs/Web/CSS/string)-Wert unterstützt wird.

Die `counters()`-Funktion hat zwei Formen: `counters(<name>, <string>)` und `counters(<name>, <string>, <style>)`. Der generierte Text ist der Wert aller Zähler mit dem angegebenen `<name>`, geordnet von außen nach innen und getrennt durch den angegebenen `<string>`. Die Zähler werden im angegebenen `<style>` dargestellt, wobei standardmäßig `decimal` verwendet wird, wenn kein `<style>` angegeben ist.

{{EmbedInteractiveExample("pages/tabbed/function-counters.html", "tabbed-standard")}}

## Syntax

```css
/* Simple usage  - style defaults to decimal */
counters(counter-name, '.');

/* changing the counter display */
counters(counter-name, '-', upper-roman)
```

Ein [Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) hat von sich aus keine sichtbare Wirkung. Die `counters()`-Funktion (und die {{cssxref("counter", "counter()")}}-Funktion) macht sie nützlich, indem sie entwicklerdefinierte Inhalte zurückgibt.

### Werte

Die `counters()`-Funktion akzeptiert zwei oder drei Parameter. Der erste Parameter ist der `<counter-name>`. Der zweite Parameter ist der Verknüpfungs-`<string>`. Der optionale dritte Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}}, der die Zähler identifiziert, wobei derselbe groß- und kleinschreibungssensible Name verwendet wird wie bei den Eigenschaften {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}}. Der Name darf nicht mit zwei Bindestrichen beginnen und darf nicht `none`, `unset`, `initial` oder `inherit` sein. Alternativ kann für inline, einmal verwendbare Zähler die {{cssxref("symbols")}}-Funktion anstelle eines benannten Zählers in [Browsern, die `symbols()` unterstützen](/de/docs/Web/CSS/symbols#browser_compatibility), verwendet werden.
- {{cssxref("&lt;string&gt;")}}
  - : Beliebige Anzahl von Textzeichen. Nicht-lateinische Zeichen müssen mit ihren Unicode-Escape-Sequenzen codiert werden: beispielsweise stellt `\000A9` das Urheberrechtssymbol dar.
- `<counter-style>`
  - : Ein Zählerstilname oder eine [`symbols()`](/de/docs/Web/CSS/symbols)-Funktion. Der Zählerstilname kann ein einfacher vordefinierter Stil wie numerisch, alphabetisch oder symbolisch sein, ein komplexer Langhandstil wie ostasiatisch oder äthiopisch, oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/CSS_counter_styles). Wird er weggelassen, wird der Zählerstil standardmäßig auf decimal gesetzt.

Der Rückgabewert ist ein String, der alle Werte aller Zähler im CSS-Zählerset des Elements mit dem Namen `<counter-name>` im Zählerstil, der durch `<counter-style>` definiert ist (oder decimal, falls weggelassen), enthält. Der Rückgabestring ist von außen nach innen sortiert und wird durch den angegebenen `<string>` verbunden.

> [!NOTE]
> Für Informationen über nicht verknüpfte Zähler siehe die {{cssxref("counter", "counter()")}}-Funktion, die den `<string>` als Parameter weglässt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich des Standard-Zählerwerts mit römischen Zahlen in Großbuchstaben

Dieses Beispiel enthält zwei `counters()`-Funktionen: eine mit festgelegtem `<counter-style>` und die andere, die auf `decimal` standardmäßig zurückgreift.

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

### Vergleich des Zählerwerts mit führender Null mit Kleinbuchstaben

Dieses Beispiel umfasst drei `counters()`-Funktionen, jede mit verschiedenen `<string>`- und `<counter-style>`-Werten.

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

- [Verwendung von CSS Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("counter-set")}} Eigenschaft
- {{cssxref("counter-reset")}} Eigenschaft
- {{cssxref("counter-increment")}} Eigenschaft
- {{cssxref("@counter-style")}} At-Regel
- CSS [`counter()`](/de/docs/Web/CSS/counter) Funktion
- {{cssxref("::marker")}} Pseudo-Element
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content) Modul
