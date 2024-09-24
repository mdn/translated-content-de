---
title: Kommentare
slug: Web/HTML/Comments
l10n:
  sourceCommit: e4ec417e0f84b2fbd23fb37b236047fbdd215b68
---

{{CSSRef}}

Ein HTML-**Kommentar** wird verwendet, um erklärende Notizen zum Markup hinzuzufügen oder um den Browser daran zu hindern, spezifische Teile des Dokuments zu interpretieren.

Kommentare beginnen mit der Zeichenkette `<!--` und enden mit der Zeichenkette `-->`, wobei sich dazwischen im Allgemeinen Text befindet. Dieser Text darf nicht mit der Zeichenkette `>` oder `->` beginnen, die Zeichenfolgen `-->` oder `--!>` nicht enthalten und nicht mit der Zeichenkette `<!-` enden, obwohl `<!` erlaubt ist.

Der Browser ignoriert Kommentare, wenn er den Code rendert. Mit anderen Worten: Sie sind nicht auf der Seite sichtbar – nur im Code. HTML-Kommentare sind eine Möglichkeit für Sie, hilfreiche Notizen über Ihren Code oder die Logik zu schreiben.

Das oben Gesagte gilt auch für [XML](/de/docs/Web/XML)-Kommentare. Außerdem kann in XML, wie bei [SVG](/de/docs/Web/SVG)- oder [MathML](/de/docs/Web/MathML)-Markups, ein Kommentar nicht die Zeichenfolge `--` enthalten.

Kommentare können in einer einzigen Zeile verwendet werden oder sich über mehrere Zeilen erstrecken. Sie können an folgenden Stellen verwendet werden:

- Vor und nach dem {{Glossary("Doctype")}}
- Vor und nach dem {{HTMLElement("html")}}-Element
- Als Inhalt der meisten Elemente, außer: {{HTMLElement("script")}}, {{HTMLElement("style")}}, {{HTMLElement("title")}}, {{HTMLElement("textarea")}}, da diese Elemente ihren Inhalt als Rohtext interpretieren.

> [!NOTE]
> Obwohl `<script>`-Elemente keine HTML-Kommentare enthalten sollten und stattdessen [JavaScript-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) verwenden sollten, gab es eine frühere Praxis, den gesamten Skriptinhalt in einen HTML-Kommentar einzuschließen, damit es von alten Browsern, die JavaScript nicht unterstützen, nicht als Text gerendert wird. Dies ist jetzt eine [veraltete Funktion von JavaScript selbst](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#html_comments) und Sie sollten sich nicht darauf verlassen.

## Syntax

```html
<!-- Comment -->
```

## Beispiele

```html
<!-- Ein einzeiliger Kommentar -->

<!--
Ein Kommentar,
der sich über
mehrere Zeilen
erstreckt
-->

<!-- Der Kommentar unten deaktiviert
   den enthaltenen HTML-Inhalt -->
<!--
<p>
   Dieser Inhalt wird nicht gerendert.
</p>
-->
```

## Hinweise

HTML-Kommentare sind nur als Inhalt erlaubt. Sie können nicht innerhalb eines Tags verwendet werden, wie zum Beispiel vor einem HTML-[Attribut](/de/docs/Glossary/Attribute).

Wie bei den meisten Programmiersprachen, die die Syntax `<!-- -->` für Kommentare verwenden, können Kommentare nicht verschachtelt werden. Mit anderen Worten: Die erste Instanz von `-->`, die einer Instanz von `<!--` folgt, schließt den Kommentar.

Obwohl Kommentare mit einem `<` beginnen und mit einem `>` enden, ist ein Kommentar kein HTML-Element.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Kommentare in JavaScript](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments)
- [Kommentare in CSS](/de/docs/Web/CSS/Comments)
- {{domxref("Comment")}} API (`Comment` erbt von {{domxref("Node")}})
