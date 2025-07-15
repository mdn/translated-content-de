---
title: Firefox 74 für Entwickler
short-title: Firefox 74
slug: Mozilla/Firefox/Releases/74
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 74, die Entwickler betreffen werden. Firefox 74 wurde am 10. März 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Webkonsole

- Das dritte Argument (Ergebnistyp) des `$x()` [Webkonsole-Helfers](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html) akzeptiert jetzt einfache Zeichenfolgenwerte sowie [`XPathResult`-Konstanten](/de/docs/Web/API/XPathResult#constants) ([Fehler 1602591](https://bugzil.la/1602591)).
- Neue Unterstützung für den optionalen Verkettungsoperator "?." der auch mit der Autovervollständigung der Konsole verwendet werden kann ([Fehler 1594009](https://bugzil.la/1594009)).
- Der Debugger kann jetzt [verschachtelte Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) inspizieren und debuggen ([Fehler 1590766](https://bugzil.la/1590766)).

### HTML

_Keine Änderungen._

### CSS

- [`text-underline-position`](/de/docs/Web/CSS/text-underline-position) ist jetzt standardmäßig aktiviert ([Fehler 1606997](https://bugzil.la/1606997)).
- Die Eigenschaften [`text-underline-offset`](/de/docs/Web/CSS/text-underline-offset) und [`text-decoration-thickness`](/de/docs/Web/CSS/text-decoration-thickness) akzeptieren jetzt Prozentwerte ([Fehler 1607534](https://bugzil.la/1607534)).
- Der `auto`-Wert der {{cssxref("outline-style")}}-Eigenschaft wurde standardmäßig aktiviert ([Firefox-Fehler 1031664](https://bugzil.la/1031664)).

#### Entfernungen

- Die `-moz-`-präfixierten [Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)-Eigenschaften wurden entfernt ([Firefox-Fehler 1308636](https://bugzil.la/1308636)).

### SVG

_Keine Änderungen._

### JavaScript

- Der [Optionale Verkettungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) wurde implementiert ([Firefox-Fehler 1566143](https://bugzil.la/1566143)).
- Wenn eine JavaScript-URL (`javascript:`) ausgewertet wird und das Ergebnis eine Zeichenfolge ist, wird diese Zeichenfolge geparst, um ein HTML-Dokument zu erstellen, das dann angezeigt wird. Früher war die URL dieses Dokuments (wie sie zum Beispiel von der [`document.location`](/de/docs/Web/API/Document/location) Eigenschaft gemeldet wurde) die ursprüngliche `javascript:`-URL; sie ist jetzt korrekt die URL des Dokuments, in dem die `javascript:`-URL ausgewertet wurde ([Firefox-Fehler 836567](https://bugzil.la/836567)).

#### Entfernungen

- Die Methode `Object.toSource()` und die globale Funktion `uneval()` sind nicht mehr für die Nutzung durch Webinhalte oder Erweiterungen verfügbar ([Fehler 1565170](https://bugzil.la/1565170)).

### APIs

#### DOM

- Die Methode [`IDBTransaction.commit()`](/de/docs/Web/API/IDBTransaction/commit) wurde implementiert ([Firefox-Fehler 1497007](https://bugzil.la/1497007)).

#### DOM-Ereignisse

- Firefox 74 unterstützt jetzt das [`languagechange_event`](/de/docs/Web/API/WorkerGlobalScope/languagechange_event) Ereignis und dessen zugehörige Ereignisbehandler-Eigenschaft `onlanguagechange`, das ausgelöst wird, wenn der Nutzer seine bevorzugte Sprache ändert ([Firefox-Fehler 1154779](https://bugzil.la/1154779)). Dies wurde zuvor in unserer [Kompatibilitätsdatenbank](https://github.com/mdn/browser-compat-data) fälschlicherweise als unterstützt ab Firefox 3.5 aufgeführt.

#### Canvas und WebGL

- Das [`TextMetrics`](/de/docs/Web/API/TextMetrics) Interface wurde erweitert, um vier weitere Eigenschaften zur Messung der tatsächlichen Begrenzungsbox zu enthalten — [`actualBoundingBoxLeft`](/de/docs/Web/API/TextMetrics/actualBoundingBoxLeft), [`actualBoundingBoxRight`](/de/docs/Web/API/TextMetrics/actualBoundingBoxRight), [`actualBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/actualBoundingBoxAscent) und [`actualBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/actualBoundingBoxDescent). Textmetriken können mit der Methode [`CanvasRenderingContext2D.measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText) abgerufen werden ([Firefox-Fehler 1102584](https://bugzil.la/1102584)).

#### Entfernungen

- Die nicht standardisierte Methode `IDBDatabase.mozCreateFileHandle()` wurde entfernt, zugunsten der (ebenfalls nicht standardisierten) Methode `IDBDatabase.createMutableFile()` ([Firefox-Fehler 1024312](https://bugzil.la/1024312)).
- Die nicht standardisierte Methode `IDBMutableFile.getFile()` wurde entfernt ([Firefox-Fehler 1607791](https://bugzil.la/1607791)).
- Die nicht standardisierte Methode [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) `mozGetAsFile()` wurde entfernt, nachdem sie vor mehreren Jahren veraltet war ([Firefox-Fehler 1588980](https://bugzil.la/1588980)).
- Die [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Eigenschaft [`isReload`](/de/docs/Web/API/FetchEvent/isReload) wurde aus Firefox und der Spezifikation entfernt ([Firefox-Fehler 1264175](https://bugzil.la/1264175)).

### HTTP

- Der [`Cross-Origin-Resource-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy)-Header ist jetzt standardmäßig aktiviert ([Fehler 1602363](https://bugzil.la/1602363)).

### Sicherheit

- Unterstützung für TLS 1.0 und 1.1 wurde aus Firefox entfernt; Sie müssen sicherstellen, dass Ihr Webserver TLS 1.2 oder 1.3 unterstützt. Von nun an wird Firefox einen [Fehler bei sicherer Verbindung](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) zurückgeben, wenn eine Verbindung zu Servern hergestellt wird, die die älteren TLS-Versionen verwenden ([Firefox-Fehler 1606734](https://bugzil.la/1606734)).
- Ab Firefox 74, wenn eine Website die Erlaubnis erteilt, auf eine Ressource in einem eingebetteten Inhalt in einem {{HTMLElement("iframe")}} zuzugreifen, indem das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut verwendet wird und die eingebettete Seite die Erlaubnis zur Nutzung dieser Ressource anfordert, fordert die übergeordnete Seite den Benutzer um Erlaubnis auf, die Ressource zu nutzen und sie mit der eingebetteten Domain zu teilen, anstatt sowohl die äußere als auch die innere Seite den Benutzer um Erlaubnis bitten. Wenn die äußere Seite die vom `allow`-Attribut angeforderte Erlaubnis nicht hat, wird dem `<iframe>` der Zugriff sofort ohne Benutzereingabe verweigert [Firefox-Fehler 1483631](https://bugzil.la/1483631).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- `WebDriver:Print` hinzugefügt, um die aktuelle Seite als PDF-Dokument zu drucken ([Firefox-Fehler 1604506](https://bugzil.la/1604506)).
- `Webdriver:TakeScreenshot` erfasst jetzt immer den obersten Browsing-Kontext und nicht den aktuell ausgewählten Browsing-Kontext, wenn kein Element zum Erfassen angegeben wurde ([Firefox-Fehler 1398087](https://bugzil.la/1398087), [Firefox-Fehler 1606794](https://bugzil.la/1606794)).
- Die Verwendung des `full`-Arguments von `Webdriver:TakeScreenshot` führt dazu, dass die vollständige Seite erfasst wird ([Firefox-Fehler 1571424](https://bugzil.la/1571424)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Shortcut-Tasten können jetzt in {{WebExtAPIRef("Commands.update")}} durch Übergeben eines leeren Werts für `shortcut` aufgehoben werden [Firefox-Fehler 1475043](https://bugzil.la/1475043).
- `urlClassification`s werden jetzt als Teil der `details` in jedem Ereignis von {{WebExtAPIRef("webRequest")}} zurückgegeben und bieten Informationen darüber, ob eine Anfrage als Fingerprinting oder Tracking klassifiziert ist [Firefox-Fehler 1589494](https://bugzil.la/1589494).

### Manifeständerungen

_Keine Änderungen._

## Siehe auch

- Hacks Blog-Post: [Security means more with Firefox 74](https://hacks.mozilla.org/2020/03/security-means-more-with-firefox-74-2/)
