---
title: Vorlage für JavaScript-Instanzdaten-Eigenschaftsseiten
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_instance_data_property_page_template
l10n:
  sourceCommit: 4c5b1bd7b5f9142c4c53ab6321e19bfdfaf1ddda
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erklärenden Hinweis vor der Veröffentlichung._
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren. Die Werte sollten für die jeweilige Eigenschaft entsprechend aktualisiert werden.
>
> ```md
> ---
> title: "Constructor: nameOfTheProperty"
> short-title: nameOfTheProperty
> slug: Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheProperty
> page-type: javascript-instance-data-property
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
>   - : Überschrift, die oben auf der Seite angezeigt wird. Instanzdaten-Eigenschaften werden entweder auf jeder Instanz oder auf `Constructor.prototype` installiert. Sie müssen den ersten Fall als `Constructor: nameOfTheProperty` und den zweiten Fall als `Constructor.prototype.nameOfTheProperty` formatieren. Beispielsweise hat die Eigenschaft [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length) der Klasse [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) den _title_ `Array: length`, während die Eigenschaft [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/name) der Klasse [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) den _title_ `Error.prototype.name` hat. Prüfen Sie die Spezifikation, um präzise zu sein.
> - **short-title**
>   - : Ein kurzer Titel, der in Breadcrumbs und Seitenleisten verwendet wird. Als `nameOfTheProperty` formatieren. Beispielsweise hat die Eigenschaft [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length) den _short-title_ `length`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieser wird wie `Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheProperty` formatiert.
> - **page-type**
>   - : Der Schlüssel `page-type` für JavaScript-Instanzdaten-Eigenschaften ist `javascript-instance-data-property`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden Elemente enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor.nameOfTheProperty` durch die Abfragezeichenfolge für die Eigenschaft im [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation zu füllen (und ersetzt die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zunächst einen Eintrag für die Eigenschaft in unserem [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data) erstellen bzw. aktualisieren müssen und der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Dies ist `jsref` für Seiten zu JavaScript-Instanzdaten-Eigenschaften.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsabschnitts (unmittelbar unter dem Seiten-Frontmatter) erscheinen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht erforderlich, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein Banner **Dies ist eine experimentelle Technologie**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einer Pref verborgen ist, sollten Sie außerdem einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dies erzeugt ein Banner **Nicht standardisiert**, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Fügen Sie Status-Header-Makros nicht manuell hinzu. Lesen Sie den Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die Banner **Experimentell** und **Nicht standardisiert** werden direkt nach diesem Hinweisblock angezeigt.
>
> _Denken Sie daran, diesen gesamten erklärenden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Beachten Sie das wichtigste Prinzip für das Schreiben konsistenter JavaScript-Referenzseiten: **sehen Sie sich um**! Viele verwandte Seiten weisen über die Anforderungen dieser Vorlage hinaus konsistente Strukturen auf. Beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Suchen Sie zunächst nach vorhandener Dokumentation für ähnliche APIs und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die Daten-Eigenschaft **`nameOfTheProperty`** einer \\{{jsxref("Constructor")}}-Instanz enthält etwas. Wenn die Eigenschaft auf `Constructor.prototype` installiert ist, schreiben Sie: „Die Daten-Eigenschaft **`nameOfTheProperty`** von `Constructor.prototype` wird von allen \\{{jsxref("Constructor")}}-Instanzen gemeinsam genutzt. Sie enthält etwas.“ Dies sollte idealerweise aus 1 oder 2 kurzen Sätzen bestehen. Halten Sie dies mit der Landingpage des Konstruktors synchron — beispielsweise sollte die Landingpage Zeilen wie diese enthalten:

```md
- \{{jsxref("Constructor/nameOfTheProperty", "nameOfTheProperty")}}
  - : Contains something.
```

## Wert

Ein [Typ], der ...

Beispielsweise „eine nicht negative ganze Zahl kleiner als ..., die die Anzahl der Elemente im Array darstellt“.

\\{{js_property_attributes(1, 0, 0)}}

Die drei an `js_property_attributes` übergebenen Zahlen stellen jeweils die Attribute `configurable`, `enumerable` und `writable` dar. Lesen Sie die Spezifikation oder führen Sie Experimente durch. Falls abhängig davon, wie das Objekt erstellt wird, mehrere mögliche Attributkombinationen vorhanden sind oder die Eigenschaft nur bedingt vorhanden ist, fügen Sie einen Hinweis hinzu.

## Beschreibung

Der Großteil der Beschreibung der Eigenschaft sollte hier stehen. Seien Sie so umfassend wie möglich. Wenn viele Seiten dieselbe Beschreibung teilen, erwägen Sie, einen neuen Abschnitt auf der Landingpage der Klasse hinzuzufügen und von hier darauf zu verlinken. Beispielsweise wird [Array-Methoden und leere Slots](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots) von jeder Array-Methodenseite aus verlinkt.

Leser sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den untenstehenden Beispielabschnitt zu lesen. Falls in diesem Abschnitt Beispiele erforderlich sind, sollten sie kurz sein und müssen nicht realitätsnah sein.

## Beispiele

Beachten Sie, dass wir die Pluralform „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte kurz sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwendung von nameOfTheProperty“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die sich auf die aktuelle Eigenschaft beziehen. Weitere Richtlinien finden Sie im [Abschnitt „Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- [Polyfill von `nameOfTheProperty` in `core-js`](https://github.com/zloirock/core-js#anchor)
- [es-shims-Polyfill von `nameOfTheProperty`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
