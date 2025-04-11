---
title: Verwendung von HTML-Kommentaren <!-- … -->
short-title: Comments
slug: Web/HTML/Guides/Comments
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Ein HTML-**Kommentar** wird verwendet, um erläuternde Notizen zum Markup hinzuzufügen oder um zu verhindern, dass der Browser bestimmte Teile des Dokuments interpretiert.

Kommentare beginnen mit der Zeichenfolge `<!--` und enden mit der Zeichenfolge `-->`, im Allgemeinen mit Text dazwischen. Dieser Text darf nicht mit der Zeichenfolge `>` oder `->` beginnen, darf die Zeichenfolgen `-->` oder `--!>` nicht enthalten und nicht mit der Zeichenfolge `<!-` enden, obwohl `<!` erlaubt ist.

Der Browser ignoriert Kommentare beim Rendern des Codes. Mit anderen Worten, sie sind auf der Seite nicht sichtbar - nur im Code. HTML-Kommentare sind eine Möglichkeit, hilfreiche Notizen zu Ihrem Code oder Ihrer Logik zu schreiben.

Das oben Gesagte gilt auch für [XML](/de/docs/Web/XML)-Kommentare. Zusätzlich dürfen in XML, wie z. B. in [SVG](/de/docs/Web/SVG)- oder [MathML](/de/docs/Web/MathML)-Markup, keine Kommentarzeichenfolgen `--` enthalten sein.

Kommentare können auf einer einzigen Zeile verwendet werden oder sich über mehrere Zeilen erstrecken. Sie können in den folgenden Bereichen verwendet werden:

- Vor und nach dem {{Glossary("Doctype", "Doctype")}}
- Vor und nach dem {{HTMLElement("html")}} Element
- Als Inhalt der meisten Elemente außer: {{HTMLElement("script")}}, {{HTMLElement("style")}}, {{HTMLElement("title")}}, {{HTMLElement("textarea")}}, da diese Elemente ihren Inhalt als Rohtext interpretieren

> [!NOTE]
> Während `<script>`-Elemente keine HTML-Kommentare haben sollten und stattdessen [JavaScript-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) verwenden sollten, gab es die alte Praxis, den gesamten Skriptinhalt in einen HTML-Kommentar zu hüllen, damit alte Browser, die kein JavaScript unterstützen, es nicht als Text rendern. Dies ist jetzt ein [veraltetes Feature von JavaScript selbst](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#html_comments) und Sie sollten sich nicht darauf verlassen.

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

Wie bei den meisten Programmiersprachen, die die Kommentarsyntax `<!-- -->` verwenden, können Kommentare nicht verschachtelt werden. Mit anderen Worten: Die erste Instanz von `-->`, die auf eine Instanz von `<!--` folgt, schließt den Kommentar.

Obwohl Kommentare mit einem `<` beginnen und mit einem `>` enden, ist ein Kommentar kein HTML-Element.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Kommentare in JavaScript](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments)
- [Kommentare in CSS](/de/docs/Web/CSS/CSS_syntax/Comments)
- [`Comment`](/de/docs/Web/API/Comment)-API (`Comment` erbt von [`Node`](/de/docs/Web/API/Node))
