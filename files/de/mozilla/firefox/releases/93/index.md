---
title: Firefox 93 für Entwickler
slug: Mozilla/Firefox/Releases/93
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 93, die Entwickler betreffen werden. Firefox 93 wurde am 5. Oktober 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Lots to see in Firefox 93](https://hacks.mozilla.org/2021/10/lots-to-see-in-firefox-93/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

- Die ARIA [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role) Rolle wurde implementiert ([Firefox Bug 1727616](https://bugzil.la/1727616)).
- Die Benutzeroberfläche für [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local) wurde implementiert. ([Firefox Bug 1283388](https://bugzil.la/1283388)).

### CSS

- Das `small-caps` Schlüsselwort wird nun für die {{cssxref("font-synthesis")}} Eigenschaft unterstützt ([Firefox Bug 1706080](https://bugzil.la/1706080)).

### JavaScript

- [Statische Initialisierungsblöcke für Klassen](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden nun unterstützt, was eine flexiblere Initialisierung von {{jsxref("Classes/static", "statischen")}} Eigenschaften ermöglicht ([Firefox Bug 1725689](https://bugzil.la/1725689)).
- Die Eigenschaften `imageOrientation` und `premultiplyAlpha` können mithilfe des `options` Objekts an die Methoden [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) übergeben werden ([Firefox Bug 1367251](https://bugzil.la/1367251)).
- {{jsxref("Intl.supportedValuesOf()")}} wird nun unterstützt, was es ermöglicht, Werte zu enumerieren, die von einer Implementierung unterstützt werden. Dies könnte beispielsweise verwendet werden, um ein Polyfill nur für die fehlende Kategorie von Werten herunterzuladen ([Firefox Bug 1670033](https://bugzil.la/1670033)).

### HTTP

- Der SHA-256-Algorithmus wird nun für die [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) mit Digests unterstützt. Dies ermöglicht eine weitaus sicherere Authentifizierung als zuvor mit dem MD5-Algorithmus ([Firefox Bug 472823](https://bugzil.la/472823)).
- Der Standardwert für den HTTP {{HTTPHeader("ACCEPT")}} Header für _Bilder_ wurde geändert zu: `image/avif,image/webp,*/*` (nach Hinzufügung der Unterstützung für das [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildformat). ([Firefox Bug 1682995](https://bugzil.la/1682995)).

### APIs

- [`ElementInternals.shadowRoot`](/de/docs/Web/API/ElementInternals/shadowRoot) und [`HTMLElement.attachInternals`](/de/docs/Web/API/HTMLElement/attachInternals) werden nun unterstützt ([Firefox Bug 1723521](https://bugzil.la/1723521)).
- Der Wert `device-pixel-content-box` wird nun für [`ResizeObserver.Observe()`](/de/docs/Web/API/ResizeObserver/Observe) unterstützt ([Firefox Bug 1587973](https://bugzil.la/1587973)).
- Die Methoden [`Window.reportError()`](/de/docs/Web/API/Window/reportError) und [`WorkerGlobalScope.reportError()`](/de/docs/Web/API/WorkerGlobalScope/reportError) werden nun unterstützt. Sie ermöglichen es Skripten, Fehler an die Konsole oder globale Ereignishandler zu melden, indem sie eine nicht abgefangene JavaScript-Ausnahme emulieren ([Firefox Bug 1722448](https://bugzil.la/1722448)).

#### Ereignisse

- Die globale Ereignishandlereigenschaft [`onsecuritypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event) wird nun unterstützt.
  Sie kann verwendet werden, um einen Handler für die Verarbeitung von [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event) Ereignissen zuzuweisen, die ausgelöst werden, wenn eine Verletzung der [Content Security Policy](/de/docs/Web/HTTP/CSP) vorliegt ([Firefox Bug 1727302](https://bugzil.la/1727302)).
- Die `onslotchange` Ereignishandlereigenschaft wird nun auf [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Sie kann verwendet werden, um einen Handler für die Verarbeitung von [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event) Ereignissen zuzuweisen, die auf {{HTMLElement("slot")}} Elementen ausgelöst werden, wenn sich der/die Knoten im Slot ändern ([Firefox Bug 1501983](https://bugzil.la/1501983)).

#### Entfernte Funktionen

- [`KeyboardEvent.initKeyEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyEvent) wurde hinter der Einstellung `dom.keyboardevent.init_key_event.enabled` verschoben und ist standardmäßig deaktiviert.
  Die Methode ist in keiner aktuellen Spezifikation vorhanden noch in anderen aktuellen Browsern unterstützt ([Firefox Bug 1717760](https://bugzil.la/1717760)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der dazu führte, dass `WebDriver:Print` bei großen Dokumenten fehlschlug ([Firefox Bug 1721982](https://bugzil.la/1721982)).

## Änderungen für Add-on-Entwickler

- Sidebars sind nun in {{WebExtAPIRef("extension.getViews")}} enthalten, wenn `windowId` angegeben ist ([Firefox Bug 1612390](https://bugzil.la/1612390)).

## Sonstiges

- Unterstützung für [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bilder ist nun standardmäßig aktiviert ([Firefox Bug 1682995](https://bugzil.la/1682995)).
  Dieses Format bietet hervorragende Kompression und unterliegt keinen Patentrestriktionen (entwickelt von der [Alliance for Open Media](https://aomedia.org/)).
  Firefox kann Standbilder anzeigen, mit Farbraumunterstützung für sowohl volle als auch begrenzte Farbbereiche und Bildtransformationen für Spiegelung und Rotation.
  Die Einstellung [image.avif.compliance_strictness](/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness) kann verwendet werden, um die Konformitätsstrenge mit der Spezifikation anzupassen. Animierte Bilder werden nicht unterstützt.

## Ältere Versionen

{{Firefox_for_developers}}
