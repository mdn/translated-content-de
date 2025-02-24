---
title: "<kbd>: Das Keyboard Input Element"
slug: Web/HTML/Element/kbd
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<kbd>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Abschnitt von Inline-Text, der eine textuelle Benutzereingabe von einer Tastatur, Spracheingabe oder einem anderen Text-Eingabegerät bezeichnet. Gewöhnlich rendert das {{Glossary("user_agent", "User-Agent")}} die Inhalte eines `<kbd>` Elements mit seiner standardmäßigen Monospace-Schriftart, obwohl dies nicht durch den HTML-Standard vorgeschrieben ist.

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

`<kbd>` kann in verschiedenen Kombinationen mit dem {{HTMLElement("samp")}} (Sample Output) Element verschachtelt werden, um verschiedene Formen von Eingaben oder Ausgaben basierend auf visuellen Hinweisen darzustellen.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Andere Elemente können zusammen mit `<kbd>` verwendet werden, um spezifischere Szenarien darzustellen:

- Das Verschachteln eines `<kbd>` Elements innerhalb eines anderen `<kbd>` Elements repräsentiert einen tatsächlichen Tastendruck oder eine andere Eingabeeinheit als Teil einer größeren Eingabe. Siehe [Tastendrücke innerhalb einer Eingabe darstellen](#darstellung_von_tastendrücken_innerhalb_einer_eingabe) unten.
- Ein `<kbd>` Element innerhalb eines {{HTMLElement("samp")}} Elements repräsentiert eine Eingabe, die vom System an den Benutzer zurückgegeben wurde. Siehe [Eingabe zurückgegeben](#eingabe_zurückgegeben) unten für ein Beispiel.
- Umgekehrt repräsentiert ein `<samp>` Element innerhalb eines `<kbd>` Elements eine Eingabe, die auf Text basiert, der vom System präsentiert wird, wie etwa die Namen von Menüs und Menüeinträgen oder die Namen von Schaltflächen, die auf dem Bildschirm angezeigt werden. Ein Beispiel dazu finden Sie unter [Darstellung von Eingabeoptionen auf dem Bildschirm](#darstellung_von_eingabeoptionen_auf_dem_bildschirm) unten.

> [!NOTE]
> Sie können einen benutzerdefinierten Stil definieren, um die standardmäßige Schriftartenwahl des Browsers für das `<kbd>` Element zu überschreiben, obwohl die Präferenzen des Benutzers möglicherweise Ihr CSS außer Kraft setzen.

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

Um eine Eingabe zu beschreiben, die aus mehreren Tastendrücken besteht, können Sie mehrere `<kbd>` Elemente verschachteln, wobei ein äußeres `<kbd>` Element die gesamte Eingabe darstellt und jeder einzelne Tastendruck oder Komponente der Eingabe innerhalb seines eigenen `<kbd>` eingeschlossen ist.

#### Ohne Stil

Zunächst sehen wir uns an, wie dies als einfaches HTML aussieht.

##### HTML

```html
<p>
  You can also create a new document using the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> keyboard shortcut.
</p>
```

Dies umschließt die gesamte Tastenfolge in einem äußeren `<kbd>` Element und dann jede einzelne Taste in ihrem eigenen, um die Komponenten der Sequenz zu kennzeichnen.

> [!NOTE]
> Sie müssen nicht all diese Verschachtelungen vornehmen; Sie können es vereinfachen, indem Sie das äußere `<kbd>` Element weglassen. Anders ausgedrückt, die Vereinfachung zu nur `<kbd>Ctrl</kbd>+<kbd>N</kbd>` wäre völlig gültig.
>
> Abhängig von Ihrem Stylesheet könnte es jedoch nützlich sein, diese Art von Verschachtelung vorzunehmen.

##### Ergebnis

Die Ausgabe sieht so aus, ohne dass ein Stylesheet angewendet wird:

{{EmbedLiveSample("Unstyled", 650, 80)}}

#### Mit benutzerdefinierten Stilen

Wir können dies verständlicher machen, indem wir etwas CSS hinzufügen:

##### CSS

Wir fügen einen neuen Selektor für verschachtelte `<kbd>` Elemente hinzu, `kbd>kbd`, den wir beim Rendern von Tastatureingaben anwenden können:

```css
kbd > kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

##### HTML

Dann aktualisieren wir das HTML, um diese Klasse auf die Tasten im dargestellten Output anzuwenden:

```html
<p>
  You can also create a new document by pressing the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> shortcut.
</p>
```

##### Ergebnis

Das Ergebnis ist genau das, was wir wollen!

{{EmbedLiveSample("With_custom_styles", 650, 80)}}

### Eingabe zurückgegeben

Das Verschachteln eines `<kbd>` Elements in einem {{HTMLElement("samp")}} Element repräsentiert Eingaben, die vom System an den Benutzer zurückgegeben wurden.

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

### Darstellung von Eingabeoptionen auf dem Bildschirm

Das Verschachteln eines `<samp>` Elements in einem `<kbd>` Element repräsentiert Eingaben, die auf Text basieren, der vom System präsentiert wird, wie z.B. die Namen von Menüs und Menüpunkten, oder die Namen von Tasten, die auf dem Bildschirm angezeigt werden.

Beispielsweise können Sie erklären, wie die Option "Neues Dokument" im Menü "Datei" ausgewählt wird, indem Sie folgendes HTML verwenden:

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

Dies zeigt eine interessante Verschachtelung. Für die Beschreibung der Menüoption wird die gesamte Eingabe in ein `<kbd>` Element eingeschlossen. Dann werden sowohl der Menü- als auch der Menüeintragsname innerhalb beider `<kbd>` und `<samp>` eingefügt, was eine Eingabe kennzeichnet, die aus einem Bildschirmwidget ausgewählt wird.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flow Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a>, fühlbarer Inhalt.
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
