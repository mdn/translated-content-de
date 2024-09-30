---
title: Void-Element
slug: Glossary/Void_element
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **Void-Element** ist ein [Element](/de/docs/Glossary/element) in HTML, das **keine** Kindknoten (d.h. verschachtelte Elemente oder Textknoten) enthalten kann. Void-Elemente haben nur ein Start-Tag; End-Tags dürfen für Void-Elemente nicht angegeben werden.

In HTML darf ein Void-Element kein End-Tag haben. Zum Beispiel ist `<input type="text"></input>` ungültiges HTML. Im Gegensatz dazu können SVG- oder MathML-Elemente, die keine Kindknoten haben dürfen, ein End-Tag anstelle der XML-Selbstschlusssyntax im Start-Tag verwenden.

Die [HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://www.w3.org/TR/SVG2/)- und [MathML](https://www.w3.org/TR/MathML3/)-Spezifikationen definieren sehr genau, was jedes Element enthalten darf. Daher haben einige Kombinationen von Tags keine semantische Bedeutung.

Obwohl es keine Möglichkeit gibt, ein Void-Element als ein Element mit Kindknoten zu kennzeichnen, können Kindknoten programmatisch im DOM mithilfe von JavaScript zu dem Element hinzugefügt werden. Dies ist jedoch keine gute Praxis, da das Ergebnis nicht zuverlässig ist.

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

_Selbstschließende Tags (`<tag />`) existieren in HTML nicht._

Wenn ein abschließender `/` (Schrägstrich) im Start-Tag eines HTML-Elements vorhanden ist, ignorieren HTML-Parser dieses Schrägstrichzeichen. Dies ist besonders wichtig für Elemente wie {{HTMLElement('script')}} oder {{HTMLElement('ul')}}, die ein End-Tag erfordern. In diesen Fällen schließt das Hinzufügen eines abschließenden Schrägstrichs im Start-Tag das Element nicht. Stattdessen wird der Schrägstrich ignoriert, und das Element wird als geöffnet behandelt, bis ein explizites End-Tag gefunden wird oder der Parser das Element basierend auf der HTML-Struktur und den Parsing-Regeln implizit schließt. Zum Beispiel wird im Fall von `<div/>Some text` von Browsern dies als `<div>Some text</div>` interpretiert, wobei der Schrägstrich ignoriert und das div-Element als umschließend für den folgenden Text betrachtet wird.

Einige Code-Formatter fügen jedoch das abschließende Schrägstrichzeichen in den Start-Tags von Void-Elementen hinzu, um sie XHTML-kompatibel und lesbarer zu machen. Einige Code-Formatter konvertieren beispielsweise `<input type="text">` zu `<input type="text" />`.

Selbstschließende Tags sind in Void-Elementen in [XML](/de/docs/Glossary/XML), [XHTML](/de/docs/Glossary/XHTML) und [SVG](/de/docs/Glossary/SVG) erforderlich (z.B. `<circle cx="50" cy="50" r="50" />`).

In SVG und MathML dürfen Elemente, die keine Kindknoten haben können, als selbstschließend markiert werden. In solchen Fällen darf ein Element, dessen Start-Tag als selbstschließend markiert ist, kein End-Tag haben.

> [!NOTE]
> Wenn ein abschließender `/` (Schrägstrich) in einem Start-Tag direkt von einem nicht mit Anführungszeichen versehenen Attributwert — ohne Leerzeichen dazwischen — gefolgt wird, wird der Schrägstrich Teil des Attributwerts, anstatt vom Parser verworfen zu werden. Zum Beispiel führt das Markup `<img src=http://www.example.com/logo.svg/>` dazu, dass das `src`-Attribut den Wert `http://www.example.com/logo.svg/` erhält — was die URL falsch macht.

## Siehe auch

- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
