---
title: Leere Elemente
slug: Glossary/Void_element
l10n:
  sourceCommit: bd1e27169f37922f382d98c98bf4ab68bff08edd
---

Ein **leeres Element** ist ein {{Glossary("element", "Element")}} in HTML, das **keine** Kindknoten (d.h. verschachtelte Elemente oder Textknoten) haben kann. Leere Elemente haben nur ein Start-Tag; End-Tags dürfen für leere Elemente nicht angegeben werden.

In HTML darf ein leeres Element kein End-Tag haben. Zum Beispiel ist `<input type="text"></input>` ungültiges HTML. Im Gegensatz dazu können SVG- oder MathML-Elemente, die keine Kindknoten haben können, ein End-Tag anstelle der XML-selbstschließenden Tag-Syntax im Start-Tag verwenden.

Die [HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://w3c.github.io/svgwg/svg2-draft/), und [MathML](https://w3c.github.io/mathml/spec.html) Spezifikationen definieren sehr präzise, was jedes Element enthalten kann. Daher haben einige Kombinationen von Tags keine semantische Bedeutung.

Obwohl es keine Möglichkeit gibt, ein leeres Element so zu markieren, dass es Kinder hat, können Kindknoten programmatisch mithilfe von JavaScript dem Element im DOM hinzugefügt werden. Aber das ist keine gute Praxis, da das Ergebnis nicht zuverlässig sein wird.

Die leeren Elemente in HTML sind wie folgt:

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

_Selbstschließende Tags (`<tag />`) existieren in HTML nicht._

Wenn ein abschließendes `/` (Schrägstrich) im Start-Tag eines HTML-Elements vorhanden ist, wird dieses Zeichen von HTML-Parsers ignoriert. Dies ist besonders wichtig zu beachten für Elemente wie {{HTMLElement('script')}} oder {{HTMLElement('ul')}} die ein End-Tag erfordern. In diesen Fällen schließt das Hinzufügen eines abschließenden Schrägstrichs im Start-Tag das Element nicht. Stattdessen wird der Schrägstrich ignoriert, und das Element wird als offen betrachtet, bis ein explizites End-Tag gefunden wird oder bis der Parser das Element implizit basierend auf der HTML-Struktur und den Parsing-Regeln schließt. Zum Beispiel wird im Fall von `<div/>Some text` von Browsern dies als `<div>Some text</div>` interpretiert, wobei der Schrägstrich ignoriert wird und das div-Element den folgenden Text einfasst.

Einige Code-Formatter fügen jedoch den abschließenden Schrägstrich zu den Start-Tags von leeren Elementen hinzu, um sie XHTML-kompatibel und lesbarer zu machen. Zum Beispiel konvertieren einige Code-Formatter `<input type="text">` zu `<input type="text" />`.

Selbstschließende Tags sind erforderlich für leere Elemente in {{Glossary("XML", "XML")}}, {{Glossary("XHTML", "XHTML")}}, und {{Glossary("SVG", "SVG")}} (z. B. `<circle cx="50" cy="50" r="50" />`).

In SVG und MathML kann ein Element ohne Kindknoten als selbstschließend markiert werden, indem ein abschließender Schrägstrich zum Start-Tag hinzugefügt wird. Wenn das Start-Tag eines Elements als selbstschließend markiert ist, darf das Element kein End-Tag haben.

> [!NOTE]
> Wenn ein abschließender `/` (Schrägstrich) in einem Start-Tag direkt von einem nicht zitierten Attributwert gefolgt wird - ohne Leerzeichen dazwischen - wird der Schrägstrich Teil des Attributwerts anstatt vom Parser verworfen zu werden. Zum Beispiel führt das Markup `<img src=http://www.example.com/logo.svg/>` dazu, dass das `src`-Attribut den Wert `http://www.example.com/logo.svg/` hat — was die URL falsch macht.

## Siehe auch

- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
