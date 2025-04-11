---
title: Firefox 112 für Entwickler
slug: Mozilla/Firefox/Releases/112
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 112, die Entwickler beeinflussen. Firefox 112 wurde am 11. April 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft [**`inert`**](/de/docs/Web/HTML/Reference/Global_attributes/inert) ist nun vollständig aktiviert. Sie ermöglicht es dem Browser, Inhalte oder interaktive Elemente zu ignorieren, die sich innerhalb eines HTML-Elements mit dem `inert` Attribut befinden. Weitere Details finden Sie unter [Firefox Bug 1764263](https://bugzil.la/1764263).

### CSS

- Der `overlay` Schlüsselwortwert für die {{cssxref("overflow")}} Eigenschaft wird jetzt als ein Legacy-Alias des Schlüsselwortwertes `auto` unterstützt ([Firefox Bug 1817189](https://bugzil.la/1817189)).
- Die `linear()` [Easing-Funktion](/de/docs/Web/CSS/easing-function) wird jetzt unterstützt. Diese definiert Easing-Funktionen, die linear zwischen einer Reihe von Punkten interpolieren, und ist nützlich für die Annäherung komplexer Animationen ([Firefox Bug 1819447](https://bugzil.la/1819447), [Firefox Bug 1764126](https://bugzil.la/1764126)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) wird jetzt unterstützt, was es Entwicklern ermöglicht, die [Autoplay](/de/docs/Web/Media/Guides/Autoplay) von Media-Elementen und Audiokontexten zu konfigurieren, basierend darauf, ob Autoplay erlaubt, nicht erlaubt oder nur erlaubt ist, wenn der Ton stummgeschaltet ist. Weitere Details finden Sie unter [Firefox Bug 1773551](https://bugzil.la/1773551).
- Abgerundete Rechtecke können nun in 2D-Canvas mit [`CanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect), [`Path2D.roundRect()`](/de/docs/Web/API/Path2D#path2d.roundrect) und [`OffscreenCanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.roundrect) gezeichnet werden. Weitere Details finden Sie unter [Firefox Bug 1756175](https://bugzil.la/1756175).
- Das veraltete und nicht standardmäßige `CanvasRenderingContext2D.mozTextStyle` Attribut ist jetzt standardmäßig deaktiviert ([Firefox Bug 1818409](https://bugzil.la/1818409)).

#### Entfernungen

- Die Unterstützung für `IDBMutableFile`, `IDBFileRequest`, `IDBFileHandle` und `IDBDatabase.createMutableFile()` wurde entfernt. Diese Schnittstellen sind in keiner Spezifikation enthalten, seit Version 102 hinter einer Präferenz verborgen und wurden bereits vor einigen Jahren aus den anderen Haupt-Browser-Engines entfernt. ([Firefox Bug 1500343](https://bugzil.la/1500343).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `browsingContext.print` Befehl wurde implementiert und ermöglicht es Clients, ein gerendertes PDF-Dokument des Browsing-Kontexts anzufordern, das als Base64-kodierter String dargestellt wird. Weitere Details finden Sie unter [Firefox Bug 1806810](https://bugzil.la/1806810).
- Implementierte `script.addPreloadScript` und `script.removePreloadScript` Befehle, die es Test-Clients ermöglichen, eine Funktionalität zu injizieren, die für alle nachfolgend geladenen Content-Skripte verfügbar ist und vor skripten, die WebDriver später in den Kontext injiziert. Weitere Details finden Sie unter [Firefox Bug 1806420](https://bugzil.la/1806420) und [Firefox Bug 1806465](https://bugzil.la/1806465).
- `Element` und `ShadowRoot` Referenzen, die im Node-Cache gespeichert sind, können jetzt sowohl in Marionette als auch in WebDriver BiDi durch ihre eindeutige Referenz verwendet werden. Weitere Details finden Sie unter [Firefox Bug 1770733](https://bugzil.la/1770733).
- `isRedirect` wurde aus den Netzwerkereignis-Basisparametern entfernt ([Firefox Bug 1819875](https://bugzil.la/1819875)).

#### Marionette

- Ein Problem wurde behoben, bei dem die Nutzlast einer Antwort nicht innerhalb eines `value` Feldes basierend auf bestimmten Datentypen eingeschlossen war. ([Firefox Bug 1819029](https://bugzil.la/1819029)).
- Ein Problem wurde behoben, bei dem `WebDriver:ElementClear` ein zusätzliches `change` Ereignis für inhaltlich bearbeitbare Elemente auslöste ([Firefox Bug 1744925](https://bugzil.la/1744925)).

## Änderungen für Add-On-Entwickler

- Die Eigenschaften `usedDelegatedCredentials`, `usedEch`, `usedOcsp` und `usedPrivateDns` wurden zu {{WebExtAPIRef("webRequest.SecurityInfo")}} hinzugefügt. Diese Eigenschaften liefern Informationen über die Sicherheit der Verbindung, die für eine Web-Anfrage verwendet wird ([Firefox Bug 1804460](https://bugzil.la/1804460)).
- Die Eigenschaft `"type"` wird im [`"background"` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) unterstützt. Durch das Setzen dieses Schlüssels auf `"module"` werden im Hintergrundskript angegebenen Skripte als ES-Module geladen, was vermieden wird, wenn auf Hintergrundseiten gewechselt werden muss, um ES-Module zu verwenden ([Firefox Bug 1811443](https://bugzil.la/1811443)).

## Ältere Versionen

{{Firefox_for_developers}}
