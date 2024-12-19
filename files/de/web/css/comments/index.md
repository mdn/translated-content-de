---
title: Kommentare
slug: Web/CSS/Comments
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Ein CSS **Kommentar** wird verwendet, um erläuternde Notizen zum Code hinzuzufügen oder um zu verhindern, dass der Browser bestimmte Teile des Stylesheets interpretiert. Kommentare haben von Natur aus keinen Einfluss auf das Layout eines Dokuments.

## Syntax

Kommentare können überall dort platziert werden, wo im Stylesheet Leerzeichen erlaubt sind. Sie können in einer einzigen Zeile oder über mehrere Zeilen hinweg verwendet werden.

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

Das `/* */`-Kommentar-Syntax wird sowohl für Einzel- als auch für mehrzeilige Kommentare verwendet. Es gibt keine andere Möglichkeit, Kommentare in externen Stylesheets anzugeben. Wenn Sie jedoch das {{htmlelement("style")}}-Element verwenden, können Sie `<!-- -->` nutzen, um CSS vor älteren Browsern zu verbergen, obwohl dies nicht empfohlen wird. Wie bei den meisten Programmiersprachen, die das `/* */`-Kommentar-Syntax verwenden, können Kommentare nicht verschachtelt werden. Mit anderen Worten: Das erste Vorkommen von `*/`, das auf ein Vorkommen von `/*` folgt, schließt den Kommentar.

## Spezifikationen

- [CSS 2.1 Syntax und grundlegende Datentypen #comments](https://www.w3.org/TR/CSS21/syndata.html#comments)

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [Syntax](/de/docs/Web/CSS/Syntax) Leitfaden
- [Wertdefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Lernen: Behandlung von Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [Initial](/de/docs/Web/CSS/initial_value), [computed](/de/docs/Web/CSS/computed_value), [used](/de/docs/Web/CSS/used_value) und [actual](/de/docs/Web/CSS/actual_value) Werte
