---
title: "<kbd>: Das Keyboard Input-Element"
slug: Web/HTML/Reference/Elements/kbd
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<kbd>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Textabschnitt, der die Texteingabe eines Benutzers von einer Tastatur, Spracheingabe oder einem anderen Texteingabegerät kennzeichnet. Üblicherweise rendert der {{Glossary("user_agent", "User-Agent")}} den Inhalt eines `<kbd>` Elements in seiner standardmäßigen Monospace-Schriftart, obwohl dies nicht vom HTML-Standard vorgeschrieben ist.

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

`<kbd>` kann in verschiedenen Kombinationen mit dem {{HTMLElement("samp")}} (Sample Output) Element verschachtelt werden, um verschiedene Formen der Eingabe oder Ausgabe basierend auf visuellen Hinweisen darzustellen.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Andere Elemente können zusammen mit `<kbd>` verwendet werden, um spezifischere Szenarien darzustellen:

- Die Verschachtelung eines `<kbd>` Elements innerhalb eines anderen `<kbd>` Elements stellt eine tatsächliche Taste oder eine andere Eingabeeinheit als Teil einer größeren Eingabe dar. Siehe [Darstellung von Tastenanschlägen innerhalb einer Eingabe](#darstellung_von_tastenanschlägen_innerhalb_einer_eingabe) unten.
- Die Verschachtelung eines `<kbd>` Elements in einem {{HTMLElement("samp")}} Element stellt eine Eingabe dar, die vom System an den Benutzer zurückgegeben wurde. Siehe [Eingabe mit Echo](#eingabe_mit_echo) unten für ein Beispiel.
- Die Verschachtelung eines `<samp>` Elements in einem `<kbd>` Element hingegen repräsentiert eine Eingabe, die auf Text basiert, der vom System angezeigt wird, wie z.B. Namen von Menüs und Menüoptionen oder Namen von Tasten, die auf dem Bildschirm angezeigt werden. Siehe das Beispiel unter [Darstellung von Bildschirm-Eingabeoptionen](#darstellung_von_bildschirm-eingabeoptionen) unten.

> [!NOTE]
> Sie können einen benutzerdefinierten Stil definieren, um die Standard-Schriftauswahl des Browsers für das `<kbd>`-Element zu überschreiben, obwohl die Präferenzen des Benutzers Ihre CSS möglicherweise außer Kraft setzen können.

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

Um eine Eingabe bestehend aus mehreren Tastenanschlägen zu beschreiben, können Sie mehrere `<kbd>` Elemente verschachteln, wobei ein äußeres `<kbd>` Element die gesamte Eingabe repräsentiert und jeder einzelne Tastenanschlag oder Bestandteil der Eingabe in seinem eigenen `<kbd>` enthalten ist.

#### Unformatiert

Schauen wir uns zunächst an, wie das als normales HTML aussieht.

##### HTML

```html
<p>
  You can also create a new document using the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> keyboard shortcut.
</p>
```

Dies umschließt die gesamte Tastensequenz in einem äußeren `<kbd>` Element und dann jede einzelne Taste in ihrem eigenen, um die Bestandteile der Sequenz zu kennzeichnen.

> [!NOTE]
> Sie müssen nicht all diese Verschachtelung vornehmen; Sie können es einfacher gestalten, indem Sie das äußere `<kbd>` Element weglassen. Mit anderen Worten, die Vereinfachung auf `<kbd>Ctrl</kbd>+<kbd>N</kbd>` wäre vollkommen gültig.
>
> Abhängig von Ihrem Stylesheet finden Sie jedoch möglicherweise nützlich, diese Art der Verschachtelung vorzunehmen.

##### Ergebnis

Die Ausgabe sieht so aus, ohne dass ein Stylesheet angewendet wurde:

{{EmbedLiveSample("Unstyled", 650, 80)}}

#### Mit benutzerdefinierten Stilen

Wir können dies verständlicher machen, indem wir etwas CSS hinzufügen:

##### CSS

Wir fügen einen neuen Selektor für verschachtelte `<kbd>` Elemente, `kbd>kbd`, hinzu, den wir beim Rendern von Tastaturtasten anwenden können:

```css
kbd > kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

##### HTML

Dann aktualisieren wir das HTML, um diese Klasse auf die Tasten in der bereitgestellten Ausgabe anzuwenden:

```html
<p>
  You can also create a new document by pressing the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> shortcut.
</p>
```

##### Ergebnis

Das Ergebnis ist genau das, was wir wollen!

{{EmbedLiveSample("With_custom_styles", 650, 80)}}

### Eingabe mit Echo

Die Verschachtelung eines `<kbd>` Elements in einem {{HTMLElement("samp")}} Element stellt eine Eingabe dar, die vom System an den Benutzer zurückgegeben wurde.

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

Die Verschachtelung eines `<samp>` Elements in einem `<kbd>` Element repräsentiert eine Eingabe, die auf Text basiert, der vom System angezeigt wird, wie z.B. die Namen von Menüs und Menüoptionen oder die Namen von Tasten, die auf dem Bildschirm angezeigt werden.

Sie können beispielsweise erklären, wie die "Neues Dokument"-Option im "Datei"-Menü mithilfe von HTML, das wie folgt aussieht, gewählt wird:

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

Dies macht einige interessante Verschachtelungen. Für die Menüoption Beschreibung wird die gesamte Eingabe in ein `<kbd>` Element eingeschlossen. Dann sind die Namen von Menü und Menüpunkt sowohl in `<kbd>` als auch in `<samp>` enthalten und zeigen eine Eingabe an, die aus einem Bildschirmelement ausgewählt wird.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing content</a>, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing content</a>.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing content</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
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
