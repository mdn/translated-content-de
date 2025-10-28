---
title: "HTMLScriptElement: innerText-Eigenschaft"
short-title: innerText
slug: Web/API/HTMLScriptElement/innerText
l10n:
  sourceCommit: 5c513c8e3075989886ae5f3b00d92f2b2988085a
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Diese Eigenschaft repräsentiert den Textinhalt eines `script`-Elements, der je nach Skripttyp ausführbar sein kann.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte statt Strings zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`innerText`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces repräsentiert den Textinhalt des {{HTMLElement("script")}}-Elements.
Sie verhält sich genauso wie die Eigenschaften [`textContent`](/de/docs/Web/API/HTMLScriptElement/textContent) und [`text`](/de/docs/Web/API/HTMLScriptElement/text).

## Wert

Das Abrufen der Eigenschaft gibt einen String zurück, der den Text des Skripts enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt oder einen String.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf einen String gesetzt wird und [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die **`innerText`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces repräsentiert den Textinhalt innerhalb des {{HTMLElement("script")}}-Elements.

Bei einem ausführbaren Skript (d. h. einem Skript, dessen [`type`](/de/docs/Web/API/HTMLScriptElement/type) angibt, dass es ein Modul oder klassisches Skript ist) handelt es sich bei diesem Text um inline ausführbaren Code.
Für andere Typen könnte es eine Importkarte, Spekulationsregeln oder eine andere Art von Datenblock darstellen.

Beachten Sie, dass wenn die [`src`](/de/docs/Web/API/HTMLScriptElement/src)-Eigenschaft gesetzt ist, der Inhalt der `innerText`-Eigenschaft ignoriert wird.

Die `innerText`-Eigenschaft ist auch auf [`HTMLElement`](/de/docs/Web/API/HTMLElement/innerText) definiert und kann daher mit anderen Elementen verwendet werden.
Wenn sie mit anderen Elementen verwendet wird, erwartet oder erzwingt die Eigenschaft nicht die Zuweisung eines [`TrustedScript`](/de/docs/Web/API/TrustedScript).

### Sicherheitsüberlegungen

Siehe [Sicherheitsüberlegungen](/de/docs/Web/API/HTMLScriptElement/textContent#security_considerations) in [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent) (die Überlegungen sind für die Eigenschaften `text`, `textContent` und `innerText` gleich).

## Beispiele

Siehe die [Beispiele](/de/docs/Web/API/HTMLScriptElement/textContent#examples) in [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
