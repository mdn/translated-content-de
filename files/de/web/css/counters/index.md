---
title: counters()
slug: Web/CSS/counters
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`counters()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht das Kombinieren von Markierungen beim Verschachteln von Zählern. Die Funktion gibt einen String zurück, der die aktuellen Werte der benannten und verschachtelten Zähler, falls vorhanden, mit dem angegebenen String verknüpft. Der dritte, optionale Parameter ermöglicht die Definition des Listentyps.

Die `counters()`-Funktion wird im Allgemeinen innerhalb von [Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements) durch die {{cssxref("content")}}-Eigenschaft verwendet, könnte theoretisch jedoch überall eingesetzt werden, wo ein [`<string>`](/de/docs/Web/CSS/string)-Wert unterstützt wird.

Die `counters()`-Funktion hat zwei Formen: `counters(<name>, <string>)` und `counters(<name>, <string>, <style>)`. Der generierte Text ist der Wert aller Zähler mit dem angegebenen `<name>`, angeordnet von außen nach innen, und getrennt durch den angegebenen `<string>`. Die Zähler werden im angegebenen `<style>` angezeigt, wobei `decimal` der Standard ist, wenn kein `<style>` angegeben wird.

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
/* Simple usage  - style defaults to decimal */
counters(counter-name, '.');

/* changing the counter display */
counters(counter-name, '-', upper-roman)
```

Ein [Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) hat für sich genommen keinen sichtbaren Effekt. Die `counters()`-Funktion (und die {{cssxref("counter", "counter()")}}-Funktion) macht ihn nützlich, indem sie benutzerdefinierten Inhalt zurückgibt.

### Werte

Die `counters()`-Funktion akzeptiert zwei oder drei Parameter. Der erste Parameter ist der `<counter-name>`. Der zweite Parameter ist der Konkatenator `<string>`. Der optionale dritte Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}} zur Identifizierung der Zähler, derselbe fallunterscheidende Name, der für die Eigenschaften {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} verwendet wird. Der Name darf nicht mit zwei Bindestrichen beginnen und kann nicht `none`, `unset`, `initial` oder `inherit` sein. Alternativ kann für einmalige Inline-Zähler die {{cssxref("symbols")}}-Funktion anstelle eines benannten Zählers in [Browsern, die `symbols()` unterstützen](/de/docs/Web/CSS/symbols#browser_compatibility), verwendet werden.
- {{cssxref("&lt;string&gt;")}}
  - : Eine beliebige Anzahl von Textzeichen. Nicht-lateinische Zeichen müssen mithilfe ihrer Unicode-Escape-Sequenzen kodiert werden: zum Beispiel steht `\000A9` für das Copyright-Symbol.
- `<counter-style>`
  - : Ein Zählerstilname oder eine [`symbols()`](/de/docs/Web/CSS/symbols)-Funktion. Der Zählerstilname kann ein einfacher vordefinierter Stil wie numerisch, alphabetisch oder symbolisch sein, ein komplexer vordefinierter Langhandstil wie ostasiatisch oder äthiopisch, oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/CSS_counter_styles). Wenn er weggelassen wird, ist der Standard-Zählerstil dezimal.

Der Rückgabewert ist ein String, der alle Werte aller Zähler im CSS-Zählerset des Elements mit dem Namen `<counter-name>` im durch `<counter-style>` definierten Zählerstil enthält (oder dezimal, falls weggelassen). Der Rückgabestring ist in der Reihenfolge von außen nach innen sortiert und wird durch den angegebenen `<string>` verbunden.

> [!NOTE]
> Informationen zu nicht verknüpften Zählern finden Sie in der {{cssxref("counter", "counter()")}}-Funktion, die den `<string>` als Parameter weglässt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich des Standard-Zählerwerts mit römischen Ziffern in Großbuchstaben

Dieses Beispiel enthält zwei `counters()`-Funktionen: eine mit gesetzt `<counter-style>` und die andere, die den Standardwert `decimal` verwendet.

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

Dieses Beispiel enthält drei `counters()`-Funktionen, jede mit unterschiedlichen `<string>` und `<counter-style>`-Werten.

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
- {{cssxref("@counter-style")}}-At-Regel
- CSS [`counter()`](/de/docs/Web/CSS/counter) Funktion
- {{cssxref("::marker")}} Pseudoelement
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
