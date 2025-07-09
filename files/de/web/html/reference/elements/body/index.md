---
title: "<body>: Das Dokumentenkörperelement"
slug: Web/HTML/Reference/Elements/body
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<body>`**-Element von [HTML](/de/docs/Web/HTML) repräsentiert den Inhalt eines HTML-Dokuments. Ein Dokument kann nur ein `<body>`-Element haben.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), Ereignisattribute und veraltete Attribute:

### Ereignisattribute

> [!NOTE]
> Jedes der unten aufgeführten Ereignisattributnamen ist mit seinem entsprechenden [`Window`](/de/docs/Web/API/Window)-Schnittstellenereignis verlinkt. Sie können diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abhören, anstatt das `oneventname`-Attribut zum `<body>`-Element hinzuzufügen.

- [`onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Funktion, die aufgerufen wird, nachdem der Benutzer das Dokument gedruckt hat.
- [`onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Funktion, die aufgerufen wird, wenn der Benutzer das Drucken des Dokuments anfordert.
- [`onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument entladen wird.
- [`onblur`](/de/docs/Web/API/Window/blur_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus verliert.
- [`onerror`](/de/docs/Web/API/Window/error_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument nicht richtig geladen wird.
- [`onfocus`](/de/docs/Web/API/Window/focus_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument den Fokus erhält.
- [`onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Funktion, die aufgerufen wird, wenn sich der Fragmentbezeichnerteil (beginnend mit dem Hash-Zeichen (`'#'`)) der aktuellen Adresse des Dokuments geändert hat.
- [`onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Funktion, die aufgerufen wird, wenn sich die bevorzugten Sprachen geändert haben.
- [`onload`](/de/docs/Web/API/Window/load_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument fertig geladen ist.
- [`onmessage`](/de/docs/Web/API/Window/message_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument eine Nachricht erhalten hat.
- [`onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument eine Nachricht erhalten hat, die nicht deserialisiert werden kann.
- [`onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Funktion, die aufgerufen wird, wenn die Netzwerkkommunikation fehlgeschlagen ist.
- [`ononline`](/de/docs/Web/API/Window/online_event)
  - : Funktion, die aufgerufen wird, wenn die Netzwerkkommunikation wiederhergestellt wurde.
- [`onpageswap`](/de/docs/Web/API/Window/pageswap_event)
  - : Funktion, die aufgerufen wird, wenn Sie zwischen Dokumenten navigieren, wenn das vorherige Dokument entladen wird.
- [`onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Funktion, die aufgerufen wird, wenn der Browser die aktuelle Seite verbirgt, um eine andere Seite aus dem Sitzungsverlauf anzuzeigen.
- [`onpagereveal`](/de/docs/Web/API/Window/pagereveal_event)
  - : Funktion, die aufgerufen wird, wenn ein Dokument zuerst gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments.
- [`onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Funktion, die aufgerufen wird, wenn der Browser das Dokument des Fensters aufgrund einer Navigation anzeigt.
- [`onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Funktion, die aufgerufen wird, wenn der Benutzer im Sitzungsverlauf navigiert hat.
- [`onresize`](/de/docs/Web/API/Window/resize_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument in der Größe geändert wurde.
- [`onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Funktion, die aufgerufen wird, wenn ein JavaScript-{{jsxref("Promise")}} verspätet behandelt wird.
- [`onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Funktion, die aufgerufen wird, wenn sich der Speicherbereich geändert hat.
- [`onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Funktion, die aufgerufen wird, wenn ein JavaScript-{{jsxref("Promise")}}, das keinen Ablehnungsverarbeiter hat, abgelehnt wird.
- [`onunload`](/de/docs/Web/API/Window/unload_event)
  - : Funktion, die aufgerufen wird, wenn das Dokument verschwindet.

### Veraltete Attribute

> [!WARNING]
> Nutzen Sie diese veralteten Attribute nicht; stattdessen wählen Sie die CSS-Alternativen, die mit jedem veralteten Attribut aufgeführt sind.

- `alink` {{deprecated_inline}}
  - : Farbe des Textes für Hyperlinks, wenn ausgewählt.
    Verwenden Sie stattdessen die CSS-{{cssxref("color")}}-Eigenschaft in Verbindung mit den Pseudoklassen {{cssxref(":active")}} und {{cssxref(":focus")}}.
- `background` {{deprecated_inline}}
  - : URI eines Bildes als Hintergrund.
    Verwenden Sie stattdessen die CSS-{{cssxref("background-image")}}-Eigenschaft.
- `bgcolor` {{deprecated_inline}}
  - : Hintergrundfarbe des Dokuments.
    Verwenden Sie stattdessen die CSS-{{cssxref("background-color")}}-Eigenschaft.
- `bottommargin` {{deprecated_inline}}
  - : Der untere Rand des Body.
    Verwenden Sie stattdessen die CSS-{{cssxref("margin-bottom")}}-Eigenschaft (oder die logische {{cssxref("margin-block-end")}}-Eigenschaft).
- `leftmargin` {{deprecated_inline}}
  - : Der linke Rand des Body.
    Verwenden Sie stattdessen die CSS-{{cssxref("margin-left")}}-Eigenschaft (oder die logische {{cssxref("margin-inline-start")}}-Eigenschaft).
- `link` {{deprecated_inline}}
  - : Farbe des Textes für unveränderte Hypertextlinks.
    Verwenden Sie stattdessen die CSS-{{cssxref("color")}}-Eigenschaft in Verbindung mit der {{cssxref(":link")}}-Pseudoklasse.
- `rightmargin` {{deprecated_inline}}
  - : Der rechte Rand des Body.
    Verwenden Sie stattdessen die CSS-{{cssxref("margin-right")}}-Eigenschaft (oder die logische {{cssxref("margin-inline-end")}}-Eigenschaft).
- `text` {{deprecated_inline}}
  - : Vordergrundfarbe des Textes.
    Verwenden Sie stattdessen die CSS-{{cssxref("color")}}-Eigenschaft.
- `topmargin` {{deprecated_inline}}
  - : Der obere Rand des Body.
    Verwenden Sie stattdessen die CSS-{{cssxref("margin-top")}}-Eigenschaft (oder die logische {{cssxref("margin-block-start")}}-Eigenschaft).
- `vlink` {{deprecated_inline}}
  - : Farbe des Textes für besuchte Hypertextlinks.
    Verwenden Sie stattdessen die CSS-{{cssxref("color")}}-Eigenschaft in Verbindung mit der {{cssxref(":visited")}}-Pseudoklasse.

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
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag kann weggelassen werden, wenn das erste Element darin kein
        Leerzeichen, Kommentar, {{HTMLElement("script")}}-Element oder
        {{HTMLElement("style")}}-Element ist. Das End-Tag kann weggelassen werden,
        wenn das <code>&#x3C;body></code>-Element einen Inhalt hat oder ein
        Start-Tag besitzt und nicht sofort von einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Es muss das zweite Element innerhalb eines {{HTMLElement("html")}}
        Elements sein.
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
- [Übersicht über Ereignisbehandlung](/de/docs/Web/Events/Event_handlers)
