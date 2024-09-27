---
title: Firefox 90 für Entwickler
slug: Mozilla/Firefox/Releases/90
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 90, die Entwickler betreffen. Firefox 90 wurde am 13. Juli 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Getting lively with Firefox 90](https://hacks.mozilla.org/2021/07/getting-lively-with-firefox-90/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Antwortansicht zeigt jetzt eine [Vorschau für Web-Schriftarten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) ([Firefox-Bug 872078](https://bugzil.la/872078)).

### HTML

- Eine Korrektur der Art und Weise, wie Formular-Nutzlasten im Hinblick auf die Normalisierung von Zeilenumbrüchen und Eskapierung in multipart/formdata gehandhabt werden. Dies entspricht der aktualisierten Spezifikation und stimmt mit den Implementierungen anderer Browser überein. ([Firefox-Bug 1686765](https://bugzil.la/1686765)).
- Firefox setzt jetzt die [intrinsische Größe](/de/docs/Glossary/intrinsic_size) und Auflösung eines Bildes basierend auf [EXIF](/de/docs/Glossary/EXIF)-Informationen (falls vorhanden und konsistent). Dies ermöglicht es einem Server beispielsweise, ein Bild mit niedriger Qualität als Platzhalter zu senden, um das Laden zu beschleunigen. Es ermöglicht auch eine [Reihe anderer Anwendungsfälle](https://github.com/eeeps/exif-intrinsic-sizing-explainer) ([Firefox-Bug 1680387](https://bugzil.la/1680387)).

### CSS

- `-webkit-image-set()` wurde als Alias der Standardfunktion {{cssxref("image/image-set", "image/image-set()")}} implementiert ([Firefox-Bug 1709415](https://bugzil.la/1709415)).

### JavaScript

- [Private statische und Instanzfelder sowie Methoden von Klassen](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) werden jetzt standardmäßig unterstützt ([Firefox-Bug 1708235](https://bugzil.la/1708235) und [Firefox-Bug 1708236](https://bugzil.la/1708236)).
- Der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator kann jetzt verwendet werden, um [zu prüfen, ob eine Klassen-Privatmethode oder ein -feld definiert wurde](/de/docs/Web/JavaScript/Reference/Operators/in#using_the_in_operator_to_implement_branded_checks). Dies bietet einen kompakteren Ansatz zur Handhabung potenziell undefinierter Features im Gegensatz zum Umschließen von Code in `try/catch`-Blöcken ([Firefox-Bug 1648090](https://bugzil.la/1648090)).
- Benutzerdefinierte Datums-/Zeitformate, die als Optionen für den [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) angegeben sind, können jetzt `dayPeriod` enthalten – einen Wert, der angibt, dass die ungefähre Tageszeit (z.B. "am Morgen", "in der Nacht" usw.) als `narrow`, `short` oder `long` Zeichenfolge enthalten sein soll ([Firefox-Bug 1645115](https://bugzil.la/1645115)).
- Die relative Indexierungsmethode `at()` wurde zu den globalen Objekten [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) und [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) hinzugefügt. ([Firefox-Bug 1681371](https://bugzil.la/1681371))

### HTTP

- Die HTTP [Fetch-Metadatenanforderungsheader](/de/docs/Glossary/Fetch_metadata_request_header) (`Sec-Fetch-*`) werden jetzt unterstützt. Diese Header bieten Servern zusätzlichen Kontext zu Anfragen, einschließlich Informationen darüber, ob sie gleichen Ursprungs, fremden Ursprungs, von derselben Seite oder nutzerinitiiert sind, und wo/wie die angeforderten Daten verwendet werden sollen. Dies ermöglicht es Servern, gegen mehrere Arten von Cross-Origin-Angriffen vorzugehen ([Firefox-Bug 1695911](https://bugzil.la/1695911)).

#### Entfernungen

- FTP wurde nun aus Firefox entfernt ([Firefox-Bug 1574475](https://bugzil.la/1574475)). Dies folgt der [Depreziation in Firefox 88](/de/docs/Mozilla/Firefox/Releases/88#http). Beachten Sie, dass Web-Erweiterungen sich weiterhin als [FTP-Protokoll-Handler](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) registrieren können.

### APIs

#### DOM

- Unterstützung wurde für die veralteten [`WheelEvent`](/de/docs/Web/API/WheelEvent)-Eigenschaften hinzugefügt: `WheelEvent.wheelDelta`, `WheelEvent.wheelDeltaX` und `WheelEvent.wheelDeltaY`. Dies ermöglicht es Firefox, mit einem kleinen Teil von Seiten zu arbeiten, die durch kürzliche Kompatibilitätsverbesserungen für `WheelEvent` beeinträchtigt wurden ([Firefox-Bug 1708829](https://bugzil.la/1708829)).
- Das [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Interface der [Canvas API](/de/docs/Web/API/Canvas_API) bietet jetzt die Methode [`createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient). Diese liefert ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient), ähnlich den bestehenden [`linear`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient) und [`radial`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient) Gradienten, ermöglicht jedoch einen Gradienten, sich um einen durch Koordinaten definierten Punkt zu bewegen. Weitere Details finden Sie unter [Firefox-Bug 1627014](https://bugzil.la/1627014).
- Unterstützung für das `matrix`-Protokoll wurde hinzugefügt und kann nun als gültiges Schema in der Methode [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) übergeben werden.

### WebDriver-Konformität (Marionette)

- Marionette beschränkt sich jetzt auf eine einzige aktive WebDriver-Sitzung ([Firefox-Bug 1691047](https://bugzil.la/1691047)).
- Unterstützung für den neuen Typ von Benutzereingabeaufforderungen in Firefox hinzugefügt ([Firefox-Bug 1686741](https://bugzil.la/1686741))
- Fenstergriffe verwenden jetzt eine eindeutige ID und ändern sich nicht mehr bei Prozessaustausch, wie durch [Cross-Group-Navigationen](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) verursacht ([Firefox-Bug 1680479](https://bugzil.la/1680479)).
- Ein unangemessener Abbruch des aktuellen WebDriver-Befehls wurde behoben, wenn eine neue Benutzereingabeaufforderung in einem Hintergrund-Tab geöffnet wurde ([Firefox-Bug 1701686](https://bugzil.la/1701686)).
- Der Befehl `WebDriver:GetWindowHandles` wurde behoben, um nun korrekt nicht geladene Tabs zu behandeln ([Firefox-Bug 1682062](https://bugzil.la/1682062)).
- Der Befehl `WebDriver:NewSession` wurde korrigiert, um immer die `proxy`-Fähigkeit zurückzugeben, auch wenn sie leer ist ([Firefox-Bug 1710935](https://bugzil.la/1710935)).

#### Entfernungen

- Mit der [Entfernung der FTP-Unterstützung in Firefox 90](#removals_http) wird die `ftpProxy`-Fähigkeit nicht mehr ausgewertet und führt bei Verwendung zu einem `invalid argument`-Fehler ([Firefox-Bug 1703805](https://bugzil.la/1703805)).

## Änderungen für Add-on-Entwickler

- Das `matrix`-URI-Schema wird jetzt unterstützt und kann als Protokoll innerhalb des Schlüssels [`protocol_handlers`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) in einer Erweiterung [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) definiert werden.
- Ab dieser Version kann die [Cache API](/de/docs/Web/API/Cache) in den Erweiterungsseiten und Worker-Globals verwendet werden. Weitere Details siehe ([Firefox-Bug 1575625](https://bugzil.la/1575625)).

## Ältere Versionen

{{Firefox_for_developers}}
