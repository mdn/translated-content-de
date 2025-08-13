---
title: "<kbd>: Das Keyboard Input-Element"
slug: Web/HTML/Reference/Elements/kbd
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Das **`<kbd>`**-[HTML](/de/docs/Web/HTML)-Element stellt einen Bereich von Inline-Text dar, der eine Texteingabe durch Benutzer von einer Tastatur, Spracheingabe oder einem anderen Texteingabegerät bezeichnet. Der {{Glossary("user_agent", "User Agent")}} rendert standardmäßig den Inhalt eines `<kbd>`-Elements in seiner Standard-Monospace-Schriftart, obwohl dies nicht durch den HTML-Standard vorgeschrieben ist.

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
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
}
```

`<kbd>` kann in verschiedenen Kombinationen mit dem {{HTMLElement("samp")}} (Sample Output) Element geschachtelt werden, um verschiedene Formen der Eingabe oder Ausgabe basierend auf visuellen Hinweisen darzustellen.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Andere Elemente können in Kombination mit `<kbd>` verwendet werden, um spezifischere Szenarien darzustellen:

- Das Verschachteln eines `<kbd>`-Elements innerhalb eines anderen `<kbd>`-Elements stellt eine tatsächliche Taste oder eine andere Eingabeeinheit als Teil einer größeren Eingabe dar. Siehe [Tastenkombinationen innerhalb einer Eingabe darstellen](#tastenkombinationen_innerhalb_einer_eingabe_darstellen) weiter unten.
- Das Verschachteln eines `<kbd>`-Elements innerhalb eines {{HTMLElement("samp")}}-Elements stellt eine Eingabe dar, die dem Benutzer vom System zurückgegeben wurde. Siehe [Zurückgegebene Eingabe](#zurückgegebene_eingabe) weiter unten für ein Beispiel.
- Das Verschachteln eines `<samp>`-Elements innerhalb eines `<kbd>`-Elements hingegen stellt eine Eingabe dar, die auf dem Text basiert, den das System zeigt, wie z.B. die Namen von Menüs und Menüelementen oder die Namen von auf dem Bildschirm angezeigten Schaltflächen. Siehe das Beispiel unter [Darstellung von Bildschirm-Eingabeoptionen](#darstellung_von_bildschirm-eingabeoptionen) weiter unten.

> [!NOTE]
> Sie können einen benutzerdefinierten Stil definieren, um die Standard-Schriftauswahl des Browsers für das `<kbd>`-Element zu überschreiben, obwohl die Benutzerpräferenzen möglicherweise Ihre CSS überschreiben können.

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

### Tastenkombinationen innerhalb einer Eingabe darstellen

Um eine Eingabe zu beschreiben, die aus mehreren Tastenkombinationen besteht, können Sie mehrere `<kbd>`-Elemente verschachteln, wobei ein äußeres `<kbd>`-Element die gesamte Eingabe repräsentiert und jeder einzelne Tastendruck oder Bestandteil der Eingabe in seinem eigenen `<kbd>` eingeschlossen ist.

#### Unformatiert

Lassen Sie uns zuerst ansehen, wie dies als einfaches HTML aussieht.

##### HTML

```html
<p>
  You can also create a new document using the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> keyboard shortcut.
</p>
```

Dies umschließt die gesamte Tastenabfolge in einem äußeren `<kbd>`-Element und dann jede einzelne Taste in ihrem eigenen, um die Bestandteile der Abfolge zu kennzeichnen.

> [!NOTE]
> Sie müssen nicht all diese Verschachtelungen vornehmen; Sie können es vereinfachen, indem Sie das äußere `<kbd>`-Element weglassen. Das heißt, die Vereinfachung auf nur `<kbd>Ctrl</kbd>+<kbd>N</kbd>` wäre vollkommen gültig.
>
> Je nach Ihrem Stylesheet könnte es jedoch nützlich sein, diese Art von Verschachtelung durchzuführen.

##### Ergebnis

Die Ausgabe sieht so aus, ohne das ein Stylesheet angewendet wurde:

{{EmbedLiveSample("Unstyled", 650, 80)}}

#### Mit benutzerdefinierten Stilen

Wir können mehr Klarheit schaffen, indem wir etwas CSS hinzufügen:

##### CSS

Wir fügen einen neuen Selektor für verschachtelte `<kbd>`-Elemente hinzu, `kbd>kbd`, den wir anwenden können, wenn wir Tasten auf der Tastatur darstellen:

```css
kbd > kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

##### HTML

Dann aktualisieren wir das HTML, um diese Klasse auf die im Output dargestellten Tasten anzuwenden:

```html
<p>
  You can also create a new document by pressing the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> shortcut.
</p>
```

##### Ergebnis

Das Ergebnis ist genau das, was wir wollen!

{{EmbedLiveSample("With_custom_styles", 650, 80)}}

### Zurückgegebene Eingabe

Das Verschachteln eines `<kbd>`-Elements innerhalb eines {{HTMLElement("samp")}}-Elements stellt eine Eingabe dar, die dem Benutzer vom System zurückgegeben wurde.

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

Das Verschachteln eines `<samp>`-Elements innerhalb eines `<kbd>`-Elements stellt eine Eingabe dar, die auf dem Text basiert, den das System zeigt, wie z.B. die Namen von Menüs und Menüelementen oder die Namen von auf dem Bildschirm angezeigten Schaltflächen.

Zum Beispiel können Sie erklären, wie man im "Datei"-Menü die Option "Neues Dokument" wählt, indem Sie ein HTML verwenden, das so aussieht:

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

Dies beinhaltet einige interessante Verschachtelungen. Für die Menüoptionbeschreibung wird die gesamte Eingabe in ein `<kbd>`-Element eingeschlossen. Dann sind die Menü- und Menüpunktnamen sowohl in `<kbd>` als auch in `<samp>` enthalten, was eine Eingabe anzeigt, die von einem Bildschirm-Widget ausgewählt wird.

#### Ergebnis

{{EmbedLiveSample("Representing_onscreen_input_options", 650, 120)}}

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>,
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
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
