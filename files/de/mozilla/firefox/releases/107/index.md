---
title: Firefox 107 Versionshinweise für Entwickler
short-title: Firefox 107
slug: Mozilla/Firefox/Releases/107
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 107, die Entwickler betreffen werden. Firefox 107 wurde am 15. November 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### MathML

- Die veralteten `lquote` und `rquote` Attribute des [`<ms>`](/de/docs/Web/MathML/Reference/Element/ms) MathML-Elements für benutzerdefinierte Öffnungs- und Schlusszeichen sind jetzt deaktiviert.
  Dieses Verhalten wird über die Einstellung `mathml.ms_lquote_rquote_attributes.disabled` konfiguriert, die standardmäßig auf `true` gesetzt ist ([Firefox Bug 1793387](https://bugzil.la/1793387)).

### CSS

- Die Kurzschreibweise der CSS-Eigenschaft [`contain-intrinsic-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size) kann nun angewendet werden, um die Größe eines UI-Elements festzulegen, das einer [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.
  Dies ermöglicht es einem Benutzeragenten, die Größe eines Elements zu bestimmen, ohne dessen Kindelemente rendern zu müssen.
  Die Kurzschreibweiseigenschaften [`contain-intrinsic-width`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-width) und [`contain-intrinsic-height`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-height) werden ebenfalls unterstützt, zusammen mit den [logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) [`contain-intrinsic-block-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size) und [`contain-intrinsic-inline-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size).
  ([Firefox Bug 1597529](https://bugzil.la/1597529)).
- Farbige Schriftarten werden nun über die [font-palette](/de/docs/Web/CSS/Reference/Properties/font-palette) Eigenschaft unterstützt ([Firefox Bug 1791558](https://bugzil.la/1791558)). Unterstützung wurde auch für die [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) CSS-Regel und deren Deskriptoren [font-family](/de/docs/Web/CSS/@font-palette-values/font-family), [base-palette](/de/docs/Web/CSS/@font-palette-values/base-palette) und [override-colors](/de/docs/Web/CSS/@font-palette-values/override-colors) hinzugefügt. Zusammen helfen sie, die Farbpalette zu definieren ([Firefox Bug 1791558](https://bugzil.la/1791558)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

#### Entfernung

- Die nicht standardisierte und veraltete [`SVGSVGElement.useCurrentView`](/de/docs/Web/API/SVGSVGElement#svgsvgelement.usecurrentview) Eigenschaft wurde entfernt.
  (Weitere Details finden Sie in [Firefox Bug 1174097](https://bugzil.la/1174097)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für Realm im `target` Argument für die `script.evaluate`, `script.callFunction` und `script.disown` Befehle hinzugefügt ([Firefox Bug 1779231](https://bugzil.la/1779231)).

- Unterstützung für die JSON-Serialisierung komplexer Objekte mit Containerwertfeldern, z.B. `WeakMap` und `Uint8Array`, hinzugefügt ([Firefox Bug 1770754](https://bugzil.la/1770754)).

- Unterstützung für den `context` Parameter des `browsingContext.create` Befehls hinzugefügt, der das Öffnen eines neuen Tabs in Verbindung mit einem bestehenden ermöglicht ([Firefox Bug 1765619](https://bugzil.la/1765619)).

- Zuverlässigkeit des `browsingContext.navigate` Befehls beim Aufruf mit dem `wait` Parameter auf `none` verbessert ([Firefox Bug 1763109](https://bugzil.la/1763109)).

#### Marionette

- Der Befehl `WebDriver:ElementSendKeys` setzt den Cursor jetzt nur, wenn das Element noch nicht fokussiert ist ([Firefox Bug 1791736](https://bugzil.la/1791736)).

- Der Befehl `WebDriver:PerformAction` wurde aktualisiert, um `undefined` als Wert für verschiedene Parameter der `pointerMove` und `wheel` Aktionen nicht mehr zu akzeptieren ([Firefox Bug 1781066](https://bugzil.la/1781066)).

- Die [Selenium Atoms](https://firefox-source-docs.mozilla.org/testing/marionette/SeleniumAtoms.html) wurden aktualisiert, um einer kürzlichen Änderung in der WebDriver-Spezifikation zu entsprechen ([Firefox Bug 1771942](https://bugzil.la/1771942)).

## Änderungen für Add-on-Entwickler

### Andere

- Die `error` Eigenschaft, die zurückgegeben wird, wenn ein Fehler in {{WebExtAPIRef("scripting.executeScript")}} auftritt, repräsentiert jetzt jeden Wert, den das Skript wirft oder mit dem es verwirft, anstatt nur ein Objekt mit einer `message` Eigenschaft [Firefox Bug 1740608](https://bugzil.la/1740608).
