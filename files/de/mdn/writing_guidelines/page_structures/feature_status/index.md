---
title: Funktionsstatus
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: b6dacb9087010826a5a7d5b2d7c428e89d8135cf
---

> [!WARNING]
> Aktualisieren Sie die Funktionsstatus im `mdn/content`-Repository nicht manuell.
> Die Dokumentationsquelle wird [automatisch aktualisiert](#how_feature_statuses_are_added_or_updated) mit Informationen aus dem GitHub-Repository `mdn/browser-compat-data`.

Ein Funktionsstatus gibt im Wesentlichen den plattformübergreifenden Implementierungs- und Standardisierungsstand einer bestimmten Web-Plattform-Funktion an, wie z.B. eine Web-API-Methode oder eine CSS-Eigenschaft. Es handelt sich um einen der folgenden:

- [`deprecated`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)
- [`experimental`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)

Wenn keiner der oben genannten Status zutrifft, wird die Funktion als _stabil und standardisiert_ betrachtet.
Weitere Informationen zu diesen Begriffen finden Sie auf der Seite ["Experimental, deprecated, and obsolete"](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Wie der Status einer Funktion bestimmt wird, erfahren Sie im Abschnitt [choosing status properties](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#choosing-status-properties) im `@mdn/browser-compat-data` (BCD)-Repository.

## Wie werden Funktionsstatus hinzugefügt oder aktualisiert?

Die Funktionsstatus aller auf MDN dokumentierten Funktionen werden im begleitenden [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD)-Repository nachverfolgt. Eine Automatisierung aktualisiert die Status im `mdn/content`-Repository _automatisch_, wenn eine neue [Version von BCD veröffentlicht wird](https://github.com/mdn/browser-compat-data/releases).

Die Automatisierung verwendet den `browser-compat`-Schlüssel im Front-Matter. Der Schlüssel speichert die für die Lokalisierung der Funktion in den Kompatibilitätsdaten erforderliche BCD-Abfrage. Wenn der `browser-compat`-Schlüssel mehrere Werte hat, verwendet die Automatisierung nur den ersten Wert, um Statusmakros darzustellen.

> [!NOTE]
> Um den Status einer Funktion im MDN-Inhalt zu aktualisieren, müssen Sie einen [Pull-Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) im BCD-Repository. Nachdem Ihre Änderungen genehmigt und in BCD zusammengeführt wurden, aktualisiert ein [automatisierter Pull-Request](https://github.com/search?q=repo%3Amdn%2Fcontent+Synchronize+with+BCD&type=pullrequests) die Status im `mdn/content`-Repository.

## Wie werden Funktionsstatus im Inhalt angegeben?

Die folgenden Abschnitte dokumentieren die Mechanismen, die zum Einfügen und Darstellen von Funktionsstatusinformationen in MDN-Dokumenten verwendet werden. Wie bereits erwähnt, sollten diese nur lesbar sein, da ihre Aufnahme in den Inhalt automatisiert ist.

### Funktionsstatus-Symbole in Seitenleisten

Die `status`-Eigenschaft im [Front-Matter](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template#sect1) der Seite wird verwendet, um Statussymbole für Funktionen zu erzeugen, wenn diese in Seitenleisten angezeigt werden.

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

Die folgenden Makros werden verwendet, um die Statusbanner in Seitenköpfen darzustellen:

- `\{{Deprecated_Header}}`

  - : Für den `deprecated`-Status. Es erzeugt ein **Veraltet-Status**-Banner:
    {{deprecated_header}}

- `\{{SeeCompatTable}}`

  - : Für den `experimental`-Status. Es erzeugt ein **Experimentell-Status**-Banner:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`

  - : Für den `non-standard`-Status. Es erzeugt ein **Nicht-Standard-Status**-Banner:
    {{Non-standard_Header}}

### Funktionsstatus-Symbole in Definitionslisten

Die folgenden Makros werden verwendet, um Inline-Statussymbole neben Elementen der Definitionsliste darzustellen:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Symbol: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Symbol: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Symbol: {{Deprecated_Inline}}

Wenn eine Webseite mit Funktionsbannern gekennzeichnet ist, werden die Inline-Makros desselben Status explizit für jedes Mitglied/Wert der Funktion in der Definitionsliste verwendet. Zum Beispiel, wenn eine Seite als experimentell mit `\{{SeeCompatTable}}` markiert ist, dann wird jedes Mitglied/Wert der Funktion explizit experimentell mit dem `\{{Experimental_Inline}}`-Makro in der Definitionsliste gekennzeichnet.

## Siehe auch

- [Seitenleistenmakros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
