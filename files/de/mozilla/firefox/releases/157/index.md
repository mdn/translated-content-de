---
title: Versionshinweise für Entwickler zu Firefox 157 (Stable)
short-title: Firefox 157 (Stable)
slug: Mozilla/Firefox/Releases/157
l10n:
  sourceCommit: ac295ae8d3435f587b5233a9fe46bb55d92c1a5d
---

Dieser Artikel informiert über Änderungen in Firefox 157, die Entwickler betreffen.
Firefox 157 wurde am [29. September 2026](https://whattrainisitnow.com/release/?version=157) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine nennenswerten Änderungen.

### CSS

- Mit der Funktion [`at-rule()`](/de/docs/Web/CSS/Reference/At-rules/@supports#at-rule) in der {{cssxref("@supports")}}-At-Regel können Sie prüfen, ob der Browser eine bestimmte CSS-At-Regel unterstützt, beispielsweise @supports at-rule(@scope). Die Funktion kann auch in der Funktion [`supports()`](/de/docs/Web/CSS/Reference/At-rules/@import#supports-condition) der CSS-At-Regel {{cssxref("@import")}} verwendet werden. ([Firefox-Bug 2060755](https://bugzil.la/2060755)).
- Die Kurzschreibweise-Eigenschaft {{cssxref("overscroll-behavior")}} und die Einzeleigenschaften {{cssxref("overscroll-behavior-block")}}, {{cssxref("overscroll-behavior-inline")}}, {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} unterstützen jetzt den Wert [`chain`](/de/docs/Web/CSS/Reference/Properties/overscroll-behavior#chain). Mit `chain` kann das Scrollen an einen anderen scrollbaren Bereich weitergegeben werden. Das standardmäßige Overscroll-Verhalten des Browsers, etwa ein „Zurückfedern“, wird beim Erreichen der Grenze jedoch verhindert. ([Firefox-Bug 2036966](https://bugzil.la/2036966)).

### JavaScript

Keine nennenswerten Änderungen.

### APIs

- Der [WebGPU](/de/docs/Web/API/WebGPU_API)-[Texture-Usage-Typ](/de/docs/Web/API/GPUTexture/usage#value) `TRANSIENT_ATTACHMENT` wird jetzt unterstützt. Damit lassen sich speichereffiziente Attachments erstellen, die nur innerhalb des aktuellen Render-Passes verwendet werden. Zugehörige Render-Pass-Operationen verbleiben im Tile-Speicher. Dadurch wird Datenverkehr mit dem VRAM vermieden, und unter Umständen muss für die Texturen kein VRAM zugewiesen werden. ([Firefox-Bug 2005061](https://bugzil.la/2005061)).

#### DOM

- Die Methode [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) und die Eigenschaft [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate) entsprechen jetzt in zwei Fällen der [Web-Animations](/de/docs/Web/API/Web_Animations_API)-Spezifikation. Erstens wird eine Animation jetzt abgespielt, wenn `reverse()` für sie aufgerufen wird, während ihr `playbackRate`-Wert `0` beträgt. Dabei werden ihre Werte für [`startTime`](/de/docs/Web/API/Animation/startTime) und [`currentTime`](/de/docs/Web/API/Animation/currentTime) aktualisiert, während `playbackRate` bei `0` bleibt. Zuvor hatte der Aufruf keine Wirkung. Zweitens wird beim Wechsel von `playbackRate` zwischen einem positiven und einem negativen Wert für eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) die `startTime` der Animation jetzt an das gegenüberliegende Ende der Zeitleiste gespiegelt. Dadurch bleibt die umgekehrte Animation innerhalb des Scrollbereichs. Zuvor blieb `startTime` unverändert, was nur für zeitbasierte Zeitleisten wie [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) korrekt ist. Diese Anpassung gilt, wenn die Animation eine `startTime` und eine endliche Dauer hat. ([Firefox-Bug 2046973](https://bugzil.la/2046973)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die empfohlenen Einstellungen werden ab sofort zu einem anderen Zeitpunkt während des Herunterfahrens wiederhergestellt.
  ([Firefox-Bug 2066531](https://bugzil.la/2066531)).

#### WebDriver BiDi

- Der Befehl `browser.setDownloadBehavior` wurde aktualisiert: Wenn er mit `type=”allowed”` aufgerufen wird, ist nun der Parameter `destinationFolder` erforderlich. Dies entspricht der Spezifikation. Um das Standardverhalten wiederherzustellen, ohne einen Ordner anzugeben, sollten Clients stattdessen `browser.setDownloadBehavior` mit null aufrufen. ([Firefox-Bug 2069952](https://bugzil.la/2069952)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("alarms.clearAll()")}} erfüllt sein Promise jetzt mit `undefined` statt mit einem booleschen Wert. ([Firefox-Bug 2067229](https://bugzil.la/2067229))

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 157 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der jeweiligen Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`export * from "mod"` schließt den Default-Export ein**: `javascript.options.experimental.export_star_default`

  Der [TC39-Vorschlag zum Default-Export mit `export *`](https://tc39.es/proposal-export-star-default/) sorgt dafür, dass [`export * from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting__aggregating) auch den Default-Export des Moduls bereitstellt, der derzeit ausgelassen wird.
  Beachten Sie, dass diese Einstellung nur in Nightly-Builds gesetzt werden kann. ([Firefox-Bug 2065611](https://bugzil.la/2065611)).

- **Option `navigate` für Benachrichtigungen**: `dom.webnotifications.navigate.enabled`

  Die Option `navigate` des Konstruktors [`Notification()`](/de/docs/Web/API/Notification/Notification) und von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) nimmt eine URL entgegen, die geöffnet wird, wenn der Benutzer auf die Benachrichtigung klickt. Damit benötigen Sie keinen Click-Handler mehr, nur um eine Seite zu öffnen. Die neue schreibgeschützte Eigenschaft [`Notification.navigate`](/de/docs/Web/API/Notification/navigate) gibt diese URL zurück. Wenn die Option gesetzt ist, werden die Ereignisse [`click`](/de/docs/Web/API/Notification/click_event) und [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) für diese Benachrichtigung nicht mehr ausgelöst. Jeder Eintrag in der Option [`actions`](/de/docs/Web/API/Notification/actions) kann eine eigene `navigate`-URL festlegen. Eine Aktionsschaltfläche ohne eigene URL löst weiterhin `notificationclick` aus, anstatt die URL der Benachrichtigung zu verwenden.
  ([Firefox-Bug 2066184](https://bugzil.la/2066184)).

- **Bereinigung von HTML während des Parsens**: `dom.security.sanitizer.while-parsing`

  Methoden, die HTML mit der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) bereinigen, etwa [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), entfernen unerwünschte Elemente und Attribute jetzt bereits beim Parsen des Markups. Zuvor wurde erst das gesamte Markup geparst und anschließend der entstandene DOM-Baum bereinigt. Das Ergebnis ist dasselbe, mit einer Ausnahme: Benachbarter Text befindet sich jetzt in einem einzigen Textknoten, statt auf mehrere verteilt zu sein. ([Firefox-Bug 2062652](https://bugzil.la/2062652)).

- **Schlüsselkapselung in Web Crypto**: `dom.webcrypto.encapsulation.enabled`

  Die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt ML-KEM, einen Algorithmus, mit dem sich zwei Parteien auf einen gemeinsamen geheimen Schlüssel einigen können. Er ist darauf ausgelegt, auch gegen Angriffe durch Quantencomputer sicher zu bleiben. [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) verfügt über die neuen Methoden `encapsulateKey()`, `encapsulateBits()`, `decapsulateKey()` und `decapsulateBits()` sowie entsprechende [`key usages`](/de/docs/Web/API/CryptoKey/usages). Zu den unterstützten Algorithmusnamen gehören `ML-KEM-512`, `ML-KEM-768` und `ML-KEM-1024`. [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) akzeptieren außerdem die neuen Schlüsselformate `raw-public` und `raw-seed`. Diese Funktion ist in Nightly-Builds standardmäßig aktiviert. ([Firefox-Bug 1943614](https://bugzil.la/1943614)).
