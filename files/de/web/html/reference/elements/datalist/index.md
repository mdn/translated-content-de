---
title: HTML-Element `<datalist>` für Datenlisten
short-title: <datalist>
slug: Web/HTML/Reference/Elements/datalist
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

Das **`<datalist>`**-Element von [HTML](/de/docs/Web/HTML) enthält eine Gruppe von {{HTMLElement("option")}}-Elementen, die zulässige oder empfohlene Optionen für die Auswahl in anderen Steuerelementen darstellen.

{{InteractiveExample("HTML Demo: &lt;datalist&gt;", "tabbed-standard")}}

```html interactive-example
<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
  <option value="Chocolate"></option>
  <option value="Coconut"></option>
  <option value="Mint"></option>
  <option value="Strawberry"></option>
  <option value="Vanilla"></option>
</datalist>
```

```css interactive-example
label {
  display: block;
  margin-bottom: 10px;
}
```

## Attribute

Dieses Element besitzt außer den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes), die für alle Elemente gelten, keine weiteren Attribute.

## Verwendungshinweise

Um das `<datalist>`-Element mit einem Steuerelement zu verknüpfen, weisen Sie ihm über das Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) einen eindeutigen Bezeichner zu. Fügen Sie dann dem {{HTMLElement("input")}}-Element das Attribut [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) hinzu und verwenden Sie denselben Bezeichner als Wert.
Nur bestimmte Typen von {{HTMLElement("input")}} unterstützen dieses Verhalten; zudem kann es je nach Browser variieren.

Jedes `<option>`-Element sollte ein `value`-Attribut besitzen, dessen Wert als Eingabevorschlag dient. Es kann außerdem ein `label`-Attribut oder, falls dieses fehlt, Textinhalt enthalten. Der Browser kann diesen Text anstelle von `value` (Firefox) oder zusätzlich zu `value` (Chrome und Safari, als ergänzenden Text) anzeigen. Der genaue Inhalt des Dropdown-Menüs hängt vom Browser ab. Bei der Auswahl eines Eintrags wird jedoch stets der Wert des `value`-Attributs in das Steuerelement übernommen.

> [!NOTE]
> `<datalist>` ist kein Ersatz für {{HTMLElement("select")}}. Ein `<datalist>` stellt selbst kein Eingabefeld dar, sondern eine Liste vorgeschlagener Werte für ein zugeordnetes Steuerelement. Das Steuerelement kann weiterhin jeden Wert annehmen, der die Validierung besteht, auch wenn er nicht in der Vorschlagsliste steht.

## Barrierefreiheit

Wenn Sie das `<datalist>`-Element verwenden möchten, sollten Sie folgende Aspekte der Barrierefreiheit berücksichtigen:

- Die Schriftgröße der Optionen in der Datenliste bleibt beim Zoomen unverändert. Der Inhalt der Vorschlagsliste wird nicht größer oder kleiner, wenn der übrige Inhalt vergrößert oder verkleinert wird.
- Da sich die Optionsliste mit CSS kaum oder gar nicht gezielt ansprechen lässt, kann ihre Darstellung nicht für den Modus mit hohem Kontrast angepasst werden.
- Einige Kombinationen aus Screenreader und Browser, darunter NVDA mit Firefox, kündigen den Inhalt des Pop-ups mit Eingabevorschlägen nicht an.

## Beispiele

### Textbasierte Typen

Empfohlene Werte für die Typen {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/number", "number")}} werden in einem Dropdown-Menü angezeigt, wenn Sie auf das Steuerelement klicken oder doppelklicken.
Üblicherweise weist auch ein Pfeil auf der rechten Seite des Steuerelements auf die vordefinierten Werte hin.

```html
<label for="myBrowser">Choose a browser from this list:</label>
<input list="browsers" id="myBrowser" name="myBrowser" />
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
  <option value="Microsoft Edge"></option>
</datalist>
```

{{EmbedLiveSample("Textual_types", 600, 40)}}

### Datums- und Uhrzeittypen

Die Typen {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} können eine Benutzeroberfläche zur bequemen Auswahl von Datum und Uhrzeit anzeigen.
Dort können vordefinierte Werte angezeigt werden, mit denen sich das Steuerelement schnell ausfüllen lässt.

> [!NOTE]
> Wenn diese Typen nicht unterstützt werden, wird stattdessen ein einfaches Eingabefeld vom Typ `text` dargestellt. Dieses Feld erkennt empfohlene Werte und zeigt sie in einem Dropdown-Menü an.

```html
<input type="time" list="popularHours" />
<datalist id="popularHours">
  <option value="12:00"></option>
  <option value="13:00"></option>
  <option value="14:00"></option>
</datalist>
```

{{EmbedLiveSample("Date_and_Time_types", 600, 40)}}

### Typ für Wertebereiche

Wenn `<option>`-Elemente einer Datenliste, die einem Eingabefeld vom Typ {{HTMLElement("input/range", "range")}} zugeordnet ist, `value`-Attribute besitzen, werden deren Werte als Reihe von Markierungen angezeigt, die sich leicht auswählen lassen.

```html
<label for="tick">Tip amount:</label>
<input type="range" list="tickmarks" min="0" max="100" id="tick" name="tick" />
<datalist id="tickmarks">
  <option value="0" label="0%"></option>
  <option value="10" label="Minimum Tip"></option>
  <option value="20" label="Standard"></option>
  <option value="30" label="Generous"></option>
  <option value="50" label="Very Generous"></option>
</datalist>
```

{{EmbedLiveSample("Range_type", 600, 70)}}

> [!NOTE]
> Das `label`-Attribut ist laut [HTML-Standard](<https://html.spec.whatwg.org/multipage/input.html#range-state-(type=range)>) dafür vorgesehen, die Markierungen zu beschriften. Die Browser-Unterstützung ist jedoch unterschiedlich: Beschriftungen werden möglicherweise weder sichtbar noch als Tooltips angezeigt.

### Farbtyp

Der Typ {{HTMLElement("input/color", "color")}} kann vordefinierte Farben in einer vom Browser bereitgestellten Benutzeroberfläche anzeigen.

```html
<label for="colors">Pick a color (preferably a red tone):</label>
<input type="color" list="redColors" id="colors" />
<datalist id="redColors">
  <option value="#800000"></option>
  <option value="#8B0000"></option>
  <option value="#A52A2A"></option>
  <option value="#DC143C"></option>
</datalist>
```

{{EmbedLiveSample("Color_type", 600, 70)}}

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Entweder
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        >
        oder null oder mehr {{HTMLElement("option")}}-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        >
        zulässt.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"
          >listbox</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Kein <code>role</code> zulässig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLDataListElement`](/de/docs/Web/API/HTMLDataListElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("input")}}-Element, insbesondere sein Attribut [`list`](/de/docs/Web/HTML/Reference/Elements/input#list);
- das {{HTMLElement("option")}}-Element.
