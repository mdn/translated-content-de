---
title: Firefox 124 für Entwickler
slug: Mozilla/Firefox/Releases/124
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 124, die Entwickler betreffen. Firefox 124 wurde am [19. März 2024](https://whattrainisitnow.com/release/?version=124) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("text-wrap")}}-Eigenschaft wurde nun in eine Kurzschrift-Eigenschaft umgewandelt und deckt die zugehörigen Eigenschaften {{cssxref("text-wrap-mode")}} und {{cssxref("text-wrap-style")}} ab. ([Firefox-Bug 1758391](https://bugzil.la/1758391)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die CSS-Pseudoelemente {{cssxref("::first-letter")}} und {{cssxref("::first-line")}} können nun auf das {{SVGElement("text")}} SVG-Element angewendet werden. Dadurch können Sie beispielsweise den Fill, Stroke oder die Schriftart des ersten Buchstabens/der ersten Zeile eines `<text>`-Elements mit CSS ändern. ([Firefox-Bug 1302722](https://bugzil.la/1302722)).

### APIs

- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) wird jetzt unterstützt, wodurch ein zusammengesetztes Signal erstellt werden kann, das verwendet werden kann, um eine Operation von mehreren Signalquellen abzubrechen. ([Firefox-Bug 1830781](https://bugzil.la/1830781)).
- Der [`WebSocket()`-Konstruktor](/de/docs/Web/API/WebSocket/WebSocket#url) erlaubt jetzt HTTPS-, HTTP- und relative URLs. Sie sind oft ergonomischer als die Verwendung von WS- und WSS-URLs ([Firefox-Bug 1797449](https://bugzil.la/1797449)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies)-Befehl wurde implementiert, der es Benutzern ermöglicht, Cookies abzurufen. Dieser Befehl akzeptiert zwei optionale Argumente. Clients können das `filter`-Argument angeben, um nur Cookies zurückzugeben, die bestimmten Kriterien entsprechen. Und das `partition`-Argument kann verwendet werden, um den Partitionsschlüssel zu erstellen und Cookies abzurufen, [die von der entsprechenden Partition besessen werden](/de/docs/Web/Privacy/Guides/State_Partitioning). ([Firefox-Bug 1854580](https://bugzil.la/1854580))
- Der [storage.setCookie](https://w3c.github.io/webdriver-bidi/#command-storage-setCookie)-Befehl wurde implementiert, der ein neues Cookie erstellt. Benutzer können Informationen über das Cookie im `cookie`-Parameter angeben und optional einen `partition`-Parameter, um den Partitionsschlüssel der Partition zu erstellen, die das Cookie besitzen soll. ([Firefox-Bug 1854582](https://bugzil.la/1854582))
- Verschiedene Befehle zum Abfangen von Anfragen wurden implementiert:
  - [network.addIntercept](https://w3c.github.io/webdriver-bidi/#command-network-addIntercept), der es Benutzern ermöglicht, URL-Muster zu definieren, die verwendet werden, um Netzwerk-Anfragen während verschiedener Phasen eines Netzwerk-Ereignis-Lebenszyklus abzufangen. Dieser Befehl gibt die eindeutige ID zurück, die für das erstellte Netzwerk-Intercept generiert wurde. ([Firefox-Bug 1826192](https://bugzil.la/1826192))
  - [network.removeIntercept](https://w3c.github.io/webdriver-bidi/#command-network-removeIntercept) ermöglicht es, Abfänge basierend auf ihrer eindeutigen ID zu entfernen. ([Firefox-Bug 1826193](https://bugzil.la/1826193))
  - [network.continueWithAuth](https://w3c.github.io/webdriver-bidi/#command-network-continueWithAuth) ermöglicht es, Anfragen fortzusetzen, die in der `AuthRequired`-Phase abgefangen wurden. Mit dem "action"-Argument können Clients entweder "canceln", "provideCredentials" mit Benutzername und Passwort bereitstellen oder auf "default" zurückgreifen, um den Browser die Authentifizierungsaufforderung anzeigen zu lassen.([Firefox-Bug 1826196](https://bugzil.la/1826196))
  - [network.failRequest](https://w3c.github.io/webdriver-bidi/#command-network-failRequest) ermöglicht es, Anfragen zu stornieren, die in den Phasen `BeforeRequestSent` oder `ResponseStarted` abgefangen wurden.([Firefox-Bug 1853883](https://bugzil.la/1853883))
  - [network.continueRequest](https://w3c.github.io/webdriver-bidi/#command-network-continueRequest), [network.continueResponse](https://w3c.github.io/webdriver-bidi/#command-network-continueResponse) und [network.provideResponse](https://w3c.github.io/webdriver-bidi/#command-network-provideResponse) sind ebenfalls verfügbar, aber im Moment unterstützen sie nur das "request"-Argument und ermöglichen nur, eine blockierte Anfrage fortzusetzen. In zukünftigen Versionen werden zusätzliche Argumente es ermöglichen, die Anfrage und Antwort zu ändern. ([Firefox-Bug 1874206](https://bugzil.la/1874206) und [Firefox-Bug 1853882](https://bugzil.la/1853882))
- Mehrere Befehle im Zusammenhang mit "Benutzer-Kontexten" wurden implementiert, die in Firefox als [Container](https://support.mozilla.org/en-US/kb/how-use-firefox-containers) umgesetzt sind:
  - [browser.createUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-createUserContext) erstellt einen neuen Benutzer-Kontext und gibt die eindeutige ID des neuen Benutzer-Kontexts zurück. ([Firefox-Bug 1870848](https://bugzil.la/1870848))
  - [browser.removeUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-removeUserContext) kann verwendet werden, um jeden nicht-standardmäßigen Benutzer-Kontext zu entfernen, indem seine eindeutige ID angegeben wird. ([Firefox-Bug 1870849](https://bugzil.la/1870849))
  - [browser.getUserContexts](https://w3c.github.io/webdriver-bidi/#command-browser-getUserContexts) ermöglicht es Clients, die Liste aller verfügbaren Benutzer-Kontexte abzurufen, einschließlich des Standard-Benutzer-Kontexts. ([Firefox-Bug 1870847](https://bugzil.la/1870847))
- Unterstützung für das "userContext"-Argument wurde dem [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create) Befehl hinzugefügt, der es ermöglicht, einem spezifischen Benutzer-Kontext (Firefox-Container) einen neuen Browsing-Kontext (Tab oder Fenster) zuzuweisen. ([Firefox-Bug 1874918](https://bugzil.la/1874918))
- Der [browsingContext.Info](https://w3c.github.io/webdriver-bidi/#type-browsingContext-Info) Typ wurde aktualisiert, um das "userContext"-Feld zu enthalten, das die eindeutige ID des Benutzer-Kontexts ist, der den Tab für diesen Browsing-Kontext besitzt. ([Firefox-Bug 1874920](https://bugzil.la/1874920))
- Unterstützung für das "contexts"-Argument wurde dem [script.addPreloadScript](https://w3c.github.io/webdriver-bidi/#command-script-addPreloadScript) Befehl hinzugefügt, dies ermöglicht es Clients, Preload-Skripte nur zu spezifischen Browsing-Kontext-Bäumen (Tabs) hinzuzufügen, indem sie deren Top-Level-Browsing-Kontext spezifizieren. ([Firefox-Bug 1858458](https://bugzil.la/1858458))
- Ein Fehler wurde behoben, bei dem [browsingContext.close](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close) nicht in der Lage war, den letzten Tab eines Fensters zu schließen. ([Firefox-Bug 1873948](https://bugzil.la/1873948))

#### Marionette

- Ein Problem mit [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) wurde behoben, das den Slot-Wert einer Web-Komponente ignorierte, wenn kein benutzerdefinierter Text angegeben ist. ([Firefox-Bug 1865381](https://bugzil.la/1865381))

## Änderungen für Add-on-Entwickler

- Fügt das {{WebExtAPIRef("runtime.onPerformanceWarning")}}-Ereignis hinzu, das Erweiterungen ermöglicht, Informationen zu erhalten, wenn der Browser feststellt, dass die Erweiterung ein Laufzeit-Performance-Problem hat, wie z.B. ein langsam laufendes Content-Skript ([Firefox-Bug 1861445](https://bugzil.la/1861445)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 124 ausgeliefert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features)-Seite.

- **Erweiterbarer `SharedArrayBuffer`:** `javascript.options.experimental.sharedarraybuffer_growable`.

  Der {{jsxref("SharedArrayBuffer")}} ist nun erweiterbar, indem die Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}} verwendet wird.
  Die maximal erlaubte Größe des Buffers wird durch den `options.maxByteLength`-Parameter des [`SharedArrayBuffer()`-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
  Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} geben an, ob der Buffer erweiterbar ist und seine maximal erlaubte Größe.
  ([Firefox-Bug 1842773](https://bugzil.la/1842773).)

- **Größenveränderbarer `ArrayBuffer`:** `javascript.options.experimental.arraybuffer_resizable`.

  Der {{jsxref("ArrayBuffer")}} kann nun neu dimensioniert werden, indem die Methode {{jsxref("ArrayBuffer.prototype.resize()")}} verwendet wird.
  Die maximal erlaubte Größe des Buffers wird durch den `options.maxByteLength`-Parameter des [`ArrayBuffer()`-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
  Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} geben an, ob der Buffer neu dimensionierbar ist und seine maximal erlaubte Größe.
  ([Firefox-Bug 1842773](https://bugzil.la/1842773).)

## Ältere Versionen

{{Firefox_for_developers}}
