---
title: HTML-Kommentare (<!-- … -->)
short-title: Comments
slug: Web/HTML/Comments
l10n:
  sourceCommit: 756a397ef3625623a74e31bd5f69e8b06a11f0d0
---

{{HTMLSidebar}}

Ein HTML-**Kommentar** wird verwendet, um erklärende Notizen zum Markup hinzuzufügen oder um den Browser daran zu hindern, bestimmte Teile des Dokuments zu interpretieren.

Kommentare beginnen mit der Zeichenkette `<!--` und enden mit der Zeichenkette `-->`, generell mit Text dazwischen. Dieser Text kann nicht mit der Zeichenkette `>` oder `->` beginnen, kann die Zeichenfolgen `-->` oder `--!>` nicht enthalten, und nicht mit der Zeichenkette `<!-` enden, obwohl `<!` erlaubt ist.

Der Browser ignoriert Kommentare, während er den Code rendert. Mit anderen Worten, sie sind nicht auf der Seite sichtbar - nur im Code. HTML-Kommentare sind eine Möglichkeit, um hilfreiche Notizen zu Ihrem Code oder Ihrer Logik zu schreiben.

Das oben Gesagte gilt auch für [XML](/de/docs/Web/XML)-Kommentare. Zusätzlich darf in XML, wie in [SVG](/de/docs/Web/SVG) oder [MathML](/de/docs/Web/MathML)-Markup, ein Kommentar nicht die Zeichenfolge `--` enthalten.

Kommentare können in einer einzelnen Zeile verwendet werden oder sich über mehrere Zeilen erstrecken. Sie können an den folgenden Stellen verwendet werden:

- Vor und nach dem {{Glossary("Doctype", "Doctype")}}
- Vor und nach dem {{HTMLElement("html")}}-Element
- Als Inhalt der meisten Elemente außer: {{HTMLElement("script")}}, {{HTMLElement("style")}}, {{HTMLElement("title")}}, {{HTMLElement("textarea")}}, da diese Elemente ihren Inhalt als rohen Text interpretieren

> [!NOTE]
> Während `<script>`-Elemente keine HTML-Kommentare haben sollten und [JavaScript-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) verwenden sollten, gab es eine ältere Praxis, den gesamten Skriptinhalt in einen HTML-Kommentar zu setzen, damit alte Browser, die JavaScript nicht unterstützen, ihn nicht als Text rendern. Dies ist jetzt ein [veraltetes Merkmal von JavaScript selbst](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#html_comments) und Sie sollten sich nicht darauf verlassen.

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

## Anmerkungen

HTML-Kommentare sind nur als Inhalt erlaubt. Sie können nicht innerhalb eines Tags verwendet werden, z. B. vor einem HTML-{{Glossary("Attribute", "Attribut")}}.

Wie bei den meisten Programmiersprachen, die das `<!-- -->` Kommentar-Syntax verwenden, können Kommentare nicht verschachtelt werden. Mit anderen Worten, die erste Instanz von `-->`, die einer Instanz von `<!--` folgt, schließt den Kommentar.

Obwohl Kommentare mit einem `<` beginnen und mit einem `>` enden, sind sie kein HTML-Element.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Kommentare in JavaScript](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments)
- [Kommentare in CSS](/de/docs/Web/CSS/Comments)
- [`Comment`](/de/docs/Web/API/Comment) API (`Comment` erbt von [`Node`](/de/docs/Web/API/Node))
