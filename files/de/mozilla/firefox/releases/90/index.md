---
title: Firefox 90 für Entwickler
slug: Mozilla/Firefox/Releases/90
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 90, die Entwickler betreffen. Firefox 90 wurde am 13. Juli 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Getting lively with Firefox 90](https://hacks.mozilla.org/2021/07/getting-lively-with-firefox-90/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklertools

- Die Antwortansicht zeigt nun eine [Vorschau für Web-Schriftarten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) ([Firefox Bug 872078](https://bugzil.la/872078)).

### HTML

- Eine Korrektur der Handhabung von Formular-Nutzlasten bei der Normalisierung und Umgehung von Zeilenumbrüchen in multipart/formdata. Dies entspricht der aktualisierten Spezifikation und stimmt mit anderen Browserimplementierungen überein. ([Firefox Bug 1686765](https://bugzil.la/1686765)).
- Firefox setzt nun die {{Glossary("intrinsic size")}} und Auflösung eines Bildes basierend auf {{Glossary("EXIF")}}-Informationen (falls vorhanden und konsistent). Dies ermöglicht es einem Server beispielsweise, ein platzsparendes Bild niedriger Qualität zu senden, um das Laden zu beschleunigen. Es ermöglicht auch eine [Reihe anderer Anwendungsfälle](https://github.com/eeeps/exif-intrinsic-sizing-explainer) ([Firefox Bug 1680387](https://bugzil.la/1680387)).

### CSS

- `-webkit-image-set()` wurde als Alias der standardmäßigen {{cssxref("image/image-set", "image/image-set()")}} Funktion implementiert ([Firefox Bug 1709415](https://bugzil.la/1709415)).

### JavaScript

- [Private Klassen- und Instanzfelder und -methoden](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) werden jetzt standardmäßig unterstützt ([Firefox Bug 1708235](https://bugzil.la/1708235) und [Firefox Bug 1708236](https://bugzil.la/1708236)).
- Der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator kann jetzt verwendet werden, um zu [überprüfen, ob eine private Klassenmethode oder ein Feld definiert wurde](/de/docs/Web/JavaScript/Reference/Operators/in#using_the_in_operator_to_implement_branded_checks). Dies bietet einen kompakteren Ansatz für die Handhabung potenziell undefinierter Funktionen, im Gegensatz zum Einhüllen von Code in `try/catch` Blöcke ([Firefox Bug 1648090](https://bugzil.la/1648090)).
- Benutzerdefinierte Datums-/Uhrzeitformate, die als Optionen an den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) übergeben werden, können jetzt `dayPeriod` enthalten — ein Wert, der angibt, dass die ungefähre Tageszeit (z. B. "morgens", "nachts" usw.) als `narrow`, `short` oder `long` String enthalten sein soll ([Firefox Bug 1645115](https://bugzil.la/1645115)).
- Die relative Indizierungsmethode `at()` wurde zu den globalen Objekten [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) und [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) hinzugefügt ([Firefox Bug 1681371](https://bugzil.la/1681371)).

### HTTP

- Der HTTP {{Glossary("Fetch metadata request header", "fetch metadata request headers")}} (`Sec-Fetch-*`) wird jetzt unterstützt. Diese Header bieten Servern zusätzlichen Kontext über Anfragen, einschließlich, ob sie gleiche Herkunft, andere Herkunft, gleiche Seite oder benutzerinitiierte Anfragen sind und wo/wie die angeforderten Daten verwendet werden sollen. Dies ermöglicht es Servern, gegen verschiedene Arten von Cross-Origin-Angriffen zu schützen ([Firefox Bug 1695911](https://bugzil.la/1695911)).

#### Entfernungen

- FTP wurde nun aus Firefox entfernt ([Firefox Bug 1574475](https://bugzil.la/1574475)). Dies folgt auf die [Deklaration der Abkündigung in Firefox 88](/de/docs/Mozilla/Firefox/Releases/88#http). Beachten Sie, dass Web-Erweiterungen sich immer noch als [FTP-Protokoll-Handler](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) registrieren können.

### APIs

#### DOM

- Unterstützung wurde für die veralteten {{DOMxref("WheelEvent")}} Eigenschaften hinzugefügt: `WheelEvent.wheelDelta`, `WheelEvent.wheelDeltaX` und `WheelEvent.wheelDeltaY`. Dies ermöglicht es Firefox, mit einem kleinen Unterset von Seiten zu arbeiten, die durch kürzliche Kompatibilitätsverbesserungen an `WheelEvent` beschädigt wurden ([Firefox Bug 1708829](https://bugzil.la/1708829)).
- Die {{domxref("CanvasRenderingContext2D")}} Schnittstelle der [Canvas API](/de/docs/Web/API/Canvas_API) bietet jetzt eine {{domxref('CanvasRenderingContext2D.createConicGradient()','createConicGradient()')}} Methode. Dies gibt einen {{domxref('CanvasGradient')}} ähnlich wie die bestehende {{domxref('CanvasRenderingContext2D.createLinearGradient()','linear')}} und {{domxref('CanvasRenderingContext2D.createRadialGradient()','radial')}} Gradienten zurück, erlaubt aber, dass sich ein Gradient um einen durch Koordinaten definierten Punkt bewegt. Weitere Details finden Sie im [Firefox Bug 1627014](https://bugzil.la/1627014).
- Unterstützung für das `matrix` Protokoll wurde hinzugefügt und kann nun als gültiges Schema in die Methode {{domxref('Navigator.registerProtocolHandler()')}} eingegeben werden.

### WebDriver-Konformität (Marionette)

- Marionette beschränkt sich jetzt auf eine einzelne aktive WebDriver-Sitzung ([Firefox Bug 1691047](https://bugzil.la/1691047)).
- Unterstützung für den neuen Typ von Benutzeraufforderungen in Firefox hinzugefügt ([Firefox Bug 1686741](https://bugzil.la/1686741)).
- Fenstergriffe verwenden jetzt eine eindeutige ID und ändern sich nicht bei Prozesswechseln, die durch [cross-group Navigations](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) verursacht werden ([Firefox Bug 1680479](https://bugzil.la/1680479)).
- Ein unangemessener Abbruch des aktuellen WebDriver-Befehls wurde behoben, als eine neue Benutzeraufforderung in einem Hintergrund-Tab geöffnet wurde ([Firefox Bug 1701686](https://bugzil.la/1701686)).
- Der `WebDriver:GetWindowHandles` Befehl wurde korrigiert, um entladene Tabs nun korrekt zu handhaben ([Firefox Bug 1682062](https://bugzil.la/1682062)).
- Der `WebDriver:NewSession` Befehl wurde korrigiert, um immer die `proxy` Fähigkeit zurückzugeben, auch wenn sie leer ist ([Firefox Bug 1710935](https://bugzil.la/1710935)).

#### Entfernungen

- Mit der [Entfernung der FTP-Unterstützung in Firefox 90](#removals_http) wird die `ftpProxy` Fähigkeit nicht mehr ausgewertet und der Gebrauch wird einen `invalid argument` Fehler auslösen ([Firefox Bug 1703805](https://bugzil.la/1703805)).

## Änderungen für Add-on-Entwickler

- Das `matrix` URI-Schema wird nun unterstützt und kann als Protokoll innerhalb des [`protocol_handlers`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) Schlüssels in einem Erweiterungs [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) definiert werden.
- Ab dieser Version kann die [Cache API](/de/docs/Web/API/Cache) in den Erweiterungsseiten und Worker-Globals verwendet werden. Für weitere Details siehe ([Firefox Bug 1575625](https://bugzil.la/1575625)).

## Ältere Versionen

{{Firefox_for_developers}}
