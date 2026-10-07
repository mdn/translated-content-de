---
title: "`<body>`: HTML-Element für den Dokumentkörper"
short-title: <body>
slug: Web/HTML/Reference/Elements/body
l10n:
  sourceCommit: f44f946c49273a558b97e342e22a100780d224c8
---

Das **`<body>`**-Element von [HTML](/de/docs/Web/HTML) repräsentiert den Inhalt eines HTML-Dokuments. Ein Dokument darf nur ein `<body>`-Element enthalten.

## Attribute

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), Ereignisattribute und veraltete Attribute:

### Ereignisattribute

> [!NOTE]
> Jeder der folgenden Namen von Ereignisattributen ist mit dem entsprechenden Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle verlinkt. Sie können diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwachen, statt dem `<body>`-Element ein `oneventname`-Attribut hinzuzufügen.

- [`onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Funktion, die aufgerufen wird, nachdem der Benutzer das Dokument gedruckt hat.
- [`onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Funktion, die aufgerufen wird, wenn der Benutzer das Drucken des Dokuments anfordert.
- [`onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument entladen werden soll.
- [`onblur`](/de/docs/Web/API/Window/blur_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus verliert.
- [`onerror`](/de/docs/Web/API/Window/error_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument nicht ordnungsgemäß geladen werden kann.
- [`onfocus`](/de/docs/Web/API/Window/focus_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus erhält.
- [`onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Funktion, die aufgerufen wird, wenn sich der Teil mit dem Fragmentbezeichner (beginnend mit dem Rautezeichen (`'#'`)) der aktuellen Adresse des Dokuments geändert hat.
- [`onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Funktion, die aufgerufen wird, wenn sich die bevorzugten Sprachen geändert haben.
- [`onload`](/de/docs/Web/API/Window/load_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument vollständig geladen wurde.
- [`onmessage`](/de/docs/Web/API/Window/message_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument eine Nachricht empfangen hat.
- [`onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument eine Nachricht empfangen hat, die nicht deserialisiert werden kann.
- [`onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Funktion, die aufgerufen wird, wenn die Netzwerkkommunikation fehlgeschlagen ist.
- [`ononline`](/de/docs/Web/API/Window/online_event)
  - : Funktion, die aufgerufen wird, wenn die Netzwerkkommunikation wiederhergestellt wurde.
- [`onpageswap`](/de/docs/Web/API/Window/pageswap_event)
  - : Funktion, die beim Wechsel zwischen Dokumenten aufgerufen wird, wenn das vorherige Dokument entladen werden soll.
- [`onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Funktion, die aufgerufen wird, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus dem Sitzungsverlauf anzuzeigen.
- [`onpagereveal`](/de/docs/Web/API/Window/pagereveal_event)
  - : Funktion, die aufgerufen wird, wenn ein Dokument erstmals gerendert wird – entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments.
- [`onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Funktion, die aufgerufen wird, wenn der Browser infolge einer Navigation das Dokument des Fensters anzeigt.
- [`onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Funktion, die aufgerufen wird, wenn der Benutzer im Sitzungsverlauf navigiert hat.
- [`onresize`](/de/docs/Web/API/Window/resize_event)
  - : Funktion, die aufgerufen wird, wenn die Größe des Dokuments geändert wurde.
- [`onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Funktion, die aufgerufen wird, wenn eine abgelehnte JavaScript-{{jsxref("Promise")}} verspätet behandelt wird.
- [`onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Funktion, die aufgerufen wird, wenn sich der Speicherbereich geändert hat.
- [`onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Funktion, die aufgerufen wird, wenn eine JavaScript-{{jsxref("Promise")}} ohne Ablehnungsbehandlung abgelehnt wird.
- [`onunload`](/de/docs/Web/API/Window/unload_event) {{deprecated_inline}}
  - : Funktion, die aufgerufen wird, wenn das Dokument verlassen wird.

### Veraltete Attribute

> [!WARNING]
> Verwenden Sie diese veralteten Attribute nicht. Nutzen Sie stattdessen die jeweils aufgeführten CSS-Alternativen.

- `alink` {{deprecated_inline}}
  - : Textfarbe für Hyperlinks, wenn sie ausgewählt sind.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}} zusammen mit den Pseudoklassen {{cssxref(":active")}} und {{cssxref(":focus")}}.
- `background` {{deprecated_inline}}
  - : URI eines Bildes, das als Hintergrund verwendet werden soll.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-image")}}.
- `bgcolor` {{deprecated_inline}}
  - : Hintergrundfarbe des Dokuments.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}.
- `bottommargin` {{deprecated_inline}}
  - : Wird ignoriert.
- `leftmargin` {{deprecated_inline}}
  - : Der linke und rechte Außenabstand des Dokumentkörpers.
    Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-left")}} und {{cssxref("margin-right")}} (oder die logische Eigenschaft {{cssxref("margin-inline")}}).
- `link` {{deprecated_inline}}
  - : Textfarbe für nicht besuchte Hypertext-Links.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}} zusammen mit der Pseudoklasse {{cssxref(":link")}}.
- `rightmargin` {{deprecated_inline}}
  - : Wird ignoriert.
- `text` {{deprecated_inline}}
  - : Vordergrundfarbe des Textes.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}}.
- `topmargin` {{deprecated_inline}}
  - : Der obere und untere Außenabstand des Dokumentkörpers.
    Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-top")}} und {{cssxref("margin-bottom")}} (oder die logische Eigenschaft {{cssxref("margin-block")}}).
- `vlink` {{deprecated_inline}}
  - : Textfarbe für besuchte Hypertext-Links.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}} zusammen mit der Pseudoklasse {{cssxref(":visited")}}.

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
          >Flow-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>
        Das Start-Tag kann weggelassen werden, wenn das Element leer ist oder
        wenn das erste Element darin weder ein ASCII-Leerzeichen noch ein Kommentar
        ist. Dies gilt nicht, wenn das erste Element darin ein
        {{HTMLElement("meta")}}-, {{HTMLElement("noscript")}}-,
        {{HTMLElement("link")}}-, {{HTMLElement("script")}}-,
        {{HTMLElement("style")}}- oder {{HTMLElement("template")}}-Element ist.
        Das End-Tag kann weggelassen werden, wenn auf das
        <code>&#x3C;body></code>-Element nicht unmittelbar ein Kommentar folgt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Es muss das zweite Element eines {{HTMLElement("html")}}-Elements
        sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>role</code> zulässig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
        <ul>
          <li>
            Das <code>&#x3C;body></code>-Element stellt die
            [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)-Schnittstelle
            bereit.
          </li>
          <li>
            Sie können über die Eigenschaft
            [`document.body`](/de/docs/Web/API/Document/body) auf das
            <code>&#x3C;body></code>-Element zugreifen.
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
- [Überblick über die Ereignisbehandlung](/de/docs/Web/API/Document_Object_Model/Events#registering_event_handlers)
