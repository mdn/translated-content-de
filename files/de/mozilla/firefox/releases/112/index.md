---
title: Firefox 112 für Entwickler
slug: Mozilla/Firefox/Releases/112
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 112, die Entwickler betreffen. Firefox 112 wurde am 11. April 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft [**`inert`**](/de/docs/Web/HTML/Global_attributes/inert) ist nun vollständig aktiviert. Sie ermöglicht es dem Browser, Inhalte oder interaktive Elemente innerhalb eines HTML-Elements mit dem Attribut `inert` zu ignorieren. Weitere Details finden Sie im [Firefox-Bug 1764263](https://bugzil.la/1764263).

### CSS

- Der `overlay` Schlüsselwert für die {{cssxref("overflow")}} Eigenschaft wird jetzt als ein veraltetes Alias des Schlüsselwerts `auto` unterstützt ([Firefox-Bug 1817189](https://bugzil.la/1817189)).
- Die `linear()` [Easing-Funktion](/de/docs/Web/CSS/easing-function) wird nun unterstützt. Diese Funktion definiert Easing-Funktionen, die linear zwischen einer Reihe von Punkten interpolieren und nützlich sind, um komplexe Animationen zu approximieren ([Firefox-Bug 1819447](https://bugzil.la/1819447), [Firefox-Bug 1764126](https://bugzil.la/1764126)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) wird jetzt unterstützt. Dadurch können Entwickler das [Autoplay](/de/docs/Web/Media/Autoplay_guide) von Media-Elementen und Audiokontexten basierend darauf konfigurieren, ob Autoplay erlaubt, nicht erlaubt oder nur erlaubt ist, wenn der Ton stummgeschaltet ist. Weitere Details finden Sie im [Firefox-Bug 1773551](https://bugzil.la/1773551).
- Abgerundete Rechtecke können nun in 2D-Leinwänden mit [`CanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect), [`Path2D.roundRect()`](/de/docs/Web/API/Path2D#path2d.roundrect) und [`OffscreenCanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.roundrect) gezeichnet werden. Weitere Details finden Sie im [Firefox-Bug 1756175](https://bugzil.la/1756175).
- Das veraltete und nicht standardisierte Attribut `CanvasRenderingContext2D.mozTextStyle` ist jetzt standardmäßig deaktiviert ([Firefox-Bug 1818409](https://bugzil.la/1818409)).

#### Entfernungen

- Unterstützung für `IDBMutableFile`, `IDBFileRequest`, `IDBFileHandle` und `IDBDatabase.createMutableFile()` wurde entfernt. Diese Schnittstellen sind in keiner Spezifikation enthalten, waren seit Version 102 hinter einer Präferenz versteckt und wurden aus den anderen Hauptbrowser-Engines bereits seit einigen Jahren entfernt ([Firefox-Bug 1500343](https://bugzil.la/1500343)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der Befehl `browsingContext.print` wurde implementiert, der es Clients ermöglicht, ein gerendertes PDF-Dokument des Browsing-Kontexts als Base64-codierten String anzufordern. Weitere Details finden Sie im [Firefox-Bug 1806810](https://bugzil.la/1806810).
- Die Befehle `script.addPreloadScript` und `script.removePreloadScript` wurden implementiert, die es Test-Clients ermöglichen, eine Funktionalität zu injizieren, die garantiert für alle anschließend geladenen Inhalts-Skripte verfügbar ist und vor allen späteren Skripten, die WebDriver in den Kontext injiziert, vorhanden ist. Weitere Details finden Sie im [Firefox-Bug 1806420](https://bugzil.la/1806420) und [Firefox-Bug 1806465](https://bugzil.la/1806465).
- `Element` und `ShadowRoot` Referenzen, wie sie im Node-Cache gespeichert sind, können jetzt sowohl in Marionette als auch in WebDriver BiDi mit ihrem exakt gleichen eindeutigen Verweis verwendet werden. Weitere Details finden Sie im [Firefox-Bug 1770733](https://bugzil.la/1770733).
- `isRedirect` wurde aus den Basisparametern der Netzwerkereignisse entfernt ([Firefox-Bug 1819875](https://bugzil.la/1819875)).

#### Marionette

- Ein Problem wurde behoben, bei dem die Nutzlast einer Antwort nicht in einem `value` Feld basierend auf bestimmten Datentypen eingeschlossen war ([Firefox-Bug 1819029](https://bugzil.la/1819029)).
- Ein Problem wurde behoben, bei dem `WebDriver:ElementClear` ein zusätzliches `change` Ereignis für Content-Editierelemente auslöste ([Firefox-Bug 1744925](https://bugzil.la/1744925)).

## Änderungen für Add-on-Entwickler

- Die Eigenschaften `usedDelegatedCredentials`, `usedEch`, `usedOcsp` und `usedPrivateDns` wurden zu {{WebExtAPIRef("webRequest.SecurityInfo")}} hinzugefügt. Diese Eigenschaften bieten Informationen über die Sicherheit der Verbindung, die für eine Webanfrage verwendet wird ([Firefox-Bug 1804460](https://bugzil.la/1804460)).
- Die Eigenschaft `"type"` wird im [`"background"` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) unterstützt. Das Setzen dieses Schlüssels auf `"module"` lädt Hintergrundskripte, die mit `"scripts"` als ES-Module angegeben sind, sodass ein Wechsel zu Hintergrundseiten zur Nutzung von ES-Modulen überflüssig wird ([Firefox-Bug 1811443](https://bugzil.la/1811443)).

## Ältere Versionen

{{Firefox_for_developers}}
