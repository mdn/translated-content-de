---
title: Firefox 107 Versionshinweise für Entwickler
short-title: Firefox 107
slug: Mozilla/Firefox/Releases/107
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 107, die Entwickler betreffen. Firefox 107 wurde am 15. November 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### MathML

- Die veralteten `lquote`- und `rquote`-Attribute des [`<ms>`](/de/docs/Web/MathML/Reference/Element/ms)-MathML-Elements für benutzerdefinierte Anführungszeichen am Anfang und Ende sind jetzt deaktiviert.
  Dieses Verhalten wird über die Einstellung `mathml.ms_lquote_rquote_attributes.disabled` konfiguriert, die standardmäßig auf `true` gesetzt ist ([Firefox-Bug 1793387](https://bugzil.la/1793387)).

### CSS

- Die Kurzschreibweise der CSS-Eigenschaft [`contain-intrinsic-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size) kann jetzt angewendet werden, um die Größe eines UI-Elements zu spezifizieren, das der [Größenbegrenzung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.
  Dadurch kann ein Benutzeragent die Größe eines Elements bestimmen, ohne dessen Kindelemente rendern zu müssen.
  Die Kurzform-Eigenschaften [`contain-intrinsic-width`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-width) und [`contain-intrinsic-height`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-height) werden ebenfalls unterstützt, zusammen mit den [logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) [`contain-intrinsic-block-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size) und [`contain-intrinsic-inline-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size).
  ([Firefox-Bug 1597529](https://bugzil.la/1597529)).
- Farbige Schriftarten werden jetzt über die [font-palette](/de/docs/Web/CSS/Reference/Properties/font-palette)-Eigenschaft unterstützt ([Firefox-Bug 1791558](https://bugzil.la/1791558)). Unterstützung wurde auch für die CSS-At-Regel [@font-palette-values](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) und deren Deskriptoren [font-family](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/font-family), [base-palette](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/base-palette) und [override-colors](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/override-colors) hinzugefügt. Zusammen helfen sie, die Farbpalette zu definieren ([Firefox-Bug 1791558](https://bugzil.la/1791558)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

#### Entfernte Funktionen

- Die nicht standardisierte und veraltete [`SVGSVGElement.useCurrentView`](/de/docs/Web/API/SVGSVGElement#svgsvgelement.usecurrentview)-Eigenschaft wurde entfernt.
  (Siehe [Firefox-Bug 1174097](https://bugzil.la/1174097) für weitere Details.)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für `Realm`-Argumente zu `target` für die Befehle `script.evaluate`, `script.callFunction` und `script.disown` hinzugefügt ([Firefox-Bug 1779231](https://bugzil.la/1779231)).

- Unterstützung für die JSON-Serialisierung komplexer Objekte mit Containerwertfeldern, z.B. `WeakMap` und `Uint8Array`, hinzugefügt ([Firefox-Bug 1770754](https://bugzil.la/1770754)).

- Unterstützung für den `context`-Parameter des Befehls `browsingContext.create` hinzugefügt, der das Öffnen eines neuen Tabs in Bezug auf einen bestehenden ermöglicht ([Firefox-Bug 1765619](https://bugzil.la/1765619)).

- Zuverlässigkeit des Befehls `browsingContext.navigate` verbessert, wenn mit dem Parameter `wait` auf `none` gesetzt aufgerufen ([Firefox-Bug 1763109](https://bugzil.la/1763109)).

#### Marionette

- Der Befehl `WebDriver:ElementSendKeys` setzt jetzt nur dann den Cursor, wenn das Element noch nicht fokussiert ist ([Firefox-Bug 1791736](https://bugzil.la/1791736)).

- Der Befehl `WebDriver:PerformAction` wurde aktualisiert, um `undefined` nicht mehr als Wert für verschiedene Parameter der Aktionen `pointerMove` und `wheel` zu akzeptieren ([Firefox-Bug 1781066](https://bugzil.la/1781066)).

- Die [Selenium Atoms](https://firefox-source-docs.mozilla.org/testing/marionette/SeleniumAtoms.html) wurden aktualisiert, um einer kürzlichen Änderung der WebDriver-Spezifikation zu entsprechen ([Firefox-Bug 1771942](https://bugzil.la/1771942)).

## Änderungen für Add-on-Entwickler

### Sonstiges

- Die `error`-Property, die bei einem Fehler in {{WebExtAPIRef("scripting.executeScript")}} zurückgegeben wird, repräsentiert nun jeden Wert, den das Skript wirft oder mit dem es abgelehnt wird, anstatt nur ein Objekt mit einer Nachrichten-Property zu sein [Firefox-Bug 1740608](https://bugzil.la/1740608).
