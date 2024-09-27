---
title: Void-Element
slug: Glossary/Void_element
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **Void-Element** ist ein [Element](/de/docs/Glossary/element) in HTML, das **keine** Kindknoten (d. h. verschachtelte Elemente oder Textknoten) haben kann. Void-Elemente haben nur einen Start-Tag; End-Tags dürfen für Void-Elemente nicht angegeben werden.

In HTML darf ein Void-Element keinen End-Tag haben. Zum Beispiel ist `<input type="text"></input>` ungültiges HTML. Im Gegensatz dazu können SVG- oder MathML-Elemente, die keine Kindknoten haben dürfen, einen End-Tag anstelle der XML-Selbsschluss-Tag-Syntax im Start-Tag verwenden.

Die [HTML](https://html.spec.whatwg.org/multipage/)-, [SVG](https://www.w3.org/TR/SVG2/)- und [MathML](https://www.w3.org/TR/MathML3/)-Spezifikationen definieren sehr genau, was jedes Element enthalten kann. Daher haben einige Kombinationen von Tags keine semantische Bedeutung.

Obwohl es keine Möglichkeit gibt, ein Void-Element als mit Kindern versehen zu kennzeichnen, können Kindknoten programmgesteuert dem Element im DOM mit JavaScript hinzugefügt werden. Aber das ist keine gute Praxis, da das Ergebnis nicht zuverlässig sein wird.

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

## Selbsschließende Tags

_Selbsschließende Tags (`<tag />`) existieren in HTML nicht._

Wenn ein abschließender `/` (Schrägstrich) im Start-Tag eines HTML-Elements vorhanden ist, ignorieren HTML-Parser diesen Schrägstrich. Dies ist besonders wichtig bei Elementen wie {{HTMLElement('script')}} oder {{HTMLElement('ul')}}, die ein abschließendes Tag benötigen. In diesen Fällen schließt das Hinzufügen eines abschließenden Schrägstrichs im Start-Tag das Element nicht. Stattdessen wird der Schrägstrich ignoriert und das Element als offen betrachtet, bis ein expliziter End-Tag gefunden wird oder bis der Parser das Element basierend auf der HTML-Struktur und Parsing-Regeln implizit schließt. Zum Beispiel wird im Fall von `<div/>Some text`, diese Darstellung als `<div>Some text</div>` interpretiert, wobei der Schrägstrich ignoriert wird und das div-Element als Kapselung des nachfolgenden Textes behandelt wird.

Einige Code-Formatter fügen jedoch den abschließenden Schrägstrich zu den Start-Tags von Void-Elementen hinzu, um sie XHTML-kompatibel und lesbarer zu machen. Zum Beispiel konvertieren einige Code-Formatter `<input type="text">` in `<input type="text" />`.

Selbsschließende Tags sind in Void-Elementen in [XML](/de/docs/Glossary/XML), [XHTML](/de/docs/Glossary/XHTML) und [SVG](/de/docs/Glossary/SVG) erforderlich (z. B. `<circle cx="50" cy="50" r="50" />`).

In SVG und MathML dürfen Elemente, die keine Kindknoten haben können, als selbsschließend markiert werden. In solchen Fällen darf, wenn das Start-Tag eines Elements als selbsschließend markiert ist, das Element keinen End-Tag haben.

> [!NOTE]
> Wenn ein abschließender `/` (Schrägstrich) in einem Start-Tag direkt auf einen nicht zitierten Attributwert folgt — ohne Leerzeichen dazwischen —, wird der Schrägstrich Teil des Attributwerts anstatt vom Parser verworfen. Zum Beispiel ergibt die Markierung `<img src=http://www.example.com/logo.svg/>`, dass das `src`-Attribut den Wert `http://www.example.com/logo.svg/` hat — was die URL falsch macht.

## Siehe auch

- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
