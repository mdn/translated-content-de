---
title: Kommentare
slug: Web/CSS/CSS_syntax/Comments
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{CSSRef}}

Ein CSS **Kommentar** wird verwendet, um erklärende Notizen zum Code hinzuzufügen oder um zu verhindern, dass der Browser bestimmte Teile des Stylesheets interpretiert. Kommentare haben von Haus aus keine Auswirkung auf das Layout eines Dokuments.

## Syntax

Kommentare können überall dort platziert werden, wo Leerzeichen in einem Stylesheet erlaubt sind. Sie können einzeilig oder über mehrere Zeilen hinweg verwendet werden.

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

Die `/* */` Kommentarsyntax wird sowohl für einzeilige als auch mehrzeilige Kommentare verwendet. Es gibt keine andere Möglichkeit, Kommentare in externen Stylesheets zu spezifizieren. Wenn jedoch das {{htmlelement("style")}} Element verwendet wird, können Sie `<!-- -->` nutzen, um CSS vor älteren Browsern zu verstecken, obwohl dies nicht empfohlen wird. Wie bei den meisten Programmiersprachen, die die `/* */` Kommentarsyntax nutzen, können Kommentare nicht verschachtelt werden. Mit anderen Worten, das erste Vorkommen von `*/`, das auf ein `/*` folgt, schließt den Kommentar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
