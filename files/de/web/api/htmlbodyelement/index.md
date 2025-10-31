---
title: HTMLBodyElement
slug: Web/API/HTMLBodyElement
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("HTML DOM")}}

Das **`HTMLBodyElement`** Interface bietet spezielle Eigenschaften (über die hinaus, die von dem regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface geerbt werden) zur Manipulation von {{HtmlElement("body")}} Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLBodyElement.aLink`](/de/docs/Web/API/HTMLBodyElement/aLink) {{deprecated_inline}}
  - : Ein String, der die Farbe von aktiven Hyperlinks darstellt.
- [`HTMLBodyElement.background`](/de/docs/Web/API/HTMLBodyElement/background) {{deprecated_inline}}
  - : Ein String, der die Beschreibung des Speicherorts der Hintergrundbild-Ressource darstellt. Beachten Sie, dass dies kein URI ist, obwohl einige ältere Versionen von einigen Browsern dies erwarten könnten.
- [`HTMLBodyElement.bgColor`](/de/docs/Web/API/HTMLBodyElement/bgColor) {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe für das Dokument darstellt.
- [`HTMLBodyElement.link`](/de/docs/Web/API/HTMLBodyElement/link) {{deprecated_inline}}
  - : Ein String, der die Farbe von nicht besuchten Links darstellt.
- [`HTMLBodyElement.text`](/de/docs/Web/API/HTMLBodyElement/text) {{deprecated_inline}}
  - : Ein String, der die Vordergrundfarbe des Textes darstellt.
- [`HTMLBodyElement.vLink`](/de/docs/Web/API/HTMLBodyElement/vLink) {{deprecated_inline}}
  - : Ein String, der die Farbe von besuchten Links darstellt.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Eltern-Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignis-Handler

Die Ereignisse von [`HTMLElement`](/de/docs/Web/API/HTMLElement) werden geerbt.

Die folgenden `onXYZ` Ereignis-Handler-Eigenschaften des [`Window`](/de/docs/Web/API/Window) sind ebenfalls als Aliase verfügbar, die auf das `window` Objekt abzielen. Es wird jedoch empfohlen, sie direkt am `window` Objekt zu überwachen, anstatt am `HTMLBodyElement`.

> [!NOTE]
> Die Verwendung von `addEventListener()` auf `HTMLBodyElement` funktioniert nicht für die unten aufgeführten `onXYZ` Ereignis-Handler. Überwachen Sie die Ereignisse stattdessen auf dem [`window`](/de/docs/Web/API/Window) Objekt.

- [`HTMLBodyElement.onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`HTMLBodyElement.onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument gedruckt oder für den Druck vorab angezeigt werden soll.
- [`HTMLBodyElement.onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden sollen.
- [`HTMLBodyElement.onblur`](/de/docs/Web/API/Window/blur_event)
  - : Wird ausgelöst, wenn das Fenster den Fokus verliert.
- [`HTMLBodyElement.onerror`](/de/docs/Web/API/Window/error_event)
  - : Wird ausgelöst, wenn ein Fehler auftritt und bis zum Fenster hochgebubbelt wird.
- [`HTMLBodyElement.onfocus`](/de/docs/Web/API/Window/focus_event)
  - : Wird ausgelöst, wenn das Fenster den Fokus erhält.
- [`HTMLBodyElement.ongamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad verbunden wurde oder zum ersten Mal eine Taste/Achse des Gamepads verwendet wird.
- [`HTMLBodyElement.ongamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.
- [`HTMLBodyElement.onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragment-Identifikator der URL ändert (der Teil der URL, beginnend mit und folgend auf das `#`-Symbol).
- [`HTMLBodyElement.onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`HTMLBodyElement.onload`](/de/docs/Web/API/Window/load_event)
  - : Wird ausgelöst, wenn das Dokument vollständig geladen wurde.
- [`HTMLBodyElement.onmessage`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht empfängt, z.B. von einem Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) von einem anderen Browse-Kontext.
- [`HTMLBodyElement.onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht empfängt, die nicht deserialisiert werden kann.
- [`HTMLBodyElement.onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk verliert und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `false` wechselt.
- [`HTMLBodyElement.ononline`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk gewinnt und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `true` wechselt.
- [`HTMLBodyElement.onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird ausgelöst, wenn der Browser die aktuelle Seite im Zuge der Präsentation einer anderen Seite aus der Sitzungsverlaufshistorie verbirgt.
- [`HTMLBodyElement.onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird ausgelöst, wenn der Browser das Dokument des Fensters aufgrund einer Navigation anzeigt.
- [`HTMLBodyElement.onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn der aktive Verlaufseintrag sich ändert, während der Nutzer in der Sitzungshistorie navigiert.
- [`HTMLBodyElement.onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird ausgelöst, wenn immer ein JavaScript {{jsxref("Promise")}} abgelehnt wurde und die Ablehnung behandelt wurde.
- [`HTMLBodyElement.onresize`](/de/docs/Web/API/Window/resize_event)
  - : Wird ausgelöst, wenn die Dokumentansicht in ihrer Größe geändert wurde.
- [`HTMLBodyElement.onscroll`](/de/docs/Web/API/Window/scroll_event)
  - : Wird ausgelöst, wenn die Dokumentansicht oder ein Element gescrollt wurde.
- [`HTMLBodyElement.onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments verändert wurde.
- [`HTMLBodyElement.onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird ausgelöst, wenn immer ein {{jsxref("Promise")}} abgelehnt wurde, aber die Ablehnung nicht behandelt wurde.
- [`HTMLBodyElement.onunload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument entladen wird.

Beachten Sie, dass `onblur`, `onerror`, `onfocus`, `onload`, `onresize` und `onscroll` auf jedem Element verfügbar sind, ihre Bedeutungen auf dem `<body>` Element jedoch nicht die gleichen wie auf anderen Elementen sind. Sie hören stattdessen auf Ereignisse auf dem `window` Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{ HTMLElement("body") }}
