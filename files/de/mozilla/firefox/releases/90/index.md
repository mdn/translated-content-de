---
title: Firefox 90 Versionshinweise für Entwickler
short-title: Firefox 90
slug: Mozilla/Firefox/Releases/90
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 90, die Entwickler betreffen werden. Firefox 90 wurde am 13. Juli 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Getting lively with Firefox 90](https://hacks.mozilla.org/2021/07/getting-lively-with-firefox-90/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklertools

- Die Antwortansicht zeigt jetzt eine [Vorschau für Web-Schriftarten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) ([Firefox-Bug 872078](https://bugzil.la/872078)).

### HTML

- Eine Korrektur bei der Handhabung von Formular-Payloads im Hinblick auf Zeilenumbruch-Normalisierung und Escaping im multipart/formdata-Format. Dies entspricht der aktualisierten Spezifikation und stimmt mit anderen Browser-Implementierungen überein. ([Firefox-Bug 1686765](https://bugzil.la/1686765)).
- Firefox setzt nun die {{Glossary("intrinsic_size", "intrinsische Größe")}} und Auflösung eines Bildes basierend auf {{Glossary("EXIF", "EXIF")}}-Informationen (falls vorhanden und konsistent). Dies ermöglicht es einem Server, beispielsweise ein Bild in niedriger Qualität zu senden, um das Laden zu beschleunigen. Es ermöglicht auch eine [Reihe anderer Anwendungsfälle](https://github.com/eeeps/exif-intrinsic-sizing-explainer) ([Firefox-Bug 1680387](https://bugzil.la/1680387)).

### CSS

- `-webkit-image-set()` wurde als Alias der Standardfunktion {{cssxref("image/image-set", "image/image-set()")}} implementiert ([Firefox-Bug 1709415](https://bugzil.la/1709415)).

### JavaScript

- [Private statische und Instanz-Felder und Methoden von Klassen](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) werden nun standardmäßig unterstützt ([Firefox-Bug 1708235](https://bugzil.la/1708235) und [Firefox-Bug 1708236](https://bugzil.la/1708236)).
- Der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator kann nun verwendet werden, um zu [überprüfen, ob eine private Klassenmethode oder ein Feld definiert wurde](/de/docs/Web/JavaScript/Reference/Operators/in#using_the_in_operator_to_implement_branded_checks). Dies bietet einen kompakteren Ansatz zum Umgang mit potenziell undefinierten Funktionen, im Gegensatz zum Einwickeln des Codes in `try/catch`-Blöcke ([Firefox-Bug 1648090](https://bugzil.la/1648090)).
- Benutzerdefinierte Datums-/Zeitformate, die als Optionen an den [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) übergeben werden, können nun `dayPeriod` einschließen — einen Wert, der angibt, dass die ungefähre Tageszeit (z.B. "morgens", "nachts", etc.) als `narrow`, `short` oder `long` Zeichenkette eingeschlossen werden soll ([Firefox-Bug 1645115](https://bugzil.la/1645115)).
- Die relative Indexierungsmethode `at()` wurde zu den globalen Objekten [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) und [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) hinzugefügt ([Firefox-Bug 1681371](https://bugzil.la/1681371)).

### HTTP

- Die HTTP {{Glossary("Fetch_metadata_request_header", "Fetch-Metadata-Request-Header")}} (`Sec-Fetch-*`) werden jetzt unterstützt. Diese Header bieten Servern zusätzlichen Kontext zu Anfragen, einschließlich der Information, ob sie gleichen Ursprungs, über Kreuz-Origin, gleicher Seite oder benutzerinitiierte Anfragen sind und wo/wie die angeforderten Daten verwendet werden sollen. Dies ermöglicht es Servern, sich gegen mehrere Arten von Cross-Origin-Angriffen zu schützen ([Firefox-Bug 1695911](https://bugzil.la/1695911)).

#### Entfernungen

- FTP wurde nun aus Firefox entfernt ([Firefox-Bug 1574475](https://bugzil.la/1574475)). Dies folgt auf die [Veraltung in Firefox 88](/de/docs/Mozilla/Firefox/Releases/88#http). Beachten Sie, dass Web-Erweiterungen sich immer noch als [FTP-Protokoll-Handler](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) registrieren können.

### APIs

#### DOM

- Unterstützung für die veralteten [`WheelEvent`](/de/docs/Web/API/WheelEvent)-Eigenschaften wurde hinzugefügt: `WheelEvent.wheelDelta`, `WheelEvent.wheelDeltaX` und `WheelEvent.wheelDeltaY`. Dies ermöglicht es Firefox, mit einem kleinen Unterbereich von Seiten zu arbeiten, die durch jüngste Kompatibilitätsverbesserungen von `WheelEvent` unterbrochen wurden ([Firefox-Bug 1708829](https://bugzil.la/1708829)).
- Das [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Interface der [Canvas API](/de/docs/Web/API/Canvas_API) bietet jetzt eine [`createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)-Methode. Diese liefert ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient), ähnlich wie die bestehenden [`linear`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient) und [`radial`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient) Gradienten, erlaubt jedoch, dass ein Gradient um einen durch Koordinaten definierten Punkt bewegt wird. Siehe [Firefox-Bug 1627014](https://bugzil.la/1627014) für mehr Details.
- Unterstützung für das `matrix`-Protokoll wurde hinzugefügt und kann nun als gültiges Schema in die Methode [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) übergeben werden.

### WebDriver-Konformität (Marionette)

- Marionette beschränkt sich jetzt auf eine einzige aktive WebDriver-Sitzung ([Firefox-Bug 1691047](https://bugzil.la/1691047)).
- Unterstützung für die neue Art von Benutzeraufforderungen in Firefox hinzugefügt ([Firefox-Bug 1686741](https://bugzil.la/1686741)).
- Fenster-Handles verwenden nun eine eindeutige ID und ändern sich nicht bei Prozesswechseln, die durch [Cross-Group-Navigations](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) verursacht werden ([Firefox-Bug 1680479](https://bugzil.la/1680479)).
- Ein unangemessenes Abbrechen des aktuellen WebDriver-Befehls wurde behoben, wenn eine neue Benutzeraufforderung in einem Hintergrund-Tab geöffnet wurde ([Firefox-Bug 1701686](https://bugzil.la/1701686)).
- Der Befehl `WebDriver:GetWindowHandles` wurde behoben, um nun korrekt mit nicht geladenen Tabs umzugehen ([Firefox-Bug 1682062](https://bugzil.la/1682062)).
- Der `WebDriver:NewSession`-Befehl wurde behoben, sodass er immer die `proxy`-Fähigkeit zurückgibt, auch wenn sie leer ist ([Firefox-Bug 1710935](https://bugzil.la/1710935)).

#### Entfernungen

- Mit der [Entfernung der FTP-Unterstützung in Firefox 90](#entfernungen) wird die `ftpProxy`-Fähigkeit nicht mehr ausgewertet und wirft bei Verwendung einen `invalid argument`-Fehler ([Firefox-Bug 1703805](https://bugzil.la/1703805)).

## Änderungen für Add-on-Entwickler

- Das `matrix`-URI-Schema wird jetzt unterstützt und kann als Protokoll innerhalb des [`protocol_handlers`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers)-Schlüssels in einer Erweiterungs-[`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) definiert werden.
- Ab dieser Version kann die [Cache-API](/de/docs/Web/API/Cache) in den Erweiterungsseiten und Worker-Globals verwendet werden. Für mehr Details siehe ([Firefox-Bug 1575625](https://bugzil.la/1575625)).
