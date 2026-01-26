---
title: "Dokumentation: parseHTMLUnsafe() statische Methode"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
l10n:
  sourceCommit: 8b449a5846c1de417894acfe9b4471447181b57f
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind bekannt als [Injection Sink](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und sind potenziell ein Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Strings verwenden und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für mehr Informationen.

> [!NOTE]
> [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) sollte fast immer anstelle dieser Methode verwendet werden — auf unterstützten Browsern — da es immer XSS-unsichere HTML-Entitäten entfernt.

Die **`parseHTMLUnsafe()`** statische Methode des [`Document`](/de/docs/Web/API/Document)-Objekts wird verwendet, um HTML-Eingaben zu analysieren, dabei optional unerwünschte HTML-Elemente und -Attribute zu filtern, um eine neue [`Document`](/de/docs/Web/API/Document) Instanz zu erstellen.

## Syntax

```js-nolint
Document.parseHTMLUnsafe(input)
Document.parseHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder String-Instanz, die definiert, welches HTML analysiert werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden.
        Dies kann auch ein String mit dem Wert `"default"` sein, welcher einen `Sanitizer` mit der Standardkonfiguration (XSS-sicher) anwendet.
        Falls nicht angegeben, wird kein Sanitizer verwendet.

        Beachten Sie, dass im Allgemeinen ein `Sanitizer` effizienter sein dürfte als eine `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

### Ausnahmen

- `TypeError`
  - : Diese wird ausgelöst, wenn:
    - `html` ein String ist, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden, und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` einen:
      - [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) erhält, der nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
        Zum Beispiel eine Konfiguration, die sowohl "allowed" als auch "removed" Konfigurationseinstellungen enthält.
      - String, der nicht den Wert `"default"` hat.
      - Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.

## Beschreibung

Die **`parseHTMLUnsafe()`** statische Methode kann verwendet werden, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen und dabei optional unerwünschte Elemente und Attribute herauszufiltern.
Das resultierende `Document` wird einen [content type](/de/docs/Web/API/Document/contentType) von "text/html", einen [character set](/de/docs/Web/API/Document/characterSet) von UTF-8 und eine URL von "about:blank" haben.

Die eingehende HTML kann [deklarative Shadowroots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) beinhalten.
Wenn die HTML-Zeichenkette mehr als eine [deklarative Shadowroot](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow Host definiert, dann wird nur das erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als {{htmlelement("template")}}-Elemente innerhalb dieser Shadowroot analysiert.

`parseHTMLUnsafe()` führt standardmäßig keine Sanitärmaßnahmen durch.
Wenn kein `sanitizer` als Parameter übergeben wird, werden alle HTML-Entitäten in der Eingabe injiziert.

### Sicherheitsüberlegungen

Das Suffix "Unsafe" im Methodennamen zeigt an, dass es nicht alle XSS-unsicheren HTML-Entitäten entfernt (im Gegensatz zu [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)).
Obwohl es dies tun kann, wenn es mit einem geeigneten `sanitizer` verwendet wird, muss es keinen effektiven `sanitizer` verwenden — oder überhaupt keinen!
Die Methode ist daher ein möglicher Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, bei denen potenziell unsichere Strings, die von einem Benutzer bereitgestellt werden, in das DOM injiziert werden, ohne zuvor desinfiziert zu werden.

Sie sollten das Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Strings verwenden und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Gelegenheit hat, die Eingabe zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährlichen Markup (wie {{htmlelement("script")}}-Elemente und Ereignishandler-Attribute) zu entfernen, bevor sie injiziert wird.

Die Verwendung von `TrustedHTML` ermöglicht es, die Effektivität des Desinfizierungscodes an nur wenigen Stellen zu überprüfen und zu auditieren, anstatt verstreut über alle Ihre Injection-Sink.
Sie sollten keinen `sanitizer` an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Wenn Sie aus irgendeinem Grund `TrustedHTML` (oder sogar noch besser, `setHTML()`) nicht verwenden können, dann ist die nächst sicherste Option die Verwendung von `setHTMLUnsafe()` mit dem XSS-sicheren Standard-[`Sanitizer`](/de/docs/Web/API/Sanitizer).

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
