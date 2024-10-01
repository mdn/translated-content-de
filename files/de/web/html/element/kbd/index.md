---
title: "<kbd>: Das Keyboard Input-Element"
slug: Web/HTML/Element/kbd
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<kbd>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine Spanne von Inline-Text, die die Texteingabe eines Benutzers von einer Tastatur, Spracheingabe oder einem anderen Texteingabegerät darstellt. Üblicherweise rendert der {{Glossary("user_agent", "User-Agent")}} die Inhalte eines `<kbd>`-Elements mit seiner Standard-Schriftart für Monospace, obwohl dies nicht vom HTML-Standard vorgeschrieben ist.

{{EmbedInteractiveExample("pages/tabbed/kbd.html", "tabbed-shorter")}}

`<kbd>` kann in verschiedenen Kombinationen mit dem {{HTMLElement("samp")}} (Sample Output)-Element verschachtelt werden, um verschiedene Formen von Eingaben oder Ausgaben basierend auf visuellen Hinweisen darzustellen.

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Andere Elemente können zusammen mit `<kbd>` verwendet werden, um spezifischere Szenarien darzustellen:

- Ein `<kbd>`-Element, das innerhalb eines anderen `<kbd>`-Elements verschachtelt ist, stellt eine tatsächliche Taste oder eine andere Eingabeeinheit als Teil einer größeren Eingabe dar. Siehe [Darstellung von Tastenanschlägen innerhalb einer Eingabe](#darstellung_von_tastenanschlägen_innerhalb_einer_eingabe) unten.
- Ein `<kbd>`-Element in einem {{HTMLElement("samp")}}-Element stellt Eingaben dar, die vom System an den Benutzer zurückgemeldet wurde. Siehe [Widerhallende Eingabe](#widerhallende_eingabe) unten für ein Beispiel.
- Ein `<samp>`-Element innerhalb eines `<kbd>`-Elements stellt Eingaben dar, die auf vom System angezeigtem Text basieren, wie die Namen von Menüs und Menüeinträgen oder die Namen von Schaltflächen, die auf dem Bildschirm angezeigt werden. Siehe das Beispiel unter [Darstellung von Bildschirm-Eingabeoptionen](#darstellung_von_bildschirm-eingabeoptionen) unten.

> [!NOTE]
> Sie können einen benutzerdefinierten Stil definieren, um die standardmäßige Schriftauswahl des Browsers für das `<kbd>`-Element zu überschreiben, obwohl die Vorlieben des Benutzers möglicherweise Ihre CSS überschreiben.

## Beispiele

### Grundlegendes Beispiel

```html
<p>
  Use the command <kbd>help mycommand</kbd> to view documentation for the
  command "mycommand".
</p>
```

#### Ergebnis

{{ EmbedLiveSample('Basic_example', 350, 80) }}

### Darstellung von Tastenanschlägen innerhalb einer Eingabe

Um eine Eingabe zu beschreiben, die aus mehreren Tastenanschlägen besteht, können Sie mehrere `<kbd>`-Elemente verschachteln, wobei ein äußeres `<kbd>`-Element die gesamte Eingabe darstellt und jeder einzelne Tastenanschlag oder Bestandteil der Eingabe innerhalb seines eigenen `<kbd>` eingeschlossen ist.

#### Unformatiert

Zuerst sehen wir uns an, wie dies als reines HTML aussieht.

##### HTML

```html
<p>
  You can also create a new document using the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> keyboard shortcut.
</p>
```

Dies umschließt die gesamte Tastensequenz in einem äußeren `<kbd>`-Element, dann jede einzelne Taste innerhalb ihres eigenen, um die Komponenten der Sequenz zu kennzeichnen.

> [!NOTE]
> Sie müssen nicht all dieses Verschachteln machen; Sie können es vereinfachen, indem Sie das äußere `<kbd>`-Element weglassen. Mit anderen Worten, die Vereinfachung auf nur `<kbd>Ctrl</kbd>+<kbd>N</kbd>` wäre vollkommen gültig.
>
> Abhängig von Ihrem Stylesheet kann es jedoch nützlich sein, diese Art von Verschachtelung zu verwenden.

##### Ergebnis

Ohne ein angewendetes Stylesheet sieht das Ergebnis so aus:

{{EmbedLiveSample("Unstyled", 650, 80)}}

#### Mit benutzerdefinierten Stilen

Wir können dies verständlicher machen, indem wir etwas CSS hinzufügen:

##### CSS

Wir fügen einen neuen Selektor für verschachtelte `<kbd>`-Elemente, `kbd>kbd`, hinzu, den wir beim Rendern von Tastaturtasten anwenden können:

```css
kbd > kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

##### HTML

Dann aktualisieren wir das HTML, um diese Klasse auf die Tasten im auszugebenden Text anzuwenden:

```html
<p>
  You can also create a new document by pressing the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> shortcut.
</p>
```

##### Ergebnis

Das Ergebnis ist genau das, was wir wollen!

{{EmbedLiveSample("With_custom_styles", 650, 80)}}

### Widerhallende Eingabe

Ein `<kbd>`-Element, das in einem {{HTMLElement("samp")}}-Element verschachtelt ist, stellt Eingaben dar, die vom System an den Benutzer zurückgemeldet wurden.

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

Ein `<samp>`-Element innerhalb eines `<kbd>`-Elements repräsentiert Eingaben, die auf vom System angezeigtem Text basieren, wie die Namen von Menüs und Menüeinträge oder die Namen von Schaltflächen, die auf dem Bildschirm angezeigt werden.

Zum Beispiel können Sie erklären, wie Sie die Option "Neues Dokument" im "Datei"-Menü wählen, indem Sie HTML verwenden, das so aussieht:

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

Dies zeigt eine interessante Verschachtelung. Für die Menüoptionsbeschreibung ist die gesamte Eingabe in einem `<kbd>`-Element eingeschlossen. Dann sind sowohl die Menü- als auch die Menüpunktnamen sowohl in `<kbd>` als auch in `<samp>` enthalten, was eine Eingabe anzeigt, die aus einem Bildschirm-Widget ausgewählt wird.

#### Ergebnis

{{EmbedLiveSample("Representing_onscreen_input_options", 650, 120)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a>, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a>.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
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
