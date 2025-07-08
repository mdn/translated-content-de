---
title: Firefox 90 für Entwickler
slug: Mozilla/Firefox/Releases/90
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 90, die Entwickler betreffen. Firefox 90 wurde am 13. Juli 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Getting lively with Firefox 90](https://hacks.mozilla.org/2021/07/getting-lively-with-firefox-90/) auf Mozilla Hacks.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

- Die Antwortansicht zeigt nun eine [Vorschau für Web-Schriftarten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) ([Firefox Bug 872078](https://bugzil.la/872078)).

### HTML

- Eine Korrektur der Art und Weise, wie Formulardaten in Bezug auf Zeilenumbruch-Normalisierung und Escape-Sequenzen in multipart/formdata gehandhabt werden. Dies entspricht der aktualisierten Spezifikation und gleicht anderen Browserimplementierungen. ([Firefox Bug 1686765](https://bugzil.la/1686765)).
- Firefox setzt nun die {{Glossary("intrinsic_size", "intrinsische Größe")}} und Auflösung eines Bildes basierend auf {{Glossary("EXIF", "EXIF")}}-Informationen (falls vorhanden und konsistent) ein. Dies ermöglicht einem Server beispielsweise, ein qualitativ minderwertiges Platzhalterbild zu senden, um das Laden zu beschleunigen. Außerdem werden dadurch [eine Anzahl anderer Anwendungsfälle](https://github.com/eeeps/exif-intrinsic-sizing-explainer) ermöglicht ([Firefox Bug 1680387](https://bugzil.la/1680387)).

### CSS

- `-webkit-image-set()` wurde als Alias der standardmäßigen {{cssxref("image/image-set", "image/image-set()")}}-Funktion implementiert ([Firefox Bug 1709415](https://bugzil.la/1709415)).

### JavaScript

- [Private statische Klassenfelder und Instanzfelder sowie Methoden](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) werden nun standardmäßig unterstützt ([Firefox Bug 1708235](https://bugzil.la/1708235) und [Firefox Bug 1708236](https://bugzil.la/1708236)).
- Der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator kann nun verwendet werden, um [zu überprüfen, ob eine private Klassenmethode oder ein Feld definiert wurde](/de/docs/Web/JavaScript/Reference/Operators/in#using_the_in_operator_to_implement_branded_checks). Dies bietet einen kompakteren Ansatz zur Handhabung potenziell undefinierter Funktionen, im Gegensatz zu Code, der in `try/catch`-Blöcke verpackt wird ([Firefox Bug 1648090](https://bugzil.la/1648090)).
- Benutzerdefinierte Datums-/Zeitformate, die als Optionen zum [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) angegeben werden, können nun `dayPeriod` enthalten — ein Wert, der anzeigt, dass die ungefähre Tageszeit (z.B. "am Morgen", "in der Nacht", etc.) als `narrow`, `short` oder `long` Zeichenkette einbezogen werden sollte ([Firefox Bug 1645115](https://bugzil.la/1645115)).
- Die relative Indexierungsmethode `at()` wurde zu den globalen Objekten [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) und [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) hinzugefügt ([Firefox Bug 1681371](https://bugzil.la/1681371)).

### HTTP

- Die HTTP {{Glossary("Fetch_metadata_request_header", "Fetch-Metadatenanforderungsheader")}} (`Sec-Fetch-*`) werden nun unterstützt. Diese Header bieten Servern zusätzlichen Kontext zu Anfragen, einschließlich ob sie same-origin, cross-origin, same-site oder benutzerinitiiert sind und wo/wie die angeforderten Daten verwendet werden sollen. Dies erlaubt Servern, sich gegen mehrere Arten von Cross-Origin-Angriffen zu schützen ([Firefox Bug 1695911](https://bugzil.la/1695911)).

#### Entfernungen

- FTP wurde nun aus Firefox entfernt ([Firefox Bug 1574475](https://bugzil.la/1574475)). Dies folgt der [Verwarnung in Firefox 88](/de/docs/Mozilla/Firefox/Releases/88#http). Beachten Sie, dass Web-Erweiterungen sich weiterhin als [FTP-Protokoll-Handler](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) registrieren können.

### APIs

#### DOM

- Unterstützung wurde für die veralteten [`WheelEvent`](/de/docs/Web/API/WheelEvent)-Eigenschaften hinzugefügt: `WheelEvent.wheelDelta`, `WheelEvent.wheelDeltaX` und `WheelEvent.wheelDeltaY`. Dies ermöglicht es Firefox, mit einem kleinen Teil von Seiten zu funktionieren, die durch jüngste Kompatibilitätsverbesserungen von `WheelEvent` beeinträchtigt wurden ([Firefox Bug 1708829](https://bugzil.la/1708829)).
- Das [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Interface der [Canvas API](/de/docs/Web/API/Canvas_API) bietet nun eine [`createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)-Methode. Diese gibt ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) zurück, ähnlich wie die bestehenden [`linear`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient) und [`radial`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient) Gradients, erlaubt jedoch ein Gradient um einen durch Koordinaten definierten Punkt zu bewegen. Details siehe [Firefox Bug 1627014](https://bugzil.la/1627014).
- Unterstützung für das `matrix`-Protokoll wurde hinzugefügt und kann nun in die [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler)-Methode als gültiges Schema übergeben werden.

### WebDriver Konformität (Marionette)

- Marionette beschränkt sich jetzt auf eine einzige aktive WebDriver-Sitzung ([Firefox Bug 1691047](https://bugzil.la/1691047)).
- Unterstützung für die neue Art von Benutzeraufforderungen in Firefox hinzugefügt ([Firefox Bug 1686741](https://bugzil.la/1686741)).
- Fenster-Handles verwenden jetzt eine eindeutige ID und ändern sich nicht bei Prozesswechseln, wie sie durch [cross-group navigation](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) verursacht werden ([Firefox Bug 1680479](https://bugzil.la/1680479)).
- Ein unangemessener Abbruch des aktuellen WebDriver-Befehls wurde behoben, wenn eine neue Benutzeraufforderung in einem Hintergrund-Tab geöffnet wurde ([Firefox Bug 1701686](https://bugzil.la/1701686)).
- Der Befehl `WebDriver:GetWindowHandles` wurde korrigiert, um nun korrekt ungeladene Tabs zu behandeln ([Firefox Bug 1682062](https://bugzil.la/1682062)).
- Der Befehl `WebDriver:NewSession` wurde korrigiert, um immer die `proxy`-Fähigkeit zurückzugeben, selbst wenn leer ([Firefox Bug 1710935](https://bugzil.la/1710935)).

#### Entfernungen

- Mit der [Entfernung der FTP-Unterstützung in Firefox 90](#entfernungen) wird die Fähigkeit `ftpProxy` nicht mehr ausgewertet und führt bei Verwendung zu einem `invalid argument`-Fehler ([Firefox Bug 1703805](https://bugzil.la/1703805)).

## Änderungen für Add-on-Entwickler

- Das `matrix`-URI-Schema wird nun unterstützt und kann als Protokoll innerhalb des [`protocol_handlers`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers)-Schlüssels in einer Erweiterung [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) definiert werden.
- Ab dieser Version kann die [Cache API](/de/docs/Web/API/Cache) auf den Erweiterungsseiten und in Worker-Globals verwendet werden. Weitere Details siehe ([Firefox Bug 1575625](https://bugzil.la/1575625)).

## Ältere Versionen

{{Firefox_for_developers}}
