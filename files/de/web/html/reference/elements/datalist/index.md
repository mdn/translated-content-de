---
title: "`<datalist>` HTML Datalist-Element"
short-title: <datalist>
slug: Web/HTML/Reference/Elements/datalist
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

Das **`<datalist>`**-Element [HTML](/de/docs/Web/HTML) enthält eine Gruppe von {{HTMLElement("option")}}-Elementen, die die zulässigen oder empfohlenen Optionen darstellen, aus denen bei anderen Steuerelementen ausgewählt werden kann.

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

Um das `<datalist>`-Element an das Steuerelement zu binden, geben wir ihm im [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut eine eindeutige Kennung und fügen dann dem {{HTMLElement("input")}}-Element das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut mit derselben Kennung als Wert hinzu. Nur bestimmte Typen von {{HTMLElement("input")}} unterstützen dieses Verhalten, und es kann auch von Browser zu Browser variieren.

Jedes `<option>`-Element sollte ein `value`-Attribut haben, das einen Vorschlag darstellt, der in das Eingabefeld eingegeben werden soll. Es kann auch ein `label`-Attribut haben oder, falls nicht vorhanden, einen Textinhalt, der möglicherweise vom Browser anstelle von `value` (Firefox) oder zusätzlich zu `value` (Chrome und Safari, als ergänzender Text) angezeigt wird. Der genaue Inhalt des Dropdown-Menüs hängt vom Browser ab, aber beim Klicken wird der eingegebene Inhalt immer aus dem `value`-Attribut stammen.

> [!NOTE]
> `<datalist>` ist kein Ersatz für {{HTMLElement("select")}}. Ein `<datalist>` stellt keine eigene Eingabe dar; es ist eine Liste empfohlener Werte für ein zugeordnetes Steuerelement. Das Steuerelement kann weiterhin jeden Wert akzeptieren, der die Validierung besteht, auch wenn er nicht in dieser Vorschlagsliste enthalten ist.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), die allen Elementen gemein sind.

## Barrierefreiheit

Wenn Sie sich entscheiden, das `<datalist>`-Element zu verwenden, sollten Sie folgende Barrierefreiheitsprobleme berücksichtigen:

- Die Schriftgröße der Optionen der Dataliste zoomt nicht mit, sie bleibt immer gleich groß. Die Inhalte der automatischen Vorschläge wachsen oder schrumpfen nicht, wenn der Rest der Inhalte herein- oder herausgezoomt wird.
- Da das Ansprechen der Optionsliste mit CSS sehr begrenzt bis nicht existent ist, kann die Darstellung nicht für Hochkontrastmodus gestaltet werden.
- Einige Bildschirmleser-/Browser-Kombinationen, einschließlich NVDA und Firefox, kündigen den Inhalt des automatischen Vorschlag-Popups nicht an.

## Beispiele

### Textuelle Typen

Empfohlene Werte in den Typen {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/number", "number")}} werden in einem Dropdown-Menü angezeigt, wenn der Benutzer auf das Steuerelement klickt oder doppelt klickt. Normalerweise wird auf der rechten Seite eines Steuerelements ein Pfeil angezeigt, der auf das Vorhandensein vordefinierter Werte hinweist.

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

### Datum- und Uhrzeittypen

Die Typen {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} können eine Benutzeroberfläche anzeigen, die eine bequeme Auswahl eines Datums und einer Uhrzeit ermöglicht. Vordefinierte Werte können dort angezeigt werden, sodass der Benutzer schnell den Steuerungswert ausfüllen kann.

> [!NOTE]
> Wenn diese Typen nicht unterstützt werden, wird stattdessen ein grundlegender `text`-Typ gerendert, der ein Textfeld erstellt. Dieses Feld erkennt die empfohlenen Werte korrekt und zeigt sie dem Benutzer in einem Dropdown-Menü an.

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

Wenn `value`-Attribute in `<option>`-Elementen enthalten sind, die für eine Datalist bereitgestellt werden, die mit einem {{HTMLElement("input/range", "range")}}-Eingabetyp verknüpft ist, werden sie als Serie von Markierungen angezeigt, die der Benutzer leicht auswählen kann.

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
> Das `label`-Attribut soll laut [HTML-Standard](<https://html.spec.whatwg.org/multipage/input.html#range-state-(type=range)>) Bezeichnungen für Markierungen bereitstellen. Die aktuelle Unterstützung durch Browser variiert jedoch; die Bezeichnungen werden möglicherweise nicht visuell oder als Tooltips angezeigt.

### Farbtyp

Der {{HTMLElement("input/color", "color")}}-Typ kann vordefinierte Farben in einer vom Browser bereitgestellten Oberfläche anzeigen.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Entweder
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        oder null oder mehr {{HTMLElement("option")}}-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"
          >Listbox</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>role</code> zulässig</td>
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

- Das {{HTMLElement("input")}}-Element, und speziell sein [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut;
- Das {{HTMLElement("option")}}-Element.
