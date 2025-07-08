---
title: Firefox 107 für Entwickler
slug: Mozilla/Firefox/Releases/107
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Dieser Artikel bietet Informationen über Änderungen in Firefox 107, die Entwickler beeinflussen werden. Firefox 107 wurde am 15. November 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### MathML

- Die veralteten `lquote` und `rquote` Attribute des MathML-Elements [`<ms>`](/de/docs/Web/MathML/Reference/Element/ms) für benutzerdefinierte Öffnungs- und Schlusszeichen sind jetzt deaktiviert.
  Dieses Verhalten wird über die Einstellung `mathml.ms_lquote_rquote_attributes.disabled` konfiguriert, die standardmäßig auf `true` gesetzt ist ([Firefox-Bug 1793387](https://bugzil.la/1793387)).

### CSS

- Die verkürzte CSS-Eigenschaft [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size) kann nun angewendet werden, um die Größe eines UI-Elements anzugeben, das der [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.
  Dadurch kann ein Benutzeragent die Größe eines Elements bestimmen, ohne dessen Kindelemente rendern zu müssen.
  Die verkürzten Eigenschaften [`contain-intrinsic-width`](/de/docs/Web/CSS/contain-intrinsic-width) und [`contain-intrinsic-height`](/de/docs/Web/CSS/contain-intrinsic-height) werden ebenfalls unterstützt, ebenso wie die [logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) [`contain-intrinsic-block-size`](/de/docs/Web/CSS/contain-intrinsic-block-size) und [`contain-intrinsic-inline-size`](/de/docs/Web/CSS/contain-intrinsic-inline-size).
  ([Firefox-Bug 1597529](https://bugzil.la/1597529)).
- Farbige Schriftart wird jetzt über die Eigenschaft [font-palette](/de/docs/Web/CSS/font-palette) unterstützt ([Firefox-Bug 1791558](https://bugzil.la/1791558)). Unterstützung wurde auch für die CSS-At-Regel [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) und deren Deskriptoren [font-family](/de/docs/Web/CSS/@font-palette-values/font-family), [base-palette](/de/docs/Web/CSS/@font-palette-values/base-palette) und [override-colors](/de/docs/Web/CSS/@font-palette-values/override-colors) hinzugefügt. Zusammen helfen sie dabei, die Farbpalette zu definieren ([Firefox-Bug 1791558](https://bugzil.la/1791558)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

#### Entfernungen

- Die nicht standardmäßige und veraltete Eigenschaft [`SVGSVGElement.useCurrentView`](/de/docs/Web/API/SVGSVGElement#svgsvgelement.usecurrentview) wurde entfernt.
  (Weitere Details siehe [Firefox-Bug 1174097](https://bugzil.la/1174097)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das Realm-Argument bei den Befehlen `script.evaluate`, `script.callFunction` und `script.disown` hinzugefügt ([Firefox-Bug 1779231](https://bugzil.la/1779231)).

- Unterstützung für JSON-Serialisierung komplexer Objekte mit Containerwertfeldern hinzugefügt, z.B. `WeakMap` und `Uint8Array` ([Firefox-Bug 1770754](https://bugzil.la/1770754)).

- Unterstützung für den `context`-Parameter des Befehls `browsingContext.create` hinzugefügt, der das Öffnen eines neuen Tabs in Bezug auf einen bestehenden ermöglicht ([Firefox-Bug 1765619](https://bugzil.la/1765619)).

- Zuverlässigkeit des Befehls `browsingContext.navigate` verbessert, wenn dieser mit dem Parameter `wait` auf `none` aufgerufen wird ([Firefox-Bug 1763109](https://bugzil.la/1763109)).

#### Marionette

- Der Befehl `WebDriver:ElementSendKeys` setzt nun den Cursor nur, wenn das Element noch nicht fokussiert ist ([Firefox-Bug 1791736](https://bugzil.la/1791736)).

- Der Befehl `WebDriver:PerformAction` wurde aktualisiert, um `undefined` nicht mehr als Wert für verschiedene Parameter der Aktionen `pointerMove` und `wheel` zu akzeptieren ([Firefox-Bug 1781066](https://bugzil.la/1781066)).

- Die [Selenium Atoms](https://firefox-source-docs.mozilla.org/testing/marionette/SeleniumAtoms.html) wurden aktualisiert, um einer kürzlichen Änderung der WebDriver-Spezifikation zu entsprechen ([Firefox-Bug 1771942](https://bugzil.la/1771942)).

## Änderungen für Add-on-Entwickler

### Sonstiges

- Die `error`-Eigenschaft, die zurückgegeben wird, wenn ein Fehler in {{WebExtAPIRef("scripting.executeScript")}} auftritt, repräsentiert nun jeden Wert, den das Skript wirft oder mit dem es ablehnt, anstatt nur ein Objekt mit einer `message`-Eigenschaft zu sein [Firefox-Bug 1740608](https://bugzil.la/1740608).

## Ältere Versionen

{{Firefox_for_developers}}
