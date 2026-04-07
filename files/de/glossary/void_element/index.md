---
title: Void-Element
slug: Glossary/Void_element
l10n:
  sourceCommit: d559e66723de93ce6c59eb5d22a29afca7265c2a
---

Ein **Void-Element** ist ein {{Glossary("element", "Element")}} in HTML, das **keine** Knoten als Kind haben kann (d.h. keine verschachtelten Elemente oder Textknoten). Void-Elemente haben nur einen Start-Tag; End-Tags dürfen für Void-Elemente nicht angegeben werden.

In HTML darf ein Void-Element kein End-Tag haben. Beispielsweise ist `<input type="text"></input>` ungültiges HTML. Im Gegensatz dazu können SVG- oder MathML-Elemente, die keine Kindknoten haben können, ein End-Tag anstelle der XML-Selbstschließungs-Tag-Syntax im Start-Tag verwenden.

Die [HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://w3c.github.io/svgwg/svg2-draft/), und [MathML](https://w3c.github.io/mathml/spec.html) Spezifikationen definieren sehr genau, was jedes Element enthalten kann. Daher haben manche Kombinationen von Tags keine semantische Bedeutung.

Obwohl es keine Möglichkeit gibt, ein Void-Element so zu markieren, dass es irgendwelche Kinder hat, können Kindknoten programmatisch mit JavaScript zum Element im DOM hinzugefügt werden. Aber das ist keine gute Praxis, da das Ergebnis nicht zuverlässig sein wird.

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

Wenn ein abschließender `/` (Schrägstrich) im Start-Tag eines HTML-Elements vorhanden ist, ignorieren HTML-Parser diesen Schrägstrich. Dies ist besonders wichtig, um sich bei Elementen wie {{HTMLElement('script')}} oder {{HTMLElement('ul')}} zu merken, die ein End-Tag erfordern. In solchen Fällen führt das Hinzufügen eines abschließenden Schrägstrichs im Start-Tag nicht dazu, dass das Element geschlossen wird. Stattdessen wird der Schrägstrich ignoriert und das Element gilt als geöffnet, bis ein expliziter End-Tag auftritt oder der Parser das Element basierend auf der HTML-Struktur und den Parsing-Regeln implizit schließt. Zum Beispiel interpretieren Browser `<div/>Some text` als `<div>Some text</div>`, wobei der Schrägstrich ignoriert wird und das div-Element den nachfolgenden Text einschließt.

Einige Code-Formatter fügen jedoch den abschließenden Schrägstrich in die Start-Tags von Void-Elementen ein, um sie XHTML-kompatibel und leserlicher zu machen. Beispielsweise werden einige Code-Formatter `<input type="text">` in `<input type="text" />` umwandeln.

Selbstschließende Tags sind in {{Glossary("XML", "XML")}}, {{Glossary("XHTML", "XHTML")}} und {{Glossary("SVG", "SVG")}} für Void-Elemente erforderlich (z.B. `<circle cx="50" cy="50" r="50" />`).

In SVG und MathML dürfen Elemente, die keine Kindknoten haben können, als selbstschließend markiert werden. In solchen Fällen darf ein Element, dessen Start-Tag als selbstschließend markiert ist, kein End-Tag haben.

> [!NOTE]
> Wenn ein abschließender `/` (Schrägstrich) in einem Start-Tag direkt von einem nicht zitierten Attributwert begleitet ist — ohne Leerzeichen dazwischen — wird der Schrägstrich Teil des Attributwerts, anstatt vom Parser verworfen zu werden. Zum Beispiel ergibt das Markup `<img src=http://www.example.com/logo.svg/>`, dass das `src`-Attribut den Wert `http://www.example.com/logo.svg/` hat — was die URL falsch macht.

## Siehe auch

- {{Glossary("Replaced_elements", "Replaced elements")}}
