---
title: "Dokumentation: `parseHTMLUnsafe()` statische Methode"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
l10n:
  sourceCommit: 21c690ab5437f9f0624ed2a709092734b7f5c0cf
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Strings übergeben und [trusted types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

> [!NOTE]
> [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) sollte fast immer anstelle dieser Methode verwendet werden — in unterstützenden Browsern — da es immer XSS-unsichere HTML-Entitäten entfernt.

Die **`parseHTMLUnsafe()`** statische Methode des [`Document`](/de/docs/Web/API/Document) Objekts wird verwendet, um HTML-Eingaben zu analysieren, unerwünschte HTML-Elemente und Attribute optional zu filtern, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen.

## Syntax

```js-nolint
Document.parseHTMLUnsafe(input)
Document.parseHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)- oder String-Instanz, die das zu analysierende HTML definiert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden.
        Dies kann auch ein String mit dem Wert `"default"` sein, der einen `Sanitizer` mit der standardmäßigen (XSS-sicheren) Konfiguration anwendet.
        Falls nicht angegeben, wird kein Sanitisierer verwendet.

        Beachten Sie, dass in der Regel erwartet wird, dass ein `Sanitizer` effizienter ist als ein `SanitizerConfig`, falls die Konfiguration wiederverwendet werden soll.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

### Ausnahmen

- `TypeError`
  - : Dieser wird ausgelöst, wenn:
    - `html` wird ein String übergeben, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` einen Wert übergeben wird, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.
    - nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält) übergeben wird.
    - ein String, der nicht den Wert `"default"` hat.

## Beschreibung

Die **`parseHTMLUnsafe()`** statische Methode kann verwendet werden, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen, unerwünschte Elemente und Attribute optional herauszufiltern.
Das resultierende `Document` wird einen [content type](/de/docs/Web/API/Document/contentType) von "text/html", einen [character set](/de/docs/Web/API/Document/characterSet) von UTF-8 und eine URL von "about:blank" haben.

Das Eingabe-HTML kann [deklarative Shadow-Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten.
Wenn der HTML-String mehr als eine [deklarative Shadow-Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur der erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als {{htmlelement("template")}}-Elemente innerhalb dieses Shadow-Roots geparst.

`parseHTMLUnsafe()` führt standardmäßig keine Sanitization durch.
Wird kein Sanitisierer als Parameter übergeben, werden alle HTML-Entitäten der Eingabe injiziert.

### Sicherheitsüberlegungen

Der Suffix "Unsafe" im Methodennamen deutet darauf hin, dass es keine Entfernung aller XSS-unsicheren HTML-Entitäten erzwingt (im Gegensatz zu [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)).
Während es dies tun kann, wenn es mit einem geeigneten Sanitisierer verwendet wird, muss es keinen effektiven Sanitisierer verwenden oder überhaupt keinen Sanitisierer!
Die Methode ist daher ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere Strings, die von einem Benutzer bereitgestellt werden, in das DOM injiziert werden, ohne vorher sanitisiert zu werden.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Strings übergeben und [trusted type durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion übergeben wird, die die Möglichkeit hat, die Eingabe zu [sanitieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markups (wie z. B. {{htmlelement("script")}}-Elemente und Ereignis-Handler-Attribute) zu entfernen, bevor sie injiziert werden.

Die Verwendung von `TrustedHTML` ermöglicht es, das Sanitisierungscode an nur wenigen Stellen zu überprüfen und sicherzustellen, dass er effektiv ist, anstatt über alle Ihre Injection-Sinks verstreut zu sein.
Sie sollten keinen Sanitisierer an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Wenn Sie aus irgendeinem Grund kein `TrustedHTML` (oder noch besser `setHTML()`) verwenden können, dann ist die nächst sicherere Option, `setHTMLUnsafe()` mit dem XSS-sicheren Standard-`Sanitizer` zu verwenden.

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
