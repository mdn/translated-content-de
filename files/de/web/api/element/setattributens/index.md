---
title: "Element: setAttributeNS() Methode"
short-title: setAttributeNS()
slug: Web/API/Element/setAttributeNS
l10n:
  sourceCommit: 995f8bcede5aa8ca40921b030deef7524ce9e1a3
---

{{ APIRef("DOM") }}

> [!WARNING]
> Diese Methode kann Attributwerte übernehmen, die je nach Attribut als HTML, ein Skript oder als Skript-URL geparst werden.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und stellen möglicherweise einen Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe dar, wenn der Wert ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie stets das entsprechende Trusted Type Objekt ([`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)) anstelle von Strings für diese Attribute verwenden, die sie benötigen, und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](/de/docs/Web/API/Element/setAttribute#security_considerations) in {{domxref("Element.setAttribute())}}.

Die **`setAttributeNS()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle fügt ein neues Attribut hinzu oder ändert den Wert eines Attributs mit dem angegebenen Namensraum und Namen.

Wenn Sie mit HTML-Dokumenten arbeiten und das angeforderte Attribut nicht als Teil eines spezifischen Namensraums angeben müssen, verwenden Sie stattdessen die [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) Methode.

Beachten Sie, dass `setAttributeNS()` die einzige Methode für Attributen mit Namensräumen ist, die den voll qualifizierten Namen, d.h. `"namespace:local-name"`, erwartet.

## Syntax

```js-nolint
setAttributeNS(namespace, name, value)
```

### Parameter

- `namespace`
  - : Ein String, der den Namensraum des Attributs angibt.
- `name`
  - : Ein String, der das Attribut anhand seines qualifizierten Namens identifiziert; das bedeutet, ein Namensraumpräfix, gefolgt von einem Doppelpunkt und einem lokalen Namen.
- `value`
  - : Ein Trusted Type oder String, der den Wert enthält, der dem Attribut zugewiesen werden soll.

    Trusted Type Instanzen müssen für die folgenden Attribute übergeben werden, wenn Trusted Types erzwungen werden:
    - Event-Handler-Inhaltsattribute, wie `onclick` und `onload`, erfordern ein [`TrustedScript`](/de/docs/Web/API/TrustedScript).
    - [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc) erfordert eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz.
    - [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Instanz.
    - [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Instanz.

    Trusted Types werden für andere Attribute nicht erzwungen, daher kann ein String oder ein beliebiger Trusted Type übergeben werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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

Das Beispiel [Unsichere Attribute setzen](/de/docs/Web/API/Element/setAttribute#setting_unsafe_attributes) in `setAttribute()` zeigt, wie Sie `setAttributeNS()` mit den [Trusted Types](/de/docs/Web/API/Trusted_Types_API) verwenden könnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
