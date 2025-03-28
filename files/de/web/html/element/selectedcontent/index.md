---
title: "<selectedcontent>: Das Anzeigeelement der ausgewählten Option"
slug: Web/HTML/Element/selectedcontent
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{HTMLSidebar}}

Das **`<selectedcontent>`** [HTML](/de/docs/Web/HTML) Element kann verwendet werden, um den Inhalt der aktuell ausgewählten `<option>` innerhalb eines geschlossenen `<select>`-Elements anzuzeigen.

## Attribute

Das `<selectedcontent>`-Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), aber diese werden im Wesentlichen ignoriert, da das Element korrekt als Kind eines Select-Buttons verwendet wird und als {{Glossary("inert", "inert")}} gerendert wird.

Der Select-Button und sein gesamter Inhalt sind standardmäßig inert, sodass interaktive Kinder (zum Beispiel Links oder Buttons) als einzelner Button für Interaktionszwecke behandelt werden.

Keine weiteren Attribute sind auf `<selectedcontent>` definiert.

## Beschreibung

Beim Erstellen eines [anpassbaren Select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) können Sie das `<selectedcontent>`-Element innerhalb eines {{htmlelement("button")}}-Elements einfügen, das wiederum das erste Kind des `<select>`-Elements sein muss:

```html
<select>
  <button>
    <selectedcontent></selectedcontent>
  </button>

  ...
</select>
```

`<selectedcontent>` enthält eine Kopie des aktuell ausgewählten Inhalts des {{htmlelement("option")}}-Elements eines {{htmlelement("select")}}-Elements, erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) im Hintergrund.

Jeder folgende `<select>`-Inhalt wird im Dropdown-Auswahlelement enthalten sein.

Immer wenn das ausgewählte `<option>`-Element des `<select>`-Elements von einer Option zu einer anderen wechselt, wird der Inhalt des `<selectedcontent>`-Elements entfernt und durch eine neue, geklonte Kopie der DOM-Struktur der neu ausgewählten <code>option</code> ersetzt, die mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) erstellt wird.

## Styling mit CSS

Es ist nützlich, den Inhalt des aktuell ausgewählten `<option>`-Elements innerhalb des Select-Buttons mit CSS-Stilen ansprechen zu können, ohne das Styling des Inhalts im Auswahlelement zu beeinflussen.

Zum Beispiel können Ihre `<option>`-Elemente Icons, Bilder oder sogar Videos enthalten. Dieser Inhalt könnte im Auswahlelement gut aussehen, aber den Select-Button vergrößern, unordentlich aussehen lassen und das umliegende Layout beeinflussen.

Dies könnte behoben werden, indem der problematische Inhalt verborgen wird, wenn er innerhalb von `<selectedcontent>` enthalten ist. Zum Beispiel:

```css
selectedcontent img {
  display: none;
}
```

> [!NOTE]
> Wenn die Elemente `<button>` und/oder `<selectedcontent>` nicht im `<select>`-Markup enthalten sind, wird der Browser den Inhalt der ausgewählten Option implizit im Select-Button platzieren, aber dieses Targeting wird nicht möglich sein.

## Beispiele

Sie können ein vollständiges Beispiel, das das `<selectedcontent>`-Element enthält, in unserem [anpassbaren Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) Leitfaden sehen.

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
        Spiegelt den Inhalt der ausgewählten {{htmlelement("option")}} wider.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Anfangs- als auch End-Tag sind obligatorisch.</td>
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
