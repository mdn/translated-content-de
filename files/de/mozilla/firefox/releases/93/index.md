---
title: Firefox 93 für Entwickler
slug: Mozilla/Firefox/Releases/93
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 93, die Entwickler betreffen werden. Firefox 93 wurde am 5. Oktober 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Lots to see in Firefox 93](https://hacks.mozilla.org/2021/10/lots-to-see-in-firefox-93/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

- Die ARIA-[`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)-Rolle wurde implementiert ([Firefox-Bug 1727616](https://bugzil.la/1727616)).
- Die Benutzeroberfläche für [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local) wurde implementiert. ([Firefox-Bug 1283388](https://bugzil.la/1283388)).

### CSS

- Das `small-caps` Schlüsselwort wird jetzt für die {{cssxref("font-synthesis")}}-Eigenschaft unterstützt ([Firefox-Bug 1706080](https://bugzil.la/1706080)).

### JavaScript

- [Klassen-`static`-Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden jetzt unterstützt, was eine flexiblere Initialisierung von {{jsxref("Classes/static", "static")}}-Eigenschaften ermöglicht ([Firefox-Bug 1725689](https://bugzil.la/1725689)).
- Die Eigenschaften `imageOrientation` und `premultiplyAlpha` können an die Methoden [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) mithilfe des `options`-Objekts übergeben werden ([Firefox-Bug 1367251](https://bugzil.la/1367251)).
- {{jsxref("Intl.supportedValuesOf()")}} wird jetzt unterstützt, was es dem Code ermöglicht, Werte aufzulisten, die von einer Implementierung unterstützt werden. Dies könnte beispielsweise dafür verwendet werden, ein Polyfill nur für die fehlende Kategorie von Werten herunterzuladen ([Firefox-Bug 1670033](https://bugzil.la/1670033)).

### HTTP

- Der SHA-256-Algorithmus wird jetzt für [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) unter Verwendung von Digests unterstützt. Dies ermöglicht eine deutlich sicherere Authentifizierung als zuvor mit dem MD5-Algorithmus ([Firefox-Bug 472823](https://bugzil.la/472823)).
- Der Standard-HTTP-{{HTTPHeader("ACCEPT")}}-Header für _Bilder_ wurde geändert zu: `image/avif,image/webp,*/*` (nach der Hinzufügung der Unterstützung für das [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image)-Bildformat). ([Firefox-Bug 1682995](https://bugzil.la/1682995)).

### APIs

- [`ElementInternals.shadowRoot`](/de/docs/Web/API/ElementInternals/shadowRoot) und [`HTMLElement.attachInternals`](/de/docs/Web/API/HTMLElement/attachInternals) werden jetzt unterstützt ([Firefox-Bug 1723521](https://bugzil.la/1723521)).
- Der Wert `device-pixel-content-box` wird jetzt für [`ResizeObserver.Observe()`](/de/docs/Web/API/ResizeObserver/observe) unterstützt ([Firefox-Bug 1587973](https://bugzil.la/1587973)).
- Die [`Window.reportError()`](/de/docs/Web/API/Window/reportError) und [`WorkerGlobalScope.reportError()`](/de/docs/Web/API/WorkerGlobalScope/reportError) wird jetzt unterstützt, was es Skripten ermöglicht, Fehler an die Konsole oder globale Ereignishandler zu melden und damit eine nicht abgefangene JavaScript-Ausnahme zu emulieren ([Firefox-Bug 1722448](https://bugzil.la/1722448)).

#### Ereignisse

- Die globale Ereignishandler-Eigenschaft [`onsecuritypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event) wird jetzt unterstützt.
  Diese kann verwendet werden, um einen Handler für die Verarbeitung von [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)-Ereignissen zuzuweisen, die ausgelöst werden, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)-Verletzung auftritt ([Firefox-Bug 1727302](https://bugzil.la/1727302)).
- Die Ereignishandler-Eigenschaft `onslotchange` wird jetzt auf [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Diese kann verwendet werden, um einen Handler für die Verarbeitung von [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)-Ereignissen zuzuweisen, die auf {{HTMLElement("slot")}}-Elementen ausgelöst werden, wenn sich die im Slot enthaltene(n) Node(s) ändern ([Firefox-Bug 1501983](https://bugzil.la/1501983)).

#### Entfernungen

- [`KeyboardEvent.initKeyEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyEvent) wurde hinter das Präferenz-Flag `dom.keyboardevent.init_key_event.enabled` verschoben und ist standardmäßig deaktiviert.
  Die Methode ist in keiner aktuellen Spezifikation vorhanden oder wird in anderen aktuellen Browsern unterstützt ([Firefox-Bug 1717760](https://bugzil.la/1717760)).

### WebDriver-Konformität (Marionette)

- Ein Bug wurde behoben, der dazu führte, dass `WebDriver:Print` für große Dokumente fehlschlug ([Firefox-Bug 1721982](https://bugzil.la/1721982)).

## Änderungen für Add-on-Entwickler

- Sidebars werden jetzt in {{WebExtAPIRef("extension.getViews")}} einbezogen, wenn `windowId` angegeben ist ([Firefox-Bug 1612390](https://bugzil.la/1612390)).

## Sonstiges

- Die Unterstützung für [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image)-Bilder ist jetzt standardmäßig aktiviert ([Firefox-Bug 1682995](https://bugzil.la/1682995)).
  Dieses Format hat exzellente Kompression und keine Patentrestriktionen (es wurde von der [Alliance for Open Media](https://aomedia.org/) entwickelt).
  Firefox kann Standbilder anzeigen, mit Farbraumunterstützung für sowohl Voll- als auch Begrenzte Farbbereich-Farben, sowie Bildtransformationen für Spiegelung und Drehung.
  Die Voreinstellung [image.avif.compliance_strictness](/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness) kann verwendet werden, um die Konformitätsstrenge mit der Spezifikation anzupassen. Animierte Bilder werden nicht unterstützt.

## Ältere Versionen

{{Firefox_for_developers}}
