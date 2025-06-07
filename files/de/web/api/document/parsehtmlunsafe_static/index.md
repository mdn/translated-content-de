---
title: "Dokument: parseHTMLUnsafe() statische Methode"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
l10n:
  sourceCommit: 2033446e38e93f71eb28a0efd3f663a8e0e7aeb7
---

{{APIRef("DOM")}}

Die **`parseHTMLUnsafe()`** statische Methode des [`Document`](/de/docs/Web/API/Document) Objekts wird verwendet, um eine HTML-Eingabe zu parsen. Dabei können unerwünschte HTML-Elemente und Attribute gefiltert werden, um eine neue [`Document`](/de/docs/Web/API/Document) Instanz zu erstellen.

Im Gegensatz zu [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) wird nicht garantiert, dass XSS-gefährliche HTML-Entitäten entfernt werden.

## Syntax

```js-nolint
Document.parseHTMLUnsafe(input)
Document.parseHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Ein String oder eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz, die das zu parsende HTML definiert.
- `options` {{optional_inline}}

  - : Ein Options-Objekt mit den folgenden optionalen Parametern:

    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden.
        Beachten Sie, dass im Allgemeinen ein `Sanitizer` effizienter ist als eine `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.
        Wenn nicht angegeben, wird kein Sanitizer verwendet.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

### Ausnahmen

- `TypeError`

  - : Diese Ausnahme wird ausgelöst, wenn:

    - `html` ein String übergeben wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` einen:
      - Wert erhält, der nicht ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.
      - nicht-normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) enthält (eine, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält).
      - String erhält, der nicht den Wert `"default"` hat.

## Beschreibung

Die **`parseHTMLUnsafe()`** statische Methode kann verwendet werden, um eine neue [`Document`](/de/docs/Web/API/Document) Instanz zu erstellen und dabei unerwünschte Elemente und Attribute optional herauszufiltern.
Das resultierende `Document` wird einen [content type](/de/docs/Web/API/Document/contentType) von "text/html", einen [character set](/de/docs/Web/API/Document/characterSet) von UTF-8 und eine URL von "about:blank" haben.

Das Suffix "Unsafe" im Methodennamen weist darauf hin, dass die Methode zwar die Eingabestrings von unerwünschten HTML-Entitäten filtern kann, jedoch nicht die Sanitierung oder Entfernung von potenziell unsicherem XSS-relevantem Input erzwingt.
Wenn keine Sanitizer-Konfiguration im `options.sanitizer` Parameter angegeben ist, wird `parseHTMLUnsafe()` ohne irgendwelche Sanitierung verwendet.
Beachten Sie, dass {{htmlelement("script")}} Elemente während des Parsens nicht ausgewertet werden.

Das eingabene HTML kann [deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten.
Wenn der HTML-String mehr als einen [deklarativen Shadow Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow Host definiert, wird nur der erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt - nachfolgende Deklarationen werden als {{htmlelement("template")}} Elemente innerhalb dieses Shadow Roots geparst.

`parseHTMLUnsafe()` sollte anstelle von [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) verwendet werden, wenn potenziell unsichere HTML-Strings geparst werden müssen, die aus irgendeinem Grund XSS-gefährliche Elemente oder Attribute enthalten müssen.
Wenn das zu parsende HTML keine unsicheren HTML-Entitäten enthalten muss, sollten Sie `Document.parseHTML()` verwenden.

Da diese Methode Eingabestrings nicht unbedingt von XSS-gefährlichen Entitäten reinigen muss, sollten Eingabestrings zusätzlich mit der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) validiert werden.
Wenn die Methode sowohl mit Trusted Types als auch mit einem Sanitizer verwendet wird, wird die HTML-Eingabe vor der Sanitierung durch die Trusted-Type-Transformationsfunktion geleitet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)
- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString) zum Parsen von HTML oder XML in einen DOM-Baum
- [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API)
