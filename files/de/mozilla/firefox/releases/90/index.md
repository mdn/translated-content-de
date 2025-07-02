---
title: Firefox 90 für Entwickler
slug: Mozilla/Firefox/Releases/90
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 90, die Entwickler betreffen. Firefox 90 wurde am 13. Juli 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Getting lively with Firefox 90](https://hacks.mozilla.org/2021/07/getting-lively-with-firefox-90/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklungswerkzeuge

- Die Antwortansicht zeigt nun eine [Vorschau für Web-Schriften](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) ([Firefox-Bug 872078](https://bugzil.la/872078)).

### HTML

- Eine Korrektur zur Handhabung von Formular-Datensätzen bezüglich der Normalisierung und Maskierung von Zeilenumbrüchen in multipart/formdata. Dies erfüllt die aktualisierte Spezifikation und entspricht anderen Browser-Implementierungen. ([Firefox-Bug 1686765](https://bugzil.la/1686765)).
- Firefox setzt jetzt die {{Glossary("intrinsic_size", "intrinsische Größe")}} und Auflösung eines Bildes basierend auf {{Glossary("EXIF", "EXIF")}}-Informationen (falls vorhanden und konsistent). Dies erlaubt einem Server beispielsweise das Senden eines Platzhalterbildes von niedriger Qualität, um das Laden zu beschleunigen. Es ermöglicht auch [mehrere andere Anwendungsfälle](https://github.com/eeeps/exif-intrinsic-sizing-explainer) ([Firefox-Bug 1680387](https://bugzil.la/1680387)).

### CSS

- `-webkit-image-set()` wurde als Alias der standardmäßigen {{cssxref("image/image-set", "image/image-set()")}}-Funktion implementiert ([Firefox-Bug 1709415](https://bugzil.la/1709415)).

### JavaScript

- [Private statische und Instanzfelder und -methoden von Klassen](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) werden jetzt standardmäßig unterstützt ([Firefox-Bug 1708235](https://bugzil.la/1708235) und [Firefox-Bug 1708236](https://bugzil.la/1708236)).
- Der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator kann jetzt verwendet werden, um [zu überprüfen, ob eine private Klassenmethode oder ein Feld definiert wurde](/de/docs/Web/JavaScript/Reference/Operators/in#using_the_in_operator_to_implement_branded_checks). Dies bietet einen kompakteren Ansatz zur Behandlung potenziell undefinierter Features als das Einbetten von Code in `try/catch`-Blöcke ([Firefox-Bug 1648090](https://bugzil.la/1648090)).
- Benutzerdefinierte Datums-/Uhrzeitformate, die als Optionen an den [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) übergeben werden, können jetzt `dayPeriod` enthalten — einen Wert, der angibt, dass die ungefähre Tageszeit (z. B. "morgens", "nachts" usw.) als `narrow`, `short` oder `long`-Zeichenkette enthalten sein sollte ([Firefox-Bug 1645115](https://bugzil.la/1645115)).
- Die relative Indizierungsmethode `at()` wurde zu den globalen Objekten [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) und [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) hinzugefügt. ([Firefox-Bug 1681371](https://bugzil.la/1681371))

### HTTP

- Die HTTP-{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} (`Sec-Fetch-*`) werden jetzt unterstützt. Diese Header bieten Servern zusätzlichen Kontext zu Anfragen, einschließlich, ob sie gleiche Herkunft, fremde Herkunft, gleiche Seite oder benutzerinitiiert sind und wo/wie die angeforderten Daten verwendet werden sollen. Dies ermöglicht es Servern, verschiedene Arten von Cross-Origin-Angriffen zu mitigieren ([Firefox-Bug 1695911](https://bugzil.la/1695911)).

#### Entfernen

- FTP wurde jetzt aus Firefox entfernt ([Firefox-Bug 1574475](https://bugzil.la/1574475)). Dies folgt auf die [Veraltung in Firefox 88](/de/docs/Mozilla/Firefox/Releases/88#http). Beachten Sie, dass Web-Erweiterungen sich weiterhin als [FTP-Protokoll-Handler](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) registrieren können.

### APIs

#### DOM

- Unterstützung für die veralteten [`WheelEvent`](/de/docs/Web/API/WheelEvent)-Eigenschaften: `WheelEvent.wheelDelta`, `WheelEvent.wheelDeltaX` und `WheelEvent.wheelDeltaY` wurde hinzugefügt. Dadurch kann Firefox mit einem kleinen Teil von Seiten funktionieren, die durch jüngste Kompatibilitätsverbesserungen an `WheelEvent` beeinträchtigt wurden ([Firefox-Bug 1708829](https://bugzil.la/1708829)).
- Das [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Interface der [Canvas API](/de/docs/Web/API/Canvas_API) bietet jetzt eine [`createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)-Methode. Diese gibt ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) ähnlich den vorhandenen [`linear`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient) und [`radial`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient) Gradient zurück, ermöglicht aber, dass ein Farbverlauf um einen definierten Punkt durch Koordinaten wandert. Weitere Details finden Sie unter [Firefox-Bug 1627014](https://bugzil.la/1627014).
- Unterstützung für das `matrix`-Protokoll wurde hinzugefügt und kann jetzt als gültiges Schema an die Methode [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) übergeben werden.

### WebDriver-Konformität (Marionette)

- Marionette beschränkt sich jetzt auf eine einzige aktive WebDriver-Sitzung ([Firefox-Bug 1691047](https://bugzil.la/1691047)).
- Unterstützung für die neue Art von Benutzeraufforderungen in Firefox wurde hinzugefügt ([Firefox-Bug 1686741](https://bugzil.la/1686741)).
- Fenster-Handles verwenden jetzt eine eindeutige ID und ändern sich nicht mehr bei Prozessaustauschen, wie sie durch [Cross-Group-Navigationen](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) verursacht werden ([Firefox-Bug 1680479](https://bugzil.la/1680479)).
- Ein unangemessener Abbruch des aktuellen WebDriver-Kommandos wurde behoben, wenn eine neue Benutzeraufforderung in einem Hintergrund-Tab geöffnet wurde ([Firefox-Bug 1701686](https://bugzil.la/1701686)).
- Das `WebDriver:GetWindowHandles`-Kommando wurde so korrigiert, dass es jetzt korrekt mit ungeladenen Tabs umgeht ([Firefox-Bug 1682062](https://bugzil.la/1682062)).
- Das `WebDriver:NewSession`-Kommando wurde so korrigiert, dass es immer die `proxy`-Fähigkeit zurückgibt, auch wenn sie leer ist ([Firefox-Bug 1710935](https://bugzil.la/1710935)).

#### Entfernen

- Mit der [Entfernung des FTP-Supports in Firefox 90](#removals_http) wird die `ftpProxy`-Fähigkeit nicht mehr ausgewertet, und bei Verwendung wird ein `invalid argument`-Fehler geworfen ([Firefox-Bug 1703805](https://bugzil.la/1703805)).

## Änderungen für Add-on-Entwickler

- Das `matrix` URI-Schema wird jetzt unterstützt und kann innerhalb des Schlüssels [`protocol_handlers`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) in einer Erweiterung als Protokoll definiert werden. [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- Ab dieser Version kann die [Cache API](/de/docs/Web/API/Cache) in den Erweiterungsseiten und Worker-Globals verwendet werden. Weitere Details finden Sie unter ([Firefox-Bug 1575625](https://bugzil.la/1575625)).

## Ältere Versionen

{{Firefox_for_developers}}
