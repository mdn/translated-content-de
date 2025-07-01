---
title: "<kbd>: Das Keyboard Input-Element"
slug: Web/HTML/Reference/Elements/kbd
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{HTMLSidebar}}

Das **`<kbd>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Textbereich, der benutzereingaben von einer Tastatur, Stimmeneingaben oder einem anderen Texteingabegerät darstellt. Üblicherweise rendert der {{Glossary("user_agent", "User-Agent")}} die Inhalte eines `<kbd>`-Elements mit seiner Standard-Monospace-Schrift, obwohl dies nicht vom HTML-Standard vorgeschrieben ist.

{{InteractiveExample("HTML Demo: &lt;kbd&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an
  MDN page.
</p>
```

```css interactive-example
kbd {
  background-color: #eee;
  border-radius: 3px;
  border: 1px solid #b4b4b4;
  box-shadow:
    0 1px 1px rgb(0 0 0 / 0.2),
    0 2px 0 0 rgb(255 255 255 / 0.7) inset;
  color: #333;
  display: inline-block;
  font-size: 0.85em;
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
}
```

`<kbd>` kann in verschiedenen Kombinationen mit dem {{HTMLElement("samp")}} (Sample Output) Element verschachtelt werden, um verschiedene Formen der Eingabe- oder Ausgabe basierend auf visuellen Hinweisen darzustellen.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

Andere Elemente können zusammen mit `<kbd>` verwendet werden, um spezifischere Szenarien darzustellen:

- Das Verschachteln eines `<kbd>`-Elements in einem anderen `<kbd>`-Element repräsentiert eine tatsächliche Taste oder eine andere Eingabeeinheit als Teil einer größeren Eingabe. Siehe [Darstellung von Tastenanschlägen innerhalb einer Eingabe](#darstellung_von_tastenanschlägen_innerhalb_einer_eingabe) unten.
- Das Verschachteln eines `<kbd>`-Elements in einem {{HTMLElement("samp")}}-Element repräsentiert eine Eingabe, die vom System an den Benutzer zurückgegeben wurde. Siehe [Wiederholte Eingabe](#wiederholte_eingabe) unten für ein Beispiel.
- Das Verschachteln eines `<samp>`-Elements in einem `<kbd>`-Element repräsentiert auf der anderen Seite eine Eingabe, die auf Text basiert, der vom System präsentiert wird, wie die Namen von Menüs und Menüeinträgen oder die Namen von auf dem Bildschirm angezeigten Tasten. Siehe das Beispiel unter [Darstellung von Bildschirm-Eingabeoptionen](#darstellung_von_bildschirm-eingabeoptionen) unten.

> [!NOTE]
> Sie können einen benutzerdefinierten Stil definieren, um die standardmäßige Schriftwahl des Browsers für das `<kbd>`-Element zu überschreiben, obwohl die Präferenzen des Benutzers Ihre CSS überschreiben könnten.

## Beispiele

### Einfaches Beispiel

```html
<p>
  Use the command <kbd>help my-command</kbd> to view documentation for the
  command "my-command".
</p>
```

#### Ergebnis

{{ EmbedLiveSample('Basic_example', 350, 80) }}

### Darstellung von Tastenanschlägen innerhalb einer Eingabe

Um eine Eingabe zu beschreiben, die aus mehreren Tastenanschlägen besteht, können Sie mehrere `<kbd>`-Elemente verschachteln, wobei ein äußeres `<kbd>`-Element die gesamte Eingabe repräsentiert und jeder einzelne Tastenanschlag oder Bestandteil der Eingabe innerhalb seines eigenen `<kbd>` eingeschlossen ist.

#### Unformatiert

Zuerst sehen wir uns an, wie dies als einfaches HTML aussieht.

##### HTML

```html
<p>
  You can also create a new document using the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> keyboard shortcut.
</p>
```

Dies umschließt die gesamte Tastenfolge in einem äußeren `<kbd>`-Element und dann jede einzelne Taste in ihrem eigenen, um die Komponenten der Folge darzustellen.

> [!NOTE]
> Sie müssen nicht all diese Verschachtelung vornehmen; Sie können es vereinfachen, indem Sie das äußere `<kbd>`-Element weglassen. Mit anderen Worten, die Vereinfachung zu `<kbd>Ctrl</kbd>+<kbd>N</kbd>` wäre vollkommen gültig.
>
> Abhängig von Ihrem Stylesheet könnte es jedoch nützlich sein, diese Art der Verschachtelung zu verwenden.

##### Ergebnis

Die Ausgabe sieht ohne angewendetes Stylesheet so aus:

{{EmbedLiveSample("Unstyled", 650, 80)}}

#### Mit benutzerdefinierten Stilen

Wir können das verständlicher machen, indem wir etwas CSS hinzufügen:

##### CSS

Wir fügen einen neuen Selektor für verschachtelte `<kbd>`-Elemente, `kbd>kbd`, hinzu, den wir anwenden können, wenn Tasteneingaben gerendert werden:

```css
kbd > kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

##### HTML

Dann aktualisieren wir das HTML, um diese Klasse auf die Tasten in der Ausgabe anzuwenden:

```html
<p>
  You can also create a new document by pressing the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> shortcut.
</p>
```

##### Ergebnis

Das Ergebnis ist genau das, was wir wollen!

{{EmbedLiveSample("With_custom_styles", 650, 80)}}

### Wiederholte Eingabe

Das Verschachteln eines `<kbd>`-Elements in einem {{HTMLElement("samp")}}-Element repräsentiert eine Eingabe, die vom System an den Benutzer zurückgegeben wurde.

```html
<p>
  If a syntax error occurs, the tool will output the initial command you typed
  for your review:
</p>
<blockquote>
  <samp><kbd>custom-git ad my-new-file.cpp</kbd></samp>
</blockquote>
```

#### Ergebnis

{{EmbedLiveSample("Echoed_input", 650, 100)}}

### Darstellung von Bildschirm-Eingabeoptionen

Das Verschachteln eines `<samp>`-Elements in einem `<kbd>`-Element repräsentiert eine Eingabe, die auf Text basiert, der vom System präsentiert wird, wie die Namen von Menüs und Menüeinträgen oder die Namen von auf dem Bildschirm angezeigten Tasten.

Zum Beispiel können Sie erklären, wie Sie die "Neues Dokument"-Option im "Datei"-Menü mit HTML auswählen, das so aussieht:

```html-nolint
<p>
  To create a new file, choose the <kbd><kbd><samp>File</samp></kbd>
  ⇒<kbd><samp>New Document</samp></kbd></kbd> menu option.
</p>

<p>
  Don't forget to click the <kbd><samp>OK</samp></kbd> button to confirm once
  you've entered the name of the new file.
</p>
```

Dies bietet eine interessante Verschachtelung. Für die Menüoption-Beschreibung wird die gesamte Eingabe in einem `<kbd>`-Element eingeschlossen. Dann sind innerhalb davon sowohl die Menü- als auch die Menüeintragsnamen sowohl in `<kbd>` als auch `<samp>` enthalten, was anzeigt, dass eine Eingabe von einem Bildschirmelement ausgewählt wird.

#### Ergebnis

{{EmbedLiveSample("Representing_onscreen_input_options", 650, 120)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">formulierender Inhalt</a>, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Formulierender Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">formulierenden Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("code")}}
