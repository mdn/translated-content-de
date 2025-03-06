---
title: "<datalist>: Das HTML Data List Element"
slug: Web/HTML/Element/datalist
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<datalist>`** [HTML](/de/docs/Web/HTML) Element enthält eine Reihe von {{HTMLElement("option")}} Elementen, die die zulässigen oder empfohlenen Auswahlmöglichkeiten darstellen, die in anderen Steuerelementen ausgewählt werden können.

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

Um das `<datalist>` Element an das Steuerelement zu binden, geben wir ihm in seinem [`id`](/de/docs/Web/HTML/Global_attributes/id) Attribut eine eindeutige Kennung und fügen dann dem {{HTMLElement("input")}} Element das [`list`](/de/docs/Web/HTML/Element/input#list) Attribut mit derselben Kennung als Wert hinzu. Nur bestimmte Arten von {{HTMLElement("input")}} unterstützen dieses Verhalten, und es kann auch je nach Browser variieren.

Jedes `<option>` Element sollte ein `value` Attribut haben, das einen Vorschlag darstellt, der in das Eingabefeld eingegeben werden soll. Es kann auch ein `label` Attribut haben oder, wenn es fehlt, einen Textinhalt, der möglicherweise vom Browser anstelle des `value` angezeigt wird (Firefox) oder zusätzlich zum `value` (Chrome und Safari als ergänzender Text). Der genaue Inhalt des Drop-Down-Menüs hängt vom Browser ab, aber beim Anklicken wird der Inhalt, der in das Steuerelement eingegeben wird, immer vom `value` Attribut stammen.

> **Note:** `<datalist>` ist kein Ersatz für {{HTMLElement("select")}}. Ein `<datalist>` stellt keine Eingabe selbst dar; es ist eine Liste von vorgeschlagenen Werten für ein zugehöriges Steuerelement. Das Steuerelement kann immer noch jeden Wert akzeptieren, der die Validierung besteht, auch wenn er nicht in dieser Vorschlagsliste enthalten ist.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), die allen Elementen gemeinsam sind.

## Barrierefreiheit

Wenn Sie entscheiden, das `<datalist>` Element zu verwenden, sollten Sie auf folgende Barrierefreiheitsprobleme achten:

- Die Schriftgröße der Optionen in der Dataliste zoomt nicht, sondern bleibt immer gleich groß. Die Inhalte des Autosuggests wachsen oder schrumpfen nicht, wenn der Rest der Inhalte ein- oder ausgezoomt wird.
- Da das Ansprechen der Optionsliste mit CSS sehr eingeschränkt bis gar nicht möglich ist, kann das Rendering für den Hochkontrastmodus nicht gestaltet werden.
- Einige Bildschirmleser/Browser-Kombinationen, darunter NVDA und Firefox, geben den Inhalt des Autosuggest-Popups nicht wieder.

## Beispiele

### Texttypen

Empfohlene Werte in den Typen {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/number", "number")}} werden in einem Dropdown-Menü angezeigt, wenn der Benutzer auf das Steuerelement klickt oder doppelklickt. Typischerweise zeigt die rechte Seite eines Steuerelements auch einen Pfeil, der auf das Vorhandensein vordefinierter Werte hinweist.

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

### Datums- und Zeittypen

Die Typen {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} können eine Schnittstelle anzeigen, die eine bequeme Auswahl von Datum und Uhrzeit ermöglicht. Vorgegebene Werte können dort angezeigt werden, sodass der Benutzer den Steuerwert schnell ausfüllen kann.

> [!NOTE]
> Wenn diese Typen nicht unterstützt werden, wird stattdessen ein grundlegender `text` Typ gerendert, der ein Textfeld erstellt. Dieses Feld erkennt empfohlene Werte korrekt und zeigt sie dem Benutzer in einem Dropdown-Menü an.

```html
<input type="time" list="popularHours" />
<datalist id="popularHours">
  <option value="12:00"></option>
  <option value="13:00"></option>
  <option value="14:00"></option>
</datalist>
```

{{EmbedLiveSample("Date_and_Time_types", 600, 40)}}

### Bereichstyp

Die empfohlenen Werte im {{HTMLElement("input/range", "range")}} Typ werden als Reihe von Strichmarken angezeigt, die der Benutzer leicht auswählen kann.

```html
<label for="tick">Tip amount:</label>
<input type="range" list="tickmarks" min="0" max="100" id="tick" name="tick" />
<datalist id="tickmarks">
  <option value="0"></option>
  <option value="10"></option>
  <option value="20"></option>
  <option value="30"></option>
</datalist>
```

{{EmbedLiveSample("Range_type", 600, 70)}}

### Farbtyp

Der {{HTMLElement("input/color", "color")}} Typ kann vordefinierte Farben in einer vom Browser bereitgestellten Schnittstelle anzeigen.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fluss Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Satz Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Entweder
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Satz Inhalt</a
        >
        oder null oder mehr {{HTMLElement("option")}} Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Satz Inhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"
          >Listbox</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
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

- Das {{HTMLElement("input")}} Element, und insbesondere dessen [`list`](/de/docs/Web/HTML/Element/input#list) Attribut;
- Das {{HTMLElement("option")}} Element.
