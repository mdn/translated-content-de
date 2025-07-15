---
title: Firefox 106 für Entwickler
short-title: Firefox 106
slug: Mozilla/Firefox/Releases/106
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 106, die Entwickler betreffen. Firefox 106 wurde am 18. Oktober 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("source")}}-Element unterstützt nun die Attribute [`height`](/de/docs/Web/HTML/Reference/Elements/source#height) und [`width`](/de/docs/Web/HTML/Reference/Elements/source#width), wenn es ein Kind eines {{HTMLElement("picture")}}-Elements ist.
  Diese Funktion ist ein experimentelles Feature, das mit der Einstellung `dom.picture_source_dimension_attributes.enabled` aktiviert wird ([Firefox-Bug 1694741](https://bugzil.la/1694741)).

### MathML

- Die MathML-Elemente [`<semantics>`](/de/docs/Web/MathML/Reference/Element/semantics) und [`<maction>`](/de/docs/Web/MathML/Reference/Element/maction) rendern nun standardmäßig nur noch das erste Kindelement ([Firefox-Bug 1588733](https://bugzil.la/1588733)).

### CSS

- Die [@supports](/de/docs/Web/CSS/@supports)-Regel unterstützt nun die Funktionen `font-tech()` und `font-format()`.
  Diese Funktionen können verwendet werden, um zu testen, ob ein Browser eine bestimmte Schriftart-Technologie oder ein Format unterstützt, und CSS-Stile können basierend auf dem Ergebnis angewendet werden ([Firefox-Bug 1786493](https://bugzil.la/1786493)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- Die Eigenschaft [`HTMLMetaElement.media`](/de/docs/Web/API/HTMLMetaElement/media) wird nun unterstützt. Diese Eigenschaft ermöglicht es Ihnen, unterschiedliche Themenfarben basierend auf `media`-Werten (z.B. `max-width: 600px`) festzulegen.
  Meta-Elemente mit `media`-Eigenschaften erlauben es dem Browser, den `content`-Wert zusammen mit `theme-color` zu nutzen, um die Seite oder die UI-Farben für eine gegebene Media-Query festzulegen ([Firefox-Bug 1706179](https://bugzil.la/1706179)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Grundunterstützung für den `script.getRealms`-Befehl hinzugefügt, der derzeit auf den Typ `WindowRealmInfo` beschränkt ist, welcher Fenster-Realm und Sandbox-Realm einschließt ([Firefox-Bug 1766240](https://bugzil.la/1766240)).

- Unterstützung für das `browsingContext.load`-Ereignis hinzugefügt, das ausgelöst wird, wenn ein `load`-Ereignis auf einem `BrowsingContext`-Fenster ausgelöst wird ([Firefox-Bug 1756619](https://bugzil.la/1756619)).

- Ein Objektreferenzspeicher wurde hinzugefügt, um starke Referenzen für serialisierte entfernte Werte zu halten ([Firefox-Bug 1770736](https://bugzil.la/1770736)).

- Unterstützung für die Deserialisierung von Remote-Referenzen, die im Objektreferenzspeicher erstellt wurden, hinzugefügt ([Firefox-Bug 1788124](https://bugzil.la/1788124)).

- Vollständige Unterstützung für die Befehle `script.evaluate`, `script.callFunction` und `script.disown` hinzugefügt ([Firefox-Bug 1778976](https://bugzil.la/1778976)).

#### Marionette

- Unterstützung für `wheel`-Eingabequelle für [Aktionen](https://w3c.github.io/webdriver/webdriver-spec.html#actions) hinzugefügt, die mit einem Eingabegerät vom Typ Rad verbunden ist ([Firefox-Bug 1746601](https://bugzil.la/1746601)).

- Unterstützung für das Öffnen und Schließen von Tabs in GeckoView-basierten Anwendungen (z.B. Firefox für Android) hinzugefügt ([Firefox-Bug 1506782](https://bugzil.la/1506782)).

## Änderungen für Add-on-Entwickler

- Die Fähigkeit, die `"background"`-Schlüsseleigenschaft `"persistent"` im Manifest auf `false` zu setzen (um eine Hintergrundseite nicht-persistent zu machen), ist nun standardmäßig für Manifest V2 verfügbar.
- Die `object-src`-Direktive im `"content_security_policy"`-Schlüssel des Manifests ist nun optional ([Firefox-Bug 1766881](https://bugzil.la/1766881)). Weitere Details finden Sie in der [object-src-Direktive](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy#object-src_directive) auf der Seite des `"content_security_policy"`-Manifests.
