---
title: CSS-Benutzeroberfläche Grundlagen
slug: Web/CSS/CSS_basic_user_interface
l10n:
  sourceCommit: 8d4fb1e2934111a13989d2796152dc601468e7b5
---

{{CSSRef}}

Das **CSS-Benutzeroberflächen-Grundmodul** ermöglicht es Ihnen, das Rendering und die Funktionalität von Elementen zu definieren, die mit der Benutzeroberfläche in Verbindung stehen, einschließlich Umriss-Eigenschaften, visuelles Feedback für Zeigegeräte und Tastaturen sowie die Änderung des Standardaussehens von Benutzeroberflächen-Widgets.

Grundlegende Benutzeroberflächeneigenschaften können verwendet werden, um die Benutzererfahrung und Zugänglichkeit zu verbessern, indem visuelle Hinweise auf Elemente gegeben werden, mit denen interagiert wird. Dies umfasst das Styling von Mauszeigern und die Navigation des Tastaturfokus sowie das Styling von Caret-Zeigern, wenn ein bearbeitbares Element im Fokus steht. Das Modul ermöglicht es, Umrisse für fokussierte (oder nicht fokussierte) Elemente bereitzustellen, ohne die Abmessungen und das Styling des [Box-Modells](/de/docs/Learn/CSS/Building_blocks/The_box_model#what_is_the_css_box_model) eines Elements zu beeinflussen. Dieses UI-Modul ermöglicht auch das Styling von Benutzeroberflächen-Steuerelementen.

### Grundlegende Benutzeroberfläche in Aktion

Um zu sehen, wie grundlegende Benutzeroberflächeneigenschaften das Erscheinungsbild von Benutzeroberflächenmerkmalen verändern können, interagieren Sie mit den Elementen in diesem Beispiel. Beachten Sie, dass einige Funktionen in diesem Beispiel die Benutzerfreundlichkeit verbessern, während andere die Benutzererfahrung beeinträchtigen.

{{EmbedGHLiveSample("css-examples/modules/basicUI.html", '100%', 320)}}

Die CSS-Eigenschaften {{CSSxRef("outline")}} und {{CSSxRef("outline-offset")}} wurden verwendet, um den Benutzern Feedback zu geben, welches Element aktuell den Fokus hat. Eine {{CSSxRef("accent-color")}} bietet eine Themenfarbe für alle Formularelemente. Der Caret, der erscheint, wenn der Text bearbeitet wird, hat dank der Eigenschaft {{CSSxRef("caret-color")}} die gleiche Farbe. Diese können alle als UI-Verbesserungen angesehen werden.

Einige Funktionen beeinträchtigen die Benutzerfreundlichkeit. Die {{CSSxRef("cursor")}}-Eigenschaft wurde verwendet, um Mauszeiger vom Standard des Browsers zu ändern, was verwirrend ist. Die {{CSSxRef("resize")}}-Eigenschaft verhindert, dass das zweite {{HTMLElement("textarea")}} größenänderbar ist, während die {{CSSxRef("pointer-events")}}-Eigenschaft verhindert, dass das dritte `<textarea>` Klick-Ereignisse empfängt. Es ist dennoch mit der Tastatur fokussierbar.

Um den Code für dieses grundlegende Benutzeroberflächen-Beispiel zu sehen, [sehen Sie den Quellcode auf GitHub](https://github.com/mdn/css-examples/blob/main/modules/basicUI.html).

## Referenz

### Eigenschaften

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}

- {{CSSxRef("caret")}}, Abkürzung für:
  - {{CSSxRef("caret-color")}}
  - {{CSSxRef("caret-shape")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("nav-down")}}
- {{CSSxRef("nav-left")}}
- {{CSSxRef("nav-right")}}
- {{CSSxRef("nav-up")}}
- {{CSSxRef("outline")}}, Abkürzung für:
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("outline-style")}}
  - {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

## Anleitungen

- [Formulare lernen: Erweiterte Formulargestaltung](/de/docs/Learn/Forms/Advanced_form_styling)
  - : Erklärt, wie {{CSSxRef("appearance")}} verwendet werden kann, um Formularelemente zu stylen.

## Verwandte Konzepte

- CSS [`cursor`](/de/docs/Web/CSS/cursor) Eigenschaft
- SVG [`cursor`](/de/docs/Web/SVG/Attribute/cursor) Attribut
- CSS {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}}, und {{CSSxRef(":focus-visible")}} Pseudoklassen
- {{DOMXref("CaretPosition")}} Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tipps zum Gestalten nützlicher und benutzbarer Fokus-Indikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
