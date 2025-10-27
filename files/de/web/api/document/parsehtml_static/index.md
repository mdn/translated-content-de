---
title: "Dokument: parseHTML() statische Methode"
short-title: parseHTML()
slug: Web/API/Document/parseHTML_static
l10n:
  sourceCommit: 061611f4e4244587ee63436a987e51c3215596d3
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die **`parseHTML()`** statische Methode des [`Document`](/de/docs/Web/API/Document)-Objekts bietet eine XSS-sichere Methode zum Parsen und Bereinigen eines HTML-Strings, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen.

## Syntax

```js-nolint
Document.parseHTML(input)
Document.parseHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der HTML definiert, das bereinigt und in den Shadow-Root eingefügt werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente des Inputs erlaubt oder entfernt werden, oder der String `"default"` für die Standard-Konfiguration des Sanitizers.
        Beachten Sie, dass im Allgemeinen ein `"Sanitizer"` effizienter als ein `SanitizerConfig` erwartet wird, wenn die Konfiguration wiederverwendet werden soll.
        Wird nichts angegeben, wird die XSS-sichere Standardkonfiguration des Sanitizers verwendet.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

### Ausnahmen

- `TypeError`
  - : Diese Ausnahme wird geworfen, wenn `options.sanitizer` eines der folgenden erhält:
    - eine nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "allowed" als auch "removed" Konfigurationseinstellungen enthält).
    - einen String, der nicht den Wert `"default"` hat.
    - einen Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), noch ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.

## Beschreibung

Die **`parseHTML()`**-Methode parst und bereinigt einen HTML-String, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen, die XSS-sicher ist.
Das resultierende `Document` wird einen [content type](/de/docs/Web/API/Document/contentType) von "text/html", einen [character set](/de/docs/Web/API/Document/characterSet) von UTF-8 und eine URL von "about:blank" haben.

Falls keine Konfiguration des Sanitizers im `options.sanitizer`-Parameter angegeben ist, wird `parseHTML()` mit der Standardkonfiguration des [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet.
Diese Konfiguration erlaubt alle Elemente und Attribute, die als XSS-sicher gelten, und verbietet somit Entitäten, die als unsicher gelten.
Ein benutzerdefinierter Sanitizer oder eine benutzerdefinierte Sanitizer-Konfiguration kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass selbst wenn unsichere Optionen durch die Sanitizer-Konfiguration erlaubt sind, sie dennoch entfernt werden, wenn diese Methode verwendet wird (was implizit den Aufruf von [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) beinhaltet).

Der eingegebene HTML-String kann [deklarative Shadow-Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten.
Wenn der HTML-String mehr als einen [deklarativen Shadow-Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur der erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als {{htmlelement("template")}}-Elemente innerhalb dieses Shadow-Roots geparst.

`parseHTML()` sollte statt [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) verwendet werden, es sei denn, es besteht ein spezifisches Bedürfnis, unsichere Elemente und Attribute zuzulassen.
Wenn das zu parsende HTML keine unsicheren HTML-Entitäten enthalten muss, sollte `Document.parseHTML()` verwendet werden.

Da diese Methode eingehende Strings von XSS-unsicheren Entitäten immer bereinigt, wird dies nicht durch die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString) zum Parsen von HTML oder XML in einen DOM-Baum
- [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API)
