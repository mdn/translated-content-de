---
title: JavaScript-Vorlage für Seiten zu statischen Dateneigenschaften
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_data_property_page_template
l10n:
  sourceCommit: 4c5b1bd7b5f9142c4c53ab6321e19bfdfaf1ddda
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erklärenden Hinweis vor der Veröffentlichung_
>
> ---
>
> **Front Matter der Seite:**
>
> Das Front Matter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren. Die Werte sollten für die jeweilige Eigenschaft entsprechend aktualisiert werden.
>
> ```md
> ---
> title: Constructor.nameOfTheProperty
> short-title: nameOfTheProperty
> slug: Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheProperty
> page-type: javascript-static-data-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.builtins.Constructor.nameOfTheProperty
> sidebar: jsref
> ---
> ```
>
> - **title**
>   - : Überschrift, die oben auf der Seite angezeigt wird. Format: `Constructor.nameOfTheProperty`.
> - **short-title**
>   - : Ein Kurztitel, der in Breadcrumbs und Seitenleisten verwendet wird. Format: `nameOfTheProperty`. Die Eigenschaft [`Math.PI`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/PI) hat beispielsweise den _short-title_ `PI`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieser wird wie `Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheProperty` formatiert.
> - **page-type**
>   - : Der Schlüssel `page-type` für Seiten zu statischen JavaScript-Dateneigenschaften ist `javascript-static-data-property`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das eine oder mehrere der folgenden Angaben enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell festgelegt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor.nameOfTheProperty` durch die Abfragezeichenfolge für die Eigenschaft im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation zu füllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft in unserem [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen und dass der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Dies ist `jsref` für Seiten zu statischen JavaScript-Dateneigenschaften.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsabschnitts (unmittelbar unter dem Front Matter der Seite) erscheinen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (sie müssen nicht hinzugefügt oder entfernt werden):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein Banner **Dies ist eine experimentelle Technologie**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einer Pref verborgen ist, sollten Sie außerdem einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dies erzeugt ein Banner **Nicht standardisiert**, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Geben Sie Status-Header-Makros nicht manuell an. Lesen Sie den Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die Banner **Experimentell** und **Nicht standardisiert** werden direkt nach diesem Hinweisblock angezeigt.
>
> _Denken Sie daran, diesen gesamten erklärenden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an das wichtigste Prinzip für das Schreiben konsistenter JavaScript-Referenzseiten: **sehen Sie sich um**! Viele verwandte Seiten haben über die Anforderungen dieser Vorlage hinaus einheitliche Strukturen. Dazu gehören beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Suchen Sie zunächst nach vorhandener Dokumentation für ähnliche APIs und kopieren Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die statische Dateneigenschaft **`Constructor.nameOfTheProperty`** enthält etwas. Dies sollte idealerweise aus 1 oder 2 kurzen Sätzen bestehen. Halten Sie dies mit der Landingpage der Klasse oder des Namespace synchron — die Landingpage sollte beispielsweise Zeilen wie diese enthalten:

```md
- \{{jsxref("Constructor.nameOfTheProperty")}}
  - : Contains something.
```

## Wert

Fügen Sie eine Beschreibung des Werts der Eigenschaft ein, einschließlich seines Datentyps und dessen, was er darstellt.

\\{{js_property_attributes(1, 0, 0)}}

Die drei an `js_property_attributes` übergebenen Zahlen repräsentieren jeweils die Attribute `configurable`, `enumerable` und `writable`. Lesen Sie die Spezifikation oder führen Sie Experimente durch. Falls abhängig davon, wie das Objekt erstellt wird, mehrere mögliche Attributkombinationen vorhanden sind oder die Eigenschaft nur bedingt vorhanden ist, fügen Sie einen Hinweis hinzu.

## Beschreibung

Der größte Teil der Beschreibung der Eigenschaft sollte hier stehen. Seien Sie so umfassend wie möglich. Falls viele Seiten dieselbe Beschreibung teilen, sollten Sie erwägen, einen neuen Abschnitt auf der Landingpage der Klasse oder des Namespace hinzuzufügen und von hier darauf zu verlinken.

Lesende sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den nachfolgenden Beispielabschnitt lesen zu müssen. Falls in diesem Abschnitt Beispiele erforderlich sind, sollten sie kurz sein und müssen nicht für die Praxis relevant sein.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte kurz sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwendung von Constructor.nameOfTheProperty“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die mit der aktuellen Eigenschaft zusammenhängen. Weitere Richtlinien finden Sie im [Abschnitt „Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- [Polyfill von `Constructor.nameOfTheProperty` in `core-js`](https://github.com/zloirock/core-js#anchor)
- [es-shims-Polyfill von `Constructor.nameOfTheProperty`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
