---
title: Funktionsstatus
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Ein Funktionsstatus bietet Entwicklern Informationen über den Implementierungsstand der Funktion bei Browser-Herstellern und ist einer der folgenden:

- [`experimental`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)
- [`deprecated`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)

Wenn keiner der oben genannten Status zutrifft, wird die Funktion als stabile und standardisierte Funktion betrachtet. Wir fügen diesen Status nicht explizit zu Inhaltsseiten hinzu. Für weitere Informationen zu diesen Begriffen siehe die Seite ["Experimentell, veraltet und überflüssig"](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Um detaillierte Anweisungen zu sehen, wie Sie einen Status für eine Funktion wählen, lesen Sie den Abschnitt [Wahl der Status-Eigenschaften](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#choosing-status-properties) im `@mdn/browser-compat-data` (BCD) Repository.

## Anleitung zum Hinzufügen oder Aktualisieren von Funktionsstatus

Die Funktionsstatus aller auf MDN dokumentierten Funktionen sind in dem begleitenden [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD) Repository-Eintrag definiert und werden _automatisch_ im `mdn/content` Repository aktualisiert, wann immer eine neue [Version von BCD veröffentlicht wird](https://github.com/mdn/browser-compat-data/releases).

> [!WARNING]
> Aktualisieren Sie Funktionsstatus nicht manuell im `mdn/content` Repository. Um den Status einer Funktion zu aktualisieren, müssen Sie einen [Pull-Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) im BCD Repository. Nachdem Ihre Änderungen genehmigt und in BCD zusammengeführt wurden, wird ein [automatisierter Pull-Request](https://github.com/search?q=repo%3Amdn%2Fcontent+Synchronize+with+BCD&type=pullrequests) die Status im `mdn/content` Repository aktualisieren.

Die Automatisierung verwendet den [`browser-compat`](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#using_bcd_data_in_mdn_pages) Schlüssel im Front-Matter. Der Schlüssel speichert die BCD-Abfrage, die benötigt wird, um die Funktion in den Kompatibilitätsdaten zu finden. Wenn der `browser-compat`-Schlüssel mehrere Werte hat, verwendet die Automatisierung nur den ersten Wert, um Status-Makros darzustellen.

## Wie werden Funktionsstatus in Inhalten spezifiziert?

Die folgenden Abschnitte dokumentieren Mechanismen, mit denen Funktionsstatus in MDN-Dokumenten dargestellt werden. Wie erwähnt, sollten Sie diese Mechanismen als schreibgeschützt betrachten, da ihre Einbindung in den Inhalt automatisiert ist.

### Funktionsstatus-Symbole in Sidebars

Um Status-Symbole für eine in Sidebars aufgeführte Funktion anzuzeigen, wird die `status`-Eigenschaft im [Front-Matter](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template#sect1) verwendet:

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

Wenn Sidebars gerendert werden, sucht der Code nach den Statusinformationen im Front-Matter jeder Seite. Wie zuvor erwähnt, werden diese Status automatisch aktualisiert; Sie müssen sie nicht manuell ändern.

### Funktionsstatus-Seitenbanner

Die folgenden Makros werden verwendet, um die Status-Banner in Seitenköpfen darzustellen:

- `\{{SeeCompatTable}}`

  - : Für den `experimental` Status. Es generiert ein **Experimentell-Status** Banner:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`

  - : Für den `non-standard` Status. Es generiert ein **Nicht-Standard-Status** Banner:
    {{Non-standard_Header}}

- `\{{Deprecated_Header}}`
  - : Für den `deprecated` Status. Es generiert ein **Veraltet-Status** Banner:
    {{deprecated_header}}

### Funktionsstatus-Symbole in Definitionslisten

Die folgenden Makros werden verwendet, um Inline-Status-Symbole neben den Elementen von Definitionslisten darzustellen:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/experimental_inline.ejs) Symbol: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Inline.ejs) Symbol: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) Symbol: {{Deprecated_Inline}}

## Siehe auch

- [Sidebar-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Liste der Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
