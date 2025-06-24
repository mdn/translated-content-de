---
title: "Dokument: parseHTML() statische Methode"
short-title: parseHTML()
slug: Web/API/Document/parseHTML_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Die **`parseHTML()`** statische Methode des [`Document`](/de/docs/Web/API/Document)-Objekts bietet eine XSS-sichere Methode zum Parsen und Sanitisieren eines HTML-Strings, um eine neue Instanz von [`Document`](/de/docs/Web/API/Document) zu erstellen.

## Syntax

```js-nolint
Document.parseHTML(input)
Document.parseHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der HTML definiert, das sanitisiert und in den Shadow-Root injiziert werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente des Inputs erlaubt oder entfernt werden, oder der String `"default"` für die Standardkonfiguration des Sanitizers.
        Beachten Sie, dass im Allgemeinen davon ausgegangen wird, dass ein "Sanitizer" effizienter ist als eine `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.
        Wenn nicht spezifiziert, wird die XSS-sichere Standardkonfiguration des Sanitizers verwendet.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn `options.sanitizer` übergeben wird:
    - eine nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "allowed" als auch "removed" Konfigurationseinstellungen enthält).
    - ein String, der nicht den Wert `"default"` hat.
    - ein Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) noch ein String ist.

## Beschreibung

Die **`parseHTML()`** Methode parst und sanitisiert einen HTML-String, um eine neue, XSS-sichere Instanz von [`Document`](/de/docs/Web/API/Document) zu erstellen.
Das resultierende `Document` wird einen [content type](/de/docs/Web/API/Document/contentType) von "text/html", einen [character set](/de/docs/Web/API/Document/characterSet) von UTF-8 und eine URL von "about:blank" haben.

Wenn keine Sanitizer-Konfiguration im `options.sanitizer`-Parameter angegeben ist, wird `parseHTML()` mit der Standardkonfiguration des [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet.
Diese Konfiguration erlaubt alle Elemente und Attribute, die als XSS-sicher gelten und schließt somit Entitäten aus, die als unsicher gelten.
Ein benutzerdefinierter Sanitizer oder eine Sanitizer-Konfiguration kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Selbst wenn unsichere Optionen von der Sanitizer-Konfiguration erlaubt sind, werden sie bei der Verwendung dieser Methode dennoch entfernt (die implizit [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufruft).

Das Eingabe-HTML kann [declarative shadow roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten.
Wenn der HTML-String mehr als einen [declarative shadow root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als {{htmlelement("template")}} Elemente innerhalb dieses Shadow-Roots geparst.

`parseHTML()` sollte statt [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) verwendet werden, es sei denn, es gibt einen spezifischen Bedarf, unsichere Elemente und Attribute zuzulassen.
Wenn das zu parsende HTML keine unsicheren HTML-Entitäten enthalten muss, sollten Sie `Document.parseHTML()` verwenden.

Da diese Methode immer Eingabe-Strings von XSS-unsicheren Entitäten sanitisiert, ist sie nicht gesichert oder verifiziert mit der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API).

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
