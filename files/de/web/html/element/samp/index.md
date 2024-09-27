---
title: "<samp>: Das Sample Output-Element"
slug: Web/HTML/Element/samp
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<samp>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um Inline-Text zu umschließen, der eine Beispiel- (oder zitierte) Ausgabe eines Computerprogramms darstellt. Sein Inhalt wird typischerweise in der Standard-Schriftart des Browsers im Monospace (wie [Courier](<https://en.wikipedia.org/wiki/Courier_(typeface)>) oder Lucida Console) dargestellt.

{{EmbedInteractiveExample("pages/tabbed/samp.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Sie können eine CSS-Regel verwenden, um die Standardschriftart des Browsers für das `<samp>`-Element zu überschreiben; es ist jedoch möglich, dass die Einstellungen des Browsers Vorrang vor dem von Ihnen angegebenen CSS haben.

Das CSS zum Überschreiben der Standardschriftart würde so aussehen:

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

### Beispieldaten inklusive Benutzereingabe

Sie können das {{HTMLElement("kbd")}}-Element innerhalb eines `<samp>`-Blocks verschachteln, um ein Beispiel darzustellen, das vom Benutzer eingegebenen Text enthält. Betrachten Sie zum Beispiel diesen Text, der ein Transkript einer Linux- (oder macOS-) Konsolensitzung präsentiert:

#### HTML

```html
<pre>
<samp><span class="prompt">mike@interwebz:~$</span> <kbd>md5 -s "Hello world"</kbd>
MD5 ("Hello world") = 3e25960a79dbc69b674cd4ec67a72c62

<span class="prompt">mike@interwebz:~$</span> <span class="cursor">█</span></samp></pre>
```

Beachten Sie die Verwendung von {{HTMLElement("span")}}, um die Darstellung bestimmter Teile des Beispieltexts wie die Konsolenaufforderungen und den Cursor anzupassen. Beachten Sie auch die Verwendung von `<kbd>`, um den Befehl darzustellen, den der Benutzer bei der Eingabeaufforderung im Beispieltext eingegeben hat.

#### CSS

Das CSS, das das gewünschte Erscheinungsbild erreicht, ist:

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

Dies verleiht der Eingabeaufforderung und dem Cursor eine ziemlich subtile Farbgebung und hebt die Tastatureingabe im Beispieltext hervor.

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
          >Fließender Inhalt</a
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
- Das {{HTMLElement("output")}}-Element: ein Container für skriptgenerierte Ausgabe
