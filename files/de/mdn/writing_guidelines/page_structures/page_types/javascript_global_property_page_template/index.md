---
title: Vorlage für Seiten zu globalen JavaScript-Eigenschaften
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_global_property_page_template
l10n:
  sourceCommit: 4c5b1bd7b5f9142c4c53ab6321e19bfdfaf1ddda
---

> [!NOTE]
> _Entfernen Sie diese gesamte erläuternde Notiz vor der Veröffentlichung_
>
> ---
>
> **Front Matter der Seite:**
>
> Das Front Matter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren. Die Werte sollten für die jeweilige Eigenschaft entsprechend aktualisiert werden.
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
>   - : Überschrift, die oben auf der Seite angezeigt wird. Als `nameOfTheProperty` formatieren.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieser wird wie `Web/JavaScript/Reference/Global_Objects/nameOfTheProperty` formatiert.
> - **page-type**
>   - : Der Schlüssel `page-type` für Seiten zu globalen JavaScript-Eigenschaften ist `javascript-global-property`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden Elemente enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature automatisch gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.nameOfTheProperty` durch die Abfragezeichenfolge für die Eigenschaft im [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation auszufüllen (wobei die Makros `\{{Compat}}` und `\{{Specifications}}` ersetzt werden).
>
>     Beachten Sie, dass Sie möglicherweise zunächst einen Eintrag für die Eigenschaft in unserem [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data) erstellen bzw. aktualisieren müssen und dass der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für Seiten zu globalen JavaScript-Eigenschaften ist dies `jssidebar`.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsabschnitts (unmittelbar unter dem Front Matter der Seite) erscheinen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (es ist nicht notwendig, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein Banner **This is an experimental technology**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einer Pref verborgen ist, sollten Sie außerdem einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — erzeugt ein Banner **Non-standard**, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Geben Sie Status-Header-Makros nicht manuell an. Informationen zum Hinzufügen dieser Status zur Seite finden Sie im Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Banner **Experimental** und **Non-standard** werden direkt nach diesem Notizblock angezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Notiz vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an das wichtigste Prinzip für das Schreiben konsistenter JavaScript-Referenzseiten: **Schauen Sie sich um**! Viele verwandte Seiten haben über die Anforderungen dieser Vorlage hinaus einheitliche Strukturen. Beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Beginnen Sie damit, nach vorhandener Dokumentation für ähnliche APIs zu suchen, und kopieren Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die globale Eigenschaft **`nameOfTheProperty`** repräsentiert etwas. Dies sollte idealerweise aus 1 oder 2 kurzen Sätzen bestehen.

## Wert

Fügen Sie eine Beschreibung des Werts der Eigenschaft hinzu, einschließlich ihres Datentyps und dessen, was sie repräsentiert.

\\{{js_property_attributes(1, 0, 0)}}

Die drei an `js_property_attributes` übergebenen Zahlen repräsentieren jeweils die Attribute `configurable`, `enumerable` und `writable`. Lesen Sie die Spezifikation oder führen Sie Experimente durch. Falls abhängig davon, wie das Objekt erstellt wird, mehrere mögliche Attributkombinationen existieren oder die Eigenschaft nur bedingt vorhanden ist, fügen Sie eine Notiz hinzu.

## Beschreibung

Der Großteil der Beschreibung der Eigenschaft sollte hier stehen. Seien Sie so umfassend wie möglich.

Leserinnen und Leser sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den nachfolgenden Beispielabschnitt zu lesen. Falls Beispiele in diesem Abschnitt erforderlich sind, sollten sie knapp sein und müssen keinen Bezug zur Praxis haben.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte knapp sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwendung von nameOfTheProperty“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Eigenschaft beziehen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- [Polyfill von `nameOfTheProperty` in `core-js`](https://github.com/zloirock/core-js#anchor)
- [es-shims-Polyfill von `nameOfTheProperty`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
