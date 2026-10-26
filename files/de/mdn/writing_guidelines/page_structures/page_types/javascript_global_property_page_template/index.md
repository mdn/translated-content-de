---
title: Vorlage für eine Seite über eine globale JavaScript-Eigenschaft
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_global_property_page_template
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung._
>
> ---
>
> **Front Matter der Seite:**
>
> Das Front Matter am Anfang der Seite dient dazu, die Metadaten der Seite festzulegen. Passen Sie die Werte für die jeweilige Eigenschaft an.
>
> ```md
> ---
> title: nameOfTheProperty
> slug: Web/JavaScript/Reference/Global_Objects/nameOfTheProperty
> page-type: javascript-global-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.builtins.nameOfTheProperty
> sidebar: jssidebar
> ---
> ```
>
> - **title**
>   - : Die Überschrift, die oben auf der Seite angezeigt wird. Verwenden Sie das Format `nameOfTheProperty`.
> - **slug**
>   - : Der Teil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Er hat das Format `Web/JavaScript/Reference/Global_Objects/nameOfTheProperty`.
> - **page-type**
>   - : Der Wert des Schlüssels `page-type` für Seiten über globale JavaScript-Eigenschaften ist `javascript-global-property`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Dieses Array kann einen oder mehrere der folgenden Werte enthalten: `experimental`, `deprecated`, `non-standard`. Setzen Sie diesen Schlüssel nicht manuell: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Weitere Informationen finden Sie unter [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.nameOfTheProperty` durch den Abfrageschlüssel für die Eigenschaft im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet diesen Schlüssel automatisch, um die Abschnitte zur Kompatibilität und zu den Spezifikationen zu befüllen (anstelle der Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Möglicherweise müssen Sie zunächst einen Eintrag für die Eigenschaft im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren. Der Eintrag für die API muss außerdem Informationen zur Spezifikation enthalten.
>     Weitere Informationen finden Sie in unserem [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für Seiten über globale JavaScript-Eigenschaften lautet der Wert `jssidebar`.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsbereichs (direkt unter dem Front Matter der Seite) stehen mehrere Makroaufrufe.
>
> Diese Makros werden von der Toolchain automatisch hinzugefügt (Sie müssen sie nicht selbst hinzufügen oder entfernen):
>
> - `\{{SeeCompatTable}}` — Dieses Makro erzeugt einen Hinweis **Dies ist eine experimentelle Technologie**, der kennzeichnet, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und in Firefox erst durch eine Einstellung aktiviert werden muss, ergänzen Sie dafür auch einen Eintrag auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Non-standard_Header}}` — Dieses Makro erzeugt einen Hinweis **Nicht standardisiert**, der kennzeichnet, dass das Feature nicht Teil einer Spezifikation ist.
>
> Fügen Sie Makros für Statushinweise nicht manuell hinzu. Informationen dazu, wie Sie diese Statusangaben zur Seite hinzufügen, finden Sie unter [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Hinweise **Experimentell** und **Nicht standardisiert** werden direkt nach diesem Hinweisblock angezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an den wichtigsten Grundsatz beim Verfassen einheitlicher JavaScript-Referenzseiten: **Sehen Sie sich um**! Viele verwandte Seiten haben über die Anforderungen dieser Vorlage hinaus eine einheitliche Struktur. Das gilt beispielsweise für alle Proxy-Handler und die meisten Array-Methoden. Suchen Sie zunächst nach vorhandener Dokumentation für ähnliche APIs und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die globale Eigenschaft **`nameOfTheProperty`** repräsentiert etwas. Die Beschreibung sollte idealerweise aus einem oder zwei kurzen Sätzen bestehen.

## Wert

Beschreiben Sie den Wert der Eigenschaft, einschließlich ihres Datentyps und dessen, was sie repräsentiert.

\\{{js_property_attributes(1, 0, 0)}}

Die drei an `js_property_attributes` übergebenen Zahlen stehen in dieser Reihenfolge für die Attribute `configurable`, `enumerable` und `writable`. Lesen Sie die Spezifikation oder führen Sie eigene Tests durch. Falls je nach Erstellung des Objekts mehrere Kombinationen von Attributwerten möglich sind oder die Eigenschaft nur unter bestimmten Bedingungen vorhanden ist, fügen Sie einen Hinweis hinzu.

## Beschreibung

Der Großteil der Beschreibung der Eigenschaft sollte hier stehen. Beschreiben Sie sie so umfassend wie möglich.

Leser sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den folgenden Abschnitt mit Beispielen lesen zu müssen. Falls Beispiele in diesem Abschnitt erforderlich sind, sollten sie kurz sein; sie müssen nicht aus der Praxis stammen.

## Beispiele

Verwenden Sie die Überschrift „Beispiele“ auch dann, wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel benötigt eine H3-Überschrift, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über den Inhalt aus und ist deshalb keine geeignete Überschrift. Halten Sie die Überschrift kurz. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift. Das erste Beispiel kann „`nameOfTheProperty` verwenden“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Eigenschaft beziehen. Weitere Richtlinien finden Sie im [Abschnitt „Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Leitfadens zum Schreibstil_.

- [Polyfill für `nameOfTheProperty` in `core-js`](https://core-js.io/docs/)
- [es-shims-Polyfill für `nameOfTheProperty`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
