---
title: Feature-Status
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

> [!WARNING]
> Aktualisieren Sie nicht manuell die Feature-Status im `mdn/content` Repository.
> Die Dokumentationsquelle wird [automatisch aktualisiert](#how_feature_statuses_are_added_or_updated) anhand von Informationen im GitHub-Repository `mdn/browser-compat-data`.

Ein Feature-Status zeigt im Allgemeinen an, wie der Stand der Implementierung und Standardisierung einer bestimmten Webplattform-Funktion ist, wie zum Beispiel einer Web-API-Methode oder einer CSS-Eigenschaft. Es ist einer der folgenden:

- [`deprecated`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated) (veraltet)
- [`experimental`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental) (experimentell)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information) (nicht standardisiert)

Wenn keiner der oben genannten Status zutrifft, wird das Feature als _stabiles und standardisiertes Feature_ angesehen. Für weitere Informationen zu diesen Begriffen, siehe die Seite ["Experimentell, veraltet und obsolet"](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Informationen darüber, wie der Status für ein Feature festgelegt wird, finden Sie im Abschnitt [Wahl der Status-Eigenschaften](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#choosing-status-properties) im `@mdn/browser-compat-data` (BCD) Repository.

## Wie werden Feature-Status hinzugefügt oder aktualisiert?

Die Feature-Status aller auf MDN dokumentierten Features werden im dazugehörigen [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD) Repository nachverfolgt. Eine Automatisierung aktualisiert die Status _automatisch_ im `mdn/content` Repository, wann immer eine neue [Version von BCD veröffentlicht wird](https://github.com/mdn/browser-compat-data/releases).

Die Automatisierung verwendet den `browser-compat` Schlüssel im Front-Matter. Der Schlüssel speichert die für die Suche im Kompatibilitätsdaten notwendigen BCD-Abfrage. Wenn der `browser-compat` Schlüssel mehrere Werte hat, verwendet die Automatisierung nur den ersten Wert, um Status-Makros zu rendern.

> [!NOTE]
> Um den Status eines Features im MDN-Inhalt zu aktualisieren, müssen Sie einen [Pull-Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) im BCD-Repository. Nachdem Ihre Änderungen in BCD genehmigt und zusammengeführt wurden, aktualisiert ein [automatisierter Pull-Request](https://github.com/search?q=repo%3Amdn%2Fcontent+Synchronize+with+BCD&type=pullrequests) die Status im `mdn/content` Repository.

## Wie werden Feature-Status im Inhalt spezifiziert?

Die folgenden Abschnitte dokumentieren die Mechanismen, die verwendet werden, um Feature-Statusinformationen in MDN-Dokumenten einzufügen und darzustellen. Wie erwähnt, sollten diese als schreibgeschützt betrachtet werden, da ihre Einbindung in den Inhalt automatisiert ist.

### Feature-Status-Symbole in Seitenleisten

Die `status`-Eigenschaft im Seiten-Front-Matter wird verwendet, um Status-Symbole für Features zu generieren, wenn sie in Seitenleisten angezeigt werden.

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

### Feature-Status-Seitenbanner

Die folgenden Makros werden verwendet, um die Status-Banner in Seitenköpfen darzustellen:

- `\{{Deprecated_Header}}`

  - : Für `deprecated` Status. Es generiert ein **Veraltet-Status**-Banner:
    {{deprecated_header}}

- `\{{SeeCompatTable}}`

  - : Für `experimental` Status. Es generiert ein **Experimentell-Status**-Banner:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`

  - : Für `non-standard` Status. Es generiert ein **Nicht-Standard-Status**-Banner:
    {{Non-standard_Header}}

### Feature-Status-Symbole in Definitionslisten

Die folgenden Makros werden verwendet, um Inline-Status-Symbole neben Einträgen in Definitionslisten darzustellen:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Symbol: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Symbol: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Symbol: {{Deprecated_Inline}}

Wenn eine Web-Feature-Seite Status-Banner hat, werden die Inline-Makros für dieselben Status explizit für jedes Element/Wert des Features in der Definitionsliste verwendet. Zum Beispiel, wenn eine Seite mit `\{{SeeCompatTable}}` als experimentell markiert ist, dann wird jedes Element/Wert des Features explizit als experimentell mit dem `\{{Experimental_Inline}}` Makro in der Definitionsliste markiert.

## Siehe auch

- [Seitenleisten-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
