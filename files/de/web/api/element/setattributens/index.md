---
title: "Element: Methode setAttributeNS()"
short-title: setAttributeNS()
slug: Web/API/Element/setAttributeNS
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{ APIRef("DOM") }}

> [!WARNING]
> Diese Methode kann Attributwerte entgegennehmen, die je nach Attribut als HTML, Skript oder Skript-URL interpretiert werden.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können einen Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen, wenn der Wert ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko verringern, indem Sie für Attribute, die dies erfordern, statt Zeichenfolgen stets ein Objekt des entsprechenden Trusted Type ([`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)) übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](/de/docs/Web/API/Element/setAttribute#security_considerations) zu [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute).

Die Methode **`setAttributeNS()`** des Interfaces [`Element`](/de/docs/Web/API/Element) fügt ein neues Attribut hinzu oder ändert den Wert eines Attributs mit dem angegebenen Namespace und Namen.

Wenn Sie mit HTML-Dokumenten arbeiten und nicht angeben müssen, dass das betreffende Attribut zu einem bestimmten Namespace gehört, verwenden Sie stattdessen die Methode [`setAttribute()`](/de/docs/Web/API/Element/setAttribute).

## Syntax

```js-nolint
setAttributeNS(namespaceURI, qualifiedName, value)
```

### Parameter

- `namespaceURI`
  - : Eine Zeichenfolge, die den Namespace des zu setzenden Attributs angibt, oder eine leere Zeichenfolge.

- `qualifiedName`
  - : Eine Zeichenfolge, die das Attribut anhand seines qualifizierten Namens identifiziert. Dieser hat das Format `prefix:localName` oder `localName`, wobei die Bestandteile wie folgt definiert sind:
    - `prefix`
      - : Ein „kurzer Alias“ für den Namespace.
        Das Präfix ist optional. Wenn es angegeben wird, muss auch der Parameter `namespaceURI` angegeben werden.
        Wenn das Präfix auf `xml` beziehungsweise `xmlns` gesetzt ist, muss `namespaceURI` auf `http://www.w3.org/XML/1998/namespace` beziehungsweise `http://www.w3.org/2000/xmlns/` gesetzt sein.

    - `localName`
      - : Der lokale Name des Attributs.

- `value`
  - : Ein Trusted Type oder eine Zeichenfolge mit dem Wert, der dem Attribut zugewiesen werden soll.

    Wenn Trusted Types erzwungen werden, müssen für die folgenden Attribute Instanzen des jeweiligen Trusted Type übergeben werden:
    - Event-Handler-Content-Attribute wie `onclick` und `onload` erfordern ein [`TrustedScript`](/de/docs/Web/API/TrustedScript).
    - [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc) erfordert eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz.
    - [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanz.
    - [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanz.

    Für andere Attribute werden Trusted Types nicht erzwungen. Daher können eine Zeichenfolge oder ein beliebiger Trusted Type übergeben werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NamespaceError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`namespaceURI`](#namespaceuri):
    - kein gültiger Namespace-URI ist.
    - eine leere Zeichenfolge ist, obwohl `prefix` einen Wert hat.
    - nicht `http://www.w3.org/XML/1998/namespace` beziehungsweise `http://www.w3.org/2000/xmlns/` ist, obwohl [`prefix`](#prefix) auf `xml` beziehungsweise `xmlns` gesetzt ist.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`prefix`](#prefix) oder [`localName`](#localname) ungültig ist:
    - `prefix` muss mindestens ein Zeichen enthalten und darf weder ASCII-Leerraumzeichen noch `NULL`, `/` oder `>` enthalten (U+0000, U+002F beziehungsweise U+003E).
    - `localName` muss mindestens ein Zeichen enthalten und darf weder ASCII-Leerraumzeichen noch `NULL`, `/`, `=` oder `>` enthalten (U+0000, U+002F, U+003D beziehungsweise U+003E).

    > [!NOTE]
    > Frühere Versionen der Spezifikation waren restriktiver und verlangten, dass `qualifiedName` ein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist.

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn für [`value`](#value) statt eines Trusted-Type-Objekts eine Zeichenfolge übergeben wird (bei Attributen, die ein solches Objekt erfordern), während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beispiele

### Grundlegende Verwendung

```js
let d = document.getElementById("d1");
d.setAttributeNS(
  "http://www.mozilla.org/ns/specialspace",
  "spec:align",
  "center",
);
```

### Trusted Types

Das Beispiel [Unsichere Attribute setzen](/de/docs/Web/API/Element/setAttribute#setting_unsafe_attributes) zu `setAttribute()` zeigt, wie Sie `setAttributeNS()` mit [Trusted Types](/de/docs/Web/API/Trusted_Types_API) verwenden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
