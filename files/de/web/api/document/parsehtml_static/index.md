---
title: "Dokument: Statische Methode parseHTML()"
short-title: parseHTML()
slug: Web/API/Document/parseHTML_static
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("DOM")}}

Die statische Methode **`parseHTML()`** des [`Document`](/de/docs/Web/API/Document)-Objekts bietet eine XSS-sichere Möglichkeit, einen HTML-String zu parsen und zu bereinigen, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen.

## Syntax

```js-nolint
Document.parseHTML(input)
Document.parseHTML(input, options)
```

### Parameter

- `input`
  - : Ein String mit HTML, das bereinigt und in die Shadow Root eingefügt werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit dem folgenden optionalen Parameter:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das festlegt, welche Elemente der Eingabe zugelassen oder entfernt werden, oder der String `"default"` für die [Standardkonfiguration des Sanitizers](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).
        Die Methode entfernt alle Elemente und Attribute, die im Hinblick auf XSS unsicher sind, selbst wenn der Sanitizer sie zulässt.
        Wenn nichts angegeben wird, kommt die Standardkonfiguration von `Sanitizer` zum Einsatz.

        Wenn Sie dieselbe Konfiguration mehrfach verwenden, ist es voraussichtlich effizienter, einen `Sanitizer` zu verwenden und ihn bei Bedarf anzupassen.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn an `options.sanitizer` einer der folgenden Werte übergeben wird:
    - Eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
      Dies gilt beispielsweise für eine Konfiguration, die sowohl Einstellungen für zugelassene als auch für entfernte Elemente enthält.
    - Ein String, dessen Wert nicht `"default"` ist.
    - Ein Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) noch eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) noch ein String ist.

## Beschreibung

Die Methode **`parseHTML()`** parst und bereinigt einen HTML-String, um eine neue, XSS-sichere [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen.
Das resultierende `Document` hat den [Inhaltstyp](/de/docs/Web/API/Document/contentType) „text/html“, den [Zeichensatz](/de/docs/Web/API/Document/characterSet) UTF-8 und die URL „about:blank“.

Wenn im Parameter `options.sanitizer` kein Sanitizer angegeben ist, verwendet `parseHTML()` die [Standardkonfiguration des Sanitizers](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).
Diese Konfiguration eignet sich für die meisten Anwendungsfälle, da sie XSS-Angriffe sowie andere Angriffe wie Clickjacking oder Spoofing verhindert.

Sie können einen benutzerdefinierten `Sanitizer` oder eine benutzerdefinierte `SanitizerConfig` angeben, um festzulegen, welche Elemente, Attribute und Kommentare zugelassen oder entfernt werden.
Beachten Sie, dass diese Methode unsichere Elemente und Attribute auch dann entfernt, wenn der Sanitizer sie zulässt. Sie entfernt dieselben Elemente wie ein Sanitizer, für den [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufgerufen wurde.

Das Eingabe-HTML kann [deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten.
Wenn der HTML-String für einen bestimmten Shadow Host mehr als eine [deklarative Shadow Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) definiert, wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt. Nachfolgende Deklarationen werden als {{htmlelement("template")}}-Elemente innerhalb dieser Shadow Root geparst.

Verwenden Sie `parseHTML()` anstelle von [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static), sofern es keinen besonderen Grund gibt, unsichere Elemente und Attribute zuzulassen.
Wenn das zu parsende HTML keine unsicheren HTML-Elemente oder -Attribute enthalten muss, sollten Sie `Document.parseHTML()` verwenden.

Da diese Methode Eingabe-Strings immer von Elementen und Attributen bereinigt, die im Hinblick auf XSS unsicher sind, wird sie nicht durch die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) abgesichert oder validiert.

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
