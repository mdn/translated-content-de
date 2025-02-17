---
title: Semantik
slug: Glossary/Semantics
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{GlossarySidebar}}

Im Programmieren bezieht sich **Semantik** auf die _Bedeutung_ eines Codes – zum Beispiel: "Welche Wirkung hat das Ausführen dieser JavaScript-Zeile?" oder "Welchen Zweck oder welche Rolle hat dieses HTML-Element?" (anstatt: "Wie sieht es aus?").

## Semantik in JavaScript

In JavaScript, betrachten Sie eine Funktion, die einen String-Parameter annimmt und ein {{htmlelement("li")}}-Element zurückgibt, das diesen String als `textContent` hat. Müssten Sie den Code ansehen, um zu verstehen, was die Funktion macht, wenn sie `build('Peach')` oder `createLiWithContent('Peach')` genannt wird?

## Semantik in CSS

In CSS betrachten Sie das Styling einer Liste mit `li`-Elementen, die verschiedene Fruchttypen repräsentieren. Würden Sie wissen, welcher Teil des DOM mit `div > ul > li` oder `.fruits__item` ausgewählt wird?

## Semantik in HTML

In HTML, zum Beispiel ist das {{htmlelement("Heading_Elements", "h1")}}-Element ein semantisches Element, das dem Text, den es umschließt, die Rolle (oder Bedeutung) einer "Überschrift oberster Ebene auf Ihrer Seite" verleiht.

```html
<h1>This is a top level heading</h1>
```

Standardmäßig wird der [User-Agent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets) der meisten Browser ein {{htmlelement("Heading_Elements", "h1")}} mit einer großen Schriftgröße stylen, damit es _wie_ eine Überschrift aussieht (obwohl Sie es so stylen könnten, dass es so aussieht, wie Sie es möchten).

Andererseits könnten Sie jedes beliebige Element _wie_ eine Überschrift oberster Ebene aussehen lassen. Betrachten Sie folgendes Beispiel:

```html
<span style="font-size: 32px; margin: 21px 0;">Not a top-level heading!</span>
```

Dies wird es so rendern, dass es wie eine Überschrift oberster Ebene aussieht, aber es hat keinen semantischen Wert, weshalb es keine zusätzlichen Vorteile hat, wie oben beschrieben. Es ist daher eine gute Idee, das richtige HTML-Element für die jeweilige Aufgabe zu verwenden.

HTML sollte so geschrieben werden, dass es die _Daten_ repräsentiert, die eingefügt werden, und nicht auf der Grundlage seiner standardmäßigen Darstellung gestaltet wird. Die Präsentation (wie es aussehen sollte) ist ausschließlich die Verantwortung von [CSS](/de/docs/Web/CSS).

Einige Vorteile, semantisches Markup zu schreiben, sind:

- Suchmaschinen betrachten den Inhalt als wichtige Schlüsselwörter, um das Ranking der Seite in Suchergebnissen zu beeinflussen (siehe {{Glossary("SEO", "SEO")}}).
- Screenreader können dies als Orientierungshilfe nutzen, um sehbehinderten Nutzern die Navigation auf einer Seite zu erleichtern.
- Bedeutungsvolle Codeblöcke zu finden, ist erheblich einfacher, als durch endlose `div`s mit oder ohne semantische oder namensraumbezogene Klassen zu suchen.
- Es schlägt den Entwicklern den Typ der Daten vor, die eingefügt werden.
- Semantische Benennung spiegelt die richtige Benennung von benutzerdefinierten Elementen/Komponenten wider.

Wenn Sie entscheiden, welches Markup Sie verwenden, fragen Sie sich: "Welche(s) Element(e) beschreibt(n)/repräsentiert(am besten die Daten, die ich einfügen werde?" Zum Beispiel: Handelt es sich um eine Liste von Daten?; geordnet, ungeordnet?; ist es ein Artikel mit Abschnitten und einem nebenstehenden Bereich mit verwandten Informationen?; listet es Definitionen auf?; ist es eine Abbildung oder ein Bild, das eine Beschriftung benötigt?; sollte es einen Kopf- und einen Fußbereich zusätzlich zum globalen Seitenseitenkopf und -fuß haben?; etc.

## Semantische Elemente

Hier sind _einige_ der ungefähr 100 semantischen [Elemente](/de/docs/Web/HTML/Element), die verfügbar sind:

- {{htmlelement("article")}}
- {{htmlelement("aside")}}
- {{htmlelement("details")}}
- {{htmlelement("figcaption")}}
- {{htmlelement("figure")}}
- {{htmlelement("footer")}}
- {{htmlelement("form")}}
- {{htmlelement("header")}}
- {{htmlelement("main")}}
- {{htmlelement("mark")}}
- {{htmlelement("nav")}}
- {{htmlelement("section")}}
- {{htmlelement("summary")}}
- {{htmlelement("time")}}

## Siehe auch

- [HTML-Elementreferenz](/de/docs/Web/HTML/Element#inline_text_semantics) auf MDN
- [Verwendung von HTML-Abschnitten und Umrissen](/de/docs/Web/HTML/Element/Heading_Elements#usage_notes) auf MDN
- [Die Bedeutung von Semantik in der Informatik](https://en.wikipedia.org/wiki/Semantics#Computer_science) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("SEO", "SEO")}}
