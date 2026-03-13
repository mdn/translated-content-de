---
title: "Dokument: parseHTMLUnsafe() statische Methode"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
l10n:
  sourceCommit: cda9415220ba812ba2ee24e0af1c8e8001ab9924
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und sind potenziell ein Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Strings verwenden und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

> [!NOTE]
> [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) sollte fast immer anstelle dieser Methode verwendet werden — auf Browsern, die es unterstützen — da es immer XSS-unsichere HTML-Entitäten entfernt.

Die **`parseHTMLUnsafe()`** statische Methode des [`Document`](/de/docs/Web/API/Document)-Objekts wird verwendet, um HTML-Eingaben zu analysieren, wobei optional unerwünschte HTML-Elemente und Attribute gefiltert werden, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen.

## Syntax

```js-nolint
Document.parseHTMLUnsafe(input)
Document.parseHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz oder ein String, der das zu parsende HTML definiert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden.
        Dies kann auch ein String mit dem Wert `"default"` sein, der einen `Sanitizer` mit der (XSS-sicheren) [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) anwendet.
        Wenn nicht angegeben, wird kein `sanitizer` verwendet.

        Beachten Sie, dass es effizienter sein kann, einen `Sanitizer` zu verwenden und ihn bei Bedarf zu ändern, wenn Sie dieselbe Konfiguration mehrfach verwenden.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn:
    - `html` ein String übergeben wird, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` übergeben wird:
      - Eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
        Zum Beispiel eine Konfiguration, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält.
      - Ein String, der nicht den Wert `"default"` hat.
      - Ein Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), noch ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder ein String ist.

## Beschreibung

Die **`parseHTMLUnsafe()`** statische Methode kann verwendet werden, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen und optional unerwünschte Elemente und Attribute herauszufiltern.
Das resultierende `Document` wird einen [Inhaltstyp](/de/docs/Web/API/Document/contentType) von "text/html", einen [Zeichensatz](/de/docs/Web/API/Document/characterSet) von UTF-8 und eine URL von "about:blank" haben.

Die Eingabe-HTML kann [deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten.
Wenn der HTML-String mehr als einen [deklarativen Shadow Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, dann wird nur der erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als {{htmlelement("template")}}-Elemente innerhalb dieses Shadow Roots geparst.

`parseHTMLUnsafe()` führt standardmäßig keine Bereinigung durch.
Wenn kein `sanitizer` als Parameter übergeben wird, werden alle HTML-Entitäten in der Eingabe eingefügt.

### Sicherheitsüberlegungen

Das Suffix "Unsafe" im Methodennamen zeigt an, dass es nicht erzwingt, dass alle XSS-unsicheren HTML-Entitäten entfernt werden (im Gegensatz zu [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)).
Während dies möglich ist, wenn mit einem geeigneten `sanitizer` verwendet, muss es keinen effektiven `sanitizer` verwenden oder überhaupt keinen!
Die Methode ist daher ein möglicher Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere Strings, die von einem Benutzer bereitgestellt werden, ohne vorherige Bereinigung in das DOM eingefügt werden.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Strings übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mithilfe der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup (wie {{htmlelement("script")}}-Elemente und Event-Handler-Attribute) zu entfernen, bevor es eingefügt wird.

Die Verwendung von `TrustedHTML` ermöglicht es, die Wirksamkeit der Bereinigungscode-Nutzung an nur wenigen Stellen zu überprüfen und zu kontrollieren, anstatt über alle Ihre Injection Sinks verstreut zu sein.
Sie sollten keinen Filter an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Wenn Sie aus irgendeinem Grund nicht `TrustedHTML` verwenden können (oder besser noch `setHTML()`), dann ist die nächst sicherste Option, `setHTMLUnsafe()` mit der XSS-sicheren [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) zu verwenden.

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
