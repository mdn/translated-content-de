---
title: Ersetzte Elemente
slug: Glossary/Replaced_elements
l10n:
  sourceCommit: e7d2e2780b992b4afa847e7d5a3b3e7b4a5805a1
---

{{GlossarySidebar}}

Im Bereich der Webentwicklung sind **ersetzte Elemente** HTML-Elemente, deren Inhalt durch externe Ressourcen oder Inhalte, die außerhalb der Dokumentstruktur definiert sind, ersetzt wird und die im CSS-Rendering-Modell nicht berücksichtigt werden. Es handelt sich um externe Objekte, deren Darstellung unabhängig vom CSS-Formatierungsmodell ist.

Folgende können ersetzte Elemente sein:

- {{HTMLElement("img")}}
- {{HTMLElement("video")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fencedframe")}}

Die folgenden werden nur in bestimmten Fällen als ersetzte Elemente behandelt:

- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("object")}}
- {{HTMLElement("input")}} (nur `image` Eingangstypen)

Ersetzte Elemente haben oft eine {{Glossary("intrinsic_size", "innere Dimension")}} und ein {{Glossary("aspect_ratio", "inneres Verhältnis")}}. Zum Beispiel wird der Inhalt eines `<img>`-Elements im Allgemeinen durch das Bild ersetzt, das durch sein `src`-Attribut definiert ist. Dieses Bild hat eine intrinsische Breite und Höhe, die in absoluten Einheiten angegeben sind und das Verhältnis bestimmen.

Formularsteuerelemente sind im Allgemeinen nicht ersetzbare _Widgets_, außer `<input type="image">`, das mit einem Bild ersetzt wird. Objekte, die mit der CSS-Eigenschaft {{cssxref("content")}} eingefügt werden, sind _anonyme ersetzte Elemente_. Sie sind "anonym", weil sie im HTML-Markup nicht existieren.

## Siehe auch

- {{Glossary("void_element", "Leere Elemente")}}
- {{Glossary("Inline-level_content", "Inhalts-Elemente auf Inline-Ebene")}}
- [Ersetzte Elemente in der CSS-Display-Spezifikation](https://drafts.csswg.org/css-display/#replaced-element)
- [Ersetzte Elemente in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
