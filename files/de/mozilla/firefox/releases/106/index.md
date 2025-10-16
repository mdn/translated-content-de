---
title: Firefox 106 Versionshinweise für Entwickler
short-title: Firefox 106
slug: Mozilla/Firefox/Releases/106
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 106, die Entwickler betreffen werden. Firefox 106 wurde am 18. Oktober 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("source")}}-Element unterstützt jetzt die Attribute [`height`](/de/docs/Web/HTML/Reference/Elements/source#height) und [`width`](/de/docs/Web/HTML/Reference/Elements/source#width), wenn es ein Kind-Element eines {{HTMLElement("picture")}}-Elements ist. Diese Funktionalität ist ein experimentelles Feature, das mit der Einstellung `dom.picture_source_dimension_attributes.enabled` aktiviert wird ([Firefox-Bug 1694741](https://bugzil.la/1694741)).

### MathML

- Die [`<semantics>`](/de/docs/Web/MathML/Reference/Element/semantics) und [`<maction>`](/de/docs/Web/MathML/Reference/Element/maction) MathML-Elemente rendern jetzt standardmäßig nur das erste Kindelement ([Firefox-Bug 1588733](https://bugzil.la/1588733)).

### CSS

- Die [@supports](/de/docs/Web/CSS/@supports)-Regel unterstützt jetzt die Funktionen `font-tech()` und `font-format()`. Diese Funktionen können verwendet werden, um zu testen, ob ein Browser eine bestimmte Font-Technologie oder ein Format unterstützt, und CSS-Stile können basierend auf dem Ergebnis angewendet werden ([Firefox-Bug 1786493](https://bugzil.la/1786493)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- Die [`HTMLMetaElement.media`](/de/docs/Web/API/HTMLMetaElement/media)-Eigenschaft wird jetzt unterstützt. Diese Eigenschaft ermöglicht es Ihnen, verschiedene Themenfarben basierend auf `media`-Werten festzulegen (z.B. `max-width: 600px`). Meta-Elemente mit `media`-Eigenschaften ermöglichen es dem Browser, den `content`-Wert in Verbindung mit `theme-color` zu verwenden, um die Seiten- oder UI-Farben für eine gegebene Medienabfrage festzulegen ([Firefox-Bug 1706179](https://bugzil.la/1706179)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Basisunterstützung für den Befehl `script.getRealms` hinzugefügt, der derzeit auf den Typ `WindowRealmInfo` beschränkt ist und Fenster-Realms sowie Sandkasten-Realms einschließt ([Firefox-Bug 1766240](https://bugzil.la/1766240)).

- Unterstützung für das `browsingContext.load`-Ereignis hinzugefügt, das ausgelöst wird, wenn ein `load`-Ereignis in einem BrowsingContext-Fenster ausgelöst wird ([Firefox-Bug 1756619](https://bugzil.la/1756619)).

- Ein Objektreferenzspeicher wurde hinzugefügt, um starke Referenzen für serialisierte Remote-Werte zu halten ([Firefox-Bug 1770736](https://bugzil.la/1770736)).

- Unterstützung für das Deserialisieren von Remote-Referenzen, die im Objektreferenzspeicher erstellt wurden, hinzugefügt ([Firefox-Bug 1788124](https://bugzil.la/1788124)).

- Volle Unterstützung für die Befehle `script.evaluate`, `script.callFunction` und `script.disown` hinzugefügt ([Firefox-Bug 1778976](https://bugzil.la/1778976)).

#### Marionette

- Unterstützung für `wheel`-Eingabequelle für [Aktionen](https://w3c.github.io/webdriver/webdriver-spec.html#actions) hinzugefügt, die mit einem Eingabegerät vom Typ "Wheel" assoziiert ist ([Firefox-Bug 1746601](https://bugzil.la/1746601)).

- Unterstützung für das Öffnen und Schließen von Tabs in GeckoView-basierten Anwendungen (z.B. Firefox für Android) hinzugefügt ([Firefox-Bug 1506782](https://bugzil.la/1506782)).

## Änderungen für Add-on-Entwickler

- Die Möglichkeit, den Manifest-Schlüssel [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) Eigenschaft `"persistent"` auf `false` zu setzen, um eine Hintergrundseite nicht persistent zu machen, ist jetzt standardmäßig für Manifest V2 verfügbar.
- Die `object-src`-Richtlinie im `"content_security_policy"`-Manifest-Schlüssel ist jetzt optional ([Firefox-Bug 1766881](https://bugzil.la/1766881)). Weitere Details finden Sie unter [object-src directive](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy#object-src_directive) auf der Seite des `"content_security_policy"`-Manifest-Schlüssels.
