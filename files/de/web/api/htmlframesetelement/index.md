---
title: HTMLFrameSetElement
slug: Web/API/HTMLFrameSetElement
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`HTMLFrameSetElement`**-Schnittstelle stellt spezielle Eigenschaften bereit (zusätzlich zu denen, die sie von der regulären {{domxref("HTMLElement")}}-Schnittstelle erben) zur Manipulation von {{HTMLELEment("frameset")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFrameSetElement.cols")}} {{deprecated_inline}}
  - : Ein String, der als kommagetrennte Liste strukturiert ist und die Breite jeder Spalte in einem Frameset angibt.
- {{domxref("HTMLFrameSetElement.rows")}} {{deprecated_inline}}
  - : Ein String, der als kommagetrennte Liste strukturiert ist und die Höhe jeder Zeile in einem Frameset angibt.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, {{domxref("HTMLElement")}}._

## Ereignis-Handler

Die {{domxref("HTMLElement")}}-Ereignisse werden geerbt.

Die folgenden {{domxref("Window")}} `onXYZ`-Ereignis-Handler-Eigenschaften sind ebenfalls als Aliase verfügbar, die auf das `window` Objekt abzielen. Es wird jedoch empfohlen, diese direkt auf dem `window` Objekt zu überwachen, anstatt auf `HTMLFrameSetElement`.

> [!NOTE]
> Die Verwendung von `addEventListener()` auf `HTMLFrameSetElement` wird für die unten aufgeführten `onXYZ`-Ereignishandler nicht funktionieren. Lauschen Sie stattdessen auf die Ereignisse auf dem {{domxref("window")}} Objekt.

- {{domxref("window.afterprint_event", "HTMLFrameSetElement.onafterprint")}}
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- {{domxref("window.beforeprint_event", "HTMLFrameSetElement.onbeforeprint")}}
  - : Wird ausgelöst, wenn das zugehörige Dokument zum Drucken vorbereitet wird oder in der Druckvorschau erscheint.
- {{domxref("window.beforeunload_event", "HTMLFrameSetElement.onbeforeunload")}}
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen kurz vor dem Entladen stehen.
- {{domxref("window.gamepadconnected_event", "HTMLFrameSetElement.ongamepadconnected")}}
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder das erste Mal eine Taste/Achse des Gamepads verwendet wird.
- {{domxref("window.gamepaddisconnected_event", "HTMLFrameSetElement.ongamepaddisconnected")}}
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.
- {{domxref("window.hashchange_event", "HTMLFrameSetElement.onhashchange")}}
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und folgt).
- {{domxref("window.languagechange_event", "HTMLFrameSetElement.onlanguagechange")}}
  - : Wird ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- {{domxref("window.message_event", "HTMLFrameSetElement.onmessage")}}
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, z. B. von einem Aufruf an [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- {{domxref("window.messageerror_event", "HTMLFrameSetElement.onmessageerror")}}
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, die nicht deserialisiert werden kann.
- {{domxref("window.offline_event", "HTMLFrameSetElement.onoffline")}}
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk verloren hat und der Wert von {{domxref("Navigator.onLine")}} auf `false` wechselt.
- {{domxref("window.online_event", "HTMLFrameSetElement.ononline")}}
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk erlangt hat und der Wert von {{domxref("Navigator.onLine")}} auf `true` wechselt.
- {{domxref("window.pagehide_event", "HTMLFrameSetElement.onpagehide")}}
  - : Wird ausgelöst, wenn der Browser die aktuelle Seite verbirgt, während er eine andere Seite aus dem Sitzungsverlauf anzeigt.
- {{domxref("window.pageshow_event", "HTMLFrameSetElement.onpageshow")}}
  - : Wird ausgelöst, wenn der Browser das Dokument des Fensters aufgrund einer Navigation anzeigt.
- {{domxref("window.popstate_event", "HTMLFrameSetElement.onpopstate")}}
  - : Wird ausgelöst, wenn der aktive Verlaufseintrag gewechselt wird, während der Benutzer im Sitzungsverlauf navigiert.
- {{domxref("window.rejectionhandled_event", "HTMLFrameSetElement.onrejectionhandled")}}
  - : Wird ausgelöst, wenn immer ein JavaScript {{jsxref("Promise")}} abgelehnt wird und die Ablehnung behandelt wurde.
- {{domxref("window.storage_event", "HTMLFrameSetElement.onstorage")}}
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments modifiziert wurde.
- {{domxref("window.unhandledrejection_event", "HTMLFrameSetElement.onunhandledrejection")}}
  - : Wird ausgelöst, wenn eine {{jsxref("Promise")}} abgelehnt wird, aber die Ablehnung nicht behandelt wurde.
- {{domxref("window.unload_event", "HTMLFrameSetElement.onunload")}}
  - : Wird ausgelöst, wenn das Dokument entladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("frameset")}}
- Das Äquivalent dieses Elements außerhalb von Frames: `HTMLFrameSetElement`.
