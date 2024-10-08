---
title: Kommentare
slug: Web/CSS/Comments
l10n:
  sourceCommit: ce07a52c8ffd27f402b0490aca5626caa623923f
---

{{CSSRef}}

Ein CSS-**Kommentar** wird verwendet, um erklärende Anmerkungen zum Code hinzuzufügen oder zu verhindern, dass der Browser bestimmte Teile des Stylesheets interpretiert. Kommentare haben designbedingt keinen Einfluss auf das Layout eines Dokuments.

## Syntax

Kommentare können überall dort platziert werden, wo in einem Stylesheet Leerzeichen erlaubt sind. Sie können in einer einzigen Zeile oder über mehrere Zeilen hinweg verwendet werden.

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

Die `/* */` Kommentarsyntax wird sowohl für einzeilige als auch für mehrzeilige Kommentare verwendet. Es gibt keine andere Möglichkeit, Kommentare in externen Stylesheets anzugeben. Wenn jedoch das {{htmlelement("style")}} Element genutzt wird, können Sie `<!-- -->` verwenden, um CSS vor älteren Browsern zu verbergen, obwohl dies nicht empfohlen wird. Wie bei den meisten Programmiersprachen, die die `/* */` Kommentarsyntax verwenden, können Kommentare nicht verschachtelt werden. Mit anderen Worten, die erste Instanz von `*/`, die einer Instanz von `/*` folgt, schließt den Kommentar.

## Spezifikationen

- [CSS 2.1 Syntax und Basisdatentypen #comments](https://www.w3.org/TR/CSS21/syndata.html#comments)

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [Syntax](/de/docs/Web/CSS/Syntax) Leitfaden
- [Wertdefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Grundlagen: der CSS-Cascade](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Grundlagen: Cascade-Schichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [CSS-Cascade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [Initiale](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [verwendete](/de/docs/Web/CSS/used_value), und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
