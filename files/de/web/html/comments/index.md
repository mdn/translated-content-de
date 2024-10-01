---
title: Kommentare
slug: Web/HTML/Comments
l10n:
  sourceCommit: e4ec417e0f84b2fbd23fb37b236047fbdd215b68
---

{{CSSRef}}

Ein HTML-**Kommentar** wird verwendet, um erläuternde Anmerkungen zum Markup hinzuzufügen oder um zu verhindern, dass der Browser bestimmte Teile des Dokuments interpretiert.

Kommentare beginnen mit der Zeichenfolge `<!--` und enden mit der Zeichenfolge `-->`, in der Regel mit Text dazwischen. Dieser Text darf nicht mit der Zeichenfolge `>` oder `->` beginnen, darf nicht die Zeichenfolgen `-->` oder `--!>` enthalten und nicht mit der Zeichenfolge `<!-` enden, wobei `<!` erlaubt ist.

Der Browser ignoriert Kommentare beim Rendern des Codes. Mit anderen Worten, sie sind auf der Seite nicht sichtbar - nur im Code. HTML-Kommentare sind eine Möglichkeit, hilfreiche Anmerkungen zu Ihrem Code oder Ihrer Logik zu schreiben.

Das oben Gesagte gilt auch für [XML](/de/docs/Web/XML)-Kommentare. Darüber hinaus darf in XML, wie in [SVG](/de/docs/Web/SVG)- oder [MathML](/de/docs/Web/MathML)-Markup, ein Kommentar nicht die Zeichenfolge `--` enthalten.

Kommentare können in einer einzelnen Zeile oder über mehrere Zeilen verwendet werden. Sie können an den folgenden Stellen eingesetzt werden:

- Vor und nach dem {{Glossary("Doctype", "Doctype")}}
- Vor und nach dem {{HTMLElement("html")}}-Element
- Als Inhalt der meisten Elemente, ausgenommen: {{HTMLElement("script")}}, {{HTMLElement("style")}}, {{HTMLElement("title")}}, {{HTMLElement("textarea")}}, da diese Elemente ihren Inhalt als Rohtext interpretieren.

> [!NOTE]
> Während `<script>`-Elemente keine HTML-Kommentare haben sollten und stattdessen [JavaScript-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) nutzen sollten, gab es früher die Praxis, den gesamten Skriptinhalt in einen HTML-Kommentar einzuschließen, damit alte Browser, die JavaScript nicht unterstützen, ihn nicht als Text rendern. Dies ist jetzt ein [veraltetes Merkmal von JavaScript selbst](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#html_comments) und sollte nicht mehr verwendet werden.

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

HTML-Kommentare sind nur als Inhalt zulässig. Sie können nicht innerhalb eines Tags verwendet werden, wie zum Beispiel vor einem HTML-{{Glossary("Attribute", "Attribut")}}.

Wie bei den meisten Programmiersprachen, die die `<!-- -->` Kommentarsyntax verwenden, können Kommentare nicht verschachtelt werden. Mit anderen Worten: Die erste Instanz von `-->`, die einer Instanz von `<!--` folgt, schließt den Kommentar.

Obwohl Kommentare mit einem `<` beginnen und in einem `>` enden, sind Kommentare keine HTML-Elemente.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Kommentare in JavaScript](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments)
- [Kommentare in CSS](/de/docs/Web/CSS/Comments)
- [`Comment`](/de/docs/Web/API/Comment)-API (`Comment` erbt von [`Node`](/de/docs/Web/API/Node))
