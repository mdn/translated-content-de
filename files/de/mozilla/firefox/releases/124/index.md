---
title: Firefox 124 für Entwickler
short-title: Firefox 124
slug: Mozilla/Firefox/Releases/124
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 124, die Entwickler betreffen. Firefox 124 wurde am [19. März 2024](https://whattrainisitnow.com/release/?version=124) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die Eigenschaft {{cssxref("text-wrap")}} wurde nun in eine Kurzform-Eigenschaft umgewandelt und umfasst die Bestandteileigenschaften {{cssxref("text-wrap-mode")}} und {{cssxref("text-wrap-style")}}. ([Firefox Bug 1758391](https://bugzil.la/1758391)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die CSS-Pseudoelemente {{cssxref("::first-letter")}} und {{cssxref("::first-line")}} können jetzt auf das {{SVGElement("text")}} SVG-Element angewendet werden. Dies ermöglicht es Ihnen zum Beispiel, die Füllung, die Kontur oder die Schriftart des ersten Buchstabens/der ersten Zeile eines `<text>`-Elements mit CSS zu ändern. ([Firefox Bug 1302722](https://bugzil.la/1302722)).

### APIs

- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) wird jetzt unterstützt und ermöglicht die Erstellung eines zusammengesetzten Signals, das verwendet werden kann, um eine Operation aus mehreren Signalquellen abzubrechen. ([Firefox Bug 1830781](https://bugzil.la/1830781)).
- Der [`WebSocket()` Constructor](/de/docs/Web/API/WebSocket/WebSocket#url) erlaubt jetzt HTTPS-, HTTP- und relative URLs. Diese sind oft ergonomischer als die Verwendung von WS- und WSS-URLs. ([Firefox Bug 1797449](https://bugzil.la/1797449)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implementiert den [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies)-Befehl, der es Nutzern ermöglicht, Cookies abzurufen. Dieser Befehl akzeptiert zwei optionale Argumente. Clients können das `filter`-Argument angeben, um nur Cookies zurückzugeben, die bestimmten Kriterien entsprechen. Das `partition`-Argument kann verwendet werden, um den Partitionsschlüssel zu erstellen und Cookies [zu einem bestimmten Partition](/de/docs/Web/Privacy/Guides/State_Partitioning) abzurufen. ([Firefox Bug 1854580](https://bugzil.la/1854580))
- Implementiert den [storage.setCookie](https://w3c.github.io/webdriver-bidi/#command-storage-setCookie)-Befehl, der ein neues Cookie erstellt. Nutzer können Informationen über das Cookie im `cookie`-Parameter und optional einen `partition`-Parameter angeben, um den Partitionsschlüssel der Partition zu erstellen, die das Cookie besitzen soll. ([Firefox Bug 1854582](https://bugzil.la/1854582))
- Diverse Befehle zur Abfangung von Anfragen implementiert:
  - [network.addIntercept](https://w3c.github.io/webdriver-bidi/#command-network-addIntercept), der es Nutzern ermöglicht, URL-Muster zu definieren, die verwendet werden, um Netzwerk-Anfragen während verschiedener Phasen des Lebenszyklus eines Netzwerkereignisses abzufangen. Dieser Befehl gibt die eindeutige ID zurück, die für das erstellte Netzwerk-Intercept generiert wurde. ([Firefox Bug 1826192](https://bugzil.la/1826192))
  - [network.removeIntercept](https://w3c.github.io/webdriver-bidi/#command-network-removeIntercept), ermöglicht das Entfernen von Intercepts basierend auf ihrer eindeutigen ID. ([Firefox Bug 1826193](https://bugzil.la/1826193))
  - [network.continueWithAuth](https://w3c.github.io/webdriver-bidi/#command-network-continueWithAuth), ermöglicht die Fortsetzung von Anfragen, die in der `AuthRequired`-Phase abgefangen wurden. Mit dem "action"-Argument können Clients entweder "cancel", "provideCredentials" mit Benutzername und Passwort wählen oder auf "default" zurückfallen, um dem Browser die Anzeige der Authentifizierungsaufforderung zu überlassen.([Firefox Bug 1826196](https://bugzil.la/1826196))
  - [network.failRequest](https://w3c.github.io/webdriver-bidi/#command-network-failRequest), ermöglicht das Abbrechen von Anfragen, die in den Phasen `BeforeRequestSent` oder `ResponseStarted` abgefangen wurden.([Firefox Bug 1853883](https://bugzil.la/1853883))
  - [network.continueRequest](https://w3c.github.io/webdriver-bidi/#command-network-continueRequest), [network.continueResponse](https://w3c.github.io/webdriver-bidi/#command-network-continueResponse) und [network.provideResponse](https://w3c.github.io/webdriver-bidi/#command-network-provideResponse) sind ebenfalls verfügbar, aber im Moment unterstützen sie nur das "request"-Argument und erlauben nur das Fortsetzen einer blockierten Anfrage. In zukünftigen Versionen werden zusätzliche Argumente die Änderung der Anfrage und der Antwort ermöglichen. ([Firefox Bug 1874206](https://bugzil.la/1874206) und [Firefox Bug 1853882](https://bugzil.la/1853882))
- Mehrere Befehle rund um "Benutzerkontexte" implementiert, die als [Container](https://support.mozilla.org/en-US/kb/how-use-firefox-containers) in Firefox implementiert sind:
  - [browser.createUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-createUserContext) erstellt einen neuen Benutzerkontext und gibt die eindeutige ID des neuen Benutzerkontexts zurück. ([Firefox Bug 1870848](https://bugzil.la/1870848))
  - [browser.removeUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-removeUserContext) kann verwendet werden, um jeden nicht-Standard-Benutzerkontext zu entfernen, indem dessen eindeutige ID angegeben wird. ([Firefox Bug 1870849](https://bugzil.la/1870849))
  - [browser.getUserContexts](https://w3c.github.io/webdriver-bidi/#command-browser-getUserContexts) ermöglicht es Clients, die Liste aller verfügbaren Benutzerkontexte einschließlich des Standard-Benutzerkontexts abzurufen. ([Firefox Bug 1870847](https://bugzil.la/1870847))
- Unterstützung für das "userContext"-Argument zum [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)-Befehl hinzugefügt, der es ermöglicht, einen neuen Browsing-Kontext (Tab oder Fenster) einem spezifischen Benutzerkontext (Firefox-Container) zuzuweisen. ([Firefox Bug 1874918](https://bugzil.la/1874918))
- Der Typ [browsingContext.Info](https://w3c.github.io/webdriver-bidi/#type-browsingContext-Info) wurde aktualisiert, um das Feld "userContext" einzuschließen, das die eindeutige ID des Benutzerkontexts ist, dem der Tab für diesen Browsing-Kontext gehört. ([Firefox Bug 1874920](https://bugzil.la/1874920))
- Unterstützung für das "contexts"-Argument zum [script.addPreloadScript](https://w3c.github.io/webdriver-bidi/#command-script-addPreloadScript)-Befehl hinzugefügt, dies ermöglicht es Clients, Preload-Skripte nur zu spezifischen Browsing-Kontext-Bäumen (Tabs) hinzuzufügen, indem ihre Top-Level-Browsing-Kontexte angegeben werden. ([Firefox Bug 1858458](https://bugzil.la/1858458))
- Ein Fehler behoben, bei dem [browsingContext.close](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close) den letzten Tab eines Fensters nicht schließen konnte. ([Firefox Bug 1873948](https://bugzil.la/1873948))

#### Marionette

- Ein Problem mit [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) behoben, das den Slot-Wert einer Webkomponente ignorierte, wenn kein benutzerdefinierter Text angegeben war. ([Firefox Bug 1865381](https://bugzil.la/1865381))

## Änderungen für Add-on-Entwickler

- Fügt das {{WebExtAPIRef("runtime.onPerformanceWarning")}} Ereignis hinzu, das Erweiterungen ermöglicht, Informationen zu erhalten, wenn der Browser erkennt, dass die Erweiterung ein Laufzeit-Performance-Problem hat, wie zum Beispiel ein langsam laufendes Inhalts-Skript ([Firefox Bug 1861445](https://bugzil.la/1861445)).

## Experimentelle Webfeatures

Diese Funktionen sind neu in Firefox 124 eingeführt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der [Seite über experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Wachsender `SharedArrayBuffer`:** `javascript.options.experimental.sharedarraybuffer_growable`.

  Der {{jsxref("SharedArrayBuffer")}} kann nun mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}} vergrößert werden.
  Die maximal erlaubte Größe des Puffers wird mit dem `options.maxByteLength` Parameter des [`SharedArrayBuffer()` Konstructors](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
  Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer erweiterbar ist und seine maximal erlaubte Größe.
  ([Firefox Bug 1842773](https://bugzil.la/1842773).)

- **Änderbare `ArrayBuffer`:** `javascript.options.experimental.arraybuffer_resizable`.

  Der {{jsxref("ArrayBuffer")}} kann jetzt mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}} vergrößert werden.
  Die maximal erlaubte Größe des Puffers wird mit dem `options.maxByteLength` Parameter des [`ArrayBuffer()` Konstructors](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
  Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer geändert werden kann und seine maximal erlaubte Größe.
  ([Firefox Bug 1842773](https://bugzil.la/1842773).)
