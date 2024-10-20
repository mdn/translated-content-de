---
title: Firefox 74 für Entwickler
slug: Mozilla/Firefox/Releases/74
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 74, die Entwickler betreffen werden. Firefox 74 wurde am 10. März 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Webkonsole

- Das dritte Argument (Ergebnistyp) des `$x()` [Webkonsolen-Helfers](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html) akzeptiert jetzt einfache String-Werte sowie [`XPathResult` Konstanten](/de/docs/Web/API/XPathResult#constants) ([Fehler 1602591](https://bugzil.la/1602591)).
- Neu unterstützter optionaler Verkettungsoperator "?." der auch mit der Autovervollständigung der Konsole verwendet werden kann ([Fehler 1594009](https://bugzil.la/1594009)).
- Der Debugger kann nun [verschachtelte Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) inspizieren und debuggen ([Fehler 1590766](https://bugzil.la/1590766)).

### HTML

_Keine Änderungen._

### CSS

- [`text-underline-position`](/de/docs/Web/CSS/text-underline-position) ist jetzt standardmäßig aktiviert ([Fehler 1606997](https://bugzil.la/1606997)).
- Die Eigenschaften [`text-underline-offset`](/de/docs/Web/CSS/text-underline-offset) und [`text-decoration-thickness`](/de/docs/Web/CSS/text-decoration-thickness) akzeptieren jetzt Prozentwerte ([Fehler 1607534](https://bugzil.la/1607534)).
- Der Wert `auto` der {{cssxref("outline-style")}}-Eigenschaft ist nun standardmäßig aktiviert ([Firefox Fehler 1031664](https://bugzil.la/1031664)).

#### Entfernt

- Die mit `-moz-` präfixierten [Mehrspalten-Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)-Eigenschaften wurden entfernt ([Firefox Fehler 1308636](https://bugzil.la/1308636)).

### SVG

_Keine Änderungen._

### JavaScript

- Der [Optionale Verkettungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) wurde implementiert ([Firefox Fehler 1566143](https://bugzil.la/1566143)).
- Wenn eine JavaScript-URL (`javascript:`) ausgewertet wird und das Ergebnis ein String ist, wird dieser String geparst, um ein HTML-Dokument zu erstellen, das dann angezeigt wird. Bisher war die URL dieses Dokuments (wie sie z.B. durch die [`document.location`](/de/docs/Web/API/Document/location) Eigenschaft gemeldet wird) die ursprüngliche `javascript:` URL; jetzt ist es korrekt die URL des Dokuments, in dem die `javascript:` URL ausgewertet wurde ([Firefox Fehler 836567](https://bugzil.la/836567)).

#### Entfernt

- Die `Object.toSource()` Methode und die globale Funktion `uneval()` sind für Web-Inhalte oder Erweiterungen nicht mehr verfügbar ([Fehler 1565170](https://bugzil.la/1565170)).

### APIs

#### DOM

- Die [`IDBTransaction.commit()`](/de/docs/Web/API/IDBTransaction/commit) Methode wurde implementiert ([Firefox Fehler 1497007](https://bugzil.la/1497007)).

#### DOM-Ereignisse

- Firefox 74 unterstützt jetzt das [`languagechange_event`](/de/docs/Web/API/WorkerGlobalScope/languagechange_event) Ereignis und seine zugehörige Ereignishandler-Eigenschaft `onlanguagechange`, die ausgelöst wird, wenn der Benutzer seine bevorzugte Sprache ändert ([Firefox Fehler 1154779](https://bugzil.la/1154779)). Dies wurde zuvor in unserer [Kompatibilitätsdatenbank](https://github.com/mdn/browser-compat-data) als unterstützt ab Firefox 3.5 aufgeführt, was ein Fehler war.

#### Canvas und WebGL

- Die [`TextMetrics`](/de/docs/Web/API/TextMetrics) Schnittstelle wurde um vier weitere Eigenschaften erweitert, die die tatsächliche Begrenzungsbox messen — [`actualBoundingBoxLeft`](/de/docs/Web/API/TextMetrics/actualBoundingBoxLeft), [`actualBoundingBoxRight`](/de/docs/Web/API/TextMetrics/actualBoundingBoxRight), [`actualBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/actualBoundingBoxAscent) und [`actualBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/actualBoundingBoxDescent). Textmetriken können mit der [`CanvasRenderingContext2D.measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText) Methode abgerufen werden ([Firefox Fehler 1102584](https://bugzil.la/1102584)).

#### Entfernt

- Die nicht standardisierte `IDBDatabase.mozCreateFileHandle()` Methode wurde entfernt, zugunsten der (ebenfalls nicht standardisierten) `IDBDatabase.createMutableFile()` Methode ([Firefox Fehler 1024312](https://bugzil.la/1024312)).
- Die nicht standardisierte `IDBMutableFile.getFile()` Methode wurde entfernt ([Firefox Fehler 1607791](https://bugzil.la/1607791)).
- Die nicht standardisierte [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) Methode `mozGetAsFile()` wurde entfernt, nachdem sie vor einigen Jahren veraltet war ([Firefox Fehler 1588980](https://bugzil.la/1588980)).
- Die [`FetchEvent`](/de/docs/Web/API/FetchEvent) Eigenschaft [`isReload`](/de/docs/Web/API/FetchEvent/isReload) wurde sowohl aus Firefox als auch aus der Spezifikation entfernt ([Firefox Fehler 1264175](https://bugzil.la/1264175)).

### HTTP

- Der [`Cross-Origin-Resource-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy) Header ist jetzt standardmäßig aktiviert ([Fehler 1602363](https://bugzil.la/1602363)).

### Sicherheit

- Die Unterstützung für TLS 1.0 und 1.1 wurde aus Firefox entfernt; Sie müssen sicherstellen, dass Ihr Webserver TLS 1.2 oder 1.3 unterstützt. Ab jetzt gibt Firefox einen [Secure Connection Failed](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) Fehler zurück, wenn er eine Verbindung zu Servern mit älteren TLS-Versionen herstellt ([Firefox Fehler 1606734](https://bugzil.la/1606734)).
- Ab Firefox 74, wenn eine Seite die Genehmigung zur Zugriff auf eine Ressource in eingebetteten Inhalten in einem {{HTMLElement("iframe")}} mit dem [`allow`](/de/docs/Web/HTML/Element/iframe#allow) Attribut delegiert, und die eingebettete Seite um Erlaubnis zur Nutzung dieser Ressource bittet, fordert die übergeordnete Seite den Benutzer auf, die Erlaubnis zu erteilen und die Ressource mit der eingebetteten Domain zu teilen, anstatt dass sowohl die äußere als auch die innere Seite den Benutzer um Erlaubnis bitten. Wenn die äußere Seite nicht die vom `allow`-Attribut angeforderte Berechtigung hat, wird der Zugriff des `<iframe>` sofort ohne Benutzereingabe verweigert [Firefox Fehler 1483631](https://bugzil.la/1483631).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- `WebDriver:Print` hinzugefügt, um die aktuelle Seite als PDF-Dokument zu drucken ([Firefox Fehler 1604506](https://bugzil.la/1604506)).
- `Webdriver:TakeScreenshot` erfasst jetzt immer den übergeordneten Browser-Kontext und nicht den derzeit ausgewählten Browser-Kontext, wenn kein zu erfassendes Element angegeben wurde ([Firefox Fehler 1398087](https://bugzil.la/1398087), [Firefox Fehler 1606794](https://bugzil.la/1606794)).
- Die Verwendung des `full`-Arguments von `Webdriver:TakeScreenshot` bewirkt, dass die komplette Seite erfasst wird ([Firefox Fehler 1571424](https://bugzil.la/1571424)).

## Änderungen für Add-On Entwickler

### API-Änderungen

- Tastenkombinationen können nun in {{WebExtAPIRef("Commands.update")}} nicht zugewiesen werden, indem ein leerer Wert von `shortcut` übergeben wird [Firefox Fehler 1475043](https://bugzil.la/1475043).
- `urlClassification`s werden jetzt als Teil der `details` in jedem Ereignis von {{WebExtAPIRef("webRequest")}} zurückgegeben, und bieten Informationen darüber, ob eine Anfrage als Fingerprinting oder Tracking klassifiziert wird [Firefox Fehler 1589494](https://bugzil.la/1589494).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks Blog-Beitrag: [Security means more with Firefox 74](https://hacks.mozilla.org/2020/03/security-means-more-with-firefox-74-2/)

## Ältere Versionen

{{Firefox_for_developers}}
