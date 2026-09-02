---
title: Feature-Status
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

Ein Feature-Status gibt im Allgemeinen den plattformübergreifenden Implementierungs- und Standardisierungsstatus einer bestimmten Webplattform-Funktion an, wie z.B. eine Web-API-Methode oder eine CSS-Eigenschaft.

Er kann einer der folgenden sein:

- [`deprecated`](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-deprecated)
- [`experimental`](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)

> [!WARNING]
> Aktualisieren Sie die Feature-Status im `mdn/content` Repository nicht manuell.
> Die Dokumentationsquelle wird [automatisch aktualisiert](#wie_feature-status_hinzugefügt_oder_aktualisiert_werden) basierend auf Informationen im GitHub-Repository `mdn/browser-compat-data`.

Wenn keiner der oben genannten Status zutrifft, wird das Feature als _stabiles und standardisiertes Feature_ betrachtet.
Weitere Informationen zu diesen Begriffen finden Sie auf der Seite ["Experimental, deprecated, and obsolete"](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Um Informationen darüber zu erhalten, wie der Status für ein Feature bestimmt wird, sehen Sie sich den Abschnitt [Choosing Status Properties](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#choosing-status-properties) im `@mdn/browser-compat-data` (BCD) Repository an.

## Wie Feature-Status hinzugefügt oder aktualisiert werden

Die Feature-Status aller auf MDN dokumentierten Funktionen werden im zugehörigen [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD) Repository verfolgt. Eine Automatisierung _aktualisiert_ die Status im `mdn/content` Repository automatisch, wenn eine neue [Version von BCD veröffentlicht](https://github.com/mdn/browser-compat-data/releases) wird.

Die Automatisierung verwendet den `browser-compat` Schlüssel im Front-Matter. Der Schlüssel speichert die BCD-Abfrage, die erforderlich ist, um das Feature in den Kompatibilitätsdaten zu lokalisieren. Wenn der `browser-compat` Schlüssel mehrere Werte hat, wird nur der erste Wert verwendet, um Statusmakros darzustellen.

> [!NOTE]
> Um den Status eines Features im MDN-Inhalt zu aktualisieren, müssen Sie einen [Pull Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) im BCD-Repository. Nachdem Ihre Änderungen genehmigt und im BCD zusammengeführt wurden, gehen Sie in eine wöchentliche Veröffentlichung, und ein automatisierter Pull Request aktualisiert die Status im `mdn/content` Repository bei jeder Veröffentlichung.

## Wie werden Feature-Status im Inhalt spezifiziert?

Die folgenden Abschnitte dokumentieren die Mechanismen, die verwendet werden, um Statusinformationen in MDN-Dokumenten einzufügen und darzustellen. Wie erwähnt, sollten diese als nur lesbar betrachtet werden, da ihre Aufnahme in den Inhalt automatisiert ist.

### Feature-Status-Icons in Seitenleisten

Die `status`-Eigenschaft im Seiten-Front Matter wird verwendet, um Status-Icons für Funktionen zu generieren, wenn sie in Seitenleisten angezeigt werden.

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

### Feature-Status-Seitenbanner

> [!WARNING]
> Das `\{{Deprecated_Header}}`-Makro ist nicht mehr erforderlich, um ein **veraltetes Status**-Banner zu generieren. Die Plattform generiert nun automatisch das Banner unter Verwendung der [`status`](#feature-status-icons_in_seitenleisten) Front Matter-Eigenschaft oder Daten von [web-features](https://github.com/web-platform-dx/web-features).

Die folgenden Makros werden verwendet, um die Status-Banner in den Seitenüberschriften darzustellen:

- `\{{SeeCompatTable}}`
  - : Für den `experimentellen` Status. Es generiert ein **experimentelles Status**-Banner:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`
  - : Für den `nicht-standardisierten` Status. Es generiert ein **nicht-standardisiertes Status**-Banner:
    {{Non-standard_Header}}

### Feature-Status-Icons in Definitionslisten

Die folgenden Makros werden verwendet, um Inline-Status-Icons neben Einträgen in Definitionslisten darzustellen:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Icon: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Icon: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) Icon: {{Deprecated_Inline}}

Wenn eine Web-Feature-Seite Status-Banner hat, werden die Inline-Makros des gleichen Status explizit für jedes Mitglied/Wert des Features in der Definitionsliste verwendet.
Zum Beispiel, wenn eine Seite als experimentell mit `\{{SeeCompatTable}}` markiert ist, dann wird jedes Mitglied/Wert des Features explizit als experimentell mit dem Makro `\{{Experimental_Inline}}` in der Definitionsliste gekennzeichnet.

## Siehe auch

- [Seitenleisten-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
