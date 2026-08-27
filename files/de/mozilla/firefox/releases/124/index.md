---
title: Firefox 124 Versionshinweise für Entwickler
short-title: Firefox 124
slug: Mozilla/Firefox/Releases/124
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 124, die Entwickler betreffen. Firefox 124 wurde am [19. März 2024](https://whattrainisitnow.com/release/?version=124) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine wesentlichen Änderungen.

### CSS

- Die Eigenschaft {{cssxref("text-wrap")}} wurde jetzt in eine Kurzeigenschaft umgewandelt und umfasst die Bestandteilseigenschaften {{cssxref("text-wrap-mode")}} und {{cssxref("text-wrap-style")}}. ([Firefox-Bug 1758391](https://bugzil.la/1758391)).

### JavaScript

Keine wesentlichen Änderungen.

### SVG

- Die CSS-Pseudoelemente {{cssxref("::first-letter")}} und {{cssxref("::first-line")}} können nun auf das {{SVGElement("text")}} SVG-Element angewendet werden. Dadurch können Sie beispielsweise die Füllung, den Umriss oder die Schriftart des ersten Buchstabens/der ersten Zeile eines `<text>`-Elements mit CSS ändern. ([Firefox-Bug 1302722](https://bugzil.la/1302722)).

### APIs

- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) wird jetzt unterstützt, wodurch ein zusammengesetztes Signal erstellt werden kann, das verwendet werden kann, um eine Operation von mehreren Signalquellen aus abzubrechen. ([Firefox-Bug 1830781](https://bugzil.la/1830781)).
- Der [`WebSocket()`-Konstruktor](/de/docs/Web/API/WebSocket/WebSocket#url) erlaubt nun HTTPS, HTTP und relative URLs. Diese sind oft ergonomischer als die Verwendung von WS- und WSS-URLs ([Firefox-Bug 1797449](https://bugzil.la/1797449)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies)-Anweisung wurde implementiert, mit der Benutzer Cookies abrufen können. Dieser Befehl akzeptiert zwei optionale Argumente. Clients können das `filter`-Argument bereitstellen, um nur Cookies zurückzugeben, die bestimmten Kriterien entsprechen. Und das `partition`-Argument kann verwendet werden, um den Partitionsschlüssel zu erstellen und Cookies [im Besitz der entsprechenden Partition](/de/docs/Web/Privacy/Guides/State_Partitioning) abzurufen. ([Firefox-Bug 1854580](https://bugzil.la/1854580))
- Der [storage.setCookie](https://w3c.github.io/webdriver-bidi/#command-storage-setCookie)-Befehl wurde implementiert, der ein neues Cookie erstellt. Benutzer können Informationen über das Cookie im `cookie`-Parameter angeben und optional einen `partition`-Parameter, um den Teilungsschlüssel der Partition zu erstellen, der das Cookie besitzen soll. ([Firefox-Bug 1854582](https://bugzil.la/1854582))
- Verschiedene Befehle zum Abfangen von Anfragen wurden implementiert:
  - [network.addIntercept](https://w3c.github.io/webdriver-bidi/#command-network-addIntercept), mit dem Benutzer URL-Muster definieren können, die verwendet werden, um Netzwerkabfragen während verschiedener Phasen des Lebenszyklus eines Netzwerkereignisses abzufangen. Dieser Befehl gibt die eindeutige ID zurück, die für das erstellte Netzwerkabfang erzeugt wurde. ([Firefox-Bug 1826192](https://bugzil.la/1826192))
  - [network.removeIntercept](https://w3c.github.io/webdriver-bidi/#command-network-removeIntercept) ermöglicht es Ihnen, Abfangen basierend auf ihrer eindeutigen ID zu entfernen. ([Firefox-Bug 1826193](https://bugzil.la/1826193))
  - [network.continueWithAuth](https://w3c.github.io/webdriver-bidi/#command-network-continueWithAuth) ermöglicht es Ihnen, Anfragen, die in der `AuthRequired`-Phase abgefangen wurden, fortzusetzen. Mithilfe des "action"-Arguments können Clients entweder "cancel", "provideCredentials" mit Benutzername und Passwort oder "default" verwenden, um dem Browser zu ermöglichen, die Authentifizierungsaufforderung anzuzeigen.([Firefox-Bug 1826196](https://bugzil.la/1826196))
  - [network.failRequest](https://w3c.github.io/webdriver-bidi/#command-network-failRequest) ermöglicht es Ihnen, Anfragen zu stornieren, die in der Phase `BeforeRequestSent` oder `ResponseStarted` abgefangen wurden.([Firefox-Bug 1853883](https://bugzil.la/1853883))
  - [network.continueRequest](https://w3c.github.io/webdriver-bidi/#command-network-continueRequest), [network.continueResponse](https://w3c.github.io/webdriver-bidi/#command-network-continueResponse) und [network.provideResponse](https://w3c.github.io/webdriver-bidi/#command-network-provideResponse) sind ebenfalls verfügbar, unterstützen aber momentan nur das "request"-Argument und erlauben Ihnen nur, eine blockierte Anfrage fortzusetzen. In zukünftigen Versionen werden zusätzliche Argumente es erlauben, die Anfrage und Antwort zu modifizieren. ([Firefox-Bug 1874206](https://bugzil.la/1874206) und [Firefox-Bug 1853882](https://bugzil.la/1853882))
- Mehrere Befehle rund um "Benutzerkontexte", implementiert als [Containers](https://support.mozilla.org/en-US/kb/how-use-firefox-containers) in Firefox, wurden implementiert:
  - [browser.createUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-createUserContext) erstellt einen neuen Benutzerkontext und gibt die eindeutige ID des neuen Benutzerkontexts zurück. ([Firefox-Bug 1870848](https://bugzil.la/1870848))
  - [browser.removeUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-removeUserContext) kann verwendet werden, um jeden nicht vordefinierten Benutzerkontext zu entfernen, indem seine eindeutige ID angegeben wird. ([Firefox-Bug 1870849](https://bugzil.la/1870849))
  - [browser.getUserContexts](https://w3c.github.io/webdriver-bidi/#command-browser-getUserContexts) ermöglicht es Clients, die Liste aller verfügbaren Benutzerkontexte abzurufen, einschließlich des vordefinierten Benutzerkontexts. ([Firefox-Bug 1870847](https://bugzil.la/1870847))
- Unterstützung für das "userContext"-Argument wurde zum [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)-Befehl hinzugefügt, wodurch Sie einen neuen Browsing-Kontext (Tab oder Fenster) einem bestimmten Benutzerkontext (Firefox-Container) zuweisen können. ([Firefox-Bug 1874918](https://bugzil.la/1874918))
- Der Typ [browsingContext.Info](https://w3c.github.io/webdriver-bidi/#type-browsingContext-Info) wurde aktualisiert, um das "userContext"-Feld einzuschließen, welches die eindeutige ID des Benutzerkontexts ist, der den Tab für diesen Browsing-Kontext besitzt. ([Firefox-Bug 1874920](https://bugzil.la/1874920))
- Unterstützung für das "contexts"-Argument wurde dem [script.addPreloadScript](https://w3c.github.io/webdriver-bidi/#command-script-addPreloadScript)-Befehl hinzugefügt, was es Clients ermöglicht, Vorladeskripte nur zu spezifischen Browsing-Kontext-Bäumen (Tabs) hinzuzufügen, indem ihr oberster Browsing-Kontext angegeben wird. ([Firefox-Bug 1858458](https://bugzil.la/1858458))
- Ein Fehler wurde behoben, bei dem [browsingContext.close](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close) den letzten Tab eines Fensters nicht schließen konnte. ([Firefox-Bug 1873948](https://bugzil.la/1873948))

#### Marionette

- Ein Problem mit [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) wurde behoben, das den Slot-Wert einer Webkomponente ignorierte, wenn kein benutzerdefinierter Text angegeben wurde. ([Firefox-Bug 1865381](https://bugzil.la/1865381))

## Änderungen für Add-on-Entwickler

- Das Ereignis {{WebExtAPIRef("runtime.onPerformanceWarning")}} wurde hinzugefügt, das Erweiterungen ermöglicht, Informationen zu erhalten, wenn der Browser erkennt, dass die Erweiterung ein Laufzeit-Performanceproblem wie ein langsam ausgeführtes Inhalts-Skript aufweist. ([Firefox-Bug 1861445](https://bugzil.la/1861445)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 124 verfügbar, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Sie können weitere solcher Merkmale auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) finden.

- **Erweiterbarer `SharedArrayBuffer`:** `javascript.options.experimental.sharedarraybuffer_growable`.

  Der {{jsxref("SharedArrayBuffer")}} ist nun erweiterbar mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}}.
  Die maximal erlaubte Größe des Puffers wird mit dem Parameter `options.maxByteLength` an den [`SharedArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) übermittelt.
  Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer erweiterbar ist und seine maximal erlaubte Größe an.
  ([Firefox-Bug 1842773](https://bugzil.la/1842773).)

- **Größenveränderbarer `ArrayBuffer`:** `javascript.options.experimental.arraybuffer_resizable`.

  Der {{jsxref("ArrayBuffer")}} kann nun mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}} in der Größe verändert werden.
  Die maximal erlaubte Größe des Puffers wird mit dem Parameter `options.maxByteLength` an den [`ArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) übermittelt.
  Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer in der Größe verändert werden kann und seine maximal erlaubte Größe an.
  ([Firefox-Bug 1842773](https://bugzil.la/1842773).)
