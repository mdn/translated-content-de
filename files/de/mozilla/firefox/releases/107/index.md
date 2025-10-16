---
title: Firefox 107 Versionshinweise für Entwickler
short-title: Firefox 107
slug: Mozilla/Firefox/Releases/107
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 107, die Entwickler betreffen. Firefox 107 wurde am 15. November 2022 veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

Keine bemerkenswerten Änderungen

### MathML

- Die veralteten Attribute `lquote` und `rquote` des [`<ms>`](/de/docs/Web/MathML/Reference/Element/ms) MathML-Elements für benutzerdefinierte öffnende und schließende Anführungszeichen sind nun deaktiviert.
  Dieses Verhalten wird über die Einstellung `mathml.ms_lquote_rquote_attributes.disabled` konfiguriert, welche standardmäßig auf `true` gesetzt ist ([Firefox-Bug 1793387](https://bugzil.la/1793387)).

### CSS

- Die verkürzte CSS-Eigenschaft [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size) kann jetzt angewendet werden, um die Größe eines UI-Elements festzulegen, das einer [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.
  Dies ermöglicht es einem Benutzeragenten, die Größe eines Elements zu bestimmen, ohne dessen Kindelemente rendern zu müssen.
  Die verkürzten Eigenschaften [`contain-intrinsic-width`](/de/docs/Web/CSS/contain-intrinsic-width) und [`contain-intrinsic-height`](/de/docs/Web/CSS/contain-intrinsic-height) werden ebenfalls unterstützt, zusammen mit den [logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) [`contain-intrinsic-block-size`](/de/docs/Web/CSS/contain-intrinsic-block-size) und [`contain-intrinsic-inline-size`](/de/docs/Web/CSS/contain-intrinsic-inline-size).
  ([Firefox-Bug 1597529](https://bugzil.la/1597529)).
- Farbige Schriftarten werden jetzt über die Eigenschaft [font-palette](/de/docs/Web/CSS/font-palette) unterstützt ([Firefox-Bug 1791558](https://bugzil.la/1791558)). Unterstützung wurde auch für die CSS-At-Regel [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) und deren Deskriptoren [font-family](/de/docs/Web/CSS/@font-palette-values/font-family), [base-palette](/de/docs/Web/CSS/@font-palette-values/base-palette) und [override-colors](/de/docs/Web/CSS/@font-palette-values/override-colors) hinzugefügt. Gemeinsam helfen sie, die Farbpalette zu definieren ([Firefox-Bug 1791558](https://bugzil.la/1791558)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

#### Entfernungen

- Die nicht standardisierte und veraltete Eigenschaft [`SVGSVGElement.useCurrentView`](/de/docs/Web/API/SVGSVGElement#svgsvgelement.usecurrentview) wurde entfernt.
  (Siehe [Firefox-Bug 1174097](https://bugzil.la/1174097) für weitere Details.)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für Realm im `target`-Argument für die Befehle `script.evaluate`, `script.callFunction` und `script.disown` hinzugefügt ([Firefox-Bug 1779231](https://bugzil.la/1779231)).

- Unterstützung für die JSON-Serialisierung von komplexen Objekten mit Feldern für Containervalue hinzugefügt, z.B. `WeakMap` und `Uint8Array` ([Firefox-Bug 1770754](https://bugzil.la/1770754)).

- Unterstützung für den `context`-Parameter des `browsingContext.create`-Befehls hinzugefügt, der das Öffnen eines neuen Tabs im Zusammenhang mit einem bestehenden ermöglicht ([Firefox-Bug 1765619](https://bugzil.la/1765619)).

- Verbesserte Zuverlässigkeit des `browsingContext.navigate`-Befehls, wenn dieser mit dem `wait`-Parameter auf `none` aufgerufen wird ([Firefox-Bug 1763109](https://bugzil.la/1763109)).

#### Marionette

- Der Befehl `WebDriver:ElementSendKeys` setzt jetzt nur den Cursor, wenn das Element noch nicht fokussiert ist ([Firefox-Bug 1791736](https://bugzil.la/1791736)).

- Der Befehl `WebDriver:PerformAction` wurde aktualisiert, um `undefined` nicht mehr als Wert für verschiedene Parameter der Aktionen `pointerMove` und `wheel` zu akzeptieren ([Firefox-Bug 1781066](https://bugzil.la/1781066)).

- Die [Selenium Atoms](https://firefox-source-docs.mozilla.org/testing/marionette/SeleniumAtoms.html) wurden aktualisiert, um einer kürzlich erfolgten Änderung der WebDriver-Spezifikation zu entsprechen ([Firefox-Bug 1771942](https://bugzil.la/1771942)).

## Änderungen für Add-on-Entwickler

### Sonstige

- Die `error`-Eigenschaft, die zurückgegeben wird, wenn ein Fehler bei {{WebExtAPIRef("scripting.executeScript")}} auftritt, repräsentiert nun jeden Wert, den das Skript auslöst oder ablehnt, anstatt nur ein Objekt mit einer Nachrichten-Eigenschaft zu sein [Firefox-Bug 1740608](https://bugzil.la/1740608).
