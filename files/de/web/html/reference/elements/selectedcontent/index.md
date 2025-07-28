---
title: "<selectedcontent>: Das Anzeigeelement für die ausgewählte Option"
slug: Web/HTML/Reference/Elements/selectedcontent
l10n:
  sourceCommit: 66f1ba7918610f1145cde4a1d2d7ecb3baea5f65
---

{{SeeCompatTable}}

Das **`<selectedcontent>`** [HTML](/de/docs/Web/HTML)-Element kann verwendet werden, um den Inhalt des aktuell ausgewählten `<option>` innerhalb eines geschlossenen `<select>`-Elements anzuzeigen.

## Attribute

Das `<selectedcontent>`-Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), diese werden jedoch im Wesentlichen ignoriert, weil das Element, wenn es korrekt als Kind eines Select-Buttons verwendet wird, als [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert) gerendert wird.

Der Select-Button und sein gesamter Inhalt sind standardmäßig inert, sodass auch interaktive Kinder (wie Links oder Buttons) darin enthalten sein können und dennoch insgesamt wie ein einzelner Button behandelt werden.

Keine weiteren Attribute sind auf `<selectedcontent>` definiert.

## Beschreibung

Bei der Erstellung eines [anpassbaren Auswahlelements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) können Sie das `<selectedcontent>`-Element innerhalb eines {{htmlelement("button")}}-Elements einfügen, das wiederum das erste Kind des `<select>`-Elements sein muss:

```html
<select>
  <button>
    <selectedcontent></selectedcontent>
  </button>

  ...
</select>
```

`<selectedcontent>` enthält eine Kopie des momentan ausgewählten {{htmlelement("option")}}-Elementinhalts des {{htmlelement("select")}}-Elements, erstellt mittels [`cloneNode()`](/de/docs/Web/API/Node/cloneNode).

Jeder nachfolgende `<select>`-Inhalt wird im Dropdown-Picker enthalten sein.

Immer wenn sich die ausgewählte `<option>` im `<select>`-Element von einer Option auf eine andere ändert, wird der Inhalt des `<selectedcontent>`-Elements entfernt und durch eine neue kopierte Version der DOM-Struktur der neu ausgewählten `<option>` ersetzt, die mittels [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) erstellt wurde.
Dynamische Änderungen am Inhalt des ausgewählten `<option>`-Elements, die nach der Erstellung des `<select>`-Elements vorgenommen werden, werden nicht automatisch in das `<selectedcontent>`-Element übernommen und müssen vom Entwickler manuell aktualisiert werden.

> [!WARNING]
> Besonders problematisch kann dies bei Websites sein, die beliebte JavaScript-Frameworks für dynamische Frontend-Updates verwenden, wo {{htmlelement("option")}}-Elemente nach ihrer Erstellung aktualisiert werden, da diese Updates nicht in das `<selectedcontent>`-Element übernommen werden.

## Styling mit CSS

Es ist nützlich, den Inhalt des aktuell ausgewählten `<option>`-Elements im Select-Button mit CSS-Stilen zu versehen, ohne die Darstellung des Inhalts im Picker zu beeinflussen.

Zum Beispiel können Ihre `<option>`-Elemente Icons, Bilder oder sogar Videos enthalten. Dieser Inhalt könnte im Picker gut aussehen, könnte jedoch den Select-Button vergrößern, unordentlich wirken lassen und das umliegende Layout beeinflussen.

Dies kann behoben werden, indem der problematische Inhalt ausgeblendet wird, wenn er im `<selectedcontent>` enthalten ist. Zum Beispiel:

```css
selectedcontent img {
  display: none;
}
```

> [!NOTE]
> Wenn die `<button>`- und/oder `<selectedcontent>`-Elemente nicht innerhalb des `<select>`-Markups enthalten sind, platziert der Browser den Inhalt der ausgewählten Option implizit im Select-Button, aber diese gezielte Formatierung wird dann nicht möglich sein.

## Beispiele

Ein vollständiges Beispiel, das das `<selectedcontent>`-Element enthält, finden Sie in unserem [Leitfaden zu anpassbaren Auswahlelementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

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
      <td>Keine, sowohl der Anfangs- als auch der Endtag sind erforderlich.</td>
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

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("select")}}-Element
- Das {{HTMLElement("option")}}-Element
- Das {{HTMLElement("optgroup")}}-Element
- [Anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
