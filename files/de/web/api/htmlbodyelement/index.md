---
title: HTMLBodyElement
slug: Web/API/HTMLBodyElement
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Das **`HTMLBodyElement`**-Interface bietet spezielle Eigenschaften (über die von der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle geerbten hinaus) zur Manipulation von {{HtmlElement("body")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLBodyElement.aLink`](/de/docs/Web/API/HTMLBodyElement/aLink) {{deprecated_inline}}
  - : Ein String, der die Farbe von aktiven Hyperlinks repräsentiert.
- [`HTMLBodyElement.background`](/de/docs/Web/API/HTMLBodyElement/background) {{deprecated_inline}}
  - : Ein String, der die Beschreibung des Standorts der Hintergrundbildressource repräsentiert. Beachten Sie, dass dies kein URI ist, obwohl einige ältere Versionen von einigen Browsern dies erwarten.
- [`HTMLBodyElement.bgColor`](/de/docs/Web/API/HTMLBodyElement/bgColor) {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe für das Dokument repräsentiert.
- [`HTMLBodyElement.link`](/de/docs/Web/API/HTMLBodyElement/link) {{deprecated_inline}}
  - : Ein String, der die Farbe von unbesuchten Links repräsentiert.
- [`HTMLBodyElement.text`](/de/docs/Web/API/HTMLBodyElement/text) {{deprecated_inline}}
  - : Ein String, der die Vordergrundfarbe des Textes repräsentiert.
- [`HTMLBodyElement.vLink`](/de/docs/Web/API/HTMLBodyElement/vLink) {{deprecated_inline}}
  - : Ein String, der die Farbe von besuchten Links repräsentiert.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignis-Handler

Die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Ereignisse werden geerbt.

Die folgenden [`Window`](/de/docs/Web/API/Window) `onXYZ`-Ereignis-Handler-Eigenschaften sind ebenfalls als Aliase zum Anvisieren des `window`-Objekts verfügbar. Es wird jedoch empfohlen, sie direkt am `window`-Objekt zu beobachten, anstatt am `HTMLBodyElement`.

> [!NOTE]
> Die Verwendung von `addEventListener()` auf `HTMLBodyElement` funktioniert nicht für die unten aufgelisteten `onXYZ`-Ereignis-Handler. Hören Sie diese Ereignisse stattdessen am [`window`](/de/docs/Web/API/Window)-Objekt ab.

- [`HTMLBodyElement.onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`HTMLBodyElement.onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument gedruckt oder zur Druckvorschau bereitgestellt wird.
- [`HTMLBodyElement.onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden sollen.
- [`HTMLBodyElement.ongamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad verbunden wurde oder zum ersten Mal eine Taste/ein Achse des Gamepads verwendet wird.
- [`HTMLBodyElement.ongamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.
- [`HTMLBodyElement.onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL ändert (der Teil der URL, der mit dem `#`-Symbol beginnt und ihm folgt).
- [`HTMLBodyElement.onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird ausgelöst, wenn die bevorzugte Sprache des Benutzers sich ändert.
- [`HTMLBodyElement.onmessage`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, z. B. durch einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browserkontext.
- [`HTMLBodyElement.onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, die nicht deserialisiert werden kann.
- [`HTMLBodyElement.onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk verloren hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `false` umschaltet.
- [`HTMLBodyElement.ononline`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser wieder Zugang zum Netzwerk hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `true` umschaltet.
- [`HTMLBodyElement.onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird ausgelöst, wenn der Browser die aktuelle Seite verbirgt, um eine andere Seite aus dem Sitzungsverlauf anzuzeigen.
- [`HTMLBodyElement.onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird ausgelöst, wenn der Browser das Dokument des Fensters aufgrund einer Navigation anzeigt.
- [`HTMLBodyElement.onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn sich der aktive Eintrag im Verlauf ändert, während der Benutzer im Sitzungsverlauf navigiert.
- [`HTMLBodyElement.onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird ausgelöst, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird und die Ablehnung behandelt wurde.
- [`HTMLBodyElement.onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments modifiziert wurde.
- [`HTMLBodyElement.onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird ausgelöst, wenn ein {{jsxref("Promise")}} abgelehnt wird, die Ablehnung jedoch nicht behandelt wurde.
- [`HTMLBodyElement.onunload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument entladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{ HTMLElement("body") }}
