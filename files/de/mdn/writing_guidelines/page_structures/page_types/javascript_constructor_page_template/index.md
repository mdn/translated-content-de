---
title: JavaScript-Konstruktor-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_constructor_page_template
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
> Das Front Matter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren. Die Werte sollten für den jeweiligen Konstruktor entsprechend aktualisiert werden.
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
>   - : Ein kurzer Titel, der in Breadcrumbs und Seitenleisten verwendet wird. Formatieren Sie ihn als `Constructor()`. Beispielsweise hat der Konstruktor [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) den _short-title_ `Array()`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies sollte wie `Web/JavaScript/Reference/Global_Objects/Constructor/Constructor` formatiert sein.
> - **page-type**
>   - : Der Schlüssel `page-type` für JavaScript-Konstruktoren lautet `javascript-constructor`.
> - **status**
>   - : Kennzeichnungen, die den Status dieser Funktion beschreiben. Ein Array, das eine oder mehrere der folgenden Angaben enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand von Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe [„Wie Funktionsstatus hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor.Constructor` durch die Abfragezeichenfolge für den Konstruktor im [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation auszufüllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zunächst einen Eintrag für den Konstruktor in unserem [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen und dass der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für JavaScript-Konstruktorseiten lautet dies `jsref`.
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
> - `\{{SeeCompatTable}}` — dies erzeugt ein Banner **Diese Technologie ist experimentell**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einer Pref verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dies erzeugt ein Banner **Nicht standardmäßig**, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Fügen Sie Status-Header-Makros nicht manuell hinzu. Lesen Sie den Abschnitt [Wie Funktionsstatus hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der Banner **Experimentell** und **Nicht standardmäßig** werden direkt nach diesem Notizblock angezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Notiz vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an das wichtigste Prinzip für das Schreiben konsistenter JavaScript-Referenzseiten: **sehen Sie sich um**! Viele verwandte Seiten haben über die Anforderungen dieser Vorlage hinaus einheitliche Strukturen. Beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Suchen Sie zunächst nach vorhandener Dokumentation für ähnliche APIs und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Der Konstruktor **`Constructor()`** erstellt \\{{jsxref("Constructor")}}-Objekte. (Genau dieser eine Satz, nicht mehr und nicht weniger)

Schreiben Sie ein [interaktives Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples), das wichtige Aspekte des Konstruktors veranschaulicht.

{{InteractiveExample("JavaScript Demo: Constructor() constructor")}}

```js interactive-example
const obj = new Constructor();
console.log(obj.something);
// Expected output: 42
```

## Syntax

Füllen Sie ein Syntaxfeld gemäß den Hinweisen in unserem Artikel zu [Syntaxabschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) aus.

```js-nolint
new Constructor(parameter1)
new Constructor(parameter1, parameter2)
```

Fügen Sie für Konstruktoren außerdem die folgende Notiz ein:

> [!NOTE]
> `Constructor()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

(Einige Legacy-Konstruktoren haben eine andere Notiz, aber die Liste dieser Konstruktoren wird nicht größer, daher nehmen wir sie nicht in die Vorlage auf.)

### Parameter

- `parameter1`
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion ein. Fügen Sie für jeden Parameter einen Begriff und eine Definition ein. Wenn der Parameter nicht optional ist, entfernen Sie den Makroaufruf \\{{optional_inline}}.
- `parameter2` {{optional_inline}}
  - : usw.

> [!NOTE]
> Dieser Abschnitt ist obligatorisch. Wenn es keine Parameter gibt, schreiben Sie statt der Definitionsliste `None.`.

### Rückgabewert

Ein neues `Constructor`-Objekt, das ... darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Bedingung 1.
    - Bedingung 2.
    - usw.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn ...

Seien Sie so umfassend wie möglich. Listen Sie im Allgemeinen keine Ausnahmen auf, die beim Ausführen von Benutzercode auftreten können, beispielsweise beim Ausführen von Gettern oder bei der Typkonvertierung. Listen Sie keine Ausnahmen aufgrund von Typinkompatibilität auf, beispielsweise beim Übergeben eines Symbols an einen Parameter, der einen String erwartet, oder einer Nicht-Funktion als Callback.

## Beschreibung

Der Großteil der Beschreibung des Konstruktors sollte hier stehen. Seien Sie so umfassend wie möglich. Wenn viele Seiten dieselbe Beschreibung enthalten, erwägen Sie, einen neuen Abschnitt auf der Landingpage der Klasse hinzuzufügen und von hier darauf zu verlinken. Beispielsweise wird auf [Array-Methoden und leere Slots](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots) von jeder Seite zu Array-Methoden verlinkt.

Leserinnen und Leser sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den untenstehenden Beispielabschnitt lesen zu müssen. Beispiele, die in diesem Abschnitt notwendig sein sollten, sollten kurz sein und müssen keinen Bezug zur realen Welt haben.

## Beispiele

Beachten Sie, dass wir die Pluralform „Beispiele“ verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwenden des `Constructor()`-Konstruktors“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit dem aktuellen Konstruktor zusammenhängen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- (Beachten Sie, dass Konstruktoren im Allgemeinen keine separaten Polyfill-Links benötigen, weil sie auf der Hauptseite der Klasse dokumentiert sind.)
- link1
- link2
- external_link (Jahr)
