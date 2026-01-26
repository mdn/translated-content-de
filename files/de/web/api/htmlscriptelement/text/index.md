---
title: "HTMLScriptElement: text-Eigenschaft"
short-title: text
slug: Web/API/HTMLScriptElement/text
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Diese Eigenschaft repräsentiert den Textinhalt eines Skriptelements, das je nach Skripttyp ausführbar sein kann.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und stellen potenziell einen Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenketten zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsaspekte](#sicherheitsaspekte) für weitere Informationen.

Die **`text`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle repräsentiert den Inline-Textinhalt des {{HTMLElement("script")}}-Elements.
Sie verhält sich genauso wie die [`textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)- und [`innerText`](/de/docs/Web/API/HTMLScriptElement/innerText)-Eigenschaft.

## Wert

Der Abruf der Eigenschaft gibt eine Zeichenkette zurück, die den Text des Skripts enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt oder eine Zeichenkette.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Zeichenkette gesetzt wird und [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.

## Beschreibung

Die **`text`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle repräsentiert den Textinhalt innerhalb des {{HTMLElement("script")}}-Elements.

Für ein ausführbares Skript (d.h. ein Skript, dessen [`type`](/de/docs/Web/API/HTMLScriptElement/type) angibt, dass es sich um ein Modul- oder klassisches Skript handelt) ist dieser Text inline ausführbarer Code.
Für andere Typen könnte es eine Importmap, Spekulationsregeln oder eine andere Art von Datenblock darstellen.

Beachten Sie, dass der Inhalt der `text`-Eigenschaft ignoriert wird, wenn die [`src`](/de/docs/Web/API/HTMLScriptElement/src)-Eigenschaft gesetzt ist.

### Sicherheitsaspekte

Siehe [Sicherheitsaspekte](/de/docs/Web/API/HTMLScriptElement/textContent#security_considerations) in [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent) (die Erwägungen sind dieselben für die `text`-, `textContent`- und `innerText`-Eigenschaften).

## Beispiele

Siehe die [Beispiele](/de/docs/Web/API/HTMLScriptElement/textContent#examples) in [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)
- [`HTMLScriptElement.innerText`](/de/docs/Web/API/HTMLScriptElement/innerText)
