---
title: Verwendung von HTML-Kommentaren <!-- … -->
short-title: Comments
slug: Web/HTML/Guides/Comments
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Ein HTML-**Kommentar** wird verwendet, um erklärende Notizen im Markup hinzuzufügen oder um den Browser daran zu hindern, bestimmte Teile des Dokuments zu interpretieren.

Kommentare beginnen mit dem String `<!--` und enden mit dem String `-->`, normalerweise mit Text dazwischen. Dieser Text darf nicht mit dem String `>` oder `->` beginnen, die Strings `-->` oder `--!>` enthalten, noch mit dem String `<!-` enden, obwohl `<!` erlaubt ist.

Der Browser ignoriert Kommentare, während er den Code rendert. Mit anderen Worten, sie sind auf der Seite nicht sichtbar - nur im Code. HTML-Kommentare sind eine Möglichkeit, hilfreiche Notizen über Ihren Code oder Ihre Logik zu schreiben.

Das obige gilt auch für [XML](/de/docs/Web/XML)-Kommentare. Zusätzlich darf in XML, wie in [SVG](/de/docs/Web/SVG) oder [MathML](/de/docs/Web/MathML)-Markup, ein Kommentar nicht die Zeichenfolge `--` enthalten.

Kommentare können in einer einzigen Zeile oder über mehrere Zeilen erstreckt verwendet werden. Sie können an folgenden Stellen eingesetzt werden:

- Vor und nach dem {{Glossary("Doctype", "Doctype")}}
- Vor und nach dem {{HTMLElement("html")}}-Element
- Als Inhalt der meisten Elemente, mit Ausnahme von: {{HTMLElement("script")}}, {{HTMLElement("style")}}, {{HTMLElement("title")}}, {{HTMLElement("textarea")}}, da diese Elemente ihren Inhalt als Rohtext interpretieren

> [!NOTE]
> Obwohl `<script>`-Elemente keine HTML-Kommentare haben sollten und stattdessen [JavaScript-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) verwenden sollten, gab es früher die Praxis, den gesamten Skriptinhalt in einem HTML-Kommentar einzuschließen, damit alte Browser, die JavaScript nicht unterstützen, ihn nicht als Text rendern. Dies ist jetzt ein [veraltetes Merkmal von JavaScript selbst](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#html_comments) und Sie sollten sich nicht darauf verlassen.

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

HTML-Kommentare sind nur als Inhalt erlaubt. Sie können nicht innerhalb eines Tags verwendet werden, wie zum Beispiel vor einem HTML-{{Glossary("Attribute", "Attribut")}}.

Wie bei den meisten Programmiersprachen, die die `<!-- -->` Kommentarsyntax verwenden, können Kommentare nicht geschachtelt werden. Mit anderen Worten, die erste Instanz von `-->`, die einer Instanz von `<!--` folgt, schließt den Kommentar.

Obwohl Kommentare mit einem `<` beginnen und mit einem `>` enden, ist ein Kommentar kein HTML-Element.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Kommentare in JavaScript](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments)
- [Kommentare in CSS](/de/docs/Web/CSS/CSS_syntax/Comments)
- [`Comment`](/de/docs/Web/API/Comment) API (`Comment` erbt von [`Node`](/de/docs/Web/API/Node))
