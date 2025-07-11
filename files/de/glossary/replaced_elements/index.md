---
title: Ersetzte Elemente
slug: Glossary/Replaced_elements
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Im Webentwicklungskontext sind **ersetzte Elemente** HTML-Elemente, deren Inhalt durch externe Ressourcen oder Inhalte ersetzt wird, die außerhalb der Dokumentstruktur definiert sind, und die im CSS-Rendering-Modell nicht berücksichtigt werden. Sie sind externe Objekte, deren Darstellung unabhängig vom CSS-Formatierungsmodell ist.

Folgende können ersetzte Elemente sein:

- {{HTMLElement("img")}}
- {{HTMLElement("video")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fencedframe")}}

Die folgenden werden nur in speziellen Fällen als ersetzte Elemente behandelt:

- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("object")}}
- {{HTMLElement("input")}} (nur `image`-Eingabetypen)

Ersetzte Elemente haben oft eine {{Glossary("intrinsic_size", "intrinsische Dimension")}} und ein {{Glossary("aspect_ratio", "intrinsisches Seitenverhältnis")}}. Zum Beispiel wird der Inhalt eines `<img>` Elements im Allgemeinen durch das Bild ersetzt, das durch sein `src` Attribut definiert ist. Dieses Bild hat eine intrinsische Breite und eine intrinsische Höhe, die in absoluten Einheiten angegeben sind und das Seitenverhältnis bestimmen.

Formularsteuerelemente sind allgemein nicht ersetzte _Widgets_, außer `<input type="image">`, das durch ein Bild ersetzt wird. Objekte, die mit der CSS-Eigenschaft {{cssxref("content")}} eingefügt werden, sind _anonyme ersetzte Elemente_. Sie sind "anonym", weil sie im HTML-Markup nicht existieren.

## Siehe auch

- {{Glossary("void_element", "Leere Elemente")}}
- {{Glossary("Inline-level_content", "Inline-Inhaltsebene")}}
- [Ersetzte Elemente in der CSS-Display-Spezifikation](https://drafts.csswg.org/css-display/#replaced-element)
- [Ersetzte Elemente in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
