---
title: Feature Status
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: ddc0d10f9df181bd034e99b9a93488ee47414dfd
---

{{MDNSidebar}}

Ein Feature-Status bietet Entwicklern Informationen über den Implementierungsstand des Features unter den Browseranbietern und ist eine der folgenden:

- [`experimental`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)
- [`deprecated`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)

Wenn keiner der oben genannten Status zutrifft, wird das Feature als stabil und standardisiert betrachtet. Wir fügen diesen Status nicht explizit zu Inhaltsseiten hinzu.
Weitere Informationen zu diesen Begriffen finden Sie auf der Seite ["Experimental, deprecated, and obsolete"](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Um detaillierte Anleitungen zur Auswahl eines Status für ein Feature zu sehen, beziehen Sie sich auf den Abschnitt [choosing status properties](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#choosing-status-properties) im `@mdn/browser-compat-data` (BCD) Repository.

## Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status

Die Feature-Status aller auf MDN dokumentierten Features werden in ihrem begleitenden [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD) Repository-Eintrag definiert und werden _automatisch_ im `mdn/content` Repository aktualisiert, wann immer eine neue [Version von BCD veröffentlicht wird](https://github.com/mdn/browser-compat-data/releases).

> [!WARNING]
> Aktualisieren Sie die Feature-Status nicht manuell im `mdn/content` Repository. Um den Status eines Features zu aktualisieren, müssen Sie einen [Pull-Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) im BCD-Repository. Nachdem Ihre Änderungen genehmigt und im BCD zusammengeführt wurden, aktualisiert ein [automatisierter Pull-Request](https://github.com/search?q=repo%3Amdn%2Fcontent+Synchronize+with+BCD&type=pullrequests) die Status im `mdn/content` Repository.

Die Automatisierung verwendet den [`browser-compat`](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#using_bcd_data_in_mdn_pages) Schlüssel im Front-Matter. Der Schlüssel speichert die BCD-Abfrage, die erforderlich ist, um das Feature in den Kompatibilitätsdaten zu finden. Wenn der `browser-compat` Schlüssel mehrere Werte hat, verwendet die Automatisierung nur den ersten Wert, um Statusmakros zu rendern.

## Wie werden Feature-Status in Inhalten spezifiziert?

Die folgenden Abschnitte dokumentieren Mechanismen, mit denen Feature-Status in MDN-Dokumenten gerendert werden. Wie bereits erwähnt, sollten Sie diese Mechanismen als schreibgeschützt betrachten, da ihre Einbeziehung in den Inhalt automatisiert ist.

### Feature-Status-Icons in Sidebars

Um Status-Icons für ein in Sidebars aufgeführtes Feature anzuzeigen, wird die [Front-Matter](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template#sect1) `status` Eigenschaft verwendet:

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

Wenn Sidebars gerendert werden, durchsucht der Code die Status in jedem Seiten-Front-Matter. Wie bereits erwähnt, werden diese Status automatisch aktualisiert; Sie müssen sie nicht manuell ändern.

### Feature-Status-Seitenbanner

Die folgenden Makros werden verwendet, um die Status-Banner in Seitenkopfzeilen zu rendern:

- `\{{SeeCompatTable}}`

  - : Für den `experimental` Status. Es erzeugt ein **Experimental status** Banner:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`

  - : Für den `non-standard` Status. Es erzeugt ein **Non-Standard status** Banner:
    {{Non-standard_Header}}

- `\{{Deprecated_Header}}`
  - : Für den `deprecated` Status. Es erzeugt ein **Deprecated status** Banner:
    {{deprecated_header}}

### Feature-Status-Icons in Definitionslisten

Die folgenden Makros werden verwendet, um Inline-Status-Icons neben Einträgen in Definitionslisten zu rendern:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/experimental_inline.ejs) Icon: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Inline.ejs) Icon: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) Icon: {{Deprecated_Inline}}

## Siehe auch

- [Sidebar-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Liste der Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
