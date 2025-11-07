---
title: Firefox 112 Versionshinweise für Entwickler
short-title: Firefox 112
slug: Mozilla/Firefox/Releases/112
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 112, die Entwickler betreffen. Firefox 112 wurde am 11. April 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft [**`inert`**](/de/docs/Web/HTML/Reference/Global_attributes/inert) ist jetzt vollständig aktiviert. Sie ermöglicht es dem Browser, Inhalte oder interaktive Elemente zu ignorieren, die sich innerhalb eines `HTMLElement` mit dem `inert` Attribut befinden. Weitere Details finden Sie im [Firefox Bug 1764263](https://bugzil.la/1764263).

### CSS

- Der `overlay` Schlüsselwortwert für die {{cssxref("overflow")}} Eigenschaft wird jetzt als veralteter Alias des Schlüsselwortwerts `auto` unterstützt ([Firefox Bug 1817189](https://bugzil.la/1817189)).
- Die `linear()` [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) wird nun unterstützt.
  Diese definiert Easing-Funktionen, die linear zwischen einer Reihe von Punkten interpolieren und nützlich sind, um komplexe Animationen zu approximieren ([Firefox Bug 1819447](https://bugzil.la/1819447), [Firefox Bug 1764126](https://bugzil.la/1764126)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) wird jetzt unterstützt, was Entwicklern ermöglicht, die [Autoplay](/de/docs/Web/Media/Guides/Autoplay) von Media-Elementen und Audio-Kontexten basierend darauf zu konfigurieren, ob Autoplay erlaubt, nicht erlaubt oder nur erlaubt ist, wenn der Ton stummgeschaltet ist. Weitere Details finden Sie im [Firefox Bug 1773551](https://bugzil.la/1773551).
- Abgerundete Rechtecke können nun in 2D-Leinwänden mit [`CanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect), [`Path2D.roundRect()`](/de/docs/Web/API/Path2D#path2d.roundrect) und [`OffscreenCanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.roundrect) gezeichnet werden. Weitere Details finden Sie im [Firefox Bug 1756175](https://bugzil.la/1756175).
- Das veraltete und nicht standardkonforme `CanvasRenderingContext2D.mozTextStyle` Attribut ist jetzt standardmäßig deaktiviert ([Firefox Bug 1818409](https://bugzil.la/1818409)).

#### Entfernungen

- Entfernt die Unterstützung für `IDBMutableFile`, `IDBFileRequest`, `IDBFileHandle` und `IDBDatabase.createMutableFile()`.
  Diese Schnittstellen sind in keiner Spezifikation vorhanden, waren seit Version 102 hinter einer Präferenz verborgen und wurden bereits vor einigen Jahren aus den anderen Hauptbrowser-Engines entfernt. ([Firefox Bug 1500343](https://bugzil.la/1500343).)

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `browsingContext.print` Befehl wurde implementiert, der es Clients ermöglicht, ein gerendertes PDF-Dokument des Browsing-Kontexts anzufordern, repräsentiert als Base64-codierter String. Weitere Details finden Sie im [Firefox Bug 1806810](https://bugzil.la/1806810).
- Die Befehle `script.addPreloadScript` und `script.removePreloadScript` wurden implementiert, die es Test-Clients ermöglichen, eine Funktionalität zu injizieren, die garantiert für alle nachfolgend geladenen Inhalts-Skripte verfügbar ist, und vor allen späteren Skripten, die WebDriver in den Kontext injiziert. Weitere Details finden Sie im [Firefox Bug 1806420](https://bugzil.la/1806420) und [Firefox Bug 1806465](https://bugzil.la/1806465).
- `Element` und `ShadowRoot` Referenzen, wie sie im Node-Cache gespeichert sind, können nun sowohl in Marionette als auch in WebDriver BiDi mit demselben einzigartigen Verweis verwendet werden. Weitere Details finden Sie im [Firefox Bug 1770733](https://bugzil.la/1770733).
- `isRedirect` wurde aus den Basiskomponenten der Netzwerkevents entfernt ([Firefox Bug 1819875](https://bugzil.la/1819875)).

#### Marionette

- Ein Problem wurde behoben, bei dem die Nutzlast einer Antwort nicht innerhalb eines `value` Feldes basierend auf bestimmten Datentypen umschlossen war ([Firefox Bug 1819029](https://bugzil.la/1819029)).
- Ein Problem wurde behoben, bei dem `WebDriver:ElementClear` ein zusätzliches `change` Event für inhaltsbearbeitbare Elemente emittierte ([Firefox Bug 1744925](https://bugzil.la/1744925)).

## Änderungen für Add-on-Entwickler

- Die Eigenschaften `usedDelegatedCredentials`, `usedEch`, `usedOcsp` und `usedPrivateDns` wurden zu {{WebExtAPIRef("webRequest.SecurityInfo")}} hinzugefügt. Diese Eigenschaften liefern Informationen über die Sicherheit der für eine Webanfrage genutzten Verbindung ([Firefox Bug 1804460](https://bugzil.la/1804460)).
- Die Eigenschaft `"type"` wird im [`"background"` manifest key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) unterstützt. Das Setzen dieses Schlüssels auf `"module"` lädt Hintergrundskripte, die mit `"scripts"` als ES-Module angegeben sind, wodurch es nicht mehr nötig ist, zu Hintergrundseiten zu wechseln, um ES-Module zu verwenden ([Firefox Bug 1811443](https://bugzil.la/1811443)).
