---
title: "`counters()` CSS-Funktion"
short-title: counters()
slug: Web/CSS/Reference/Values/counters
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`counters()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht das Kombinieren von Markierungen beim Verschachteln von Zählern. Die Funktion gibt eine Zeichenkette zurück, die die aktuellen Werte der benannten und verschachtelten Zähler, falls vorhanden, mit der bereitgestellten Zeichenkette verkettet. Der dritte, optionale Parameter ermöglicht die Definition des Listentyps.

Die `counters()`-Funktion wird im Allgemeinen innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) über die {{cssxref("content")}}-Eigenschaft verwendet, kann theoretisch jedoch überall eingesetzt werden, wo ein {{cssxref("string")}}-Wert unterstützt wird.

Die `counters()`-Funktion hat zwei Formen: `counters(<name>, <string>)` und `counters(<name>, <string>, <style>)`. Der generierte Text ist der Wert aller Zähler mit dem angegebenen `<name>`, angeordnet vom äußersten zum innersten, und getrennt durch das angegebene `<string>`. Die Zähler werden im angegebenen `<style>` gerendert, wobei `decimal` der Standardwert ist, wenn kein `<style>` angegeben wird.

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

Ein [Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) hat für sich allein genommen keine sichtbare Wirkung. Die `counters()`-Funktion (und die {{cssxref("counter()")}}-Funktion) macht sie nützlich, indem sie entwicklerdefinierte Inhalte zurückgibt.

### Werte

Die `counters()`-Funktion akzeptiert zwei oder drei Parameter. Der erste Parameter ist der `<counter-name>`. Der zweite Parameter ist der Verknüpfungs-`<string>`. Der optionale dritte Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}}, der die Zähler identifiziert. Es ist derselbe case-sensible Name, der für die Eigenschaften {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} verwendet wird. Der Name darf nicht mit zwei Bindestrichen beginnen und nicht `none`, `unset`, `initial` oder `inherit` sein. Alternativ können für Inline-Einweg-Zähler die {{cssxref("symbols")}} Funktion anstelle eines benannten Zählers in [Browsern, die `symbols()` unterstützen](/de/docs/Web/CSS/Reference/Values/symbols#browser_compatibility), verwendet werden.
- {{cssxref("&lt;string&gt;")}}
  - : Beliebige Anzahl von Textzeichen. Nicht-lateinische Zeichen müssen mit ihren Unicode-Escape-Sequenzen kodiert werden: zum Beispiel repräsentiert `\000A9` das Copyright-Symbol.
- `<counter-style>`
  - : Ein Zählerstilname oder eine [`symbols()`](/de/docs/Web/CSS/Reference/Values/symbols) Funktion. Der Zählerstilname kann ein vordefinierter Stil wie numerisch, alphabetisch oder symbolisch sein, ein komplexer langanhaltender vordefinierter Stil wie Ostasiatisch oder Äthiopisch, oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/Guides/Counter_styles). Wenn weggelassen, wird der Zählerstil standardmäßig auf Dezimal gesetzt.

Der Rückgabewert ist eine Zeichenkette, die alle Werte aller Zähler im Satz der CSS-Zähler des Elements mit dem Namen `<counter-name>` im durch `<counter-style>` definierten Zählerstil enthält (oder Dezimal, wenn weggelassen). Die Rückgabezeichenkette ist von außen nach innen sortiert und wird durch das angegebene `<string>` zusammengefügt.

> [!NOTE]
> Informationen zu nicht-verknüpften Zählern finden Sie in der {{cssxref("counter()")}}-Funktion, die `<string>` als Parameter weglässt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich des Standardzählwerts mit römischen Großbuchstaben

Dieses Beispiel enthält zwei `counters()`-Funktionen: eine mit gesetztem `<counter-style>` und die andere mit `decimal` als Standardwert.

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

{{EmbedLiveSample("Vergleich des Standardzählwerts mit römischen Großbuchstaben", "100%", 270)}}

### Vergleich des dezimal-vorausgehenden Nullzählwerts mit Kleinbuchstaben

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

{{EmbedLiveSample("Vergleich des dezimal-vorausgehenden Nullzählwerts mit Kleinbuchstaben", "100%", 270)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters)
- {{cssxref("counter-set")}} Eigenschaft
- {{cssxref("counter-reset")}} Eigenschaft
- {{cssxref("counter-increment")}} Eigenschaft
- {{cssxref("@counter-style")}} At-Regel
- CSS [`counter()`](/de/docs/Web/CSS/Reference/Values/counter) Funktion
- {{cssxref("::marker")}} Pseudo-Element
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists)-Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles)-Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content)-Modul
