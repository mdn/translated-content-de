---
title: Firefox 107 Versionshinweise für Entwickler
short-title: Firefox 107
slug: Mozilla/Firefox/Releases/107
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 107, die Entwickler betreffen werden. Firefox 107 wurde am 15. November 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### MathML

- Die veralteten Attribute `lquote` und `rquote` des [`<ms>`](/de/docs/Web/MathML/Reference/Element/ms) MathML-Elements für benutzerdefinierte Anfangs- und Schlussanführungszeichen sind nun deaktiviert.
  Dieses Verhalten wird über die Voreinstellung `mathml.ms_lquote_rquote_attributes.disabled` konfiguriert, die standardmäßig auf `true` gesetzt ist ([Firefox-Bug 1793387](https://bugzil.la/1793387)).

### CSS

- Die abkürzende CSS-Eigenschaft [`contain-intrinsic-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size) kann nun angewendet werden, um die Größe eines UI-Elements anzugeben, das der [Größenbeschränkung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.
  Dies ermöglicht es einem Benutzeragenten, die Größe eines Elements zu bestimmen, ohne dessen Kindelemente rendern zu müssen.
  Die abkürzenden Eigenschaften [`contain-intrinsic-width`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-width) und [`contain-intrinsic-height`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-height) werden ebenfalls unterstützt, zusammen mit den [logischen Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values) [`contain-intrinsic-block-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size) und [`contain-intrinsic-inline-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size).
  ([Firefox-Bug 1597529](https://bugzil.la/1597529)).
- Farbige Schriftarten werden nun durch die [font-palette](/de/docs/Web/CSS/Reference/Properties/font-palette) Eigenschaft unterstützt ([Firefox-Bug 1791558](https://bugzil.la/1791558)). Unterstützung wurde auch für die CSS-At-Regel [@font-palette-values](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) und ihre Deskriptoren [font-family](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/font-family), [base-palette](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/base-palette), und [override-colors](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/override-colors) hinzugefügt. Zusammen helfen sie, die Farbpalette zu definieren ([Firefox-Bug 1791558](https://bugzil.la/1791558)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

#### Entfernen

- Die nicht-standardisierte und veraltete Eigenschaft [`SVGSVGElement.useCurrentView`](/de/docs/Web/API/SVGSVGElement#svgsvgelement.usecurrentview) wurde entfernt.
  (Siehe [Firefox-Bug 1174097](https://bugzil.la/1174097) für weitere Details.)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für Realm zum `target`-Argument für `script.evaluate`, `script.callFunction` und `script.disown`-Befehle hinzugefügt ([Firefox-Bug 1779231](https://bugzil.la/1779231)).

- Unterstützung für JSON-Serialisierung von komplexen Objekten mit Containerwertfeldern, z.B. `WeakMap` und `Uint8Array`, hinzugefügt ([Firefox-Bug 1770754](https://bugzil.la/1770754)).

- Unterstützung für den `context`-Parameter des `browsingContext.create`-Befehls hinzugefügt, der es ermöglicht, einen neuen Tab zu öffnen, der mit einem vorhandenen verknüpft ist ([Firefox-Bug 1765619](https://bugzil.la/1765619)).

- Zuverlässigkeit des `browsingContext.navigate`-Befehls verbessert, wenn er mit dem `wait`-Parameter `none` aufgerufen wird ([Firefox-Bug 1763109](https://bugzil.la/1763109)).

#### Marionette

- Der Befehl `WebDriver:ElementSendKeys` setzt den Cursor jetzt nur, wenn das Element noch nicht fokussiert ist ([Firefox-Bug 1791736](https://bugzil.la/1791736)).

- Der Befehl `WebDriver:PerformAction` wurde aktualisiert, um `undefined` nicht mehr als Wert für verschiedene Parameter der `pointerMove` und `wheel` Aktionen zu akzeptieren ([Firefox-Bug 1781066](https://bugzil.la/1781066)).

- Die [Selenium Atoms](https://firefox-source-docs.mozilla.org/remote/marionette/SeleniumAtoms.html) wurden aktualisiert, um einer kürzlich vorgenommenen WebDriver-Spezifikationsänderung zu entsprechen ([Firefox-Bug 1771942](https://bugzil.la/1771942)).

## Änderungen für Add-on-Entwickler

### Sonstiges

- Die `error`-Eigenschaft, die zurückgegeben wird, wenn ein Fehler in {{WebExtAPIRef("scripting.executeScript")}} auftritt, stellt jetzt jeden Wert dar, den das Skript auslöst oder mit dem es ablehnt, anstatt nur ein Objekt mit einer Message-Eigenschaft zu sein [Firefox-Bug 1740608](https://bugzil.la/1740608).
