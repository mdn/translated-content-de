---
title: Kommentare
slug: Web/CSS/Comments
l10n:
  sourceCommit: c9c86abc12c3bdd3fdb07c73a0d1cf88cdd0e1bc
---

{{CSSRef}}

Ein CSS-**Kommentar** wird verwendet, um erläuternde Anmerkungen im Code hinzuzufügen oder um zu verhindern, dass der Browser bestimmte Teile des Stylesheets interpretiert. Kommentare haben von Natur aus keinen Einfluss auf das Layout eines Dokuments.

## Syntax

Kommentare können überall dort platziert werden, wo im Stylesheet Leerraum erlaubt ist. Sie können einzeilig oder über mehrere Zeilen hinweg verwendet werden.

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

Die `/* */` Kommentarsyntax wird sowohl für einzeilige als auch mehrzeilige Kommentare verwendet. Es gibt keine andere Möglichkeit, Kommentare in externen Stylesheets anzugeben. Wenn Sie jedoch das {{htmlelement("style")}}-Element verwenden, können Sie `<!-- -->` verwenden, um CSS für ältere Browser zu verbergen, obwohl dies nicht empfohlen wird. Wie bei den meisten Programmiersprachen, die die `/* */` Kommentarsyntax verwenden, können Kommentare nicht verschachtelt werden. Mit anderen Worten: der erste Fall von `*/`, der einem `/*` folgt, schließt den Kommentar.

## Spezifikationen

- [CSS 2.1 Syntax und grundlegende Datentypen #comments](https://www.w3.org/TR/CSS21/syndata.html#comments)

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [Syntax](/de/docs/Web/CSS/Syntax) Leitfaden
- [Wertesyntaxdefinition](/de/docs/Web/CSS/Value_definition_syntax)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [Initiale](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [verwendete](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
