---
title: Feature-Status
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

Ein Feature-Status gibt im Allgemeinen den Umsetzungs- und Standardisierungsstatus eines bestimmten Web-Plattform-Features über verschiedene Browser hinweg an, wie zum Beispiel einer Web-API-Methode oder CSS-Eigenschaft.

Er ist einer der folgenden:

- [`deprecated`](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-deprecated)
- [`experimental`](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)

> [!WARNING]
> Aktualisieren Sie die Feature-Status im `mdn/content`-Repository nicht manuell.
> Die Dokumentationsquelle wird [automatisch aktualisiert](#how_feature_statuses_are_added_or_updated) basierend auf Informationen im GitHub-Repository `mdn/browser-compat-data`.

Wenn keiner der oben genannten Status zutrifft, wird das Feature als _stabiles und standardisiertes Feature_ betrachtet.
Für weitere Informationen zu diesen Begriffen siehe die Seite ["Experimentell, veraltet und obsolet"](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Informationen darüber, wie der Status eines Features ermittelt wird, finden Sie im Abschnitt [Wahl der Status-Eigenschaften](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#choosing-status-properties) im `@mdn/browser-compat-data` (BCD) Repository.

## Wie werden Feature-Status hinzugefügt oder aktualisiert?

Die Feature-Status aller auf MDN dokumentierten Features werden im zugehörigen [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD) Repository verfolgt. Eine Automatisierung aktualisiert die Status im `mdn/content`-Repository _automatisch_, wann immer eine neue [Version von BCD veröffentlicht wird](https://github.com/mdn/browser-compat-data/releases).

Die Automatisierung verwendet den [`browser-compat`](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#using_bcd_data_in_mdn_pages) Schlüssel im Front-Matter. Der Schlüssel speichert die BCD-Abfrage, die erforderlich ist, um das Feature in den Kompatibilitätsdaten zu finden. Wenn der `browser-compat` Schlüssel mehrere Werte hat, verwendet die Automatisierung nur den ersten Wert, um Status-Makros darzustellen.

> [!NOTE]
> Um den Status eines Features im MDN-Inhalt zu aktualisieren, müssen Sie einen [Pull Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) im BCD-Repository. Nachdem Ihre Änderungen genehmigt und in BCD zusammengeführt wurden, gehen sie in eine wöchentliche Veröffentlichung ein, und ein automatisierter Pull Request aktualisiert die Status im `mdn/content`-Repository für jede Veröffentlichung.

## Wie werden Feature-Status im Inhalt spezifiziert?

Die folgenden Abschnitte dokumentieren die Mechanismen, die verwendet werden, um Feature-Status-Informationen in MDN-Dokumente einzufügen und darzustellen. Wie erwähnt, sollten diese als schreibgeschützt betrachtet werden, da ihre Einbindung in den Inhalt automatisiert ist.

### Feature-Status-Symbole in Seitenleisten

Die `status`-Eigenschaft im Seiten-Front-Matter wird verwendet, um Status-Symbole für Features zu erzeugen, wenn sie in Seitenleisten angezeigt werden.

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

### Feature-Status-Seitenbanner

Die folgenden Makros werden verwendet, um die Status-Banner in Seitenüberschriften darzustellen:

- `\{{Deprecated_Header}}`
  - : Für den `deprecated` Status. Es erzeugt ein **Veralteter Status** Banner:
    {{deprecated_header}}

- `\{{SeeCompatTable}}`
  - : Für den `experimental` Status. Es erzeugt ein **Experimenteller Status** Banner:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`
  - : Für den `non-standard` Status. Es erzeugt ein **Nicht-Standardisierter Status** Banner:
    {{Non-standard_Header}}

### Feature-Status-Symbole in Definitionslisten

Die folgenden Makros werden verwendet, um Inline-Status-Symbole neben Einträgen in Definitionslisten darzustellen:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Symbol: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Symbol: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Symbol: {{Deprecated_Inline}}

Wenn eine Web-Feature-Seite Status-Banner hat, werden die Inline-Makros der gleichen Status explizit für jedes Mitglied/Wert des Features in der Definitionsliste verwendet.
Beispielsweise, wenn eine Seite experimentell mit `\{{SeeCompatTable}}` markiert ist, wird jedes Mitglied/Wert des Features explizit experimentell mit dem `\{{Experimental_Inline}}` Makro in der Definitionsliste markiert.

## Siehe auch

- [Seitenleisten-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
