---
title: Firefox 93 für Entwickler
slug: Mozilla/Firefox/Releases/93
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 93, die Entwickler betreffen. Firefox 93 wurde am 5. Oktober 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Viel zu sehen in Firefox 93](https://hacks.mozilla.org/2021/10/lots-to-see-in-firefox-93/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

- Die ARIA-Rolle [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role) wurde implementiert ([Firefox Fehler 1727616](https://bugzil.la/1727616)).
- Die Benutzeroberfläche für [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local) wurde implementiert. ([Firefox Fehler 1283388](https://bugzil.la/1283388)).

### CSS

- Das Schlüsselwort `small-caps` wird jetzt für die {{cssxref("font-synthesis")}}-Eigenschaft unterstützt ([Firefox Fehler 1706080](https://bugzil.la/1706080)).

### JavaScript

- [Klassen-`static`-Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden jetzt unterstützt, was eine flexiblere Initialisierung von {{jsxref("Classes/static", "static")}}-Eigenschaften ermöglicht ([Firefox Fehler 1725689](https://bugzil.la/1725689)).
- Die Eigenschaften `imageOrientation` und `premultiplyAlpha` können an die Methode [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unter Verwendung des `options`-Objekts übergeben werden ([Firefox Fehler 1367251](https://bugzil.la/1367251)).
- {{jsxref("Intl.supportedValuesOf()")}} wird jetzt unterstützt, was es erlaubt, die von einer Implementierung unterstützten Werte aufzulisten. Dies könnte beispielsweise verwendet werden, um ein Polyfill nur für die fehlende Kategorie von Werten herunterzuladen ([Firefox Fehler 1670033](https://bugzil.la/1670033)).

### HTTP

- Der SHA-256-Algorithmus wird jetzt für die [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) unter Verwendung von Digests unterstützt. Dies ermöglicht eine viel sicherere Authentifizierung als zuvor mit dem MD5-Algorithmus verfügbar war ([Firefox Fehler 472823](https://bugzil.la/472823)).
- Der Standard-HTTP-{{HTTPHeader("ACCEPT")}}-Header für _Bilder_ änderte sich zu: `image/avif,image/webp,*/*` (nach Hinzufügen der Unterstützung für das [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image)-Bildformat). ([Firefox Fehler 1682995](https://bugzil.la/1682995)).

### APIs

- [`ElementInternals.shadowRoot`](/de/docs/Web/API/ElementInternals/shadowRoot) und [`HTMLElement.attachInternals`](/de/docs/Web/API/HTMLElement/attachInternals) werden jetzt unterstützt ([Firefox Fehler 1723521](https://bugzil.la/1723521)).
- Der Wert `device-pixel-content-box` wird jetzt für [`ResizeObserver.Observe()`](/de/docs/Web/API/ResizeObserver/Observe) unterstützt ([Firefox Fehler 1587973](https://bugzil.la/1587973)).
- Die Funktion [`Window.reportError()`](/de/docs/Web/API/Window/reportError) und [`WorkerGlobalScope.reportError()`](/de/docs/Web/API/WorkerGlobalScope/reportError) wird jetzt unterstützt, was es Skripten ermöglicht, Fehler an die Konsole oder globale Ereignishandler zu melden und damit eine nicht abgefangene JavaScript-Ausnahme zu emulieren ([Firefox Fehler 1722448](https://bugzil.la/1722448)).

#### Ereignisse

- Die globale Ereignishandler-Eigenschaft [`onsecuritypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event) wird jetzt unterstützt.
  Dies kann verwendet werden, um einen Handler für die Verarbeitung von [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)-Ereignissen zuzuweisen, die ausgelöst werden, wenn es zu einer Verletzung der [Content Security Policy](/de/docs/Web/HTTP/CSP) kommt ([Firefox Fehler 1727302](https://bugzil.la/1727302)).
- Die Eigenschaft `onslotchange` für den Ereignishandler wird jetzt auf [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Dies kann verwendet werden, um einen Handler für die Verarbeitung von [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)-Ereignissen zuzuweisen, die auf {{HTMLElement("slot")}}-Elementen ausgelöst werden, wenn sich die im Slot enthaltenen Knoten ändern ([Firefox Fehler 1501983](https://bugzil.la/1501983)).

#### Entfernungen

- [`KeyboardEvent.initKeyEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyEvent) wurde hinter die Präferenz `dom.keyboardevent.init_key_event.enabled` verschoben und ist standardmäßig deaktiviert.
  Die Methode ist in keiner aktuellen Spezifikation enthalten oder in anderen aktuellen Browsern unterstützt ([Firefox Fehler 1717760](https://bugzil.la/1717760)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der dazu führte, dass `WebDriver:Print` bei großen Dokumenten fehlschlug ([Firefox Fehler 1721982](https://bugzil.la/1721982)).

## Änderungen für Add-on-Entwickler

- Seitenleisten sind jetzt in {{WebExtAPIRef("extension.getViews")}} enthalten, wenn `windowId` angegeben ist ([Firefox Fehler 1612390](https://bugzil.la/1612390)).

## Sonstiges

- Unterstützung für [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image)-Bilder ist jetzt standardmäßig aktiviert ([Firefox Fehler 1682995](https://bugzil.la/1682995)).
  Dieses Format hat eine hervorragende Kompression und keine Patenteinschränkungen (es wurde von der [Alliance for Open Media](https://aomedia.org/) entwickelt).
  Firefox kann Standbilder anzeigen, mit Farbraumunterstützung sowohl für volle als auch beschränkte Farbskalen, und Bildtransformationen für Spiegelung und Rotation.
  Die Präferenz [image.avif.compliance_strictness](/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness) kann verwendet werden, um die Konformitätsstrenge mit der Spezifikation anzupassen. Animierte Bilder werden nicht unterstützt.

## Ältere Versionen

{{Firefox_for_developers}}
