---
title: Firefox 124 Versionshinweise für Entwickler
short-title: Firefox 124
slug: Mozilla/Firefox/Releases/124
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 124, die Entwickler betreffen. Firefox 124 wurde am [19. März 2024](https://whattrainisitnow.com/release/?version=124) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("text-wrap")}}-Eigenschaft wurde jetzt in eine Kurzform umgewandelt und umfasst die zusammengesetzten Eigenschaften {{cssxref("text-wrap-mode")}} und {{cssxref("text-wrap-style")}}. ([Firefox-Bug 1758391](https://bugzil.la/1758391)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die CSS-Pseudoelemente {{cssxref("::first-letter")}} und {{cssxref("::first-line")}} können jetzt auf das {{SVGElement("text")}} SVG-Element angewendet werden. Dies ermöglicht es Ihnen, zum Beispiel die Füllung, den Umriss oder die Schriftart des ersten Buchstabens/der ersten Zeile eines `<text>`-Elements mittels CSS zu ändern. ([Firefox-Bug 1302722](https://bugzil.la/1302722)).

### APIs

- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) wird jetzt unterstützt und ermöglicht die Erstellung eines zusammengesetzten Signals, das verwendet werden kann, um eine Operation aus mehreren Signalquellen abzubrechen. ([Firefox-Bug 1830781](https://bugzil.la/1830781)).
- Der [`WebSocket()`-Konstruktor](/de/docs/Web/API/WebSocket/WebSocket#url) erlaubt nun HTTPS-, HTTP- und relative URLs. Diese sind oft ergonomischer als die Verwendung von WS- und WSS-URLs. ([Firefox-Bug 1797449](https://bugzil.la/1797449)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implementiert den [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies)-Befehl, der es Benutzern erlaubt, Cookies abzurufen. Dieser Befehl akzeptiert zwei optionale Argumente. Clients können das `filter`-Argument bereitstellen, um nur Cookies zurückzugeben, die bestimmten Kriterien entsprechen. Und das `partition`-Argument kann verwendet werden, um den Partitionsschlüssel zu erstellen und Cookies [der entsprechenden Partition zugehörig](/de/docs/Web/Privacy/Guides/State_Partitioning) abzurufen. ([Firefox-Bug 1854580](https://bugzil.la/1854580))
- Implementiert den [storage.setCookie](https://w3c.github.io/webdriver-bidi/#command-storage-setCookie)-Befehl, der ein neues Cookie erstellt. Benutzer können Informationen über das Cookie im `cookie`-Parameter und optional einen `partition`-Parameter bereitstellen, um den Partitionsschlüssel der Partition zu erstellen, die das Cookie besitzen soll. ([Firefox-Bug 1854582](https://bugzil.la/1854582))
- Verschiedene Befehle zur Abfangung von Anfragen implementiert:
  - [network.addIntercept](https://w3c.github.io/webdriver-bidi/#command-network-addIntercept), der es Benutzern erlaubt, URL-Muster zu definieren, die zur Abfangung von Netzwerk-Anfragen während verschiedener Phasen eines Netzwerkereignis-Lebenszyklus verwendet werden. Dieser Befehl gibt die eindeutige ID zurück, die für die erstellte Netzwerkabfangung generiert wurde. ([Firefox-Bug 1826192](https://bugzil.la/1826192))
  - [network.removeIntercept](https://w3c.github.io/webdriver-bidi/#command-network-removeIntercept) ermöglicht es, Abfangungen basierend auf ihrer eindeutigen ID zu entfernen. ([Firefox-Bug 1826193](https://bugzil.la/1826193))
  - [network.continueWithAuth](https://w3c.github.io/webdriver-bidi/#command-network-continueWithAuth) ermöglicht es, Anfragen, die in der `AuthRequired`-Phase abgefangen wurden, fortzusetzen. Mit dem "action"-Argument können Clients entweder "cancel", "provideCredentials" mit Benutzername und Passwort wählen oder auf "default" zurückfallen, um den Browser die Authentifizierungsaufforderung anzeigen zu lassen.([Firefox-Bug 1826196](https://bugzil.la/1826196))
  - [network.failRequest](https://w3c.github.io/webdriver-bidi/#command-network-failRequest) erlaubt es, Anfragen abzubrechen, die in den Phasen `BeforeRequestSent` oder `ResponseStarted` abgefangen wurden.([Firefox-Bug 1853883](https://bugzil.la/1853883))
  - [network.continueRequest](https://w3c.github.io/webdriver-bidi/#command-network-continueRequest), [network.continueResponse](https://w3c.github.io/webdriver-bidi/#command-network-continueResponse) und [network.provideResponse](https://w3c.github.io/webdriver-bidi/#command-network-provideResponse) sind ebenfalls verfügbar, unterstützen derzeit aber nur das "request"-Argument und ermöglichen es lediglich, eine blockierte Anfrage fortzusetzen. In zukünftigen Versionen werden zusätzliche Argumente die Modifikation von Anfragen und Antworten erlauben. ([Firefox-Bug 1874206](https://bugzil.la/1874206) und [Firefox-Bug 1853882](https://bugzil.la/1853882))
- Mehrere Befehle zu "Benutzerkontexten" implementiert, die als [Container](https://support.mozilla.org/en-US/kb/how-use-firefox-containers) in Firefox implementiert sind:
  - [browser.createUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-createUserContext) erstellt einen neuen Benutzerkontext und gibt die eindeutige ID des neuen Benutzerkontexts zurück. ([Firefox-Bug 1870848](https://bugzil.la/1870848))
  - [browser.removeUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-removeUserContext) kann verwendet werden, um jeden nicht standardmäßigen Benutzerkontext zu entfernen, indem seine eindeutige ID angegeben wird. ([Firefox-Bug 1870849](https://bugzil.la/1870849))
  - [browser.getUserContexts](https://w3c.github.io/webdriver-bidi/#command-browser-getUserContexts) ermöglicht es Clients, die Liste aller verfügbaren Benutzerkontexte, einschließlich des Standard-Benutzerkontexts, abzurufen. ([Firefox-Bug 1870847](https://bugzil.la/1870847))
- Unterstützung für das "userContext"-Argument zum [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)-Befehl hinzugefügt, was die Zuordnung eines neuen Browsing-Kontexts (Tab oder Fenster) zu einem bestimmten Benutzerkontext (Firefox-Container) ermöglicht. ([Firefox-Bug 1874918](https://bugzil.la/1874918))
- Den [browsingContext.Info](https://w3c.github.io/webdriver-bidi/#type-browsingContext-Info)-Typ aktualisiert, um das "userContext"-Feld einzuschließen, das die eindeutige ID des Benutzerkontexts ist, der das Tab für diesen Browsing-Kontext besitzt. ([Firefox-Bug 1874920](https://bugzil.la/1874920))
- Unterstützung für das "contexts"-Argument zum [script.addPreloadScript](https://w3c.github.io/webdriver-bidi/#command-script-addPreloadScript)-Befehl hinzugefügt, was es Clients erlaubt, Vorladeskripte nur zu spezifischen Browsing-Kontextbäumen (Tabs) hinzuzufügen, indem ihre Top-Level-Browsing-Kontexte angegeben werden. ([Firefox-Bug 1858458](https://bugzil.la/1858458))
- Ein Fehler behoben, bei dem [browsingContext.close](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close) den letzten Tab eines Fensters nicht schließen konnte. ([Firefox-Bug 1873948](https://bugzil.la/1873948))

#### Marionette

- Ein Problem mit [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) behoben, das den Slot-Wert eines Web-Components ignorierte, wenn kein benutzerdefinierter Text angegeben wurde. ([Firefox-Bug 1865381](https://bugzil.la/1865381))

## Änderungen für Add-on-Entwickler

- Fügt das {{WebExtAPIRef("runtime.onPerformanceWarning")}}-Ereignis hinzu, das Erweiterungen Informationen liefert, wenn der Browser feststellt, dass die Erweiterung ein Laufzeit-Performanceproblem wie ein langsam laufendes Inhalts-Skript aufweist. ([Firefox-Bug 1861445](https://bugzil.la/1861445)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 124 enthalten, jedoch standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie nach dem entsprechenden Einstellungseintrag auf der `about:config`-Seite und setzen Sie ihn auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Erweiterbarer `SharedArrayBuffer`:** `javascript.options.experimental.sharedarraybuffer_growable`.

  Der {{jsxref("SharedArrayBuffer")}} kann jetzt mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}} erweitert werden.
  Die maximal erlaubte Größe des Puffers wird mit dem `options.maxByteLength`-Parameter des [`SharedArrayBuffer()`-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
  Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer erweiterbar ist und seine maximal erlaubte Größe.
  ([Firefox-Bug 1842773](https://bugzil.la/1842773).)

- **Größenveränderbarer `ArrayBuffer`:** `javascript.options.experimental.arraybuffer_resizable`.

  Der {{jsxref("ArrayBuffer")}} kann jetzt mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}} in der Größe verändert werden.
  Die maximal erlaubte Größe des Puffers wird mit dem `options.maxByteLength`-Parameter des [`ArrayBuffer()`-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
  Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer in der Größe veränderbar ist und seine maximal erlaubte Größe.
  ([Firefox-Bug 1842773](https://bugzil.la/1842773).)
