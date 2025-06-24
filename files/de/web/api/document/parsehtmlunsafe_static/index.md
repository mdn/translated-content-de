---
title: "Dokument: parseHTMLUnsafe() statische Methode"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Die **`parseHTMLUnsafe()`** statische Methode des [`Document`](/de/docs/Web/API/Document)-Objekts wird verwendet, um eine HTML-Eingabe zu analysieren. Dabei können unerwünschte HTML-Elemente und Attribute gefiltert werden, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen.

Im Gegensatz zu [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) wird bei XSS-unsicheren HTML-Entitäten nicht garantiert, dass sie entfernt werden.

## Syntax

```js-nolint
Document.parseHTMLUnsafe(input)
Document.parseHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine Zeichenkette oder eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz, die das zu analysierende HTML definiert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden.
        Beachten Sie, dass im Allgemeinen ein `"Sanitizer` als effizienter erwartet wird als ein `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.
        Wenn nicht angegeben, wird kein Sanitizer verwendet.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

### Ausnahmen

- `TypeError`
  - : Diese Ausnahme wird ausgelöst, wenn:
    - `html` eine Zeichenkette übergeben wird, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen wird](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` einen Wert übergeben wird, der nicht ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder eine Zeichenkette ist.
      - eine nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält).
      - eine Zeichenkette, die nicht den Wert `"default"` hat.

## Beschreibung

Die **`parseHTMLUnsafe()`** statische Methode kann verwendet werden, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen und dabei optional unerwünschte Elemente und Attribute herauszufiltern.
Das resultierende `Document` wird einen [Inhaltstyp](/de/docs/Web/API/Document/contentType) von "text/html", einen [Zeichensatz](/de/docs/Web/API/Document/characterSet) von UTF-8 und eine URL von "about:blank" haben.

Der Suffix "Unsafe" im Methodennamen weist darauf hin, dass zwar die Eingabezeichenkette von unerwünschten HTML-Entitäten gefiltert werden kann, aber keine Durchsetzung der Bereinigung oder Entfernung potenziell unsicherer XSS-relevanter Eingaben erfolgt.
Wenn keine Sanitisierungskonfiguration im Parameter `options.sanitizer` angegeben ist, wird `parseHTMLUnsafe()` ohne jegliche Sanitisierung verwendet.
Beachten Sie, dass {{htmlelement("script")}}-Elemente während der Analyse nicht ausgewertet werden.

Das eingegebene HTML kann [deklarative Schatten-Wurzeln](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten.
Wenn die HTML-Zeichenkette mehr als eine [deklarative Schatten-Wurzel](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Schattenhost definiert, wird nur das erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als {{htmlelement("template")}}-Elemente innerhalb dieser Schatten-Wurzel analysiert.

`parseHTMLUnsafe()` sollte anstelle von [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) verwendet werden, wenn potenziell unsichere HTML-Zeichenfolgen analysiert werden müssen, die aus irgendeinem Grund XSS-unsichere Elemente oder Attribute enthalten müssen.
Wenn das zu analysierende HTML keine unsicheren HTML-Entitäten enthalten muss, sollten Sie `Document.parseHTML()` verwenden.

Beachten Sie, dass, da diese Methode nicht zwingend Eingabezeichenfolgen von XSS-unsicheren Entitäten bereinigt, Eingabezeichenfolgen auch mit der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) validiert werden sollten.
Wenn die Methode sowohl mit vertrauenswürdigen Typen als auch mit einem Sanitizer verwendet wird, wird die HTML-Eingabe durch die vertrauenswürdige Typ-Transformationsfunktion geleitet, bevor sie bereinigt wird.

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
