---
title: Firefox 107 für Entwickler
slug: Mozilla/Firefox/Releases/107
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel informiert über die Änderungen in Firefox 107, die Entwickler betreffen werden. Firefox 107 wurde am 15. November 2022 veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

Keine bemerkenswerten Änderungen

### MathML

- Die veralteten Attribute `lquote` und `rquote` des [`<ms>`](/de/docs/Web/MathML/Reference/Element/ms) MathML-Elements für benutzerdefinierte Anführungszeichen sind jetzt deaktiviert.
  Dieses Verhalten wird über die Einstellung `mathml.ms_lquote_rquote_attributes.disabled` konfiguriert, die standardmäßig auf `true` gesetzt ist ([Firefox-Bug 1793387](https://bugzil.la/1793387)).

### CSS

- Die verkürzte CSS-Eigenschaft [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size) kann jetzt angewendet werden, um die Größe eines UI-Elements anzugeben, das der [Größenbegrenzung](/de/docs/Web/CSS/CSS_containment#size_containment) unterliegt.
  Dies ermöglicht es dem Benutzeragenten, die Größe eines Elements zu bestimmen, ohne seine Kindelemente rendern zu müssen.
  Die verkürzten Eigenschaften [`contain-intrinsic-width`](/de/docs/Web/CSS/contain-intrinsic-width) und [`contain-intrinsic-height`](/de/docs/Web/CSS/contain-intrinsic-height) werden ebenfalls unterstützt, ebenso wie die [logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) [`contain-intrinsic-block-size`](/de/docs/Web/CSS/contain-intrinsic-block-size) und [`contain-intrinsic-inline-size`](/de/docs/Web/CSS/contain-intrinsic-inline-size).
  ([Firefox-Bug 1597529](https://bugzil.la/1597529)).
- Farbige Schriftarten werden jetzt über die [font-palette](/de/docs/Web/CSS/font-palette) Eigenschaft unterstützt ([Firefox-Bug 1791558](https://bugzil.la/1791558)). Unterstützung wurde ebenfalls für die CSS-At-Regel [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) und deren Deskriptoren [font-family](/de/docs/Web/CSS/@font-palette-values/font-family), [base-palette](/de/docs/Web/CSS/@font-palette-values/base-palette) und [override-colors](/de/docs/Web/CSS/@font-palette-values/override-colors) hinzugefügt. Zusammen helfen sie, die Farbpalette zu definieren ([Firefox-Bug 1791558](https://bugzil.la/1791558)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

#### Entfernungen

- Die nicht standardisierte und veraltete Eigenschaft [`SVGSVGElement.useCurrentView`](/de/docs/Web/API/SVGSVGElement#svgsvgelement.usecurrentview) wurde entfernt.
  (Weitere Details finden Sie unter [Firefox-Bug 1174097](https://bugzil.la/1174097)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für den `target`-Argument bei den Befehlen `script.evaluate`, `script.callFunction` und `script.disown` hinzugefügt, um Realm-Unterstützung hinzuzufügen ([Firefox-Bug 1779231](https://bugzil.la/1779231)).

- Unterstützung für die JSON-Serialisierung komplexer Objekte mit Containerwert-Feldern wie `WeakMap` und `Uint8Array` hinzugefügt ([Firefox-Bug 1770754](https://bugzil.la/1770754)).

- Unterstützung für den `context`-Parameter des `browsingContext.create`-Befehls hinzugefügt, der das Öffnen eines neuen Tabs in Bezug auf einen vorhandenen ermöglicht ([Firefox-Bug 1765619](https://bugzil.la/1765619)).

- Zuverlässigkeit des `browsingContext.navigate`-Befehls verbessert, wenn dieser mit dem `wait`-Parameter auf `none` gesetzt aufgerufen wird ([Firefox-Bug 1763109](https://bugzil.la/1763109)).

#### Marionette

- Der Befehl `WebDriver:ElementSendKeys` setzt den Cursor jetzt nur, wenn das Element noch nicht fokussiert ist ([Firefox-Bug 1791736](https://bugzil.la/1791736)).

- Der Befehl `WebDriver:PerformAction` wurde aktualisiert, um `undefined` nicht mehr als Wert für verschiedene Parameter der `pointerMove`- und `wheel`-Aktionen zu akzeptieren ([Firefox-Bug 1781066](https://bugzil.la/1781066)).

- Die [Selenium Atome](https://firefox-source-docs.mozilla.org/testing/marionette/SeleniumAtoms.html) wurden aktualisiert, um einer kürzlich erfolgten Änderung der WebDriver-Spezifikation zu entsprechen ([Firefox-Bug 1771942](https://bugzil.la/1771942)).

## Änderungen für Add-on-Entwickler

### Andere

- Die `error`-Eigenschaft, die zurückgegeben wird, wenn ein Fehler in {{WebExtAPIRef("scripting.executeScript")}} auftritt, stellt jetzt jeden Wert dar, den das Skript wirft oder mit dem es ablehnt, anstatt nur ein Objekt mit einer message-Eigenschaft zu sein [Firefox-Bug 1740608](https://bugzil.la/1740608).

## Ältere Versionen

{{Firefox_for_developers}}
