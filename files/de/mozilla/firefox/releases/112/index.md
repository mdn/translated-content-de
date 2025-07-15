---
title: Firefox 112 für Entwickler
short-title: Firefox 112
slug: Mozilla/Firefox/Releases/112
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 112, die Entwickler betreffen. Firefox 112 wurde am 11. April 2023 veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

- Die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft [**`inert`**](/de/docs/Web/HTML/Reference/Global_attributes/inert) ist jetzt vollständig aktiviert. Sie ermöglicht es dem Browser, Inhalte oder interaktive Elemente innerhalb eines HTMLElements mit dem `inert` Attribut zu ignorieren. Weitere Details finden Sie im [Firefox-Bug 1764263](https://bugzil.la/1764263).

### CSS

- Der `overlay` Schlüsselwortwert für die {{cssxref("overflow")}} Eigenschaft wird jetzt als veraltetes Alias für den Schlüsselwortwert `auto` unterstützt ([Firefox-Bug 1817189](https://bugzil.la/1817189)).
- Die `linear()` [Easing-Funktion](/de/docs/Web/CSS/easing-function) wird jetzt unterstützt. Diese definiert Easing-Funktionen, die linear zwischen einer Reihe von Punkten interpolieren und ist nützlich zur Annäherung komplexer Animationen ([Firefox-Bug 1819447](https://bugzil.la/1819447), [Firefox-Bug 1764126](https://bugzil.la/1764126)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) wird jetzt unterstützt und ermöglicht es Entwicklern, die [Autoplay](/de/docs/Web/Media/Guides/Autoplay) von Medienelementen und Audiokontexten basierend darauf zu konfigurieren, ob Autoplay erlaubt, nicht erlaubt oder nur dann erlaubt ist, wenn der Ton stummgeschaltet ist. Weitere Details finden Sie im [Firefox-Bug 1773551](https://bugzil.la/1773551).
- Abgerundete Rechtecke können jetzt in 2D-Canvas mit [`CanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect), [`Path2D.roundRect()`](/de/docs/Web/API/Path2D#path2d.roundrect) und [`OffscreenCanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.roundrect) gezeichnet werden. Weitere Details finden Sie im [Firefox-Bug 1756175](https://bugzil.la/1756175).
- Das veraltete und nicht standardmäßige Attribut `CanvasRenderingContext2D.mozTextStyle` ist jetzt standardmäßig deaktiviert ([Firefox-Bug 1818409](https://bugzil.la/1818409)).

#### Entfernungen

- Unterstützt nicht mehr `IDBMutableFile`, `IDBFileRequest`, `IDBFileHandle` und `IDBDatabase.createMutableFile()`. Diese Schnittstellen sind in keiner Spezifikation vorhanden, wurden seit Version 102 von einer Präferenz gesteuert und vor einigen Jahren aus den anderen großen Browser-Engines entfernt. ([Firefox-Bug 1500343](https://bugzil.la/1500343)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implementiert den `browsingContext.print` Befehl, der es Clients ermöglicht, ein gerendertes PDF-Dokument des Browsing-Kontexts anzufordern, das als Base64-kodierter String dargestellt wird. Weitere Details finden Sie im [Firefox-Bug 1806810](https://bugzil.la/1806810).
- Implementiert die Befehle `script.addPreloadScript` und `script.removePreloadScript`, die es Test-Clients ermöglichen, eine Funktionalität einzufügen, die garantiert für alle anschließend geladenen Contentscripts verfügbar ist, und zwar vor allen späteren Skripten, die WebDriver in den Kontext einfügt. Weitere Details finden Sie im [Firefox-Bug 1806420](https://bugzil.la/1806420) und [Firefox-Bug 1806465](https://bugzil.la/1806465).
- `Element` und `ShadowRoot` Referenzen, wie sie im Node-Cache gespeichert sind, können jetzt sowohl in Marionette als auch in WebDriver BiDi mit ihrem exakt gleichen eindeutigen Referenz verwendet werden. Weitere Details finden Sie im [Firefox-Bug 1770733](https://bugzil.la/1770733).
- Entfernt `isRedirect` aus den Basisparametern von Netzwerkevents ([Firefox-Bug 1819875](https://bugzil.la/1819875)).

#### Marionette

- Ein Problem wurde behoben, bei dem die Nutzlast einer Antwort nicht in einem `value` Feld basierend auf einem bestimmten Datentyp eingeschlossen war. ([Firefox-Bug 1819029](https://bugzil.la/1819029)).
- Ein Problem wurde behoben, bei dem `WebDriver:ElementClear` ein zusätzliches `change` Event für Inhaltelemente mit Bearbeitungsfunktion ausgelöst hat ([Firefox-Bug 1744925](https://bugzil.la/1744925)).

## Änderungen für Add-on-Entwickler

- Die Eigenschaften `usedDelegatedCredentials`, `usedEch`, `usedOcsp` und `usedPrivateDns` wurden zu {{WebExtAPIRef("webRequest.SecurityInfo")}} hinzugefügt. Diese Eigenschaften liefern Informationen über die Sicherheit der Verbindung, die für eine Webanfrage verwendet wird ([Firefox-Bug 1804460](https://bugzil.la/1804460)).
- Die Eigenschaft `"type"` wird im [`"background"` manifest key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) unterstützt. Durch das Setzen dieses Schlüssels auf `"module"` werden im `"scripts"` angegebene Hintergrundskripte als ES-Module geladen, wodurch die Notwendigkeit entfällt, auf Hintergrundseiten umzuschalten, um ES-Module zu verwenden ([Firefox-Bug 1811443](https://bugzil.la/1811443)).
