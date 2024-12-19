---
title: Firefox 74 für Entwickler
slug: Mozilla/Firefox/Releases/74
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 74, die Entwickler betreffen werden. Firefox 74 wurde am 10. März 2020 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

#### Webkonsole

- Das dritte Argument des `$x()` [Webkonsolen-Helfers](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html) (Ergebnistyp) akzeptiert nun einfache Zeichenfolgenwerte sowie [`XPathResult`-Konstanten](/de/docs/Web/API/XPathResult#constants) ([Fehler 1602591](https://bugzil.la/1602591)).
- Neu eingeführte Unterstützung für den optionalen Verkettungsoperator "?.", der auch mit der Autovervollständigung der Konsole verwendet werden kann ([Fehler 1594009](https://bugzil.la/1594009)).
- Der Debugger kann nun [verschachtelte Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) inspizieren und debuggen ([Fehler 1590766](https://bugzil.la/1590766)).

### HTML

_Keine Änderungen._

### CSS

- [`text-underline-position`](/de/docs/Web/CSS/text-underline-position) ist nun standardmäßig aktiviert ([Fehler 1606997](https://bugzil.la/1606997)).
- Die Eigenschaften [`text-underline-offset`](/de/docs/Web/CSS/text-underline-offset) und [`text-decoration-thickness`](/de/docs/Web/CSS/text-decoration-thickness) akzeptieren nun Prozentwerte ([Fehler 1607534](https://bugzil.la/1607534)).
- Der `auto`-Wert der {{cssxref("outline-style")}}-Eigenschaft wurde standardmäßig aktiviert ([Firefox-Fehler 1031664](https://bugzil.la/1031664)).

#### Entfernungen

- Die `-moz-`-präfixierten [Mehrspaltigen Layout]-Eigenschaften wurden entfernt ([Firefox-Fehler 1308636](https://bugzil.la/1308636)).

### SVG

_Keine Änderungen._

### JavaScript

- Der [Optionale Verkettungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) wurde implementiert ([Firefox-Fehler 1566143](https://bugzil.la/1566143)).
- Wenn eine JavaScript-URL (`javascript:`) ausgewertet wird und das Ergebnis ein String ist, wird dieser String geparst, um ein HTML-Dokument zu erstellen, das dann angezeigt wird. Zuvor war die URL dieses Dokuments (wie durch die [`document.location`](/de/docs/Web/API/Document/location)-Eigenschaft beispielsweise gemeldet) die ursprüngliche `javascript:`-URL; es ist jetzt korrekt die URL des Dokuments, in dem die `javascript:`-URL ausgewertet wurde ([Firefox-Fehler 836567](https://bugzil.la/836567)).

#### Entfernungen

- Die Methode `Object.toSource()` und die globale Funktion `uneval()` sind für den Gebrauch durch Webinhalte oder Erweiterungen nicht mehr verfügbar ([Fehler 1565170](https://bugzil.la/1565170)).

### APIs

#### DOM

- Die Methode [`IDBTransaction.commit()`](/de/docs/Web/API/IDBTransaction/commit) wurde implementiert ([Firefox-Fehler 1497007](https://bugzil.la/1497007)).

#### DOM-Ereignisse

- Firefox 74 unterstützt nun das [`languagechange_event`](/de/docs/Web/API/WorkerGlobalScope/languagechange_event) und die zugehörige Ereignishandlereigenschaft `onlanguagechange`, die ausgelöst wird, wenn der Benutzer seine bevorzugte Sprache ändert ([Firefox-Fehler 1154779](https://bugzil.la/1154779)). Dies wurde zuvor fälschlicherweise in unserer [Kompatibilitätsdatenbank](https://github.com/mdn/browser-compat-data) als ab Firefox 3.5 unterstützt gelistet.

#### Canvas und WebGL

- Die [`TextMetrics`]-Schnittstelle (/de/docs/Web/API/TextMetrics) wurde erweitert und enthält nun vier weitere Eigenschaften, die die tatsächliche Begrenzungsrahmen messen — [`actualBoundingBoxLeft`](/de/docs/Web/API/TextMetrics/actualBoundingBoxLeft), [`actualBoundingBoxRight`](/de/docs/Web/API/TextMetrics/actualBoundingBoxRight), [`actualBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/actualBoundingBoxAscent) und [`actualBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/actualBoundingBoxDescent). Textmetriken können mit der [`CanvasRenderingContext2D.measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText)-Methode abgerufen werden ([Firefox-Fehler 1102584](https://bugzil.la/1102584)).

#### Entfernungen

- Die nicht standardisierte Methode `IDBDatabase.mozCreateFileHandle()` wurde zugunsten der (ebenfalls nicht standardisierten) Methode `IDBDatabase.createMutableFile()` entfernt ([Firefox-Fehler 1024312](https://bugzil.la/1024312)).
- Die nicht standardisierte Methode `IDBMutableFile.getFile()` wurde entfernt ([Firefox-Fehler 1607791](https://bugzil.la/1607791)).
- Die nicht standardisierte Methode `mozGetAsFile()` des [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) wurde entfernt, nachdem sie vor mehreren Jahren abgelehnt wurde ([Firefox-Fehler 1588980](https://bugzil.la/1588980)).
- Die [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Eigenschaft [`isReload`](/de/docs/Web/API/FetchEvent/isReload) wurde entfernt, sowohl aus Firefox als auch aus der Spezifikation ([Firefox-Fehler 1264175](https://bugzil.la/1264175)).

### HTTP

- Der [`Cross-Origin-Resource-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy)-Header ist nun standardmäßig aktiviert ([Fehler 1602363](https://bugzil.la/1602363)).

### Sicherheit

- TLS 1.0 und 1.1-Unterstützung wurde aus Firefox entfernt; Sie müssen sicherstellen, dass Ihr Webserver TLS 1.2 oder 1.3 unterstützt. Ab jetzt wird Firefox einen [Secure Connection Failed](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect)-Fehler zurückgeben, wenn versucht wird, eine Verbindung zu Servern mit den älteren TLS-Versionen herzustellen ([Firefox-Fehler 1606734](https://bugzil.la/1606734)).
- Ab Firefox 74, wenn eine Website die Erlaubnis zur Nutzung einer Ressource an eingebettete Inhalte in einem {{HTMLElement("iframe")}} mit dem [`allow`](/de/docs/Web/HTML/Element/iframe#allow)-Attribut delegiert und die eingebettete Seite die Berechtigung zur Nutzung dieser Ressource anfordert, fordert die übergeordnete Seite den Benutzer auf, die Erlaubnis zur Nutzung der Ressource zu geben und sie mit der eingebetteten Domain zu teilen, anstatt dass sowohl die äußeren als auch die inneren Seiten den Benutzer um Erlaubnis bitten. Wenn die äußere Seite nicht die durch das `allow`-Attribut angeforderte Erlaubnis hat, wird dem `<iframe>` der Zugriff ohne Rückfrage verweigert ([Firefox-Fehler 1483631](https://bugzil.la/1483631)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Hinzugefügt `WebDriver:Print`, um die aktuelle Seite als PDF-Dokument zu drucken ([Firefox-Fehler 1604506](https://bugzil.la/1604506)).
- `Webdriver:TakeScreenshot` erfasst jetzt immer den Kontext des obersten Ebenen-Browsers und nicht den aktuell ausgewählten Browserkontext, wenn kein zu erfassendes Element angegeben wurde ([Firefox-Fehler 1398087](https://bugzil.la/1398087), [Firefox-Fehler 1606794](https://bugzil.la/1606794)).
- Die Verwendung des `full`-Arguments bei `Webdriver:TakeScreenshot` bewirkt, dass die komplette Seite erfasst wird ([Firefox-Fehler 1571424](https://bugzil.la/1571424)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Shortcut-Tasten können jetzt in {{WebExtAPIRef("Commands.update")}} durch Übergeben eines leeren `shortcut`-Wertes zugewiesen werden ([Firefox-Fehler 1475043](https://bugzil.la/1475043)).
- `urlClassification`s werden jetzt als Teil der `details` in jedem Ereignis von {{WebExtAPIRef("webRequest")}} zurückgegeben, um Informationen darüber zu liefern, ob eine Anfrage als Fingerprinting oder Tracking klassifiziert wird ([Firefox-Fehler 1589494](https://bugzil.la/1589494)).

### Manifeständerungen

_Keine Änderungen._

## Siehe auch

- Hacks-Blogbeitrag: [Security means more with Firefox 74](https://hacks.mozilla.org/2020/03/security-means-more-with-firefox-74-2/)

## Ältere Versionen

{{Firefox_for_developers}}
