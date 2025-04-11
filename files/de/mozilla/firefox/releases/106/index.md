---
title: Firefox 106 für Entwickler
slug: Mozilla/Firefox/Releases/106
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 106, die Entwickler betreffen. Firefox 106 wurde am 18. Oktober 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("source")}}-Element unterstützt jetzt die Attribute [`height`](/de/docs/Web/HTML/Reference/Elements/source#height) & [`width`](/de/docs/Web/HTML/Reference/Elements/source#width), wenn es ein Kind eines {{HTMLElement("picture")}}-Elements ist. Diese Funktionalität ist ein experimentelles Feature, das mit der Einstellung `dom.picture_source_dimension_attributes.enabled` aktiviert wird ([Firefox Fehler 1694741](https://bugzil.la/1694741)).

### MathML

- Die MathML-Elemente [`<semantics>`](/de/docs/Web/MathML/Reference/Element/semantics) und [`<maction>`](/de/docs/Web/MathML/Reference/Element/maction) rendern jetzt standardmäßig nur noch das erste Kindelement ([Firefox Fehler 1588733](https://bugzil.la/1588733)).

### CSS

- Die At-Regel [@supports](/de/docs/Web/CSS/@supports) unterstützt nun die Funktionen `font-tech()` und `font-format()`. Diese Funktionen können verwendet werden, um zu testen, ob ein Browser eine bestimmte Schrifttechnologie oder ein bestimmtes Format unterstützt, und CSS-Stile können basierend auf dem Ergebnis angewendet werden ([Firefox Fehler 1786493](https://bugzil.la/1786493)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- Die Eigenschaft [`HTMLMetaElement.media`](/de/docs/Web/API/HTMLMetaElement/media) wird jetzt unterstützt. Diese Eigenschaft ermöglicht es Ihnen, verschiedene Themenfarben basierend auf `media`-Werten festzulegen (z.B. `max-width: 600px`). Meta-Elemente mit `media`-Eigenschaften erlauben es dem Browser, den `content`-Wert in Verbindung mit `theme-color` zu verwenden, um die Farben der Seite oder der Benutzeroberfläche für eine gegebene Media Query festzulegen ([Firefox Fehler 1706179](https://bugzil.la/1706179)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Grundlegende Unterstützung für den `script.getRealms`-Befehl hinzugefügt, der derzeit auf den Typ `WindowRealmInfo` beschränkt ist, der Fensterbereiche und Sandkastenbereiche umfasst ([Firefox Fehler 1766240](https://bugzil.la/1766240)).

- Unterstützung für das `browsingContext.load`-Ereignis hinzugefügt, das ausgelöst wird, wenn ein `load`-Ereignis auf einem BrowsingContext-Fenster ausgelöst wird ([Firefox Fehler 1756619](https://bugzil.la/1756619)).

- Ein Objektreferenzspeicher hinzugefügt, um starke Referenzen für serialisierte Remote-Werte zu halten ([Firefox Fehler 1770736](https://bugzil.la/1770736)).

- Unterstützung für die Deserialisierung von Remote-Referenzen hinzugefügt, die im Objektreferenzspeicher erstellt wurden ([Firefox Fehler 1788124](https://bugzil.la/1788124)).

- Vollständige Unterstützung für die Befehle `script.evaluate`, `script.callFunction` und `script.disown` hinzugefügt ([Firefox Fehler 1778976](https://bugzil.la/1778976)).

#### Marionette

- Unterstützung für `wheel`-Eingabequelle für [Aktionen](https://w3c.github.io/webdriver/webdriver-spec.html#actions) hinzugefügt, die mit einem Eingabegerät vom Typ Rad verbunden ist ([Firefox Fehler 1746601](https://bugzil.la/1746601)).

- Unterstützung für das Öffnen und Schließen von Tabs in GeckoView-basierten Anwendungen (z.B. Firefox für Android) hinzugefügt ([Firefox Fehler 1506782](https://bugzil.la/1506782)).

## Änderungen für Add-on-Entwickler

- Die Fähigkeit, den Manifest-Schlüsseleigenschaft [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) `"persistent"` auf `false` zu setzen, um eine Hintergrundseite nicht persistent zu machen, steht jetzt standardmäßig für Manifest V2 zur Verfügung.
- Die `object-src`-Direktive im Manifest-Schlüssel `"content_security_policy"` ist jetzt optional ([Firefox Fehler 1766881](https://bugzil.la/1766881)). Siehe [object-src Direktive](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy#object-src_directive) auf der Seite des Manifest-Schlüssels `"content_security_policy"` für weitere Details.

## Ältere Versionen

{{Firefox_for_developers}}
