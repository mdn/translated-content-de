---
title: "<datalist>: Das HTML Datenlisten-Element"
slug: Web/HTML/Element/datalist
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<datalist>`** [HTML](/de/docs/Web/HTML)-Element enthält eine Reihe von {{HTMLElement("option")}}-Elementen, die die zulässigen oder empfohlenen Optionen darstellen, die innerhalb anderer Bedienelemente ausgewählt werden können.

{{EmbedInteractiveExample("pages/tabbed/datalist.html", "tabbed-standard")}}

Um das `<datalist>`-Element an das Steuerelement zu binden, geben wir ihm eine eindeutige Kennung im [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut und fügen dann das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut zum {{HTMLElement("input")}}-Element mit derselben Kennung als Wert hinzu. Nur bestimmte Arten von {{HTMLElement("input")}} unterstützen dieses Verhalten, und es kann auch je nach Browser variieren.

Jedes `<option>`-Element sollte ein `value`-Attribut haben, das einen Vorschlag darstellt, der in das Eingabefeld eingegeben werden kann. Es kann auch ein `label`-Attribut oder, falls dieses fehlt, einen Textinhalt haben, der möglicherweise vom Browser anstelle von `value` (Firefox) oder zusätzlich zu `value` (Chrome und Safari, als ergänzender Text) angezeigt wird. Der genaue Inhalt des Dropdown-Menüs hängt vom Browser ab, aber wenn darauf geklickt wird, stammt der in das Steuerelement eingegebene Inhalt immer aus dem `value`-Attribut.

> **Hinweis:** `<datalist>` ist kein Ersatz für {{HTMLElement("select")}}. Ein `<datalist>` stellt keine Eingabe dar; es ist eine Liste vorgeschlagener Werte für ein zugehöriges Steuerelement. Das Steuerelement kann immer noch jeden Wert akzeptieren, der die Validierung besteht, selbst wenn er nicht in dieser Vorschlagsliste enthalten ist.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), die allen Elementen gemein sind.

## Barrierefreiheit

Beim Einsatz des `<datalist>`-Elements sollten Sie folgende Barrierefreiheitsprobleme beachten:

- Die Schriftgröße der Optionen der Datenliste zoomt nicht mit, sondern bleibt immer gleich groß. Die Inhalte der Autosuggest-Funktion wachsen oder schrumpfen nicht, wenn die übrigen Inhalte gezoomt werden.
- Da das Ansprechen der Optionsliste mit CSS sehr eingeschränkt bis nicht vorhanden ist, kann die Darstellung nicht im Hochkontrastmodus gestaltet werden.
- Einige Kombinationen aus Screenreader/Browser, einschließlich NVDA und Firefox, geben die Inhalte des Autosuggest-Popups nicht bekannt.

## Beispiele

### Textuelle Typen

Empfohlene Werte in den Typen {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/number", "number")}}, werden in einem Dropdown-Menü angezeigt, wenn der Benutzer auf das Steuerelement klickt oder doppelklickt. Typischerweise hat die rechte Seite eines Steuerelements auch einen Pfeil, der auf das Vorhandensein vordefinierter Werte hinweist.

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

Die Typen {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} können eine Schnittstelle anzeigen, die eine bequeme Auswahl eines Datums und einer Uhrzeit ermöglicht. Dort können vordefinierte Werte angezeigt werden, die dem Benutzer die schnelle Eingabe des Steuerwerts ermöglichen.

> [!NOTE]
> Wenn diese Typen nicht unterstützt werden, wird stattdessen ein grundlegender `text`-Typ gerendert, der ein Textfeld erzeugt. Dieses Feld erkennt empfohlene Werte korrekt und zeigt sie dem Benutzer in einem Dropdown-Menü an.

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

Der {{HTMLElement("input/color", "color")}}-Typ kann vordefinierte Farben in einer von Browser bereitgestellten Oberfläche anzeigen.

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
          >Fließinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Inhalte</th>
      <td>
        Entweder
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalte</a
        >
        oder null oder mehr {{HTMLElement("option")}}-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige übergeordnete Elemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalte</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/listbox_role"
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

- Das {{HTMLElement("input")}}-Element, und insbesondere sein [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut;
- Das {{HTMLElement("option")}}-Element.
