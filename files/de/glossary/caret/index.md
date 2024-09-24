---
title: Caret
slug: Glossary/Caret
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{GlossarySidebar}}

Ein **Caret** (manchmal auch "Text-Cursor" genannt) ist ein Anzeiger auf dem Bildschirm, der angibt, wo die Texteingabe eingefügt wird.

Die meisten Benutzeroberflächen stellen das Caret mit einer dünnen vertikalen Linie oder einem zeichenbreiten Rechteck dar, das blinkt, aber dies kann variieren. Dieser Punkt im Text wird **Einfügestelle** genannt. Das Wort "Caret" unterscheidet die Texteinfügestelle vom Mauszeiger.

Im Web wird ein Caret verwendet, um die Einfügestelle in {{HTMLElement("input")}}- und {{HTMLElement("textarea")}}-Elementen darzustellen, sowie in allen Elementen, deren [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut gesetzt ist, wodurch der Inhalt des Elements vom Benutzer bearbeitet werden kann.

## Siehe auch

- [Caret-Navigation](https://en.wikipedia.org/wiki/Caret_navigation) auf Wikipedia

### CSS in Bezug auf das Caret

Sie können die Farbe des Carets für den bearbeitbaren Inhalt eines Elements festlegen, indem Sie die CSS-Eigenschaft {{cssxref("caret-color")}} des Elements auf den entsprechenden {{cssxref("&lt;color&gt;")}}-Wert setzen.

### HTML-Elemente, die ein Caret anzeigen können

Diese Elemente bieten Text-Eingabefelder oder Boxen und verwenden daher das Caret.

- [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)
- [`<input type="password">`](/de/docs/Web/HTML/Element/input/password)
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)
- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date), [`<input type="time">`](/de/docs/Web/HTML/Element/input/time), und [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="number">`](/de/docs/Web/HTML/Element/input/number), [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<input type="email">`](/de/docs/Web/HTML/Element/input/email), [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel), und [`<input type="url">`](/de/docs/Web/HTML/Element/input/url)
- {{HTMLElement("textarea")}}
- Jedes Element mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut
