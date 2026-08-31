---
title: Firefox 124 Versionshinweise für Entwickler
short-title: Firefox 124
slug: Mozilla/Firefox/Releases/124
l10n:
  sourceCommit: 61f27416f7cfa79bd102042eeb3e44fe629d9c95
---

Dieser Artikel bietet Informationen über die Veränderungen in Firefox 124, die Entwickler betreffen. Firefox 124 wurde am [19. März 2024](https://whattrainisitnow.com/release/?version=124) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("text-wrap")}}-Eigenschaft wurde nun in eine Kurzform umgewandelt und umfasst die Bestandteileigenschaften {{cssxref("text-wrap-mode")}} und {{cssxref("text-wrap-style")}}. ([Firefox Bug 1758391](https://bugzil.la/1758391)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die CSS-Pseudoelemente {{cssxref("::first-letter")}} und {{cssxref("::first-line")}} können nun auf das {{SVGElement("text")}} SVG-Element angewendet werden. Dies ermöglicht es Ihnen, z.B. mit CSS die Füllung, den Strich oder die Schriftart des ersten Buchstabens/der ersten Zeile eines `<text>`-Elements zu ändern. ([Firefox Bug 1302722](https://bugzil.la/1302722)).

### APIs

- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) wird jetzt unterstützt, sodass ein zusammengesetztes Signal erstellt werden kann, das zum Abbrechen eines Vorgangs aus mehreren Signalquellen verwendet werden kann. ([Firefox Bug 1830781](https://bugzil.la/1830781)).
- Der [`WebSocket()` Konstruktor](/de/docs/Web/API/WebSocket/WebSocket#url) erlaubt nun HTTPS, HTTP und relative URLs, die oft ergonomischer sind als die Verwendung von WS und WSS URLs ([Firefox Bug 1797449](https://bugzil.la/1797449)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implementiert den [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies)-Befehl, der es Benutzern ermöglicht, Cookies abzurufen. Dieser Befehl akzeptiert zwei optionale Argumente. Clients können das `filter`-Argument angeben, um nur Cookies zurückzugeben, die bestimmten Kriterien entsprechen. Das `partition`-Argument kann verwendet werden, um den Partitionsschlüssel zu erstellen und Cookies [aus der entsprechenden Partition abzurufen](/de/docs/Web/Privacy/Guides/State_Partitioning). ([Firefox Bug 1854580](https://bugzil.la/1854580))
- Implementiert den [storage.setCookie](https://w3c.github.io/webdriver-bidi/#command-storage-setCookie)-Befehl, der ein neues Cookie erstellt. Benutzer können Informationen über das Cookie im `cookie`-Parameter bereitstellen und optional einen `partition`-Parameter, um den Partitionsschlüssel der Partition zu erstellen, der das Cookie gehören soll. ([Firefox Bug 1854582](https://bugzil.la/1854582))
- Implementiert verschiedene Befehle zum Abfangen von Anfragen:
  - [network.addIntercept](https://w3c.github.io/webdriver-bidi/#command-network-addIntercept) ermöglicht es Benutzern, URL-Muster zu definieren, die während verschiedener Phasen des Lebenszyklus eines Netzereignisses verwendet werden, um Netzwerkaufforderungen abzufangen. Dieser Befehl gibt die eindeutige ID zurück, die für das erstellte Netzabfangen erzeugt wurde. ([Firefox Bug 1826192](https://bugzil.la/1826192))
  - [network.removeIntercept](https://w3c.github.io/webdriver-bidi/#command-network-removeIntercept) ermöglicht es Ihnen, Abfänge basierend auf ihrer eindeutigen ID zu entfernen. ([Firefox Bug 1826193](https://bugzil.la/1826193))
  - [network.continueWithAuth](https://w3c.github.io/webdriver-bidi/#command-network-continueWithAuth) ermöglicht es Ihnen, abgefangene Anfragen in der `AuthRequired`-Phase fortzusetzen. Mithilfe des "action"-Arguments können Clients entweder "cancel", "provideCredentials" mit Benutzername und Passwort bereitstellen oder auf "default" zurückfallen, um den Browser die Authentifizierungsaufforderung anzeigen zu lassen. ([Firefox Bug 1826196](https://bugzil.la/1826196))
  - [network.failRequest](https://w3c.github.io/webdriver-bidi/#command-network-failRequest) ermöglicht es Ihnen, Anfragen abzubrechen, die in den Phasen `BeforeRequestSent` oder `ResponseStarted` abgefangen wurden. ([Firefox Bug 1853883](https://bugzil.la/1853883))
  - [network.continueRequest](https://w3c.github.io/webdriver-bidi/#command-network-continueRequest), [network.continueResponse](https://w3c.github.io/webdriver-bidi/#command-network-continueResponse) und [network.provideResponse](https://w3c.github.io/webdriver-bidi/#command-network-provideResponse) sind ebenfalls verfügbar, unterstützen momentan jedoch nur das "request"-Argument und ermöglichen es Ihnen nur, eine blockierte Anfrage fortzusetzen. In zukünftigen Versionen werden zusätzliche Argumente es ermöglichen, die Anfrage und Antwort zu modifizieren. ([Firefox Bug 1874206](https://bugzil.la/1874206) und [Firefox Bug 1853882](https://bugzil.la/1853882))
- Implementiert mehrere Befehle rund um "Benutzerkontexte", implementiert als [Container](https://support.mozilla.org/en-US/kb/how-use-firefox-containers) in Firefox:
  - [browser.createUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-createUserContext) erstellt einen neuen Benutzerkontext und gibt die eindeutige ID des neuen Benutzerkontexts zurück. ([Firefox Bug 1870848](https://bugzil.la/1870848))
  - [browser.removeUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-removeUserContext) kann verwendet werden, um jeden Nicht-Standard-Benutzerkontext zu entfernen, indem dessen eindeutige ID angegeben wird. ([Firefox Bug 1870849](https://bugzil.la/1870849))
  - [browser.getUserContexts](https://w3c.github.io/webdriver-bidi/#command-browser-getUserContexts) ermöglicht es Clients, die Liste aller verfügbaren Benutzerkontexte abzurufen, einschließlich des Standardbenutzerkontexts. ([Firefox Bug 1870847](https://bugzil.la/1870847))
- Unterstützung für das "userContext"-Argument zum [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)-Befehl hinzugefügt, der es Ihnen ermöglicht, einen neuen Browsing-Kontext (Tab oder Fenster) einem bestimmten Benutzerkontext (Firefox-Container) zuzuweisen. ([Firefox Bug 1874918](https://bugzil.la/1874918))
- Der [browsingContext.Info](https://w3c.github.io/webdriver-bidi/#type-browsingContext-Info)-Typ wurde aktualisiert, um das "userContext"-Feld zu enthalten, das die eindeutige ID des Benutzerkontexts ist, dem die Registerkarte für diesen Browsing-Kontext gehört. ([Firefox Bug 1874920](https://bugzil.la/1874920))
- Unterstützung für das "contexts"-Argument zum [script.addPreloadScript](https://w3c.github.io/webdriver-bidi/#command-script-addPreloadScript)-Befehl hinzugefügt, dies ermöglicht es Clients, Vorladeskripte nur zu bestimmten Browsing-Kontextbäumen (Tabs) hinzuzufügen, indem deren oberster Browsing-Kontext angegeben wird. ([Firefox Bug 1858458](https://bugzil.la/1858458))
- Ein Fehler wurde behoben, bei dem [browsingContext.close](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close) nicht in der Lage war, den letzten Tab eines Fensters zu schließen. ([Firefox Bug 1873948](https://bugzil.la/1873948))

#### Marionette

- Ein Problem mit [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) wurde behoben, das den Slot-Wert einer Webkomponente ignorierte, wenn kein benutzerdefinierter Text angegeben ist. ([Firefox Bug 1865381](https://bugzil.la/1865381))

## Änderungen für Add-on-Entwickler

- Fügt das {{WebExtAPIRef("runtime.onPerformanceWarning")}}-Ereignis hinzu, das Erweiterungen ermöglicht, Informationen zu erhalten, wenn der Browser erkennt, dass die Erweiterung ein Laufzeitleistungsproblem wie ein langsam ausgeführtes Inhalts-Skript hat. ([Firefox Bug 1861445](https://bugzil.la/1861445)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 124 verfügbar, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Wachsender `SharedArrayBuffer`:** `javascript.options.experimental.sharedarraybuffer_growable`.

  Der {{jsxref("SharedArrayBuffer")}} kann jetzt mit der {{jsxref("SharedArrayBuffer.prototype.grow()")}}-Methode wachsen.
  Die maximal erlaubte Größe des Puffers wird mit dem `options.maxByteLength`-Parameter an den [`SharedArrayBuffer()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
  Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer wachsen kann und seine maximal erlaubte Größe.
  ([Firefox Bug 1842773](https://bugzil.la/1842773)).

- **Resizable `ArrayBuffer`:** `javascript.options.experimental.arraybuffer_resizable`.

  Der {{jsxref("ArrayBuffer")}} kann jetzt mit der {{jsxref("ArrayBuffer.prototype.resize()")}}-Methode in der Größe geändert werden.
  Die maximal erlaubte Größe des Puffers wird mit dem `options.maxByteLength`-Parameter an den [`ArrayBuffer()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
  Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer in der Größe geändert werden kann, und seine maximal erlaubte Größe.
  ([Firefox Bug 1842773](https://bugzil.la/1842773)).
