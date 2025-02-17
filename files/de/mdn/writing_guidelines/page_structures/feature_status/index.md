---
title: Feature-Status
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

Ein Feature-Status bietet Entwicklern Informationen über den Implementierungsstand eines Features bei Browser-Anbietern und ist einer der folgenden:

- [`experimental`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)
- [`deprecated`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)

Wenn keiner der obigen Status zutrifft, wird das Feature als stabiles und standardisiertes Feature angesehen. Dieser Status wird nicht explizit auf Inhaltsseiten hinzugefügt.
Weitere Informationen zu diesen Begriffen finden Sie auf der Seite ["Experimental, deprecated, and obsolete"](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Detaillierte Anweisungen zur Auswahl eines Status für ein Feature finden Sie im Abschnitt [choosing status properties](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#choosing-status-properties) im `@mdn/browser-compat-data` (BCD)-Repository.

## Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status

Die Feature-Status aller auf MDN dokumentierten Features sind im zugehörigen [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD)-Repository-Eintrag definiert und werden _automatisch_ im `mdn/content`-Repository aktualisiert, sobald eine neue [Version von BCD veröffentlicht](https://github.com/mdn/browser-compat-data/releases) wird.

> [!WARNING]
> Aktualisieren Sie Feature-Status NICHT manuell im `mdn/content`-Repository. Um den Status eines Features zu aktualisieren, müssen Sie [einen Pull-Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) im BCD-Repository. Nachdem Ihre Änderungen genehmigt und in BCD zusammengeführt wurden, werden die Status mittels eines [automatisierten Pull-Requests](https://github.com/search?q=repo%3Amdn%2Fcontent+Synchronize+with+BCD&type=pullrequests) im `mdn/content`-Repository aktualisiert.

Die Automatisierung verwendet den Schlüssel [`browser-compat`](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#using_bcd_data_in_mdn_pages) in den Front-Matter. Der Schlüssel speichert die BCD-Abfrage, die erforderlich ist, um das Feature in den Kompatibilitätsdaten zu lokalisieren. Wenn der `browser-compat`-Schlüssel mehrere Werte enthält, verwendet die Automatisierung nur den ersten Wert, um Status-Makros darzustellen.

## Wie werden Feature-Status in Inhalten angegeben?

Die folgenden Abschnitte dokumentieren Mechanismen, mit denen Feature-Status in MDN-Dokumenten dargestellt werden. Wie bereits erwähnt, sollten Sie diese Mechanismen als schreibgeschützt betrachten, da ihre Einbindung in den Inhalt automatisiert ist.

### Feature-Status-Symbole in Sidebars

Um Status-Symbole für ein in Sidebars aufgeführtes Feature zu zeigen, wird die [Front-Matter](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template#sect1) `status`-Eigenschaft verwendet:

```yml
---
title: Feature name
status:
  - experimental
  - non-standard
  - deprecated
browser-compat: api.feature
---
```

Beim Rendern von Sidebars sucht der Code nach den Status in den Front-Matter jeder Seite. Wie bereits erwähnt, werden diese Status automatisch aktualisiert; Sie müssen sie nicht manuell ändern.

### Feature-Status-Banner auf Seiten

Die folgenden Makros werden verwendet, um die Status-Banner in Seiten-Headern darzustellen:

- `\{{SeeCompatTable}}`

  - : Für den `experimental`-Status. Es erzeugt ein Banner für den **Experimentellen Status**:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`

  - : Für den `non-standard`-Status. Es erzeugt ein Banner für den **Nicht-Standard-Status**:
    {{Non-standard_Header}}

- `\{{Deprecated_Header}}`
  - : Für den `deprecated`-Status. Es erzeugt ein Banner für den **Veralteten Status**:
    {{deprecated_header}}

### Feature-Status-Symbole in Definitionslisten

Die folgenden Makros werden verwendet, um Inline-Status-Symbole neben Einträgen in Definitionslisten darzustellen:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs)-Symbol: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs)-Symbol: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs)-Symbol: {{Deprecated_Inline}}

## Siehe auch

- [Sidebar-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
