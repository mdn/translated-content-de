---
title: "HTMLScriptElement: innerText-Eigenschaft"
short-title: innerText
slug: Web/API/HTMLScriptElement/innerText
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Diese Eigenschaft repräsentiert den Textinhalt eines script-Elements, der je nach Skripttyp ausführbar sein kann.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können einen Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.
>
> Sie können dieses Risiko verringern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte statt Zeichenfolgen zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die Eigenschaft **`innerText`** der Schnittstelle [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) repräsentiert den Textinhalt des {{HTMLElement("script")}}-Elements.
Sie verhält sich genauso wie die Eigenschaften [`textContent`](/de/docs/Web/API/HTMLScriptElement/textContent) und [`text`](/de/docs/Web/API/HTMLScriptElement/text).

## Wert

Beim Lesen der Eigenschaft wird eine Zeichenfolge zurückgegeben, die den Text des Skripts enthält.

Beim Setzen der Eigenschaft kann entweder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt oder eine Zeichenfolge zugewiesen werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Eigenschaft eine Zeichenfolge zugewiesen wird, obwohl [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die Eigenschaft **`innerText`** der Schnittstelle [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) repräsentiert den Textinhalt innerhalb des {{HTMLElement("script")}}-Elements.

Bei einem ausführbaren Skript (also einem Skript, dessen [`type`](/de/docs/Web/API/HTMLScriptElement/type) angibt, dass es sich um ein Modul oder ein klassisches Skript handelt) ist dieser Text ausführbarer Inline-Code.
Bei anderen Typen kann er eine Import Map, Speculation Rules oder eine andere Art von Datenblock darstellen.

Beachten Sie, dass der Inhalt der Eigenschaft `innerText` ignoriert wird, wenn die Eigenschaft [`src`](/de/docs/Web/API/HTMLScriptElement/src) gesetzt ist.

Die Eigenschaft `innerText` ist auch für [`HTMLElement`](/de/docs/Web/API/HTMLElement/innerText) definiert und kann daher mit anderen Elementen verwendet werden.
Bei anderen Elementen wird für die Zuweisung kein [`TrustedScript`](/de/docs/Web/API/TrustedScript) erwartet oder erzwungen.

### Sicherheitsaspekte

Siehe die [Sicherheitsaspekte](/de/docs/Web/API/HTMLScriptElement/textContent#security_considerations) unter [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent) (sie gelten gleichermaßen für die Eigenschaften `text`, `textContent` und `innerText`).

## Beispiele

Siehe die [Beispiele](/de/docs/Web/API/HTMLScriptElement/textContent#examples) unter [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
