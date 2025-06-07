---
title: Void-Element
slug: Glossary/Void_element
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{GlossarySidebar}}

Ein **Void-Element** ist ein {{Glossary("element", "Element")}} in HTML, das **keine** Knoten als Kind (d.h. verschachtelte Elemente oder Textknoten) haben kann. Void-Elemente haben nur einen Start-Tag; End-Tags dürfen für Void-Elemente nicht angegeben werden.

In HTML darf ein Void-Element keinen End-Tag haben. Zum Beispiel ist `<input type="text"></input>` ungültiges HTML. Im Gegensatz dazu können SVG- oder MathML-Elemente, die keine Kindknoten haben können, einen End-Tag anstelle der XML-Selbstschließungs-Tag-Syntax in ihrem Start-Tag verwenden.

Die [HTML](https://html.spec.whatwg.org/multipage/)-, [SVG](https://www.w3.org/TR/SVG2/)- und [MathML](https://w3c.github.io/mathml/spec.html)-Spezifikationen definieren sehr genau, was jedes Element enthalten kann. Daher haben einige Kombinationen von Tags keine semantische Bedeutung.

Obwohl es keine Möglichkeit gibt, ein Void-Element als mit Kindern ausgestattet zu kennzeichnen, können Kindknoten programmatisch im DOM mit JavaScript zum Element hinzugefügt werden. Aber das ist keine gute Praxis, da das Ergebnis nicht zuverlässig sein wird.

Die Void-Elemente in HTML sind wie folgt:

- {{HTMLElement("area")}}
- {{HTMLElement("base")}}
- {{HTMLElement("br")}}
- {{HTMLElement("col")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("hr")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("param")}} {{deprecated_inline}}
- {{HTMLElement("source")}}
- {{HTMLElement("track")}}
- {{HTMLElement("wbr")}}

## Selbstschließende Tags

_Selbstschließende Tags (`<tag />`) existieren nicht in HTML._

Wenn ein abschließendes `/` (Schrägstrich) im Start-Tag eines HTML-Elements vorhanden ist, ignorieren HTML-Parser diesen Schrägstrich. Dies ist besonders wichtig zu beachten bei Elementen wie {{HTMLElement('script')}} oder {{HTMLElement('ul')}}, die einen schließenden Tag erfordern. In diesen Fällen schließt ein hinzufügender Schrägstrich im Start-Tag das Element nicht. Stattdessen wird der Schrägstrich ignoriert und das Element als offen betrachtet, bis ein expliziter End-Tag getroffen wird oder bis der Parser das Element basierend auf der HTML-Struktur und den Parsing-Regeln implizit schließt. Zum Beispiel interpretieren Browser `<div/>Some text` als `<div>Some text</div>`, wobei der Schrägstrich ignoriert und das `div`-Element als umschließend für den folgenden Text betrachtet wird.

Jedoch fügen einige Code-Formatter das abschließende Schrägstrich-Zeichen den Start-Tags von Void-Elementen hinzu, um sie XHTML-kompatibel und lesbarer zu machen. Zum Beispiel konvertieren einige Code-Formatter `<input type="text">` zu `<input type="text" />`.

Selbstschließende Tags sind in Void-Elementen im {{Glossary("XML", "XML")}}, {{Glossary("XHTML", "XHTML")}} und {{Glossary("SVG", "SVG")}} erforderlich (z. B. `<circle cx="50" cy="50" r="50" />`).

In SVG und MathML dürfen Elemente, die keine Kindknoten haben können, als selbstschließend markiert werden. In solchen Fällen, wenn ein Start-Tag eines Elements als selbstschließend markiert ist, darf das Element keinen End-Tag haben.

> [!NOTE]
> Wenn ein abschließender `/` (Schrägstrich) in einem Start-Tag direkt von einem unzitierten Attributwert ohne Leerzeichen dazwischen gefolgt wird, wird der Schrägstrich Teil des Attributwerts, anstatt vom Parser verworfen zu werden. Zum Beispiel führt das Markup `<img src=http://www.example.com/logo.svg/>` dazu, dass das `src`-Attribut den Wert `http://www.example.com/logo.svg/` hat — was die URL falsch macht.

## Siehe auch

- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
