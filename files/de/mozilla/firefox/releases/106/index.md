---
title: Firefox 106 Versionshinweise für Entwickler
short-title: Firefox 106
slug: Mozilla/Firefox/Releases/106
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 106, die Entwickler betreffen. Firefox 106 wurde am 18. Oktober 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("source")}}-Element unterstützt jetzt die Attribute [`height`](/de/docs/Web/HTML/Reference/Elements/source#height) und [`width`](/de/docs/Web/HTML/Reference/Elements/source#width), wenn es ein Kind eines {{HTMLElement("picture")}}-Elements ist.
  Diese Funktionalität ist ein experimentelles Feature, das mithilfe der Einstellung `dom.picture_source_dimension_attributes.enabled` aktiviert wird ([Firefox Bug 1694741](https://bugzil.la/1694741)).

### MathML

- Die MathML-Elemente [`<semantics>`](/de/docs/Web/MathML/Reference/Element/semantics) und [`<maction>`](/de/docs/Web/MathML/Reference/Element/maction) rendern nun standardmäßig nur das erste Kindelement ([Firefox Bug 1588733](https://bugzil.la/1588733)).

### CSS

- Die [@supports](/de/docs/Web/CSS/Reference/At-rules/@supports)-At-Regel unterstützt jetzt die Funktionen `font-tech()` und `font-format()`.
  Diese Funktionen können verwendet werden, um zu testen, ob ein Browser eine bestimmte Schrifttechnologie oder ein Format unterstützt, und CSS-Stile können basierend auf dem Ergebnis angewendet werden ([Firefox Bug 1786493](https://bugzil.la/1786493)).

### JavaScript

Keine nennenswerten Änderungen.

### APIs

#### DOM

- Die [`HTMLMetaElement.media`](/de/docs/Web/API/HTMLMetaElement/media)-Eigenschaft wird jetzt unterstützt. Diese Eigenschaft ermöglicht es, verschiedene Theme-Farben basierend auf `media`-Werten (z.B. `max-width: 600px`) zu setzen.
  Meta-Elemente mit `media`-Eigenschaften ermöglichen es dem Browser, den `content`-Wert in Verbindung mit `theme-color` zu verwenden, um die Seiten- oder UI-Farben für eine gegebene Media-Query zu setzen ([Firefox Bug 1706179](https://bugzil.la/1706179)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Grundlegende Unterstützung für den `script.getRealms`-Befehl hinzugefügt, der derzeit auf den `WindowRealmInfo`-Typ beschränkt ist, der Fenster- und Sandbox-Realm umfasst ([Firefox Bug 1766240](https://bugzil.la/1766240)).

- Unterstützung für das `browsingContext.load`-Ereignis hinzugefügt, das ausgelöst wird, wenn ein `load`-Ereignis auf einem BrowsingContext-Fenster ausgelöst wird ([Firefox Bug 1756619](https://bugzil.la/1756619)).

- Ein Objektreferenzspeicher wurde hinzugefügt, um starke Referenzen für serialisierte Remote-Werte zu halten ([Firefox Bug 1770736](https://bugzil.la/1770736)).

- Unterstützung für das Deserialisieren von Remote-Referenzen, die im Objektreferenzspeicher erstellt wurden, hinzugefügt ([Firefox Bug 1788124](https://bugzil.la/1788124)).

- Volle Unterstützung für die Befehle `script.evaluate`, `script.callFunction` und `script.disown` hinzugefügt ([Firefox Bug 1778976](https://bugzil.la/1778976)).

#### Marionette

- Unterstützung für die `wheel`-Eingabequelle für [Actions](https://w3c.github.io/webdriver/webdriver-spec.html#actions) hinzugefügt, die mit einem Rad-Eingabegerät verbunden ist ([Firefox Bug 1746601](https://bugzil.la/1746601)).

- Unterstützung für das Öffnen und Schließen von Tabs in GeckoView-basierten Anwendungen (z.B. Firefox für Android) hinzugefügt ([Firefox Bug 1506782](https://bugzil.la/1506782)).

## Änderungen für Add-on-Entwickler

- Die Möglichkeit, die [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)-Manifestschlüsseleigenschaft `"persistent"` auf `false` für Manifest V2 einzustellen (um eine Hintergrundseite nicht persistent zu machen), ist jetzt standardmäßig verfügbar.
- Die `object-src`-Direktive im `"content_security_policy"`-Manifests ist jetzt optional ([Firefox Bug 1766881](https://bugzil.la/1766881)). Weitere Details finden Sie in der [object-src-Direktive](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy#object-src_directive) auf der Manifestseite `"content_security_policy"`.
