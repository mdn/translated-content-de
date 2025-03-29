---
title: Feature-Status
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

> [!WARNING]
> Aktualisieren Sie die Feature-Status im `mdn/content` Repository nicht manuell.
> Die Dokumentationsquelle wird [automatisch aktualisiert](#how_feature_statuses_are_added_or_updated) anhand von Informationen im GitHub `mdn/browser-compat-data` Repository.

Ein Feature-Status zeigt im Allgemeinen den Stand der Browser-Implementierung und Standardisierung eines bestimmten Web-Plattform-Features an, wie zum Beispiel einer Web-API-Methode oder einer CSS-Eigenschaft. Er ist einer der folgenden:

- [`deprecated`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)
- [`experimental`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)

Wenn keiner der oben genannten Status zutrifft, wird das Feature als _stabiles und standardkonformes Feature_ angesehen.
Für weitere Informationen zu diesen Begriffen siehe die Seite ["Experimentell, veraltet und obsolet"](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Für Informationen darüber, wie der Status eines Features bestimmt wird, siehe den Abschnitt [Choosing Status Properties](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#choosing-status-properties) im `@mdn/browser-compat-data` (BCD) Repository.

## Wie werden Feature-Status hinzugefügt oder aktualisiert?

Die Feature-Status aller Dokumentierten Features auf MDN werden im begleitenden [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD) Repository verfolgt. Eine Automatisierung aktualisiert _automatisch_ die Status im `mdn/content` Repository, wann immer eine neue [Version von BCD veröffentlicht](https://github.com/mdn/browser-compat-data/releases) wird.

Die Automatisierung verwendet den `browser-compat` Schlüssel im Front-Matter. Der Schlüssel speichert BCD-Abfragen, die benötigt werden, um das Feature in den Kompatibilitätsdaten zu lokalisieren. Wenn der `browser-compat` Schlüssel mehrere Werte hat, verwendet die Automatisierung nur den ersten Wert, um Status-Makros darzustellen.

> [!NOTE]
> Um den Status eines Features im MDN-Inhalt zu aktualisieren, müssen Sie eine [Pull-Anfrage einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) im BCD-Repository. Nachdem Ihre Änderungen genehmigt und in BCD integriert wurden, gehen sie in eine wöchentliche Veröffentlichung, und eine automatisierte Pull-Anfrage aktualisiert die Status im `mdn/content` Repository für jede Veröffentlichung.

## Wie werden Feature-Status im Inhalt angegeben?

Die folgenden Abschnitte dokumentieren die Mechanismen, die verwendet werden, um Informationen über den Feature-Status in MDN-Dokumenten einzufügen und darzustellen. Wie erwähnt, sollten diese als schreibgeschützt betrachtet werden, da ihre Aufnahme in den Inhalt automatisiert ist.

### Feature-Status-Symbole in Seitenleisten

Die `status`-Eigenschaft im Front-Matter der Seite wird verwendet, um Status-Symbole für Features zu generieren, wenn sie in Seitenleisten angezeigt werden.

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

### Feature-Status-Banner auf Seiten

Die folgenden Makros werden verwendet, um die Status-Banner in den Kopfzeilen der Seiten darzustellen:

- `\{{Deprecated_Header}}`

  - : Für den `deprecated` Status. Es generiert ein **Veralteter Status**-Banner:
    {{deprecated_header}}

- `\{{SeeCompatTable}}`

  - : Für den `experimental` Status. Es generiert ein **Experimenteller Status**-Banner:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`

  - : Für den `non-standard` Status. Es generiert ein **Nicht-Standardkonformer Status**-Banner:
    {{Non-standard_Header}}

### Feature-Status-Symbole in Definitionslisten

Die folgenden Makros werden verwendet, um Inline-Status-Symbole neben Einträgen in Definitionslisten darzustellen:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Icon: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Icon: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Icon: {{Deprecated_Inline}}

Wenn eine Web-Feature-Seite Status-Banner hat, werden die Inline-Makros der gleichen Status explizit für jedes Mitglied/Wert des Features in der Definitionsliste verwendet. Zum Beispiel, wenn eine Seite als experimentell mit `\{{SeeCompatTable}}` markiert ist, dann wird jedes Mitglied/Wert des Features explizit als experimentell markiert, indem das `\{{Experimental_Inline}}` Makro in der Definitionsliste verwendet wird.

## Siehe auch

- [Seitenleisten-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
