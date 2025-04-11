---
title: Firefox 93 für Entwickler
slug: Mozilla/Firefox/Releases/93
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 93, die Entwickler betreffen werden. Firefox 93 wurde am 5. Oktober 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Vieles zu sehen in Firefox 93](https://hacks.mozilla.org/2021/10/lots-to-see-in-firefox-93/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

- Die ARIA-Rolle [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role) wurde implementiert ([Firefox-Bug 1727616](https://bugzil.la/1727616)).
- Die Benutzeroberfläche für [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) wurde implementiert. ([Firefox-Bug 1283388](https://bugzil.la/1283388)).

### CSS

- Das Schlüsselwort `small-caps` wird nun für die Eigenschaft {{cssxref("font-synthesis")}} unterstützt ([Firefox-Bug 1706080](https://bugzil.la/1706080)).

### JavaScript

- [Klassen-`static` Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden nun unterstützt, was eine flexiblere Initialisierung von {{jsxref("Classes/static", "static")}} Eigenschaften ermöglicht ([Firefox-Bug 1725689](https://bugzil.la/1725689)).
- Die Eigenschaften `imageOrientation` und `premultiplyAlpha` können an die Methoden [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) mit dem `options`-Objekt übergeben werden ([Firefox-Bug 1367251](https://bugzil.la/1367251)).
- {{jsxref("Intl.supportedValuesOf()")}} wird nun unterstützt, was es ermöglicht, von einer Implementierung unterstützte Werte aufzuzählen. Dies könnte beispielsweise verwendet werden, um ein Polyfill nur für die fehlende Wertkategorie herunterzuladen ([Firefox-Bug 1670033](https://bugzil.la/1670033)).

### HTTP

- Der SHA-256-Algorithmus wird nun für die [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) mit Digests unterstützt. Dies ermöglicht eine erheblich sicherere Authentifizierung als zuvor mit dem MD5-Algorithmus möglich war ([Firefox-Bug 472823](https://bugzil.la/472823)).
- Der Standard-HTTP {{HTTPHeader("ACCEPT")}} Header für _Bilder_ wurde geändert zu: `image/avif,image/webp,*/*` (nach der Hinzufügung der Unterstützung des [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildformats). ([Firefox-Bug 1682995](https://bugzil.la/1682995)).

### APIs

- [`ElementInternals.shadowRoot`](/de/docs/Web/API/ElementInternals/shadowRoot) und [`HTMLElement.attachInternals`](/de/docs/Web/API/HTMLElement/attachInternals) werden nun unterstützt ([Firefox-Bug 1723521](https://bugzil.la/1723521)).
- Der Wert `device-pixel-content-box` wird nun für [`ResizeObserver.Observe()`](/de/docs/Web/API/ResizeObserver/observe) unterstützt ([Firefox-Bug 1587973](https://bugzil.la/1587973)).
- Die Methoden [`Window.reportError()`](/de/docs/Web/API/Window/reportError) und [`WorkerGlobalScope.reportError()`](/de/docs/Web/API/WorkerGlobalScope/reportError) werden nun unterstützt, was es Skripten erlaubt, Fehler an die Konsole oder globale Ereignishandler zu melden und ein nicht abgefangenes JavaScript-Ausnahmeverhalten zu emulieren ([Firefox-Bug 1722448](https://bugzil.la/1722448)).

#### Events

- Die globale Ereignishandler-Eigenschaft [`onsecuritypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event) wird nun unterstützt.
  Sie kann verwendet werden, um einen Handler zuzuweisen, um [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event) Ereignisse zu verarbeiten, die bei einem Verstoß gegen die [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) ausgelöst werden ([Firefox-Bug 1727302](https://bugzil.la/1727302)).
- Die Ereignishandler-Eigenschaft `onslotchange` wird nun für [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Sie kann verwendet werden, um einen Handler zuzuweisen, um [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event) Ereignisse zu verarbeiten, die bei {{HTMLElement("slot")}} Elementen ausgelöst werden, wenn sich die in dem Slot enthaltenen Knoten ändern ([Firefox-Bug 1501983](https://bugzil.la/1501983)).

#### Entfernung

- `KeyboardEvent.initKeyEvent()` wurde hinter die Präferenz `dom.keyboardevent.init_key_event.enabled` verschoben und ist standardmäßig deaktiviert.
  Die Methode ist in keiner aktuellen Spezifikation enthalten oder wird in anderen aktuellen Browsern unterstützt ([Firefox-Bug 1717760](https://bugzil.la/1717760)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der dazu führte, dass `WebDriver:Print` bei großen Dokumenten fehlschlug ([Firefox-Bug 1721982](https://bugzil.la/1721982)).

## Änderungen für Add-on-Entwickler

- Sidebars werden nun in {{WebExtAPIRef("extension.getViews")}} einbezogen, wenn `windowId` spezifiziert wird ([Firefox-Bug 1612390](https://bugzil.la/1612390)).

## Sonstiges

- Die Unterstützung für [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bilder ist nun standardmäßig aktiviert ([Firefox-Bug 1682995](https://bugzil.la/1682995)).
  Dieses Format hat eine hervorragende Komprimierung und keine Patenteinschränkungen (es wurde von der [Alliance for Open Media](https://aomedia.org/) entwickelt).
  Firefox kann Standbilder anzeigen, mit Unterstützung der Farbpalette sowohl für voll- als auch teilbereichige Farben und Bildtransformationen für Spiegelung und Drehung.
  Die Präferenz [image.avif.compliance_strictness](/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness) kann verwendet werden, um die Konformitätsstrenge mit der Spezifikation anzupassen. Animierte Bilder werden nicht unterstützt.

## Ältere Versionen

{{Firefox_for_developers}}
