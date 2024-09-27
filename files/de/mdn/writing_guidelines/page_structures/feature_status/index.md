---
title: Feature status
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: ddc0d10f9df181bd034e99b9a93488ee47414dfd
---

{{MDNSidebar}}

Ein "Feature Status" bietet Entwicklern Informationen über den Implementierungsstatus des Features bei den Browseranbietern und ist eine der folgenden Möglichkeiten:

- [`experimental`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)
- [`deprecated`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)

Wenn keiner der oben genannten Status zutrifft, wird das Feature als stabil und standardisiert angesehen. Wir fügen diesen Status nicht explizit zu Inhaltsseiten hinzu. Für weitere Informationen zu diesen Begriffen siehe die Seite ["Experimentell, veraltet und obsolet"](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Um ausführliche Anweisungen zu sehen, wie der Status für ein Feature ausgewählt wird, beachten Sie den Abschnitt [Auswahl der Status-Eigenschaften](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#choosing-status-properties) im `@mdn/browser-compat-data` (BCD) Repository.

## Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status

Die Feature-Status aller auf MDN dokumentierten Funktionen sind im zugehörigen Eintrag des [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD) Repositories definiert und werden _automatisch_ im `mdn/content` Repository aktualisiert, wann immer eine neue [Version von BCD veröffentlicht](https://github.com/mdn/browser-compat-data/releases) wird.

> [!WARNING]
> Aktualisieren Sie Feature-Status nicht manuell im `mdn/content` Repository. Um den Status eines Features zu aktualisieren, müssen Sie einen [Pull Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) im BCD Repository. Nachdem Ihre Änderungen genehmigt und in BCD zusammengeführt wurden, aktualisiert ein [automatisierter Pull Request](https://github.com/search?q=repo%3Amdn%2Fcontent+Synchronize+with+BCD&type=pullrequests) die Status im `mdn/content` Repository.

Die Automatisierung verwendet den im Front-Matter befindlichen Schlüssel [`browser-compat`](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#using_bcd_data_in_mdn_pages). Der Schlüssel speichert die BCD-Abfrage, die erforderlich ist, um das Feature in den Kompatibilitätsdaten zu finden. Wenn der `browser-compat` Schlüssel mehrere Werte hat, verwendet die Automatisierung nur den ersten Wert, um Status-Makros darzustellen.

## Wie werden Feature-Status im Inhalt spezifiziert?

Die folgenden Abschnitte dokumentieren Mechanismen, mit denen Feature-Status in MDN-Dokumenten angezeigt werden. Wie erwähnt, sollten Sie diese Mechanismen als schreibgeschützt betrachten, da deren Einbindung in den Inhalt automatisiert ist.

### Feature-Status-Symbole in Seitenleisten

Um Status-Symbole für ein in den Seitenleisten aufgelistetes Feature anzuzeigen, wird die [Front-Matter](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template#sect1) `status` Eigenschaft verwendet:

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

Wenn Seitenleisten gerendert werden, sucht der Code nach den Status in jedem Front-Matter der Seiten. Wie bereits erwähnt, werden diese Status automatisch aktualisiert; Sie müssen sie nicht manuell ändern.

### Feature-Status-Seitenbanner

Die folgenden Makros werden verwendet, um die Status-Banner in den Seitenköpfen darzustellen:

- `\{{SeeCompatTable}}`

  - : Für den `experimental` Status. Es erzeugt ein **Experimenteller Status** Banner:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`

  - : Für den `non-standard` Status. Es erzeugt ein **Nicht standardisierter Status** Banner:
    {{Non-standard_Header}}

- `\{{Deprecated_Header}}`
  - : Für den `deprecated` Status. Es erzeugt ein **Veralteter Status** Banner:
    {{deprecated_header}}

### Feature-Status-Symbole in Definitionslisten

Die folgenden Makros werden verwendet, um Inline-Status-Symbole neben Einträgen in Definitionslisten darzustellen:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/experimental_inline.ejs) Symbol: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Inline.ejs) Symbol: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) Symbol: {{Deprecated_Inline}}

## Siehe auch

- [Seitenleisten-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Liste von Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
