---
title: Firefox 90 für Entwickler
slug: Mozilla/Firefox/Releases/90
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 90, die Entwickler betreffen werden. Firefox 90 wurde am 13. Juli 2021 freigegeben.

> [!NOTE]
> Siehe auch [Getting lively with Firefox 90](https://hacks.mozilla.org/2021/07/getting-lively-with-firefox-90/) auf Mozilla Hacks.

## Änderungen für Web-Entwickler

### Entwickler-Tools

- Die Antwortansicht zeigt nun eine [Vorschau für Web-Schriftarten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) ([Firefox Bug 872078](https://bugzil.la/872078)).

### HTML

- Eine Korrektur der Art und Weise, wie Formular-Payloads im Hinblick auf Zeilenumbruchnormierung und Escaping in multipart/formdata behandelt werden. Dies entspricht der aktualisierten Spezifikation und gleicht die Implementierungen anderer Browser an. ([Firefox Bug 1686765](https://bugzil.la/1686765)).
- Firefox setzt nun die [intrinsische Größe](/de/docs/Glossary/intrinsic_size) und die Auflösung eines Bildes basierend auf [EXIF](/de/docs/Glossary/EXIF)-Informationen (falls vorhanden und widerspruchsfrei). Dies ermöglicht es einem Server, beispielsweise ein Bild mit niedriger Qualität zu senden, um das Laden zu beschleunigen. Es ermöglicht auch eine [Anzahl anderer Anwendungsfälle](https://github.com/eeeps/exif-intrinsic-sizing-explainer) ([Firefox Bug 1680387](https://bugzil.la/1680387)).

### CSS

- `-webkit-image-set()` wurde als Alias der Standardfunktion {{cssxref("image/image-set", "image/image-set()")}} implementiert ([Firefox Bug 1709415](https://bugzil.la/1709415)).

### JavaScript

- [Private statische und Instanzfelder sowie Methoden in Klassen](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) werden nun standardmäßig unterstützt ([Firefox Bug 1708235](https://bugzil.la/1708235) und [Firefox Bug 1708236](https://bugzil.la/1708236)).
- Der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator kann jetzt verwendet werden, um [zu überprüfen, ob eine private Methode oder ein privates Feld einer Klasse definiert wurde](/de/docs/Web/JavaScript/Reference/Operators/in#using_the_in_operator_to_implement_branded_checks). Dies bietet einen kompakteren Ansatz für den Umgang mit potenziell undefinierten Funktionen, im Gegensatz zum Einwickeln von Code in `try/catch` Blöcken ([Firefox Bug 1648090](https://bugzil.la/1648090)).
- Benutzerdefinierte Datums-/Zeitformate, die als Optionen an den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) übergeben werden, können nun `dayPeriod` einschließen – einen Wert, der angibt, dass die ungefähre Tageszeit (z.B. „am Morgen“, „in der Nacht“ etc.) als `narrow`, `short` oder `long` String enthalten sein soll ([Firefox Bug 1645115](https://bugzil.la/1645115)).
- Die relative Indexierungsmethode `at()` wurde den globalen Objekten [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) und [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) hinzugefügt. ([Firefox Bug 1681371](https://bugzil.la/1681371))

### HTTP

- Die HTTP [Fetch-Metadatenanforderungsheader](/de/docs/Glossary/Fetch_metadata_request_header) (`Sec-Fetch-*`) werden jetzt unterstützt. Diese Header bieten Servern zusätzlichen Kontext zu Anfragen, einschließlich ob sie same-origin, cross-origin, same-site oder vom Benutzer initiiert sind und wo/wie die angeforderten Daten verwendet werden sollen. Dies ermöglicht es Servern, verschiedene Arten von Cross-Origin-Angriffen zu verhindern ([Firefox Bug 1695911](https://bugzil.la/1695911)).

#### Entfernungen

- FTP wurde nun aus Firefox entfernt ([Firefox Bug 1574475](https://bugzil.la/1574475)). Dies folgt auf die [Abschaffung in Firefox 88](/de/docs/Mozilla/Firefox/Releases/88#http). Beachten Sie, dass Web-Erweiterungen sich weiterhin als [FTP-Protokoll-Handler](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) registrieren können.

### APIs

#### DOM

- Unterstützung wurde für die veralteten [`WheelEvent`](/de/docs/Web/API/WheelEvent) Eigenschaften hinzugefügt: `WheelEvent.wheelDelta`, `WheelEvent.wheelDeltaX` und `WheelEvent.wheelDeltaY`. Dadurch kann Firefox mit einem kleinen Teil der Seiten arbeiten, die durch kürzliche Kompatibilitätsverbesserungen in `WheelEvent` beeinträchtigt wurden ([Firefox Bug 1708829](https://bugzil.la/1708829)).
- Das [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Interface der [Canvas API](/de/docs/Web/API/Canvas_API) stellt nun eine [`createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient) Methode bereit. Diese gibt ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) zurück, ähnlich den bestehenden [`linear`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient) und [`radial`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient) Verläufen, erlaubt jedoch ein Verlaufsverlauf um einen durch Koordinaten definierten Punkt. Details finden Sie im [Firefox Bug 1627014](https://bugzil.la/1627014).
- Unterstützung für das `matrix` Protokoll wurde hinzugefügt und kann nun als gültiges Schema in die Methode [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) übergeben werden.

### WebDriver-Konformität (Marionette)

- Marionette beschränkt sich nun auf eine einzelne aktive WebDriver-Session ([Firefox Bug 1691047](https://bugzil.la/1691047)).
- Unterstützung für die neue Art von Benutzeraufforderungen in Firefox wurde hinzugefügt ([Firefox Bug 1686741](https://bugzil.la/1686741)).
- Fenster-Handles verwenden nun eine eindeutige ID und ändern sich nicht mehr bei Prozesswechseln, wie sie durch [cross-group navigations](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) verursacht werden ([Firefox Bug 1680479](https://bugzil.la/1680479)).
- Korrektur eines unangemessenen Abbruchs des aktuellen WebDriver-Kommandos, wenn eine neue Benutzeraufforderung in einem Hintergrund-Tab geöffnet wurde ([Firefox Bug 1701686](https://bugzil.la/1701686)).
- Der Befehl `WebDriver:GetWindowHandles` wurde korrigiert, um jetzt ungeladene Tabs korrekt zu handhaben ([Firefox Bug 1682062](https://bugzil.la/1682062)).
- Der Befehl `WebDriver:NewSession` wurde korrigiert, um immer die `proxy` Fähigkeit zurückzugeben, selbst wenn sie leer ist ([Firefox Bug 1710935](https://bugzil.la/1710935)).

#### Entfernungen

- Mit der [Entfernung der FTP-Unterstützung in Firefox 90](#removals_http) wird die `ftpProxy` Fähigkeit nicht mehr ausgewertet und führt bei Nutzung zu einem `invalid argument` Fehler ([Firefox Bug 1703805](https://bugzil.la/1703805)).

## Änderungen für Add-on-Entwickler

- Das `matrix` URI-Schema wird nun unterstützt und kann als Protokoll innerhalb des Schlüssels [`protocol_handlers`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) in einem Erweiterungs-[`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) definiert werden.
- Ab dieser Version kann die [Cache API](/de/docs/Web/API/Cache) in den Erweiterungsseiten und Worker-Globals verwendet werden. Weitere Details finden Sie unter ([Firefox Bug 1575625](https://bugzil.la/1575625)).

## Ältere Versionen

{{Firefox_for_developers}}
