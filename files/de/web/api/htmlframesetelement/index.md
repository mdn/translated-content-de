---
title: HTMLFrameSetElement
slug: Web/API/HTMLFrameSetElement
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Das **`HTMLFrameSetElement`** Interface bietet spezielle Eigenschaften (über die der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle hinaus, die sie ebenfalls erben) zur Manipulation von {{HTMLElement("frameset")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFrameSetElement.cols`](/de/docs/Web/API/HTMLFrameSetElement/cols) {{deprecated_inline}}
  - : Ein String, der als kommagetrennte Liste strukturiert ist und die Breite jeder Spalte innerhalb eines Framesets angibt.
- [`HTMLFrameSetElement.rows`](/de/docs/Web/API/HTMLFrameSetElement/rows) {{deprecated_inline}}
  - : Ein String, der als kommagetrennte Liste strukturiert ist und die Höhe jeder Spalte innerhalb eines Framesets angibt.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Event-Handler

Die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Ereignisse werden geerbt.

Die folgenden [`Window`](/de/docs/Web/API/Window) `onXYZ` Event-Handler-Eigenschaften sind auch als Aliase verfügbar, die auf das `window`-Objekt zielen. Es wird jedoch geraten, ihnen direkt auf dem `window`-Objekt statt auf `HTMLFrameSetElement` zuzuhören.

> [!NOTE]
> Die Verwendung von `addEventListener()` auf `HTMLFrameSetElement` funktioniert nicht für die unten aufgeführten `onXYZ` Event-Handler. Hören Sie stattdessen auf die Ereignisse auf dem [`window`](/de/docs/Web/API/Window) Objekt.

- [`HTMLFrameSetElement.onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`HTMLFrameSetElement.onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument gedruckt oder für das Drucken in der Vorschau angezeigt werden soll.
- [`HTMLFrameSetElement.onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden sollen.
- [`HTMLFrameSetElement.ongamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder das erste Mal ein Knopf/Achse des Gamepads benutzt wird.
- [`HTMLFrameSetElement.ongamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.
- [`HTMLFrameSetElement.onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragmentidentifikator der URL geändert hat (der Teil der URL, der mit dem `#` Symbol beginnt und ihm folgt).
- [`HTMLFrameSetElement.onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`HTMLFrameSetElement.onmessage`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, zum Beispiel durch einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`HTMLFrameSetElement.onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, die nicht deserialisiert werden kann.
- [`HTMLFrameSetElement.onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk verliert und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) zu `false` wechselt.
- [`HTMLFrameSetElement.ononline`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser Zugang zum Netzwerk erhält und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) zu `true` wechselt.
- [`HTMLFrameSetElement.onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird ausgelöst, wenn der Browser die aktuelle Seite ausblendet, um eine andere Seite aus dem Sitzungsverlauf anzuzeigen.
- [`HTMLFrameSetElement.onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird ausgelöst, wenn der Browser das Dokument des Fensters durch Navigation anzeigt.
- [`HTMLFrameSetElement.onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn der aktive Verlaufseintrag sich ändert, während der Benutzer im Sitzungsverlauf navigiert.
- [`HTMLFrameSetElement.onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird jedes Mal ausgelöst, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird und die Ablehnung behandelt wurde.
- [`HTMLFrameSetElement.onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments verändert wurde.
- [`HTMLFrameSetElement.onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird jedes Mal ausgelöst, wenn ein {{jsxref("Promise")}} abgelehnt wird, die Ablehnung aber nicht behandelt wurde.
- [`HTMLFrameSetElement.onunload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument entladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{HTMLElement("frameset")}}
- Das Äquivalent dieses Elements außerhalb von Frames: `HTMLFrameSetElement`.
