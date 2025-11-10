---
title: "<selectedcontent>: Das ausgewählte Anzeigefeld"
slug: Web/HTML/Reference/Elements/selectedcontent
l10n:
  sourceCommit: 6eae35bc64a49865a469ca29bc40e6993b9cb8cc
---

{{SeeCompatTable}}

Das **`<selectedcontent>`** [HTML](/de/docs/Web/HTML) wird innerhalb eines {{htmlelement("select")}}-Elements verwendet, um den Inhalt des aktuell ausgewählten {{htmlelement("option")}}-Elements innerhalb seines ersten Kind-{{htmlelement("button")}} anzuzeigen. Dies ermöglicht es Ihnen, alle Teile eines `<select>`-Elements zu stylen, die als "[anpassbare Auswahlfelder](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)" bezeichnet werden.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beschreibung

Das `<selectedcontent>`-Element wird als einziges Kind eines {{htmlelement("button")}}-Elements verwendet, das das erste Kind des {{htmlelement("select")}}-Elements sein muss. Jedes {{htmlelement("option")}}-Element, das einzige weitere gültige Kind von `<select>`, muss nach dem `<button>` und dem verschachtelten `<selectedcontent>`-Paar kommen.

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

Das `<selectedcontent>`-Element enthält eine Kopie des Inhalts des aktuell ausgewählten {{htmlelement("option")}}. Der Browser rendert diese Kopie mithilfe von [`cloneNode()`](/de/docs/Web/API/Node/cloneNode). Wenn sich die ausgewählte `<option>` ändert, beispielsweise während eines [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisses, wird der Inhalt von `<selectedcontent>` durch eine Kopie der neu ausgewählten `<option>` ersetzt. Bewusstsein über dieses Verhalten ist wichtig, besonders bei der Arbeit mit dynamischen Inhalten.

> [!WARNING]
> Da der Browser `<selectedcontent>` nur aktualisiert, wenn sich die ausgewählte `<option>` ändert, werden dynamische Änderungen am Inhalt der ausgewählten `<option>` nach dem Rendern des `<select>` nicht in `<selectedcontent>` kopiert. Sie müssen `<selectedcontent>` manuell aktualisieren. Achten Sie darauf, wenn Sie eines der beliebten Front-End-JavaScript-Frameworks verwenden, bei denen `<option>`-Elemente dynamisch nach dem ersten Rendern aktualisiert werden–das Ergebnis könnte nicht dem entsprechen, was Sie in `<selectedcontent>` erwarten.

### `<selectedcontent>`-Inertheit

Standardmäßig ist jedes `<button>` innerhalb eines `<select>`-Elements [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert). Infolgedessen ist auch der gesamte Inhalt innerhalb dieses Buttons—einschließlich `<selectedcontent>`—inert.
Das bedeutet, dass Benutzer nicht mit dem Inhalt innerhalb von `<selectedcontent>` interagieren oder darauf fokussieren können.

### Styling des Inhalts der ausgewählten Option mit CSS

Sie können den Inhalt des aktuell ausgewählten `<option>`-Elements anvisieren und stylen, wie er innerhalb des Auswahlbuttons erscheint. Das Stylen des Buttons beeinflusst nicht das Styling des Inhalts der kopierten `<option>`. Dies ermöglicht es Ihnen, das Erscheinungsbild der ausgewählten Option im Button unabhängig von ihrem Erscheinungsbild in der Dropdown-Liste anzupassen.

Zum Beispiel können Ihre `<option>`-Elemente Symbole, Bilder oder sogar Videos enthalten, die in der Dropdown-Liste gut dargestellt werden, aber dazu führen können, dass der Auswahl-`<button>` an Größe zunimmt, unordentlich aussieht und die umliegende Anordnung beeinflusst. Indem Sie den Inhalt innerhalb von `<selectedcontent>` anvisieren, können Sie Elemente wie Bilder im Button ausblenden, ohne zu beeinflussen, wie sie in der Dropdown-Liste erscheinen, wie im folgenden Code-Beispiel gezeigt:

```css
selectedcontent img {
  display: none;
}
```

> [!NOTE]
> Wenn die `<button>`- und/oder `<selectedcontent>`-Elemente nicht innerhalb von `<select>` enthalten sind, erstellt der Browser einen impliziten `<button>`, um den Inhalt der ausgewählten `<option>` anzuzeigen. Dieser Rückfall-Button kann nicht mit CSS unter Verwendung des `button` oder `selectedcontent`-Typs selektiert werden.

## Beispiele

Ein vollständiges Beispiel, das das `<selectedcontent>`-Element enthält, finden Sie in unserem [Leitfaden für anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

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
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
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
- [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
