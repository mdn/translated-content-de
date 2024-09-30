---
title: "<body>: Das Document Body-Element"
slug: Web/HTML/Element/body
l10n:
  sourceCommit: e3f162d122a38c8dc81a1e733894c5c54d134454
---

{{HTMLSidebar}}

Das **`<body>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert den Inhalt eines HTML-Dokuments. Es kann nur ein `<body>`-Element in einem Dokument geben.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `alink` {{deprecated_inline}}
  - : Farbe des Textes für Hyperlinks, wenn sie ausgewählt sind.
    **Verwenden Sie dieses Attribut nicht! Nutzen Sie die CSS-Eigenschaft {{cssxref("color")}} in Verbindung mit der Pseudoklasse {{cssxref(":active")}} stattdessen.**
- `background` {{deprecated_inline}}
  - : URI eines Bildes, das als Hintergrund verwendet werden soll.
    **Verwenden Sie dieses Attribut nicht! Nutzen Sie die CSS-Eigenschaft {{cssxref("background")}} stattdessen.**
- `bgcolor` {{deprecated_inline}}
  - : Hintergrundfarbe für das Dokument.
    **Verwenden Sie dieses Attribut nicht! Nutzen Sie die CSS-Eigenschaft {{cssxref("background-color")}} stattdessen.**
- `bottommargin` {{deprecated_inline}}
  - : Der Rand des unteren Bereichs des Bodys.
    **Verwenden Sie dieses Attribut nicht! Nutzen Sie die CSS-Eigenschaft {{cssxref("margin-bottom")}} stattdessen.**
- `leftmargin` {{deprecated_inline}}
  - : Der Rand des linken Bereichs des Bodys.
    **Verwenden Sie dieses Attribut nicht! Nutzen Sie die CSS-Eigenschaft {{cssxref("margin-left")}} stattdessen.**
- `link` {{deprecated_inline}}
  - : Farbe des Textes für nicht besuchte Hypertext-Links.
    **Verwenden Sie dieses Attribut nicht! Nutzen Sie die CSS-Eigenschaft {{cssxref("color")}} in Verbindung mit der Pseudoklasse {{cssxref(":link")}} stattdessen.**
- `onafterprint`
  - : Funktion, die aufgerufen wird, nachdem der Benutzer das Dokument gedruckt hat.
- `onbeforeprint`
  - : Funktion, die aufgerufen wird, wenn der Benutzer den Druck des Dokuments anfordert.
- `onbeforeunload`
  - : Funktion, die aufgerufen wird, wenn das Dokument entladen werden soll.
- `onblur`
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus verliert.
- `onerror`
  - : Funktion, die aufgerufen wird, wenn das Dokument nicht richtig geladen werden kann.
- `onfocus`
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus erhält.
- `onhashchange`
  - : Funktion, die aufgerufen wird, wenn sich der Fragmentbezeichnerteil (beginnend mit dem Hash (`'#'`) Zeichen) der aktuellen Adresse des Dokuments ändert.
- `onlanguagechange`
  - : Funktion, die aufgerufen wird, wenn sich die bevorzugten Sprachen geändert haben.
- `onload`
  - : Funktion, die aufgerufen wird, wenn das Dokument fertig geladen ist.
- `onmessage`
  - : Funktion, die aufgerufen wird, wenn das Dokument eine Nachricht erhalten hat.
- `onoffline`
  - : Funktion, die aufgerufen wird, wenn die Netzwerkkommunikation fehlgeschlagen ist.
- `ononline`
  - : Funktion, die aufgerufen wird, wenn die Netzwerkkommunikation wiederhergestellt ist.
- `onpopstate`
  - : Funktion, die aufgerufen wird, wenn der Benutzer in der Sitzungsgeschichte navigiert.
- `onresize`
  - : Funktion, die aufgerufen wird, wenn das Dokument in der Größe verändert wurde.
- `onstorage`
  - : Funktion, die aufgerufen wird, wenn sich der Speicherbereich geändert hat.
- `onunload`
  - : Funktion, die aufgerufen wird, wenn das Dokument geschlossen wird.
- `rightmargin` {{deprecated_inline}}
  - : Der Rand des rechten Bereichs des Bodys.
    **Verwenden Sie dieses Attribut nicht! Nutzen Sie die CSS-Eigenschaft {{cssxref("margin-right")}} stattdessen.**
- `text` {{deprecated_inline}}
  - : Vordergrundfarbe des Textes.
    **Verwenden Sie dieses Attribut nicht! Nutzen Sie die CSS-Eigenschaft {{cssxref("color")}} stattdessen.**
- `topmargin` {{deprecated_inline}}
  - : Der Rand des oberen Bereichs des Bodys.
    **Verwenden Sie dieses Attribut nicht! Nutzen Sie die CSS-Eigenschaft {{cssxref("margin-top")}} stattdessen.**
- `vlink` {{deprecated_inline}}
  - : Farbe des Textes für besuchte Hypertext-Links.
    **Verwenden Sie dieses Attribut nicht! Nutzen Sie die CSS-Eigenschaft {{cssxref("color")}} in Verbindung mit der Pseudoklasse {{cssxref(":visited")}} stattdessen.**

## Beispiele

```html
<html lang="en">
  <head>
    <title>Document title</title>
  </head>
  <body>
    <p>
      The <code>&lt;body&gt;</code> HTML element represents the content of an
      HTML document. There can be only one <code>&lt;body&gt;</code> element in
      a document.
    </p>
  </body>
</html>
```

### Ergebnis

{{EmbedLiveSample('Example')}}

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
        Keine.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das öffnende Tag kann weggelassen werden, wenn das erste Element innerhalb kein Leerzeichen, Kommentar, {{HTMLElement("script")}}-Element oder
        {{HTMLElement("style")}}-Element ist. Das schließende Tag kann weggelassen werden, wenn das <code>&#x3C;body></code>-Element Inhalte hat oder ein öffnendes Tag hat
        und nicht unmittelbar von einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Es muss das zweite Element eines {{HTMLElement("html")}}-Elements sein.
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
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
        <ul>
          <li>
            Das <code>&#x3C;body></code>-Element stellt die
            [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)-Schnittstelle bereit.
          </li>
          <li>
            Sie können auf das <code>&#x3C;body></code>-Element über die
            [`document.body`](/de/docs/Web/API/Document/body)-Eigenschaft zugreifen.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("html")}}
- {{HTMLElement("head")}}
