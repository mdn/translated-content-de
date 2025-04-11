---
title: "<datalist>: Das HTML-Datenlistenelement"
slug: Web/HTML/Reference/Elements/datalist
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<datalist>`** [HTML](/de/docs/Web/HTML)-Element enthält eine Menge von {{HTMLElement("option")}}-Elementen, die die zulässigen oder empfohlenen Optionen darstellen, die innerhalb anderer Steuerungen ausgewählt werden können.

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

Um das `<datalist>`-Element an die Steuerung zu binden, geben wir ihm einen eindeutigen Bezeichner im [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut und fügen dann das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut zum {{HTMLElement("input")}}-Element hinzu, dessen Wert mit demselben Bezeichner übereinstimmt. Nur bestimmte Typen von {{HTMLElement("input")}} unterstützen dieses Verhalten, und es kann auch je nach Browser variieren.

Jedes `<option>`-Element sollte ein `value`-Attribut haben, das einen Vorschlag darstellt, der in das Eingabefeld eingegeben werden soll. Es kann auch ein `label`-Attribut haben oder, falls dieses fehlt, einen Textinhalt, der vom Browser möglicherweise statt des `value`-Attributes angezeigt wird (Firefox) oder zusätzlich zu `value` (Chrome und Safari, als ergänzender Text). Der genaue Inhalt des Dropdown-Menüs hängt vom Browser ab, aber beim Klicken wird der Inhalt, der in das Steuerfeld eingegeben wird, immer aus dem `value`-Attribut stammen.

> **Note:** `<datalist>` ist kein Ersatz für {{HTMLElement("select")}}. Ein `<datalist>` stellt keine Eingabe selbst dar; es ist eine Liste von vorgeschlagenen Werten für eine zugehörige Steuerung. Die Steuerung kann immer noch jeden Wert akzeptieren, der die Validierung besteht, selbst wenn er nicht in dieser Vorschlagsliste enthalten ist.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), die allen Elementen gemeinsam sind.

## Barrierefreiheit

Wenn Sie sich für die Verwendung des `<datalist>`-Elements entscheiden, sollten Sie auf folgende Barrierefreiheitsthemen achten:

- Die Schriftgröße der Optionen der Dataliste zoomt nicht und bleibt immer in derselben Größe. Der Inhalt der automatischen Vervollständigung wird nicht vergrößert oder verkleinert, wenn der Rest des Inhalts gezoomt wird.
- Da das Anvisieren der Optionenliste mit CSS sehr begrenzt bis nicht existent ist, kann das Rendering nicht für den Hochkontrastmodus gestaltet werden.
- Einige Bildschirmleser-/Browser-Kombinationen, einschließlich NVDA und Firefox, geben den Inhalt des automatischen Vorschlags-Popups nicht bekannt.

## Beispiele

### Textuelle Typen

Empfohlene Werte in den Typen {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/number", "number")}} werden in einem Dropdown-Menü angezeigt, wenn der Benutzer auf die Steuerung klickt oder doppelklickt. Typischerweise wird die rechte Seite einer Steuerung auch einen Pfeil haben, der auf das Vorhandensein vordefinierter Werte hinweist.

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

Die Typen {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} können eine Oberfläche anzeigen, die eine bequeme Auswahl eines Datums und einer Uhrzeit ermöglicht. Vordefinierte Werte können dort angezeigt werden, die es dem Benutzer ermöglichen, den Steuerwert schnell auszufüllen.

> [!NOTE]
> Wenn diese Typen nicht unterstützt werden, wird stattdessen ein einfacher `text`-Typ gerendert, der ein Textfeld erstellt. Dieses Feld erkennt empfohlene Werte korrekt und zeigt sie dem Benutzer in einem Dropdown-Menü an.

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

Die empfohlenen Werte im {{HTMLElement("input/range", "range")}}-Typ werden als Reihe von Strichmarkierungen angezeigt, die der Benutzer leicht auswählen kann.

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

Der {{HTMLElement("input/color", "color")}}-Typ kann vordefinierte Farben in einer browserbasierten Oberfläche anzeigen.

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
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Entweder
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalte</a
        >
        oder null oder mehr {{HTMLElement("option")}}-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalte</a
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

- Das {{HTMLElement("input")}}-Element, und genauer gesagt sein [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut;
- Das {{HTMLElement("option")}}-Element.
