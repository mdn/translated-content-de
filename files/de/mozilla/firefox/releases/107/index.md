---
title: Firefox 107 Versionshinweise für Entwickler
short-title: Firefox 107
slug: Mozilla/Firefox/Releases/107
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 107, die Entwickler betreffen werden. Firefox 107 wurde am 15. November 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### MathML

- Die veralteten `lquote` und `rquote` Attribute des [`<ms>`](/de/docs/Web/MathML/Reference/Element/ms) MathML-Elements für benutzerdefinierte Öffnungs- und Schlusszeichen sind jetzt deaktiviert.
  Dieses Verhalten wird über die Einstellung `mathml.ms_lquote_rquote_attributes.disabled` konfiguriert, die standardmäßig auf `true` gesetzt ist ([Firefox Fehler 1793387](https://bugzil.la/1793387)).

### CSS

- Die einfach zu schreibende CSS-Eigenschaft [`contain-intrinsic-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size) kann jetzt angewendet werden, um die Größe eines UI-Elements anzugeben, das [Größenbeschränkung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.
  Dies ermöglicht einem Benutzeragenten die Größe eines Elements zu bestimmen, ohne seine Kindelemente rendern zu müssen.
  Die Kurzschrift-Eigenschaften [`contain-intrinsic-width`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-width) und [`contain-intrinsic-height`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-height) werden ebenfalls unterstützt, zusammen mit den [logischen Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values) [`contain-intrinsic-block-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size) und [`contain-intrinsic-inline-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size).
  ([Firefox Fehler 1597529](https://bugzil.la/1597529)).
- Farbige Schriftarten werden jetzt über die [font-palette](/de/docs/Web/CSS/Reference/Properties/font-palette) Eigenschaft unterstützt ([Firefox Fehler 1791558](https://bugzil.la/1791558)).
  Unterstützung wurde auch für die CSS-At-Regel [@font-palette-values](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) und ihre Deskriptoren [font-family](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/font-family), [base-palette](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/base-palette) und [override-colors](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/override-colors) hinzugefügt. Gemeinsam helfen sie dabei, die Farbpalette zu definieren ([Firefox Fehler 1791558](https://bugzil.la/1791558)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

#### Entfernungen

- Die nicht standardisierte und veraltete [`SVGSVGElement.useCurrentView`](/de/docs/Web/API/SVGSVGElement#svgsvgelement.usecurrentview) Eigenschaft wurde entfernt.
  (Weitere Einzelheiten finden Sie unter [Firefox Fehler 1174097](https://bugzil.la/1174097)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für Realm im `target` Argument für die Befehle `script.evaluate`, `script.callFunction` und `script.disown` hinzugefügt ([Firefox Fehler 1779231](https://bugzil.la/1779231)).

- Unterstützung für die JSON-Serialisierung komplexer Objekte mit Container-Werte-Feldern, z.B. `WeakMap` und `Uint8Array`, hinzugefügt ([Firefox Fehler 1770754](https://bugzil.la/1770754)).

- Unterstützung für den `context` Parameter des `browsingContext.create` Befehls hinzugefügt, der das Öffnen eines neuen Tabs in Bezug auf einen bestehenden erlaubt ([Firefox Fehler 1765619](https://bugzil.la/1765619)).

- Zuverlässigkeit des `browsingContext.navigate` Befehls verbessert, wenn dieser mit dem Parameter `wait` auf `none` aufgerufen wird ([Firefox Fehler 1763109](https://bugzil.la/1763109)).

#### Marionette

- Der Befehl `WebDriver:ElementSendKeys` setzt jetzt den Cursor nur, wenn das Element noch nicht fokussiert ist ([Firefox Fehler 1791736](https://bugzil.la/1791736)).

- Der Befehl `WebDriver:PerformAction` wurde aktualisiert, damit er `undefined` nicht mehr als Wert für verschiedene Parameter der `pointerMove` und `wheel` Aktionen akzeptiert ([Firefox Fehler 1781066](https://bugzil.la/1781066)).

- Die [Selenium Atoms](https://firefox-source-docs.mozilla.org/testing/marionette/SeleniumAtoms.html) wurden aktualisiert, um eine jüngste Änderung der WebDriver-Spezifikation zu berücksichtigen ([Firefox Fehler 1771942](https://bugzil.la/1771942)).

## Änderungen für Add-on-Entwickler

### Andere

- Die `error` Eigenschaft, die zurückgegeben wird, wenn ein Fehler in {{WebExtAPIRef("scripting.executeScript")}} auftritt, stellt jetzt jeden Wert dar, den das Skript auslöst oder mit dem es abgelehnt wird, anstatt nur ein Objekt mit einer message-Eigenschaft zu sein [Firefox Fehler 1740608](https://bugzil.la/1740608).
