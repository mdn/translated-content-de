---
title: "<body>: Das Dokumenten-Body-Element"
slug: Web/HTML/Element/body
l10n:
  sourceCommit: 8703920ff43498c9c9cfb5f55bd9e00b93564350
---

{{HTMLSidebar}}

Das **`<body>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert den Inhalt eines HTML-Dokuments. Es kann nur ein `<body>`-Element in einem Dokument geben.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `alink` {{deprecated_inline}}
  - : Farbe des Textes für Hyperlinks, wenn sie ausgewählt sind.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}} in Verbindung mit der Pseudoklasse {{cssxref(":active")}}.**
- `background` {{deprecated_inline}}
  - : URI eines Bildes, das als Hintergrund verwendet werden soll.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background")}} für das Element.**
- `bgcolor` {{deprecated_inline}}
  - : Hintergrundfarbe für das Dokument.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}} für das Element.**
- `bottommargin` {{deprecated_inline}}
  - : Der Rand am unteren Ende des Body.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("margin-bottom")}} für das Element.**
- `leftmargin` {{deprecated_inline}}
  - : Der Rand auf der linken Seite des Body.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("margin-left")}} für das Element.**
- `link` {{deprecated_inline}}
  - : Farbe des Textes für nicht besuchte Hypertext-Links.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}} in Verbindung mit der Pseudoklasse {{cssxref(":link")}}.**
- `onafterprint`
  - : Funktion, die aufgerufen wird, nachdem der Benutzer das Dokument gedruckt hat.
- `onbeforeprint`
  - : Funktion, die aufgerufen wird, wenn der Benutzer das Dokument zum Drucken anfordert.
- `onbeforeunload`
  - : Funktion, die aufgerufen wird, wenn das Dokument entladen werden soll.
- `onblur`
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus verliert.
- `onerror`
  - : Funktion, die aufgerufen wird, wenn das Dokument nicht richtig geladen werden kann.
- `onfocus`
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus erhält.
- `onhashchange`
  - : Funktion, die aufgerufen wird, wenn sich der Fragment-Identifikator-Teil (beginnend mit dem Hash- (`'#'`) Zeichen) der aktuellen Adresse des Dokuments geändert hat.
- `onlanguagechange`
  - : Funktion, die aufgerufen wird, wenn sich die bevorzugten Sprachen geändert haben.
- `onload`
  - : Funktion, die aufgerufen wird, wenn das Dokument fertig geladen ist.
- `onmessage`
  - : Funktion, die aufgerufen wird, wenn das Dokument eine Nachricht erhält.
- `onmessageerror`
  - : Funktion, die aufgerufen wird, wenn das Dokument eine Nachricht erhält, die nicht deserialisiert werden kann.
- `onoffline`
  - : Funktion, die aufgerufen wird, wenn die Netzkommunikation ausgefallen ist.
- `ononline`
  - : Funktion, die aufgerufen wird, wenn die Netzkommunikation wiederhergestellt ist.
- `onpageswap`
  - : Funktion, die aufgerufen wird, wenn Sie zwischen Dokumenten navigieren und das vorherige Dokument entladen wird.
- `onpagehide`
  - : Funktion, die aufgerufen wird, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus dem Verlauf der Sitzung anzuzeigen.
- `onpagereveal`
  - : Funktion, die aufgerufen wird, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments.
- `onpageshow`
  - : Funktion, die aufgerufen wird, wenn der Browser das Dokument des Fensters aufgrund einer Navigation anzeigt.
- `onpopstate`
  - : Funktion, die aufgerufen wird, wenn der Benutzer im Sitzungsverlauf navigiert hat.
- `onresize`
  - : Funktion, die aufgerufen wird, wenn das Dokument geändert wurde.
- `onrejectionhandled`
  - : Funktion, die aufgerufen wird, wenn ein JavaScript {{jsxref("Promise")}} verspätet behandelt wird.
- `onstorage`
  - : Funktion, die aufgerufen wird, wenn sich der Speicherbereich geändert hat.
- `onunhandledrejection`
  - : Funktion, die aufgerufen wird, wenn ein JavaScript {{jsxref("Promise")}} ohne Ablehnungsbehandler abgelehnt wird.
- `onunload`
  - : Funktion, die aufgerufen wird, wenn das Dokument geschlossen wird.
- `rightmargin` {{deprecated_inline}}
  - : Der Rand auf der rechten Seite des Body.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("margin-right")}} für das Element.**
- `text` {{deprecated_inline}}
  - : Vordergrundfarbe des Textes.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}} für das Element.**
- `topmargin` {{deprecated_inline}}
  - : Der Rand am oberen Ende des Body.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("margin-top")}} für das Element.**
- `vlink` {{deprecated_inline}}
  - : Farbe des Textes für besuchte Hypertext-Links.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}} in Verbindung mit der Pseudoklasse {{cssxref(":visited")}}.**

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
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag kann weggelassen werden, wenn das erste darin enthaltene Element kein Leerzeichen, kein Kommentar, kein {{HTMLElement("script")}}- oder {{HTMLElement("style")}}-Element ist. Das End-Tag kann weggelassen werden, wenn das <code>&#x3C;body></code>-Element Inhalt oder ein Start-Tag hat und nicht unmittelbar von einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Es muss das zweite Element eines {{HTMLElement("html")}}-Elements sein.
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
