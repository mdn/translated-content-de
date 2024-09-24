---
title: Firefox 33 für Entwickler
slug: Mozilla/Firefox/Releases/33
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 33 wurde am 14. Oktober 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Highlights

- Event-Listener-Popup
- @media-Seitenleiste
- Neue Regel hinzufügen
- Keyframes bearbeiten
- Kubische Bezierkurven-Editor
- Transformations-Highlighter
- Persistentes Cache-Deaktivieren
- Neue Befehle
- Editor-Einstellungen
- WebIDE

Für Details besuchen Sie bitte den [Hacks-Beitrag](https://hacks.mozilla.org/2014/07/event-listeners-popup-media-sidebar-cubic-bezier-editor-more-firefox-developer-tools-episode-33/). Besonderer Dank an die 33 Mitwirkenden, die [alle Funktionen und Fixes](https://mzl.la/1pGLFDs) in dieser Version hinzugefügt haben.

### CSS

- Implementiert {{cssxref("@counter-style")}} Regel ([Firefox Bug 966166](https://bugzil.la/966166)).
- Unpräfixierte `ethiopic-numeric`, `persian`, `arabic-indic`, `devanagari`, `bengali`, `gurmukhi`, `gujarati`, `oriya`, `tamil`, `telugu`, `kannada`, `malayalam`, `thai`, `lao`, `myanmar`, `khmer`, `cjk-heavenly-stem`, `cjk-earthly-branch` im {{cssxref("list-style-type")}} ([Firefox Bug 985825](https://bugzil.la/985825) und [Firefox Bug 1063856](https://bugzil.la/1063856)).
- Unterstützung für `mongolian`, `disclosure-open` und `disclosure-closed` Zählerstile im {{cssxref("list-style-type")}} hinzugefügt ([Firefox Bug 982355](https://bugzil.la/982355) und [Firefox Bug 1063856](https://bugzil.la/1063856)).
- Behobene CSS-Animationen mit leeren Keyframe-Regeln, sodass sie auch Ereignisse auslösen ([Firefox Bug 1004377](https://bugzil.la/1004377)).
- Unterstützung für `rebeccapurple`, einen neuen {{cssxref("&lt;color&gt;")}} Namen, der in CSS Colors Level 4 definiert ist, hinzugefügt ([Firefox Bug 1024642](https://bugzil.la/1024642)).
- Unsere experimentelle Implementierung von CSS Fonts Level 3 macht Fortschritte. Ihre Aktivierung wird durch die Einstellung `layout.css.font-features.enabled` gesteuert, die standardmäßig in Nightly aktiviert ist. Neu implementierte Funktionen sind:

  - Der Fallback-Algorithmus von {{cssxref("font-variant-caps")}}, der synthetische Alternativen für fehlende Glyphen erstellt ([Firefox Bug 961558](https://bugzil.la/961558)).
  - Die {{cssxref("font-synthesis")}} CSS-Eigenschaft wurde implementiert ([Firefox Bug 871453](https://bugzil.la/871453)).

### HTML

- Experimentelle Unterstützung für das {{htmlelement("picture")}} Element hinzugefügt ([Firefox Bug 870022](https://bugzil.la/870022)), gesteuert durch die Einstellung `dom.image.picture.enabled` (standardmäßig deaktiviert).
- Das {{HTMLElement("label")}}, insbesondere ohne das [`for`](/de/docs/Web/HTML/Element/label#for) Attribut, wirkt sich nicht mehr auf ein `<input type=hidden>` Feld aus ([Firefox Bug 597650](https://bugzil.la/597650)). Das vorherige Verhalten entsprach nicht der Spezifikation.
- Die Linkannotation `noreferrer` wurde für {{HTMLElement("a")}} Elemente implementiert. `<a rel="noreferrer">` wird die URL des Referrers nicht in die HTTP-Anfrage aufnehmen, die gesendet wird, um sie abzurufen ([Firefox Bug 530396](https://bugzil.la/530396)). Beachten Sie, dass dies nur für seiteninterne Links funktioniert, nicht für Links, die über die Benutzeroberfläche angeklickt werden, wie z.B. über Kontextmenüs.
- Auf Android wurden zwei neue Werte für das [`name`](/de/docs/Web/HTML/Element/meta#name) Attribut von {{HTMLElement("meta")}} hinzugefügt: `msapplication-TileImage` und `msapplication-TileColor` ([Firefox Bug 1014712](https://bugzil.la/1014712)). Beispiel:

  ```html
  <meta name="msapplication-TileImage" content="images/benthepcguy-144.png" />
  <meta name="msapplication-TileColor" content="#d83434" />
  ```

### JavaScript

- Die nicht standardmäßige Methode `Number.toInteger()` wurde entfernt ([Firefox Bug 1022396](https://bugzil.la/1022396)).
- Die {{jsxref("Map.prototype.set()")}}, {{jsxref("WeakMap.prototype.set()")}} und {{jsxref("Set.prototype.add()")}} Methoden sind jetzt verkettbar, geben ihre äquivalenten Objekte und nicht mehr `undefined` zurück ([Firefox Bug 1031632](https://bugzil.la/1031632)).
- Ein [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) wird vor Funktionsdeklarationen innerhalb des Funktionskörpers ausgewertet, sodass diese Funktionen nicht vom Standardparameter referenziert werden können ([Firefox Bug 1022962](https://bugzil.la/1022962)).
- Kurzschluss-Eigenschaften sind jetzt in Objektliteralen erlaubt: Wenn sie nicht explizit definiert sind, werden Eigenschaftsschlüssel von Variablen gleichen Namens initialisiert. Z.B. `function f(x, y) { return {x, y}; }` ist äquivalent zu `function f(x, y) { return {x: x, y: y}; }` ([Firefox Bug 875002](https://bugzil.la/875002)).
- Das Parsen von [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) wurde aktualisiert, um mit der neuesten ES2015-Spezifikation übereinzustimmen ([Firefox Bug 981599](https://bugzil.la/981599)).
- Die nicht standardmäßige `hasOwn` Falle wurde entfernt ([Firefox Bug 980565](https://bugzil.la/980565)).

### Schnittstellen/APIs/DOM

- Die {{domxref("RadioNodeList")}} API wurde implementiert und der ausgewählte Radio-Button ist über {{domxref("RadioNodeList.value")}} zugänglich ([Firefox Bug 779723](https://bugzil.la/779723)).
- Die {{domxref("DOMMatrix")}} wurde hinzugefügt ([Firefox Bug 1018497](https://bugzil.la/1018497)).
- Eine nicht standardmäßige (aber in anderen Browsern implementierte) `DOMException.stack` Eigenschaft wurde hinzugefügt. Sie gibt eine Zeichenkette mit einem benutzerfreundlich formatierten Stack zurück ([Firefox Bug 857648](https://bugzil.la/857648)), im selben Format wie die vorhandene nicht standardmäßige {{jsxref("Error.stack")}} Eigenschaft.
- Für {{HTMLElement("canvas")}}, die Methode {{domxref("CanvasPattern.setTransform()")}}, die es ermöglicht, ein Muster unter Verwendung der {{domxref("DOMMatrix")}} Darstellung einer linearen Transformation zu modifizieren ([Firefox Bug 1019257](https://bugzil.la/1019257)).
- Unsere experimentelle Implementierung der Media Source Extensions, gesteuert durch die Einstellung `media.mediasource.enabled`, die standardmäßig nur in Nightly und Aurora aktiviert ist, unterstützt jetzt MP4 ([Firefox Bug 1000686](https://bugzil.la/1000686)).
- Die Eigenschaften {{domxref("HTMLMediaElement.audioTracks")}} und {{domxref("HTMLMediaElement.videoTracks")}} wurden experimentell implementiert. Sie werden durch `media.track.enabled` gesteuert, standardmäßig deaktiviert ([Firefox Bug 744896](https://bugzil.la/744896)).
- Die nicht standardmäßige `XMLHttpRequest.mozBackgroundRequest()` ist für Webseiten nicht mehr zugänglich. Nur intern genutzter Firefox-Code (Chrome-Code) kann sie verwenden ([Firefox Bug 1035242](https://bugzil.la/1035242)).
- Die `touchenter` und `touchleave` Ereignisse, die aus der Spezifikation entfernt wurden, sind entfernt worden ([Firefox Bug 1036444](https://bugzil.la/1036444)).
- Das vormals als `loaded` bezeichnete Ereignis, das auf einer {{domxref("HTMLTrackElement")}} gesendet wird, wurde in {{domxref("Window/load_event", "load")}} umbenannt, um der Spezifikation zu entsprechen ([Firefox Bug 1035505](https://bugzil.la/1035505)).
- Die IndexedDB-Schnittstelle `FileHandle` wurde in `IDBMutableFile` umbenannt ([Firefox Bug 1006485](https://bugzil.la/1006485)).
- Die IndexedDB-Schnittstelle `LockedFile` wurde in `IDBFileHandle` umbenannt ([Firefox Bug 1006485](https://bugzil.la/1006485)).
- Die {{domxref("ServiceWorker")}} Schnittstelle wurde hinter der `dom.serviceWorkers.enabled` Flagge implementiert ([Firefox Bug 903441](https://bugzil.la/903441)).
- Die {{domxref("NetworkInformation.type")}} unterstützt jetzt auch den Wert `"unknown"` ([Firefox Bug 1023029](https://bugzil.la/1023029)).

### MathML

- Die Attribute `columnspacing`, `framespacing` und `rowspacing` des {{MathMLElement("mtable")}} Elements werden jetzt unterstützt ([Firefox Bug 330964](https://bugzil.la/330964)).
- Verwendung von [Open Type MATH](https://wiki.mozilla.org/MathML:Open_Type_MATH_Table#Implementation_Status) Konstanten für Brüche, Stapel, Radikale und Skripte ([Firefox Bug 961365](https://bugzil.la/961365)).

### SVG

_Keine Änderung._

### Audio/Video/WebRTC

- Das `RTCOfferOptions` Wörterbuch, das verwendet wird, um Optionen beim Aufrufen von {{domxref("RTCPeerConnection.createOffer()")}} bereitzustellen, wurde implementiert.

### WebGL

- {{domxref("EXT_blend_minmax")}} wird jetzt unterstützt. Es erweitert die Mischfähigkeiten, indem zwei neue Mischgleichungen hinzugefügt werden, die die minimalen oder maximalen Farbkomponenten der Quell- und Ziel-Farben produzieren ([Firefox Bug 973815](https://bugzil.la/973815)).

## Sicherheit

- Die [CSP](/de/docs/Web/HTTP/CSP) 1.1 `frame-ancestors` [Directive](/de/docs/Web/HTTP/Headers/Content-Security-Policy) wird jetzt unterstützt ([Firefox Bug 846978](https://bugzil.la/846978)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Der JavaScript Debugger Service (JSD) wurde zugunsten der neuen [Debugger API](https://firefox-source-docs.mozilla.org/devtools-user/debugger-api/index.html) entfernt ([Firefox Bug 800200](https://bugzil.la/800200)).
- Die Schnittstelle nsIX509CertDB2 wurde entfernt und die Methoden dieser Schnittstelle wurden zur nsIX509CertDB Schnittstelle verlegt.

### Add-on SDK

#### Highlights

- Unterstützung für Kontextmenüs in Panels über eine neue Option im `Panel` Konstruktor hinzugefügt.
- `tab.readyState` hinzugefügt.
- Ein `BrowserWindow` Parameter zu `sidebar.show()` und `sidebar.hide()` hinzugefügt, um das Fenster zu steuern, für das die Seitenleiste angezeigt oder ausgeblendet wird.

#### Details

[GitHub-Commits zwischen Firefox 32 und Firefox 33](https://github.com/mozilla/addon-sdk/compare/firefox32...firefox33). Dies beinhaltet keine Hochstufungen, die nach dem Übergang dieser Version zu Aurora vorgenommen wurden.

[Bugs, die zwischen Firefox 32 und Firefox 33 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-07-21&chfield=resolution&query_format=advanced&chfieldfrom=2014-06-09&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). Dies beinhaltet keine Hochstufungen, die nach dem Übergang dieser Version zu Aurora vorgenommen wurden.

### Ältere Versionen

{{Firefox_for_developers}}
