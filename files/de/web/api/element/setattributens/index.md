---
title: "Element: Methode setAttributeNS()"
short-title: setAttributeNS()
slug: Web/API/Element/setAttributeNS
l10n:
  sourceCommit: ff9dd829bb17d272b7d14c41a442f2c2e3680521
---

{{ APIRef("DOM") }}

> [!WARNING]
> Diese Methode kann Attributwerte annehmen, die je nach Attribut als HTML, Skript oder als Skript-URL geparst werden.
> Solche APIs sind bekannt als [Einschleusungs-Senken](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein, wenn der Wert ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer das entsprechende Trusted-Objekt ([`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)) für jene Attribute übergeben, die dies erfordern, anstatt von Strings, und indem Sie [trusted types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](/de/docs/Web/API/Element/setAttribute#security_considerations) in [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute).

Die **`setAttributeNS()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle fügt ein neues Attribut hinzu oder ändert den Wert eines Attributs mit dem angegebenen Namespace und Namen.

Wenn Sie mit HTML-Dokumenten arbeiten und das angeforderte Attribut nicht als Teil eines bestimmten Namespace spezifizieren müssen, verwenden Sie stattdessen die [`setAttribute()`](/de/docs/Web/API/Element/setAttribute)-Methode.

## Syntax

```js-nolint
setAttributeNS(namespaceURI, qualifiedName, value)
```

### Parameter

- `namespaceURI`
  - : Ein String, der den Namespace des zu setzenden Attributs angibt oder der leere String.

- `qualifiedName`
  - : Ein String, der das Attribut durch seinen qualifizierten Namen identifiziert, das Format `prefix:localName` oder `localName` aufweist, wobei die Teile wie folgt definiert sind:
    - `prefix`
      - : Ein "kurzes Alias" für den Namespace.
        Das Präfix ist optional, aber wenn es angegeben wird, muss auch der `namespaceURI`-Parameter angegeben werden.
        Wird das Präfix auf `xml` oder `xmlns` gesetzt, muss `namespaceURI` auf `http://www.w3.org/XML/1998/namespace` oder `http://www.w3.org/2000/xmlns/` gesetzt werden, jeweils.

    - `localName`
      - : Der lokale Name des Attributs.

- `value`
  - : Ein Trusted-Typ oder String, der den Wert enthält, der dem Attribut zugewiesen werden soll.

    Für folgende Attribute müssen Trusted-Typ-Instanzen übergeben werden, wenn Trusted-Typen durchgesetzt werden:
    - Event-Handler-Inhaltsattribute, wie `onclick` und `onload`, benötigen [`TrustedScript`](/de/docs/Web/API/TrustedScript).
    - [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc) benötigt eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz.
    - [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src) benötigt eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanz.
    - [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) benötigt eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanz.

    Für andere Attribute werden Trusted-Typen nicht durchgesetzt, sodass ein String oder jeder Trusted-Typ übergeben werden kann.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NamespaceError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`namespaceURI`](#namespaceURI):
    - kein gültiger Namespace-URI ist.
    - auf den leeren String gesetzt ist, wenn `prefix` einen Wert hat.
    - nicht der Wert `http://www.w3.org/XML/1998/namespace` oder `http://www.w3.org/2000/xmlns/` ist, wenn [`prefix`](#prefix) auf `xml` oder `xmlns` gesetzt ist, jeweils.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder das [`prefix`](#prefix) oder [`localName`](#localname) ungültig ist:
    - Das `prefix` muss mindestens ein Zeichen haben und darf kein ASCII-Leerzeichen, `NULL`, `/` oder `>` (U+0000, U+002F oder U+003E, jeweils) enthalten.
    - Das `localName` muss mindestens ein Zeichen haben und darf kein ASCII-Leerzeichen, `NULL`, `/`, `=` oder `>` (U+0000, U+002F, U+003D oder U+003E, jeweils) enthalten.

    > [!NOTE]
    > Frühere Versionen der Spezifikation waren restriktiver und erforderten, dass `qualifiedName` ein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) war.

- `TypeError`
  - : Wird ausgelöst, wenn [`value`](#value) ein String anstelle eines Trusted-Typ-Objekts übergeben wird (für jene Attribute, die diese erfordern), wenn [Trusted-Typen](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

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

### Trusted-Typen

Das Beispiel [Unsichere Attribute setzen](/de/docs/Web/API/Element/setAttribute#setting_unsafe_attributes) in `setAttribute()` zeigt, wie Sie `setAttributeNS()` mit den [Trusted-Typen](/de/docs/Web/API/Trusted_Types_API) verwenden könnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
