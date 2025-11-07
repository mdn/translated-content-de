---
title: Semantik
slug: Glossary/Semantics
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In der Programmierung bezieht sich **Semantik** auf die _Bedeutung_ eines Codes — zum Beispiel "Welche Wirkung hat das Ausführen dieser JavaScript-Zeile?", oder "Welche Funktion oder Rolle hat dieses HTML-Element?" (statt "Wie sieht es aus?").

## Semantik in JavaScript

In JavaScript, betrachten Sie eine Funktion, die einen String-Parameter annimmt und ein {{htmlelement("li")}}-Element mit diesem String als `textContent` zurückgibt. Müssten Sie den Code ansehen, um zu verstehen, was die Funktion macht, wenn sie `build('Peach')` oder `createLiWithContent('Peach')` genannt wird?

## Semantik in CSS

In CSS, betrachten Sie das Styling einer Liste mit `li`-Elementen, die verschiedene Fruchttypen darstellen. Würden Sie wissen, welcher Teil des DOM mit `div > ul > li` oder `.fruits__item` ausgewählt wird?

## Semantik in HTML

In HTML ist zum Beispiel das {{htmlelement("Heading_Elements", "h1")}}-Element ein semantisches Element, das dem Text, den es umschließt, die Rolle (oder Bedeutung) einer "Top-Level-Überschrift auf Ihrer Seite" verleiht.

```html
<h1>This is a top level heading</h1>
```

Standardmäßig wird ein {{htmlelement("Heading_Elements", "h1")}} in den meisten Browsern durch das [User-Agent-Stylesheet](/de/docs/Web/CSS/Guides/Cascade/Introduction#user-agent_stylesheets) mit einer großen Schriftgröße gestaltet, um es _wie_ eine Überschrift aussehen zu lassen (obwohl Sie es so gestalten könnten, dass es wie etwas aussieht, das Sie möchten).

Andererseits könnten Sie jedes Element so gestalten, dass es _wie_ eine Top-Level-Überschrift aussieht. Betrachten Sie folgendes:

```html
<span style="font-size: 32px; margin: 21px 0;">Not a top-level heading!</span>
```

Dies wird es so darstellen, dass es wie eine Top-Level-Überschrift aussieht, aber es hat keinen semantischen Wert, daher werden keine zusätzlichen Vorteile wie oben beschrieben erhalten. Es ist daher eine gute Idee, das richtige HTML-Element für den jeweiligen Zweck zu verwenden.

HTML sollte so codiert werden, dass es die _Daten_ repräsentiert, die eingefügt werden sollen, und nicht basierend auf seiner Standard-Darstellung. Die Präsentation (wie es aussehen sollte) ist die alleinige Verantwortung von [CSS](/de/docs/Web/CSS).

Einige der Vorteile des Schreibens von semantischem Markup sind:

- Suchmaschinen werden seinen Inhalt als wichtige Schlüsselwörter betrachten, um die Suchplatzierungen der Seite zu beeinflussen (siehe {{Glossary("SEO", "SEO")}})
- Screenreader können es als Wegweiser verwenden, um sehbehinderten Nutzern bei der Navigation einer Seite zu helfen
- Das Auffinden von Blöcken mit bedeutungsvollem Code ist erheblich einfacher als das Durchsuchen endloser `div`s mit oder ohne semantische oder Namespaced-Klassen
- Gibt dem Entwickler Hinweise auf den Typ der Daten, die eingefügt werden
- Semantische Benennung spiegelt die ordnungsgemäße benutzerdefinierte Element-/Komponentenbenennung wider

Wenn Sie sich überlegen, welche Markup-Elemente zu verwenden sind, fragen Sie sich: "Welche(s) Element(e) beschreiben/repräsentieren am besten die Daten, die ich einfügen werde?" Zum Beispiel, ist es eine Liste von Daten?; geordnet, ungeordnet?; ist es ein Artikel mit Abschnitten und einem beiseitestellenden Zusatz von verwandten Informationen?; listet es Definitionen auf?; ist es eine Figur oder ein Bild, das eine Bildunterschrift benötigt?; sollte es zusätzlich zum globalen, seitenweiten Header und Footer einen Header und einen Footer haben?; etc.

## Semantische Elemente

Hier sind _einige_ der ungefähr 100 semantischen [Elemente](/de/docs/Web/HTML/Reference/Elements), die verfügbar sind:

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
- [Verwendung von HTML-Abschnitten und Umrissen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements#usage_notes) auf MDN
- [Die Bedeutung der Semantik in der Informatik](https://en.wikipedia.org/wiki/Semantics#Computer_science) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("SEO", "SEO")}}
