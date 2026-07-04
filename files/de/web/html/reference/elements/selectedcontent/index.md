---
title: "`<selectedcontent>` HTML Auswahl-Option Anzeigeelement"
short-title: <selectedcontent>
slug: Web/HTML/Reference/Elements/selectedcontent
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

Das **`<selectedcontent>`** [HTML](/de/docs/Web/HTML) wird innerhalb eines {{htmlelement("select")}}-Elements verwendet, um den Inhalt der aktuell ausgewählten {{htmlelement("option")}} innerhalb seines ersten Kind-{{htmlelement("button")}} anzuzeigen. Dies ermöglicht Ihnen, alle Teile eines `<select>`-Elements zu gestalten, die als "[anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)" bezeichnet werden.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beschreibung

Sie verwenden das `<selectedcontent>`-Element als das einzige Kind eines {{htmlelement("button")}}-Elements, das das erste Kind des {{htmlelement("select")}}-Elements sein muss. Jedes {{htmlelement("option")}}-Element, das einzige andere gültige Kind von `<select>`, muss nach dem `<button>` und dem verschachtelten `<selectedcontent>`-Paar folgen.

```html
<select>
  <button>
    <selectedcontent></selectedcontent>
  </button>
  <option></option>
  ...
</select>
```

### Funktionsweise von `<selectedcontent>` im Hintergrund

Das `<selectedcontent>`-Element enthält einen Klon des Inhalts der aktuell ausgewählten {{htmlelement("option")}}. Der Browser rendert diesen Klon mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode). Wenn sich die ausgewählte `<option>` ändert, zum Beispiel während eines [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisses, werden die Inhalte von `<selectedcontent>` durch einen Klon der neu ausgewählten `<option>` ersetzt. Es ist wichtig, sich dieses Verhaltens bewusst zu sein, insbesondere wenn Sie mit dynamischen Inhalten arbeiten.

> [!WARNING]
> Da der Browser `<selectedcontent>` nur aktualisiert, wenn sich die ausgewählte `<option>` ändert, werden dynamische Änderungen am Inhalt der ausgewählten `<option>` nach dem Rendern des `<select>` nicht in `<selectedcontent>` geklont. Sie müssen `<selectedcontent>` manuell aktualisieren. Seien Sie vorsichtig, wenn Sie eines der beliebten JavaScript-Frameworks für Frontend verwenden, bei denen `<option>`-Elemente nach dem initialen Rendern dynamisch aktualisiert werden – das Ergebnis in `<selectedcontent>` könnte nicht dem entsprechen, was Sie erwarten.

### Inertheit von `<selectedcontent>`

Standardmäßig ist jedes `<button>` innerhalb eines `<select>`-Elements [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert). Infolgedessen ist auch der gesamte Inhalt innerhalb dieses Buttons – einschließlich `<selectedcontent>` – inert. Das bedeutet, dass Benutzer nicht mit dem Inhalt in `<selectedcontent>` interagieren oder ihn fokussieren können.

### Gestalten des Inhalts der ausgewählten Option mit CSS

Sie können den Inhalt des aktuell ausgewählten `<option>`-Elements anvisieren und gestalten, wie es innerhalb des Auswahl-Buttons erscheint. Das Styling des Buttons hat keinen Einfluss auf das Styling des Inhalts der `<option>`, das geklont wurde. Dies ermöglicht es Ihnen, wie die ausgewählte Option im Button erscheint, unabhängig davon anzupassen, wie sie in der Dropdown-Liste erscheint.

Zum Beispiel können Ihre `<option>`-Elemente Symbole, Bilder oder sogar Videos enthalten, die schön innerhalb des Dropdowns dargestellt werden, aber der Auswahl-`<button>` könnte dadurch in der Größe zunehmen, unordentlich aussehen und das umgebende Layout beeinflussen. Indem Sie den Inhalt innerhalb von `<selectedcontent>` anvisieren, können Sie Elemente wie Bilder im Button ausblenden, ohne zu beeinflussen, wie sie im Dropdown erscheinen, wie im folgenden Ausschnitt gezeigt:

```css
selectedcontent img {
  display: none;
}
```

> [!NOTE]
> Wenn die `<button>`- und/oder `<selectedcontent>`-Elemente nicht innerhalb von `<select>` enthalten sind, erstellt der Browser ein implizites `<button>`, um den Inhalt der ausgewählten `<option>` anzuzeigen. Dieser Ersatz-Button kann nicht mit CSS unter Verwendung des `button`- oder `selectedcontent`-Typselektors anvisiert werden.

## Beispiele

Ein vollständiges Beispiel, das das `<selectedcontent>`-Element enthält, finden Sie in unserem [Leitfaden zu anpassbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

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
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
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
