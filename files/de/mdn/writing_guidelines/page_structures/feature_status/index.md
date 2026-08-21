---
title: Feature-Status
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Ein Feature-Status gibt allgemein den Stand der plattformübergreifenden Implementierung und Standardisierung einer bestimmten Webplattform-Funktion an, wie zum Beispiel einer Web-API-Methode oder einer CSS-Eigenschaft.

Ein Feature kann einen der folgenden Status haben:

- [`deprecated`](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-deprecated)
- [`experimental`](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)

> [!WARNING]
> Aktualisieren Sie die Feature-Status im `mdn/content` Repository nicht manuell.
> Die Dokumentationsquelle wird [automatisch aktualisiert](#wie_feature-status_hinzugefügt_oder_aktualisiert_werden) mit Informationen aus dem GitHub `mdn/browser-compat-data` Repository.

Wenn keiner der oben genannten Status zutrifft, wird die Funktion als _stabile und standardmäßige Funktion_ betrachtet. Für weitere Informationen zu diesen Begriffen, siehe die Seite ["Experimental, deprecated, and obsolete"](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Informationen darüber, wie der Status für eine Funktion bestimmt wird, finden Sie im Abschnitt [choosing status properties](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#choosing-status-properties) im `@mdn/browser-compat-data` (BCD) Repository.

## Wie Feature-Status hinzugefügt oder aktualisiert werden

Die Feature-Status aller auf MDN dokumentierten Funktionen werden im zugehörigen [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD) Repository nachverfolgt. Eine Automatisierung aktualisiert _automatisch_ die Status im `mdn/content` Repository, wann immer eine neue [Version von BCD veröffentlicht](https://github.com/mdn/browser-compat-data/releases) wird.

Die Automatisierung verwendet den [`browser-compat`](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#using_bcd_data_in_mdn_pages) Schlüssel im Front-Matter. Der Schlüssel speichert die BCD-Abfrage, die benötigt wird, um die Funktion in den Kompatibilitätsdaten zu finden. Wenn der `browser-compat` Schlüssel mehrere Werte hat, verwendet die Automatisierung nur den ersten Wert, um Status-Makros darzustellen.

> [!NOTE]
> Um den Status eines Features im MDN-Inhalt zu aktualisieren, müssen Sie eine [Pull-Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) im BCD-Repository. Nachdem Ihre Änderungen genehmigt und in BCD gemerget wurden, fließen sie in eine wöchentliche Veröffentlichung ein, und eine automatisierte Pull-Request aktualisiert die Status im `mdn/content` Repository für jede Veröffentlichung.

## Wie werden Feature-Status im Inhalt angegeben?

Die folgenden Abschnitte dokumentieren die Mechanismen, die verwendet werden, um Feature-Statusinformationen in MDN-Dokumente einzufügen und darzustellen. Wie erwähnt, sollten diese als schreibgeschützt betrachtet werden, da ihre Einfügung in den Inhalt automatisiert ist.

### Feature-Status-Symbole in Seitenleisten

Die `status`-Eigenschaft im Frontmatter der Seite wird verwendet, um Symbole für den Status von Funktionen zu erzeugen, wenn diese in Seitenleisten angezeigt werden.

```yaml
---
title: Feature name
status:
  - deprecated
  - experimental
  - non-standard
browser-compat: api.feature
---
```

### Feature-Status-Page-Banner

Die folgenden Makros werden verwendet, um die Status-Banner in Seitenüberschriften darzustellen:

- `\{{Deprecated_Header}}`
  - : Für den `deprecated` Status. Es erzeugt ein **Veralteter-Status** Banner:
    {{deprecated_header}}

- `\{{SeeCompatTable}}`
  - : Für den `experimental` Status. Es erzeugt ein **Experimenteller-Status** Banner:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`
  - : Für den `non-standard` Status. Es erzeugt ein **Nicht-Standard-Status** Banner:
    {{Non-standard_Header}}

### Feature-Status-Symbole in Definitionslisten

Die folgenden Makros werden verwendet, um Inline-Status-Symbole neben Items von Definitionslisten darzustellen:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Icon: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Icon: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Icon: {{Deprecated_Inline}}

Wenn eine Web-Feature-Seite Status-Banner hat, dann werden die Inline-Makros der gleichen Status explizit für jedes Mitglied/Wert der Funktion in der Definitionsliste verwendet. Zum Beispiel, wenn eine Seite als experimentell mit `\{{SeeCompatTable}}` markiert ist, dann wird jedes Mitglied/Wert der Funktion explizit als experimentell mit dem `\{{Experimental_Inline}}` Makro in der Definitionsliste markiert.

## Siehe auch

- [Sidebar-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
