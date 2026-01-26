---
title: "HTMLScriptElement: innerText-Eigenschaft"
short-title: innerText
slug: Web/API/HTMLScriptElement/innerText
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Diese Eigenschaft repräsentiert den Textinhalt eines Skriptelements, das je nach Skripttyp ausführbar sein kann.
> Solche APIs sind als [Injektionssenken](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können potenziell eine Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`innerText`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces repräsentiert den Textinhalt des {{HTMLElement("script")}}-Elements.
Sie verhält sich genauso wie die [`textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)- und [`text`](/de/docs/Web/API/HTMLScriptElement/text)-Eigenschaften.

## Wert

Das Abrufen der Eigenschaft gibt eine Zeichenfolge zurück, die den Text des Skripts enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt oder eine Zeichenfolge.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Zeichenfolge gesetzt wird, während [vertrauenswürdige Typen](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die **`innerText`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces repräsentiert den Textinhalt innerhalb des {{HTMLElement("script")}}-Elements.

Bei einem ausführbaren Skript (d.h. ein Skript, dessen [`type`](/de/docs/Web/API/HTMLScriptElement/type) angibt, dass es sich um ein Modul- oder klassisches Skript handelt) ist dieser Text ausführbarer Inline-Code.
Für andere Typen könnte es eine Importkarte, Spekulationsregeln oder eine andere Art von Datenblock darstellen.

Beachten Sie, dass der Inhalt der `innerText`-Eigenschaft ignoriert wird, wenn die [`src`](/de/docs/Web/API/HTMLScriptElement/src)-Eigenschaft gesetzt ist.

Die `innerText`-Eigenschaft ist auch auf [`HTMLElement`](/de/docs/Web/API/HTMLElement/innerText) definiert und kann daher mit anderen Elementen verwendet werden.
Wenn sie mit anderen Elementen verwendet wird, erwartet oder erzwingt die Eigenschaft nicht die Zuweisung eines [`TrustedScript`](/de/docs/Web/API/TrustedScript).

### Sicherheitsüberlegungen

Siehe [Sicherheitsüberlegungen](/de/docs/Web/API/HTMLScriptElement/textContent#security_considerations) in [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent) (die Überlegungen sind die gleichen für die Eigenschaften `text`, `textContent` und `innerText`).

## Beispiele

Siehe die [Beispiele](/de/docs/Web/API/HTMLScriptElement/textContent#examples) in [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
