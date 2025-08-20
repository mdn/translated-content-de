---
title: "Dokument: parseHTMLUnsafe() statische Methode"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode parst ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese sind bekannt als [Injektions-Senken](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und stellen potenziell eine Angriffsmöglichkeit für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) dar, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte statt Strings übergeben und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

> [!NOTE]
> [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) sollte fast immer anstelle dieser Methode verwendet werden – in Browsern, die es unterstützen – da es immer XSS-unsichere HTML-Entitäten entfernt.

Die **`parseHTMLUnsafe()`** statische Methode des [`Document`](/de/docs/Web/API/Document)-Objekts wird verwendet, um HTML-Eingaben zu parsen und dabei optional unerwünschte HTML-Elemente und Attribute zu filtern, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen.

## Syntax

```js-nolint
Document.parseHTMLUnsafe(input)
Document.parseHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine Instanz von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder ein String, der das zu parsende HTML definiert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden.
        Dies kann auch ein String mit dem Wert `"default"` sein, welcher einen `Sanitizer` mit der Standardkonfiguration (XSS-sicher) anwendet.
        Wenn nicht angegeben, wird kein Sanitizer verwendet.

        Beachten Sie, dass im Allgemeinen ein `Sanitizer` effizienter erwartet wird als eine `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn:
    - `html` ein String übergeben wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` eine:
      - Wert erhält, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.
      - nicht normalisiertes [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine Konfiguration, die sowohl „allowed“- als auch „removed“-Einstellungen enthält).
      - String ist, der nicht den Wert `"default"` hat.

## Beschreibung

Die **`parseHTMLUnsafe()`** statische Methode kann verwendet werden, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen und dabei optional unerwünschte Elemente und Attribute zu filtern.
Das resultierende `Document` hat einen [content type](/de/docs/Web/API/Document/contentType) von "text/html", einen [character set](/de/docs/Web/API/Document/characterSet) von UTF-8 und eine URL von "about:blank".

Die Eingabe-HTML kann [declarative shadow roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten.
Wenn der HTML-String mehr als eine [declarative shadow root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur der erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als {{htmlelement("template")}}-Elemente innerhalb dieses Shadow-Roots geparst.

`parseHTMLUnsafe()` führt standardmäßig keine Säuberung durch.
Wenn kein Sanitizer als Parameter übergeben wird, werden alle HTML-Entitäten in der Eingabe injiziert.

### Sicherheitsüberlegungen

Das Suffix "Unsafe" im Methodennamen zeigt an, dass es nicht die Entfernung aller XSS-unsicheren HTML-Entitäten durchsetzt (im Gegensatz zu [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)).
Während es dies tun kann, wenn es mit einem geeigneten Sanitizer verwendet wird, muss es keinen effektiven Sanitizer verwenden oder überhaupt einen Sanitizer.
Die Methode ist daher eine mögliche Angriffsmöglichkeit für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS), bei der potenziell unsichere, von einem Benutzer bereitgestellte Strings in das DOM injiziert werden, ohne vorher gesäubert zu werden.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Strings übergeben und [durch das Erzwingen von Trusted Types](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive arbeiten.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit bietet, die Eingabe zu [säubern](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup (wie {{htmlelement("script")}}-Elemente und Ereignishandler-Attribute) zu entfernen, bevor es injiziert wird.

Die Verwendung von `TrustedHTML` ermöglicht es, den Säuberungscode an nur wenigen Stellen zu überprüfen und sicherzustellen, dass er wirksam ist, anstatt über alle Ihre Injektionssenken verstreut zu sein.
Sie sollten keinen Sanitizer an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Wenn Sie aus irgendeinem Grund `TrustedHTML` (oder noch besser, `setHTML()`) nicht verwenden können, dann ist die nächstsicherste Option die Verwendung von `setHTMLUnsafe()` mit dem XSS-sicheren Standard [`Sanitizer`](/de/docs/Web/API/Sanitizer).

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
