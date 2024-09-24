---
title: TrustedHTML
slug: Web/API/TrustedHTML
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`TrustedHTML`**-Schnittstelle der {{domxref("Trusted Types API", "", "", "nocode")}} repräsentiert einen String, den ein Entwickler in ein [Injektions-Sink](/de/docs/Web/API/Trusted_Types_API#injection_sinks) einfügen kann, das ihn als HTML rendert. Diese Objekte werden über {{domxref("TrustedTypePolicy.createHTML()")}} erstellt und haben daher keinen Konstruktor.

Der Wert eines `TrustedHTML`-Objekts wird beim Erstellen des Objekts festgelegt und kann nicht durch JavaScript geändert werden, da kein Setter verfügbar ist.

## Instanzmethoden

- {{domxref("TrustedHTML.toJSON()")}}
  - : Gibt eine JSON-Darstellung der gespeicherten Daten zurück.
- {{domxref("TrustedHTML.toString()")}}
  - : Ein String, der das bereinigte HTML enthält.

## Beispiele

Im folgenden Beispiel erstellen wir eine Richtlinie, die `TrustedHTML`-Objekte unter Nutzung von {{domxref("TrustedTypePolicyFactory.createPolicy()")}} erzeugt. Wir können dann {{domxref("TrustedTypePolicy.createHTML()")}} verwenden, um einen bereinigten HTML-String zu erstellen, der in das Dokument eingefügt werden soll.

Der bereinigte Wert kann dann mit {{domxref("Element.innerHTML")}} verwendet werden, um sicherzustellen, dass keine neuen HTML-Elemente injiziert werden können.

```html
<div id="myDiv"></div>
```

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

let el = document.getElementById("myDiv");
const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped instanceof TrustedHTML); // true
el.innerHTML = escaped;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Vermeiden Sie DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
