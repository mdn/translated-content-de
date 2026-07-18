---
title: "Dokument: parseHTML() statische Methode"
short-title: parseHTML()
slug: Web/API/Document/parseHTML_static
l10n:
  sourceCommit: 9cf3002bd29376c15d49df6fab2e6a264285abf6
---

{{APIRef("DOM")}}

Die **`parseHTML()`** statische Methode des [`Document`](/de/docs/Web/API/Document)-Objekts bietet eine XSS-sichere Methode zum Parsen und Säubern eines HTML-Strings, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen.

## Syntax

```js-nolint
Document.parseHTML(input)
Document.parseHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der das HTML definiert, das bereinigt und in die Shadow-Root eingefügt werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente des Inputs erlaubt oder entfernt werden, oder der String `"default"` für die [Standardsäuberungskonfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration). Die Methode entfernt alle XSS-unsicheren Elemente und Attribute, auch wenn diese vom `sanitizer` erlaubt sind. Wird keine Angabe gemacht, wird die Standardkonfiguration des `Sanitizer` verwendet.

        Beachten Sie, dass die Verwendung derselben Konfiguration mehrmals effizienter ist, wenn Sie einen `Sanitizer` verwenden und diesen bei Bedarf ändern.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn `options.sanitizer` übergeben wird:
    - [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist. Zum Beispiel eine Konfiguration, die sowohl "allowed" als auch "removed" Konfigurationseinstellungen enthält.
    - ein String, der nicht den Wert `"default"` hat.
    - ein Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.

## Beschreibung

Die **`parseHTML()`**-Methode parst und bereinigt einen HTML-String, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen, die XSS-sicher ist. Das resultierende `Document` wird einen [Inhaltstyp](/de/docs/Web/API/Document/contentType) von "text/html", einen [Zeichensatz](/de/docs/Web/API/Document/characterSet) von UTF-8 und eine URL von "about:blank" haben.

Wenn kein `sanitizer` im `options.sanitizer`-Parameter angegeben ist, wird `parseHTML()` mit der [Standardsäuberungskonfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) verwendet. Diese Konfiguration eignet sich für die meisten Anwendungsfälle, da sie XSS-Angriffe sowie andere Angriffe wie Clickjacking oder Spoofing verhindert.

Ein benutzerdefinierter `Sanitizer` oder `SanitizerConfig` kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden. Beachten Sie, dass selbst wenn unsichere Optionen vom `sanitizer` erlaubt sind, sie bei der Verwendung dieser Methode dennoch entfernt werden (sie entfernt die gleichen Elemente wie ein `Sanitizer`, auf dem [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufgerufen wurde).

Das Eingabe-HTML kann [deklarative Shadow-Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten. Wenn der HTML-String mehr als eine [deklarative Shadow-Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt - nachfolgende Deklarationen werden als {{htmlelement("template")}}-Elemente innerhalb dieser Shadow-Root geparst.

`parseHTML()` sollte anstelle von [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) verwendet werden, es sei denn, es besteht ein spezifischer Bedarf, unsichere Elemente und Attribute zuzulassen. Wenn das zu parende HTML keine unsicheren HTML-Entities enthalten muss, sollten Sie `Document.parseHTML()` verwenden.

Beachten Sie, dass, da diese Methode Eingabestrings von XSS-unsicheren Entitäten immer säubert, sie nicht unter Verwendung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert wird.

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
