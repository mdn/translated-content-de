---
title: "SVGAnimatedString: Eigenschaft baseVal"
short-title: baseVal
slug: Web/API/SVGAnimatedString/baseVal
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("SVG")}}

> [!WARNING]
> Mit der Eigenschaft `baseVal` kann der nicht animierte Wert eines reflektierten Attributs festgelegt werden.
> Im Fall von [`SVGScriptElement.href.baseVal`](/de/docs/Web/API/SVGScriptElement/href) stellt diese Eigenschaft die URL eines externen Skripts dar, das in das SVG-Skriptelement geladen wird.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können einen Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.
>
> Sie können dieses Risiko verringern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwenden, die einschränkt, von welchen Orten Skripte geladen werden dürfen. Weisen Sie außerdem stets [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte statt Zeichenfolgen zu und [erzwingen Sie Trusted Types](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](/de/docs/Web/API/SVGScriptElement/href#security_considerations) in der Dokumentation zu [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href).

Die Eigenschaft **`baseVal`** der Schnittstelle [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString) ruft den Basiswert des angegebenen Attributs ab oder legt ihn fest.

Dies ist der Wert des reflektierten Attributs, bevor Animationen angewendet werden.

## Wert

Beim Auslesen gibt die Eigenschaft eine Zeichenfolge zurück, die den nicht animierten Wert des reflektierten Attributs darstellt, sofern dieses gesetzt wurde.
Ist das reflektierte Attribut nicht angegeben, aber eine alternative, veraltete Version davon gesetzt, wird stattdessen deren Wert zurückgegeben.
Ist keines von beiden gesetzt, gibt die Eigenschaft einen vorhandenen Initialwert des reflektierten Attributs zurück, andernfalls die leere Zeichenfolge (`""`).

Die Eigenschaft muss auf eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) gesetzt werden, wenn das Element des reflektierten Attributs ein [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement) ist und [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
In allen anderen Fällen kann der Wert eine Zeichenfolge sein oder ein Objekt, das sich in eine Zeichenfolge umwandeln lässt.
Die Eigenschaft setzt den Wert des reflektierten Attributs, wenn dieses definiert ist. Ist das reflektierte Attribut nicht definiert, wohl aber dessen alternative, veraltete Version, setzt sie stattdessen deren Wert.

Beachten Sie, dass [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) oder ein anderer Trusted Type für `baseVal` bei jedem Element verwendet werden kann, da Trusted Types in Zeichenfolgen umgewandelt werden.
Für [`SVGScriptElement.href.baseVal`](/de/docs/Web/API/SVGScriptElement/href) _muss_ jedoch [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) verwendet werden, wenn Trusted Types erzwungen werden.

## Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Element des reflektierten Attributs ein [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement) ist, die Eigenschaft auf eine Zeichenfolge gesetzt wird, [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
