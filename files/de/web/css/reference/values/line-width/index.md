---
title: "`<line-width>` CSS Typ"
short-title: <line-width>
slug: Web/CSS/Reference/Values/line-width
l10n:
  sourceCommit: e9c03ba87f9ff4123150d8f7dc457bd546bdab83
---

Der **`<line-width>`** {{Glossary("enumerated", "enumerierte")}} Werttyp repräsentiert die Länge oder den Schlüsselwortwert, der die Breite einer Linie oder das Fehlen einer Linie definiert. Die `<line-width>` Schlüsselwortwerte werden in den folgenden Lang- und Kurzschrift-Eigenschaften verwendet:

- {{cssxref("border")}}, {{cssxref("border-width")}}
- {{cssxref("border-block")}}, {{cssxref("border-block-width")}}
- {{cssxref("border-block-end")}}, {{cssxref("border-block-end-width")}}
- {{cssxref("border-block-start")}}, {{cssxref("border-block-start-width")}}
- {{cssxref("border-bottom")}}, {{cssxref("border-bottom-width")}}
- {{cssxref("border-inline")}}, {{cssxref("border-inline-width")}}
- {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-width")}}
- {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-width")}}
- {{cssxref("border-left")}}, {{cssxref("border-left-width")}}
- {{cssxref("border-right")}}, {{cssxref("border-right-width")}}
- {{cssxref("border-top")}}, {{cssxref("border-top-width")}}
- {{cssxref("column-rule")}}, {{cssxref("column-rule-width")}}
- {{cssxref("row-rule")}}, {{cssxref("row-rule-width")}}
- {{cssxref("rule")}}, {{cssxref("rule-width")}}
- {{cssxref("outline")}}, {{cssxref("outline-width")}}

## Syntax

### Werte

Der `<line-width>` Typ wird entweder mit `<length>` oder einem Schlüsselwort angegeben:

- `<length>`
  - : Eine nicht-negative {{cssxref("&lt;length&gt;")}}.
- `hairline` {{Experimental_Inline}}
  - : Repräsentiert eine "gerade sichtbare" Linie, die kleiner oder gleich `1px` ist.
- `thin`
  - : Entspricht `1px`.
- `medium`
  - : Entspricht `3px`.
- `thick`
  - : Entspricht `5px`.

## Formale Syntax

{{CSSSyntaxRaw(`<line-width> = <length [0,∞]> | hairline | thin | medium | thick`)}}

## Beispiele

### Definition einer Linienbreite

Dieses Beispiel demonstriert alle `<line-width>` Schlüsselwortwerte zusammen mit einem `<length>` Wert.

#### HTML

Wir fügen fünf Boxen in ein {{htmlelement("section")}} Element ein.

```html
<section>
  <div data-width="hairline">hairline</div>
  <div data-width="thin">thin</div>
  <div data-width="medium">medium</div>
  <div data-width="thick">thick</div>
  <div data-width="10px">10px</div>
</section>
```

#### CSS

Wir gestalten alle Elemente identisch und setzen dann die {{cssxref("border-width")}} basierend auf dem `data-width` Attribut des Elements.

```css
section {
  display: flex;
  gap: 10px;
}
div {
  flex: 0 0 15%;
  border-style: solid;
  border-color: purple;
  text-align: center;
}
[data-width="hairline"] {
  border-width: hairline;
}

[data-width="thin"] {
  border-width: thin;
}

[data-width="medium"] {
  border-width: medium;
}

[data-width="thick"] {
  border-width: thick;
}

[data-width="10px"] {
  border-width: 10px;
}
```

```css hidden
@supports not (border-width: hairline) {
  body::before {
    content: "Your browser does not support the 'hairline' value.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

#### Ergebnis

{{ EmbedLiveSample('Defining a line width') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("line-style")}} Datentyp
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [CSS grundlegende Benutzeroberfläche](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul
- [CSS Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
