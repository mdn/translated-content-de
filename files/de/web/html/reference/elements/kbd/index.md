---
title: "<kbd>: Das Keyboard Input Element"
slug: Web/HTML/Reference/Elements/kbd
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<kbd>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Abschnitt von Inline-Text, der eine textuelle Benutzereingabe von einer Tastatur, Spracheingabe oder einem anderen Texteingabegerät kennzeichnet. Üblicherweise rendert der {{Glossary("user_agent", "User-Agent")}} den Inhalt eines `<kbd>` Elements mit seiner standardmäßig festgelegten Monospace-Schriftart, obwohl dies nicht vom HTML-Standard vorgeschrieben ist.

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

`<kbd>` kann in verschiedenen Kombinationen mit dem {{HTMLElement("samp")}} (Sample Output) Element verschachtelt werden, um verschiedene Formen von Eingabe oder Ausgabe basierend auf visuellen Hinweisen darzustellen.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Andere Elemente können zusammen mit `<kbd>` verwendet werden, um spezifischere Szenarien darzustellen:

- Das Verschachteln eines `<kbd>` Elements innerhalb eines anderen `<kbd>` Elements repräsentiert eine tatsächliche Taste oder eine andere Eingabeeinheit als Teil einer größeren Eingabe. Siehe [Repräsentation von Tastenanschlägen innerhalb einer Eingabe](#repräsentation_von_tastenanschlägen_innerhalb_einer_eingabe) unten.
- Das Verschachteln eines `<kbd>` Elements in einem {{HTMLElement("samp")}} Element stellt Eingaben dar, die vom System an den Benutzer zurückgegeben wurden. Siehe [Eingabe wiedergegeben](#eingabe_wiedergegeben) weiter unten für ein Beispiel.
- Das Verschachteln eines `<samp>` Elements in einem `<kbd>` Element hingegen repräsentiert Eingaben, die auf vom System präsentierten Texte basieren, wie z.B. die Namen von Menüs und Menüeinträgen oder die Namen von auf dem Bildschirm angezeigten Schaltflächen. Siehe das Beispiel unter [Repräsentation von Bildschirm-Eingabeoptionen](#repräsentation_von_bildschirm-eingabeoptionen) unten.

> [!NOTE]
> Sie können einen benutzerdefinierten Stil definieren, um die Schriftartenauswahl des Browsers für das `<kbd>` Element zu überschreiben, obwohl die Benutzerpräferenzen möglicherweise Ihre CSS überschreiben können.

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

### Repräsentation von Tastenanschlägen innerhalb einer Eingabe

Um eine Eingabe, die aus mehreren Tastenanschlägen besteht, zu beschreiben, können Sie mehrere `<kbd>` Elemente verschachteln, wobei ein äußeres `<kbd>` Element die gesamte Eingabe repräsentiert und jeder einzelne Tastenanschlag oder Komponent der Eingabe in seinem eigenen `<kbd>` eingeschlossen ist.

#### Ohne Stil

Zuerst schauen wir uns an, wie das in einfachen HTML aussieht.

##### HTML

```html
<p>
  You can also create a new document using the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> keyboard shortcut.
</p>
```

Das umschließt die gesamte Tastenfolge in einem äußeren `<kbd>` Element und dann jede einzelne Taste in ihrem eigenen, um die Komponenten der Reihenfolge zu kennzeichnen.

> [!NOTE]
> Sie müssen nicht all diese Umschließungen vornehmen; Sie können sich dafür entscheiden, es zu vereinfachen, indem Sie das externe `<kbd>` Element weglassen. Mit anderen Worten, die Vereinfachung auf nur `<kbd>Ctrl</kbd>+<kbd>N</kbd>` wäre vollkommen gültig.
>
> Abhängig von Ihrem Stylesheet kann es jedoch nützlich sein, diese Art der Verschachtelung durchzuführen.

##### Ergebnis

Ohne ein Stylesheet angewendet sieht die Ausgabe so aus:

{{EmbedLiveSample("Unstyled", 650, 80)}}

#### Mit benutzerdefinierten Styles

Wir können mehr Klarheit gewinnen, indem wir etwas CSS hinzufügen:

##### CSS

Wir fügen einen neuen Selektor für verschachtelte `<kbd>` Elemente hinzu, `kbd>kbd`, den wir beim Rendern von Tastaturtasten anwenden können:

```css
kbd > kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

##### HTML

Dann aktualisieren wir das HTML, um diese Klasse für die Tasten in der Ausgabe zu verwenden:

```html
<p>
  You can also create a new document by pressing the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> shortcut.
</p>
```

##### Ergebnis

Das Ergebnis ist genau das, was wir wollen!

{{EmbedLiveSample("With_custom_styles", 650, 80)}}

### Eingabe wiedergegeben

Das Verschachteln eines `<kbd>` Elements innerhalb eines {{HTMLElement("samp")}} Elements stellt Eingaben dar, die vom System an den Benutzer zurückgegeben wurden.

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

### Repräsentation von Bildschirm-Eingabeoptionen

Das Verschachteln eines `<samp>` Elements in einem `<kbd>` Element repräsentiert Eingaben, die auf Text basieren, der vom System präsentiert wird, wie die Namen von Menüs und Menüeinträgen oder die Namen von auf dem Bildschirm angezeigten Schaltflächen.

Zum Beispiel können Sie erklären, wie Sie die Option "Neues Dokument" im Menü "Datei" auswählen, indem Sie HTML verwenden, das so aussieht:

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

Dies macht eine interessante Verschachtelung. Für die Menüoptionsbeschreibung ist die gesamte Eingabe in einem `<kbd>` Element eingeschlossen. Dann sind innerhalb dieses Elements sowohl die Menü- als auch die Menüeintragsnamen in `<kbd>` und `<samp>` enthalten, was eine Eingabe darstellt, die von einem Bildschirmelement ausgewählt wird.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließende Inhalte</a>,
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
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Jede</td>
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
