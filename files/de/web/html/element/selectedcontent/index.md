---
title: "<selectedcontent>: Das Anzeigeelement der ausgewählten Option"
slug: Web/HTML/Element/selectedcontent
l10n:
  sourceCommit: 44f398527f2b0195a7c3b35db0a53c80aebe8e48
---

{{HTMLSidebar}}{{SeeCompatTable}}{{non-standard_header}}

Das **`<selectedcontent>`** [HTML](/de/docs/Web/HTML)-Element kann verwendet werden, um den Inhalt der aktuell ausgewählten `<option>` in einem geschlossenen `<select>`-Element anzuzeigen.

## Attribute

Das `<selectedcontent>`-Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), diese werden jedoch im Wesentlichen ignoriert, da das Element, wenn es korrekt als Kind eines Auswahlknopfes verwendet wird, {{Glossary("inert", "inert")}} gerendert wird.

Der Auswahlknopf und all sein Inhalt sind standardmäßig inert, sodass er wie ein einzelner Knopf behandelt wird, selbst wenn interaktive Kinder (z. B. Links oder Schaltflächen) darin enthalten sind.

Keine weiteren Attribute sind für `<selectedcontent>` definiert.

## Beschreibung

Beim Erstellen eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) können Sie das `<selectedcontent>`-Element innerhalb eines {{htmlelement("button")}}-Elements einfügen, das wiederum das erste Kind des `<select>`-Elements sein muss:

```html
<select>
  <button>
    <selectedcontent></selectedcontent>
  </button>

  ...
</select>
```

`<selectedcontent>` enthält eine Kopie des derzeit im {{htmlelement("select")}}-Element ausgewählten {{htmlelement("option")}}-Elementinhalts, erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) im Hintergrund.

Jeder nachfolgende `<select>`-Inhalt wird im Dropdown-Auswahlinstrument enthalten sein.

Wann immer das ausgewählte `<option>`-Element von einem `<select>`-Element von einer Option zu einer anderen wechselt, wird der Inhalt des `<selectedcontent>`-Elements entfernt und durch eine neue geklonte Kopie der DOM-Struktur der neu ausgewählten <code>option</code> ersetzt, erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode).

## Stilierung mit CSS

Es ist nützlich, den Inhalt des aktuell ausgewählten `<option>`-Elements, wie er innerhalb des Auswahlknopfes erscheint, mit CSS-Stilen anzuvisieren, ohne die Stilierung des Inhalts innerhalb des Auswahlinstruments zu beeinflussen.

Ihre `<option>`-Elemente könnten beispielsweise Symbole, Bilder oder sogar Videos enthalten. Dieser Inhalt sieht möglicherweise innerhalb des Auswahlinstruments gut aus, könnte jedoch dazu führen, dass der Auswahlknopf größer wird, unordentlich aussieht und das umliegende Layout beeinträchtigt.

Dies könnte behoben werden, indem der problematische Inhalt ausgeblendet wird, wenn er innerhalb von `<selectedcontent>` enthalten ist. Beispielsweise:

```css
selectedcontent img {
  display: none;
}
```

> [!NOTE]
> Wenn die `<button>`- und/oder `<selectedcontent>`-Elemente nicht innerhalb des `<select>`-Markups enthalten sind, wird der ausgewählte Optionsinhalt implizit in den Auswahlknopf eingefügt, aber diese Zuordnung wird nicht möglich sein.

## Beispiele

Ein vollständiges Beispiel, das das `<selectedcontent>`-Element beinhaltet, finden Sie in unserem [Leitfaden für anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

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
        Spiegelt den Inhalt des ausgewählten {{htmlelement("option")}} wider.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind erforderlich.</td>
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

Gehört derzeit nicht zu einer Spezifikation. Siehe https://github.com/whatwg/html/pull/10633 für den relevanten Spezifikations-PR.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("select")}}-Element
- Das {{HTMLElement("option")}}-Element
- Das {{HTMLElement("optgroup")}}-Element
- [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
