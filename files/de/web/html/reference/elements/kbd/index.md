---
title: "`<kbd>` HTML-Tastatureingabeelement"
short-title: <kbd>
slug: Web/HTML/Reference/Elements/kbd
l10n:
  sourceCommit: f201fb25d8aeda059065686c180e161c995369d2
---

Das **`<kbd>`** [HTML](/de/docs/Web/HTML)-Element stellt Benutzereingaben dar (typischerweise Tastatureingaben). Standardmäßig wird der Inhaltstext mit der monospace Schriftart des {{Glossary("user_agent", "Benutzeragenten")}} angezeigt.

`<kbd>` kann in verschiedenen Kombinationen mit dem {{HTMLElement("samp")}} (Beispielausgabe) Element verschachtelt werden, um verschiedene Formen von Eingaben oder Ausgaben basierend auf visuellen Hinweisen darzustellen.

{{InteractiveExample("HTML Demo: &lt;kbd&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an
  MDN page.
</p>
```

```css interactive-example
kbd {
  background-color: #eeeeee;
  border-radius: 3px;
  border: 1px solid #b4b4b4;
  box-shadow:
    0 1px 1px rgb(0 0 0 / 0.2),
    0 2px 0 0 rgb(255 255 255 / 0.7) inset;
  color: #333333;
  display: inline-block;
  font-size: 0.85em;
  font-weight: bold;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Andere Elemente können zusammen mit `<kbd>` verwendet werden, um spezifischere Szenarien darzustellen:

- Das Verschachteln eines `<kbd>`-Elements in einem anderen `<kbd>`-Element stellt eine tatsächliche Taste oder andere Eingabeeinheit als Teil einer größeren Eingabe dar. Siehe [Darstellung von Tastendrücken innerhalb einer Eingabe](#darstellung_von_tastendrücken_innerhalb_einer_eingabe) unten.
- Ein `<kbd>`-Element innerhalb eines {{HTMLElement("samp")}}-Elements darstellt eine Eingabe, die vom System an den Benutzer zurückgegeben wurde. Siehe [Zurückgegebene Eingaben](#zurückgegebene_eingaben), unten, für ein Beispiel.
- Ein `<samp>`-Element innerhalb eines `<kbd>`-Elements stellt Eingaben dar, die auf Text basieren, der vom System präsentiert wird, wie die Namen von Menüs und Menüpunkten oder die Namen von Bildschirmtasten. Siehe das Beispiel unter [Darstellung von Bildschirm-Eingabeoptionen](#darstellung_von_bildschirm-eingabeoptionen) unten.

> [!NOTE]
> Sie können einen benutzerdefinierten Stil definieren, um die Schriftartenauswahl des Browsers für das `<kbd>`-Element zu überschreiben, obwohl die Präferenzen des Benutzers möglicherweise Ihre CSS überschreiben.

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

### Darstellung von Tastendrücken innerhalb einer Eingabe

Um eine Eingabe zu beschreiben, die aus mehreren Tastendrücken besteht, können Sie mehrere `<kbd>`-Elemente verschachteln, wobei ein äußeres `<kbd>`-Element die gesamte Eingabe darstellt und jeder einzelne Tastendruck oder Komponenten der Eingabe in einem eigenen `<kbd>`-Element eingeschlossen ist.

#### Ungestyled

Zuerst schauen wir uns an, wie das als einfaches HTML aussieht.

##### HTML

```html
<p>
  You can also create a new document using the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> keyboard shortcut.
</p>
```

Dies umschließt die gesamte Tastenfolge in einem äußeren `<kbd>`-Element, dann jede einzelne Taste in ihrem eigenen, um die Komponenten der Sequenz zu kennzeichnen.

> [!NOTE]
> Sie müssen nicht all diese Verschachtelungen vornehmen; Sie können es vereinfachen, indem Sie das äußere `<kbd>`-Element weglassen. Mit anderen Worten, die Vereinfachung auf nur `<kbd>Strg</kbd>+<kbd>N</kbd>` wäre völlig gültig.
>
> Abhängig von Ihrem Stylesheet kann es jedoch nützlich sein, diese Art der Verschachtelung vorzunehmen.

##### Ergebnis

Die Ausgabe sieht so aus, ohne dass ein Stylesheet angewendet wurde:

{{EmbedLiveSample("Unstyled", 650, 80)}}

#### Mit benutzerdefinierten Stilen

Wir können dies verständlicher machen, indem wir etwas CSS hinzufügen:

##### CSS

Wir fügen einen neuen Selektor für verschachtelte `<kbd>`-Elemente hinzu, `kbd>kbd`, den wir beim Rendern von Keyboardtasten anwenden können:

```css
kbd > kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

##### HTML

Dann aktualisieren wir das HTML, um diese Klasse auf die Tasten im auszugebenden Inhalt anzuwenden:

```html
<p>
  You can also create a new document by pressing the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> shortcut.
</p>
```

##### Ergebnis

Das Ergebnis ist genau das, was wir wollen!

{{EmbedLiveSample("With_custom_styles", 650, 80)}}

### Zurückgegebene Eingaben

Ein `<kbd>`-Element innerhalb eines {{HTMLElement("samp")}}-Elements darstellt eine Eingabe, die vom System an den Benutzer zurückgegeben wurde.

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

Ein `<samp>`-Element innerhalb eines `<kbd>`-Elements stellt Eingaben dar, die auf Text basieren, der vom System präsentiert wird, wie die Namen von Menüs und Menüpunkten oder die Namen von Bildschirmtasten.

Zum Beispiel können Sie erklären, wie die Option "Neues Dokument" im Menü "Datei" ausgewählt wird, indem Sie HTML verwenden, das folgendermaßen aussieht:

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

Dies umfasst einige interessante Verschachtelungen. Für die Menüoption Beschreibung wird die gesamte Eingabe in einem `<kbd>`-Element eingeschlossen. Dann sind innerhalb dieses Elements sowohl die Menünamen als auch die Menüpunktnamen in `<kbd>` und `<samp>` enthalten, wodurch eine Eingabe angezeigt wird, die aus einem Bildschirm-Widget ausgewählt wird.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fluss-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
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
      <td>Beliebig</td>
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
