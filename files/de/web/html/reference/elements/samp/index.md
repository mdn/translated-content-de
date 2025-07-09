---
title: "<samp>: Das Sample Output-Element"
slug: Web/HTML/Reference/Elements/samp
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<samp>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um Inline-Text, der als Beispiel- oder zitiertes Ausgabeergebnis eines Computerprogramms steht, einzuschließen. Sein Inhalt wird typischerweise mit der standardmäßig monospaced Schriftart des Browsers gerendert (wie [Courier](<https://en.wikipedia.org/wiki/Courier_(typeface)>) oder Lucida Console).

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

Dieses Element umfasst nur die [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

Sie können eine CSS-Regel verwenden, um die standardmäßige Schriftart des Browsers für das `<samp>`-Element zu überschreiben; es ist jedoch möglich, dass die Präferenzen des Browsers Vorrang vor den von Ihnen angegebenen CSS-Einstellungen haben.

Das CSS zur Überschreibung der standardmäßigen Schriftart könnte folgendermaßen aussehen:

```css
samp {
  font-family: "Courier";
}
```

> [!NOTE]
> Wenn Sie ein Element benötigen, das als Container für von Ihrer Website oder App generierten JavaScript-Code fungiert, sollten Sie stattdessen das {{HTMLElement("output")}}-Element verwenden.

## Beispiele

### Einfaches Beispiel

In diesem einfachen Beispiel enthält ein Absatz ein Ausgabebeispiel eines Programms.

```html
<p>
  When the process is complete, the utility will output the text
  <samp>Scan complete. Found <em>N</em> results.</samp> You can then proceed to
  the next step.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650, 100)}}

### Musterausgabe einschließlich Benutzereingabe

Sie können das {{HTMLElement("kbd")}}-Element innerhalb eines `<samp>`-Blocks verschachteln, um ein Beispiel darzustellen, das vom Benutzer eingegebenen Text enthält. Zum Beispiel könnte dieser Text ein Transkript einer Linux- (oder macOS-) Konsolensitzung darstellen:

#### HTML

```html
<pre>
<samp><span class="prompt">mike@interwebz:~$</span> <kbd>md5 -s "Hello world"</kbd>
MD5 ("Hello world") = 3e25960a79dbc69b674cd4ec67a72c62

<span class="prompt">mike@interwebz:~$</span> <span class="cursor">█</span></samp></pre>
```

Beachten Sie die Verwendung von {{HTMLElement("span")}}, um das Erscheinungsbild bestimmter Teile des Beispieltextes, wie der Shell-Eingabeaufforderungen und des Cursors, anzupassen. Beachten Sie auch, dass `<kbd>` verwendet wird, um den Befehl darzustellen, den der Benutzer an der Eingabeaufforderung im Beispieltext eingegeben hat.

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

Dies verleiht der Eingabeaufforderung und dem Cursor eine subtile Farbgebung und hebt die Tastatureingaben im Beispieltext hervor.

#### Ergebnis

Das daraus resultierende Ausgabebeispiel sieht so aus:

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
          >Phrasierter Inhalt</a
        >, fühlbarer Inhalt.
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
          >phrasierte Inhalte</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
- Das {{HTMLElement("output")}}-Element: ein Container für skriptgenerierte Ausgaben
