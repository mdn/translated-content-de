---
title: Firefox 112 für Entwickler
slug: Mozilla/Firefox/Releases/112
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 112, die Entwickler betreffen. Firefox 112 wurde am 11. April 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft [**`inert`**](/de/docs/Web/HTML/Global_attributes/inert) ist nun vollständig aktiviert. Sie ermöglicht es dem Browser, Inhalte oder interaktive Elemente, die sich innerhalb eines HTMLElement mit dem `inert` Attribut befinden, zu ignorieren. Weitere Einzelheiten finden Sie in [Firefox Bug 1764263](https://bugzil.la/1764263).

### CSS

- Der Schlüsselwortwert `overlay` für die {{cssxref("overflow")}}-Eigenschaft wird nun als veraltetes Alias des Schlüsselwortwerts `auto` unterstützt ([Firefox Bug 1817189](https://bugzil.la/1817189)).
- Die `linear()` [Easing-Funktion](/de/docs/Web/CSS/easing-function) wird jetzt unterstützt. Diese definiert Easing-Funktionen, die linear zwischen einer Reihe von Punkten interpolieren und ist nützlich zum Annähern komplexer Animationen ([Firefox Bug 1819447](https://bugzil.la/1819447), [Firefox Bug 1764126](https://bugzil.la/1764126)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) wird jetzt unterstützt, was es Entwicklern ermöglicht, die [Autoplay](/de/docs/Web/Media/Guides/Autoplay) von Media-Elementen und Audio-Kontexten zu konfigurieren, basierend darauf, ob Autoplay erlaubt, nicht erlaubt oder nur erlaubt ist, wenn der Ton stummgeschaltet ist. Weitere Einzelheiten finden Sie in [Firefox Bug 1773551](https://bugzil.la/1773551).
- Abgerundete Rechtecke können jetzt in 2D-Canvas mit [`CanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect), [`Path2D.roundRect()`](/de/docs/Web/API/Path2D#path2d.roundrect) und [`OffscreenCanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.roundrect) gezeichnet werden. Weitere Einzelheiten finden Sie in [Firefox Bug 1756175](https://bugzil.la/1756175).
- Das veraltete und nicht standardisierte Attribut `CanvasRenderingContext2D.mozTextStyle` ist nun standardmäßig deaktiviert ([Firefox Bug 1818409](https://bugzil.la/1818409)).

#### Entfernungen

- Unterstützung für `IDBMutableFile`, `IDBFileRequest`, `IDBFileHandle` und `IDBDatabase.createMutableFile()` wurde entfernt. Diese Schnittstellen sind in keiner Spezifikation vorhanden, wurden seit Version 102 hinter einer Präferenz gehalten und wurden von den anderen Hauptbrowser-Engines seit einigen Jahren entfernt. ([Firefox Bug 1500343](https://bugzil.la/1500343).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der Befehl `browsingContext.print` wurde implementiert, der es Clients ermöglicht, eine gerenderte PDF-Dokument des Browsing-Kontextes anzufordern, dargestellt als Base64-codierter String. Weitere Einzelheiten finden Sie in [Firefox Bug 1806810](https://bugzil.la/1806810).
- Die Befehle `script.addPreloadScript` und `script.removePreloadScript` wurden implementiert, die es Test-Clients ermöglichen, eine Funktionalität zu injizieren, die garantiert für alle nachfolgend geladenen Inhalts-Skripte verfügbar ist und vor allen späteren Skripten, die WebDriver in den Kontext injiziert. Weitere Einzelheiten finden Sie in [Firefox Bug 1806420](https://bugzil.la/1806420) und [Firefox Bug 1806465](https://bugzil.la/1806465).
- `Element` und `ShadowRoot` Referenzen, wie sie im Node-Cache gespeichert sind, können nun sowohl in Marionette als auch WebDriver BiDi mit ihrem exakt gleichen einzigartigen Referenz genutzt werden. Weitere Einzelheiten finden Sie in [Firefox Bug 1770733](https://bugzil.la/1770733).
- `isRedirect` wurde aus den Basisparametern der Netzwerkereignisse entfernt ([Firefox Bug 1819875](https://bugzil.la/1819875)).

#### Marionette

- Ein Problem wurde behoben, bei dem die Nutzlast einer Antwort nicht innerhalb eines `value` Felds basierend auf einem bestimmten Datentyp eingekapselt wurde. ([Firefox Bug 1819029](https://bugzil.la/1819029)).
- Ein Problem wurde behoben, bei dem `WebDriver:ElementClear` ein zusätzliches `change` Ereignis für bearbeitbare Inhalte ausgegeben hat ([Firefox Bug 1744925](https://bugzil.la/1744925)).

## Änderungen für Add-on-Entwickler

- Die Eigenschaften `usedDelegatedCredentials`, `usedEch`, `usedOcsp` und `usedPrivateDns` wurden zu {{WebExtAPIRef("webRequest.SecurityInfo")}} hinzugefügt. Diese Eigenschaften liefern Informationen über die Sicherheit der Verbindung, die für eine Web-Anfrage verwendet wurde ([Firefox Bug 1804460](https://bugzil.la/1804460)).
- Die Eigenschaft `"type"` wird im [`"background"` Manifestschlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) unterstützt. Wenn dieser Schlüssel auf `"module"` gesetzt ist, werden Hintergrundskripte, die mit `"scripts"` spezifiziert sind, als ES-Module geladen, wodurch es nicht mehr notwendig ist, zu Hintergrundseiten zu wechseln, um ES-Module zu verwenden ([Firefox Bug 1811443](https://bugzil.la/1811443)).

## Ältere Versionen

{{Firefox_for_developers}}
