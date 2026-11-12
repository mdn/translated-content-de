---
title: "`<kbd>`: HTML-Element für Tastatureingaben"
short-title: <kbd>
slug: Web/HTML/Reference/Elements/kbd
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Das **`<kbd>`**-[HTML](/de/docs/Web/HTML)-Element stellt Benutzereingaben dar, üblicherweise Tastatureingaben. Standardmäßig wird sein Textinhalt in der voreingestellten nichtproportionalen Schriftart des {{Glossary("user_agent", "User Agents")}} angezeigt.

`<kbd>` kann in verschiedenen Kombinationen mit dem {{HTMLElement("samp")}}-Element (Beispielausgabe) verschachtelt werden, um unterschiedliche Arten von Eingaben oder Ausgaben anhand visueller Merkmale darzustellen.

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

## Attribute

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Zusammen mit `<kbd>` können andere Elemente verwendet werden, um spezifischere Fälle darzustellen:

- Ein `<kbd>`-Element innerhalb eines weiteren `<kbd>`-Elements stellt eine einzelne Taste oder eine andere Eingabeeinheit als Teil einer größeren Eingabe dar. Siehe [Tastendrücke innerhalb einer Eingabe darstellen](#tastendrücke_innerhalb_einer_eingabe_darstellen).
- Ein `<kbd>`-Element innerhalb eines {{HTMLElement("samp")}}-Elements stellt eine Eingabe dar, die das System für den Benutzer wiederholt hat. Ein Beispiel finden Sie unter [Wiedergegebene Eingabe](#wiedergegebene_eingabe).
- Ein `<samp>`-Element innerhalb eines `<kbd>`-Elements stellt dagegen eine Eingabe dar, die auf vom System angezeigtem Text beruht, etwa auf Namen von Menüs und Menüeinträgen oder auf Beschriftungen von Schaltflächen. Ein Beispiel finden Sie unter [Eingabeoptionen auf dem Bildschirm darstellen](#eingabeoptionen_auf_dem_bildschirm_darstellen).

> [!NOTE]
> Sie können einen eigenen Stil definieren, um die Standardschriftart des Browsers für das `<kbd>`-Element zu überschreiben. Die Einstellungen des Benutzers können Ihr CSS jedoch möglicherweise außer Kraft setzen.

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

### Tastendrücke innerhalb einer Eingabe darstellen

Um eine Eingabe aus mehreren Tastendrücken zu beschreiben, können Sie mehrere `<kbd>`-Elemente verschachteln: Ein äußeres `<kbd>`-Element stellt die gesamte Eingabe dar, während jeder einzelne Tastendruck oder Bestandteil der Eingabe in einem eigenen `<kbd>`-Element steht.

#### Ohne eigene Formatierung

Sehen wir uns zunächst an, wie dies mit einfachem HTML aussieht.

##### HTML

```html
<p>
  You can also create a new document using the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> keyboard shortcut.
</p>
```

Dabei wird die gesamte Tastenfolge in ein äußeres `<kbd>`-Element eingeschlossen und jede einzelne Taste zusätzlich in ein eigenes, um die Bestandteile der Folge zu kennzeichnen.

> [!NOTE]
> Diese vollständige Verschachtelung ist nicht erforderlich. Sie können sie vereinfachen, indem Sie das äußere `<kbd>`-Element weglassen. Eine Schreibweise wie `<kbd>Ctrl</kbd>+<kbd>N</kbd>` ist ebenfalls gültig.
>
> Je nach Stylesheet kann diese Art der Verschachtelung jedoch nützlich sein.

##### Ergebnis

Ohne angewendetes Stylesheet sieht die Ausgabe so aus:

{{EmbedLiveSample("Unstyled", 650, 80)}}

#### Mit eigenen Stilen

Mit etwas CSS lässt sich die Darstellung deutlicher gestalten.

##### HTML

Wir verschachteln `<kbd>`-Elemente, um die einzelnen Tasten des Tastenkürzels auszuzeichnen:

```html
<p>
  You can also create a new document by pressing the
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> shortcut.
</p>
```

##### CSS

Wir fügen einen Selektor für verschachtelte `<kbd>`-Elemente hinzu: `kbd>kbd`. Damit können wir die Darstellung einzelner Tasten gestalten:

```css
kbd > kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

##### Ergebnis

Das Ergebnis entspricht nun der gewünschten Darstellung:

{{EmbedLiveSample("With_custom_styles", 650, 80)}}

### Wiedergegebene Eingabe

Ein `<kbd>`-Element innerhalb eines {{HTMLElement("samp")}}-Elements stellt eine Eingabe dar, die das System für den Benutzer wiederholt hat.

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

### Eingabeoptionen auf dem Bildschirm darstellen

Ein `<samp>`-Element innerhalb eines `<kbd>`-Elements stellt eine Eingabe dar, die auf vom System angezeigtem Text beruht, etwa auf Namen von Menüs und Menüeinträgen oder auf Beschriftungen von Schaltflächen.

Beispielsweise können Sie mit folgendem HTML beschreiben, wie die Option „Neues Dokument“ im Menü „Datei“ ausgewählt wird:

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

Hier werden die Elemente auf interessante Weise verschachtelt: Die gesamte Eingabe für die Menüauswahl steht in einem `<kbd>`-Element. Darin stehen sowohl der Menüname als auch der Name des Menüeintrags jeweils in einem `<kbd>`- und einem `<samp>`-Element. Das kennzeichnet eine Eingabe, die über ein Bedienelement auf dem Bildschirm ausgewählt wird.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow Content</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing Content</a>, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing Content</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing Content</a> akzeptiert.
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
      <td>Alle</td>
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
