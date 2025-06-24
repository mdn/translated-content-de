---
title: "<datalist>: Das HTML-Datenlisten-Element"
slug: Web/HTML/Reference/Elements/datalist
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTMLSidebar}}

Das **`<datalist>`** [HTML](/de/docs/Web/HTML) Element enthält eine Gruppe von {{HTMLElement("option")}} Elementen, die die erlaubten oder empfohlenen Optionen darstellen, die innerhalb anderer Steuerungen zur Auswahl stehen.

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

Um das `<datalist>`-Element mit der Steuerung zu verbinden, geben wir ihm einen eindeutigen Bezeichner im [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut und fügen dann das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut dem {{HTMLElement("input")}}-Element mit demselben Bezeichner als Wert hinzu. Nur bestimmte Arten von {{HTMLElement("input")}} unterstützen dieses Verhalten, und es kann auch von Browser zu Browser unterschiedlich sein.

Jedes `<option>`-Element sollte ein `value`-Attribut haben, das einen Vorschlag darstellt, der im Eingabefeld eingegeben werden soll. Es kann auch ein `label`-Attribut oder, falls dieses fehlt, etwas Textinhalt haben, der möglicherweise vom Browser anstelle von `value` (Firefox) oder zusätzlich zu `value` (Chrome und Safari, als Ergänzungstext) angezeigt wird. Der genaue Inhalt des Drop-down-Menüs hängt vom Browser ab, aber beim Anklicken kommt der Inhalt, der ins Steuerungsfeld eingegeben wird, immer aus dem `value`-Attribut.

> [!NOTE] > `<datalist>` ist kein Ersatz für {{HTMLElement("select")}}. Ein `<datalist>` stellt selbst keine Eingabe dar; es ist eine Liste von vorgeschlagenen Werten für eine zugehörige Steuerung. Die Steuerung kann immer noch jeden Wert akzeptieren, der die Validierung besteht, auch wenn er nicht in dieser Vorschlagsliste enthalten ist.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), die allen Elementen gemeinsam sind.

## Barrierefreiheit

Wenn Sie sich für die Verwendung des `<datalist>`-Elements entscheiden, bedenken Sie folgende Barrierefreiheitsprobleme:

- Die Schriftgröße der Optionen der Datenliste wird beim Zoomen nicht angepasst und bleibt immer gleich groß. Der Inhalt des Autosuggest wird nicht größer oder kleiner, wenn der Rest des Inhalts vergrößert oder verkleinert wird.
- Da das Ansprechen der Optionsliste mit CSS sehr eingeschränkt bis nicht vorhanden ist, kann die Darstellung nicht für den Hochkontrastmodus gestaltet werden.
- Einige Bildschirmleser-/Browser-Kombinationen, einschließlich NVDA und Firefox, geben den Inhalt des Autosuggest-Popup nicht wieder.

## Beispiele

### Textuelle Typen

Empfohlene Werte in Typen wie {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/number", "number")}} werden in einem Drop-down-Menü angezeigt, wenn der Benutzer auf die Steuerung klickt oder doppelklickt. Typischerweise wird auf der rechten Seite einer Steuerung ein Pfeil angezeigt, der auf die Anwesenheit vordefinierter Werte hinweist.

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

### Datum- und Uhrzeit-Typen

Die Typen {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} können eine Benutzeroberfläche anzeigen, die eine bequeme Auswahl von Datum und Uhrzeit ermöglicht. Vordefinierte Werte können dort angezeigt werden, sodass der Benutzer schnell den Steuerungswert ausfüllen kann.

> [!NOTE]
> Wenn diese Typen nicht unterstützt werden, wird stattdessen ein grundlegender `text`-Typ angezeigt, der ein Textfeld erstellt. Dieses Feld erkennt empfohlene Werte korrekt und zeigt sie dem Benutzer in einem Drop-down-Menü an.

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

Die empfohlenen Werte im {{HTMLElement("input/range", "range")}}-Typ werden als Reihe von Strichen angezeigt, die der Benutzer leicht auswählen kann.

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

Der {{HTMLElement("input/color", "color")}}-Typ kann vordefinierte Farben in einer vom Browser bereitgestellten Benutzeroberfläche anzeigen.

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
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Entweder
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        oder null oder mehr {{HTMLElement("option")}}-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        akzeptiert.
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
      <th scope="row">Erlaubte ARIA-Rollen</th>
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

- Das {{HTMLElement("input")}}-Element und speziell dessen [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut;
- Das {{HTMLElement("option")}}-Element.
