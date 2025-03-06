---
title: "<samp>: Das Sample-Output-Element"
slug: Web/HTML/Element/samp
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<samp>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um Inline-Text einzuschließen, der eine Ausgabe (oder ein Zitat) eines Computerprogramms darstellt. Der Inhalt wird typischerweise mit der Standardschriftart des Browsers für Monospace-Schriftarten gerendert (wie [Courier](<https://en.wikipedia.org/wiki/Courier_(typeface)>) oder Lucida Console).

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

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Sie können eine CSS-Regel verwenden, um die Standardschriftart des Browsers für das `<samp>`-Element zu überschreiben; es ist jedoch möglich, dass die Browsereinstellungen gegenüber den von Ihnen angegebenen CSS-Regeln Vorrang haben.

Das CSS, um die Standardschriftart zu überschreiben, sieht folgendermaßen aus:

```css
samp {
  font-family: "Courier";
}
```

> [!NOTE]
> Wenn Sie ein Element benötigen, das als Container für die Ausgabe von JavaScript-Code Ihrer Website oder App dient, sollten Sie stattdessen das {{HTMLElement("output")}}-Element verwenden.

## Beispiele

### Grundlegendes Beispiel

In diesem grundlegenden Beispiel enthält ein Absatz ein Beispiel der Ausgabe eines Programms.

```html
<p>
  When the process is complete, the utility will output the text
  <samp>Scan complete. Found <em>N</em> results.</samp> You can then proceed to
  the next step.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650, 100)}}

### Beispielausgabe einschließlich Benutzereingabe

Sie können das {{HTMLElement("kbd")}}-Element innerhalb eines `<samp>`-Blocks verschachteln, um ein Beispiel zu präsentieren, das vom Benutzer eingegebenen Text enthält. Zum Beispiel, betrachten Sie diesen Text, der ein Transkript einer Linux- (oder macOS-) Konsolensitzung präsentiert:

#### HTML

```html
<pre>
<samp><span class="prompt">mike@interwebz:~$</span> <kbd>md5 -s "Hello world"</kbd>
MD5 ("Hello world") = 3e25960a79dbc69b674cd4ec67a72c62

<span class="prompt">mike@interwebz:~$</span> <span class="cursor">█</span></samp></pre>
```

Beachten Sie die Verwendung von {{HTMLElement("span")}}, um das Aussehen spezifischer Teile des Beispieltexts wie die Shell-Prompts und den Cursor anzupassen. Beachten Sie auch die Verwendung von `<kbd>`, um den Befehl darzustellen, den der Benutzer bei der Aufforderung im Beispieltext eingegeben hat.

#### CSS

Das CSS, das das gewünschte Erscheinungsbild erzeugt, ist:

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

Dies verleiht den Eingabeaufforderungen und dem Cursor eine eher dezente Farbgebung und hebt die Tastatureingabe innerhalb des Beispieltextes hervor.

#### Ergebnis

Die resultierende Ausgabe ist diese:

{{EmbedLiveSample("Sample_output_including_user_input", 650, 120)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
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
- Das {{HTMLElement("output")}}-Element: ein Container für skriptgenerierte Ausgaben
