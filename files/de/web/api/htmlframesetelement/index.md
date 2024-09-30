---
title: HTMLFrameSetElement
slug: Web/API/HTMLFrameSetElement
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`HTMLFrameSetElement`**-Schnittstelle bietet spezielle Eigenschaften (zusätzlich zu denen des regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces, die sie ebenfalls erben) zum Manipulieren von {{HTMLElement("frameset")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFrameSetElement.cols`](/de/docs/Web/API/HTMLFrameSetElement/cols) {{deprecated_inline}}
  - : Ein String, der als komma-separierte Liste strukturiert ist und die Breite jeder Spalte innerhalb eines Framesets angibt.
- [`HTMLFrameSetElement.rows`](/de/docs/Web/API/HTMLFrameSetElement/rows) {{deprecated_inline}}
  - : Ein String, der als komma-separierte Liste strukturiert ist und die Höhe jeder Spalte innerhalb eines Framesets angibt.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignis-Handler

Die Ereignisse von [`HTMLElement`](/de/docs/Web/API/HTMLElement) werden geerbt.

Die folgenden `onXYZ` Ereignis-Handler-Eigenschaften des [`Window`](/de/docs/Web/API/Window) sind auch als Aliase verfügbar, die auf das `window`-Objekt abzielen. Es wird jedoch empfohlen, diese direkt am `window`-Objekt zu lauschen, anstatt am `HTMLFrameSetElement`.

> [!NOTE]
> Die Verwendung von `addEventListener()` an `HTMLFrameSetElement` funktioniert nicht für die unten aufgeführten `onXYZ`-Ereignis-Handler. Hören Sie stattdessen auf die Ereignisse am [`window`](/de/docs/Web/API/Window)-Objekt.

- [`HTMLFrameSetElement.onafterprint`](/de/docs/Web/API/Window/afterprint_event)
  - : Wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- [`HTMLFrameSetElement.onbeforeprint`](/de/docs/Web/API/Window/beforeprint_event)
  - : Wird ausgelöst, wenn das zugehörige Dokument gedruckt oder für den Druck vorgemerkt wird.
- [`HTMLFrameSetElement.onbeforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - : Wird ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden sollen.
- [`HTMLFrameSetElement.ongamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder zum ersten Mal eine Taste/Achse des Gamepads benutzt wird.
- [`HTMLFrameSetElement.ongamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.
- [`HTMLFrameSetElement.onhashchange`](/de/docs/Web/API/Window/hashchange_event)
  - : Wird ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und folgt).
- [`HTMLFrameSetElement.onlanguagechange`](/de/docs/Web/API/Window/languagechange_event)
  - : Wird ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- [`HTMLFrameSetElement.onmessage`](/de/docs/Web/API/Window/message_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, zum Beispiel durch einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- [`HTMLFrameSetElement.onmessageerror`](/de/docs/Web/API/Window/messageerror_event)
  - : Wird ausgelöst, wenn das Fenster eine Nachricht erhält, die nicht deserialisiert werden kann.
- [`HTMLFrameSetElement.onoffline`](/de/docs/Web/API/Window/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugriff aufs Netzwerk verliert und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `false` wechselt.
- [`HTMLFrameSetElement.ononline`](/de/docs/Web/API/Window/online_event)
  - : Wird ausgelöst, wenn der Browser wieder Zugriff aufs Netzwerk erhält und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `true` wechselt.
- [`HTMLFrameSetElement.onpagehide`](/de/docs/Web/API/Window/pagehide_event)
  - : Wird ausgelöst, wenn der Browser die aktuelle Seite versteckt, um eine andere Seite aus dem Verlauf der Sitzung anzuzeigen.
- [`HTMLFrameSetElement.onpageshow`](/de/docs/Web/API/Window/pageshow_event)
  - : Wird ausgelöst, wenn der Browser das Dokument des Fensters aufgrund einer Navigation anzeigt.
- [`HTMLFrameSetElement.onpopstate`](/de/docs/Web/API/Window/popstate_event)
  - : Wird ausgelöst, wenn der aktive Eintrag im Verlauf geändert wird, während der Benutzer im Verlauf der Sitzung navigiert.
- [`HTMLFrameSetElement.onrejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird immer dann ausgelöst, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird und die Ablehnung behandelt wurde.
- [`HTMLFrameSetElement.onstorage`](/de/docs/Web/API/Window/storage_event)
  - : Wird ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments geändert wurde.
- [`HTMLFrameSetElement.onunhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird immer dann ausgelöst, wenn ein {{jsxref("Promise")}} abgelehnt wird, aber die Ablehnung nicht behandelt wurde.
- [`HTMLFrameSetElement.onunload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument entladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{HTMLElement("frameset")}}
- Das Äquivalent dieses Elements außerhalb von Frames: `HTMLFrameSetElement`.
