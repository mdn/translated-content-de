---
title: "SVGAnimatedString: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedString/baseVal
l10n:
  sourceCommit: a809326f55025ca710b11e6c46414d73d031bf2b
---

{{APIRef("SVG")}}

> [!WARNING]
> Die [`baseVal`](/de/docs/Web/API/SVGAnimatedString/baseVal)-Eigenschaft kann verwendet werden, um den nicht-animierten Wert eines reflektierten Attributs festzulegen.
> Im Fall von [`SVGScriptElement.href.baseVal`](/de/docs/Web/API/SVGScriptElement/href) repräsentiert diese Eigenschaft die URL eines externen Skripts, das in das SVG-Skriptelement geladen wird.
> Solche APIs sind bekannt als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.
>
> Sie können dieses Risiko mindern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) haben, die die Orte einschränkt, von denen Skripte geladen werden können, und indem Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenfolgen zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](/de/docs/Web/API/SVGScriptElement/href#security_considerations) in [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href).

Die **`baseVal`**-Eigenschaft der [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Schnittstelle ruft den Basiswert des angegebenen Attributs ab oder setzt ihn fest.

Dies ist der Wert des reflektierten Attributs, bevor Animationen angewendet werden.

## Wert

Das Abrufen der Eigenschaft gibt eine Zeichenkette zurück, die den nicht-animierten Wert des reflektierten Attributs darstellt, falls dieser gesetzt wurde.
Wenn das reflektierte Attribut nicht angegeben ist, aber eine alternative veraltete Version gesetzt wurde, wird stattdessen dessen Wert zurückgegeben.
Wenn weder das reflektierte Attribut gesetzt ist, gibt die Eigenschaft einen Initialwert für das reflektierte Attribut zurück, falls vorhanden, andernfalls einen leeren String (`""`).

Die Eigenschaft muss auf eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) gesetzt werden, wenn das Element des reflektierten Attributs ein [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement) ist und [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
In allen anderen Fällen kann der Wert eine Zeichenkette (oder ein Objekt, das zu einer Zeichenkette aufgelöst werden kann) sein.
Die Eigenschaft setzt den Wert des reflektierten Attributs, wenn dieses definiert ist, wird aber die alternative veraltete Version des reflektierten Attributs setzen, wenn diese definiert ist und das reflektierte Attribut nicht.

Beachten Sie, dass [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) oder jeder andere vertrauenswürdige Typ für `baseVal` auf jedem Element gesetzt werden kann, da die vertrauenswürdigen Typen zu Zeichenketten aufgelöst werden.
Jedoch _muss_ [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) für [`SVGScriptElement.href.baseVal`](/de/docs/Web/API/SVGScriptElement/href) verwendet werden, wenn vertrauenswürdige Typen durchgesetzt werden.

## Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn das Element des reflektierten Attributs [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement) ist und die Eigenschaft auf eine Zeichenkette gesetzt wird, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types), und keine Standardrichtlinie definiert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
