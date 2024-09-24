---
title: Status von Funktionen
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: ddc0d10f9df181bd034e99b9a93488ee47414dfd
---

{{MDNSidebar}}

Ein Status von Funktionen gibt Entwicklern Informationen über das Implementierungsstadium der Funktion bei den Browseranbietern und ist eines der folgenden:

- [`experimentell`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)
- [`nicht standardisiert`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)
- [`veraltet`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)

Wenn keiner der oben genannten Status zutrifft, wird die Funktion als stabile und standardisierte Funktion betrachtet. Wir fügen diesen Status nicht explizit zu Content-Seiten hinzu.
Für weitere Informationen zu diesen Begriffen, siehe die Seite ["Experimentell, veraltet und obsolet"](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Um detaillierte Anweisungen zu sehen, wie Sie einen Status für eine Funktion auswählen, schauen Sie im Abschnitt [Auswahl von Status-Eigenschaften](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#choosing-status-properties) im `@mdn/browser-compat-data` (BCD) Repository nach.

## Wie man Status von Funktionen hinzufügt oder aktualisiert

Die Status der auf MDN dokumentierten Funktionen sind im [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD) Repository-Eintrag definiert und werden _automatisch_ im `mdn/content` Repository aktualisiert, wann immer eine neue [Version von BCD veröffentlicht wird](https://github.com/mdn/browser-compat-data/releases).

> [!WARNING]
> Aktualisieren Sie nicht manuell die Status von Funktionen im `mdn/content` Repository. Um den Status einer Funktion zu aktualisieren, müssen Sie einen [Pull-Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) im BCD-Repository. Nachdem Ihre Änderungen genehmigt und im BCD zusammengeführt wurden, wird ein [automatisierter Pull-Request](https://github.com/search?q=repo%3Amdn%2Fcontent+Synchronize+with+BCD&type=pullrequests) die Status im `mdn/content` Repository aktualisieren.

Die Automatisierung nutzt den [`browser-compat`](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#using_bcd_data_in_mdn_pages) Schlüssel im Frontmatter. Der Schlüssel speichert die BCD-Abfrage, die erforderlich ist, um die Funktion in den Kompatibilitätsdaten zu lokalisieren. Wenn der `browser-compat` Schlüssel mehrere Werte hat, verwendet die Automatisierung nur den ersten Wert, um Statusmakros zu rendern.

## Wie werden Status von Funktionen im Inhalt angegeben?

Die folgenden Abschnitte dokumentieren Mechanismen, mit denen Status von Funktionen in MDN-Dokumenten dargestellt werden. Wie erwähnt, sollten diese Mechanismen als schreibgeschützt betrachtet werden, da ihre Einbeziehung in den Inhalt automatisiert ist.

### Status-Icons von Funktionen in Sidebars

Um Status-Icons für eine in Sidebars aufgelistete Funktion anzuzeigen, wird die `status`-Eigenschaft im [Frontmatter](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template#sect1) verwendet:

```yml
---
title: Funktionsname
status:
  - experimental
  - non-standard
  - deprecated
browser-compat: api.feature
---
```

Wenn Sidebars gerendert werden, sucht der Code nach den Status im Frontmatter jeder Seite. Wie zuvor erwähnt, werden diese Status automatisch aktualisiert; Sie müssen sie nicht manuell ändern.

### Status-Banner von Funktionen auf Seiten

Die folgenden Makros werden verwendet, um die Status-Banner in den Kopfzeilen der Seiten darzustellen:

- `\{{SeeCompatTable}}`

  - : Für den `experimentell` Status. Es generiert ein **Experimentell-Status** Banner:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`

  - : Für den `nicht standardisiert` Status. Es generiert ein **Nicht Standardisiert-Status** Banner:
    {{Non-standard_Header}}

- `\{{Deprecated_Header}}`
  - : Für den `veraltet` Status. Es generiert ein **Veraltet-Status** Banner:
    {{deprecated_header}}

### Status-Icons von Funktionen in Definitionslisten

Die folgenden Makros werden verwendet, um inline Status-Icons neben Elementen in Definitionslisten darzustellen:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/experimental_inline.ejs) Icon: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Inline.ejs) Icon: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) Icon: {{Deprecated_Inline}}

## Siehe auch

- [Sidebar Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Liste der Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
