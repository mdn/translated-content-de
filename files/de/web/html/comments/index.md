---
title: Kommentare
slug: Web/HTML/Comments
l10n:
  sourceCommit: e4ec417e0f84b2fbd23fb37b236047fbdd215b68
---

{{CSSRef}}

Ein HTML-**Kommentar** wird verwendet, um erklärende Notizen zum Markup hinzuzufügen oder zu verhindern, dass der Browser bestimmte Teile des Dokuments interpretiert.

Kommentare beginnen mit der Zeichenfolge `<!--` und enden mit der Zeichenfolge `-->`, wobei sich im Allgemeinen Text dazwischen befindet. Dieser Text darf nicht mit der Zeichenfolge `>` oder `->` beginnen, darf die Zeichenfolgen `-->` oder `--!>` nicht enthalten und auch nicht mit der Zeichenfolge `<!-` enden, obwohl `<!` erlaubt ist.

Der Browser ignoriert Kommentare beim Rendern des Codes. Mit anderen Worten, sie sind nicht auf der Seite sichtbar - nur im Code. HTML-Kommentare sind eine Möglichkeit, hilfreiche Notizen zu Ihrem Code oder Ihrer Logik zu schreiben.

Das Obige gilt auch für [XML](/de/docs/Web/XML)-Kommentare. Zusätzlich darf ein Kommentar in XML, wie z.B. in [SVG](/de/docs/Web/SVG)- oder [MathML](/de/docs/Web/MathML)-Markup, die Zeichenfolge `--` nicht enthalten.

Kommentare können in einer einzelnen Zeile oder über mehrere Zeilen hinweg verwendet werden. Sie können an den folgenden Stellen verwendet werden:

- Vor und nach dem [Doctype](/de/docs/Glossary/Doctype)
- Vor und nach dem {{HTMLElement("html")}}-Element
- Als Inhalt der meisten Elemente, außer: {{HTMLElement("script")}}, {{HTMLElement("style")}}, {{HTMLElement("title")}}, {{HTMLElement("textarea")}}, da diese Elemente ihren Inhalt als Rohtext interpretieren

> [!NOTE]
> Obwohl `<script>`-Elemente keine HTML-Kommentare haben sollten und stattdessen [JavaScript-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) verwenden sollten, gab es früher die Praxis, den gesamten Skriptinhalt in einen HTML-Kommentar einzuschließen, damit alte Browser, die JavaScript nicht unterstützen, es nicht als Text rendern. Dies ist jetzt eine [veraltete Funktion von JavaScript selbst](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#html_comments) und Sie sollten sich nicht darauf verlassen.

## Syntax

```html
<!-- Comment -->
```

## Beispiele

```html
<!-- A one-line comment -->

<!--
A comment
that stretches
over several
lines
-->

<!-- The comment below disables
   the HTML contained within -->
<!--
<p>
   This content will not be rendered.
</p>
-->
```

## Hinweise

HTML-Kommentare sind nur als Inhalt erlaubt. Sie können sie nicht innerhalb eines Tags verwenden, z.B. vor einem HTML-[Attribut](/de/docs/Glossary/Attribute).

Wie bei den meisten Programmiersprachen, die die `<!-- -->`-Kommentarsyntax verwenden, können Kommentare nicht verschachtelt werden. Mit anderen Worten, die erste Instanz von `-->`, die einer Instanz von `<!--` folgt, schließt den Kommentar.

Obwohl Kommentare mit einem `<` beginnen und mit einem `>` enden, ist ein Kommentar kein HTML-Element.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Kommentare in JavaScript](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments)
- [Kommentare in CSS](/de/docs/Web/CSS/Comments)
- [`Comment`](/de/docs/Web/API/Comment) API (`Comment` erbt von [`Node`](/de/docs/Web/API/Node))
