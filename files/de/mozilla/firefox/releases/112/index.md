---
title: Firefox 112 für Entwickler
slug: Mozilla/Firefox/Releases/112
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 112, die Entwickler betreffen. Firefox 112 wurde am 11. April 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft [**`inert`**](/de/docs/Web/HTML/Reference/Global_attributes/inert) ist jetzt vollständig aktiviert. Sie ermöglicht es dem Browser, Inhalte oder interaktive Elemente innerhalb eines HTML-Elements mit dem `inert`-Attribut zu ignorieren. Weitere Details finden Sie im [Firefox Bug 1764263](https://bugzil.la/1764263).

### CSS

- Der `overlay` Schlüsselwortwert für die {{cssxref("overflow")}}-Eigenschaft wird nun als veraltetes Alias des Schlüsselwortwerts `auto` unterstützt ([Firefox Bug 1817189](https://bugzil.la/1817189)).
- Die `linear()` [Easing-Funktion](/de/docs/Web/CSS/easing-function) wird jetzt unterstützt.
  Diese definiert Easing-Funktionen, die linear zwischen einer Reihe von Punkten interpolieren und ist nützlich zur Annäherung komplexer Animationen ([Firefox Bug 1819447](https://bugzil.la/1819447), [Firefox Bug 1764126](https://bugzil.la/1764126)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) wird jetzt unterstützt und ermöglicht es Entwicklern, das [Autoplay](/de/docs/Web/Media/Guides/Autoplay) von Medienelementen und Audio-Kontexten basierend darauf zu konfigurieren, ob Autoplay erlaubt, verboten oder nur erlaubt ist, wenn der Ton stummgeschaltet ist. Weitere Details finden Sie im [Firefox Bug 1773551](https://bugzil.la/1773551).
- Abgerundete Rechtecke können jetzt in 2D-Canvas mittels [`CanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect), [`Path2D.roundRect()`](/de/docs/Web/API/Path2D#path2d.roundrect) und [`OffscreenCanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.roundrect) gezeichnet werden. Weitere Details finden Sie im [Firefox Bug 1756175](https://bugzil.la/1756175).
- Das veraltete und nicht-standardmäßige `CanvasRenderingContext2D.mozTextStyle` Attribut ist jetzt standardmäßig deaktiviert ([Firefox Bug 1818409](https://bugzil.la/1818409)).

#### Entfernungen

- Unterstützung für `IDBMutableFile`, `IDBFileRequest`, `IDBFileHandle` und `IDBDatabase.createMutableFile()` wurde entfernt.
  Diese Schnittstellen sind in keiner Spezifikation enthalten, waren seit Version 102 hinter einer Präferenz versteckt und wurden von den anderen großen Browser-Engines seit einigen Jahren entfernt.
  ([Firefox Bug 1500343](https://bugzil.la/1500343).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `browsingContext.print` Befehl wurde implementiert, der es Clients ermöglicht, ein gerendertes PDF-Dokument des Browsing-Kontexts als Base64-kodierten String anzufordern. Weitere Details finden Sie im [Firefox Bug 1806810](https://bugzil.la/1806810).
- Die Befehle `script.addPreloadScript` und `script.removePreloadScript` wurden implementiert und ermöglichen es Test-Clients, eine Funktionalität zu injizieren, die garantiert vor allen Inhaltsskripten verfügbar ist, die anschließend geladen werden, und vor allen späteren Skripten, die WebDriver in den Kontext injiziert. Weitere Details finden Sie im [Firefox Bug 1806420](https://bugzil.la/1806420) und [Firefox Bug 1806465](https://bugzil.la/1806465).
- `Element` und `ShadowRoot` Referenzen, die im Node-Cache gespeichert sind, können jetzt sowohl in Marionette als auch in WebDriver BiDi mit derselben eindeutigen Referenz verwendet werden. Weitere Details finden Sie im [Firefox Bug 1770733](https://bugzil.la/1770733).
- `isRedirect` wurde aus den Basisparametern der Netzwerkevents entfernt ([Firefox Bug 1819875](https://bugzil.la/1819875)).

#### Marionette

- Ein Problem wurde behoben, bei dem der Payload einer Antwort nicht innerhalb eines `value` Feldes basierend auf einem bestimmten Datentyp eingeschlossen war. ([Firefox Bug 1819029](https://bugzil.la/1819029)).
- Ein Problem wurde behoben, bei dem `WebDriver:ElementClear` ein zusätzliches `change`-Event für editierbare Inhaltselemente emittierte ([Firefox Bug 1744925](https://bugzil.la/1744925)).

## Änderungen für Add-on-Entwickler

- Die Eigenschaften `usedDelegatedCredentials`, `usedEch`, `usedOcsp` und `usedPrivateDns` wurden zu {{WebExtAPIRef("webRequest.SecurityInfo")}} hinzugefügt. Diese Eigenschaften liefern Informationen über die Sicherheit der für eine Webanfrage verwendeten Verbindung ([Firefox Bug 1804460](https://bugzil.la/1804460)).
- Die Eigenschaft `"type"` wird im [`"background"` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) unterstützt. Wenn dieser Schlüssel auf `"module"` gesetzt wird, werden die mit `"scripts"` angegebenen Hintergrundskripte als ES-Module geladen, wodurch die Notwendigkeit entfällt, zu Hintergrundseiten zu wechseln, um ES-Module zu verwenden ([Firefox Bug 1811443](https://bugzil.la/1811443)).

## Ältere Versionen

{{Firefox_for_developers}}
