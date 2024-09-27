---
title: "<kbd>: Das Keyboard Input-Element"
slug: Web/HTML/Element/kbd
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<kbd>`** [HTML](/de/docs/Web/HTML)-Element stellt einen Inline-Textbereich dar, der Benutzereingaben von einer Tastatur, Spracheingabe oder einem anderen Texteingabegerät kennzeichnet. Üblicherweise rendert der [User Agent](/de/docs/Glossary/user_agent) die Inhalte eines `<kbd>`-Elements mit seiner Standard-Schriftart für Festbreitenzeichen, obwohl dies nicht durch den HTML-Standard vorgeschrieben ist.

{{EmbedInteractiveExample("pages/tabbed/kbd.html", "tabbed-shorter")}}

`<kbd>` kann in verschiedenen Kombinationen mit dem {{HTMLElement("samp")}}-Element (Beispielausgabe) verschachtelt werden, um verschiedene Formen von Eingaben oder Ausgaben basierend auf visuellen Hinweisen zu repräsentieren.

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Andere Elemente können zusammen mit `<kbd>` verwendet werden, um spezifischere Szenarien darzustellen:

- Ein `<kbd>`-Element innerhalb eines anderen `<kbd>`-Elements zu verschachteln, repräsentiert eine tatsächliche Taste oder eine andere Einheit der Eingabe als Teil einer größeren Eingabe. Siehe [Darstellen von Tastendrücken innerhalb einer Eingabe](#darstellen_von_tastendrücken_innerhalb_einer_eingabe) unten.
- Ein `<kbd>`-Element innerhalb eines {{HTMLElement("samp")}}-Elements zu verschachteln, repräsentiert eine Eingabe, die vom System dem Benutzer zurückgegeben wurde. Siehe [Eingegebene Eingabe](#eingegebene_eingabe) unten für ein Beispiel.
- Ein `<samp>`-Element innerhalb eines `<kbd>`-Elements zu verschachteln, hingegen, stellt eine Eingabe dar, die auf vom System bereitgestelltem Text basiert, wie z.B. die Namen von Menüs und Menüelementen oder die Namen von auf dem Bildschirm angezeigten Schaltflächen. Siehe das Beispiel unter [Darstellen von Bildschirm-Eingabeoptionen](#darstellen_von_bildschirm-eingabeoptionen) unten.

> [!NOTE]
> Sie können einen eigenen Stil definieren, um die standardmäßige Schriftartauswahl des Browsers für das `<kbd>`-Element zu überschreiben, obwohl die Präferenzen des Benutzers möglicherweise Ihre CSS überschreiben könnten.

## Beispiele

### Einfaches Beispiel

```html
<p>
  Use the command <kbd>help mycommand</kbd> to view documentation for the
  command "mycommand".
</p>
```

#### Ergebnis

{{ EmbedLiveSample('Basic_example', 350, 80) }}

### Darstellen von Tastendrücken innerhalb einer Eingabe

Um eine Eingabe zu beschreiben, die aus mehreren Tastendrücken besteht, können Sie mehrere `<kbd>`-Elemente verschachteln, wobei ein äußeres `<kbd>`-Element die gesamte Eingabe darstellt und jeder einzelne Tastendruck oder Komponente der Eingabe in seinem eigenen `<kbd>` eingeschlossen wird.

#### Unformatiert

Zuerst sehen wir uns an, wie dies als einfaches HTML aussieht.

##### HTML

```html
<p>
  You can also create a new document using the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> keyboard shortcut.
</p>
```

Dies umschließt die gesamte Tastensequenz in einem äußeren `<kbd>`-Element und dann jede einzelne Taste in ihrem eigenen, um die Komponenten der Sequenz anzuzeigen.

> [!NOTE]
> Sie müssen nicht all diese Umbrüche machen; Sie können es vereinfachen, indem Sie das äußere `<kbd>`-Element weglassen. In anderen Worten, dies auf einfach `<kbd>Ctrl</kbd>+<kbd>N</kbd>` zu reduzieren wäre vollkommen gültig.
>
> Abhängig von Ihrem Stylesheet kann es jedoch nützlich sein, diese Art der Verschachtelung vorzunehmen.

##### Ergebnis

Die Ausgabe sieht ohne angewendetes Stylesheet so aus:

{{EmbedLiveSample("Unstyled", 650, 80)}}

#### Mit benutzerdefinierten Styles

Wir können dies durch Hinzufügen eines CSS verständlicher machen:

##### CSS

Wir fügen einen neuen Selektor für verschachtelte `<kbd>`-Elemente hinzu, `kbd>kbd`, den wir beim Rendern von Tastaturtasten anwenden können:

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

### Eingegebene Eingabe

Ein `<kbd>`-Element innerhalb eines {{HTMLElement("samp")}}-Elements zu verschachteln, repräsentiert eine Eingabe, die vom System dem Benutzer zurückgegeben wurde.

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

### Darstellen von Bildschirm-Eingabeoptionen

Ein `<samp>`-Element innerhalb eines `<kbd>`-Elements zu verschachteln, stellt eine Eingabe dar, die auf vom System bereitgestelltem Text basiert, wie z.B. die Namen von Menüs und Menüelementen oder die Namen von auf dem Bildschirm angezeigten Schaltflächen.

Sie können beispielsweise erklären, wie die Option "Neues Dokument" im "Datei"-Menü gewählt wird, indem Sie HTML verwenden, das so aussieht:

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

Dies führt zu einer interessanten Verschachtelung. Für die Menüoptionsbeschreibung wird die gesamte Eingabe in ein `<kbd>`-Element eingeschlossen. Dann werden darin sowohl die Menü- als auch die Menüpunktnamen in `<kbd>` und `<samp>` eingeschlossen, was eine Eingabe anzeigt, die aus einem Bildschirm-Widget ausgewählt wird.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließende Inhalte</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">formulierende Inhalte</a>, greifbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Formulierende Inhalte</a>.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">formulierende Inhalte</a> akzeptiert.
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
