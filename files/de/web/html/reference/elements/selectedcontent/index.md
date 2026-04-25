---
title: "`<selectedcontent>` HTML ausgewähltes Optionsanzeigeelement"
short-title: <selectedcontent>
slug: Web/HTML/Reference/Elements/selectedcontent
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{SeeCompatTable}}

Das **`<selectedcontent>`** [HTML](/de/docs/Web/HTML) wird innerhalb eines {{htmlelement("select")}}-Elements verwendet, um den Inhalt der aktuell ausgewählten {{htmlelement("option")}} innerhalb seines ersten Kind-{{htmlelement("button")}} anzuzeigen. Dies ermöglicht es Ihnen, alle Teile eines `<select>`-Elements zu stylen, die als "[anpassbare Auswahlen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)" bezeichnet werden.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beschreibung

Verwenden Sie das `<selectedcontent>`-Element als einziges Kind eines {{htmlelement("button")}}-Elements, das das erste Kind des {{htmlelement("select")}}-Elements sein muss. Jedes andere {{htmlelement("option")}}-Element, das einzige andere gültige Kind von `<select>`, muss nach dem `<button>` und dem eingebetteten `<selectedcontent>`-Paar kommen.

```html
<select>
  <button>
    <selectedcontent></selectedcontent>
  </button>
  <option></option>
  ...
</select>
```

### Wie `<selectedcontent>` im Hintergrund funktioniert

Das `<selectedcontent>`-Element enthält eine Kopie des Inhalts der aktuell ausgewählten {{htmlelement("option")}}. Der Browser rendert diese Kopie unter Verwendung von [`cloneNode()`](/de/docs/Web/API/Node/cloneNode). Wenn sich die ausgewählte `<option>` ändert, etwa bei einem [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis, wird der Inhalt von `<selectedcontent>` durch eine Kopie der neu ausgewählten `<option>` ersetzt. Es ist wichtig, dieses Verhalten zu verstehen, insbesondere wenn Sie mit dynamischen Inhalten arbeiten.

> [!WARNING]
> Da der Browser `<selectedcontent>` nur dann aktualisiert, wenn sich die ausgewählte `<option>` ändert, werden alle dynamischen Änderungen am Inhalt der ausgewählten `<option>` nach dem Rendern des `<select>` nicht in `<selectedcontent>` kopiert. Sie müssen `<selectedcontent>` manuell aktualisieren. Seien Sie vorsichtig, wenn Sie eines der beliebten Front-End-JavaScript-Frameworks verwenden, bei denen `<option>`-Elemente nach dem initialen Rendern dynamisch aktualisiert werden – das Ergebnis in `<selectedcontent>` kann möglicherweise nicht den Erwartungen entsprechen.

### `<selectedcontent>` Untätigkeit

Standardmäßig ist jedes `<button>` innerhalb eines `<select>`-Elements [inaktiv](/de/docs/Web/HTML/Reference/Global_attributes/inert). Infolgedessen ist auch der gesamte Inhalt innerhalb dieses Buttons – einschließlich `<selectedcontent>` – inaktiv. Das bedeutet, dass Benutzer nicht mit dem Inhalt von `<selectedcontent>` interagieren oder ihn fokussieren können.

### Styling des Inhalts der ausgewählten Option mit CSS

Sie können den Inhalt des derzeit ausgewählten `<option>`-Elements anvisieren und stylen, wie es innerhalb des Auswahl-Buttons erscheint. Das Styling des Buttons beeinflusst nicht das Styling des Inhalts der kopierten `<option>`. Dies ermöglicht es Ihnen, das Erscheinungsbild der ausgewählten Option im Button anzupassen, unabhängig davon, wie sie in der Dropdown-Liste erscheint.

Zum Beispiel können Ihre `<option>`-Elemente Icons, Bilder oder sogar Videos enthalten, die im Dropdown schön dargestellt werden, aber den `<button>` der Auswahl vergrößern, unordentlich aussehen lassen und das umliegende Layout beeinflussen könnten. Indem Sie den Inhalt in `<selectedcontent>` anvisieren, können Sie Elemente wie Bilder im Button ausblenden, ohne zu beeinflussen, wie sie im Dropdown erscheinen, wie im folgenden Ausschnitt gezeigt:

```css
selectedcontent img {
  display: none;
}
```

> [!NOTE]
> Wenn die `<button>`- und/oder `<selectedcontent>`-Elemente nicht innerhalb von `<select>` enthalten sind, erstellt der Browser einen impliziten `<button>`, um den Inhalt der ausgewählten `<option>` anzuzeigen. Dieser Ersatz-Button kann nicht mit CSS unter Verwendung des `button` oder `selectedcontent` Typselektors anvisiert werden.

## Beispiele

Sie können ein vollständiges Beispiel sehen, das das `<selectedcontent>`-Element in unserem [Leitfaden für anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) beinhaltet.

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
- [Anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
