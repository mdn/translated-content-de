---
title: Caret
slug: Glossary/Caret
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Caret** (manchmal auch "Textcursor" genannt) ist ein Indikator, der auf dem Bildschirm anzeigt, wo die Texteingabe eingefügt wird.

Die meisten Benutzeroberflächen stellen den Caret mit einer dünnen vertikalen Linie oder einem zeichenbreiten blinkenden Kasten dar, dies kann jedoch variieren. Dieser Punkt im Text wird als **Einfügepunkt** bezeichnet. Das Wort "Caret" unterscheidet den Text-Einfügepunkt vom Mauszeiger.

Im Web wird ein Caret verwendet, um den Einfügepunkt in {{HTMLElement("input")}}- und {{HTMLElement("textarea")}}-Elementen darzustellen, sowie in allen Elementen, deren [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut gesetzt ist, sodass der Inhalt des Elements vom Benutzer bearbeitet werden kann.

## Siehe auch

- [Caret navigation](https://en.wikipedia.org/wiki/Caret_navigation) auf Wikipedia

### CSS im Zusammenhang mit dem Caret

Sie können die Farbe des Carets für den bearbeitbaren Inhalt eines bestimmten Elements festlegen, indem Sie die CSS-Eigenschaft des Elements {{cssxref("caret-color")}} auf den entsprechenden {{cssxref("&lt;color&gt;")}}-Wert setzen.

### HTML-Elemente, die ein Caret anzeigen können

Diese Elemente bieten Text-Eingabefelder oder -Boxen und verwenden daher den Caret.

- [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)
- [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)
- [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) und [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number), [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) und [`<input type="url">`](/de/docs/Web/HTML/Reference/Elements/input/url)
- {{HTMLElement("textarea")}}
- Jedes Element mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut
