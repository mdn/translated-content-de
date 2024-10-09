---
title: "<kbd>: Das Keyboard Input-Element"
slug: Web/HTML/Element/kbd
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

Das **`<kbd>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Abschnitt von Inline-Text, der eine Benutzereingabe von einer Tastatur, einer Spracheingabe oder einem anderen Texterfassungsgerät bezeichnet. Üblicherweise rendert der {{Glossary("user_agent", "User Agent")}} den Inhalt eines `<kbd>`-Elements mit seiner Standard-Monospace-Schriftart, obwohl dies nicht durch den HTML-Standard vorgeschrieben ist.

{{EmbedInteractiveExample("pages/tabbed/kbd.html", "tabbed-shorter")}}

`<kbd>` kann in verschiedenen Kombinationen mit dem {{HTMLElement("samp")}} (Beispielausgabe)-Element verschachtelt werden, um verschiedene Formen von Eingaben oder Ausgaben basierend auf visuellen Hinweisen darzustellen.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Andere Elemente können in Kombination mit `<kbd>` verwendet werden, um spezifischere Szenarien darzustellen:

- Das Verschachteln eines `<kbd>`-Elements innerhalb eines anderen `<kbd>`-Elements stellt eine tatsächliche Taste oder eine andere Eingabeeinheit als Teil einer größeren Eingabe dar. Siehe [Tasteneingaben innerhalb einer Eingabe darstellen](#tasteneingaben_innerhalb_einer_eingabe_darstellen) unten.
- Das Verschachteln eines `<kbd>`-Elements in einem {{HTMLElement("samp")}}-Element stellt eine Eingabe dar, die vom System an den Benutzer zurückgegeben wurde. Ein Beispiel finden Sie unter [Zurückgegebene Eingabe](#zurückgegebene_eingabe) unten.
- Das Verschachteln eines `<samp>`-Elements in einem `<kbd>`-Element hingegen stellt eine Eingabe dar, die auf einem vom System präsentierten Text basiert, wie z. B. die Namen von Menüs und Menüelementen oder die Namen von Schaltflächen, die auf dem Bildschirm angezeigt werden. Siehe das Beispiel unter [Darstellung von Bildschirmeingabeoptionen](#darstellung_von_bildschirmeingabeoptionen) unten.

> [!NOTE]
> Sie können einen benutzerdefinierten Stil definieren, um die Standard-Schriftauswahl des Browsers für das `<kbd>`-Element zu überschreiben, obwohl die Benutzereinstellungen möglicherweise Ihre CSS-Definition überschreiben könnten.

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

### Tasteneingaben innerhalb einer Eingabe darstellen

Um eine Eingabe zu beschreiben, die aus mehreren Tastendrücken besteht, können Sie mehrere `<kbd>`-Elemente verschachteln, wobei ein äußeres `<kbd>`-Element die Gesamteingabe und jede einzelne Taste oder Komponente der Eingabe in ihrem eigenen `<kbd>`-Element eingeschlossen ist.

#### Ohne Stil

Zuerst sehen wir uns an, wie dies als einfaches HTML aussieht.

##### HTML

```html
<p>
  You can also create a new document using the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> keyboard shortcut.
</p>
```

Dies umfasst die gesamte Tastenfolge in einem äußeren `<kbd>`-Element, dann jede einzelne Taste in ihrem eigenen, um die Komponenten der Sequenz zu kennzeichnen.

> [!NOTE]
> Es ist nicht notwendig, all diese Verschachtelungen zu verwenden; Sie können es vereinfachen, indem Sie das äußere `<kbd>`-Element weglassen. Mit anderen Worten, die Vereinfachung auf `<kbd>Ctrl</kbd>+<kbd>N</kbd>` wäre völlig gültig.
>
> Je nach Ihrem Stylesheet kann es jedoch nützlich sein, diese Art von Verschachtelung zu verwenden.

##### Ergebnis

Ohne ein Stylesheet sieht die Ausgabe folgendermaßen aus:

{{EmbedLiveSample("Unstyled", 650, 80)}}

#### Mit benutzerdefinierten Stilen

Wir können dies verständlicher machen, indem wir etwas CSS hinzufügen:

##### CSS

Wir fügen einen neuen Selektor für verschachtelte `<kbd>`-Elemente hinzu, `kbd>kbd`, den wir beim Rendern von Tasteneingaben anwenden können:

```css
kbd > kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

##### HTML

Dann aktualisieren wir das HTML, um diese Klasse auf die Tasten in der präsentierten Ausgabe anzuwenden:

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

Das Verschachteln eines `<kbd>`-Elements in einem {{HTMLElement("samp")}}-Element stellt eine Eingabe dar, die vom System an den Benutzer zurückgegeben wurde.

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

### Darstellung von Bildschirmeingabeoptionen

Das Verschachteln eines `<samp>`-Elements in einem `<kbd>`-Element stellt eine Eingabe dar, die auf einem vom System präsentierten Text basiert, wie z. B. die Namen von Menüs und Menüelementen oder die Namen von Schaltflächen, die auf dem Bildschirm angezeigt werden.

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

Dies zeigt eine interessante Verschachtelung. Für die Menüoptionenbeschreibung ist die gesamte Eingabe in einem `<kbd>`-Element eingeschlossen. Dann sind darin sowohl die Menü- als auch die Menüpunktnamen in `<kbd>` und `<samp>` enthalten, was auf eine Eingabe hinweist, die aus einem Bildschirm-Widget ausgewählt wird.

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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Ausdrücklicher Inhalt</a>, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Ausdrücklicher Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">ausdrücklichen Inhalt</a> akzeptiert.
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
