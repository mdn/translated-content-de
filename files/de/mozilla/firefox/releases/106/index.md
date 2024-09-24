---
title: Firefox 106 für Entwickler
slug: Mozilla/Firefox/Releases/106
l10n:
  sourceCommit: f6d38a35950a07266a18518506a7fc20b358492c
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 106, die Entwickler betreffen. Firefox 106 wurde am 18. Oktober 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("source")}}-Element unterstützt jetzt die Attribute [`height`](/de/docs/Web/HTML/Element/source#height) & [`width`](/de/docs/Web/HTML/Element/source#width), wenn es ein Kind von einem {{HTMLElement("picture")}}-Element ist.
  Diese Funktionalität ist ein experimentelles Feature, das mit der Einstellung `dom.picture_source_dimension_attributes.enabled` aktiviert wird ([Firefox Bug 1694741](https://bugzil.la/1694741)).

### MathML

- Die MathML-Elemente [`<semantics>`](/de/docs/Web/MathML/Element/semantics) und [`<maction>`](/de/docs/Web/MathML/Element/maction) rendern jetzt standardmäßig nur das erste Kindelement ([Firefox Bug 1588733](https://bugzil.la/1588733)).

### CSS

- Die At-Regel [@supports](/de/docs/Web/CSS/@supports) unterstützt jetzt die Funktionen `font-tech()` und `font-format()`.
  Diese Funktionen können verwendet werden, um zu testen, ob ein Browser eine bestimmte Schriftart-Technologie oder -Format unterstützt, und CSS-Stile können basierend auf dem Ergebnis angewendet werden ([Firefox Bug 1786493](https://bugzil.la/1786493)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- Die Eigenschaft [`HTMLMetaElement.media`](/de/docs/Web/API/HTMLMetaElement/media) wird jetzt unterstützt. Diese Eigenschaft ermöglicht es Ihnen, unterschiedliche Themafarben basierend auf `media`-Werten (z.B. `max-width: 600px`) zu setzen.
  Meta-Elemente mit `media`-Eigenschaften erlauben dem Browser, den `content`-Wert in Verbindung mit `theme-color` zu verwenden, um die Seiten- oder UI-Farben für eine gegebene Medienabfrage einzustellen ([Firefox Bug 1706179](https://bugzil.la/1706179)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Grundlegende Unterstützung für den Befehl `script.getRealms` hinzugefügt, der derzeit auf den Typ `WindowRealmInfo` beschränkt ist, der Fenster- und Sandbox-Bereiche umfasst ([Firefox Bug 1766240](https://bugzil.la/1766240)).

- Unterstützung für das `browsingContext.load`-Ereignis hinzugefügt, das ausgelöst wird, wenn ein `load`-Ereignis in einem BrowsingContext-Fenster ausgelöst wird ([Firefox Bug 1756619](https://bugzil.la/1756619)).

- Ein Objektverweis-Store hinzugefügt, um starke Referenzen für serialisierte Remote-Werte zu halten ([Firefox Bug 1770736](https://bugzil.la/1770736)).

- Unterstützung für das Deserialisieren von in dem Objektverweis-Store erstellten Remote-Referenzen hinzugefügt ([Firefox Bug 1788124](https://bugzil.la/1788124)).

- Volle Unterstützung für die Befehle `script.evaluate`, `script.callFunction` und `script.disown` hinzugefügt ([Firefox Bug 1778976](https://bugzil.la/1778976)).

#### Marionette

- Unterstützung für `wheel`-Eingabequellen für [Aktionen](https://w3c.github.io/webdriver/webdriver-spec.html#actions) hinzugefügt, die mit einem Eingabegerät des Typs Rad verbunden sind ([Firefox Bug 1746601](https://bugzil.la/1746601)).

- Unterstützung zum Öffnen und Schließen von Tabs in GeckoView-basierten Anwendungen (z.B. Firefox für Android) hinzugefügt ([Firefox Bug 1506782](https://bugzil.la/1506782)).

## Änderungen für Add-on-Entwickler

- Die Möglichkeit, die Eigenschaft `"persistent"` des [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)-Manifest-Schlüssel auf `false` für Manifest V2 zu setzen (um eine Hintergrundseite nicht persistent zu machen), ist jetzt standardmäßig verfügbar.
- Die `object-src`-Direktive im `"content_security_policy"`-Manifest-Schlüssel ist jetzt optional ([Firefox Bug 1766881](https://bugzil.la/1766881)). Siehe [object-src Direktive](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy#object-src_directive) auf der `"content_security_policy"`-Manifest-Schlüsselseite für mehr Details.

## Ältere Versionen

{{Firefox_for_developers}}
