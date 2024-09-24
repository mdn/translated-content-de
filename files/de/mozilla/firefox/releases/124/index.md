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

- Die Eigenschaft {{cssxref("text-wrap")}} wurde jetzt in eine Kurzform-Eigenschaft umgewandelt und deckt die Bestandteil-Eigenschaften {{cssxref("text-wrap-mode")}} und {{cssxref("text-wrap-style")}} ab. ([Firefox Fehler 1758391](https://bugzil.la/1758391)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die CSS-Pseudoelemente {{cssxref("::first-letter")}} und {{cssxref("::first-line")}} können jetzt auf das {{SVGElement("text")}} SVG-Element angewendet werden. Dies ermöglicht es, beispielsweise die Füllung, den Strich oder die Schrift des ersten Buchstabens/der ersten Zeile eines `<text>`-Elements mit CSS zu ändern. ([Firefox Fehler 1302722](https://bugzil.la/1302722)).

### APIs

- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) wird jetzt unterstützt, sodass ein zusammengesetztes Signal erstellt werden kann, das verwendet werden kann, um einen Vorgang von mehreren Signalquellen aus abzubrechen. ([Firefox Fehler 1830781](https://bugzil.la/1830781)).
- Der [`WebSocket()` Konstruktor](/de/docs/Web/API/WebSocket/WebSocket#url) erlaubt jetzt HTTPS-, HTTP- und relative URLs. Diese sind oft ergonomischer als die Verwendung von WS- und WSS-URLs. ([Firefox Fehler 1797449](https://bugzil.la/1797449)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) Befehl wurde implementiert, mit dem Benutzer Cookies abrufen können. Dieser Befehl akzeptiert zwei optionale Argumente. Clients können das `filter`-Argument verwenden, um nur Cookies zurückzugeben, die bestimmten Kriterien entsprechen. Das `partition`-Argument kann verwendet werden, um den Partition-Key zu erstellen und Cookies abzurufen, die [im Besitz der entsprechenden Partition sind](/de/docs/Web/Privacy/State_Partitioning). ([Firefox Fehler 1854580](https://bugzil.la/1854580))
- Der [storage.setCookie](https://w3c.github.io/webdriver-bidi/#command-storage-setCookie) Befehl wurde implementiert, der ein neues Cookie erstellt. Benutzer können Informationen über das Cookie im `cookie`-Parameter und optional einen `partition`-Parameter bereitstellen, um den Schlüssel der Partition zu erstellen, die das Cookie besitzen soll. ([Firefox Fehler 1854582](https://bugzil.la/1854582))
- Verschiedene Befehle zur Abfang von Anfragen wurden implementiert:
  - [network.addIntercept](https://w3c.github.io/webdriver-bidi/#command-network-addIntercept), der es Benutzern ermöglicht, URL-Muster zu definieren, die verwendet werden, um Netzwerk-Anfragen während verschiedener Phasen eines Netzwerkereignis-Lebenszyklus abzufangen. Dieser Befehl gibt die eindeutige ID zurück, die für den erstellten Netzwerk-Abfang erstellt wurde. ([Firefox Fehler 1826192](https://bugzil.la/1826192))
  - [network.removeIntercept](https://w3c.github.io/webdriver-bidi/#command-network-removeIntercept) ermöglicht das Entfernen von Abfängen basierend auf ihrer eindeutigen ID. ([Firefox Fehler 1826193](https://bugzil.la/1826193))
  - [network.continueWithAuth](https://w3c.github.io/webdriver-bidi/#command-network-continueWithAuth) ermöglicht es, Anfragen, die in der `AuthRequired`-Phase abgefangen wurden, fortzusetzen. Mit dem "action"-Argument können Clients entweder "cancel", "provideCredentials" mit Benutzername und Passwort oder "default" zurückfallen lassen, um dem Browser das Anzeige der Authentifizierungsaufforderung zu erlauben.([Firefox Fehler 1826196](https://bugzil.la/1826196))
  - [network.failRequest](https://w3c.github.io/webdriver-bidi/#command-network-failRequest) ermöglicht es, Anfragen, die in den Phasen `BeforeRequestSent` oder `ResponseStarted` abgefangen wurden, abzubrechen.([Firefox Fehler 1853883](https://bugzil.la/1853883))
  - [network.continueRequest](https://w3c.github.io/webdriver-bidi/#command-network-continueRequest), [network.continueResponse](https://w3c.github.io/webdriver-bidi/#command-network-continueResponse) und [network.provideResponse](https://w3c.github.io/webdriver-bidi/#command-network-provideResponse) sind ebenfalls verfügbar, aber im Moment unterstützen sie nur das "request"-Argument und erlauben es nur, eine blockierte Anfrage fortzusetzen. In zukünftigen Versionen werden zusätzliche Argumente es ermöglichen, die Anfrage und Antwort zu modifizieren. ([Firefox Fehler 1874206](https://bugzil.la/1874206) und [Firefox Fehler 1853882](https://bugzil.la/1853882))
- Mehrere Befehle im Zusammenhang mit "Benutzerkontexten" wurden implementiert, die in Firefox als [Container](https://support.mozilla.org/en-US/kb/how-use-firefox-containers) realisiert werden:
  - [browser.createUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-createUserContext) erstellt einen neuen Benutzerkontext und gibt die eindeutige ID des neuen Benutzerkontextes zurück. ([Firefox Fehler 1870848](https://bugzil.la/1870848))
  - [browser.removeUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-removeUserContext) kann verwendet werden, um nicht standardmäßige Benutzerkontexte zu entfernen, indem ihre eindeutige ID angegeben wird. ([Firefox Fehler 1870849](https://bugzil.la/1870849))
  - [browser.getUserContexts](https://w3c.github.io/webdriver-bidi/#command-browser-getUserContexts) ermöglicht es Clients, die Liste aller verfügbaren Benutzerkontexte inklusive des Standard-Benutzerkontextes abzurufen. ([Firefox Fehler 1870847](https://bugzil.la/1870847))
- Unterstützung für das "userContext"-Argument zum [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create) Befehl wurde hinzugefügt, was es erlaubt, einen neuen Browsing-Kontext (Tab oder Fenster) einem bestimmten Benutzerkontext (Firefox-Container) zuzuweisen. ([Firefox Fehler 1874918](https://bugzil.la/1874918))
- Der Typ [browsingContext.Info](https://w3c.github.io/webdriver-bidi/#type-browsingContext-Info) wurde aktualisiert, um das "userContext"-Feld einzuschließen, das die eindeutige ID des Benutzerkontextes ist, der das Tab für diesen Browsing-Kontext besitzt. ([Firefox Fehler 1874920](https://bugzil.la/1874920))
- Unterstützung für das "contexts"-Argument zum [script.addPreloadScript](https://w3c.github.io/webdriver-bidi/#command-script-addPreloadScript) Befehl wurde hinzugefügt, was es Clients ermöglicht, Preload-Skripte nur auf spezifische Browsing-Kontext-Bäume (Tabs) hinzuzufügen, indem ihr Top-Level-Browsing-Kontext angegeben wird. ([Firefox Fehler 1858458](https://bugzil.la/1858458))
- Ein Fehler wurde behoben, bei dem [browsingContext.close](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close) nicht in der Lage war, den letzten Tab eines Fensters zu schließen. ([Firefox Fehler 1873948](https://bugzil.la/1873948))

#### Marionette

- Ein Problem mit [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) wurde behoben, das den Slot-Wert einer Webkomponente ignorierte, wenn kein individueller Text angegeben ist. ([Firefox Fehler 1865381](https://bugzil.la/1865381))

## Änderungen für Add-on-Entwickler

- Fügt das Ereignis {{WebExtAPIRef("runtime.onPerformanceWarning")}} hinzu, das Erweiterungen ermöglicht, Informationen zu erhalten, wenn der Browser feststellt, dass die Erweiterung ein Laufzeit-Performance-Problem hat, wie beispielsweise ein langsam ausgeführtes Inhaltsskript ([Firefox Fehler 1861445](https://bugzil.la/1861445)).

## Experimentelle Webfeatures

Diese Features sind neu in Firefox 124 implementiert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Erweiterbarer `SharedArrayBuffer`:** `javascript.options.experimental.sharedarraybuffer_growable`.

  Der {{jsxref("SharedArrayBuffer")}} ist jetzt mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}} erweiterbar.
  Die maximal erlaubte Größe des Puffers wird mit dem Parameter `options.maxByteLength` an den [`SharedArrayBuffer()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) übergeben.
  Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer erweiterbar ist und seine maximal erlaubte Größe an. ([Firefox Fehler 1842773](https://bugzil.la/1842773).)

- **Größenveränderbarer `ArrayBuffer`:** `javascript.options.experimental.arraybuffer_resizable`.

  Der {{jsxref("ArrayBuffer")}} kann jetzt mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}} in der Größe verändert werden.
  Die maximal erlaubte Größe des Puffers wird mit dem Parameter `options.maxByteLength` an den [`ArrayBuffer()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) übergeben.
  Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer in der Größe verändert werden kann und seine maximal erlaubte Größe. ([Firefox Fehler 1842773](https://bugzil.la/1842773).)

## Ältere Versionen

{{Firefox_for_developers}}
