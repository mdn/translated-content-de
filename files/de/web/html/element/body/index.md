---
title: "<body>: Das Dokument-Körper-Element"
slug: Web/HTML/Element/body
l10n:
  sourceCommit: e3f162d122a38c8dc81a1e733894c5c54d134454
---

{{HTMLSidebar}}

Das **`<body>`** [HTML](/de/docs/Web/HTML) Element repräsentiert den Inhalt eines HTML-Dokuments. Es kann nur ein `<body>` Element in einem Dokument geben.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `alink` {{deprecated_inline}}
  - : Farbe des Textes für Hyperlinks, wenn ausgewählt.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS {{cssxref("color")}} Eigenschaft in Verbindung mit der {{cssxref(":active")}} Pseudoklasse.**
- `background` {{deprecated_inline}}
  - : URI eines Bildes, das als Hintergrund verwendet wird.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS {{cssxref("background")}} Eigenschaft auf dem Element.**
- `bgcolor` {{deprecated_inline}}
  - : Hintergrundfarbe für das Dokument.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS {{cssxref("background-color")}} Eigenschaft auf dem Element.**
- `bottommargin` {{deprecated_inline}}
  - : Der Abstand des unteren Randes des Körpers.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS {{cssxref("margin-bottom")}} Eigenschaft auf dem Element.**
- `leftmargin` {{deprecated_inline}}
  - : Der Abstand des linken Randes des Körpers.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS {{cssxref("margin-left")}} Eigenschaft auf dem Element.**
- `link` {{deprecated_inline}}
  - : Farbe des Textes für nicht besuchte Hypertext-Links.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS {{cssxref("color")}} Eigenschaft in Verbindung mit der {{cssxref(":link")}} Pseudoklasse.**
- `onafterprint`
  - : Funktion, die aufgerufen wird, nachdem der Benutzer das Dokument gedruckt hat.
- `onbeforeprint`
  - : Funktion, die aufgerufen wird, wenn der Benutzer das Drucken des Dokuments anfordert.
- `onbeforeunload`
  - : Funktion, die aufgerufen wird, bevor das Dokument entladen wird.
- `onblur`
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus verliert.
- `onerror`
  - : Funktion, die aufgerufen wird, wenn das Dokument nicht ordnungsgemäß geladen werden kann.
- `onfocus`
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus erhält.
- `onhashchange`
  - : Funktion, die aufgerufen wird, wenn sich der Fragment-Identifikator-Teil (beginnend mit dem Hash (`'#'`)-Zeichen) der aktuellen Adresse des Dokuments geändert hat.
- `onlanguagechange`
  - : Funktion, die aufgerufen wird, wenn sich die bevorzugten Sprachen geändert haben.
- `onload`
  - : Funktion, die aufgerufen wird, wenn das Dokument fertig geladen ist.
- `onmessage`
  - : Funktion, die aufgerufen wird, wenn das Dokument eine Nachricht erhält.
- `onoffline`
  - : Funktion, die aufgerufen wird, wenn die Netzwerkkommunikation gescheitert ist.
- `ononline`
  - : Funktion, die aufgerufen wird, wenn die Netzwerkkommunikation wiederhergestellt wurde.
- `onpopstate`
  - : Funktion, die aufgerufen wird, wenn der Benutzer durch den Sitzungsverlauf navigiert.
- `onresize`
  - : Funktion, die aufgerufen wird, wenn das Dokument in der Größe verändert wurde.
- `onstorage`
  - : Funktion, die aufgerufen wird, wenn sich der Speicherbereich geändert hat.
- `onunload`
  - : Funktion, die aufgerufen wird, wenn das Dokument beendet wird.
- `rightmargin` {{deprecated_inline}}
  - : Der Abstand des rechten Randes des Körpers.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS {{cssxref("margin-right")}} Eigenschaft auf dem Element.**
- `text` {{deprecated_inline}}
  - : Vordergrundfarbe des Textes.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS {{cssxref("color")}} Eigenschaft auf dem Element.**
- `topmargin` {{deprecated_inline}}
  - : Der Abstand des oberen Randes des Körpers.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS {{cssxref("margin-top")}} Eigenschaft auf dem Element.**
- `vlink` {{deprecated_inline}}
  - : Farbe des Textes für besuchte Hypertext-Links.
    **Verwenden Sie dieses Attribut nicht! Verwenden Sie stattdessen die CSS {{cssxref("color")}} Eigenschaft in Verbindung mit der {{cssxref(":visited")}} Pseudoklasse.**

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
          >Fließinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag kann weggelassen werden, wenn das erste Element darin kein Leerzeichen, Kommentar, {{HTMLElement("script")}} Element oder
        {{HTMLElement("style")}} Element ist. Das End-Tag kann weggelassen werden, wenn das <code>&#x3C;body></code> Element Inhalte hat oder ein Start-Tag besitzt und nicht unmittelbar von einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Es muss das zweite Element eines {{HTMLElement("html")}}
        Elements sein.
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
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM Schnittstelle</th>
      <td>
        [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
        <ul>
          <li>
            Das <code>&#x3C;body></code> Element stellt die
            [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement) Schnittstelle bereit.
          </li>
          <li>
            Sie können auf das <code>&#x3C;body></code> Element über die
            [`document.body`](/de/docs/Web/API/Document/body) Eigenschaft zugreifen.
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
