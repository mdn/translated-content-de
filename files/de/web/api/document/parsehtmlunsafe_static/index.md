---
title: "Dokument: parseHTMLUnsafe() statische Methode"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in den DOM.
> Solche APIs sind bekannt als [Injektionsstellen](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und könnten ein Einfallstor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML` Objekte statt Zeichenfolgen übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

> [!NOTE]
> [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) sollte fast immer statt dieser Methode verwendet werden — in Browsern, die sie unterstützen — da sie stets XSS-unsichere HTML-Entitäten entfernt.

Die **`parseHTMLUnsafe()`** statische Methode des [`Document`](/de/docs/Web/API/Document) Objekts wird verwendet, um HTML-Eingaben zu analysieren und dabei optional unerwünschte HTML-Elemente und Attribute zu filtern, um eine neue [`Document`](/de/docs/Web/API/Document) Instanz zu erstellen.

## Syntax

```js-nolint
Document.parseHTMLUnsafe(input)
Document.parseHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz oder ein Zeichenfolgen-Objekt, das das zu analysierende HTML definiert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das festlegt, welche Elemente der Eingabe erlaubt oder entfernt werden sollen.
        Dies kann auch eine Zeichenfolge mit dem Wert `"default"` sein, die einen `Sanitizer` mit der Standardkonfiguration (XSS-sicher) anwendet.
        Wenn nicht angegeben, wird kein Sanitizer verwendet.

        Beachten Sie, dass generell ein `Sanitizer` effizienter als eine `SanitizerConfig` sein soll, wenn die Konfiguration wiederverwendet werden soll.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

### Ausnahmen

- `TypeError`
  - : Diese wird ausgelöst, wenn:
    - `html` eine Zeichenfolge übergeben wird, wenn [vertrauenswürdige Typen](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` einen der folgenden Werte erhält:
      - Einen Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder Zeichenfolge ist.
      - Nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält).
      - Eine Zeichenfolge, die nicht den Wert `"default"` hat.

## Beschreibung

Die **`parseHTMLUnsafe()`** statische Methode kann verwendet werden, um eine neue [`Document`](/de/docs/Web/API/Document) Instanz zu erstellen und optional unerwünschte Elemente und Attribute herauszufiltern.
Das resultierende `Document` wird einen [Content-Typ](/de/docs/Web/API/Document/contentType) von "text/html", einen [Zeichensatz](/de/docs/Web/API/Document/characterSet) von UTF-8 und eine URL von "about:blank" haben.

Das Eingabe-HTML kann [deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten.
Wenn der HTML-String mehr als eine [deklarative Shadow Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als {{htmlelement("template")}} Elemente innerhalb dieses Shadow Roots geparst.

`parseHTMLUnsafe()` führt standardmäßig keine Sanitizierung durch.
Wenn kein Sanitizer als Parameter übergeben wird, werden alle HTML-Entitäten in der Eingabe eingespeist.

### Sicherheitsüberlegungen

Das Suffix "Unsafe" im Methodennamen zeigt an, dass es nicht alle XSS-unsicheren HTML-Entitäten entfernt (im Gegensatz zu [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)).
Obwohl dies mit einem geeigneten Sanitizer möglich ist, muss es keinen effektiven Sanitizer verwenden oder überhaupt einen verwenden!
Die Methode ist daher ein mögliches Einfallstor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, bei denen potenziell unsichere Zeichenfolgen, die von einem Benutzer bereitgestellt werden, in den DOM eingefügt werden, ohne vorher sanitisiert zu werden.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte statt Zeichenfolgen übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mithilfe der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion übergeben wird, die die Möglichkeit hat, die Eingabe zu [sanitisieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markups (wie {{htmlelement("script")}} Elemente und Ereignis-Handler-Attribute) zu entfernen, bevor sie injiziert wird.

Die Nutzung von `TrustedHTML` ermöglicht es, die Effizienz des Sanitizierungscodes in nur wenigen Stellen zu auditieren und zu überprüfen, anstatt verteilt über alle Ihre Injektionspunkte.
Sie sollten keinen Sanitizer an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Wenn Sie aus irgendeinem Grund kein `TrustedHTML` (oder noch besser, `setHTML()`) verwenden können, dann ist die nächste sichere Option die Verwendung von `setHTMLUnsafe()` mit dem XSS-sicheren Standard-`Sanitizer`.

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
