---
title: "`<samp>` HTML-Beispielausgabe-Element"
short-title: <samp>
slug: Web/HTML/Reference/Elements/samp
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<samp>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um eingebetteten Text einzuschließen, der eine Beispiel- (oder zitierte) Ausgabe eines Computerprogramms darstellt. Der Inhalt wird typischerweise mit der Standard-Schriftart des Browsers für Monospace-Schriften (wie [Courier](<https://en.wikipedia.org/wiki/Courier_(typeface)>) oder Lucida Console) dargestellt.

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

## Nutzungshinweise

Sie können eine CSS-Regel verwenden, um die Standard-Schriftart des Browsers für das `<samp>`-Element zu überschreiben; es ist jedoch möglich, dass die Präferenzen des Browsers die von Ihnen angegebenen CSS-Einstellungen überschreiben.

Das CSS, um die Standard-Schriftart zu überschreiben, sieht folgendermaßen aus:

```css
samp {
  font-family: "Courier";
}
```

> [!NOTE]
> Wenn Sie ein Element benötigen, das als Container für von der JavaScript Ihres Websites oder Ihrer App generierte Ausgaben dient, sollten Sie stattdessen das {{HTMLElement("output")}}-Element verwenden.

## Beispiele

### Einfaches Beispiel

In diesem einfachen Beispiel enthält ein Absatz ein Beispiel für die Ausgabe eines Programms.

```html
<p>
  When the process is complete, the utility will output the text
  <samp>Scan complete. Found <em>N</em> results.</samp> You can then proceed to
  the next step.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650, 100)}}

### Beispielausgabe inklusive Benutzereingaben

Sie können das {{HTMLElement("kbd")}}-Element innerhalb eines `<samp>`-Blocks verschachteln, um ein Beispiel darzustellen, das vom Benutzer eingegebenen Text enthält. Betrachten Sie zum Beispiel diesen Text, der ein Transkript einer Linux- (oder macOS-) Konsolensitzung darstellt:

#### HTML

```html
<pre>
<samp><span class="prompt">mike@interwebz:~$</span> <kbd>md5 -s "Hello world"</kbd>
MD5 ("Hello world") = 3e25960a79dbc69b674cd4ec67a72c62

<span class="prompt">mike@interwebz:~$</span> <span class="cursor">█</span></samp></pre>
```

Beachten Sie die Verwendung von {{HTMLElement("span")}}, um es zu ermöglichen, das Aussehen spezifischer Teile des Beispiels anzupassen, wie die Shell-Eingabeaufforderungen und den Cursor. Beachten Sie auch die Verwendung von `<kbd>`, um den vom Benutzer bei der Eingabeaufforderung eingegebenen Befehl im Beispieltext darzustellen.

#### CSS

Das CSS, das das gewünschte Aussehen erreicht, ist:

```css
.prompt {
  color: #bb0000;
}

samp > kbd {
  font-weight: bold;
}

.cursor {
  color: #0000bb;
}
```

Dies verleiht der Eingabeaufforderung und dem Cursor eine subtile Farbgebung und betont die Tastatureingabe im Beispieltext.

#### Ergebnis

Die resultierende Ausgabe ist diese:

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
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
          >Phraseninhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
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

- Verwandte Elemente: {{HTMLElement("kbd")}}, {{HTMLElement("code")}}, {{HTMLElement("pre")}}
- Das {{HTMLElement("output")}}-Element: Ein Container für skriptgenerierte Ausgaben
