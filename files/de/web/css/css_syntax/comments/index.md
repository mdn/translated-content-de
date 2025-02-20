---
title: Kommentare
slug: Web/CSS/CSS_syntax/Comments
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Ein CSS-**Kommentar** wird verwendet, um erklärende Notizen im Code hinzuzufügen oder den Browser daran zu hindern, bestimmte Teile des Stylesheets zu interpretieren. Kommentare haben absichtlich keinen Einfluss auf das Layout eines Dokuments.

## Syntax

Kommentare können überall dort platziert werden, wo Leerzeichen innerhalb eines Stylesheets zulässig sind. Sie können sich auf einer einzelnen Zeile befinden oder sich über mehrere Zeilen erstrecken.

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

Die `/* */`-Kommentarsyntax wird sowohl für einzeilige als auch mehrzeilige Kommentare verwendet. Es gibt keine andere Möglichkeit, Kommentare in externen Stylesheets anzugeben. Wenn jedoch das {{htmlelement("style")}}-Element verwendet wird, können Sie `<!-- -->` nutzen, um CSS vor älteren Browsern zu verbergen, auch wenn dies nicht empfohlen wird. Wie in den meisten Programmiersprachen, die die `/* */`-Kommentarsyntax verwenden, können Kommentare nicht verschachtelt werden. Das bedeutet, dass die erste Instanz von `*/`, die auf eine Instanz von `/*` folgt, den Kommentar schließt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
- [Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)-Leitfaden
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
