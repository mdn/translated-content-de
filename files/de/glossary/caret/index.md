---
title: Caret
slug: Glossary/Caret
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein **Caret** (manchmal als "Textcursor" bezeichnet) ist ein auf dem Bildschirm angezeigter Indikator, der zeigt, wo die Texteingabe eingefügt wird.

Die meisten Benutzeroberflächen stellen das Caret als dünne vertikale Linie oder als blinkendes, zeichenbreites Feld dar, aber dies kann variieren. Dieser Punkt im Text wird als **Einfügepunkt** bezeichnet. Der Begriff "Caret" differenziert den Texteingabepunkt vom Mauszeiger.

Im Web wird das Caret verwendet, um den Einfügepunkt in {{HTMLElement("input")}}- und {{HTMLElement("textarea")}}-Elementen darzustellen, sowie in allen Elementen, deren [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable)-Attribut gesetzt ist, wodurch der Inhalt des Elements vom Benutzer bearbeitet werden kann.

## Siehe auch

- [Caret Navigation](https://en.wikipedia.org/wiki/Caret_navigation) auf Wikipedia

### CSS in Bezug auf das Caret

Sie können die Farbe des Carets für den bearbeitbaren Inhalt eines bestimmten Elements festlegen, indem Sie die CSS-Eigenschaft des Elements {{cssxref("caret-color")}} auf den entsprechenden {{cssxref("&lt;color&gt;")}}-Wert setzen.

### HTML-Elemente, die ein Caret anzeigen können

Diese Elemente bieten Textfelder oder -boxen und verwenden daher das Caret.

- [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)
- [`<input type="password">`](/de/docs/Web/HTML/Element/input/password)
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)
- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date), [`<input type="time">`](/de/docs/Web/HTML/Element/input/time), und [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="number">`](/de/docs/Web/HTML/Element/input/number), [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<input type="email">`](/de/docs/Web/HTML/Element/input/email), [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel), und [`<input type="url">`](/de/docs/Web/HTML/Element/input/url)
- {{HTMLElement("textarea")}}
- Jedes Element mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable)-Attribut
