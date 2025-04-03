---
title: Firefox 106 für Entwickler
slug: Mozilla/Firefox/Releases/106
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 106, die Entwickler betreffen werden. Firefox 106 wurde am 18. Oktober 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("source")}}-Element unterstützt jetzt die Attribute [`height`](/de/docs/Web/HTML/Element/source#height) und [`width`](/de/docs/Web/HTML/Element/source#width), wenn es ein Kind eines {{HTMLElement("picture")}}-Elements ist. Diese Funktionalität ist ein experimentelles Feature, das mithilfe der Voreinstellung `dom.picture_source_dimension_attributes.enabled` aktiviert wird ([Firefox-Bug 1694741](https://bugzil.la/1694741)).

### MathML

- Die MathML-Elemente [`<semantics>`](/de/docs/Web/MathML/Reference/Element/semantics) und [`<maction>`](/de/docs/Web/MathML/Reference/Element/maction) rendern standardmäßig jetzt nur das erste Kindelement ([Firefox-Bug 1588733](https://bugzil.la/1588733)).

### CSS

- Die At-Regel [@supports](/de/docs/Web/CSS/@supports) unterstützt jetzt die Funktionen `font-tech()` und `font-format()`. Diese Funktionen können verwendet werden, um zu testen, ob ein Browser eine bestimmte Schrifttechnologie oder ein Format unterstützt, und CSS-Stile können basierend auf dem Ergebnis angewendet werden ([Firefox-Bug 1786493](https://bugzil.la/1786493)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- Die Eigenschaft [`HTMLMetaElement.media`](/de/docs/Web/API/HTMLMetaElement/media) wird jetzt unterstützt. Diese Eigenschaft ermöglicht es Ihnen, verschiedene Themenfarben basierend auf `media`-Werte (z. B. `max-width: 600px`) festzulegen. Meta-Elemente mit `media`-Eigenschaften ermöglichen es dem Browser, den `content`-Wert zusammen mit `theme-color` zu verwenden, um die Seiten- oder UI-Farben für eine gegebene Medienabfrage festzulegen ([Firefox-Bug 1706179](https://bugzil.la/1706179)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Grundlegende Unterstützung für den `script.getRealms`-Befehl wurde hinzugefügt, der derzeit auf den Typ `WindowRealmInfo` beschränkt ist, der Fenster-Reiche und Sandbox-Reiche umfasst ([Firefox-Bug 1766240](https://bugzil.la/1766240)).

- Unterstützung für das `browsingContext.load`-Ereignis wurde hinzugefügt, das ausgelöst wird, wenn ein `load`-Ereignis auf einem Fenster von BrowsingContext ausgelöst wird ([Firefox-Bug 1756619](https://bugzil.la/1756619)).

- Ein Objekt-Referenzspeicher wurde hinzugefügt, um starke Referenzen für serialisierte entfernte Werte zu halten ([Firefox-Bug 1770736](https://bugzil.la/1770736)).

- Unterstützung für die Deserialisierung entfernter Referenzen, die im Objekt-Referenzspeicher erstellt wurden, wurde hinzugefügt ([Firefox-Bug 1788124](https://bugzil.la/1788124)).

- Volle Unterstützung für die Befehle `script.evaluate`, `script.callFunction` und `script.disown` wurde hinzugefügt ([Firefox-Bug 1778976](https://bugzil.la/1778976)).

#### Marionette

- Unterstützung für `wheel`-Eingabequelle für [Aktionen](https://w3c.github.io/webdriver/webdriver-spec.html#actions) wurde hinzugefügt, die mit einem rad-basierten Eingabegerät verbunden ist ([Firefox-Bug 1746601](https://bugzil.la/1746601)).

- Unterstützung für das Öffnen und Schließen von Tabs in GeckoView-basierten Anwendungen (z. B. Firefox für Android) wurde hinzugefügt ([Firefox-Bug 1506782](https://bugzil.la/1506782)).

## Änderungen für Add-on-Entwickler

- Die Fähigkeit, die Eigenschaft `"persistent"` des [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)-Manifestschlüssels auf `false` für Manifest V2 zu setzen (um eine Hintergrundseite nicht persistent zu machen), ist jetzt standardmäßig verfügbar.
- Die `object-src` Direktive im `"content_security_policy"` Manifestschlüssel ist jetzt optional ([Firefox-Bug 1766881](https://bugzil.la/1766881)). Siehe [object-src-Direktive](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy#object-src_directive) auf der Seite des `"content_security_policy"`-Manifestschlüssels für weitere Details.

## Ältere Versionen

{{Firefox_for_developers}}
