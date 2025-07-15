---
title: Firefox 90 für Entwickler
short-title: Firefox 90
slug: Mozilla/Firefox/Releases/90
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 90, die Entwickler betreffen werden. Firefox 90 wurde am 13. Juli 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Getting lively with Firefox 90](https://hacks.mozilla.org/2021/07/getting-lively-with-firefox-90/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklertools

- Die Antwortansicht zeigt jetzt eine [Vorschau für Webfonts](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) an ([Firefox Fehler 872078](https://bugzil.la/872078)).

### HTML

- Eine Korrektur bezüglich der Handhabung von Formularnutzlasten im Hinblick auf die Normalisierung und das Escaping von Zeilenumbrüchen in multipart/formdata. Dies entspricht der aktualisierten Spezifikation und gleicht anderen Browser-Implementierungen an ([Firefox Fehler 1686765](https://bugzil.la/1686765)).
- Firefox setzt jetzt die {{Glossary("intrinsic_size", "intrinsische Größe")}} und Auflösung eines Bildes basierend auf den {{Glossary("EXIF", "EXIF")}}-Informationen (falls vorhanden und konsistent). Dies ermöglicht es einem Server beispielsweise, ein Bild niedriger Qualität als Platzhalter zu senden, um das Laden zu beschleunigen, und ermöglicht eine [Anzahl anderer Anwendungsfälle](https://github.com/eeeps/exif-intrinsic-sizing-explainer) ([Firefox Fehler 1680387](https://bugzil.la/1680387)).

### CSS

- `-webkit-image-set()` wurde als Alias der Standardfunktion {{cssxref("image/image-set", "image/image-set()")}} implementiert ([Firefox Fehler 1709415](https://bugzil.la/1709415)).

### JavaScript

- [Private statische Klassenfelder und Instanzfelder und -methoden](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) werden jetzt standardmäßig unterstützt ([Firefox Fehler 1708235](https://bugzil.la/1708235) und [Firefox Fehler 1708236](https://bugzil.la/1708236)).
- Der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator kann jetzt verwendet werden, um [zu überprüfen, ob eine private Klassenmethode oder ein Feld definiert wurde](/de/docs/Web/JavaScript/Reference/Operators/in#using_the_in_operator_to_implement_branded_checks). Dies bietet einen kompakteren Ansatz zum Umgang mit potenziell undefinierten Features, im Gegensatz zum Einhüllen von Code in `try/catch`-Blöcke ([Firefox Fehler 1648090](https://bugzil.la/1648090)).
- Benutzerdefinierte Datums-/Zeitformate, die als Optionen dem [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) übergeben werden, können jetzt `dayPeriod` enthalten — einen Wert, der angibt, dass die ungefähre Tageszeit (z. B. "morgens", "nachts" usw.) als `narrow`, `short` oder `long` Zeichenkette enthalten sein soll ([Firefox Fehler 1645115](https://bugzil.la/1645115)).
- Die relative Indexierungsmethode `at()` wurde zu den globalen Objekten [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) und [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) hinzugefügt ([Firefox Fehler 1681371](https://bugzil.la/1681371)).

### HTTP

- Die HTTP {{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} (`Sec-Fetch-*`) werden jetzt unterstützt. Diese Header bieten Servern zusätzlichen Kontext über Anfragen, einschließlich ob sie gleichen Ursprungs, ursprungsübergreifend, same-site oder vom Benutzer initiiert sind und wo/wie die angeforderten Daten verwendet werden sollen. Dies ermöglicht es Servern, verschiedene Arten von ursprungsübergreifenden Angriffen zu verhindern ([Firefox Fehler 1695911](https://bugzil.la/1695911)).

#### Entfernungen

- FTP wurde jetzt aus Firefox entfernt ([Firefox Fehler 1574475](https://bugzil.la/1574475)). Dies folgt auf die [Abkündigung in Firefox 88](/de/docs/Mozilla/Firefox/Releases/88#http). Beachten Sie, dass Web-Erweiterungen sich weiterhin als [FTP-Protokoll-Handler](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) registrieren können.

### APIs

#### DOM

- Unterstützung wurde für die veralteten [`WheelEvent`](/de/docs/Web/API/WheelEvent)-Eigenschaften hinzugefügt: `WheelEvent.wheelDelta`, `WheelEvent.wheelDeltaX` und `WheelEvent.wheelDeltaY`. Dies ermöglicht es Firefox, mit einer kleinen Untermenge von Seiten zu arbeiten, die durch kürzliche Kompatibilitätsverbesserungen an `WheelEvent` gebrochen wurden ([Firefox Fehler 1708829](https://bugzil.la/1708829)).
- Das [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Interface der [Canvas API](/de/docs/Web/API/Canvas_API) bietet jetzt eine [`createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)-Methode. Diese liefert ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient), ähnlich wie die existierenden [`linear`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient) und [`radial`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient) Gradienten, erlaubt jedoch ein Gradienten um einen Punkt zu bewegen, der durch Koordinaten definiert ist. Für mehr Details siehe [Firefox Fehler 1627014](https://bugzil.la/1627014).
- Unterstützung für das `matrix`-Protokoll wurde hinzugefügt und kann nun als gültiges Schema in die Methode [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) übergeben werden.

### WebDriver-Konformität (Marionette)

- Marionette ist jetzt auf eine einzige aktive WebDriver-Sitzung beschränkt ([Firefox Fehler 1691047](https://bugzil.la/1691047)).
- Unterstützung für den neuen Typ von Benutzeraufforderungen in Firefox hinzugefügt ([Firefox Fehler 1686741](https://bugzil.la/1686741)).
- Fenster-Handles nutzen jetzt eine eindeutige ID und ändern sich nicht für Prozessaustausche, wie sie durch [Navigationen zwischen Gruppen](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) verursacht werden ([Firefox Fehler 1680479](https://bugzil.la/1680479)).
- Ein unangemessener Abbruch des aktuellen WebDriver-Kommandos wurde behoben, wenn eine neue Benutzeraufforderung in einem Hintergrundtab geöffnet wurde ([Firefox Fehler 1701686](https://bugzil.la/1701686)).
- Der `WebDriver:GetWindowHandles`-Befehl wurde korrigiert, um jetzt korrekt nicht geladene Tabs zu handhaben ([Firefox Fehler 1682062](https://bugzil.la/1682062)).
- Der `WebDriver:NewSession`-Befehl wurde korrigiert, um immer die `proxy` Fähigkeit zurückzugeben, auch wenn leer ([Firefox Fehler 1710935](https://bugzil.la/1710935)).

#### Entfernungen

- Mit der [Entfernung der FTP-Unterstützung in Firefox 90](#entfernungen) wird die `ftpProxy`-Fähigkeit nicht mehr ausgewertet, und bei deren Verwendung wird ein `invalid argument` Fehler geworfen ([Firefox Fehler 1703805](https://bugzil.la/1703805)).

## Änderungen für Add-on-Entwickler

- Das `matrix`-URI-Schema wird jetzt unterstützt und kann als Protokoll innerhalb des Schlüssels [`protocol_handlers`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) in eine Erweiterung definiert werden [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).
- Ab dieser Version kann die [Cache API](/de/docs/Web/API/Cache) in den Erweiterungsseiten und Worker-Umgebungen verwendet werden. Für weitere Details siehe ([Firefox Fehler 1575625](https://bugzil.la/1575625)).
