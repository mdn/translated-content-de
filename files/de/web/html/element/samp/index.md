---
title: "<samp>: Das Element für Beispielausgaben"
slug: Web/HTML/Element/samp
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<samp>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um eingebetteten Text zu umschließen, der eine Beispielausgabe (oder zitierte Ausgabe) eines Computerprogrammbereichs darstellt. Sein Inhalt wird typischerweise mit der standardmäßigen Monospace-Schriftart des Browsers (wie [Courier](<https://en.wikipedia.org/wiki/Courier_(typeface)>) oder Lucida Console) gerendert.

{{EmbedInteractiveExample("pages/tabbed/samp.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Sie können eine CSS-Regel verwenden, um die standardmäßige Schriftart des `<samp>`-Elements des Browsers zu überschreiben; es ist jedoch möglich, dass die Einstellungen des Browsers Vorrang vor dem von Ihnen angegebenen CSS haben.

Das CSS, um die standardmäßige Schriftart zu überschreiben, sieht wie folgt aus:

```css
samp {
  font-family: "Courier";
}
```

> [!NOTE]
> Wenn Sie ein Element benötigen, das als Container für Ausgaben dient, die durch den JavaScript-Code Ihrer Website oder App generiert werden, sollten Sie stattdessen das {{HTMLElement("output")}}-Element verwenden.

## Beispiele

### Einfaches Beispiel

In diesem einfachen Beispiel enthält ein Absatz ein Beispiel für die Ausgabe eines Programms.

```html
<p>
  Wenn der Prozess abgeschlossen ist, gibt das Dienstprogramm den Text
  <samp>Scan complete. Found <em>N</em> results.</samp> aus. Sie können dann
  mit dem nächsten Schritt fortfahren.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650, 100)}}

### Beispielausgabe einschließlich Benutzereingaben

Sie können das {{HTMLElement("kbd")}}-Element innerhalb eines `<samp>`-Blocks verschachteln, um ein Beispiel darzustellen, das vom Benutzer eingegebenen Text enthält. Betrachten Sie zum Beispiel diesen Text, der ein Transkript einer Linux- (oder macOS-) Konsolensitzung präsentiert:

#### HTML

```html
<pre>
<samp><span class="prompt">mike@interwebz:~$</span> <kbd>md5 -s "Hello world"</kbd>
MD5 ("Hello world") = 3e25960a79dbc69b674cd4ec67a72c62

<span class="prompt">mike@interwebz:~$</span> <span class="cursor">█</span></samp></pre>
```

Beachten Sie die Verwendung von {{HTMLElement("span")}}, um das Erscheinungsbild bestimmter Teile des Beispieltextes wie die Eingabeaufforderungen und den Cursor anzupassen. Beachten Sie auch die Verwendung von `<kbd>`, um den vom Benutzer eingegebenen Befehl an der Eingabeaufforderung im Beispieltext darzustellen.

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

Dies verleiht der Eingabeaufforderung und dem Cursor eine recht dezente Farbgebung und hebt die Tastatureingaben im Beispieltext hervor.

#### Ergebnis

Die resultierende Ausgabe sieht wie folgt aus:

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
        >, fühlbarer Inhalt.
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
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Verwandte Elemente: {{HTMLElement("kbd")}}, {{HTMLElement("code")}}, {{HTMLElement("pre")}}
- Das {{HTMLElement("output")}}-Element: ein Container für skriptgenerierte Ausgaben
