---
title: "<kbd>: Das Tastatureingabe-Element"
slug: Web/HTML/Reference/Elements/kbd
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<kbd>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Inline-Abschnitt von Text, der Benutzereingaben von einer Tastatur, Spracheingaben oder einem anderen Texteingabegerät darstellt. Nach Konvention rendert der {{Glossary("user_agent", "User-Agent")}} die Inhalte eines `<kbd>`-Elements standardmäßig unter Verwendung seiner standardisierten Monospace-Schriftart, obwohl dies nicht vom HTML-Standard vorgeschrieben ist.

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
    0 1px 1px rgba(0, 0, 0, 0.2),
    0 2px 0 0 rgba(255, 255, 255, 0.7) inset;
  color: #333;
  display: inline-block;
  font-size: 0.85em;
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
}
```

`<kbd>` kann in verschiedenen Kombinationen mit dem {{HTMLElement("samp")}} (Ausgabe-Beispiel) Element verschachtelt werden, um verschiedene Formen von Ein- oder Ausgaben basierend auf visuellen Zeichen darzustellen.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Andere Elemente können zusammen mit `<kbd>` verwendet werden, um spezifischere Szenarien darzustellen:

- Das Verschachteln eines `<kbd>`-Elements in einem anderen `<kbd>`-Element repräsentiert eine tatsächliche Taste oder eine andere Eingabeeinheit als Teil einer größeren Eingabe. Siehe [Darstellung von Tasteneingaben innerhalb einer Eingabe](#darstellung_von_tasteneingaben_innerhalb_einer_eingabe) unten.
- Das Verschachteln eines `<kbd>`-Elements innerhalb eines {{HTMLElement("samp")}}-Elements stellt eine Eingabe dar, die vom System an den Benutzer zurückgegeben wurde. Siehe [Zurückgegebene Eingabe](#zurückgegebene_eingabe) unten für ein Beispiel.
- Das Verschachteln eines `<samp>`-Elements innerhalb eines `<kbd>`-Elements hingegen repräsentiert Eingaben, die auf textlichen Informationen beruhen, die vom System präsentiert werden, wie die Namen von Menüs und Menüeinträgen oder die Namen von auf dem Bildschirm angezeigten Schaltflächen. Siehe das Beispiel unter [Darstellung von Bildschirm-Eingabeoptionen](#darstellung_von_bildschirm-eingabeoptionen) unten.

> [!NOTE]
> Sie können einen benutzerdefinierten Stil definieren, um die Standard-Schriftauswahl des Browsers für das `<kbd>`-Element zu überschreiben, obwohl die Vorlieben des Benutzers möglicherweise Ihre CSS außer Kraft setzen.

## Beispiele

### Einfaches Beispiel

```html
<p>
  Use the command <kbd>help my-command</kbd> to view documentation for the
  command "my-command".
</p>
```

#### Ergebnis

{{EmbedLiveSample('Basic_example', 350, 80)}}

### Darstellung von Tasteneingaben innerhalb einer Eingabe

Um eine Eingabe zu beschreiben, die aus mehreren Tastenanschlägen besteht, können Sie mehrere `<kbd>`-Elemente verschachteln, wobei ein äußeres `<kbd>`-Element die Gesamteingabe und jeder einzelne Tastenanschlag oder Komponente der Eingabe mit seinem eigenen `<kbd>` eingeschlossen ist.

#### Unformatiert

Zuerst schauen wir uns an, wie das als einfaches HTML aussieht.

##### HTML

```html
<p>
  You can also create a new document using the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> keyboard shortcut.
</p>
```

Dies umschließt die gesamte Tastenkombination in einem äußeren `<kbd>`-Element und dann jede einzelne Taste in ihrem eigenen, um die Komponenten der Sequenz darzustellen.

> [!NOTE]
> Es ist nicht notwendig, all diese Verschachtelungen vorzunehmen; Sie können es vereinfachen, indem Sie das äußere `<kbd>`-Element weglassen. Anders gesagt, die Vereinfachung zu `<kbd>Ctrl</kbd>+<kbd>N</kbd>` wäre vollkommen gültig.
>
> Abhängig von Ihrem Stylesheet könnten Sie es jedoch nützlich finden, diese Art von Verschachtelungen zu verwenden.

##### Ergebnis

Die Ausgabe sieht ohne ein angewendetes Stylesheet so aus:

{{EmbedLiveSample("Unstyled", 650, 80)}}

#### Mit benutzerdefinierten Stilen

Wir können das verständlicher machen, indem wir etwas CSS hinzufügen:

##### CSS

Wir fügen einen neuen Selektor für verschachtelte `<kbd>`-Elemente, `kbd>kbd`, hinzu, den wir bei der Darstellung von Tastatureingaben anwenden können:

```css
kbd > kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

##### HTML

Dann aktualisieren wir das HTML, um diese Klasse auf die Tasten in der dargestellten Ausgabe anzuwenden:

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

Das Verschachteln eines `<kbd>`-Elements innerhalb eines {{HTMLElement("samp")}}-Elements stellt eine Eingabe dar, die vom System an den Benutzer zurückgegeben wurde.

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

Das Verschachteln eines `<samp>`-Elements innerhalb eines `<kbd>`-Elements repräsentiert Eingaben, die auf textlichen Informationen beruhen, die vom System präsentiert werden, wie die Namen von Menüs und Menüeinträgen oder die Namen von auf dem Bildschirm angezeigten Schaltflächen.

Zum Beispiel können Sie erklären, wie die Option "Neues Dokument" im "Datei"-Menü mithilfe von HTML wie folgt ausgewählt werden kann:

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

Dies führt interessante Verschachtelungen durch. Für die Menüoptionsbeschreibung wird die gesamte Eingabe in ein `<kbd>`-Element eingeschlossen. Dann sind im Inneren sowohl die Menü- als auch die Menüpunktenamen sowohl in `<kbd>` als auch `<samp>` enthalten, was auf eine Eingabe hinweist, die aus einem Bildschirm-Widget ausgewählt wird.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>, fühlbarer Inhalt.
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
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
