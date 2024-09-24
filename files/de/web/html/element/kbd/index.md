---
title: "<kbd>: Das Keyboard Input-Element"
slug: Web/HTML/Element/kbd
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<kbd>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Abschnitt von Inline-Text, der eine Benutzereingabe von einer Tastatur, Spracheingabe oder einem anderen Texteingabegerät darstellt. Üblicherweise rendert der {{Glossary("user agent")}} den Inhalt eines `<kbd>`-Elements mit seiner Standardschriftart für Monospace, obwohl dies nicht durch den HTML-Standard vorgeschrieben ist.

{{EmbedInteractiveExample("pages/tabbed/kbd.html", "tabbed-shorter")}}

`<kbd>` kann in verschiedenen Kombinationen mit dem {{HTMLElement("samp")}} (Sample Output)-Element verschachtelt werden, um verschiedene Formen von Eingabe oder Ausgabe basierend auf visuellen Hinweisen darzustellen.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Andere Elemente können zusammen mit `<kbd>` verwendet werden, um spezifischere Szenarien darzustellen:

- Ein `<kbd>`-Element innerhalb eines anderen `<kbd>`-Elements zu verschachteln, stellt eine tatsächliche Taste oder andere Eingabe als Teil einer größeren Eingabe dar. Siehe unten [Darstellung von Tastatureingaben innerhalb einer Eingabe](#darstellung_von_tastatureingaben_innerhalb_einer_eingabe).
- Ein `<kbd>`-Element innerhalb eines {{HTMLElement("samp")}}-Elements zu verschachteln, stellt eine Eingabe dar, die vom System an den Benutzer zurückgemeldet wurde. Siehe [Zurückgemeldete Eingabe](#zurückgemeldete_eingabe) unten für ein Beispiel.
- Ein `<samp>`-Element innerhalb eines `<kbd>`-Elements zu verschachteln, stellt Eingaben dar, die auf vom System bereitgestelltem Text basieren, wie z. B. Namen von Menüs und Menüpunkten oder die Namen von Schaltflächen auf dem Bildschirm. Siehe das Beispiel unter [Darstellung von Optionen für die Bildschirmeingabe](#darstellung_von_optionen_für_die_bildschirmeingabe) unten.

> [!NOTE]
> Sie können einen benutzerdefinierten Stil definieren, um die Standard-Schriftauswahl des Browsers für das `<kbd>`-Element zu überschreiben, obwohl die Präferenzen des Benutzers möglicherweise Ihr CSS überschreiben.

## Beispiele

### Einfaches Beispiel

```html
<p>
  Verwenden Sie den Befehl <kbd>help mycommand</kbd>, um die Dokumentation für den
  Befehl „mycommand“ anzuzeigen.
</p>
```

#### Ergebnis

{{ EmbedLiveSample('Basic_example', 350, 80) }}

### Darstellung von Tastatureingaben innerhalb einer Eingabe

Um eine Eingabe zu beschreiben, die aus mehreren Tastenanschlägen besteht, können Sie mehrere `<kbd>`-Elemente verschachteln, wobei ein äußerer `<kbd>`-Element die gesamte Eingabe darstellt und jeder einzelne Tastendruck oder Bestandteil der Eingabe innerhalb seines eigenen `<kbd>` eingeschlossen ist.

#### Unstyled

Lassen Sie uns zunächst ansehen, wie dies als einfaches HTML aussieht.

##### HTML

```html
<p>
  Sie können auch ein neues Dokument mit der Tastenkombination
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> erstellen.
</p>
```

Dieser umschließt die gesamte Tastenfolge in einem äußeren `<kbd>`-Element und dann jede einzelne Taste in ihrem eigenen, um die Komponenten der Sequenz zu kennzeichnen.

> [!NOTE]
> Sie müssen nicht all dies einwickeln; Sie können sich entscheiden, es zu vereinfachen, indem Sie das äußere `<kbd>`-Element weglassen. Mit anderen Worten, es auf einfach `<kbd>Ctrl</kbd>+<kbd>N</kbd>` zu vereinfachen, wäre vollkommen gültig.
>
> Abhängig von Ihrem Stylesheet kann es jedoch nützlich sein, diese Art von Verschachtelung zu verwenden.

##### Ergebnis

Die Ausgabe sieht ohne angewendetes Stylesheet so aus:

{{EmbedLiveSample("Unstyled", 650, 80)}}

#### Mit benutzerdefinierten Stilen

Wir können mehr Sinn daraus machen, indem wir etwas CSS hinzufügen:

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

Dann aktualisieren wir das HTML, um diese Klasse für die Tasten in der präsentierten Ausgabe zu verwenden:

```html
<p>
  Sie können auch ein neues Dokument erstellen, indem Sie die
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd>-Tastenkombination drücken.
</p>
```

##### Ergebnis

Das Ergebnis ist genau das, was wir wollen!

{{EmbedLiveSample("With_custom_styles", 650, 80)}}

### Zurückgemeldete Eingabe

Ein `<kbd>`-Element in einem {{HTMLElement("samp")}}-Element zu verschachteln, stellt eine Eingabe dar, die vom System an den Benutzer zurückgegeben wurde.

```html
<p>
  Wenn ein Syntaxfehler auftritt, gibt das Tool den ursprünglichen, von Ihnen eingegebenen Befehl zur Prüfung aus:
</p>
<blockquote>
  <samp><kbd>custom-git ad my-new-file.cpp</kbd></samp>
</blockquote>
```

#### Ergebnis

{{EmbedLiveSample("Echoed_input", 650, 100)}}

### Darstellung von Optionen für die Bildschirmeingabe

Ein `<samp>`-Element in einem `<kbd>`-Element zu verschachteln, stellt Eingaben dar, die auf vom System präsentierten Text basieren, z. B. die Namen von Menüs und Menüpunkten oder die Namen von Schaltflächen auf dem Bildschirm.

Zum Beispiel können Sie erklären, wie Sie die Option „Neues Dokument“ im Menü „Datei“ auswählen, indem Sie HTML verwenden, das so aussieht:

```html-nolint
<p>
  Um eine neue Datei zu erstellen, wählen Sie die Menüoption <kbd><kbd><samp>Datei</samp></kbd>
  ⇒<kbd><samp>Neues Dokument</samp></kbd></kbd>.
</p>

<p>
  Vergessen Sie nicht, auf die Schaltfläche <kbd><samp>OK</samp></kbd> zu klicken, um zu bestätigen, sobald
  Sie den Namen der neuen Datei eingegeben haben.
</p>
```

Dies macht einige interessante Verschachtelungen. Für die Menüoptionbeschreibung wird die gesamte Eingabe in ein `<kbd>`-Element eingeschlossen. Dann werden im Inneren sowohl die Menü- als auch die Menüpunktnamen innerhalb von sowohl `<kbd>` als auch `<samp>` enthalten, was eine Eingabe darstellt, die aus einem Bildschirm-Widget ausgewählt wurde.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Textinhalt</a>, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Textinhalt</a>.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Textinhalt</a> akzeptiert.
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
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("code")}}
