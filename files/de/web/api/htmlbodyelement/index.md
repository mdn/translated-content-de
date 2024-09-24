---
title: HTMLBodyElement
slug: Web/API/HTMLBodyElement
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`HTMLBodyElement`** Schnittstelle bietet spezielle Eigenschaften (über die von der regulären {{ domxref("HTMLElement") }} Schnittstelle geerbten hinaus) zur Manipulation von {{HtmlElement("body")}} Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLBodyElement.aLink")}} {{deprecated_inline}}
  - : Ein String, der die Farbe von aktiven Hyperlinks darstellt.
- {{domxref("HTMLBodyElement.background")}} {{deprecated_inline}}
  - : Ein String, der die Beschreibung des Standorts der Hintergrundbild-Ressource darstellt. Beachten Sie, dass dies keine URI ist, obwohl einige ältere Versionen bestimmter Browser dies erwarten.
- {{domxref("HTMLBodyElement.bgColor")}} {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe des Dokuments darstellt.
- {{domxref("HTMLBodyElement.link")}} {{deprecated_inline}}
  - : Ein String, der die Farbe von nicht besuchten Links darstellt.
- {{domxref("HTMLBodyElement.text")}} {{deprecated_inline}}
  - : Ein String, der die Vordergrundfarbe des Textes darstellt.
- {{domxref("HTMLBodyElement.vLink")}} {{deprecated_inline}}
  - : Ein String, der die Farbe von besuchten Links darstellt.

## Instanz-Methoden

_Keine spezifischen Methoden; die Methoden von seinem Elternteil, {{domxref("HTMLElement")}}, werden geerbt._

## Ereignis-Handler

Die {{domxref("HTMLElement")}} Ereignisse werden geerbt.

Die folgenden {{domxref("Window")}} `onXYZ` Ereignis-Handler-Eigenschaften sind auch als Aliase auf das `window` Objekt verfügbar. Es wird jedoch empfohlen, diese direkt auf dem `window` Objekt zu überwachen, anstatt auf `HTMLBodyElement`.

> [!NOTE]
> Die Verwendung von `addEventListener()` auf `HTMLBodyElement` funktioniert nicht für die unten aufgelisteten `onXYZ` Ereignis-Handler. Hören Sie auf die Ereignisse auf dem {{domxref("window")}} Objekt.

- {{domxref("window.afterprint_event", "HTMLBodyElement.onafterprint")}}
  - : Ausgelöst, nachdem das zugehörige Dokument zu drucken begonnen hat oder die Druckvorschau geschlossen wurde.
- {{domxref("window.beforeprint_event", "HTMLBodyElement.onbeforeprint")}}
  - : Ausgelöst, wenn das zugehörige Dokument gedruckt oder zur Druckvorschau bereitgestellt wird.
- {{domxref("window.beforeunload_event", "HTMLBodyElement.onbeforeunload")}}
  - : Ausgelöst, wenn das Fenster, das Dokument und seine Ressourcen entladen werden sollen.
- {{domxref("window.gamepadconnected_event", "HTMLBodyElement.ongamepadconnected")}}
  - : Ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder zum ersten Mal eine Taste/Achse des Gamepads verwendet wird.
- {{domxref("window.gamepaddisconnected_event", "HTMLBodyElement.ongamepaddisconnected")}}
  - : Ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.
- {{domxref("window.hashchange_event", "HTMLBodyElement.onhashchange")}}
  - : Ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit dem `#` Symbol beginnt).
- {{domxref("window.languagechange_event", "HTMLBodyElement.onlanguagechange")}}
  - : Ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.
- {{domxref("window.message_event", "HTMLBodyElement.onmessage")}}
  - : Ausgelöst, wenn das Fenster eine Nachricht erhält, zum Beispiel durch einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.
- {{domxref("window.messageerror_event", "HTMLBodyElement.onmessageerror")}}
  - : Ausgelöst, wenn das Fenster eine Nachricht erhält, die nicht deserialisiert werden kann.
- {{domxref("window.offline_event", "HTMLBodyElement.onoffline")}}
  - : Ausgelöst, wenn der Browser den Netzwerkzugang verloren hat und der Wert von {{domxref("Navigator.onLine")}} auf `false` wechselt.
- {{domxref("window.online_event", "HTMLBodyElement.ononline")}}
  - : Ausgelöst, wenn der Browser den Netzwerkzugang wiedererlangt hat und der Wert von {{domxref("Navigator.onLine")}} auf `true` wechselt.
- {{domxref("window.pagehide_event", "HTMLBodyElement.onpagehide")}}
  - : Ausgelöst, wenn der Browser die aktuelle Seite versteckt, um eine andere Seite aus dem Verlauf der Sitzung anzuzeigen.
- {{domxref("window.pageshow_event", "HTMLBodyElement.onpageshow")}}
  - : Ausgelöst, wenn der Browser das Dokument des Fensters aufgrund einer Navigation anzeigt.
- {{domxref("window.popstate_event", "HTMLBodyElement.onpopstate")}}
  - : Ausgelöst, wenn sich der aktive Verlaufseintrag ändert, während der Benutzer im Verlauf der Sitzung navigiert.
- {{domxref("window.rejectionhandled_event", "HTMLBodyElement.onrejectionhandled")}}
  - : Ausgelöst, wenn ein JavaScript {{jsxref("Promise")}} abgelehnt wird und die Ablehnung behandelt wurde.
- {{domxref("window.storage_event", "HTMLBodyElement.onstorage")}}
  - : Ausgelöst, wenn ein Speicherbereich (`localStorage`) im Kontext eines anderen Dokuments geändert wurde.
- {{domxref("window.unhandledrejection_event", "HTMLBodyElement.onunhandledrejection")}}
  - : Ausgelöst, wenn ein {{jsxref("Promise")}} abgelehnt wurde, aber die Ablehnung nicht behandelt wurde.
- {{domxref("window.unload_event", "HTMLBodyElement.onunload")}}
  - : Ausgelöst, wenn das Dokument entladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("body") }}
