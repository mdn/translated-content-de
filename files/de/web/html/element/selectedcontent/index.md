---
title: "<selectedcontent>: Das ausgewählte Optionsanzeigeelement"
slug: Web/HTML/Element/selectedcontent
l10n:
  sourceCommit: 004b0ee7b8cfaf6793c1e36d589233199c616759
---

{{HTMLSidebar}}{{SeeCompatTable}}{{non-standard_header}}

Das **`<selectedcontent>`** [HTML](/de/docs/Web/HTML)-Element kann verwendet werden, um den Inhalt der aktuell ausgewählten `<option>` in einem geschlossenen `<select>`-Element anzuzeigen.

## Attribute

Das `<selectedcontent>`-Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), aber diese werden im Wesentlichen ignoriert, da das Element, wenn es korrekt als Kind eines Select-Buttons verwendet wird, {{Glossary("inert", "inert")}} dargestellt wird.

Der Select-Button und all sein Inhalt sind standardmäßig inert, sodass es, selbst wenn interaktive Kinder (zum Beispiel Links oder Buttons) enthalten sind, weiterhin wie ein einzelner Button zu Interaktionszwecken behandelt wird.

Keine weiteren Attribute sind auf `<selectedcontent>` definiert.

## Beschreibung

Beim Erstellen eines [anpassbaren Select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) können Sie das `<selectedcontent>`-Element in einem {{htmlelement("button")}}-Element einfügen, welches wiederum das erste Kind des `<select>`-Elements sein muss:

```html
<select>
  <button>
    <selectedcontent></selectedcontent>
  </button>

  ...
</select>
```

`<selectedcontent>` enthält einen Klon des aktuell ausgewählten {{htmlelement("option")}}-Elements eines {{htmlelement("select")}}-Elements, der intern mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) erstellt wird.

Jeder nachfolgende `<select>`-Inhalt wird im Dropdown-Picker enthalten sein.

Wann immer das ausgewählte `<option>`-Element des `<select>`-Elements von einer Option zu einer anderen wechselt, wird der Inhalt des `<selectedcontent>`-Elements entfernt und durch eine neue geklonte Kopie der DOM-Struktur der neu ausgewählten <code>option</code> ersetzt, die mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) erstellt wird.

## Styling mit CSS

Es ist nützlich, den Inhalt des aktuell ausgewählten `<option>`-Elements, wie er innerhalb des Select-Buttons erscheint, mit CSS-Stilen zu gestalten, ohne das Styling des Inhalts zu beeinflussen, wie er im Picker erscheint.

Zum Beispiel können Ihre `<option>`-Elemente Icons, Bilder oder sogar Videos enthalten. Dieser Inhalt könnte im Picker gut aussehen, aber könnte dazu führen, dass der Select-Button größer wird, unordentlich aussieht und das umgebende Layout beeinflusst.

Dies könnte behoben werden, indem der problematische Inhalt ausgeblendet wird, wenn er innerhalb von `<selectedcontent>` enthalten ist. Zum Beispiel:

```css
selectedcontent img {
  display: none;
}
```

> [!NOTE]
> Wenn die `<button>`- und/oder `<selectedcontent>`-Elemente nicht innerhalb des `<select>`-Markups enthalten sind, wird der Browser implizit den ausgewählten Optionsinhalt im Select-Button platzieren, aber dieses Ziel wird nicht möglich sein.

## Beispiele

Ein vollständiges Beispiel, das das `<selectedcontent>`-Element enthält, finden Sie in unserem [Leitfaden für anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
       Keine
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Spiegelt Inhalt der ausgewählten {{htmlelement("option")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{htmlelement("button")}}-Element, das das erste Kind eines {{htmlelement("select")}}-Elements ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        Keine
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        Keine
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLSelectedContentElement`](/de/docs/Web/API/HTMLSelectedContentElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

Zurzeit nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/html/pull/10633 für den relevanten Spezifikations-PR.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("select")}}-Element
- Das {{HTMLElement("option")}}-Element
- Das {{HTMLElement("optgroup")}}-Element
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
