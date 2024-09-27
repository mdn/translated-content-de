---
title: Firefox 106 für Entwickler
slug: Mozilla/Firefox/Releases/106
l10n:
  sourceCommit: f6d38a35950a07266a18518506a7fc20b358492c
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 106, die Entwickler betreffen. Firefox 106 wurde am 18. Oktober 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("source")}}-Element unterstützt nun die Attribute [`height`](/de/docs/Web/HTML/Element/source#height) & [`width`](/de/docs/Web/HTML/Element/source#width), wenn es ein Kind des {{HTMLElement("picture")}}-Elements ist.
  Diese Funktionalität ist ein experimentelles Feature, das über die Einstellung `dom.picture_source_dimension_attributes.enabled` aktiviert wird ([Firefox-Bug 1694741](https://bugzil.la/1694741)).

### MathML

- Die MathML-Elemente [`<semantics>`](/de/docs/Web/MathML/Element/semantics) und [`<maction>`](/de/docs/Web/MathML/Element/maction) rendern nun standardmäßig nur das erste Kindelement ([Firefox-Bug 1588733](https://bugzil.la/1588733)).

### CSS

- Die Regel [@supports](/de/docs/Web/CSS/@supports) unterstützt nun die Funktionen `font-tech()` und `font-format()`.
  Diese Funktionen können verwendet werden, um zu testen, ob ein Browser eine bestimmte Schrifttechnologie oder ein Format unterstützt, und CSS-Stile können basierend auf dem Ergebnis angewendet werden ([Firefox-Bug 1786493](https://bugzil.la/1786493)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- Die Eigenschaft [`HTMLMetaElement.media`](/de/docs/Web/API/HTMLMetaElement/media) wird nun unterstützt. Diese Eigenschaft ermöglicht es, unterschiedliche Farbschemata basierend auf `media`-Werten (z.B. `max-width: 600px`) festzulegen.
  Meta-Elemente mit `media`-Eigenschaften erlauben es dem Browser, den `content`-Wert in Verbindung mit `theme-color` zu nutzen, um die Seiten- oder UI-Farben für eine bestimmte Medienabfrage festzulegen ([Firefox-Bug 1706179](https://bugzil.la/1706179)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Es wurde grundlegende Unterstützung für den `script.getRealms`-Befehl hinzugefügt, der derzeit auf den `WindowRealmInfo`-Typ beschränkt ist, welcher Fenster-Reiche und Sandkasten-Reiche umfasst ([Firefox-Bug 1766240](https://bugzil.la/1766240)).

- Unterstützung für das `browsingContext.load`-Ereignis wurde hinzugefügt, das ausgelöst wird, wenn ein `load`-Ereignis im Fenster eines BrowsingContext ausgelöst wird ([Firefox-Bug 1756619](https://bugzil.la/1756619)).

- Ein Objektreferenzspeicher wurde hinzugefügt, um starke Referenzen für serialisierte Remote-Werte zu halten ([Firefox-Bug 1770736](https://bugzil.la/1770736)).

- Unterstützung für das Deserialisieren von Remote-Referenzen, die im Objektreferenzspeicher erstellt wurden, wurde hinzugefügt ([Firefox-Bug 1788124](https://bugzil.la/1788124)).

- Vollständige Unterstützung für die Befehle `script.evaluate`, `script.callFunction` und `script.disown` wurde hinzugefügt ([Firefox-Bug 1778976](https://bugzil.la/1778976)).

#### Marionette

- Unterstützung für `wheel`-Eingabequelle für [Actions](https://w3c.github.io/webdriver/webdriver-spec.html#actions), die mit einem radartyp-Eingabegerät verbunden ist, wurde hinzugefügt ([Firefox-Bug 1746601](https://bugzil.la/1746601)).

- Unterstützung für das Öffnen und Schließen von Tabs in GeckoView-basierten Anwendungen (z.B. Firefox für Android) wurde hinzugefügt ([Firefox-Bug 1506782](https://bugzil.la/1506782)).

## Änderungen für Add-on-Entwickler

- Die Möglichkeit, die Eigenschaft `"persistent"` des Manifests [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) auf `false` zu setzen (um eine Hintergrundseite nicht persistent zu machen), ist nun standardmäßig verfügbar.
- Die Richtlinie `object-src` im `"content_security_policy"` Manifest-Schlüssel ist jetzt optional ([Firefox-Bug 1766881](https://bugzil.la/1766881)). Siehe die [object-src-Direktive](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy#object-src_directive) auf der Seite des `"content_security_policy"` Manifest-Schlüssels für weitere Details.

## Ältere Versionen

{{Firefox_for_developers}}
