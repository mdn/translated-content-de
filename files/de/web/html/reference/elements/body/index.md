---
title: "<body>: Das Dokumentkörperelement"
slug: Web/HTML/Reference/Elements/body
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

Das **`<body>`** [HTML](/de/docs/Web/HTML) Element repräsentiert den Inhalt eines HTML-Dokuments. Es kann nur ein `<body>` Element in einem Dokument geben.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), Event-Attribute und veraltete Attribute:

### Event-Attribute

> [!NOTE]
> Jeder der unten genannten Event-Attributnamen ist mit seinem entsprechenden [`Window`](/de/docs/Web/API/Window) Schnittstellen-Event verknüpft. Sie können diesen Ereignissen mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) lauschen, anstatt das `oneventname` Attribut zum `<body>` Element hinzuzufügen.

- [`onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Funktion, die aufgerufen wird, nachdem der Benutzer das Dokument gedruckt hat.
- [`onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Funktion, die aufgerufen wird, wenn der Benutzer das Drucken des Dokuments anfordert.
- [`onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument entladen wird.
- [`onblur`](/de/docs/Web/API/Window/blur_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus verliert.
- [`onerror`](/de/docs/Web/API/Window/error_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument nicht richtig geladen werden kann.
- [`onfocus`](/de/docs/Web/API/Window/focus_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus erhält.
- [`onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Funktion, die aufgerufen wird, wenn sich der Fragmentbezeichnerteil (beginnend mit dem Rautezeichen (`'#'`)) der aktuellen Adresse des Dokuments ändert.
- [`onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Funktion, die aufgerufen wird, wenn sich die bevorzugten Sprachen geändert haben.
- [`onload`](/de/docs/Web/API/Window/load_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument vollständig geladen wurde.
- [`onmessage`](/de/docs/Web/API/Window/message_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument eine Nachricht erhalten hat.
- [`onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument eine Nachricht erhalten hat, die nicht deserialisiert werden kann.
- [`onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Funktion, die aufgerufen wird, wenn die Netzwerkkommunikation ausgefallen ist.
- [`ononline`](/de/docs/Web/API/Window/online_event)
  - : Funktion, die aufgerufen wird, wenn die Netzwerkkommunikation wiederhergestellt wurde.
- [`onpageswap`](/de/docs/Web/API/Window/pageswap_event)
  - : Funktion, die aufgerufen wird, wenn zwischen Dokumenten navigiert wird und das vorherige Dokument entladen wird.
- [`onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Funktion, die aufgerufen wird, wenn der Browser die aktuelle Seite ausblendet, während eine andere Seite aus dem Sitzungsverlauf angezeigt wird.
- [`onpagereveal`](/de/docs/Web/API/Window/pagereveal_event)
  - : Funktion, die aufgerufen wird, wenn ein Dokument beim ersten Laden oder beim Reaktivieren eines Dokuments gerendert wird.
- [`onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Funktion, die aufgerufen wird, wenn der Browser das Dokument des Fensters aufgrund der Navigation anzeigt.
- [`onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Funktion, die aufgerufen wird, wenn der Benutzer im Sitzungsverlauf navigiert hat.
- [`onresize`](/de/docs/Web/API/Window/resize_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument in der Größe verändert wurde.
- [`onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Funktion, die aufgerufen wird, wenn ein JavaScript {{jsxref("Promise")}} verspätet behandelt wird.
- [`onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Funktion, die aufgerufen wird, wenn sich der Speicherbereich geändert hat.
- [`onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Funktion, die aufgerufen wird, wenn ein JavaScript {{jsxref("Promise")}} ohne Ablehnungsbehandlung abgelehnt wird.
- [`onunload`](/de/docs/Web/API/Window/unload_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument entladen wird.

### Veraltete Attribute

> [!WARNING]
> Verwenden Sie diese veralteten Attribute nicht; verwenden Sie stattdessen die jeweils aufgeführten CSS-Alternativen.

- `alink` {{deprecated_inline}}
  - : Farbe des Texts für Hyperlinks, wenn sie ausgewählt sind.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}} in Verbindung mit den Pseudoklassen {{cssxref(":active")}} und {{cssxref(":focus")}}.
- `background` {{deprecated_inline}}
  - : URI eines Bildes, das als Hintergrund verwendet werden soll.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-image")}}.
- `bgcolor` {{deprecated_inline}}
  - : Hintergrundfarbe des Dokuments.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}.
- `bottommargin` {{deprecated_inline}}
  - : Rand am unteren Rand des Körpers.
    Verwenden Sie die CSS-Eigenschaft {{cssxref("margin-bottom")}} (oder die logische Eigenschaft {{cssxref("margin-block-end")}}) stattdessen.
- `leftmargin` {{deprecated_inline}}
  - : Rand am linken Rand des Körpers.
    Verwenden Sie die CSS-Eigenschaft {{cssxref("margin-left")}} (oder die logische Eigenschaft {{cssxref("margin-inline-start")}}) stattdessen.
- `link` {{deprecated_inline}}
  - : Farbe des Texts für nicht besuchte Hyperlinks.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}} in Verbindung mit der Pseudoklasse {{cssxref(":link")}}.
- `rightmargin` {{deprecated_inline}}
  - : Rand am rechten Rand des Körpers.
    Verwenden Sie die CSS-Eigenschaft {{cssxref("margin-right")}} oder die logische Eigenschaft {{cssxref("margin-inline-end")}} stattdessen.
- `text` {{deprecated_inline}}
  - : Vordergrundfarbe des Texts.
    Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("color")}}.
- `topmargin` {{deprecated_inline}}
  - : Rand am oberen Rand des Körpers.
    Verwenden Sie die CSS-Eigenschaft {{cssxref("margin-top")}} oder die logische Eigenschaft {{cssxref("margin-block-start")}} stattdessen.
- `vlink` {{deprecated_inline}}
  - : Farbe des Texts für besuchte Hyperlinks.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        Keine.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag kann ausgelassen werden, wenn das erste Element darin kein Leerzeichen, Kommentar, {{HTMLElement("script")}}-Element oder {{HTMLElement("style")}}-Element ist. Der End-Tag kann ausgelassen werden, wenn das <code>&#x3C;body></code>-Element Inhalte hat oder einen Start-Tag besitzt und nicht unmittelbar von einem Kommentar gefolgt wird.
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
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role">generic</a></code>
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
            Das <code>&#x3C;body></code>-Element stellt die [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)-Schnittstelle bereit.
          </li>
          <li>
            Sie können auf das <code>&#x3C;body></code>-Element über die [`document.body`](/de/docs/Web/API/Document/body)-Eigenschaft zugreifen.
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
