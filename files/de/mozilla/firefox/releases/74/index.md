---
title: Firefox 74 für Entwickler
slug: Mozilla/Firefox/Releases/74
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 74, die Entwickler betreffen. Firefox 74 wurde am 10. März 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Webkonsole

- Das dritte Argument (Ergebnistyp) des `$x()` [Webkonsolen-Helfers](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html) akzeptiert nun einfache Zeichenfolgenwerte sowie [`XPathResult`-Konstanten](/de/docs/Web/API/XPathResult#constants) ([Bug 1602591](https://bugzil.la/1602591)).
- Neu unterstützter optionaler Verkettungsoperator "?." der auch mit der Autovervollständigung der Konsole verwendet werden kann ([Bug 1594009](https://bugzil.la/1594009)).
- Der Debugger kann jetzt [verschachtelte Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) inspizieren und debuggen ([Bug 1590766](https://bugzil.la/1590766)).

### HTML

_Keine Änderungen._

### CSS

- [`text-underline-position`](/de/docs/Web/CSS/text-underline-position) ist nun standardmäßig aktiviert ([Bug 1606997](https://bugzil.la/1606997)).
- Die Eigenschaften [`text-underline-offset`](/de/docs/Web/CSS/text-underline-offset) und [`text-decoration-thickness`](/de/docs/Web/CSS/text-decoration-thickness) akzeptieren nun Prozentwerte ([Bug 1607534](https://bugzil.la/1607534)).
- Der `auto`-Wert der {{cssxref("outline-style")}}-Eigenschaft wurde standardmäßig aktiviert ([Firefox Bug 1031664](https://bugzil.la/1031664)).

#### Entfernungen

- Die `-moz-` präfixierten Eigenschaften für das [Mehrspalten-Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout) wurden entfernt ([Firefox Bug 1308636](https://bugzil.la/1308636)).

### SVG

_Keine Änderungen._

### JavaScript

- Der [optionale Verkettungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) wurde implementiert ([Firefox Bug 1566143](https://bugzil.la/1566143)).
- Wenn eine JavaScript-URL (`javascript:`) ausgewertet wird und das Ergebnis eine Zeichenkette ist, wird diese Zeichenkette geparst, um ein HTML-Dokument zu erstellen, das dann präsentiert wird. Bisher war die URL dieses Dokuments (wie beispielsweise durch die [`document.location`](/de/docs/Web/API/Document/location) Eigenschaft berichtet) die ursprüngliche `javascript:` URL; es ist jetzt korrekt die URL des Dokuments, in dem die `javascript:` URL ausgewertet wurde ([Firefox Bug 836567](https://bugzil.la/836567)).

#### Entfernungen

- Die Methode `Object.toSource()` und die globale Funktion `uneval()` sind nicht mehr für die Verwendung durch Webinhalte oder Erweiterungen verfügbar ([Bug 1565170](https://bugzil.la/1565170)).

### APIs

#### DOM

- Die Methode {{domxref("IDBTransaction.commit()")}} wurde implementiert ([Firefox Bug 1497007](https://bugzil.la/1497007)).

#### DOM-Ereignisse

- Firefox 74 unterstützt nun das Ereignis {{domxref("WorkerGlobalScope.languagechange_event", "languagechange_event")}} und die dazugehörige Event-Handler-Eigenschaft `onlanguagechange`, die ausgelöst wird, wenn der Benutzer seine bevorzugte Sprache ändert ([Firefox Bug 1154779](https://bugzil.la/1154779)). Dies wurde zuvor in unserer [Kompatibilitätsdatenbank](https://github.com/mdn/browser-compat-data) als ab Firefox 3.5 unterstützt aufgeführt, was ein Fehler war.

#### Canvas und WebGL

- Die Schnittstelle {{domxref("TextMetrics")}} wurde erweitert, um vier weitere Eigenschaften zu enthalten, die die tatsächliche Begrenzungsbox messen — [`actualBoundingBoxLeft`](/de/docs/Web/API/TextMetrics/actualBoundingBoxLeft), [`actualBoundingBoxRight`](/de/docs/Web/API/TextMetrics/actualBoundingBoxRight), [`actualBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/actualBoundingBoxAscent), und [`actualBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/actualBoundingBoxDescent). Textmetriken können mit der Methode {{domxref("CanvasRenderingContext2D.measureText()")}} abgerufen werden ([Firefox Bug 1102584](https://bugzil.la/1102584)).

#### Entfernungen

- Die nicht standardisierte Methode `IDBDatabase.mozCreateFileHandle()` wurde entfernt, zugunsten der (ebenfalls nicht standardisierten) Methode `IDBDatabase.createMutableFile()` ([Firefox Bug 1024312](https://bugzil.la/1024312)).
- Die nicht standardisierte Methode `IDBMutableFile.getFile()` wurde entfernt ([Firefox Bug 1607791](https://bugzil.la/1607791)).
- Die nicht standardisierte Methode {{domxref("HTMLCanvasElement")}} `mozGetAsFile()` wurde entfernt, nachdem sie vor mehreren Jahren als veraltet erklärt wurde ([Firefox Bug 1588980](https://bugzil.la/1588980)).
- Die Eigenschaft {{domxref("FetchEvent")}} {{domxref("FetchEvent.isReload", "isReload")}} wurde sowohl aus Firefox als auch aus der Spezifikation entfernt ([Firefox Bug 1264175](https://bugzil.la/1264175)).

### HTTP

- Der Header [`Cross-Origin-Resource-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy) ist jetzt standardmäßig aktiviert ([Bug 1602363](https://bugzil.la/1602363)).

### Sicherheit

- Unterstützung für TLS 1.0 und 1.1 wurde aus Firefox entfernt; Sie müssen sicherstellen, dass Ihr Webserver TLS 1.2 oder 1.3 unterstützt. Von nun an wird Firefox einen [Fehler bei der sicheren Verbindung](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) anzeigen, wenn er versucht, eine Verbindung zu Servern mit älteren TLS-Versionen herzustellen ([Firefox Bug 1606734](https://bugzil.la/1606734)).
- Ab Firefox 74, wenn eine Seite die Erlaubnis zum Zugriff auf eine Ressource an eingebettete Inhalte in einem {{HTMLElement("iframe")}} mit dem [`allow`](/de/docs/Web/HTML/Element/iframe#allow)-Attribut delegiert und die eingebettete Seite die Erlaubnis zur Nutzung dieser Ressource anfordert, fordert die übergeordnete Seite den Benutzer auf, die Ressource zu verwenden und sie mit der eingebetteten Domain zu teilen, anstatt dass sowohl die äußere als auch die innere Seite den Benutzer um Erlaubnis bitten. Wenn die äußere Seite nicht die vom `allow`-Attribut angeforderte Erlaubnis hat, wird dem `<iframe>` der Zugriff sofort ohne Aufforderung verweigert [Firefox Bug 1483631](https://bugzil.la/1483631).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- `WebDriver:Print` wurde hinzugefügt, um die aktuelle Seite als PDF-Dokument zu drucken ([Firefox Bug 1604506](https://bugzil.la/1604506)).
- `Webdriver:TakeScreenshot` erfasst jetzt immer den obersten Browsing-Kontext und nicht den aktuell ausgewählten Browsing-Kontext, wenn kein zu erfassendes Element angegeben wurde ([Firefox Bug 1398087](https://bugzil.la/1398087), [Firefox Bug 1606794](https://bugzil.la/1606794)).
- Die Verwendung des Argumentes `full` in `Webdriver:TakeScreenshot` führt dazu, dass die gesamte Seite erfasst wird ([Firefox Bug 1571424](https://bugzil.la/1571424)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Tastenkombinationen können jetzt in {{WebExtAPIRef("Commands.update")}} zugewiesen werden, indem ein leerer Wert für `shortcut` übergeben wird [Firefox Bug 1475043](https://bugzil.la/1475043).
- `urlclassification`s werden jetzt als Teil der `details` in jedem Ereignis von {{WebExtAPIRef("webrequest")}} zurückgegeben und liefern Informationen darüber, ob eine Anfrage als Fingerabdruck oder Tracking klassifiziert ist [Firefox Bug 1589494](https://bugzil.la/1589494).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks-Blogpost: [Sicherheit bedeutet mehr mit Firefox 74](https://hacks.mozilla.org/2020/03/security-means-more-with-firefox-74-2/)

## Ältere Versionen

{{Firefox_for_developers}}
