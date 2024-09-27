---
title: Firefox 107 für Entwickler
slug: Mozilla/Firefox/Releases/107
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 107, die Entwickler betreffen. Firefox 107 wurde am 15. November 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### MathML

- Die veralteten Attribute `lquote` und `rquote` des MathML-Elements [`<ms>`](/de/docs/Web/MathML/Element/ms) für benutzerdefinierte Anfangs- und Endzeichen sind jetzt deaktiviert.
  Dieses Verhalten wird über die Voreinstellung `mathml.ms_lquote_rquote_attributes.disabled` gesteuert, die standardmäßig auf `true` gesetzt ist ([Firefox-Bug 1793387](https://bugzil.la/1793387)).

### CSS

- Die CSS-Kurzschreibweise [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size) kann jetzt angewendet werden, um die Größe eines UI-Elements anzugeben, das der [Größeneinschränkung](/de/docs/Web/CSS/CSS_containment#size_containment) unterliegt.
  Dadurch kann ein Benutzeragent die Größe eines Elements bestimmen, ohne dessen Kindelemente rendern zu müssen.
  Die Kurzschreibweisen [`contain-intrinsic-width`](/de/docs/Web/CSS/contain-intrinsic-width) und [`contain-intrinsic-height`](/de/docs/Web/CSS/contain-intrinsic-height) werden ebenfalls unterstützt, zusammen mit den [logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) [`contain-intrinsic-block-size`](/de/docs/Web/CSS/contain-intrinsic-block-size) und [`contain-intrinsic-inline-size`](/de/docs/Web/CSS/contain-intrinsic-inline-size).
  ([Firefox-Bug 1597529](https://bugzil.la/1597529)).
- Farbige Schriftarten werden jetzt über die Eigenschaft [font-palette](/de/docs/Web/CSS/font-palette) unterstützt ([Firefox-Bug 1791558](https://bugzil.la/1791558)). Unterstützung wurde auch für die CSS-At-Regel [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) und deren Deskriptoren [font-family](/de/docs/Web/CSS/@font-palette-values/font-family), [base-palette](/de/docs/Web/CSS/@font-palette-values/base-palette) und [override-colors](/de/docs/Web/CSS/@font-palette-values/override-colors) hinzugefügt. Zusammen helfen sie, die Farbpalette zu definieren ([Firefox-Bug 1791558](https://bugzil.la/1791558)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

#### Entfernungen

- Die nicht standardisierte und veraltete Eigenschaft [`SVGSVGElement.useCurrentView`](/de/docs/Web/API/SVGSVGElement#svgsvgelement.usecurrentview) wurde entfernt.
  (Weitere Details finden Sie in [Firefox-Bug 1174097](https://bugzil.la/1174097)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das Realm-Argument für die Befehle `script.evaluate`, `script.callFunction` und `script.disown` hinzugefügt ([Firefox-Bug 1779231](https://bugzil.la/1779231)).

- Unterstützung für die JSON-Serialisierung komplexer Objekte mit Container-Wertfeldern, z.B. `WeakMap` und `Uint8Array`, hinzugefügt ([Firefox-Bug 1770754](https://bugzil.la/1770754)).

- Unterstützung für den `context`-Parameter des Befehls `browsingContext.create` hinzugefügt, der es ermöglicht, ein neues Tab zu öffnen, das mit einem bestehenden verbunden ist ([Firefox-Bug 1765619](https://bugzil.la/1765619)).

- Zuverlässigkeit des Befehls `browsingContext.navigate` verbessert, wenn er mit dem `wait`-Parameter auf `none` aufgerufen wird ([Firefox-Bug 1763109](https://bugzil.la/1763109)).

#### Marionette

- Der Befehl `WebDriver:ElementSendKeys` setzt jetzt nur das Caret, wenn das Element noch nicht fokussiert ist ([Firefox-Bug 1791736](https://bugzil.la/1791736)).

- Der Befehl `WebDriver:PerformAction` wurde aktualisiert, um `undefined` nicht länger als Wert für verschiedene Parameter der Aktionen `pointerMove` und `wheel` zu akzeptieren ([Firefox-Bug 1781066](https://bugzil.la/1781066)).

- Die [Selenium Atoms](https://firefox-source-docs.mozilla.org/testing/marionette/SeleniumAtoms.html) wurden aktualisiert, um einer kürzlichen Änderung der WebDriver-Spezifikation zu entsprechen ([Firefox-Bug 1771942](https://bugzil.la/1771942)).

## Änderungen für Add-On-Entwickler

### Sonstiges

- Die `error`-Eigenschaft, die zurückgegeben wird, wenn ein Fehler in {{WebExtAPIRef("scripting.executeScript")}} auftritt, repräsentiert jetzt jeden Wert, den das Skript wirft oder ablehnt, anstatt nur ein Objekt mit einer `message`-Eigenschaft zu sein [Firefox-Bug 1740608](https://bugzil.la/1740608).

## Ältere Versionen

{{Firefox_for_developers}}
