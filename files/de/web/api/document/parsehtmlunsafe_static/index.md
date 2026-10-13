---
title: "Dokument: Statische Methode parseHTMLUnsafe()"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode parst ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können ein Angriffsvektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko verringern, indem Sie stets `TrustedHTML`-Objekte statt Zeichenfolgen übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

> [!NOTE]
> In Browsern, die [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) unterstützen, sollten Sie fast immer diese Methode stattdessen verwenden, da sie XSS-unsichere HTML-Entitäten immer entfernt.

Die statische Methode **`parseHTMLUnsafe()`** des [`Document`](/de/docs/Web/API/Document)-Objekts parst eine HTML-Eingabe und filtert dabei optional unerwünschte HTML-Elemente und Attribute, um eine neue [`Document`](/de/docs/Web/API/Document)-Instanz zu erstellen.

## Syntax

```js-nolint
Document.parseHTMLUnsafe(input)
Document.parseHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz oder eine Zeichenfolge, die das zu parsende HTML enthält.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das festlegt, welche Elemente der Eingabe zugelassen oder entfernt werden.
        Dies kann auch die Zeichenfolge `"default"` sein. Damit wird ein `Sanitizer` mit der (XSS-sicheren) [Standardkonfiguration für den Sanitizer](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) angewendet.
        Wird dieser Parameter nicht angegeben, wird kein Sanitizer verwendet.

        Wenn Sie dieselbe Konfiguration mehrfach verwenden, ist es voraussichtlich effizienter, einen `Sanitizer` zu verwenden und ihn bei Bedarf anzupassen.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - für `html` eine Zeichenfolge übergeben wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    - für `options.sanitizer` Folgendes übergeben wird:
      - eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
        Beispielsweise eine Konfiguration, die sowohl Einstellungen für zugelassene als auch für entfernte Elemente enthält.
      - eine Zeichenfolge mit einem anderen Wert als `"default"`.
      - ein Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- noch ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt oder eine Zeichenfolge ist.

## Beschreibung

Mit der statischen Methode **`parseHTMLUnsafe()`** können Sie eine neue [`Document`](/de/docs/Web/API/Document)-Instanz erstellen und dabei optional unerwünschte Elemente und Attribute herausfiltern.
Das resultierende `Document` hat den [Inhaltstyp](/de/docs/Web/API/Document/contentType) „text/html“, den [Zeichensatz](/de/docs/Web/API/Document/characterSet) UTF-8 und die URL „about:blank“.

Das eingegebene HTML kann [deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten.
Definiert die HTML-Zeichenfolge mehr als einen [deklarativen Shadow Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) für einen bestimmten Shadow Host, wird nur der erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt. Weitere Deklarationen werden als {{htmlelement("template")}}-Elemente innerhalb dieses Shadow Roots geparst.

`parseHTMLUnsafe()` führt standardmäßig keine Bereinigung durch.
Wird kein Sanitizer als Parameter übergeben, werden alle HTML-Entitäten aus der Eingabe eingefügt.

### Sicherheitsaspekte

Das Suffix „Unsafe“ im Methodennamen weist darauf hin, dass die Methode – anders als [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) – nicht sicherstellt, dass alle XSS-unsicheren HTML-Entitäten entfernt werden.
Mit einem geeigneten Sanitizer ist dies zwar möglich, die Methode muss aber keinen wirksamen Sanitizer verwenden – und auch überhaupt keinen!
Sie ist daher ein möglicher Angriffsvektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS), wenn potenziell unsichere, von Benutzern bereitgestellte Zeichenfolgen ohne vorherige Bereinigung in das DOM eingefügt werden.

Sie sollten dieses Risiko verringern, indem Sie stets [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte statt Zeichenfolgen übergeben und [Trusted Types mithilfe der CSP-Direktive](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) erzwingen.
Dadurch wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft, die sie vor dem Einfügen [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization) und potenziell gefährliches Markup wie {{htmlelement("script")}}-Elemente und Event-Handler-Attribute entfernen kann.

Durch die Verwendung von `TrustedHTML` können Sie den Bereinigungscode an wenigen Stellen prüfen und seine Wirksamkeit kontrollieren, statt dies für alle Injection Sinks einzeln tun zu müssen.
Wenn Sie `TrustedHTML` verwenden, sollten Sie der Methode keinen Sanitizer übergeben müssen.

Falls Sie `TrustedHTML` aus irgendeinem Grund nicht verwenden können (oder, noch besser, `setHTML()`), ist die nächstsicherste Option `setHTMLUnsafe()` mit der XSS-sicheren [Standardkonfiguration für den Sanitizer](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).

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
