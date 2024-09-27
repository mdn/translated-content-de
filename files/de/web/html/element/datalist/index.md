---
title: "<datalist>: Das HTML-Datenlisten-Element"
slug: Web/HTML/Element/datalist
l10n:
  sourceCommit: 3e7b55aa06cc2986747734b3b27e1facd6e690aa
---

{{HTMLSidebar}}

Das **`<datalist>`** [HTML](/de/docs/Web/HTML)-Element enthält eine Gruppe von {{HTMLElement("option")}}-Elementen, die die zulässigen oder empfohlenen Optionen darstellen, die innerhalb anderer Steuerungselemente ausgewählt werden können.

{{EmbedInteractiveExample("pages/tabbed/datalist.html", "tabbed-standard")}}

Um das `<datalist>`-Element mit der Steuerung zu verknüpfen, geben wir ihm im [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut eine eindeutige Kennung und fügen dann das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut dem {{HTMLElement("input")}}-Element hinzu, wobei derselbe Wert für die Kennung verwendet wird. Nur bestimmte Arten von {{HTMLElement("input")}} unterstützen dieses Verhalten, und dies kann auch je nach Browser variieren.

Jedes `<option>`-Element sollte ein `value`-Attribut haben, das einen Vorschlag darstellt, der in die Eingabe eingegeben werden soll. Es kann auch ein `label`-Attribut haben oder, wenn dieses fehlt, einen Textinhalt, der möglicherweise vom Browser anstelle des `value` (Firefox) oder zusätzlich zum `value` (Chrome und Safari, als ergänzender Text) angezeigt wird. Der genaue Inhalt des Dropdown-Menüs hängt vom Browser ab, aber beim Klicken wird der Inhalt, der in das Steuerfeld eingegeben wird, immer aus dem `value`-Attribut stammen.

> **Note:** `<datalist>` ist kein Ersatz für {{HTMLElement("select")}}. Ein `<datalist>` stellt keine Eingabe selbst dar; es ist eine Liste von vorgeschlagenen Werten für ein zugehöriges Steuerungselement. Das Steuerungselement kann trotzdem jeden Wert akzeptieren, der die Validierung besteht, selbst wenn er nicht in dieser Vorschlagsliste enthalten ist.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), die für alle Elemente gelten.

## Barrierefreiheit

Wenn Sie sich entscheiden, das `<datalist>`-Element zu verwenden, sollten Sie folgende Barrierefreiheitsthemen beachten:

- Die Schriftgröße der Optionen der Datenliste wird nicht gezoomt und bleibt immer gleich groß. Der Inhalt des Autosuggests wächst oder schrumpft nicht, wenn der Rest des Inhalts vergrößert oder verkleinert wird.
- Da die Auswahl der Liste der Optionen mit CSS sehr eingeschränkt bis nicht vorhanden ist, kann das Rendering nicht für den Hochkontrastmodus gestaltet werden.
- Einige Screenreader-/Browser-Kombinationen, einschließlich NVDA und Firefox, geben den Inhalt des Autosuggest-Popups nicht an.

## Beispiele

### Textuelle Typen

Empfohlene Werte in den Typen {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/number", "number")}}, werden in einem Dropdown-Menü angezeigt, wenn der Benutzer auf das Steuerungselement klickt oder doppelklickt. Typischerweise wird auch auf der rechten Seite eines Steuerungselements ein Pfeil angezeigt, der auf das Vorhandensein vordefinierter Werte hinweist.

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

Die Typen {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} können eine Schnittstelle anzeigen, die eine bequeme Auswahl von Datum und Uhrzeit ermöglicht. Dort können vordefinierte Werte angezeigt werden, die es dem Benutzer ermöglichen, schnell den Wert des Steuerungselements zu füllen.

> [!NOTE]
> Wenn der Typ nicht unterstützt wird, wird der `text`-Typ verwendet, um ein einfaches Textfeld zu erstellen. Das Feld wird die empfohlenen Werte korrekt erkennen und dem Benutzer in einem Dropdown-Menü anzeigen.

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

Die empfohlenen Werte im {{HTMLElement("input/range", "range")}}-Typ werden als eine Reihe von Markierungen angezeigt, die der Benutzer leicht auswählen kann.

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

Der {{HTMLElement("input/color", "color")}}-Typ kann vordefinierte Farben in einer browsergesteuerten Schnittstelle anzeigen.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Entweder
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a>
        oder null bis beliebig viele {{HTMLElement("option")}}-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/listbox_role">listbox</a>
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

- Das {{HTMLElement("input")}}-Element und insbesondere dessen [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut;
- Das {{HTMLElement("option")}}-Element.
