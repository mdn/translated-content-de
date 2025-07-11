---
title: Semantik
slug: Glossary/Semantics
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In der Programmierung bezieht sich **Semantik** auf die _Bedeutung_ eines Codes – zum Beispiel "welche Wirkung hat das Ausführen dieser Zeile JavaScript?" oder "welche Funktion oder Rolle hat dieses HTML-Element?" (anstatt "wie sieht es aus?").

## Semantik in JavaScript

Betrachten Sie in JavaScript eine Funktion, die einen Zeichenkettenparameter nimmt und ein {{htmlelement("li")}}-Element mit dieser Zeichenkette als `textContent` zurückgibt. Müssten Sie den Code sehen, um zu verstehen, was die Funktion tut, wenn sie `build('Peach')` oder `createLiWithContent('Peach')` genannt wird?

## Semantik in CSS

In CSS stellen Sie sich vor, eine Liste mit `li`-Elementen zu stylen, die verschiedene Obstsorten darstellen. Würden Sie wissen, welcher Teil des DOM mit `div > ul > li` oder `.fruits__item` ausgewählt wird?

## Semantik in HTML

In HTML ist zum Beispiel das {{htmlelement("Heading_Elements", "h1")}}-Element ein semantisches Element, das dem Text, den es umschließt, die Rolle (oder Bedeutung) als "eine Überschrift der obersten Ebene auf Ihrer Seite" gibt.

```html
<h1>This is a top level heading</h1>
```

Standardmäßig wird das [User-Agent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets) der meisten Browser ein {{htmlelement("Heading_Elements", "h1")}} mit einer großen Schriftgröße stylen, sodass es _wie_ eine Überschrift aussieht (obwohl Sie es stylen könnten, wie Sie möchten).

Andererseits könnten Sie jedes Element _wie_ eine Überschrift der obersten Ebene aussehen lassen. Betrachten Sie Folgendes:

```html
<span style="font-size: 32px; margin: 21px 0;">Not a top-level heading!</span>
```

Dies wird es so darstellen, dass es wie eine Überschrift der obersten Ebene aussieht, aber es hat keinen semantischen Wert, sodass es keine zusätzlichen Vorteile wie oben beschrieben erhält. Daher ist es eine gute Idee, das richtige HTML-Element für die richtige Aufgabe zu verwenden.

HTML sollte so kodiert werden, dass es die _Daten_ repräsentiert, die bereitgestellt werden, und nicht basierend auf seiner Standardpräsentationsgestaltung. Die Gestaltung (wie es aussehen soll) ist die alleinige Verantwortung von [CSS](/de/docs/Web/CSS).

Einige der Vorteile des Schreibens von semantischem Markup sind:

- Suchmaschinen werden den Inhalt als wichtige Schlüsselwörter betrachten, um die Suchrankings der Seite zu beeinflussen (siehe {{Glossary("SEO", "SEO")}})
- Screenreader können es als Wegweiser verwenden, um sehbehinderten Benutzern beim Navigieren auf einer Seite zu helfen
- Es ist deutlich einfacher, bedeutungsvolle Codeblöcke zu finden als endlose `div`s mit oder ohne semantische oder namespacespezifische Klassen zu durchsuchen
- Es gibt dem Entwickler Hinweise auf die Art der Daten, die eingefügt werden
- Semantische Benennungen spiegeln ordnungsgemäße Benennungen von benutzerdefinierten Elementen/Komponenten wider

Bei der Entscheidung, welches Markup verwendet werden soll, fragen Sie sich: "Welche(s) Element(e) beschreibt/beschreiben die Daten, die ich einfügen werde, am besten?" Zum Beispiel: Handelt es sich um eine Liste von Daten?; geordnet, ungeordnet?; Ist es ein Artikel mit Abschnitten und einem zusätzlichen Bereich mit verwandten Informationen?; Enthält es Definitionen?; Ist es eine Abbildung oder ein Bild, das eine Bildunterschrift benötigt?; Sollte es zusätzlich zur globalen, seitenweiten Kopf- und Fußleiste eine eigene Kopf- und Fußleiste haben?; usw.

## Semantische Elemente

Dies sind _einige_ der etwa 100 semantischen [Elemente](/de/docs/Web/HTML/Reference/Elements), die verfügbar sind:

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

- [HTML-Element-Referenz](/de/docs/Web/HTML/Reference/Elements#inline_text_semantics) auf MDN
- [Verwendung von HTML-Abschnitten und -Umrissen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements#usage_notes) auf MDN
- [Die Bedeutung von Semantik in der Informatik](https://en.wikipedia.org/wiki/Semantics#Computer_science) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("SEO", "SEO")}}
