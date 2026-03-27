---
title: "<body>: Das Dokumentkörper-Element"
slug: Web/HTML/Reference/Elements/body
l10n:
  sourceCommit: 2a7d7d219c2ed31fbeec632d0b3f5e8a320a050a
---

Das **`<body>`** [HTML](/de/docs/Web/HTML) Element repräsentiert den Inhalt eines HTML-Dokuments. Es kann nur ein `<body>` Element in einem Dokument geben.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), Ereignis-Attribute und veraltete Attribute:

### Ereignis-Attribute

> [!NOTE]
> Jeder der unten aufgeführten Ereignis-Attributnamen ist mit seinem entsprechenden [`Window`](/de/docs/Web/API/Window) Interface-Ereignis verknüpft. Sie können diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abhören, anstatt das `oneventname` Attribut zum `<body>` Element hinzuzufügen.

- [`onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Funktion, die aufgerufen wird, nachdem der Benutzer das Dokument gedruckt hat.
- [`onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Funktion, die aufgerufen wird, wenn der Benutzer das Drucken des Dokuments anfordert.
- [`onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument geschlossen werden soll.
- [`onblur`](/de/docs/Web/API/Window/blur_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus verliert.
- [`onerror`](/de/docs/Web/API/Window/error_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument nicht korrekt geladen werden kann.
- [`onfocus`](/de/docs/Web/API/Window/focus_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus erhält.
- [`onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Funktion, die aufgerufen wird, wenn sich der Teil des Dokument-Links mit dem Fragmentbezeichner (beginnend mit dem Zeichen `'#'`) geändert hat.
- [`onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Funktion, die aufgerufen wird, wenn sich die bevorzugten Sprachen geändert haben.
- [`onload`](/de/docs/Web/API/Window/load_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument geladen wurde.
- [`onmessage`](/de/docs/Web/API/Window/message_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument eine Nachricht erhalten hat.
- [`onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument eine Nachricht erhalten hat, die nicht deserialisiert werden kann.
- [`onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Funktion, die aufgerufen wird, wenn die Netzwerkkommunikation ausgefallen ist.
- [`ononline`](/de/docs/Web/API/Window/online_event)
  - : Funktion, die aufgerufen wird, wenn die Netzwerkkommunikation wiederhergestellt wurde.
- [`onpageswap`](/de/docs/Web/API/Window/pageswap_event)
  - : Funktion, die aufgerufen wird, wenn Sie zwischen Dokumenten navigieren, wenn das vorherige Dokument kurz vor dem Schließen steht.
- [`onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Funktion, die aufgerufen wird, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus dem Verlauf der Sitzung anzuzeigen.
- [`onpagereveal`](/de/docs/Web/API/Window/pagereveal_event)
  - : Funktion, die aufgerufen wird, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines frischen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments.
- [`onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Funktion, die aufgerufen wird, wenn der Browser das Dokument des Fensters aufgrund von Navigation anzeigt.
- [`onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Funktion, die aufgerufen wird, wenn der Benutzer in der Sitzungs-Historie navigiert hat.
- [`onresize`](/de/docs/Web/API/Window/resize_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument in der Größe geändert wurde.
- [`onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Funktion, die aufgerufen wird, wenn ein JavaScript {{jsxref("Promise")}} verspätet behandelt wird.
- [`onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Funktion, die aufgerufen wird, wenn der Speicherbereich geändert wurde.
- [`onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Funktion, die aufgerufen wird, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird, das keinen Ablehnungs-Handler hat.
- [`onunload`](/de/docs/Web/API/Window/unload_event) {{deprecated_inline}}
  - : Funktion, die aufgerufen wird, wenn das Dokument geht.

### Veraltete Attribute

> [!WARNING]
> Verwenden Sie diese veralteten Attribute nicht; wählen Sie stattdessen die in jedem veralteten Attribut aufgeführten CSS-Alternativen.

- `alink` {{deprecated_inline}}
  - : Textfarbe für Hyperlinks, wenn ausgewählt.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}} in Verbindung mit den Pseudoklassen {{cssxref(":active")}} und {{cssxref(":focus")}}.
- `background` {{deprecated_inline}}
  - : URI eines Bildes zur Verwendung als Hintergrund.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-image")}}.
- `bgcolor` {{deprecated_inline}}
  - : Hintergrundfarbe für das Dokument.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}.
- `bottommargin` {{deprecated_inline}}
  - : Ignoriert.
- `leftmargin` {{deprecated_inline}}
  - : Der Rand von links und rechts des Körpers.
    Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-left")}} und {{cssxref("margin-right")}} (oder die logische Eigenschaft {{cssxref("margin-inline")}}).
- `link` {{deprecated_inline}}
  - : Textfarbe für nicht besuchte Hypertext-Links.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}} in Verbindung mit der Pseudoklasse {{cssxref(":link")}}.
- `rightmargin` {{deprecated_inline}}
  - : Ignoriert.
- `text` {{deprecated_inline}}
  - : Vordergrundfarbe des Textes.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}}.
- `topmargin` {{deprecated_inline}}
  - : Der Rand von oben und unten des Körpers.
    Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-top")}} und {{cssxref("margin-bottom")}} (oder die logische Eigenschaft {{cssxref("margin-block")}}).
- `vlink` {{deprecated_inline}}
  - : Textfarbe für besuchte Hypertext-Links.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}} in Verbindung mit der Pseudoklasse {{cssxref(":visited")}}.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag kann weggelassen werden, wenn das erste Element darin kein Leerzeichen, Kommentar, {{HTMLElement("script")}} Element oder
        {{HTMLElement("style")}} Element ist. Das End-Tag kann weggelassen werden, wenn
        das <code>&#x3C;body></code> Element Inhalte hat oder ein Start-Tag hat,
        und nicht direkt von einem Kommentar gefolgt wird.
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
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
        <ul>
          <li>
            Das <code>&#x3C;body></code> Element gibt die
            [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement) Schnittstelle wieder.
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
- [Ereignisbehandlung Übersicht](/de/docs/Web/API/Document_Object_Model/Events#registering_event_handlers)
