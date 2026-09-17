---
title: JavaScript-Konstruktor-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_constructor_page_template
l10n:
  sourceCommit: 865686a652cb8dc4e9522e23399896e6373bfc19
---

> [!NOTE]
> _Entfernen Sie diese gesamte erklärende Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Frontmatter der Seite:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren. Die Werte sollten für den jeweiligen Konstruktor entsprechend aktualisiert werden.
>
> ```md
> ---
> title: Constructor() constructor
> short-title: Constructor()
> slug: Web/JavaScript/Reference/Global_Objects/Constructor/Constructor
> page-type: javascript-constructor
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.builtins.Constructor.Constructor
> sidebar: jsref
> ---
> ```
>
> - **title**
>   - : Überschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als `Constructor() constructor`. Beispielsweise hat der Konstruktor [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) den _title_ `Array() constructor`.
> - **short-title**
>   - : Ein kurzer Titel, der in Breadcrumbs und Sidebars verwendet wird. Formatieren Sie ihn als `Constructor()`. Beispielsweise hat der Konstruktor [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) den _short-title_ `Array()`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies sollte wie `Web/JavaScript/Reference/Global_Objects/Constructor/Constructor` formatiert sein.
> - **page-type**
>   - : Der Schlüssel `page-type` für JavaScript-Konstruktoren ist `javascript-constructor`.
> - **status**
>   - : Kennzeichnungen, die den Status dieser Funktion beschreiben. Ein Array, das eines oder mehrere der folgenden Elemente enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell festgelegt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe [„Wie Funktionsstatus hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor.Constructor` durch die Abfragezeichenfolge für den Konstruktor im [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation auszufüllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den Konstruktor in unserem [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen und der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Dies ist `jsref` für JavaScript-Konstruktorseiten.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsabschnitts (unmittelbar unter dem Frontmatter der Seite) erscheinen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht notwendig, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein Banner **Diese Technologie ist experimentell**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einer Pref verborgen ist, sollten Sie außerdem einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dies erzeugt ein Banner **Nicht standardisiert**, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Geben Sie Status-Header-Makros nicht manuell an. Lesen Sie den Abschnitt [Wie Funktionsstatus hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der Banner **Experimentell** und **Nicht standardisiert** werden direkt nach diesem Anmerkungsblock angezeigt.
>
> _Denken Sie daran, diese gesamte erklärende Anmerkung vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an das wichtigste Prinzip zum Schreiben konsistenter JavaScript-Referenzseiten: **schauen Sie sich um**! Viele verwandte Seiten haben über die Anforderungen dieser Vorlage hinaus konsistente Strukturen. Beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Suchen Sie zunächst nach vorhandener Dokumentation für ähnliche APIs und kopieren Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Der Konstruktor **`Constructor()`** erstellt \\{{jsxref("Constructor")}}-Objekte. (Genau dieser eine Satz, nicht mehr und nicht weniger)

Schreiben Sie ein [interaktives Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples), das wichtige Aspekte des Konstruktors demonstriert.

{{InteractiveExample("JavaScript Demo: Constructor() constructor")}}

```js interactive-example
const obj = new Constructor();
console.log(obj.something);
// Expected output: 42
```

## Syntax

Füllen Sie ein Syntaxfeld gemäß den Richtlinien in unserem Artikel zu [Syntaxabschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) aus.

```js-nolint
new Constructor(parameter1)
new Constructor(parameter1, parameter2)
```

Fügen Sie für Konstruktoren außerdem die folgende Anmerkung ein:

> [!NOTE]
> `Constructor()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

(Einige ältere Konstruktoren haben eine andere Anmerkung, aber die Liste davon wird nicht wachsen, daher nehmen wir sie nicht in die Vorlage auf.)

### Parameter

- `parameter1`
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion ein. Fügen Sie für jeden Parameter einen Begriff und eine Definition hinzu. Wenn der Parameter nicht optional ist, entfernen Sie den Makroaufruf \\{{optional_inline}}.
- `parameter2` {{optional_inline}}
  - : usw.

> [!NOTE]
> Dieser Abschnitt ist obligatorisch. Wenn es keine Parameter gibt, schreiben Sie statt der Definitionsliste „Keine.“.

### Rückgabewert

Ein neues `Constructor`-Objekt, das ... repräsentiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Bedingung 1.
    - Bedingung 2.
    - usw.
- {{jsxref("RangeError")}}
  - : Auslösen, wenn ...

Seien Sie so umfassend wie möglich. Listen Sie im Allgemeinen keine Ausnahmen auf, die durch das Ausführen von Benutzercode ausgelöst werden können, beispielsweise durch das Ausführen von Gettern oder durch Typkonvertierung. Listen Sie keine Ausnahmen aufgrund eines Typkonflikts auf, beispielsweise wenn ein Symbol an einen Parameter übergeben wird, der einen String erwartet, oder wenn eine Nicht-Funktion als Callback übergeben wird.

## Beschreibung

Der Großteil der Beschreibung des Konstruktors sollte hier stehen. Seien Sie so umfassend wie möglich. Wenn viele Seiten dieselbe Beschreibung teilen, sollten Sie erwägen, einen neuen Abschnitt auf der Landingpage der Klasse hinzuzufügen und von hier darauf zu verlinken. Beispielsweise ist [Array-Methoden und leere Slots](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots) von jeder Array-Methodenseite aus verlinkt.

Leser sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den folgenden Beispielabschnitt lesen zu müssen. Beispiele in diesem Abschnitt sollten, falls erforderlich, kurz sein und müssen keinen Bezug zur realen Welt haben.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte kurz sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwenden des `Constructor()`-Konstruktors“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit dem aktuellen Konstruktor zusammenhängen. Weitere Richtlinien finden Sie im [Abschnitt „Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- (Beachten Sie, dass Konstruktoren im Allgemeinen keine separaten Polyfill-Links benötigen, da sie auf der Hauptklassenseite dokumentiert sind.)
- link1
- link2
- external_link (year)
