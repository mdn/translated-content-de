---
title: "Dokumentation: parseHTML() statische Methode"
short-title: parseHTML()
slug: Web/API/Document/parseHTML_static
l10n:
  sourceCommit: 2033446e38e93f71eb28a0efd3f663a8e0e7aeb7
---

{{APIRef("DOM")}}

Die **`parseHTML()`** statische Methode des [`Document`](/de/docs/Web/API/Document)-Objekts bietet eine XSS-sichere Methode zum Parsen und Bereinigen eines HTML-Strings, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen.

## Syntax

```js-nolint
Document.parseHTML(input)
Document.parseHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der HTML definiert, das bereinigt und in den Shadow-Root injiziert werden soll.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:

    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente des Eingabe-Strings erlaubt oder entfernt werden, oder der String `"default"` für die Standardkonfiguration des Sanitisierers.
        Beachten Sie, dass im Allgemeinen ein `"Sanitizer` erwartet wird, effizienter zu sein als ein `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.
        Wird dieser Parameter nicht angegeben, wird die XSS-sichere Standardkonfiguration des Sanitisierers verwendet.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

### Ausnahmen

- `TypeError`

  - : Dies wird geworfen, wenn `options.sanitizer` übergeben wird:

    - eine nicht normierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "allowed" als auch "removed" Konfigurationseinstellungen enthält).
    - ein String, der nicht den Wert `"default"` hat.
    - ein Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder ein String ist.

## Beschreibung

Die **`parseHTML()`** Methode parst und bereinigt einen HTML-String, um eine neue [`Document`](/de/docs/Web/API/Document) Instanz zu erstellen, die XSS-sicher ist.
Das resultierende `Document` wird einen [Content-Type](/de/docs/Web/API/Document/contentType) von "text/html", einen [Zeichensatz](/de/docs/Web/API/Document/characterSet) von UTF-8 und eine URL von "about:blank" haben.

Wenn keine Sanitisierer-Konfiguration im Parameter `options.sanitizer` angegeben ist, wird `parseHTML()` mit der Standardkonfiguration des [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet.
Diese Konfiguration erlaubt alle Elemente und Attribute, die als XSS-sicher betrachtet werden, und erlaubt keine Entitäten, die als unsicher gelten.
Ein benutzerdefinierter Sanitisierer oder eine Sanitisierer-Konfiguration kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass selbst wenn unsichere Optionen durch die Konfiguration des Sanitisierers erlaubt sind, sie immer noch entfernt werden, wenn diese Methode verwendet wird (die implizit [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufruft).

Der Eingabe-HTML-String kann [deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten.
Wenn der HTML-String mehr als eine [deklarative Shadow Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur der erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — alle weiteren Deklarationen werden als {{htmlelement("template")}}-Elemente innerhalb dieses Shadow Roots geparst.

`parseHTML()` sollte anstelle von [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) verwendet werden, es sei denn, es gibt einen spezifischen Bedarf, unsichere Elemente und Attribute zuzulassen.
Wenn das zu parsende HTML keine unsicheren HTML-Entitäten enthalten muss, sollten Sie `Document.parseHTML()` verwenden.

Da diese Methode immer unsichere Entitäten in den Eingabestrings bereinigt, wird sie nicht über das [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString) zum Parsen von HTML- oder XML-Inhalten in einen DOM-Baum
- [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API)
