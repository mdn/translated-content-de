---
title: FormData
slug: Web/API/FormData
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Die **`FormData`**-Schnittstelle bietet eine Möglichkeit, ein Set von Schlüssel/Wert-Paaren zu erstellen, die Formularfelder und deren Werte darstellen. Diese können mit den Methoden [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) gesendet werden. Sie verwendet dasselbe Format, das ein Formular verwenden würde, wenn der Codierungstyp auf `"multipart/form-data"` gesetzt wäre.

Sie können es auch direkt an den [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Konstruktor übergeben, wenn Sie Abfrageparameter auf die Weise generieren möchten, wie ein {{HTMLElement("form")}} es tun würde, wenn es eine einfache `GET`-Übermittlung verwenden würde.

Ein Objekt, das `FormData` implementiert, kann direkt in einer {{jsxref("Statements/for...of", "for...of")}}-Struktur verwendet werden, anstelle von [`entries()`](/de/docs/Web/API/FormData/entries): `for (const p of myFormData)` ist äquivalent zu `for (const p of myFormData.entries())`.

## Konstruktor

- [`FormData()`](/de/docs/Web/API/FormData/FormData)
  - : Erstellt ein neues `FormData`-Objekt.

## Instanzmethoden

- [`FormData.append()`](/de/docs/Web/API/FormData/append)
  - : Fügt einem bestehenden Schlüssel innerhalb eines `FormData`-Objekts einen neuen Wert hinzu oder fügt den Schlüssel hinzu, wenn er noch nicht existiert.
- [`FormData.delete()`](/de/docs/Web/API/FormData/delete)
  - : Löscht ein Schlüssel/Wert-Paar aus einem `FormData`-Objekt.
- [`FormData.entries()`](/de/docs/Web/API/FormData/entries)
  - : Gibt einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der durch alle in `FormData` enthaltenen Schlüssel/Wert-Paare iteriert.
- [`FormData.get()`](/de/docs/Web/API/FormData/get)
  - : Gibt den ersten mit einem bestimmten Schlüssel innerhalb eines `FormData`-Objekts verbundenen Wert zurück.
- [`FormData.getAll()`](/de/docs/Web/API/FormData/getAll)
  - : Gibt ein Array aller mit einem bestimmten Schlüssel innerhalb eines `FormData` verbundenen Werte zurück.
- [`FormData.has()`](/de/docs/Web/API/FormData/has)
  - : Gibt zurück, ob ein `FormData`-Objekt einen bestimmten Schlüssel enthält.
- [`FormData.keys()`](/de/docs/Web/API/FormData/keys)
  - : Gibt einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der durch alle Schlüssel der in `FormData` enthaltenen Schlüssel/Wert-Paare iteriert.
- [`FormData.set()`](/de/docs/Web/API/FormData/set)
  - : Setzt einen neuen Wert für einen bestehenden Schlüssel innerhalb eines `FormData`-Objekts oder fügt den Schlüssel/Wert hinzu, wenn er noch nicht existiert.
- [`FormData.values()`](/de/docs/Web/API/FormData/values)
  - : Gibt einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der durch alle in `FormData` enthaltenen Werte iteriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
