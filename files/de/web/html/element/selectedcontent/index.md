---
title: "<selectedcontent>: Das Anzeigefeld für die ausgewählte Option"
slug: Web/HTML/Element/selectedcontent
l10n:
  sourceCommit: 20cff31570e35c6da44ddd84158fcebd9f4f42d9
---

{{HTMLSidebar}}{{SeeCompatTable}}{{non-standard_header}}

Das **`<selectedcontent>`** [HTML](/de/docs/Web/HTML)-Element kann verwendet werden, um den Inhalt der derzeit ausgewählten `<option>` innerhalb eines geschlossenen `<select>`-Elements anzuzeigen.

## Attribute

Das `<selectedcontent>`-Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), diese werden jedoch im Wesentlichen ignoriert, da das Element, wenn es korrekt als untergeordnetes Element eines Select-Buttons verwendet wird, [träge](/de/docs/Web/HTML/Global_attributes/inert) dargestellt wird.

Der Select-Button und all sein Inhalt sind standardmäßig träge, sodass, wenn interaktive Kinder (zum Beispiel Links oder Buttons) darin enthalten sind, er weiterhin als einzelner Button zu Interaktionszwecken behandelt wird.

Keine anderen Attribute sind auf `<selectedcontent>` definiert.

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

`<selectedcontent>` enthält einen Klon des Inhalts des derzeit im {{htmlelement("select")}}-Element ausgewählten {{htmlelement("option")}}-Elements, erstellt mithilfe von [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) im Hintergrund.

Jeder weitere `<select>`-Inhalt wird im Dropdown-Auswahlelement enthalten sein.

Immer wenn das `<select>`-Element von einer `<option>` zur nächsten wechselt, wird der Inhalt des `<selectedcontent>`-Elements entfernt und durch eine neue geklonte Kopie der DOM-Struktur der neu ausgewählten <code>option</code> ersetzt, erstellt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode).

## Gestaltung mit CSS

Es ist nützlich, den Inhalt des derzeit ausgewählten `<option>`-Elements anzuvisieren, wie er innerhalb des Select-Buttons mit CSS-Stilen erscheint, ohne die Gestaltung des Inhalts zu beeinflussen, wie er im Auswahlelement erscheint.

Zum Beispiel können Ihre `<option>`-Elemente Symbole, Bilder oder sogar Videos enthalten. Dieser Inhalt könnte innerhalb des Auswahlelements schön aussehen, könnte jedoch dazu führen, dass der Select-Button größer wird, unordentlich aussieht und das umgebende Layout beeinflusst.

Dies könnte behoben werden, indem der problematische Inhalt ausgeblendet wird, wenn er innerhalb von `<selectedcontent>` enthalten ist. Zum Beispiel:

```css
selectedcontent img {
  display: none;
}
```

> [!NOTE]
> Wenn die `<button>`- und/oder `<selectedcontent>`-Elemente nicht innerhalb der `<select>`-Markup enthalten sind, platziert der Browser den ausgewählten Optionsinhalt implizit innerhalb des Select-Buttons, aber dieses Targeting wird nicht möglich sein.

## Beispiele

Sie können ein vollständiges Beispiel sehen, das das `<selectedcontent>`-Element in unserem [Leitfaden zu anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) enthält.

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

Derzeit nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/html/pull/10633 für den relevanten Spezifikations-PR.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("select")}}-Element
- Das {{HTMLElement("option")}}-Element
- Das {{HTMLElement("optgroup")}}-Element
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
