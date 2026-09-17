---
title: Vorlage für JavaScript-Instanzmethodenseiten
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_instance_method_page_template
l10n:
  sourceCommit: 865686a652cb8dc4e9522e23399896e6373bfc19
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erklärenden Hinweis vor der Veröffentlichung_
>
> ---
>
> **Front Matter der Seite:**
>
> Das Front Matter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren. Die Werte sollten für die jeweilige Methode entsprechend aktualisiert werden.
>
> ```md
> ---
> title: Constructor.prototype.nameOfTheMethod()
> short-title: nameOfTheMethod()
> slug: Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheMethod
> page-type: javascript-instance-method
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
>   - : Überschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als `Constructor.prototype.nameOfTheMethod()`. Beispielsweise hat die Methode [`at()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/at) der Klasse [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) den _title_ `Array.prototype.at()`.
> - **short-title**
>   - : Ein kurzer Titel, der in Breadcrumbs und Sidebars verwendet wird. Formatieren Sie ihn als `nameOfTheMethod()`. Beispielsweise hat die Methode [`at()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/at) den _short-title_ `at()`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieser wird wie `Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheMethod` formatiert. Beachten Sie, dass der Name der Methode im Slug die Klammern weglässt (er endet auf `nameOfTheMethod`, nicht auf `nameOfTheMethod()`).
> - **page-type**
>   - : Der Schlüssel `page-type` für JavaScript-Instanzmethoden ist `javascript-instance-method`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor.nameOfTheMethod` durch den Abfragestring für die Methode im [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation zu füllen (wobei die Makros `\{{Compat}}` und `\{{Specifications}}` ersetzt werden).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Methode in unserem [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen und dass der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für JavaScript-Instanzmethodenseiten ist dies `jsref`.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
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
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einer Präferenz verborgen ist, sollten Sie außerdem einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dies erzeugt ein Banner **Nicht standardmäßig**, das darauf hinweist, dass das Feature nicht Teil irgendeiner Spezifikation ist.
>
> Geben Sie Status-Header-Makros nicht manuell an. Lesen Sie den Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die Banner **Experimentell** und **Nicht standardmäßig** werden direkt nach diesem Hinweisblock angezeigt.
>
> _Denken Sie daran, diesen gesamten erklärenden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an das wichtigste Prinzip für das Schreiben konsistenter JavaScript-Referenzseiten: **sehen Sie sich um**! Viele verwandte Seiten haben konsistente Strukturen, die über die Anforderungen dieser Vorlage hinausgehen. Beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Beginnen Sie damit, nach vorhandener Dokumentation für ähnliche APIs zu suchen, und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die Methode **`nameOfTheMethod()`** von \\{{jsxref("Constructor")}}-Instanzen führt eine Aktion aus. Dies sollten idealerweise ein oder zwei kurze Sätze sein. Halten Sie dies mit der Landingpage des Konstruktors synchron — beispielsweise sollte die Landingpage Zeilen wie diese enthalten:

```md
- \{{jsxref("Constructor.prototype.nameOfTheMethod()")}}
  - : Does something.
```

## Syntax

Füllen Sie gemäß den Vorgaben in unserem Artikel zu [Syntaxabschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) einen Syntaxkasten aus.

```js-nolint
nameOfTheMethod(parameter1)
nameOfTheMethod(parameter1, parameter2)
```

### Parameter

- `parameter1`
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion ein. Geben Sie für jeden Parameter einen Begriff und eine Definition an. Wenn der Parameter nicht optional ist, entfernen Sie den Makroaufruf \\{{optional_inline}}.
- `parameter2` {{optional_inline}}
  - : usw.

> [!NOTE]
> Dieser Abschnitt ist verpflichtend. Wenn es keine Parameter gibt, schreiben Sie statt der Definitionsliste „Keine.“.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts der Methode ein, einschließlich Datentyp und dessen Bedeutung. Beispielsweise: „Ein {{jsxref("Number")}}, der etwas darstellt.“

Wenn die Methode nichts zurückgibt, schreiben Sie einfach „Keine ({{jsxref('undefined')}}).“.

Wenn die Methode ein Promise zurückgibt, verwenden Sie das Format „Ein {{jsxref("Promise")}}, das asynchron mit einem {{jsxref("Number")}} erfüllt wird, der etwas darstellt“. Zurückgewiesene Promises gehören in den Abschnitt „Ausnahmen“.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Bedingung 1.
    - Bedingung 2.
    - usw.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn …

Seien Sie so umfassend wie möglich. Listen Sie im Allgemeinen keine Ausnahmen auf, die durch das Ausführen von Benutzercode ausgelöst werden können, etwa beim Ausführen von Gettern oder bei der Typumwandlung. Listen Sie keine Ausnahmen aufgrund eines Typkonflikts auf, etwa wenn ein Symbol an einen Parameter übergeben wird, der einen String erwartet, oder wenn eine Nicht-Funktion als Callback übergeben wird.

## Beschreibung

Der größte Teil der Beschreibung der Methode sollte hier stehen. Seien Sie so umfassend wie möglich. Wenn es viele Seiten gibt, die dieselbe Beschreibung teilen, sollten Sie erwägen, einen neuen Abschnitt zur Landingpage der Klasse hinzuzufügen und von hier darauf zu verlinken. Beispielsweise wird auf [Array-Methoden und leere Slots](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots) von jeder Seite zu Array-Methoden verlinkt.

Leser sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den unten stehenden Beispielabschnitt lesen zu müssen. Beispiele in diesem Abschnitt sollten, falls erforderlich, prägnant sein und müssen nicht für reale Anwendungsfälle relevant sein.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwendung von nameOfTheMethod()“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Methode beziehen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- [Polyfill von `Constructor.prototype.nameOfTheMethod` in `core-js`](https://github.com/zloirock/core-js#anchor)
- [es-shims-Polyfill von `Constructor.prototype.nameOfTheMethod`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
