---
title: Firefox 124 für Entwickler
slug: Mozilla/Firefox/Releases/124
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 124, die Entwickler betreffen. Firefox 124 wurde am [19. März 2024](https://whattrainisitnow.com/release/?version=124) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("text-wrap")}}-Eigenschaft wurde jetzt in eine Kurzform-Eigenschaft umgewandelt und deckt die Bestandteileigenschaften {{cssxref("text-wrap-mode")}} und {{cssxref("text-wrap-style")}} ab. ([Firefox Bug 1758391](https://bugzil.la/1758391)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die CSS-Pseudoelemente {{cssxref("::first-letter")}} und {{cssxref("::first-line")}} können nun auf das {{SVGElement("text")}}-SVG-Element angewendet werden. Dies ermöglicht beispielsweise, das Füllen, die Kontur oder die Schriftart des ersten Buchstabens/der ersten Zeile eines `<text>`-Elements mit CSS zu ändern. ([Firefox Bug 1302722](https://bugzil.la/1302722)).

### APIs

- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) wird jetzt unterstützt und ermöglicht das Erstellen eines kombinierten Signals, das verwendet werden kann, um eine Operation von mehreren Signalquellen abzubrechen. ([Firefox Bug 1830781](https://bugzil.la/1830781)).
- Der [`WebSocket()`-Konstruktor](/de/docs/Web/API/WebSocket/WebSocket#url) erlaubt jetzt HTTPS, HTTP und relative URLs. Diese sind oft ergonomischer als die Verwendung von WS- und WSS-URLs ([Firefox Bug 1797449](https://bugzil.la/1797449)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies)-Befehl wurde implementiert, der es Benutzern ermöglicht, Cookies abzurufen. Dieser Befehl akzeptiert zwei optionale Argumente. Clients können das `filter`-Argument angeben, um nur Cookies zurückzugeben, die bestimmten Kriterien entsprechen. Und das `partition`-Argument kann verwendet werden, um den Partitionierungsschlüssel zu erstellen und Cookies abzurufen, [die der entsprechenden Partition gehören](/de/docs/Web/Privacy/Guides/State_Partitioning). ([Firefox Bug 1854580](https://bugzil.la/1854580))
- Der [storage.setCookie](https://w3c.github.io/webdriver-bidi/#command-storage-setCookie)-Befehl wurde implementiert, der ein neues Cookie erstellt. Benutzer können Informationen über das Cookie im `cookie`-Parameter und optional einen `partition`-Parameter bereitstellen, um den Partitionierungsschlüssel der Partition zu erstellen, die das Cookie besitzen soll. ([Firefox Bug 1854582](https://bugzil.la/1854582))
- Verschiedene Befehle zur Abfrage von Anfragen wurden implementiert:
  - [network.addIntercept](https://w3c.github.io/webdriver-bidi/#command-network-addIntercept), mit dem Benutzer URL-Muster definieren können, die verwendet werden, um Netzwerk-Anfragen in verschiedenen Phasen des Lebenszyklus eines Netzwerkevents abzufangen. Dieser Befehl gibt die eindeutige ID zurück, die für das erstellte Netzwerkeingreifen generiert wurde. ([Firefox Bug 1826192](https://bugzil.la/1826192))
  - [network.removeIntercept](https://w3c.github.io/webdriver-bidi/#command-network-removeIntercept) erlaubt das Entfernen von Abfangvorgängen basierend auf deren eindeutiger ID. ([Firefox Bug 1826193](https://bugzil.la/1826193))
  - [network.continueWithAuth](https://w3c.github.io/webdriver-bidi/#command-network-continueWithAuth) erlaubt es, Anfragen, die in der `AuthRequired`-Phase abgefangen wurden, fortzusetzen. Mit dem "action"-Argument können Clients entweder "cancel" auswählen, "provideCredentials" mit Benutzername und Passwort bereitstellen oder auf "default" zurückfallen, um den Browser das Authentifizierungsfenster anzeigen zu lassen. ([Firefox Bug 1826196](https://bugzil.la/1826196))
  - [network.failRequest](https://w3c.github.io/webdriver-bidi/#command-network-failRequest) erlaubt es, Anfragen, die in den Phasen `BeforeRequestSent` oder `ResponseStarted` abgefangen wurden, abzubrechen. ([Firefox Bug 1853883](https://bugzil.la/1853883))
  - [network.continueRequest](https://w3c.github.io/webdriver-bidi/#command-network-continueRequest), [network.continueResponse](https://w3c.github.io/webdriver-bidi/#command-network-continueResponse) und [network.provideResponse](https://w3c.github.io/webdriver-bidi/#command-network-provideResponse) sind ebenfalls verfügbar, unterstützen momentan jedoch nur das "request"-Argument und erlauben nur das Fortsetzen einer blockierten Anfrage. In zukünftigen Versionen werden zusätzliche Argumente das Ändern der Anfrage und der Antwort erlauben. ([Firefox Bug 1874206](https://bugzil.la/1874206) und [Firefox Bug 1853882](https://bugzil.la/1853882))
- Verschiedene Befehle rund um "Benutzerkontexte", die in Firefox als [Container](https://support.mozilla.org/en-US/kb/how-use-firefox-containers) implementiert sind, wurden umgesetzt:
  - [browser.createUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-createUserContext) erstellt einen neuen Benutzerkontext und gibt die eindeutige ID des neuen Benutzerkontexts zurück. ([Firefox Bug 1870848](https://bugzil.la/1870848))
  - [browser.removeUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-removeUserContext) kann verwendet werden, um einen nicht-standardmäßigen Benutzerkontext zu entfernen, indem dessen eindeutige ID angegeben wird. ([Firefox Bug 1870849](https://bugzil.la/1870849))
  - [browser.getUserContexts](https://w3c.github.io/webdriver-bidi/#command-browser-getUserContexts) erlaubt es Clients, die Liste aller verfügbaren Benutzerkontexte, einschließlich des Standard-Benutzerkontexts, abzurufen. ([Firefox Bug 1870847](https://bugzil.la/1870847))
- Unterstützung für das "userContext"-Argument zum [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)-Befehl hinzugefügt, der es ermöglicht, einen neuen Browsing-Kontext (Tab oder Fenster) einem spezifischen Benutzerkontext (Firefox-Container) zuzuweisen. ([Firefox Bug 1874918](https://bugzil.la/1874918))
- Der [browsingContext.Info](https://w3c.github.io/webdriver-bidi/#type-browsingContext-Info)-Typ wurde um das "userContext"-Feld erweitert, welches die eindeutige ID des Benutzerkontexts ist, der die Zuordnung des Tabs für diesen Browsing-Kontext besitzt. ([Firefox Bug 1874920](https://bugzil.la/1874920))
- Unterstützung für das "contexts"-Argument zum [script.addPreloadScript](https://w3c.github.io/webdriver-bidi/#command-script-addPreloadScript)-Befehl hinzugefügt, damit Clients Preload-Skripte nur zu spezifischen Browsing-Kontexten (Tabs) hinzufügen können, indem sie deren obersten Browsing-Kontext angeben. ([Firefox Bug 1858458](https://bugzil.la/1858458))
- Ein Fehler wurde behoben, bei dem [browsingContext.close](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close) nicht in der Lage war, den letzten Tab eines Fensters zu schließen. ([Firefox Bug 1873948](https://bugzil.la/1873948))

#### Marionette

- Ein Problem mit [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) wurde behoben, bei dem der Slot-Wert einer Webkomponente ignoriert wurde, wenn kein benutzerdefinierter Text angegeben ist. ([Firefox Bug 1865381](https://bugzil.la/1865381))

## Änderungen für Add-on-Entwickler

- Ein {{WebExtAPIRef("runtime.onPerformanceWarning")}}-Event wurde hinzugefügt, das Erweiterungen die Möglichkeit gibt, Informationen zu erhalten, wenn der Browser feststellt, dass die Erweiterung ein Laufzeitleistungsproblem hat, wie z.B. ein langsam laufendes Inhalts-Skript ([Firefox Bug 1861445](https://bugzil.la/1861445)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 124 verfügbar, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solcher Features finden Sie auf der [Seite für experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Erweiterbarer `SharedArrayBuffer`:** `javascript.options.experimental.sharedarraybuffer_growable`.

  Der {{jsxref("SharedArrayBuffer")}} kann jetzt mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}} erweitert werden.
  Die maximal erlaubte Größe des Puffers wird mit dem `options.maxByteLength`-Parameter zum [`SharedArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
  Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer erweiterbar ist und seine maximal erlaubte Größe.
  ([Firefox Bug 1842773](https://bugzil.la/1842773).)

- **Anpassbarer `ArrayBuffer`:** `javascript.options.experimental.arraybuffer_resizable`.

  Der {{jsxref("ArrayBuffer")}} kann jetzt mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}} angepasst werden.
  Die maximal erlaubte Größe des Puffers wird mit dem `options.maxByteLength`-Parameter zum [`ArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
  Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer anpassbar ist und seine maximal erlaubte Größe.
  ([Firefox Bug 1842773](https://bugzil.la/1842773).)

## Ältere Versionen

{{Firefox_for_developers}}
