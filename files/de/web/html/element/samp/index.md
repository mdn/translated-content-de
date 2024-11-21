---
title: "<samp>: Das Sample Output-Element"
slug: Web/HTML/Element/samp
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<samp>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um Inline-Text einzuschließen, der eine Beispiel- (oder zitierte) Ausgabe von einem Computerprogramm darstellt. Der Inhalt wird typischerweise mit der Standard-Monospace-Schriftart des Browsers gerendert (wie [Courier](<https://en.wikipedia.org/wiki/Courier_(typeface)>) oder Lucida Console).

{{EmbedInteractiveExample("pages/tabbed/samp.html", "tabbed-shorter")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Sie können eine CSS-Regel verwenden, um die Standard-Schriftart des Browsers für das `<samp>` Element zu überschreiben; es ist jedoch möglich, dass die Browsereinstellungen Vorrang vor jedem angegebenen CSS haben.

Das CSS, um die Standard-Schriftart zu überschreiben, würde folgendermaßen aussehen:

```css
samp {
  font-family: "Courier";
}
```

> [!NOTE]
> Wenn Sie ein Element benötigen, das als Container für die von Ihrer Website oder App generierte JavaScript-Ausgabe dient, sollten Sie stattdessen das {{HTMLElement("output")}} Element verwenden.

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

### Beispielausgabe einschließlich Benutzereingaben

Sie können das {{HTMLElement("kbd")}} Element innerhalb eines `<samp>` Blocks verschachteln, um ein Beispiel zu präsentieren, das vom Benutzer eingegebenen Text enthält. Betrachten Sie zum Beispiel diesen Text, der ein Transkript einer Linux- (oder macOS-)Konsolensitzung darstellt:

#### HTML

```html
<pre>
<samp><span class="prompt">mike@interwebz:~$</span> <kbd>md5 -s "Hello world"</kbd>
MD5 ("Hello world") = 3e25960a79dbc69b674cd4ec67a72c62

<span class="prompt">mike@interwebz:~$</span> <span class="cursor">█</span></samp></pre>
```

Beachten Sie die Verwendung von {{HTMLElement("span")}}, um das Aussehen bestimmter Teile des Beispieltextes wie die Shell-Eingabeaufforderungen und den Cursor anzupassen. Beachten Sie auch die Verwendung von `<kbd>`, um den Befehl darzustellen, den der Benutzer an der Eingabeaufforderung im Beispieltext eingegeben hat.

#### CSS

Das CSS, das das gewünschte Aussehen erreicht, ist:

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

Dies gibt der Eingabeaufforderung und dem Cursor eine ziemlich subtile Farbgebung und stärkt die Tastatureingabe innerhalb des Beispieltextes.

#### Ergebnis

Das resultierende Ausgabeergebnis ist folgendes:

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
          >Phrasierungsinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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
          >Phrasierungsinhalt</a
        > zulässt.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
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
- Das {{HTMLElement("output")}} Element: ein Container für skriptgenerierte Ausgaben
