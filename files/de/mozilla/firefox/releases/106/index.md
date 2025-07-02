---
title: Firefox 106 für Entwickler
slug: Mozilla/Firefox/Releases/106
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 106, die Entwickler betreffen. Firefox 106 wurde am 18. Oktober 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("source")}}-Element unterstützt nun die Attribute [`height`](/de/docs/Web/HTML/Reference/Elements/source#height) und [`width`](/de/docs/Web/HTML/Reference/Elements/source#width), wenn es ein Kind eines {{HTMLElement("picture")}}-Elements ist.
  Diese Funktionalität ist ein experimentelles Feature, das mit der Einstellung `dom.picture_source_dimension_attributes.enabled` aktiviert wird ([Firefox Bug 1694741](https://bugzil.la/1694741)).

### MathML

- Die MathML-Elemente [`<semantics>`](/de/docs/Web/MathML/Reference/Element/semantics) und [`<maction>`](/de/docs/Web/MathML/Reference/Element/maction) rendern standardmäßig nur noch das erste Kind-Element ([Firefox Bug 1588733](https://bugzil.la/1588733)).

### CSS

- Die [@supports](/de/docs/Web/CSS/@supports)-At-Regel unterstützt nun die Funktionen `font-tech()` und `font-format()`.
  Diese Funktionen können genutzt werden, um zu überprüfen, ob ein Browser eine bestimmte Schrifttechnologie oder -format unterstützt, und CSS-Stile können basierend auf dem Ergebnis angewendet werden ([Firefox Bug 1786493](https://bugzil.la/1786493)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- Die [`HTMLMetaElement.media`](/de/docs/Web/API/HTMLMetaElement/media)-Eigenschaft wird nun unterstützt. Diese Eigenschaft ermöglicht es Ihnen, unterschiedliche Themes-Farben basierend auf `media`-Werten zu setzen (z. B. `max-width: 600px`).
  Meta-Elemente mit `media`-Eigenschaften erlauben es dem Browser, den `content`-Wert in Verbindung mit `theme-color` zu nutzen, um die Seiten- oder UI-Farben für eine gegebene Media-Query zu setzen ([Firefox Bug 1706179](https://bugzil.la/1706179)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Grundlegende Unterstützung für den Befehl `script.getRealms` hinzugefügt, der derzeit auf den Typ `WindowRealmInfo` beschränkt ist, welcher Fenster-Realm- und Sandbox-Realm-Informationen enthält ([Firefox Bug 1766240](https://bugzil.la/1766240)).

- Unterstützung für das `browsingContext.load`-Ereignis hinzugefügt, das ausgelöst wird, wenn ein `load`-Ereignis im Fenster eines BrowsingContext ausgelöst wird ([Firefox Bug 1756619](https://bugzil.la/1756619)).

- Ein Objekt-Referenzspeicher hinzugefügt, um starke Referenzen für serialisierte Remote-Werte zu halten ([Firefox Bug 1770736](https://bugzil.la/1770736)).

- Unterstützung für die Deserialisierung von in dem Objekt-Referenzspeicher erstellten Remote-Referenzen hinzugefügt ([Firefox Bug 1788124](https://bugzil.la/1788124)).

- Vollständige Unterstützung für die Befehle `script.evaluate`, `script.callFunction` und `script.disown` hinzugefügt ([Firefox Bug 1778976](https://bugzil.la/1778976)).

#### Marionette

- Unterstützung für die `wheel`-Eingabequelle für [Actions](https://w3c.github.io/webdriver/webdriver-spec.html#actions) hinzugefügt, die mit einem Eingabegerät vom Typ Rad in Verbindung steht ([Firefox Bug 1746601](https://bugzil.la/1746601)).

- Unterstützung für das Öffnen und Schließen von Tabs in GeckoView-basierten Anwendungen (z. B. Firefox für Android) hinzugefügt ([Firefox Bug 1506782](https://bugzil.la/1506782)).

## Änderungen für Add-on-Entwickler

- Die Möglichkeit, den [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)-Manifest-Schlüssel `"persistent"` standardmäßig auf `false` zu setzen, um eine Hintergrundseite nicht persistent zu machen, ist nun standardmäßig verfügbar.
- Die Direktive `object-src` im `"content_security_policy"`-Manifests ist nun optional ([Firefox Bug 1766881](https://bugzil.la/1766881)). Weitere Details finden Sie unter [object-src directive](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy#object-src_directive) auf der Seite zum `"content_security_policy"`-Manifest.

## Ältere Versionen

{{Firefox_for_developers}}
