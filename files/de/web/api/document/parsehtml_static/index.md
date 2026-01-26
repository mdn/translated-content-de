---
title: "Dokumentation: statische Methode parseHTML()"
short-title: parseHTML()
slug: Web/API/Document/parseHTML_static
l10n:
  sourceCommit: 8b449a5846c1de417894acfe9b4471447181b57f
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die statische Methode **`parseHTML()`** des [`Document`](/de/docs/Web/API/Document)-Objekts bietet eine XSS-sichere Methode, um einen HTML-String zu analysieren und zu bereinigen, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen.

## Syntax

```js-nolint
Document.parseHTML(input)
Document.parseHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der definiert, welcher HTML-Code bereinigt und in den Shadow-Root eingefügt wird.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente des Eingabe-Strings erlaubt oder entfernt werden, oder der String `"default"` für die Standard-Konfiguration des Sanitizers.
        Beachten Sie, dass ein `"Sanitizer` im Allgemeinen effizienter als eine `SanitizerConfig` sein sollte, wenn die Konfiguration wiederverwendet werden soll.
        Wenn nicht angegeben, wird die XSS-sichere Standardkonfiguration des Sanitizers verwendet.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn `options.sanitizer` übergeben wird mit:
    - Einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
      Zum Beispiel eine Konfiguration, die sowohl "allowed" als auch "removed" Konfigurationseinstellungen enthält.
    - Einem String ohne den Wert `"default"`.
    - Einem Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), noch ein String ist.

## Beschreibung

Die Methode **`parseHTML()`** analysiert und bereinigt einen HTML-String, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen, die XSS-sicher ist.
Das resultierende `Document` hat einen [Content-Type](/de/docs/Web/API/Document/contentType) von "text/html", ein [Zeichensatz](/de/docs/Web/API/Document/characterSet) von UTF-8 und eine URL von "about:blank".

Wenn keine Sanitizer-Konfiguration im Parameter `options.sanitizer` angegeben ist, wird `parseHTML()` mit der Standardkonfiguration des [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet.
Diese Konfiguration erlaubt alle Elemente und Attribute, die als XSS-sicher gelten, wodurch Entitäten ausgeschlossen werden, die als unsicher betrachtet werden.
Ein benutzerdefinierter Sanitizer oder eine Sanitizer-Konfiguration kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass selbst wenn unsichere Optionen durch die Sanitizer-Konfiguration erlaubt werden, sie dennoch entfernt werden, wenn diese Methode verwendet wird (die implizit [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufruft).

Der Eingabe-HTML-Code kann [deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten.
Wenn der HTML-String mehr als einen [deklarativen Shadow Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur der erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt – nachfolgende Deklarationen werden als {{htmlelement("template")}}-Elemente innerhalb dieses Shadow-Roots geparst.

`parseHTML()` sollte anstelle von [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) verwendet werden, es sei denn, es besteht ein spezifisches Bedürfnis, unsichere Elemente und Attribute zuzulassen.
Wenn der zu parierende HTML-Code keine unsicheren HTML-Entitäten enthalten muss, sollten Sie `Document.parseHTML()` verwenden.

Beachten Sie, dass diese Methode immer Eingabestrings von XSS-unsicheren Entitäten bereinigt, sie wird nicht durch die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert.

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
