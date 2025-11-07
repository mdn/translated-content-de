---
title: Kommentare
slug: Web/CSS/Guides/Syntax/Comments
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein CSS-**Kommentar** wird verwendet, um erklärende Anmerkungen im Code hinzuzufügen oder um zu verhindern, dass der Browser bestimmte Teile des Stylesheets interpretiert. Kommentare haben von Natur aus keinen Einfluss auf das Layout eines Dokuments.

## Syntax

Kommentare können überall dort platziert werden, wo Leerzeichen innerhalb eines Stylesheets zulässig sind. Sie können einzeilig oder über mehrere Zeilen verlaufen.

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

## Anmerkungen

Die `/* */` Kommentar-Syntax wird sowohl für einzeilige als auch mehrzeilige Kommentare verwendet. Es gibt keine andere Möglichkeit, Kommentare in externen Stylesheets festzulegen. Wenn Sie jedoch das {{htmlelement("style")}}-Element verwenden, können Sie `<!-- -->` verwenden, um CSS vor älteren Browsern zu verstecken, obwohl dies nicht empfohlen wird. Wie bei den meisten Programmiersprachen, die die `/* */` Kommentar-Syntax verwenden, können Kommentare nicht geschachtelt werden. Mit anderen Worten: Die erste Instanz von `*/`, die auf eine Instanz von `/*` folgt, schließt den Kommentar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
- [Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction) Leitfaden
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
