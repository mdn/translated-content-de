---
title: Ersetzte Elemente
slug: Glossary/Replaced_elements
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{GlossarySidebar}}

Im Web-Development sind **ersetzte Elemente** HTML-Elemente, deren Inhalt durch externe Ressourcen oder Inhalte ersetzt wird, die außerhalb der Dokumentstruktur definiert sind, und sie werden im CSS-Rendering-Modell nicht berücksichtigt. Sie sind externe Objekte, deren Darstellung unabhängig vom CSS-Formatierungsmodell ist.

Die folgenden können ersetzte Elemente sein:

- {{HTMLElement("img")}}
- {{HTMLElement("video")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fencedframe")}} {{experimental_inline}}

Die folgenden werden nur in spezifischen Fällen als ersetzte Elemente behandelt:

- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("object")}}
- {{HTMLElement("input")}} (nur `image` Eingabetypen)

Ersetzte Elemente haben oft {{Glossary("intrinsic_size", "intrinsische Dimensionen")}} und ein {{Glossary("aspect_ratio", "intrinsisches Seitenverhältnis")}}. Beispielsweise wird der Inhalt eines `<img>`-Elements im Allgemeinen durch das Bild ersetzt, das durch sein `src`-Attribut definiert ist. Dieses Bild hat eine intrinsische Breite und Höhe, die in absoluten Einheiten angegeben sind, was das Seitenverhältnis bestimmt.

Formularsteuerelemente sind im Allgemeinen nicht ersetzte _Widgets_, außer bei `<input type="image">`, das durch ein Bild ersetzt wird. Objekte, die mit der CSS-Eigenschaft {{cssxref("content")}} eingefügt werden, sind _anonyme ersetzte Elemente_. Sie sind „anonym“, weil sie nicht im HTML-Markup existieren.

## Siehe auch

- {{Glossary("void_element", "Leere Elemente")}}
- {{Glossary("Inline-level_content", "Inline-Level-Inhalt")}}
- [Ersetzte Elemente in der CSS-Display-Spezifikation](https://drafts.csswg.org/css-display/#replaced-element)
- [Ersetzte Elemente in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
