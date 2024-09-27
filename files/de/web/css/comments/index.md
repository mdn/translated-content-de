---
title: Kommentare
slug: Web/CSS/Comments
l10n:
  sourceCommit: ce07a52c8ffd27f402b0490aca5626caa623923f
---

{{CSSRef}}

Ein CSS **Kommentar** wird verwendet, um erläuternde Anmerkungen zum Code hinzuzufügen oder um zu verhindern, dass der Browser bestimmte Teile des Stylesheets interpretiert. Kommentare haben von Natur aus keinen Einfluss auf das Layout eines Dokuments.

## Syntax

Kommentare können überall dort platziert werden, wo Leerzeichen in einem Stylesheet zulässig sind. Sie können in einer einzigen Zeile oder über mehrere Zeilen hinweg verwendet werden.

```css
/* Comment */
```

## Beispiele

```css
/* A one-line comment */

/*
A comment
which stretches
over several
lines
*/

/* The comment below is used to
   disable specific styling */
/*
span {
  color: blue;
  font-size: 1.5em;
}
*/
```

## Hinweise

Die `/* */` Kommentar-Syntax wird sowohl für einzeilige als auch für mehrzeilige Kommentare verwendet. Es gibt keine andere Möglichkeit, Kommentare in externen Stylesheets anzugeben. Wenn jedoch das {{htmlelement("style")}}-Element verwendet wird, können Sie `<!-- -->` verwenden, um CSS vor älteren Browsern zu verbergen, obwohl dies nicht empfohlen wird. Wie bei den meisten Programmiersprachen, die die `/* */` Kommentar-Syntax verwenden, können Kommentare nicht verschachtelt werden. Mit anderen Worten, das erste Auftreten von `*/`, das auf ein Auftreten von `/*` folgt, schließt den Kommentar.

## Spezifikationen

- [CSS 2.1 Syntax und grundlegende Datentypen #comments](https://www.w3.org/TR/CSS21/syndata.html#comments)

## Siehe auch

- Modul [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)
- [Syntax](/de/docs/Web/CSS/Syntax) Leitfaden
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [Fehlerbehandlung in CSS](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Bausteine: die CSS-Kaskade](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Bausteine: Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- Modul [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)
- [Initial](/de/docs/Web/CSS/initial_value), [computed](/de/docs/Web/CSS/computed_value), [used](/de/docs/Web/CSS/used_value) und [actual](/de/docs/Web/CSS/actual_value) Werte
