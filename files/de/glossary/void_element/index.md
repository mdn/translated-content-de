---
title: Leerelement
slug: Glossary/Void_element
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Leerelement** ist ein {{Glossary("element", "Element")}} in HTML, das **keine** Kindknoten haben kann (d.h. verschachtelte Elemente oder Textknoten). Leerelemente haben nur einen Start-Tag; End-Tags dürfen für Leerelemente nicht angegeben werden.

In HTML darf ein Leerelement keinen End-Tag haben. Zum Beispiel ist `<input type="text"></input>` ungültiges HTML. Im Gegensatz dazu können SVG- oder MathML-Elemente, die keine Kindknoten haben können, einen End-Tag anstelle der XML-Selbsschließer-Syntax im Start-Tag verwenden.

Die [HTML](https://html.spec.whatwg.org/multipage/)-, [SVG](https://svgwg.org/svg2-draft/)- und [MathML](https://w3c.github.io/mathml/spec.html)-Spezifikationen definieren sehr genau, was jedes Element enthalten kann. Daher haben einige Kombinationen von Tags keine semantische Bedeutung.

Obwohl es keine Möglichkeit gibt, ein Leerelement als mit Kindern versehen zu markieren, können Kindknoten programmatisch mit JavaScript zum Element im DOM hinzugefügt werden. Dies ist jedoch keine gute Praxis, da das Ergebnis nicht zuverlässig sein wird.

Die Leerelemente in HTML sind wie folgt:

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

## Selbsschließende Tags

_Selbsschließende Tags (`<tag />`) existieren in HTML nicht._

Wenn ein abschließendes `/` (Schrägstrich) im Start-Tag eines HTML-Elements vorhanden ist, ignorieren HTML-Parser diesen Schrägstrich. Dies ist besonders wichtig bei Elementen wie {{HTMLElement('script')}} oder {{HTMLElement('ul')}}, die einen abschließenden Tag benötigen. In diesen Fällen schließt das Hinzufügen eines abschließenden Schrägstrichs im Start-Tag das Element nicht. Stattdessen wird der Schrägstrich ignoriert, und das Element bleibt offen, bis ein expliziter End-Tag erreicht wird oder bis der Parser das Element implizit basierend auf der HTML-Struktur und den Parsing-Regeln schließt. Zum Beispiel interpretieren Browser im Fall von `<div/>Some text` dies als `<div>Some text</div>`, wobei der Schrägstrich ignoriert wird und das `div`-Element den folgenden Text umschließt.

Einige Code-Formatter fügen jedoch den abschließenden Schrägstrich zu den Start-Tags von Leerelementen hinzu, um sie XHTML-kompatibel und besser lesbar zu machen. Beispielsweise wird `<input type="text">` von einigen Codier-Formatierern in `<input type="text" />` umgewandelt.

Selbsschließende Tags sind in Leerelementen in {{Glossary("XML", "XML")}}, {{Glossary("XHTML", "XHTML")}} und {{Glossary("SVG", "SVG")}} erforderlich (z.B. `<circle cx="50" cy="50" r="50" />`).

In SVG und MathML dürfen Elemente, die keine Kindknoten haben können, als selbsschließend markiert werden. In solchen Fällen darf ein Element keinen End-Tag haben, wenn sein Start-Tag als selbsschließend markiert ist.

> [!NOTE]
> Wenn ein abschließender `/` (Schrägstrich) in einem Start-Tag unmittelbar von einem nicht in Anführungszeichen stehenden Attributwert gefolgt wird — ohne dazwischenliegenden Abstand —, wird der Schrägstrich Teil des Attributwerts, anstatt vom Parser verworfen zu werden. Zum Beispiel führt das Markup `<img src=http://www.example.com/logo.svg/>` dazu, dass das `src`-Attribut den Wert `http://www.example.com/logo.svg/` hat — was die URL falsch macht.

## Siehe auch

- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
