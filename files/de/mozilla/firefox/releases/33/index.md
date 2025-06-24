---
title: Firefox 33 für Entwickler
slug: Mozilla/Firefox/Releases/33
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Firefox 33 wurde am 14. Oktober 2014 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte

- Event Listener-Popup
- @media-Seitenleiste
- Neue Regel hinzufügen
- Keyframes bearbeiten
- Kubische Bezier-Editor
- Transformations-Highlighter
- Persistentes Cache-Deaktivieren
- Neue Befehle
- Editor-Einstellungen
- WebIDE

Für Details, bitte [sehen Sie den Hacks-Beitrag](https://hacks.mozilla.org/2014/07/event-listeners-popup-media-sidebar-cubic-bezier-editor-more-firefox-developer-tools-episode-33/). Besonderer Dank an die 33 Mitwirkenden, die [alle Funktionen und Fehlerbehebungen](https://mzl.la/1pGLFDs) in dieser Version hinzugefügt haben.

### CSS

- Implementierte {{cssxref("@counter-style")}} Regel ([Firefox-Bug 966166](https://bugzil.la/966166)).
- Ungeprefixed `ethiopic-numeric`, `persian`, `arabic-indic`, `devanagari`, `bengali`, `gurmukhi`, `gujarati`, `oriya`, `tamil`, `telugu`, `kannada`, `malayalam`, `thai`, `lao`, `myanmar`, `khmer`, `cjk-heavenly-stem`, `cjk-earthly-branch` in {{cssxref("list-style-type")}} ([Firefox-Bug 985825](https://bugzil.la/985825) und [Firefox-Bug 1063856](https://bugzil.la/1063856)).
- Unterstützung für `mongolian`, `disclosure-open` und `disclosure-closed` Zählerstile in {{cssxref("list-style-type")}} hinzugefügt ([Firefox-Bug 982355](https://bugzil.la/982355) und [Firefox-Bug 1063856](https://bugzil.la/1063856)).
- Behebung von CSS-Animationen mit leeren Keyframes-Regeln, sodass sie auch Ereignisse auslösen ([Firefox-Bug 1004377](https://bugzil.la/1004377)).
- Unterstützung für `rebeccapurple`, einen neuen {{cssxref("&lt;color&gt;")}} Namen gemäß CSS Colors Level 4 hinzugefügt ([Firefox-Bug 1024642](https://bugzil.la/1024642)).
- Unser experimentelles Implementieren von CSS Fonts Level 3 macht Fortschritte. Die Aktivierung wird durch die `layout.css.font-features.enabled` Präferenz gesteuert, die standardmäßig in Nightly aktiviert ist. Neu implementierte Funktionen sind:
  - Der Fallback-Algorithmus von {{cssxref("font-variant-caps")}}, der synthetische Alternativen für fehlende Glyphen erstellt ([Firefox-Bug 961558](https://bugzil.la/961558)).
  - Die {{cssxref("font-synthesis")}} CSS-Eigenschaft wurde implementiert ([Firefox-Bug 871453](https://bugzil.la/871453)).

### HTML

- Das experimentelle Unterstützen des {{htmlelement("picture")}} Elements hinzugefügt ([Firefox-Bug 870022](https://bugzil.la/870022)), hinter der `dom.image.picture.enabled` Präferenz (standardmäßig deaktiviert).
- Das {{HTMLElement("label")}}, insbesondere ohne [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) Attribut, wird nicht mehr auf ein `<input type=hidden>` Feld angewendet ([Firefox-Bug 597650](https://bugzil.la/597650)). Das vorherige Verhalten entsprach nicht den Spezifikationen.
- Die Linkannotation `noreferrer` wurde auf {{HTMLElement("a")}} Elementen implementiert. `<a rel="noreferrer">` wird die URL des Referrers in der HTTP-Anfrage nicht enthalten ([Firefox-Bug 530396](https://bugzil.la/530396)). Beachten Sie, dass dies nur für In-Page-Links funktioniert, nicht für Links, die über die UI, wie über Kontextmenüs, angeklickt werden.
- Auf Android wurde Unterstützung für zwei neue Werte für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attribut des {{HTMLElement("meta")}} hinzugefügt: `msapplication-TileImage` und `msapplication-TileColor` ([Firefox-Bug 1014712](https://bugzil.la/1014712)). Beispiel:

  ```html
  <meta name="msapplication-TileImage" content="images/my-img-144.png" />
  <meta name="msapplication-TileColor" content="#d83434" />
  ```

### JavaScript

- Die nicht standardmäßige Methode `Number.toInteger()` wurde entfernt ([Firefox-Bug 1022396](https://bugzil.la/1022396)).
- Die Methoden {{jsxref("Map.prototype.set()")}}, {{jsxref("WeakMap.prototype.set()")}} und {{jsxref("Set.prototype.add()")}} sind nun kaskadierbar, geben ihre äquivalenten Objekte zurück und nicht mehr `undefined` ([Firefox-Bug 1031632](https://bugzil.la/1031632)).
- Ein [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) wird vor Funktionsdeklarationen im Funktionskörper ausgewertet, sodass diese Funktionen vom Standardparameter aus nicht referenziert werden können ([Firefox-Bug 1022962](https://bugzil.la/1022962)).
- Kurzschließungseigenschaften sind jetzt in Objektliteralen erlaubt: wenn nicht explizit definiert, werden Eigenschaftsschlüssel durch Variablen mit demselben Namen initialisiert. Zum Beispiel ist `function f(x, y) { return {x, y}; }` gleichbedeutend mit `function f(x, y) { return {x: x, y: y}; }` ([Firefox-Bug 875002](https://bugzil.la/875002)).
- Das Parsen von [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) wurde aktualisiert, um mit der neuesten ES2015-Spezifikation übereinzustimmen ([Firefox-Bug 981599](https://bugzil.la/981599)).
- Der nicht standardmäßige `hasOwn` Trap wurde entfernt ([Firefox-Bug 980565](https://bugzil.la/980565)).

### Schnittstellen/APIs/DOM

- Die API [`RadioNodeList`](/de/docs/Web/API/RadioNodeList) wurde implementiert und der ausgewählte Radio-Button ist über [`RadioNodeList.value`](/de/docs/Web/API/RadioNodeList/value) zugänglich ([Firefox-Bug 779723](https://bugzil.la/779723)).
- Die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) wurde hinzugefügt ([Firefox-Bug 1018497](https://bugzil.la/1018497)).
- Eine nicht standardmäßige (aber in anderen Browsern implementierte) `DOMException.stack` Eigenschaft wurde hinzugefügt. Sie gibt einen String mit einem benutzerfreundlich formatierten Stack zurück ([Firefox-Bug 857648](https://bugzil.la/857648)), im gleichen Format wie die bestehende nicht standardmäßige {{jsxref("Error.stack")}} Eigenschaft.
- Für {{HTMLElement("canvas")}} die Methode [`CanvasPattern.setTransform()`](/de/docs/Web/API/CanvasPattern/setTransform), die es ermöglicht, ein Muster mit der [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Darstellung einer linearen Transformation zu modifizieren ([Firefox-Bug 1019257](https://bugzil.la/1019257)).
- Unsere experimentelle Implementierung von Media Source Extensions, hinter der `media.mediasource.enabled` Präferenz, die standardmäßig nur in Nightly und Aurora aktiviert ist, unterstützt jetzt MP4 ([Firefox-Bug 1000686](https://bugzil.la/1000686)).
- Die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) wurden experimentell implementiert. Sie werden durch `media.track.enabled`, standardmäßig deaktiviert, kontrolliert ([Firefox-Bug 744896](https://bugzil.la/744896)).
- Der nicht standardmäßige `XMLHttpRequest.mozBackgroundRequest()` ist von Websites nicht mehr zugänglich. Nur Firefox-internen Code (Chrome-Code) kann ihn verwenden ([Firefox-Bug 1035242](https://bugzil.la/1035242)).
- Die `touchenter` und `touchleave` Ereignisse, die aus der Spezifikation entfernt wurden, wurden entfernt ([Firefox-Bug 1036444](https://bugzil.la/1036444)).
- Das vormals als `loaded` bezeichnete Ereignis, gesendet auf einem [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement), wurde in [`load`](/de/docs/Web/API/Window/load_event) umbenannt, um der Spezifikation zu entsprechen ([Firefox-Bug 1035505](https://bugzil.la/1035505)).
- Die IndexedDB-Schnittstelle `FileHandle` wurde in `IDBMutableFile` umbenannt ([Firefox-Bug 1006485](https://bugzil.la/1006485)).
- Die IndexedDB-Schnittstelle `LockedFile` wurde in `IDBFileHandle` umbenannt ([Firefox-Bug 1006485](https://bugzil.la/1006485)).
- Die [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Schnittstelle wurde hinter der `dom.serviceWorkers.enabled` Flagge implementiert ([Firefox-Bug 903441](https://bugzil.la/903441)).
- Der [`NetworkInformation.type`](/de/docs/Web/API/NetworkInformation/type) unterstützt jetzt auch den Wert `"unknown"` ([Firefox-Bug 1023029](https://bugzil.la/1023029)).

### MathML

- Die Attribute `columnspacing`, `framespacing` und `rowspacing` des {{MathMLElement("mtable")}} Elements werden nun unterstützt ([Firefox-Bug 330964](https://bugzil.la/330964)).
- Nutzt [Open Type MATH](https://wiki.mozilla.org/MathML:Open_Type_MATH_Table#Implementation_Status) Konstanten für Brüche, Stapel, Wurzeln und Skripte ([Firefox-Bug 961365](https://bugzil.la/961365)).

### SVG

_Keine Änderung._

### Audio/Video/WebRTC

- Das `RTCOfferOptions` Wörterbuch, das verwendet wird, um Optionen beim Aufrufen von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) bereitzustellen, wurde implementiert.

### WebGL

- [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax) ist nun verfügbar. Es erweitert die Mischmöglichkeiten, indem es zwei neue Mischgleichungen hinzufügt: Erzeugung der minimalen oder maximalen Farbkomponenten der Quell- und Ziel-Farben ([Firefox-Bug 973815](https://bugzil.la/973815)).

## Sicherheit

- Die [CSP](/de/docs/Web/HTTP/Guides/CSP) 1.1 `frame-ancestors` [Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) wird nun unterstützt ([Firefox-Bug 846978](https://bugzil.la/846978)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Der JavaScript Debugger Service (JSD) wurde zugunsten der neuen [Debugger API](https://firefox-source-docs.mozilla.org/devtools-user/debugger-api/index.html) entfernt ([Firefox-Bug 800200](https://bugzil.la/800200)).
- Die Schnittstelle nsIX509CertDB2 wurde entfernt und die Methoden dieser Schnittstelle wurden in die nsIX509CertDB-Schnittstelle verschoben.

### Add-on-SDK

#### Höhepunkte

- Unterstützung für Kontextmenüs in Panels über eine neue Option im `Panel` Konstruktor hinzugefügt.
- `tab.readyState` hinzugefügt.
- Ein `BrowserWindow` Parameter für `sidebar.show()` und `sidebar.hide()` hinzugefügt, um das Fenster zu steuern, für das die Seitenleiste angezeigt oder ausgeblendet wird.

#### Details

[GitHub-Commits zwischen Firefox 32 und Firefox 33](https://github.com/mozilla/addon-sdk/compare/firefox32...firefox33). Dies schließt keine Uplifts ein, die nach diesem Release in Aurora erfolgten.

[Bugs, die zwischen Firefox 32 und Firefox 33 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-07-21&chfield=resolution&query_format=advanced&chfieldfrom=2014-06-09&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). Dies schließt keine Uplifts ein, die nach diesem Release in Aurora erfolgten.

### Ältere Versionen

{{Firefox_for_developers}}
