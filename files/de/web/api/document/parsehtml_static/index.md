---
title: "Dokument: parseHTML() statische Methode"
short-title: parseHTML()
slug: Web/API/Document/parseHTML_static
l10n:
  sourceCommit: cda9415220ba812ba2ee24e0af1c8e8001ab9924
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die **`parseHTML()`**-statische Methode des [`Document`](/de/docs/Web/API/Document)-Objekts bietet eine XSS-sichere Methode zum Parsen und Sanitisieren eines HTML-Strings, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen.

## Syntax

```js-nolint
Document.parseHTML(input)
Document.parseHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der HTML definiert, das sanisiert und in den Shadow-Root eingefügt werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente des Eingabe-Strings erlaubt oder entfernt werden, oder der String `"default"` für die [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).
        Die Methode entfernt alle XSS-unsicheren Elemente und Attribute, selbst wenn sie vom Sanitizer erlaubt sind.
        Wenn nicht angegeben, wird die Standard-`Sanitizer`-Konfiguration verwendet.

        Beachten Sie, dass es effizienter sein kann, bei mehrfacher Verwendung derselben Konfiguration einen `Sanitizer` zu verwenden und diesen bei Bedarf zu modifizieren.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn `options.sanitizer` einen Wert erhält:
    - [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
      Zum Beispiel eine Konfiguration, die sowohl "allowed" als auch "removed" Einstellungsparameter umfasst.
    - Ein String, der nicht den Wert `"default"` hat.
    - Ein Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.

## Beschreibung

Die **`parseHTML()`**-Methode parst und sanitized einen HTML-String, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen, die XSS-sicher ist.
Das resultierende `Document` hat einen [Content-Type](/de/docs/Web/API/Document/contentType) von "text/html", einen [Zeichensatz](/de/docs/Web/API/Document/characterSet) von UTF-8 und eine URL von "about:blank".

Wenn im Parameter `options.sanitizer` kein Sanitizer angegeben ist, wird `parseHTML()` mit der [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) verwendet.
Diese Konfiguration ist für die meisten Anwendungsfälle geeignet, da sie XSS-Angriffe sowie andere Angriffe wie Clickjacking oder Spoofing verhindert.

Ein benutzerdefinierter `Sanitizer` oder `SanitizerConfig` kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass selbst wenn unsichere Optionen vom Sanitizer erlaubt sind, sie bei Verwendung dieser Methode weiterhin entfernt werden (sie entfernt dieselben Elemente wie ein Sanitizer, auf dem [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufgerufen wurde).

Das Eingabe-HTML kann [declarative shadow roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten.
Wenn der HTML-String mehr als einen [declarative shadow root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur das erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als {{htmlelement("template")}}-Elemente innerhalb dieses Shadow-Roots geparst.

`parseHTML()` sollte anstelle von [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) verwendet werden, es sei denn, es besteht ein spezifisches Bedürfnis, unsichere Elemente und Attribute zuzulassen.
Wenn das zu parsende HTML keine unsicheren HTML-Entitäten enthalten muss, sollten Sie `Document.parseHTML()` verwenden.

Beachten Sie, dass diese Methode immer Eingabestrings von XSS-unsicheren Entitäten sanisiert und nicht durch die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert wird.

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
