---
title: JavaScript-Klassenseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_class_page_template
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
> Das Frontmatter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren. Die Werte sollten für die jeweilige Klasse entsprechend aktualisiert werden.
>
> ```md
> ---
> title: Constructor
> slug: Web/JavaScript/Reference/Global_Objects/Constructor
> page-type: javascript-class
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.builtins.Constructor
> sidebar: jsref
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als `Constructor`. Die Klasse [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) hat beispielsweise den _title_ `Array`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieser sollte wie `Web/JavaScript/Reference/Global_Objects/Constructor` formatiert sein.
> - **page-type**
>   - : Der Schlüssel `page-type` für JavaScript-Klassen ist `javascript-class`.
> - **status**
>   - : Kennzeichen, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden Elemente enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor` durch die Abfragezeichenfolge für die Klasse im [Browser-compat-data-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation auszufüllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Klasse in unserem [Browser-compat-data-Repository](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen und dass der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Dies ist `jsref` für JavaScript-Klassenseiten.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsabschnitts (unmittelbar unter dem Frontmatter der Seite) erscheinen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (sie müssen nicht hinzugefügt oder entfernt werden):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein Banner **Dies ist eine experimentelle Technologie**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einer Präferenz verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dies erzeugt ein Banner **Nicht standardisiert**, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Geben Sie keine Makros für Statusüberschriften manuell an. Informationen zum Hinzufügen dieser Status zur Seite finden Sie im Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Banner **Experimentell** und **Nicht standardisiert** werden direkt nach diesem Hinweisblock angezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an das wichtigste Prinzip beim Schreiben konsistenter JavaScript-Referenzseiten: **schauen Sie sich um**! Viele verwandte Seiten haben konsistente Strukturen, die über die Anforderungen dieser Vorlage hinausgehen. Beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Beginnen Sie damit, nach vorhandener Dokumentation für ähnliche APIs zu suchen, und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Das **`Constructor`**-Objekt repräsentiert etwas. Dies sollte idealerweise aus 1 oder 2 kurzen Sätzen bestehen. Schreiben Sie im Allgemeinen nicht mehr als einen einzelnen Absatz mit mehr als wenigen Sätzen: Wesentliche Details gehören in die Beschreibung.

(Falls zutreffend) `Constructor` ist eine Unterklasse von \\{{jsxref("BaseConstructor")}}.

Schreiben Sie ein [interaktives Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples), das wichtige Aspekte der Klasse veranschaulicht. Dies sollte selten vorkommen: Üblicherweise würden Sie interaktive Beispiele für den Konstruktor und jede einzelne Methode haben. Schreiben Sie nur dann ein interaktives Beispiel für die Klasse, wenn es die Klasse als Ganzes demonstriert, beispielsweise den gesamten CRUD-Workflow mit einem {{jsxref("Map")}}.

{{InteractiveExample("JavaScript Demo: Constructor")}}

```js interactive-example
const obj = new Constructor();
console.log(obj.something);
// Expected output: 42
```

## Beschreibung

Die Beschreibung einer Klasse sollte Folgendes enthalten:

- Hintergrundinformationen dazu, warum die API nützlich ist
- Kernkonzepte, auf die Unterseiten potenziell verlinken könnten
- Überblick über Möglichkeiten zur Interaktion mit dieser API
- Einschränkungen

Verwenden Sie gegebenenfalls H3-Überschriften.

## Konstruktor

- \\{{jsxref("Constructor/Constructor", "Constructor()")}}
  - : Erstellt ein neues `Constructor`-Objekt.

## Statische Eigenschaften

- \\{{jsxref("Constructor.nameOfTheProperty")}}
  - : Enthält etwas.

## Statische Methoden

- \\{{jsxref("Constructor.nameOfTheMethod()")}}
  - : Führt etwas aus.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Constructor.prototype` definiert und werden von allen `Constructor`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Constructor.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Constructor`-Instanzen ist der Anfangswert der Konstruktor \\{{jsxref("Constructor/Constructor", "Constructor")}}.
- \\{{jsxref("Constructor.prototype.nameOfTheProperty")}}
  - : Gibt etwas zurück.
- `Constructor.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`Symbol.toStringTag`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenkette `"Constructor"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

Diese Eigenschaften sind eigene Eigenschaften jeder `Constructor`-Instanz.

- \\{{jsxref("Constructor/nameOfTheProperty", "nameOfTheProperty")}}
  - : Enthält etwas.

## Instanzmethoden

- \\{{jsxref("Constructor.prototype.nameOfTheMethod()")}}
  - : Gibt etwas zurück.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte kurz sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwendung von Constructor“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Klasse beziehen. Weitere Richtlinien finden Sie im [Abschnitt „Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- [Polyfill von `Constructor` in `core-js`](https://github.com/zloirock/core-js#anchor)
- [es-shims-Polyfill von `Constructor`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
