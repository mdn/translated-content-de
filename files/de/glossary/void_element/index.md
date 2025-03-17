---
title: Void-Element
slug: Glossary/Void_element
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{GlossarySidebar}}

Ein **Void-Element** ist ein {{Glossary("element", "Element")}} in HTML, das **keine** Kindknoten haben kann (d.h. keine verschachtelten Elemente oder Textknoten). Void-Elemente haben nur einen Start-Tag; End-Tags dürfen bei Void-Elementen nicht angegeben werden.

In HTML darf ein Void-Element keinen End-Tag haben. Zum Beispiel ist `<input type="text"></input>` ungültiges HTML. Im Gegensatz dazu können SVG- oder MathML-Elemente, die keine Kindknoten haben können, einen End-Tag anstelle von XML-Selbstschließungstag-Syntax in ihrem Start-Tag verwenden.

Die [HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://www.w3.org/TR/SVG2/), und [MathML](https://www.w3.org/TR/MathML3/) Spezifikationen definieren sehr genau, was jedes Element enthalten kann. Daher haben einige Kombinationen von Tags keine semantische Bedeutung.

Obwohl es keine Möglichkeit gibt, ein Void-Element zu markieren, das Kinder hat, können Kindknoten programmgesteuert mit JavaScript im DOM zum Element hinzugefügt werden. Aber das ist keine gute Praxis, da das Ergebnis nicht zuverlässig sein wird.

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

Wenn ein abschließendes `/` (Schrägstrich)-Zeichen im Start-Tag eines HTML-Elements vorhanden ist, ignorieren HTML-Parser dieses Schrägstrich-Zeichen. Dies ist besonders wichtig bei Elementen wie {{HTMLElement('script')}} oder {{HTMLElement('ul')}}, die ein End-Tag benötigen. In diesen Fällen schließt ein abschließender Schrägstrich im Start-Tag das Element nicht. Stattdessen wird der abschließende Schrägstrich ignoriert, und das Element wird als offen betrachtet, bis ein explizites End-Tag auftritt oder der Parser das Element basierend auf der HTML-Struktur und den Parsing-Regeln implizit schließt. Zum Beispiel interpretieren Browser `<div/>Some text` als `<div>Some text</div>`, wobei der Schrägstrich ignoriert wird und das `div`-Element den nachfolgenden Text umfasst.

Einige Code-Formatter fügen jedoch das abschließende Schrägstrich-Zeichen den Start-Tags von Void-Elementen hinzu, um sie XHTML-kompatibel und lesbarer zu machen. Beispielsweise konvertieren einige Code-Formatter `<input type="text">` in `<input type="text" />`.

Selbstschließende Tags sind in Void-Elementen in {{Glossary("XML", "XML")}}, {{Glossary("XHTML", "XHTML")}}, und {{Glossary("SVG", "SVG")}} erforderlich (z. B. `<circle cx="50" cy="50" r="50" />`).

In SVG und MathML dürfen Elemente, die keine Kindknoten haben können, als selbstschließend gekennzeichnet werden. In solchen Fällen, wenn ein Start-Tag eines Elements als selbstschließend markiert ist, darf das Element keinen End-Tag haben.

> [!NOTE]
> Wenn ein abschließendes `/` (Schrägstrich)-Zeichen in einem Start-Tag direkt von einem unverlorenen Attributwert gefolgt wird — ohne dazwischen liegende Leerzeichen — wird der Schrägstrich Teil des Attributwerts, anstatt vom Parser verworfen zu werden. Zum Beispiel ergibt das Markup `<img src=http://www.example.com/logo.svg/>`, dass das `src`-Attribut den Wert `http://www.example.com/logo.svg/` hat — was die URL falsch macht.

## Siehe auch

- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
