---
title: Semantik
slug: Glossary/Semantics
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{GlossarySidebar}}

In der Programmierung bezieht sich **Semantik** auf die _Bedeutung_ eines Codes – zum Beispiel "welchen Effekt hat das Ausführen dieser Zeile JavaScript?" oder "welchen Zweck oder welche Rolle hat dieses HTML-Element?" (anstatt "wie sieht es aus?").

## Semantik in JavaScript

Betrachten Sie in JavaScript eine Funktion, die einen String-Parameter entgegennimmt und ein {{htmlelement("li")}}-Element mit diesem String als `textContent` zurückgibt. Müssten Sie den Code ansehen, um zu verstehen, was die Funktion tut, wenn sie `build('Peach')` oder `createLiWithContent('Peach')` genannt würde?

## Semantik in CSS

Betrachten Sie in CSS das Styling einer Liste mit `li`-Elementen, die verschiedene Arten von Früchten darstellen. Würden Sie wissen, welcher Teil des DOM mit `div > ul > li` oder `.fruits__item` ausgewählt wird?

## Semantik in HTML

Im HTML ist zum Beispiel das {{htmlelement("Heading_Elements", "h1")}}-Element ein semantisches Element, das dem Text, den es umschließt, die Rolle (oder Bedeutung) "eine Überschrift der obersten Ebene auf Ihrer Seite" gibt.

```html
<h1>This is a top level heading</h1>
```

Standardmäßig wird der [User-Agent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets) der meisten Browser ein {{htmlelement("Heading_Elements", "h1")}} mit einer großen Schriftgröße stylen, damit es _wie_ eine Überschrift aussieht (obwohl Sie es so stylen könnten, dass es aussieht, wie Sie möchten).

Andererseits könnten Sie jedes Element so _gestalten_, dass es wie eine Überschrift der obersten Ebene aussieht. Betrachten Sie das Folgende:

```html
<span style="font-size: 32px; margin: 21px 0;">Not a top-level heading!</span>
```

Dies wird es so rendern, dass es wie eine Überschrift der obersten Ebene aussieht, aber es hat keinen semantischen Wert, sodass es keine zusätzlichen Vorteile erhält, wie oben beschrieben. Es ist daher ratsam, das richtige HTML-Element für die richtige Aufgabe zu verwenden.

HTML sollte so codiert werden, dass es die _Daten_ darstellt, die eingefügt werden sollen, und nicht basierend auf seiner Standard-Präsentationsgestaltung. Die Präsentation (wie es aussehen soll) ist die alleinige Verantwortung von [CSS](/de/docs/Web/CSS).

Einige der Vorteile des Schreibens von semantischem Markup sind die folgenden:

- Suchmaschinen werden dessen Inhalt als wichtige Schlüsselwörter betrachten, um das Suchranking der Seite zu beeinflussen (siehe {{Glossary("SEO", "SEO")}})
- Screenreader können es als Wegweiser verwenden, um sehbehinderten Benutzern dabei zu helfen, sich auf einer Seite zu orientieren
- Es ist wesentlich einfacher, sinnvolle Codeblöcke zu finden, als endlos nach `div`s mit oder ohne semantische oder namespace-spezifische Klassen zu suchen
- Es schlägt dem Entwickler den Typ der Daten vor, die eingefügt werden sollen
- Semantische Benennung spiegelt eine ordnungsgemäße Benennung von benutzerdefinierten Elementen/Komponenten wider

Wenn Sie sich überlegen, welches Markup Sie verwenden sollen, fragen Sie sich: "Welche Elemente beschreiben/stellen die Daten, die ich einfügen möchte, am besten dar?" Zum Beispiel, ist es eine Liste von Daten?; geordnet, ungeordnet?; ist es ein Artikel mit Abschnitten und einem Sidebar mit verwandten Informationen?; listet es Definitionen auf?; ist es eine Abbildung oder ein Bild, das eine Beschriftung benötigt?; sollte es zusätzlich zur globalen, seitenweiten Kopf- und Fußzeile eine Kopf- und Fußzeile haben?; usw.

## Semantische Elemente

Dies sind _einige_ der ungefähr 100 semantischen [Elemente](/de/docs/Web/HTML/Reference/Elements), die verfügbar sind:

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

- [HTML-Elementreferenz](/de/docs/Web/HTML/Reference/Elements#inline_text_semantics) auf MDN
- [Verwendung von HTML-Abschnitten und -Umrissen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements#usage_notes) auf MDN
- [Die Bedeutung von Semantik in der Informatik](https://en.wikipedia.org/wiki/Semantics#Computer_science) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("SEO", "SEO")}}
