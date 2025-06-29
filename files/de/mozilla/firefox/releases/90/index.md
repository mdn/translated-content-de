---
title: Firefox 90 für Entwickler
slug: Mozilla/Firefox/Releases/90
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 90, die Entwickler betreffen werden. Firefox 90 wurde am 13. Juli 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [In Schwung kommen mit Firefox 90](https://hacks.mozilla.org/2021/07/getting-lively-with-firefox-90/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwickler-Tools

- Die Antwortansicht zeigt nun eine [Vorschau für Web-Schriftarten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) ([Firefox Fehler 872078](https://bugzil.la/872078)).

### HTML

- Eine Korrektur in der Behandlung von Formularinhalten bezüglich der Normalisierung und Maskierung von Zeilenumbrüchen in multipart/formdata. Dies entspricht der aktualisierten Spezifikation und stimmt mit anderen Browser-Implementierungen überein. ([Firefox Fehler 1686765](https://bugzil.la/1686765)).
- Firefox setzt jetzt die {{Glossary("intrinsic_size", "intrinsische Größe")}} und Auflösung eines Bildes basierend auf {{Glossary("EXIF", "EXIF")}}-Informationen (wenn vorhanden und konsistent). Dies ermöglicht einem Server beispielsweise, ein Bild in niedriger Qualität als Platzhalter zu senden, um das Laden zu beschleunigen. Es ermöglicht auch eine [Reihe anderer Anwendungsfälle](https://github.com/eeeps/exif-intrinsic-sizing-explainer) ([Firefox Fehler 1680387](https://bugzil.la/1680387)).

### CSS

- `-webkit-image-set()` wurde als Alias der Standardfunktion {{cssxref("image/image-set", "image/image-set()")}} implementiert ([Firefox Fehler 1709415](https://bugzil.la/1709415)).

### JavaScript

- [Private statische und Instanzfelder und -methoden von Klassen](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) werden jetzt standardmäßig unterstützt ([Firefox Fehler 1708235](https://bugzil.la/1708235) und [Firefox Fehler 1708236](https://bugzil.la/1708236)).
- Der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator kann jetzt verwendet werden, um [zu prüfen, ob eine private Klassenmethode oder -feld definiert wurde](/de/docs/Web/JavaScript/Reference/Operators/in#using_the_in_operator_to_implement_branded_checks). Dies bietet einen kompakteren Ansatz für den Umgang mit potenziell undefinierten Features, im Gegensatz zum Einwickeln von Code in `try/catch` Blöcke ([Firefox Fehler 1648090](https://bugzil.la/1648090)).
- Benutzerdefinierte Datums-/Zeitformate, die als Optionen für den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) angegeben werden, können jetzt `dayPeriod` enthalten — einen Wert, der angibt, dass die ungefähre Tageszeit (z.B. "am Morgen", "in der Nacht", etc.) als `narrow`, `short` oder `long` Zeichenfolge eingeschlossen werden soll ([Firefox Fehler 1645115](https://bugzil.la/1645115)).
- Die relative Indizierungsmethode `at()` wurde zu den globalen Objekten [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) und [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) hinzugefügt. ([Firefox Fehler 1681371](https://bugzil.la/1681371))

### HTTP

- Die HTTP {{Glossary("Fetch_metadata_request_header", "Abruf-Metadaten-Anforderungsheader")}} (`Sec-Fetch-*`) werden jetzt unterstützt. Diese Header bieten Servern zusätzlichen Kontext über Anfragen, einschließlich ob sie ursprungsübergreifend, gleichen Ursprungs, gleiche Seite oder vom Benutzer initiiert sind, und wo/wie die angeforderten Daten verwendet werden sollen. Dies ermöglicht Servern, gegen mehrere Arten von Cross-Origin-Angriffen vorzugehen ([Firefox Fehler 1695911](https://bugzil.la/1695911)).

#### Entfernungen

- FTP wurde nun aus Firefox entfernt ([Firefox Fehler 1574475](https://bugzil.la/1574475)). Dies folgt auf die [Abschaltung in Firefox 88](/de/docs/Mozilla/Firefox/Releases/88#http). Beachten Sie, dass Web-Erweiterungen sich immer noch als [FTP-Protokoll-Handler](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) registrieren können.

### APIs

#### DOM

- Unterstützung wurde für die veralteten [`WheelEvent`](/de/docs/Web/API/WheelEvent) Eigenschaften hinzugefügt: `WheelEvent.wheelDelta`, `WheelEvent.wheelDeltaX`, und `WheelEvent.wheelDeltaY`. Dies ermöglicht es Firefox, mit einer kleinen Teilmenge von Seiten zu funktionieren, die durch jüngste Kompatibilitätsverbesserungen an `WheelEvent` beschädigt wurden ([Firefox Fehler 1708829](https://bugzil.la/1708829)).
- Das [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Interface der [Canvas API](/de/docs/Web/API/Canvas_API) bietet jetzt eine [`createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient) Methode. Diese gibt ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) ähnlich wie die existierenden [`linear`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient) und [`radial`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient) Gradienten zurück, ermöglicht jedoch einen Verlauf um einen durch Koordinaten definierten Punkt. Weitere Details finden Sie in [Firefox Fehler 1627014](https://bugzil.la/1627014).
- Unterstützung für das `matrix` Protokoll wurde hinzugefügt und kann nun als gültiges Schema in der [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) Methode übergeben werden.

### WebDriver-Konformität (Marionette)

- Marionette beschränkt sich jetzt auf eine einzige aktive WebDriver-Sitzung ([Firefox Fehler 1691047](https://bugzil.la/1691047)).
- Unterstützung für die neue Art von Benutzeraufforderungen in Firefox wurde hinzugefügt ([Firefox Fehler 1686741](https://bugzil.la/1686741)).
- Fenster-Handles verwenden jetzt eine eindeutige ID und ändern sich nicht bei Prozessaustauschen, die durch [gruppenübergreifende Navigationen](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) verursacht werden ([Firefox Fehler 1680479](https://bugzil.la/1680479)).
- Ein unangebrachtes Abbrechen des aktuellen WebDriver-Befehls wurde behoben, wenn im Hintergrundtab eine neue Benutzeraufforderung geöffnet wurde ([Firefox Fehler 1701686](https://bugzil.la/1701686)).
- Der `WebDriver:GetWindowHandles` Befehl wurde so korrigiert, dass er ungeladene Tabs korrekt behandelt ([Firefox Fehler 1682062](https://bugzil.la/1682062)).
- Der `WebDriver:NewSession` Befehl wurde so korrigiert, dass er immer die `proxy` Fähigkeit zurückgibt, auch wenn diese leer ist ([Firefox Fehler 1710935](https://bugzil.la/1710935)).

#### Entfernungen

- Mit der [Entfernung der FTP-Unterstützung in Firefox 90](#removals_http) wird die `ftpProxy` Fähigkeit nicht mehr ausgewertet und führt zu einem `invalid argument` Fehler, wenn sie verwendet wird ([Firefox Fehler 1703805](https://bugzil.la/1703805)).

## Änderungen für Add-on-Entwickler

- Das `matrix` URI-Schema wird nun unterstützt und kann innerhalb des [`protocol_handlers`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) Schlüssels in einer Erweiterung [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) definiert werden.
- Ab dieser Version kann die [Cache API](/de/docs/Web/API/Cache) in den Erweiterungsseiten und Worker Globals verwendet werden. Weitere Details finden Sie unter ([Firefox Fehler 1575625](https://bugzil.la/1575625)).

## Ältere Versionen

{{Firefox_for_developers}}
