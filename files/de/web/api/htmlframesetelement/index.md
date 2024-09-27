---
title: HTMLFrameSetElement
slug: Web/API/HTMLFrameSetElement
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Das **`HTMLFrameSetElement`** Interface bietet spezielle Eigenschaften (über die hinaus, die sie auch von dem regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface erben) zur Manipulation von {{HTMLELEment("frameset")}} Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFrameSetElement.cols`](/de/docs/Web/API/HTMLFrameSetElement/cols) {{deprecated_inline}}
  - : Eine als durch Kommas getrennte Liste strukturierte Zeichenfolge, die die Breite jeder Spalte innerhalb eines Framesets angibt.
- [`HTMLFrameSetElement.rows`](/de/docs/Web/API/HTMLFrameSetElement/rows) {{deprecated_inline}}
  - : Eine als durch Kommas getrennte Liste strukturierte Zeichenfolge, die die Höhe jeder Spalte innerhalb eines Framesets angibt.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignishandler

Die Ereignisse des [`HTMLElement`](/de/docs/Web/API/HTMLElement) werden geerbt.

Die folgenden [`Window`](/de/docs/Web/API/Window) `onXYZ` Ereignishandler-Eigenschaften sind ebenfalls als Aliase verfügbar, die auf das `window` Objekt abzielen. Es wird jedoch empfohlen, sie direkt am `window` Objekt zu überwachen, anstatt am `HTMLFrameSetElement`.

> [!NOTE]
> Die Verwendung von `addEventListener()` am `HTMLFrameSetElement` funktioniert nicht für die unten aufgelisteten `onXYZ` Ereignishandler. Hören Sie stattdessen die Ereignisse auf dem [`window`](/de/docs/Web/API/Window) Objekt ab.

- [`HTMLFrameSetElement.onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`HTMLFrameSetElement.onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument gedruckt oder in der Druckvorschau angezeigt werden soll.
- [`HTMLFrameSetElement.onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden sollen.
- [`HTMLFrameSetElement.ongamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad verbunden wurde oder das erste Mal eine Taste/Achse des Gamepads verwendet wird.
- [`HTMLFrameSetElement.ongamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.
- [`HTMLFrameSetElement.onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragment-Identifikator der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt).
- [`HTMLFrameSetElement.onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`HTMLFrameSetElement.onmessage`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, beispielsweise von einem Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`HTMLFrameSetElement.onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, die nicht deserialisiert werden kann.
- [`HTMLFrameSetElement.onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk verloren hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `false` wechselt.
- [`HTMLFrameSetElement.ononline`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser Zugang zum Netzwerk erlangt und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `true` wechselt.
- [`HTMLFrameSetElement.onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird ausgelöst, wenn der Browser die aktuelle Seite versteckt, um eine andere Seite aus der Sitzungsverlauf anzuzeigen.
- [`HTMLFrameSetElement.onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird ausgelöst, wenn der Browser das Dokument des Fensters aufgrund einer Navigation anzeigt.
- [`HTMLFrameSetElement.onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn sich der aktive Verlaufseintrag ändert, während der Benutzer den Sitzungsverlauf durchsucht.
- [`HTMLFrameSetElement.onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird ausgelöst, wann immer ein JavaScript {{jsxref("Promise")}} abgelehnt und die Ablehnung behandelt wurde.
- [`HTMLFrameSetElement.onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments modifiziert wurde.
- [`HTMLFrameSetElement.onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird ausgelöst, wann immer ein {{jsxref("Promise")}} abgelehnt wurde, die Ablehnung jedoch nicht behandelt wurde.
- [`HTMLFrameSetElement.onunload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument entladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{HTMLElement("frameset")}}
- Das Äquivalent dieses Elements außerhalb von Frames: `HTMLFrameSetElement`.
