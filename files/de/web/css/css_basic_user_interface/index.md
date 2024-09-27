---
title: CSS grundlegende Benutzeroberfläche
slug: Web/CSS/CSS_basic_user_interface
l10n:
  sourceCommit: 8d4fb1e2934111a13989d2796152dc601468e7b5
---

{{CSSRef}}

Das Modul **CSS grundlegende Benutzeroberfläche** ermöglicht es Ihnen, das Rendering und die Funktionalität von Funktionen in Bezug auf die Benutzeroberfläche zu definieren, einschließlich Umriss-Eigenschaften, visuelles Feedback für Zeigegerät und Tastatur sowie die Änderung des Standardaussehens von UI-Widgets.

Grundlegende Benutzeroberflächen-Eigenschaften können genutzt werden, um die Benutzererfahrung und Zugänglichkeit zu verbessern, indem visuelle Hinweise für Elemente bereitgestellt werden, mit denen interagiert wird. Dazu gehören die Gestaltung von Mauszeigern und die Navigation des Tastaturfokus sowie die Gestaltung von Caret-Zeigern, wenn ein bearbeitbares Element den Fokus hat. Das Modul ermöglicht es, Umrisse für fokussierte (oder nicht) Elemente bereitzustellen, ohne die Abmessungen und Gestaltung des [Box-Modells](/de/docs/Learn/CSS/Building_blocks/The_box_model#what_is_the_css_box_model) eines Elements zu beeinflussen. Dieses UI-Modul erlaubt auch die Gestaltung von Benutzersteuerungselementen.

### Grundlegende Benutzeroberfläche in Aktion

Um zu sehen, wie grundlegende Benutzeroberflächen-Eigenschaften das Aussehen von UI-Funktionen verändern können, interagieren Sie mit den Elementen in diesem Beispiel. Beachten Sie, dass einige Funktionen in diesem Beispiel die Benutzerfreundlichkeit verbessern, während andere diese verschlechtern.

{{EmbedGHLiveSample("css-examples/modules/basicUI.html", '100%', 320)}}

Die CSS-Eigenschaften {{CSSxRef("outline")}} und {{CSSxRef("outline-offset")}} wurden verwendet, um den Benutzern Rückmeldung darüber zu geben, welches Element derzeit den Fokus hat. Eine {{CSSxRef("accent-color")}} liefert eine Themenfarbe für alle Formularsteuerelemente. Der Caret, der beim Bearbeiten des Textes erscheint, hat dank der {{CSSxRef("caret-color")}}-Eigenschaft die gleiche Farbe. All dies kann als UI-Verbesserungen betrachtet werden.

Einige Funktionen verschlechtern die Benutzerfreundlichkeit. Die {{CSSxRef("cursor")}}-Eigenschaft wurde verwendet, um Cursor vom Browser-Standard zu ändern, was verwirrend ist. Die {{CSSxRef("resize")}}-Eigenschaft verhindert, dass das zweite {{HTMLElement("textarea")}} angepasst werden kann, während die {{CSSxRef("pointer-events")}}-Eigenschaft verhindert, dass das dritte `<textarea>` Klick-Ereignisse empfängt. Es kann jedoch weiterhin über die Tastatur fokussiert werden.

Um den Code für dieses grundlegende Benutzeroberflächenbeispiel zu sehen, [sehen Sie den Quellcode auf GitHub](https://github.com/mdn/css-examples/blob/main/modules/basicUI.html).

## Referenz

### Eigenschaften

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}

- {{CSSxRef("caret")}}, Kurzform für:
  - {{CSSxRef("caret-color")}}
  - {{CSSxRef("caret-shape")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("nav-down")}}
- {{CSSxRef("nav-left")}}
- {{CSSxRef("nav-right")}}
- {{CSSxRef("nav-up")}}
- {{CSSxRef("outline")}}, Kurzform für:
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("outline-style")}}
  - {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

## Leitfäden

- [Lernen Sie Formulare: Fortgeschrittenes Formstyling](/de/docs/Learn/Forms/Advanced_form_styling)
  - : Erklärt, wie {{CSSxRef("appearance")}} verwendet werden kann, um Formularsteuerungen zu stylen.

## Verwandte Konzepte

- CSS [`cursor`](/de/docs/Web/CSS/cursor)-Eigenschaft
- SVG [`cursor`](/de/docs/Web/SVG/Attribute/cursor)-Attribut
- CSS {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}} und {{CSSxRef(":focus-visible")}} Pseudoklassen
- [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tipps für das Design nützlicher und benutzbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
