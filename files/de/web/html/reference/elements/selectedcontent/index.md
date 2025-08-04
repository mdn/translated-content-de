---
title: "<selectedcontent>: Das ausgewählte Optionsanzeige-Element"
slug: Web/HTML/Reference/Elements/selectedcontent
l10n:
  sourceCommit: 1f03b20ac7ae1713b15fa3cbc1a7390220774792
---

{{SeeCompatTable}}

Das **`<selectedcontent>`** [HTML](/de/docs/Web/HTML) wird innerhalb eines {{htmlelement("select")}}-Elements verwendet, um den Inhalt der derzeit ausgewählten {{htmlelement("option")}} innerhalb seines ersten Kind-{{htmlelement("button")}} anzuzeigen. Dies ermöglicht es, alle Teile eines `<select>`-Elements zu gestalten, was als "[anpassbare Selects](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)" bezeichnet wird.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beschreibung

Sie verwenden das `<selectedcontent>`-Element als einziges Kind eines {{htmlelement("button")}}-Elements, welches das erste Kind des {{htmlelement("select")}}-Elements sein muss. Jedes {{htmlelement("option")}}-Element, das einzige andere gültige Kind von `<select>`, muss nach dem `<button>` und dem verschachtelten `<selectedcontent>`-Paar folgen.

```html
<select>
  <button>
    <selectedcontent></selectedcontent>
  </button>
  <option></option>
  ...
</select>
```

### Wie `<selectedcontent>` hinter den Kulissen arbeitet

Das `<selectedcontent>`-Element enthält einen Klon des Inhalts der aktuell ausgewählten {{htmlelement("option")}}. Der Browser rendert diesen Klon mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode). Wenn sich die ausgewählte `<option>` ändert, wie z.B. während eines [`change`](HTMLElement/change_event)-Ereignisses, wird der Inhalt von `<selectedcontent>` durch einen Klon der neu ausgewählten `<option>` ersetzt. Sich dieses Verhaltens bewusst zu sein ist wichtig, insbesondere wenn Sie mit dynamischen Inhalten arbeiten.

> [!WARNING]
> Da der Browser `<selectedcontent>` nur aktualisiert, wenn sich die ausgewählte `<option>` ändert, wird jede dynamische Änderung am Inhalt der ausgewählten `<option>` nach dem Rendern des `<select>` nicht zu `<selectedcontent>` geklont. Sie müssen `<selectedcontent>` manuell aktualisieren. Achten Sie darauf, wenn Sie eines der bekannten JavaScript-Frameworks für Front-End verwenden, bei dem `<option>`-Elemente dynamisch nach der ersten Darstellung aktualisiert werden – das Ergebnis kann möglicherweise nicht dem entsprechen, was Sie in `<selectedcontent>` erwarten.

### `<selectedcontent>` Unbeweglichkeit

Standardmäßig ist jeder `<button>` innerhalb eines `<select>`-Elements [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert). Folglich ist auch aller Inhalt innerhalb dieses Buttons — einschließlich `<selectedcontent>` — inert. Das bedeutet, dass Benutzer nicht mit dem Inhalt innerhalb von `<selectedcontent>` interagieren oder darauf fokussieren können.

### Styling des Inhalts der ausgewählten Option mit CSS

Sie können den Inhalt des derzeit ausgewählten `<option>`-Elements anvisieren und gestalten, wie er im Select-Button erscheint. Das Styling des Buttons hat keine Auswirkungen auf das Styling des Inhalts der `<option>`, die geklont wurde. Dies ermöglicht es Ihnen, das Erscheinungsbild der ausgewählten Option im Button anzupassen, unabhängig davon, wie sie in der Drop-down-Liste erscheint.

Zum Beispiel können Ihre `<option>`-Elemente Symbole, Bilder oder sogar Videos enthalten, die in der Drop-down-Liste gut gerendert werden, aber den Select-`<button>` vergrößern, unordentlich aussehen lassen und das umliegende Layout beeinflussen könnten. Indem Sie den Inhalt innerhalb von `<selectedcontent>` anvisieren, können Sie Elemente, wie Bilder, im Button ausblenden, ohne zu beeinflussen, wie sie in der Dropdown-Liste erscheinen, wie im folgenden Snippet gezeigt:

```css
selectedcontent img {
  display: none;
}
```

> [!NOTE]
> Wenn die Elemente `<button>` und/oder `<selectedcontent>` nicht innerhalb `<select>` enthalten sind, erstellt der Browser implizit ein `<button>`, um den Inhalt der ausgewählten `<option>` anzuzeigen. Dieser Ersatz-Button kann nicht mit CSS unter Verwendung des `button` oder `selectedcontent` Type-Selectors angesteuert werden.

## Beispiele

Sie können ein vollständiges Beispiel sehen, das das `<selectedcontent>`-Element in unserem [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) Leitfaden enthält.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Content-Kategorien</a
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
      <td>Keine, sowohl das Start- als auch das Endtag sind zwingend erforderlich.</td>
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
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
