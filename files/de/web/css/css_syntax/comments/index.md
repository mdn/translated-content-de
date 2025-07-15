---
title: Kommentare
slug: Web/CSS/CSS_syntax/Comments
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Ein CSS-**Kommentar** wird verwendet, um erklärende Anmerkungen zum Code hinzuzufügen oder um den Browser daran zu hindern, bestimmte Teile des Stylesheets zu interpretieren. Kommentare haben von Natur aus keinen Einfluss auf das Layout eines Dokuments.

## Syntax

Kommentare können überall dort platziert werden, wo Leerzeichen in einem Stylesheet erlaubt sind. Sie können in einer einzigen Zeile oder über mehrere Zeilen hinweg verwendet werden.

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

Die `/* */` Kommentarsyntax wird sowohl für einzeilige als auch mehrzeilige Kommentare verwendet. Es gibt keine andere Möglichkeit, Kommentare in externen Stylesheets festzulegen. Beim Verwenden des {{htmlelement("style")}} Elements können Sie jedoch `<!-- -->` verwenden, um CSS vor älteren Browsern zu verbergen, obwohl dies nicht empfohlen wird. Wie bei den meisten Programmiersprachen, die die `/* */` Kommentarsyntax verwenden, können Kommentare nicht verschachtelt werden. Mit anderen Worten wird der erste Fall von `*/`, der einem Fall von `/*` folgt, den Kommentar schließen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
