---
title: Firefox 63 für Entwickler
slug: Mozilla/Firefox/Releases/63
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 63, die Entwickler betreffen. Firefox 63 wurde am 23. Oktober 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Der Reiter „Fonts“ im [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) enthält jetzt einen Editor, der das Anzeigen und Bearbeiten der Einstellungen der Schriftarten auf Ihrer Seite erleichtert. Lesen Sie die Details unter [Schriftarten bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html).
- Der [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1482454](https://bugzil.la/1482454)).
- Wenn Sie über ein Objekt im [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) mit der Maus fahren, wird [das Element hervorgehoben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items), und seine Rolle und sein Name werden in einer Informationsleiste auf der Seite angezeigt ([Firefox-Bug 1473030](https://bugzil.la/1473030)).
- Die Befehlszeile in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird jetzt direkt nach der Konsolenausgabe angezeigt ([Firefox-Bug 1136299](https://bugzil.la/1136299)).
- Ein neues Symbol wurde in den Inhalten im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hinzugefügt, das anzeigt, wenn eine URL zu einem bekannten Tracker gehört – siehe [Sicherheits-Symbole](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ([Firefox-Bug 1333994](https://bugzil.la/1333994)).
- Der Standardwert von `devtools.aboutdebugging.showSystemAddons` ist jetzt `false`, was bedeutet, dass System-Add-ons nicht auf der Seite `about:debugging` aufgelistet werden. Sie können die Einstellungen durch Navigieren zu `about:config` ändern ([Firefox-Bug 1425347](https://bugzil.la/1425347)).
- Die Toolbar des [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde vereinfacht, und wir haben die Option hinzugefügt, den Viewport links auszurichten.
- Der Page Inspector enthält einen [Link zur Klassen-Definition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom-element-definition) für ein benutzerdefiniertes Element ([Firefox-Bug 1443923](https://bugzil.la/1443923)).

### HTML

- Unterstützung für das Attribut `decoding` des {{HTMLElement("img")}}-Elements wurde hinzugefügt ([Firefox-Bug 1416328](https://bugzil.la/1416328)); siehe auch [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

#### Entfernungen

- Unterstützung für den `sidebar`-Linktyp (`rel="sidebar"`) wurde entfernt. Wenn ein `<a>`-Tag dieses Attribut enthält, wird es ignoriert ([Firefox-Bug 1452645](https://bugzil.la/1452645)).

### CSS

- Unterstützung für die {{CSSxRef(":defined")}}-Pseudoklasse wurde hinzugefügt ([Firefox-Bug 1331334](https://bugzil.la/1331334)).
- Unterstützung für {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} und {{CSSxRef("gap")}} wurde in [Flexbox-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#the_gap_properties) hinzugefügt ([Firefox-Bug 1398483](https://bugzil.la/1398483)).
- Support für [webkit-prefixierte Pixel-Dichte-@media-Abfragen](/de/docs/Web/CSS/@media/-webkit-device-pixel-ratio) wurde wieder aktiviert ([Firefox-Bug 1444139](https://bugzil.la/1444139)).
- Unterstützung für die [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) (Flexbox)-Eigenschaften {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, {{CSSxRef("align-items")}} sowie die {{CSSxRef("justify-content")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1472843](https://bugzil.la/1472843)).
- Die `path()`-Funktion für {{CSSxRef("offset-path")}} wurde implementiert ([Firefox-Bug 1429298](https://bugzil.la/1429298)).
- Syntax-Verbesserungen aus der Media Queries Level 4-Spezifikation wurden implementiert ([Firefox-Bug 1422225](https://bugzil.la/1422225)).
- Eigenschaften `offset-*` wurden umbenannt in {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}}, und {{CSSxRef("inset-inline-end")}} ([Firefox-Bug 1464782](https://bugzil.la/1464782)).
- Unterstützung für das Media-Feature [prefers-reduced-motion](/de/docs/Web/CSS/@media/prefers-reduced-motion) wurde hinzugefügt ([Firefox-Bug 1365045](https://bugzil.la/1365045), [Firefox-Bug 1475462](https://bugzil.la/1475462)).
- Flow-relative Werte (`block`, `inline`) wurden für die {{CSSxRef("resize")}}-Eigenschaft hinzugefügt ([Firefox-Bug 1464786](https://bugzil.la/1464786)).
- Flexbox-Layout wurde für `safe` & `unsafe` Werte in {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("justify-content")}} implementiert ([Firefox-Bug 1297774](https://bugzil.la/1297774)).
- Die [logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) sind jetzt (wo zutreffend) animierbar ([Firefox-Bug 1309752](https://bugzil.la/1309752)).

#### Entfernungen

- `offset-block-start`, `offset-block-end`, `offset-inline-start` und `offset-inline-end` wurden entfernt; diese wurden zu `inset-*` umbenannt, wie oben beschrieben ([Firefox-Bug 1464782](https://bugzil.la/1464782)).

### SVG

_Keine Änderungen._

### JavaScript

- Die {{JSxRef("Symbol.prototype.description")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1472170](https://bugzil.la/1472170)).
- Die Methode {{JSxRef("Object.fromEntries()")}} wurde hinzugefügt ([Firefox-Bug 1469019](https://bugzil.la/1469019)).
- Wenn Sie versuchen, auf eine Eigenschaft eines undefinierten Objekts zuzugreifen, ist die Fehlermeldung jetzt deutlich verbessert. Wenn beispielsweise `x` undefiniert ist und Sie versuchen, auf `x.y` zuzugreifen, gibt die Konsole anstelle von "TypeError: x is undefined" jetzt die beschreibendere Fehlermeldung zurück: [x is undefined; can't access its "y" property](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) ([Firefox-Bug 1259822](https://bugzil.la/1259822)).

#### Entfernungen

- Experimental WebAssembly Module IndexedDB-Serialisierungsunterstützung wurde entfernt ([Firefox-Bug 1469395](https://bugzil.la/1469395)).

### APIs

#### Neue APIs

- Die APIs für Shadow DOM ([Firefox-Bug 1471947](https://bugzil.la/1471947)) und Custom Elements ([Firefox-Bug 1471948](https://bugzil.la/1471948)) wurden standardmäßig aktiviert. Weitere Details finden Sie unter [Web-Komponenten](/de/docs/Web/API/Web_components).
- Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) wurde implementiert ([Firefox-Bug 1409664](https://bugzil.la/1409664)).
- Die [Async Clipboard API](/de/docs/Web/API/Clipboard) wurde implementiert und standardmäßig für alle Kanäle aktiviert ([Firefox-Bug 1461465](https://bugzil.la/1461465)). Wie bei Chrome implementiert Firefox derzeit nur die Methoden [`writeText()`](/de/docs/Web/API/Clipboard/writeText) und [`readText()`](/de/docs/Web/API/Clipboard/readText); allerdings ist `readText()` im Gegensatz zu Chrome nur in [Browser-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) verfügbar.
- Die [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Schnittstelle wird jetzt unterstützt. Damit können Ereignisse gesendet werden, wenn die {{HTTPHeader("Content-Security-Policy")}} verletzt wurde ([Firefox-Bug 1472661](https://bugzil.la/1472661)).

### Ältere Versionen

{{Firefox_for_developers}}
