---
title: "<selectedcontent>: Das ausgewählte Optionen-Anzeigeelement"
slug: Web/HTML/Reference/Elements/selectedcontent
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{SeeCompatTable}}{{non-standard_header}}

Das **`<selectedcontent>`** [HTML](/de/docs/Web/HTML) Element kann verwendet werden, um den Inhalt der aktuell ausgewählten `<option>` innerhalb eines geschlossenen `<select>` Elements anzuzeigen.

## Attribute

Das `<selectedcontent>` Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), aber diese werden im Wesentlichen ignoriert, da das Element, wenn korrekt als Kind eines Select-Buttons verwendet, [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert) gerendert wird.

Der Select-Button und sein gesamter Inhalt sind standardmäßig inert, sodass, wenn interaktive Kinder (zum Beispiel Links oder Buttons) darin enthalten sind, es trotzdem als einzelner Button für Interaktionszwecke behandelt wird.

Weitere Attribute sind auf `<selectedcontent>` nicht definiert.

## Beschreibung

Beim Erstellen eines [anpassbaren Select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) können Sie das `<selectedcontent>` Element innerhalb eines {{htmlelement("button")}} Elements einfügen, welches wiederum das erste Kind des `<select>` Elements sein muss:

```html
<select>
  <button>
    <selectedcontent></selectedcontent>
  </button>

  ...
</select>
```

`<selectedcontent>` enthält einen Klon des aktuell ausgewählten {{htmlelement("option")}} Elements eines {{htmlelement("select")}} Elements, der mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) im Hintergrund erstellt wird.

Jeder nachfolgende `<select>` Inhalt wird im Dropdown-Menü enthalten sein.

Wann immer das `<select>` Element von einer Option zu einer anderen wechselt, wird der Inhalt des `<selectedcontent>` Elements entfernt und durch eine neue geklonte Kopie der DOM-Struktur der neu ausgewählten `<option>` ersetzt, die mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) erstellt wurde. Dynamische Änderungen am Inhalt des ausgewählten `<option>` Elements, die nach dem Erstellen des `<select>` Elements vorgenommen werden, werden nicht automatisch auf das `<selectedcontent>` Element geklont und müssen manuell vom Entwickler aktualisiert werden.

> [!WARNING]
> Insbesondere kann dies Probleme bei Websites verursachen, die populäre Frontend-JavaScript-Frameworks verwenden, bei denen {{htmlelement("option")}} Elemente nach der Erstellung dynamisch aktualisiert werden, da diese Aktualisierungen nicht auf das `<selectedcontent>` Element geklont werden.

## Styling mit CSS

Es ist nützlich, den Inhalt des aktuell ausgewählten `<option>` Elements zu gestalten, wie er im Select-Button erscheint, ohne das Styling des Inhalts zu beeinflussen, wie er im Picker erscheint.

Zum Beispiel können Ihre `<option>` Elemente Symbole, Bilder oder sogar Videos enthalten. Dieser Inhalt mag im Picker schön aussehen, kann aber dazu führen, dass der Select-Button größer wird, unordentlich aussieht und das umgebende Layout beeinträchtigt.

Das könnte behoben werden, indem der problematische Inhalt ausgeblendet wird, wenn er in `<selectedcontent>` enthalten ist. Zum Beispiel:

```css
selectedcontent img {
  display: none;
}
```

> [!NOTE]
> Wenn die `<button>` und/oder `<selectedcontent>` Elemente nicht innerhalb des `<select>` Markups enthalten sind, wird der Browser den ausgewählten Optionen-Inhalt implizit im Select-Button platzieren, jedoch wird dieses Targeting nicht möglich sein.

## Beispiele

Sie können ein vollständiges Beispiel, das das `<selectedcontent>` Element enthält, in unserem [Leitfaden zu anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) sehen.

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
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        Spiegelt Inhalte aus der ausgewählten {{htmlelement("option")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{htmlelement("button")}} Element, das das erste Kind eines {{htmlelement("select")}} Elements ist.
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

Momentan nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/html/pull/10633 für den relevanten Spezifikations-PR.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("select")}} Element
- Das {{HTMLElement("option")}} Element
- Das {{HTMLElement("optgroup")}} Element
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
