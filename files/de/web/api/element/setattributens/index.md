---
title: "Element: setAttributeNS() Methode"
short-title: setAttributeNS()
slug: Web/API/Element/setAttributeNS
l10n:
  sourceCommit: e6ef56a019e3af403da972e36e5a6084cb53feab
---

{{ APIRef("DOM") }}

> [!WARNING]
> Diese Methode kann Attributwerte übernehmen, die je nach Attribut als HTML, Skript oder als Skript-URL geparst werden.
> Solche APIs sind als [Einspeicherungspunkte](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein, wenn der Wert ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer das entsprechende vertrauenswürdige Typ-Objekt ([`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)) anstelle von Zeichenketten für jene Attribute verwenden, die sie erfordern, und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](/de/docs/Web/API/Element/setAttribute#security_considerations) in [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute).

Die **`setAttributeNS()`** Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces fügt ein neues Attribut hinzu oder ändert den Wert eines Attributs mit dem angegebenen Namensraum und Namen.

Wenn Sie mit HTML-Dokumenten arbeiten und das erforderliche Attribut nicht als Teil eines bestimmten Namensraums angeben müssen, verwenden Sie stattdessen die [`setAttribute()`](/de/docs/Web/API/Element/setAttribute)-Methode.

Beachten Sie, dass `setAttributeNS()` die einzige Methode für namensraumbezogene Attribute ist, die den vollständig qualifizierten Namen erwartet, d.h. `"namespace:local-name"`.

## Syntax

```js-nolint
setAttributeNS(namespace, name, value)
```

### Parameter

- `namespace`
  - : Ein String, der den Namensraum des Attributs angibt.
- `name`
  - : Ein String, der das Attribut durch seinen qualifizierten Namen identifiziert; das ist ein Namensraumprefix, gefolgt von einem Doppelpunkt, gefolgt von einem lokalen Namen.
- `value`
  - : Ein vertrauenswürdiger Typ oder String, der den Wert enthält, der dem Attribut zugewiesen werden soll.

    Vertrauenswürdige Typ-Instanzen müssen für die folgenden Attribute übergeben werden, wenn vertrauenswürdige Typen erzwungen werden:
    - Event-Handler-Inhaltsattribute, wie `onclick` und `onload`, erfordern ein [`TrustedScript`](/de/docs/Web/API/TrustedScript).
    - [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc) erfordert eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz.
    - [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanz.
    - [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanz.

    Vertrauenswürdige Typen werden für andere Attribute nicht erzwungen, daher kann ein String oder ein beliebiger vertrauenswürdiger Typ übergeben werden.

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

### Vertrauenswürdige Typen

Das Beispiel [Unsichere Attribute setzen](/de/docs/Web/API/Element/setAttribute#setting_unsafe_attributes) in `setAttribute()` zeigt, wie Sie `setAttributeNS()` mit den [vertrauenswürdigen Typen](/de/docs/Web/API/Trusted_Types_API) verwenden könnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
