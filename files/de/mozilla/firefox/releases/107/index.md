---
title: Firefox-107-Versionshinweise für Entwickler
short-title: Firefox 107
slug: Mozilla/Firefox/Releases/107
l10n:
  sourceCommit: caf0af16c9f615fb0b2e73a44493a074a2007073
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 107, die sich auf Entwickler auswirken. Firefox 107 wurde am 15. November 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### MathML

- Die veralteten Attribute `lquote` und `rquote` des MathML-Elements [`<ms>`](/de/docs/Web/MathML/Reference/Element/ms) für benutzerdefinierte öffnende und schließende Anführungszeichen sind jetzt deaktiviert.
  Dieses Verhalten wird über die Einstellung `mathml.ms_lquote_rquote_attributes.disabled` konfiguriert, die standardmäßig auf `true` gesetzt ist ([Firefox-Bug 1793387](https://bugzil.la/1793387)).

### CSS

- Die CSS-Kurzschreibweise [`contain-intrinsic-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size) kann jetzt angewendet werden, um die Größe eines UI-Elements anzugeben, das der [Größen-Containment](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.
  Dadurch kann ein User-Agent die Größe eines Elements bestimmen, ohne dessen Kindelemente rendern zu müssen.
  Die Kurzschreibweisen [`contain-intrinsic-width`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-width) und [`contain-intrinsic-height`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-height) werden ebenfalls unterstützt, ebenso wie die [logischen Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values) [`contain-intrinsic-block-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size) und [`contain-intrinsic-inline-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size).
  ([Firefox-Bug 1597529](https://bugzil.la/1597529)).
- Farbschriften werden jetzt über die Eigenschaft [font-palette](/de/docs/Web/CSS/Reference/Properties/font-palette) unterstützt ([Firefox-Bug 1791558](https://bugzil.la/1791558)). Unterstützung wurde außerdem für die CSS-At-Regel [@font-palette-values](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) und deren Deskriptoren [font-family](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/font-family), [base-palette](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/base-palette) und [override-colors](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/override-colors) hinzugefügt. Zusammen helfen sie bei der Definition der Farbpalette ([Firefox-Bug 1791558](https://bugzil.la/1791558)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

#### Entfernungen

- Die nicht standardisierte und veraltete Eigenschaft [`SVGSVGElement.useCurrentView`](/de/docs/Web/API/SVGSVGElement#svgsvgelement.usecurrentview) wurde entfernt.
  Weitere Details finden Sie in [Firefox-Bug 1174097](https://bugzil.la/1174097).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für Realm wurde dem Argument `target` der Befehle `script.evaluate`, `script.callFunction` und `script.disown` hinzugefügt ([Firefox-Bug 1779231](https://bugzil.la/1779231)).

- Unterstützung für die JSON-Serialisierung komplexer Objekte mit Container-Wertefeldern wurde hinzugefügt, beispielsweise `WeakMap` und `Uint8Array` ([Firefox-Bug 1770754](https://bugzil.la/1770754)).

- Unterstützung für den Parameter `context` des Befehls `browsingContext.create` wurde hinzugefügt, der das Öffnen eines neuen Tabs in Bezug zu einem bestehenden Tab ermöglicht ([Firefox-Bug 1765619](https://bugzil.la/1765619)).

- Die Zuverlässigkeit des Befehls `browsingContext.navigate` wurde verbessert, wenn er mit dem auf `none` gesetzten Parameter `wait` aufgerufen wird ([Firefox-Bug 1763109](https://bugzil.la/1763109)).

#### Marionette

- Der Befehl `WebDriver:ElementSendKeys` setzt den Cursor jetzt nur noch, wenn das Element noch nicht fokussiert ist ([Firefox-Bug 1791736](https://bugzil.la/1791736)).

- Der Befehl `WebDriver:PerformAction` wurde aktualisiert, sodass `undefined` nicht mehr als Wert für verschiedene Parameter der Aktionen `pointerMove` und `wheel` akzeptiert wird ([Firefox-Bug 1781066](https://bugzil.la/1781066)).

- Die [Selenium Atoms](https://firefox-source-docs.mozilla.org/remote/marionette/SeleniumAtoms.html) wurden aktualisiert, um einer aktuellen Änderung der WebDriver-Spezifikation zu entsprechen ([Firefox-Bug 1771942](https://bugzil.la/1771942)).

## Änderungen für Add-on-Entwickler

### Sonstiges

- Die Eigenschaft `error`, die zurückgegeben wird, wenn in {{WebExtAPIRef("scripting.executeScript")}} ein Fehler auftritt, repräsentiert jetzt jeden Wert, den das Skript auslöst oder mit dem es ablehnt, statt nur ein Objekt mit einer Message-Eigenschaft zu sein ([Firefox-Bug 1740608](https://bugzil.la/1740608)).
