---
title: Seitentemplate für statische JavaScript-Methoden
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_method_page_template
l10n:
  sourceCommit: 865686a652cb8dc4e9522e23399896e6373bfc19
---

> [!NOTE]
> _Entfernen Sie vor der Veröffentlichung diesen gesamten erläuternden Hinweis_
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
>   - : Überschrift, die oben auf der Seite angezeigt wird. Format: `Constructor.nameOfTheMethod()`. Beispielsweise hat die Methode [`from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) der Klasse [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) den _title_ `Array.from()`.
> - **short-title**
>   - : Ein kurzer Titel, der in Breadcrumbs und Seitenleisten verwendet wird. Format: `nameOfTheMethod()`. Beispielsweise hat die Methode [`from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) den _short-title_ `from()`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieser wird wie `Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheMethod` formatiert. Beachten Sie, dass der Name der Methode im Slug keine Klammern enthält (er endet auf `nameOfTheMethod` und nicht auf `nameOfTheMethod()`).
> - **page-type**
>   - : Der Schlüssel `page-type` für statische JavaScript-Methoden ist `javascript-static-method`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden Elemente enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor.nameOfTheMethod` durch die Abfragezeichenfolge für die Methode im [Browser-compat-data-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation auszufüllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zunächst einen Eintrag für die Methode in unserem [Browser-compat-data-Repository](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen und dass der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für Seiten zu statischen JavaScript-Methoden lautet dieser Wert `jsref`.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsabschnitts (direkt unter dem Front Matter der Seite) erscheinen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (Sie müssen sie nicht hinzufügen oder entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein Banner **Dies ist eine experimentelle Technologie**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einer Pref verborgen ist, sollten Sie außerdem einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — erzeugt ein Banner **Nicht standardisiert**, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Geben Sie Status-Header-Makros nicht manuell an. Informationen zum Hinzufügen dieser Status zur Seite finden Sie im Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele der Banner **Experimentell** und **Nicht standardisiert** werden direkt nach diesem Hinweisblock angezeigt.
>
> _Denken Sie daran, vor der Veröffentlichung diesen gesamten erläuternden Hinweis zu entfernen._

> [!NOTE]
> Denken Sie an das wichtigste Prinzip beim Verfassen konsistenter JavaScript-Referenzseiten: **sehen Sie sich um**! Viele verwandte Seiten haben über die Anforderungen dieses Templates hinaus konsistente Strukturen. Beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Suchen Sie zunächst nach bestehender Dokumentation für ähnliche APIs und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die statische Methode **`Constructor.nameOfTheMethod()`** führt etwas aus. Dies sollten idealerweise ein oder zwei kurze Sätze sein. Halten Sie dies mit der Einstiegsseite des Konstruktors synchron — beispielsweise sollte die Einstiegsseite Zeilen wie diese enthalten:

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
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion ein. Geben Sie für jeden Parameter einen Begriff und eine Definition an. Wenn der Parameter nicht optional ist, entfernen Sie den Makroaufruf \\{{optional_inline}}.
- `parameter2` {{optional_inline}}
  - : usw.

> [!NOTE]
> Dieser Abschnitt ist obligatorisch. Falls es keine Parameter gibt, schreiben Sie statt der Definitionsliste „Keine“.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts der Methode ein, einschließlich Datentyp und Bedeutung. Beispiel: „Ein {{jsxref("Number")}}, der etwas darstellt.“

Falls die Methode nichts zurückgibt, schreiben Sie einfach „Keine ({{jsxref('undefined')}}).“.

Falls die Methode ein Promise zurückgibt, geben Sie an, ob es bereits erfüllt oder asynchron erfüllt wird, sowie den Erfüllungswert. Abgelehnte Promises gehören in den Abschnitt „Ausnahmen“.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Bedingung 1.
    - Bedingung 2.
    - usw.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn …

Seien Sie so umfassend wie möglich. Im Allgemeinen sollten Sie keine Ausnahmen aufführen, die beim Ausführen von Benutzercode ausgelöst werden können, etwa beim Ausführen von Gettern oder bei der Typumwandlung. Führen Sie keine Ausnahmen aufgrund von Typkonflikten auf, etwa wenn ein Symbol an einen Parameter übergeben wird, der einen String erwartet, oder wenn eine Nicht-Funktion als Callback übergeben wird.

## Beschreibung

Der Großteil der Beschreibung der Methode sollte hier stehen. Seien Sie so umfassend wie möglich. Falls viele Seiten dieselbe Beschreibung teilen, ziehen Sie in Betracht, einen neuen Abschnitt auf der Einstiegsseite der Klasse hinzuzufügen und von hier darauf zu verlinken. Beispielsweise wird [Array-Methoden und leere Slots](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots) von jeder Seite zu Array-Methoden verlinkt.

Leser sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den unten stehenden Beispielabschnitt zu lesen. Beispiele in diesem Abschnitt sollten, falls erforderlich, kurz sein und müssen nicht praxisrelevant sein.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte kurz sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwendung von nameOfTheMethod()“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Methode zusammenhängen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- [Polyfill von `Constructor.nameOfTheMethod` in `core-js`](https://github.com/zloirock/core-js#anchor)
- [es-shims-Polyfill von `Constructor.nameOfTheMethod`](https://www.npmjs.com/package/es-aggregate-error)
- Link1
- Link2
- external_link (Jahr)
