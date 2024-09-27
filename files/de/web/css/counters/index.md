---
title: counters()
slug: Web/CSS/counters
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`counters()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht das Kombinieren von Markierungen bei verschachtelten Zählern. Die Funktion gibt einen String zurück, der die aktuellen Werte der benannten und verschachtelten Zähler, falls vorhanden, mit dem bereitgestellten String verkettet. Der dritte, optionale Parameter ermöglicht die Definition des Listentyps.

Die `counters()`-Funktion wird im Allgemeinen innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) über die {{cssxref("content")}} Eigenschaft verwendet, kann theoretisch aber überall dort verwendet werden, wo ein [`<string>`](/de/docs/Web/CSS/string) Wert unterstützt wird.

Die `counters()`-Funktion hat zwei Formen: `counters(<name>, <string>)` und `counters(<name>, <string>, <style>)`. Der generierte Text ist der Wert aller Zähler mit dem angegebenen `<name>`, angeordnet von der äußersten bis zur innersten Ebene und getrennt durch den angegebenen `<string>`. Die Zähler werden im angegebenen `<style>` gerendert, standardmäßig `decimal`, wenn kein `<style>` angegeben ist.

{{EmbedInteractiveExample("pages/tabbed/function-counters.html", "tabbed-standard")}}

## Syntax

```css
/* Simple usage  - style defaults to decimal */
counters(countername, '.');

/* changing the counter display */
counters(countername, '-', upper-roman)
```

Ein [Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) hat für sich genommen keinen sichtbaren Effekt. Die `counters()`-Funktion (und die {{cssxref("counter", "counter()")}} Funktion) macht ihn nützlich, indem sie entwicklerdefinierten Inhalt zurückgibt.

### Werte

Die `counters()`-Funktion akzeptiert zwei oder drei Parameter. Der erste Parameter ist der `<counter-name>`. Der zweite Parameter ist der Konkatenator `<string>`. Der optionale dritte Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}}, der die Zähler identifiziert, was derselbe groß- und kleinschreibungssensitive Name ist, der für die {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} Eigenschaften verwendet wird. Der Name darf nicht mit zwei Bindestrichen beginnen und nicht `none`, `unset`, `initial` oder `inherit` sein. Alternativ können für inline, einmalig verwendete Zähler die {{cssxref("symbols")}} Funktion anstelle eines benannten Zählers in [Browsern, die `symbols()` unterstützen](/de/docs/Web/CSS/symbols#browser_compatibility) verwendet werden.
- {{cssxref("&lt;string&gt;")}}
  - : Beliebige Anzahl von Textzeichen. Nicht-lateinische Zeichen müssen mit ihren Unicode-Fluchtsequenzen kodiert werden: zum Beispiel repräsentiert `\000A9` das Copyright-Symbol.
- `<counter-style>`
  - : Ein Zählerstilname oder eine [`symbols()`](/de/docs/Web/CSS/symbols) Funktion. Der Zählerstilname kann ein einfacher vordefinierter Stil sein, wie numerisch, alphabetisch oder symbolisch, ein komplexer Langform-vordefinierter Stil wie Ostasiatisch oder Äthiopisch, oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/CSS_counter_styles). Wenn weggelassen, wird der Zählerstil standardmäßig auf decimal gesetzt.

Der Rückgabewert ist ein String, der alle Werte aller Zähler im CSS-Zählersatz des Elements mit dem Namen `<counter-name>` im Zählerstil, der durch `<counter-style>` definiert ist (oder decimal, wenn weggelassen), enthält. Der Rückgabestring wird in äußerster zu innerster Reihenfolge sortiert und durch den angegebenen `<string>` verbunden.

> [!NOTE]
> Informationen zu nicht-konkatenierten Zählern finden Sie in der {{cssxref("counter", "counter()")}} Funktion, die den `<string>` als Parameter weglässt.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich des Standardzählerwerts mit römischen Großbuchstaben

Dieses Beispiel enthält zwei `counters()`-Funktionen: eine mit gesetztem `<counter-style>` und die andere, die auf `decimal` standardisiert.

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

{{EmbedLiveSample("Vergleich des Standardzählerwerts mit römischen Großbuchstaben", "100%", 270)}}

### Vergleich des Dezimalwerts mit führender Null und Kleinbuchstaben

Dieses Beispiel enthält drei `counters()`-Funktionen, jede mit unterschiedlichen `<string>` und `<counter-style>` Werten.

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

{{EmbedLiveSample("Vergleich des Dezimalwerts mit führender Null und Kleinbuchstaben", "100%", 270)}}

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
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS-generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
