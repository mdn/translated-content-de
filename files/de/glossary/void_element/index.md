---
title: Leere Elemente
slug: Glossary/Void_element
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{GlossarySidebar}}

Ein **leeres Element** ist ein {{Glossary("element", "Element")}} in HTML, das **keine** Kindknoten (d.h. verschachtelte Elemente oder Textknoten) haben kann. Leere Elemente haben nur einen Start-Tag; End-Tags dürfen für leere Elemente nicht angegeben werden.

In HTML darf ein leeres Element keinen End-Tag haben. Zum Beispiel ist `<input type="text"></input>` ungültiges HTML. Im Gegensatz dazu können SVG- oder MathML-Elemente, die keine Kindknoten haben können, ein End-Tag anstelle der XML-self-closing-Tag-Syntax im Start-Tag verwenden.

Die [HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://svgwg.org/svg2-draft/) und [MathML](https://w3c.github.io/mathml/spec.html) Spezifikationen definieren sehr genau, was jedes Element enthalten kann. Daher haben einige Kombinationen von Tags keine semantische Bedeutung.

Obwohl es keine Möglichkeit gibt, ein leeres Element als mit Kindern markiert darzustellen, können Kindknoten programmatisch mit JavaScript in das Element im DOM eingefügt werden. Aber das ist keine gute Praxis, da das Ergebnis nicht zuverlässig sein wird.

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

_Selbstschließende Tags (`<tag />`) existieren nicht in HTML._

Wenn ein nachgestelltes `/` (Schrägstrich) im Start-Tag eines HTML-Elements vorhanden ist, ignorieren HTML-Parser diesen Schrägstrich. Dies ist besonders wichtig bei Elementen wie {{HTMLElement('script')}} oder {{HTMLElement('ul')}}, die ein End-Tag benötigen. In diesen Fällen schließt das Hinzufügen eines nachgestellten Schrägstrichs im Start-Tag das Element nicht. Stattdessen wird der Schrägstrich ignoriert und das Element wird als offen betrachtet, bis ein eindeutiges End-Tag gefunden wird oder bis der Parser das Element basierend auf der HTML-Struktur und den Parsing-Regeln implizit schließt. Zum Beispiel interpretieren Browser `<div/>Some text` als `<div>Some text</div>`, wobei der Schrägstrich ignoriert wird und das div-Element so betrachtet wird, dass es den folgenden Text umschließt.

Einige Code-Formatter fügen jedoch den nachgestellten Schrägstrich im Start-Tag von leeren Elementen hinzu, um sie XHTML-kompatibel und lesbarer zu machen. Zum Beispiel konvertieren einige Code-Formatter `<input type="text">` zu `<input type="text" />`.

Selbstschließende Tags sind erforderlich in leeren Elementen in {{Glossary("XML", "XML")}}, {{Glossary("XHTML", "XHTML")}} und {{Glossary("SVG", "SVG")}} (z. B. `<circle cx="50" cy="50" r="50" />`).

In SVG und MathML dürfen Elemente, die keine Kindknoten haben können, als selbstschließend markiert werden. In solchen Fällen darf ein Element, dessen Start-Tag als selbstschließend markiert ist, kein End-Tag haben.

> [!NOTE]
> Wenn ein nachgestellter `/` (Schrägstrich) in einem Start-Tag direkt von einem unveränderten Attributwert ohne Leerzeichen dazwischen gefolgt wird, wird der Schrägstrich Teil des Attributwerts anstatt vom Parser verworfen zu werden. Zum Beispiel führt das Markup `<img src=http://www.example.com/logo.svg/>` dazu, dass das `src`-Attribut den Wert `http://www.example.com/logo.svg/` hat — was die URL falsch macht.

## Siehe auch

- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
