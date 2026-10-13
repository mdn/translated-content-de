---
title: "HTMLScriptElement: Eigenschaft text"
short-title: text
slug: Web/API/HTMLScriptElement/text
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Diese Eigenschaft repräsentiert den Textinhalt eines Script-Elements, der je nach Script-Typ ausführbar sein kann.
> APIs wie diese gelten als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können einen Angriffsweg für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.
>
> Sie können dieses Risiko verringern, indem Sie statt Zeichenfolgen immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte zuweisen und die [Verwendung von Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die Eigenschaft **`text`** der Schnittstelle [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) repräsentiert den Inline-Textinhalt des {{HTMLElement("script")}}-Elements.
Sie verhält sich wie die Eigenschaften [`textContent`](/de/docs/Web/API/HTMLScriptElement/textContent) und [`innerText`](/de/docs/Web/API/HTMLScriptElement/innerText).

## Wert

Beim Lesen der Eigenschaft wird eine Zeichenfolge mit dem Text des Scripts zurückgegeben.

Beim Setzen der Eigenschaft wird entweder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt oder eine Zeichenfolge akzeptiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Zeichenfolge gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die Eigenschaft **`text`** der Schnittstelle [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) repräsentiert den Textinhalt innerhalb des {{HTMLElement("script")}}-Elements.

Bei einem ausführbaren Script (also einem Script, dessen [`type`](/de/docs/Web/API/HTMLScriptElement/type) angibt, dass es sich um ein Modul oder ein klassisches Script handelt) ist dieser Text direkt eingebetteter ausführbarer Code.
Bei anderen Typen kann er eine Import Map, Speculation Rules oder einen anderen Datenblock repräsentieren.

Beachten Sie, dass der Inhalt der Eigenschaft `text` ignoriert wird, wenn die Eigenschaft [`src`](/de/docs/Web/API/HTMLScriptElement/src) gesetzt ist.

### Sicherheitsaspekte

Siehe [Sicherheitsaspekte](/de/docs/Web/API/HTMLScriptElement/textContent#security_considerations) unter [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent) (für die Eigenschaften `text`, `textContent` und `innerText` gelten dieselben Hinweise).

## Beispiele

Siehe die [Beispiele](/de/docs/Web/API/HTMLScriptElement/textContent#examples) unter [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)
- [`HTMLScriptElement.innerText`](/de/docs/Web/API/HTMLScriptElement/innerText)
