---
title: Semantik
slug: Glossary/Semantics
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

In der Programmierung bezieht sich **Semantik** auf die _Bedeutung_ eines Codeschnipsels — zum Beispiel „welchen Effekt hat das Ausführen dieser JavaScript-Zeile?“, oder „welchen Zweck oder welche Rolle hat dieses HTML-Element?“ (anstatt „wie sieht es aus?“).

## Semantik in JavaScript

In JavaScript betrachten Sie eine Funktion, die einen String-Parameter übernimmt und ein {{htmlelement("li")}}-Element mit diesem String als `textContent` zurückgibt. Müssten Sie sich den Code ansehen, um zu verstehen, was die Funktion tut, wenn sie `build('Peach')` oder `createLiWithContent('Peach')` genannt wird?

## Semantik in CSS

In CSS, betrachten Sie das Styling einer Liste mit `li`-Elementen, die verschiedene Obstsorten repräsentieren. Würden Sie wissen, welcher Teil des DOM ausgewählt wird mit `div > ul > li`, oder `.fruits__item`?

## Semantik in HTML

In HTML ist zum Beispiel das {{htmlelement("Heading_Elements", "h1")}}-Element ein semantisches Element, das dem Text, den es umschließt, die Rolle (oder Bedeutung) von „einer Überschrift der obersten Ebene auf Ihrer Seite“ gibt.

```html
<h1>This is a top level heading</h1>
```

Standardmäßig wird ein {{htmlelement("Heading_Elements", "h1")}} von den meisten [User-Agent-Stylesheets](/de/docs/Web/CSS/Cascade#user-agent_stylesheets) mit einer großen Schriftgröße gestylt, damit es _wie_ eine Überschrift aussieht (obwohl Sie es so gestalten könnten, dass es wie alles andere aussieht).

Auf der anderen Seite können Sie jedes Element so gestalten, dass es _wie_ eine Überschrift der obersten Ebene aussieht. Betrachten Sie Folgendes:

```html
<span style="font-size: 32px; margin: 21px 0;">Not a top-level heading!</span>
```

Dies wird es so rendern, dass es wie eine Überschrift der obersten Ebene aussieht, aber es hat keinen semantischen Wert, sodass es nicht die oben beschriebenen zusätzlichen Vorteile erhält. Daher ist es eine gute Idee, das richtige HTML-Element für die richtige Aufgabe zu verwenden.

HTML sollte so kodiert werden, dass es die _Daten_ repräsentiert, die eingefügt werden sollen, und nicht basierend auf seiner standardmäßigen Präsentationsgestaltung. Die Präsentation (wie es aussehen soll) ist alleinige Verantwortung von [CSS](/de/docs/Web/CSS).

Einige der Vorteile, semantisches Markup zu schreiben, sind folgende:

- Suchmaschinen werden dessen Inhalte als wichtige Schlüsselwörter betrachten, um das Suchranking der Seite zu beeinflussen (siehe {{Glossary("SEO", "SEO")}})
- Screenreader können es als Wegweiser nutzen, um sehbehinderten Nutzern bei der Navigation auf einer Seite zu helfen
- Das Finden von bedeutungsvollen Codeblöcken ist erheblich einfacher, als durch endlose `div`s mit oder ohne semantische oder namenspäfixierte Klassen zu suchen
- Es gibt dem Entwickler einen Hinweis auf die Art der einzufügenden Daten
- Semantisches Benennen spiegelt das richtige Benennen von benutzerdefinierten Elementen/Komponenten wider

Wenn Sie darüber nachdenken, welches Markup verwendet werden soll, fragen Sie sich: „Welches Element/welche Elemente beschreiben/repräsentieren die Daten, die ich einfügen möchte, am besten?“ Zum Beispiel, ist es eine Liste von Daten?; geordnet, ungeordnet?; ist es ein Artikel mit Abschnitten und einem beiseite stehenden Bereich mit verwandten Informationen?; listet es Definitionen auf?; ist es eine Figur oder ein Bild, das eine Bildunterschrift benötigt?; sollte es einen Kopf- und Fußbereich zusätzlich zum globalen seitenübergreifenden Kopf- und Fußbereich haben?; etc.

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
- [Verwendung von HTML-Abschnitten und -Umrissen](/de/docs/Web/HTML/Element/Heading_Elements#usage_notes) auf MDN
- [Die Bedeutung von Semantik in der Informatik](https://en.wikipedia.org/wiki/Semantics#Computer_science) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("SEO", "SEO")}}
