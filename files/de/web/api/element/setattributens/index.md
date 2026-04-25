---
title: "Element: setAttributeNS() Methode"
short-title: setAttributeNS()
slug: Web/API/Element/setAttributeNS
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{ APIRef("DOM") }}

> [!WARNING]
> Diese Methode kann Attributwerte annehmen, die je nach Attribut als HTML, Skript oder als Skript-URL geparst werden.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und bieten potenziell eine Angriffsfläche für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, wenn der Wert ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer das entsprechende vertrauenswürdige Typobjekt ([`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)) anstelle von Strings für diese Attribute verwenden, die sie erfordern, und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](/de/docs/Web/API/Element/setAttribute#security_considerations) in [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) für weitere Informationen.

Die **`setAttributeNS()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle fügt ein neues Attribut hinzu oder ändert den Wert eines Attributs mit dem angegebenen Namensraum und Namen.

Wenn Sie mit HTML-Dokumenten arbeiten und das angeforderte Attribut nicht als Teil eines spezifischen Namensraums angeben müssen, verwenden Sie stattdessen die [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) Methode.

## Syntax

```js-nolint
setAttributeNS(namespaceURI, qualifiedName, value)
```

### Parameter

- `namespaceURI`
  - : Ein String, der den Namensraum des zu setzenden Attributs angibt, oder der leere String.

- `qualifiedName`
  - : Ein String, der das Attribut durch seinen qualifizierten Namen identifiziert, der das Format `prefix:localName` oder `localName` hat, wobei die Teile wie folgt definiert sind:
    - `prefix`
      - : Ein "kurzes Alias" für den Namensraum.
        Das Präfix ist optional, aber wenn es angegeben ist, muss auch der `namespaceURI` Parameter angegeben werden.
        Wenn das Präfix auf `xml` oder `xmlns` gesetzt wird, muss der `namespaceURI` entsprechend auf `http://www.w3.org/XML/1998/namespace` oder `http://www.w3.org/2000/xmlns/` gesetzt werden.

    - `localName`
      - : Der lokale Name des Attributs.

- `value`
  - : Ein vertrauenswürdiger Typ oder String, der den zuzuweisenden Wert für das Attribut enthält.

    Für die folgenden Attribute müssen vertrauenswürdige Typinstanzen übergeben werden, wenn vertrauenswürdige Typen durchgesetzt werden:
    - Ereignishandler-Attributinhalte wie `onclick` und `onload` erfordern ein [`TrustedScript`](/de/docs/Web/API/TrustedScript).
    - [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc) erfordert eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz.
    - [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Instanz.
    - [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Instanz.

    Vertrauenswürdige Typen werden für andere Attribute nicht durchgesetzt, sodass ein String oder ein beliebiger vertrauenswürdiger Typ übergeben werden kann.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NamespaceError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`namespaceURI`](#namespaceuri) ist:
    - kein gültiger Namensraum-URI.
    - auf den leeren String gesetzt, wenn `prefix` einen Wert hat.
    - nicht der Wert `http://www.w3.org/XML/1998/namespace` oder `http://www.w3.org/2000/xmlns/` ist, wenn [`prefix`](#prefix) auf `xml` oder `xmlns` gesetzt ist.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder das [`prefix`](#prefix) oder [`localName`](#localname) nicht gültig ist:
    - Das `prefix` muss mindestens ein Zeichen enthalten und darf keine ASCII-Leerzeichen, `NULL`, `/` oder `>` (U+0000, U+002F oder U+003E) enthalten.
    - Das `localName` muss mindestens ein Zeichen enthalten und darf keine ASCII-Leerzeichen, `NULL`, `/`, `=` oder `>` (U+0000, U+002F, U+003D oder U+003E) enthalten.

    > [!NOTE]
    > Frühere Versionen der Spezifikation waren restriktiver und erforderten, dass das `qualifiedName` ein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist.

- `TypeError`
  - : Wird ausgelöst, wenn [`value`](#value) ein String anstelle eines vertrauenswürdigen Typobjekts übergeben wird (für diejenigen Attribute, die diese erfordern), wenn [Vertrauenswürdige Typen](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beispiele

### Grundlegende Nutzung

```js
let d = document.getElementById("d1");
d.setAttributeNS(
  "http://www.mozilla.org/ns/specialspace",
  "spec:align",
  "center",
);
```

### Vertrauenswürdige Typen

Das Beispiel [Unsafe Attribute Setting](/de/docs/Web/API/Element/setAttribute#setting_unsafe_attributes) in `setAttribute()` zeigt, wie Sie `setAttributeNS()` mit den [trusted types](/de/docs/Web/API/Trusted_Types_API) verwenden könnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
