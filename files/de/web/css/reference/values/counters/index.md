---
title: counters()
slug: Web/CSS/Reference/Values/counters
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`counters()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht das Kombinieren von Markierungen beim Verschachteln von Zählern. Die Funktion gibt einen String zurück, der die aktuellen Werte der benannten und verschachtelten Zähler, falls vorhanden, mit dem angegebenen String verkettet. Der dritte, optionale Parameter ermöglicht die Definition des Listentyps.

Die `counters()`-Funktion wird in der Regel innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) über die {{cssxref("content")}}-Eigenschaft verwendet, kann theoretisch aber überall eingesetzt werden, wo ein [`<string>`](/de/docs/Web/CSS/Reference/Values/string)-Wert unterstützt wird.

Die `counters()`-Funktion hat zwei Formen: `counters(<name>, <string>)` und `counters(<name>, <string>, <style>)`. Der generierte Text ist der Wert aller Zähler mit dem angegebenen `<name>`, angeordnet vom äußersten zum innersten und getrennt durch den angegebenen `<string>`. Die Zähler werden im angegebenen `<style>` dargestellt, wobei `decimal` der Standardstil ist, falls kein `<style>` angegeben ist.

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

Ein [Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) hat von sich aus keine sichtbare Wirkung. Die `counters()`-Funktion (und die {{cssxref("counter", "counter()")}}-Funktion) macht ihn nützlich, indem sie benutzerdefinierten Inhalt zurückgibt.

### Werte

Die Funktion `counters()` akzeptiert zwei oder drei Parameter. Der erste Parameter ist der `<counter-name>`. Der zweite Parameter ist der Verkettungs-`<string>`. Der optionale dritte Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}}, der die Zähler identifiziert. Dies ist der gleiche, auf Groß- und Kleinschreibung achtende Name, der für die Eigenschaften {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} verwendet wird. Der Name darf nicht mit zwei Bindestrichen beginnen und nicht `none`, `unset`, `initial` oder `inherit` sein. Alternativ kann für einmalige, inline genutzte Zähler die {{cssxref("symbols")}}-Funktion anstelle eines benannten Zählers in [Browsern, die `symbols()` unterstützen](/de/docs/Web/CSS/Reference/Values/symbols#browser_compatibility), verwendet werden.
- {{cssxref("&lt;string&gt;")}}
  - : Beliebige Anzahl von Textzeichen. Nicht-lateinische Zeichen müssen mit ihren Unicode-Escape-Sequenzen kodiert werden: zum Beispiel repräsentiert `\000A9` das Copyright-Symbol.
- `<counter-style>`
  - : Ein Zählerstilname oder eine [`symbols()`](/de/docs/Web/CSS/Reference/Values/symbols)-Funktion. Der Zählerstilname kann ein vordefinierter Stil wie numerisch, alphabetisch oder symbolisch sein, ein komplexer, vordefinierter Langhandstil wie Ostasiatisch oder Äthiopisch, oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/Guides/Counter_styles). Wenn er weggelassen wird, ist der Standardstil dezimal.

Der Rückgabewert ist ein String, der alle Werte aller Zähler im CSS-Zählerset des Elements mit dem Namen `<counter-name>` im durch `<counter-style>` definierten Zählerstil (oder dezimal, wenn weggelassen) enthält. Der Rückgabestring wird in der Reihenfolge vom äußersten zum innersten sortiert und durch den angegebenen `<string>` verbunden.

> [!NOTE]
> Informationen zu nicht-verknüpften Zählern finden Sie in der {{cssxref("counter", "counter()")}}-Funktion, die auf `<string>` als Parameter verzichtet.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von Standardzählerwerten mit römischen Großbuchstaben

Dieses Beispiel enthält zwei `counters()`-Funktionen: eine mit festgelegtem `<counter-style>` und die andere standardmäßig auf `decimal`.

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

{{EmbedLiveSample("Vergleich von Standardzählerwerten mit römischen Großbuchstaben", "100%", 270)}}

### Vergleich von Zählerwerten mit führender Null und Kleinbuchstaben

Dieses Beispiel enthält drei `counters()`-Funktionen, jede mit unterschiedlichen `<string>`- und `<counter-style>`-Werten.

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

{{EmbedLiveSample("Vergleich von Zählerwerten mit führender Null und Kleinbuchstaben", "100%", 270)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters)
- {{cssxref("counter-set")}}-Eigenschaft
- {{cssxref("counter-reset")}}-Eigenschaft
- {{cssxref("counter-increment")}}-Eigenschaft
- {{cssxref("@counter-style")}}-Regel
- CSS [`counter()`](/de/docs/Web/CSS/Reference/Values/counter)-Funktion
- {{cssxref("::marker")}}-Pseudo-Element
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists)-Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles)-Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content)-Modul
