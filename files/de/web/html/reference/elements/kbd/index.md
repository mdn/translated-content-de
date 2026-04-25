---
title: "`<kbd>` HTML Keyboard-Eingabeelement"
short-title: <kbd>
slug: Web/HTML/Reference/Elements/kbd
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<kbd>`**-Element [HTML](/de/docs/Web/HTML) repräsentiert einen Textabschnitt, der eine Benutzereingabe über die Tastatur, Spracheingabe oder ein anderes Texteingabegerät beschreibt. Üblicherweise rendert der {{Glossary("user_agent", "User-Agent")}} den Inhalt eines `<kbd>`-Elements mit seiner Standard-Schriftart für Monospace, obwohl dies vom HTML-Standard nicht vorgeschrieben ist.

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

`<kbd>` kann in verschiedenen Kombinationen mit dem {{HTMLElement("samp")}}-Element (Beispielausgabe) verschachtelt werden, um verschiedene Formen von Ein- oder Ausgaben basierend auf visuellen Hinweisen darzustellen.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Andere Elemente können zusammen mit `<kbd>` verwendet werden, um spezifischere Szenarien darzustellen:

- Die Verschachtelung eines `<kbd>`-Elements innerhalb eines anderen `<kbd>`-Elements repräsentiert einen tatsächlichen Tastendruck oder eine andere Eingabeeinheit als Teil einer größeren Eingabe. Siehe [Darstellung von Tastendrücken innerhalb einer Eingabe](#darstellung_von_tastendrücken_innerhalb_einer_eingabe) unten.
- Die Verschachtelung eines `<kbd>`-Elements in einem {{HTMLElement("samp")}}-Element stellt eine Eingabe dar, die dem Benutzer vom System zurückgegeben wurde. Ein Beispiel dazu finden Sie unter [Zurückgegebene Eingabe](#zurückgegebene_eingabe).
- Die Verschachtelung eines `<samp>`-Elements in einem `<kbd>`-Element hingegen repräsentiert eine Eingabe, die auf vom System präsentierten Text basiert, wie z.B. Namen von Menüs und Menüeinträgen oder die Bezeichnungen von Schaltflächen auf dem Bildschirm. Siehe das Beispiel unter [Darstellung von Bildschirm-Eingabeoptionen](#darstellung_von_bildschirm-eingabeoptionen) unten.

> [!NOTE]
> Sie können einen benutzerdefinierten Stil festlegen, um die Standard-Schriftauswahl des Browsers für das `<kbd>`-Element zu überschreiben, obwohl die Vorlieben des Benutzers möglicherweise Ihre CSS überschreiben können.

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

### Darstellung von Tastendrücken innerhalb einer Eingabe

Um eine Eingabe zu beschreiben, die aus mehreren Tastendrücken besteht, können Sie mehrere `<kbd>`-Elemente verschachteln, wobei ein äußeres `<kbd>`-Element die gesamte Eingabe darstellt und jeder einzelne Tastendruck oder Bestandteil der Eingabe in einem eigenen `<kbd>` eingeschlossen ist.

#### Unformatiert

Sehen wir uns zunächst an, wie das in einfachem HTML aussieht.

##### HTML

```html
<p>
  You can also create a new document using the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> keyboard shortcut.
</p>
```

Das umschließt die gesamte Tastenfolge in einem äußeren `<kbd>`-Element und dann jede einzelne Taste in einem eigenen, um die Bestandteile der Sequenz zu kennzeichnen.

> [!NOTE]
> Sie müssen nicht all diese Verschachtelungen vornehmen; Sie können es vereinfachen, indem Sie das äußere `<kbd>`-Element weglassen. Einfacher gesagt, dies auf `<kbd>Ctrl</kbd>+<kbd>N</kbd>` zu reduzieren, wäre vollkommen gültig.
>
> Abhängig von Ihrem Stylesheet finden Sie diese Art der Verschachtelung jedoch möglicherweise nützlich.

##### Ergebnis

Ohne angewandtes Stylesheet sieht die Ausgabe so aus:

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

Dann aktualisieren wir das HTML, um diese Klasse für die in der Ausgabe dargestellten Tasten zu verwenden:

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

Die Verschachtelung eines `<kbd>`-Elements in einem {{HTMLElement("samp")}}-Element repräsentiert eine Eingabe, die dem Benutzer vom System zurückgegeben wurde.

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

Die Verschachtelung eines `<samp>`-Elements in einem `<kbd>`-Element repräsentiert eine Eingabe, die auf vom System präsentierten Text basiert, wie z.B. die Namen von Menüs und Menüeinträgen oder die Bezeichnungen von Schaltflächen auf dem Bildschirm.

Zum Beispiel können Sie erklären, wie Sie die Option "Neues Dokument" im Menü "Datei" auswählen, durch HTML, das so aussieht:

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

Das umfasst eine interessante Verschachtelung. Für die Beschreibung der Menüoption ist die gesamte Eingabe in einem `<kbd>`-Element eingeschlossen. Dann sind innerhalb dessen sowohl die Menünamen als auch die Menüeintragsnamen in `<kbd>` und `<samp>` enthalten, was eine Eingabe darstellt, die aus einem Bildschirm-Widget ausgewählt wird.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungs-Inhalt</a>, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungs-Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungs-Inhalt</a> akzeptiert.
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
