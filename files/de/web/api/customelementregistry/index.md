---
title: CustomElementRegistry
slug: Web/API/CustomElementRegistry
l10n:
  sourceCommit: 55fe0ef0be11c6d18012d18b355d46f9df60c4db
---

{{APIRef("Web Components")}}

Die **`CustomElementRegistry`**-Schnittstelle bietet Methoden zur Registrierung von benutzerdefinierten Elementen und zur Abfrage von registrierten Elementen. Um eine Instanz davon zu erhalten, verwenden Sie die {{domxref("window.customElements")}}-Eigenschaft.

## Instanzmethoden

- {{domxref("CustomElementRegistry.define()")}}
  - : Definiert ein neues [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements).
- {{domxref("CustomElementRegistry.get()")}}
  - : Gibt den Konstruktor für das benannte benutzerdefinierte Element zurück oder {{jsxref("undefined")}}, wenn das benutzerdefinierte Element nicht definiert ist.
- {{domxref("CustomElementRegistry.getName()")}}
  - : Gibt den Namen für das bereits definierte benutzerdefinierte Element zurück oder `null`, wenn das benutzerdefinierte Element nicht definiert ist.
- {{domxref("CustomElementRegistry.upgrade()")}}
  - : Aktualisiert ein benutzerdefiniertes Element direkt, noch bevor es mit seinem Shadow-Root verbunden ist.
- {{domxref("CustomElementRegistry.whenDefined()")}}
  - : Gibt ein leeres {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn ein benutzerdefiniertes Element mit dem angegebenen Namen definiert wird. Wenn ein solches benutzerdefiniertes Element bereits definiert ist, wird das zurückgegebene Promise sofort erfüllt.

## Beispiele

Siehe den Abschnitt [Beispiele](/de/docs/Web/API/Web_components/Using_custom_elements#examples) in unserem [Leitfaden zur Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
