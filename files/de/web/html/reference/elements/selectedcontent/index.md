---
title: "<selectedcontent>: Das Element zur Anzeige der ausgewählten Option"
slug: Web/HTML/Reference/Elements/selectedcontent
l10n:
  sourceCommit: fe7daa11ab05d6689bfb9dd65eadd7ad439d9941
---

{{HTMLSidebar}}{{SeeCompatTable}}{{non-standard_header}}

Das **`<selectedcontent>`**-Element [HTML](/de/docs/Web/HTML) kann verwendet werden, um den Inhalt der aktuell ausgewählten `<option>` innerhalb eines geschlossenen `<select>`-Elements anzuzeigen.

## Attribute

Das `<selectedcontent>`-Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), diese werden jedoch im Wesentlichen ignoriert, da das Element, wenn es korrekt als Kind eines Select-Buttons verwendet wird, [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert) gerendert wird.

Der Select-Button und all sein Inhalt sind standardmäßig träge, so dass, wenn interaktive Kinder (zum Beispiel Links oder Buttons) darin enthalten sind, er dennoch als einzelner Button betrachtet wird, was die Interaktion betrifft.

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

`<selectedcontent>` enthält einen Klon des aktuell ausgewählten {{htmlelement("option")}}-Elementinhalts eines {{htmlelement("select")}}-Elements, erstellt mittels [`cloneNode()`](/de/docs/Web/API/Node/cloneNode).

Jeglicher nachfolgende `<select>`-Inhalt wird im Dropdown-Picker enthalten sein.

Wann immer das ausgewählte `<option>`-Element eines `<select>`-Elements von einer Option zur anderen wechselt, wird der Inhalt des `<selectedcontent>`-Elements entfernt und durch eine neue geklonte Kopie der DOM-Struktur der neu ausgewählten `<option>` ersetzt, die ebenfalls mittels [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) erstellt wurde. Dynamische Änderungen am Inhalt des ausgewählten `<option>`-Elements, die nach der Erstellung des `<select>`-Elements vorgenommen werden, werden nicht automatisch zum `<selectedcontent>`-Element geklont und müssen manuell vom Entwickler aktualisiert werden.

> [!WARNING]
> Insbesondere kann dies Probleme bei Websites verursachen, die populäre JavaScript-Frameworks für die Front-End-Entwicklung verwenden, wo {{htmlelement("option")}}-Elemente nach ihrer Erstellung dynamisch aktualisiert werden, da diese Updates nicht zum `<selectedcontent>`-Element geklont werden.

## Stilgebung mit CSS

Es ist nützlich, den Inhalt des aktuell ausgewählten `<option>`-Elements gezielt mit CSS-Stilen anzusprechen, so wie er innerhalb des Select-Buttons erscheint, ohne dass dies die Gestaltung des Inhalts beeinflusst, wie er im Picker erscheint.

Zum Beispiel können Ihre `<option>`-Elemente Symbole, Bilder oder sogar Videos enthalten. Dieser Inhalt könnte im Picker schön aussehen, könnte aber dazu führen, dass der Select-Button größer wird, unordentlich aussieht und das umgebende Layout beeinflusst.

Dies könnte behoben werden, indem der problematische Inhalt verborgen wird, wenn er sich innerhalb von `<selectedcontent>` befindet. Zum Beispiel:

```css
selectedcontent img {
  display: none;
}
```

> [!NOTE]
> Wenn die `<button>`- und/oder `<selectedcontent>`-Elemente nicht innerhalb des `<select>`-Markup enthalten sind, wird der Browser den ausgewählten Optionsinhalt implizit innerhalb des Select-Buttons platzieren, aber dieses Targeting wird nicht möglich sein.

## Beispiele

Sie können ein vollständiges Beispiel, das das `<selectedcontent>`-Element enthält, in unserem [Leitfaden zu anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) sehen.

## Technische Übersicht

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
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Spiegelt den Inhalt der ausgewählten {{htmlelement("option")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
