---
title: "<samp>: Das Sample Output-Element"
slug: Web/HTML/Element/samp
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<samp>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um Inline-Text, der Ausgabe eines Computerprogramms repräsentiert, einzuschließen. Die Inhalte werden typischerweise mit der Standardschriftart mit fester Breite des Browsers angezeigt (wie [Courier](<https://en.wikipedia.org/wiki/Courier_(typeface)>) oder Lucida Console).

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Sie können eine CSS-Regel verwenden, um die Standardschriftart für das `<samp>`-Element im Browser zu überschreiben; es ist jedoch möglich, dass die Einstellungen des Browsers gegenüber den von Ihnen angegebenen CSS-Vorgaben den Vorrang haben.

Das CSS, um die Standardschriftart zu überschreiben, sieht folgendermaßen aus:

```css
samp {
  font-family: "Courier";
}
```

> [!NOTE]
> Wenn Sie ein Element benötigen, das als Container für die von Ihrem JavaScript-Code generierte Ausgabe Ihrer Website oder App dient, sollten Sie stattdessen das {{HTMLElement("output")}}-Element verwenden.

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

### Beispielanzeige mit Benutzereingaben

Sie können das {{HTMLElement("kbd")}}-Element innerhalb eines `<samp>`-Blocks verschachteln, um ein Beispiel zu präsentieren, das vom Benutzer eingegebenen Text enthält. Zum Beispiel, betrachten Sie diesen Text, der ein Protokoll einer Linux- (oder macOS-) Konsolensitzung präsentiert:

#### HTML

```html
<pre>
<samp><span class="prompt">mike@interwebz:~$</span> <kbd>md5 -s "Hello world"</kbd>
MD5 ("Hello world") = 3e25960a79dbc69b674cd4ec67a72c62

<span class="prompt">mike@interwebz:~$</span> <span class="cursor">█</span></samp></pre>
```

Beachten Sie die Verwendung von {{HTMLElement("span")}}, um die Darstellung spezifischer Teile des Beispieltextes wie die Shell-Eingabeaufforderungen und den Cursor anzupassen. Beachten Sie auch die Verwendung von `<kbd>`, um den Befehl darzustellen, den der Benutzer bei der Eingabeaufforderung im Beispieltext eingegeben hat.

#### CSS

Das CSS, das das gewünschte Aussehen erzeugt, ist:

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

Dies verleiht der Eingabeaufforderung und dem Cursor eine recht subtile Kolorierung und hebt die Tastatureingabe innerhalb des Beispieltextes hervor.

#### Ergebnis

Die resultierende Ausgabe sieht folgendermaßen aus:

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierender Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierender Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasierenden Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
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
- Das {{HTMLElement("output")}}-Element: ein Container für durch Skripte generierte Ausgaben
