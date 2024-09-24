---
title: Kommentare
slug: Web/CSS/Comments
l10n:
  sourceCommit: ce07a52c8ffd27f402b0490aca5626caa623923f
---

{{CSSRef}}

Ein CSS-**Kommentar** wird verwendet, um erläuternde Notizen zum Code hinzuzufügen oder um zu verhindern, dass der Browser bestimmte Teile des Stylesheets interpretiert. Kommentare haben absichtlich keinerlei Einfluss auf das Layout eines Dokuments.

## Syntax

Kommentare können überall dort platziert werden, wo im Stylesheet Leerzeichen zulässig sind. Sie können in einer einzigen Zeile verwendet werden oder sich über mehrere Zeilen erstrecken.

```css
/* Kommentar */
```

## Beispiele

```css
/* Ein einzeiliger Kommentar */

/*
Ein Kommentar
der sich über
mehrere Zeilen
erstreckt
*/

/* Der folgende Kommentar wird verwendet, um
   spezifisches Styling zu deaktivieren */
/*
span {
  color: blue;
  font-size: 1.5em;
}
*/
```

## Anmerkungen

Das `/* */` Kommentarsyntax wird für sowohl einzeilige als auch mehrzeilige Kommentare verwendet. Es gibt keine andere Möglichkeit, Kommentare in externen Stylesheets zu spezifizieren. Wenn jedoch das {{htmlelement("style")}}-Element verwendet wird, können Sie `<!-- -->` verwenden, um CSS vor älteren Browsern zu verstecken, obwohl dies nicht empfohlen wird. Wie in den meisten Programmiersprachen, die die `/* */`-Kommentarsyntax verwenden, können Kommentare nicht verschachtelt werden. Mit anderen Worten, das erste Auftreten von `*/` nach einem Auftreten von `/*` schließt den Kommentar.

## Spezifikationen

- [CSS 2.1 Syntax und grundlegende Datentypen #comments](https://www.w3.org/TR/CSS21/syndata.html#comments)

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [Syntax](/de/docs/Web/CSS/Syntax) Leitfaden
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Bausteine: die CSS-Kaskade](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Bausteine: Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [Initiale](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [verwendete](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
