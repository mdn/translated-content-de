---
title: Vorlage für JavaScript-Funktionsseiten
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_function_page_template
l10n:
  sourceCommit: 865686a652cb8dc4e9522e23399896e6373bfc19
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung_
>
> ---
>
> **Front Matter der Seite:**
>
> Das Front Matter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren. Die Werte sollten für die jeweilige Funktion entsprechend aktualisiert werden.
>
> ```md
> ---
> title: nameOfFunction()
> slug: Web/JavaScript/Reference/Global_Objects/nameOfFunction
> page-type: javascript-function
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.builtins.nameOfFunction
> sidebar: jssidebar
> ---
> ```
>
> - **title**
>   - : Überschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als `nameOfFunction()`. Beispielsweise hat die Funktion [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) den _title_ `parseFloat()`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieser sollte wie `Web/JavaScript/Reference/Global_Objects/nameOfFunction` formatiert sein.
> - **page-type**
>   - : Der Schlüssel `page-type` für JavaScript-Funktionen ist `javascript-function`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden Elemente enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.nameOfFunction` durch die Abfragezeichenfolge für die Funktion im [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation auszufüllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Funktion in unserem [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen und dass der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Dies ist `jssidebar` für JavaScript-Funktionsseiten.
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
> - `\{{Non-standard_Header}}` — dies erzeugt ein Banner **Nicht standardisiert**, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Fügen Sie Status-Header-Makros nicht manuell hinzu. Informationen zum Hinzufügen dieser Status zur Seite finden Sie im Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Banner **Experimentell** und **Nicht standardisiert** werden direkt nach diesem Hinweisblock angezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an das wichtigste Prinzip zum Schreiben einheitlicher JavaScript-Referenzseiten: **sehen Sie sich um**! Viele verwandte Seiten haben einheitliche Strukturen, die über die Anforderungen dieser Vorlage hinausgehen. Beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Suchen Sie zunächst nach vorhandener Dokumentation für ähnliche APIs und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die Funktion **`nameOfFunction()`** führt etwas aus. Dies sollten idealerweise ein oder zwei kurze Sätze sein. Schreiben Sie im Allgemeinen nicht mehr als einen einzelnen Absatz mit mehr als einigen Sätzen: Wesentliche Details gehören in die Beschreibung.

Schreiben Sie ein [interaktives Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples), das wichtige Aspekte der Funktion demonstriert.

{{InteractiveExample("JavaScript Demo: nameOfFunction()")}}

```js interactive-example
const result = nameOfFunction(1);
console.log(result);
// Expected output: 42
```

## Syntax

Füllen Sie einen Syntaxkasten gemäß den Anleitungen in unserem Artikel zu [Syntaxabschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) aus.

```js-nolint
nameOfFunction(parameter1)
nameOfFunction(parameter1, parameter2)
```

### Parameter

- `parameter1`
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion ein. Fügen Sie für jeden Parameter einen Begriff und eine Definition ein. Wenn der Parameter nicht optional ist, entfernen Sie den Makroaufruf \\{{optional_inline}}.
- `parameter2` {{optional_inline}}
  - : usw.

> [!NOTE]
> Dieser Abschnitt ist verpflichtend. Wenn es keine Parameter gibt, schreiben Sie statt der Definitionsliste „Keine.“.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts der Funktion ein, einschließlich Datentyp und dessen Bedeutung. Beispiel: „Eine {{jsxref("Number")}}, die etwas darstellt.“

Wenn die Funktion nichts zurückgibt, schreiben Sie einfach „Keine ({{jsxref('undefined')}}).“.

Wenn die Funktion ein Promise zurückgibt, verwenden Sie das Format „Ein {{jsxref("Promise")}}, das asynchron mit einer {{jsxref("Number")}} erfüllt wird, die etwas darstellt“. Abgelehnte Promises gehören in den Abschnitt „Ausnahmen“.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Bedingung 1.
    - Bedingung 2.
    - usw.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn ...

Seien Sie so umfassend wie möglich. Listen Sie im Allgemeinen keine Ausnahmen auf, die durch das Aufrufen von Benutzercode ausgelöst werden können, etwa durch das Ausführen von Gettern oder durch Typumwandlung. Listen Sie keine Ausnahmen aufgrund von Typinkompatibilität auf, etwa wenn ein Symbol an einen Parameter übergeben wird, der einen String erwartet, oder wenn eine Nicht-Funktion als Callback übergeben wird.

## Beschreibung

Der größte Teil der Beschreibung der Funktion sollte hier stehen. Seien Sie so umfassend wie möglich. Leser sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den nachfolgenden Beispielabschnitt lesen zu müssen. Falls Beispiele in diesem Abschnitt erforderlich sind, sollten sie kurz sein und müssen keinen Bezug zur Praxis haben.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte kurz sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwenden von nameOfFunction()“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die sich auf die aktuelle Funktion beziehen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- [Polyfill von `nameOfFunction` in `core-js`](https://github.com/zloirock/core-js#anchor)
- [es-shims-Polyfill von `nameOfFunction`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (year)
