---
title: Firefox 93 Versionshinweise für Entwickler
short-title: Firefox 93
slug: Mozilla/Firefox/Releases/93
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 93, die Entwickler betreffen werden. Firefox 93 wurde am 5. Oktober 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Viel zu sehen in Firefox 93](https://hacks.mozilla.org/2021/10/lots-to-see-in-firefox-93/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

- Die ARIA-Rolle [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role) wurde implementiert ([Firefox Bug 1727616](https://bugzil.la/1727616)).
- Die UI für [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) wurde implementiert. ([Firefox Bug 1283388](https://bugzil.la/1283388)).

### CSS

- Das Schlüsselwort `small-caps` wird nun für die Eigenschaft {{cssxref("font-synthesis")}} unterstützt ([Firefox Bug 1706080](https://bugzil.la/1706080)).

### JavaScript

- [Klassen `static` Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden jetzt unterstützt, wodurch eine flexiblere Initialisierung von {{jsxref("Classes/static", "static")}}-Eigenschaften möglich ist ([Firefox Bug 1725689](https://bugzil.la/1725689)).
- Die Eigenschaften `imageOrientation` und `premultiplyAlpha` können an die Methode [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unter Verwendung des `options`-Objekts übergeben werden ([Firefox Bug 1367251](https://bugzil.la/1367251)).
- {{jsxref("Intl.supportedValuesOf()")}} wird jetzt unterstützt, wodurch es möglich ist, von einer Implementierung unterstützte Werte aufzulisten. Dies könnte beispielsweise verwendet werden, um ein Polyfill nur für die fehlende Kategorie von Werten herunterzuladen ([Firefox Bug 1670033](https://bugzil.la/1670033)).

### HTTP

- Der SHA-256-Algorithmus wird jetzt für die [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) unter Verwendung von Digests unterstützt. Dies ermöglicht eine viel sicherere Authentifizierung als zuvor mit dem MD5-Algorithmus möglich war ([Firefox Bug 472823](https://bugzil.la/472823)).
- Die Standard-HTTP-{{HTTPHeader("ACCEPT")}}-Header für _Bilder_ wurden geändert zu: `image/avif,image/webp,*/*` (nach der Hinzufügung der Unterstützung für das [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image)-Bildformat). ([Firefox Bug 1682995](https://bugzil.la/1682995)).

### APIs

- [`ElementInternals.shadowRoot`](/de/docs/Web/API/ElementInternals/shadowRoot) und [`HTMLElement.attachInternals`](/de/docs/Web/API/HTMLElement/attachInternals) werden jetzt unterstützt ([Firefox Bug 1723521](https://bugzil.la/1723521)).
- Der Wert `device-pixel-content-box` wird jetzt für [`ResizeObserver.Observe()`](/de/docs/Web/API/ResizeObserver/observe) unterstützt ([Firefox Bug 1587973](https://bugzil.la/1587973)).
- Die Methoden [`Window.reportError()`](/de/docs/Web/API/Window/reportError) und [`WorkerGlobalScope.reportError()`](/de/docs/Web/API/WorkerGlobalScope/reportError) werden jetzt unterstützt, d.h. Skripte können Fehler an die Konsole oder an globale Ereignishandler melden, und damit eine nicht abgefangene JavaScript-Ausnahme emulieren ([Firefox Bug 1722448](https://bugzil.la/1722448)).

#### Ereignisse

- Die globale Ereignishandler-Eigenschaft [`onsecuritypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event) wird jetzt unterstützt.
  Dies kann verwendet werden, um einen Handler zum Verarbeiten von [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)-Ereignissen zuzuweisen, die ausgelöst werden, wenn es zu einer Verletzung der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) kommt ([Firefox Bug 1727302](https://bugzil.la/1727302)).
- Die `onslotchange`-Ereignishandler-Eigenschaft wird jetzt auf [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Diese kann verwendet werden, um einen Handler zum Verarbeiten von [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)-Ereignissen zuzuweisen, die auf {{HTMLElement("slot")}}-Elementen ausgelöst werden, wenn sich die im Slot enthaltenen Knoten ändern ([Firefox Bug 1501983](https://bugzil.la/1501983)).

#### Entfernungen

- `KeyboardEvent.initKeyEvent()` wurde hinter die Präferenz `dom.keyboardevent.init_key_event.enabled` verschoben und ist standardmäßig deaktiviert.
  Die Methode ist in keiner aktuellen Spezifikation vorhanden oder wird in anderen aktuellen Browsern unterstützt ([Firefox Bug 1717760](https://bugzil.la/1717760)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der dazu führte, dass `WebDriver:Print` bei großen Dokumenten fehlschlug ([Firefox Bug 1721982](https://bugzil.la/1721982)).

## Änderungen für Add-on-Entwickler

- Seitenleisten sind nun in {{WebExtAPIRef("extension.getViews")}} enthalten, wenn `windowId` angegeben ist ([Firefox Bug 1612390](https://bugzil.la/1612390)).

## Sonstiges

- Die Unterstützung für [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image)-Bilder ist jetzt standardmäßig aktiviert ([Firefox Bug 1682995](https://bugzil.la/1682995)).
  Dieses Format bietet eine hervorragende Kompression und ist ohne Patentrestriktionen (es wurde von der [Alliance for Open Media](https://aomedia.org/) entwickelt).
  Firefox kann Standbilder anzeigen, mit Farbraumunterstützung sowohl für volle als auch begrenzte Farbbereiche, und Bildtransformationen zum Spiegeln und Drehen.
  Die Präferenz [image.avif.compliance_strictness](/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness) kann verwendet werden, um die Einhaltungsstrenge mit der Spezifikation anzupassen. Animierte Bilder werden nicht unterstützt.
