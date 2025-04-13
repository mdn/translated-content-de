---
title: Funktionsstatus
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: 5c5ee35d66ac24bc6513c14f120750c74d779d20
---

Ein Funktionsstatus gibt im Allgemeinen den plattformübergreifenden Implementierungs- und Standardisierungsstatus eines bestimmten Webplattform-Features an, wie z. B. einer Web-API-Methode oder einer CSS-Eigenschaft.

Es handelt sich um einen der folgenden:

- [`deprecated`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)
- [`experimental`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)

> [!WARNING]
> Aktualisieren Sie die Funktionsstatus im `mdn/content`-Repository nicht manuell.
> Die Dokumentationsquelle wird [automatisch aktualisiert](#how_feature_statuses_are_added_or_updated) aus Informationen im GitHub-Repository `mdn/browser-compat-data`.

Wenn keiner der oben genannten Status zutrifft, wird das Feature als _stabiles und standardmäßiges Feature_ betrachtet.
Für weitere Informationen zu diesen Begriffen siehe die Seite ["Experimentell, veraltet und überholt"](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Für Informationen dazu, wie der Status für ein Feature bestimmt wird, siehe den Abschnitt [Auswahl von Status-Eigenschaften](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#choosing-status-properties) im `@mdn/browser-compat-data` (BCD) Repository.

## Wie werden Funktionsstatus hinzugefügt oder aktualisiert?

Die Funktionsstatus aller auf MDN dokumentierten Features werden im begleitenden [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD)-Repository nachverfolgt. Eine Automatisierung _aktualisiert_ die Status im `mdn/content`-Repository automatisch, wann immer eine neue [Version von BCD veröffentlicht wird](https://github.com/mdn/browser-compat-data/releases).

Die Automatisierung verwendet den [`browser-compat`](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#using_bcd_data_in_mdn_pages)-Schlüssel im Front-Matter. Der Schlüssel speichert eine BCD-Abfrage, die erforderlich ist, um das Feature in den Kompatibilitätsdaten zu lokalisieren. Wenn der `browser-compat`-Schlüssel mehrere Werte hat, verwendet die Automatisierung nur den ersten Wert, um Status-Makros darzustellen.

> [!NOTE]
> Um den Status eines Features in den MDN-Inhalten zu aktualisieren, müssen Sie einen [Pull-Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) im BCD-Repository. Nach der Genehmigung und Zusammenführung Ihrer Änderungen in BCD geht es in eine wöchentliche Veröffentlichung, und ein automatisierter Pull-Request aktualisiert die Status im `mdn/content`-Repository für jede Veröffentlichung.

## Wie werden Funktionsstatus in Inhalten angegeben?

Die folgenden Abschnitte dokumentieren die Mechanismen, die verwendet werden, um Funktionsstatusinformationen in MDN-Dokumenten einzufügen und darzustellen. Wie erwähnt, sollten diese als schreibgeschützt betrachtet werden, da ihre Aufnahme in die Inhalte automatisiert ist.

### Funktionsstatussymbole in Sidebars

Die `status`-Eigenschaft im Front-Matter der Seite wird verwendet, um Statussymbole für Features zu erzeugen, wenn sie in Sidebars angezeigt werden.

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

### Funktionsstatus-Banner auf Seiten

Die folgenden Makros werden verwendet, um die Status-Banner in den Kopfzeilen der Seite darzustellen:

- `\{{Deprecated_Header}}`

  - : Für den Status `deprecated`. Es erzeugt ein **Veraltet-Status**-Banner:
    {{deprecated_header}}

- `\{{SeeCompatTable}}`

  - : Für den Status `experimental`. Es erzeugt ein **Experimentell-Status**-Banner:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`

  - : Für den Status `non-standard`. Es erzeugt ein **Nicht-Standard-Status**-Banner:
    {{Non-standard_Header}}

### Funktionsstatussymbole in Definitionslisten

Die folgenden Makros werden verwendet, um Inline-Statussymbole neben Definitionslisteneinträgen darzustellen:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Symbol: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Symbol: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Symbol: {{Deprecated_Inline}}

Wenn eine Web-Feature-Seite Statusbanner hat, dann werden die Inline-Makros der gleichen Status explizit für jedes Element/den Wert des Features in der Definitionsliste verwendet. Zum Beispiel, wenn eine Seite experimentell mit `\{{SeeCompatTable}}` gekennzeichnet ist, dann ist jedes Element/der Wert des Features explizit experimentell mit dem Makro `\{{Experimental_Inline}}` in der Definitionsliste gekennzeichnet.

## Siehe auch

- [Sidebar-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
