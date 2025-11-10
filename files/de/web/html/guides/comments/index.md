---
title: Verwendung von HTML-Kommentaren <!-- … -->
short-title: Comments
slug: Web/HTML/Guides/Comments
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein HTML-**Kommentar** wird verwendet, um erklärende Anmerkungen zum Markup hinzuzufügen oder um zu verhindern, dass der Browser bestimmte Teile des Dokuments interpretiert.

Kommentare beginnen mit der Zeichenfolge `<!--` und enden mit der Zeichenfolge `-->`, wobei sich im Allgemeinen Text dazwischen befindet. Dieser Text darf nicht mit der Zeichenfolge `>` oder `->` beginnen, darf die Zeichenfolgen `-->` oder `--!>` nicht enthalten, noch mit der Zeichenfolge `<!-` enden, obwohl `<!` erlaubt ist.

Der Browser ignoriert Kommentare beim Rendern des Codes. Mit anderen Worten, sie sind nicht auf der Seite sichtbar - nur im Code. HTML-Kommentare sind eine Möglichkeit, hilfreiche Anmerkungen zu Ihrem Code oder Ihrer Logik zu schreiben.

Das Obige gilt auch für [XML](/de/docs/Web/XML)-Kommentare. In XML, wie in [SVG](/de/docs/Web/SVG) oder [MathML](/de/docs/Web/MathML)-Markup, darf ein Kommentar zusätzlich nicht die Zeichenfolge `--` enthalten.

Kommentare können in einer einzigen Zeile verwendet werden oder sich über mehrere Zeilen erstrecken. Sie können an den folgenden Stellen verwendet werden:

- Vor und nach dem {{Glossary("Doctype", "Doctype")}}
- Vor und nach dem {{HTMLElement("html")}}-Element
- Als Inhalt der meisten Elemente, außer: {{HTMLElement("script")}}, {{HTMLElement("style")}}, {{HTMLElement("title")}}, {{HTMLElement("textarea")}}, da diese Elemente ihren Inhalt als Rohtext interpretieren.

> [!NOTE]
> Während `<script>`-Elemente keine HTML-Kommentare haben sollten und stattdessen [JavaScript-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) verwenden sollten, gab es eine frühere Praxis, den gesamten Skriptinhalt in einen HTML-Kommentar einzuschließen, damit alte Browser, die JavaScript nicht unterstützen, ihn nicht als Text rendern. Dies ist jetzt ein [veraltetes Merkmal von JavaScript selbst](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#html_comments), und Sie sollten sich nicht darauf verlassen.

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

HTML-Kommentare sind nur als Inhalt zugelassen. Sie können sie nicht innerhalb eines Tags verwenden, wie z.B. vor einem HTML-{{Glossary("Attribute", "Attribut")}}.

Wie bei den meisten Programmiersprachen, die die `<!-- -->` Kommentar-Syntax verwenden, können Kommentare nicht geschachtelt werden. Mit anderen Worten, die erste Instanz von `-->`, die einer Instanz von `<!--` folgt, schließt den Kommentar.

Obwohl Kommentare mit einem `<` beginnen und in einem `>` enden, handelt es sich bei einem Kommentar nicht um ein HTML-Element.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Kommentare in JavaScript](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments)
- [Kommentare in CSS](/de/docs/Web/CSS/Guides/Syntax/Comments)
- [`Comment`](/de/docs/Web/API/Comment)-API (`Comment` erbt von [`Node`](/de/docs/Web/API/Node))
