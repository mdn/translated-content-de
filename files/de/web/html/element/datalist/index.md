---
title: "<datalist>: Das HTML-Datenlisten-Element"
slug: Web/HTML/Element/datalist
l10n:
  sourceCommit: 8ca92ab289aa7a0b9d99765c4a12d606a90af2dc
---

{{HTMLSidebar}}

Das **`<datalist>`** [HTML](/de/docs/Web/HTML) Element enthält eine Reihe von {{HTMLElement("option")}} Elementen, die die zulässigen oder empfohlenen Optionen repräsentieren, die innerhalb anderer Steuerelemente zur Auswahl stehen.

{{EmbedInteractiveExample("pages/tabbed/datalist.html", "tabbed-standard")}}

Um das `<datalist>` Element an das Steuerelement zu binden, geben wir diesem einen eindeutigen Bezeichner im [`id`](/de/docs/Web/HTML/Global_attributes/id) Attribut und fügen dann das [`list`](/de/docs/Web/HTML/Element/input#list) Attribut zum {{HTMLElement("input")}} Element hinzu, mit demselben Bezeichner als Wert. Nur bestimmte Typen von {{HTMLElement("input")}} unterstützen dieses Verhalten, und es kann auch von Browser zu Browser variieren.

Jedes `<option>` Element sollte ein `value` Attribut haben, das einen Vorschlag darstellt, der in die Eingabe eingegeben werden soll. Es kann auch ein `label` Attribut haben, oder, falls dieses fehlt, etwas Textinhalt, der möglicherweise vom Browser anstelle von `value` (Firefox) oder zusätzlich zu `value` (Chrome und Safari, als ergänzender Text) angezeigt wird. Der genaue Inhalt des Dropdown-Menüs hängt vom Browser ab, aber der Inhalt, der in das Steuerfeld eingegeben wird, stammt immer aus dem `value` Attribut.

> **Note:** `<datalist>` ist kein Ersatz für {{HTMLElement("select")}}. Ein `<datalist>` stellt keine Eingabe dar; es ist eine Liste vorgeschlagener Werte für ein zugeordnetes Steuerelement. Das Steuerelement kann weiterhin jeden Wert akzeptieren, der die Validierung besteht, auch wenn er nicht in dieser Vorschlagsliste steht.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), die allen Elementen gemeinsam sind.

## Barrierefreiheit

Wenn Sie das `<datalist>` Element verwenden, sollten Sie einige Zugänglichkeitsfragen beachten:

- Die Schriftgröße der Optionen der Datenliste wird nicht vergrößert und bleibt immer gleich groß. Die Inhalte der automatischen Vervollständigung wachsen oder schrumpfen nicht, wenn der Rest der Inhalte vergrößert oder verkleinert wird.
- Da das Ansprechen der Liste der Optionen mit CSS sehr eingeschränkt bis nahezu unmöglich ist, kann die Darstellung nicht im Hochkontrastmodus gestaltet werden.
- Einige Kombinationen von Bildschirmlesegerät und Browser, einschließlich NVDA und Firefox, kündigen den Inhalt des Autovervollständigungs-Popups nicht an.

## Beispiele

### Textuelle Typen

Empfohlene Werte in den Typen {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/number", "number")}} werden in einem Dropdown-Menü angezeigt, wenn der Benutzer auf das Steuerelement klickt oder doppelklickt. Typischerweise zeigt die rechte Seite eines Steuerelements auch einen Pfeil an, der auf das Vorhandensein vordefinierter Werte hinweist.

```html
<label for="myBrowser">Wählen Sie einen Browser aus dieser Liste:</label>
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

Die Typen {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} können eine Benutzeroberfläche anzeigen, die eine bequeme Auswahl eines Datums und einer Uhrzeit ermöglicht. Dort können vordefinierte Werte angezeigt werden, die es dem Benutzer ermöglichen, den Steuerwert schnell auszufüllen.

> [!NOTE]
> Wenn ein Typ nicht unterstützt wird, wird der `text` Typ verwendet, der ein einfaches Textfeld erstellt. Dieses Feld erkennt empfohlene Werte korrekt und zeigt sie dem Benutzer in einem Dropdown-Menü an.

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

Die empfohlenen Werte im {{HTMLElement("input/range", "range")}} Typ werden als Reihe von Markierungen angezeigt, die der Benutzer leicht auswählen kann.

```html
<label for="tick">Trinkgeldbetrag:</label>
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

Der {{HTMLElement("input/color", "color")}} Typ kann vordefinierte Farben in einer vom Browser bereitgestellten Oberfläche anzeigen.

```html
<label for="colors">Wählen Sie eine Farbe (vorzugsweise einen Rotton):</label>
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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Entweder
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        oder null oder mehr {{HTMLElement("option")}} Elemente.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/listbox_role"
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
      <td>{{domxref("HTMLDataListElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("input")}} Element und speziell dessen [`list`](/de/docs/Web/HTML/Element/input#list) Attribut;
- Das {{HTMLElement("option")}} Element.
