---
title: Semantik
slug: Glossary/Semantics
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

In der Programmierung bezieht sich **Semantik** auf die _Bedeutung_ eines Codeabschnitts — zum Beispiel "Welche Wirkung hat das Ausführen dieser Zeile JavaScript?", oder "Welche Funktion oder Rolle hat dieses HTML-Element?" (statt "Wie sieht es aus?").

## Semantik in JavaScript

Betrachten Sie in JavaScript eine Funktion, die einen String-Parameter annimmt und ein {{htmlelement("li")}}-Element mit diesem String als `textContent` zurückgibt. Müssten Sie den Code ansehen, um zu verstehen, was die Funktion macht, wenn sie `build('Peach')` oder `createLiWithContent('Peach')` genannt wird?

## Semantik in CSS

Betrachten Sie in CSS das Styling einer Liste mit `li`-Elementen, die verschiedene Obstsorten darstellen. Wüssten Sie, welcher Teil des DOMs mit `div > ul > li` oder `.fruits__item` ausgewählt wird?

## Semantik in HTML

Im HTML ist zum Beispiel das {{htmlelement("Heading_Elements", "h1")}}-Element ein semantisches Element, das dem umschlossenen Text die Rolle (oder Bedeutung) eines "übergeordneten Überschriftenlevels auf Ihrer Seite" verleiht.

```html
<h1>Dies ist eine übergeordnete Überschrift</h1>
```

Standardmäßig wird in den meisten Browsern das {{htmlelement("Heading_Elements", "h1")}} von der [User-Agent-Stylesheet](/de/docs/Web/CSS/Cascade#user-agent_stylesheets) mit einer großen Schriftgröße versehen, um es _wie_ eine Überschrift aussehen zu lassen (obwohl Sie es auch anders gestalten könnten, wie Sie möchten).

Andererseits könnten Sie jedes Element _wie_ eine übergeordnete Überschrift erscheinen lassen. Betrachten Sie das Folgende:

```html
<span style="font-size: 32px; margin: 21px 0;">Keine übergeordnete Überschrift!</span>
```

Dies wird es wie eine übergeordnete Überschrift erscheinen lassen, aber es hat keinen semantischen Wert, daher erhält es keine der oben beschriebenen zusätzlichen Vorteile. Es ist daher eine gute Idee, das richtige HTML-Element für die jeweilige Aufgabe zu verwenden.

HTML sollte kodiert werden, um die _Daten_ zu repräsentieren, die ausgefüllt werden sollen und nicht basierend auf seiner standardmäßigen Darstellungsstil. Die Darstellung (wie es aussehen sollte) ist die alleinige Verantwortung von [CSS](/de/docs/Web/CSS).

Einige der Vorteile, semantisches Markup zu schreiben, sind:

- Suchmaschinen werden den Inhalt als wichtige Schlüsselwörter betrachten, um das Suchranking der Seite zu beeinflussen (siehe {{glossary("SEO")}})
- Screenreader können es als Wegweiser nutzen, um sehbehinderten Nutzern zu helfen, eine Seite zu navigieren
- Das Auffinden von Blöcken mit bedeutungsvollem Code ist deutlich einfacher als das Durchsuchen endloser `div`s mit oder ohne semantische oder namensräumliche Klassen
- Es suggeriert dem Entwickler die Art der Daten, die ausgefüllt werden
- Semantische Benennung spiegelt die richtige Benennung von benutzerdefinierten Elementen/Komponenten wider

Wenn Sie sich überlegen, welches Markup Sie verwenden sollen, fragen Sie sich: "Welche(s) Element(e) beschreiben/repräsentieren die Daten, die ich ausfüllen werde, am besten?" Zum Beispiel, ist es eine Liste von Daten?; geordnet, ungeordnet?; ist es ein Artikel mit Abschnitten und einem Nebenbereich mit verwandten Informationen?; listet es Definitionen auf?; ist es eine Figur oder ein Bild, das eine Bildunterschrift benötigt?; sollte es zusätzlich zum globalen seitenweiten Header und Footer einen Header und einen Footer haben?; usw.

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

- [HTML-Elementreferenz](/de/docs/Web/HTML/Element#inline_text_semantics) auf MDN
- [Verwendung von HTML-Abschnitten und -Konturen](/de/docs/Web/HTML/Element/Heading_Elements#usage_notes) auf MDN
- [Die Bedeutung der Semantik in der Informatik](https://en.wikipedia.org/wiki/Semantics#Computer_science) auf Wikipedia
- Verwandte Glossareinträge:
  - {{Glossary("SEO")}}
