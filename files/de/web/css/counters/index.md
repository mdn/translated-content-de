---
title: counters()
slug: Web/CSS/counters
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

Die **`counters()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht das Kombinieren von Markern beim Verschachteln von Zählern. Die Funktion gibt einen String zurück, der die aktuellen Werte der benannten und verschachtelten Zähler, falls vorhanden, mit dem bereitgestellten String verknüpft. Der dritte, optionale Parameter ermöglicht die Definition des Listentyps.

Die `counters()`-Funktion wird im Allgemeinen innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) über die {{cssxref("content")}}-Eigenschaft verwendet, kann theoretisch jedoch überall eingesetzt werden, wo ein [`<string>`](/de/docs/Web/CSS/string)-Wert unterstützt wird.

Die `counters()`-Funktion hat zwei Formen: `counters(<name>, <string>)` und `counters(<name>, <string>, <style>)`. Der generierte Text ist der Wert aller Zähler mit dem angegebenen `<name>`, angeordnet vom äußersten bis zum innersten und getrennt durch den angegebenen `<string>`. Die Zähler werden im angegebenen `<style>` dargestellt, standardmäßig `decimal`, falls kein `<style>` angegeben ist.

{{InteractiveExample("CSS Demo: counters()", "tabbed-standard")}}

```css interactive-example
ol {
  counter-reset: index;
  list-style-type: none;
}

li::before {
  counter-increment: index;
  content: counters(index, ".", decimal) " ";
}
```

```html interactive-example
<ol>
  <li>Mars</li>
  <li>
    Saturn
    <ol>
      <li>Mimas</li>
      <li>Enceladus</li>
      <li>
        <ol>
          <li>Voyager</li>
          <li>Cassini</li>
        </ol>
      </li>
      <li>Tethys</li>
    </ol>
  </li>
  <li>
    Uranus
    <ol>
      <li>Titania</li>
    </ol>
  </li>
</ol>
```

## Syntax

```css
/* Basic usage  - style defaults to decimal */
counters(counter-name, '.');

/* changing the counter display */
counters(counter-name, '-', upper-roman)
```

Ein [Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) hat für sich allein keine sichtbare Wirkung. Die `counters()`-Funktion (und die {{cssxref("counter", "counter()")}} Funktion) macht ihn nützlich, indem sie entwicklerdefinierten Inhalt zurückgibt.

### Werte

Die `counters()`-Funktion akzeptiert zwei oder drei Parameter. Der erste Parameter ist der `<counter-name>`. Der zweite Parameter ist der Verknüpfungs-`<string>`. Der optionale dritte Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}}, der die Zähler identifiziert und derselbe Groß-/Kleinschreibung beachtende Name ist, der für die {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}}-Eigenschaften verwendet wird. Der Name darf nicht mit zwei Bindestrichen beginnen und nicht `none`, `unset`, `initial` oder `inherit` sein. Alternativ kann für inline, einmalige Zähler die {{cssxref("symbols")}}-Funktion anstelle eines benannten Zählers in [Browsern, die `symbols()` unterstützen](/de/docs/Web/CSS/symbols#browser_compatibility), verwendet werden.
- {{cssxref("&lt;string&gt;")}}
  - : Eine beliebige Anzahl von Textzeichen. Nicht-lateinische Zeichen müssen mit ihren Unicode-Escape-Sequenzen codiert werden: zum Beispiel repräsentiert `\000A9` das Copyright-Symbol.
- `<counter-style>`
  - : Ein Zählerstilname oder eine [`symbols()`](/de/docs/Web/CSS/symbols)-Funktion. Der Zählerstilname kann ein vordefinierter Stil sein, wie numerisch, alphabetisch oder symbolisch, ein komplexer vordefinierter Langschriftstil, wie Ostasiatisch oder Äthiopisch, oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/CSS_counter_styles). Bei Auslassung wird der Zählerstil standardmäßig auf decimal gesetzt.

Der Rückgabewert ist ein String, der alle Werte aller Zähler im CSS-Zählerset des Elements mit dem Namen `<counter-name>` im durch `<counter-style>` definierten Zählerstil (oder decimal, falls ausgelassen) enthält. Der Rückgabestring ist in der Reihenfolge vom äußersten bis zum innersten sortiert und durch den angegebenen `<string>` verbunden.

> [!NOTE]
> Informationen zu nicht verknüpften Zählern finden Sie in der {{cssxref("counter", "counter()")}}-Funktion, die den `<string>` als Parameter auslässt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich des Standardzählwerts mit römischen Zahlen in Großbuchstaben

Dieses Beispiel umfasst zwei `counters()`-Funktionen: eine mit festgelegtem `<counter-style>` und die andere, die standardmäßig `decimal` ist.

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

### Vergleich des Zählwerts mit führenden Nullen zu Kleinbuchstaben

Dieses Beispiel umfasst drei `counters()`-Funktionen, jeweils mit unterschiedlichen `<string>` und `<counter-style>` Werten.

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
- {{cssxref("counter-set")}}-Eigenschaft
- {{cssxref("counter-reset")}}-Eigenschaft
- {{cssxref("counter-increment")}}-Eigenschaft
- {{cssxref("@counter-style")}}-Regel
- CSS [`counter()`](/de/docs/Web/CSS/counter) Funktion
- {{cssxref("::marker")}} Pseudo-Element
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
