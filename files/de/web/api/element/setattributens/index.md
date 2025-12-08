---
title: "Element: setAttributeNS() Methode"
short-title: setAttributeNS()
slug: Web/API/Element/setAttributeNS
l10n:
  sourceCommit: c03afc07890f66c6016f4f4f99aa5777fe50e877
---

{{ APIRef("DOM") }}

> [!WARNING]
> Diese Methode kann Attributwerte enthalten, die je nach Attribut als HTML, als Script oder als Script-URL geparst werden.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können ein Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein, wenn der Wert ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie stets das entsprechende Trusted Type Objekt ([`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)) anstelle von Strings für diese Attribute verwenden, die sie erfordern, und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#/de/docs/Web/API/Element/setAttribute#security_considerations) in {{domxref("Element.setAttribute())}}.

Die **`setAttributeNS()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle fügt ein neues Attribut hinzu oder ändert den Wert eines Attributs mit dem angegebenen Namensraum und Namen.

Wenn Sie mit HTML-Dokumenten arbeiten und das gewünschte Attribut nicht als Teil eines bestimmten Namensraums angeben müssen, sollten Sie die [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) Methode verwenden.

Beachten Sie, dass `setAttributeNS()` die einzige Methode für namenraumbezogene Attribute ist, die den vollständig qualifizierten Namen erwartet, d.h. `"namespace:local-name"`.

## Syntax

```js-nolint
setAttributeNS(namespace, name, value)
```

### Parameter

- `namespace`
  - : Ein String, der den Namensraum des Attributs angibt.
- `name`
  - : Ein String, der das Attribut durch seinen qualifizierten Namen identifiziert; also ein Namensraum-Präfix, gefolgt von einem Doppelpunkt und einem lokalen Namen.
- `value`
  - : Ein Trusted Type oder String, der den zuzuweisenden Wert für das Attribut enthält.

    Trusted Type Instanzen müssen für die folgenden Attribute übergeben werden, wenn Trusted Types durchgesetzt werden:
    - Event-Handler-Inhaltsattribute wie `onclick` und `onload` erfordern ein [`TrustedScript`](/de/docs/Web/API/TrustedScript).
    - [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc) erfordert eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz.
    - [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Instanz.
    - [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Instanz.

    Bei anderen Attributen werden Trusted Types nicht erzwungen, daher kann ein String oder ein beliebiger Trusted Type übergeben werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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

### Trusted Types

Das Beispiel [Unsichere Attribute festlegen](/de/docs/Web/API/Element/setAttribute#setting_unsafe_attributes) in `setAttribute()` zeigt, wie Sie `setAttributeNS()` mit den [Trusted Types](/de/docs/Web/API/Trusted_Types_API) verwenden könnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
