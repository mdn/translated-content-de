---
title: HTMLBodyElement
slug: Web/API/HTMLBodyElement
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`HTMLBodyElement`**-Schnittstelle bietet spezielle Eigenschaften (über die hinaus, die von der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle geerbt werden) zur Manipulation von {{HtmlElement("body")}}-Elementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von ihrem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLBodyElement.aLink`](/de/docs/Web/API/HTMLBodyElement/aLink) {{deprecated_inline}}
  - : Ein String, der die Farbe von aktiven Hyperlinks darstellt.
- [`HTMLBodyElement.background`](/de/docs/Web/API/HTMLBodyElement/background) {{deprecated_inline}}
  - : Ein String, der die Beschreibung des Speicherorts der Hintergrundbild-Ressource darstellt. Beachten Sie, dass dies kein URI ist, obwohl einige ältere Versionen von Browsern dies erwarten.
- [`HTMLBodyElement.bgColor`](/de/docs/Web/API/HTMLBodyElement/bgColor) {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe für das Dokument darstellt.
- [`HTMLBodyElement.link`](/de/docs/Web/API/HTMLBodyElement/link) {{deprecated_inline}}
  - : Ein String, der die Farbe von nicht besuchten Links darstellt.
- [`HTMLBodyElement.text`](/de/docs/Web/API/HTMLBodyElement/text) {{deprecated_inline}}
  - : Ein String, der die Vordergrundfarbe des Textes darstellt.
- [`HTMLBodyElement.vLink`](/de/docs/Web/API/HTMLBodyElement/vLink) {{deprecated_inline}}
  - : Ein String, der die Farbe von besuchten Links darstellt.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von ihrem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignis-Handler

Die Ereignisse des [`HTMLElement`](/de/docs/Web/API/HTMLElement) werden geerbt.

Die folgenden `onXYZ`-Ereignis-Handler-Eigenschaften des [`Window`](/de/docs/Web/API/Window) sind ebenfalls als Aliase verfügbar, die auf das `window`-Objekt abzielen. Es wird jedoch empfohlen, sie direkt am `window`-Objekt abzuhören, anstatt am `HTMLBodyElement`.

> [!NOTE]
> Die Verwendung von `addEventListener()` am `HTMLBodyElement` funktioniert nicht für die unten aufgeführten `onXYZ`-Ereignis-Handler. Hören Sie die Ereignisse stattdessen am [`window`](/de/docs/Web/API/Window)-Objekt.

- [`HTMLBodyElement.onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`HTMLBodyElement.onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Ausgelöst, wenn das zugehörige Dokument gedruckt oder zur Druckvorschau vorbereitet wird.
- [`HTMLBodyElement.onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden.
- [`HTMLBodyElement.ongamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder zum ersten Mal eine Taste/Achse des Gamepads verwendet wird.
- [`HTMLBodyElement.ongamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.
- [`HTMLBodyElement.onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Ausgelöst, wenn sich der Fragment-Identifikator der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt).
- [`HTMLBodyElement.onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`HTMLBodyElement.onmessage`](/de/docs/Web/API/Window/message_event)
  - : Ausgelöst, wenn das Fenster eine Nachricht erhält, zum Beispiel durch einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`HTMLBodyElement.onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Ausgelöst, wenn das Fenster eine Nachricht erhält, die nicht deserialisiert werden kann.
- [`HTMLBodyElement.onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Ausgelöst, wenn der Browser den Zugang zum Netzwerk verloren hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `false` wechselt.
- [`HTMLBodyElement.ononline`](/de/docs/Web/API/Window/online_event)
  - : Ausgelöst, wenn der Browser den Zugang zum Netzwerk erlangt und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `true` wechselt.
- [`HTMLBodyElement.onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Ausgelöst, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus der Sitzungsverlauf anzuzeigen.
- [`HTMLBodyElement.onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Ausgelöst, wenn der Browser das Dokument des Fensters durch Navigation anzeigt.
- [`HTMLBodyElement.onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Ausgelöst, wenn sich der aktive Verlaufseintrag ändert, während der Benutzer im Sitzungsverlauf navigiert.
- [`HTMLBodyElement.onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Ausgelöst, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wurde und die Ablehnung behandelt wurde.
- [`HTMLBodyElement.onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments geändert wurde.
- [`HTMLBodyElement.onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Ausgelöst, wenn ein {{jsxref("Promise")}} abgelehnt wurde, aber die Ablehnung nicht behandelt wurde.
- [`HTMLBodyElement.onunload`](/de/docs/Web/API/Window/unload_event)
  - : Ausgelöst, wenn das Dokument entladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("body") }}
