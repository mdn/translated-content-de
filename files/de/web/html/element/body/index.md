---
title: "<body>: Das Dokumenten-Body-Element"
slug: Web/HTML/Element/body
l10n:
  sourceCommit: 8fbec5312b62d720f6ff6936024a09c859f2f0f1
---

{{HTMLSidebar}}

Das **`<body>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert den Inhalt eines HTML-Dokuments. In einem Dokument kann es nur ein `<body>`-Element geben.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), Ereignisattribute und veraltete Attribute:

### Ereignisattribute

> [!NOTE]
> Jeder der unten genannten Ereignisattributnamen ist mit dem entsprechenden Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle verlinkt. Sie können diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abhören, anstatt das `oneventname`-Attribut dem `<body>`-Element hinzuzufügen.

- [`onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Funktion, die nach dem Drucken des Dokuments aufgerufen wird.
- [`onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Funktion, die aufgerufen wird, wenn der Benutzer das Drucken des Dokuments anfordert.
- [`onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument entladen werden soll.
- [`onblur`](/de/docs/Web/API/Window/blur_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus verliert.
- [`onerror`](/de/docs/Web/API/Window/error_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument nicht ordnungsgemäß geladen wird.
- [`onfocus`](/de/docs/Web/API/Window/focus_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus erhält.
- [`onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Funktion, die aufgerufen wird, wenn sich der Fragmentbezeichner-Teil (beginnend mit dem Hash (`'#'`) Zeichen) der aktuellen Adresse des Dokuments geändert hat.
- [`onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Funktion, die aufgerufen wird, wenn sich die bevorzugten Sprachen geändert haben.
- [`onload`](/de/docs/Web/API/Window/load_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument fertig geladen ist.
- [`onmessage`](/de/docs/Web/API/Window/message_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument eine Nachricht empfangen hat.
- [`onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument eine Nachricht erhalten hat, die nicht deserialisiert werden kann.
- [`onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Funktion, die aufgerufen wird, wenn die Netzwerkkommunikation fehlgeschlagen ist.
- [`ononline`](/de/docs/Web/API/Window/online_event)
  - : Funktion, die aufgerufen wird, wenn die Netzwerkkommunikation wiederhergestellt wurde.
- [`onpageswap`](/de/docs/Web/API/Window/pageswap_event)
  - : Funktion, die aufgerufen wird, wenn über Dokumente navigiert wird, wenn das vorherige Dokument entladen werden soll.
- [`onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Funktion, die aufgerufen wird, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus der Sitzungsverlauf zu präsentieren.
- [`onpagereveal`](/de/docs/Web/API/Window/pagereveal_event)
  - : Funktion, die aufgerufen wird, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments.
- [`onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Funktion, die aufgerufen wird, wenn der Browser das Fensterdokument aufgrund der Navigation anzeigt.
- [`onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Funktion, die aufgerufen wird, wenn der Benutzer im Sitzungsverlauf navigiert hat.
- [`onresize`](/de/docs/Web/API/Window/resize_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument in der Größe verändert wurde.
- [`onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Funktion, die aufgerufen wird, wenn ein JavaScript {{jsxref("Promise")}} verspätet behandelt wird.
- [`onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Funktion, die aufgerufen wird, wenn der Speicherbereich geändert wurde.
- [`onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Funktion, die aufgerufen wird, wenn ein JavaScript {{jsxref("Promise")}}, das keinen Ablehnungs-Handler hat, abgelehnt wird.
- [`onunload`](/de/docs/Web/API/Window/unload_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument geht.

### Veraltete Attribute

> [!WARNING]
> Verwenden Sie diese veralteten Attribute nicht; nutzen Sie stattdessen die angegebenen CSS-Alternativen.

- `alink` {{deprecated_inline}}
  - : Farbe des Textes für Hyperlinks, wenn ausgewählt.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}} in Verbindung mit den Pseudo-Klassen {{cssxref(":active")}} und {{cssxref(":focus")}}.
- `background` {{deprecated_inline}}
  - : URI eines Bildes als Hintergrund.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-image")}}.
- `bgcolor` {{deprecated_inline}}
  - : Hintergrundfarbe des Dokuments.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}.
- `bottommargin` {{deprecated_inline}}
  - : Der Rand des unteren Bereichs des Bodys.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("margin-bottom")}} (oder die logische Eigenschaft {{cssxref("margin-block-end")}}).
- `leftmargin` {{deprecated_inline}}
  - : Der Rand des linken Bereichs des Bodys.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("margin-left")}} (oder die logische Eigenschaft {{cssxref("margin-inline-start")}}).
- `link` {{deprecated_inline}}
  - : Farbe des Textes für nicht besuchte Hypertext-Links.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}} in Verbindung mit der Pseudo-Klasse {{cssxref(":link")}}.
- `rightmargin` {{deprecated_inline}}
  - : Der Rand des rechten Bereichs des Bodys.
    Verwenden Sie die CSS-Eigenschaft {{cssxref("margin-right")}} oder die logische Eigenschaft {{cssxref("margin-inline-end")}}.
- `text` {{deprecated_inline}}
  - : Vordergrundfarbe des Textes.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}}.
- `topmargin` {{deprecated_inline}}
  - : Der Rand des oberen Bereichs des Bodys.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("margin-top")}} (oder die logische Eigenschaft {{cssxref("margin-block-start")}}).
- `vlink` {{deprecated_inline}}
  - : Farbe des Textes für besuchte Hypertext-Links.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}} in Verbindung mit der Pseudo-Klasse {{cssxref(":visited")}}.

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
          >Fluss-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag kann ausgelassen werden, wenn das erste Element darin kein
        Leerzeichen, Kommentar, {{HTMLElement("script")}}-Element oder
        {{HTMLElement("style")}}-Element ist. Das End-Tag kann ausgelassen werden, wenn das <code>&#x3C;body></code>-Element Inhalte
        hat oder ein Start-Tag hat und nicht unmittelbar von einem Kommentar gefolgt wird.
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
            [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)-Schnittstelle dar.
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
- [Übersicht über Ereignisbehandlung](/de/docs/Web/Events/Event_handlers)
