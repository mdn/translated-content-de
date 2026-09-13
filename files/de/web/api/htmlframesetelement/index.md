---
title: HTMLFrameSetElement
slug: Web/API/HTMLFrameSetElement
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`HTMLFrameSetElement`**-Schnittstelle bietet spezielle Eigenschaften (zusätzlich zu denen der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle, die sie ebenfalls erben) zum Manipulieren von {{HTMLElement("frameset")}}-Elementen.

{{InheritanceDiagram}}

## Instanz Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFrameSetElement.cols`](/de/docs/Web/API/HTMLFrameSetElement/cols) {{deprecated_inline}}
  - : Ein String, der als kommaseparierte Liste strukturiert ist und die Breite jeder Spalte innerhalb eines Framesets angibt.
- [`HTMLFrameSetElement.rows`](/de/docs/Web/API/HTMLFrameSetElement/rows) {{deprecated_inline}}
  - : Ein String, der als kommaseparierte Liste strukturiert ist und die Höhe jeder Spalte innerhalb eines Framesets angibt.

## Instanz Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignis-Handler

Die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Ereignisse werden geerbt.

Die folgenden [`Window`](/de/docs/Web/API/Window) `onXYZ`-Ereignis-Handler-Eigenschaften sind ebenfalls als Aliase verfügbar, die auf das `window`-Objekt abzielen. Es wird jedoch empfohlen, sie direkt auf dem `window`-Objekt zu hören, anstatt auf `HTMLFrameSetElement`.

> [!NOTE]
> Die Verwendung von `addEventListener()` auf `HTMLFrameSetElement` funktioniert nicht für die unten aufgeführten `onXYZ`-Ereignis-Handler. Hören Sie stattdessen auf die Ereignisse auf dem [`window`](/de/docs/Web/API/Window)-Objekt.

- [`HTMLFrameSetElement.onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`HTMLFrameSetElement.onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument gedruckt oder zur Druckvorschau geöffnet werden soll.
- [`HTMLFrameSetElement.onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden sollen.
- [`HTMLFrameSetElement.ongamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder das erste Mal, wenn eine Taste/Achse des Gamepads verwendet wird.
- [`HTMLFrameSetElement.ongamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.
- [`HTMLFrameSetElement.onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL ändert (der Teil der URL, der mit dem `#`-Symbol beginnt und folgt).
- [`HTMLFrameSetElement.onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`HTMLFrameSetElement.onmessage`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, zum Beispiel von einem Aufruf an [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`HTMLFrameSetElement.onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, die nicht deserialisiert werden kann.
- [`HTMLFrameSetElement.onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk verloren hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `false` wechselt.
- [`HTMLFrameSetElement.ononline`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser Zugang zum Netzwerk erlangt hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `true` wechselt.
- [`HTMLFrameSetElement.onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird ausgelöst, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus der Sitzungshistorie anzuzeigen.
- [`HTMLFrameSetElement.onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird ausgelöst, wenn der Browser das Dokument des Fensters aufgrund von Navigation anzeigt.
- [`HTMLFrameSetElement.onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn sich der aktive Verlaufseintrag ändert, während der Benutzer den Sitzungsverlauf durchsucht.
- [`HTMLFrameSetElement.onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird ausgelöst, wann immer ein JavaScript-{{jsxref("Promise")}} zurückgewiesen und die Zurückweisung behandelt wurde.
- [`HTMLFrameSetElement.onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments geändert wurde.
- [`HTMLFrameSetElement.onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird ausgelöst, wann immer ein {{jsxref("Promise")}} abgelehnt wurde, aber die Ablehnung nicht behandelt wurde.
- [`HTMLFrameSetElement.onunload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument entladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("frameset")}}
- Das Äquivalent dieses Elements außerhalb von Frames: `HTMLFrameSetElement`.
