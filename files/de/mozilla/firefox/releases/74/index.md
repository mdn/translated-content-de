---
title: Firefox 74 für Entwickler
slug: Mozilla/Firefox/Releases/74
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 74, die Entwickler betreffen werden. Firefox 74 wurde am 10. März 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Webkonsole

- Das `$x()` [Webkonsolen-Hilfsprogramm](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html) akzeptiert nun im dritten Argument (Ergebnistyp) einfache String-Werte sowie [`XPathResult`-Konstanten](/de/docs/Web/API/XPathResult#constants) ([Fehler 1602591](https://bugzil.la/1602591)).
- Unterstützung für den optionalen Verkettungsoperator "?." wurde hinzugefügt, dieser kann auch mit der Autovervollständigung der Konsole verwendet werden ([Fehler 1594009](https://bugzil.la/1594009)).
- Der Debugger kann nun [verschachtelte Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) inspizieren und debuggen ([Fehler 1590766](https://bugzil.la/1590766)).

### HTML

_Keine Änderungen._

### CSS

- [`text-underline-position`](/de/docs/Web/CSS/text-underline-position) ist nun standardmäßig aktiviert ([Fehler 1606997](https://bugzil.la/1606997)).
- Die Eigenschaften [`text-underline-offset`](/de/docs/Web/CSS/text-underline-offset) und [`text-decoration-thickness`](/de/docs/Web/CSS/text-decoration-thickness) akzeptieren nun Prozentwerte ([Fehler 1607534](https://bugzil.la/1607534)).
- Der `auto`-Wert der {{cssxref("outline-style")}}-Eigenschaft wurde standardmäßig aktiviert ([Firefox-Fehler 1031664](https://bugzil.la/1031664)).

#### Entfernt

- Die `-moz-`-geprefixten [Mehrspaltenlayout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)-Eigenschaften wurden entfernt ([Firefox-Fehler 1308636](https://bugzil.la/1308636)).

### SVG

_Keine Änderungen._

### JavaScript

- Der [Optionale Verkettungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) wurde implementiert ([Firefox-Fehler 1566143](https://bugzil.la/1566143)).
- Wenn eine JavaScript-URL (`javascript:`) ausgewertet wird und das Ergebnis ein String ist, wird dieser String analysiert, um ein HTML-Dokument zu erstellen, das dann präsentiert wird. Zuvor war die URL dieses Dokuments (wie sie z.B. von der [`document.location`](/de/docs/Web/API/Document/location) Eigenschaft berichtet wurde) die ursprüngliche `javascript:`-URL; sie ist jetzt korrekt die URL des Dokuments, in dem die `javascript:`-URL ausgewertet wurde ([Firefox-Fehler 836567](https://bugzil.la/836567)).

#### Entfernt

- Die Methode `Object.toSource()` und die globale Funktion `uneval()` stehen nicht mehr für die Verwendung durch Webinhalte oder Erweiterungen zur Verfügung ([Fehler 1565170](https://bugzil.la/1565170)).

### APIs

#### DOM

- Die Methode [`IDBTransaction.commit()`](/de/docs/Web/API/IDBTransaction/commit) wurde implementiert ([Firefox-Fehler 1497007](https://bugzil.la/1497007)).

#### DOM-Ereignisse

- Firefox 74 unterstützt nun das [`languagechange_event`](/de/docs/Web/API/WorkerGlobalScope/languagechange_event) Ereignis und seine zugehörige Ereignisbehandlungseigenschaft `onlanguagechange`, die ausgelöst wird, wenn der Benutzer seine bevorzugte Sprache ändert ([Firefox-Fehler 1154779](https://bugzil.la/1154779)). Dies wurde zuvor fälschlicherweise in unserer [Kompatibilitätsdatenbank](https://github.com/mdn/browser-compat-data) als seit Firefox 3.5 unterstützt gelistet.

#### Canvas und WebGL

- Das [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Interface wurde erweitert, um vier weitere Eigenschaften zum tatsächlichen Bounding-Box-Maß zu enthalten — [`actualBoundingBoxLeft`](/de/docs/Web/API/TextMetrics/actualBoundingBoxLeft), [`actualBoundingBoxRight`](/de/docs/Web/API/TextMetrics/actualBoundingBoxRight), [`actualBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/actualBoundingBoxAscent) und [`actualBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/actualBoundingBoxDescent). Textmaße können mit der Methode [`CanvasRenderingContext2D.measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText) abgerufen werden ([Firefox-Fehler 1102584](https://bugzil.la/1102584)).

#### Entfernt

- Die nicht standardisierte Methode `IDBDatabase.mozCreateFileHandle()` wurde entfernt, zugunsten der (ebenfalls nicht standardisierten) Methode `IDBDatabase.createMutableFile()` ([Firefox-Fehler 1024312](https://bugzil.la/1024312)).
- Die nicht standardisierte Methode `IDBMutableFile.getFile()` wurde entfernt ([Firefox-Fehler 1607791](https://bugzil.la/1607791)).
- Die nicht standardisierte Methode `mozGetAsFile()` des [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) wurde entfernt, nachdem sie vor einigen Jahren als veraltet eingestuft wurde ([Firefox-Fehler 1588980](https://bugzil.la/1588980)).
- Die [`FetchEvent`](/de/docs/Web/API/FetchEvent) Eigenschaft [`isReload`](/de/docs/Web/API/FetchEvent/isReload) wurde sowohl aus Firefox als auch aus der Spezifikation entfernt ([Firefox-Fehler 1264175](https://bugzil.la/1264175)).

### HTTP

- Der Header [`Cross-Origin-Resource-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy) ist nun standardmäßig aktiviert ([Fehler 1602363](https://bugzil.la/1602363)).

### Sicherheit

- Die Unterstützung für TLS 1.0 und 1.1 wurde aus Firefox entfernt; Sie müssen sicherstellen, dass Ihr Webserver TLS 1.2 oder 1.3 unterstützt. Ab jetzt wird Firefox einen [Fehler bei der sicheren Verbindung](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) anzeigen, wenn versucht wird, zu Servern mit älteren TLS-Versionen zu verbinden ([Firefox-Fehler 1606734](https://bugzil.la/1606734)).
- Ab Firefox 74, wenn eine Website die Erlaubnis zum Zugriff auf eine Ressource an eingebettete Inhalte in einem {{HTMLElement("iframe")}} mittels des [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow)-Attributs delegiert, und die eingebettete Seite die Erlaubnis anfordert, diese Ressource zu verwenden, fordert die übergeordnete Seite den Benutzer um Erlaubnis, die Ressource zu verwenden und sie mit der eingebetteten Domain zu teilen, anstatt dass sowohl die äußere als auch die innere Seite den Benutzer um Erlaubnis bitten. Wenn die äußere Seite die vom `allow`-Attribut angeforderte Erlaubnis nicht hat, wird dem `<iframe>` sofort der Zugriff verweigert, ohne den Benutzer zu fragen ([Firefox-Fehler 1483631](https://bugzil.la/1483631)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- `WebDriver:Print` hinzugefügt, um die aktuelle Seite als PDF-Dokument zu drucken ([Firefox-Fehler 1604506](https://bugzil.la/1604506)).
- `Webdriver:TakeScreenshot` erfasst jetzt immer den obersten Browsing-Kontext und nicht den aktuell ausgewählten Browsing-Kontext, wenn kein Element zum Erfassen angegeben wurde ([Firefox-Fehler 1398087](https://bugzil.la/1398087), [Firefox-Fehler 1606794](https://bugzil.la/1606794)).
- Die Verwendung des `full`-Arguments von `Webdriver:TakeScreenshot` führt dazu, dass die komplette Seite erfasst wird ([Firefox-Fehler 1571424](https://bugzil.la/1571424)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Tastenkombinationen können nun in {{WebExtAPIRef("Commands.update")}} durch Übergeben eines leeren Wertes von `shortcut` entfernt werden [Firefox-Fehler 1475043](https://bugzil.la/1475043).
- `urlClassification`s werden nun als Teil der `details` in jedem Ereignis von {{WebExtAPIRef("webRequest")}} zurückgegeben und liefern Informationen darüber, ob eine Anfrage als Fingerprinting oder Tracking klassifiziert wird [Firefox-Fehler 1589494](https://bugzil.la/1589494).

### Manifeständerungen

_Keine Änderungen._

## Siehe auch

- Hacks-Blogbeitrag: [Security means more with Firefox 74](https://hacks.mozilla.org/2020/03/security-means-more-with-firefox-74-2/)

## Ältere Versionen

{{Firefox_for_developers}}
