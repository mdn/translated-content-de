---
title: "SVGAnimatedString: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedString/baseVal
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

{{APIRef("SVG")}}

> [!WARNING]
> Die `baseVal`-Eigenschaft kann verwendet werden, um den nicht animierten Wert eines reflektierten Attributs festzulegen.
> Im Fall von [`SVGScriptElement.href.baseVal`](/de/docs/Web/API/SVGScriptElement/href) repräsentiert diese Eigenschaft die URL eines externen Skripts, das in das SVG-Skript-Element geladen wird.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können potenziell ein Vektor für [cross-site scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein.
>
> Sie können dieses Risiko verringern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwenden, die einschränkt, von welchen Standorten Skripte geladen werden können, und indem Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte statt Zeichenfolgen zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](/de/docs/Web/API/SVGScriptElement/href#security_considerations) in [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) für weitere Informationen.

Die **`baseVal`**-Eigenschaft der [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Schnittstelle ruft den Basiswert des angegebenen Attributs ab oder setzt ihn.

Dies ist der Wert des reflektierten Attributs, bevor Animationen angewendet werden.

## Wert

Beim Abrufen der Eigenschaft wird eine Zeichenkette zurückgegeben, die den nicht animierten Wert des reflektierten Attributs darstellt, falls dieser gesetzt wurde.
Wenn das reflektierte Attribut nicht angegeben ist, aber eine alternative veraltete Version gesetzt wurde, wird stattdessen dessen Wert zurückgegeben.
Wenn weder das reflektierte Attribut noch dessen alternative Version gesetzt sind, wird der anfängliche Wert des reflektierten Attributs zurückgegeben, falls vorhanden, andernfalls die leere Zeichenkette (`""`).

Die Eigenschaft muss auf einen [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) gesetzt werden, wenn das Element des reflektierten Attributs ein [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement) ist und [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
Für alle anderen Fälle kann der Wert eine Zeichenkette sein (oder ein Objekt, das in eine Zeichenkette aufgelöst werden kann).
Die Eigenschaft setzt den Wert des reflektierten Attributs, wenn es definiert ist, wird jedoch die alternative veraltete Version des reflektierten Attributs setzen, wenn es definiert ist und das reflektierte Attribut nicht.

Beachten Sie, dass [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) oder jeder andere vertrauenswürdige Typ für `baseVal` bei jedem Element gesetzt werden kann, da die vertrauenswürdigen Typen zu Zeichenketten aufgelöst werden.
Allerdings _muss_ [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) für [`SVGScriptElement.href.baseVal`](/de/docs/Web/API/SVGScriptElement/href) verwendet werden, wenn vertrauenswürdige Typen durchgesetzt werden.

## Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn das Element des reflektierten Attributs ein [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement) ist und die Eigenschaft auf eine Zeichenkette gesetzt wird, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
