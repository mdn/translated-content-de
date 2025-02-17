---
title: HTML-Kommentare (<!-- … -->)
short-title: Comments
slug: Web/HTML/Comments
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{HTMLSidebar}}

Ein HTML-**Kommentar** wird verwendet, um erklärende Notizen in das Markup einzufügen oder um zu verhindern, dass der Browser bestimmte Teile des Dokuments interpretiert.

Kommentare beginnen mit der Zeichenfolge `<!--` und enden mit der Zeichenfolge `-->`, normalerweise mit Text dazwischen. Dieser Text darf nicht mit der Zeichenfolge `>` oder `->` beginnen, die Zeichenfolgen `-->` oder `--!>` enthalten, oder mit der Zeichenfolge `<!-` enden, obwohl `<!` erlaubt ist.

Der Browser ignoriert Kommentare während des Renderns des Codes. Anders ausgedrückt, sie sind nicht auf der Seite sichtbar - nur im Code. HTML-Kommentare sind eine Möglichkeit, hilfreiche Notizen zu Ihrem Code oder Ihrer Logik zu schreiben.

Das oben Gesagte gilt auch für [XML](/de/docs/Web/XML)-Kommentare. Zusätzlich gilt in XML, wie beispielsweise in [SVG](/de/docs/Web/SVG)- oder [MathML](/de/docs/Web/MathML)-Markup, dass ein Kommentar nicht die Zeichenfolge `--` enthalten darf.

Kommentare können eine einzelne Zeile umfassen oder über mehrere Zeilen hinweg verwendet werden. Sie können an den folgenden Stellen eingesetzt werden:

- Vor und nach dem {{Glossary("Doctype", "Doctype")}}
- Vor und nach dem {{HTMLElement("html")}}-Element
- Als Inhalt der meisten Elemente, außer: {{HTMLElement("script")}}, {{HTMLElement("style")}}, {{HTMLElement("title")}}, {{HTMLElement("textarea")}}, da diese Elemente ihren Inhalt als Rohtext interpretieren

> [!NOTE]
> Während `<script>`-Elemente keine HTML-Kommentare enthalten sollten und stattdessen [JavaScript-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) verwenden sollten, gab es eine ältere Praxis, den gesamten Skriptinhalt in einem HTML-Kommentar einzuschließen, damit alte Browser, die kein JavaScript unterstützen, diesen nicht als Text rendern. Dies ist heute ein [veraltetes Feature von JavaScript selbst](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#html_comments), und Sie sollten sich nicht darauf verlassen.

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

HTML-Kommentare sind nur als Inhalt zulässig. Sie können nicht innerhalb eines Tags verwendet werden, z. B. vor einem HTML-{{Glossary("Attribute", "Attribut")}}.

Wie bei den meisten Programmiersprachen, die die Kommentarsyntax `<!-- -->` verwenden, können Kommentare nicht verschachtelt werden. Anders ausgedrückt: Die erste Instanz von `-->`, die nach einer Instanz von `<!--` folgt, schließt den Kommentar.

Obwohl Kommentare mit einem `<` beginnen und mit einem `>` enden, ist ein Kommentar kein HTML-Element.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Kommentare in JavaScript](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments)
- [Kommentare in CSS](/de/docs/Web/CSS/CSS_syntax/Comments)
- [`Comment`](/de/docs/Web/API/Comment)-API (`Comment` erbt von [`Node`](/de/docs/Web/API/Node))
