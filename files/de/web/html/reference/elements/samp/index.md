---
title: "<samp>: Das Sample Output-Element"
slug: Web/HTML/Reference/Elements/samp
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<samp>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um Inline-Text einzuschließen, der die Ausgabe eines Computerprogramms darstellt (zum Beispiel zitierte Ausgaben). Der Inhalt wird typischerweise mit der monospaced Standardschriftart des Browsers dargestellt (wie [Courier](<https://en.wikipedia.org/wiki/Courier_(typeface)>) oder Lucida Console).

{{InteractiveExample("HTML Demo: &lt;samp&gt;", "tabbed-shorter")}}

```html interactive-example
<p>I was trying to boot my computer, but I got this hilarious message:</p>

<p>
  <samp>Keyboard not found <br />Press F1 to continue</samp>
</p>
```

```css interactive-example
samp {
  font-weight: bold;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Anwendungshinweise

Sie können eine CSS-Regel verwenden, um die Standardschriftart für das `<samp>`-Element zu überschreiben; jedoch ist es möglich, dass die Einstellungen des Browsers Vorrang vor jeglichem von Ihnen spezifizierten CSS haben.

Das CSS, um die Standardschriftart zu überschreiben, sieht folgendermaßen aus:

```css
samp {
  font-family: "Courier";
}
```

> [!NOTE]
> Wenn Sie ein Element benötigen, das als Container für von Ihrer Website oder App mittels JavaScript generierte Ausgaben dient, sollten Sie stattdessen das {{HTMLElement("output")}}-Element verwenden.

## Beispiele

### Einfaches Beispiel

In diesem einfachen Beispiel beinhaltet ein Absatz ein Beispiel für die Ausgabe eines Programms.

```html
<p>
  When the process is complete, the utility will output the text
  <samp>Scan complete. Found <em>N</em> results.</samp> You can then proceed to
  the next step.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650, 100)}}

### Beispielausgabe einschließlich Benutzereingaben

Sie können das {{HTMLElement("kbd")}}-Element innerhalb eines `<samp>`-Blocks verschachteln, um ein Beispiel darzustellen, das vom Benutzer eingegebenen Text enthält. Zum Beispiel könnte dieser Text ein Transkript einer Linux- (oder macOS-)Konsolsitzung präsentieren:

#### HTML

```html
<pre>
<samp><span class="prompt">mike@interwebz:~$</span> <kbd>md5 -s "Hello world"</kbd>
MD5 ("Hello world") = 3e25960a79dbc69b674cd4ec67a72c62

<span class="prompt">mike@interwebz:~$</span> <span class="cursor">█</span></samp></pre>
```

Beachten Sie die Verwendung von {{HTMLElement("span")}}, um die Anpassung des Erscheinungsbildes bestimmter Teile des Beispieltextes wie der Shell-Prompts und des Cursors zu ermöglichen. Beachten Sie auch die Verwendung von `<kbd>`, um den Befehl darzustellen, den der Benutzer am Prompt im Beispieltext eingegeben hat.

#### CSS

Das CSS, das das gewünschte Erscheinungsbild erzielt, ist:

```css
.prompt {
  color: #b00;
}

samp > kbd {
  font-weight: bold;
}

.cursor {
  color: #00b;
}
```

Dies führt zu einer subtilen Farbgebung des Prompts und Cursors und hebt die Tastatureingaben innerhalb des Beispieltextes hervor.

#### Ergebnis

Das resultierende Ausgabeergebnis ist dieses:

{{EmbedLiveSample("Sample_output_including_user_input", 650, 120)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasierter Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierter Inhalt</a
        >.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasierter Inhalt</a
        > erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generisch</a
          ></code
        >
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

- Verwandte Elemente: {{HTMLElement("kbd")}}, {{HTMLElement("code")}}, {{HTMLElement("pre")}}
- Das {{HTMLElement("output")}}-Element: ein Container für skriptgenerierte Ausgaben
