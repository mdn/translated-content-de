---
title: Funktionsstatus
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: 359403526b7b802cdb09b90acf28577b959076d0
---

> [!WARNING]
> Aktualisieren Sie die Funktionsstatus im `mdn/content`-Repository nicht manuell.
> Die Dokumentationsquelle wird [automatisch aktualisiert](#how_feature_statuses_are_added_or_updated) basierend auf Informationen im GitHub-Repository `mdn/browser-compat-data`.

Ein Funktionsstatus gibt im Allgemeinen den standort- und browserübergreifenden Implementierungs- und Standardisierungszustand eines bestimmten Webplattform-Features an, wie z.B. einer Web-API-Methode oder CSS-Eigenschaft.
Es ist einer der folgenden:

- [`deprecated`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)
- [`experimental`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)

Wenn keiner der oben genannten Status zutrifft, wird das Feature als _stabiles und standardmäßiges Feature_ betrachtet.
Weitere Informationen zu diesen Begriffen finden Sie auf der Seite ["Experimentell, veraltet und obsolet"](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Informationen darüber, wie der Status eines Features bestimmt wird, finden Sie im Abschnitt [Auswahl von Status-Eigenschaften](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#choosing-status-properties) im `@mdn/browser-compat-data` (BCD)-Repository.

## Wie werden Funktionsstatus hinzugefügt oder aktualisiert?

Die Funktionsstatus aller auf MDN dokumentierten Features werden im zugehörigen [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD)-Repository nachverfolgt. Eine Automatisierung aktualisiert die Status im `mdn/content`-Repository _automatisch_, wann immer eine neue [Version von BCD veröffentlicht](https://github.com/mdn/browser-compat-data/releases) wird.

Die Automatisierung verwendet den `browser-compat` Schlüssel im Frontmatter. Der Schlüssel speichert die erforderliche BCD-Abfrage, um das Feature in den Kompatibilitätsdaten zu finden. Wenn der `browser-compat` Schlüssel mehrere Werte hat, verwendet die Automatisierung nur den ersten Wert, um Statusmakros darzustellen.

> [!NOTE]
> Um den Status eines Features im MDN-Inhalt zu aktualisieren, müssen Sie im BCD-Repository einen [Pull Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data). Nachdem Ihre Änderungen im BCD genehmigt und zusammengeführt wurden, aktualisiert ein [automatisierter Pull Request](https://github.com/search?q=repo%3Amdn%2Fcontent+Synchronize+with+BCD&type=pullrequests) die Status im `mdn/content`-Repository.

## Wie werden Funktionsstatus im Inhalt angegeben?

Die folgenden Abschnitte dokumentieren die Mechanismen, die verwendet werden, um Statusinformationen von Funktionen in MDN-Dokumenten einzufügen und anzuzeigen. Wie erwähnt, sollten diese als schreibgeschützt betrachtet werden, da ihre Aufnahme in den Inhalt automatisiert erfolgt.

### Funktionsstatus-Symbole in Seitenleisten

Die `status`-Eigenschaft im Seiten-[Frontmatter](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template#sect1) wird verwendet, um Statussymbole für Funktionen zu generieren, wenn sie in Seitenleisten angezeigt werden.

```yml
---
title: Feature name
status:
  - deprecated
  - experimental
  - non-standard
browser-compat: api.feature
---
```

### Funktionsstatus-Seitenbanner

Die folgenden Makros werden verwendet, um die Statusbanner in Seitenköpfen anzuzeigen:

- `\{{Deprecated_Header}}`

  - : Für den `deprecated`-Status. Es generiert ein **Veralteter Status**-Banner:
    {{deprecated_header}}

- `\{{SeeCompatTable}}`

  - : Für den `experimental`-Status. Es generiert ein **Experimenteller Status**-Banner:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`

  - : Für den `non-standard`-Status. Es generiert ein **Nicht-Standard-Status**-Banner:
    {{Non-standard_Header}}

### Funktionsstatus-Symbole in Definitionslisten

Die folgenden Makros werden verwendet, um inline Statussymbole neben den Elementen von Definitionslisten anzuzeigen:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Icon: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Icon: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Icon: {{Deprecated_Inline}}

Wenn eine Webfeature-Seite Statusbanner hat, dann werden die Inline-Makros der gleichen Status explizit für jedes Mitglied/Wert des Features in der Definitionsliste verwendet.
Wenn beispielsweise eine Seite als experimentell mit `\{{SeeCompatTable}}` markiert ist, wird jedes Mitglied/Wert des Features explizit als experimentell mit dem `\{{Experimental_Inline}}` Makro in der Definitionsliste markiert.

## Siehe auch

- [Seitenleisten-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
