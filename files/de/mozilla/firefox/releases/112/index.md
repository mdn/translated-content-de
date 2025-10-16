---
title: Firefox 112 Versionshinweise für Entwickler
short-title: Firefox 112
slug: Mozilla/Firefox/Releases/112
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 112, die Entwickler betreffen. Firefox 112 wurde am 11. April 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft [**`inert`**](/de/docs/Web/HTML/Reference/Global_attributes/inert) ist jetzt vollständig aktiviert. Sie ermöglicht es dem Browser, Inhalte oder interaktive Elemente zu ignorieren, die sich innerhalb eines `HTMLElement` mit dem `inert` Attribut befinden. Siehe [Firefox Bug 1764263](https://bugzil.la/1764263) für weitere Details.

### CSS

- Der `overlay` Schlüsselwortwert für die {{cssxref("overflow")}} Eigenschaft wird jetzt als veraltetes Alias des Schlüsselwortwerts `auto` unterstützt ([Firefox Bug 1817189](https://bugzil.la/1817189)).
- Die `linear()` [Easing-Funktion](/de/docs/Web/CSS/easing-function) wird jetzt unterstützt.
  Diese definiert Easing-Funktionen, die linear zwischen einem Satz von Punkten interpolieren und ist nützlich, um komplexe Animationen zu approximieren ([Firefox Bug 1819447](https://bugzil.la/1819447), [Firefox Bug 1764126](https://bugzil.la/1764126)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.getAutoplayPolicy()`](/de/docs/Web/API/Navigator/getAutoplayPolicy) wird jetzt unterstützt und ermöglicht es Entwicklern, die [Autoplay](/de/docs/Web/Media/Guides/Autoplay) von Medienelementen und Audiokontexten zu konfigurieren, je nachdem, ob Autoplay erlaubt, nicht erlaubt oder nur erlaubt ist, wenn der Ton stummgeschaltet ist.
  Siehe [Firefox Bug 1773551](https://bugzil.la/1773551) für weitere Details.
- Abgerundete Rechtecke können nun in 2D-Canvas mit [`CanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect), [`Path2D.roundRect()`](/de/docs/Web/API/Path2D#path2d.roundrect) und [`OffscreenCanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.roundrect) gezeichnet werden.
  Siehe [Firefox Bug 1756175](https://bugzil.la/1756175) für weitere Details.
- Das veraltete und nicht standardisierte `CanvasRenderingContext2D.mozTextStyle` Attribut ist jetzt standardmäßig deaktiviert ([Firefox Bug 1818409](https://bugzil.la/1818409)).

#### Entfernungen

- Entfernt die Unterstützung für `IDBMutableFile`, `IDBFileRequest`, `IDBFileHandle` und `IDBDatabase.createMutableFile()`.
  Diese Schnittstellen sind in keiner Spezifikation vorhanden, waren seit Version 102 hinter einer Präferenz versteckt und wurden bereits vor einigen Jahren von den anderen großen Browser-Engines entfernt.
  ([Firefox Bug 1500343](https://bugzil.la/1500343).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `browsingContext.print` Befehl wurde implementiert, der es Clients ermöglicht, ein gerendertes PDF-Dokument des Browsing-Kontexts als Base64-kodierten String anzufordern. Siehe [Firefox Bug 1806810](https://bugzil.la/1806810) für weitere Details.
- Die Befehle `script.addPreloadScript` und `script.removePreloadScript` wurden implementiert, die es Test-Clients ermöglichen, eine Funktionalität zu injizieren, die für alle daraufhin geladenen Content-Skripte verfügbar ist und vor allen späteren Skripten, die WebDriver in den Kontext injiziert, bereitsteht. Siehe [Firefox Bug 1806420](https://bugzil.la/1806420) und [Firefox Bug 1806465](https://bugzil.la/1806465) für weitere Details.
- `Element` und `ShadowRoot` Referenzen, wie sie im Node-Cache gespeichert sind, können jetzt in beiden Marionette und WebDriver BiDi mit ihrem exakt gleichen einzigartigen Verweis verwendet werden. Siehe [Firefox Bug 1770733](https://bugzil.la/1770733) für weitere Details.
- `isRedirect` wurde von den Netzwerkevent-Basisparametern entfernt ([Firefox Bug 1819875](https://bugzil.la/1819875)).

#### Marionette

- Ein Problem wurde behoben, bei dem die Nutzlast einer Antwort nicht innerhalb eines `value` Feldes basierend auf einem bestimmten Datentyp eingeschlossen war. ([Firefox Bug 1819029](https://bugzil.la/1819029)).
- Ein Problem wurde behoben, bei dem `WebDriver:ElementClear` ein zusätzliches `change` Event für inhaltseditierbare Elemente ausgab ([Firefox Bug 1744925](https://bugzil.la/1744925)).

## Änderungen für Add-on-Entwickler

- Die Eigenschaften `usedDelegatedCredentials`, `usedEch`, `usedOcsp` und `usedPrivateDns` wurden zu {{WebExtAPIRef("webRequest.SecurityInfo")}} hinzugefügt. Diese Eigenschaften liefern Informationen über die Sicherheit der für eine Webanfrage verwendeten Verbindung ([Firefox Bug 1804460](https://bugzil.la/1804460)).
- Die Eigenschaft `"type"` wird im [`"background"` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) unterstützt. Das Setzen dieses Schlüssels auf `"module"` lädt Hintergrundskripte, die mit `"scripts"` als ES-Module angegeben sind, und vermeidet so den Wechsel zu Hintergrundseiten, um ES-Module zu verwenden ([Firefox Bug 1811443](https://bugzil.la/1811443)).
