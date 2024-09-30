---
title: Caret
slug: Glossary/Caret
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein **Caret** (manchmal auch „Textcursor“ genannt) ist ein auf dem Bildschirm angezeigter Indikator, der anzeigt, wo die Texteingabe eingefügt wird.

Die meisten Benutzeroberflächen stellen das Caret als dünne vertikale Linie oder als Zeichenbox dar, die blinkt, dies kann jedoch variieren. Dieser Punkt im Text wird als **Einfügepunkt** bezeichnet. Der Begriff „Caret“ unterscheidet den Texteingabepunkt vom Mauscursor.

Im Web wird ein Caret verwendet, um den Einfügepunkt in {{HTMLElement("input")}}- und {{HTMLElement("textarea")}}-Elementen darzustellen, sowie in allen Elementen, deren [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable)-Attribut gesetzt ist, sodass der Benutzer den Inhalt des Elements bearbeiten kann.

## Siehe auch

- [Caret-Navigation](https://en.wikipedia.org/wiki/Caret_navigation) auf Wikipedia

### CSS in Bezug auf das Caret

Sie können die Farbe des Carets für den bearbeitbaren Inhalt eines bestimmten Elements festlegen, indem Sie die CSS-Eigenschaft des Elements {{cssxref("caret-color")}} auf den entsprechenden {{cssxref("&lt;color&gt;")}}-Wert setzen.

### HTML-Elemente, die ein Caret präsentieren können

Diese Elemente bieten Texteingabefelder oder Boxen und verwenden daher das Caret.

- [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)
- [`<input type="password">`](/de/docs/Web/HTML/Element/input/password)
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)
- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date), [`<input type="time">`](/de/docs/Web/HTML/Element/input/time) und [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="number">`](/de/docs/Web/HTML/Element/input/number), [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<input type="email">`](/de/docs/Web/HTML/Element/input/email), [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel) und [`<input type="url">`](/de/docs/Web/HTML/Element/input/url)
- {{HTMLElement("textarea")}}
- Jedes Element, bei dem das [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable)-Attribut gesetzt ist
