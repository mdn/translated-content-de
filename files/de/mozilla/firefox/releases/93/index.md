---
title: Firefox 93 für Entwickler
slug: Mozilla/Firefox/Releases/93
l10n:
  sourceCommit: 63297dea804061944e7430acd2c057d773770a4f
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 93, die Entwickler betreffen werden. Firefox 93 wurde am 5. Oktober 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Viel zu sehen in Firefox 93](https://hacks.mozilla.org/2021/10/lots-to-see-in-firefox-93/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

- Die ARIA-Rolle [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role) wurde implementiert ([Firefox Bug 1727616](https://bugzil.la/1727616)).
- Die Benutzeroberfläche für [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local) wurde implementiert ([Firefox Bug 1283388](https://bugzil.la/1283388)).

### CSS

- Das Schlüsselwort `small-caps` wird jetzt für die Eigenschaft {{cssxref("font-synthesis")}} unterstützt ([Firefox Bug 1706080](https://bugzil.la/1706080)).

### JavaScript

- [Statische Initialisierungsblöcke für Klassen](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden jetzt unterstützt, was eine flexiblere Initialisierung von {{jsxref("Classes/static", "statischen")}} Eigenschaften ermöglicht ([Firefox Bug 1725689](https://bugzil.la/1725689)).
- Die Eigenschaften `imageOrientation` und `premultiplyAlpha` können der Methode [`createImageBitmap()`](/de/docs/Web/API/CreateImageBitmap) mit dem `options` Objekt übergeben werden ([Firefox Bug 1367251](https://bugzil.la/1367251)).
- {{jsxref("Intl.supportedValuesOf()")}} wird jetzt unterstützt, was es ermöglicht, von der Implementierung unterstützte Werte zu enumerieren. Dies könnte zum Beispiel verwendet werden, um nur die fehlende Kategorie von Werten als Polyfill herunterzuladen ([Firefox Bug 1670033](https://bugzil.la/1670033)).

### HTTP

- Der SHA-256 Algorithmus wird jetzt für die [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) unter Verwendung von Digests unterstützt. Dies ermöglicht eine wesentlich sicherere Authentifizierung als vorher mit dem MD5 Algorithmus ([Firefox Bug 472823](https://bugzil.la/472823)).
- Der Standard-HTTP-{{HTTPHeader("ACCEPT")}}-Header für _Bilder_ wurde geändert zu: `image/avif,image/webp,*/*` (nach der Hinzufügung der Unterstützung für das [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) Bildformat) ([Firefox Bug 1682995](https://bugzil.la/1682995)).

### APIs

- [`ElementInternals.shadowRoot`](/de/docs/Web/API/ElementInternals/shadowRoot) und [`HTMLElement.attachInternals`](/de/docs/Web/API/HTMLElement/attachInternals) werden jetzt unterstützt ([Firefox Bug 1723521](https://bugzil.la/1723521)).
- Der Wert `device-pixel-content-box` wird jetzt für [`ResizeObserver.Observe()`](/de/docs/Web/API/ResizeObserver/Observe) unterstützt ([Firefox Bug 1587973](https://bugzil.la/1587973)).
- Die Methoden [`Window.reportError()`](/de/docs/Web/API/Window/reportError) und [`WorkerGlobalScope.reportError()`](/de/docs/Web/API/WorkerGlobalScope/reportError) werden jetzt unterstützt, was Skripten ermöglicht, Fehler an die Konsole oder globale Ereignishandler zu melden, ähnlich einem unverarbeiteten JavaScript-Ausnahmefehler ([Firefox Bug 1722448](https://bugzil.la/1722448)).

#### Ereignisse

- Die globale Ereignishandler-Eigenschaft [`onsecuritypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event) wird jetzt unterstützt. Diese kann benutzt werden, um einen Handler zur Verarbeitung von [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event) Ereignissen zuzuweisen, die ausgelöst werden, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) Verletzung auftritt ([Firefox Bug 1727302](https://bugzil.la/1727302)).
- Die `onslotchange` Ereignishandler-Eigenschaft wird jetzt auf [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt. Diese kann verwendet werden, um einen Handler zur Verarbeitung von [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event) Ereignissen zuzuweisen, die auf {{HTMLElement("slot")}} Elementen ausgelöst werden, wenn sich die Knoten im Slot ändern ([Firefox Bug 1501983](https://bugzil.la/1501983)).

#### Entfernungen

- [`KeyboardEvent.initKeyEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyEvent) wurde hinter der Präferenz `dom.keyboardevent.init_key_event.enabled` verschoben und ist standardmäßig deaktiviert. Die Methode ist in keiner aktuellen Spezifikation enthalten oder in anderen aktuellen Browsern unterstützt ([Firefox Bug 1717760](https://bugzil.la/1717760)).

### WebDriver-Konformität (Marionette)

- Ein Fehler, der dazu führte, dass `WebDriver:Print` bei großen Dokumenten fehlschlug, wurde behoben ([Firefox Bug 1721982](https://bugzil.la/1721982)).

## Änderungen für Erweiterungsentwickler

- Seitenleisten sind jetzt in {{WebExtAPIRef("extension.getViews")}} enthalten, wenn `windowId` spezifiziert ist ([Firefox Bug 1612390](https://bugzil.la/1612390)).

## Sonstiges

- Unterstützung für [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) Bilder ist jetzt standardmäßig aktiviert ([Firefox Bug 1682995](https://bugzil.la/1682995)). Dieses Format bietet eine hervorragende Kompression und keine Patenteinschränkungen (es wurde von der [Alliance for Open Media](https://aomedia.org/) entwickelt). Firefox kann Standbilder darstellen, mit Farbraumunterstützung für sowohl volle als auch begrenzte Farbpaletten und Bildtransformationen für Spiegelung und Rotation. Die Präferenz [image.avif.compliance_strictness](/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness) kann verwendet werden, um die Konformitätsstrenge mit der Spezifikation einzustellen. Animierte Bilder werden nicht unterstützt.

## Ältere Versionen

{{Firefox_for_developers}}
