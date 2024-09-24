---
title: Firefox 93 für Entwickler
slug: Mozilla/Firefox/Releases/93
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 93, die Entwickler betreffen. Firefox 93 wurde am 5. Oktober 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Lots to see in Firefox 93](https://hacks.mozilla.org/2021/10/lots-to-see-in-firefox-93/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

- Die ARIA-Rolle [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role) wurde implementiert ([Firefox Bug 1727616](https://bugzil.la/1727616)).
- Die Benutzeroberfläche für [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local) wurde implementiert ([Firefox Bug 1283388](https://bugzil.la/1283388)).

### CSS

- Das Schlüsselwort `small-caps` wird jetzt für die {{cssxref("font-synthesis")}}-Eigenschaft unterstützt ([Firefox Bug 1706080](https://bugzil.la/1706080)).

### JavaScript

- [Klassen-`static`-Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden jetzt unterstützt, was eine flexibelere Initialisierung von {{jsxref("Classes/static", "static")}}-Eigenschaften ermöglicht ([Firefox Bug 1725689](https://bugzil.la/1725689)).
- Die Eigenschaften `imageOrientation` und `premultiplyAlpha` können an die Methode {{domxref("createImageBitmap()")}} unter Verwendung des `options`-Objekts übergeben werden ([Firefox Bug 1367251](https://bugzil.la/1367251)).
- {{jsxref("Intl.supportedValuesOf()")}} wird jetzt unterstützt, was es ermöglicht, die von einer Implementierung unterstützten Werte aufzulisten. Dies könnte beispielsweise verwendet werden, um nur die fehlende Kategorie von Werten mit einem Polyfill herunterzuladen ([Firefox Bug 1670033](https://bugzil.la/1670033)).

### HTTP

- Der SHA-256-Algorithmus wird jetzt für [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) mit Digest-Unterstützung verwendet. Dies ermöglicht eine viel sicherere Authentifizierung als vorher mit dem MD5-Algorithmus ([Firefox Bug 472823](https://bugzil.la/472823)).
- Der standardmäßige HTTP-{{HTTPHeader("ACCEPT")}}-Header für _Bilder_ wurde geändert auf: `image/avif,image/webp,*/*` (nachdem die Unterstützung für das [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image)-Bildformat hinzugefügt wurde) ([Firefox Bug 1682995](https://bugzil.la/1682995)).

### APIs

- {{domxref("ElementInternals.shadowRoot")}} und {{domxref("HTMLElement.attachInternals")}} werden jetzt unterstützt ([Firefox Bug 1723521](https://bugzil.la/1723521)).
- Der Wert `device-pixel-content-box` wird jetzt von {{domxref("ResizeObserver.Observe()")}} unterstützt ([Firefox Bug 1587973](https://bugzil.la/1587973)).
- Die globale Funktion {{domxref("reportError()")}} wird jetzt unterstützt, wodurch Skripte Fehler an die Konsole oder globale Ereignishandler melden können, ähnlich einer nicht abgefangenen JavaScript-Ausnahme ([Firefox Bug 1722448](https://bugzil.la/1722448)).

#### Events

- Die globale Event-Handler-Eigenschaft {{domxref("Element.securitypolicyviolation_event","onsecuritypolicyviolation")}} wird jetzt unterstützt. Dies kann verwendet werden, um einen Handler zum Verarbeiten von [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)-Ereignissen zuzuweisen, die ausgelöst werden, wenn es zu einem Verstoß gegen die [Content Security Policy](/de/docs/Web/HTTP/CSP) kommt ([Firefox Bug 1727302](https://bugzil.la/1727302)).
- Die `onslotchange`-Event-Handler-Eigenschaft wird jetzt auf {{domxref("HTMLSlotElement")}} und {{domxref("ShadowRoot")}} unterstützt. Dies kann verwendet werden, um einen Handler zum Verarbeiten von [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)-Ereignissen zuzuweisen, die auf {{HTMLElement("slot")}}-Elementen ausgelöst werden, wenn sich die im Slot enthaltenen Knoten ändern ([Firefox Bug 1501983](https://bugzil.la/1501983)).

#### Entfernungen

- {{domxref("KeyboardEvent.initKeyEvent()")}} wurde hinter der Präferenz `dom.keyboardevent.init_key_event.enabled` verschoben und ist standardmäßig deaktiviert. Die Methode ist in keiner aktuellen Spezifikation vorhanden oder in anderen aktuellen Browsern unterstützt ([Firefox Bug 1717760](https://bugzil.la/1717760)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der dazu führte, dass `WebDriver:Print` bei großen Dokumenten fehlschlug ([Firefox Bug 1721982](https://bugzil.la/1721982)).

## Änderungen für Add-on-Entwickler

- Sidebars sind jetzt in {{WebExtAPIRef("extension.getViews")}} enthalten, wenn `windowId` angegeben ist ([Firefox Bug 1612390](https://bugzil.la/1612390)).

## Sonstiges

- Die Unterstützung für [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image)-Bilder ist jetzt standardmäßig aktiviert ([Firefox Bug 1682995](https://bugzil.la/1682995)). Dieses Format hat eine hervorragende Kompression und keine Patentbeschränkungen (es wurde von der [Alliance for Open Media](https://aomedia.org/) entwickelt). Firefox kann Standbilder anzeigen, mit Farbunterstützung sowohl für vollständige als auch eingeschränkte Farbbereiche und Bildtransformationen zum Spiegeln und Rotieren. Die Präferenz [image.avif.compliance_strictness](/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness) kann verwendet werden, um die Konformitätsstrenge mit der Spezifikation anzupassen. Animierte Bilder werden nicht unterstützt.

## Ältere Versionen

{{Firefox_for_developers}}
