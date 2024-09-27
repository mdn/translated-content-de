---
title: Semantik
slug: Glossary/Semantics
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Im Programmieren bezieht sich **Semantik** auf die _Bedeutung_ eines Code-Schnipsels – zum Beispiel "welchen Effekt hat das Ausführen dieser Zeile JavaScript?" oder "welchen Zweck oder welche Rolle hat dieses HTML-Element?" (anstatt "wie sieht es aus?").

## Semantik in JavaScript

Betrachten Sie in JavaScript eine Funktion, die einen Zeichenfolgenparameter entgegennimmt und ein {{htmlelement("li")}}-Element mit dieser Zeichenfolge als `textContent` zurückgibt. Müssten Sie den Code ansehen, um zu verstehen, was die Funktion macht, wenn sie `build('Peach')` oder `createLiWithContent('Peach')` genannt wird?

## Semantik in CSS

Betrachten Sie in CSS das Styling einer Liste mit `li`-Elementen, die verschiedene Obstsorten repräsentieren. Würden Sie wissen, welcher Teil des DOM mit `div > ul > li` oder `.fruits__item` ausgewählt wird?

## Semantik in HTML

Im HTML ist zum Beispiel das {{htmlelement("Heading_Elements", "h1")}}-Element ein semantisches Element, das dem umschlossenen Text die Rolle (oder Bedeutung) "eine oberste Überschrift auf Ihrer Seite" gibt.

```html
<h1>This is a top level heading</h1>
```

Standardmäßig wird ein {{htmlelement("Heading_Elements", "h1")}} in den meisten [User-Agent-Stylesheets](/de/docs/Web/CSS/Cascade#user-agent_stylesheets) des Browsers mit einer großen Schriftgröße gestylt, um es wie eine Überschrift _aussehen_ zu lassen (obwohl Sie es so gestalten könnten, dass es aussieht, wie Sie möchten).

Andererseits könnten Sie jedes Element so gestalten, dass es wie eine oberste Überschrift _aussieht_. Betrachten Sie das folgende Beispiel:

```html
<span style="font-size: 32px; margin: 21px 0;">Not a top-level heading!</span>
```

Dies wird es so darstellen, dass es wie eine oberste Überschrift aussieht, aber es hat keinen semantischen Wert, daher erhält es keine zusätzlichen Vorteile, wie oben beschrieben. Es ist daher ratsam, das richtige HTML-Element für den richtigen Zweck zu verwenden.

HTML sollte so codiert werden, dass es die _Daten_ darstellt, die gefüllt werden, und nicht auf der Basis seines standardmäßigen Präsentationsstylings. Die Präsentation (wie es aussehen soll) ist die alleinige Verantwortung von [CSS](/de/docs/Web/CSS).

Einige der Vorteile des Schreibens von semantischem Markup sind wie folgt:

- Suchmaschinen betrachten den Inhalt als wichtige Schlüsselwörter, um das Suchranking der Seite zu beeinflussen (siehe [SEO](/de/docs/Glossary/SEO))
- Screenreader können es als Wegweiser nutzen, um sehbehinderten Nutzern das Navigieren auf einer Seite zu erleichtern
- Das Finden von sinnvollen Codeblöcken ist wesentlich einfacher als das Durchsuchen von endlosen `div`s mit oder ohne semantische oder benannte Klassen
- Es schlägt dem Entwickler den Typ der Daten vor, die gefüllt werden
- Semantische Benennung spiegelt die korrekte Benennung benutzerdefinierter Elemente/Komponenten wider

Wenn Sie darüber nachdenken, welches Markup zu verwenden ist, fragen Sie sich: "Welche(s) Element(e) beschreiben/stellen die Daten, die ich füllen werde, am besten dar?" Zum Beispiel, ist es eine Liste von Daten?; geordnet, ungeordnet?; ist es ein Artikel mit Abschnitten und einer Seite mit verbundenen Informationen?; werden Definitionen aufgelistet?; ist es eine Abbildung oder ein Bild, das eine Bildunterschrift benötigt?; sollte es zusätzlich zum globalen seitenweiten Header und Footer einen Header und einen Footer haben?; etc.

## Semantische Elemente

Dies sind _einige_ der ungefähr 100 semantischen [Elemente](/de/docs/Web/HTML/Element), die verfügbar sind:

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

- [HTML-Element-Referenz](/de/docs/Web/HTML/Element#inline_text_semantics) auf MDN
- [Verwendung von HTML-Bereichen und Umrissen](/de/docs/Web/HTML/Element/Heading_Elements#usage_notes) auf MDN
- [Die Bedeutung von Semantik in der Informatik](https://en.wikipedia.org/wiki/Semantics#Computer_science) auf Wikipedia
- Verwandte Glossarbegriffe:
  - [SEO](/de/docs/Glossary/SEO)
