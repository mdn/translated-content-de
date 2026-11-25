---
title: "`wrap-inside` CSS property"
short-title: wrap-inside
slug: Web/CSS/Reference/Properties/wrap-inside
l10n:
  sourceCommit: eeebbb874aeb67641b37122adf7aac42c5b8f45a
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`wrap-inside`** legt fest, ob Zeilenumbrüche innerhalb einer Inline-Box zulässig sind oder nach Möglichkeit vermieden werden sollen.

{{InteractiveExample("CSS Demo: wrap-inside")}}

```css interactive-example-choice
wrap-inside: auto;
```

```css interactive-example-choice
wrap-inside: avoid;
```

```html interactive-example
<section id="default-example">
  <p>
    The conference takes place on
    <span id="example-element">Saturday 14 November</span> in the main hall.
  </p>
</section>
```

```css interactive-example
p {
  border: 2px dashed #999999;
  font-size: 1.5rem;
  text-align: left;
  width: 20ch;
}

#example-element {
  background-color: rgba(255, 193, 7, 0.3);
}
```

## Syntax

```css
/* Keyword values */
wrap-inside: auto;
wrap-inside: avoid;

/* Global values */
wrap-inside: inherit;
wrap-inside: initial;
wrap-inside: revert;
wrap-inside: revert-layer;
wrap-inside: unset;
```

### Werte

- `auto`
  - : Zeilen können an jeder zulässigen Umbruchstelle innerhalb der Box umgebrochen werden, entsprechend den geltenden Regeln für Zeilenumbrüche. Dies ist der Standardwert.
- `avoid`
  - : Zeilenumbrüche innerhalb der Box werden vermieden. Der Browser bricht eine Zeile nur dann innerhalb der Box um, wenn es in der Zeile keine andere zulässige Umbruchstelle gibt. Wird der Text innerhalb der Box umgebrochen, gelten dieselben Regeln für Zeilenumbrüche wie bei `auto`.

## Beschreibung

Mit der Eigenschaft `wrap-inside` können Sie den Inhalt einer Inline-Box, beispielsweise eines {{htmlelement("span")}}, nach Möglichkeit in einer Zeile zusammenhalten. Das ist für kurze Ausdrücke nützlich, die sich besser lesen lassen, wenn sie nicht auf mehrere Zeilen verteilt sind, etwa Namen, Datumsangaben, Adressen oder Produktnamen.

Wenn für eine Inline-Box `wrap-inside: avoid` festgelegt ist, bricht der Browser die Zeile vorzugsweise vor oder nach der Box statt innerhalb der Box um. Passt die Box in die nächste Zeile, wird sie vollständig dorthin verschoben. Ist die Box zu lang, um ohne Umbruch in eine Zeile zu passen, bricht der Browser ihren Inhalt dennoch um: Er setzt die Box zunächst in eine neue Zeile und verwendet dann dieselben Umbruchstellen wie bei `auto`.

Das unterscheidet sich davon, {{cssxref("white-space", "white-space: nowrap")}} (oder {{cssxref("text-wrap-mode", "text-wrap-mode: nowrap")}}) für die Box festzulegen. Dadurch werden Zeilenumbrüche innerhalb der Box vollständig verhindert, selbst wenn ihr Inhalt dann über den Container hinausragt.

Wenn Boxen mit `wrap-inside: avoid` verschachtelt sind und der Browser innerhalb dieser Boxen umbrechen muss, verwendet er eine Umbruchstelle in einer äußeren Box, bevor er eine Umbruchstelle in einer inneren Box verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit der Eigenschaft `wrap-inside` einen Ausdruck in einer Zeile zusammenhalten, indem Sie Zeilenumbrüche innerhalb des Ausdrucks vermeiden.

#### HTML

Wir fügen zwei Boxen mit demselben Text ein. Die Datumsangabe in jeder Box ist von einem {{htmlelement("span")}}-Element umschlossen. Jede Box hat eine andere Klasse, über die wir unterschiedliche `wrap-inside`-Werte anwenden.

```html
<div class="container">
  <p class="auto">
    The conference takes place on
    <span class="date">Saturday 14 November</span> in the main hall.
  </p>
  <p class="avoid">
    The conference takes place on
    <span class="date">Saturday 14 November</span> in the main hall.
  </p>
</div>
```

#### CSS

Wir legen für die Absätze eine Breite von `20ch` fest und geben den Datumsangaben eine {{cssxref("background-color")}}. Die erste Box verwendet den Standardwert `auto`; für die Datumsangabe in der zweiten Box legen wir `wrap-inside: avoid` fest. Die übrigen Stile sind der Kürze halber ausgeblendet.

```css
p {
  width: 20ch;
}

.date {
  background-color: wheat;
}

.avoid .date {
  wrap-inside: avoid;
}
```

```css hidden
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

p {
  margin: 0;
  padding: 0.5rem;
  border: 2px dashed #999999;
  font-size: 1.25rem;
}
```

```css hidden
@layer no-support {
  @supports not (wrap-inside: avoid) {
    body::before {
      content: "Your browser doesn't support the wrap-inside property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
      margin-bottom: 1rem;
    }
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "", 200)}}

In der ersten Box bricht der Browser Zeilen bei Bedarf um. Daher kann die Datumsangabe auf zwei Zeilen verteilt werden.

In der zweiten Box vermeidet der Browser einen Umbruch innerhalb der Datumsangabe. Stattdessen bricht er die Zeile vor der Datumsangabe um, sodass sie vollständig in einer Zeile steht.

### Vergleich mit `white-space: nowrap`

Dieses Beispiel zeigt die Auswirkungen von `wrap-inside: auto` und `wrap-inside: avoid` im Vergleich zu `white-space: nowrap`.

#### HTML

Wir fügen drei Absätze mit identischem Inhalt ein, darunter einen Ausdruck, der zu lang für eine einzelne Zeile ist. Die Absätze unterscheiden sich nur durch ihre Klassennamen.

```html
<div class="container">
  <p class="default">
    Our address is
    <span class="address">123 Long Street, Springfield, Anytown</span>.
  </p>
  <p class="avoid">
    Our address is
    <span class="address">123 Long Street, Springfield, Anytown</span>.
  </p>
  <p class="nowrap">
    Our address is
    <span class="address">123 Long Street, Springfield, Anytown</span>.
  </p>
</div>
```

#### CSS

Wir legen für die Absätze eine Breite von `20ch` fest und geben der Adresse eine {{cssxref("background-color")}}. Die erste Box verwendet den Standardwert `auto`. Für die Adresse in der zweiten Box legen wir `wrap-inside: avoid` fest, für die Adresse in der letzten Box `white-space: nowrap`. Die übrigen Stile sind der Kürze halber ausgeblendet.

```css
p {
  width: 20ch;
}

.address {
  background-color: wheat;
}

.avoid .address {
  wrap-inside: avoid;
}

.nowrap .address {
  white-space: nowrap;
}
```

```css hidden
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

p {
  margin: 0;
  padding: 0.5rem;
  border: 2px dashed #999999;
  font-size: 1.25rem;
}
```

```css hidden
@layer no-support {
  @supports not (wrap-inside: avoid) {
    body::before {
      content: "Your browser doesn't support the wrap-inside property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
      margin-bottom: 1rem;
    }
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Comparing with white-space: nowrap", "", 300)}}

In der ersten Box, die den Standardwert `auto` verwendet, bricht der Browser die Zeilen bei Bedarf zwischen Wörtern um. Daher beginnt die Adresse in der ersten Zeile.

In der zweiten Box passt die Adresse in keine einzelne Zeile, sodass `wrap-inside: avoid` sie nicht zusammenhalten kann. Stattdessen beginnt der Browser die Adresse in einer neuen Zeile und bricht sie nur dort um, wo es nötig ist, damit sie nicht über die Box hinausragt.

In der letzten Box verhindert `white-space: nowrap` jeden Zeilenumbruch innerhalb der Adresse, sodass sie über die Box hinausragt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-wrap-mode")}}
- {{cssxref("white-space")}}
- {{cssxref("word-break")}}
- {{cssxref("overflow-wrap")}}
- [Text umbrechen und Zeilenumbrüche setzen](/de/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
- [CSS-Textmodul](/de/docs/Web/CSS/Guides/Text)
