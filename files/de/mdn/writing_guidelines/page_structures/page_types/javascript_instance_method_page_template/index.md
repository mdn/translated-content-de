---
title: JavaScript-Instanzmethoden-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_instance_method_page_template
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
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird wie `Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheMethod` formatiert. Beachten Sie, dass der Name der Methode im Slug die Klammern auslässt (er endet mit `nameOfTheMethod`, nicht mit `nameOfTheMethod()`).
> - **page-type**
>   - : Der Schlüssel `page-type` für JavaScript-Instanzmethoden lautet `javascript-instance-method`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden Elemente enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor.nameOfTheMethod` durch die Abfragezeichenfolge für die Methode im [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation zu füllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Methode in unserem [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen und der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Lesen Sie hierzu unseren [Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für JavaScript-Instanzmethodenseiten lautet dieser Wert `jsref`.
>     Weitere Informationen finden Sie unter [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsabschnitts (unmittelbar unter dem Front Matter der Seite) erscheinen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (sie müssen nicht hinzugefügt oder entfernt werden):
>
> - `\{{SeeCompatTable}}` — erzeugt ein Banner **Dies ist eine experimentelle Technologie**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einer Pref verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — erzeugt ein Banner **Nicht standardisiert**, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Geben Sie Status-Header-Makros nicht manuell an. Lesen Sie den Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die Banner **Experimentell** und **Nicht standardisiert** werden direkt nach diesem Notizblock gezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Notiz vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an das wichtigste Prinzip für das Schreiben konsistenter JavaScript-Referenzseiten: **sehen Sie sich um**! Viele verwandte Seiten haben über die Anforderungen dieser Vorlage hinaus konsistente Strukturen. Beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Beginnen Sie damit, nach vorhandener Dokumentation für ähnliche APIs zu suchen, und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die Methode **`nameOfTheMethod()`** von \\{{jsxref("Constructor")}}-Instanzen führt etwas aus. Dies sollten idealerweise ein oder zwei kurze Sätze sein. Halten Sie dies mit der Landingpage des Konstruktors synchron — beispielsweise sollte die Landingpage Zeilen wie diese enthalten:

```md
- \{{jsxref("Constructor.prototype.nameOfTheMethod()")}}
  - : Does something.
```

## Syntax

Füllen Sie ein Syntaxfeld gemäß den Hinweisen in unserem Artikel zu [Syntaxabschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) aus.

```js-nolint
nameOfTheMethod(parameter1)
nameOfTheMethod(parameter1, parameter2)
```

### Parameter

- `parameter1`
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion ein. Fügen Sie für jeden Parameter einen Begriff und eine Definition ein. Wenn der Parameter nicht optional ist, entfernen Sie den Makroaufruf \\{{optional_inline}}.
- `parameter2` {{optional_inline}}
  - : usw.

> [!NOTE]
> Dieser Abschnitt ist obligatorisch. Wenn es keine Parameter gibt, schreiben Sie statt der Definitionsliste `None.`.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts der Methode ein, einschließlich Datentyp und dessen Bedeutung. Zum Beispiel: „Ein {{jsxref("Number")}}, der etwas darstellt.“

Wenn die Methode nichts zurückgibt, schreiben Sie einfach „None ({{jsxref('undefined')}}).“.

Wenn die Methode ein Promise zurückgibt, verwenden Sie das Format „Ein {{jsxref("Promise")}}, das asynchron mit einem {{jsxref("Number")}} erfüllt wird, der etwas darstellt“. Abgelehnte Promises gehören in den Abschnitt „Exceptions“.

### Exceptions

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Bedingung 1.
    - Bedingung 2.
    - usw.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn …

Seien Sie so umfassend wie möglich. Führen Sie im Allgemeinen keine Exceptions auf, die durch das Aufrufen von Benutzercode ausgelöst werden können, etwa durch das Ausführen von Gettern oder durch Typkonvertierung. Führen Sie keine Exceptions aufgrund eines Typkonflikts auf, etwa wenn ein Symbol an einen Parameter übergeben wird, der einen String erwartet, oder wenn eine Nicht-Funktion als Callback übergeben wird.

## Beschreibung

Der größte Teil der Beschreibung der Methode sollte hier stehen. Seien Sie so umfassend wie möglich. Wenn es viele Seiten gibt, die dieselbe Beschreibung verwenden, ziehen Sie in Betracht, einen neuen Abschnitt auf der Landingpage der Klasse hinzuzufügen und von hier darauf zu verlinken. Beispielsweise wird [Array-Methoden und leere Slots](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots) von jeder Seite zu Array-Methoden aus verlinkt.

Leserinnen und Leser sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den nachfolgenden Beispielabschnitt lesen zu müssen. Beispiele, die in diesem Abschnitt präsentiert werden, sollten, falls erforderlich, kurz sein und müssen nicht praxisrelevant sein.

## Beispiele

Beachten Sie, dass wir die Pluralform „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte kurz sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwendung von nameOfTheMethod()“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Methode in Zusammenhang stehen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Writing Style Guide_.

- [Polyfill von `Constructor.prototype.nameOfTheMethod` in `core-js`](https://github.com/zloirock/core-js#anchor)
- [es-shims-Polyfill von `Constructor.prototype.nameOfTheMethod`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
