---
title: "`<body>` HTML-Dokumentkörper-Element"
short-title: <body>
slug: Web/HTML/Reference/Elements/body
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<body>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert den Inhalt eines HTML-Dokuments. Es kann nur ein `<body>`-Element in einem Dokument geben.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), Ereignisattribute und veraltete Attribute:

### Ereignisattribute

> [!NOTE]
> Jeder der unten aufgeführten Ereignisattributnamen ist mit dem entsprechenden [`Window`](/de/docs/Web/API/Window)-Schnittstellenereignis verknüpft. Sie können diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abhören, anstatt das `oneventname`-Attribut dem `<body>`-Element hinzuzufügen.

- [`onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Funktion, die aufgerufen wird, nachdem der Benutzer das Dokument gedruckt hat.
- [`onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Funktion, die aufgerufen wird, wenn der Benutzer den Druck des Dokuments anfordert.
- [`onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument entladen wird.
- [`onblur`](/de/docs/Web/API/Window/blur_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus verliert.
- [`onerror`](/de/docs/Web/API/Window/error_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument nicht ordnungsgemäß geladen wird.
- [`onfocus`](/de/docs/Web/API/Window/focus_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus erhält.
- [`onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Funktion, die aufgerufen wird, wenn sich der Teil des Fragmentidentifikators (beginnend mit dem Hash (`'#'`) Zeichen) der aktuellen Adresse des Dokuments geändert hat.
- [`onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Funktion, die aufgerufen wird, wenn sich die bevorzugten Sprachen geändert haben.
- [`onload`](/de/docs/Web/API/Window/load_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument das Laden abgeschlossen hat.
- [`onmessage`](/de/docs/Web/API/Window/message_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument eine Nachricht erhält.
- [`onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument eine Nachricht erhält, die nicht deserialisiert werden kann.
- [`onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Funktion, die aufgerufen wird, wenn die Netzwerkkommunikation fehlgeschlagen ist.
- [`ononline`](/de/docs/Web/API/Window/online_event)
  - : Funktion, die aufgerufen wird, wenn die Netzwerkkommunikation wiederhergestellt wurde.
- [`onpageswap`](/de/docs/Web/API/Window/pageswap_event)
  - : Funktion, die aufgerufen wird, wenn Sie zwischen Dokumenten navigieren und das vorherige Dokument entladen wird.
- [`onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Funktion, die aufgerufen wird, wenn der Browser die aktuelle Seite im Verlauf der Präsentation einer anderen Seite aus der Sitzungsverlaufsgeschichte ausblendet.
- [`onpagereveal`](/de/docs/Web/API/Window/pagereveal_event)
  - : Funktion, die aufgerufen wird, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments.
- [`onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Funktion, die aufgerufen wird, wenn der Browser das Dokument des Fensters aufgrund der Navigation anzeigt.
- [`onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Funktion, die aufgerufen wird, wenn der Benutzer in der Sitzungsverlaufsgeschichte navigiert.
- [`onresize`](/de/docs/Web/API/Window/resize_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument in der Größe geändert wurde.
- [`onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Funktion, die aufgerufen wird, wenn ein JavaScript {{jsxref("Promise")}} verspätet behandelt wird.
- [`onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Funktion, die aufgerufen wird, wenn sich der Speicherbereich geändert hat.
- [`onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Funktion, die aufgerufen wird, wenn ein JavaScript {{jsxref("Promise")}} ohne Ablehnungsbehandler abgelehnt wird.
- [`onunload`](/de/docs/Web/API/Window/unload_event) {{deprecated_inline}}
  - : Funktion, die aufgerufen wird, wenn das Dokument weggeht.

### Veraltete Attribute

> [!WARNING]
> Verwenden Sie diese veralteten Attribute nicht; greifen Sie stattdessen auf die angegebenen CSS-Alternativen zurück.

- `alink` {{deprecated_inline}}
  - : Farbe des Textes für Hyperlinks, wenn ausgewählt.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}} in Verbindung mit den Pseudoklassen {{cssxref(":active")}} und {{cssxref(":focus")}}.
- `background` {{deprecated_inline}}
  - : URI eines Bildes, das als Hintergrund verwendet werden soll.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-image")}}.
- `bgcolor` {{deprecated_inline}}
  - : Hintergrundfarbe des Dokuments.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}.
- `bottommargin` {{deprecated_inline}}
  - : Ignoriert.
- `leftmargin` {{deprecated_inline}}
  - : Der linke und rechte Rand des Körpers.
    Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-left")}} und {{cssxref("margin-right")}} (oder die logische Eigenschaft {{cssxref("margin-inline")}}).
- `link` {{deprecated_inline}}
  - : Farbe des Textes für unbesuchte Hypertext-Links.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}} in Verbindung mit der Pseudoklasse {{cssxref(":link")}}.
- `rightmargin` {{deprecated_inline}}
  - : Ignoriert.
- `text` {{deprecated_inline}}
  - : Vordergrundfarbe des Textes.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}}.
- `topmargin` {{deprecated_inline}}
  - : Der obere und untere Rand des Körpers.
    Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-top")}} und {{cssxref("margin-bottom")}} (oder die logische Eigenschaft {{cssxref("margin-block")}}).
- `vlink` {{deprecated_inline}}
  - : Farbe des Textes für besuchte Hypertext-Links.
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
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Anfangstag kann weggelassen werden, wenn das erste Element darin kein Leerzeichen, kein Kommentar, kein {{HTMLElement("script")}}-Element oder {{HTMLElement("style")}}-Element ist. Der Endtag kann weggelassen werden, wenn das <code>&#x3C;body></code>-Element Inhalte oder einen Anfangstag hat und nicht unmittelbar von einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Es muss das zweite Element eines {{HTMLElement("html")}}-Elements sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
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
            Das <code>&#x3C;body></code>-Element bietet die Schnittstelle [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement).
          </li>
          <li>
            Sie können auf das <code>&#x3C;body></code>-Element über die Eigenschaft [`document.body`](/de/docs/Web/API/Document/body) zugreifen.
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
- [Übersicht zur Ereignisbehandlung](/de/docs/Web/API/Document_Object_Model/Events#registering_event_handlers)
