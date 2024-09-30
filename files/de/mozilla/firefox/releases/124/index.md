---
title: Firefox 124 für Entwickler
slug: Mozilla/Firefox/Releases/124
l10n:
  sourceCommit: 66108b432b0343dae2a90e1e4990810afdcbf74e
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 124, die Entwickler betreffen. Firefox 124 wurde am [19. März 2024](https://whattrainisitnow.com/release/?version=124) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("text-wrap")}}-Eigenschaft wurde nun zu einer Kurzform-Eigenschaft umgewandelt und umfasst die Bestandteile {{cssxref("text-wrap-mode")}} und {{cssxref("text-wrap-style")}}. ([Firefox Fehler 1758391](https://bugzil.la/1758391)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die CSS-Pseudoelemente {{cssxref("::first-letter")}} und {{cssxref("::first-line")}} können jetzt auf das {{SVGElement("text")}}-SVG-Element angewendet werden. Dies ermöglicht es Ihnen z.B., die Füllung, den Strich oder die Schriftart des ersten Buchstabens/der ersten Zeile eines `<text>`-Elements mit CSS zu ändern. ([Firefox Fehler 1302722](https://bugzil.la/1302722)).

### APIs

- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) wird jetzt unterstützt und ermöglicht die Erstellung eines zusammengesetzten Signals, das verwendet werden kann, um eine Operation aus mehreren Signalquellen abzubrechen. ([Firefox Fehler 1830781](https://bugzil.la/1830781)).
- Der [`WebSocket()`-Konstruktor](/de/docs/Web/API/WebSocket/WebSocket#url) erlaubt nun HTTPS-, HTTP- und relative URLs, die oft ergonomischer sind als die Verwendung von WS- und WSS-URLs. ([Firefox Fehler 1797449](https://bugzil.la/1797449)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implementiert den [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies)-Befehl, der es Nutzern ermöglicht, Cookies abzurufen. Dieser Befehl akzeptiert zwei optionale Argumente. Clients können das `filter`-Argument angeben, um nur Cookies zurückzugeben, die bestimmten Kriterien entsprechen. Das `partition`-Argument kann verwendet werden, um den Partitionsschlüssel zu erstellen und Cookies abzurufen, die [von der entsprechenden Partition](/de/docs/Web/Privacy/State_Partitioning) besessen werden. ([Firefox Fehler 1854580](https://bugzil.la/1854580))
- Implementiert den [storage.setCookie](https://w3c.github.io/webdriver-bidi/#command-storage-setCookie)-Befehl, der ein neues Cookie erstellt. Benutzer können Informationen über das Cookie im `cookie`-Parameter angeben und optional einen `partition`-Parameter verwenden, um den Partitionsschlüssel der Partition zu erstellen, die das Cookie besitzen soll. ([Firefox Fehler 1854582](https://bugzil.la/1854582))
- Verschiedene Befehle zur Abfangen von Anfragen implementiert:
  - [network.addIntercept](https://w3c.github.io/webdriver-bidi/#command-network-addIntercept), der es Nutzern ermöglicht, URL-Muster zu definieren, die verwendet werden, um Netzwerkanfragen während verschiedener Phasen eines Netzwerkereignis-Lebenszyklus abzufangen. Dieser Befehl gibt die eindeutige ID zurück, die für das erstellte Netzwerkintercept erzeugt wurde. ([Firefox Fehler 1826192](https://bugzil.la/1826192))
  - [network.removeIntercept](https://w3c.github.io/webdriver-bidi/#command-network-removeIntercept) ermöglicht das Entfernen von Intercepts basierend auf ihrer eindeutigen ID. ([Firefox Fehler 1826193](https://bugzil.la/1826193))
  - [network.continueWithAuth](https://w3c.github.io/webdriver-bidi/#command-network-continueWithAuth) ermöglicht die Fortsetzung von Anfragen, die in der `AuthRequired`-Phase abgefangen wurden. Mit dem "action"-Argument können Clients entweder "cancel", "provideCredentials" mit Benutzername und Passwort oder "default" wählen, um den Browser die Authentifizierungsaufforderung anzeigen zu lassen. ([Firefox Fehler 1826196](https://bugzil.la/1826196))
  - [network.failRequest](https://w3c.github.io/webdriver-bidi/#command-network-failRequest) erlaubt das Abbrechen von Anfragen, die in den Phasen `BeforeRequestSent` oder `ResponseStarted` abgefangen wurden. ([Firefox Fehler 1853883](https://bugzil.la/1853883))
  - [network.continueRequest](https://w3c.github.io/webdriver-bidi/#command-network-continueRequest), [network.continueResponse](https://w3c.github.io/webdriver-bidi/#command-network-continueResponse) und [network.provideResponse](https://w3c.github.io/webdriver-bidi/#command-network-provideResponse) sind ebenfalls verfügbar, unterstützen derzeit jedoch nur das "request"-Argument und erlauben lediglich die Fortsetzung einer blockierten Anfrage. In zukünftigen Versionen werden zusätzliche Argumente eine Modifikation der Anfrage und Antwort erlauben. ([Firefox Fehler 1874206](https://bugzil.la/1874206) und [Firefox Fehler 1853882](https://bugzil.la/1853882))
- Mehrere Befehle rund um "Benutzerkontexte" implementiert, die in Firefox als [Container](https://support.mozilla.org/en-US/kb/how-use-firefox-containers) implementiert sind:
  - [browser.createUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-createUserContext) erstellt einen neuen Benutzerkontext und gibt die eindeutige ID des neuen Benutzerkontexts zurück. ([Firefox Fehler 1870848](https://bugzil.la/1870848))
  - [browser.removeUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-removeUserContext) kann verwendet werden, um jeden nicht-standardmäßigen Benutzerkontext durch Angabe seiner eindeutigen ID zu entfernen. ([Firefox Fehler 1870849](https://bugzil.la/1870849))
  - [browser.getUserContexts](https://w3c.github.io/webdriver-bidi/#command-browser-getUserContexts) erlaubt Clients, die Liste aller verfügbaren Benutzerkontexte inklusive des Standard-Benutzerkontexts abzurufen. ([Firefox Fehler 1870847](https://bugzil.la/1870847))
- Unterstützung für das "userContext"-Argument zum [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)-Befehl hinzugefügt, was es ermöglicht, einen neuen Browsing-Kontext (Tab oder Fenster) einem spezifischen Benutzerkontext (Firefox-Container) zuzuweisen. ([Firefox Fehler 1874918](https://bugzil.la/1874918))
- Der [browsingContext.Info](https://w3c.github.io/webdriver-bidi/#type-browsingContext-Info)-Typ wurde aktualisiert, um das "userContext"-Feld einzuschließen, welches die eindeutige ID des Benutzerkontexts ist, der den Tab für diesen Browsing-Kontext besitzt. ([Firefox Fehler 1874920](https://bugzil.la/1874920))
- Unterstützung für das "contexts"-Argument zum [script.addPreloadScript](https://w3c.github.io/webdriver-bidi/#command-script-addPreloadScript)-Befehl hinzugefügt, was es Clients erlaubt, Preload-Skripte nur zu bestimmten Browsing-Kontext-Bäumen (Tabs) hinzuzufügen, indem sie ihren obersten Browsing-Kontext angeben. ([Firefox Fehler 1858458](https://bugzil.la/1858458))
- Ein Fehler wurde behoben, bei dem [browsingContext.close](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close) das letzte Tab eines Fensters nicht schließen konnte. ([Firefox Fehler 1873948](https://bugzil.la/1873948))

#### Marionette

- Ein Problem mit [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) wurde behoben, bei dem der Slot-Wert einer Webkomponente ignoriert wurde, wenn kein benutzerdefinierter Text angegeben ist. ([Firefox Fehler 1865381](https://bugzil.la/1865381))

## Änderungen für Add-on-Entwickler

- Das Ereignis {{WebExtAPIRef("runtime.onPerformanceWarning")}} wurde hinzugefügt, wodurch Erweiterungen Informationen erhalten können, wenn der Browser erkennt, dass die Erweiterung ein Laufzeitleistungsproblem hat, wie z.B. ein langsam laufendes Inhalts-Skript. ([Firefox Fehler 1861445](https://bugzil.la/1861445)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 124 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Erweiterbarer `SharedArrayBuffer`:** `javascript.options.experimental.sharedarraybuffer_growable`.

  Der {{jsxref("SharedArrayBuffer")}} ist jetzt mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}} erweiterbar.
  Die maximal zulässige Größe des Puffers wird mit dem `options.maxByteLength`-Parameter für den [`SharedArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
  Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer erweitert werden kann und seine maximal zulässige Größe.
  ([Firefox Fehler 1842773](https://bugzil.la/1842773).)

- **Größenveränderbarer `ArrayBuffer`:** `javascript.options.experimental.arraybuffer_resizable`.

  Der {{jsxref("ArrayBuffer")}} kann jetzt mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}} in der Größe verändert werden.
  Die maximal zulässige Größe des Puffers wird mit dem `options.maxByteLength`-Parameter für den [`ArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
  Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer in der Größe verändert werden kann und seine maximal zulässige Größe.
  ([Firefox Fehler 1842773](https://bugzil.la/1842773).)

## Ältere Versionen

{{Firefox_for_developers}}
