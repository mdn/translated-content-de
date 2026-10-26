---
title: Vorlage für eine Seite zu einer statischen JavaScript-Methode
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_method_page_template
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung._
>
> ---
>
> **Frontmatter der Seite:**
>
> Das Frontmatter am Anfang der Seite definiert die „Seitenmetadaten“. Die Werte sollten für die jeweilige Methode entsprechend angepasst werden.
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
>   - : Die Überschrift, die oben auf der Seite angezeigt wird. Verwenden Sie das Format `Constructor.nameOfTheMethod()`. Beispielsweise hat die Methode [`from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) der Klasse [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) den _title_ `Array.from()`.
> - **short-title**
>   - : Ein kurzer Titel für die Brotkrumennavigation und Seitenleisten. Verwenden Sie das Format `nameOfTheMethod()`. Beispielsweise hat die Methode [`from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) den _short-title_ `from()`.
> - **slug**
>   - : Der Teil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Er hat ein Format wie `Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheMethod`. Beachten Sie, dass beim Methodennamen im Slug die Klammern weggelassen werden (er endet auf `nameOfTheMethod`, nicht auf `nameOfTheMethod()`).
> - **page-type**
>   - : Der Schlüssel `page-type` hat für statische JavaScript-Methoden den Wert `javascript-static-method`.
> - **status**
>   - : Kennzeichnungen, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe [„Wie Funktionsstatus hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor.nameOfTheMethod` durch den Abfrageschlüssel für die Methode im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet diesen Schlüssel automatisch, um die Abschnitte zur Kompatibilität und zu Spezifikationen zu füllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Möglicherweise müssen Sie zunächst einen Eintrag für die Methode in unserem [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren. Der Eintrag für die API muss auch Angaben zur Spezifikation enthalten.
>     Weitere Informationen finden Sie in unserem [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für Seiten zu statischen JavaScript-Methoden lautet der Wert `jsref`.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsbereichs (direkt unter dem Frontmatter der Seite) stehen mehrere Makroaufrufe.
>
> Diese Makros werden von der Toolchain automatisch hinzugefügt (Sie müssen sie nicht hinzufügen oder entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt einen Hinweis **Dies ist eine experimentelle Technologie**, der angibt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell und in Firefox hinter einer Einstellung verborgen ist, sollten Sie außerdem einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ergänzen.
> - `\{{Non-standard_Header}}` — erzeugt einen Hinweis **Nicht standardisiert**, der angibt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Fügen Sie Makros für Statushinweise nicht manuell hinzu. Informationen dazu, wie Sie diese Statusangaben zur Seite hinzufügen, finden Sie im Abschnitt [Wie Funktionsstatus hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Hinweise **Experimentell** und **Nicht standardisiert** stehen direkt nach diesem Hinweisblock.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an den wichtigsten Grundsatz für einheitliche JavaScript-Referenzseiten: **Schauen Sie sich um**! Viele verwandte Seiten weisen über die Vorgaben dieser Vorlage hinaus einheitliche Strukturen auf. Das gilt beispielsweise für alle Proxy-Handler und die meisten Array-Methoden. Suchen Sie zunächst nach vorhandener Dokumentation für ähnliche APIs und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die statische Methode **`Constructor.nameOfTheMethod()`** bewirkt etwas. Dieser Absatz sollte idealerweise aus einem oder zwei kurzen Sätzen bestehen. Stimmen Sie ihn mit der Übersichtsseite des Konstruktors ab – diese sollte beispielsweise entsprechende Zeilen enthalten:

```md
- \{{jsxref("Constructor.nameOfTheMethod()")}}
  - : Does something.
```

## Syntax

Fügen Sie einen Syntaxblock ein und orientieren Sie sich dabei an den Vorgaben in unserem Artikel über [Syntaxabschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

```js-nolint
Constructor.nameOfTheMethod(parameter1)
Constructor.nameOfTheMethod(parameter1, parameter2)
```

### Parameter

- `parameter1`
  - : Beschreiben Sie hier kurz den Parameter und seine Funktion. Fügen Sie für jeden Parameter einen Begriff und eine Definition hinzu. Wenn der Parameter nicht optional ist, entfernen Sie den Makroaufruf \\{{optional_inline}}.
- `parameter2` {{optional_inline}}
  - : usw.

> [!NOTE]
> Dieser Abschnitt ist verpflichtend. Wenn es keine Parameter gibt, schreiben Sie statt der Definitionsliste „Keine“.

### Rückgabewert

Beschreiben Sie den Rückgabewert der Methode, einschließlich seines Datentyps und dessen, was er darstellt. Beispiel: „Ein {{jsxref("Number")}}, der etwas darstellt.“

Wenn die Methode nichts zurückgibt, schreiben Sie einfach „Keiner ({{jsxref('undefined')}}).“

Wenn die Methode ein Promise zurückgibt, geben Sie an, ob es bereits erfüllt ist oder asynchron erfüllt wird, und nennen Sie den Erfüllungswert. Abgelehnte Promises gehören in den Abschnitt „Ausnahmen“.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Bedingung 1.
    - Bedingung 2.
    - usw.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn …

Seien Sie so umfassend wie möglich. Führen Sie im Allgemeinen keine Ausnahmen auf, die durch die Ausführung von Benutzercode ausgelöst werden können, etwa beim Ausführen von Gettern oder bei einer Typumwandlung. Führen Sie auch keine Ausnahmen aufgrund von Typinkompatibilitäten auf, etwa wenn einem Parameter, der einen String erwartet, ein Symbol übergeben wird oder wenn als Callback etwas übergeben wird, das keine Funktion ist.

## Beschreibung

Der Großteil der Beschreibung der Methode sollte hier stehen. Seien Sie so umfassend wie möglich. Wenn viele Seiten dieselbe Beschreibung enthalten, sollten Sie erwägen, der Übersichtsseite der Klasse einen neuen Abschnitt hinzuzufügen und von hier aus darauf zu verlinken. Beispielsweise wird der Abschnitt [Array-Methoden und leere Slots](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots) von jeder Seite zu einer Array-Methode aus verlinkt.

Lesende sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den folgenden Beispielabschnitt lesen zu müssen. Falls Beispiele in diesem Abschnitt nötig sind, sollten sie knapp sein und müssen keinen Bezug zu einem realen Anwendungsfall haben.

## Beispiele

Beachten Sie, dass wir die Pluralform „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte kurz sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift. Das erste Beispiel kann „Verwendung von nameOfTheMethod()“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie im Markdown-Dokument die Backticks und den Backslash._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie im Markdown-Dokument die Backticks und den Backslash._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Methode beziehen. Weitere Hinweise finden Sie im Abschnitt [„Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Leitfadens zum Schreibstil_.

- [Polyfill für `Constructor.nameOfTheMethod` in `core-js`](https://core-js.io/docs/)
- [Polyfill für `Constructor.nameOfTheMethod` von es-shims](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
