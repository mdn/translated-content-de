---
title: Leere Elemente
slug: Glossary/Void_element
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **leeres Element** ist ein {{Glossary("element")}} in HTML, das **keine** Kindknoten (d. h. verschachtelte Elemente oder Textknoten) haben kann. Leere Elemente haben nur ein Start-Tag; End-Tags dürfen für leere Elemente nicht angegeben werden.

In HTML darf ein leeres Element kein End-Tag haben. Zum Beispiel ist `<input type="text"></input>` ungültiges HTML. Im Gegensatz dazu können SVG- oder MathML-Elemente, die keine Kindknoten haben können, ein End-Tag verwenden, anstatt der XML-Selbstauslagerungstag-Syntax in ihrem Start-Tag.

Die Spezifikationen für [HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://www.w3.org/TR/SVG2/) und [MathML](https://www.w3.org/TR/MathML3/) definieren sehr genau, was jedes Element enthalten kann. Daher haben einige Kombinationen von Tags keine semantische Bedeutung.

Obwohl es keine Möglichkeit gibt, ein leeres Element so zu markieren, dass es Kinder hat, können mit JavaScript Kindknoten programmgesteuert dem Element im DOM hinzugefügt werden. Das ist jedoch keine gute Praxis, da das Ergebnis nicht zuverlässig sein wird.

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

Wenn ein abschließender `/` (Schrägstrich) im Start-Tag eines HTML-Elements vorhanden ist, ignorieren HTML-Parser diesen Schrägstrich. Dies ist besonders wichtig bei Elementen wie {{HTMLElement('script')}} oder {{HTMLElement('ul')}}, die ein schließendes Tag erfordern. In diesen Fällen schließt das Hinzufügen eines abschließenden Schrägstrichs im Start-Tag das Element nicht. Stattdessen wird der Schrägstrich ignoriert und das Element bleibt offen, bis ein explizites Schließ-Tag auftritt oder der Parser das Element basierend auf der HTML-Struktur und den Parsing-Regeln implizit schließt. Zum Beispiel interpretieren Browser `<div/>Some text` als `<div>Some text</div>`, indem der Schrägstrich ignoriert wird und das `div`-Element den folgenden Text einfasst.

Jedoch fügen einige Code-Formatierer den abschließenden Schrägstrich zu den Start-Tags von leeren Elementen hinzu, um sie XHTML-kompatibel und lesbarer zu machen. Beispielsweise konvertieren einige Code-Formatierer `<input type="text">` zu `<input type="text" />`.

Selbstschließende Tags sind in leeren Elementen in {{Glossary("XML")}}, {{Glossary("XHTML")}} und {{Glossary("SVG")}} erforderlich (z. B. `<circle cx="50" cy="50" r="50" />`).

In SVG und MathML dürfen Elemente, die keine Kindknoten haben können, als selbstschließend markiert werden. In solchen Fällen darf ein als selbstschließend markiertes Start-Tag kein End-Tag haben.

> [!NOTE]
> Wenn ein abschließender `/` (Schrägstrich) im Start-Tag direkt von einem unveröffentlichten Attributwert — ohne Leerzeichen dazwischen — vorangestellt wird, wird der Schrägstrich Teil des Attributwerts, statt vom Parser verworfen zu werden. Beispielsweise ergibt das Markup `<img src=http://www.example.com/logo.svg/>`, dass das `src`-Attribut den Wert `http://www.example.com/logo.svg/` hat — was die URL falsch macht.

## Siehe auch

- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
