---
title: Firefox 111 für Entwickler
slug: Mozilla/Firefox/Releases/111
l10n:
  sourceCommit: c0e43030605b6f12bc4d550c0d5b8bf8a633eff3
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 111, die Entwickler betreffen. Firefox 111 wurde am 14. März 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize) wird jetzt standardmäßig unterstützt. Der Standardwert für das Attribut ist `none`, sodass keine Großschreibung erfolgt ([Firefox-Bug 1692007](https://bugzil.la/1692007)).
- Das globale Attribut [`translate`](/de/docs/Web/HTML/Global_attributes/translate) wird jetzt unterstützt ([Firefox-Bug 1418449](https://bugzil.la/1418449)).

### CSS

- Die CSS-Farb-Funktionen `color()`, `lab()`, `lch()`, `oklab()` und `oklch()` werden jetzt unterstützt.
  Diese Funktionen sind standardmäßig deaktiviert und können aktiviert werden, indem die Einstellung `layout.css.more_color_4.enabled` auf true gesetzt wird.
  Für weitere Informationen siehe die [CSS-Farbwert](/de/docs/Web/CSS/color_value) Dokumentation ([Firefox-Bug 1352757](https://bugzil.la/1352757) und [Firefox-Bug 1128204](https://bugzil.la/1128204)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die Werte `context-stroke` und `context-fill` werden jetzt innerhalb von `<marker>`-Elementen unterstützt.
  Für weitere Informationen zur Verwendung dieser Werte mit den Eigenschaften `fill` und `stroke`, siehe die [`<marker>`](/de/docs/Web/SVG/Element/marker) Dokumentation ([Firefox-Bug 752638](https://bugzil.la/752638)).

### HTTP

- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Headers/Authorization) wird bei Cross-Origin-Weiterleitungen entfernt.
  Siehe [Firefox-Bug 1802086](https://bugzil.la/1802086) für weitere Details.

### APIs

- Das [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) wird jetzt beim Einsatz der [File System API](/de/docs/Web/API/File_System_API) unterstützt.
  Die Daten in diesem Dateisystem sind origin-spezifisch: Für den Zugriff auf Dateien sind keine Berechtigungsabfragen erforderlich, und das Löschen von Daten für die Website/Origin löscht den Speicher.
  Auf das OPFS wird mit der Methode {{domxref("StorageManager.getDirectory()")}} zugegriffen, indem `navigator.storage.getDirectory()` in einem Worker oder dem Haupt-Thread aufgerufen wird.
  Siehe [Firefox-Bug 1785123](https://bugzil.la/1785123) für weitere Details.
- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Headers/Authorization) wird von [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anfragen, die Cross-Origin umgeleitet werden, entfernt (`fetch()`-Header können von Entwicklern mit dem Argument [`option.headers`](/de/docs/Web/API/Window/fetch#headers) hinzugefügt werden).
  Siehe [Firefox-Bug 1802086](https://bugzil.la/1802086) für weitere Details.
- Der Wert `none` des `options.imageOrientation` Parameters, der an [`createImageBitmap()`](/de/docs/Web/API/createImageBitmap) übergeben wird, wurde in [`from-image`](/de/docs/Web/API/createImageBitmap#from-image) umbenannt.
  Dies geschieht, um die Bedeutung der äquivalenten CSS-Eigenschaft [`image-orientation`](/de/docs/Web/CSS/image-orientation) besser abzustimmen. ([Firefox-Bug 1809740](https://bugzil.la/1809740)).

#### DOM

- Der {{domxref("FormData")}} Konstruktor akzeptiert jetzt einen zweiten optionalen `submitter` Parameter, um einen Sende-Button anzugeben. Wenn der Button einen Namen hat oder ein Bild-Button ist, wird er zur Formulardatenmenge beitragen. Dies macht es möglich, ein {{domxref("FormData")}} Objekt mit der gleichen Datenmenge zu erstellen wie eine standardmäßige Formulareinreichung, die durch den Button ausgelöst wird. Siehe [Firefox-Bug 1812696](https://bugzil.la/1812696) für weitere Details.

#### Media, WebRTC und Web Audio

- [`RTCInboundRtpStreamStats.trackIdentifier`](/de/docs/Web/API/RTCInboundRtpStreamStats#trackidentifier) wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, `inbound-rtp`-Statistiken mit einem bestimmten Track zu verknüpfen, wenn {{domxref("RTCPeerConnection.getStats()")}} verwendet wird.
  (Für weitere Informationen siehe [Firefox-Bug 1804676](https://bugzil.la/1804676).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Verhaltensweisen für die Handhabung von "stale elements checks" wurden basierend auf der kürzlich aktualisierten WebDriver-Klassik-Spezifikation geändert. Siehe [Firefox-Bug 1808894](https://bugzil.la/1808894) für weitere Details.

#### Marionette

- Ein Problem wurde behoben, bei dem das Zurückgeben eines ShadowRoot von `WebDriver:ExecuteScript` einen `cyclic object value` Fehler verursachte. Siehe [Firefox-Bug 1764594](https://bugzil.la/1764594) für weitere Details.

## Änderungen für Add-on-Entwickler

- `matchDiacritics` wurde zur {{WebExtAPIRef("Find.find")}} API hinzugefügt. Diese Option ermöglicht es, bei der Suche zwischen akzentuierten Buchstaben und ihren Basisbuchstaben zu unterscheiden. Zum Beispiel wird bei Einstellung auf `true` beim Suchen nach "résumé" ein Treffer für "resume" nicht gefunden [Firefox-Bug 1680606](https://bugzil.la/1680606).
- {{WebExtAPIRef("search.query")}} wurde hinzugefügt, um Such-API-Kompatibilität mit Chromium-basierten Browsern bereitzustellen [Firefox-Bug 1804357](https://bugzil.la/1804357).
- Die `disposition` Eigenschaft wurde zu {{WebExtAPIRef("search.search")}} hinzugefügt, um die Ergebnisse in einem neuen Tab oder Fenster anzuzeigen [Firefox-Bug 1811274](https://bugzil.la/1811274).

## Ältere Versionen

{{Firefox_for_developers}}
