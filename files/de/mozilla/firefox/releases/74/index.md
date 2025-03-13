---
title: Firefox 74 für Entwickler
slug: Mozilla/Firefox/Releases/74
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 74, die Entwickler betreffen werden. Firefox 74 wurde am 10. März 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

#### Webkonsole

- Das dritte Argument (Ergebnistyp) des `$x()` [Webkonsole-Helfers](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html) akzeptiert jetzt einfache String-Werte sowie [`XPathResult` Konstanten](/de/docs/Web/API/XPathResult#constants) ([Bug 1602591](https://bugzil.la/1602591)).
- Neu unterstützte optionale Verkettungsoperator "?." kann auch mit der Autovervollständigung der Konsole verwendet werden ([Bug 1594009](https://bugzil.la/1594009)).
- Der Debugger kann nun [verschachtelte Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) inspizieren und debuggen ([Bug 1590766](https://bugzil.la/1590766)).

### HTML

_Keine Änderungen._

### CSS

- [`text-underline-position`](/de/docs/Web/CSS/text-underline-position) ist jetzt standardmäßig aktiviert ([Bug 1606997](https://bugzil.la/1606997)).
- Die Eigenschaften [`text-underline-offset`](/de/docs/Web/CSS/text-underline-offset) und [`text-decoration-thickness`](/de/docs/Web/CSS/text-decoration-thickness) akzeptieren jetzt Prozentwerte ([Bug 1607534](https://bugzil.la/1607534)).
- Der `auto` Wert der {{cssxref("outline-style")}} Eigenschaft wurde standardmäßig aktiviert ([Firefox-Bug 1031664](https://bugzil.la/1031664)).

#### Entfernungen

- Die `-moz-` präfixierten [Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) Eigenschaften wurden entfernt ([Firefox-Bug 1308636](https://bugzil.la/1308636)).

### SVG

_Keine Änderungen._

### JavaScript

- Der [Optionale Verkettungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) wurde implementiert ([Firefox-Bug 1566143](https://bugzil.la/1566143)).
- Wenn eine JavaScript-URL (`javascript:`) ausgewertet wird und das Ergebnis ein String ist, wird dieser String geparst, um ein HTML-Dokument zu erstellen, das dann angezeigt wird. Zuvor war die URL dieses Dokuments (wie sie beispielsweise von der [`document.location`](/de/docs/Web/API/Document/location) Eigenschaft gemeldet wurde) die ursprüngliche `javascript:` URL; es ist jetzt korrekt die URL des Dokuments, in dem die `javascript:` URL ausgewertet wurde ([Firefox-Bug 836567](https://bugzil.la/836567)).

#### Entfernungen

- Die Methode `Object.toSource()` und die globale Funktion `uneval()` sind nicht mehr für die Verwendung durch Webinhalte oder Erweiterungen verfügbar ([Bug 1565170](https://bugzil.la/1565170)).

### APIs

#### DOM

- Die Methode [`IDBTransaction.commit()`](/de/docs/Web/API/IDBTransaction/commit) wurde implementiert ([Firefox-Bug 1497007](https://bugzil.la/1497007)).

#### DOM-Ereignisse

- Firefox 74 unterstützt jetzt das [`languagechange_event`](/de/docs/Web/API/WorkerGlobalScope/languagechange_event) Ereignis und die zugehörige Ereignis-Handler-Eigenschaft, `onlanguagechange`, die ausgelöst wird, wenn der Benutzer seine bevorzugte Sprache ändert ([Firefox-Bug 1154779](https://bugzil.la/1154779)). Dies wurde zuvor in unserer [Kompatibilitätsdatenbank](https://github.com/mdn/browser-compat-data) als unterstützt ab Firefox 3.5 gelistet, dies war jedoch ein Fehler.

#### Canvas und WebGL

- Die [`TextMetrics`](/de/docs/Web/API/TextMetrics) Schnittstelle wurde um vier weitere Eigenschaften erweitert, die die tatsächliche Begrenzungsbox messen — [`actualBoundingBoxLeft`](/de/docs/Web/API/TextMetrics/actualBoundingBoxLeft), [`actualBoundingBoxRight`](/de/docs/Web/API/TextMetrics/actualBoundingBoxRight), [`actualBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/actualBoundingBoxAscent) und [`actualBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/actualBoundingBoxDescent). Textmetriken können mit der Methode [`CanvasRenderingContext2D.measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText) abgerufen werden ([Firefox-Bug 1102584](https://bugzil.la/1102584)).

#### Entfernungen

- Die nicht standardisierte Methode `IDBDatabase.mozCreateFileHandle()` wurde zugunsten der (ebenfalls nicht standardisierten) Methode `IDBDatabase.createMutableFile()` entfernt ([Firefox-Bug 1024312](https://bugzil.la/1024312)).
- Die nicht standardisierte Methode `IDBMutableFile.getFile()` wurde entfernt ([Firefox-Bug 1607791](https://bugzil.la/1607791)).
- Die nicht standardisierte Methode [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) `mozGetAsFile()` wurde entfernt, nachdem sie vor mehreren Jahren als veraltet markiert wurde ([Firefox-Bug 1588980](https://bugzil.la/1588980)).
- Die [`FetchEvent`](/de/docs/Web/API/FetchEvent) Eigenschaft [`isReload`](/de/docs/Web/API/FetchEvent/isReload) wurde sowohl aus Firefox als auch aus der Spezifikation entfernt ([Firefox-Bug 1264175](https://bugzil.la/1264175)).

### HTTP

- Der [`Cross-Origin-Resource-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy) Header ist jetzt standardmäßig aktiviert ([Bug 1602363](https://bugzil.la/1602363)).

### Sicherheit

- TLS 1.0 und 1.1 Unterstützung wurde aus Firefox entfernt; Sie müssen sicherstellen, dass Ihr Webserver TLS 1.2 oder 1.3 unterstützt. Von nun an wird Firefox einen [Secure Connection Failed](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) Fehler zurückgeben, wenn es eine Verbindung zu Servern mit den älteren TLS-Versionen aufnimmt ([Firefox-Bug 1606734](https://bugzil.la/1606734)).
- Ab Firefox 74, wenn eine Seite die Erlaubnis erteilt, um über das eingebettete Inhalts-{{HTMLElement("iframe")}} auf eine Ressource zuzugreifen, und die eingebettete Seite die Erlaubnis anfordert, diese Ressource zu verwenden, wird die übergeordnete Seite den Benutzer zur Erlaubnis auffordern, die Ressource zu verwenden und mit der eingebetteten Domain zu teilen, anstatt sowohl die äußere als auch die innere Seite den Benutzer zur Erlaubnis aufzufordern. Wenn die äußere Seite nicht die erforderliche Erlaubnis hat, die durch das `allow` Attribut gefordert wird, wird das `<iframe>` sofort ohne Benutzeraufforderung der Zugriff verweigert ([Firefox-Bug 1483631](https://bugzil.la/1483631)).

### Plugins

_Keine Änderungen._

### WebDriver Konformität (Marionette)

- `WebDriver:Print` wurde hinzugefügt, um die aktuelle Seite als PDF-Dokument zu drucken ([Firefox-Bug 1604506](https://bugzil.la/1604506)).
- `Webdriver:TakeScreenshot` erfasst jetzt immer den obersten Browsing-Kontext und nicht den aktuell ausgewählten Browsing-Kontext, wenn kein zu erfassendes Element angegeben wurde ([Firefox-Bug 1398087](https://bugzil.la/1398087), [Firefox-Bug 1606794](https://bugzil.la/1606794)).
- Die Verwendung des `full` Arguments von `Webdriver:TakeScreenshot` führt dazu, dass die gesamte Seite erfasst wird ([Firefox-Bug 1571424](https://bugzil.la/1571424)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Shortcut-Tasten können jetzt in {{WebExtAPIRef("Commands.update")}} durch Übergabe eines leeren Wertes von `shortcut` zugewiesen werden [Firefox-Bug 1475043](https://bugzil.la/1475043).
- `urlClassification`s werden jetzt als Teil der `details` in jedem Ereignis von {{WebExtAPIRef("webRequest")}} zurückgegeben und bieten Informationen darüber, ob eine Anfrage als Fingerprinting oder Tracking klassifiziert wird [Firefox-Bug 1589494](https://bugzil.la/1589494).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks-Blogbeitrag: [Sicherheit bedeutet mehr mit Firefox 74](https://hacks.mozilla.org/2020/03/security-means-more-with-firefox-74-2/)

## Ältere Versionen

{{Firefox_for_developers}}
