---
title: "<kbd>: Das Keyboard Input-Element"
slug: Web/HTML/Reference/Elements/kbd
l10n:
  sourceCommit: 6ed02a2b0e0d891f7d3b4c2a6b1d9cc05c90ed9c
---

Das **`<kbd>`**-Element in [HTML](/de/docs/Web/HTML) repräsentiert einen Inline-Textabschnitt, der die Eingabe eines Benutzers über Tastatur, Spracheingabe oder ein anderes Texteingabegerät anzeigt. Konventionell rendert der {{Glossary("user_agent", "User Agent")}} den Inhalt eines `<kbd>`-Elements mit seiner Standard-Monospace-Schriftart, obwohl dies vom HTML-Standard nicht vorgeschrieben ist.

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

`<kbd>` kann in verschiedenen Kombinationen mit dem {{HTMLElement("samp")}} (Sample Output) Element verschachtelt werden, um verschiedene Formen der Eingabe oder Ausgabe basierend auf visuellen Hinweisen darzustellen.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Andere Elemente können gemeinsam mit `<kbd>` verwendet werden, um spezifischere Szenarien darzustellen:

- Das Verschachteln eines `<kbd>`-Elements innerhalb eines anderen `<kbd>`-Elements stellt eine tatsächliche Taste oder eine andere Eingabeeinheit als Teil einer größeren Eingabe dar. Siehe [Darstellung von Tastenanschlägen innerhalb einer Eingabe](#darstellung_von_tastenanschlägen_innerhalb_einer_eingabe) unten.
- Das Verschachteln eines `<kbd>`-Elements innerhalb eines {{HTMLElement("samp")}}-Elements stellt Eingaben dar, die vom System an den Benutzer zurückgegeben wurden. Siehe [Wiedergespiegelte Eingabe](#wiedergespiegelte_eingabe) unten für ein Beispiel.
- Das Verschachteln eines `<samp>`-Elements innerhalb eines `<kbd>`-Elements stellt hingegen Eingaben dar, die auf vom System angezeigtem Text basieren, wie die Namen von Menüs und Menüeinträgen oder die Namen von Bildschirmschaltflächen. Siehe das Beispiel unter [Darstellung von Bildschirm-Eingabemöglichkeiten](#darstellung_von_bildschirm-eingabemöglichkeiten) unten.

> [!NOTE]
> Sie können einen benutzerdefinierten Stil definieren, um die Standard-Schriftauswahl des Browsers für das `<kbd>`-Element zu überschreiben, obwohl die Benutzereinstellungen potenziell Ihr CSS überschreiben können.

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

### Darstellung von Tastenanschlägen innerhalb einer Eingabe

Um eine Eingabe zu beschreiben, die aus mehreren Tastenanschlägen besteht, können Sie mehrere `<kbd>`-Elemente verschachteln, wobei ein äußeres `<kbd>`-Element die Gesamteingabe und jeder einzelne Tastenanschlag oder Bestandteile der Eingabe in seinem eigenen `<kbd>` eingeschlossen wird.

#### Unformatiert

Zuerst schauen wir, wie das in reinem HTML aussieht.

##### HTML

```html
<p>
  You can also create a new document using the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> keyboard shortcut.
</p>
```

Dies umschließt die gesamte Tastensequenz in einem äußeren `<kbd>`-Element und dann jede einzelne Taste in ihrem eigenen, um die Komponenten der Sequenz darzustellen.

> [!NOTE]
> Sie müssen nicht all diese Verschachtelung vornehmen; Sie können es vereinfachen, indem Sie das äußere `<kbd>`-Element weglassen. Anders gesagt, das Vereinfachen zu nur `<kbd>Ctrl</kbd>+<kbd>N</kbd>` wäre vollkommen gültig.
>
> Je nach Ihrem Stylesheet können Sie es jedoch nützlich finden, diese Art der Verschachtelung vorzunehmen.

##### Ergebnis

Ohne angewendetes Stylesheet sieht die Ausgabe so aus:

{{EmbedLiveSample("Unstyled", 650, 80)}}

#### Mit benutzerdefinierten Stilen

Wir können dies verständlicher machen, indem wir etwas CSS hinzufügen:

##### CSS

Wir fügen einen neuen Selektor für verschachtelte `<kbd>`-Elemente hinzu, `kbd>kbd`, den wir beim Rendern von Tastenschlüsseln anwenden können:

```css
kbd > kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

##### HTML

Dann aktualisieren wir das HTML, um diese Klasse auf die Tasten im auszugebenden Bereich zu verwenden:

```html
<p>
  You can also create a new document by pressing the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> shortcut.
</p>
```

##### Ergebnis

Das Ergebnis ist genau das, was wir wollen!

{{EmbedLiveSample("With_custom_styles", 650, 80)}}

### Wiedergespiegelte Eingabe

Das Verschachteln eines `<kbd>`-Elements innerhalb eines {{HTMLElement("samp")}}-Elements stellt Eingaben dar, die vom System an den Benutzer zurückgegeben wurden.

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

### Darstellung von Bildschirm-Eingabemöglichkeiten

Das Verschachteln eines `<samp>`-Elements innerhalb eines `<kbd>`-Elements stellt Eingaben dar, die auf vom System angezeigtem Text basieren, wie die Namen von Menüs und Menüeinträgen oder die Namen von Bildschirmschaltflächen.

Zum Beispiel können Sie erklären, wie man die "Neues Dokument"-Option im "Datei"-Menü wählt, indem Sie HTML verwenden, das so aussieht:

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

Dies verwendet interessante Verschachtelungen. Für die Menüoption Beschreibung ist die gesamte Eingabe in einem `<kbd>`-Element eingeschlossen. Dann, darin, sind sowohl die Menü- als auch die Menüelementnamen sowohl in `<kbd>` als auch `<samp>` enthalten, was eine aus einem Bildschirm-Widget ausgewählte Eingabe anzeigt.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasinhalte</a>, belegbaren Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasinhalte</a>.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasinhalte</a> akzeptiert.
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
