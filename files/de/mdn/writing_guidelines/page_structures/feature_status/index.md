---
title: Funktionsstatus
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Ein Funktionsstatus gibt im Allgemeinen den Stand der plattformübergreifenden Implementierung und Standardisierung eines bestimmten Webplattform-Features an, wie zum Beispiel einer Web-API-Methode oder einer CSS-Eigenschaft.

Es kann einer der folgenden sein:

- [`deprecated`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)
- [`experimental`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)

> [!WARNING]
> Aktualisieren Sie die Funktionsstatus nicht manuell im `mdn/content`-Repository.
> Die Quelle der Dokumentation wird [automatisch aktualisiert](#how_feature_statuses_are_added_or_updated) basierend auf Informationen im GitHub-Repository `mdn/browser-compat-data`.

Wenn keiner der oben genannten Status zutrifft, wird die Funktion als _stabil und standardisiert_ betrachtet.
Weitere Informationen zu diesen Begriffen finden Sie auf der Seite ["Experimental, deprecated, and obsolete"](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Informationen darüber, wie der Status für ein Feature bestimmt wird, finden Sie im Abschnitt [Choosing status properties](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#choosing-status-properties) im `@mdn/browser-compat-data` (BCD) Repository.

## Wie werden Funktionsstatus hinzugefügt oder aktualisiert?

Die Funktionsstatus aller auf MDN dokumentierten Features werden im zugehörigen [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD) Repository verfolgt. Eine Automatisierung aktualisiert _automatisch_ die Status im `mdn/content` Repository, wann immer eine neue [Version von BCD veröffentlicht](https://github.com/mdn/browser-compat-data/releases) wird.

Die Automatisierung verwendet den Schlüssel [`browser-compat`](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#using_bcd_data_in_mdn_pages) im Front-Matter. Der Schlüssel speichert die BCD-Abfrage, die erforderlich ist, um das Feature in den Kompatibilitätsdaten zu lokalisieren. Wenn der `browser-compat`-Schlüssel mehrere Werte hat, verwendet die Automatisierung nur den ersten Wert, um Statusmakros darzustellen.

> [!NOTE]
> Um den Status eines Features im MDN-Inhalt zu aktualisieren, müssen Sie einen [Pull-Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) im BCD-Repository. Nachdem Ihre Änderungen genehmigt und in BCD zusammengeführt wurden, gehen sie in eine wöchentliche Veröffentlichung, und ein automatisierter Pull-Request aktualisiert die Status im `mdn/content`-Repository für jede Veröffentlichung.

## Wie werden Funktionsstatus im Inhalt angegeben?

Die folgenden Abschnitte dokumentieren die Mechanismen, die verwendet werden, um Informationen zum Funktionsstatus in MDN-Dokumenten einzufügen und darzustellen. Wie bereits erwähnt, sollten diese als schreibgeschützt betrachtet werden, da ihre Einbindung in den Inhalt automatisiert ist.

### Funktionsstatussymbole in Seitenleisten

Die `status`-Eigenschaft im Seiten-Front-Matter wird verwendet, um Statussymbole für Features zu generieren, wenn sie in Seitenleisten angezeigt werden.

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

### Funktionsstatusseitenbanner

Die folgenden Makros werden verwendet, um die Statusbanner in Seitenüberschriften darzustellen:

- `\{{Deprecated_Header}}`

  - : Für den `deprecated`-Status. Es erzeugt ein **Abgelaufen-Status**-Banner:
    {{deprecated_header}}

- `\{{SeeCompatTable}}`

  - : Für den `experimental`-Status. Es erzeugt ein **Experimentell-Status**-Banner:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`
  - : Für den `non-standard`-Status. Es erzeugt ein **Nicht-Standard-Status**-Banner:
    {{Non-standard_Header}}

### Funktionsstatussymbole in Definitionslisten

Die folgenden Makros werden verwendet, um Inline-Statussymbole neben den Elementen der Definitionsliste darzustellen:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Symbol: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Symbol: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Symbol: {{Deprecated_Inline}}

Wenn eine Web-Feature-Seite Statusbanner hat, werden die Inline-Makros der gleichen Status explizit für jedes Element/Wert des Features in der Definitionsliste verwendet.
Zum Beispiel, wenn eine Seite experimentell gekennzeichnet ist mit `\{{SeeCompatTable}}`, dann wird jedes Element/Wert des Features explizit mit dem Makro `\{{Experimental_Inline}}` in der Definitionsliste als experimentell gekennzeichnet.

## Siehe auch

- [Seitenleisten-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
