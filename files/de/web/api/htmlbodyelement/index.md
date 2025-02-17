---
title: HTMLBodyElement
slug: Web/API/HTMLBodyElement
l10n:
  sourceCommit: 69a705c07d1cd6b8f3e5d711421a23a09f471958
---

{{APIRef("HTML DOM")}}

Die **`HTMLBodyElement`**-Schnittstelle bietet spezielle Eigenschaften (zusätzlich zu denjenigen, die von der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle geerbt werden), um {{HtmlElement("body")}}-Elemente zu manipulieren.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLBodyElement.aLink`](/de/docs/Web/API/HTMLBodyElement/aLink) {{deprecated_inline}}
  - : Ein String, der die Farbe von aktiven Hyperlinks darstellt.
- [`HTMLBodyElement.background`](/de/docs/Web/API/HTMLBodyElement/background) {{deprecated_inline}}
  - : Ein String, der die Beschreibung des Speicherorts der Hintergrundbildressource darstellt. Beachten Sie, dass dies keine URI ist, obwohl einige ältere Browser-Versionen dies erwarten könnten.
- [`HTMLBodyElement.bgColor`](/de/docs/Web/API/HTMLBodyElement/bgColor) {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe des Dokuments darstellt.
- [`HTMLBodyElement.link`](/de/docs/Web/API/HTMLBodyElement/link) {{deprecated_inline}}
  - : Ein String, der die Farbe von nicht besuchten Links darstellt.
- [`HTMLBodyElement.text`](/de/docs/Web/API/HTMLBodyElement/text) {{deprecated_inline}}
  - : Ein String, der die Vordergrundfarbe des Textes darstellt.
- [`HTMLBodyElement.vLink`](/de/docs/Web/API/HTMLBodyElement/vLink) {{deprecated_inline}}
  - : Ein String, der die Farbe von besuchten Links darstellt.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignishandler

Die Ereignisse von [`HTMLElement`](/de/docs/Web/API/HTMLElement) werden geerbt.

Die folgenden [`Window`](/de/docs/Web/API/Window)-`onXYZ`-Ereignishandler-Eigenschaften sind ebenfalls als Aliase verfügbar, die auf das `window`-Objekt abzielen. Es wird jedoch empfohlen, diese direkt auf dem `window`-Objekt zu verwenden, anstatt auf `HTMLBodyElement`.

> [!NOTE]
> Die Verwendung von `addEventListener()` auf `HTMLBodyElement` funktioniert nicht für die unten aufgeführten `onXYZ`-Ereignishandler. Hören Sie stattdessen auf die Ereignisse am [`window`](/de/docs/Web/API/Window)-Objekt.

- [`HTMLBodyElement.onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`HTMLBodyElement.onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument kurz vor dem Drucken oder der Druckvorschau steht.
- [`HTMLBodyElement.onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden sollen.
- [`HTMLBodyElement.onblur`](/de/docs/Web/API/Window/blur_event)
  - : Wird ausgelöst, wenn das Fenster den Fokus verliert.
- [`HTMLBodyElement.onerror`](/de/docs/Web/API/Window/error_event)
  - : Wird ausgelöst, wenn ein Fehler auftritt und sich bis zum Fenster aufbläht.
- [`HTMLBodyElement.onfocus`](/de/docs/Web/API/Window/focus_event)
  - : Wird ausgelöst, wenn das Fenster den Fokus erhält.
- [`HTMLBodyElement.ongamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser ein verbundenes Gamepad erkennt oder wenn ein Knopf/Achse des Gamepads zum ersten Mal benutzt wird.
- [`HTMLBodyElement.ongamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser ein getrenntes Gamepad erkennt.
- [`HTMLBodyElement.onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn der Fragmentbezeichner der URL geändert wurde (der Teil der URL, der mit dem `#`-Symbol beginnt und darauf folgt).
- [`HTMLBodyElement.onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird ausgelöst, wenn die bevorzugte Sprache des Benutzers geändert wird.
- [`HTMLBodyElement.onload`](/de/docs/Web/API/Window/load_event)
  - : Wird ausgelöst, wenn das Dokument vollständig geladen wurde.
- [`HTMLBodyElement.onmessage`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, z. B. von einem Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`HTMLBodyElement.onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, die nicht deserialisiert werden kann.
- [`HTMLBodyElement.onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk verliert und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `false` wechselt.
- [`HTMLBodyElement.ononline`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk wiedererlangt und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `true` wechselt.
- [`HTMLBodyElement.onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird ausgelöst, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus dem Sitzungsspeicher anzuzeigen.
- [`HTMLBodyElement.onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird ausgelöst, wenn der Browser das Dokument des Fensters aufgrund einer Navigation anzeigt.
- [`HTMLBodyElement.onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn der aktive Verlaufseintrag sich ändert, während der Benutzer die Sitzungsverlaufshistorie durchstöbert.
- [`HTMLBodyElement.onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird ausgelöst, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wurde und die Ablehnung behandelt wurde.
- [`HTMLBodyElement.onresize`](/de/docs/Web/API/Window/resize_event)
  - : Wird ausgelöst, wenn die Dokumentansicht neu skaliert wurde.
- [`HTMLBodyElement.onscroll`](/de/docs/Web/API/Window/scroll_event)
  - : Wird ausgelöst, wenn die Dokumentansicht oder ein Element gescrollt wurde.
- [`HTMLBodyElement.onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments modifiziert wurde.
- [`HTMLBodyElement.onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird ausgelöst, wenn ein {{jsxref("Promise")}} abgelehnt wurde, aber die Ablehnung nicht behandelt wurde.
- [`HTMLBodyElement.onunload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument entladen wird.

Beachten Sie, dass während `onblur`, `onerror`, `onfocus`, `onload`, `onresize` und `onscroll` auf jedem Element verfügbar sind, ihre Bedeutungen auf dem `<body>`-Element nicht dieselben sind wie auf anderen Elementen. Sie überwachen Ereignisse auf dem `window`-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("body") }}
