---
title: JavaScript-Funktionsseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_function_page_template
l10n:
  sourceCommit: 4c5b1bd7b5f9142c4c53ab6321e19bfdfaf1ddda
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung_
>
> ---
>
> **Frontmatter der Seite:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren. Die Werte sollten für die jeweilige Funktion entsprechend aktualisiert werden.
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
>   - : Überschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als `nameOfFunction()`. Zum Beispiel hat die Funktion [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) den _title_ `parseFloat()`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies sollte wie `Web/JavaScript/Reference/Global_Objects/nameOfFunction` formatiert sein.
> - **page-type**
>   - : Der Schlüssel `page-type` für JavaScript-Funktionen ist `javascript-function`.
> - **status**
>   - : Kennzeichnungen, die den Status dieser Funktion beschreiben. Ein Array, das eines oder mehrere der folgenden Elemente enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe [„Wie Funktionsstatus hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.nameOfFunction` durch die Abfragezeichenfolge für die Funktion im [Browser-compat-data-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation zu füllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zunächst einen Eintrag für die Funktion in unserem [Browser-compat-data-Repository](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen und der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Dies ist `jssidebar` für JavaScript-Funktionsseiten.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsabschnitts (unmittelbar unter dem Frontmatter der Seite) erscheinen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein Banner **This is an experimental technology**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einer Voreinstellung verborgen ist, sollten Sie außerdem einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dies erzeugt ein Banner **Non-standard**, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Geben Sie Status-Header-Makros nicht manuell an. Lesen Sie den Abschnitt [Wie Funktionsstatus hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der Banner **Experimental** und **Non-standard** werden direkt nach diesem Hinweisblock angezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an das wichtigste Prinzip zum Schreiben konsistenter JavaScript-Referenzseiten: **schauen Sie sich um**! Viele verwandte Seiten haben konsistente Strukturen, die über die Anforderungen dieser Vorlage hinausgehen. Beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Beginnen Sie damit, nach vorhandener Dokumentation für ähnliche APIs zu suchen, und kopieren Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die Funktion **`nameOfFunction()`** führt etwas aus. Dies sollte idealerweise aus einem oder zwei kurzen Sätzen bestehen. Schreiben Sie im Allgemeinen nicht mehr als einen einzelnen Absatz mit mehr als einigen Sätzen: Wesentliche Details gehören in die Beschreibung.

Schreiben Sie ein [interaktives Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples), das wichtige Aspekte der Funktion demonstriert.

{{InteractiveExample("JavaScript Demo: nameOfFunction()")}}

```js interactive-example
const result = nameOfFunction(1);
console.log(result);
// Expected output: 42
```

## Syntax

Füllen Sie gemäß den Hinweisen in unserem Artikel zu [Syntaxabschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) einen Syntaxkasten aus.

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
> Dieser Abschnitt ist verpflichtend. Wenn es keine Parameter gibt, schreiben Sie statt der Definitionsliste `None.`.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts der Funktion ein, einschließlich Datentyp und dessen Bedeutung. Zum Beispiel: „Ein {{jsxref("Number")}}, der etwas darstellt.“

Wenn die Funktion nichts zurückgibt, schreiben Sie einfach „None ({{jsxref('undefined')}}).“.

Wenn die Funktion ein Promise zurückgibt, verwenden Sie das Format „Ein {{jsxref("Promise")}}, das asynchron mit einem {{jsxref("Number")}} erfüllt wird, der etwas darstellt“. Abgelehnte Promises gehören in den Abschnitt „Exceptions“.

### Exceptions

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Bedingung 1.
    - Bedingung 2.
    - usw.
- {{jsxref("RangeError")}}
  - : Auslösen, wenn ...

Seien Sie so umfassend wie möglich. Listen Sie im Allgemeinen keine Exceptions auf, die durch das Ausführen von Benutzercode ausgelöst werden können, etwa durch das Ausführen von Gettern oder durch Typumwandlung. Listen Sie keine Exceptions aufgrund nicht übereinstimmender Typen auf, etwa wenn ein Symbol an einen Parameter übergeben wird, der eine Zeichenkette erwartet, oder wenn eine Nicht-Funktion als Callback übergeben wird.

## Beschreibung

Der Großteil der Beschreibung der Funktion gehört hierher. Seien Sie so umfassend wie möglich. Lesende sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den nachfolgenden Beispielabschnitt zu lesen. Falls Beispiele in diesem Abschnitt nötig sind, sollten sie kurz sein und müssen nicht praxisrelevant sein.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte aussagekräftig beschreiben, was das Beispiel tut. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte kurz sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwendung von nameOfFunction()“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Funktion zusammenhängen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- [Polyfill von `nameOfFunction` in `core-js`](https://github.com/zloirock/core-js#anchor)
- [es-shims-Polyfill von `nameOfFunction`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
