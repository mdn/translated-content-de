---
title: CustomElementRegistry
slug: Web/API/CustomElementRegistry
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

Das **`CustomElementRegistry`**-Interface bietet Methoden zum Registrieren benutzerdefinierter Elemente und zum Abfragen registrierter Elemente. Um eine Instanz davon zu erhalten, verwenden Sie die [`window.customElements`](/de/docs/Web/API/Window/customElements)-Eigenschaft. Um ein gescoptes Register zu erstellen, verwenden Sie den [`CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry)-Konstruktor.

## Konstruktor

- [`CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry)
  - : Erstellt ein neues `CustomElementRegistry`-Objekt zur gescopten Nutzung.

## Instanzmethoden

- [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define)
  - : Definiert ein neues [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements).
- [`CustomElementRegistry.get()`](/de/docs/Web/API/CustomElementRegistry/get)
  - : Gibt den Konstruktor für das benannte benutzerdefinierte Element zurück, oder {{jsxref("undefined")}}, wenn das benutzerdefinierte Element nicht definiert ist.
- [`CustomElementRegistry.getName()`](/de/docs/Web/API/CustomElementRegistry/getName)
  - : Gibt den Namen für das bereits definierte benutzerdefinierte Element zurück, oder `null`, wenn das benutzerdefinierte Element nicht definiert ist.
- [`CustomElementRegistry.upgrade()`](/de/docs/Web/API/CustomElementRegistry/upgrade)
  - : Aktualisiert ein benutzerdefiniertes Element direkt, auch bevor es mit seiner Schattenwurzel verbunden wird.
- [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize)
  - : Verknüpft ein gescoptes Register mit einem DOM-Teilbaum, legt das benutzerdefinierte Elemente-Register an jedem inklusiven Nachfahren fest und aktualisiert gegebenenfalls benutzerdefinierte Elemente.
- [`CustomElementRegistry.whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined)
  - : Gibt ein leeres {{jsxref("Promise")}} zurück, das sich auflöst, wenn ein benutzerdefiniertes Element mit dem gegebenen Namen definiert wird. Wenn ein solches benutzerdefiniertes Element bereits definiert ist, wird das zurückgegebene Versprechen sofort erfüllt.

## Beispiele

Siehe den Abschnitt [Beispiele](/de/docs/Web/API/Web_components/Using_custom_elements#examples) in unserem [Leitfaden zur Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
