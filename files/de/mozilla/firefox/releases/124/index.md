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

Keine nennenswerten Änderungen.

### CSS

- Die Eigenschaft {{cssxref("text-wrap")}} wurde nun in eine Kurzform umgewandelt und deckt die einzelnen Eigenschaften {{cssxref("text-wrap-mode")}} und {{cssxref("text-wrap-style")}} ab. ([Firefox-Bug 1758391](https://bugzil.la/1758391)).

### JavaScript

Keine nennenswerten Änderungen.

### SVG

- Die CSS-Pseudoelemente {{cssxref("::first-letter")}} und {{cssxref("::first-line")}} können nun auf das {{SVGElement("text")}} SVG-Element angewendet werden. Dies ermöglicht es Ihnen, z. B. den Füller, die Kontur oder die Schriftart des ersten Buchstabens/der ersten Zeile eines `<text>`-Elements mit CSS zu ändern. ([Firefox-Bug 1302722](https://bugzil.la/1302722)).

### APIs

- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) wird nun unterstützt, was es ermöglicht, ein zusammengesetztes Signal zu erstellen, das verwendet werden kann, um eine Operation von mehreren Signalquellen abzubrechen. ([Firefox-Bug 1830781](https://bugzil.la/1830781)).
- Der [`WebSocket()`-Konstruktor](/de/docs/Web/API/WebSocket/WebSocket#url) erlaubt nun HTTPS-, HTTP- und relative URLs. Diese sind oft ergonomischer als die Verwendung von WS- und WSS-URLs ([Firefox-Bug 1797449](https://bugzil.la/1797449)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies)-Befehl wurde implementiert, der es Benutzern ermöglicht, Cookies abzurufen. Dieser Befehl akzeptiert zwei optionale Argumente. Clients können das `filter`-Argument angeben, um nur solche Cookies zurückzugeben, die bestimmten Kriterien entsprechen. Das `partition`-Argument kann verwendet werden, um den Partitionierungsschlüssel zu erstellen und Cookies [der entsprechenden Partition](/de/docs/Web/Privacy/State_Partitioning) abzurufen. ([Firefox-Bug 1854580](https://bugzil.la/1854580))
- Der [storage.setCookie](https://w3c.github.io/webdriver-bidi/#command-storage-setCookie)-Befehl wurde implementiert, der ein neues Cookie erstellt. Benutzer können Informationen über das Cookie im `cookie`-Parameter bereitstellen und optional einen `partition`-Parameter, um den Partitionierungsschlüssel der Partition zu erstellen, die das Cookie besitzen soll. ([Firefox-Bug 1854582](https://bugzil.la/1854582))
- Verschiedene Befehle zum Abfangen von Anfragen wurden implementiert:
  - [network.addIntercept](https://w3c.github.io/webdriver-bidi/#command-network-addIntercept), der es Benutzern ermöglicht, URL-Muster zu definieren, die verwendet werden, um Netzwerk-Anfragen während verschiedener Phasen des Lebenszyklus eines Netzwerkereignisses abzufangen. Dieser Befehl gibt die eindeutige ID zurück, die für das erstellte Netzwerk-Intercept erzeugt wurde. ([Firefox-Bug 1826192](https://bugzil.la/1826192))
  - [network.removeIntercept](https://w3c.github.io/webdriver-bidi/#command-network-removeIntercept) ermöglicht es, Intercepts basierend auf ihrer eindeutigen ID zu entfernen. ([Firefox-Bug 1826193](https://bugzil.la/1826193))
  - [network.continueWithAuth](https://w3c.github.io/webdriver-bidi/#command-network-continueWithAuth) ermöglicht es, Anfragen fortzusetzen, die in der `AuthRequired`-Phase abgefangen wurden. Mit dem "action"-Argument können Clients entweder "cancel" (abbrechen), "provideCredentials" (mit Benutzername und Passwort) oder "default" verwenden, um den Browser die Authentifizierungsaufforderung anzeigen zu lassen. ([Firefox-Bug 1826196](https://bugzil.la/1826196))
  - [network.failRequest](https://w3c.github.io/webdriver-bidi/#command-network-failRequest) ermöglicht es, Anfragen in den Phasen `BeforeRequestSent` oder `ResponseStarted` abzubrechen. ([Firefox-Bug 1853883](https://bugzil.la/1853883))
  - [network.continueRequest](https://w3c.github.io/webdriver-bidi/#command-network-continueRequest), [network.continueResponse](https://w3c.github.io/webdriver-bidi/#command-network-continueResponse) und [network.provideResponse](https://w3c.github.io/webdriver-bidi/#command-network-provideResponse) sind ebenfalls verfügbar, jedoch unterstützen sie derzeit nur das "request"-Argument und erlauben nur das Fortsetzen einer blockierten Anfrage. In zukünftigen Versionen werden zusätzliche Argumente es ermöglichen, die Anfrage und Antwort zu modifizieren. ([Firefox-Bug 1874206](https://bugzil.la/1874206) und [Firefox-Bug 1853882](https://bugzil.la/1853882))
- Diverse Befehle rund um "user contexts", in Firefox als [Containers](https://support.mozilla.org/en-US/kb/how-use-firefox-containers) implementiert, wurden eingeführt:
  - [browser.createUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-createUserContext) erstellt einen neuen User Context und gibt die eindeutige ID des neuen User Contexts zurück. ([Firefox-Bug 1870848](https://bugzil.la/1870848))
  - [browser.removeUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-removeUserContext) kann verwendet werden, um jeden nicht-Standard-User Context durch Angabe seiner eindeutigen ID zu entfernen. ([Firefox-Bug 1870849](https://bugzil.la/1870849))
  - [browser.getUserContexts](https://w3c.github.io/webdriver-bidi/#command-browser-getUserContexts) ermöglicht es Clients, die Liste aller verfügbaren Benutzerkontexte, einschließlich des Standard-Benutzerkontexts, abzurufen. ([Firefox-Bug 1870847](https://bugzil.la/1870847))
- Unterstützung für das "userContext"-Argument wurde zum [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)-Befehl hinzugefügt, das es erlaubt, einen neuen Browsing-Kontext (Tab oder Fenster) einem spezifischen User Context (Firefox-Container) zuzuweisen. ([Firefox-Bug 1874918](https://bugzil.la/1874918))
- Der [browsingContext.Info](https://w3c.github.io/webdriver-bidi/#type-browsingContext-Info)-Typ wurde aktualisiert, um das "userContext"-Feld zu beinhalten, welches die eindeutige ID des User Contexts ist, dem der Tab für diesen Browsing-Kontext gehört. ([Firefox-Bug 1874920](https://bugzil.la/1874920))
- Unterstützung für das "contexts"-Argument wurde zum [script.addPreloadScript](https://w3c.github.io/webdriver-bidi/#command-script-addPreloadScript)-Befehl hinzugefügt, was es Clients ermöglicht, Preload-Skripte nur zu bestimmten Browsing-Kontext-Bäumen (Tabs) hinzuzufügen, indem deren Top-Level Browsing-Kontext spezifiziert wird. ([Firefox-Bug 1858458](https://bugzil.la/1858458))
- Ein Fehler wurde behoben, bei dem [browsingContext.close](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close) den letzten Tab eines Fensters nicht schließen konnte. ([Firefox-Bug 1873948](https://bugzil.la/1873948))

#### Marionette

- Ein Problem mit [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) wurde behoben, das den Slot-Wert einer Webkomponente ignorierte, wenn kein benutzerdefinierter Text angegeben wurde. ([Firefox-Bug 1865381](https://bugzil.la/1865381))

## Änderungen für Add-on-Entwickler

- Fügt das {{WebExtAPIRef("runtime.onPerformanceWarning")}}-Ereignis hinzu, das Erweiterungen ermöglicht, Informationen zu erhalten, wenn der Browser erkennt, dass die Erweiterung ein Laufzeit-Leistungsproblem wie ein langsam laufendes Inhaltsskript hat ([Firefox-Bug 1861445](https://bugzil.la/1861445)).

## Experimentelle Web-Features

Diese Funktionen sind neu eingeführt in Firefox 124, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere derartige Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Wachsender `SharedArrayBuffer`:** `javascript.options.experimental.sharedarraybuffer_growable`.

  Der {{jsxref("SharedArrayBuffer")}} ist jetzt mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}} wachsend.
  Die maximal erlaubte Größe des Puffer wird mit dem Parameter `options.maxByteLength` des [`SharedArrayBuffer()`-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
  Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer wachsen kann und seine maximal erlaubte Größe.
  ([Firefox-Bug 1842773](https://bugzil.la/1842773).)

- **Resizebarer `ArrayBuffer`:** `javascript.options.experimental.arraybuffer_resizable`.

  Der {{jsxref("ArrayBuffer")}} kann jetzt mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}} resizebar gemacht werden.
  Die maximal erlaubte Größe des Puffer wird mit dem Parameter `options.maxByteLength` des [`ArrayBuffer()`-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
  Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer resizebar ist und seine maximal erlaubte Größe.
  ([Firefox-Bug 1842773](https://bugzil.la/1842773).)

## Ältere Versionen

{{Firefox_for_developers}}
