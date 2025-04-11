---
title: "<selectedcontent>: Das Anzeigeelement für die ausgewählte Option"
slug: Web/HTML/Reference/Elements/selectedcontent
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{SeeCompatTable}}{{non-standard_header}}

Das **`<selectedcontent>`** [HTML](/de/docs/Web/HTML)-Element kann verwendet werden, um den Inhalt der aktuell ausgewählten `<option>` innerhalb eines geschlossenen `<select>`-Elements anzuzeigen.

## Attribute

Das `<selectedcontent>`-Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), aber diese werden im Wesentlichen ignoriert, weil das Element, wenn es korrekt als Kind eines Select-Buttons verwendet wird, als [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert) gerendert wird.

Der Select-Button und sein gesamter Inhalt sind standardmäßig inert, so dass, wenn interaktive Kinder (zum Beispiel Links oder Buttons) darin enthalten sind, er dennoch wie ein einzelner Button für Interaktionszwecke behandelt wird.

Es sind keine anderen Attribute auf `<selectedcontent>` definiert.

## Beschreibung

Beim Erstellen eines [anpassbaren Select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) können Sie das `<selectedcontent>`-Element innerhalb eines {{htmlelement("button")}}-Elements einfügen, welches wiederum das erste Kind des `<select>`-Elements sein muss:

```html
<select>
  <button>
    <selectedcontent></selectedcontent>
  </button>

  ...
</select>
```

`<selectedcontent>` enthält einen Klon des aktuell ausgewählten {{htmlelement("option")}}-Elementinhalts eines {{htmlelement("select")}}-Elements, erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) im Hintergrund.

Jeder nachfolgende `<select>`-Inhalt wird in den Dropdown-Picker aufgenommen.

Immer wenn sich die ausgewählte `<option>` eines `<select>`-Elements von einer Option zu einer anderen ändert, wird der Inhalt des `<selectedcontent>`-Elements entfernt und durch eine neue geklonte Kopie der DOM-Struktur der neu ausgewählten <code>option</code> ersetzt, die mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) erstellt wird.

## Styling mit CSS

Es ist nützlich, den Inhalt der aktuell ausgewählten `<option>` innerhalb des Select-Buttons mit CSS-Stilen anzuvisieren, ohne das Styling des Inhalts im Picker zu beeinflussen.

Zum Beispiel können Ihre `<option>`-Elemente Icons, Bilder oder sogar Videos enthalten. Dieser Inhalt könnte im Picker gut aussehen, könnte aber den Select-Button vergrößern, unordentlich wirken und das umgebende Layout beeinflussen.

Dies könnte behoben werden, indem der problematische Inhalt versteckt wird, wenn er innerhalb von `<selectedcontent>` enthalten ist. Zum Beispiel:

```css
selectedcontent img {
  display: none;
}
```

> [!NOTE]
> Wenn die `<button>`- und/oder `<selectedcontent>`-Elemente nicht innerhalb des `<select>`-Markups enthalten sind, platziert der Browser den ausgewählten Optionsinhalt implizit im Select-Button, aber dieses Anvisieren ist dann nicht möglich.

## Beispiele

Ein komplettes Beispiel, das das `<selectedcontent>`-Element enthält, finden Sie in unserem [Leitfaden für anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
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
        Spiegelt den Inhalt der ausgewählten {{htmlelement("option")}} wider.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
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

Derzeit nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/html/pull/10633 für den relevanten Spezifikations-PR.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("select")}}-Element
- Das {{HTMLElement("option")}}-Element
- Das {{HTMLElement("optgroup")}}-Element
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
