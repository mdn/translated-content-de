---
title: CSS basic user interface
slug: Web/CSS/CSS_basic_user_interface
l10n:
  sourceCommit: 8d4fb1e2934111a13989d2796152dc601468e7b5
---

{{CSSRef}}

Das Modul **CSS basic user interface** ermöglicht es Ihnen, das Rendering und die Funktionalität von Elementen, die mit der Benutzerschnittstelle zusammenhängen, zu definieren. Dazu gehören Umriss-Eigenschaften, visuelle Rückmeldungen für Zeigegeräte und Tastaturen sowie die Veränderung des Standardaussehens von UI-Widgets.

Grundlegende Benutzerschnittstellen-Eigenschaften können verwendet werden, um die Benutzererfahrung und -zugänglichkeit zu verbessern, indem visuellen Hinweisen auf Elemente, die interagiert werden, bereitgestellt werden. Dazu gehört das Styling von Mauszeigern und die Navigation mit der Tastatur sowie das Styling des Cursor-Karets, wenn ein bearbeitbares Element den Fokus hat. Das Modul ermöglicht es, Umrisse zu fokussierten (oder nicht fokussierten) Elementen hinzuzufügen, ohne die Dimensionen und das Styling des [Box-Modells](/de/docs/Learn/CSS/Building_blocks/The_box_model#what_is_the_css_box_model) zu beeinflussen. Dieses UI-Modul ermöglicht auch das Styling von Benutzerschnittstellen-Steuerelementen.

### Grundlegende Benutzerschnittstelle in Aktion

Um zu sehen, wie grundlegende Benutzerschnittstelleneigenschaften das Erscheinungsbild von UI-Features verändern können, interagieren Sie mit den Elementen in diesem Beispiel. Beachten Sie, dass einige Funktionen in diesem Beispiel die Benutzerfreundlichkeit verbessern, während andere die Benutzererfahrung beeinträchtigen.

{{EmbedGHLiveSample("css-examples/modules/basicUI.html", '100%', 320)}}

Die CSS-Eigenschaften {{CSSxRef("outline")}} und {{CSSxRef("outline-offset")}} wurden verwendet, um den Benutzern Rückmeldungen darüber zu geben, welches Element derzeit den Fokus hat. Eine {{CSSxRef("accent-color")}} sorgt für eine Themenfarbe für alle Formularsteuerungen. Das Karet, das beim Bearbeiten des Textes erscheint, hat dank der {{CSSxRef("caret-color")}}-Eigenschaft die gleiche Farbe. Diese können alle als UI-Verbesserungen betrachtet werden.

Einige Funktionen beeinträchtigen die Benutzerfreundlichkeit. Die {{CSSxRef("cursor")}}-Eigenschaft wurde verwendet, um den Standardcursor des Browsers zu ändern, was verwirrend ist. Die {{CSSxRef("resize")}}-Eigenschaft verhindert, dass das zweite {{HTMLElement("textarea")}} skaliert werden kann, während die {{CSSxRef("pointer-events")}}-Eigenschaft verhindert, dass das dritte `<textarea>`-Element Klickereignisse erhält. Es ist jedoch weiterhin über die Tastatur fokussierbar.

Um den Code für dieses Beispiel einer grundlegenden Benutzerschnittstelle zu sehen, [sehen Sie den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/basicUI.html).

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

- [Erweiterte Formulargestaltung lernen](/de/docs/Learn/Forms/Advanced_form_styling)
  - : Erklärt, wie {{CSSxRef("appearance")}} zum Styling von Formularsteuerungen verwendet werden kann.

## Verwandte Konzepte

- CSS [`cursor`](/de/docs/Web/CSS/cursor) Eigenschaft
- SVG [`cursor`](/de/docs/Web/SVG/Attribute/cursor) Attribut
- CSS {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}} und {{CSSxRef(":focus-visible")}} Pseudoklassen
- [`CaretPosition`](/de/docs/Web/API/CaretPosition) Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
