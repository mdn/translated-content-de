---
title: "HTMLScriptElement: text-Eigenschaft"
short-title: text
slug: Web/API/HTMLScriptElement/text
l10n:
  sourceCommit: 5c513c8e3075989886ae5f3b00d92f2b2988085a
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Diese Eigenschaft repräsentiert den Textinhalt eines Skriptelements, das je nach Skripttyp ausführbar sein kann.
> Solche APIs sind bekannt als [injection sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen zuweisen und [trusted types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`text`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle repräsentiert den Inline-Textinhalt des {{HTMLElement("script")}}-Elements.
Sie verhält sich ähnlich wie die Eigenschaft [`textContent`](/de/docs/Web/API/HTMLScriptElement/textContent) und [`innerText`](/de/docs/Web/API/HTMLScriptElement/innerText).

## Wert

Das Abrufen der Eigenschaft gibt eine Zeichenfolge zurück, die den Text des Skripts enthält.

Beim Setzen der Eigenschaft wird entweder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt oder eine Zeichenfolge akzeptiert.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Zeichenfolge gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die **`text`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle repräsentiert den Textinhalt innerhalb des {{HTMLElement("script")}}-Elements.

Für ein ausführbares Skript (d.h. ein Skript, dessen [`type`](/de/docs/Web/API/HTMLScriptElement/type) angibt, dass es sich um ein Modul- oder klassisches Skript handelt), ist dieser Text Inline-ausführbarer Code.
Für andere Typen könnte es eine Importkarte, Spekulationsregeln oder eine andere Art von Datenblock darstellen.

Beachten Sie, dass, wenn die [`src`](/de/docs/Web/API/HTMLScriptElement/src)-Eigenschaft gesetzt ist, der Inhalt der `text`-Eigenschaft ignoriert wird.

### Sicherheitsüberlegungen

Siehe [Sicherheitsüberlegungen](/de/docs/Web/API/HTMLScriptElement/textContent#security_considerations) in [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent) (die Überlegungen sind die gleichen für die `text`, `textContent` und `innerText`-Eigenschaften).

## Beispiele

Siehe die [Beispiele](/de/docs/Web/API/HTMLScriptElement/textContent#examples) in [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)
- [`HTMLScriptElement.innerText`](/de/docs/Web/API/HTMLScriptElement/innerText)
