---
title: Vorlage für Seiten zu statischen JavaScript-Methoden
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_method_page_template
l10n:
  sourceCommit: 4c5b1bd7b5f9142c4c53ab6321e19bfdfaf1ddda
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung_
>
> ---
>
> **Front Matter der Seite:**
>
> Das Front Matter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren. Die Werte sollten für die jeweilige Methode entsprechend aktualisiert werden.
>
> ```md
> ---
> title: Constructor.nameOfTheMethod()
> short-title: nameOfTheMethod()
> slug: Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheMethod
> page-type: javascript-static-method
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.builtins.Constructor.nameOfTheMethod
> sidebar: jsref
> ---
> ```
>
> - **title**
>   - : Überschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als `Constructor.nameOfTheMethod()`. Beispielsweise hat die Methode [`from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) der Klasse [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) den _title_ `Array.from()`.
> - **short-title**
>   - : Ein Kurztitel, der in Breadcrumbs und Seitenleisten verwendet wird. Formatieren Sie ihn als `nameOfTheMethod()`. Beispielsweise hat die Methode [`from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) den _short-title_ `from()`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieser wird wie `Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheMethod` formatiert. Beachten Sie, dass der Name der Methode im Slug keine Klammern enthält (er endet mit `nameOfTheMethod`, nicht mit `nameOfTheMethod()`).
> - **page-type**
>   - : Der Schlüssel `page-type` für statische JavaScript-Methoden lautet `javascript-static-method`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden Elemente enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„How feature statuses are added or updated“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor.nameOfTheMethod` durch die Abfragezeichenfolge für die Methode im [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation auszufüllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Methode in unserem [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen. Der Eintrag für die API muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für Seiten zu statischen JavaScript-Methoden lautet dies `jsref`.
>     Details finden Sie unter [Page structures: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsabschnitts (unmittelbar unter dem Front Matter der Seite) erscheinen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (sie müssen nicht hinzugefügt oder entfernt werden):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein Banner **This is an experimental technology**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Falls sie experimentell ist und die Technologie in Firefox hinter einer Pref verborgen ist, sollten Sie außerdem auf der Seite [Experimental features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) einen Eintrag dafür ausfüllen.
> - `\{{Non-standard_Header}}` — dies erzeugt ein Banner **Non-standard**, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Geben Sie Status-Header-Makros nicht manuell an. Informationen zum Hinzufügen dieser Status zur Seite finden Sie im Abschnitt [How feature statuses are added or updated](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Banner **Experimental** und **Non-standard** werden direkt nach diesem Hinweisblock angezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an das wichtigste Prinzip für das Schreiben konsistenter JavaScript-Referenzseiten: **sehen Sie sich um**! Viele verwandte Seiten weisen über die Anforderungen dieser Vorlage hinaus konsistente Strukturen auf. Beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Suchen Sie zunächst nach vorhandener Dokumentation für ähnliche APIs und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die statische Methode **`Constructor.nameOfTheMethod()`** führt etwas aus. Dies sollte idealerweise aus 1 oder 2 kurzen Sätzen bestehen. Halten Sie dies mit der Landingpage des Konstruktors synchron — beispielsweise sollte die Landingpage Zeilen wie diese enthalten:

```md
- \{{jsxref("Constructor.nameOfTheMethod()")}}
  - : Does something.
```

## Syntax

Füllen Sie gemäß den Hinweisen in unserem Artikel zu [Syntaxabschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) einen Syntaxkasten aus.

```js-nolint
Constructor.nameOfTheMethod(parameter1)
Constructor.nameOfTheMethod(parameter1, parameter2)
```

### Parameter

- `parameter1`
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion ein. Fügen Sie für jeden Parameter einen Begriff und eine Definition ein. Wenn der Parameter nicht optional ist, entfernen Sie den Makroaufruf \\{{optional_inline}}.
- `parameter2` {{optional_inline}}
  - : usw.

> [!NOTE]
> Dieser Abschnitt ist obligatorisch. Falls es keine Parameter gibt, schreiben Sie `None.` statt der Definitionsliste.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts der Methode ein, einschließlich des Datentyps und dessen, was er darstellt. Beispiel: „Ein {{jsxref("Number")}}, der etwas darstellt.“

Falls die Methode nichts zurückgibt, schreiben Sie einfach „None ({{jsxref('undefined')}}).“.

Falls die Methode ein Promise zurückgibt, geben Sie an, ob es bereits erfüllt oder asynchron erfüllt wird, sowie den Erfüllungswert. Abgelehnte Promises gehören in den Abschnitt „Exceptions“.

### Exceptions

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Bedingung 1.
    - Bedingung 2.
    - usw.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn …

Seien Sie so umfassend wie möglich. Listen Sie im Allgemeinen keine Exceptions auf, die beim Ausführen von Benutzercode ausgelöst werden können, etwa beim Ausführen von Gettern oder bei der Typumwandlung. Listen Sie keine Exceptions aufgrund eines Typkonflikts auf, etwa wenn ein Symbol an einen Parameter übergeben wird, der einen String erwartet, oder wenn eine Nicht-Funktion als Callback übergeben wird.

## Beschreibung

Der größte Teil der Beschreibung der Methode sollte hier stehen. Seien Sie so umfassend wie möglich. Falls viele Seiten dieselbe Beschreibung teilen, sollten Sie erwägen, einen neuen Abschnitt auf der Landingpage der Klasse hinzuzufügen und von hier darauf zu verlinken. Beispielsweise wird von jeder Seite zu einer Array-Methode auf [Array methods and empty slots](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots) verwiesen.

Leser sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den unten stehenden Beispielabschnitt lesen zu müssen. Falls in diesem Abschnitt Beispiele erforderlich sind, sollten sie prägnant sein und müssen nicht praxisrelevant sein.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Beispielsweise sagt „A simple example“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte kurz sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Using nameOfTheMethod()“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die sich auf die aktuelle Methode beziehen. Weitere Richtlinien finden Sie im Abschnitt [See also](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing style guide_.

- [Polyfill von `Constructor.nameOfTheMethod` in `core-js`](https://github.com/zloirock/core-js#anchor)
- [es-shims-Polyfill von `Constructor.nameOfTheMethod`](https://www.npmjs.com/package/es-aggregate-error)
- Link1
- Link2
- external_link (Jahr)
