---
title: Funktionsstatus
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: af98ab1715ff54825888ef1f7f13d6e3e3bf90b8
---

> [!WARNING]
> Aktualisieren Sie nicht manuell die Funktionsstatus im `mdn/content` Repository.
> Die Dokumentationsquelle wird [automatisch aktualisiert](#how_feature_statuses_are_added_or_updated) aus Informationen im GitHub `mdn/browser-compat-data` Repository.

Ein Funktionsstatus gibt im Allgemeinen den Status der Implementierung und Standardisierung über verschiedene Browser hinweg für ein bestimmtes Feature der Webplattform an, wie zum Beispiel eine Web API-Methode oder eine CSS-Eigenschaft. Der Status kann einer der folgenden sein:

- [`deprecated`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)
- [`experimental`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)

Wenn keiner der oben genannten Status zutrifft, wird das Feature als _stabiles und standardisiertes Feature_ betrachtet. Weitere Informationen zu diesen Begriffen finden Sie auf der Seite ["Experimentell, veraltet und obsolet"](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Für Informationen darüber, wie der Status einer Funktion bestimmt wird, siehe den Abschnitt [Status-Eigenschaften wählen](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#choosing-status-properties) im `@mdn/browser-compat-data` (BCD) Repository.

## Wie werden Funktionsstatus hinzugefügt oder aktualisiert?

Die Funktionsstatus aller auf MDN dokumentierten Funktionen werden im zugehörigen [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD) Repository verfolgt. Eine Automatisierung _aktualisiert_ die Status im `mdn/content` Repository automatisch, wann immer eine neue [Version von BCD veröffentlicht](https://github.com/mdn/browser-compat-data/releases) wird.

Die Automatisierung verwendet den `browser-compat` Schlüssel in der Front-Matter. Der Schlüssel speichert die BCD-Abfrage, die erforderlich ist, um das Feature in den Kompatibilitätsdaten zu finden. Wenn der `browser-compat` Schlüssel mehrere Werte hat, verwendet die Automatisierung nur den ersten Wert, um Status-Makros zu rendern.

> [!NOTE]
> Um den Status einer Funktion im MDN-Inhalt zu aktualisieren, müssen Sie [einen Pull-Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) im BCD-Repository. Nachdem Ihre Änderungen genehmigt und im BCD zusammengeführt wurden, gehen sie in eine wöchentliche Veröffentlichung, und ein automatisierter Pull-Request aktualisiert die Status im `mdn/content` Repository für jede Veröffentlichung.

## Wie werden Funktionsstatus im Inhalt angegeben?

Die folgenden Abschnitte dokumentieren die Mechanismen, die verwendet werden, um Statusinformationen von Funktionen in MDN-Dokumenten einzufügen und darzustellen. Wie bereits erwähnt, sollten diese als schreibgeschützt betrachtet werden, da ihre Einbindung in den Inhalt automatisiert ist.

### Funktionsstatus-Icons in Seitenleisten

Die `status` Eigenschaft im Seiten-Frontmatter wird verwendet, um Status-Icons für Funktionen darzustellen, wenn sie in Seitenleisten angezeigt werden.

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

### Funktionsstatus-Seitenbanner

Die folgenden Makros werden verwendet, um die Statusbanner in Seitenüberschriften darzustellen:

- `\{{Deprecated_Header}}`

  - : Für den `deprecated` Status. Es generiert ein **Veraltet-Status** Banner:
    {{deprecated_header}}

- `\{{SeeCompatTable}}`

  - : Für den `experimental` Status. Es generiert ein **Experimentell-Status** Banner:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`

  - : Für den `non-standard` Status. Es generiert ein **Nicht standardisiert-Status** Banner:
    {{Non-standard_Header}}

### Funktionsstatus-Icons in Definitionslisten

Die folgenden Makros werden verwendet, um Inline-Status-Icons neben Listeneinträgen in Definitionslisten darzustellen:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Icon: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Icon: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Icon: {{Deprecated_Inline}}

Wenn eine Web-Feature-Seite Statusbanner hat, dann werden die Inline-Makros mit denselben Status explizit für jedes Mitglied/Wert der Funktion in der Definitionsliste verwendet. Zum Beispiel, wenn eine Seite experimentell markiert ist mit `\{{SeeCompatTable}}`, dann wird jedes Mitglied/Wert der Funktion explizit als experimentell markiert mit dem `\{{Experimental_Inline}}` Makro in der Definitionsliste.

## Siehe auch

- [Seitenleisten-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
